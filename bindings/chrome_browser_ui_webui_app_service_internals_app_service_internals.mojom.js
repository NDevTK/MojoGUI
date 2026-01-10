// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/app_service_internals/app_service_internals.mojom
// Module: mojom.app_service_internals

'use strict';

// Module namespace
var mojom = mojom || {};
mojom.app_service_internals = mojom.app_service_internals || {};


// Struct: AppInfo
mojom.app_service_internals.app_service_internals.AppInfoSpec = {
  $: {
    structSpec: {
      name: 'mojom.app_service_internals.AppInfo',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'debug_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PreferredAppInfo
mojom.app_service_internals.app_service_internals.PreferredAppInfoSpec = {
  $: {
    structSpec: {
      name: 'mojom.app_service_internals.PreferredAppInfo',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'preferred_filters', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PromiseAppInfo
mojom.app_service_internals.app_service_internals.PromiseAppInfoSpec = {
  $: {
    structSpec: {
      name: 'mojom.app_service_internals.PromiseAppInfo',
      packedSize: 24,
      fields: [
        { name: 'package_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'debug_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AppCapabilityInfo
mojom.app_service_internals.app_service_internals.AppCapabilityInfoSpec = {
  $: {
    structSpec: {
      name: 'mojom.app_service_internals.AppCapabilityInfo',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'debug_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DebugInfo
mojom.app_service_internals.app_service_internals.DebugInfoSpec = {
  $: {
    structSpec: {
      name: 'mojom.app_service_internals.DebugInfo',
      packedSize: 40,
      fields: [
        { name: 'app_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojom.app_service_internals.AppInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'preferred_app_list', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojom.app_service_internals.PreferredAppInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'promise_app_list', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojom.app_service_internals.PromiseAppInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'app_capability_list', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojom.app_service_internals.AppCapabilityInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: AppServiceInternalsPageHandler
mojom.app_service_internals.app_service_internals.AppServiceInternalsPageHandler = {};

mojom.app_service_internals.app_service_internals.AppServiceInternalsPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.app_service_internals.app_service_internals.AppServiceInternalsPageHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.app_service_internals.AppServiceInternalsPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.app_service_internals.app_service_internals.AppServiceInternalsPageHandlerPendingReceiver,
      handle);
    this.$ = new mojom.app_service_internals.app_service_internals.AppServiceInternalsPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojom.app_service_internals.app_service_internals.AppServiceInternalsPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDebugInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.app_service_internals.app_service_internals.AppServiceInternalsPageHandler_GetDebugInfo_ParamsSpec,
      mojom.app_service_internals.app_service_internals.AppServiceInternalsPageHandler_GetDebugInfo_ResponseParamsSpec,
      []);
  }

};

mojom.app_service_internals.app_service_internals.AppServiceInternalsPageHandler.getRemote = function() {
  let remote = new mojom.app_service_internals.app_service_internals.AppServiceInternalsPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.app_service_internals.AppServiceInternalsPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetDebugInfo
mojom.app_service_internals.app_service_internals.AppServiceInternalsPageHandler_GetDebugInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.app_service_internals.AppServiceInternalsPageHandler.GetDebugInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

mojom.app_service_internals.app_service_internals.AppServiceInternalsPageHandler_GetDebugInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.app_service_internals.AppServiceInternalsPageHandler.GetDebugInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'debug_info', packedOffset: 0, packedBitOffset: 0, type: mojom.app_service_internals.DebugInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
mojom.app_service_internals.app_service_internals.AppServiceInternalsPageHandlerPtr = mojom.app_service_internals.app_service_internals.AppServiceInternalsPageHandlerRemote;
mojom.app_service_internals.app_service_internals.AppServiceInternalsPageHandlerRequest = mojom.app_service_internals.app_service_internals.AppServiceInternalsPageHandlerPendingReceiver;

