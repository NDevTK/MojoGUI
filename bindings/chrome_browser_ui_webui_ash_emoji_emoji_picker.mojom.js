// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/ash/emoji/emoji_picker.mojom
 // Module: emoji_picker.mojom

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
 

 mojo.internal.bindings.emoji_picker = mojo.internal.bindings.emoji_picker || {};
mojo.internal.bindings.emoji_picker.mojom = mojo.internal.bindings.emoji_picker.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.tenor = mojo.internal.bindings.tenor || {};

mojo.internal.bindings.emoji_picker.mojom.FeatureSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.emoji_picker.mojom.CategorySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.emoji_picker.mojom.EmojiVariantSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.HistoryItemSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactory = {};
mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactorySpec = { $ : {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactory.$interfaceName = 'emoji_picker.mojom.PageHandlerFactory';
mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler = {};
mojo.internal.bindings.emoji_picker.mojom.PageHandlerSpec = { $ : {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler.$interfaceName = 'emoji_picker.mojom.PageHandler';
mojo.internal.bindings.emoji_picker.mojom.PageHandler_ShowUI_ParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_InsertEmoji_ParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_InsertGif_ParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_IsIncognitoTextField_ParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_IsIncognitoTextField_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeatureList_ParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeatureList_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetCategories_ParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetCategories_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeaturedGifs_ParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeaturedGifs_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_SearchGifs_ParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_SearchGifs_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetGifsByIds_ParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetGifsByIds_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_OnUiFullyLoaded_ParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialCategory_ParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialCategory_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialQuery_ParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialQuery_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_ParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_ParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ParamsSpec = { $: {} };
mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ResponseParamsSpec = { $: {} };

// Enum: Feature
mojo.internal.bindings.emoji_picker.mojom.Feature = {
  EMOJI_PICKER_EXTENSION: 0,
  EMOJI_PICKER_SEARCH_EXTENSION: 1,
  EMOJI_PICKER_GIF_SUPPORT: 2,
  EMOJI_PICKER_VARIANT_GROUPING_SUPPORT: 5,
  EMOJI_PICKER_MOJO_SEARCH: 6,
};

// Enum: Category
mojo.internal.bindings.emoji_picker.mojom.Category = {
  kEmojis: 0,
  kSymbols: 1,
  kEmoticons: 2,
  kGifs: 3,
};

// Struct: EmojiVariant
mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.EmojiVariantSpec, 'emoji_picker.mojom.EmojiVariant', [
      mojo.internal.StructField('arg_base', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_variant', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HistoryItem
mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.HistoryItemSpec, 'emoji_picker.mojom.HistoryItem', [
      mojo.internal.StructField('arg_emoji', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 8, 0, mojo.internal.bindings.mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.emoji_picker.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'emoji_picker.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(arg_handler) {
    return this.$.createPageHandler(arg_handler);
  }
};

mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('emoji_picker.mojom.PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [arg_handler],
      false);
  }

};

mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'emoji_picker.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('emoji_picker.mojom.PageHandlerFactory', [
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
             decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactoryReceiver = mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactoryReceiver;

mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactoryPtr = mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactoryRemote;
mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactoryRequest = mojo.internal.bindings.emoji_picker.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_ShowUI_ParamsSpec, 'emoji_picker.mojom.PageHandler_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_InsertEmoji_ParamsSpec, 'emoji_picker.mojom.PageHandler_InsertEmoji_Params', [
      mojo.internal.StructField('arg_emoji', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_search_length', 8, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_variant', 10, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_InsertGif_ParamsSpec, 'emoji_picker.mojom.PageHandler_InsertGif_Params', [
      mojo.internal.StructField('arg_gif', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_IsIncognitoTextField_ParamsSpec, 'emoji_picker.mojom.PageHandler_IsIncognitoTextField_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_IsIncognitoTextField_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_IsIncognitoTextField_ResponseParams', [
      mojo.internal.StructField('arg_incognito', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeatureList_ParamsSpec, 'emoji_picker.mojom.PageHandler_GetFeatureList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeatureList_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_GetFeatureList_ResponseParams', [
      mojo.internal.StructField('arg_feature_list', 0, 0, mojo.internal.Array(mojo.internal.bindings.emoji_picker.mojom.FeatureSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetCategories_ParamsSpec, 'emoji_picker.mojom.PageHandler_GetCategories_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetCategories_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_GetCategories_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.tenor.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_gif_categories', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeaturedGifs_ParamsSpec, 'emoji_picker.mojom.PageHandler_GetFeaturedGifs_Params', [
      mojo.internal.StructField('arg_pos', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeaturedGifs_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_GetFeaturedGifs_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.tenor.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_featured_gifs', 8, 0, mojo.internal.bindings.tenor.mojom.PaginatedGifResponsesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_SearchGifs_ParamsSpec, 'emoji_picker.mojom.PageHandler_SearchGifs_Params', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_pos', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_SearchGifs_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_SearchGifs_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.tenor.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_search_gifs', 8, 0, mojo.internal.bindings.tenor.mojom.PaginatedGifResponsesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetGifsByIds_ParamsSpec, 'emoji_picker.mojom.PageHandler_GetGifsByIds_Params', [
      mojo.internal.StructField('arg_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetGifsByIds_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_GetGifsByIds_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.tenor.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_selected_gifs', 8, 0, mojo.internal.Array(mojo.internal.bindings.tenor.mojom.GifResponseSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_OnUiFullyLoaded_ParamsSpec, 'emoji_picker.mojom.PageHandler_OnUiFullyLoaded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialCategory_ParamsSpec, 'emoji_picker.mojom.PageHandler_GetInitialCategory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialCategory_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_GetInitialCategory_ResponseParams', [
      mojo.internal.StructField('arg_category', 0, 0, mojo.internal.bindings.emoji_picker.mojom.CategorySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialQuery_ParamsSpec, 'emoji_picker.mojom.PageHandler_GetInitialQuery_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialQuery_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_GetInitialQuery_ResponseParams', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_ParamsSpec, 'emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_Params', [
      mojo.internal.StructField('arg_category', 0, 0, mojo.internal.bindings.emoji_picker.mojom.CategorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_history', 8, 0, mojo.internal.Array(mojo.internal.bindings.emoji_picker.mojom.HistoryItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_ParamsSpec, 'emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_Params', [
      mojo.internal.StructField('arg_preferred_variants', 0, 0, mojo.internal.Array(mojo.internal.bindings.emoji_picker.mojom.EmojiVariantSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ParamsSpec, 'emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_Params', [
      mojo.internal.StructField('arg_category', 0, 0, mojo.internal.bindings.emoji_picker.mojom.CategorySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ResponseParams', [
      mojo.internal.StructField('arg_history', 0, 0, mojo.internal.Array(mojo.internal.bindings.emoji_picker.mojom.HistoryItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.emoji_picker.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.emoji_picker.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'emoji_picker.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.emoji_picker.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.emoji_picker.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  showUI() {
    return this.$.showUI();
  }
  insertEmoji(arg_emoji, arg_is_variant, arg_search_length) {
    return this.$.insertEmoji(arg_emoji, arg_is_variant, arg_search_length);
  }
  insertGif(arg_gif) {
    return this.$.insertGif(arg_gif);
  }
  isIncognitoTextField() {
    return this.$.isIncognitoTextField();
  }
  getFeatureList() {
    return this.$.getFeatureList();
  }
  getCategories() {
    return this.$.getCategories();
  }
  getFeaturedGifs(arg_pos) {
    return this.$.getFeaturedGifs(arg_pos);
  }
  searchGifs(arg_query, arg_pos) {
    return this.$.searchGifs(arg_query, arg_pos);
  }
  getGifsByIds(arg_ids) {
    return this.$.getGifsByIds(arg_ids);
  }
  onUiFullyLoaded() {
    return this.$.onUiFullyLoaded();
  }
  getInitialCategory() {
    return this.$.getInitialCategory();
  }
  getInitialQuery() {
    return this.$.getInitialQuery();
  }
  updateHistoryInPrefs(arg_category, arg_history) {
    return this.$.updateHistoryInPrefs(arg_category, arg_history);
  }
  updatePreferredVariantsInPrefs(arg_preferred_variants) {
    return this.$.updatePreferredVariantsInPrefs(arg_preferred_variants);
  }
  getHistoryFromPrefs(arg_category) {
    return this.$.getHistoryFromPrefs(arg_category);
  }
};

mojo.internal.bindings.emoji_picker.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('emoji_picker.mojom.PageHandler', [
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

  showUI() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  insertEmoji(arg_emoji, arg_is_variant, arg_search_length) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_InsertEmoji_ParamsSpec,
      null,
      [arg_emoji, arg_is_variant, arg_search_length],
      false);
  }

  insertGif(arg_gif) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_InsertGif_ParamsSpec,
      null,
      [arg_gif],
      false);
  }

  isIncognitoTextField() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_IsIncognitoTextField_ParamsSpec,
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_IsIncognitoTextField_ResponseParamsSpec,
      [],
      false);
  }

  getFeatureList() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeatureList_ParamsSpec,
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeatureList_ResponseParamsSpec,
      [],
      false);
  }

  getCategories() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetCategories_ParamsSpec,
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetCategories_ResponseParamsSpec,
      [],
      false);
  }

  getFeaturedGifs(arg_pos) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeaturedGifs_ParamsSpec,
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeaturedGifs_ResponseParamsSpec,
      [arg_pos],
      false);
  }

  searchGifs(arg_query, arg_pos) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_SearchGifs_ParamsSpec,
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_SearchGifs_ResponseParamsSpec,
      [arg_query, arg_pos],
      false);
  }

  getGifsByIds(arg_ids) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetGifsByIds_ParamsSpec,
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetGifsByIds_ResponseParamsSpec,
      [arg_ids],
      false);
  }

  onUiFullyLoaded() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_OnUiFullyLoaded_ParamsSpec,
      null,
      [],
      false);
  }

  getInitialCategory() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialCategory_ParamsSpec,
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialCategory_ResponseParamsSpec,
      [],
      false);
  }

  getInitialQuery() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialQuery_ParamsSpec,
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialQuery_ResponseParamsSpec,
      [],
      false);
  }

  updateHistoryInPrefs(arg_category, arg_history) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_ParamsSpec,
      null,
      [arg_category, arg_history],
      false);
  }

  updatePreferredVariantsInPrefs(arg_preferred_variants) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_ParamsSpec,
      null,
      [arg_preferred_variants],
      false);
  }

  getHistoryFromPrefs(arg_category) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ParamsSpec,
      mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ResponseParamsSpec,
      [arg_category],
      false);
  }

};

mojo.internal.bindings.emoji_picker.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.emoji_picker.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'emoji_picker.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.emoji_picker.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('emoji_picker.mojom.PageHandler', [
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
        
        // Try Method 0: ShowUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_ShowUI_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowUI (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: InsertEmoji
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_InsertEmoji_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InsertEmoji (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: InsertGif
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_InsertGif_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InsertGif (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: IsIncognitoTextField
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_IsIncognitoTextField_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsIncognitoTextField (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetFeatureList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeatureList_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFeatureList (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetCategories
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetCategories_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCategories (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetFeaturedGifs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeaturedGifs_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFeaturedGifs (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SearchGifs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_SearchGifs_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SearchGifs (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetGifsByIds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetGifsByIds_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetGifsByIds (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnUiFullyLoaded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_OnUiFullyLoaded_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUiFullyLoaded (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetInitialCategory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialCategory_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInitialCategory (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetInitialQuery
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialQuery_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInitialQuery (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: UpdateHistoryInPrefs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateHistoryInPrefs (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: UpdatePreferredVariantsInPrefs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdatePreferredVariantsInPrefs (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GetHistoryFromPrefs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHistoryFromPrefs (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_ShowUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showUI');
          const result = this.impl.showUI();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_InsertEmoji_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.insertEmoji');
          const result = this.impl.insertEmoji(params.arg_emoji, params.arg_is_variant, params.arg_search_length);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_InsertGif_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.insertGif');
          const result = this.impl.insertGif(params.arg_gif);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_IsIncognitoTextField_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isIncognitoTextField');
          const result = this.impl.isIncognitoTextField();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.emoji_picker.mojom.PageHandler_IsIncognitoTextField_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsIncognitoTextField FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeatureList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFeatureList');
          const result = this.impl.getFeatureList();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeatureList_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFeatureList FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetCategories_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCategories');
          const result = this.impl.getCategories();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetCategories_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCategories FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeaturedGifs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFeaturedGifs');
          const result = this.impl.getFeaturedGifs(params.arg_pos);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetFeaturedGifs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFeaturedGifs FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_SearchGifs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.searchGifs');
          const result = this.impl.searchGifs(params.arg_query, params.arg_pos);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.emoji_picker.mojom.PageHandler_SearchGifs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SearchGifs FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetGifsByIds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getGifsByIds');
          const result = this.impl.getGifsByIds(params.arg_ids);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetGifsByIds_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetGifsByIds FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_OnUiFullyLoaded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUiFullyLoaded');
          const result = this.impl.onUiFullyLoaded();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialCategory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getInitialCategory');
          const result = this.impl.getInitialCategory();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialCategory_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetInitialCategory FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialQuery_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getInitialQuery');
          const result = this.impl.getInitialQuery();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetInitialQuery_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetInitialQuery FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateHistoryInPrefs');
          const result = this.impl.updateHistoryInPrefs(params.arg_category, params.arg_history);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updatePreferredVariantsInPrefs');
          const result = this.impl.updatePreferredVariantsInPrefs(params.arg_preferred_variants);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHistoryFromPrefs');
          const result = this.impl.getHistoryFromPrefs(params.arg_category);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetHistoryFromPrefs FAILED:', e));
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

mojo.internal.bindings.emoji_picker.mojom.PageHandlerReceiver = mojo.internal.bindings.emoji_picker.mojom.PageHandlerReceiver;

mojo.internal.bindings.emoji_picker.mojom.PageHandlerPtr = mojo.internal.bindings.emoji_picker.mojom.PageHandlerRemote;
mojo.internal.bindings.emoji_picker.mojom.PageHandlerRequest = mojo.internal.bindings.emoji_picker.mojom.PageHandlerPendingReceiver;

