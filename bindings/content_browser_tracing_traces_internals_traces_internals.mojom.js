// Auto-generated MojoJS binding
 // Source: chromium_src/content/browser/tracing/traces_internals/traces_internals.mojom
 // Module: traces_internals.mojom

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
 

 mojo.internal.bindings.traces_internals = mojo.internal.bindings.traces_internals || {};
mojo.internal.bindings.traces_internals.mojom = mojo.internal.bindings.traces_internals.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.traces_internals.mojom.ReportUploadStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.traces_internals.mojom.SkipUploadReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.traces_internals.mojom.TracingScenarioStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.traces_internals.mojom.ClientTraceReportSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.ScenarioSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.TraceCategorySpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactory = {};
mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactorySpec = { $ : {} };
mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactory.$interfaceName = 'traces_internals.mojom.TracesInternalsHandlerFactory';
mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler = {};
mojo.internal.bindings.traces_internals.mojom.PageHandlerSpec = { $ : {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler.$interfaceName = 'traces_internals.mojom.PageHandler';
mojo.internal.bindings.traces_internals.mojom.PageHandler_StartTraceSession_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_StartTraceSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_CloneTraceSession_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_CloneTraceSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_StopTraceSession_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_StopTraceSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_GetTrackEventCategories_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_GetTrackEventCategories_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_GetBufferUsage_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_GetBufferUsage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllTraceReports_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllTraceReports_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteSingleTrace_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteSingleTrace_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteAllTraces_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteAllTraces_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_UserUploadSingleTrace_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_UserUploadSingleTrace_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_DownloadTrace_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_DownloadTrace_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllScenarios_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllScenarios_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_SetEnabledScenarios_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_SetEnabledScenarios_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_SetPrivacyFilterEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSystemTracingState_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSystemTracingState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_EnableSystemTracing_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_EnableSystemTracing_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_DisableSystemTracing_ParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.PageHandler_DisableSystemTracing_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.traces_internals.mojom.Page = {};
mojo.internal.bindings.traces_internals.mojom.PageSpec = { $ : {} };
mojo.internal.bindings.traces_internals.mojom.Page.$interfaceName = 'traces_internals.mojom.Page';
mojo.internal.bindings.traces_internals.mojom.Page_OnTraceComplete_ParamsSpec = { $: {} };

// Enum: ReportUploadState
mojo.internal.bindings.traces_internals.mojom.ReportUploadState = {
  kNotUploaded: 0,
  kPending: 1,
  kPending_UserRequested: 2,
  kUploaded: 3,
};

// Enum: SkipUploadReason
mojo.internal.bindings.traces_internals.mojom.SkipUploadReason = {
  kNoSkip: 0,
  kSizeLimitExceeded: 1,
  kNotAnonymized: 2,
  kScenarioQuotaExceeded: 3,
  kUploadTimedOut: 4,
  kLocalScenario: 5,
};

// Enum: TracingScenarioState
mojo.internal.bindings.traces_internals.mojom.TracingScenarioState = {
  kDisabled: 0,
  kEnabled: 1,
  kSetup: 2,
  kStarting: 3,
  kRecording: 4,
  kStopping: 5,
  kFinalizing: 6,
  kCloning: 7,
};

// Struct: ClientTraceReport
mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.ClientTraceReportSpec, 'traces_internals.mojom.ClientTraceReport', [
      mojo.internal.StructField('arg_uuid', 0, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_creation_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scenario_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_upload_rule_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_total_size', 32, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_upload_state', 40, 0, mojo.internal.bindings.traces_internals.mojom.ReportUploadStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_upload_time', 48, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_skip_reason', 56, 0, mojo.internal.bindings.traces_internals.mojom.SkipUploadReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_upload_rule_value_$value', 64, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_upload_rule_value_$flag', originalFieldName: 'arg_upload_rule_value' }),
      mojo.internal.StructField('arg_upload_rule_value_$flag', 68, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_upload_rule_value_$value', originalFieldName: 'arg_upload_rule_value' }),
      mojo.internal.StructField('arg_has_trace_content', 68, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: Scenario
mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.ScenarioSpec, 'traces_internals.mojom.Scenario', [
      mojo.internal.StructField('arg_scenario_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_description', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_current_state', 16, 0, mojo.internal.bindings.traces_internals.mojom.TracingScenarioStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_local_scenario', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_enabled', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TraceCategory
mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.TraceCategorySpec, 'traces_internals.mojom.TraceCategory', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_description', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tags', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_is_group', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: TracesInternalsHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactory_CreatePageHandler_ParamsSpec, 'traces_internals.mojom.TracesInternalsHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.traces_internals.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.traces_internals.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'traces_internals.mojom.TracesInternalsHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(arg_page, arg_handler) {
    return this.$.createPageHandler(arg_page, arg_handler);
  }
};

mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('traces_internals.mojom.TracesInternalsHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

};

mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'traces_internals.mojom.TracesInternalsHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('traces_internals.mojom.TracesInternalsHandlerFactory', [
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
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.arg_page, params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactoryReceiver = mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactoryReceiver;

mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactoryPtr = mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactoryRemote;
mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactoryRequest = mojo.internal.bindings.traces_internals.mojom.TracesInternalsHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_StartTraceSession_ParamsSpec, 'traces_internals.mojom.PageHandler_StartTraceSession_Params', [
      mojo.internal.StructField('arg_config_pb', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_enable_privacy_filters', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_StartTraceSession_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_StartTraceSession_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_CloneTraceSession_ParamsSpec, 'traces_internals.mojom.PageHandler_CloneTraceSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_CloneTraceSession_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_CloneTraceSession_ResponseParams', [
      mojo.internal.StructField('arg_trace', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_uuid', 8, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_StopTraceSession_ParamsSpec, 'traces_internals.mojom.PageHandler_StopTraceSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_StopTraceSession_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_StopTraceSession_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_GetTrackEventCategories_ParamsSpec, 'traces_internals.mojom.PageHandler_GetTrackEventCategories_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_GetTrackEventCategories_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_GetTrackEventCategories_ResponseParams', [
      mojo.internal.StructField('arg_categories', 0, 0, mojo.internal.Array(mojo.internal.bindings.traces_internals.mojom.TraceCategorySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_GetBufferUsage_ParamsSpec, 'traces_internals.mojom.PageHandler_GetBufferUsage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_GetBufferUsage_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_GetBufferUsage_ResponseParams', [
      mojo.internal.StructField('arg_percent_full', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_success', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_data_loss', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllTraceReports_ParamsSpec, 'traces_internals.mojom.PageHandler_GetAllTraceReports_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllTraceReports_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_GetAllTraceReports_ResponseParams', [
      mojo.internal.StructField('arg_reports', 0, 0, mojo.internal.Array(mojo.internal.bindings.traces_internals.mojom.ClientTraceReportSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteSingleTrace_ParamsSpec, 'traces_internals.mojom.PageHandler_DeleteSingleTrace_Params', [
      mojo.internal.StructField('arg_uuid', 0, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteSingleTrace_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_DeleteSingleTrace_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteAllTraces_ParamsSpec, 'traces_internals.mojom.PageHandler_DeleteAllTraces_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteAllTraces_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_DeleteAllTraces_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_UserUploadSingleTrace_ParamsSpec, 'traces_internals.mojom.PageHandler_UserUploadSingleTrace_Params', [
      mojo.internal.StructField('arg_uuid', 0, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_UserUploadSingleTrace_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_UserUploadSingleTrace_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_DownloadTrace_ParamsSpec, 'traces_internals.mojom.PageHandler_DownloadTrace_Params', [
      mojo.internal.StructField('arg_uuid', 0, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_DownloadTrace_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_DownloadTrace_ResponseParams', [
      mojo.internal.StructField('arg_trace', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllScenarios_ParamsSpec, 'traces_internals.mojom.PageHandler_GetAllScenarios_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllScenarios_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_GetAllScenarios_ResponseParams', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.Array(mojo.internal.bindings.traces_internals.mojom.ScenarioSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_SetEnabledScenarios_ParamsSpec, 'traces_internals.mojom.PageHandler_SetEnabledScenarios_Params', [
      mojo.internal.StructField('arg_new_config', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_SetEnabledScenarios_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_SetEnabledScenarios_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ParamsSpec, 'traces_internals.mojom.PageHandler_SetScenariosConfigFromString_Params', [
      mojo.internal.StructField('arg_config_string', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ParamsSpec, 'traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_Params', [
      mojo.internal.StructField('arg_config_pb', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ParamsSpec, 'traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ResponseParams', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_SetPrivacyFilterEnabled_ParamsSpec, 'traces_internals.mojom.PageHandler_SetPrivacyFilterEnabled_Params', [
      mojo.internal.StructField('arg_enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSystemTracingState_ParamsSpec, 'traces_internals.mojom.PageHandler_GetSystemTracingState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSystemTracingState_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_GetSystemTracingState_ResponseParams', [
      mojo.internal.StructField('arg_service_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_service_registered', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ParamsSpec, 'traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ResponseParams', [
      mojo.internal.StructField('arg_shield_icon_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_EnableSystemTracing_ParamsSpec, 'traces_internals.mojom.PageHandler_EnableSystemTracing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_EnableSystemTracing_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_EnableSystemTracing_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_DisableSystemTracing_ParamsSpec, 'traces_internals.mojom.PageHandler_DisableSystemTracing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.PageHandler_DisableSystemTracing_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_DisableSystemTracing_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.traces_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.traces_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'traces_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.traces_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.traces_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startTraceSession(arg_config_pb, arg_enable_privacy_filters) {
    return this.$.startTraceSession(arg_config_pb, arg_enable_privacy_filters);
  }
  cloneTraceSession() {
    return this.$.cloneTraceSession();
  }
  stopTraceSession() {
    return this.$.stopTraceSession();
  }
  getTrackEventCategories() {
    return this.$.getTrackEventCategories();
  }
  getBufferUsage() {
    return this.$.getBufferUsage();
  }
  getAllTraceReports() {
    return this.$.getAllTraceReports();
  }
  deleteSingleTrace(arg_uuid) {
    return this.$.deleteSingleTrace(arg_uuid);
  }
  deleteAllTraces() {
    return this.$.deleteAllTraces();
  }
  userUploadSingleTrace(arg_uuid) {
    return this.$.userUploadSingleTrace(arg_uuid);
  }
  downloadTrace(arg_uuid) {
    return this.$.downloadTrace(arg_uuid);
  }
  getAllScenarios() {
    return this.$.getAllScenarios();
  }
  setEnabledScenarios(arg_new_config) {
    return this.$.setEnabledScenarios(arg_new_config);
  }
  setScenariosConfigFromString(arg_config_string) {
    return this.$.setScenariosConfigFromString(arg_config_string);
  }
  setScenariosConfigFromBuffer(arg_config_pb) {
    return this.$.setScenariosConfigFromBuffer(arg_config_pb);
  }
  getPrivacyFilterEnabled() {
    return this.$.getPrivacyFilterEnabled();
  }
  setPrivacyFilterEnabled(arg_enable) {
    return this.$.setPrivacyFilterEnabled(arg_enable);
  }
  getSystemTracingState() {
    return this.$.getSystemTracingState();
  }
  getSecurityShieldIconUrl() {
    return this.$.getSecurityShieldIconUrl();
  }
  enableSystemTracing() {
    return this.$.enableSystemTracing();
  }
  disableSystemTracing() {
    return this.$.disableSystemTracing();
  }
};

mojo.internal.bindings.traces_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('traces_internals.mojom.PageHandler', [
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

  startTraceSession(arg_config_pb, arg_enable_privacy_filters) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_StartTraceSession_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_StartTraceSession_ResponseParamsSpec,
      [arg_config_pb, arg_enable_privacy_filters],
      false);
  }

  cloneTraceSession() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_CloneTraceSession_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_CloneTraceSession_ResponseParamsSpec,
      [],
      false);
  }

  stopTraceSession() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_StopTraceSession_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_StopTraceSession_ResponseParamsSpec,
      [],
      false);
  }

  getTrackEventCategories() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_GetTrackEventCategories_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_GetTrackEventCategories_ResponseParamsSpec,
      [],
      false);
  }

  getBufferUsage() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_GetBufferUsage_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_GetBufferUsage_ResponseParamsSpec,
      [],
      false);
  }

  getAllTraceReports() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllTraceReports_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllTraceReports_ResponseParamsSpec,
      [],
      false);
  }

  deleteSingleTrace(arg_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteSingleTrace_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteSingleTrace_ResponseParamsSpec,
      [arg_uuid],
      false);
  }

  deleteAllTraces() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteAllTraces_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteAllTraces_ResponseParamsSpec,
      [],
      false);
  }

  userUploadSingleTrace(arg_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_UserUploadSingleTrace_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_UserUploadSingleTrace_ResponseParamsSpec,
      [arg_uuid],
      false);
  }

  downloadTrace(arg_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_DownloadTrace_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_DownloadTrace_ResponseParamsSpec,
      [arg_uuid],
      false);
  }

  getAllScenarios() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllScenarios_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllScenarios_ResponseParamsSpec,
      [],
      false);
  }

  setEnabledScenarios(arg_new_config) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_SetEnabledScenarios_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_SetEnabledScenarios_ResponseParamsSpec,
      [arg_new_config],
      false);
  }

  setScenariosConfigFromString(arg_config_string) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ResponseParamsSpec,
      [arg_config_string],
      false);
  }

  setScenariosConfigFromBuffer(arg_config_pb) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ResponseParamsSpec,
      [arg_config_pb],
      false);
  }

  getPrivacyFilterEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ResponseParamsSpec,
      [],
      false);
  }

  setPrivacyFilterEnabled(arg_enable) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_SetPrivacyFilterEnabled_ParamsSpec,
      null,
      [arg_enable],
      false);
  }

  getSystemTracingState() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSystemTracingState_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSystemTracingState_ResponseParamsSpec,
      [],
      false);
  }

  getSecurityShieldIconUrl() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ResponseParamsSpec,
      [],
      false);
  }

  enableSystemTracing() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_EnableSystemTracing_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_EnableSystemTracing_ResponseParamsSpec,
      [],
      false);
  }

  disableSystemTracing() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.PageHandler_DisableSystemTracing_ParamsSpec,
      mojo.internal.bindings.traces_internals.mojom.PageHandler_DisableSystemTracing_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.traces_internals.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.traces_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'traces_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.traces_internals.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('traces_internals.mojom.PageHandler', [
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
        
        // Try Method 0: StartTraceSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_StartTraceSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartTraceSession (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CloneTraceSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_CloneTraceSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloneTraceSession (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StopTraceSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_StopTraceSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopTraceSession (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetTrackEventCategories
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_GetTrackEventCategories_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTrackEventCategories (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetBufferUsage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_GetBufferUsage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBufferUsage (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetAllTraceReports
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllTraceReports_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllTraceReports (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DeleteSingleTrace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteSingleTrace_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteSingleTrace (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: DeleteAllTraces
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteAllTraces_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteAllTraces (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: UserUploadSingleTrace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_UserUploadSingleTrace_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UserUploadSingleTrace (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: DownloadTrace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_DownloadTrace_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DownloadTrace (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetAllScenarios
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllScenarios_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllScenarios (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetEnabledScenarios
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_SetEnabledScenarios_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetEnabledScenarios (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetScenariosConfigFromString
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetScenariosConfigFromString (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetScenariosConfigFromBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetScenariosConfigFromBuffer (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GetPrivacyFilterEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPrivacyFilterEnabled (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SetPrivacyFilterEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_SetPrivacyFilterEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPrivacyFilterEnabled (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: GetSystemTracingState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSystemTracingState_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSystemTracingState (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: GetSecurityShieldIconUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSecurityShieldIconUrl (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: EnableSystemTracing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_EnableSystemTracing_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableSystemTracing (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: DisableSystemTracing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_DisableSystemTracing_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableSystemTracing (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_StartTraceSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startTraceSession');
          const result = this.impl.startTraceSession(params.arg_config_pb, params.arg_enable_privacy_filters);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_StartTraceSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartTraceSession FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_CloneTraceSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cloneTraceSession');
          const result = this.impl.cloneTraceSession();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_CloneTraceSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CloneTraceSession FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_StopTraceSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopTraceSession');
          const result = this.impl.stopTraceSession();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_StopTraceSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StopTraceSession FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_GetTrackEventCategories_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTrackEventCategories');
          const result = this.impl.getTrackEventCategories();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_GetTrackEventCategories_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetTrackEventCategories FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_GetBufferUsage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getBufferUsage');
          const result = this.impl.getBufferUsage();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_GetBufferUsage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetBufferUsage FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllTraceReports_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllTraceReports');
          const result = this.impl.getAllTraceReports();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllTraceReports_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAllTraceReports FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteSingleTrace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteSingleTrace');
          const result = this.impl.deleteSingleTrace(params.arg_uuid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteSingleTrace_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteSingleTrace FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteAllTraces_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteAllTraces');
          const result = this.impl.deleteAllTraces();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_DeleteAllTraces_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteAllTraces FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_UserUploadSingleTrace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.userUploadSingleTrace');
          const result = this.impl.userUploadSingleTrace(params.arg_uuid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_UserUploadSingleTrace_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UserUploadSingleTrace FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_DownloadTrace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.downloadTrace');
          const result = this.impl.downloadTrace(params.arg_uuid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_DownloadTrace_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DownloadTrace FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllScenarios_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllScenarios');
          const result = this.impl.getAllScenarios();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_GetAllScenarios_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAllScenarios FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_SetEnabledScenarios_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setEnabledScenarios');
          const result = this.impl.setEnabledScenarios(params.arg_new_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_SetEnabledScenarios_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetEnabledScenarios FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setScenariosConfigFromString');
          const result = this.impl.setScenariosConfigFromString(params.arg_config_string);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetScenariosConfigFromString FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setScenariosConfigFromBuffer');
          const result = this.impl.setScenariosConfigFromBuffer(params.arg_config_pb);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetScenariosConfigFromBuffer FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPrivacyFilterEnabled');
          const result = this.impl.getPrivacyFilterEnabled();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPrivacyFilterEnabled FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_SetPrivacyFilterEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPrivacyFilterEnabled');
          const result = this.impl.setPrivacyFilterEnabled(params.arg_enable);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSystemTracingState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSystemTracingState');
          const result = this.impl.getSystemTracingState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSystemTracingState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSystemTracingState FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSecurityShieldIconUrl');
          const result = this.impl.getSecurityShieldIconUrl();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSecurityShieldIconUrl FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_EnableSystemTracing_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableSystemTracing');
          const result = this.impl.enableSystemTracing();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_EnableSystemTracing_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EnableSystemTracing FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.PageHandler_DisableSystemTracing_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disableSystemTracing');
          const result = this.impl.disableSystemTracing();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.traces_internals.mojom.PageHandler_DisableSystemTracing_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DisableSystemTracing FAILED:', e));
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

mojo.internal.bindings.traces_internals.mojom.PageHandlerReceiver = mojo.internal.bindings.traces_internals.mojom.PageHandlerReceiver;

mojo.internal.bindings.traces_internals.mojom.PageHandlerPtr = mojo.internal.bindings.traces_internals.mojom.PageHandlerRemote;
mojo.internal.bindings.traces_internals.mojom.PageHandlerRequest = mojo.internal.bindings.traces_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.traces_internals.mojom.Page_OnTraceComplete_ParamsSpec, 'traces_internals.mojom.Page_OnTraceComplete_Params', [
      mojo.internal.StructField('arg_trace', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_uuid', 8, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.traces_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.traces_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'traces_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.traces_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.traces_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onTraceComplete(arg_trace, arg_uuid) {
    return this.$.onTraceComplete(arg_trace, arg_uuid);
  }
};

mojo.internal.bindings.traces_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('traces_internals.mojom.Page', [
      { explicit: null },
    ]);
  }

  onTraceComplete(arg_trace, arg_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.traces_internals.mojom.Page_OnTraceComplete_ParamsSpec,
      null,
      [arg_trace, arg_uuid],
      false);
  }

};

mojo.internal.bindings.traces_internals.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.traces_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'traces_internals.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.traces_internals.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('traces_internals.mojom.Page', [
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
        
        // Try Method 0: OnTraceComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.Page_OnTraceComplete_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTraceComplete (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.traces_internals.mojom.Page_OnTraceComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTraceComplete');
          const result = this.impl.onTraceComplete(params.arg_trace, params.arg_uuid);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.traces_internals.mojom.PageReceiver = mojo.internal.bindings.traces_internals.mojom.PageReceiver;

mojo.internal.bindings.traces_internals.mojom.PagePtr = mojo.internal.bindings.traces_internals.mojom.PageRemote;
mojo.internal.bindings.traces_internals.mojom.PageRequest = mojo.internal.bindings.traces_internals.mojom.PagePendingReceiver;

