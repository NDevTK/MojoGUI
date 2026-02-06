/**
 * MojoLoader
 * Handles dynamic loading of MojoJS binding files.
 */
(function (global) {
  "use strict";

  // Create trusted types policy for script URLs
  let trustedPolicy = null;
  if (typeof window.trustedTypes !== "undefined") {
    try {
      trustedPolicy = window.trustedTypes.createPolicy("mojoBindings", {
        createScriptURL: (input) => {
          if (input.startsWith("bindings/") && !input.includes("..")) {
            return input;
          }
          throw new Error(`Blocked script load: ${input}`);
        },
      });
    } catch (e) {
      console.warn("Could not create trusted types policy:", e);
    }
  }

  const MojoLoader = {
    _loaded: new Set(),
    _interfaces: [], // Cache of available interface metadata
    _indexData: null,
    _loadedModules: {},

    /**
     * Initialize the loader with interface metadata
     * @param {Array} interfaces - List of {name, module, file}
     */
    init(interfaces) {
      this._interfaces = interfaces;
    },

    async loadIndex() {
      if (this._indexData) return this._indexData;
      const response = await fetch("bindings/index.json");
      this._indexData = await response.json();

      // Bolt Optimization: Build lookup maps for O(1) access
      // Reduces loadBinding complexity from O(N) to O(1)
      this._fileByFilename = new Map();
      this._fileBySource = new Map();

      if (this._indexData.files) {
        for (const file of this._indexData.files) {
          this._fileByFilename.set(file.filename, file);
          if (file.source) {
            const normalized = file.source.replace(/\\/g, "/").toLowerCase();
            this._fileBySource.set(normalized, file);
          }
        }
      }

      // Bolt Optimization: Interface lookup maps
      this._interfaceByFQN = new Map();
      this._interfaceByName = new Map();

      if (this._indexData.interfaces) {
        for (const iface of this._indexData.interfaces) {
          const fqn = iface.module + "." + iface.name;
          if (!this._interfaceByFQN.has(fqn)) {
            this._interfaceByFQN.set(fqn, iface);
          }
          // Store first occurrence of short name
          if (!this._interfaceByName.has(iface.name)) {
            this._interfaceByName.set(iface.name, iface);
          }
        }
      }

      return this._indexData;
    },

    /**
     * Find interface metadata by name (FQN or Short Name)
     * @param {string} interfaceName - The interface name
     */
    findInterface(interfaceName) {
      if (this._interfaceByFQN && this._interfaceByFQN.has(interfaceName)) {
        return this._interfaceByFQN.get(interfaceName);
      }
      if (this._interfaceByName && this._interfaceByName.has(interfaceName)) {
        return this._interfaceByName.get(interfaceName);
      }
      // Fuzzy fallback
      if (this._interfaces) {
        // Optimization: these finds are still O(N), but only run if exact match fails
        let iface = this._interfaces.find((i) =>
          i.name.endsWith("." + interfaceName),
        );
        if (!iface) {
          iface = this._interfaces.find((i) =>
            interfaceName.endsWith("." + i.name),
          );
        }
        return iface || null;
      }
      return null;
    },

    async getInterfaces() {
      const data = await this.loadIndex();
      if (data.interfaces && this._interfaces.length === 0) {
        this._interfaces = data.interfaces;
      }
      return data.interfaces;
    },

    async searchInterfaces(query) {
      const interfaces = await this.getInterfaces();
      const q = query.toLowerCase();
      return interfaces.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.module.toLowerCase().includes(q),
      );
    },

    loadBinding(filename) {
      if (this._loadedModules[filename]) {
        return this._loadedModules[filename];
      }

      this._loadedModules[filename] = (async () => {
        // Load index to resolve dependencies
        const data = await this.loadIndex();

        // Optimized lookup using Map
        const fileEntry = this._fileByFilename
          ? this._fileByFilename.get(filename)
          : data.files.find((f) => f.filename === filename);

        if (fileEntry && fileEntry.imports && fileEntry.imports.length > 0) {
          const loadPromises = fileEntry.imports.map(async (importPath) => {
            let importEntry = null;
            const s2 = importPath.replace(/\\/g, "/").toLowerCase();

            // 1. Fast path: Direct match from Map
            if (this._fileBySource) {
              importEntry = this._fileBySource.get(s2);
            }

            // 2. Slow path: Fuzzy match (if no direct match)
            if (!importEntry) {
              importEntry = data.files.find((f) => {
                const s1 = f.source.replace(/\\/g, "/").toLowerCase();
                return (
                  s1 === s2 || s1.endsWith("/" + s2) || s2.endsWith("/" + s1)
                );
              });
            }

            if (importEntry) {
              await this.loadBinding(importEntry.filename);
            } else {
              console.warn(`[MojoLoader] Import not found: ${importPath}`);
            }
          });
          await Promise.all(loadPromises);
        }

        return new Promise((resolve, reject) => {
          const script = document.createElement("script");
          const scriptUrl = `bindings/${filename}`;

          if (trustedPolicy) {
            script.src = trustedPolicy.createScriptURL(scriptUrl);
          } else {
            script.src = scriptUrl;
          }

          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            reject(new Error(`Failed to load binding: ${filename}`));
          };
          document.head.appendChild(script);
        });
      })();

      return this._loadedModules[filename];
    },

    getMetadata() {
      return this._indexData;
    },

    /**
     * Ensure a binding is loaded and its classes are available
     * @param {string} interfaceName - The interface name
     */
    async ensureBinding(interfaceName) {
      // 1. Resolve FQN from metadata first (most reliable)
      // Bolt Optimization: Use Map lookup instead of O(N) scan
      let iface = this.findInterface(interfaceName);

      const fqn = iface ? iface.module + "." + iface.name : interfaceName;

      if (this._loaded.has(fqn)) return fqn;

      // 2. Check global existence using FQN
      if (this.resolveGlobal(fqn)) {
        this._loaded.add(fqn);
        return fqn;
      }

      if (iface && iface.file) {
        try {
          await this.loadBinding(iface.file);
          console.log(`[MojoLoader] Loaded ${iface.file} for ${fqn}`);
          this._loaded.add(fqn);
          return fqn;
        } catch (e) {
          console.error(
            `[MojoLoader] Failed to load binding file ${iface.file}:`,
            e,
          );
          throw e;
        }
      }

      console.warn(`[MojoLoader] Could not find binding for ${interfaceName}`);
      return null;
    },

    /**
     * Scans mojo.internal.bindings to see if a class is already defined
     */
    resolveGlobal(name) {
      // Use ReflectionService for consistent resolution
      if (typeof MojoReflectionService !== "undefined") {
        const parts = name.split(".");
        const leafName = parts.pop();
        const moduleName = parts.join(".");

        if (!moduleName) {
          // Search in all roots for the leaf name
          const roots = [mojo.internal.bindings];
          for (const root of roots) {
            if (root[leafName]) return root[leafName];
            for (const key in root) {
              if (root[key] && root[key][leafName]) return root[key][leafName];
            }
          }
          return null;
        }

        const ns = MojoReflectionService.resolveNamespace(moduleName);
        if (ns && ns[leafName]) return ns[leafName];
      }

      // Fallback to basic search
      if (
        typeof mojo === "undefined" ||
        !mojo.internal ||
        !mojo.internal.bindings
      )
        return null;

      let current = mojo.internal.bindings;
      const parts = name.split(".");
      for (const part of parts) {
        if (current[part]) current = current[part];
        else return null;
      }
      return current;
    },
  };

  global.MojoLoader = MojoLoader;
})(this);
