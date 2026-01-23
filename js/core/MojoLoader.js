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
            if (this._loaded.has(interfaceName)) return true;

            // 1. Check if already resolved via global scan
            if (this.resolveGlobal(interfaceName)) {
                this._loaded.add(interfaceName);
                return true;
            }

            // 2. Find metadata
            let iface = this._interfaces.find(i => i.name === interfaceName);
            if (!iface) {
                // Suffix match (e.g. 'FileSystemManager' -> 'blink.mojom.FileSystemManager')
                iface = this._interfaces.find(i => i.name.endsWith('.' + interfaceName));
            }
            if (!iface) {
                // Prefix match
                iface = this._interfaces.find(i => interfaceName.endsWith('.' + i.name));
            }

            if (iface && iface.file && typeof MojoBindings !== 'undefined') {
                try {
                    await MojoBindings.loadBinding(iface.file);
                    console.log(`[MojoLoader] Loaded ${iface.file} for ${interfaceName}`);
                    this._loaded.add(interfaceName);
                    return true;
                } catch (e) {
                    console.error(`[MojoLoader] Failed to load binding file ${iface.file}:`, e);
                    throw e;
                }
            }

            console.warn(`[MojoLoader] Could not find binding for ${interfaceName}`);
            return false;
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
