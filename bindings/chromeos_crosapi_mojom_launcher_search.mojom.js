// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/crosapi/mojom/launcher_search.mojom
 // Module: crosapi.mojom

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
 

 mojo.internal.bindings.crosapi = mojo.internal.bindings.crosapi || {};
mojo.internal.bindings.crosapi.mojom = mojo.internal.bindings.crosapi.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.crosapi.mojom.SearchStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.SearchResultTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.OptionalBoolSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.OmniboxTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.MetricsTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.AnswerTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.TextTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.PageTransitionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.SearchResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.SearchResultsPublisher = {};
mojo.internal.bindings.crosapi.mojom.SearchResultsPublisher.$interfaceName = 'crosapi.mojom.SearchResultsPublisher';
mojo.internal.bindings.crosapi.mojom.SearchResultsPublisher_OnSearchResultsReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.SearchController = {};
mojo.internal.bindings.crosapi.mojom.SearchController.$interfaceName = 'crosapi.mojom.SearchController';
mojo.internal.bindings.crosapi.mojom.SearchController_Search_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.SearchController_Search_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.SearchResultConsumer = {};
mojo.internal.bindings.crosapi.mojom.SearchResultConsumer.$interfaceName = 'crosapi.mojom.SearchResultConsumer';
mojo.internal.bindings.crosapi.mojom.SearchResultConsumer_OnFaviconReceived_ParamsSpec = { $: {} };

// Enum: SearchStatus
mojo.internal.bindings.crosapi.mojom.SearchStatus = {
  kError: 0,
  kDone: 1,
  kInProgress: 2,
  kCancelled: 3,
  MinVersion: 3,
};

// Enum: SearchResultType
mojo.internal.bindings.crosapi.mojom.SearchResultType = {
  kUnknown: 0,
  kOmniboxResult: 1,
};

// Enum: OptionalBool
mojo.internal.bindings.crosapi.mojom.OptionalBool = {
  kUnset: 0,
  kFalse: 1,
  kTrue: 2,
};

// Enum: OmniboxType
mojo.internal.bindings.crosapi.mojom.OmniboxType = {
  kUnset: 0,
  kRichImageDeprecated: 1,
  kFaviconDeprecated: 2,
  kCalculatorDeprecated: 7,
  kBookmark: 3,
  kDomain: 4,
  kSearch: 5,
  kHistory: 6,
  MinVersion: 6,
};

// Enum: MetricsType
mojo.internal.bindings.crosapi.mojom.MetricsType = {
  kUnset: 0,
  kWhatYouTyped: 1,
  kRecentlyVisitedWebsite: 2,
  kHistoryTitle: 3,
  kSearchWhatYouTyped: 4,
  kSearchHistory: 5,
  kSearchSuggest: 6,
  kSearchSuggestPersonalized: 7,
  kBookmark: 8,
  kSearchSuggestEntity: 9,
  kNavSuggest: 10,
  kCalculator: 11,
};

// Enum: AnswerType
mojo.internal.bindings.crosapi.mojom.AnswerType = {
  kUnset: 0,
  kDefaultAnswer: 1,
  kWeather: 2,
  kCurrency: 3,
  kDictionary: 4,
  kFinance: 5,
  kSunrise: 6,
  kTranslation: 7,
  kWhenIs: 8,
  MinVersion: 8,
};

// Enum: TextType
mojo.internal.bindings.crosapi.mojom.TextType = {
  kUnset: 0,
  kPositive: 1,
  kNegative: 2,
  MinVersion: 2,
};

// Enum: PageTransition
mojo.internal.bindings.crosapi.mojom.PageTransition = {
  kUnset: 0,
  kTyped: 1,
  kGenerated: 2,
};

// Struct: SearchResult
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.SearchResultSpec, 'crosapi.mojom.SearchResult', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.crosapi.mojom.SearchResultTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_relevance', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_destination_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_omnibox_search', 24, 0, mojo.internal.bindings.crosapi.mojom.OptionalBoolSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_answer', 32, 0, mojo.internal.bindings.crosapi.mojom.OptionalBoolSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_omnibox_type', 40, 0, mojo.internal.bindings.crosapi.mojom.OmniboxTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_answer_type', 48, 0, mojo.internal.bindings.crosapi.mojom.AnswerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_url', 56, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_favicon', 64, 0, mojo.internal.bindings.gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_contents', 72, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_additional_contents', 80, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_description', 88, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_additional_description', 96, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_additional_description_type', 104, 0, mojo.internal.bindings.crosapi.mojom.TextTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_kUnset', 112, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 120, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 128, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_stripped_destination_url', 136, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 2, undefined),
      mojo.internal.StructField('arg_page_transition', 144, 0, mojo.internal.bindings.crosapi.mojom.PageTransitionSpec.$, null, false, 2, undefined),
      mojo.internal.StructField('arg_contents_type', 152, 0, mojo.internal.bindings.crosapi.mojom.TextTypeSpec.$, null, false, 2, undefined),
      mojo.internal.StructField('arg_additional_contents_type', 160, 0, mojo.internal.bindings.crosapi.mojom.TextTypeSpec.$, null, false, 2, undefined),
      mojo.internal.StructField('arg_description_type', 168, 0, mojo.internal.bindings.crosapi.mojom.TextTypeSpec.$, null, false, 2, undefined),
      mojo.internal.StructField('arg_description_a11y_label', 176, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 3, undefined),
      mojo.internal.StructField('arg_metrics_type', 184, 0, mojo.internal.bindings.crosapi.mojom.MetricsTypeSpec.$, null, false, 5, undefined),
      mojo.internal.StructField('arg_receiver', 192, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.crosapi.mojom.SearchResultConsumerSpec), null, true, 5, undefined),
    ],
    [[0, 144], [2, 184], [3, 192], [5, 208]]);

// Interface: SearchResultsPublisher
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.SearchResultsPublisher_OnSearchResultsReceived_ParamsSpec, 'crosapi.mojom.SearchResultsPublisher_OnSearchResultsReceived_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.crosapi.mojom.SearchStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.Array(mojo.internal.bindings.crosapi.mojom.SearchResultSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.crosapi.mojom.SearchResultsPublisherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.SearchResultsPublisherRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.SearchResultsPublisher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.SearchResultsPublisherPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.SearchResultsPublisherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSearchResultsReceived(arg_status, arg_result) {
    return this.$.onSearchResultsReceived(arg_status, arg_result);
  }
};

mojo.internal.bindings.crosapi.mojom.SearchResultsPublisherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SearchResultsPublisher', [
      { explicit: 0 },
    ]);
  }

  onSearchResultsReceived(arg_status, arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.SearchResultsPublisher_OnSearchResultsReceived_ParamsSpec,
      null,
      [arg_status, arg_result],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.SearchResultsPublisher.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.SearchResultsPublisherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.SearchResultsPublisher',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.SearchResultsPublisherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SearchResultsPublisher', [
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
        
        // Try Method 0: OnSearchResultsReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.SearchResultsPublisher_OnSearchResultsReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSearchResultsReceived (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.SearchResultsPublisher_OnSearchResultsReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSearchResultsReceived');
          const result = this.impl.onSearchResultsReceived(params.arg_status, params.arg_result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.crosapi.mojom.SearchResultsPublisherReceiver = mojo.internal.bindings.crosapi.mojom.SearchResultsPublisherReceiver;

mojo.internal.bindings.crosapi.mojom.SearchResultsPublisherPtr = mojo.internal.bindings.crosapi.mojom.SearchResultsPublisherRemote;
mojo.internal.bindings.crosapi.mojom.SearchResultsPublisherRequest = mojo.internal.bindings.crosapi.mojom.SearchResultsPublisherPendingReceiver;


// Interface: SearchController
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.SearchController_Search_ParamsSpec, 'crosapi.mojom.SearchController_Search_Params', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.SearchController_Search_ResponseParamsSpec, 'crosapi.mojom.SearchController_Search_ResponseParams', [
      mojo.internal.StructField('arg_publisher', 0, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.crosapi.mojom.SearchResultsPublisherSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.crosapi.mojom.SearchControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.SearchControllerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.SearchController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.SearchControllerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.SearchControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  search(arg_query) {
    return this.$.search(arg_query);
  }
};

mojo.internal.bindings.crosapi.mojom.SearchControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SearchController', [
      { explicit: 0 },
    ]);
  }

  search(arg_query) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.SearchController_Search_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.SearchController_Search_ResponseParamsSpec,
      [arg_query],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.SearchController.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.SearchControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.SearchController',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.SearchControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SearchController', [
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
        
        // Try Method 0: Search
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.SearchController_Search_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Search (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.SearchController_Search_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.search');
          const result = this.impl.search(params.arg_query);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.SearchController_Search_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Search FAILED:', e));
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

mojo.internal.bindings.crosapi.mojom.SearchControllerReceiver = mojo.internal.bindings.crosapi.mojom.SearchControllerReceiver;

mojo.internal.bindings.crosapi.mojom.SearchControllerPtr = mojo.internal.bindings.crosapi.mojom.SearchControllerRemote;
mojo.internal.bindings.crosapi.mojom.SearchControllerRequest = mojo.internal.bindings.crosapi.mojom.SearchControllerPendingReceiver;


// Interface: SearchResultConsumer
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.SearchResultConsumer_OnFaviconReceived_ParamsSpec, 'crosapi.mojom.SearchResultConsumer_OnFaviconReceived_Params', [
      mojo.internal.StructField('arg_favicon', 0, 0, mojo.internal.bindings.gfx.mojom.ImageSkiaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.crosapi.mojom.SearchResultConsumerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.SearchResultConsumerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.SearchResultConsumer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.SearchResultConsumerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.SearchResultConsumerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFaviconReceived(arg_favicon) {
    return this.$.onFaviconReceived(arg_favicon);
  }
};

mojo.internal.bindings.crosapi.mojom.SearchResultConsumerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SearchResultConsumer', [
      { explicit: 0 },
    ]);
  }

  onFaviconReceived(arg_favicon) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.SearchResultConsumer_OnFaviconReceived_ParamsSpec,
      null,
      [arg_favicon],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.SearchResultConsumer.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.SearchResultConsumerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.SearchResultConsumer',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.SearchResultConsumerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SearchResultConsumer', [
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
        
        // Try Method 0: OnFaviconReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.SearchResultConsumer_OnFaviconReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFaviconReceived (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.SearchResultConsumer_OnFaviconReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFaviconReceived');
          const result = this.impl.onFaviconReceived(params.arg_favicon);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.crosapi.mojom.SearchResultConsumerReceiver = mojo.internal.bindings.crosapi.mojom.SearchResultConsumerReceiver;

mojo.internal.bindings.crosapi.mojom.SearchResultConsumerPtr = mojo.internal.bindings.crosapi.mojom.SearchResultConsumerRemote;
mojo.internal.bindings.crosapi.mojom.SearchResultConsumerRequest = mojo.internal.bindings.crosapi.mojom.SearchResultConsumerPendingReceiver;

