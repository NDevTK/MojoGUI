// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/blob_url_store.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: BlobURLStore
blink.mojom.BlobURLStorePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.BlobURLStore';
  }

  revoke(url) {
    // Method: Revoke
    // Call: Revoke(url)
  }

  resolveAsURLLoaderFactory(url, factory) {
    // Method: ResolveAsURLLoaderFactory
    // Call: ResolveAsURLLoaderFactory(url, factory)
  }

  resolveAsBlobURLToken(url, token, is_top_level_navigation) {
    // Method: ResolveAsBlobURLToken
    // Call: ResolveAsBlobURLToken(url, token, is_top_level_navigation)
  }

};

blink.mojom.BlobURLStoreRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BlobURLToken
blink.mojom.BlobURLTokenPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.BlobURLToken';
  }

  clone(token) {
    // Method: Clone
    // Call: Clone(token)
  }

  getToken() {
    // Method: GetToken
    return new Promise((resolve) => {
      // Call: GetToken()
      resolve({});
    });
  }

};

blink.mojom.BlobURLTokenRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
