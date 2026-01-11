// Auto-generated MojoJS binding
 // Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_control_test.mojom
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.storage = mojo.internal.bindings.storage || {};
mojo.internal.bindings.storage.mojom = mojo.internal.bindings.storage.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.storage.mojom.FailClassSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.storage.mojom.FailMethodSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.storage.mojom.MockFailureInjector = {};
mojo.internal.bindings.storage.mojom.MockFailureInjector.$interfaceName = 'storage.mojom.MockFailureInjector';
mojo.internal.bindings.storage.mojom.MockFailureInjector_FailOperation_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IndexedDBControlTest = {};
mojo.internal.bindings.storage.mojom.IndexedDBControlTest.$interfaceName = 'storage.mojom.IndexedDBControlTest';
mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetUsageForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ResponseParamsSpec = { $: {} };

// Enum: FailClass
mojo.internal.bindings.storage.mojom.FailClass = {
  NOTHING: 0,
  LEVELDB_ITERATOR: 1,
  LEVELDB_DIRECT_TRANSACTION: 2,
  LEVELDB_TRANSACTION: 3,
  LEVELDB_DATABASE: 4,
};

// Enum: FailMethod
mojo.internal.bindings.storage.mojom.FailMethod = {
  NOTHING: 0,
  COMMIT: 1,
  COMMIT_DISK_FULL: 2,
  COMMIT_SYNC: 3,
  GET: 4,
  SEEK: 5,
  WRITE: 6,
};

// Interface: MockFailureInjector
mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.MockFailureInjector_FailOperation_ParamsSpec, 'storage.mojom.MockFailureInjector_FailOperation_Params', [
      mojo.internal.StructField('arg_failure_class', 0, 0, mojo.internal.bindings.mojo.internal.bindings.storage.mojom.FailClassSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_failure_method', 8, 0, mojo.internal.bindings.mojo.internal.bindings.storage.mojom.FailMethodSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_instance_num', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_call_num', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.storage.mojom.MockFailureInjectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.storage.mojom.MockFailureInjectorRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.MockFailureInjector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.storage.mojom.MockFailureInjectorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.storage.mojom.MockFailureInjectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  failOperation(arg_failure_class, arg_failure_method, arg_instance_num, arg_call_num) {
    return this.$.failOperation(arg_failure_class, arg_failure_method, arg_instance_num, arg_call_num);
  }
};

mojo.internal.bindings.storage.mojom.MockFailureInjectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MockFailureInjector', [
      { explicit: null },
    ]);
  }

  failOperation(arg_failure_class, arg_failure_method, arg_instance_num, arg_call_num) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.storage.mojom.MockFailureInjector_FailOperation_ParamsSpec,
      null,
      [arg_failure_class, arg_failure_method, arg_instance_num, arg_call_num],
      false);
  }

};

mojo.internal.bindings.storage.mojom.MockFailureInjector.getRemote = function() {
  let remote = new mojo.internal.bindings.storage.mojom.MockFailureInjectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.MockFailureInjector',
    'context');
  return remote.$;
};

mojo.internal.bindings.storage.mojom.MockFailureInjectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MockFailureInjector', [
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
        
        // Try Method 0: FailOperation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.MockFailureInjector_FailOperation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FailOperation (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.MockFailureInjector_FailOperation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.failOperation');
          const result = this.impl.failOperation(params.arg_failure_class, params.arg_failure_method, params.arg_instance_num, params.arg_call_num);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.storage.mojom.MockFailureInjectorReceiver = mojo.internal.bindings.storage.mojom.MockFailureInjectorReceiver;

mojo.internal.bindings.storage.mojom.MockFailureInjectorPtr = mojo.internal.bindings.storage.mojom.MockFailureInjectorRemote;
mojo.internal.bindings.storage.mojom.MockFailureInjectorRequest = mojo.internal.bindings.storage.mojom.MockFailureInjectorPendingReceiver;


// Interface: IndexedDBControlTest
mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ResponseParamsSpec, 'storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ResponseParams', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_GetFilePathForTesting_Params', [
      mojo.internal.StructField('arg_bucket_locator', 0, 0, mojo.internal.bindings.storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_for_sqlite', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ResponseParamsSpec, 'storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ResponseParams', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_ResetCachesForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ResponseParamsSpec, 'storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_Params', [
      mojo.internal.StructField('arg_bucket_locator', 0, 0, mojo.internal.bindings.storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_database_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_blob_number', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ResponseParamsSpec, 'storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ResponseParams', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_Params', [
      mojo.internal.StructField('arg_bucket_locator', 0, 0, mojo.internal.bindings.storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ResponseParamsSpec, 'storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_Params', [
      mojo.internal.StructField('arg_bucket_locator', 0, 0, mojo.internal.bindings.storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ResponseParamsSpec, 'storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_GetUsageForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetUsageForTesting_ResponseParamsSpec, 'storage.mojom.IndexedDBControlTest_GetUsageForTesting_ResponseParams', [
      mojo.internal.StructField('arg_total_usage', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.storage.mojom.MockFailureInjectorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ResponseParamsSpec, 'storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.storage.mojom.IndexedDBControlTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.storage.mojom.IndexedDBControlTestRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.IndexedDBControlTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.storage.mojom.IndexedDBControlTestPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.storage.mojom.IndexedDBControlTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getBaseDataPathForTesting() {
    return this.$.getBaseDataPathForTesting();
  }
  getFilePathForTesting(arg_bucket_locator, arg_for_sqlite) {
    return this.$.getFilePathForTesting(arg_bucket_locator, arg_for_sqlite);
  }
  resetCachesForTesting() {
    return this.$.resetCachesForTesting();
  }
  getPathForBlobForTesting(arg_bucket_locator, arg_database_id, arg_blob_number) {
    return this.$.getPathForBlobForTesting(arg_bucket_locator, arg_database_id, arg_blob_number);
  }
  flushBackingStoreForTesting(arg_bucket_locator) {
    return this.$.flushBackingStoreForTesting(arg_bucket_locator);
  }
  flushBucketSequenceForTesting(arg_bucket_locator) {
    return this.$.flushBucketSequenceForTesting(arg_bucket_locator);
  }
  getUsageForTesting() {
    return this.$.getUsageForTesting();
  }
  bindMockFailureSingletonForTesting(arg_receiver) {
    return this.$.bindMockFailureSingletonForTesting(arg_receiver);
  }
  forceInitializeFromFilesForTesting() {
    return this.$.forceInitializeFromFilesForTesting();
  }
};

mojo.internal.bindings.storage.mojom.IndexedDBControlTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IndexedDBControlTest', [
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

  getBaseDataPathForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec,
      mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ResponseParamsSpec,
      [],
      false);
  }

  getFilePathForTesting(arg_bucket_locator, arg_for_sqlite) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec,
      mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ResponseParamsSpec,
      [arg_bucket_locator, arg_for_sqlite],
      false);
  }

  resetCachesForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec,
      mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ResponseParamsSpec,
      [],
      false);
  }

  getPathForBlobForTesting(arg_bucket_locator, arg_database_id, arg_blob_number) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec,
      mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ResponseParamsSpec,
      [arg_bucket_locator, arg_database_id, arg_blob_number],
      false);
  }

  flushBackingStoreForTesting(arg_bucket_locator) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec,
      mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ResponseParamsSpec,
      [arg_bucket_locator],
      false);
  }

  flushBucketSequenceForTesting(arg_bucket_locator) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec,
      mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ResponseParamsSpec,
      [arg_bucket_locator],
      false);
  }

  getUsageForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec,
      mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetUsageForTesting_ResponseParamsSpec,
      [],
      false);
  }

  bindMockFailureSingletonForTesting(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  forceInitializeFromFilesForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ParamsSpec,
      mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.storage.mojom.IndexedDBControlTest.getRemote = function() {
  let remote = new mojo.internal.bindings.storage.mojom.IndexedDBControlTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.IndexedDBControlTest',
    'context');
  return remote.$;
};

mojo.internal.bindings.storage.mojom.IndexedDBControlTestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IndexedDBControlTest', [
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
        
        // Try Method 0: GetBaseDataPathForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBaseDataPathForTesting (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetFilePathForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFilePathForTesting (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ResetCachesForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetCachesForTesting (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetPathForBlobForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPathForBlobForTesting (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: FlushBackingStoreForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FlushBackingStoreForTesting (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: FlushBucketSequenceForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FlushBucketSequenceForTesting (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetUsageForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUsageForTesting (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: BindMockFailureSingletonForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindMockFailureSingletonForTesting (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ForceInitializeFromFilesForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceInitializeFromFilesForTesting (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getBaseDataPathForTesting');
          const result = this.impl.getBaseDataPathForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetBaseDataPathForTesting FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFilePathForTesting');
          const result = this.impl.getFilePathForTesting(params.arg_bucket_locator, params.arg_for_sqlite);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFilePathForTesting FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resetCachesForTesting');
          const result = this.impl.resetCachesForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ResetCachesForTesting FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPathForBlobForTesting');
          const result = this.impl.getPathForBlobForTesting(params.arg_bucket_locator, params.arg_database_id, params.arg_blob_number);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPathForBlobForTesting FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flushBackingStoreForTesting');
          const result = this.impl.flushBackingStoreForTesting(params.arg_bucket_locator);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FlushBackingStoreForTesting FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flushBucketSequenceForTesting');
          const result = this.impl.flushBucketSequenceForTesting(params.arg_bucket_locator);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FlushBucketSequenceForTesting FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUsageForTesting');
          const result = this.impl.getUsageForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.IndexedDBControlTest_GetUsageForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUsageForTesting FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindMockFailureSingletonForTesting');
          const result = this.impl.bindMockFailureSingletonForTesting(params.arg_receiver);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forceInitializeFromFilesForTesting');
          const result = this.impl.forceInitializeFromFilesForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ForceInitializeFromFilesForTesting FAILED:', e));
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

mojo.internal.bindings.storage.mojom.IndexedDBControlTestReceiver = mojo.internal.bindings.storage.mojom.IndexedDBControlTestReceiver;

mojo.internal.bindings.storage.mojom.IndexedDBControlTestPtr = mojo.internal.bindings.storage.mojom.IndexedDBControlTestRemote;
mojo.internal.bindings.storage.mojom.IndexedDBControlTestRequest = mojo.internal.bindings.storage.mojom.IndexedDBControlTestPendingReceiver;

