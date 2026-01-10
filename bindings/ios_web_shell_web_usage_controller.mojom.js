// Auto-generated MojoJS binding
// Source: chromium_src/ios/web/shell/web_usage_controller.mojom
// Module: web.mojom

'use strict';

// Module namespace
var web = web || {};
web.mojom = web.mojom || {};

web.mojom.WebUsageController = {};
web.mojom.WebUsageController.$interfaceName = 'web.mojom.WebUsageController';
web.mojom.WebUsageController_SetWebUsageEnabled_ParamsSpec = { $: {} };
web.mojom.WebUsageController_SetWebUsageEnabled_ResponseParamsSpec = { $: {} };

// Interface: WebUsageController
mojo.internal.Struct(
    web.mojom.WebUsageController_SetWebUsageEnabled_ParamsSpec, 'web.mojom.WebUsageController_SetWebUsageEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    web.mojom.WebUsageController_SetWebUsageEnabled_ResponseParamsSpec, 'web.mojom.WebUsageController_SetWebUsageEnabled_ResponseParams', [
    ],
    [[0, 8]]);

web.mojom.WebUsageControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

web.mojom.WebUsageControllerRemote = class {
  static get $interfaceName() {
    return 'web.mojom.WebUsageController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      web.mojom.WebUsageControllerPendingReceiver,
      handle);
    this.$ = new web.mojom.WebUsageControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

web.mojom.WebUsageControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setWebUsageEnabled(enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      web.mojom.WebUsageController_SetWebUsageEnabled_ParamsSpec,
      web.mojom.WebUsageController_SetWebUsageEnabled_ResponseParamsSpec,
      [enabled],
      false);
  }

};

web.mojom.WebUsageController.getRemote = function() {
  let remote = new web.mojom.WebUsageControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'web.mojom.WebUsageController',
    'context');
  return remote.$;
};

web.mojom.WebUsageControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = web.mojom.WebUsageController_SetWebUsageEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setWebUsageEnabled(params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web.mojom.WebUsageController_SetWebUsageEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

web.mojom.WebUsageControllerReceiver = web.mojom.WebUsageControllerReceiver;

web.mojom.WebUsageControllerPtr = web.mojom.WebUsageControllerRemote;
web.mojom.WebUsageControllerRequest = web.mojom.WebUsageControllerPendingReceiver;

