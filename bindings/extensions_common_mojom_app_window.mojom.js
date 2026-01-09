// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/app_window.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Interface: AppWindow
extensions.mojom.AppWindow = {};

extensions.mojom.AppWindowPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.AppWindowRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.AppWindow';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.AppWindowPendingReceiver,
      handle);
    this.$ = new extensions.mojom.AppWindowRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.AppWindowRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setVisuallyDeemphasized(deemphasized) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.AppWindow_SetVisuallyDeemphasized_ParamsSpec,
      null,
      [deemphasized]);
  }

};

extensions.mojom.AppWindow.getRemote = function() {
  let remote = new extensions.mojom.AppWindowRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.AppWindow',
    'context');
  return remote.$;
};

// ParamsSpec for SetVisuallyDeemphasized
extensions.mojom.AppWindow_SetVisuallyDeemphasized_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.AppWindow.SetVisuallyDeemphasized_Params',
      packedSize: 16,
      fields: [
        { name: 'deemphasized', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
extensions.mojom.AppWindowPtr = extensions.mojom.AppWindowRemote;
extensions.mojom.AppWindowRequest = extensions.mojom.AppWindowPendingReceiver;

