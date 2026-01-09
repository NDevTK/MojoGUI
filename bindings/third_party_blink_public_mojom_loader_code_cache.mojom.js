// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/code_cache.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: CodeCacheType
blink.mojom.CodeCacheType = {
};

// Interface: CodeCacheHost
blink.mojom.CodeCacheHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.CodeCacheHost';
  }

  getPendingBackend(cache_type) {
    // Method: GetPendingBackend
    return new Promise((resolve) => {
      // Call: GetPendingBackend(cache_type)
      resolve({});
    });
  }

  didGenerateCacheableMetadata(cache_type, url, expected_response_time, data) {
    // Method: DidGenerateCacheableMetadata
    // Call: DidGenerateCacheableMetadata(cache_type, url, expected_response_time, data)
  }

  fetchCachedCode(cache_type, url) {
    // Method: FetchCachedCode
    return new Promise((resolve) => {
      // Call: FetchCachedCode(cache_type, url)
      resolve({});
    });
  }

  clearCodeCacheEntry(cache_type, url) {
    // Method: ClearCodeCacheEntry
    // Call: ClearCodeCacheEntry(cache_type, url)
  }

  didGenerateCacheableMetadataInCacheStorage(url, expected_response_time, data, cache_storage_cache_name) {
    // Method: DidGenerateCacheableMetadataInCacheStorage
    // Call: DidGenerateCacheableMetadataInCacheStorage(url, expected_response_time, data, cache_storage_cache_name)
  }

};

blink.mojom.CodeCacheHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
