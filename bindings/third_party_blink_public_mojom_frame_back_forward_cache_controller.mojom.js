// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/back_forward_cache_controller.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: BlockingDetails
blink.mojom.BlockingDetails = class {
  constructor(values = {}) {
    this.source = values.source !== undefined ? values.source : null;
  }
};

// Interface: BackForwardCacheControllerHost
blink.mojom.BackForwardCacheControllerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.BackForwardCacheControllerHost';
  }

  evictFromBackForwardCache(reason, source) {
    // Method: EvictFromBackForwardCache
    // Call: EvictFromBackForwardCache(reason, source)
  }

  didChangeBackForwardCacheDisablingFeatures(details) {
    // Method: DidChangeBackForwardCacheDisablingFeatures
    // Call: DidChangeBackForwardCacheDisablingFeatures(details)
  }

};

blink.mojom.BackForwardCacheControllerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
