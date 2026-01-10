// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/buckets/bucket_manager_host.mojom
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

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
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

blink.mojom.BucketErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.BucketPoliciesSpec = { $: {} };
blink.mojom.BucketHost = {};
blink.mojom.BucketHost.$interfaceName = 'blink.mojom.BucketHost';
blink.mojom.BucketHost_Persist_ParamsSpec = { $: {} };
blink.mojom.BucketHost_Persist_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_Persisted_ParamsSpec = { $: {} };
blink.mojom.BucketHost_Persisted_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_Estimate_ParamsSpec = { $: {} };
blink.mojom.BucketHost_Estimate_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_Durability_ParamsSpec = { $: {} };
blink.mojom.BucketHost_Durability_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_SetExpires_ParamsSpec = { $: {} };
blink.mojom.BucketHost_SetExpires_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_Expires_ParamsSpec = { $: {} };
blink.mojom.BucketHost_Expires_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_GetIdbFactory_ParamsSpec = { $: {} };
blink.mojom.BucketHost_GetLockManager_ParamsSpec = { $: {} };
blink.mojom.BucketHost_GetCaches_ParamsSpec = { $: {} };
blink.mojom.BucketHost_GetDirectory_ParamsSpec = { $: {} };
blink.mojom.BucketHost_GetDirectory_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec = { $: {} };
blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParamsSpec = { $: {} };
blink.mojom.BucketManagerHost = {};
blink.mojom.BucketManagerHost.$interfaceName = 'blink.mojom.BucketManagerHost';
blink.mojom.BucketManagerHost_OpenBucket_ParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_OpenBucket_ResponseParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_Keys_ParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_Keys_ResponseParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_DeleteBucket_ParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_DeleteBucket_ResponseParamsSpec = { $: {} };

// Enum: BucketError
blink.mojom.BucketError = {
  kUnknown: 0,
  kQuotaExceeded: 1,
  kInvalidExpiration: 2,
};

// Struct: BucketPolicies
mojo.internal.Struct(
    blink.mojom.BucketPoliciesSpec, 'blink.mojom.BucketPolicies', [
      mojo.internal.StructField('durability', 0, 0, blink.mojom.BucketDurabilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quota', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('expires', 16, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('persisted', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_persisted', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_durability', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_quota', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: BucketHost
mojo.internal.Struct(
    blink.mojom.BucketHost_Persist_ParamsSpec, 'blink.mojom.BucketHost_Persist_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Persist_ResponseParamsSpec, 'blink.mojom.BucketHost_Persist_ResponseParams', [
      mojo.internal.StructField('persisted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('success', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Persisted_ParamsSpec, 'blink.mojom.BucketHost_Persisted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Persisted_ResponseParamsSpec, 'blink.mojom.BucketHost_Persisted_ResponseParams', [
      mojo.internal.StructField('persisted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('success', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Estimate_ParamsSpec, 'blink.mojom.BucketHost_Estimate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Estimate_ResponseParamsSpec, 'blink.mojom.BucketHost_Estimate_ResponseParams', [
      mojo.internal.StructField('current_usage', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('current_quota', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Durability_ParamsSpec, 'blink.mojom.BucketHost_Durability_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Durability_ResponseParamsSpec, 'blink.mojom.BucketHost_Durability_ResponseParams', [
      mojo.internal.StructField('durability', 0, 0, blink.mojom.BucketDurabilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_SetExpires_ParamsSpec, 'blink.mojom.BucketHost_SetExpires_Params', [
      mojo.internal.StructField('expires', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_SetExpires_ResponseParamsSpec, 'blink.mojom.BucketHost_SetExpires_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Expires_ParamsSpec, 'blink.mojom.BucketHost_Expires_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Expires_ResponseParamsSpec, 'blink.mojom.BucketHost_Expires_ResponseParams', [
      mojo.internal.StructField('expires', 0, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetIdbFactory_ParamsSpec, 'blink.mojom.BucketHost_GetIdbFactory_Params', [
      mojo.internal.StructField('idb_factory', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.IDBFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetLockManager_ParamsSpec, 'blink.mojom.BucketHost_GetLockManager_Params', [
      mojo.internal.StructField('lock_manager', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.LockManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetCaches_ParamsSpec, 'blink.mojom.BucketHost_GetCaches_Params', [
      mojo.internal.StructField('cache_storage', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.CacheStorageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetDirectory_ParamsSpec, 'blink.mojom.BucketHost_GetDirectory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetDirectory_ResponseParamsSpec, 'blink.mojom.BucketHost_GetDirectory_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('directory', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryHandleRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec, 'blink.mojom.BucketHost_GetDirectoryForDevtools_Params', [
      mojo.internal.StructField('directory_path_components', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParamsSpec, 'blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('directory', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryHandleRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.BucketHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BucketHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BucketHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BucketHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.BucketHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BucketHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BucketHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  persist() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.BucketHost_Persist_ParamsSpec,
      blink.mojom.BucketHost_Persist_ResponseParamsSpec,
      [],
      false);
  }

  persisted() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.BucketHost_Persisted_ParamsSpec,
      blink.mojom.BucketHost_Persisted_ResponseParamsSpec,
      [],
      false);
  }

  estimate() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.BucketHost_Estimate_ParamsSpec,
      blink.mojom.BucketHost_Estimate_ResponseParamsSpec,
      [],
      false);
  }

  durability() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.BucketHost_Durability_ParamsSpec,
      blink.mojom.BucketHost_Durability_ResponseParamsSpec,
      [],
      false);
  }

  setExpires(expires) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.BucketHost_SetExpires_ParamsSpec,
      blink.mojom.BucketHost_SetExpires_ResponseParamsSpec,
      [expires],
      false);
  }

  expires() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.BucketHost_Expires_ParamsSpec,
      blink.mojom.BucketHost_Expires_ResponseParamsSpec,
      [],
      false);
  }

  getIdbFactory(idb_factory) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.BucketHost_GetIdbFactory_ParamsSpec,
      null,
      [idb_factory],
      false);
  }

  getLockManager(lock_manager) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.BucketHost_GetLockManager_ParamsSpec,
      null,
      [lock_manager],
      false);
  }

  getCaches(cache_storage) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.BucketHost_GetCaches_ParamsSpec,
      null,
      [cache_storage],
      false);
  }

  getDirectory() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.BucketHost_GetDirectory_ParamsSpec,
      blink.mojom.BucketHost_GetDirectory_ResponseParamsSpec,
      [],
      false);
  }

  getDirectoryForDevtools(directory_path_components) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec,
      blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParamsSpec,
      [directory_path_components],
      false);
  }

};

blink.mojom.BucketHost.getRemote = function() {
  let remote = new blink.mojom.BucketHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BucketHost',
    'context');
  return remote.$;
};

blink.mojom.BucketHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BucketHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: Persist
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_Persist_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Persist (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Persisted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_Persisted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Persisted (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Estimate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_Estimate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Estimate (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Durability
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_Durability_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Durability (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetExpires
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_SetExpires_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetExpires (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Expires
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_Expires_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Expires (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetIdbFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_GetIdbFactory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIdbFactory (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetLockManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_GetLockManager_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLockManager (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetCaches
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_GetCaches_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCaches (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: GetDirectory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_GetDirectory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDirectory (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetDirectoryForDevtools
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDirectoryForDevtools (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_Persist_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.persist');
          const result = this.impl.persist();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_Persist_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_Persisted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.persisted');
          const result = this.impl.persisted();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_Persisted_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_Estimate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.estimate');
          const result = this.impl.estimate();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_Estimate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_Durability_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.durability');
          const result = this.impl.durability();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_Durability_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_SetExpires_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setExpires');
          const result = this.impl.setExpires(params.expires);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_SetExpires_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_Expires_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.expires');
          const result = this.impl.expires();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_Expires_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_GetIdbFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getIdbFactory');
          const result = this.impl.getIdbFactory(params.idb_factory);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_GetLockManager_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getLockManager');
          const result = this.impl.getLockManager(params.lock_manager);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_GetCaches_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCaches');
          const result = this.impl.getCaches(params.cache_storage);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_GetDirectory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDirectory');
          const result = this.impl.getDirectory();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_GetDirectory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDirectoryForDevtools');
          const result = this.impl.getDirectoryForDevtools(params.directory_path_components);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParamsSpec);
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

blink.mojom.BucketHostReceiver = blink.mojom.BucketHostReceiver;

blink.mojom.BucketHostPtr = blink.mojom.BucketHostRemote;
blink.mojom.BucketHostRequest = blink.mojom.BucketHostPendingReceiver;


// Interface: BucketManagerHost
mojo.internal.Struct(
    blink.mojom.BucketManagerHost_OpenBucket_ParamsSpec, 'blink.mojom.BucketManagerHost_OpenBucket_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('policy', 8, 0, blink.mojom.BucketPoliciesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_OpenBucket_ResponseParamsSpec, 'blink.mojom.BucketManagerHost_OpenBucket_ResponseParams', [
      mojo.internal.StructField('remote', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.BucketHostSpec), null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, blink.mojom.BucketErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec, 'blink.mojom.BucketManagerHost_GetBucketForDevtools_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.BucketHostSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_Keys_ParamsSpec, 'blink.mojom.BucketManagerHost_Keys_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_Keys_ResponseParamsSpec, 'blink.mojom.BucketManagerHost_Keys_ResponseParams', [
      mojo.internal.StructField('buckets', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_DeleteBucket_ParamsSpec, 'blink.mojom.BucketManagerHost_DeleteBucket_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_DeleteBucket_ResponseParamsSpec, 'blink.mojom.BucketManagerHost_DeleteBucket_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.BucketManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BucketManagerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BucketManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BucketManagerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.BucketManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BucketManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BucketManagerHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  openBucket(name, policy) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.BucketManagerHost_OpenBucket_ParamsSpec,
      blink.mojom.BucketManagerHost_OpenBucket_ResponseParamsSpec,
      [name, policy],
      false);
  }

  getBucketForDevtools(name, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec,
      null,
      [name, receiver],
      false);
  }

  keys() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.BucketManagerHost_Keys_ParamsSpec,
      blink.mojom.BucketManagerHost_Keys_ResponseParamsSpec,
      [],
      false);
  }

  deleteBucket(name) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.BucketManagerHost_DeleteBucket_ParamsSpec,
      blink.mojom.BucketManagerHost_DeleteBucket_ResponseParamsSpec,
      [name],
      false);
  }

};

blink.mojom.BucketManagerHost.getRemote = function() {
  let remote = new blink.mojom.BucketManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BucketManagerHost',
    'context');
  return remote.$;
};

blink.mojom.BucketManagerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BucketManagerHost', [
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
        
        // Try Method 0: OpenBucket
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketManagerHost_OpenBucket_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenBucket (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetBucketForDevtools
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBucketForDevtools (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Keys
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketManagerHost_Keys_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Keys (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DeleteBucket
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketManagerHost_DeleteBucket_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteBucket (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.BucketManagerHost_OpenBucket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openBucket');
          const result = this.impl.openBucket(params.name, params.policy);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketManagerHost_OpenBucket_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getBucketForDevtools');
          const result = this.impl.getBucketForDevtools(params.name, params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketManagerHost_Keys_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.keys');
          const result = this.impl.keys();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketManagerHost_Keys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketManagerHost_DeleteBucket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteBucket');
          const result = this.impl.deleteBucket(params.name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketManagerHost_DeleteBucket_ResponseParamsSpec);
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

blink.mojom.BucketManagerHostReceiver = blink.mojom.BucketManagerHostReceiver;

blink.mojom.BucketManagerHostPtr = blink.mojom.BucketManagerHostRemote;
blink.mojom.BucketManagerHostRequest = blink.mojom.BucketManagerHostPendingReceiver;

