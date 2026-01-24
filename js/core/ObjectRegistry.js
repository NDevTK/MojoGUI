/**
 * MojoObjectRegistry
 * Manages high-level Mojo JS Remotes/Proxies to enable call chaining.
 */
(function(global) {
    'use strict';

    const objects = new Map(); // Map<string, { remote: Object, type: String }>
    let nextId = 1;

    const MojoObjectRegistry = {
        /**
         * Register a live Mojo Remote/Proxy
         * @param {Object} remote - The JS Remote/Proxy object
         * @param {string} typeName - The fully qualified interface name
         * @returns {string} The assigned object ID (e.g., 'obj_1')
         */
        register(remote, typeName) {
            const id = `obj_${nextId++}`;
            objects.set(id, { remote, type: typeName });
            return id;
        },

        /**
         * Get a registered object entry
         * @param {string} id - The object ID
         * @returns {Object|undefined} { remote, type }
         */
        get(id) {
            return objects.get(id);
        },

        /**
         * Checks a value and automatically registers it if it's a Mojo Remote.
         * Returns a reference object {$ref, type} or the original value.
         */
        autoRegister(value, typeNameSuggestion = 'Unknown') {
            if (value === null || typeof value !== 'object') return value;

            // Detect if this is a Mojo Remote (usually has $ property or bindNewPipeAndPassReceiver)
            // Or if it's a MojoProxy instance
            const isProxy = (value.interfaceName !== undefined && value.interceptCall !== undefined);
            const isRemote = (value.$ && value.proxy) || (value.bindNewPipeAndPassReceiver && typeof value.bindNewPipeAndPassReceiver === 'function');

            if (isProxy || isRemote) {
                let typeName = isProxy ? value.interfaceName : (value.$.interfaceName || value.interfaceName);
                
                if (!typeName && value.constructor && value.constructor.$interfaceName) {
                    typeName = value.constructor.$interfaceName;
                }
                
                if (!typeName) typeName = typeNameSuggestion;

                const id = this.register(value, typeName);
                return { $ref: id, type: typeName };
            }

            // Recurse into arrays/objects to find nested remotes
            if (Array.isArray(value)) {
                return value.map(v => this.autoRegister(v));
            }

            const result = {};
            for (const key in value) {
                result[key] = this.autoRegister(value[key]);
            }
            return result;
        }
    };

    global.MojoObjectRegistry = MojoObjectRegistry;
})(this);
