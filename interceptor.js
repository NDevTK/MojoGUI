/**
 * MojoJS Security Research GUI
 * Interceptor & Proxy Logic
 */

(async function (global) {
    'use strict';

    // Automate Version Detection using High Entropy API
    try {
        if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
            console.log('[Interceptor] Fetching high-entropy version data...');
            const ua = await navigator.userAgentData.getHighEntropyValues(['fullVersionList']);
            const chrome = ua.fullVersionList.find(item => item.brand === 'Google Chrome' || item.brand === 'Chromium');
            if (chrome) {
                console.log('[Interceptor] Detected Full Chrome Version:', chrome.version);
                // Set global override for MojoScrambler to pick up
                window.mojoVersion = chrome.version;
            }
        }
    } catch (e) {
        console.warn('[Interceptor] Version detection failed:', e);
    }

    // Polyfill for missing PipeControlMessage in some MojoJS environments
    if (typeof mojo !== 'undefined' && mojo.internal && mojo.internal.interfaceSupport) {
        if (!mojo.internal.interfaceSupport.PipeControlMessage) {
            console.warn('[Interceptor] Polyfilling missing PipeControlMessage for Router compatibility');
            mojo.internal.interfaceSupport.PipeControlMessage = {
                // RUN_OR_CLOSE_PIPE_MESSAGE_ID
                RUN_OR_CLOSE_PIPE_MESSAGE_ID: -2 // 0xFFFFFFFE cast to signed int32
            };
        }

        // MONKEY PATCH: Fix PipeControlMessageHandler crash due to stale closure reference
        if (mojo.internal.interfaceSupport.PipeControlMessageHandler) {
            const OriginalHandler = mojo.internal.interfaceSupport.PipeControlMessageHandler;
            const OriginalProto = OriginalHandler.prototype;

            if (OriginalProto.maybeHandleMessage) {
                console.warn('[Interceptor] Monkey-patching PipeControlMessageHandler.maybeHandleMessage to avoid stale reference crash');
                OriginalProto.maybeHandleMessage = function (message) {
                    // Safely access the Global polyfill, not the closure one
                    const PCM = mojo.internal.interfaceSupport.PipeControlMessage;
                    if (PCM && message && message.header && message.header.type === PCM.RUN_OR_CLOSE_PIPE_MESSAGE_ID) {
                        // If it IS a control message, try to handle it (if the internal method exists)
                        // But usually we can just return false for simple interception scenarios to avoid more crashes
                        // Calling original might crash if it calls other things.
                        // Let's try to call the private handler if we can found it, otherwise verify strictness.
                        try {
                            if (this.handleRunOrClosePipeMessage_) {
                                return this.handleRunOrClosePipeMessage_(message);
                            }
                        } catch (e) { console.warn('Control message handle failed', e); }
                    }
                    return false;
                };
            }
        }

        // Polyfill for InterfaceControlMessage (RUN_MESSAGE_ID)
        if (mojo.internal.interfaceSupport && !mojo.internal.interfaceSupport.InterfaceControlMessage) {
            console.warn('[Interceptor] Polyfilling missing InterfaceControlMessage');
            mojo.internal.interfaceSupport.InterfaceControlMessage = {
                RUN_MESSAGE_ID: 0xFFFFFFFF
            };
        }

        // Monkey-patch ControlMessageHandler to avoid crash if handle is missing
        if (mojo.internal.interfaceSupport.ControlMessageHandler) {
            console.log('[Interceptor] Monkey-patching ControlMessageHandler.maybeHandleControlMessage');
            const originalMaybeHandle = mojo.internal.interfaceSupport.ControlMessageHandler.prototype.maybeHandleControlMessage;
            mojo.internal.interfaceSupport.ControlMessageHandler.prototype.maybeHandleControlMessage = function (message) {
                if (!this.router_ || !this.router_.connector_) {
                    // console.warn('[Interceptor] Skipping control message for disconnected router');
                    return false;
                }
                return originalMaybeHandle.call(this, message);
            };
        }

        // Inspect interfaceSupport
        if (mojo.internal.interfaceSupport) {
            console.log('[Interceptor] mojo.internal.interfaceSupport keys:', Object.keys(mojo.internal.interfaceSupport));

            // Polyfill createResponder if missing
            if (typeof mojo.internal.interfaceSupport.createResponder !== 'function') {
                console.log('[Interceptor] Polyfilling createResponder');
                mojo.internal.interfaceSupport.createResponder = function (endpoint, requestId, responseParamsSpec) {
                    return function (response) {
                        let message;
                        try {
                            // Attempt 1: Use internal Encoder
                            var structSpec = responseParamsSpec.$.structSpec;
                            // console.log('[Interceptor] Polyfill Encoder init', structSpec.packedSize);
                            var encoder = new mojo.internal.Encoder(structSpec.packedSize, 0);

                            // Fix: bindings_lite Encoder might not init data_ in all versions?
                            if (!encoder.data_ && encoder.buffer_) {
                                encoder.data_ = new DataView(encoder.buffer_);
                            }

                            encoder.encodeStructInline(structSpec, response);
                            message = encoder.message_;

                        } catch (e) {
                            console.error('[Interceptor] createResponder Encoder failed, attempting manual fallback:', e);

                            // Attempt 2: Manual Buffer Construction (For Empty Response)
                            // Structure: [Header (24 bytes)] + [Payload (8 bytes)]
                            // Header: size(4), version(4), interface(4), ordinal(4), flags(4), padding(4), requestID(8)
                            // Header v1 is 24 bytes? No, v0 is 24 bytes usually without requestID? 
                            // Check mojo wire format:
                            // v0: 24 bytes. [u32 num_bytes, u32 version, u32 interface_id, u32 ordinal, u32 flags, u32 padding] ? No.
                            // Standard Header: 
                            // 0: u32 num_bytes
                            // 4: u32 version
                            // 8: u32 interface_id
                            // 12: u32 ordinal
                            // 16: u32 flags
                            // 20: u32 padding
                            // 24: u64 request_id (Version 1) -> Total 32 bytes?
                            // Let's assume Version 1 header which allows RequestID.

                            try {
                                const headerSize = 32;
                                const payloadSize = 8; // Empty struct (8 bytes size/ver)
                                const totalSize = headerSize + payloadSize;
                                const buffer = new ArrayBuffer(totalSize);
                                const view = new DataView(buffer);

                                // Header
                                view.setUint32(0, totalSize, true); // num_bytes
                                view.setUint32(4, 1, true);         // version (1 for requestID support)
                                view.setUint32(8, 0, true);         // interface_id (endpoint fixes?)
                                view.setUint32(12, 0, true);        // ordinal (0/unknown)
                                view.setUint32(16, 2, true);        // flags: 2 (IsResponse)
                                view.setUint32(20, 0, true);        // padding

                                // RequestID (u64) - Split into two u32
                                // requestId is likely a BigInt or Number.
                                // If it's BigInt
                                if (typeof requestId === 'bigint') {
                                    view.setBigUint64(24, requestId, true);
                                } else {
                                    // Lo/Hi
                                    view.setUint32(24, Number(requestId) & 0xFFFFFFFF, true);
                                    view.setUint32(28, (Number(requestId) / 0x100000000) >>> 0, true);
                                }

                                // Payload: Empty Struct
                                // Size=8, Version=0
                                view.setUint32(32, 8, true);
                                view.setUint32(36, 0, true);

                                // Create Message wrapper
                                // message = new mojo.internal.Message(buffer, []); // Crashes due to internal validation

                                // Bypassing constructor: return a plain object that satisfies Router.accept
                                message = {
                                    buffer: buffer,
                                    handles: [],
                                    header: {
                                        requestId: requestId,
                                        flags: 2,
                                        ordinal: 0
                                    }
                                };

                            } catch (fallbackErr) {
                                console.error('[Interceptor] Manual fallback failed:', fallbackErr);
                                return;
                            }
                        }

                        if (message) {
                            // Ensure header properties are set (if using encoder path)
                            if (message.header && !message.header.requestId) {
                                message.header.requestId = requestId;
                                message.header.flags = 2;
                            }

                            // If it's our raw object, it already has them.

                            // Try to find the accept method
                            if (typeof endpoint.router_.accept === 'function') {
                                endpoint.router_.accept(message);
                            } else {
                                console.warn('[Interceptor] router_.accept does not exist! Inspecting router:', endpoint.router_);
                                // Log prototype methods
                                let proto = Object.getPrototypeOf(endpoint.router_);
                                console.log('[Interceptor] Router prototype keys:', Object.getOwnPropertyNames(proto));

                                // Try acceptBuffer if it exists (common variant)
                                if (typeof endpoint.router_.acceptBuffer === 'function') {
                                    console.log('[Interceptor] using router_.acceptBuffer');
                                    endpoint.router_.acceptBuffer(message.buffer, message.handles || []);
                                }
                                // Try global test helper
                                else if (mojo.internal.interfaceSupport.acceptBufferForTesting) {
                                    console.log('[Interceptor] using interfaceSupport.acceptBufferForTesting');
                                    // Usually takes (handle, buffer, handles)
                                    mojo.internal.interfaceSupport.acceptBufferForTesting(
                                        endpoint.router_.pipe_ || endpoint.router_.handle_,
                                        message.buffer,
                                        message.handles || []
                                    );
                                } else {
                                    console.error('[Interceptor] Could not find any method to send message on router!');
                                }
                            }
                        }
                    };
                };
            }
        }
        // MONKEY PATCH: Fix ControlMessageHandler crash (RUN_MESSAGE_ID)
        if (mojo.internal.interfaceSupport.ControlMessageHandler) {
            const OriginalHandler = mojo.internal.interfaceSupport.ControlMessageHandler;
            const OriginalProto = OriginalHandler.prototype;
            if (OriginalProto.maybeHandleControlMessage) {
                console.warn('[Interceptor] Monkey-patching ControlMessageHandler.maybeHandleControlMessage');
                OriginalProto.maybeHandleControlMessage = function (message) {
                    const ICM = mojo.internal.interfaceSupport.InterfaceControlMessage;
                    if (ICM && message && message.header && message.header.type === ICM.RUN_MESSAGE_ID) {
                        // Try to handle or return false
                        return false; // Safest to ignore in this fragile env
                    }
                    return false;
                };
            }
        }
        // DEBUG: Check Decoder prototype
        if (mojo.internal && mojo.internal.Decoder) {
            console.log('[Interceptor] mojo.internal.Decoder.prototype:', mojo.internal.Decoder.prototype);
        }

    }

    // ========================================
    // MojoProxy
    // ========================================
    class MojoProxy {
        constructor(interfaceName, realHandle, comps) {
            this.interfaceName = interfaceName;
            this.realHandle = realHandle;
            this.realRemote = null;
            this.eventTarget = new EventTarget();

            // Initialize the real remote using provided components
            if (comps && comps.Remote) {
                try {
                    this.realRemote = new comps.Remote(realHandle);
                } catch (e) {
                    console.error(`[MojoProxy] Error instantiating Remote for ${interfaceName}:`, e);
                }
            } else {
                // Fallback: try finding it again
                const resolved = MojoProxy.getInterfaceComponents(interfaceName);
                if (resolved.Remote) {
                    this.realRemote = new resolved.Remote(realHandle);
                } else {
                    console.error(`[MojoProxy] Could not find Remote class for ${interfaceName}`);
                }
            }

            this.pendingMessages = new Map(); // id -> { resolve, reject, args }
            this.id = Math.random().toString(36).substr(2, 9);

            // Register globally so UI can access it easily via ID
            const registry = global.MojoProxyRegistry || new Map();
            global.MojoProxyRegistry = registry;
            // Ensure distinct global scope access (window vs global)
            if (typeof window !== 'undefined') {
                window.MojoProxyRegistry = registry;
            }
            registry.set(this.id, this);

            // We need to return a proxy that traps all method calls
            return new Proxy(this, {
                get: (target, prop, receiver) => {
                    // unexpected props
                    if (prop in target) return target[prop];

                    // If it's a known method or generally a function call
                    if (typeof prop === 'string' && target.realRemote) {
                        // Check if it's a function on the remote directly
                        if (typeof target.realRemote[prop] === 'function') {
                            return (...args) => target.interceptCall(prop, args);
                        }
                        // Check the handler property ($) which is common in Lite bindings
                        if (target.realRemote.$ && typeof target.realRemote.$[prop] === 'function') {
                            return (...args) => target.interceptCall(prop, args);
                        }
                    }

                    return Reflect.get(target, prop, receiver);
                }
            });
        }

        async interceptCall(methodName, args) {
            const callId = Math.random().toString(36).substr(2, 9);

            // Notify UI
            const event = new CustomEvent('mojo-intercept', {
                detail: {
                    id: callId,
                    interface: this.interfaceName,
                    method: methodName,
                    params: args,
                    timestamp: Date.now(),
                    proxyId: this.id
                }
            });
            window.dispatchEvent(event);

            console.log(`[MojoProxy] Intercepted ${this.interfaceName}.${methodName}`, args);

            // Create a Promise that we will manually resolve later
            // This effectively PAUSES execution here until the UI calls resume
            return new Promise((resolve, reject) => {
                this.pendingMessages.set(callId, {
                    resolve,
                    reject,
                    methodName,
                    originalArgs: args
                });
            });
        }

        resumeCall(callId, modifiedArgs, shouldDrop = false) {
            const pending = this.pendingMessages.get(callId);
            if (!pending) {
                console.warn(`[MojoProxy] No pending call found for ID ${callId}`);
                return;
            }

            this.pendingMessages.delete(callId);
            const { resolve, reject, methodName, originalArgs } = pending;

            if (shouldDrop) {
                console.log(`[MojoProxy] Dropped ${callId}`);
                resolve(undefined);
                return;
            }

            const argsToUse = modifiedArgs || originalArgs;

            // Execute on real implementation
            (async () => {
                const startTime = Date.now();
                try {
                    console.log(`[MojoProxy] Resuming ${callId} with`, argsToUse);
                    console.log(`[MojoProxy] Calling realRemote.${methodName}`);

                    let result = await this.realRemote[methodName](...argsToUse);

                    console.log(`[MojoProxy] realRemote.${methodName} resolved in ${Date.now() - startTime}ms`, result);

                    // Reverted: specific generated bindings logic (GeneratedReceiver) might explicitly expect undefined for void
                    // if (result === undefined) result = {};

                    // Notify UI of response
                    window.dispatchEvent(new CustomEvent('mojo-response', {
                        detail: {
                            id: callId,
                            result: result,
                            timestamp: Date.now()
                        }
                    }));

                    resolve(result);
                    console.log(`[MojoProxy] ${callId} Promise resolved.`);
                } catch (e) {
                    console.error(`[MojoProxy] realRemote.${methodName} FAILED`, e);
                    window.dispatchEvent(new CustomEvent('mojo-error', {
                        detail: {
                            id: callId,
                            error: e.toString(),
                            timestamp: Date.now()
                        }
                    }));
                    reject(e);
                }
            })();
        }

        cleanup() {
            if (global.MojoProxyRegistry) {
                global.MojoProxyRegistry.delete(this.id);
            }
        }


        static getInterfaceComponents(name) {
            const result = {
                Interface: null, // The namespace/spec object or class
                Remote: null,
                Receiver: null,
                isLite: false
            };

            result.Interface = MojoProxy.resolveInterface(name);

            // Attempt to resolve Remote
            if (result.Interface && result.Interface.Remote) {
                result.Remote = result.Interface.Remote;
            } else {
                result.Remote = MojoProxy.resolveInterface(name + "Remote");
                if (result.Remote) result.isLite = true;
            }

            // Attempt to resolve Receiver
            // Standard: Interface.Receiver
            // Lite: usually doesn't have a specific Receiver class, uses mojo.Binding?
            // Or maybe InterfaceReceiver?
            if (result.Interface && result.Interface.Receiver) {
                result.Receiver = result.Interface.Receiver;
            } else {
                result.Receiver = MojoProxy.resolveInterface(name + "Receiver");
                if (!result.Receiver) {
                    result.Receiver = MojoProxy.resolveInterface(name + "Binding");
                }
            }

            return result;
        }

        static create(interfaceName, handle) {
            const comps = MojoProxy.getInterfaceComponents(interfaceName);

            if (!comps.Interface && !comps.Remote) {
                console.error(`[MojoProxy] Interface ${interfaceName} definition not found.`);
                return null;
            }

            // 2. Create a pipe for the *real* implementation
            const pipe = Mojo.createMessagePipe();

            // 3. Create the Proxy object that implements the interface
            const proxyImpl = new MojoProxy(interfaceName, pipe.handle0, comps);

            // 4. Bind the *intercepted* handle `handle` to our Proxy implementation
            try {
                if (comps.Receiver) {
                    const receiver = new comps.Receiver(proxyImpl);
                    receiver.bind(handle);
                } else if (typeof mojo !== 'undefined' && mojo.Binding) {
                    // Fallback to generic mojo.Binding for standard/old bindings
                    const binding = new mojo.Binding(comps.Interface, proxyImpl, handle);
                } else {
                    // Last resort: If we have Lite bindings, we might just be implementing the methods.
                    // But we need to hook it up to the handle.
                    // Lite bindings often use `mojo.internal.interfaceSupport.bind(endpoint, ifaceName, ...)`
                    // OR `new iface.PendingReceiver(handle).handle`?

                    // If we are strictly "Lite", maybe we can't easily creaate a Binding without the helper?
                    // Let's try to assume there's a way.
                    console.warn(`[MojoProxy] No Receiver class found for ${interfaceName}. Trying generic bind.`);
                    if (comps.Interface) {
                        // Some systems allow:
                        // mojo.bindInterface(interfaceName, handle, proxyImpl)? No that's for outgoing.
                        // For incoming: 
                        // We might need to construct a Receiver helper.
                        // For now, let's allow it to fail if we can't find a receiver, 
                        // but "VibrationManager" likely needs a specific handling if it's pure Lite.
                    }

                    // If we can't bind, we can't intercept.
                    // But wait! If we can't bind, we shouldn't have created the proxyImpl either?
                    // Let's return null to fallback to direct connection.
                    throw new Error("No Receiver class found");
                }
            } catch (e) {
                console.error("[MojoProxy] Failed to bind receiver:", e);
                // Cleanup
                pipe.handle0.close();
                pipe.handle1.close();
                return null;
            }

            return {
                proxy: proxyImpl,
                realHandle: pipe.handle1
            };
        }

        static findInterfaceClass(name) {
            // Legacy support if needed, but we used getInterfaceComponents
            return MojoProxy.resolveInterface(name);
        }

        static resolveInterface(name) {
            // ... existing resolveInterface logic ...
            // This is a hacky way to find the class. 
            // In a better version, we would map interface name to class reference explicitly.
            const parts = name.split('.');
            // If it's fully qualified...
            // Otherwise, we search typical namespaces

            // Try to search in window
            // We need a robust way to find the constructor for "BlobRegistry" 
            // which might be blink.mojom.BlobRegistry

            if (global.MojoBindings && global.MojoBindings._indexData) {
                // Determine if 'name' is full or short
                const isFQN = name.includes('.');
                const shortName = isFQN ? name.split('.').pop() : name;

                // Try exact match first
                let iface = global.MojoBindings._indexData.interfaces.find(i => {
                    return (isFQN && i.module + '.' + i.name === name) || (!isFQN && i.name === name);
                });

                // If not found, try relaxed match (if name is short)
                if (!iface && !isFQN) {
                    iface = global.MojoBindings._indexData.interfaces.find(i => i.name === name);
                }

                if (iface) {
                    const moduleParts = iface.module.split('.');
                    let current = window;
                    for (const part of moduleParts) {
                        current = current[part];
                        if (!current) break;
                    }
                    if (current && current[iface.name]) return current[iface.name];
                }
            }

            // Fallback: Try traversing dotted path in global scope
            const fallbackParts = name.split('.');
            let current = global;
            for (const part of fallbackParts) {
                if (!current) break;
                current = current[part];
            }
            return current;
        }
    }



    // ========================================
    // Interceptor Manager
    // ========================================
    const InterceptorManager = {
        interceptors: new Map(), // interfaceName -> MojoInterfaceInterceptor
        activeProxies: [],

        handleRequest(interfaceName, clientHandle) {
            console.log(`[Interceptor] Caught request for ${interfaceName}`);
            try {
                // Create the proxy: Client -> Proxy -> Real
                const proxyData = MojoProxy.create(interfaceName, clientHandle);

                if (proxyData) {
                    // Connect the "Real" side of the proxy to the browser
                    // CRITICAL: Temporarily stop interception to prevent recursion
                    // Mojo.bindInterface triggers a new request which we would catch again!
                    const interceptor = this.interceptors.get(interfaceName);
                    if (interceptor) interceptor.stop();

                    try {
                        Mojo.bindInterface(interfaceName, proxyData.realHandle);
                    } finally {
                        if (interceptor) interceptor.start();
                    }

                    // Keep track of active proxies
                    this.activeProxies.push(proxyData.proxy);
                } else {
                    // Fallback: Connect client directly to browser if proxy creation fails
                    console.warn(`[Interceptor] Proxy creation failed, bypassing for ${interfaceName}`);

                    const interceptor = this.interceptors.get(interfaceName);
                    if (interceptor) interceptor.stop();
                    try {
                        Mojo.bindInterface(interfaceName, clientHandle);
                    } finally {
                        if (interceptor) interceptor.start();
                    }
                }
            } catch (err) {
                console.error(`[Interceptor] Error handling request for ${interfaceName}:`, err);
                // Attempt to fallback
                const interceptor = this.interceptors.get(interfaceName);
                if (interceptor) interceptor.stop();
                try {
                    Mojo.bindInterface(interfaceName, clientHandle);
                } finally {
                    if (interceptor) interceptor.start();
                }
            }
        },

        start(interfaceName) {
            if (this.interceptors.has(interfaceName)) return true;

            if (typeof MojoInterfaceInterceptor === 'undefined') {
                console.error('MojoInterfaceInterceptor not available. usage: --enable-blink-features=MojoJS,MojoJSTest');
                return false;
            }

            try {
                let interceptor;
                let scope = "context";

                // Try "context" scope first (safer for frame-specific interfaces like VibrationManager)
                try {
                    interceptor = new MojoInterfaceInterceptor(interfaceName, "context");
                } catch (contextError) {
                    console.warn(`[Interceptor] 'context' scope failed for ${interfaceName}, trying 'process'...`, contextError);
                    scope = "process";
                    interceptor = new MojoInterfaceInterceptor(interfaceName, "process");
                }

                interceptor.oninterfacerequest = (e) => {
                    // e.handle is the pipe endpoint from the client (renderer)
                    this.handleRequest(interfaceName, e.handle);
                };

                interceptor.start();
                this.interceptors.set(interfaceName, interceptor);
                console.log(`[Interceptor] Started for ${interfaceName} (scope: ${scope})`);
                return true;
            } catch (e) {
                console.error(`[Interceptor] Failed to start for ${interfaceName}:`, e);
                return false;
            }
        },

        stop(interfaceName) {
            const interceptor = this.interceptors.get(interfaceName);
            if (interceptor) {
                interceptor.stop();
                this.interceptors.delete(interfaceName);
                console.log(`[Interceptor] Stopped for ${interfaceName}`);
            }
        },

        toggle(interfaceName) {
            if (this.interceptors.has(interfaceName)) {
                this.stop(interfaceName);
                return false;
            } else {
                return this.start(interfaceName);
            }
        },

        isActive(interfaceName) {
            return this.interceptors.has(interfaceName);
        }
    };

    global.InterceptorManager = InterceptorManager;

})(window);
