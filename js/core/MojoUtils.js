/**
 * MojoUtils
 * Core utility functions for object manipulation and serialization.
 */
(function (global) {
    'use strict';

    function safeStringify(value, space) {
        return JSON.stringify(value, (key, val) =>
            typeof val === 'bigint' ? val.toString() + 'n' : val, space);
    }

    function safeParse(json) {
        return JSON.parse(json, (key, value) => {
            if (typeof value === 'string' && /^-?\d+n$/.test(value)) {
                return BigInt(value.slice(0, -1));
            }
            return value;
        });
    }

    /**
     * Recursively removes 'arg_' prefix from keys for display.
     */
    function sanitizeKeys(obj, seen = new WeakSet()) {
        if (obj === null || typeof obj !== 'object') return obj;
        if (seen.has(obj)) return '[Circular]';
        seen.add(obj);

        // Mojo Remote/Handle Detection
        const rawHandle = (typeof MojoProxy !== 'undefined') ? MojoProxy.getRawHandleFromMojoObject(obj) : null;
        if (rawHandle) {
            const guiId = (typeof MojoHandleRegistry !== 'undefined') ? MojoHandleRegistry.register(rawHandle) : 0;
            if (obj.$ && obj.proxy) {
                return {
                    __mojoType: 'Handle',
                    interface: obj.$.interfaceName || (obj.$.proxy && obj.$.proxy.interfaceName) || 'Unknown',
                    interfaceId: guiId,
                    isReceiver: false
                };
            } else {
                return {
                    __mojoType: 'Handle',
                    interface: 'PendingReceiver',
                    interfaceId: guiId,
                    isReceiver: true
                };
            }
        }

        if (Array.isArray(obj)) return obj.map(v => sanitizeKeys(v, seen));

        // Handle TypedArrays (Uint8Array, etc.)
        if (ArrayBuffer.isView(obj) && !(obj instanceof DataView)) {
            return Array.from(obj).map(v => sanitizeKeys(v, seen));
        }

        const clean = {};
        for (const key in obj) {
            let cleanKey = key.startsWith('arg_') ? key.substring(4) : key;
            clean[cleanKey] = sanitizeKeys(obj[key], seen);
        }
        return clean;
    }

    /**
     * Restores 'arg_' prefixes and processes Handle descriptors.
     */
    function reconcileKeys(edited, original, useHeuristics = true) {
        let handleData = edited;
        if (typeof edited === 'string' && edited.startsWith('{"__mojoType":"Handle"')) {
            try { handleData = JSON.parse(edited); } catch (e) { }
        }

        // 1. Resolve Object Registry References ($ref)
        if (handleData && typeof handleData === 'object' && handleData.$ref) {
            const entry = window.MojoObjectRegistry.get(handleData.$ref);
            if (entry && entry.remote) {
                const realHandle = window.MojoProxy.getRawHandleFromMojoObject(entry.remote);
                if (realHandle) {
                    const mockEndpoint = { handle: realHandle, isPrimary: () => true, releasePipe: () => realHandle, unbind: () => mockEndpoint };
                    return {
                        proxy: { endpoint: mockEndpoint, unbind: () => mockEndpoint },
                        unbind: () => mockEndpoint,
                        handle: realHandle,
                        __mojoHandle: realHandle,
                        value: realHandle.value
                    };
                }
            }
            return original;
        }

        if (handleData && typeof handleData === 'object' && handleData.__mojoType === 'Handle') {
            const action = handleData.action || 'preserve';
            if (action === 'preserve') return original;
            if (action === 'close') return null;
            if (action === 'new_pipe') {
                const { handle0, handle1 } = Mojo.createMessagePipe();
                MojoHandleRegistry.register(handle0);
                MojoHandleRegistry.register(handle1);
                const realHandle = handle1;
                const mockEndpoint = { handle: realHandle, isPrimary: () => true, releasePipe: () => realHandle, unbind: () => mockEndpoint };

                // Hybrid object: acts as both Remote/Receiver and Raw Handle
                return {
                    proxy: { endpoint: mockEndpoint, unbind: () => mockEndpoint },
                    unbind: () => mockEndpoint,
                    handle: realHandle,
                    __mojoHandle: realHandle,
                    // Delegate handle methods
                    close: () => realHandle.close(),
                    writeMessage: (...args) => realHandle.writeMessage(...args),
                    readMessage: (...args) => realHandle.readMessage(...args),
                    watch: (...args) => realHandle.watch(...args),
                    // Native value
                    value: realHandle.value
                };
            }
            if (action === 'use_handle') {
                const handleInput = handleData.customHandle;
                let realHandle = null;

                // Support both raw numeric IDs and registry IDs (obj_N)
                if (typeof handleInput === 'string' && handleInput.startsWith('obj_')) {
                    const entry = window.MojoObjectRegistry.get(handleInput);
                    if (entry) realHandle = window.MojoProxy.getRawHandleFromMojoObject(entry.remote);
                } else {
                    realHandle = MojoHandleRegistry.get(parseInt(handleInput, 10));
                }

                if (!realHandle) return null;
                const mockEndpoint = { handle: realHandle, isPrimary: () => true, releasePipe: () => realHandle, unbind: () => mockEndpoint };

                return {
                    proxy: { endpoint: mockEndpoint, unbind: () => mockEndpoint },
                    unbind: () => mockEndpoint,
                    handle: realHandle,
                    __mojoHandle: realHandle,
                    close: () => realHandle.close(),
                    writeMessage: (...args) => realHandle.writeMessage(...args),
                    readMessage: (...args) => realHandle.readMessage(...args),
                    watch: (...args) => realHandle.watch(...args),
                    value: realHandle.value
                };
            }
            return original;
        }

        if (edited === null || typeof edited !== 'object') return edited;
        if (Array.isArray(edited)) {
            return edited.map((v, i) => reconcileKeys(v, Array.isArray(original) ? original[i] : null, useHeuristics));
        }

        const restored = {};
        for (const key in edited) {
            let originalKey = key;
            if (original && original.hasOwnProperty('arg_' + key)) {
                originalKey = 'arg_' + key;
            } else if (original && original.hasOwnProperty(key)) {
                originalKey = key;
            } else if (useHeuristics && !key.startsWith('arg_') && !key.startsWith('$')) {
                originalKey = 'arg_' + key;
            }
            restored[originalKey] = reconcileKeys(edited[key], original && original[originalKey], useHeuristics);
        }
        return restored;
    }

    const MojoUtils = {
        safeStringify,
        safeParse,
        sanitizeKeys,
        reconcileKeys
    };

    global.MojoUtils = MojoUtils;
})(this);