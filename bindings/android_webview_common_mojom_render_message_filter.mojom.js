// Auto-generated MojoJS binding
// Source: chromium_src/android_webview/common/mojom/render_message_filter.mojom
// Module: android_webview.mojom

'use strict';

// Module namespace
var android_webview = android_webview || {};
android_webview.mojom = android_webview.mojom || {};


// Interface: RenderMessageFilter
android_webview.mojom.RenderMessageFilterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'android_webview.mojom.RenderMessageFilter';
  }

  subFrameCreated(parent_frame_token, child_frame_token) {
    // Method: SubFrameCreated
    // Call: SubFrameCreated(parent_frame_token, child_frame_token)
  }

};

android_webview.mojom.RenderMessageFilterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
