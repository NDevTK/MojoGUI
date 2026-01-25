/**
 * MojoObjectRegistry
 * Manages high-level Mojo JS Remotes/Proxies to enable call chaining.
 */
(function (global) {
  "use strict";

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
     * List all registered IDs
     * @returns {Array<string>}
     */
    list() {
      return Array.from(objects.keys());
    },

    /**
     * Checks a value and automatically registers it if it's a Mojo Remote.
     * Returns a reference object {$ref, type} or the original value.
     */
    autoRegister(value, typeNameSuggestion = "Unknown") {
      if (value === null || typeof value !== "object") return value;

      // Special case: BigString / BigString16 decoding
      // If it looks like a BigString struct, decode it
      if (value.hasOwnProperty('data') || value.hasOwnProperty('arg_data')) {
        // We can't be 100% sure it's a BigString without the spec here, 
        // but it's a very common pattern for these "Big" types.
        // Let's try to decode if it's a string-like suggestion or we see bytes
        const data = value.arg_data || value.data;
        const bytes = data ? (data.arg_bytes || data.bytes || (Array.isArray(data) ? data : null)) : null;
        
        if (bytes && (Array.isArray(bytes) || bytes instanceof Uint8Array || bytes instanceof Uint16Array)) {
           // Heuristic: if it's bigstring16, bytes will be roughly 2x length of a typical string?
           // Actually, let's just try decode and see if it looks like ASCII/UTF
           // Better: Use typeNameSuggestion if it contains "String"
           const is16 = typeNameSuggestion.includes("String16");
           return MojoUtils.decodeBigString(value, is16);
        }
      }

      // Detect if this is a Mojo Remote (usually has $ property or bindNewPipeAndPassReceiver)
      // Or if it's a MojoProxy instance
      const isProxy =
        value.interfaceName !== undefined && value.interceptCall !== undefined;
      const isRemote =
        (value.$ && value.proxy) ||
        (value.bindNewPipeAndPassReceiver &&
          typeof value.bindNewPipeAndPassReceiver === "function");

      if (isProxy || isRemote) {
        let typeName = isProxy
          ? value.interfaceName
          : value.$.interfaceName || value.interfaceName;

        if (
          !typeName &&
          value.constructor &&
          value.constructor.$interfaceName
        ) {
          typeName = value.constructor.$interfaceName;
        }

        if (!typeName) typeName = typeNameSuggestion;

        const id = this.register(value, typeName);
        return { $ref: id, type: typeName };
      }

      // Recurse into arrays/objects to find nested remotes
      if (Array.isArray(value)) {
        return value.map((v) => this.autoRegister(v));
      }

      const result = {};
      for (const key in value) {
        result[key] = this.autoRegister(value[key]);
      }
      return result;
    },
  };

  global.MojoObjectRegistry = MojoObjectRegistry;
})(this);
