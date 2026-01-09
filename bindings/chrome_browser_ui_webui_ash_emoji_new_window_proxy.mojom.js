// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/emoji/new_window_proxy.mojom
// Module: new_window_proxy.mojom

'use strict';

// Module namespace
var new_window_proxy = new_window_proxy || {};
new_window_proxy.mojom = new_window_proxy.mojom || {};


// Interface: NewWindowProxy
new_window_proxy.mojom.NewWindowProxyPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'new_window_proxy.mojom.NewWindowProxy';
  }

  openUrl(url) {
    // Method: OpenUrl
    // Call: OpenUrl(url)
  }

};

new_window_proxy.mojom.NewWindowProxyRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
