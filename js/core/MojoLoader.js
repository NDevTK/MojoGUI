/**
 * MojoLoader
 * Handles dynamic loading of MojoJS binding files.
 */
(function (global) {
  "use strict";

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
      return this._indexData;
    },

    async getInterfaces() {
      const data = await this.loadIndex();
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
        const fileEntry = data.files.find((f) => f.filename === filename);

        if (fileEntry && fileEntry.imports && fileEntry.imports.length > 0) {
          const loadPromises = fileEntry.imports.map(async (importPath) => {
            // Find the file entry that matches this import source
            const importEntry = data.files.find((f) => {
              const s1 = f.source.replace(/\\/g, "/").toLowerCase();
              const s2 = importPath.replace(/\\/g, "/").toLowerCase();
              return (
                s1 === s2 || s1.endsWith("/" + s2) || s2.endsWith("/" + s1)
              );
            });
            if (importEntry) {
              console.log(
                `[MojoLoader] Dependency: ${importPath} -> ${importEntry.filename}`,
              );
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

          // Simplified script injection - Trusted Types policy creation moved to init or ignored for now as it was local
          script.src = scriptUrl;

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
      let iface = this._interfaces.find(
        (i) =>
          i.name === interfaceName || i.module + "." + i.name === interfaceName,
      );

      // Fuzzy match fallback
      if (!iface) {
        iface = this._interfaces.find((i) =>
          i.name.endsWith("." + interfaceName),
        );
      }
      if (!iface) {
        iface = this._interfaces.find((i) =>
          interfaceName.endsWith("." + i.name),
        );
      }

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
