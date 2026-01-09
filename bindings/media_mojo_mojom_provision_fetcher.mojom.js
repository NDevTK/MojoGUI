// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/provision_fetcher.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: ProvisionFetcher
media.mojom.ProvisionFetcherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.ProvisionFetcher';
  }

  retrieve(default_url, request_data) {
    // Method: Retrieve
    return new Promise((resolve) => {
      // Call: Retrieve(default_url, request_data)
      resolve({});
    });
  }

};

media.mojom.ProvisionFetcherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
