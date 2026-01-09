// Auto-generated MojoJS binding
// Source: chromium_src/url/mojom/url_test.mojom
// Module: url.mojom

'use strict';

// Module namespace
var url = url || {};
url.mojom = url.mojom || {};


// Interface: UrlTest
url.mojom.UrlTestPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'url.mojom.UrlTest';
  }

  bounceUrl(in) {
    // Method: BounceUrl
    return new Promise((resolve) => {
      // Call: BounceUrl(in)
      resolve({});
    });
  }

  bounceOrigin(in) {
    // Method: BounceOrigin
    return new Promise((resolve) => {
      // Call: BounceOrigin(in)
      resolve({});
    });
  }

};

url.mojom.UrlTestRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
