/**
 * MojoJS Security Research GUI
 * Interceptor & Proxy Logic
 */

(function (global) {
    'use strict';

    // Polyfill for missing PipeControlMessage in some MojoJS environments
    if (typeof mojo !== 'undefined' && mojo.internal && mojo.internal.interfaceSupport) {
        if (!mojo.internal.interfaceSupport.PipeControlMessage) {
            console.warn('[Interceptor] Polyfilling missing PipeControlMessage for Router compatibility');
            mojo.internal.interfaceSupport.PipeControlMessage = {
                // RUN_OR_CLOSE_PIPE_MESSAGE_ID
                RUN_OR_CLOSE_PIPE_MESSAGE_ID: -2 // 0xFFFFFFFE cast to signed int32
            };
        }
    }

    // ========================================
    // MojoProxy
    // ========================================
    class MojoProxy {
        constructor(interfaceName, remote, receiver) {
            this.interfaceName = interfaceName;
            this.realRemote = remote;
            this.receiver = receiver;
            this.pendingMessages = new Map(); // id -> { resolve, reject, args }
            this.id = Math.random().toString(36).substr(2, 9);

            // Register globally so UI can access it easily via ID
            if (!global.MojoProxyRegistry) {
                global.MojoProxyRegistry = new Map();
            }
            global.MojoProxyRegistry.set(this.id, this);
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
            const proxyImpl = new MojoProxyImpl(interfaceName, pipe.handle0, comps);

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

    class MojoProxyImpl {
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

            // We need to return a proxy that traps all method calls
            return new Proxy(this, {
                get: (target, prop, receiver) => {
                    // unexpected props
                    if (prop in target) return target[prop];

                    // If it's a known method or generally a function call
                    if (typeof prop === 'string' && target.realRemote) {
                        // Check if it's a function on the remote
                        if (typeof target.realRemote[prop] === 'function') {
                            return (...args) => target.interceptCall(prop, args);
                        }
                        // Or if legacy bindings, it might be heavily prototyped. 
                        // Assume any string prop that isn't on target is a method?
                        // Safer to check remote.
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
                // To "drop", we can either never resolve (hanging the caller) 
                // or reject with a specific error, or resolve with null (if void).
                // Hanging might be bad for resource usage but is "true" drop.
                // Safest for stability is usually to return typical void/default.
                console.log(`[MojoProxy] Dropped ${callId}`);
                // Let's resolve with undefined; hopefully caller handles void
                resolve(undefined);
                return;
            }

            const argsToUse = modifiedArgs || originalArgs;

            // Execute on real implementation
            (async () => {
                try {
                    console.log(`[MojoProxy] Resuming ${callId} with`, argsToUse);
                    const result = await this.realRemote[methodName](...argsToUse);

                    // Notify UI of response
                    window.dispatchEvent(new CustomEvent('mojo-response', {
                        detail: {
                            id: callId,
                            result: result,
                            timestamp: Date.now()
                        }
                    }));

                    resolve(result);
                } catch (err) {
                    window.dispatchEvent(new CustomEvent('mojo-error', {
                        detail: {
                            id: callId,
                            error: err.toString(),
                            timestamp: Date.now()
                        }
                    }));
                    reject(err);
                }
            })();
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
                    // Mojo.bindInterface requests the interface from the browser
                    Mojo.bindInterface(interfaceName, proxyData.realHandle);

                    // Keep track of active proxies
                    this.activeProxies.push(proxyData.proxy);
                } else {
                    // Fallback: Connect client directly to browser if proxy creation fails
                    console.warn(`[Interceptor] Proxy creation failed, bypassing for ${interfaceName}`);
                    Mojo.bindInterface(interfaceName, clientHandle);
                }
            } catch (err) {
                console.error(`[Interceptor] Error handling request for ${interfaceName}:`, err);
                // Attempt to fallback
                Mojo.bindInterface(interfaceName, clientHandle);
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
