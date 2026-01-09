// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/app_service_internals/app_service_internals.mojom
// Module: mojom.app_service_internals

'use strict';

// Module namespace
var mojom = mojom || {};
mojom.app_service_internals = mojom.app_service_internals || {};


// Interface: AppServiceInternalsPageHandler
mojom.app_service_internals.AppServiceInternalsPageHandler = {};

mojom.app_service_internals.AppServiceInternalsPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.app_service_internals.AppServiceInternalsPageHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.app_service_internals.AppServiceInternalsPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.app_service_internals.AppServiceInternalsPageHandlerPendingReceiver,
      handle);
    this.$ = new mojom.app_service_internals.AppServiceInternalsPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojom.app_service_internals.AppServiceInternalsPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDebugInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.app_service_internals.AppServiceInternalsPageHandler_GetDebugInfo_ParamsSpec,
      mojom.app_service_internals.AppServiceInternalsPageHandler_GetDebugInfo_ResponseParamsSpec,
      []);
  }

};

mojom.app_service_internals.AppServiceInternalsPageHandler.getRemote = function() {
  let remote = new mojom.app_service_internals.AppServiceInternalsPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.app_service_internals.AppServiceInternalsPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetDebugInfo
mojom.app_service_internals.AppServiceInternalsPageHandler_GetDebugInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.app_service_internals.AppServiceInternalsPageHandler.GetDebugInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.app_service_internals.AppServiceInternalsPageHandler_GetDebugInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.app_service_internals.AppServiceInternalsPageHandler.GetDebugInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'debug_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
mojom.app_service_internals.AppServiceInternalsPageHandlerPtr = mojom.app_service_internals.AppServiceInternalsPageHandlerRemote;
mojom.app_service_internals.AppServiceInternalsPageHandlerRequest = mojom.app_service_internals.AppServiceInternalsPageHandlerPendingReceiver;

