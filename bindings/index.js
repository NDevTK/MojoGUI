// MojoJS Bindings Index
// Auto-generated - Do not edit manually

(function (global) {
  'use strict';

  // Create trusted types policy for script URLs
  let trustedPolicy = null;
  if (typeof window.trustedTypes !== 'undefined') {
    try {
      trustedPolicy = window.trustedTypes.createPolicy('mojoBindings', {
        createScriptURL: (input) => input
      });
    } catch (e) {
      console.warn('Could not create trusted types policy:', e);
    }
  }

  const MojoBindings = {
    _indexData: null,
    _loadedModules: {},

    async loadIndex() {
      if (this._indexData) return this._indexData;
      const response = await fetch('./bindings/index.json');
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
      return interfaces.filter(i =>
        i.name.toLowerCase().includes(q) ||
        i.module.toLowerCase().includes(q)
      );
    },

    async loadBinding(filename) {
      if (this._loadedModules[filename]) {
        return this._loadedModules[filename];
      }

      // Load index to resolve dependencies
      const data = await this.loadIndex();
      const fileEntry = data.files.find(f => f.filename === filename);

      if (fileEntry && fileEntry.imports && fileEntry.imports.length > 0) {
        const loadPromises = fileEntry.imports.map(async (importPath) => {
          // Find the file entry that matches this import source
          // Use suffix matching to handle path discrepancies (e.g. chromium_src/ prefix)
          const importEntry = data.files.find(f => f.source === importPath || f.source.endsWith(importPath) || f.source.endsWith('/' + importPath));
          if (importEntry) {
            await this.loadBinding(importEntry.filename);
          } else {
            console.warn(`[MojoBindings] Import not found in index: ${importPath}`);
          }
        });
        await Promise.all(loadPromises);
      }

      return new Promise((resolve, reject) => {
        this._loadedModules[filename] = true;

        const script = document.createElement('script');
        const scriptUrl = `./bindings/${filename}`;

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
    },

    getMetadata() {
      return this._indexData;
    }
  };

  global.MojoBindings = MojoBindings;
})(typeof window !== 'undefined' ? window : this);
