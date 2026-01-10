// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/emoji/emoji_picker.mojom
// Module: emoji_picker.mojom

'use strict';

// Module namespace
var emoji_picker = emoji_picker || {};
emoji_picker.mojom = emoji_picker.mojom || {};
var url = url || {};


// Enum: Feature
emoji_picker.mojom.Feature = {
  EMOJI_PICKER_EXTENSION: 0,
  EMOJI_PICKER_SEARCH_EXTENSION: 1,
  EMOJI_PICKER_GIF_SUPPORT: 2,
  EMOJI_PICKER_VARIANT_GROUPING_SUPPORT: 3,
  EMOJI_PICKER_MOJO_SEARCH: 4,
};
emoji_picker.mojom.FeatureSpec = { $: mojo.internal.Enum() };

// Enum: Category
emoji_picker.mojom.Category = {
  kEmojis: 0,
  kSymbols: 1,
  kEmoticons: 2,
  kGifs: 3,
};
emoji_picker.mojom.CategorySpec = { $: mojo.internal.Enum() };

// Struct: EmojiVariant
emoji_picker.mojom.EmojiVariantSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.EmojiVariant',
      packedSize: 24,
      fields: [
        { name: 'base', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'variant', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: HistoryItem
emoji_picker.mojom.HistoryItemSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.HistoryItem',
      packedSize: 24,
      fields: [
        { name: 'emoji', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.JSTimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: PageHandlerFactory
emoji_picker.mojom.PageHandlerFactory = {};

emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(emoji_picker.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [handler]);
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

// ParamsSpec for CreatePageHandler
emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(emoji_picker.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
emoji_picker.mojom.PageHandlerFactoryPtr = emoji_picker.mojom.PageHandlerFactoryRemote;
emoji_picker.mojom.PageHandlerFactoryRequest = emoji_picker.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
emoji_picker.mojom.PageHandler = {};

emoji_picker.mojom.PageHandler_ShowUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler_ShowUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

emoji_picker.mojom.PageHandler_InsertEmoji_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler_InsertEmoji_Params',
      packedSize: 24,
      fields: [
        { name: 'emoji', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_variant', packedOffset: 10, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'search_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

emoji_picker.mojom.PageHandler_InsertGif_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler_InsertGif_Params',
      packedSize: 16,
      fields: [
        { name: 'gif', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

emoji_picker.mojom.PageHandler_IsIncognitoTextField_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler_IsIncognitoTextField_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

emoji_picker.mojom.PageHandler_GetFeatureList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler_GetFeatureList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

emoji_picker.mojom.PageHandler_GetCategories_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler_GetCategories_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

emoji_picker.mojom.PageHandler_GetFeaturedGifs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler_GetFeaturedGifs_Params',
      packedSize: 16,
      fields: [
        { name: 'pos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

emoji_picker.mojom.PageHandler_SearchGifs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler_SearchGifs_Params',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pos', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

emoji_picker.mojom.PageHandler_GetGifsByIds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler_GetGifsByIds_Params',
      packedSize: 16,
      fields: [
        { name: 'ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

emoji_picker.mojom.PageHandler_OnUiFullyLoaded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler_OnUiFullyLoaded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

emoji_picker.mojom.PageHandler_GetInitialCategory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler_GetInitialCategory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

emoji_picker.mojom.PageHandler_GetInitialQuery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler_GetInitialQuery_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_Params',
      packedSize: 24,
      fields: [
        { name: 'category', packedOffset: 8, packedBitOffset: 0, type: emoji_picker.mojom.CategorySpec, nullable: false, minVersion: 0 },
        { name: 'history', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(emoji_picker.mojom.HistoryItemSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_Params',
      packedSize: 16,
      fields: [
        { name: 'preferred_variants', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(emoji_picker.mojom.EmojiVariantSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_Params',
      packedSize: 16,
      fields: [
        { name: 'category', packedOffset: 0, packedBitOffset: 0, type: emoji_picker.mojom.CategorySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      []);
  }

  insertEmoji(emoji, is_variant, search_length) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      emoji_picker.mojom.PageHandler_InsertEmoji_ParamsSpec,
      null,
      [emoji, is_variant, search_length]);
  }

  insertGif(gif) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      emoji_picker.mojom.PageHandler_InsertGif_ParamsSpec,
      null,
      [gif]);
  }

  isIncognitoTextField() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      emoji_picker.mojom.PageHandler_IsIncognitoTextField_ParamsSpec,
      emoji_picker.mojom.PageHandler_IsIncognitoTextField_ResponseParamsSpec,
      []);
  }

  getFeatureList() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      emoji_picker.mojom.PageHandler_GetFeatureList_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetFeatureList_ResponseParamsSpec,
      []);
  }

  getCategories() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      emoji_picker.mojom.PageHandler_GetCategories_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetCategories_ResponseParamsSpec,
      []);
  }

  getFeaturedGifs(pos) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      emoji_picker.mojom.PageHandler_GetFeaturedGifs_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetFeaturedGifs_ResponseParamsSpec,
      [pos]);
  }

  searchGifs(query, pos) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      emoji_picker.mojom.PageHandler_SearchGifs_ParamsSpec,
      emoji_picker.mojom.PageHandler_SearchGifs_ResponseParamsSpec,
      [query, pos]);
  }

  getGifsByIds(ids) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      emoji_picker.mojom.PageHandler_GetGifsByIds_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetGifsByIds_ResponseParamsSpec,
      [ids]);
  }

  onUiFullyLoaded() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      emoji_picker.mojom.PageHandler_OnUiFullyLoaded_ParamsSpec,
      null,
      []);
  }

  getInitialCategory() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      emoji_picker.mojom.PageHandler_GetInitialCategory_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetInitialCategory_ResponseParamsSpec,
      []);
  }

  getInitialQuery() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      emoji_picker.mojom.PageHandler_GetInitialQuery_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetInitialQuery_ResponseParamsSpec,
      []);
  }

  updateHistoryInPrefs(category, history) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_ParamsSpec,
      null,
      [category, history]);
  }

  updatePreferredVariantsInPrefs(preferred_variants) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_ParamsSpec,
      null,
      [preferred_variants]);
  }

  getHistoryFromPrefs(category) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ParamsSpec,
      emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ResponseParamsSpec,
      [category]);
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

// ParamsSpec for ShowUI
emoji_picker.mojom.PageHandler_ShowUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.ShowUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for InsertEmoji
emoji_picker.mojom.PageHandler_InsertEmoji_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.InsertEmoji_Params',
      packedSize: 24,
      fields: [
        { name: 'emoji', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_variant', packedOffset: 10, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'search_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for InsertGif
emoji_picker.mojom.PageHandler_InsertGif_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.InsertGif_Params',
      packedSize: 16,
      fields: [
        { name: 'gif', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsIncognitoTextField
emoji_picker.mojom.PageHandler_IsIncognitoTextField_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.IsIncognitoTextField_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

emoji_picker.mojom.PageHandler_IsIncognitoTextField_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.IsIncognitoTextField_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'incognito', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetFeatureList
emoji_picker.mojom.PageHandler_GetFeatureList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.GetFeatureList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

emoji_picker.mojom.PageHandler_GetFeatureList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.GetFeatureList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'feature_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(emoji_picker.mojom.FeatureSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCategories
emoji_picker.mojom.PageHandler_GetCategories_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.GetCategories_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

emoji_picker.mojom.PageHandler_GetCategories_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.GetCategories_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: tenor.mojom.StatusSpec, nullable: false, minVersion: 0 },
        { name: 'gif_categories', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetFeaturedGifs
emoji_picker.mojom.PageHandler_GetFeaturedGifs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.GetFeaturedGifs_Params',
      packedSize: 16,
      fields: [
        { name: 'pos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

emoji_picker.mojom.PageHandler_GetFeaturedGifs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.GetFeaturedGifs_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: tenor.mojom.StatusSpec, nullable: false, minVersion: 0 },
        { name: 'featured_gifs', packedOffset: 0, packedBitOffset: 0, type: tenor.mojom.PaginatedGifResponsesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SearchGifs
emoji_picker.mojom.PageHandler_SearchGifs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.SearchGifs_Params',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pos', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

emoji_picker.mojom.PageHandler_SearchGifs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.SearchGifs_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: tenor.mojom.StatusSpec, nullable: false, minVersion: 0 },
        { name: 'search_gifs', packedOffset: 0, packedBitOffset: 0, type: tenor.mojom.PaginatedGifResponsesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetGifsByIds
emoji_picker.mojom.PageHandler_GetGifsByIds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.GetGifsByIds_Params',
      packedSize: 16,
      fields: [
        { name: 'ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

emoji_picker.mojom.PageHandler_GetGifsByIds_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.GetGifsByIds_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: tenor.mojom.StatusSpec, nullable: false, minVersion: 0 },
        { name: 'selected_gifs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tenor.mojom.GifResponseSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnUiFullyLoaded
emoji_picker.mojom.PageHandler_OnUiFullyLoaded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.OnUiFullyLoaded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetInitialCategory
emoji_picker.mojom.PageHandler_GetInitialCategory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.GetInitialCategory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

emoji_picker.mojom.PageHandler_GetInitialCategory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.GetInitialCategory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'category', packedOffset: 0, packedBitOffset: 0, type: emoji_picker.mojom.CategorySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetInitialQuery
emoji_picker.mojom.PageHandler_GetInitialQuery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.GetInitialQuery_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

emoji_picker.mojom.PageHandler_GetInitialQuery_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.GetInitialQuery_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateHistoryInPrefs
emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.UpdateHistoryInPrefs_Params',
      packedSize: 24,
      fields: [
        { name: 'category', packedOffset: 8, packedBitOffset: 0, type: emoji_picker.mojom.CategorySpec, nullable: false, minVersion: 0 },
        { name: 'history', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(emoji_picker.mojom.HistoryItemSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdatePreferredVariantsInPrefs
emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.UpdatePreferredVariantsInPrefs_Params',
      packedSize: 16,
      fields: [
        { name: 'preferred_variants', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(emoji_picker.mojom.EmojiVariantSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetHistoryFromPrefs
emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.GetHistoryFromPrefs_Params',
      packedSize: 16,
      fields: [
        { name: 'category', packedOffset: 0, packedBitOffset: 0, type: emoji_picker.mojom.CategorySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_picker.mojom.PageHandler.GetHistoryFromPrefs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'history', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(emoji_picker.mojom.HistoryItemSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
emoji_picker.mojom.PageHandlerPtr = emoji_picker.mojom.PageHandlerRemote;
emoji_picker.mojom.PageHandlerRequest = emoji_picker.mojom.PageHandlerPendingReceiver;

