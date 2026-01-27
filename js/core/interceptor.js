/**
 * MojoJS Security Research GUI
 * Interceptor & Proxy Logic
 *
 * Per-interface ordinal scrambling is now handled at build time via BUILD.gn analysis.
 * This file contains only the core interception logic.
 */

(async function (global) {
  "use strict";

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
  // MojoDataPipeProxy
  // ========================================
  /**
   * MojoDataPipeProxy
   * Transparently bridges a data pipe to capture data in the traffic log.
   */
  class MojoDataPipeProxy {
    constructor(handle, type = "consumer") {
      this.handle = handle;
      this.type = type; // "consumer" or "producer"
      this.pair = null; // The other end of the bridge
      this.isClosed = false;
      this.id = window.MojoHandleRegistry.register(handle);

      if (this.type === "consumer") {
        this.startWatching();
      }
    }

    static createBridge(originalHandle, type) {
      // type is what the BROWSER/TARGET expects (e.g. consumer if we are AsBlob)
      const { producer, consumer } = Mojo.createDataPipe({
        elementNumBytes: 1,
        capacityNumBytes: 1024 * 1024,
      });

      if (type === "consumer") {
        // We ('the GUI') keep 'producer' to forward data from the ORIGINAL consumer.
        const proxy = new MojoDataPipeProxy(originalHandle, "consumer");
        proxy.pair = producer;
        return { proxy, handleToPass: consumer };
      } else {
        // We ('the GUI') keep 'consumer' to forward data to the ORIGINAL producer.
        const proxy = new MojoDataPipeProxy(consumer, "consumer");
        proxy.pair = originalHandle;
        return { proxy, handleToPass: producer };
      }
    }

    startWatching() {
      if (this.isClosed || !this.handle || !this.handle.watch) return;

      this.handle.watch({ readable: true }, (result) => {
        if (result === Mojo.RESULT_OK) {
          this.readAndForward();
        } else if (result === Mojo.RESULT_FAILED_PRECONDITION) {
          this.close();
        }
      });
    }

    readAndForward() {
      if (this.isClosed || !this.handle) return;

      try {
        const data = MojoUtils.readDataPipeAvailable(this.handle);
        if (data) {
          // 1. Log the data
          if (window.MojoGUI_API && window.MojoGUI_API.addDataActivity) {
            window.MojoGUI_API.addDataActivity(this.id, data);
          }

          // 2. Forward the data
          if (this.pair) {
            MojoUtils.writeDataPipe(this.pair, data);
          }

          // Check for more data immediately
          this.readAndForward();
        } else {
          // No data currently or error.
          const query = this.handle.queryData();
          if (
            query.result !== Mojo.RESULT_OK &&
            query.result !== Mojo.RESULT_SHOULD_WAIT
          ) {
            this.close();
          }
        }
      } catch (e) {
        console.error("[MojoDataPipeProxy] readAndForward FAILED:", e);
        this.close();
      }
    }

    close() {
      if (this.isClosed) return;
      this.isClosed = true;
      try {
        if (this.handle && this.handle.close) this.handle.close();
      } catch (e) {}
      try {
        if (this.pair && this.pair.close) this.pair.close();
      } catch (e) {}
    }
  }

  // ========================================
  // MojoProxy
  // ========================================
  class MojoProxy {
    constructor(interfaceName, handleOrEndpoint, comps) {
      // Register handle if it's a raw handle, or extract handle from endpoint
      if (handleOrEndpoint) {
        let raw = handleOrEndpoint;
        if (handleOrEndpoint.router || handleOrEndpoint.router_) {
          const r = handleOrEndpoint.router || handleOrEndpoint.router_;
          raw = r.handle || r.pipe || r.pipe_;
        }
        if (raw) MojoHandleRegistry.register(raw);
      }

      this.interfaceName = interfaceName;
      this.realHandle = handleOrEndpoint;
      this.realRemote = null;
      this.comps = comps;
      this.activeBridges = new Set();
      this.pendingMessages = new Map();

      if (comps && comps.Remote && handleOrEndpoint) {
        try {
          // If it's already a Remote instance (Lite bindings have $ and proxy)
          if (
            handleOrEndpoint.$ &&
            (handleOrEndpoint.proxy ||
              handleOrEndpoint.bindNewPipeAndPassReceiver)
          ) {
            this.realRemote = handleOrEndpoint;
          }
          // Check if it's already a MojoProxy or a wrapper with realRemote
          else if (handleOrEndpoint.realRemote) {
            this.realRemote = handleOrEndpoint.realRemote;
          }
          // Check if it's an Endpoint (for Associated Interfaces)
          else if (handleOrEndpoint.router || handleOrEndpoint.router_) {
            this.realRemote = new comps.Remote(handleOrEndpoint);
          } else {
            // Standard handle
            this.realRemote = new comps.Remote(handleOrEndpoint);
          }
        } catch (e) {
          console.error(
            `[MojoProxy] Error instantiating Remote for ${interfaceName}:`,
            e,
          );
        }
      }

      this.id = window.MojoObjectRegistry.register(this, interfaceName);

      return new Proxy(this, {
        get: (target, prop, receiver) => {
          if (prop in target) return target[prop];
          if (typeof prop === "string") {
            const tryFindMethod = (obj, name) => {
              if (!obj) return null;
              if (typeof obj[name] === "function")
                return { func: obj[name], ctx: obj, actualName: name };
              // Try camelCase
              const camel = name.charAt(0).toLowerCase() + name.slice(1);
              if (typeof obj[camel] === "function")
                return { func: obj[camel], ctx: obj, actualName: camel };
              // Try PascalCase
              const pascal = name.charAt(0).toUpperCase() + name.slice(1);
              if (typeof obj[pascal] === "function")
                return { func: obj[pascal], ctx: obj, actualName: pascal };
              return null;
            };

            // 1. Try realRemote instance
            let found = target.realRemote
              ? tryFindMethod(target.realRemote, prop) ||
                tryFindMethod(target.realRemote.$, prop)
              : null;

            // 2. Fallback: Check components for method existence if realRemote is null (Sink Mode)
            if (!found && target.comps) {
              // Check Remote prototype or static Interface info
              const remoteProto = target.comps.Remote
                ? target.comps.Remote.prototype
                : null;
              const callHandlerProto =
                target.comps.Remote && target.comps.Remote.prototype.$
                  ? target.comps.Remote.prototype.$.constructor.prototype
                  : null;

              found =
                tryFindMethod(remoteProto, prop) ||
                tryFindMethod(callHandlerProto, prop);
            }

            if (found) {
              // ALWAYS route through the remote's instance to maintain correct context ($)
              // Use the actualName found to ensure interceptCall uses the correct case
              return (...args) => target.interceptCall(found.actualName, args);
            }
          }
          return Reflect.get(target, prop, receiver);
        },
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
      if (obj.writeMessage && typeof obj.writeMessage === "function") {
        MojoHandleRegistry.register(obj);
        return obj;
      }

      // 2b. Check for nativeHandle / handle properties (for our decorated wrappers)
      if (obj.nativeHandle)
        return MojoProxy.getRawHandleFromMojoObject(obj.nativeHandle);
      if (obj.handle && obj.handle.writeMessage) return obj.handle;
      if (obj.handle && obj.handle.router_)
        return MojoProxy.getRawHandleFromMojoObject(obj.handle);
      if (obj.realRemote)
        return MojoProxy.getRawHandleFromMojoObject(obj.realRemote);

      const getFromRouter = (r) => {
        if (!r) return null;
        // Handle various router property names across versions
        return (
          r.pipe_ ||
          r.pipe ||
          (r.connector_ ? r.connector_.handle_ : null) ||
          (r.reader_ ? r.reader_.handle_ : null) ||
          r.handle_ ||
          r.handle
        );
      };

      // 3. Direct router (Standard Proxy/Binding)
      let pipe = getFromRouter(obj.router_) || getFromRouter(obj.router);
      if (pipe) {
        MojoHandleRegistry.register(pipe);
        return pipe;
      }

      // 4. Endpoint (Lite Remotes/Receivers)
      if (obj.endpoint_ || obj.endpoint) {
        const ep = obj.endpoint_ || obj.endpoint;
        pipe =
          getFromRouter(ep.router_) || getFromRouter(ep.router) || ep.handle;
        if (pipe) {
          MojoHandleRegistry.register(pipe);
          return pipe;
        }
      }

      // 5. Non-destructive wrapper
      if (obj.nativeHandle) {
        MojoHandleRegistry.register(obj.nativeHandle);
        return obj.nativeHandle;
      }

      // 6. Receiver wrapper
      if (obj.handle) {
        if (obj.handle.writeMessage) {
          MojoHandleRegistry.register(obj.handle);
          return obj.handle;
        }
        // obj.handle might be an Endpoint
        pipe = getFromRouter(obj.handle.router_ || obj.handle.router);
        if (pipe) {
          MojoHandleRegistry.register(pipe);
          return pipe;
        }
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
        const endpoint =
          (remote ? remote.endpoint_ || remote.endpoint : null) ||
          meta.endpoint ||
          meta.endpoint_;
        const router =
          (endpoint ? endpoint.router_ || endpoint.router : null) ||
          meta.router_ ||
          meta.router;

        pipe = getFromRouter(router);
        if (pipe) {
          MojoHandleRegistry.register(pipe);
          return pipe;
        }
      }

      // 7. Unwrap if it's already one of our GUI wrappers
      if (obj.realRemote)
        return MojoProxy.getRawHandleFromMojoObject(obj.realRemote);
      if (obj.realHandle) return obj.realHandle;

      // 8. Nested Proxy
      if (obj.proxy) return MojoProxy.getRawHandleFromMojoObject(obj.proxy);

      return null;
    }

    onError(err) {
      console.warn(
        `[MojoProxy] Connection Error on ${this.interfaceName}:`,
        err,
      );
      // Clean up active bridges or pending messages if needed?
      this.activeBridges.forEach((router) => {
        try {
          router.close();
        } catch (e) {}
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
      const routerOriginal = new mojo.internal.interfaceSupport.Router(
        rawHandle,
      );
      const routerLocal = new mojo.internal.interfaceSupport.Router(handle0);

      this.activeBridges.add(routerOriginal);
      this.activeBridges.add(routerLocal);

      const cleanup = () => {
        this.activeBridges.delete(routerOriginal);
        this.activeBridges.delete(routerLocal);
        try {
          routerOriginal.close();
        } catch (e) {}
        try {
          routerLocal.close();
        } catch (e) {}
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
        if (!arg || typeof arg !== "object") return arg;
        if (arg.__skipInterceptor) return arg;
        const isMojo =
          typeof arg.unbind === "function" ||
          (arg.proxy && typeof arg.proxy.unbind === "function");
        if (!isMojo) return arg;
        try {
          let h = arg.proxy ? arg.proxy.unbind() : arg.unbind();
          if (!h) return arg;
          let rawHandle = h.releasePipe
            ? h.releasePipe()
            : h.handle !== undefined
              ? h.handle
              : MojoProxy.getRawHandleFromMojoObject(h) || h;
          if (rawHandle && rawHandle.writeMessage) {
            const bridgedHandle = this.bridgeHandle(rawHandle, `Arg${idx}`);
            const mockEndpoint = {
              releasePipe: () => bridgedHandle,
              handle: bridgedHandle,
              handle_: bridgedHandle,
              watch: (...args) => bridgedHandle.watch(...args),
            };
            const mockRemote = {
              unbind: () => mockEndpoint,
              proxy: {
                unbind: () => mockEndpoint,
                handle: mockEndpoint,
                handle_: bridgedHandle,
              },
              handle: mockEndpoint,
              handle_: bridgedHandle,
              watch: (...args) => bridgedHandle.watch(...args),
            };
            mockRemote.proxy.proxy = mockRemote.proxy;
            return mockRemote;
          }
        } catch (e) {}
        return arg;
      });
    }

    async interceptCall(methodName, args) {
      const callId = Math.random().toString(36).substr(2, 9);
      const mode = global.InterceptorManager
        ? global.InterceptorManager.getMode(this.interfaceName)
        : "INTERCEPT";
      console.log(
        `[MojoProxy] Intercepted ${this.interfaceName}.${methodName} (Mode: ${mode})`,
      );

      window.dispatchEvent(
        new CustomEvent("mojo-intercept", {
          detail: {
            id: callId,
            interface: this.interfaceName,
            method: methodName,
            params: args,
            timestamp: Date.now(),
            proxyId: this.id,
            mode: mode,
          },
        }),
      );

      if (mode === "LOG") {
        try {
          const bridgedArgs = this.processArgs(args);
          let result = undefined;

          if (this.realRemote) {
            const func =
              this.realRemote[methodName] ||
              (this.realRemote.$ && this.realRemote.$[methodName]);
            if (typeof func === "function") {
              // Context MUST be the Remote instance so 'this.proxy' works
              const res = func.apply(this.realRemote, bridgedArgs);
              if (res && typeof res.then === "function") {
                result = await res;
              } else {
                result = res;
              }
            }
          } else {
            console.log(
              `[MojoProxy] Sink received ${this.interfaceName}.${methodName}`,
            );
          }

          // Auto-register any returned handles/proxies
          const finalResult = global.MojoObjectRegistry
            ? global.MojoObjectRegistry.autoRegister(result)
            : result;

          window.dispatchEvent(
            new CustomEvent("mojo-response", {
              detail: {
                id: callId,
                result: finalResult,
                timestamp: Date.now(),
              },
            }),
          );
          return result;
        } catch (e) {
          window.dispatchEvent(
            new CustomEvent("mojo-error", {
              detail: {
                id: callId,
                error: e.toString(),
                timestamp: Date.now(),
              },
            }),
          );
          throw e;
        }
      }

      return new Promise((resolve, reject) => {
        this.pendingMessages.set(callId, {
          resolve,
          reject,
          methodName,
          originalArgs: args,
        });
      });
    }

    resumeCall(
      callId,
      modifiedArgs,
      shouldDrop = false,
      interceptResponse = false,
    ) {
      const pending = this.pendingMessages.get(callId);
      if (
        !pending ||
        pending.stage === "FORWARDED" ||
        pending.stage === "RESPONSE"
      )
        return;

      // Mark as forwarded immediately to prevent duplicate calls if resumeCall is triggered again
      pending.stage = "FORWARDED";

      if (shouldDrop || !interceptResponse) {
        this.pendingMessages.delete(callId);
      }

      const { resolve, reject, methodName, originalArgs } = pending;
      if (shouldDrop) {
        resolve(undefined);
        return;
      }

      (async () => {
        try {
          const bridgedArgs = this.processArgs(modifiedArgs || originalArgs);
          const result = await this.realRemote[methodName](...bridgedArgs);

          if (interceptResponse) {
            // Update state to Response Stage
            pending.stage = "RESPONSE";
            pending.originalResult = result;
            // pending object is still in map (if we didn't delete) or we need to ensure it is.
            // Since we didn't delete it above if interceptResponse=true, it's there.
            window.dispatchEvent(
              new CustomEvent("mojo-response-intercept", {
                detail: {
                  id: callId,
                  result: result,
                  timestamp: Date.now(),
                  proxyId: this.id,
                  interface: this.interfaceName,
                  method: methodName,
                },
              }),
            );
          } else {
            window.dispatchEvent(
              new CustomEvent("mojo-response", {
                detail: { id: callId, result: result, timestamp: Date.now() },
              }),
            );
            resolve(result);
          }
        } catch (e) {
          // For errors, we usually just let them pass even if response intercept is on,
          // unless we want to intercept errors too? For now, let's bubble errors.
          this.pendingMessages.delete(callId);
          window.dispatchEvent(
            new CustomEvent("mojo-error", {
              detail: {
                id: callId,
                error: e.toString(),
                timestamp: Date.now(),
              },
            }),
          );
          reject(e);
        }
      })();
    }

    sendResponse(callId, modifiedResult) {
      const pending = this.pendingMessages.get(callId);
      if (!pending || pending.stage !== "RESPONSE") return;

      this.pendingMessages.delete(callId);
      const { resolve } = pending;

      window.dispatchEvent(
        new CustomEvent("mojo-response", {
          detail: { id: callId, result: modifiedResult, timestamp: Date.now() },
        }),
      );
      resolve(modifiedResult);
    }

    static getInterfaceComponents(name) {
      const result = {
        Interface: MojoProxy.resolveInterface(name),
        Remote: null,
        Receiver: null,
      };
      if (result.Interface && result.Interface.Remote)
        result.Remote = result.Interface.Remote;
      else result.Remote = MojoProxy.resolveInterface(name + "Remote");
      if (result.Interface && result.Interface.Receiver)
        result.Receiver = result.Interface.Receiver;
      else
        result.Receiver =
          MojoProxy.resolveInterface(name + "Receiver") ||
          MojoProxy.resolveInterface(name + "Receiver") ||
          MojoProxy.resolveInterface(name + "Binding");
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
        if (comps.Receiver) new comps.Receiver(proxyImpl).bind(handle);
        else if (typeof mojo !== "undefined" && mojo.Binding)
          new mojo.Binding(comps.Interface, proxyImpl, handle);
        else throw new Error("No Receiver");
      } catch (e) {
        pipe.handle0.close();
        pipe.handle1.close();
        return null;
      }
      return { proxy: proxyImpl, realHandle: pipe.handle1 };
    }

    static resolveInterface(name) {
      if (global.MojoBindingLoader && global.MojoBindingLoader._indexData) {
        const isFQN = name.includes(".");
        let iface = global.MojoBindingLoader._indexData.interfaces.find(
          (i) =>
            (isFQN && i.module + "." + i.name === name) ||
            (!isFQN && i.name === name),
        );
        if (iface) {
          let cur = window;
          for (const p of iface.module.split(".")) {
            cur = cur[p];
            if (!cur) break;
          }
          if (cur && cur[iface.name]) return cur[iface.name];
        }
      }
      if (
        global.mojo &&
        global.mojo.internal &&
        global.mojo.internal.bindings
      ) {
        let scoped = global.mojo.internal.bindings;
        for (const p of name.split(".")) {
          if (!scoped) break;
          scoped = scoped[p];
        }
        if (scoped) return scoped;
      }
      return undefined;
    }
  }

  // ========================================
  // INTERCEPTOR MANAGER
  // ========================================
  const InterceptorManager = {
    interceptors: new Map(),
    modes: new Map(),
    async handleRequest(ifaceName, clientHandle) {
      MojoHandleRegistry.register(clientHandle);
      if (global.MojoLoader) await global.MojoLoader.ensureBinding(ifaceName);
      try {
        const proxyData = MojoProxy.create(ifaceName, clientHandle);
        if (proxyData) {
          const interceptor = this.interceptors.get(ifaceName);
          if (interceptor) interceptor.stop();
          try {
            Mojo.bindInterface(ifaceName, proxyData.realHandle);
          } finally {
            if (interceptor) interceptor.start();
          }
        } else {
          const interceptor = this.interceptors.get(ifaceName);
          if (interceptor) interceptor.stop();
          try {
            Mojo.bindInterface(ifaceName, clientHandle);
          } finally {
            if (interceptor) interceptor.start();
          }
        }
      } catch (err) {
        const interceptor = this.interceptors.get(ifaceName);
        if (interceptor) interceptor.stop();
        try {
          Mojo.bindInterface(ifaceName, clientHandle);
        } finally {
          if (interceptor) interceptor.start();
        }
      }
    },
    start(ifaceName, mode = "INTERCEPT") {
      this.modes.set(ifaceName, mode);
      if (this.interceptors.has(ifaceName)) return true;
      try {
        let interceptor;
        try {
          interceptor = new MojoInterfaceInterceptor(ifaceName, "context");
        } catch (e) {
          interceptor = new MojoInterfaceInterceptor(ifaceName, "process");
        }
        interceptor.oninterfacerequest = (e) =>
          this.handleRequest(ifaceName, e.handle);
        interceptor.start();
        this.interceptors.set(ifaceName, interceptor);
        console.log(`[Interceptor] Monitoring ${ifaceName} (${mode})`);
        return true;
      } catch (e) {
        return false;
      }
    },
    stop(ifaceName) {
      const int = this.interceptors.get(ifaceName);
      if (int) {
        int.stop();
        this.interceptors.delete(ifaceName);
        this.modes.delete(ifaceName);
      }
    },
    toggle(ifaceName) {
      if (!this.isActive(ifaceName)) {
        this.start(ifaceName, "INTERCEPT");
        return true;
      }
      const mode = this.getMode(ifaceName);
      const newMode = mode === "INTERCEPT" ? "LOG" : "INTERCEPT";
      this.start(ifaceName, newMode);
      return newMode === "INTERCEPT";
    },
    isActive(ifaceName) {
      return this.interceptors.has(ifaceName);
    },
    getMode(ifaceName) {
      return this.modes.get(ifaceName) || "INTERCEPT";
    },
  };

  global.InterceptorManager = InterceptorManager;
  global.MojoProxy = MojoProxy;
  global.MojoDataPipeProxy = MojoDataPipeProxy;
})(this);
