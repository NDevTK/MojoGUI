// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/cache_storage/cache_storage.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: CacheStorageError
blink.mojom.CacheStorageError = {
};

// Enum: OperationType
blink.mojom.OperationType = {
};

// Struct: CacheStorageVerboseError
blink.mojom.CacheStorageVerboseError = class {
  constructor(values = {}) {
    this.message = values.message !== undefined ? values.message : "";
  }
};

// Struct: CacheQueryOptions
blink.mojom.CacheQueryOptions = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: MultiCacheQueryOptions
blink.mojom.MultiCacheQueryOptions = class {
  constructor(values = {}) {
    this.cache_name = values.cache_name !== undefined ? values.cache_name : "";
  }
};

// Struct: BatchOperation
blink.mojom.BatchOperation = class {
  constructor(values = {}) {
    this.request = values.request !== undefined ? values.request : null;
    this.defined = values.defined !== undefined ? values.defined : null;
    this.response = values.response !== undefined ? values.response : null;
    this.be = values.be !== undefined ? values.be : null;
    this.match_options = values.match_options !== undefined ? values.match_options : null;
  }
};

// Struct: EagerResponse
blink.mojom.EagerResponse = class {
  constructor(values = {}) {
    this.client_receiver = values.client_receiver !== undefined ? values.client_receiver : null;
  }
};

// Struct: CacheEntry
blink.mojom.CacheEntry = class {
  constructor(values = {}) {
    this.response = values.response !== undefined ? values.response : null;
  }
};

// Interface: CacheStorageCache
blink.mojom.CacheStorageCachePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.CacheStorageCache';
  }

  match(request, query_options, in_related_fetch_event, in_range_fetch_event, trace_id) {
    // Method: Match
    // Call: Match(request, query_options, in_related_fetch_event, in_range_fetch_event, trace_id)
  }

  matchAll(request, query_options, trace_id) {
    // Method: MatchAll
    // Call: MatchAll(request, query_options, trace_id)
  }

  getAllMatchedEntries(request, query_options, trace_id) {
    // Method: GetAllMatchedEntries
    // Call: GetAllMatchedEntries(request, query_options, trace_id)
  }

  keys(request, query_options, trace_id) {
    // Method: Keys
    // Call: Keys(request, query_options, trace_id)
  }

  batch(batch_operations, trace_id) {
    // Method: Batch
    return new Promise((resolve) => {
      // Call: Batch(batch_operations, trace_id)
      resolve({});
    });
  }

  writeSideData(url, expected_response_time, data, trace_id) {
    // Method: WriteSideData
    return new Promise((resolve) => {
      // Call: WriteSideData(url, expected_response_time, data, trace_id)
      resolve({});
    });
  }

};

blink.mojom.CacheStorageCacheRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CacheStorage
blink.mojom.CacheStoragePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.CacheStorage';
  }

  has(cache_name, trace_id) {
    // Method: Has
    return new Promise((resolve) => {
      // Call: Has(cache_name, trace_id)
      resolve({});
    });
  }

  delete(cache_name, trace_id) {
    // Method: Delete
    return new Promise((resolve) => {
      // Call: Delete(cache_name, trace_id)
      resolve({});
    });
  }

  keys(trace_id) {
    // Method: Keys
    return new Promise((resolve) => {
      // Call: Keys(trace_id)
      resolve({});
    });
  }

  match(request, match_options, in_related_fetch_event, in_range_fetch_event, trace_id) {
    // Method: Match
    // Call: Match(request, match_options, in_related_fetch_event, in_range_fetch_event, trace_id)
  }

  open(cache_name, trace_id) {
    // Method: Open
    // Call: Open(cache_name, trace_id)
  }

};

blink.mojom.CacheStorageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
