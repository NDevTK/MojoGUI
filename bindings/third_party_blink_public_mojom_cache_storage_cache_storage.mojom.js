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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
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
             decoder.decodeStructInline(blink.mojom.CacheStorageCache_Match_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.CacheStorageCache_MatchAll_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.CacheStorageCache_GetAllMatchedEntries_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.CacheStorageCache_Keys_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.CacheStorageCache_Batch_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.CacheStorageCache_WriteSideData_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.CacheStorageCache_Match_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.match');
          const result = this.impl.match(params.request, params.query_options, params.in_related_fetch_event, params.in_range_fetch_event, params.trace_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CacheStorageCache_MatchAll_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.matchAll');
          const result = this.impl.matchAll(params.request, params.query_options, params.trace_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CacheStorageCache_GetAllMatchedEntries_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllMatchedEntries');
          const result = this.impl.getAllMatchedEntries(params.request, params.query_options, params.trace_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CacheStorageCache_Keys_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.keys');
          const result = this.impl.keys(params.request, params.query_options, params.trace_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CacheStorageCache_Batch_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.batch');
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
          const params = decoder.decodeStructInline(blink.mojom.CacheStorageCache_WriteSideData_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.writeSideData');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
             decoder.decodeStructInline(blink.mojom.CacheStorage_Has_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.CacheStorage_Delete_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.CacheStorage_Keys_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.CacheStorage_Match_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.CacheStorage_Open_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.CacheStorage_Has_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.has');
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
          const params = decoder.decodeStructInline(blink.mojom.CacheStorage_Delete_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.delete');
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
          const params = decoder.decodeStructInline(blink.mojom.CacheStorage_Keys_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.keys');
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
          const params = decoder.decodeStructInline(blink.mojom.CacheStorage_Match_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.match');
          const result = this.impl.match(params.request, params.match_options, params.in_related_fetch_event, params.in_range_fetch_event, params.trace_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CacheStorage_Open_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.open');
          const result = this.impl.open(params.cache_name, params.trace_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.CacheStorageReceiver = blink.mojom.CacheStorageReceiver;

blink.mojom.CacheStoragePtr = blink.mojom.CacheStorageRemote;
blink.mojom.CacheStorageRequest = blink.mojom.CacheStoragePendingReceiver;

