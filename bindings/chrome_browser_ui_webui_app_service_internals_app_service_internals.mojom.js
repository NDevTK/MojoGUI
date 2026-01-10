// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/app_service_internals/app_service_internals.mojom
// Module: mojom.app_service_internals

'use strict';

// Module namespace
var mojom = mojom || {};
mojom.app_service_internals = mojom.app_service_internals || {};

mojom.app_service_internals.AppInfoSpec = { $: {} };
mojom.app_service_internals.PreferredAppInfoSpec = { $: {} };
mojom.app_service_internals.PromiseAppInfoSpec = { $: {} };
mojom.app_service_internals.AppCapabilityInfoSpec = { $: {} };
mojom.app_service_internals.DebugInfoSpec = { $: {} };
mojom.app_service_internals.AppServiceInternalsPageHandler = {};
mojom.app_service_internals.AppServiceInternalsPageHandler.$interfaceName = 'mojom.app_service_internals.AppServiceInternalsPageHandler';
mojom.app_service_internals.AppServiceInternalsPageHandler_GetDebugInfo_ParamsSpec = { $: {} };
mojom.app_service_internals.AppServiceInternalsPageHandler_GetDebugInfo_ResponseParamsSpec = { $: {} };

// Struct: AppInfo
mojo.internal.Struct(
    mojom.app_service_internals.AppInfoSpec, 'mojom.app_service_internals.AppInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('debug_info', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PreferredAppInfo
mojo.internal.Struct(
    mojom.app_service_internals.PreferredAppInfoSpec, 'mojom.app_service_internals.PreferredAppInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('preferred_filters', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PromiseAppInfo
mojo.internal.Struct(
    mojom.app_service_internals.PromiseAppInfoSpec, 'mojom.app_service_internals.PromiseAppInfo', [
      mojo.internal.StructField('package_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('debug_info', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AppCapabilityInfo
mojo.internal.Struct(
    mojom.app_service_internals.AppCapabilityInfoSpec, 'mojom.app_service_internals.AppCapabilityInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('debug_info', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DebugInfo
mojo.internal.Struct(
    mojom.app_service_internals.DebugInfoSpec, 'mojom.app_service_internals.DebugInfo', [
      mojo.internal.StructField('app_list', 0, 0, mojo.internal.Array(mojom.app_service_internals.AppInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('preferred_app_list', 8, 0, mojo.internal.Array(mojom.app_service_internals.PreferredAppInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('promise_app_list', 16, 0, mojo.internal.Array(mojom.app_service_internals.PromiseAppInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('app_capability_list', 24, 0, mojo.internal.Array(mojom.app_service_internals.AppCapabilityInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: AppServiceInternalsPageHandler
mojo.internal.Struct(
    mojom.app_service_internals.AppServiceInternalsPageHandler_GetDebugInfo_ParamsSpec, 'mojom.app_service_internals.AppServiceInternalsPageHandler_GetDebugInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.app_service_internals.AppServiceInternalsPageHandler_GetDebugInfo_ResponseParamsSpec, 'mojom.app_service_internals.AppServiceInternalsPageHandler_GetDebugInfo_ResponseParams', [
      mojo.internal.StructField('debug_info', 0, 0, mojom.app_service_internals.DebugInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
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

mojom.app_service_internals.AppServiceInternalsPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = mojom.app_service_internals.AppServiceInternalsPageHandler_GetDebugInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDebugInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.app_service_internals.AppServiceInternalsPageHandler_GetDebugInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

mojom.app_service_internals.AppServiceInternalsPageHandlerReceiver = mojom.app_service_internals.AppServiceInternalsPageHandlerReceiver;

mojom.app_service_internals.AppServiceInternalsPageHandlerPtr = mojom.app_service_internals.AppServiceInternalsPageHandlerRemote;
mojom.app_service_internals.AppServiceInternalsPageHandlerRequest = mojom.app_service_internals.AppServiceInternalsPageHandlerPendingReceiver;

