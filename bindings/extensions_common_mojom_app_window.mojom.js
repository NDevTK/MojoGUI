// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/app_window.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Interface: AppWindow
extensions.mojom.mojom.AppWindow = {};

extensions.mojom.mojom.AppWindowPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.mojom.AppWindowRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.AppWindow';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.mojom.AppWindowPendingReceiver,
      handle);
    this.$ = new extensions.mojom.mojom.AppWindowRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.mojom.AppWindowRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setVisuallyDeemphasized(deemphasized) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.mojom.AppWindow_SetVisuallyDeemphasized_ParamsSpec,
      null,
      [deemphasized]);
  }

};

extensions.mojom.mojom.AppWindow.getRemote = function() {
  let remote = new extensions.mojom.mojom.AppWindowRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.AppWindow',
    'context');
  return remote.$;
};

// ParamsSpec for SetVisuallyDeemphasized
extensions.mojom.mojom.AppWindow_SetVisuallyDeemphasized_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.AppWindow.SetVisuallyDeemphasized_Params',
      packedSize: 16,
      fields: [
        { name: 'deemphasized', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
extensions.mojom.mojom.AppWindowPtr = extensions.mojom.mojom.AppWindowRemote;
extensions.mojom.mojom.AppWindowRequest = extensions.mojom.mojom.AppWindowPendingReceiver;

