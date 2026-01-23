/**
 * MojoHandleRegistry
 * Manages raw MojoHandle objects and assigns them trackable GUI IDs.
 */
(function(global) {
    'use strict';

    const MojoHandleRegistry = {
        handles: new Map(),
        nextId: 1000, // Start high to avoid confusion with small ordinals
        
        /**
         * Register a raw MojoHandle and assign a GUI ID
         * @param {Object} handle - The raw MojoHandle
         * @returns {number|null} The assigned GUI ID
         */
        register(handle) {
            if (!handle || typeof handle !== 'object') return null;
            
            // If it already has our GUI ID, just return it
            if (handle.__mojoGuiId !== undefined) return handle.__mojoGuiId;

            // Use native .value if available (including 0), otherwise assign our own
            // Some Mojo versions use .value, others are just objects with methods.
            const id = (handle.value !== undefined && typeof handle.value === 'number') ? handle.value : this.nextId++;
            handle.__mojoGuiId = id;
            
            this.handles.set(id, handle);
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
        }
    };

    global.MojoHandleRegistry = MojoHandleRegistry;
})(this);
