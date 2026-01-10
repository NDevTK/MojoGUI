// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/shared_storage/shared_storage.mojom
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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var network = network || {};
var url = url || {};

blink.mojom.SharedStorageGetStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.SharedStorageWorkletCreationMethodSpec = { $: mojo.internal.Enum() };
blink.mojom.SharedStorageDataOriginTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.SharedStorageUrlWithMetadataSpec = { $: {} };
blink.mojom.PrivateAggregationConfigSpec = { $: {} };
blink.mojom.SharedStorageWorkletHost = {};
blink.mojom.SharedStorageWorkletHost.$interfaceName = 'blink.mojom.SharedStorageWorkletHost';
blink.mojom.SharedStorageWorkletHost_SelectURL_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletHost_SelectURL_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletHost_Run_ParamsSpec = { $: {} };
blink.mojom.SharedStorageWorkletHost_Run_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageDocumentService = {};
blink.mojom.SharedStorageDocumentService.$interfaceName = 'blink.mojom.SharedStorageDocumentService';
blink.mojom.SharedStorageDocumentService_CreateWorklet_ParamsSpec = { $: {} };
blink.mojom.SharedStorageDocumentService_CreateWorklet_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageDocumentService_SharedStorageGet_ParamsSpec = { $: {} };
blink.mojom.SharedStorageDocumentService_SharedStorageGet_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ParamsSpec = { $: {} };
blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ResponseParamsSpec = { $: {} };
blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ParamsSpec = { $: {} };
blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ResponseParamsSpec = { $: {} };

// Enum: SharedStorageGetStatus
blink.mojom.SharedStorageGetStatus = {
  kSuccess: 0,
  kNotFound: 1,
  kError: 2,
};

// Enum: SharedStorageWorkletCreationMethod
blink.mojom.SharedStorageWorkletCreationMethod = {
  kAddModule: 0,
  kCreateWorklet: 1,
};

// Enum: SharedStorageDataOriginType
blink.mojom.SharedStorageDataOriginType = {
  kContextOrigin: 0,
  kScriptOrigin: 1,
  kCustomOrigin: 2,
};

// Struct: SharedStorageUrlWithMetadata
mojo.internal.Struct(
    blink.mojom.SharedStorageUrlWithMetadataSpec, 'blink.mojom.SharedStorageUrlWithMetadata', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reporting_metadata', 8, 0, mojo.internal.Map(mojo.internal.String, url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrivateAggregationConfig
mojo.internal.Struct(
    blink.mojom.PrivateAggregationConfigSpec, 'blink.mojom.PrivateAggregationConfig', [
      mojo.internal.StructField('aggregation_coordinator_origin', 0, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('context_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('filtering_id_max_bytes', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_contributions_$value', 20, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'max_contributions_$flag', originalFieldName: 'max_contributions' }),
      mojo.internal.StructField('max_contributions_$flag', 22, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'max_contributions_$value', originalFieldName: 'max_contributions' }),
    ],
    [[0, 32]]);

// Interface: SharedStorageWorkletHost
mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletHost_SelectURL_ParamsSpec, 'blink.mojom.SharedStorageWorkletHost_SelectURL_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('urls_with_metadata', 8, 0, mojo.internal.Array(blink.mojom.SharedStorageUrlWithMetadataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('serialized_data', 16, 0, blink.mojom.CloneableMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('private_aggregation_config', 24, 0, blink.mojom.PrivateAggregationConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('saved_query_name', 32, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_time', 40, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('keep_alive_after_operation', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('resolve_to_config', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletHost_SelectURL_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletHost_SelectURL_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('config', 8, 0, blink.mojom.FencedFrameConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletHost_Run_ParamsSpec, 'blink.mojom.SharedStorageWorkletHost_Run_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('serialized_data', 8, 0, blink.mojom.CloneableMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('private_aggregation_config', 16, 0, blink.mojom.PrivateAggregationConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_time', 24, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('keep_alive_after_operation', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageWorkletHost_Run_ResponseParamsSpec, 'blink.mojom.SharedStorageWorkletHost_Run_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.SharedStorageWorkletHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedStorageWorkletHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedStorageWorkletHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedStorageWorkletHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedStorageWorkletHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SharedStorageWorkletHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SharedStorageWorkletHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  selectURL(name, urls_with_metadata, serialized_data, keep_alive_after_operation, private_aggregation_config, resolve_to_config, saved_query_name, start_time) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.SharedStorageWorkletHost_SelectURL_ParamsSpec,
      blink.mojom.SharedStorageWorkletHost_SelectURL_ResponseParamsSpec,
      [name, urls_with_metadata, serialized_data, keep_alive_after_operation, private_aggregation_config, resolve_to_config, saved_query_name, start_time],
      false);
  }

  run(name, serialized_data, keep_alive_after_operation, private_aggregation_config, start_time) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.SharedStorageWorkletHost_Run_ParamsSpec,
      blink.mojom.SharedStorageWorkletHost_Run_ResponseParamsSpec,
      [name, serialized_data, keep_alive_after_operation, private_aggregation_config, start_time],
      false);
  }

};

blink.mojom.SharedStorageWorkletHost.getRemote = function() {
  let remote = new blink.mojom.SharedStorageWorkletHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedStorageWorkletHost',
    'context');
  return remote.$;
};

blink.mojom.SharedStorageWorkletHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SharedStorageWorkletHost', [
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
        
        // Try Method 0: SelectURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageWorkletHost_SelectURL_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectURL (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Run
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageWorkletHost_Run_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Run (1)');
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
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageWorkletHost_SelectURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectURL');
          const result = this.impl.selectURL(params.name, params.urls_with_metadata, params.serialized_data, params.keep_alive_after_operation, params.private_aggregation_config, params.resolve_to_config, params.saved_query_name, params.start_time);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageWorkletHost_SelectURL_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageWorkletHost_Run_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.run');
          const result = this.impl.run(params.name, params.serialized_data, params.keep_alive_after_operation, params.private_aggregation_config, params.start_time);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageWorkletHost_Run_ResponseParamsSpec);
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

blink.mojom.SharedStorageWorkletHostReceiver = blink.mojom.SharedStorageWorkletHostReceiver;

blink.mojom.SharedStorageWorkletHostPtr = blink.mojom.SharedStorageWorkletHostRemote;
blink.mojom.SharedStorageWorkletHostRequest = blink.mojom.SharedStorageWorkletHostPendingReceiver;


// Interface: SharedStorageDocumentService
mojo.internal.Struct(
    blink.mojom.SharedStorageDocumentService_CreateWorklet_ParamsSpec, 'blink.mojom.SharedStorageDocumentService_CreateWorklet_Params', [
      mojo.internal.StructField('script_source_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data_origin', 8, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data_origin_type', 16, 0, blink.mojom.SharedStorageDataOriginTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('credentials_mode', 24, 0, network.mojom.CredentialsModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('creation_method', 32, 0, blink.mojom.SharedStorageWorkletCreationMethodSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin_trial_features', 40, 0, mojo.internal.Array(blink.mojom.OriginTrialFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('worklet_host', 48, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageDocumentService_CreateWorklet_ResponseParamsSpec, 'blink.mojom.SharedStorageDocumentService_CreateWorklet_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageDocumentService_SharedStorageGet_ParamsSpec, 'blink.mojom.SharedStorageDocumentService_SharedStorageGet_Params', [
      mojo.internal.StructField('key', 0, 0, network.mojom.SharedStorageKeyArgumentSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageDocumentService_SharedStorageGet_ResponseParamsSpec, 'blink.mojom.SharedStorageDocumentService_SharedStorageGet_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.SharedStorageGetStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ParamsSpec, 'blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_Params', [
      mojo.internal.StructField('method_with_options', 0, 0, network.mojom.SharedStorageModifierMethodWithOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ResponseParamsSpec, 'blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ParamsSpec, 'blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_Params', [
      mojo.internal.StructField('methods_with_options', 0, 0, network.mojom.SharedStorageBatchUpdateMethodsArgumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('with_lock', 8, 0, network.mojom.LockNameSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ResponseParamsSpec, 'blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SharedStorageDocumentServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedStorageDocumentServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedStorageDocumentService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedStorageDocumentServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedStorageDocumentServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SharedStorageDocumentServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SharedStorageDocumentService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createWorklet(script_source_url, data_origin, data_origin_type, credentials_mode, creation_method, origin_trial_features, worklet_host) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.SharedStorageDocumentService_CreateWorklet_ParamsSpec,
      blink.mojom.SharedStorageDocumentService_CreateWorklet_ResponseParamsSpec,
      [script_source_url, data_origin, data_origin_type, credentials_mode, creation_method, origin_trial_features, worklet_host],
      false);
  }

  sharedStorageGet(key) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.SharedStorageDocumentService_SharedStorageGet_ParamsSpec,
      blink.mojom.SharedStorageDocumentService_SharedStorageGet_ResponseParamsSpec,
      [key],
      false);
  }

  sharedStorageUpdate(method_with_options) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ParamsSpec,
      blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ResponseParamsSpec,
      [method_with_options],
      false);
  }

  sharedStorageBatchUpdate(methods_with_options, with_lock) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ParamsSpec,
      blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ResponseParamsSpec,
      [methods_with_options, with_lock],
      false);
  }

};

blink.mojom.SharedStorageDocumentService.getRemote = function() {
  let remote = new blink.mojom.SharedStorageDocumentServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedStorageDocumentService',
    'context');
  return remote.$;
};

blink.mojom.SharedStorageDocumentServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SharedStorageDocumentService', [
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
        
        // Try Method 0: CreateWorklet
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageDocumentService_CreateWorklet_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWorklet (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SharedStorageGet
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageDocumentService_SharedStorageGet_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SharedStorageGet (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SharedStorageUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SharedStorageUpdate (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SharedStorageBatchUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SharedStorageBatchUpdate (3)');
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
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageDocumentService_CreateWorklet_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createWorklet');
          const result = this.impl.createWorklet(params.script_source_url, params.data_origin, params.data_origin_type, params.credentials_mode, params.creation_method, params.origin_trial_features, params.worklet_host);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageDocumentService_CreateWorklet_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageDocumentService_SharedStorageGet_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageGet');
          const result = this.impl.sharedStorageGet(params.key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageDocumentService_SharedStorageGet_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageUpdate');
          const result = this.impl.sharedStorageUpdate(params.method_with_options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageDocumentService_SharedStorageUpdate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageBatchUpdate');
          const result = this.impl.sharedStorageBatchUpdate(params.methods_with_options, params.with_lock);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SharedStorageDocumentService_SharedStorageBatchUpdate_ResponseParamsSpec);
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

blink.mojom.SharedStorageDocumentServiceReceiver = blink.mojom.SharedStorageDocumentServiceReceiver;

blink.mojom.SharedStorageDocumentServicePtr = blink.mojom.SharedStorageDocumentServiceRemote;
blink.mojom.SharedStorageDocumentServiceRequest = blink.mojom.SharedStorageDocumentServicePendingReceiver;

