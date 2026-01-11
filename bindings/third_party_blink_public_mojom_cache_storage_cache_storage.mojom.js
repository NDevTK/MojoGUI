// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/cache_storage/cache_storage.mojom
 // Module: blink.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.blink.mojom.CacheStorageErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.OperationTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.MatchResponseSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheStorageVerboseErrorSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheQueryOptionsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MultiCacheQueryOptionsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.BatchOperationSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EagerResponseSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheEntrySpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheStorageCache = {};
mojo.internal.bindings.blink.mojom.CacheStorageCacheSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.CacheStorageCache.$interfaceName = 'blink.mojom.CacheStorageCache';
mojo.internal.bindings.blink.mojom.CacheStorageCache_Match_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheStorageCache_MatchAll_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheStorageCache_GetAllMatchedEntries_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheStorageCache_Keys_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheStorageCache_Batch_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheStorageCache_Batch_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheStorageCache_WriteSideData_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheStorageCache_WriteSideData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheStorage = {};
mojo.internal.bindings.blink.mojom.CacheStorageSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.CacheStorage.$interfaceName = 'blink.mojom.CacheStorage';
mojo.internal.bindings.blink.mojom.CacheStorage_Has_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheStorage_Has_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheStorage_Delete_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheStorage_Delete_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheStorage_Keys_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheStorage_Keys_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheStorage_Match_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CacheStorage_Open_ParamsSpec = { $: {} };

// Enum: CacheStorageError
mojo.internal.bindings.blink.mojom.CacheStorageError = {
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
mojo.internal.bindings.blink.mojom.OperationType = {
  kUndefined: 0,
  kPut: 1,
  kDelete: 2,
};

// Union: MatchResponse
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.MatchResponseSpec, 'blink.mojom.MatchResponse', {
      'arg_response': {
        'ordinal': 0,
        'type': mojo.internal.bindings.blink.mojom.FetchAPIResponseSpec.$,
        'nullable': false,
      },
      'arg_eager_response': {
        'ordinal': 1,
        'type': mojo.internal.bindings.blink.mojom.EagerResponseSpec.$,
        'nullable': false,
      },
    });

// Struct: CacheStorageVerboseError
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheStorageVerboseErrorSpec, 'blink.mojom.CacheStorageVerboseError', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.bindings.blink.mojom.CacheStorageErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CacheQueryOptions
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheQueryOptionsSpec, 'blink.mojom.CacheQueryOptions', [
      mojo.internal.StructField('arg_ignore_search', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ignore_method', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ignore_vary', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MultiCacheQueryOptions
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MultiCacheQueryOptionsSpec, 'blink.mojom.MultiCacheQueryOptions', [
      mojo.internal.StructField('arg_query_options', 0, 0, mojo.internal.bindings.blink.mojom.CacheQueryOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cache_name', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BatchOperation
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.BatchOperationSpec, 'blink.mojom.BatchOperation', [
      mojo.internal.StructField('arg_operation_type', 0, 0, mojo.internal.bindings.blink.mojom.OperationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request', 8, 0, mojo.internal.bindings.blink.mojom.FetchAPIRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_response', 16, 0, mojo.internal.bindings.blink.mojom.FetchAPIResponseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_match_options', 24, 0, mojo.internal.bindings.blink.mojom.CacheQueryOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: EagerResponse
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EagerResponseSpec, 'blink.mojom.EagerResponse', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.blink.mojom.FetchAPIResponseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_client_receiver', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.BlobReaderClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CacheEntry
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheEntrySpec, 'blink.mojom.CacheEntry', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.blink.mojom.FetchAPIRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_response', 8, 0, mojo.internal.bindings.blink.mojom.FetchAPIResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: CacheStorageCache
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheStorageCache_Match_ParamsSpec, 'blink.mojom.CacheStorageCache_Match_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.blink.mojom.FetchAPIRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_query_options', 8, 0, mojo.internal.bindings.blink.mojom.CacheQueryOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trace_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_in_related_fetch_event', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_in_range_fetch_event', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheStorageCache_MatchAll_ParamsSpec, 'blink.mojom.CacheStorageCache_MatchAll_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.blink.mojom.FetchAPIRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_query_options', 8, 0, mojo.internal.bindings.blink.mojom.CacheQueryOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trace_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheStorageCache_GetAllMatchedEntries_ParamsSpec, 'blink.mojom.CacheStorageCache_GetAllMatchedEntries_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.blink.mojom.FetchAPIRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_query_options', 8, 0, mojo.internal.bindings.blink.mojom.CacheQueryOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trace_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheStorageCache_Keys_ParamsSpec, 'blink.mojom.CacheStorageCache_Keys_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.blink.mojom.FetchAPIRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_query_options', 8, 0, mojo.internal.bindings.blink.mojom.CacheQueryOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trace_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheStorageCache_Batch_ParamsSpec, 'blink.mojom.CacheStorageCache_Batch_Params', [
      mojo.internal.StructField('arg_batch_operations', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.BatchOperationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_trace_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheStorageCache_Batch_ResponseParamsSpec, 'blink.mojom.CacheStorageCache_Batch_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.CacheStorageVerboseErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheStorageCache_WriteSideData_ParamsSpec, 'blink.mojom.CacheStorageCache_WriteSideData_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_expected_response_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 16, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trace_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheStorageCache_WriteSideData_ResponseParamsSpec, 'blink.mojom.CacheStorageCache_WriteSideData_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.CacheStorageErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.CacheStorageCachePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.CacheStorageCacheRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CacheStorageCache';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.CacheStorageCachePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.CacheStorageCacheRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  match(arg_request, arg_query_options, arg_in_related_fetch_event, arg_in_range_fetch_event, arg_trace_id) {
    return this.$.match(arg_request, arg_query_options, arg_in_related_fetch_event, arg_in_range_fetch_event, arg_trace_id);
  }
  matchAll(arg_request, arg_query_options, arg_trace_id) {
    return this.$.matchAll(arg_request, arg_query_options, arg_trace_id);
  }
  getAllMatchedEntries(arg_request, arg_query_options, arg_trace_id) {
    return this.$.getAllMatchedEntries(arg_request, arg_query_options, arg_trace_id);
  }
  keys(arg_request, arg_query_options, arg_trace_id) {
    return this.$.keys(arg_request, arg_query_options, arg_trace_id);
  }
  batch(arg_batch_operations, arg_trace_id) {
    return this.$.batch(arg_batch_operations, arg_trace_id);
  }
  writeSideData(arg_url, arg_expected_response_time, arg_data, arg_trace_id) {
    return this.$.writeSideData(arg_url, arg_expected_response_time, arg_data, arg_trace_id);
  }
};

mojo.internal.bindings.blink.mojom.CacheStorageCacheRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.CacheStorageCache', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  match(arg_request, arg_query_options, arg_in_related_fetch_event, arg_in_range_fetch_event, arg_trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.CacheStorageCache_Match_ParamsSpec,
      null,
      [arg_request, arg_query_options, arg_in_related_fetch_event, arg_in_range_fetch_event, arg_trace_id],
      false);
  }

  matchAll(arg_request, arg_query_options, arg_trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.CacheStorageCache_MatchAll_ParamsSpec,
      null,
      [arg_request, arg_query_options, arg_trace_id],
      false);
  }

  getAllMatchedEntries(arg_request, arg_query_options, arg_trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.CacheStorageCache_GetAllMatchedEntries_ParamsSpec,
      null,
      [arg_request, arg_query_options, arg_trace_id],
      false);
  }

  keys(arg_request, arg_query_options, arg_trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.CacheStorageCache_Keys_ParamsSpec,
      null,
      [arg_request, arg_query_options, arg_trace_id],
      false);
  }

  batch(arg_batch_operations, arg_trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.CacheStorageCache_Batch_ParamsSpec,
      mojo.internal.bindings.blink.mojom.CacheStorageCache_Batch_ResponseParamsSpec,
      [arg_batch_operations, arg_trace_id],
      false);
  }

  writeSideData(arg_url, arg_expected_response_time, arg_data, arg_trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.CacheStorageCache_WriteSideData_ParamsSpec,
      mojo.internal.bindings.blink.mojom.CacheStorageCache_WriteSideData_ResponseParamsSpec,
      [arg_url, arg_expected_response_time, arg_data, arg_trace_id],
      false);
  }

};

mojo.internal.bindings.blink.mojom.CacheStorageCache.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.CacheStorageCacheRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CacheStorageCache',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.CacheStorageCacheReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.CacheStorageCache', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Match
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorageCache_Match_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Match (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: MatchAll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorageCache_MatchAll_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MatchAll (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetAllMatchedEntries
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorageCache_GetAllMatchedEntries_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllMatchedEntries (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Keys
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorageCache_Keys_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Keys (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Batch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorageCache_Batch_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Batch (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: WriteSideData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorageCache_WriteSideData_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteSideData (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorageCache_Match_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.match');
          const result = this.impl.match(params.arg_request, params.arg_query_options, params.arg_in_related_fetch_event, params.arg_in_range_fetch_event, params.arg_trace_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorageCache_MatchAll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.matchAll');
          const result = this.impl.matchAll(params.arg_request, params.arg_query_options, params.arg_trace_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorageCache_GetAllMatchedEntries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllMatchedEntries');
          const result = this.impl.getAllMatchedEntries(params.arg_request, params.arg_query_options, params.arg_trace_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorageCache_Keys_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.keys');
          const result = this.impl.keys(params.arg_request, params.arg_query_options, params.arg_trace_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorageCache_Batch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.batch');
          const result = this.impl.batch(params.arg_batch_operations, params.arg_trace_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.CacheStorageCache_Batch_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Batch FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorageCache_WriteSideData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeSideData');
          const result = this.impl.writeSideData(params.arg_url, params.arg_expected_response_time, params.arg_data, params.arg_trace_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.CacheStorageCache_WriteSideData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WriteSideData FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.CacheStorageCacheReceiver = mojo.internal.bindings.blink.mojom.CacheStorageCacheReceiver;

mojo.internal.bindings.blink.mojom.CacheStorageCachePtr = mojo.internal.bindings.blink.mojom.CacheStorageCacheRemote;
mojo.internal.bindings.blink.mojom.CacheStorageCacheRequest = mojo.internal.bindings.blink.mojom.CacheStorageCachePendingReceiver;


// Interface: CacheStorage
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheStorage_Has_ParamsSpec, 'blink.mojom.CacheStorage_Has_Params', [
      mojo.internal.StructField('arg_cache_name', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trace_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheStorage_Has_ResponseParamsSpec, 'blink.mojom.CacheStorage_Has_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.CacheStorageErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheStorage_Delete_ParamsSpec, 'blink.mojom.CacheStorage_Delete_Params', [
      mojo.internal.StructField('arg_cache_name', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trace_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheStorage_Delete_ResponseParamsSpec, 'blink.mojom.CacheStorage_Delete_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.CacheStorageErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheStorage_Keys_ParamsSpec, 'blink.mojom.CacheStorage_Keys_Params', [
      mojo.internal.StructField('arg_trace_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheStorage_Keys_ResponseParamsSpec, 'blink.mojom.CacheStorage_Keys_ResponseParams', [
      mojo.internal.StructField('arg_keys', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheStorage_Match_ParamsSpec, 'blink.mojom.CacheStorage_Match_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.blink.mojom.FetchAPIRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_match_options', 8, 0, mojo.internal.bindings.blink.mojom.MultiCacheQueryOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trace_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_in_related_fetch_event', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_in_range_fetch_event', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CacheStorage_Open_ParamsSpec, 'blink.mojom.CacheStorage_Open_Params', [
      mojo.internal.StructField('arg_cache_name', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trace_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.blink.mojom.CacheStoragePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.CacheStorageRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CacheStorage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.CacheStoragePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.CacheStorageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  has(arg_cache_name, arg_trace_id) {
    return this.$.has(arg_cache_name, arg_trace_id);
  }
  delete(arg_cache_name, arg_trace_id) {
    return this.$.delete(arg_cache_name, arg_trace_id);
  }
  keys(arg_trace_id) {
    return this.$.keys(arg_trace_id);
  }
  match(arg_request, arg_match_options, arg_in_related_fetch_event, arg_in_range_fetch_event, arg_trace_id) {
    return this.$.match(arg_request, arg_match_options, arg_in_related_fetch_event, arg_in_range_fetch_event, arg_trace_id);
  }
  open(arg_cache_name, arg_trace_id) {
    return this.$.open(arg_cache_name, arg_trace_id);
  }
};

mojo.internal.bindings.blink.mojom.CacheStorageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.CacheStorage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  has(arg_cache_name, arg_trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.CacheStorage_Has_ParamsSpec,
      mojo.internal.bindings.blink.mojom.CacheStorage_Has_ResponseParamsSpec,
      [arg_cache_name, arg_trace_id],
      false);
  }

  delete(arg_cache_name, arg_trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.CacheStorage_Delete_ParamsSpec,
      mojo.internal.bindings.blink.mojom.CacheStorage_Delete_ResponseParamsSpec,
      [arg_cache_name, arg_trace_id],
      false);
  }

  keys(arg_trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.CacheStorage_Keys_ParamsSpec,
      mojo.internal.bindings.blink.mojom.CacheStorage_Keys_ResponseParamsSpec,
      [arg_trace_id],
      false);
  }

  match(arg_request, arg_match_options, arg_in_related_fetch_event, arg_in_range_fetch_event, arg_trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.CacheStorage_Match_ParamsSpec,
      null,
      [arg_request, arg_match_options, arg_in_related_fetch_event, arg_in_range_fetch_event, arg_trace_id],
      false);
  }

  open(arg_cache_name, arg_trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.CacheStorage_Open_ParamsSpec,
      null,
      [arg_cache_name, arg_trace_id],
      false);
  }

};

mojo.internal.bindings.blink.mojom.CacheStorage.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.CacheStorageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CacheStorage',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.CacheStorageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.CacheStorage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Has
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorage_Has_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Has (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Delete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorage_Delete_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Delete (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Keys
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorage_Keys_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Keys (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Match
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorage_Match_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Match (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Open
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorage_Open_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Open (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorage_Has_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.has');
          const result = this.impl.has(params.arg_cache_name, params.arg_trace_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.CacheStorage_Has_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Has FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorage_Delete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.delete');
          const result = this.impl.delete(params.arg_cache_name, params.arg_trace_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.CacheStorage_Delete_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Delete FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorage_Keys_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.keys');
          const result = this.impl.keys(params.arg_trace_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.CacheStorage_Keys_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Keys FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorage_Match_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.match');
          const result = this.impl.match(params.arg_request, params.arg_match_options, params.arg_in_related_fetch_event, params.arg_in_range_fetch_event, params.arg_trace_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.CacheStorage_Open_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.open');
          const result = this.impl.open(params.arg_cache_name, params.arg_trace_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.CacheStorageReceiver = mojo.internal.bindings.blink.mojom.CacheStorageReceiver;

mojo.internal.bindings.blink.mojom.CacheStoragePtr = mojo.internal.bindings.blink.mojom.CacheStorageRemote;
mojo.internal.bindings.blink.mojom.CacheStorageRequest = mojo.internal.bindings.blink.mojom.CacheStoragePendingReceiver;

