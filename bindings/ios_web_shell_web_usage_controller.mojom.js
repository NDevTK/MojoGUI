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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'web.mojom.WebUsageController',
    'context');
  return remote.$;
};

web.mojom.WebUsageControllerPtr = web.mojom.WebUsageControllerRemote;
web.mojom.WebUsageControllerRequest = web.mojom.WebUsageControllerPendingReceiver;

