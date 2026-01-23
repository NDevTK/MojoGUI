/**
 * MojoJS Security Research GUI
 * Interceptor & Proxy Logic
 * 
 * Per-interface ordinal scrambling is now handled at build time via BUILD.gn analysis.
 * This file contains only the core interception logic.
 */

(async function (global) {
    'use strict';

    // ========================================
    // GLOBAL SETTINGS
    // ========================================
    window.mojoNoScramble = window.mojoNoScramble || false;

    // ========================================
    // MojoHandleRegistry (Global)
    // ========================================
    // Now provided by js/core/HandleRegistry.js
    const MojoHandleRegistry = global.MojoHandleRegistry;

    // ========================================
    // MojoProxy
    // ========================================
    class MojoProxy {
        constructor(interfaceName, handleOrEndpoint, comps) {
            // Register handle if it's a raw handle, or just assign a GUI ID if it's an endpoint
            if (handleOrEndpoint) {
                MojoHandleRegistry.register(handleOrEndpoint);
            }
            
            this.interfaceName = interfaceName;
            this.realHandle = handleOrEndpoint;
            this.realRemote = null;
            this.activeBridges = new Set();
            this.pendingMessages = new Map();
            this.id = window.MojoObjectRegistry.register(this, interfaceName);

            return new Proxy(this, {
                get: (target, prop, receiver) => {
                    if (prop in target) return target[prop];
                    if (typeof prop === 'string' && target.realRemote) {
                        const call = target.realRemote[prop] || (target.realRemote.$ && target.realRemote.$[prop]);
                        if (typeof call === 'function') return (...args) => target.interceptCall(prop, args);
                    }
                    return Reflect.get(target, prop, receiver);
                }
            });
        }

        static getRawHandleFromMojoObject(obj) {
            if (!obj) return null;

            // 1. Check for our new explicit handle property (from generator or manual wrap)
            if (obj.__mojoHandle) {
                MojoHandleRegistry.register(obj.__mojoHandle);
                return obj.__mojoHandle;
            }

            // 2. Check if it's already a raw MojoHandle
            if (obj.writeMessage && typeof obj.writeMessage === 'function') {
                MojoHandleRegistry.register(obj);
                return obj;
            }

            const getFromRouter = (r) => {
                if (!r) return null;
                // Handle various router property names across versions
                return r.pipe_ || r.pipe ||
                       (r.connector_ ? r.connector_.handle_ : null) || 
                       (r.reader_ ? r.reader_.handle_ : null) ||
                       r.handle_ || r.handle;
            };

            // 3. Direct router (Standard Proxy/Binding)
            let pipe = getFromRouter(obj.router_) || getFromRouter(obj.router);
            if (pipe) { MojoHandleRegistry.register(pipe); return pipe; }

            // 4. Endpoint (Lite Remotes/Receivers)
            if (obj.endpoint_ || obj.endpoint) {
                const ep = obj.endpoint_ || obj.endpoint;
                pipe = getFromRouter(ep.router_) || getFromRouter(ep.router) || ep.handle;
                if (pipe) { MojoHandleRegistry.register(pipe); return pipe; }
            }

            // 5. Receiver wrapper
            if (obj.handle) {
                if (obj.handle.writeMessage) {
                    MojoHandleRegistry.register(obj.handle);
                    return obj.handle;
                }
                // obj.handle might be an Endpoint
                pipe = getFromRouter(obj.handle.router_ || obj.handle.router);
                if (pipe) { MojoHandleRegistry.register(pipe); return pipe; }
            }

            // 6. Lite Binding Internal State ($ property)
            if (obj.$) {
                const meta = obj.$;
                // Check if CallHandler has the handle directly
                if (meta.__mojoHandle) {
                    MojoHandleRegistry.register(meta.__mojoHandle);
                    return meta.__mojoHandle;
                }
                // Check InterfaceRemoteBaseWrapper -> InterfaceRemoteBase -> Endpoint
                const remote = meta.remote_ || meta.proxy;
                const endpoint = (remote ? (remote.endpoint_ || remote.endpoint) : null) || meta.endpoint || meta.endpoint_;
                const router = (endpoint ? (endpoint.router_ || endpoint.router) : null) || meta.router_ || meta.router;
                
                pipe = getFromRouter(router);
                if (pipe) { MojoHandleRegistry.register(pipe); return pipe; }
            }

            // 7. Unwrap if it's already one of our GUI wrappers
            if (obj.realRemote) return MojoProxy.getRawHandleFromMojoObject(obj.realRemote);
            if (obj.realHandle) return obj.realHandle;

            // 8. Nested Proxy
            if (obj.proxy) return MojoProxy.getRawHandleFromMojoObject(obj.proxy);
            
            return null;
        }

        onError(err) {
            console.warn(`[MojoProxy] Connection Error on ${this.interfaceName}:`, err);
            // Clean up active bridges or pending messages if needed?
            this.activeBridges.forEach(router => {
                try { router.close(); } catch (e) { }
            });
            this.activeBridges.clear();
        }

        onConnectionError(err) {
            this.onError(err);
        }

        bridgeHandle(rawHandle, label) {
            MojoHandleRegistry.register(rawHandle);
            const { handle0, handle1 } = Mojo.createMessagePipe();
            MojoHandleRegistry.register(handle0);
            MojoHandleRegistry.register(handle1);
            const routerOriginal = new mojo.internal.interfaceSupport.Router(rawHandle);
            const routerLocal = new mojo.internal.interfaceSupport.Router(handle0);

            this.activeBridges.add(routerOriginal);
            this.activeBridges.add(routerLocal);

            const cleanup = () => {
                this.activeBridges.delete(routerOriginal);
                this.activeBridges.delete(routerLocal);
                try { routerOriginal.close(); } catch (e) { }
                try { routerLocal.close(); } catch (e) { }
            };

            routerOriginal.close = cleanup;
            routerLocal.close = cleanup;

            routerOriginal.onMessageReceived_ = (buffer, handles) => {
                routerLocal.send({ buffer, handles });
            };

            routerLocal.onMessageReceived_ = (buffer, handles) => {
                routerOriginal.send({ buffer, handles });
            };

            return handle1;
        }

        processArgs(args) {
            if (!args) return args;
            return args.map((arg, idx) => {
                if (!arg || typeof arg !== 'object') return arg;
                const isMojo = (typeof arg.unbind === 'function') || (arg.proxy && typeof arg.proxy.unbind === 'function');
                if (!isMojo) return arg;
                try {
                    let h = arg.proxy ? arg.proxy.unbind() : arg.unbind();
                    if (!h) return arg;
                    let rawHandle = h.releasePipe ? h.releasePipe() : (h.handle !== undefined ? h.handle : (MojoProxy.getRawHandleFromMojoObject(h) || h));
                    if (rawHandle && rawHandle.writeMessage) {
                        const bridgedHandle = this.bridgeHandle(rawHandle, `Arg${idx}`);
                        const mockEndpoint = { releasePipe: () => bridgedHandle, handle: bridgedHandle };
                        const mockRemote = { unbind: () => mockEndpoint, proxy: { unbind: () => mockEndpoint } };
                        mockRemote.proxy.proxy = mockRemote.proxy;
                        return mockRemote;
                    }
                } catch (e) { }
                return arg;
            });
        }

        async interceptCall(methodName, args) {
            const callId = Math.random().toString(36).substr(2, 9);
            const mode = global.InterceptorManager ? global.InterceptorManager.getMode(this.interfaceName) : 'INTERCEPT';
            console.log(`[MojoProxy] Intercepted ${this.interfaceName}.${methodName} (Mode: ${mode})`);

            window.dispatchEvent(new CustomEvent('mojo-intercept', {
                detail: { id: callId, interface: this.interfaceName, method: methodName, params: args, timestamp: Date.now(), proxyId: this.id, mode: mode }
            }));

            if (mode === 'LOG') {
                try {
                    const bridgedArgs = this.processArgs(args);
                    const result = await this.realRemote[methodName](...bridgedArgs);
                    
                    // Auto-register any returned handles/proxies
                    const finalResult = global.MojoObjectRegistry ? global.MojoObjectRegistry.autoRegister(result) : result;
                    
                    window.dispatchEvent(new CustomEvent('mojo-response', { detail: { id: callId, result: finalResult, timestamp: Date.now() } }));
                    return result;
                } catch (e) {
                    window.dispatchEvent(new CustomEvent('mojo-error', { detail: { id: callId, error: e.toString(), timestamp: Date.now() } }));
                    throw e;
                }
            }

            return new Promise((resolve, reject) => {
                this.pendingMessages.set(callId, { resolve, reject, methodName, originalArgs: args });
            });
        }

        resumeCall(callId, modifiedArgs, shouldDrop = false, interceptResponse = false) {
            const pending = this.pendingMessages.get(callId);
            if (!pending || pending.stage === 'FORWARDED' || pending.stage === 'RESPONSE') return;

            // Mark as forwarded immediately to prevent duplicate calls if resumeCall is triggered again
            pending.stage = 'FORWARDED';

            if (shouldDrop || !interceptResponse) {
                this.pendingMessages.delete(callId);
            }

            const { resolve, reject, methodName, originalArgs } = pending;
            if (shouldDrop) { resolve(undefined); return; }

            (async () => {
                try {
                    const bridgedArgs = this.processArgs(modifiedArgs || originalArgs);
                    const result = await this.realRemote[methodName](...bridgedArgs);

                    if (interceptResponse) {
                        // Update state to Response Stage
                        pending.stage = 'RESPONSE';
                        pending.originalResult = result;
                        // pending object is still in map (if we didn't delete) or we need to ensure it is.
                        // Since we didn't delete it above if interceptResponse=true, it's there.
                        window.dispatchEvent(new CustomEvent('mojo-response-intercept', {
                            detail: { id: callId, result: result, timestamp: Date.now(), proxyId: this.id, interface: this.interfaceName, method: methodName }
                        }));
                    } else {
                        window.dispatchEvent(new CustomEvent('mojo-response', { detail: { id: callId, result: result, timestamp: Date.now() } }));
                        resolve(result);
                    }
                } catch (e) {
                    // For errors, we usually just let them pass even if response intercept is on, 
                    // unless we want to intercept errors too? For now, let's bubble errors.
                    this.pendingMessages.delete(callId);
                    window.dispatchEvent(new CustomEvent('mojo-error', { detail: { id: callId, error: e.toString(), timestamp: Date.now() } }));
                    reject(e);
                }
            })();
        }

        sendResponse(callId, modifiedResult) {
            const pending = this.pendingMessages.get(callId);
            if (!pending || pending.stage !== 'RESPONSE') return;

            this.pendingMessages.delete(callId);
            const { resolve } = pending;

            window.dispatchEvent(new CustomEvent('mojo-response', { detail: { id: callId, result: modifiedResult, timestamp: Date.now() } }));
            resolve(modifiedResult);
        }

        static getInterfaceComponents(name) {
            const result = { Interface: MojoProxy.resolveInterface(name), Remote: null, Receiver: null };
            if (result.Interface && result.Interface.Remote) result.Remote = result.Interface.Remote;
            else result.Remote = MojoProxy.resolveInterface(name + "Remote");
            if (result.Interface && result.Interface.Receiver) result.Receiver = result.Interface.Receiver;
            else result.Receiver = MojoProxy.resolveInterface(name + "Receiver") || MojoProxy.resolveInterface(name + "Receiver") || MojoProxy.resolveInterface(name + "Binding");
            return result;
        }

        static create(ifaceName, handle) {
            MojoHandleRegistry.register(handle);
            const comps = MojoProxy.getInterfaceComponents(ifaceName);
            if (!comps.Interface && !comps.Remote) return null;
            const pipe = Mojo.createMessagePipe();
            MojoHandleRegistry.register(pipe.handle0);
            MojoHandleRegistry.register(pipe.handle1);
            const proxyImpl = new MojoProxy(ifaceName, pipe.handle0, comps);
            try {
                if (comps.Receiver) (new comps.Receiver(proxyImpl)).bind(handle);
                else if (typeof mojo !== 'undefined' && mojo.Binding) new mojo.Binding(comps.Interface, proxyImpl, handle);
                else throw new Error("No Receiver");
            } catch (e) {
                pipe.handle0.close(); pipe.handle1.close();
                return null;
            }
            return { proxy: proxyImpl, realHandle: pipe.handle1 };
        }

        static resolveInterface(name) {
            if (global.MojoBindings && global.MojoBindings._indexData) {
                const isFQN = name.includes('.');
                let iface = global.MojoBindings._indexData.interfaces.find(i => (isFQN && i.module + '.' + i.name === name) || (!isFQN && i.name === name));
                if (iface) {
                    let cur = window;
                    for (const p of iface.module.split('.')) { cur = cur[p]; if (!cur) break; }
                    if (cur && cur[iface.name]) return cur[iface.name];
                }
            }
            if (global.mojo && global.mojo.internal && global.mojo.internal.bindings) {
                let scoped = global.mojo.internal.bindings;
                for (const p of name.split('.')) { if (!scoped) break; scoped = scoped[p]; }
                if (scoped) return scoped;
            }
            return undefined;
        }
    }

    // ========================================
    // INTERCEPTOR MANAGER
    // ========================================
    const InterceptorManager = {
        interceptors: new Map(), modes: new Map(),
        async handleRequest(ifaceName, clientHandle) {
            MojoHandleRegistry.register(clientHandle);
            if (global.MojoLoader) await global.MojoLoader.ensureBinding(ifaceName);
            try {
                const proxyData = MojoProxy.create(ifaceName, clientHandle);
                if (proxyData) {
                    const interceptor = this.interceptors.get(ifaceName);
                    if (interceptor) interceptor.stop();
                    try { Mojo.bindInterface(ifaceName, proxyData.realHandle); }
                    finally { if (interceptor) interceptor.start(); }
                } else {
                    const interceptor = this.interceptors.get(ifaceName);
                    if (interceptor) interceptor.stop();
                    try { Mojo.bindInterface(ifaceName, clientHandle); }
                    finally { if (interceptor) interceptor.start(); }
                }
            } catch (err) {
                const interceptor = this.interceptors.get(ifaceName);
                if (interceptor) interceptor.stop();
                try { Mojo.bindInterface(ifaceName, clientHandle); } finally { if (interceptor) interceptor.start(); }
            }
        },
        start(ifaceName, mode = 'INTERCEPT') {
            this.modes.set(ifaceName, mode);
            if (this.interceptors.has(ifaceName)) return true;
            try {
                let interceptor;
                try { interceptor = new MojoInterfaceInterceptor(ifaceName, "context"); }
                catch (e) { interceptor = new MojoInterfaceInterceptor(ifaceName, "process"); }
                interceptor.oninterfacerequest = (e) => this.handleRequest(ifaceName, e.handle);
                interceptor.start();
                this.interceptors.set(ifaceName, interceptor);
                console.log(`[Interceptor] Monitoring ${ifaceName} (${mode})`);
                return true;
            } catch (e) { return false; }
        },
        stop(ifaceName) {
            const int = this.interceptors.get(ifaceName);
            if (int) { int.stop(); this.interceptors.delete(ifaceName); this.modes.delete(ifaceName); }
        },
        toggle(ifaceName) {
            if (!this.isActive(ifaceName)) {
                this.start(ifaceName, 'INTERCEPT');
                return true;
            }
            const mode = this.getMode(ifaceName);
            const newMode = (mode === 'INTERCEPT') ? 'LOG' : 'INTERCEPT';
            this.start(ifaceName, newMode);
            return newMode === 'INTERCEPT';
        },
        isActive(ifaceName) { return this.interceptors.has(ifaceName); },
        getMode(ifaceName) { return this.modes.get(ifaceName) || 'INTERCEPT'; }
    };

    global.InterceptorManager = InterceptorManager;
    global.MojoProxy = MojoProxy;

})(this);
