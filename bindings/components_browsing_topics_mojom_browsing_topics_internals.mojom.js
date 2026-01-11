// Auto-generated MojoJS binding
 // Source: chromium_src/components/browsing_topics/mojom/browsing_topics_internals.mojom
 // Module: browsing_topics.mojom

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
 

 mojo.internal.bindings.browsing_topics = mojo.internal.bindings.browsing_topics || {};
mojo.internal.bindings.browsing_topics.mojom = mojo.internal.bindings.browsing_topics.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.browsing_topics.mojom.WebUIGetBrowsingTopicsStateResultSpec = { $: {} };
mojo.internal.bindings.browsing_topics.mojom.WebUIGetModelInfoResultSpec = { $: {} };
mojo.internal.bindings.browsing_topics.mojom.WebUIBrowsingTopicsConfigurationSpec = { $: {} };
mojo.internal.bindings.browsing_topics.mojom.WebUITopicSpec = { $: {} };
mojo.internal.bindings.browsing_topics.mojom.WebUIEpochSpec = { $: {} };
mojo.internal.bindings.browsing_topics.mojom.WebUIBrowsingTopicsStateSpec = { $: {} };
mojo.internal.bindings.browsing_topics.mojom.WebUIModelInfoSpec = { $: {} };
mojo.internal.bindings.browsing_topics.mojom.PageHandler = {};
mojo.internal.bindings.browsing_topics.mojom.PageHandlerSpec = { $ : {} };
mojo.internal.bindings.browsing_topics.mojom.PageHandler.$interfaceName = 'browsing_topics.mojom.PageHandler';
mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ParamsSpec = { $: {} };
mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ParamsSpec = { $: {} };
mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetModelInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetModelInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.browsing_topics.mojom.PageHandler_ClassifyHosts_ParamsSpec = { $: {} };
mojo.internal.bindings.browsing_topics.mojom.PageHandler_ClassifyHosts_ResponseParamsSpec = { $: {} };

// Union: WebUIGetBrowsingTopicsStateResult
mojo.internal.Union(
    mojo.internal.bindings.browsing_topics.mojom.WebUIGetBrowsingTopicsStateResultSpec, 'browsing_topics.mojom.WebUIGetBrowsingTopicsStateResult', {
      'arg_override_status_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_browsing_topics_state': {
        'ordinal': 1,
        'type': mojo.internal.bindings.browsing_topics.mojom.WebUIBrowsingTopicsStateSpec.$,
        'nullable': false,
      },
    });

// Union: WebUIGetModelInfoResult
mojo.internal.Union(
    mojo.internal.bindings.browsing_topics.mojom.WebUIGetModelInfoResultSpec, 'browsing_topics.mojom.WebUIGetModelInfoResult', {
      'arg_override_status_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_model_info': {
        'ordinal': 1,
        'type': mojo.internal.bindings.browsing_topics.mojom.WebUIModelInfoSpec.$,
        'nullable': false,
      },
    });

// Struct: WebUIBrowsingTopicsConfiguration
mojo.internal.Struct(
    mojo.internal.bindings.browsing_topics.mojom.WebUIBrowsingTopicsConfigurationSpec, 'browsing_topics.mojom.WebUIBrowsingTopicsConfiguration', [
      mojo.internal.StructField('arg_time_period_per_epoch', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_epoch_introduction_delay', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_disabled_topics_list', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_config_version', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_number_of_epochs_to_expose', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_number_of_top_topics_per_epoch', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_use_random_topic_probability_percent', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_number_of_epochs_of_observation_data_to_use_for_filtering', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_number_of_api_usage_context_domains_to_keep_per_topic', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_number_of_api_usage_context_entries_to_load_per_epoch', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_number_of_api_usage_context_domains_to_store_per_page_load', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_taxonomy_version', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_browsing_topics_enabled', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_privacy_sandbox_ads_apis_override_enabled', 60, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_override_privacy_sandbox_settings_local_testing_enabled', 60, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_browsing_topics_bypass_ip_is_publicly_routable_check_enabled', 60, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_browsing_topics_document_api_enabled', 60, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_browsing_topics_parameters_enabled', 60, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: WebUITopic
mojo.internal.Struct(
    mojo.internal.bindings.browsing_topics.mojom.WebUITopicSpec, 'browsing_topics.mojom.WebUITopic', [
      mojo.internal.StructField('arg_topic_name', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_observed_by_domains', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_topic_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_real_topic', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebUIEpoch
mojo.internal.Struct(
    mojo.internal.bindings.browsing_topics.mojom.WebUIEpochSpec, 'browsing_topics.mojom.WebUIEpoch', [
      mojo.internal.StructField('arg_topics', 0, 0, mojo.internal.Array(mojo.internal.bindings.browsing_topics.mojom.WebUITopicSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_calculation_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_model_version', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_taxonomy_version', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: WebUIBrowsingTopicsState
mojo.internal.Struct(
    mojo.internal.bindings.browsing_topics.mojom.WebUIBrowsingTopicsStateSpec, 'browsing_topics.mojom.WebUIBrowsingTopicsState', [
      mojo.internal.StructField('arg_epochs', 0, 0, mojo.internal.Array(mojo.internal.bindings.browsing_topics.mojom.WebUIEpochSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_next_scheduled_calculation_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebUIModelInfo
mojo.internal.Struct(
    mojo.internal.bindings.browsing_topics.mojom.WebUIModelInfoSpec, 'browsing_topics.mojom.WebUIModelInfo', [
      mojo.internal.StructField('arg_model_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_model_file_path', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ParamsSpec, 'browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ResponseParamsSpec, 'browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ResponseParams', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.browsing_topics.mojom.WebUIBrowsingTopicsConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ParamsSpec, 'browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_Params', [
      mojo.internal.StructField('arg_calculate_now', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ResponseParamsSpec, 'browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.browsing_topics.mojom.WebUIGetBrowsingTopicsStateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetModelInfo_ParamsSpec, 'browsing_topics.mojom.PageHandler_GetModelInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetModelInfo_ResponseParamsSpec, 'browsing_topics.mojom.PageHandler_GetModelInfo_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.browsing_topics.mojom.WebUIGetModelInfoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.browsing_topics.mojom.PageHandler_ClassifyHosts_ParamsSpec, 'browsing_topics.mojom.PageHandler_ClassifyHosts_Params', [
      mojo.internal.StructField('arg_hosts', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.browsing_topics.mojom.PageHandler_ClassifyHosts_ResponseParamsSpec, 'browsing_topics.mojom.PageHandler_ClassifyHosts_ResponseParams', [
      mojo.internal.StructField('arg_topics_for_hosts', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.bindings.browsing_topics.mojom.WebUITopicSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.browsing_topics.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.browsing_topics.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'browsing_topics.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.browsing_topics.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.browsing_topics.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getBrowsingTopicsConfiguration() {
    return this.$.getBrowsingTopicsConfiguration();
  }
  getBrowsingTopicsState(arg_calculate_now) {
    return this.$.getBrowsingTopicsState(arg_calculate_now);
  }
  getModelInfo() {
    return this.$.getModelInfo();
  }
  classifyHosts(arg_hosts) {
    return this.$.classifyHosts(arg_hosts);
  }
};

mojo.internal.bindings.browsing_topics.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('browsing_topics.mojom.PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getBrowsingTopicsConfiguration() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ParamsSpec,
      mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ResponseParamsSpec,
      [],
      false);
  }

  getBrowsingTopicsState(arg_calculate_now) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ParamsSpec,
      mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ResponseParamsSpec,
      [arg_calculate_now],
      false);
  }

  getModelInfo() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetModelInfo_ParamsSpec,
      mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetModelInfo_ResponseParamsSpec,
      [],
      false);
  }

  classifyHosts(arg_hosts) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.browsing_topics.mojom.PageHandler_ClassifyHosts_ParamsSpec,
      mojo.internal.bindings.browsing_topics.mojom.PageHandler_ClassifyHosts_ResponseParamsSpec,
      [arg_hosts],
      false);
  }

};

mojo.internal.bindings.browsing_topics.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.browsing_topics.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'browsing_topics.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.browsing_topics.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('browsing_topics.mojom.PageHandler', [
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
        
        // Try Method 0: GetBrowsingTopicsConfiguration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBrowsingTopicsConfiguration (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetBrowsingTopicsState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBrowsingTopicsState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetModelInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetModelInfo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetModelInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ClassifyHosts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.browsing_topics.mojom.PageHandler_ClassifyHosts_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClassifyHosts (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getBrowsingTopicsConfiguration');
          const result = this.impl.getBrowsingTopicsConfiguration();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetBrowsingTopicsConfiguration FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getBrowsingTopicsState');
          const result = this.impl.getBrowsingTopicsState(params.arg_calculate_now);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetBrowsingTopicsState FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetModelInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getModelInfo');
          const result = this.impl.getModelInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.browsing_topics.mojom.PageHandler_GetModelInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetModelInfo FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.browsing_topics.mojom.PageHandler_ClassifyHosts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.classifyHosts');
          const result = this.impl.classifyHosts(params.arg_hosts);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.browsing_topics.mojom.PageHandler_ClassifyHosts_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClassifyHosts FAILED:', e));
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

mojo.internal.bindings.browsing_topics.mojom.PageHandlerReceiver = mojo.internal.bindings.browsing_topics.mojom.PageHandlerReceiver;

mojo.internal.bindings.browsing_topics.mojom.PageHandlerPtr = mojo.internal.bindings.browsing_topics.mojom.PageHandlerRemote;
mojo.internal.bindings.browsing_topics.mojom.PageHandlerRequest = mojo.internal.bindings.browsing_topics.mojom.PageHandlerPendingReceiver;

