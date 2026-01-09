// Auto-generated MojoJS binding
// Source: chromium_src/android_webview/common/mojom/renderer.mojom
// Module: android_webview.mojom

'use strict';

// Module namespace
var android_webview = android_webview || {};
android_webview.mojom = android_webview.mojom || {};


// Interface: Renderer
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
      android_webview.mojom.Renderer_ClearCache_ParamsSpec.$,
      null,
      []);
  }

  setJsOnlineProperty(network_up) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      android_webview.mojom.Renderer_SetJsOnlineProperty_ParamsSpec.$,
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

// ParamsSpec for ClearCache
android_webview.mojom.Renderer_ClearCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'android_webview.mojom.Renderer.ClearCache_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetJsOnlineProperty
android_webview.mojom.Renderer_SetJsOnlineProperty_ParamsSpec = {
  $: {
    structSpec: {
      name: 'android_webview.mojom.Renderer.SetJsOnlineProperty_Params',
      packedSize: 16,
      fields: [
        { name: 'network_up', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
android_webview.mojom.RendererPtr = android_webview.mojom.RendererRemote;
android_webview.mojom.RendererRequest = android_webview.mojom.RendererPendingReceiver;

