/**
 * MojoExecutionService
 * Unified service for executing Mojo methods (Static or Instance).
 */
(function (global) {
  "use strict";

  const MojoExecutionService = {
    async call(target, methodName, params, options = {}) {
      let remote;
      let interfaceName;

      // 1. Resolve Target
      if (target.objectId) {
        const entry = MojoObjectRegistry.get(target.objectId);
        if (entry) {
          remote = entry.remote;
          interfaceName = entry.type;
        } else {
          // If objectId is numeric, treat as handleId fallback
          const hid = Number(target.objectId);
          if (!isNaN(hid)) {
            target.handleId = hid;
          } else {
            throw new Error(`Object ${target.objectId} not found`);
          }
        }
      }

      if (!remote && target.interface) {
        const fqn = await MojoLoader.ensureBinding(target.interface);
        interfaceName = fqn || target.interface;

        const comps = MojoProxy.getInterfaceComponents(interfaceName);
        if (!comps.Remote)
          throw new Error(`Remote class not found for ${interfaceName}`);

        if (options.isAssociated && target.masterHandleId) {
          const masterHandle = MojoHandleRegistry.get(target.masterHandleId);
          if (!masterHandle)
            throw new Error(`Master Handle ${target.masterHandleId} not found`);
          const router = new mojo.internal.interfaceSupport.Router(
            masterHandle,
          );
          const endpoint = new mojo.internal.interfaceSupport.Endpoint(
            router,
            options.interfaceId || 0,
          );

          // Wrap in MojoProxy to ensure calls are logged and interceptable
          remote = new MojoProxy(interfaceName, endpoint, comps);
        } else if (target.handleId) {
          const handle = MojoHandleRegistry.get(target.handleId);
          if (!handle)
            throw new Error(`Handle ${target.handleId} not found in registry`);
          // Use MojoProxy so it's logged!
          remote = new MojoProxy(interfaceName, handle, comps);
        } else {
          // Standard creation
          const { handle0, handle1 } = Mojo.createMessagePipe();
          MojoHandleRegistry.register(handle0);
          MojoHandleRegistry.register(handle1);

          // Get scope from metadata if available
          const ifaceMeta = MojoLoader._interfaces.find(
            (i) =>
              i.name === interfaceName ||
              i.module + "." + i.name === interfaceName,
          );
          const scope = ifaceMeta?.metadata?.scope || target.scope || "context";

          // Pause Global Interceptor to avoid duplicate logging (we only want the Application-side sender log)
          let interceptorToPause = null;
          if (
            typeof InterceptorManager !== "undefined" &&
            InterceptorManager.isActive(interfaceName)
          ) {
            interceptorToPause =
              InterceptorManager.interceptors.get(interfaceName);
            if (interceptorToPause) interceptorToPause.stop();
          }

          try {
            console.log(
              `[ExecutionService] Binding ${interfaceName} with scope: ${scope}`,
            );
            Mojo.bindInterface(interfaceName, handle1, scope);
          } finally {
            if (interceptorToPause) interceptorToPause.start();
          }

          // Wrap handle0 in a MojoProxy so it's logged locally
          remote = new MojoProxy(interfaceName, handle0, comps);
        }
      }

      // 2. Prepare Parameters

      const methodDef = MojoReflectionService.findMethodDefinition(
        interfaceName,
        methodName,
      );

      const reconciledParams = MojoUtils.reconcileKeys(params, null, true); // Use heuristics to add arg_ prefixes

      let finalArgs = [];

      if (reconciledParams && methodDef && methodDef.parameters) {
        const paramsArray = Array.isArray(reconciledParams)
          ? reconciledParams
          : [reconciledParams];

        finalArgs = await Promise.all(
          methodDef.parameters.map(async (p, i) => {
            let val = paramsArray[i];

            if (!Array.isArray(reconciledParams)) {
              val = reconciledParams[p.name];
            }

            // Handle explicit Bind Listener request
            if (
              val &&
              val.__mojoType === "Handle" &&
              val.action === "bind_listener"
            ) {
              try {
                const { handleId } = await window.MojoGUI_API.bindMockListener(
                  val.interface,
                );
                const h = MojoHandleRegistry.get(handleId);
                if (h) {
                  val = MojoUtils.decorateHandle(h);
                  val.__skipInterceptor = true;
                }
              } catch (e) {
                console.error("[ExecutionService] bind_listener failed", e);
              }
            }

            // Auto-wrap raw handle IDs if they exist in the registry.
            // We only do this if the type is explicitly a handle or 'any' to avoid
            // incorrectly converting enums (numbers) into handles.
            if (
              typeof val === "number" &&
              (!p ||
                p.type === "mojo_handle" ||
                p.type === "any" ||
                p.type === "pending_remote" ||
                p.type === "pending_receiver")
            ) {
              const handle = MojoHandleRegistry.get(val);
              if (handle) {
                val = MojoUtils.decorateHandle(handle);
              }
            }

            if (p.structSpec) {
              return MojoUtils.inflateStruct(val, p.structSpec);
            }

            // Auto-decorate/wrap objects passed as handles
            if (val !== null && val !== undefined && typeof val === "object") {
              const rawVal = val.nativeHandle || val;
              const isNativeHandle =
                rawVal.writeMessage &&
                typeof rawVal.writeMessage === "function";

              if (isNativeHandle) {
                MojoHandleRegistry.register(rawVal);

                const spec = p.rawType?.$ || p.rawType;
                if (
                  spec &&
                  (p.type === "pending_remote" ||
                    p.type === "pending_associated_remote") &&
                  spec.remoteClass
                ) {
                  try {
                    val = new spec.remoteClass(rawVal);
                    console.log(
                      `[ExecutionService] Wrapped handle in official Remote: ${spec.remoteClass.name}`,
                    );
                  } catch (e) {
                    val = MojoUtils.decorateHandle(rawVal);
                  }
                } else if (
                  spec &&
                  (p.type === "pending_receiver" ||
                    p.type === "pending_associated_receiver") &&
                  spec.receiverClass
                ) {
                  try {
                    val = new spec.receiverClass(rawVal);
                    console.log(
                      `[ExecutionService] Wrapped handle in official Receiver: ${spec.receiverClass.name}`,
                    );
                  } catch (e) {
                    val = MojoUtils.decorateHandle(rawVal);
                  }
                } else if (p.type === "mojo_handle") {
                  // If the method expects a RAW handle, pass it UNWRAPPED
                  val = rawVal;
                } else if (p.type === "any") {
                  val = MojoUtils.decorateHandle(rawVal);
                }
              }
            }

            return val;
          }),
        );
      } else if (reconciledParams) {
        finalArgs = Array.isArray(reconciledParams)
          ? reconciledParams
          : [reconciledParams];
      }

      // 3. Execute
      const tryFindMethod = (obj, name) => {
        if (!obj) return null;
        if (typeof obj[name] === "function")
          return { func: obj[name], ctx: obj };
        // Try camelCase
        const camel = name.charAt(0).toLowerCase() + name.slice(1);
        if (typeof obj[camel] === "function")
          return { func: obj[camel], ctx: obj };
        // Try PascalCase
        const pascal = name.charAt(0).toUpperCase() + name.slice(1);
        if (typeof obj[pascal] === "function")
          return { func: obj[pascal], ctx: obj };
        return null;
      };

      // Prefer inner implementation ($) if available, as it bypasses wrappers
      const found =
        tryFindMethod(remote.$, methodName) ||
        tryFindMethod(remote, methodName);

      if (!found)
        throw new Error(`Method ${methodName} not found on ${interfaceName}`);

      console.log(
        `[ExecutionService] ${interfaceName}.${methodName}`,
        finalArgs,
      );
      finalArgs.forEach((arg, i) =>
        console.log(`  Arg[${i}]: type=${typeof arg}`, arg),
      );
      const result = await found.func.apply(found.ctx, finalArgs);

      // 4. Register remote if it's new, so we can chain calls
      let remoteId = target.objectId;
      if (!remoteId) {
        remoteId = MojoObjectRegistry.register(remote, interfaceName);
      }

      // 5. Auto-register result and return combined status
      let registeredResult;
      if (
        result &&
        typeof result === "object" &&
        methodDef &&
        methodDef.responseParams
      ) {
        // Map response fields to their specs
        registeredResult = {};
        for (const p of methodDef.responseParams) {
          if (result.hasOwnProperty(p.name)) {
            registeredResult[p.name] = MojoObjectRegistry.autoRegister(
              result[p.name],
              p.interface || p.type || "Unknown",
            );
          }
        }
      } else {
        registeredResult = MojoObjectRegistry.autoRegister(
          result,
          interfaceName + "Result",
        );
      }

      return {
        result: registeredResult !== undefined ? registeredResult : null,
        objectId: remoteId,
        type: interfaceName,
      };
    },
  };

  global.MojoExecutionService = MojoExecutionService;
})(this);
