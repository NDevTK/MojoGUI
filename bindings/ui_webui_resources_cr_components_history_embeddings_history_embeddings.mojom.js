// Auto-generated MojoJS binding
 // Source: chromium_src/ui/webui/resources/cr_components/history_embeddings/history_embeddings.mojom
 // Module: history_embeddings.mojom

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
 

 mojo.internal.bindings.history_embeddings = mojo.internal.bindings.history_embeddings || {};
mojo.internal.bindings.history_embeddings.mojom = mojo.internal.bindings.history_embeddings.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.history_embeddings.mojom.AnswerStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.history_embeddings.mojom.UserFeedbackSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.history_embeddings.mojom.AnswerDataSpec = { $: {} };
mojo.internal.bindings.history_embeddings.mojom.SearchResultItemSpec = { $: {} };
mojo.internal.bindings.history_embeddings.mojom.SearchQuerySpec = { $: {} };
mojo.internal.bindings.history_embeddings.mojom.SearchResultSpec = { $: {} };
mojo.internal.bindings.history_embeddings.mojom.PageHandler = {};
mojo.internal.bindings.history_embeddings.mojom.PageHandler.$interfaceName = 'history_embeddings.mojom.PageHandler';
mojo.internal.bindings.history_embeddings.mojom.PageHandler_SetPage_ParamsSpec = { $: {} };
mojo.internal.bindings.history_embeddings.mojom.PageHandler_Search_ParamsSpec = { $: {} };
mojo.internal.bindings.history_embeddings.mojom.PageHandler_SendQualityLog_ParamsSpec = { $: {} };
mojo.internal.bindings.history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_ParamsSpec = { $: {} };
mojo.internal.bindings.history_embeddings.mojom.PageHandler_SetUserFeedback_ParamsSpec = { $: {} };
mojo.internal.bindings.history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_ParamsSpec = { $: {} };
mojo.internal.bindings.history_embeddings.mojom.PageHandler_OpenSettingsPage_ParamsSpec = { $: {} };
mojo.internal.bindings.history_embeddings.mojom.Page = {};
mojo.internal.bindings.history_embeddings.mojom.Page.$interfaceName = 'history_embeddings.mojom.Page';
mojo.internal.bindings.history_embeddings.mojom.Page_SearchResultChanged_ParamsSpec = { $: {} };

// Enum: AnswerStatus
mojo.internal.bindings.history_embeddings.mojom.AnswerStatus = {
  kUnspecified: 0,
  kLoading: 1,
  kSuccess: 2,
  kUnanswerable: 3,
  kModelUnavailable: 4,
  kExecutionFailure: 5,
  kExecutionCanceled: 6,
  kFiltered: 7,
};

// Enum: UserFeedback
mojo.internal.bindings.history_embeddings.mojom.UserFeedback = {
  kUserFeedbackUnspecified: 0,
  kUserFeedbackNegative: 1,
  kUserFeedbackPositive: 2,
};

// Struct: AnswerData
mojo.internal.Struct(
    mojo.internal.bindings.history_embeddings.mojom.AnswerDataSpec, 'history_embeddings.mojom.AnswerData', [
      mojo.internal.StructField('arg_answer_text_directives', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SearchResultItem
mojo.internal.Struct(
    mojo.internal.bindings.history_embeddings.mojom.SearchResultItemSpec, 'history_embeddings.mojom.SearchResultItem', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url_for_display', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_relative_time', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_short_date_time', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_url_visit_timestamp', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_source_passage', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_answer_data', 56, 0, mojo.internal.bindings.mojo.internal.bindings.history_embeddings.mojom.AnswerDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_url_known_to_sync', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: SearchQuery
mojo.internal.Struct(
    mojo.internal.bindings.history_embeddings.mojom.SearchQuerySpec, 'history_embeddings.mojom.SearchQuery', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_time_range_start', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SearchResult
mojo.internal.Struct(
    mojo.internal.bindings.history_embeddings.mojom.SearchResultSpec, 'history_embeddings.mojom.SearchResult', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_answer_status', 8, 0, mojo.internal.bindings.mojo.internal.bindings.history_embeddings.mojom.AnswerStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_answer', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_items', 24, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.history_embeddings.mojom.SearchResultItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.history_embeddings.mojom.PageHandler_SetPage_ParamsSpec, 'history_embeddings.mojom.PageHandler_SetPage_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.history_embeddings.mojom.PageSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_embeddings.mojom.PageHandler_Search_ParamsSpec, 'history_embeddings.mojom.PageHandler_Search_Params', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.bindings.mojo.internal.bindings.history_embeddings.mojom.SearchQuerySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_embeddings.mojom.PageHandler_SendQualityLog_ParamsSpec, 'history_embeddings.mojom.PageHandler_SendQualityLog_Params', [
      mojo.internal.StructField('arg_selected_indices', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_num_entered_chars', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_ParamsSpec, 'history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_Params', [
      mojo.internal.StructField('arg_queryWordCount', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_nonEmptyResults', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_userClickedResult', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_answerShown', 4, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_answerCitationClicked', 4, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_otherHistoryResultClicked', 4, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_embeddings.mojom.PageHandler_SetUserFeedback_ParamsSpec, 'history_embeddings.mojom.PageHandler_SetUserFeedback_Params', [
      mojo.internal.StructField('arg_feedback', 0, 0, mojo.internal.bindings.mojo.internal.bindings.history_embeddings.mojom.UserFeedbackSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_ParamsSpec, 'history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_embeddings.mojom.PageHandler_OpenSettingsPage_ParamsSpec, 'history_embeddings.mojom.PageHandler_OpenSettingsPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.history_embeddings.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.history_embeddings.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'history_embeddings.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.history_embeddings.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.history_embeddings.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setPage(arg_page) {
    return this.$.setPage(arg_page);
  }
  search(arg_query) {
    return this.$.search(arg_query);
  }
  sendQualityLog(arg_selected_indices, arg_num_entered_chars) {
    return this.$.sendQualityLog(arg_selected_indices, arg_num_entered_chars);
  }
  recordSearchResultsMetrics(arg_nonEmptyResults, arg_userClickedResult, arg_answerShown, arg_answerCitationClicked, arg_otherHistoryResultClicked, arg_queryWordCount) {
    return this.$.recordSearchResultsMetrics(arg_nonEmptyResults, arg_userClickedResult, arg_answerShown, arg_answerCitationClicked, arg_otherHistoryResultClicked, arg_queryWordCount);
  }
  setUserFeedback(arg_feedback) {
    return this.$.setUserFeedback(arg_feedback);
  }
  maybeShowFeaturePromo() {
    return this.$.maybeShowFeaturePromo();
  }
  openSettingsPage() {
    return this.$.openSettingsPage();
  }
};

mojo.internal.bindings.history_embeddings.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setPage(arg_page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.history_embeddings.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [arg_page],
      false);
  }

  search(arg_query) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.history_embeddings.mojom.PageHandler_Search_ParamsSpec,
      null,
      [arg_query],
      false);
  }

  sendQualityLog(arg_selected_indices, arg_num_entered_chars) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.history_embeddings.mojom.PageHandler_SendQualityLog_ParamsSpec,
      null,
      [arg_selected_indices, arg_num_entered_chars],
      false);
  }

  recordSearchResultsMetrics(arg_nonEmptyResults, arg_userClickedResult, arg_answerShown, arg_answerCitationClicked, arg_otherHistoryResultClicked, arg_queryWordCount) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_ParamsSpec,
      null,
      [arg_nonEmptyResults, arg_userClickedResult, arg_answerShown, arg_answerCitationClicked, arg_otherHistoryResultClicked, arg_queryWordCount],
      false);
  }

  setUserFeedback(arg_feedback) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.history_embeddings.mojom.PageHandler_SetUserFeedback_ParamsSpec,
      null,
      [arg_feedback],
      false);
  }

  maybeShowFeaturePromo() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_ParamsSpec,
      null,
      [],
      false);
  }

  openSettingsPage() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.history_embeddings.mojom.PageHandler_OpenSettingsPage_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.history_embeddings.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.history_embeddings.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_embeddings.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.history_embeddings.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
        
        // Try Method 0: SetPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_embeddings.mojom.PageHandler_SetPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Search
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_embeddings.mojom.PageHandler_Search_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Search (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SendQualityLog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_embeddings.mojom.PageHandler_SendQualityLog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendQualityLog (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RecordSearchResultsMetrics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordSearchResultsMetrics (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetUserFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_embeddings.mojom.PageHandler_SetUserFeedback_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUserFeedback (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: MaybeShowFeaturePromo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeShowFeaturePromo (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OpenSettingsPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_embeddings.mojom.PageHandler_OpenSettingsPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenSettingsPage (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_embeddings.mojom.PageHandler_SetPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPage');
          const result = this.impl.setPage(params.arg_page);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_embeddings.mojom.PageHandler_Search_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.search');
          const result = this.impl.search(params.arg_query);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_embeddings.mojom.PageHandler_SendQualityLog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendQualityLog');
          const result = this.impl.sendQualityLog(params.arg_selected_indices, params.arg_num_entered_chars);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordSearchResultsMetrics');
          const result = this.impl.recordSearchResultsMetrics(params.arg_nonEmptyResults, params.arg_userClickedResult, params.arg_answerShown, params.arg_answerCitationClicked, params.arg_otherHistoryResultClicked, params.arg_queryWordCount);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_embeddings.mojom.PageHandler_SetUserFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUserFeedback');
          const result = this.impl.setUserFeedback(params.arg_feedback);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maybeShowFeaturePromo');
          const result = this.impl.maybeShowFeaturePromo();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_embeddings.mojom.PageHandler_OpenSettingsPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openSettingsPage');
          const result = this.impl.openSettingsPage();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.history_embeddings.mojom.PageHandlerReceiver = mojo.internal.bindings.history_embeddings.mojom.PageHandlerReceiver;

mojo.internal.bindings.history_embeddings.mojom.PageHandlerPtr = mojo.internal.bindings.history_embeddings.mojom.PageHandlerRemote;
mojo.internal.bindings.history_embeddings.mojom.PageHandlerRequest = mojo.internal.bindings.history_embeddings.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.history_embeddings.mojom.Page_SearchResultChanged_ParamsSpec, 'history_embeddings.mojom.Page_SearchResultChanged_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.history_embeddings.mojom.SearchResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.history_embeddings.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.history_embeddings.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'history_embeddings.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.history_embeddings.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.history_embeddings.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  searchResultChanged(arg_result) {
    return this.$.searchResultChanged(arg_result);
  }
};

mojo.internal.bindings.history_embeddings.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
    ]);
  }

  searchResultChanged(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.history_embeddings.mojom.Page_SearchResultChanged_ParamsSpec,
      null,
      [arg_result],
      false);
  }

};

mojo.internal.bindings.history_embeddings.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.history_embeddings.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_embeddings.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.history_embeddings.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        
        // Try Method 0: SearchResultChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_embeddings.mojom.Page_SearchResultChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SearchResultChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_embeddings.mojom.Page_SearchResultChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.searchResultChanged');
          const result = this.impl.searchResultChanged(params.arg_result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.history_embeddings.mojom.PageReceiver = mojo.internal.bindings.history_embeddings.mojom.PageReceiver;

mojo.internal.bindings.history_embeddings.mojom.PagePtr = mojo.internal.bindings.history_embeddings.mojom.PageRemote;
mojo.internal.bindings.history_embeddings.mojom.PageRequest = mojo.internal.bindings.history_embeddings.mojom.PagePendingReceiver;

