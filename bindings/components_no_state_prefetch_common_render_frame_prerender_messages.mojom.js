// Auto-generated MojoJS binding
// Source: chromium_src/components/no_state_prefetch/common/render_frame_prerender_messages.mojom
// Module: prerender.mojom

'use strict';

// Module namespace
var prerender = prerender || {};
prerender.mojom = prerender.mojom || {};


// Interface: NoStatePrefetchMessages
prerender.mojom.NoStatePrefetchMessagesPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'prerender.mojom.NoStatePrefetchMessages';
  }

  setIsNoStatePrefetching(histogram_prefix) {
    // Method: SetIsNoStatePrefetching
    // Call: SetIsNoStatePrefetching(histogram_prefix)
  }

};

prerender.mojom.NoStatePrefetchMessagesRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
