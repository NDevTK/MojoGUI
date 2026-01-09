// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/net_benchmarking.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: NetBenchmarking
chrome.mojom.NetBenchmarkingPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.NetBenchmarking';
  }

  closeCurrentConnections() {
    // Method: CloseCurrentConnections
    // Call: CloseCurrentConnections()
  }

  clearCache() {
    // Method: ClearCache
    // Call: ClearCache()
  }

  clearHostResolverCache() {
    // Method: ClearHostResolverCache
    // Call: ClearHostResolverCache()
  }

  clearPredictorCache() {
    // Method: ClearPredictorCache
    // Call: ClearPredictorCache()
  }

};

chrome.mojom.NetBenchmarkingRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
