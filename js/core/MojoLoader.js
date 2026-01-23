/**
 * MojoLoader
 * Handles dynamic loading of MojoJS binding files.
 */
(function(global) {
    'use strict';

    const MojoLoader = {
        _loaded: new Set(),
        _interfaces: [], // Cache of available interface metadata

        /**
         * Initialize the loader with interface metadata
         * @param {Array} interfaces - List of {name, module, file}
         */
        init(interfaces) {
            this._interfaces = interfaces;
        },

        /**
         * Ensure a binding is loaded and its classes are available
         * @param {string} interfaceName - The interface name
         */
        async ensureBinding(interfaceName) {
            // 1. Resolve FQN from metadata first (most reliable)
            let iface = this._interfaces.find(i => i.name === interfaceName || (i.module + '.' + i.name === interfaceName));
            
            // Fuzzy match fallback
            if (!iface) {
                iface = this._interfaces.find(i => i.name.endsWith('.' + interfaceName));
            }
            if (!iface) {
                iface = this._interfaces.find(i => interfaceName.endsWith('.' + i.name));
            }

            const fqn = iface ? (iface.module + '.' + iface.name) : interfaceName;

            if (this._loaded.has(fqn)) return fqn;

            // 2. Check global existence using FQN
            if (this.resolveGlobal(fqn)) {
                this._loaded.add(fqn);
                return fqn;
            }

            if (iface && iface.file && typeof MojoBindings !== 'undefined') {
                try {
                    await MojoBindings.loadBinding(iface.file);
                    console.log(`[MojoLoader] Loaded ${iface.file} for ${fqn}`);
                    this._loaded.add(fqn);
                    return fqn;
                } catch (e) {
                    console.error(`[MojoLoader] Failed to load binding file ${iface.file}:`, e);
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
            if (typeof mojo === 'undefined' || !mojo.internal || !mojo.internal.bindings) return null;
            
            let current = mojo.internal.bindings;
            const parts = name.split('.');
            for (const part of parts) {
                if (current[part]) current = current[part];
                else {
                    // Try case-insensitive or partial match if needed?
                    // For now, stick to exact parts.
                    return null;
                }
            }
            return current;
        }
    };

    global.MojoLoader = MojoLoader;
})(this);
