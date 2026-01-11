/**
 * MojoJS Security Research GUI
 * Interceptor & Proxy Logic
 * 
 * Implements Adaptive Ordinal Learning to support Scrambled and Unscrambled environments.
 */

(async function (global) {
    'use strict';

    // ========================================
    // GLOBAL SETTINGS & STATE
    // ========================================
    window.mojoNoScramble = window.mojoNoScramble || false;

    // Stores: InterfaceName -> Map(MethodIndex -> WireOrdinal)
    global.MojoLearnedProtocols = global.MojoLearnedProtocols || new Map();

    function getLearnedOrdinal(interfaceName, methodIndex) {
        const mapping = global.MojoLearnedProtocols.get(interfaceName);
        return mapping ? mapping.get(methodIndex) : undefined;
    }

    function recordLearnedOrdinal(interfaceName, methodIndex, wireOrdinal) {
        if (!global.MojoLearnedProtocols.has(interfaceName)) {
            global.MojoLearnedProtocols.set(interfaceName, new Map());
        }
        const mapping = global.MojoLearnedProtocols.get(interfaceName);
        if (mapping.get(methodIndex) !== wireOrdinal) {
            console.log(`[Learner] Learned Truth: ${interfaceName}[${methodIndex}] -> Ordinal ${wireOrdinal}`);
            mapping.set(methodIndex, wireOrdinal);
            window.dispatchEvent(new CustomEvent('mojo-protocol-ready', {
                detail: { interface: interfaceName, methodIndex, wireOrdinal }
            }));
        }
    }

    // --- HOOK: Receiver.prototype.mapOrdinal (The Teacher) ---
    // This is where the browser's discovery logic "teaches" the receiver.
    // We hook this globally so we learn even if an interface isn't explicitly intercepted yet.
    function patchReceiverClass(cls, interfaceName) {
        if (!cls || !cls.prototype || cls.prototype._interceptor_patched) return;
        cls.prototype._interceptor_patched = true;

        const originalMap = cls.prototype.mapOrdinal;
        cls.prototype.mapOrdinal = function (hash, id) {
            recordLearnedOrdinal(interfaceName, id, hash);
            return originalMap.apply(this, arguments);
        };
        // console.log(`[Learner] Patched Receiver for ${interfaceName}`);
    }

    // --- HOOK: mojoScrambler.getOrdinals (The Sync) ---
    // Ensures Fresh Loaders (Execute button) use the learned truth.
    if (window.mojoScrambler) {
        const originalGetOrdinals = window.mojoScrambler.getOrdinals;
        window.mojoScrambler.getOrdinals = function (interfaceName, methodSpecs) {
            // Respect Global GUI Toggle
            if (window.mojoNoScramble) {
                console.log(`[Scrambler] Force No Scramble active for ${interfaceName}`);
                return methodSpecs.map((_, idx) => idx);
            }

            const results = originalGetOrdinals.apply(this, arguments);

            // Overlay Learned Truth
            methodSpecs.forEach((spec, idx) => {
                const learned = getLearnedOrdinal(interfaceName, idx);
                if (learned !== undefined) {
                    results[idx] = learned;
                }
            });

            return results;
        };
    }

    // ========================================
    // MojoProxy
    // ========================================
    class MojoProxy {
        constructor(interfaceName, realHandle, comps) {
            this.interfaceName = interfaceName;
            this.realHandle = realHandle;
            this.realRemote = null;
            this.activeBridges = new Set();
            this.pendingMessages = new Map();
            this.id = Math.random().toString(36).substr(2, 9);

            if (comps && comps.Remote) {
                try {
                    this.realRemote = new comps.Remote(realHandle);
                    // No need to hookPipe here, we trust the learner + results
                } catch (e) { console.error(`[MojoProxy] Error instantiating Remote for ${interfaceName}:`, e); }
            }

            // Patch the receiver class immediately upon interception
            if (comps.Receiver) patchReceiverClass(comps.Receiver, interfaceName);

            const registry = global.MojoProxyRegistry || new Map();
            global.MojoProxyRegistry = registry;
            registry.set(this.id, this);

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
            const getFromRouter = (r) => {
                if (!r) return null;
                return r.connector_ ? r.connector_.handle_ : (r.pipe_ || (r.reader_ ? r.reader_.handle_ : null));
            };
            let pipe = getFromRouter(obj.router_);
            if (pipe) return pipe;
            if (obj.endpoint_) pipe = getFromRouter(obj.endpoint_.router_);
            if (pipe) return pipe;
            if (obj.$ && obj.$.router_) pipe = getFromRouter(obj.$.router_);
            if (pipe) return pipe;
            if (obj.proxy) return MojoProxy.getRawHandleFromMojoObject(obj.proxy);
            return null;
        }

        bridgeHandle(rawHandle, label) {
            const { handle0, handle1 } = Mojo.createMessagePipe();
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

                    // --- SYNC ORDinals ---
                    if (this.realRemote.$ && this.realRemote.$.ordinals) {
                        this.realRemote.$.ordinals.forEach((oldOrd, idx) => {
                            const learned = getLearnedOrdinal(this.interfaceName, idx);
                            if (learned !== undefined) this.realRemote.$.ordinals[idx] = learned;
                        });
                    }

                    const result = await this.realRemote[methodName](...bridgedArgs);
                    window.dispatchEvent(new CustomEvent('mojo-response', { detail: { id: callId, result: result, timestamp: Date.now() } }));
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

        resumeCall(callId, modifiedArgs, shouldDrop = false) {
            const pending = this.pendingMessages.get(callId);
            if (!pending) return;
            this.pendingMessages.delete(callId);
            const { resolve, reject, methodName, originalArgs } = pending;
            if (shouldDrop) { resolve(undefined); return; }

            (async () => {
                try {
                    const bridgedArgs = this.processArgs(modifiedArgs || originalArgs);

                    if (this.realRemote.$ && this.realRemote.$.ordinals) {
                        this.realRemote.$.ordinals.forEach((oldOrd, idx) => {
                            const learned = getLearnedOrdinal(this.interfaceName, idx);
                            if (learned !== undefined) this.realRemote.$.ordinals[idx] = learned;
                        });
                    }

                    const result = await this.realRemote[methodName](...bridgedArgs);
                    window.dispatchEvent(new CustomEvent('mojo-response', { detail: { id: callId, result: result, timestamp: Date.now() } }));
                    resolve(result);
                } catch (e) {
                    window.dispatchEvent(new CustomEvent('mojo-error', { detail: { id: callId, error: e.toString(), timestamp: Date.now() } }));
                    reject(e);
                }
            })();
        }

        static getInterfaceComponents(name) {
            const result = { Interface: MojoProxy.resolveInterface(name), Remote: null, Receiver: null };
            if (result.Interface && result.Interface.Remote) result.Remote = result.Interface.Remote;
            else result.Remote = MojoProxy.resolveInterface(name + "Remote");
            if (result.Interface && result.Interface.Receiver) result.Receiver = result.Interface.Receiver;
            else result.Receiver = MojoProxy.resolveInterface(name + "Receiver") || MojoProxy.resolveInterface(name + "Binding");
            return result;
        }

        static create(ifaceName, handle) {
            const comps = MojoProxy.getInterfaceComponents(ifaceName);
            if (!comps.Interface && !comps.Remote) return null;
            const pipe = Mojo.createMessagePipe();
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
        isActive(ifaceName) { return this.interceptors.has(ifaceName); },
        getMode(ifaceName) { return this.modes.get(ifaceName) || 'INTERCEPT'; }
    };

    global.InterceptorManager = InterceptorManager;
    global.MojoProxy = MojoProxy;

})(this);
