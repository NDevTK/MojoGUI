// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/cache_storage/cache_storage.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

blink.mojom.CacheStorageErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.OperationTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.MatchResponseSpec = { $: {} };
blink.mojom.CacheStorageVerboseErrorSpec = { $: {} };
blink.mojom.CacheQueryOptionsSpec = { $: {} };
blink.mojom.MultiCacheQueryOptionsSpec = { $: {} };
blink.mojom.BatchOperationSpec = { $: {} };
blink.mojom.EagerResponseSpec = { $: {} };
blink.mojom.CacheEntrySpec = { $: {} };
blink.mojom.CacheStorageCache = {};
blink.mojom.CacheStorageCache.$interfaceName = 'blink.mojom.CacheStorageCache';
blink.mojom.CacheStorageCache_Match_ParamsSpec = { $: {} };
blink.mojom.CacheStorageCache_MatchAll_ParamsSpec = { $: {} };
blink.mojom.CacheStorageCache_GetAllMatchedEntries_ParamsSpec = { $: {} };
blink.mojom.CacheStorageCache_Keys_ParamsSpec = { $: {} };
blink.mojom.CacheStorageCache_Batch_ParamsSpec = { $: {} };
blink.mojom.CacheStorageCache_Batch_ResponseParamsSpec = { $: {} };
blink.mojom.CacheStorageCache_WriteSideData_ParamsSpec = { $: {} };
blink.mojom.CacheStorageCache_WriteSideData_ResponseParamsSpec = { $: {} };
blink.mojom.CacheStorage = {};
blink.mojom.CacheStorage.$interfaceName = 'blink.mojom.CacheStorage';
blink.mojom.CacheStorage_Has_ParamsSpec = { $: {} };
blink.mojom.CacheStorage_Has_ResponseParamsSpec = { $: {} };
blink.mojom.CacheStorage_Delete_ParamsSpec = { $: {} };
blink.mojom.CacheStorage_Delete_ResponseParamsSpec = { $: {} };
blink.mojom.CacheStorage_Keys_ParamsSpec = { $: {} };
blink.mojom.CacheStorage_Keys_ResponseParamsSpec = { $: {} };
blink.mojom.CacheStorage_Match_ParamsSpec = { $: {} };
blink.mojom.CacheStorage_Open_ParamsSpec = { $: {} };

// Enum: CacheStorageError
blink.mojom.CacheStorageError = {
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

// Enum: OperationType
blink.mojom.OperationType = {
  kUndefined: 0,
  kPut: 1,
  kDelete: 2,
};

// Union: MatchResponse
mojo.internal.Union(
    blink.mojom.MatchResponseSpec, 'blink.mojom.MatchResponse', {
      'response': {
        'ordinal': 0,
        'type': blink.mojom.FetchAPIResponseSpec.$,
        'nullable': false,
      },
      'eager_response': {
        'ordinal': 1,
        'type': blink.mojom.EagerResponseSpec.$,
        'nullable': false,
      },
    });

// Struct: CacheStorageVerboseError
mojo.internal.Struct(
    blink.mojom.CacheStorageVerboseErrorSpec, 'blink.mojom.CacheStorageVerboseError', [
      mojo.internal.StructField('value', 0, 0, blink.mojom.CacheStorageErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CacheQueryOptions
mojo.internal.Struct(
    blink.mojom.CacheQueryOptionsSpec, 'blink.mojom.CacheQueryOptions', [
      mojo.internal.StructField('ignore_search', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ignore_method', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ignore_vary', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MultiCacheQueryOptions
mojo.internal.Struct(
    blink.mojom.MultiCacheQueryOptionsSpec, 'blink.mojom.MultiCacheQueryOptions', [
      mojo.internal.StructField('query_options', 0, 0, blink.mojom.CacheQueryOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cache_name', 8, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BatchOperation
mojo.internal.Struct(
    blink.mojom.BatchOperationSpec, 'blink.mojom.BatchOperation', [
      mojo.internal.StructField('operation_type', 0, 0, blink.mojom.OperationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request', 8, 0, blink.mojom.FetchAPIRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response', 16, 0, blink.mojom.FetchAPIResponseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('match_options', 24, 0, blink.mojom.CacheQueryOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: EagerResponse
mojo.internal.Struct(
    blink.mojom.EagerResponseSpec, 'blink.mojom.EagerResponse', [
      mojo.internal.StructField('response', 0, 0, blink.mojom.FetchAPIResponseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('client_receiver', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.BlobReaderClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CacheEntry
mojo.internal.Struct(
    blink.mojom.CacheEntrySpec, 'blink.mojom.CacheEntry', [
      mojo.internal.StructField('request', 0, 0, blink.mojom.FetchAPIRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response', 8, 0, blink.mojom.FetchAPIResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: CacheStorageCache
mojo.internal.Struct(
    blink.mojom.CacheStorageCache_Match_ParamsSpec, 'blink.mojom.CacheStorageCache_Match_Params', [
      mojo.internal.StructField('request', 0, 0, blink.mojom.FetchAPIRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('query_options', 8, 0, blink.mojom.CacheQueryOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trace_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('in_related_fetch_event', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('in_range_fetch_event', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.CacheStorageCache_MatchAll_ParamsSpec, 'blink.mojom.CacheStorageCache_MatchAll_Params', [
      mojo.internal.StructField('request', 0, 0, blink.mojom.FetchAPIRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('query_options', 8, 0, blink.mojom.CacheQueryOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trace_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.CacheStorageCache_GetAllMatchedEntries_ParamsSpec, 'blink.mojom.CacheStorageCache_GetAllMatchedEntries_Params', [
      mojo.internal.StructField('request', 0, 0, blink.mojom.FetchAPIRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('query_options', 8, 0, blink.mojom.CacheQueryOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trace_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.CacheStorageCache_Keys_ParamsSpec, 'blink.mojom.CacheStorageCache_Keys_Params', [
      mojo.internal.StructField('request', 0, 0, blink.mojom.FetchAPIRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('query_options', 8, 0, blink.mojom.CacheQueryOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trace_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.CacheStorageCache_Batch_ParamsSpec, 'blink.mojom.CacheStorageCache_Batch_Params', [
      mojo.internal.StructField('batch_operations', 0, 0, mojo.internal.Array(blink.mojom.BatchOperationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('trace_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.CacheStorageCache_Batch_ResponseParamsSpec, 'blink.mojom.CacheStorageCache_Batch_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.CacheStorageVerboseErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.CacheStorageCache_WriteSideData_ParamsSpec, 'blink.mojom.CacheStorageCache_WriteSideData_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expected_response_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 16, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trace_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.CacheStorageCache_WriteSideData_ResponseParamsSpec, 'blink.mojom.CacheStorageCache_WriteSideData_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.CacheStorageErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.CacheStorageCachePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.CacheStorageCacheRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CacheStorageCache';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.CacheStorageCachePendingReceiver,
      handle);
    this.$ = new blink.mojom.CacheStorageCacheRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  match(request, query_options, in_related_fetch_event, in_range_fetch_event, trace_id) {
    return this.$.match(request, query_options, in_related_fetch_event, in_range_fetch_event, trace_id);
  }
  matchAll(request, query_options, trace_id) {
    return this.$.matchAll(request, query_options, trace_id);
  }
  getAllMatchedEntries(request, query_options, trace_id) {
    return this.$.getAllMatchedEntries(request, query_options, trace_id);
  }
  keys(request, query_options, trace_id) {
    return this.$.keys(request, query_options, trace_id);
  }
  batch(batch_operations, trace_id) {
    return this.$.batch(batch_operations, trace_id);
  }
  writeSideData(url, expected_response_time, data, trace_id) {
    return this.$.writeSideData(url, expected_response_time, data, trace_id);
  }
};

blink.mojom.CacheStorageCacheRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CacheStorageCache', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  match(request, query_options, in_related_fetch_event, in_range_fetch_event, trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.CacheStorageCache_Match_ParamsSpec,
      null,
      [request, query_options, in_related_fetch_event, in_range_fetch_event, trace_id],
      false);
  }

  matchAll(request, query_options, trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.CacheStorageCache_MatchAll_ParamsSpec,
      null,
      [request, query_options, trace_id],
      false);
  }

  getAllMatchedEntries(request, query_options, trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.CacheStorageCache_GetAllMatchedEntries_ParamsSpec,
      null,
      [request, query_options, trace_id],
      false);
  }

  keys(request, query_options, trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.CacheStorageCache_Keys_ParamsSpec,
      null,
      [request, query_options, trace_id],
      false);
  }

  batch(batch_operations, trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.CacheStorageCache_Batch_ParamsSpec,
      blink.mojom.CacheStorageCache_Batch_ResponseParamsSpec,
      [batch_operations, trace_id],
      false);
  }

  writeSideData(url, expected_response_time, data, trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.CacheStorageCache_WriteSideData_ParamsSpec,
      blink.mojom.CacheStorageCache_WriteSideData_ResponseParamsSpec,
      [url, expected_response_time, data, trace_id],
      false);
  }

};

blink.mojom.CacheStorageCache.getRemote = function() {
  let remote = new blink.mojom.CacheStorageCacheRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CacheStorageCache',
    'context');
  return remote.$;
};

blink.mojom.CacheStorageCacheReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CacheStorageCache', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.CacheStorageCache_Match_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.CacheStorageCache_MatchAll_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.CacheStorageCache_GetAllMatchedEntries_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.CacheStorageCache_Keys_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.CacheStorageCache_Batch_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.CacheStorageCache_WriteSideData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CacheStorageCache_Match_ParamsSpec.$.structSpec);
          const result = this.impl.match(params.request, params.query_options, params.in_related_fetch_event, params.in_range_fetch_event, params.trace_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CacheStorageCache_MatchAll_ParamsSpec.$.structSpec);
          const result = this.impl.matchAll(params.request, params.query_options, params.trace_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CacheStorageCache_GetAllMatchedEntries_ParamsSpec.$.structSpec);
          const result = this.impl.getAllMatchedEntries(params.request, params.query_options, params.trace_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CacheStorageCache_Keys_ParamsSpec.$.structSpec);
          const result = this.impl.keys(params.request, params.query_options, params.trace_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CacheStorageCache_Batch_ParamsSpec.$.structSpec);
          const result = this.impl.batch(params.batch_operations, params.trace_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.CacheStorageCache_Batch_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CacheStorageCache_WriteSideData_ParamsSpec.$.structSpec);
          const result = this.impl.writeSideData(params.url, params.expected_response_time, params.data, params.trace_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.CacheStorageCache_WriteSideData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.CacheStorageCacheReceiver = blink.mojom.CacheStorageCacheReceiver;

blink.mojom.CacheStorageCachePtr = blink.mojom.CacheStorageCacheRemote;
blink.mojom.CacheStorageCacheRequest = blink.mojom.CacheStorageCachePendingReceiver;


// Interface: CacheStorage
mojo.internal.Struct(
    blink.mojom.CacheStorage_Has_ParamsSpec, 'blink.mojom.CacheStorage_Has_Params', [
      mojo.internal.StructField('cache_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('trace_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.CacheStorage_Has_ResponseParamsSpec, 'blink.mojom.CacheStorage_Has_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.CacheStorageErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.CacheStorage_Delete_ParamsSpec, 'blink.mojom.CacheStorage_Delete_Params', [
      mojo.internal.StructField('cache_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('trace_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.CacheStorage_Delete_ResponseParamsSpec, 'blink.mojom.CacheStorage_Delete_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.CacheStorageErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.CacheStorage_Keys_ParamsSpec, 'blink.mojom.CacheStorage_Keys_Params', [
      mojo.internal.StructField('trace_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.CacheStorage_Keys_ResponseParamsSpec, 'blink.mojom.CacheStorage_Keys_ResponseParams', [
      mojo.internal.StructField('keys', 0, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.CacheStorage_Match_ParamsSpec, 'blink.mojom.CacheStorage_Match_Params', [
      mojo.internal.StructField('request', 0, 0, blink.mojom.FetchAPIRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('match_options', 8, 0, blink.mojom.MultiCacheQueryOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trace_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('in_related_fetch_event', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('in_range_fetch_event', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.CacheStorage_Open_ParamsSpec, 'blink.mojom.CacheStorage_Open_Params', [
      mojo.internal.StructField('cache_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('trace_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.CacheStoragePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.CacheStorageRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CacheStorage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.CacheStoragePendingReceiver,
      handle);
    this.$ = new blink.mojom.CacheStorageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  has(cache_name, trace_id) {
    return this.$.has(cache_name, trace_id);
  }
  delete(cache_name, trace_id) {
    return this.$.delete(cache_name, trace_id);
  }
  keys(trace_id) {
    return this.$.keys(trace_id);
  }
  match(request, match_options, in_related_fetch_event, in_range_fetch_event, trace_id) {
    return this.$.match(request, match_options, in_related_fetch_event, in_range_fetch_event, trace_id);
  }
  open(cache_name, trace_id) {
    return this.$.open(cache_name, trace_id);
  }
};

blink.mojom.CacheStorageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CacheStorage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  has(cache_name, trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.CacheStorage_Has_ParamsSpec,
      blink.mojom.CacheStorage_Has_ResponseParamsSpec,
      [cache_name, trace_id],
      false);
  }

  delete(cache_name, trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.CacheStorage_Delete_ParamsSpec,
      blink.mojom.CacheStorage_Delete_ResponseParamsSpec,
      [cache_name, trace_id],
      false);
  }

  keys(trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.CacheStorage_Keys_ParamsSpec,
      blink.mojom.CacheStorage_Keys_ResponseParamsSpec,
      [trace_id],
      false);
  }

  match(request, match_options, in_related_fetch_event, in_range_fetch_event, trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.CacheStorage_Match_ParamsSpec,
      null,
      [request, match_options, in_related_fetch_event, in_range_fetch_event, trace_id],
      false);
  }

  open(cache_name, trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.CacheStorage_Open_ParamsSpec,
      null,
      [cache_name, trace_id],
      false);
  }

};

blink.mojom.CacheStorage.getRemote = function() {
  let remote = new blink.mojom.CacheStorageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CacheStorage',
    'context');
  return remote.$;
};

blink.mojom.CacheStorageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CacheStorage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.CacheStorage_Has_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.CacheStorage_Delete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.CacheStorage_Keys_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.CacheStorage_Match_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.CacheStorage_Open_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CacheStorage_Has_ParamsSpec.$.structSpec);
          const result = this.impl.has(params.cache_name, params.trace_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.CacheStorage_Has_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CacheStorage_Delete_ParamsSpec.$.structSpec);
          const result = this.impl.delete(params.cache_name, params.trace_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.CacheStorage_Delete_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CacheStorage_Keys_ParamsSpec.$.structSpec);
          const result = this.impl.keys(params.trace_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.CacheStorage_Keys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CacheStorage_Match_ParamsSpec.$.structSpec);
          const result = this.impl.match(params.request, params.match_options, params.in_related_fetch_event, params.in_range_fetch_event, params.trace_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CacheStorage_Open_ParamsSpec.$.structSpec);
          const result = this.impl.open(params.cache_name, params.trace_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.CacheStorageReceiver = blink.mojom.CacheStorageReceiver;

blink.mojom.CacheStoragePtr = blink.mojom.CacheStorageRemote;
blink.mojom.CacheStorageRequest = blink.mojom.CacheStoragePendingReceiver;

