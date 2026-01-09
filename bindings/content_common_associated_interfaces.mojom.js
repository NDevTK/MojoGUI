// Auto-generated MojoJS binding
// Source: chromium_src/content/common/associated_interfaces.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: RouteProvider
content.mojom.RouteProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.RouteProvider';
  }

  getRoute(frame_token, receiver) {
    // Method: GetRoute
    // Call: GetRoute(frame_token, receiver)
  }

};

content.mojom.RouteProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
