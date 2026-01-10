// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/customize_chrome/customize_chrome.mojom
// Module: side_panel.mojom

'use strict';

// Module namespace
var side_panel = side_panel || {};
side_panel.mojom = side_panel.mojom || {};
var ntp_tiles = ntp_tiles || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var url = url || {};

side_panel.mojom.CustomizeChromeSectionSpec = { $: mojo.internal.Enum() };
side_panel.mojom.ChromeWebStoreCollectionSpec = { $: mojo.internal.Enum() };
side_panel.mojom.ChromeWebStoreCategorySpec = { $: mojo.internal.Enum() };
side_panel.mojom.NewTabPageTypeSpec = { $: mojo.internal.Enum() };
side_panel.mojom.BackgroundImageSpec = { $: {} };
side_panel.mojom.ThirdPartyThemeInfoSpec = { $: {} };
side_panel.mojom.ThemeSpec = { $: {} };
side_panel.mojom.BackgroundCollectionSpec = { $: {} };
side_panel.mojom.CollectionImageSpec = { $: {} };
side_panel.mojom.ModuleSettingsSpec = { $: {} };
side_panel.mojom.ManagementNoticeStateSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandlerFactory = {};
side_panel.mojom.CustomizeChromePageHandlerFactory.$interfaceName = 'side_panel.mojom.CustomizeChromePageHandlerFactory';
side_panel.mojom.CustomizeChromePageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler = {};
side_panel.mojom.CustomizeChromePageHandler.$interfaceName = 'side_panel.mojom.CustomizeChromePageHandler';
side_panel.mojom.CustomizeChromePageHandler_SetMostVisitedSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateMostVisitedSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ResponseParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ResponseParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ResponseParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateModulesSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateTheme_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateThemeEditable_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_SetDefaultColor_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_SetFollowDeviceTheme_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_RemoveBackgroundImage_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ResponseParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_SetBackgroundImage_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_SetDailyRefreshCollectionId_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStore_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreHomePage_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_OpenThirdPartyThemePage_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_OpenNtpManagedByPage_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_SetModulesVisible_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_SetModuleDisabled_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_SetToolChipsVisible_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateToolChipsSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateScrollToSection_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateAttachedTabState_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateNtpManagedByName_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_SetFooterVisible_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateFooterSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage = {};
side_panel.mojom.CustomizeChromePage.$interfaceName = 'side_panel.mojom.CustomizeChromePage';
side_panel.mojom.CustomizeChromePage_SetModulesSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage_SetMostVisitedSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage_SetToolsSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage_SetFooterSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage_SetTheme_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage_SetThemeEditable_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage_ScrollToSection_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage_AttachedTabStateUpdated_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage_NtpManagedByNameUpdated_ParamsSpec = { $: {} };

// Enum: CustomizeChromeSection
side_panel.mojom.CustomizeChromeSection = {
  kUnspecified: 0,
  kAppearance: 1,
  kShortcuts: 2,
  kModules: 3,
  kWallpaperSearch: 4,
  kToolbar: 5,
  kFooter: 6,
};

// Enum: ChromeWebStoreCollection
side_panel.mojom.ChromeWebStoreCollection = {
  kWritingEssentials: 0,
};

// Enum: ChromeWebStoreCategory
side_panel.mojom.ChromeWebStoreCategory = {
  kWorkflowPlanning: 0,
  kShopping: 1,
};

// Enum: NewTabPageType
side_panel.mojom.NewTabPageType = {
  kFirstPartyWebUI: 0,
  kThirdPartyWebUI: 1,
  kThirdPartyRemote: 2,
  kExtension: 3,
  kIncognito: 4,
  kGuestMode: 5,
  kNone: 6,
};

// Struct: BackgroundImage
mojo.internal.Struct(
    side_panel.mojom.BackgroundImageSpec, 'side_panel.mojom.BackgroundImage', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('snapshot_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_background_id', 16, 0, mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('title', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('collection_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_uploaded_image', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('daily_refresh_enabled', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ThirdPartyThemeInfo
mojo.internal.Struct(
    side_panel.mojom.ThirdPartyThemeInfoSpec, 'side_panel.mojom.ThirdPartyThemeInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Theme
mojo.internal.Struct(
    side_panel.mojom.ThemeSpec, 'side_panel.mojom.Theme', [
      mojo.internal.StructField('background_image', 0, 0, side_panel.mojom.BackgroundImageSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('third_party_theme_info', 8, 0, side_panel.mojom.ThirdPartyThemeInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('background_color', 16, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('foreground_color', 24, 0, skia.mojom.SkColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('background_managed_by_policy', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('follow_device_theme', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: BackgroundCollection
mojo.internal.Struct(
    side_panel.mojom.BackgroundCollectionSpec, 'side_panel.mojom.BackgroundCollection', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('preview_image_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_verified', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CollectionImage
mojo.internal.Struct(
    side_panel.mojom.CollectionImageSpec, 'side_panel.mojom.CollectionImage', [
      mojo.internal.StructField('attribution_1', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('attribution_2', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('attribution_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('preview_image_url', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('collection_id', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('image_verified', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: ModuleSettings
mojo.internal.Struct(
    side_panel.mojom.ModuleSettingsSpec, 'side_panel.mojom.ModuleSettings', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('enabled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('visible', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagementNoticeState
mojo.internal.Struct(
    side_panel.mojom.ManagementNoticeStateSpec, 'side_panel.mojom.ManagementNoticeState', [
      mojo.internal.StructField('can_be_shown', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enabled_by_policy', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CustomizeChromePageHandlerFactory
mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandlerFactory_CreatePageHandler_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(side_panel.mojom.CustomizeChromePageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(side_panel.mojom.CustomizeChromePageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

side_panel.mojom.CustomizeChromePageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.mojom.CustomizeChromePageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'side_panel.mojom.CustomizeChromePageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.mojom.CustomizeChromePageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new side_panel.mojom.CustomizeChromePageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.mojom.CustomizeChromePageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      side_panel.mojom.CustomizeChromePageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

side_panel.mojom.CustomizeChromePageHandlerFactory.getRemote = function() {
  let remote = new side_panel.mojom.CustomizeChromePageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.mojom.CustomizeChromePageHandlerFactory',
    'context');
  return remote.$;
};

side_panel.mojom.CustomizeChromePageHandlerFactoryReceiver = class {
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
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

side_panel.mojom.CustomizeChromePageHandlerFactoryReceiver = side_panel.mojom.CustomizeChromePageHandlerFactoryReceiver;

side_panel.mojom.CustomizeChromePageHandlerFactoryPtr = side_panel.mojom.CustomizeChromePageHandlerFactoryRemote;
side_panel.mojom.CustomizeChromePageHandlerFactoryRequest = side_panel.mojom.CustomizeChromePageHandlerFactoryPendingReceiver;


// Interface: CustomizeChromePageHandler
mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetMostVisitedSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetMostVisitedSettings_Params', [
      mojo.internal.StructField('shortcuts_types', 0, 0, mojo.internal.Array(ntp_tiles.mojom.TileTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('shortcuts_visible', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('personal_shortcuts_visible', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateMostVisitedSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateMostVisitedSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ResponseParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ResponseParams', [
      mojo.internal.StructField('collections', 0, 0, mojo.internal.Array(side_panel.mojom.BackgroundCollectionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_Params', [
      mojo.internal.StructField('collection_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ResponseParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ResponseParams', [
      mojo.internal.StructField('preview_image_url', 0, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_Params', [
      mojo.internal.StructField('collection_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ResponseParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ResponseParams', [
      mojo.internal.StructField('images', 0, 0, mojo.internal.Array(side_panel.mojom.CollectionImageSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateModulesSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateModulesSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateTheme_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateTheme_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateThemeEditable_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateThemeEditable_Params', [
      mojo.internal.StructField('is_theme_editable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetDefaultColor_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetDefaultColor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetFollowDeviceTheme_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetFollowDeviceTheme_Params', [
      mojo.internal.StructField('follow', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_RemoveBackgroundImage_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_RemoveBackgroundImage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ResponseParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetBackgroundImage_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetBackgroundImage_Params', [
      mojo.internal.StructField('attribution_1', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('attribution_2', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('attribution_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('thumbnail_url', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('collection_id', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetDailyRefreshCollectionId_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetDailyRefreshCollectionId_Params', [
      mojo.internal.StructField('collection_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStore_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStore_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreHomePage_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreHomePage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_OpenThirdPartyThemePage_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_OpenThirdPartyThemePage_Params', [
      mojo.internal.StructField('theme_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_Params', [
      mojo.internal.StructField('category', 0, 0, side_panel.mojom.ChromeWebStoreCategorySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_Params', [
      mojo.internal.StructField('collection', 0, 0, side_panel.mojom.ChromeWebStoreCollectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_OpenNtpManagedByPage_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_OpenNtpManagedByPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetModulesVisible_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetModulesVisible_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetModuleDisabled_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetModuleDisabled_Params', [
      mojo.internal.StructField('module_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('disabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetToolChipsVisible_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetToolChipsVisible_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateToolChipsSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateToolChipsSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateScrollToSection_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateScrollToSection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateAttachedTabState_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateAttachedTabState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateNtpManagedByName_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateNtpManagedByName_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetFooterVisible_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetFooterVisible_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateFooterSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateFooterSettings_Params', [
    ],
    [[0, 8]]);

side_panel.mojom.CustomizeChromePageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.mojom.CustomizeChromePageHandlerRemote = class {
  static get $interfaceName() {
    return 'side_panel.mojom.CustomizeChromePageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.mojom.CustomizeChromePageHandlerPendingReceiver,
      handle);
    this.$ = new side_panel.mojom.CustomizeChromePageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.mojom.CustomizeChromePageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setMostVisitedSettings(shortcuts_types, shortcuts_visible, personal_shortcuts_visible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetMostVisitedSettings_ParamsSpec,
      null,
      [shortcuts_types, shortcuts_visible, personal_shortcuts_visible],
      false);
  }

  updateMostVisitedSettings() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateMostVisitedSettings_ParamsSpec,
      null,
      [],
      false);
  }

  getBackgroundCollections() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ParamsSpec,
      side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ResponseParamsSpec,
      [],
      false);
  }

  getReplacementCollectionPreviewImage(collection_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ParamsSpec,
      side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ResponseParamsSpec,
      [collection_id],
      false);
  }

  getBackgroundImages(collection_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ParamsSpec,
      side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ResponseParamsSpec,
      [collection_id],
      false);
  }

  updateModulesSettings() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateModulesSettings_ParamsSpec,
      null,
      [],
      false);
  }

  updateTheme() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateTheme_ParamsSpec,
      null,
      [],
      false);
  }

  updateThemeEditable(is_theme_editable) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateThemeEditable_ParamsSpec,
      null,
      [is_theme_editable],
      false);
  }

  setDefaultColor() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetDefaultColor_ParamsSpec,
      null,
      [],
      false);
  }

  setFollowDeviceTheme(follow) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetFollowDeviceTheme_ParamsSpec,
      null,
      [follow],
      false);
  }

  removeBackgroundImage() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_RemoveBackgroundImage_ParamsSpec,
      null,
      [],
      false);
  }

  chooseLocalCustomBackground() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ParamsSpec,
      side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ResponseParamsSpec,
      [],
      false);
  }

  setBackgroundImage(attribution_1, attribution_2, attribution_url, image_url, thumbnail_url, collection_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetBackgroundImage_ParamsSpec,
      null,
      [attribution_1, attribution_2, attribution_url, image_url, thumbnail_url, collection_id],
      false);
  }

  setDailyRefreshCollectionId(collection_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetDailyRefreshCollectionId_ParamsSpec,
      null,
      [collection_id],
      false);
  }

  openChromeWebStore() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStore_ParamsSpec,
      null,
      [],
      false);
  }

  openChromeWebStoreHomePage() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreHomePage_ParamsSpec,
      null,
      [],
      false);
  }

  openThirdPartyThemePage(theme_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenThirdPartyThemePage_ParamsSpec,
      null,
      [theme_id],
      false);
  }

  openChromeWebStoreCategoryPage(category) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_ParamsSpec,
      null,
      [category],
      false);
  }

  openChromeWebStoreCollectionPage(collection) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_ParamsSpec,
      null,
      [collection],
      false);
  }

  openNtpManagedByPage() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenNtpManagedByPage_ParamsSpec,
      null,
      [],
      false);
  }

  setModulesVisible(visible) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetModulesVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  setModuleDisabled(module_id, disabled) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetModuleDisabled_ParamsSpec,
      null,
      [module_id, disabled],
      false);
  }

  setToolChipsVisible(visible) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetToolChipsVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  updateToolChipsSettings() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateToolChipsSettings_ParamsSpec,
      null,
      [],
      false);
  }

  updateScrollToSection() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateScrollToSection_ParamsSpec,
      null,
      [],
      false);
  }

  updateAttachedTabState() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateAttachedTabState_ParamsSpec,
      null,
      [],
      false);
  }

  updateNtpManagedByName() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateNtpManagedByName_ParamsSpec,
      null,
      [],
      false);
  }

  setFooterVisible(visible) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetFooterVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  updateFooterSettings() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateFooterSettings_ParamsSpec,
      null,
      [],
      false);
  }

};

side_panel.mojom.CustomizeChromePageHandler.getRemote = function() {
  let remote = new side_panel.mojom.CustomizeChromePageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.mojom.CustomizeChromePageHandler',
    'context');
  return remote.$;
};

side_panel.mojom.CustomizeChromePageHandlerReceiver = class {
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
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
    this.ordinalMap.set(23, 23); // Default ordinal 23 -> Index 23
    this.ordinalMap.set(24, 24); // Default ordinal 24 -> Index 24
    this.ordinalMap.set(25, 25); // Default ordinal 25 -> Index 25
    this.ordinalMap.set(26, 26); // Default ordinal 26 -> Index 26
    this.ordinalMap.set(27, 27); // Default ordinal 27 -> Index 27
    this.ordinalMap.set(28, 28); // Default ordinal 28 -> Index 28
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
        
        // Try Method 0: SetMostVisitedSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetMostVisitedSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMostVisitedSettings (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: UpdateMostVisitedSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateMostVisitedSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateMostVisitedSettings (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: GetBackgroundCollections
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBackgroundCollections (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: GetReplacementCollectionPreviewImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetReplacementCollectionPreviewImage (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: GetBackgroundImages
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBackgroundImages (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: UpdateModulesSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateModulesSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateModulesSettings (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: UpdateTheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateTheme_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateTheme (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: UpdateThemeEditable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateThemeEditable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateThemeEditable (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: SetDefaultColor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetDefaultColor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDefaultColor (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: SetFollowDeviceTheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetFollowDeviceTheme_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFollowDeviceTheme (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 10: RemoveBackgroundImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_RemoveBackgroundImage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveBackgroundImage (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 11: ChooseLocalCustomBackground
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ChooseLocalCustomBackground (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 12: SetBackgroundImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetBackgroundImage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBackgroundImage (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 13: SetDailyRefreshCollectionId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetDailyRefreshCollectionId_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDailyRefreshCollectionId (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 14: OpenChromeWebStore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStore_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChromeWebStore (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 15: OpenChromeWebStoreHomePage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreHomePage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChromeWebStoreHomePage (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 16: OpenThirdPartyThemePage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_OpenThirdPartyThemePage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenThirdPartyThemePage (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 17: OpenChromeWebStoreCategoryPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChromeWebStoreCategoryPage (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 18: OpenChromeWebStoreCollectionPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChromeWebStoreCollectionPage (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 19: OpenNtpManagedByPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_OpenNtpManagedByPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenNtpManagedByPage (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 20: SetModulesVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetModulesVisible_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetModulesVisible (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 21: SetModuleDisabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetModuleDisabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetModuleDisabled (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 22: SetToolChipsVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetToolChipsVisible_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetToolChipsVisible (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 23: UpdateToolChipsSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateToolChipsSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateToolChipsSettings (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 24: UpdateScrollToSection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateScrollToSection_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateScrollToSection (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 25: UpdateAttachedTabState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateAttachedTabState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateAttachedTabState (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 26: UpdateNtpManagedByName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateNtpManagedByName_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateNtpManagedByName (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 27: SetFooterVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetFooterVisible_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFooterVisible (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 28: UpdateFooterSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateFooterSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateFooterSettings (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetMostVisitedSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setMostVisitedSettings');
          const result = this.impl.setMostVisitedSettings(params.shortcuts_types, params.shortcuts_visible, params.personal_shortcuts_visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateMostVisitedSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateMostVisitedSettings');
          const result = this.impl.updateMostVisitedSettings();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getBackgroundCollections');
          const result = this.impl.getBackgroundCollections();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getReplacementCollectionPreviewImage');
          const result = this.impl.getReplacementCollectionPreviewImage(params.collection_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getBackgroundImages');
          const result = this.impl.getBackgroundImages(params.collection_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateModulesSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateModulesSettings');
          const result = this.impl.updateModulesSettings();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateTheme_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateTheme');
          const result = this.impl.updateTheme();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateThemeEditable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateThemeEditable');
          const result = this.impl.updateThemeEditable(params.is_theme_editable);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetDefaultColor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDefaultColor');
          const result = this.impl.setDefaultColor();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetFollowDeviceTheme_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setFollowDeviceTheme');
          const result = this.impl.setFollowDeviceTheme(params.follow);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_RemoveBackgroundImage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeBackgroundImage');
          const result = this.impl.removeBackgroundImage();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.chooseLocalCustomBackground');
          const result = this.impl.chooseLocalCustomBackground();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetBackgroundImage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setBackgroundImage');
          const result = this.impl.setBackgroundImage(params.attribution_1, params.attribution_2, params.attribution_url, params.image_url, params.thumbnail_url, params.collection_id);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetDailyRefreshCollectionId_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDailyRefreshCollectionId');
          const result = this.impl.setDailyRefreshCollectionId(params.collection_id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStore_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openChromeWebStore');
          const result = this.impl.openChromeWebStore();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreHomePage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openChromeWebStoreHomePage');
          const result = this.impl.openChromeWebStoreHomePage();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_OpenThirdPartyThemePage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openThirdPartyThemePage');
          const result = this.impl.openThirdPartyThemePage(params.theme_id);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openChromeWebStoreCategoryPage');
          const result = this.impl.openChromeWebStoreCategoryPage(params.category);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openChromeWebStoreCollectionPage');
          const result = this.impl.openChromeWebStoreCollectionPage(params.collection);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_OpenNtpManagedByPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openNtpManagedByPage');
          const result = this.impl.openNtpManagedByPage();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetModulesVisible_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setModulesVisible');
          const result = this.impl.setModulesVisible(params.visible);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetModuleDisabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setModuleDisabled');
          const result = this.impl.setModuleDisabled(params.module_id, params.disabled);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetToolChipsVisible_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setToolChipsVisible');
          const result = this.impl.setToolChipsVisible(params.visible);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateToolChipsSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateToolChipsSettings');
          const result = this.impl.updateToolChipsSettings();
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateScrollToSection_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateScrollToSection');
          const result = this.impl.updateScrollToSection();
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateAttachedTabState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateAttachedTabState');
          const result = this.impl.updateAttachedTabState();
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateNtpManagedByName_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateNtpManagedByName');
          const result = this.impl.updateNtpManagedByName();
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_SetFooterVisible_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setFooterVisible');
          const result = this.impl.setFooterVisible(params.visible);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePageHandler_UpdateFooterSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateFooterSettings');
          const result = this.impl.updateFooterSettings();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

side_panel.mojom.CustomizeChromePageHandlerReceiver = side_panel.mojom.CustomizeChromePageHandlerReceiver;

side_panel.mojom.CustomizeChromePageHandlerPtr = side_panel.mojom.CustomizeChromePageHandlerRemote;
side_panel.mojom.CustomizeChromePageHandlerRequest = side_panel.mojom.CustomizeChromePageHandlerPendingReceiver;


// Interface: CustomizeChromePage
mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_SetModulesSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_SetModulesSettings_Params', [
      mojo.internal.StructField('modules_settings', 0, 0, mojo.internal.Array(side_panel.mojom.ModuleSettingsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('managed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('visible', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_SetMostVisitedSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_SetMostVisitedSettings_Params', [
      mojo.internal.StructField('shortcuts_types', 0, 0, mojo.internal.Array(ntp_tiles.mojom.TileTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('disabled_shortcuts', 8, 0, mojo.internal.Array(ntp_tiles.mojom.TileTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('visible', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('personal_shortcuts_visible', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_SetToolsSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_SetToolsSettings_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_SetFooterSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_SetFooterSettings_Params', [
      mojo.internal.StructField('management_notice_state', 0, 0, side_panel.mojom.ManagementNoticeStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('extension_policy_enabled', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_SetTheme_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_SetTheme_Params', [
      mojo.internal.StructField('theme', 0, 0, side_panel.mojom.ThemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_SetThemeEditable_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_SetThemeEditable_Params', [
      mojo.internal.StructField('is_theme_editable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_ScrollToSection_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_ScrollToSection_Params', [
      mojo.internal.StructField('section', 0, 0, side_panel.mojom.CustomizeChromeSectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_AttachedTabStateUpdated_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_AttachedTabStateUpdated_Params', [
      mojo.internal.StructField('ntp_type', 0, 0, side_panel.mojom.NewTabPageTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_NtpManagedByNameUpdated_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_NtpManagedByNameUpdated_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

side_panel.mojom.CustomizeChromePagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.mojom.CustomizeChromePageRemote = class {
  static get $interfaceName() {
    return 'side_panel.mojom.CustomizeChromePage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.mojom.CustomizeChromePagePendingReceiver,
      handle);
    this.$ = new side_panel.mojom.CustomizeChromePageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.mojom.CustomizeChromePageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setModulesSettings(modules_settings, managed, visible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      side_panel.mojom.CustomizeChromePage_SetModulesSettings_ParamsSpec,
      null,
      [modules_settings, managed, visible],
      false);
  }

  setMostVisitedSettings(shortcuts_types, visible, personal_shortcuts_visible, disabled_shortcuts) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      side_panel.mojom.CustomizeChromePage_SetMostVisitedSettings_ParamsSpec,
      null,
      [shortcuts_types, visible, personal_shortcuts_visible, disabled_shortcuts],
      false);
  }

  setToolsSettings(visible) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      side_panel.mojom.CustomizeChromePage_SetToolsSettings_ParamsSpec,
      null,
      [visible],
      false);
  }

  setFooterSettings(visible, extension_policy_enabled, management_notice_state) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      side_panel.mojom.CustomizeChromePage_SetFooterSettings_ParamsSpec,
      null,
      [visible, extension_policy_enabled, management_notice_state],
      false);
  }

  setTheme(theme) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      side_panel.mojom.CustomizeChromePage_SetTheme_ParamsSpec,
      null,
      [theme],
      false);
  }

  setThemeEditable(is_theme_editable) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      side_panel.mojom.CustomizeChromePage_SetThemeEditable_ParamsSpec,
      null,
      [is_theme_editable],
      false);
  }

  scrollToSection(section) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      side_panel.mojom.CustomizeChromePage_ScrollToSection_ParamsSpec,
      null,
      [section],
      false);
  }

  attachedTabStateUpdated(ntp_type) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      side_panel.mojom.CustomizeChromePage_AttachedTabStateUpdated_ParamsSpec,
      null,
      [ntp_type],
      false);
  }

  ntpManagedByNameUpdated(name, description) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      side_panel.mojom.CustomizeChromePage_NtpManagedByNameUpdated_ParamsSpec,
      null,
      [name, description],
      false);
  }

};

side_panel.mojom.CustomizeChromePage.getRemote = function() {
  let remote = new side_panel.mojom.CustomizeChromePageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.mojom.CustomizeChromePage',
    'context');
  return remote.$;
};

side_panel.mojom.CustomizeChromePageReceiver = class {
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
        
        // Try Method 0: SetModulesSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_SetModulesSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetModulesSettings (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: SetMostVisitedSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_SetMostVisitedSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMostVisitedSettings (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: SetToolsSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_SetToolsSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetToolsSettings (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: SetFooterSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_SetFooterSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFooterSettings (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: SetTheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_SetTheme_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTheme (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: SetThemeEditable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_SetThemeEditable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetThemeEditable (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: ScrollToSection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_ScrollToSection_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScrollToSection (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: AttachedTabStateUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_AttachedTabStateUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AttachedTabStateUpdated (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: NtpManagedByNameUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_NtpManagedByNameUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NtpManagedByNameUpdated (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_SetModulesSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setModulesSettings');
          const result = this.impl.setModulesSettings(params.modules_settings, params.managed, params.visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_SetMostVisitedSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setMostVisitedSettings');
          const result = this.impl.setMostVisitedSettings(params.shortcuts_types, params.visible, params.personal_shortcuts_visible, params.disabled_shortcuts);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_SetToolsSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setToolsSettings');
          const result = this.impl.setToolsSettings(params.visible);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_SetFooterSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setFooterSettings');
          const result = this.impl.setFooterSettings(params.visible, params.extension_policy_enabled, params.management_notice_state);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_SetTheme_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTheme');
          const result = this.impl.setTheme(params.theme);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_SetThemeEditable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setThemeEditable');
          const result = this.impl.setThemeEditable(params.is_theme_editable);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_ScrollToSection_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.scrollToSection');
          const result = this.impl.scrollToSection(params.section);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_AttachedTabStateUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.attachedTabStateUpdated');
          const result = this.impl.attachedTabStateUpdated(params.ntp_type);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(side_panel.mojom.CustomizeChromePage_NtpManagedByNameUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.ntpManagedByNameUpdated');
          const result = this.impl.ntpManagedByNameUpdated(params.name, params.description);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

side_panel.mojom.CustomizeChromePageReceiver = side_panel.mojom.CustomizeChromePageReceiver;

side_panel.mojom.CustomizeChromePagePtr = side_panel.mojom.CustomizeChromePageRemote;
side_panel.mojom.CustomizeChromePageRequest = side_panel.mojom.CustomizeChromePagePendingReceiver;

