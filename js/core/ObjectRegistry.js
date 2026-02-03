/**
 * MojoObjectRegistry
 * Manages high-level Mojo JS Remotes/Proxies to enable call chaining.
 */
(function (global) {
  "use strict";

  const objects = new Map(); // Map<string, { remote: Object, type: String }>
  const pinnedObjects = new Set(); // Set of pinned object IDs that should not be garbage collected
  let nextId = 1;
  let onupdate = null;

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
      if (typeof MojoObjectRegistry.onupdate === "function")
        MojoObjectRegistry.onupdate(id, { remote, type: typeName });
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
     * Pin an object to prevent it from being garbage collected.
     * Pinned objects are kept alive until explicitly unpinned.
     * @param {string} id - The object ID to pin
     * @returns {boolean} True if successfully pinned
     */
    pin(id) {
      if (!objects.has(id)) {
        console.warn(`[MojoObjectRegistry] Cannot pin ${id}: not found`);
        return false;
      }
      pinnedObjects.add(id);
      console.log(`[MojoObjectRegistry] Pinned ${id}`);
      return true;
    },

    /**
     * Unpin a previously pinned object.
     * @param {string} id - The object ID to unpin
     * @returns {boolean} True if successfully unpinned
     */
    unpin(id) {
      const result = pinnedObjects.delete(id);
      if (result) {
        console.log(`[MojoObjectRegistry] Unpinned ${id}`);
      }
      return result;
    },

    /**
     * Check if an object is pinned.
     * @param {string} id - The object ID to check
     * @returns {boolean} True if pinned
     */
    isPinned(id) {
      return pinnedObjects.has(id);
    },

    /**
     * List all pinned object IDs.
     * @returns {Array<string>}
     */
    listPinned() {
      return Array.from(pinnedObjects);
    },

    /**
     * Checks a value and automatically registers it if it's a Mojo Remote.
     * Returns a reference object {$ref, type} or the original value.
     */
    autoRegister(value, typeNameSuggestion = "Unknown") {
      if (value === null || typeof value !== "object") return value;

      // Special case: BigString / BigString16 decoding
      // If it looks like a BigString struct, decode it
      if (value.hasOwnProperty("data") || value.hasOwnProperty("arg_data")) {
        // We can't be 100% sure it's a BigString without the spec here,
        // but it's a very common pattern for these "Big" types.
        // Let's try to decode if it's a string-like suggestion or we see bytes
        const data = value.arg_data || value.data;
        const bytes = data
          ? data.arg_bytes || data.bytes || (Array.isArray(data) ? data : null)
          : null;

        if (
          bytes &&
          (Array.isArray(bytes) ||
            bytes instanceof Uint8Array ||
            bytes instanceof Uint16Array)
        ) {
          // Heuristic: if it's bigstring16, bytes will be roughly 2x length of a typical string?
          // Actually, let's just try decode and see if it looks like ASCII/UTF
          // Better: Use typeNameSuggestion if it contains "String"
          const is16 = typeNameSuggestion.toLowerCase().includes("string16");
          return MojoUtils.decodeBigString(value, is16);
        }
      }

      // Detect if this is a Mojo Remote (usually has $ property or bindNewPipeAndPassReceiver)
      // Or if it's a MojoProxy instance, or a Mojo Endpoint (for associated interfaces)
      const isProxy =
        value.interfaceName !== undefined && value.interceptCall !== undefined;
      const isRemote =
        (value.$ && value.proxy) ||
        (value.bindNewPipeAndPassReceiver &&
          typeof value.bindNewPipeAndPassReceiver === "function");
      const isEndpoint = !!(
        value.router_ ||
        value.router ||
        value.endpoint_ ||
        value.endpoint
      );

      if (isProxy || isRemote || isEndpoint) {
        let typeName = isProxy
          ? value.interfaceName
          : value.$
            ? value.$.interfaceName || value.interfaceName
            : value.interfaceName || "Unknown";

        if (
          !typeName &&
          value.constructor &&
          value.constructor.$interfaceName
        ) {
          typeName = value.constructor.$interfaceName;
        }
        if (!typeName || typeName === "Unknown") typeName = typeNameSuggestion;

        // Ensure it's proxied for visibility in traffic log
        if (
          global.MojoProxy &&
          !isProxy &&
          typeName &&
          typeName !== "Unknown"
        ) {
          const genericTypes = [
            "any",
            "mojo_handle",
            "pending_remote",
            "pending_receiver",
            "pending_associated_remote",
            "pending_associated_receiver",
          ];
          if (!genericTypes.includes(typeName)) {
            const comps = global.MojoProxy.getInterfaceComponents(typeName);
            if (comps && comps.Remote) {
              try {
                // Wrap securely - MojoProxy constructor now handles Remote instances and Endpoints!
                value = new global.MojoProxy(typeName, value, comps);
              } catch (e) {
                console.warn(
                  `[ObjectRegistry] Failed to wrap ${typeName} in MojoProxy:`,
                  e,
                );
              }
            }
          }
        }

        const id = this.register(value, typeName);
        return { $ref: id, type: typeName };
      }

      // Do not recurse into Mojo internals (like Routers) that aren't Endpoints/Remotes
      // We return the value as-is to avoid breaking Mojo's internal state
      if (
        value.connector_ ||
        value.messageReceiver_ ||
        value.handle_ ||
        value.pipe_
      ) {
        return value;
      }

      // Detect if it's a raw handle (MojoHandle) and we have a specific interface name
      if (
        value.writeMessage &&
        typeof value.writeMessage === "function" &&
        typeNameSuggestion !== "Unknown"
      ) {
        const genericTypes = [
          "any",
          "mojo_handle",
          "pending_remote",
          "pending_receiver",
          "pending_associated_remote",
          "pending_associated_receiver",
        ];
        if (!genericTypes.includes(typeNameSuggestion)) {
          // It's a specific interface! Wrap it in a Proxy if possible.
          if (global.MojoProxy) {
            const comps =
              global.MojoProxy.getInterfaceComponents(typeNameSuggestion);
            if (comps && comps.Remote) {
              try {
                const proxy = new global.MojoProxy(
                  typeNameSuggestion,
                  value,
                  comps,
                );
                // Registering is handled by MojoProxy constructor, but we return the ref
                return { $ref: proxy.id, type: typeNameSuggestion };
              } catch (e) {
                console.warn(
                  `[ObjectRegistry] Failed to wrap handle in MojoProxy for ${typeNameSuggestion}:`,
                  e,
                );
              }
            }
          }
        }
      }

      // Recurse into arrays/objects to find nested remotes
      if (Array.isArray(value)) {
        return value.map((v) => this.autoRegister(v));
      }

      // Only recurse into plain objects to avoid touching internal state of complex objects
      const isPlainObject = value.constructor === Object || !value.constructor;
      if (!isPlainObject) return value;

      const result = {};
      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          result[key] = this.autoRegister(value[key]);
        }
      }
      return result;
    },

    get onupdate() {
      return onupdate;
    },
    set onupdate(val) {
      onupdate = val;
    },
  };

  global.MojoObjectRegistry = MojoObjectRegistry;
})(this);
