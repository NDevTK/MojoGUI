// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/public/mojom/histogram_fetcher.mojom
// Module: metrics.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.mojom = metrics.mojom || {};


// Enum: UmaChildPingStatus
metrics.mojom.UmaChildPingStatus = {
  BROWSER_SENT_IPC: 0,
  CHILD_RECEIVED_IPC: 1,
  BROWSER_REPLY_CALLBACK: 2,
};

// Enum: UmaPingCallSource
metrics.mojom.UmaPingCallSource = {
  PERIODIC: 0,
  SHARED_MEMORY_SET_UP: 1,
};

// Interface: ChildHistogramFetcherFactory
metrics.mojom.ChildHistogramFetcherFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'metrics.mojom.ChildHistogramFetcherFactory';
  }

  createFetcher(shared_memory, child_histogram_fetcher) {
    // Method: CreateFetcher
    // Call: CreateFetcher(shared_memory, child_histogram_fetcher)
  }

};

metrics.mojom.ChildHistogramFetcherFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ChildHistogramFetcher
metrics.mojom.ChildHistogramFetcherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'metrics.mojom.ChildHistogramFetcher';
  }

  getChildNonPersistentHistogramData() {
    // Method: GetChildNonPersistentHistogramData
    return new Promise((resolve) => {
      // Call: GetChildNonPersistentHistogramData()
      resolve({});
    });
  }

  ping(call_source) {
    // Method: Ping
    // Call: Ping(call_source)
  }

};

metrics.mojom.ChildHistogramFetcherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
