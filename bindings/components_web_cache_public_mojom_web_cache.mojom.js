// Auto-generated MojoJS binding
// Source: chromium_src/components/web_cache/public/mojom/web_cache.mojom
// Module: web_cache.mojom

'use strict';

// Module namespace
var web_cache = web_cache || {};
web_cache.mojom = web_cache.mojom || {};


// Interface: WebCache
web_cache.mojom.WebCachePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'web_cache.mojom.WebCache';
  }

  clearCache(on_navigation) {
    // Method: ClearCache
    // Call: ClearCache(on_navigation)
  }

};

web_cache.mojom.WebCacheRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
