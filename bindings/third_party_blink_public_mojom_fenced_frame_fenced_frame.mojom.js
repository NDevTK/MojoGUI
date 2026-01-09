// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/fenced_frame/fenced_frame.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FencedFrameOwnerHost
blink.mojom.FencedFrameOwnerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FencedFrameOwnerHost';
  }

  navigate(url, navigation_start_time, embedder_shared_storage_context) {
    // Method: Navigate
    // Call: Navigate(url, navigation_start_time, embedder_shared_storage_context)
  }

  didChangeFramePolicy(frame_policy) {
    // Method: DidChangeFramePolicy
    // Call: DidChangeFramePolicy(frame_policy)
  }

};

blink.mojom.FencedFrameOwnerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
