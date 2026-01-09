// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/fetch_later.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FetchLaterLoaderFactory
blink.mojom.FetchLaterLoaderFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FetchLaterLoaderFactory';
  }

  createLoader(loader, request_id, options, request, traffic_annotation) {
    // Method: CreateLoader
    // Call: CreateLoader(loader, request_id, options, request, traffic_annotation)
  }

  clone(factory) {
    // Method: Clone
    // Call: Clone(factory)
  }

};

blink.mojom.FetchLaterLoaderFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FetchLaterLoader
blink.mojom.FetchLaterLoaderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FetchLaterLoader';
  }

  sendNow() {
    // Method: SendNow
    // Call: SendNow()
  }

  cancel() {
    // Method: Cancel
    // Call: Cancel()
  }

};

blink.mojom.FetchLaterLoaderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
