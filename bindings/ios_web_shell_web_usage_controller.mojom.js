// Auto-generated MojoJS binding
// Source: chromium_src/ios/web/shell/web_usage_controller.mojom
// Module: web.mojom

'use strict';

// Module namespace
var web = web || {};
web.mojom = web.mojom || {};


// Interface: WebUsageController
web.mojom.WebUsageController = {};

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
      null,
      [enabled]);
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

// ParamsSpec for SetWebUsageEnabled
web.mojom.WebUsageController_SetWebUsageEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'web.mojom.WebUsageController.SetWebUsageEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
web.mojom.WebUsageControllerPtr = web.mojom.WebUsageControllerRemote;
web.mojom.WebUsageControllerRequest = web.mojom.WebUsageControllerPendingReceiver;

