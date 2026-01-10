// Auto-generated MojoJS binding
// Source: chromium_src/android_webview/common/mojom/renderer.mojom
// Module: android_webview.mojom

'use strict';

// Module namespace
var android_webview = android_webview || {};
android_webview.mojom = android_webview.mojom || {};

android_webview.mojom.Renderer = {};
android_webview.mojom.Renderer.$interfaceName = 'android_webview.mojom.Renderer';
android_webview.mojom.Renderer_ClearCache_ParamsSpec = { $: {} };
android_webview.mojom.Renderer_SetJsOnlineProperty_ParamsSpec = { $: {} };

// Interface: Renderer
mojo.internal.Struct(
    android_webview.mojom.Renderer_ClearCache_ParamsSpec, 'android_webview.mojom.Renderer_ClearCache_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    android_webview.mojom.Renderer_SetJsOnlineProperty_ParamsSpec, 'android_webview.mojom.Renderer_SetJsOnlineProperty_Params', [
      mojo.internal.StructField('network_up', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

android_webview.mojom.RendererPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

android_webview.mojom.RendererRemote = class {
  static get $interfaceName() {
    return 'android_webview.mojom.Renderer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      android_webview.mojom.RendererPendingReceiver,
      handle);
    this.$ = new android_webview.mojom.RendererRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

android_webview.mojom.RendererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clearCache() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      android_webview.mojom.Renderer_ClearCache_ParamsSpec,
      null,
      []);
  }

  setJsOnlineProperty(network_up) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      android_webview.mojom.Renderer_SetJsOnlineProperty_ParamsSpec,
      null,
      [network_up]);
  }

};

android_webview.mojom.Renderer.getRemote = function() {
  let remote = new android_webview.mojom.RendererRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'android_webview.mojom.Renderer',
    'context');
  return remote.$;
};

android_webview.mojom.RendererPtr = android_webview.mojom.RendererRemote;
android_webview.mojom.RendererRequest = android_webview.mojom.RendererPendingReceiver;

