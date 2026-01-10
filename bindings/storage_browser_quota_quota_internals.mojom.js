// Auto-generated MojoJS binding
// Source: chromium_src/storage/browser/quota/quota_internals.mojom
// Module: storage.mojom

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
var storage = storage || {};
storage.mojom = storage.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};
var blink = blink || {};

storage.mojom.BucketTableEntrySpec = { $: {} };
storage.mojom.QuotaInternalsHandler = {};
storage.mojom.QuotaInternalsHandler.$interfaceName = 'storage.mojom.QuotaInternalsHandler';
storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ResponseParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_GetStatistics_ParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_GetStatistics_ResponseParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_SimulateStoragePressure_ParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ResponseParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ResponseParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ResponseParamsSpec = { $: {} };

// Struct: BucketTableEntry
mojo.internal.Struct(
    storage.mojom.BucketTableEntrySpec, 'storage.mojom.BucketTableEntry', [
      mojo.internal.StructField('bucket_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('storage_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('usage', 24, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('use_count', 32, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('last_accessed', 40, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_modified', 48, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: QuotaInternalsHandler
mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ParamsSpec, 'storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ResponseParamsSpec, 'storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ResponseParams', [
      mojo.internal.StructField('total_space', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('available_space', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('temp_pool_size', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_GetStatistics_ParamsSpec, 'storage.mojom.QuotaInternalsHandler_GetStatistics_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_GetStatistics_ResponseParamsSpec, 'storage.mojom.QuotaInternalsHandler_GetStatistics_ResponseParams', [
      mojo.internal.StructField('eviction_statistics', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_SimulateStoragePressure_ParamsSpec, 'storage.mojom.QuotaInternalsHandler_SimulateStoragePressure_Params', [
      mojo.internal.StructField('origin_url', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ParamsSpec, 'storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ResponseParamsSpec, 'storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ResponseParams', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Array(storage.mojom.BucketTableEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ParamsSpec, 'storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ResponseParamsSpec, 'storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ResponseParams', [
      mojo.internal.StructField('usage', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('unlimited_usage', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ParamsSpec, 'storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ResponseParamsSpec, 'storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ResponseParams', [
      mojo.internal.StructField('available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

storage.mojom.QuotaInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.QuotaInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.QuotaInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.QuotaInternalsHandlerPendingReceiver,
      handle);
    this.$ = new storage.mojom.QuotaInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.QuotaInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('QuotaInternalsHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDiskAvailabilityAndTempPoolSize() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ParamsSpec,
      storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ResponseParamsSpec,
      [],
      false);
  }

  getStatistics() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      storage.mojom.QuotaInternalsHandler_GetStatistics_ParamsSpec,
      storage.mojom.QuotaInternalsHandler_GetStatistics_ResponseParamsSpec,
      [],
      false);
  }

  simulateStoragePressure(origin_url) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      storage.mojom.QuotaInternalsHandler_SimulateStoragePressure_ParamsSpec,
      null,
      [origin_url],
      false);
  }

  retrieveBucketsTable() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ParamsSpec,
      storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ResponseParamsSpec,
      [],
      false);
  }

  getGlobalUsageForInternals() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ParamsSpec,
      storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ResponseParamsSpec,
      [],
      false);
  }

  isSimulateStoragePressureAvailable() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ParamsSpec,
      storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ResponseParamsSpec,
      [],
      false);
  }

};

storage.mojom.QuotaInternalsHandler.getRemote = function() {
  let remote = new storage.mojom.QuotaInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.QuotaInternalsHandler',
    'context');
  return remote.$;
};

storage.mojom.QuotaInternalsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('QuotaInternalsHandler', [
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
        
        // Try Method 0: GetDiskAvailabilityAndTempPoolSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDiskAvailabilityAndTempPoolSize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetStatistics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.QuotaInternalsHandler_GetStatistics_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStatistics (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SimulateStoragePressure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.QuotaInternalsHandler_SimulateStoragePressure_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SimulateStoragePressure (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RetrieveBucketsTable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RetrieveBucketsTable (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetGlobalUsageForInternals
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetGlobalUsageForInternals (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: IsSimulateStoragePressureAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsSimulateStoragePressureAvailable (5)');
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
          const params = decoder.decodeStructInline(storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getDiskAvailabilityAndTempPoolSize');
          const result = this.impl.getDiskAvailabilityAndTempPoolSize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.QuotaInternalsHandler_GetStatistics_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getStatistics');
          const result = this.impl.getStatistics();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.QuotaInternalsHandler_GetStatistics_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.QuotaInternalsHandler_SimulateStoragePressure_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.simulateStoragePressure');
          const result = this.impl.simulateStoragePressure(params.origin_url);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.retrieveBucketsTable');
          const result = this.impl.retrieveBucketsTable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getGlobalUsageForInternals');
          const result = this.impl.getGlobalUsageForInternals();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.isSimulateStoragePressureAvailable');
          const result = this.impl.isSimulateStoragePressureAvailable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ResponseParamsSpec);
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

storage.mojom.QuotaInternalsHandlerReceiver = storage.mojom.QuotaInternalsHandlerReceiver;

storage.mojom.QuotaInternalsHandlerPtr = storage.mojom.QuotaInternalsHandlerRemote;
storage.mojom.QuotaInternalsHandlerRequest = storage.mojom.QuotaInternalsHandlerPendingReceiver;

