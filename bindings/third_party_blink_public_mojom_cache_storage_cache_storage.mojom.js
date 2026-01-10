// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/cache_storage/cache_storage.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};


// Enum: CacheStorageError
blink.mojom.mojom.CacheStorageError = {
  kSuccess: 0,
  kErrorExists: 1,
  kErrorStorage: 2,
  kErrorNotFound: 3,
  kErrorQuotaExceeded: 4,
  kErrorCacheNameNotFound: 5,
  kErrorQueryTooLarge: 6,
  kErrorNotImplemented: 7,
  kErrorDuplicateOperation: 8,
  kErrorCrossOriginResourcePolicy: 9,
};
blink.mojom.mojom.CacheStorageErrorSpec = { $: mojo.internal.Enum() };

// Enum: OperationType
blink.mojom.mojom.OperationType = {
  kUndefined: 0,
  kPut: 1,
  kDelete: 2,
};
blink.mojom.mojom.OperationTypeSpec = { $: mojo.internal.Enum() };

// Union: MatchResponse
blink.mojom.mojom.MatchResponseSpec = { $: mojo.internal.Union(
    'blink.mojom.MatchResponse', {
      'response': {
        'ordinal': 0,
        'type': blink.mojom.FetchAPIResponseSpec,
      }},
      'eager_response': {
        'ordinal': 1,
        'type': blink.mojom.EagerResponseSpec,
      }},
    })
};

// Struct: CacheStorageVerboseError
blink.mojom.mojom.CacheStorageVerboseErrorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheStorageVerboseError',
      packedSize: 24,
      fields: [
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CacheStorageErrorSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CacheQueryOptions
blink.mojom.mojom.CacheQueryOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheQueryOptions',
      packedSize: 16,
      fields: [
        { name: 'ignore_search', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ignore_method', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ignore_vary', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: MultiCacheQueryOptions
blink.mojom.mojom.MultiCacheQueryOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MultiCacheQueryOptions',
      packedSize: 24,
      fields: [
        { name: 'query_options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CacheQueryOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'cache_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BatchOperation
blink.mojom.mojom.BatchOperationSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BatchOperation',
      packedSize: 40,
      fields: [
        { name: 'operation_type', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.OperationTypeSpec, nullable: false, minVersion: 0 },
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FetchAPIRequestSpec, nullable: false, minVersion: 0 },
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FetchAPIResponseSpec, nullable: true, minVersion: 0 },
        { name: 'match_options', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.CacheQueryOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: EagerResponse
blink.mojom.mojom.EagerResponseSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EagerResponse',
      packedSize: 32,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FetchAPIResponseSpec, nullable: false, minVersion: 0 },
        { name: 'pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'client_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CacheEntry
blink.mojom.mojom.CacheEntrySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheEntry',
      packedSize: 24,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FetchAPIRequestSpec, nullable: false, minVersion: 0 },
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FetchAPIResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: CacheStorageCache
blink.mojom.mojom.CacheStorageCache = {};

blink.mojom.mojom.CacheStorageCachePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.CacheStorageCacheRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CacheStorageCache';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.CacheStorageCachePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.CacheStorageCacheRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.CacheStorageCacheRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  match(request, query_options, in_related_fetch_event, in_range_fetch_event, trace_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.CacheStorageCache_Match_ParamsSpec,
      null,
      [request, query_options, in_related_fetch_event, in_range_fetch_event, trace_id]);
  }

  matchAll(request, query_options, trace_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.CacheStorageCache_MatchAll_ParamsSpec,
      null,
      [request, query_options, trace_id]);
  }

  getAllMatchedEntries(request, query_options, trace_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.CacheStorageCache_GetAllMatchedEntries_ParamsSpec,
      null,
      [request, query_options, trace_id]);
  }

  keys(request, query_options, trace_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.CacheStorageCache_Keys_ParamsSpec,
      null,
      [request, query_options, trace_id]);
  }

  batch(batch_operations, trace_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.CacheStorageCache_Batch_ParamsSpec,
      blink.mojom.mojom.CacheStorageCache_Batch_ResponseParamsSpec,
      [batch_operations, trace_id]);
  }

  writeSideData(url, expected_response_time, data, trace_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.CacheStorageCache_WriteSideData_ParamsSpec,
      blink.mojom.mojom.CacheStorageCache_WriteSideData_ResponseParamsSpec,
      [url, expected_response_time, data, trace_id]);
  }

};

blink.mojom.mojom.CacheStorageCache.getRemote = function() {
  let remote = new blink.mojom.mojom.CacheStorageCacheRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CacheStorageCache',
    'context');
  return remote.$;
};

// ParamsSpec for Match
blink.mojom.mojom.CacheStorageCache_Match_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheStorageCache.Match_Params',
      packedSize: 40,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FetchAPIRequestSpec, nullable: false, minVersion: 0 },
        { name: 'query_options', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CacheQueryOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'in_related_fetch_event', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'in_range_fetch_event', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for MatchAll
blink.mojom.mojom.CacheStorageCache_MatchAll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheStorageCache.MatchAll_Params',
      packedSize: 32,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FetchAPIRequestSpec, nullable: true, minVersion: 0 },
        { name: 'query_options', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CacheQueryOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetAllMatchedEntries
blink.mojom.mojom.CacheStorageCache_GetAllMatchedEntries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheStorageCache.GetAllMatchedEntries_Params',
      packedSize: 32,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FetchAPIRequestSpec, nullable: true, minVersion: 0 },
        { name: 'query_options', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CacheQueryOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Keys
blink.mojom.mojom.CacheStorageCache_Keys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheStorageCache.Keys_Params',
      packedSize: 32,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FetchAPIRequestSpec, nullable: true, minVersion: 0 },
        { name: 'query_options', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CacheQueryOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Batch
blink.mojom.mojom.CacheStorageCache_Batch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheStorageCache.Batch_Params',
      packedSize: 24,
      fields: [
        { name: 'batch_operations', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.BatchOperationSpec, false), nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.CacheStorageCache_Batch_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheStorageCache.Batch_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CacheStorageVerboseErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WriteSideData
blink.mojom.mojom.CacheStorageCache_WriteSideData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheStorageCache.WriteSideData_Params',
      packedSize: 48,
      fields: [
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'expected_response_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

blink.mojom.mojom.CacheStorageCache_WriteSideData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheStorageCache.WriteSideData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CacheStorageErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.CacheStorageCachePtr = blink.mojom.mojom.CacheStorageCacheRemote;
blink.mojom.mojom.CacheStorageCacheRequest = blink.mojom.mojom.CacheStorageCachePendingReceiver;


// Interface: CacheStorage
blink.mojom.mojom.CacheStorage = {};

blink.mojom.mojom.CacheStoragePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.CacheStorageRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CacheStorage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.CacheStoragePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.CacheStorageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.CacheStorageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  has(cache_name, trace_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.CacheStorage_Has_ParamsSpec,
      blink.mojom.mojom.CacheStorage_Has_ResponseParamsSpec,
      [cache_name, trace_id]);
  }

  delete(cache_name, trace_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.CacheStorage_Delete_ParamsSpec,
      blink.mojom.mojom.CacheStorage_Delete_ResponseParamsSpec,
      [cache_name, trace_id]);
  }

  keys(trace_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.CacheStorage_Keys_ParamsSpec,
      blink.mojom.mojom.CacheStorage_Keys_ResponseParamsSpec,
      [trace_id]);
  }

  match(request, match_options, in_related_fetch_event, in_range_fetch_event, trace_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.CacheStorage_Match_ParamsSpec,
      null,
      [request, match_options, in_related_fetch_event, in_range_fetch_event, trace_id]);
  }

  open(cache_name, trace_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.CacheStorage_Open_ParamsSpec,
      null,
      [cache_name, trace_id]);
  }

};

blink.mojom.mojom.CacheStorage.getRemote = function() {
  let remote = new blink.mojom.mojom.CacheStorageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CacheStorage',
    'context');
  return remote.$;
};

// ParamsSpec for Has
blink.mojom.mojom.CacheStorage_Has_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheStorage.Has_Params',
      packedSize: 24,
      fields: [
        { name: 'cache_name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.CacheStorage_Has_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheStorage.Has_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CacheStorageErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Delete
blink.mojom.mojom.CacheStorage_Delete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheStorage.Delete_Params',
      packedSize: 24,
      fields: [
        { name: 'cache_name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.CacheStorage_Delete_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheStorage.Delete_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CacheStorageErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Keys
blink.mojom.mojom.CacheStorage_Keys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheStorage.Keys_Params',
      packedSize: 16,
      fields: [
        { name: 'trace_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.CacheStorage_Keys_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheStorage.Keys_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.String16Spec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Match
blink.mojom.mojom.CacheStorage_Match_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheStorage.Match_Params',
      packedSize: 40,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FetchAPIRequestSpec, nullable: false, minVersion: 0 },
        { name: 'match_options', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MultiCacheQueryOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'in_related_fetch_event', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'in_range_fetch_event', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for Open
blink.mojom.mojom.CacheStorage_Open_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CacheStorage.Open_Params',
      packedSize: 24,
      fields: [
        { name: 'cache_name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.CacheStoragePtr = blink.mojom.mojom.CacheStorageRemote;
blink.mojom.mojom.CacheStorageRequest = blink.mojom.mojom.CacheStoragePendingReceiver;

