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
var coral = coral || {};
coral.mojom = coral.mojom || {};
var chromeos = chromeos || {};
var url = url || {};
var mojo_base = mojo_base || {};

coral.mojom.CoralErrorSpec = { $: mojo.internal.Enum() };
coral.mojom.EntitySpec = { $: {} };
coral.mojom.GroupResultSpec = { $: {} };
coral.mojom.CacheEmbeddingsResultSpec = { $: {} };
coral.mojom.TabSpec = { $: {} };
coral.mojom.AppSpec = { $: {} };
coral.mojom.EmbeddingOptionsSpec = { $: {} };
coral.mojom.ClusteringOptionsSpec = { $: {} };
coral.mojom.TitleGenerationOptionsSpec = { $: {} };
coral.mojom.GroupSpec = { $: {} };
coral.mojom.GroupRequestSpec = { $: {} };
coral.mojom.GroupResponseSpec = { $: {} };
coral.mojom.CacheEmbeddingsRequestSpec = { $: {} };
coral.mojom.CacheEmbeddingsResponseSpec = { $: {} };
coral.mojom.TitleObserver = {};
coral.mojom.TitleObserver.$interfaceName = 'coral.mojom.TitleObserver';
coral.mojom.TitleObserver_TitleUpdated_ParamsSpec = { $: {} };
coral.mojom.CoralProcessor = {};
coral.mojom.CoralProcessor.$interfaceName = 'coral.mojom.CoralProcessor';
coral.mojom.CoralProcessor_Group_ParamsSpec = { $: {} };
coral.mojom.CoralProcessor_Group_ResponseParamsSpec = { $: {} };
coral.mojom.CoralProcessor_CacheEmbeddings_ParamsSpec = { $: {} };
coral.mojom.CoralProcessor_CacheEmbeddings_ResponseParamsSpec = { $: {} };
coral.mojom.CoralService = {};
coral.mojom.CoralService.$interfaceName = 'coral.mojom.CoralService';
coral.mojom.CoralService_GroupDeprecated_ParamsSpec = { $: {} };
coral.mojom.CoralService_GroupDeprecated_ResponseParamsSpec = { $: {} };
coral.mojom.CoralService_CacheEmbeddingsDeprecated_ParamsSpec = { $: {} };
coral.mojom.CoralService_CacheEmbeddingsDeprecated_ResponseParamsSpec = { $: {} };
coral.mojom.CoralService_PrepareResource_ParamsSpec = { $: {} };
coral.mojom.CoralService_Initialize_ParamsSpec = { $: {} };

// Enum: CoralError
coral.mojom.CoralError = {
  kUnknownError: 0,
  kLoadModelFailed: 1,
  kInvalidArgs: 2,
  kModelExecutionFailed: 3,
  kClusteringError: 4,
};

// Union: Entity
mojo.internal.Union(
    coral.mojom.EntitySpec, 'coral.mojom.Entity', {
      'unknown': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'tab': {
        'ordinal': 1,
        'type': coral.mojom.TabSpec.$,
        'nullable': false,
      },
      'app': {
        'ordinal': 2,
        'type': coral.mojom.AppSpec.$,
        'nullable': false,
      },
    });

// Union: GroupResult
mojo.internal.Union(
    coral.mojom.GroupResultSpec, 'coral.mojom.GroupResult', {
      'error': {
        'ordinal': 0,
        'type': coral.mojom.CoralErrorSpec.$,
        'nullable': false,
      },
      'response': {
        'ordinal': 1,
        'type': coral.mojom.GroupResponseSpec.$,
        'nullable': false,
      },
    });

// Union: CacheEmbeddingsResult
mojo.internal.Union(
    coral.mojom.CacheEmbeddingsResultSpec, 'coral.mojom.CacheEmbeddingsResult', {
      'error': {
        'ordinal': 0,
        'type': coral.mojom.CoralErrorSpec.$,
        'nullable': false,
      },
      'response': {
        'ordinal': 1,
        'type': coral.mojom.CacheEmbeddingsResponseSpec.$,
        'nullable': false,
      },
    });

// Struct: Tab
mojo.internal.Struct(
    coral.mojom.TabSpec, 'coral.mojom.Tab', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: App
mojo.internal.Struct(
    coral.mojom.AppSpec, 'coral.mojom.App', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: EmbeddingOptions
mojo.internal.Struct(
    coral.mojom.EmbeddingOptionsSpec, 'coral.mojom.EmbeddingOptions', [
      mojo.internal.StructField('check_safety_filter_$flag', 0, 0, mojo.internal.Bool, false, false, 1, { isPrimary: true, linkedValueFieldName: 'check_safety_filter_$value', originalFieldName: 'check_safety_filter' }),
      mojo.internal.StructField('check_safety_filter_$value', 0, 1, mojo.internal.Bool, false, false, 1, { isPrimary: false, linkedValueFieldName: 'check_safety_filter_$flag', originalFieldName: 'check_safety_filter' }),
    ],
    [[0, 8], [1, 16]]);

// Struct: ClusteringOptions
mojo.internal.Struct(
    coral.mojom.ClusteringOptionsSpec, 'coral.mojom.ClusteringOptions', [
      mojo.internal.StructField('min_items_in_cluster', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_items_in_cluster', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_clusters', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TitleGenerationOptions
mojo.internal.Struct(
    coral.mojom.TitleGenerationOptionsSpec, 'coral.mojom.TitleGenerationOptions', [
      mojo.internal.StructField('language_code', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('max_characters', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Group
mojo.internal.Struct(
    coral.mojom.GroupSpec, 'coral.mojom.Group', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('entities', 16, 0, mojo.internal.Array(coral.mojom.EntitySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GroupRequest
mojo.internal.Struct(
    coral.mojom.GroupRequestSpec, 'coral.mojom.GroupRequest', [
      mojo.internal.StructField('entities', 0, 0, mojo.internal.Array(coral.mojom.EntitySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('embedding_options', 8, 0, coral.mojom.EmbeddingOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('clustering_options', 16, 0, coral.mojom.ClusteringOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title_generation_options', 24, 0, coral.mojom.TitleGenerationOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('suppression_context', 32, 0, mojo.internal.Array(coral.mojom.EntitySpec.$, false), null, true, 1, undefined),
    ],
    [[0, 40], [1, 48]]);

// Struct: GroupResponse
mojo.internal.Struct(
    coral.mojom.GroupResponseSpec, 'coral.mojom.GroupResponse', [
      mojo.internal.StructField('groups', 0, 0, mojo.internal.Array(coral.mojom.GroupSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CacheEmbeddingsRequest
mojo.internal.Struct(
    coral.mojom.CacheEmbeddingsRequestSpec, 'coral.mojom.CacheEmbeddingsRequest', [
      mojo.internal.StructField('entities', 0, 0, mojo.internal.Array(coral.mojom.EntitySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('embedding_options', 8, 0, coral.mojom.EmbeddingOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CacheEmbeddingsResponse
mojo.internal.Struct(
    coral.mojom.CacheEmbeddingsResponseSpec, 'coral.mojom.CacheEmbeddingsResponse', [
    ],
    [[0, 8]]);

// Interface: TitleObserver
mojo.internal.Struct(
    coral.mojom.TitleObserver_TitleUpdated_ParamsSpec, 'coral.mojom.TitleObserver_TitleUpdated_Params', [
      mojo.internal.StructField('group_id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

coral.mojom.TitleObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

coral.mojom.TitleObserverRemote = class {
  static get $interfaceName() {
    return 'coral.mojom.TitleObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      coral.mojom.TitleObserverPendingReceiver,
      handle);
    this.$ = new coral.mojom.TitleObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  titleUpdated(group_id, title) {
    return this.$.titleUpdated(group_id, title);
  }
};

coral.mojom.TitleObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TitleObserver', [
      { explicit: 0 },
    ]);
  }

  titleUpdated(group_id, title) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      coral.mojom.TitleObserver_TitleUpdated_ParamsSpec,
      null,
      [group_id, title],
      false);
  }

};

coral.mojom.TitleObserver.getRemote = function() {
  let remote = new coral.mojom.TitleObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'coral.mojom.TitleObserver',
    'context');
  return remote.$;
};

coral.mojom.TitleObserverReceiver = class {
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
             decoder.decodeStructInline(coral.mojom.TitleObserver_TitleUpdated_ParamsSpec);
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
          const params = decoder.decodeStructInline(coral.mojom.TitleObserver_TitleUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.titleUpdated');
          const result = this.impl.titleUpdated(params.group_id, params.title);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

coral.mojom.TitleObserverReceiver = coral.mojom.TitleObserverReceiver;

coral.mojom.TitleObserverPtr = coral.mojom.TitleObserverRemote;
coral.mojom.TitleObserverRequest = coral.mojom.TitleObserverPendingReceiver;


// Interface: CoralProcessor
mojo.internal.Struct(
    coral.mojom.CoralProcessor_Group_ParamsSpec, 'coral.mojom.CoralProcessor_Group_Params', [
      mojo.internal.StructField('request', 0, 0, coral.mojom.GroupRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(coral.mojom.TitleObserverSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    coral.mojom.CoralProcessor_Group_ResponseParamsSpec, 'coral.mojom.CoralProcessor_Group_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, coral.mojom.GroupResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    coral.mojom.CoralProcessor_CacheEmbeddings_ParamsSpec, 'coral.mojom.CoralProcessor_CacheEmbeddings_Params', [
      mojo.internal.StructField('request', 0, 0, coral.mojom.CacheEmbeddingsRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    coral.mojom.CoralProcessor_CacheEmbeddings_ResponseParamsSpec, 'coral.mojom.CoralProcessor_CacheEmbeddings_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, coral.mojom.CacheEmbeddingsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

coral.mojom.CoralProcessorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

coral.mojom.CoralProcessorRemote = class {
  static get $interfaceName() {
    return 'coral.mojom.CoralProcessor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      coral.mojom.CoralProcessorPendingReceiver,
      handle);
    this.$ = new coral.mojom.CoralProcessorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  group(request, observer) {
    return this.$.group(request, observer);
  }
  cacheEmbeddings(request) {
    return this.$.cacheEmbeddings(request);
  }
};

coral.mojom.CoralProcessorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CoralProcessor', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  group(request, observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      coral.mojom.CoralProcessor_Group_ParamsSpec,
      coral.mojom.CoralProcessor_Group_ResponseParamsSpec,
      [request, observer],
      false);
  }

  cacheEmbeddings(request) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      coral.mojom.CoralProcessor_CacheEmbeddings_ParamsSpec,
      coral.mojom.CoralProcessor_CacheEmbeddings_ResponseParamsSpec,
      [request],
      false);
  }

};

coral.mojom.CoralProcessor.getRemote = function() {
  let remote = new coral.mojom.CoralProcessorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'coral.mojom.CoralProcessor',
    'context');
  return remote.$;
};

coral.mojom.CoralProcessorReceiver = class {
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
             decoder.decodeStructInline(coral.mojom.CoralProcessor_Group_ParamsSpec);
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
             decoder.decodeStructInline(coral.mojom.CoralProcessor_CacheEmbeddings_ParamsSpec);
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
          const params = decoder.decodeStructInline(coral.mojom.CoralProcessor_Group_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.group');
          const result = this.impl.group(params.request, params.observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, coral.mojom.CoralProcessor_Group_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Group FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(coral.mojom.CoralProcessor_CacheEmbeddings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cacheEmbeddings');
          const result = this.impl.cacheEmbeddings(params.request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, coral.mojom.CoralProcessor_CacheEmbeddings_ResponseParamsSpec, header, rawHeader);
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

coral.mojom.CoralProcessorReceiver = coral.mojom.CoralProcessorReceiver;

coral.mojom.CoralProcessorPtr = coral.mojom.CoralProcessorRemote;
coral.mojom.CoralProcessorRequest = coral.mojom.CoralProcessorPendingReceiver;


// Interface: CoralService
mojo.internal.Struct(
    coral.mojom.CoralService_GroupDeprecated_ParamsSpec, 'coral.mojom.CoralService_GroupDeprecated_Params', [
      mojo.internal.StructField('request', 0, 0, coral.mojom.GroupRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(coral.mojom.TitleObserverSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    coral.mojom.CoralService_GroupDeprecated_ResponseParamsSpec, 'coral.mojom.CoralService_GroupDeprecated_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, coral.mojom.GroupResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    coral.mojom.CoralService_CacheEmbeddingsDeprecated_ParamsSpec, 'coral.mojom.CoralService_CacheEmbeddingsDeprecated_Params', [
      mojo.internal.StructField('request', 0, 0, coral.mojom.CacheEmbeddingsRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    coral.mojom.CoralService_CacheEmbeddingsDeprecated_ResponseParamsSpec, 'coral.mojom.CoralService_CacheEmbeddingsDeprecated_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, coral.mojom.CacheEmbeddingsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    coral.mojom.CoralService_PrepareResource_ParamsSpec, 'coral.mojom.CoralService_PrepareResource_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    coral.mojom.CoralService_Initialize_ParamsSpec, 'coral.mojom.CoralService_Initialize_Params', [
      mojo.internal.StructField('ml_service', 0, 0, mojo.internal.InterfaceProxy(chromeos.machine_learning.mojom.MachineLearningServiceRemote), null, true, 0, undefined),
      mojo.internal.StructField('processor', 8, 0, mojo.internal.InterfaceRequest(coral.mojom.CoralProcessorSpec), null, false, 0, undefined),
      mojo.internal.StructField('language_code', 16, 0, mojo.internal.String, null, true, 2, undefined),
    ],
    [[0, 24], [2, 32]]);

coral.mojom.CoralServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

coral.mojom.CoralServiceRemote = class {
  static get $interfaceName() {
    return 'coral.mojom.CoralService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      coral.mojom.CoralServicePendingReceiver,
      handle);
    this.$ = new coral.mojom.CoralServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  groupDeprecated(request, observer) {
    return this.$.groupDeprecated(request, observer);
  }
  cacheEmbeddingsDeprecated(request) {
    return this.$.cacheEmbeddingsDeprecated(request);
  }
  prepareResource() {
    return this.$.prepareResource();
  }
  initialize(ml_service, processor, language_code) {
    return this.$.initialize(ml_service, processor, language_code);
  }
};

coral.mojom.CoralServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CoralService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  groupDeprecated(request, observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      coral.mojom.CoralService_GroupDeprecated_ParamsSpec,
      coral.mojom.CoralService_GroupDeprecated_ResponseParamsSpec,
      [request, observer],
      false);
  }

  cacheEmbeddingsDeprecated(request) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      coral.mojom.CoralService_CacheEmbeddingsDeprecated_ParamsSpec,
      coral.mojom.CoralService_CacheEmbeddingsDeprecated_ResponseParamsSpec,
      [request],
      false);
  }

  prepareResource() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      coral.mojom.CoralService_PrepareResource_ParamsSpec,
      null,
      [],
      false);
  }

  initialize(ml_service, processor, language_code) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      coral.mojom.CoralService_Initialize_ParamsSpec,
      null,
      [ml_service, processor, language_code],
      false);
  }

};

coral.mojom.CoralService.getRemote = function() {
  let remote = new coral.mojom.CoralServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'coral.mojom.CoralService',
    'context');
  return remote.$;
};

coral.mojom.CoralServiceReceiver = class {
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
             decoder.decodeStructInline(coral.mojom.CoralService_GroupDeprecated_ParamsSpec);
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
             decoder.decodeStructInline(coral.mojom.CoralService_CacheEmbeddingsDeprecated_ParamsSpec);
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
             decoder.decodeStructInline(coral.mojom.CoralService_PrepareResource_ParamsSpec);
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
             decoder.decodeStructInline(coral.mojom.CoralService_Initialize_ParamsSpec);
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
          const params = decoder.decodeStructInline(coral.mojom.CoralService_GroupDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.groupDeprecated');
          const result = this.impl.groupDeprecated(params.request, params.observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, coral.mojom.CoralService_GroupDeprecated_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GroupDeprecated FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(coral.mojom.CoralService_CacheEmbeddingsDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cacheEmbeddingsDeprecated');
          const result = this.impl.cacheEmbeddingsDeprecated(params.request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, coral.mojom.CoralService_CacheEmbeddingsDeprecated_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CacheEmbeddingsDeprecated FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(coral.mojom.CoralService_PrepareResource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prepareResource');
          const result = this.impl.prepareResource();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(coral.mojom.CoralService_Initialize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.ml_service, params.processor, params.language_code);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

coral.mojom.CoralServiceReceiver = coral.mojom.CoralServiceReceiver;

coral.mojom.CoralServicePtr = coral.mojom.CoralServiceRemote;
coral.mojom.CoralServiceRequest = coral.mojom.CoralServicePendingReceiver;

