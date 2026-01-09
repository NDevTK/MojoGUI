// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/web_bundle_handle.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: WebBundleErrorType
network.mojom.WebBundleErrorType = {
  kMetadataParseError: 0,
  kResponseParseError: 1,
  kResourceNotFound: 2,
  kMemoryQuotaExceeded: 3,
  kServingConstraintsNotMet: 4,
  kWebBundleFetchFailed: 5,
  kWebBundleRedirected: 6,
  kDeprecationWarning: 7,
};

// Interface: WebBundleHandle
network.mojom.WebBundleHandlePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.WebBundleHandle';
  }

  clone(receiver) {
    // Method: Clone
    // Call: Clone(receiver)
  }

  onWebBundleError(type, message) {
    // Method: OnWebBundleError
    // Call: OnWebBundleError(type, message)
  }

  onWebBundleLoadFinished(success) {
    // Method: OnWebBundleLoadFinished
    // Call: OnWebBundleLoadFinished(success)
  }

};

network.mojom.WebBundleHandleRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
