// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/os_feedback_ui/mojom/os_feedback_ui.mojom
 // Module: ash.os_feedback_ui.mojom

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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.os_feedback_ui = mojo.internal.bindings.ash.os_feedback_ui || {};
mojo.internal.bindings.ash.os_feedback_ui.mojom = mojo.internal.bindings.ash.os_feedback_ui.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.os_feedback_ui.mojom.SendReportStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackAppPostSubmitActionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackAppPreSubmitActionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackAppExitPathSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackAppHelpContentOutcomeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.SearchRequestSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.SearchResponseSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackContextSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.AttachedFileSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.ReportSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProvider = {};
mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProvider.$interfaceName = 'ash.os_feedback_ui.mojom.HelpContentProvider';
mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider = {};
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider.$interfaceName = 'ash.os_feedback_ui.mojom.FeedbackServiceProvider';
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenDiagnosticsApp_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenExploreApp_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenMetricsDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenSystemInfoDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenAutofillDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPostSubmitAction_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPreSubmitAction_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordExitPath_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentOutcome_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentSearchResultCount_ParamsSpec = { $: {} };

// Enum: HelpContentType
mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentType = {
  kUnknown: 0,
  kArticle: 1,
  kForum: 2,
};

// Enum: SendReportStatus
mojo.internal.bindings.ash.os_feedback_ui.mojom.SendReportStatus = {
  kUnknown: 0,
  kSuccess: 1,
  kDelayed: 2,
};

// Enum: FeedbackAppPostSubmitAction
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackAppPostSubmitAction = {
  kSendNewReport: 0,
  kClickDoneButton: 1,
  kOpenExploreApp: 2,
  kOpenDiagnosticsApp: 3,
  kOpenChromebookCommunity: 4,
  kCloseFeedbackApp: 5,
};

// Enum: FeedbackAppPreSubmitAction
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackAppPreSubmitAction = {
  kViewedHelpContent: 0,
  kViewedScreenshot: 1,
  kViewedImage: 2,
  kViewedSystemAndAppInfo: 3,
  kViewedAutofillMetadata: 4,
  kViewedMetrics: 5,
};

// Enum: FeedbackAppExitPath
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackAppExitPath = {
  kQuitSearchPageHelpContentClicked: 0,
  kQuitSearchPageNoHelpContentClicked: 1,
  kQuitNoHelpContentDisplayed: 2,
  kQuitShareDataPageHelpContentClicked: 3,
  kQuitShareDataPageNoHelpContentClicked: 4,
  kSuccessHelpContentClicked: 5,
  kSuccessNoHelpContentClicked: 6,
};

// Enum: FeedbackAppHelpContentOutcome
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackAppHelpContentOutcome = {
  kContinueHelpContentClicked: 0,
  kContinueNoHelpContentClicked: 1,
  kContinueNoHelpContentDisplayed: 2,
  kQuitHelpContentClicked: 3,
  kQuitNoHelpContentClicked: 4,
  kQuitNoHelpContentDisplayed: 5,
};

// Struct: HelpContent
mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentSpec, 'ash.os_feedback_ui.mojom.HelpContent', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_content_type', 16, 0, mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SearchRequest
mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.SearchRequestSpec, 'ash.os_feedback_ui.mojom.SearchRequest', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_results', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SearchResponse
mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.SearchResponseSpec, 'ash.os_feedback_ui.mojom.SearchResponse', [
      mojo.internal.StructField('arg_results', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_total_results', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FeedbackContext
mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackContextSpec, 'ash.os_feedback_ui.mojom.FeedbackContext', [
      mojo.internal.StructField('arg_email', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_autofill_metadata', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_page_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_extra_diagnostics', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_category_tag', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_trace_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_wifi_debug_logs_allowed', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_linked_cross_device_phone', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_internal_account', 44, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_settings_search_do_not_record_metrics', 44, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_from_autofill', 44, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: AttachedFile
mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.AttachedFileSpec, 'ash.os_feedback_ui.mojom.AttachedFile', [
      mojo.internal.StructField('arg_file_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_name', 8, 0, mojo.internal.bindings.mojo_base.mojom.SafeBaseNameSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Report
mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.ReportSpec, 'ash.os_feedback_ui.mojom.Report', [
      mojo.internal.StructField('arg_feedback_context', 0, 0, mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackContextSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_description', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_attached_file', 16, 0, mojo.internal.bindings.ash.os_feedback_ui.mojom.AttachedFileSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_include_system_logs_and_histograms', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_include_screenshot', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_contact_user_consent_granted', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_send_bluetooth_logs', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_send_wifi_debug_logs', 24, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_include_autofill_metadata', 24, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: HelpContentProvider
mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ParamsSpec, 'ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.ash.os_feedback_ui.mojom.SearchRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ResponseParamsSpec, 'ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.os_feedback_ui.mojom.SearchResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProviderRemote = class {
  static get $interfaceName() {
    return 'ash.os_feedback_ui.mojom.HelpContentProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getHelpContents(arg_request) {
    return this.$.getHelpContents(arg_request);
  }
};

mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HelpContentProvider', [
      { explicit: null },
    ]);
  }

  getHelpContents(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ParamsSpec,
      mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ResponseParamsSpec,
      [arg_request],
      false);
  }

};

mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.os_feedback_ui.mojom.HelpContentProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HelpContentProvider', [
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
        
        // Try Method 0: GetHelpContents
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHelpContents (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHelpContents');
          const result = this.impl.getHelpContents(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetHelpContents FAILED:', e));
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

mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProviderReceiver = mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProviderReceiver;

mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProviderPtr = mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProviderRemote;
mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProviderRequest = mojo.internal.bindings.ash.os_feedback_ui.mojom.HelpContentProviderPendingReceiver;


// Interface: FeedbackServiceProvider
mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ResponseParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ResponseParams', [
      mojo.internal.StructField('arg_feedback_context', 0, 0, mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ResponseParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ResponseParams', [
      mojo.internal.StructField('arg_png_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_Params', [
      mojo.internal.StructField('arg_report', 0, 0, mojo.internal.bindings.ash.os_feedback_ui.mojom.ReportSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ResponseParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.ash.os_feedback_ui.mojom.SendReportStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenDiagnosticsApp_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenDiagnosticsApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenExploreApp_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenExploreApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenMetricsDialog_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenMetricsDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenSystemInfoDialog_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenSystemInfoDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenAutofillDialog_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenAutofillDialog_Params', [
      mojo.internal.StructField('arg_autofill_metadata', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPostSubmitAction_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPostSubmitAction_Params', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackAppPostSubmitActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPreSubmitAction_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPreSubmitAction_Params', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackAppPreSubmitActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordExitPath_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordExitPath_Params', [
      mojo.internal.StructField('arg_exit_path', 0, 0, mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackAppExitPathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentOutcome_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentOutcome_Params', [
      mojo.internal.StructField('arg_outcome', 0, 0, mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackAppHelpContentOutcomeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentSearchResultCount_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentSearchResultCount_Params', [
      mojo.internal.StructField('arg_count', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProviderRemote = class {
  static get $interfaceName() {
    return 'ash.os_feedback_ui.mojom.FeedbackServiceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getFeedbackContext() {
    return this.$.getFeedbackContext();
  }
  getScreenshotPng() {
    return this.$.getScreenshotPng();
  }
  sendReport(arg_report) {
    return this.$.sendReport(arg_report);
  }
  openDiagnosticsApp() {
    return this.$.openDiagnosticsApp();
  }
  openExploreApp() {
    return this.$.openExploreApp();
  }
  openMetricsDialog() {
    return this.$.openMetricsDialog();
  }
  openSystemInfoDialog() {
    return this.$.openSystemInfoDialog();
  }
  openAutofillDialog(arg_autofill_metadata) {
    return this.$.openAutofillDialog(arg_autofill_metadata);
  }
  recordPostSubmitAction(arg_action) {
    return this.$.recordPostSubmitAction(arg_action);
  }
  recordPreSubmitAction(arg_action) {
    return this.$.recordPreSubmitAction(arg_action);
  }
  recordExitPath(arg_exit_path) {
    return this.$.recordExitPath(arg_exit_path);
  }
  recordHelpContentOutcome(arg_outcome) {
    return this.$.recordHelpContentOutcome(arg_outcome);
  }
  recordHelpContentSearchResultCount(arg_count) {
    return this.$.recordHelpContentSearchResultCount(arg_count);
  }
};

mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FeedbackServiceProvider', [
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

  getFeedbackContext() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ParamsSpec,
      mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ResponseParamsSpec,
      [],
      false);
  }

  getScreenshotPng() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ParamsSpec,
      mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ResponseParamsSpec,
      [],
      false);
  }

  sendReport(arg_report) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ParamsSpec,
      mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ResponseParamsSpec,
      [arg_report],
      false);
  }

  openDiagnosticsApp() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenDiagnosticsApp_ParamsSpec,
      null,
      [],
      false);
  }

  openExploreApp() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenExploreApp_ParamsSpec,
      null,
      [],
      false);
  }

  openMetricsDialog() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenMetricsDialog_ParamsSpec,
      null,
      [],
      false);
  }

  openSystemInfoDialog() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenSystemInfoDialog_ParamsSpec,
      null,
      [],
      false);
  }

  openAutofillDialog(arg_autofill_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenAutofillDialog_ParamsSpec,
      null,
      [arg_autofill_metadata],
      false);
  }

  recordPostSubmitAction(arg_action) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPostSubmitAction_ParamsSpec,
      null,
      [arg_action],
      false);
  }

  recordPreSubmitAction(arg_action) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPreSubmitAction_ParamsSpec,
      null,
      [arg_action],
      false);
  }

  recordExitPath(arg_exit_path) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordExitPath_ParamsSpec,
      null,
      [arg_exit_path],
      false);
  }

  recordHelpContentOutcome(arg_outcome) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentOutcome_ParamsSpec,
      null,
      [arg_outcome],
      false);
  }

  recordHelpContentSearchResultCount(arg_count) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentSearchResultCount_ParamsSpec,
      null,
      [arg_count],
      false);
  }

};

mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.os_feedback_ui.mojom.FeedbackServiceProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FeedbackServiceProvider', [
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
        
        // Try Method 0: GetFeedbackContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFeedbackContext (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetScreenshotPng
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetScreenshotPng (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SendReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendReport (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OpenDiagnosticsApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenDiagnosticsApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDiagnosticsApp (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenExploreApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenExploreApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenExploreApp (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OpenMetricsDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenMetricsDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenMetricsDialog (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OpenSystemInfoDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenSystemInfoDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenSystemInfoDialog (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OpenAutofillDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenAutofillDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenAutofillDialog (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RecordPostSubmitAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPostSubmitAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordPostSubmitAction (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RecordPreSubmitAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPreSubmitAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordPreSubmitAction (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RecordExitPath
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordExitPath_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordExitPath (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: RecordHelpContentOutcome
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentOutcome_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordHelpContentOutcome (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: RecordHelpContentSearchResultCount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentSearchResultCount_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordHelpContentSearchResultCount (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFeedbackContext');
          const result = this.impl.getFeedbackContext();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFeedbackContext FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getScreenshotPng');
          const result = this.impl.getScreenshotPng();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetScreenshotPng FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendReport');
          const result = this.impl.sendReport(params.arg_report);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SendReport FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenDiagnosticsApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openDiagnosticsApp');
          const result = this.impl.openDiagnosticsApp();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenExploreApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openExploreApp');
          const result = this.impl.openExploreApp();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenMetricsDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openMetricsDialog');
          const result = this.impl.openMetricsDialog();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenSystemInfoDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openSystemInfoDialog');
          const result = this.impl.openSystemInfoDialog();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenAutofillDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openAutofillDialog');
          const result = this.impl.openAutofillDialog(params.arg_autofill_metadata);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPostSubmitAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordPostSubmitAction');
          const result = this.impl.recordPostSubmitAction(params.arg_action);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPreSubmitAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordPreSubmitAction');
          const result = this.impl.recordPreSubmitAction(params.arg_action);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordExitPath_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordExitPath');
          const result = this.impl.recordExitPath(params.arg_exit_path);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentOutcome_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordHelpContentOutcome');
          const result = this.impl.recordHelpContentOutcome(params.arg_outcome);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentSearchResultCount_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordHelpContentSearchResultCount');
          const result = this.impl.recordHelpContentSearchResultCount(params.arg_count);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProviderReceiver = mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProviderReceiver;

mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProviderPtr = mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProviderRemote;
mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProviderRequest = mojo.internal.bindings.ash.os_feedback_ui.mojom.FeedbackServiceProviderPendingReceiver;

