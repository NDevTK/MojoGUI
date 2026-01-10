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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = emoji_picker.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = emoji_picker.mojom.PageHandler_ShowUI_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showUI();
          break;
        }
        case 1: {
          const params = emoji_picker.mojom.PageHandler_InsertEmoji_ParamsSpec.$.decode(message.payload);
          const result = this.impl.insertEmoji(params.emoji, params.is_variant, params.search_length);
          break;
        }
        case 2: {
          const params = emoji_picker.mojom.PageHandler_InsertGif_ParamsSpec.$.decode(message.payload);
          const result = this.impl.insertGif(params.gif);
          break;
        }
        case 3: {
          const params = emoji_picker.mojom.PageHandler_IsIncognitoTextField_ParamsSpec.$.decode(message.payload);
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
          const params = emoji_picker.mojom.PageHandler_GetFeatureList_ParamsSpec.$.decode(message.payload);
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
          const params = emoji_picker.mojom.PageHandler_GetCategories_ParamsSpec.$.decode(message.payload);
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
          const params = emoji_picker.mojom.PageHandler_GetFeaturedGifs_ParamsSpec.$.decode(message.payload);
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
          const params = emoji_picker.mojom.PageHandler_SearchGifs_ParamsSpec.$.decode(message.payload);
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
          const params = emoji_picker.mojom.PageHandler_GetGifsByIds_ParamsSpec.$.decode(message.payload);
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
          const params = emoji_picker.mojom.PageHandler_OnUiFullyLoaded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onUiFullyLoaded();
          break;
        }
        case 10: {
          const params = emoji_picker.mojom.PageHandler_GetInitialCategory_ParamsSpec.$.decode(message.payload);
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
          const params = emoji_picker.mojom.PageHandler_GetInitialQuery_ParamsSpec.$.decode(message.payload);
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
          const params = emoji_picker.mojom.PageHandler_UpdateHistoryInPrefs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateHistoryInPrefs(params.category, params.history);
          break;
        }
        case 13: {
          const params = emoji_picker.mojom.PageHandler_UpdatePreferredVariantsInPrefs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updatePreferredVariantsInPrefs(params.preferred_variants);
          break;
        }
        case 14: {
          const params = emoji_picker.mojom.PageHandler_GetHistoryFromPrefs_ParamsSpec.$.decode(message.payload);
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
    }});
  }
};

emoji_picker.mojom.PageHandlerReceiver = emoji_picker.mojom.PageHandlerReceiver;

emoji_picker.mojom.PageHandlerPtr = emoji_picker.mojom.PageHandlerRemote;
emoji_picker.mojom.PageHandlerRequest = emoji_picker.mojom.PageHandlerPendingReceiver;

