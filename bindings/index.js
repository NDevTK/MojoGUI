// MojoJS Bindings Index
// Auto-generated - Do not edit manually

(function (global) {
    'use strict';

    const MojoBindings = {
        _indexData: null,
        _loadedModules: {},

        async loadIndex() {
            if (this._indexData) return this._indexData;
            try {
                const response = await fetch('./bindings/index.json');
                this._indexData = await response.json();
            } catch (error) {
                console.warn('Could not load bindings index, using demo data');
                this._indexData = { interfaces: [], files: [] };
            }
            return this._indexData;
        },

        async getInterfaces() {
            const data = await this.loadIndex();
            return data.interfaces || [];
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
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = `./bindings/${filename}`;
                script.onload = () => {
                    this._loadedModules[filename] = true;
                    resolve(true);
                };
                script.onerror = reject;
                document.head.appendChild(script);
            });
        },

        getMetadata() {
            return this._indexData;
        }
    };

    global.MojoBindings = MojoBindings;
})(typeof window !== 'undefined' ? window : this);
