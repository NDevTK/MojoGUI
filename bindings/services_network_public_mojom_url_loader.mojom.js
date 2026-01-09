// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_loader.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: URLLoaderClientEndpoints
network.mojom.URLLoaderClientEndpoints = class {
  constructor(values = {}) {
    this.url_loader_client = values.url_loader_client !== undefined ? values.url_loader_client : null;
  }
};

// Interface: URLLoader
network.mojom.URLLoaderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.URLLoader';
  }

  followRedirect() {
    // Method: FollowRedirect
    // Call: FollowRedirect()
  }

  followRedirect(removed_headers, modified_headers, modified_cors_exempt_headers, new_url) {
    // Method: FollowRedirect
    // Call: FollowRedirect(removed_headers, modified_headers, modified_cors_exempt_headers, new_url)
  }

  setPriority(priority, intra_priority_value) {
    // Method: SetPriority
    // Call: SetPriority(priority, intra_priority_value)
  }

};

network.mojom.URLLoaderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: URLLoaderClient
network.mojom.URLLoaderClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.URLLoaderClient';
  }

  onReceiveEarlyHints(early_hints) {
    // Method: OnReceiveEarlyHints
    // Call: OnReceiveEarlyHints(early_hints)
  }

  onReceiveResponse(head, body, cached_metadata) {
    // Method: OnReceiveResponse
    // Call: OnReceiveResponse(head, body, cached_metadata)
  }

  onReceiveRedirect(redirect_info, head) {
    // Method: OnReceiveRedirect
    // Call: OnReceiveRedirect(redirect_info, head)
  }

  onUploadProgress(current_position, total_size) {
    // Method: OnUploadProgress
    // Call: OnUploadProgress(current_position, total_size)
  }

  response(both) {
    // Method: response
    // Call: response(both)
  }

  one(in) {
    // Method: one
    // Call: one(in)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  onTransferSizeUpdated(transfer_size_diff) {
    // Method: OnTransferSizeUpdated
    // Call: OnTransferSizeUpdated(transfer_size_diff)
  }

  onReceiveResponse() {
    // Method: OnReceiveResponse
    // Call: OnReceiveResponse()
  }

  onComplete() {
    // Method: OnComplete
    // Call: OnComplete()
  }

  pipe(errored) {
    // Method: pipe
    // Call: pipe(errored)
  }

  onComplete(status) {
    // Method: OnComplete
    // Call: OnComplete(status)
  }

};

network.mojom.URLLoaderClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
