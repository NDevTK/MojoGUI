// Auto-generated MojoJS binding
 // Source: chromium_src/components/services/storage/public/mojom/cache_storage_control.mojom
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
 

 mojo.internal.bindings.storage = mojo.internal.bindings.storage || {};
mojo.internal.bindings.storage.mojom = mojo.internal.bindings.storage.mojom || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};

mojo.internal.bindings.storage.mojom.CacheStorageOwnerSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.storage.mojom.CacheStorageObserver = {};
mojo.internal.bindings.storage.mojom.CacheStorageObserverSpec = { $ : {} };
mojo.internal.bindings.storage.mojom.CacheStorageObserver.$interfaceName = 'storage.mojom.CacheStorageObserver';
mojo.internal.bindings.storage.mojom.CacheStorageObserver_OnCacheListChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.CacheStorageObserver_OnCacheContentChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.CacheStorageControl = {};
mojo.internal.bindings.storage.mojom.CacheStorageControlSpec = { $ : {} };
mojo.internal.bindings.storage.mojom.CacheStorageControl.$interfaceName = 'storage.mojom.CacheStorageControl';
mojo.internal.bindings.storage.mojom.CacheStorageControl_AddReceiver_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.CacheStorageControl_AddObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.storage.mojom.CacheStorageControl_ApplyPolicyUpdates_ParamsSpec = { $: {} };

// Enum: CacheStorageOwner
mojo.internal.bindings.storage.mojom.CacheStorageOwner = {
  kCacheAPI: 0,
  kBackgroundFetch: 1,
};

// Interface: CacheStorageObserver
mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.CacheStorageObserver_OnCacheListChanged_ParamsSpec, 'storage.mojom.CacheStorageObserver_OnCacheListChanged_Params', [
      mojo.internal.StructField('arg_bucket_locator', 0, 0, mojo.internal.bindings.storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.CacheStorageObserver_OnCacheContentChanged_ParamsSpec, 'storage.mojom.CacheStorageObserver_OnCacheContentChanged_Params', [
      mojo.internal.StructField('arg_bucket_locator', 0, 0, mojo.internal.bindings.storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cache_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.storage.mojom.CacheStorageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.storage.mojom.CacheStorageObserverRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.CacheStorageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.storage.mojom.CacheStorageObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.storage.mojom.CacheStorageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCacheListChanged(arg_bucket_locator) {
    return this.$.onCacheListChanged(arg_bucket_locator);
  }
  onCacheContentChanged(arg_bucket_locator, arg_cache_name) {
    return this.$.onCacheContentChanged(arg_bucket_locator, arg_cache_name);
  }
};

mojo.internal.bindings.storage.mojom.CacheStorageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('storage.mojom.CacheStorageObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onCacheListChanged(arg_bucket_locator) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.storage.mojom.CacheStorageObserver_OnCacheListChanged_ParamsSpec,
      null,
      [arg_bucket_locator],
      false);
  }

  onCacheContentChanged(arg_bucket_locator, arg_cache_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.storage.mojom.CacheStorageObserver_OnCacheContentChanged_ParamsSpec,
      null,
      [arg_bucket_locator, arg_cache_name],
      false);
  }

};

mojo.internal.bindings.storage.mojom.CacheStorageObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.storage.mojom.CacheStorageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.CacheStorageObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.storage.mojom.CacheStorageObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('storage.mojom.CacheStorageObserver', [
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
        
        // Try Method 0: OnCacheListChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.CacheStorageObserver_OnCacheListChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCacheListChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnCacheContentChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.CacheStorageObserver_OnCacheContentChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCacheContentChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.CacheStorageObserver_OnCacheListChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCacheListChanged');
          const result = this.impl.onCacheListChanged(params.arg_bucket_locator);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.CacheStorageObserver_OnCacheContentChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCacheContentChanged');
          const result = this.impl.onCacheContentChanged(params.arg_bucket_locator, params.arg_cache_name);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.storage.mojom.CacheStorageObserverReceiver = mojo.internal.bindings.storage.mojom.CacheStorageObserverReceiver;

mojo.internal.bindings.storage.mojom.CacheStorageObserverPtr = mojo.internal.bindings.storage.mojom.CacheStorageObserverRemote;
mojo.internal.bindings.storage.mojom.CacheStorageObserverRequest = mojo.internal.bindings.storage.mojom.CacheStorageObserverPendingReceiver;


// Interface: CacheStorageControl
mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.CacheStorageControl_AddReceiver_ParamsSpec, 'storage.mojom.CacheStorageControl_AddReceiver_Params', [
      mojo.internal.StructField('arg_cross_origin_embedder_policy', 0, 0, mojo.internal.bindings.network.mojom.CrossOriginEmbedderPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_coep_reporter', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.CrossOriginEmbedderPolicyReporterRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_document_isolation_policy', 16, 0, mojo.internal.bindings.network.mojom.DocumentIsolationPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dip_reporter', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.DocumentIsolationPolicyReporterRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_bucket_locator', 32, 0, mojo.internal.bindings.storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_owner', 40, 0, mojo.internal.bindings.storage.mojom.CacheStorageOwnerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_receiver', 48, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.CacheStorageRemote), null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.CacheStorageControl_AddObserver_ParamsSpec, 'storage.mojom.CacheStorageControl_AddObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.storage.mojom.CacheStorageObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.CacheStorageControl_ApplyPolicyUpdates_ParamsSpec, 'storage.mojom.CacheStorageControl_ApplyPolicyUpdates_Params', [
      mojo.internal.StructField('arg_policy_updates', 0, 0, mojo.internal.Array(mojo.internal.bindings.storage.mojom.StoragePolicyUpdateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.storage.mojom.CacheStorageControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.storage.mojom.CacheStorageControlRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.CacheStorageControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.storage.mojom.CacheStorageControlPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.storage.mojom.CacheStorageControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addReceiver(arg_cross_origin_embedder_policy, arg_coep_reporter, arg_document_isolation_policy, arg_dip_reporter, arg_bucket_locator, arg_owner, arg_receiver) {
    return this.$.addReceiver(arg_cross_origin_embedder_policy, arg_coep_reporter, arg_document_isolation_policy, arg_dip_reporter, arg_bucket_locator, arg_owner, arg_receiver);
  }
  addObserver(arg_observer) {
    return this.$.addObserver(arg_observer);
  }
  applyPolicyUpdates(arg_policy_updates) {
    return this.$.applyPolicyUpdates(arg_policy_updates);
  }
};

mojo.internal.bindings.storage.mojom.CacheStorageControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('storage.mojom.CacheStorageControl', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addReceiver(arg_cross_origin_embedder_policy, arg_coep_reporter, arg_document_isolation_policy, arg_dip_reporter, arg_bucket_locator, arg_owner, arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.storage.mojom.CacheStorageControl_AddReceiver_ParamsSpec,
      null,
      [arg_cross_origin_embedder_policy, arg_coep_reporter, arg_document_isolation_policy, arg_dip_reporter, arg_bucket_locator, arg_owner, arg_receiver],
      false);
  }

  addObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.storage.mojom.CacheStorageControl_AddObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  applyPolicyUpdates(arg_policy_updates) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.storage.mojom.CacheStorageControl_ApplyPolicyUpdates_ParamsSpec,
      null,
      [arg_policy_updates],
      false);
  }

};

mojo.internal.bindings.storage.mojom.CacheStorageControl.getRemote = function() {
  let remote = new mojo.internal.bindings.storage.mojom.CacheStorageControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.CacheStorageControl',
    'context');
  return remote.$;
};

mojo.internal.bindings.storage.mojom.CacheStorageControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('storage.mojom.CacheStorageControl', [
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
        
        // Try Method 0: AddReceiver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.CacheStorageControl_AddReceiver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddReceiver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.CacheStorageControl_AddObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ApplyPolicyUpdates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.CacheStorageControl_ApplyPolicyUpdates_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyPolicyUpdates (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.CacheStorageControl_AddReceiver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addReceiver');
          const result = this.impl.addReceiver(params.arg_cross_origin_embedder_policy, params.arg_coep_reporter, params.arg_document_isolation_policy, params.arg_dip_reporter, params.arg_bucket_locator, params.arg_owner, params.arg_receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.CacheStorageControl_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.arg_observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.storage.mojom.CacheStorageControl_ApplyPolicyUpdates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.applyPolicyUpdates');
          const result = this.impl.applyPolicyUpdates(params.arg_policy_updates);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.storage.mojom.CacheStorageControlReceiver = mojo.internal.bindings.storage.mojom.CacheStorageControlReceiver;

mojo.internal.bindings.storage.mojom.CacheStorageControlPtr = mojo.internal.bindings.storage.mojom.CacheStorageControlRemote;
mojo.internal.bindings.storage.mojom.CacheStorageControlRequest = mojo.internal.bindings.storage.mojom.CacheStorageControlPendingReceiver;

