// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/customize_chrome/customize_chrome.mojom
// Module: side_panel.mojom

'use strict';

// Module namespace
var side_panel = side_panel || {};
side_panel.mojom = side_panel.mojom || {};


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
side_panel.mojom.BackgroundImageSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BackgroundImage',
      packedSize: 16,
      fields: [
        { name: 'daily_refresh_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ThirdPartyThemeInfo
side_panel.mojom.ThirdPartyThemeInfoSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.ThirdPartyThemeInfo',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Theme
side_panel.mojom.ThemeSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.Theme',
      packedSize: 16,
      fields: [
        { name: 'follow_device_theme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BackgroundCollection
side_panel.mojom.BackgroundCollectionSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BackgroundCollection',
      packedSize: 16,
      fields: [
        { name: 'image_verified', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CollectionImage
side_panel.mojom.CollectionImageSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CollectionImage',
      packedSize: 16,
      fields: [
        { name: 'image_verified', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ModuleSettings
side_panel.mojom.ModuleSettingsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.ModuleSettings',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagementNoticeState
side_panel.mojom.ManagementNoticeStateSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.ManagementNoticeState',
      packedSize: 16,
      fields: [
        { name: 'enabled_by_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: CustomizeChromePageHandlerFactory
side_panel.mojom.CustomizeChromePageHandlerFactory = {};

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
      [page, handler]);
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

// ParamsSpec for CreatePageHandler
side_panel.mojom.CustomizeChromePageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
side_panel.mojom.CustomizeChromePageHandlerFactoryPtr = side_panel.mojom.CustomizeChromePageHandlerFactoryRemote;
side_panel.mojom.CustomizeChromePageHandlerFactoryRequest = side_panel.mojom.CustomizeChromePageHandlerFactoryPendingReceiver;


// Interface: CustomizeChromePageHandler
side_panel.mojom.CustomizeChromePageHandler = {};

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
      [shortcuts_types, shortcuts_visible, personal_shortcuts_visible]);
  }

  updateMostVisitedSettings() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateMostVisitedSettings_ParamsSpec,
      null,
      []);
  }

  getBackgroundCollections() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ParamsSpec,
      side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ResponseParamsSpec,
      []);
  }

  getReplacementCollectionPreviewImage(collection_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ParamsSpec,
      side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ResponseParamsSpec,
      [collection_id]);
  }

  getBackgroundImages(collection_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ParamsSpec,
      side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ResponseParamsSpec,
      [collection_id]);
  }

  updateModulesSettings() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateModulesSettings_ParamsSpec,
      null,
      []);
  }

  updateTheme() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateTheme_ParamsSpec,
      null,
      []);
  }

  updateThemeEditable(is_theme_editable) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateThemeEditable_ParamsSpec,
      null,
      [is_theme_editable]);
  }

  setDefaultColor() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetDefaultColor_ParamsSpec,
      null,
      []);
  }

  setFollowDeviceTheme(follow) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetFollowDeviceTheme_ParamsSpec,
      null,
      [follow]);
  }

  removeBackgroundImage() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_RemoveBackgroundImage_ParamsSpec,
      null,
      []);
  }

  chooseLocalCustomBackground() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ParamsSpec,
      side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ResponseParamsSpec,
      []);
  }

  setBackgroundImage(attribution_1, attribution_2, attribution_url, image_url, thumbnail_url, collection_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetBackgroundImage_ParamsSpec,
      null,
      [attribution_1, attribution_2, attribution_url, image_url, thumbnail_url, collection_id]);
  }

  setDailyRefreshCollectionId(collection_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetDailyRefreshCollectionId_ParamsSpec,
      null,
      [collection_id]);
  }

  openChromeWebStore() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStore_ParamsSpec,
      null,
      []);
  }

  openChromeWebStoreHomePage() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreHomePage_ParamsSpec,
      null,
      []);
  }

  openThirdPartyThemePage(theme_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenThirdPartyThemePage_ParamsSpec,
      null,
      [theme_id]);
  }

  openChromeWebStoreCategoryPage(category) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_ParamsSpec,
      null,
      [category]);
  }

  openChromeWebStoreCollectionPage(collection) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_ParamsSpec,
      null,
      [collection]);
  }

  openNtpManagedByPage() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenNtpManagedByPage_ParamsSpec,
      null,
      []);
  }

  setModulesVisible(visible) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetModulesVisible_ParamsSpec,
      null,
      [visible]);
  }

  setModuleDisabled(module_id, disabled) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetModuleDisabled_ParamsSpec,
      null,
      [module_id, disabled]);
  }

  setToolChipsVisible(visible) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetToolChipsVisible_ParamsSpec,
      null,
      [visible]);
  }

  updateToolChipsSettings() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateToolChipsSettings_ParamsSpec,
      null,
      []);
  }

  updateScrollToSection() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateScrollToSection_ParamsSpec,
      null,
      []);
  }

  updateAttachedTabState() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateAttachedTabState_ParamsSpec,
      null,
      []);
  }

  updateNtpManagedByName() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateNtpManagedByName_ParamsSpec,
      null,
      []);
  }

  setFooterVisible(visible) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetFooterVisible_ParamsSpec,
      null,
      [visible]);
  }

  updateFooterSettings() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateFooterSettings_ParamsSpec,
      null,
      []);
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

// ParamsSpec for SetMostVisitedSettings
side_panel.mojom.CustomizeChromePageHandler_SetMostVisitedSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.SetMostVisitedSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'shortcuts_types', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'shortcuts_visible', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'personal_shortcuts_visible', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateMostVisitedSettings
side_panel.mojom.CustomizeChromePageHandler_UpdateMostVisitedSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.UpdateMostVisitedSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetBackgroundCollections
side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.GetBackgroundCollections_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.GetBackgroundCollections_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'collections', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetReplacementCollectionPreviewImage
side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.GetReplacementCollectionPreviewImage_Params',
      packedSize: 16,
      fields: [
        { name: 'collection_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.GetReplacementCollectionPreviewImage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'preview_image_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetBackgroundImages
side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.GetBackgroundImages_Params',
      packedSize: 16,
      fields: [
        { name: 'collection_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.GetBackgroundImages_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'images', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateModulesSettings
side_panel.mojom.CustomizeChromePageHandler_UpdateModulesSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.UpdateModulesSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateTheme
side_panel.mojom.CustomizeChromePageHandler_UpdateTheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.UpdateTheme_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateThemeEditable
side_panel.mojom.CustomizeChromePageHandler_UpdateThemeEditable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.UpdateThemeEditable_Params',
      packedSize: 16,
      fields: [
        { name: 'is_theme_editable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetDefaultColor
side_panel.mojom.CustomizeChromePageHandler_SetDefaultColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.SetDefaultColor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetFollowDeviceTheme
side_panel.mojom.CustomizeChromePageHandler_SetFollowDeviceTheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.SetFollowDeviceTheme_Params',
      packedSize: 16,
      fields: [
        { name: 'follow', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveBackgroundImage
side_panel.mojom.CustomizeChromePageHandler_RemoveBackgroundImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.RemoveBackgroundImage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ChooseLocalCustomBackground
side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.ChooseLocalCustomBackground_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.ChooseLocalCustomBackground_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetBackgroundImage
side_panel.mojom.CustomizeChromePageHandler_SetBackgroundImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.SetBackgroundImage_Params',
      packedSize: 56,
      fields: [
        { name: 'attribution_1', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'attribution_2', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'attribution_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'image_url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'thumbnail_url', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'collection_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetDailyRefreshCollectionId
side_panel.mojom.CustomizeChromePageHandler_SetDailyRefreshCollectionId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.SetDailyRefreshCollectionId_Params',
      packedSize: 16,
      fields: [
        { name: 'collection_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenChromeWebStore
side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.OpenChromeWebStore_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenChromeWebStoreHomePage
side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreHomePage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.OpenChromeWebStoreHomePage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenThirdPartyThemePage
side_panel.mojom.CustomizeChromePageHandler_OpenThirdPartyThemePage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.OpenThirdPartyThemePage_Params',
      packedSize: 16,
      fields: [
        { name: 'theme_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenChromeWebStoreCategoryPage
side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.OpenChromeWebStoreCategoryPage_Params',
      packedSize: 16,
      fields: [
        { name: 'category', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenChromeWebStoreCollectionPage
side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.OpenChromeWebStoreCollectionPage_Params',
      packedSize: 16,
      fields: [
        { name: 'collection', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenNtpManagedByPage
side_panel.mojom.CustomizeChromePageHandler_OpenNtpManagedByPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.OpenNtpManagedByPage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetModulesVisible
side_panel.mojom.CustomizeChromePageHandler_SetModulesVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.SetModulesVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetModuleDisabled
side_panel.mojom.CustomizeChromePageHandler_SetModuleDisabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.SetModuleDisabled_Params',
      packedSize: 24,
      fields: [
        { name: 'module_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'disabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetToolChipsVisible
side_panel.mojom.CustomizeChromePageHandler_SetToolChipsVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.SetToolChipsVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateToolChipsSettings
side_panel.mojom.CustomizeChromePageHandler_UpdateToolChipsSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.UpdateToolChipsSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateScrollToSection
side_panel.mojom.CustomizeChromePageHandler_UpdateScrollToSection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.UpdateScrollToSection_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateAttachedTabState
side_panel.mojom.CustomizeChromePageHandler_UpdateAttachedTabState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.UpdateAttachedTabState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateNtpManagedByName
side_panel.mojom.CustomizeChromePageHandler_UpdateNtpManagedByName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.UpdateNtpManagedByName_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetFooterVisible
side_panel.mojom.CustomizeChromePageHandler_SetFooterVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.SetFooterVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateFooterSettings
side_panel.mojom.CustomizeChromePageHandler_UpdateFooterSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePageHandler.UpdateFooterSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
side_panel.mojom.CustomizeChromePageHandlerPtr = side_panel.mojom.CustomizeChromePageHandlerRemote;
side_panel.mojom.CustomizeChromePageHandlerRequest = side_panel.mojom.CustomizeChromePageHandlerPendingReceiver;


// Interface: CustomizeChromePage
side_panel.mojom.CustomizeChromePage = {};

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
      [modules_settings, managed, visible]);
  }

  setMostVisitedSettings(shortcuts_types, visible, personal_shortcuts_visible, disabled_shortcuts) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      side_panel.mojom.CustomizeChromePage_SetMostVisitedSettings_ParamsSpec,
      null,
      [shortcuts_types, visible, personal_shortcuts_visible, disabled_shortcuts]);
  }

  setToolsSettings(visible) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      side_panel.mojom.CustomizeChromePage_SetToolsSettings_ParamsSpec,
      null,
      [visible]);
  }

  setFooterSettings(visible, extension_policy_enabled, management_notice_state) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      side_panel.mojom.CustomizeChromePage_SetFooterSettings_ParamsSpec,
      null,
      [visible, extension_policy_enabled, management_notice_state]);
  }

  setTheme(theme) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      side_panel.mojom.CustomizeChromePage_SetTheme_ParamsSpec,
      null,
      [theme]);
  }

  setThemeEditable(is_theme_editable) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      side_panel.mojom.CustomizeChromePage_SetThemeEditable_ParamsSpec,
      null,
      [is_theme_editable]);
  }

  scrollToSection(section) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      side_panel.mojom.CustomizeChromePage_ScrollToSection_ParamsSpec,
      null,
      [section]);
  }

  attachedTabStateUpdated(ntp_type) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      side_panel.mojom.CustomizeChromePage_AttachedTabStateUpdated_ParamsSpec,
      null,
      [ntp_type]);
  }

  ntpManagedByNameUpdated(name, description) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      side_panel.mojom.CustomizeChromePage_NtpManagedByNameUpdated_ParamsSpec,
      null,
      [name, description]);
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

// ParamsSpec for SetModulesSettings
side_panel.mojom.CustomizeChromePage_SetModulesSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePage.SetModulesSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'modules_settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'managed', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'visible', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetMostVisitedSettings
side_panel.mojom.CustomizeChromePage_SetMostVisitedSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePage.SetMostVisitedSettings_Params',
      packedSize: 32,
      fields: [
        { name: 'shortcuts_types', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'visible', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'personal_shortcuts_visible', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'disabled_shortcuts', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetToolsSettings
side_panel.mojom.CustomizeChromePage_SetToolsSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePage.SetToolsSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetFooterSettings
side_panel.mojom.CustomizeChromePage_SetFooterSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePage.SetFooterSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'extension_policy_enabled', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'management_notice_state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTheme
side_panel.mojom.CustomizeChromePage_SetTheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePage.SetTheme_Params',
      packedSize: 16,
      fields: [
        { name: 'theme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetThemeEditable
side_panel.mojom.CustomizeChromePage_SetThemeEditable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePage.SetThemeEditable_Params',
      packedSize: 16,
      fields: [
        { name: 'is_theme_editable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ScrollToSection
side_panel.mojom.CustomizeChromePage_ScrollToSection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePage.ScrollToSection_Params',
      packedSize: 16,
      fields: [
        { name: 'section', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AttachedTabStateUpdated
side_panel.mojom.CustomizeChromePage_AttachedTabStateUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePage.AttachedTabStateUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'ntp_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NtpManagedByNameUpdated
side_panel.mojom.CustomizeChromePage_NtpManagedByNameUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.CustomizeChromePage.NtpManagedByNameUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'description', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
side_panel.mojom.CustomizeChromePagePtr = side_panel.mojom.CustomizeChromePageRemote;
side_panel.mojom.CustomizeChromePageRequest = side_panel.mojom.CustomizeChromePagePendingReceiver;

