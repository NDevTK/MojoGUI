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
        if (!entry) throw new Error(`Object ${target.objectId} not found`);
        remote = entry.remote;
        interfaceName = entry.type;
      } else if (target.interface) {
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
          remote = new comps.Remote(handle);
        } else {
          remote = new comps.Remote();
          const receiver = remote.bindNewPipeAndPassReceiver();
          const rawHandle =
            MojoProxy.getRawHandleFromMojoObject(receiver) ||
            receiver.handle ||
            receiver;
          Mojo.bindInterface(interfaceName, rawHandle);
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

        finalArgs = methodDef.parameters.map((p, i) => {
          let val = paramsArray[i];

          // If params is an object but we are here, reconciledParams was an object
          if (!Array.isArray(reconciledParams)) {
            val = reconciledParams[p.name];
          }

          if (p.structSpec) {
            return MojoUtils.inflateStruct(val, p.structSpec);
          }

          return val;
        });
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
      const registeredResult = MojoObjectRegistry.autoRegister(
        result,
        interfaceName + "Result",
      );

      return {
        result: registeredResult !== undefined ? registeredResult : null,
        objectId: remoteId,
        type: interfaceName,
      };
    },
  };

  global.MojoExecutionService = MojoExecutionService;
})(this);
