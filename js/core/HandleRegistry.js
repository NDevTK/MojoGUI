/**
 * MojoHandleRegistry
 * Manages raw MojoHandle objects and assigns them trackable GUI IDs.
 */
(function (global) {
  "use strict";

  const MojoHandleRegistry = {
    handles: new Map(),
    handleToId: new WeakMap(),
    nextId: 1000,
    onupdate: null,

    /**
     * Register a raw MojoHandle and assign a GUI ID
     * @param {Object} handle - The raw MojoHandle
     * @returns {number|null} The assigned GUI ID
     */
    register(handle) {
      if (!handle || typeof handle !== "object") return null;

      // Extract the raw handle if it's our non-destructive wrapper
      if (handle.nativeHandle) {
        handle = handle.nativeHandle;
      }

      // Check WeakMap first to avoid pollution
      const existingId = this.handleToId.get(handle);
      if (existingId !== undefined) return existingId;

      const id =
        handle.value !== undefined && typeof handle.value === "number"
          ? handle.value
          : this.nextId++;

      this.handleToId.set(handle, id);
      this.handles.set(id, handle);
      if (typeof this.onupdate === "function") this.onupdate(id, handle);
      return id;
    },

    /**
     * Get a registered handle by ID
     * @param {number|string} id - The GUI ID
     * @returns {Object|undefined} The raw handle
     */
    get(id) {
      return this.handles.get(Number(id));
    },

    /**
     * List all registered IDs
     * @returns {Array<number>}
     */
    list() {
      return Array.from(this.handles.keys());
    },
  };

  global.MojoHandleRegistry = MojoHandleRegistry;
})(this);
