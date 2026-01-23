/**
 * MojoExecutionService
 * Unified service for executing Mojo methods (Static or Instance).
 */
(function(global) {
    'use strict';

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
                interfaceName = target.interface;
                await MojoLoader.ensureBinding(interfaceName);

                const comps = MojoProxy.getInterfaceComponents(interfaceName);
                if (!comps.Remote) throw new Error(`Remote class not found for ${interfaceName}`);

                if (options.isAssociated && target.masterHandleId) {
                    const masterHandle = MojoHandleRegistry.get(target.masterHandleId);
                    if (!masterHandle) throw new Error(`Master Handle ${target.masterHandleId} not found`);
                    const router = new mojo.internal.interfaceSupport.Router(masterHandle);
                    const endpoint = new mojo.internal.interfaceSupport.Endpoint(router, options.interfaceId || 0);
                    remote = new comps.Remote(endpoint);
                } else if (target.handleId) {
                    const handle = MojoHandleRegistry.get(target.handleId);
                    if (!handle) throw new Error(`Handle ${target.handleId} not found in registry`);
                    remote = new comps.Remote(handle);
                } else {
                    remote = new comps.Remote();
                    const receiver = remote.bindNewPipeAndPassReceiver();
                    const rawHandle = MojoProxy.getRawHandleFromMojoObject(receiver) || receiver.handle || receiver;
                    Mojo.bindInterface(interfaceName, rawHandle);
                }
            }

            // 2. Prepare Parameters
            const reconciledParams = MojoUtils.reconcileKeys(params, null, false);
            const methodDef = MojoReflectionService.findMethodDefinition(interfaceName, methodName);
            
            let finalArgs = [];
            if (reconciledParams) {
                if (Array.isArray(reconciledParams)) {
                    finalArgs = reconciledParams;
                } else if (methodDef && methodDef.parameters && methodDef.parameters.length > 0) {
                    finalArgs = methodDef.parameters.map(p => reconciledParams[p.name]);
                } else {
                    finalArgs = [reconciledParams];
                }
            }

            // 3. Execute
            const tryFindMethod = (obj, name) => {
                if (!obj) return null;
                if (typeof obj[name] === 'function') return { func: obj[name], ctx: obj };
                // Try camelCase
                const camel = name.charAt(0).toLowerCase() + name.slice(1);
                if (typeof obj[camel] === 'function') return { func: obj[camel], ctx: obj };
                // Try PascalCase
                const pascal = name.charAt(0).toUpperCase() + name.slice(1);
                if (typeof obj[pascal] === 'function') return { func: obj[pascal], ctx: obj };
                return null;
            };

            // Prefer inner implementation ($) if available, as it bypasses wrappers
            const found = tryFindMethod(remote.$, methodName) || tryFindMethod(remote, methodName);
            
            if (!found) throw new Error(`Method ${methodName} not found on ${interfaceName}`);

            console.log(`[ExecutionService] ${interfaceName}.${methodName}`, finalArgs);
            const result = await found.func.apply(found.ctx, finalArgs);

            // 4. Auto-register result and return
            return MojoObjectRegistry.autoRegister(result, interfaceName + 'Result');
        }
    };

    global.MojoExecutionService = MojoExecutionService;
})(this);
