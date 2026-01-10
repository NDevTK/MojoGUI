// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/app_window.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};

extensions.mojom.AppWindow = {};
extensions.mojom.AppWindow.$interfaceName = 'extensions.mojom.AppWindow';
extensions.mojom.AppWindow_SetVisuallyDeemphasized_ParamsSpec = { $: {} };

// Interface: AppWindow
mojo.internal.Struct(
    extensions.mojom.AppWindow_SetVisuallyDeemphasized_ParamsSpec, 'extensions.mojom.AppWindow_SetVisuallyDeemphasized_Params', [
      mojo.internal.StructField('deemphasized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [deemphasized],
      false);
  }

};

extensions.mojom.AppWindow.getRemote = function() {
  let remote = new extensions.mojom.AppWindowRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'extensions.mojom.AppWindow',
    'context');
  return remote.$;
};

extensions.mojom.AppWindowPtr = extensions.mojom.AppWindowRemote;
extensions.mojom.AppWindowRequest = extensions.mojom.AppWindowPendingReceiver;

