/**
 * MojoJS Security Research GUI
 * Interceptor & Proxy Logic
 */

(function (global) {
    'use strict';

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


        static create(interfaceName, handle) {
            // 1. Get the interface definition
            // We utilize the global MojoBindings map populated by app.js/bindings loader
            // or we try to find it in the global scope if loaded.
            const ifaceClass = MojoProxy.findInterfaceClass(interfaceName);

            if (!ifaceClass) {
                console.error(`[MojoProxy] Interface ${interfaceName} definition not found.`);
                return null;
            }

            // 2. Create a pipe for the *real* implementation
            // We will forward intercepted messages to this pipe
            const pipe = Mojo.createMessagePipe();

            // 3. Create the Proxy object that implements the interface
            const proxyImpl = new MojoProxyImpl(interfaceName, pipe.handle0);

            // 4. Bind the *intercepted* handle (from the client) to our Proxy implementation
            // So when client calls remote.foo(), it hits our receiver
            const receiver = new ifaceClass(proxyImpl);
            receiver.bind(handle);

            // 5. Return the handle to the *real* implementation 
            // The Interceptor callback expects us to return a handle that it will 
            // pass on to the real implementation (or we use it to connect manually)
            // Correction: MojoInterfaceInterceptor scope: "process"
            // The callback receives the handle *from* the client.
            // We usually return nothing, but we need to ensure the connection continues.
            // BUT: MojoInterfaceInterceptor usage is:
            // interceptor.oninterfacerequest = (e) => { e.handle ... }
            // The 'e.handle' is the receiver endpoint from the client.
            // We must bind 'e.handle' to our proxy.
            // Then we must connect our proxy's output to the real implementation.

            return {
                proxy: proxyImpl,
                realHandle: pipe.handle1
            };
        }

        static findInterfaceClass(name) {
            // Search in global scope or loaded modules
            // This is a simplification; in a real scenario we'd track loaded modules better
            // We assume the binding is already loaded by app.js

            // Try to find it in the namespace
            // Implementation specific: depends on how bindings are generated (lite vs full)
            // For bindings_lite: global.blink.mojom.BlobRegistry

            // We can iterate over known namespaces
            const namespaces = [window, window.blink?.mojom, window.content?.mojom, window.mojo];

            // Helper to recursively search? Or just use the flat list from app.js if available
            // Let's rely on app.state.interfaces for module info if possible, 
            // but we need the actual CLASS constructor.

            // For now, let's assume it's available globally via recursive search or known path
            return MojoProxy.resolveInterface(name);
        }

        static resolveInterface(name) {
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

                const iface = global.MojoBindings._indexData.interfaces.find(i => {
                    if (isFQN) {
                        return i.name === shortName && (i.module + '.' + i.name === name);
                    }
                    return i.name === name;
                });

                if (iface) {
                    const moduleParts = iface.module.split('.');
                    let current = window;
                    for (const part of moduleParts) {
                        current = current[part];
                        if (!current) break;
                    }
                    if (current && current[iface.name]) return current[iface.name]; // Use iface.name which is short
                }
            }

            return null;
        }
    }

    class MojoProxyImpl {
        constructor(interfaceName, realHandle) {
            this.interfaceName = interfaceName;
            this.realHandle = realHandle;
            this.realRemote = null; // Will be initialized lazily or immediately
            this.eventTarget = new EventTarget();

            // Initialize the real remote
            const ifaceClass = MojoProxy.findInterfaceClass(interfaceName);
            if (ifaceClass) {
                this.realRemote = new ifaceClass.Remote(realHandle);
            }

            // We need to return a proxy that traps all method calls
            return new Proxy(this, {
                get: (target, prop, receiver) => {
                    // unexpected props
                    if (prop in target) return target[prop];

                    // If it's a known method in the interface, we intercept it
                    // The bindings_lite classes usually put methods on the prototype
                    // We can check if `ifaceClass.prototype` has it, or just assume calls are methods

                    if (typeof prop === 'string' && target.realRemote && typeof target.realRemote[prop] === 'function') {
                        return (...args) => target.interceptCall(prop, args);
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

        start(interfaceName) {
            if (this.interceptors.has(interfaceName)) return;

            if (typeof MojoInterfaceInterceptor === 'undefined') {
                console.error('MojoInterfaceInterceptor not available. usage: --enable-blink-features=MojoJS,MojoJSTest');
                return;
            }

            try {
                const interceptor = new MojoInterfaceInterceptor(interfaceName, "process");

                interceptor.oninterfacerequest = (e) => {
                    console.log(`[Interceptor] Caught request for ${interfaceName}`);

                    // Prevent infinite loops: Stop interceptor while we connect to real impl
                    interceptor.stop();

                    try {
                        // Create proxy logic
                        // 1. e.handle is the client's handle (receiver)
                        // 2. We create a proxy that binds to e.handle
                        // 3. We create a connection to the REAL implementation

                        const proxyData = MojoProxy.create(interfaceName, e.handle);

                        if (proxyData) {
                            // Find the interface class to get the Remote definition for strict typing if needed
                            // But mostly we just need to pass the handle to the real implementation

                            // Re-bind to the expected name for the real implementation
                            // We need to use Mojo.bindInterface to connect our "realHandle" to the browser
                            Mojo.bindInterface(interfaceName, proxyData.realHandle);

                            this.activeProxies.push(proxyData.proxy);
                        } else {
                            // Fallback if proxy creation failed: just pass handle through
                            Mojo.bindInterface(interfaceName, e.handle);
                        }
                    } catch (err) {
                        console.error('[Interceptor] Error during proxy setup:', err);
                        // Try to recover connection
                        Mojo.bindInterface(interfaceName, e.handle);
                    } finally {
                        // Restart interceptor for next request
                        interceptor.start();
                    }
                };

                interceptor.start();
                this.interceptors.set(interfaceName, interceptor);
                console.log(`[Interceptor] Started for ${interfaceName}`);
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
