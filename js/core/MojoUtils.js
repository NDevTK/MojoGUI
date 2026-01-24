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

    /**
     * Inflates a simple object or value into a full Mojo struct based on a spec.
     * e.g. "C:\foo" -> { arg_path: "C:\foo" } for FilePath
     */
    function inflateStruct(value, spec) {
        if (value === null || value === undefined) return value;
        if (!spec) return value;

        // 1. If it's already an object that looks like the struct, just ensure arg_ prefixes
        if (typeof value === 'object' && !Array.isArray(value)) {
            const inflated = {};
            for (const field of spec.fields) {
                let val = value[field.name];
                if (val === undefined && field.name.startsWith('arg_')) {
                    val = value[field.name.substring(4)];
                }
                
                if (val !== undefined) {
                    inflated[field.name] = inflateType(val, field.type.$ || field.type);
                } else if (field.defaultValue !== null) {
                    inflated[field.name] = field.defaultValue;
                } else if (field.nullable) {
                    inflated[field.name] = null;
                }
            }
            return inflated;
        }

        // 2. Heuristic: Single-field structs can be inflated from a single value
        if (spec.fields && spec.fields.length === 1) {
            return { [spec.fields[0].name]: inflateType(value, spec.fields[0].type.$ || spec.fields[0].type) };
        }

        // 3. Special case for FilePath (which has two fields with same name due to EnableIf issues, fixed in generator)
        // But if it still has multiple fields, try to find the best match
        if (spec.name && spec.name.includes('FilePath')) {
            const stringField = spec.fields.find(f => f.type === mojo.internal.String);
            if (stringField) return { [stringField.name]: value };
        }

        return value;
    }

    function inflateType(value, typeInfo) {
        if (!typeInfo) return value;
        if (typeInfo.structSpec) return inflateStruct(value, typeInfo.structSpec);
        if (typeInfo.unionSpec) {
            // For unions, if it's not already a union-wrapped object, we might need a default tag
            if (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 1) {
                return value;
            }
            // Heuristic: wrap in first tag
            const firstTag = Object.keys(typeInfo.unionSpec.fields)[0];
            return { [firstTag]: value };
        }
        if (typeInfo.arraySpec && Array.isArray(value)) {
            return value.map(v => inflateType(v, typeInfo.arraySpec.elementType.$ || typeInfo.arraySpec.elementType));
        }
        return value;
    }

    const MojoUtils = {
        safeStringify,
        safeParse,
        sanitizeKeys,
        reconcileKeys,
        inflateStruct
    };

    global.MojoUtils = MojoUtils;
})(this);