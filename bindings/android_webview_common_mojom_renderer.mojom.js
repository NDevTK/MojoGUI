// Auto-generated MojoJS binding
// Source: chromium_src/android_webview/common/mojom/renderer.mojom
// Module: android_webview.mojom

'use strict';

// Module namespace
var android_webview = android_webview || {};
android_webview.mojom = android_webview.mojom || {};


// Interface: Renderer
android_webview.mojom.RendererPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'android_webview.mojom.Renderer';
  }

  clearCache() {
    // Method: ClearCache
    // Call: ClearCache()
  }

  setJsOnlineProperty(network_up) {
    // Method: SetJsOnlineProperty
    // Call: SetJsOnlineProperty(network_up)
  }

};

android_webview.mojom.RendererRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
