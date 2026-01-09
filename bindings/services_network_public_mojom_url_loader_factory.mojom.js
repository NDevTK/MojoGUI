// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_loader_factory.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: URLLoaderFactory
network.mojom.URLLoaderFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.URLLoaderFactory';
  }

  createLoaderAndStart() {
    // Method: CreateLoaderAndStart
    // Call: CreateLoaderAndStart()
  }

  createLoaderAndStart(loader, request_id, options, request, client, traffic_annotation) {
    // Method: CreateLoaderAndStart
    // Call: CreateLoaderAndStart(loader, request_id, options, request, client, traffic_annotation)
  }

  clone(factory) {
    // Method: Clone
    // Call: Clone(factory)
  }

};

network.mojom.URLLoaderFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
