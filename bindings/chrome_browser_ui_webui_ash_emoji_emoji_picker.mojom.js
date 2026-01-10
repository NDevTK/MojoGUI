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
var emoji_picker = emoji_picker || {};
emoji_picker.mojom = emoji_picker.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};
var tenor = tenor || {};

emoji_picker.mojom.FeatureSpec = { $: mojo.internal.Enum() };
emoji_picker.mojom.CategorySpec = { $: mojo.internal.Enum() };
emoji_picker.mojom.EmojiVariantSpec = { $: {} };
emoji_picker.mojom.HistoryItemSpec = { $: {} };
emoji_picker.mojom.PageHandlerFactory = {};
emoji_picker.mojom.PageHandlerFactory.$interfaceName = 'emoji_picker.mojom.PageHandlerFactory';
emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler = {};
emoji_picker.mojom.PageHandler.$interfaceName = 'emoji_picker.mojom.PageHandler';
emoji_picker.mojom.PageHandler_ShowUI_ParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_InsertEmoji_ParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_InsertGif_ParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_IsIncognitoTextField_ParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_IsIncognitoTextField_ResponseParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_GetFeatureList_ParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_GetFeatureList_ResponseParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_GetCategories_ParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_GetCategories_ResponseParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_GetFeaturedGifs_ParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_GetFeaturedGifs_ResponseParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_SearchGifs_ParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_SearchGifs_ResponseParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_GetGifsByIds_ParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_GetGifsByIds_ResponseParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_OnUiFullyLoaded_ParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_GetInitialCategory_ParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_GetInitialCategory_ResponseParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_GetInitialQuery_ParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_GetInitialQuery_ResponseParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_ParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_ParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ParamsSpec = { $: {} };
emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ResponseParamsSpec = { $: {} };

// Enum: Feature
emoji_picker.mojom.Feature = {
  EMOJI_PICKER_EXTENSION: 0,
  EMOJI_PICKER_SEARCH_EXTENSION: 1,
  EMOJI_PICKER_GIF_SUPPORT: 2,
  EMOJI_PICKER_VARIANT_GROUPING_SUPPORT: 5,
  EMOJI_PICKER_MOJO_SEARCH: 6,
};

// Enum: Category
emoji_picker.mojom.Category = {
  kEmojis: 0,
  kSymbols: 1,
  kEmoticons: 2,
  kGifs: 3,
};

// Struct: EmojiVariant
mojo.internal.Struct(
    emoji_picker.mojom.EmojiVariantSpec, 'emoji_picker.mojom.EmojiVariant', [
      mojo.internal.StructField('base', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('variant', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HistoryItem
mojo.internal.Struct(
    emoji_picker.mojom.HistoryItemSpec, 'emoji_picker.mojom.HistoryItem', [
      mojo.internal.StructField('emoji', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(emoji_picker.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

emoji_picker.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

emoji_picker.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'emoji_picker.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      emoji_picker.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new emoji_picker.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

emoji_picker.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler],
      false);
  }

};

emoji_picker.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new emoji_picker.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'emoji_picker.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

emoji_picker.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
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
             decoder.decodeStructInline(emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
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
          const params = decoder.decodeStructInline(emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

emoji_picker.mojom.PageHandlerFactoryReceiver = emoji_picker.mojom.PageHandlerFactoryReceiver;

emoji_picker.mojom.PageHandlerFactoryPtr = emoji_picker.mojom.PageHandlerFactoryRemote;
emoji_picker.mojom.PageHandlerFactoryRequest = emoji_picker.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_ShowUI_ParamsSpec, 'emoji_picker.mojom.PageHandler_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_InsertEmoji_ParamsSpec, 'emoji_picker.mojom.PageHandler_InsertEmoji_Params', [
      mojo.internal.StructField('emoji', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('search_length', 8, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('is_variant', 10, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_InsertGif_ParamsSpec, 'emoji_picker.mojom.PageHandler_InsertGif_Params', [
      mojo.internal.StructField('gif', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_IsIncognitoTextField_ParamsSpec, 'emoji_picker.mojom.PageHandler_IsIncognitoTextField_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_IsIncognitoTextField_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_IsIncognitoTextField_ResponseParams', [
      mojo.internal.StructField('incognito', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_GetFeatureList_ParamsSpec, 'emoji_picker.mojom.PageHandler_GetFeatureList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_GetFeatureList_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_GetFeatureList_ResponseParams', [
      mojo.internal.StructField('feature_list', 0, 0, mojo.internal.Array(emoji_picker.mojom.FeatureSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_GetCategories_ParamsSpec, 'emoji_picker.mojom.PageHandler_GetCategories_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_GetCategories_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_GetCategories_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, tenor.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gif_categories', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_GetFeaturedGifs_ParamsSpec, 'emoji_picker.mojom.PageHandler_GetFeaturedGifs_Params', [
      mojo.internal.StructField('pos', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_GetFeaturedGifs_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_GetFeaturedGifs_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, tenor.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('featured_gifs', 8, 0, tenor.mojom.PaginatedGifResponsesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_SearchGifs_ParamsSpec, 'emoji_picker.mojom.PageHandler_SearchGifs_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pos', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_SearchGifs_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_SearchGifs_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, tenor.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('search_gifs', 8, 0, tenor.mojom.PaginatedGifResponsesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_GetGifsByIds_ParamsSpec, 'emoji_picker.mojom.PageHandler_GetGifsByIds_Params', [
      mojo.internal.StructField('ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_GetGifsByIds_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_GetGifsByIds_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, tenor.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selected_gifs', 8, 0, mojo.internal.Array(tenor.mojom.GifResponseSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_OnUiFullyLoaded_ParamsSpec, 'emoji_picker.mojom.PageHandler_OnUiFullyLoaded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_GetInitialCategory_ParamsSpec, 'emoji_picker.mojom.PageHandler_GetInitialCategory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_GetInitialCategory_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_GetInitialCategory_ResponseParams', [
      mojo.internal.StructField('category', 0, 0, emoji_picker.mojom.CategorySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_GetInitialQuery_ParamsSpec, 'emoji_picker.mojom.PageHandler_GetInitialQuery_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_GetInitialQuery_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_GetInitialQuery_ResponseParams', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_ParamsSpec, 'emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_Params', [
      mojo.internal.StructField('category', 0, 0, emoji_picker.mojom.CategorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('history', 8, 0, mojo.internal.Array(emoji_picker.mojom.HistoryItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_ParamsSpec, 'emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_Params', [
      mojo.internal.StructField('preferred_variants', 0, 0, mojo.internal.Array(emoji_picker.mojom.EmojiVariantSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ParamsSpec, 'emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_Params', [
      mojo.internal.StructField('category', 0, 0, emoji_picker.mojom.CategorySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ResponseParamsSpec, 'emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ResponseParams', [
      mojo.internal.StructField('history', 0, 0, mojo.internal.Array(emoji_picker.mojom.HistoryItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

emoji_picker.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

emoji_picker.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'emoji_picker.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      emoji_picker.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new emoji_picker.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

emoji_picker.mojom.PageHandlerRemoteCallHandler = class {
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
      emoji_picker.mojom.PageHandler_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  insertEmoji(emoji, is_variant, search_length) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      emoji_picker.mojom.PageHandler_InsertEmoji_ParamsSpec,
      null,
      [emoji, is_variant, search_length],
      false);
  }

  insertGif(gif) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      emoji_picker.mojom.PageHandler_InsertGif_ParamsSpec,
      null,
      [gif],
      false);
  }

  isIncognitoTextField() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      emoji_picker.mojom.PageHandler_IsIncognitoTextField_ParamsSpec,
      emoji_picker.mojom.PageHandler_IsIncognitoTextField_ResponseParamsSpec,
      [],
      false);
  }

  getFeatureList() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      emoji_picker.mojom.PageHandler_GetFeatureList_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetFeatureList_ResponseParamsSpec,
      [],
      false);
  }

  getCategories() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      emoji_picker.mojom.PageHandler_GetCategories_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetCategories_ResponseParamsSpec,
      [],
      false);
  }

  getFeaturedGifs(pos) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      emoji_picker.mojom.PageHandler_GetFeaturedGifs_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetFeaturedGifs_ResponseParamsSpec,
      [pos],
      false);
  }

  searchGifs(query, pos) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      emoji_picker.mojom.PageHandler_SearchGifs_ParamsSpec,
      emoji_picker.mojom.PageHandler_SearchGifs_ResponseParamsSpec,
      [query, pos],
      false);
  }

  getGifsByIds(ids) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      emoji_picker.mojom.PageHandler_GetGifsByIds_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetGifsByIds_ResponseParamsSpec,
      [ids],
      false);
  }

  onUiFullyLoaded() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      emoji_picker.mojom.PageHandler_OnUiFullyLoaded_ParamsSpec,
      null,
      [],
      false);
  }

  getInitialCategory() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      emoji_picker.mojom.PageHandler_GetInitialCategory_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetInitialCategory_ResponseParamsSpec,
      [],
      false);
  }

  getInitialQuery() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      emoji_picker.mojom.PageHandler_GetInitialQuery_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetInitialQuery_ResponseParamsSpec,
      [],
      false);
  }

  updateHistoryInPrefs(category, history) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_ParamsSpec,
      null,
      [category, history],
      false);
  }

  updatePreferredVariantsInPrefs(preferred_variants) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_ParamsSpec,
      null,
      [preferred_variants],
      false);
  }

  getHistoryFromPrefs(category) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ResponseParamsSpec,
      [category],
      false);
  }

};

emoji_picker.mojom.PageHandler.getRemote = function() {
  let remote = new emoji_picker.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'emoji_picker.mojom.PageHandler',
    'context');
  return remote.$;
};

emoji_picker.mojom.PageHandlerReceiver = class {
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
             decoder.decodeStructInline(emoji_picker.mojom.PageHandler_ShowUI_ParamsSpec);
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
             decoder.decodeStructInline(emoji_picker.mojom.PageHandler_InsertEmoji_ParamsSpec);
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
             decoder.decodeStructInline(emoji_picker.mojom.PageHandler_InsertGif_ParamsSpec);
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
             decoder.decodeStructInline(emoji_picker.mojom.PageHandler_IsIncognitoTextField_ParamsSpec);
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
             decoder.decodeStructInline(emoji_picker.mojom.PageHandler_GetFeatureList_ParamsSpec);
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
             decoder.decodeStructInline(emoji_picker.mojom.PageHandler_GetCategories_ParamsSpec);
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
             decoder.decodeStructInline(emoji_picker.mojom.PageHandler_GetFeaturedGifs_ParamsSpec);
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
             decoder.decodeStructInline(emoji_picker.mojom.PageHandler_SearchGifs_ParamsSpec);
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
             decoder.decodeStructInline(emoji_picker.mojom.PageHandler_GetGifsByIds_ParamsSpec);
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
             decoder.decodeStructInline(emoji_picker.mojom.PageHandler_OnUiFullyLoaded_ParamsSpec);
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
             decoder.decodeStructInline(emoji_picker.mojom.PageHandler_GetInitialCategory_ParamsSpec);
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
             decoder.decodeStructInline(emoji_picker.mojom.PageHandler_GetInitialQuery_ParamsSpec);
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
             decoder.decodeStructInline(emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_ParamsSpec);
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
             decoder.decodeStructInline(emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_ParamsSpec);
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
             decoder.decodeStructInline(emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ParamsSpec);
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
          const params = decoder.decodeStructInline(emoji_picker.mojom.PageHandler_ShowUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showUI');
          const result = this.impl.showUI();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(emoji_picker.mojom.PageHandler_InsertEmoji_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.insertEmoji');
          const result = this.impl.insertEmoji(params.emoji, params.is_variant, params.search_length);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(emoji_picker.mojom.PageHandler_InsertGif_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.insertGif');
          const result = this.impl.insertGif(params.gif);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(emoji_picker.mojom.PageHandler_IsIncognitoTextField_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isIncognitoTextField');
          const result = this.impl.isIncognitoTextField();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, emoji_picker.mojom.PageHandler_IsIncognitoTextField_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(emoji_picker.mojom.PageHandler_GetFeatureList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFeatureList');
          const result = this.impl.getFeatureList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, emoji_picker.mojom.PageHandler_GetFeatureList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(emoji_picker.mojom.PageHandler_GetCategories_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCategories');
          const result = this.impl.getCategories();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, emoji_picker.mojom.PageHandler_GetCategories_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(emoji_picker.mojom.PageHandler_GetFeaturedGifs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFeaturedGifs');
          const result = this.impl.getFeaturedGifs(params.pos);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, emoji_picker.mojom.PageHandler_GetFeaturedGifs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(emoji_picker.mojom.PageHandler_SearchGifs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.searchGifs');
          const result = this.impl.searchGifs(params.query, params.pos);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, emoji_picker.mojom.PageHandler_SearchGifs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(emoji_picker.mojom.PageHandler_GetGifsByIds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getGifsByIds');
          const result = this.impl.getGifsByIds(params.ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, emoji_picker.mojom.PageHandler_GetGifsByIds_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(emoji_picker.mojom.PageHandler_OnUiFullyLoaded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUiFullyLoaded');
          const result = this.impl.onUiFullyLoaded();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(emoji_picker.mojom.PageHandler_GetInitialCategory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getInitialCategory');
          const result = this.impl.getInitialCategory();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, emoji_picker.mojom.PageHandler_GetInitialCategory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(emoji_picker.mojom.PageHandler_GetInitialQuery_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getInitialQuery');
          const result = this.impl.getInitialQuery();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, emoji_picker.mojom.PageHandler_GetInitialQuery_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateHistoryInPrefs');
          const result = this.impl.updateHistoryInPrefs(params.category, params.history);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updatePreferredVariantsInPrefs');
          const result = this.impl.updatePreferredVariantsInPrefs(params.preferred_variants);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHistoryFromPrefs');
          const result = this.impl.getHistoryFromPrefs(params.category);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ResponseParamsSpec);
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

emoji_picker.mojom.PageHandlerReceiver = emoji_picker.mojom.PageHandlerReceiver;

emoji_picker.mojom.PageHandlerPtr = emoji_picker.mojom.PageHandlerRemote;
emoji_picker.mojom.PageHandlerRequest = emoji_picker.mojom.PageHandlerPendingReceiver;

