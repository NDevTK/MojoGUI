// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/emoji/emoji_picker.mojom
// Module: emoji_picker.mojom

'use strict';

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
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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
  }

  showUI() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      emoji_picker.mojom.PageHandler_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  insertEmoji(emoji, is_variant, search_length) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      emoji_picker.mojom.PageHandler_InsertEmoji_ParamsSpec,
      null,
      [emoji, is_variant, search_length],
      false);
  }

  insertGif(gif) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      emoji_picker.mojom.PageHandler_InsertGif_ParamsSpec,
      null,
      [gif],
      false);
  }

  isIncognitoTextField() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      emoji_picker.mojom.PageHandler_IsIncognitoTextField_ParamsSpec,
      emoji_picker.mojom.PageHandler_IsIncognitoTextField_ResponseParamsSpec,
      [],
      false);
  }

  getFeatureList() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      emoji_picker.mojom.PageHandler_GetFeatureList_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetFeatureList_ResponseParamsSpec,
      [],
      false);
  }

  getCategories() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      emoji_picker.mojom.PageHandler_GetCategories_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetCategories_ResponseParamsSpec,
      [],
      false);
  }

  getFeaturedGifs(pos) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      emoji_picker.mojom.PageHandler_GetFeaturedGifs_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetFeaturedGifs_ResponseParamsSpec,
      [pos],
      false);
  }

  searchGifs(query, pos) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      emoji_picker.mojom.PageHandler_SearchGifs_ParamsSpec,
      emoji_picker.mojom.PageHandler_SearchGifs_ResponseParamsSpec,
      [query, pos],
      false);
  }

  getGifsByIds(ids) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      emoji_picker.mojom.PageHandler_GetGifsByIds_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetGifsByIds_ResponseParamsSpec,
      [ids],
      false);
  }

  onUiFullyLoaded() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      emoji_picker.mojom.PageHandler_OnUiFullyLoaded_ParamsSpec,
      null,
      [],
      false);
  }

  getInitialCategory() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      emoji_picker.mojom.PageHandler_GetInitialCategory_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetInitialCategory_ResponseParamsSpec,
      [],
      false);
  }

  getInitialQuery() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      emoji_picker.mojom.PageHandler_GetInitialQuery_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetInitialQuery_ResponseParamsSpec,
      [],
      false);
  }

  updateHistoryInPrefs(category, history) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_ParamsSpec,
      null,
      [category, history],
      false);
  }

  updatePreferredVariantsInPrefs(preferred_variants) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_ParamsSpec,
      null,
      [preferred_variants],
      false);
  }

  getHistoryFromPrefs(category) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ShowUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(emoji_picker.mojom.PageHandler_ShowUI_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(emoji_picker.mojom.PageHandler_InsertEmoji_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(emoji_picker.mojom.PageHandler_InsertGif_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(emoji_picker.mojom.PageHandler_IsIncognitoTextField_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(emoji_picker.mojom.PageHandler_GetFeatureList_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(emoji_picker.mojom.PageHandler_GetCategories_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(emoji_picker.mojom.PageHandler_GetFeaturedGifs_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(emoji_picker.mojom.PageHandler_SearchGifs_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(emoji_picker.mojom.PageHandler_GetGifsByIds_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(emoji_picker.mojom.PageHandler_OnUiFullyLoaded_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(emoji_picker.mojom.PageHandler_GetInitialCategory_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(emoji_picker.mojom.PageHandler_GetInitialQuery_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(emoji_picker.mojom.PageHandler_ShowUI_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showUI');
          const result = this.impl.showUI();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(emoji_picker.mojom.PageHandler_InsertEmoji_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.insertEmoji');
          const result = this.impl.insertEmoji(params.emoji, params.is_variant, params.search_length);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(emoji_picker.mojom.PageHandler_InsertGif_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.insertGif');
          const result = this.impl.insertGif(params.gif);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(emoji_picker.mojom.PageHandler_IsIncognitoTextField_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(emoji_picker.mojom.PageHandler_GetFeatureList_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(emoji_picker.mojom.PageHandler_GetCategories_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(emoji_picker.mojom.PageHandler_GetFeaturedGifs_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(emoji_picker.mojom.PageHandler_SearchGifs_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(emoji_picker.mojom.PageHandler_GetGifsByIds_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(emoji_picker.mojom.PageHandler_OnUiFullyLoaded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onUiFullyLoaded');
          const result = this.impl.onUiFullyLoaded();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(emoji_picker.mojom.PageHandler_GetInitialCategory_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(emoji_picker.mojom.PageHandler_GetInitialQuery_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateHistoryInPrefs');
          const result = this.impl.updateHistoryInPrefs(params.category, params.history);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updatePreferredVariantsInPrefs');
          const result = this.impl.updatePreferredVariantsInPrefs(params.preferred_variants);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ParamsSpec.$, message.header.headerSize);
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

