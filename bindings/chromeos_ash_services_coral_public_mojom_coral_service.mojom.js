// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/services/coral/public/mojom/coral_service.mojom
 // Module: coral.mojom

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
 

 mojo.internal.bindings.coral = mojo.internal.bindings.coral || {};
mojo.internal.bindings.coral.mojom = mojo.internal.bindings.coral.mojom || {};
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.coral.mojom.CoralErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.coral.mojom.EntitySpec = { $: {} };
mojo.internal.bindings.coral.mojom.GroupResultSpec = { $: {} };
mojo.internal.bindings.coral.mojom.CacheEmbeddingsResultSpec = { $: {} };
mojo.internal.bindings.coral.mojom.TabSpec = { $: {} };
mojo.internal.bindings.coral.mojom.AppSpec = { $: {} };
mojo.internal.bindings.coral.mojom.EmbeddingOptionsSpec = { $: {} };
mojo.internal.bindings.coral.mojom.ClusteringOptionsSpec = { $: {} };
mojo.internal.bindings.coral.mojom.TitleGenerationOptionsSpec = { $: {} };
mojo.internal.bindings.coral.mojom.GroupSpec = { $: {} };
mojo.internal.bindings.coral.mojom.GroupRequestSpec = { $: {} };
mojo.internal.bindings.coral.mojom.GroupResponseSpec = { $: {} };
mojo.internal.bindings.coral.mojom.CacheEmbeddingsRequestSpec = { $: {} };
mojo.internal.bindings.coral.mojom.CacheEmbeddingsResponseSpec = { $: {} };
mojo.internal.bindings.coral.mojom.TitleObserver = {};
mojo.internal.bindings.coral.mojom.TitleObserver.$interfaceName = 'coral.mojom.TitleObserver';
mojo.internal.bindings.coral.mojom.TitleObserver_TitleUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.coral.mojom.CoralProcessor = {};
mojo.internal.bindings.coral.mojom.CoralProcessor.$interfaceName = 'coral.mojom.CoralProcessor';
mojo.internal.bindings.coral.mojom.CoralProcessor_Group_ParamsSpec = { $: {} };
mojo.internal.bindings.coral.mojom.CoralProcessor_Group_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.coral.mojom.CoralProcessor_CacheEmbeddings_ParamsSpec = { $: {} };
mojo.internal.bindings.coral.mojom.CoralProcessor_CacheEmbeddings_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.coral.mojom.CoralService = {};
mojo.internal.bindings.coral.mojom.CoralService.$interfaceName = 'coral.mojom.CoralService';
mojo.internal.bindings.coral.mojom.CoralService_GroupDeprecated_ParamsSpec = { $: {} };
mojo.internal.bindings.coral.mojom.CoralService_GroupDeprecated_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.coral.mojom.CoralService_CacheEmbeddingsDeprecated_ParamsSpec = { $: {} };
mojo.internal.bindings.coral.mojom.CoralService_CacheEmbeddingsDeprecated_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.coral.mojom.CoralService_PrepareResource_ParamsSpec = { $: {} };
mojo.internal.bindings.coral.mojom.CoralService_Initialize_ParamsSpec = { $: {} };

// Enum: CoralError
mojo.internal.bindings.coral.mojom.CoralError = {
  kUnknownError: 0,
  kLoadModelFailed: 1,
  kInvalidArgs: 2,
  kModelExecutionFailed: 3,
  kClusteringError: 4,
};

// Union: Entity
mojo.internal.Union(
    mojo.internal.bindings.coral.mojom.EntitySpec, 'coral.mojom.Entity', {
      'arg_unknown': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_tab': {
        'ordinal': 1,
        'type': mojo.internal.bindings.coral.mojom.TabSpec.$,
        'nullable': false,
      },
      'arg_app': {
        'ordinal': 2,
        'type': mojo.internal.bindings.coral.mojom.AppSpec.$,
        'nullable': false,
      },
    });

// Union: GroupResult
mojo.internal.Union(
    mojo.internal.bindings.coral.mojom.GroupResultSpec, 'coral.mojom.GroupResult', {
      'arg_error': {
        'ordinal': 0,
        'type': mojo.internal.bindings.coral.mojom.CoralErrorSpec.$,
        'nullable': false,
      },
      'arg_response': {
        'ordinal': 1,
        'type': mojo.internal.bindings.coral.mojom.GroupResponseSpec.$,
        'nullable': false,
      },
    });

// Union: CacheEmbeddingsResult
mojo.internal.Union(
    mojo.internal.bindings.coral.mojom.CacheEmbeddingsResultSpec, 'coral.mojom.CacheEmbeddingsResult', {
      'arg_error': {
        'ordinal': 0,
        'type': mojo.internal.bindings.coral.mojom.CoralErrorSpec.$,
        'nullable': false,
      },
      'arg_response': {
        'ordinal': 1,
        'type': mojo.internal.bindings.coral.mojom.CacheEmbeddingsResponseSpec.$,
        'nullable': false,
      },
    });

// Struct: Tab
mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.TabSpec, 'coral.mojom.Tab', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: App
mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.AppSpec, 'coral.mojom.App', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: EmbeddingOptions
mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.EmbeddingOptionsSpec, 'coral.mojom.EmbeddingOptions', [
      mojo.internal.StructField('arg_check_safety_filter_$flag', 0, 0, mojo.internal.Bool, false, false, 1, { isPrimary: true, linkedValueFieldName: 'arg_check_safety_filter_$value', originalFieldName: 'arg_check_safety_filter' }),
      mojo.internal.StructField('arg_check_safety_filter_$value', 0, 1, mojo.internal.Bool, false, false, 1, { isPrimary: false, linkedValueFieldName: 'arg_check_safety_filter_$flag', originalFieldName: 'arg_check_safety_filter' }),
    ],
    [[0, 8], [1, 16]]);

// Struct: ClusteringOptions
mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.ClusteringOptionsSpec, 'coral.mojom.ClusteringOptions', [
      mojo.internal.StructField('arg_min_items_in_cluster', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_items_in_cluster', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_clusters', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TitleGenerationOptions
mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.TitleGenerationOptionsSpec, 'coral.mojom.TitleGenerationOptions', [
      mojo.internal.StructField('arg_language_code', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_max_characters', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Group
mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.GroupSpec, 'coral.mojom.Group', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_entities', 16, 0, mojo.internal.Array(mojo.internal.bindings.coral.mojom.EntitySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GroupRequest
mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.GroupRequestSpec, 'coral.mojom.GroupRequest', [
      mojo.internal.StructField('arg_entities', 0, 0, mojo.internal.Array(mojo.internal.bindings.coral.mojom.EntitySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_embedding_options', 8, 0, mojo.internal.bindings.coral.mojom.EmbeddingOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_clustering_options', 16, 0, mojo.internal.bindings.coral.mojom.ClusteringOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_title_generation_options', 24, 0, mojo.internal.bindings.coral.mojom.TitleGenerationOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_suppression_context', 32, 0, mojo.internal.Array(mojo.internal.bindings.coral.mojom.EntitySpec.$, false), null, true, 1, undefined),
    ],
    [[0, 40], [1, 48]]);

// Struct: GroupResponse
mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.GroupResponseSpec, 'coral.mojom.GroupResponse', [
      mojo.internal.StructField('arg_groups', 0, 0, mojo.internal.Array(mojo.internal.bindings.coral.mojom.GroupSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CacheEmbeddingsRequest
mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.CacheEmbeddingsRequestSpec, 'coral.mojom.CacheEmbeddingsRequest', [
      mojo.internal.StructField('arg_entities', 0, 0, mojo.internal.Array(mojo.internal.bindings.coral.mojom.EntitySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_embedding_options', 8, 0, mojo.internal.bindings.coral.mojom.EmbeddingOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CacheEmbeddingsResponse
mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.CacheEmbeddingsResponseSpec, 'coral.mojom.CacheEmbeddingsResponse', [
    ],
    [[0, 8]]);

// Interface: TitleObserver
mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.TitleObserver_TitleUpdated_ParamsSpec, 'coral.mojom.TitleObserver_TitleUpdated_Params', [
      mojo.internal.StructField('arg_group_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.coral.mojom.TitleObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.coral.mojom.TitleObserverRemote = class {
  static get $interfaceName() {
    return 'coral.mojom.TitleObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.coral.mojom.TitleObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.coral.mojom.TitleObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  titleUpdated(arg_group_id, arg_title) {
    return this.$.titleUpdated(arg_group_id, arg_title);
  }
};

mojo.internal.bindings.coral.mojom.TitleObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TitleObserver', [
      { explicit: 0 },
    ]);
  }

  titleUpdated(arg_group_id, arg_title) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.coral.mojom.TitleObserver_TitleUpdated_ParamsSpec,
      null,
      [arg_group_id, arg_title],
      false);
  }

};

mojo.internal.bindings.coral.mojom.TitleObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.coral.mojom.TitleObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'coral.mojom.TitleObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.coral.mojom.TitleObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TitleObserver', [
      { explicit: 0 },
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
        
        // Try Method 0: TitleUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.coral.mojom.TitleObserver_TitleUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TitleUpdated (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.coral.mojom.TitleObserver_TitleUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.titleUpdated');
          const result = this.impl.titleUpdated(params.arg_group_id, params.arg_title);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.coral.mojom.TitleObserverReceiver = mojo.internal.bindings.coral.mojom.TitleObserverReceiver;

mojo.internal.bindings.coral.mojom.TitleObserverPtr = mojo.internal.bindings.coral.mojom.TitleObserverRemote;
mojo.internal.bindings.coral.mojom.TitleObserverRequest = mojo.internal.bindings.coral.mojom.TitleObserverPendingReceiver;


// Interface: CoralProcessor
mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.CoralProcessor_Group_ParamsSpec, 'coral.mojom.CoralProcessor_Group_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.coral.mojom.GroupRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.coral.mojom.TitleObserverSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.CoralProcessor_Group_ResponseParamsSpec, 'coral.mojom.CoralProcessor_Group_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.coral.mojom.GroupResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.CoralProcessor_CacheEmbeddings_ParamsSpec, 'coral.mojom.CoralProcessor_CacheEmbeddings_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.coral.mojom.CacheEmbeddingsRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.CoralProcessor_CacheEmbeddings_ResponseParamsSpec, 'coral.mojom.CoralProcessor_CacheEmbeddings_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.coral.mojom.CacheEmbeddingsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.coral.mojom.CoralProcessorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.coral.mojom.CoralProcessorRemote = class {
  static get $interfaceName() {
    return 'coral.mojom.CoralProcessor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.coral.mojom.CoralProcessorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.coral.mojom.CoralProcessorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  group(arg_request, arg_observer) {
    return this.$.group(arg_request, arg_observer);
  }
  cacheEmbeddings(arg_request) {
    return this.$.cacheEmbeddings(arg_request);
  }
};

mojo.internal.bindings.coral.mojom.CoralProcessorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CoralProcessor', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  group(arg_request, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.coral.mojom.CoralProcessor_Group_ParamsSpec,
      mojo.internal.bindings.coral.mojom.CoralProcessor_Group_ResponseParamsSpec,
      [arg_request, arg_observer],
      false);
  }

  cacheEmbeddings(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.coral.mojom.CoralProcessor_CacheEmbeddings_ParamsSpec,
      mojo.internal.bindings.coral.mojom.CoralProcessor_CacheEmbeddings_ResponseParamsSpec,
      [arg_request],
      false);
  }

};

mojo.internal.bindings.coral.mojom.CoralProcessor.getRemote = function() {
  let remote = new mojo.internal.bindings.coral.mojom.CoralProcessorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'coral.mojom.CoralProcessor',
    'context');
  return remote.$;
};

mojo.internal.bindings.coral.mojom.CoralProcessorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CoralProcessor', [
      { explicit: 0 },
      { explicit: 1 },
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
        
        // Try Method 0: Group
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.coral.mojom.CoralProcessor_Group_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Group (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CacheEmbeddings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.coral.mojom.CoralProcessor_CacheEmbeddings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CacheEmbeddings (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.coral.mojom.CoralProcessor_Group_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.group');
          const result = this.impl.group(params.arg_request, params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.coral.mojom.CoralProcessor_Group_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Group FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.coral.mojom.CoralProcessor_CacheEmbeddings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cacheEmbeddings');
          const result = this.impl.cacheEmbeddings(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.coral.mojom.CoralProcessor_CacheEmbeddings_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CacheEmbeddings FAILED:', e));
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

mojo.internal.bindings.coral.mojom.CoralProcessorReceiver = mojo.internal.bindings.coral.mojom.CoralProcessorReceiver;

mojo.internal.bindings.coral.mojom.CoralProcessorPtr = mojo.internal.bindings.coral.mojom.CoralProcessorRemote;
mojo.internal.bindings.coral.mojom.CoralProcessorRequest = mojo.internal.bindings.coral.mojom.CoralProcessorPendingReceiver;


// Interface: CoralService
mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.CoralService_GroupDeprecated_ParamsSpec, 'coral.mojom.CoralService_GroupDeprecated_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.coral.mojom.GroupRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.coral.mojom.TitleObserverSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.CoralService_GroupDeprecated_ResponseParamsSpec, 'coral.mojom.CoralService_GroupDeprecated_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.coral.mojom.GroupResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.CoralService_CacheEmbeddingsDeprecated_ParamsSpec, 'coral.mojom.CoralService_CacheEmbeddingsDeprecated_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.coral.mojom.CacheEmbeddingsRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.CoralService_CacheEmbeddingsDeprecated_ResponseParamsSpec, 'coral.mojom.CoralService_CacheEmbeddingsDeprecated_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.coral.mojom.CacheEmbeddingsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.CoralService_PrepareResource_ParamsSpec, 'coral.mojom.CoralService_PrepareResource_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.coral.mojom.CoralService_Initialize_ParamsSpec, 'coral.mojom.CoralService_Initialize_Params', [
      mojo.internal.StructField('arg_ml_service', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromeos.machine_learning.mojom.MachineLearningServiceRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_processor', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.coral.mojom.CoralProcessorSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_language_code', 16, 0, mojo.internal.String, null, true, 2, undefined),
    ],
    [[0, 24], [2, 32]]);

mojo.internal.bindings.coral.mojom.CoralServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.coral.mojom.CoralServiceRemote = class {
  static get $interfaceName() {
    return 'coral.mojom.CoralService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.coral.mojom.CoralServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.coral.mojom.CoralServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  groupDeprecated(arg_request, arg_observer) {
    return this.$.groupDeprecated(arg_request, arg_observer);
  }
  cacheEmbeddingsDeprecated(arg_request) {
    return this.$.cacheEmbeddingsDeprecated(arg_request);
  }
  prepareResource() {
    return this.$.prepareResource();
  }
  initialize(arg_ml_service, arg_processor, arg_language_code) {
    return this.$.initialize(arg_ml_service, arg_processor, arg_language_code);
  }
};

mojo.internal.bindings.coral.mojom.CoralServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CoralService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  groupDeprecated(arg_request, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.coral.mojom.CoralService_GroupDeprecated_ParamsSpec,
      mojo.internal.bindings.coral.mojom.CoralService_GroupDeprecated_ResponseParamsSpec,
      [arg_request, arg_observer],
      false);
  }

  cacheEmbeddingsDeprecated(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.coral.mojom.CoralService_CacheEmbeddingsDeprecated_ParamsSpec,
      mojo.internal.bindings.coral.mojom.CoralService_CacheEmbeddingsDeprecated_ResponseParamsSpec,
      [arg_request],
      false);
  }

  prepareResource() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.coral.mojom.CoralService_PrepareResource_ParamsSpec,
      null,
      [],
      false);
  }

  initialize(arg_ml_service, arg_processor, arg_language_code) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.coral.mojom.CoralService_Initialize_ParamsSpec,
      null,
      [arg_ml_service, arg_processor, arg_language_code],
      false);
  }

};

mojo.internal.bindings.coral.mojom.CoralService.getRemote = function() {
  let remote = new mojo.internal.bindings.coral.mojom.CoralServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'coral.mojom.CoralService',
    'context');
  return remote.$;
};

mojo.internal.bindings.coral.mojom.CoralServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CoralService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
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
        
        // Try Method 0: GroupDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.coral.mojom.CoralService_GroupDeprecated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GroupDeprecated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CacheEmbeddingsDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.coral.mojom.CoralService_CacheEmbeddingsDeprecated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CacheEmbeddingsDeprecated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: PrepareResource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.coral.mojom.CoralService_PrepareResource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrepareResource (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.coral.mojom.CoralService_Initialize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.coral.mojom.CoralService_GroupDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.groupDeprecated');
          const result = this.impl.groupDeprecated(params.arg_request, params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.coral.mojom.CoralService_GroupDeprecated_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GroupDeprecated FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.coral.mojom.CoralService_CacheEmbeddingsDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cacheEmbeddingsDeprecated');
          const result = this.impl.cacheEmbeddingsDeprecated(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.coral.mojom.CoralService_CacheEmbeddingsDeprecated_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CacheEmbeddingsDeprecated FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.coral.mojom.CoralService_PrepareResource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prepareResource');
          const result = this.impl.prepareResource();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.coral.mojom.CoralService_Initialize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.arg_ml_service, params.arg_processor, params.arg_language_code);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.coral.mojom.CoralServiceReceiver = mojo.internal.bindings.coral.mojom.CoralServiceReceiver;

mojo.internal.bindings.coral.mojom.CoralServicePtr = mojo.internal.bindings.coral.mojom.CoralServiceRemote;
mojo.internal.bindings.coral.mojom.CoralServiceRequest = mojo.internal.bindings.coral.mojom.CoralServicePendingReceiver;

