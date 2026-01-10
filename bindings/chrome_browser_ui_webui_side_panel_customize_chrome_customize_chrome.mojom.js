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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = side_panel.mojom.CustomizeChromePageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
    });
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = side_panel.mojom.CustomizeChromePageHandler_SetMostVisitedSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setMostVisitedSettings(params.shortcuts_types, params.shortcuts_visible, params.personal_shortcuts_visible);
          break;
        }
        case 1: {
          const params = side_panel.mojom.CustomizeChromePageHandler_UpdateMostVisitedSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateMostVisitedSettings();
          break;
        }
        case 2: {
          const params = side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getBackgroundCollections();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 3: {
          const params = side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getReplacementCollectionPreviewImage(params.collection_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 4: {
          const params = side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getBackgroundImages(params.collection_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 5: {
          const params = side_panel.mojom.CustomizeChromePageHandler_UpdateModulesSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateModulesSettings();
          break;
        }
        case 6: {
          const params = side_panel.mojom.CustomizeChromePageHandler_UpdateTheme_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateTheme();
          break;
        }
        case 7: {
          const params = side_panel.mojom.CustomizeChromePageHandler_UpdateThemeEditable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateThemeEditable(params.is_theme_editable);
          break;
        }
        case 8: {
          const params = side_panel.mojom.CustomizeChromePageHandler_SetDefaultColor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDefaultColor();
          break;
        }
        case 9: {
          const params = side_panel.mojom.CustomizeChromePageHandler_SetFollowDeviceTheme_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setFollowDeviceTheme(params.follow);
          break;
        }
        case 10: {
          const params = side_panel.mojom.CustomizeChromePageHandler_RemoveBackgroundImage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removeBackgroundImage();
          break;
        }
        case 11: {
          const params = side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ParamsSpec.$.decode(message.payload);
          const result = this.impl.chooseLocalCustomBackground();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 12: {
          const params = side_panel.mojom.CustomizeChromePageHandler_SetBackgroundImage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBackgroundImage(params.attribution_1, params.attribution_2, params.attribution_url, params.image_url, params.thumbnail_url, params.collection_id);
          break;
        }
        case 13: {
          const params = side_panel.mojom.CustomizeChromePageHandler_SetDailyRefreshCollectionId_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDailyRefreshCollectionId(params.collection_id);
          break;
        }
        case 14: {
          const params = side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStore_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openChromeWebStore();
          break;
        }
        case 15: {
          const params = side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreHomePage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openChromeWebStoreHomePage();
          break;
        }
        case 16: {
          const params = side_panel.mojom.CustomizeChromePageHandler_OpenThirdPartyThemePage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openThirdPartyThemePage(params.theme_id);
          break;
        }
        case 17: {
          const params = side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openChromeWebStoreCategoryPage(params.category);
          break;
        }
        case 18: {
          const params = side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openChromeWebStoreCollectionPage(params.collection);
          break;
        }
        case 19: {
          const params = side_panel.mojom.CustomizeChromePageHandler_OpenNtpManagedByPage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openNtpManagedByPage();
          break;
        }
        case 20: {
          const params = side_panel.mojom.CustomizeChromePageHandler_SetModulesVisible_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setModulesVisible(params.visible);
          break;
        }
        case 21: {
          const params = side_panel.mojom.CustomizeChromePageHandler_SetModuleDisabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setModuleDisabled(params.module_id, params.disabled);
          break;
        }
        case 22: {
          const params = side_panel.mojom.CustomizeChromePageHandler_SetToolChipsVisible_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setToolChipsVisible(params.visible);
          break;
        }
        case 23: {
          const params = side_panel.mojom.CustomizeChromePageHandler_UpdateToolChipsSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateToolChipsSettings();
          break;
        }
        case 24: {
          const params = side_panel.mojom.CustomizeChromePageHandler_UpdateScrollToSection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateScrollToSection();
          break;
        }
        case 25: {
          const params = side_panel.mojom.CustomizeChromePageHandler_UpdateAttachedTabState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateAttachedTabState();
          break;
        }
        case 26: {
          const params = side_panel.mojom.CustomizeChromePageHandler_UpdateNtpManagedByName_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateNtpManagedByName();
          break;
        }
        case 27: {
          const params = side_panel.mojom.CustomizeChromePageHandler_SetFooterVisible_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setFooterVisible(params.visible);
          break;
        }
        case 28: {
          const params = side_panel.mojom.CustomizeChromePageHandler_UpdateFooterSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateFooterSettings();
          break;
        }
      }
    });
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = side_panel.mojom.CustomizeChromePage_SetModulesSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setModulesSettings(params.modules_settings, params.managed, params.visible);
          break;
        }
        case 1: {
          const params = side_panel.mojom.CustomizeChromePage_SetMostVisitedSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setMostVisitedSettings(params.shortcuts_types, params.visible, params.personal_shortcuts_visible, params.disabled_shortcuts);
          break;
        }
        case 2: {
          const params = side_panel.mojom.CustomizeChromePage_SetToolsSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setToolsSettings(params.visible);
          break;
        }
        case 3: {
          const params = side_panel.mojom.CustomizeChromePage_SetFooterSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setFooterSettings(params.visible, params.extension_policy_enabled, params.management_notice_state);
          break;
        }
        case 4: {
          const params = side_panel.mojom.CustomizeChromePage_SetTheme_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setTheme(params.theme);
          break;
        }
        case 5: {
          const params = side_panel.mojom.CustomizeChromePage_SetThemeEditable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setThemeEditable(params.is_theme_editable);
          break;
        }
        case 6: {
          const params = side_panel.mojom.CustomizeChromePage_ScrollToSection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.scrollToSection(params.section);
          break;
        }
        case 7: {
          const params = side_panel.mojom.CustomizeChromePage_AttachedTabStateUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.attachedTabStateUpdated(params.ntp_type);
          break;
        }
        case 8: {
          const params = side_panel.mojom.CustomizeChromePage_NtpManagedByNameUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.ntpManagedByNameUpdated(params.name, params.description);
          break;
        }
      }
    });
  }
};

side_panel.mojom.CustomizeChromePageReceiver = side_panel.mojom.CustomizeChromePageReceiver;

side_panel.mojom.CustomizeChromePagePtr = side_panel.mojom.CustomizeChromePageRemote;
side_panel.mojom.CustomizeChromePageRequest = side_panel.mojom.CustomizeChromePagePendingReceiver;

