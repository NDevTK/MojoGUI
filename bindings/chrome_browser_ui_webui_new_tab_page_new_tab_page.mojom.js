// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/new_tab_page.mojom
// Module: new_tab_page.mojom

'use strict';

// Module namespace
var new_tab_page = new_tab_page || {};
new_tab_page.mojom = new_tab_page.mojom || {};


// Enum: NtpBackgroundImageSource
new_tab_page.mojom.NtpBackgroundImageSource = {
  kNoImage: 0,
  kFirstPartyThemeWithoutDailyRefresh: 1,
  kFirstPartyThemeWithDailyRefresh: 2,
  kThirdPartyTheme: 3,
  kUploadedImage: 4,
  kWallpaperSearch: 5,
  kWallpaperSearchInspiration: 6,
};

// Enum: DoodleImageType
new_tab_page.mojom.DoodleImageType = {
  kAnimation: 0,
  kCta: 1,
  kStatic: 2,
};

// Enum: DoodleShareChannel
new_tab_page.mojom.DoodleShareChannel = {
  kFacebook: 0,
  kTwitter: 1,
  kEmail: 2,
  kLinkCopy: 3,
};

// Enum: CustomizeDialogAction
new_tab_page.mojom.CustomizeDialogAction = {
  kCancelClicked: 0,
  kDoneClicked: 1,
  kOpenClicked: 2,
  kBackgroundsBackClicked: 3,
  kBackgroundsNoBackgroundSelected: 4,
  kBackgroundsCollectionOpened: 5,
  kBackgroundsRefreshToggleClicked: 6,
  kBackgroundsImageSelected: 7,
  kBackgroundsUploadFromDeviceClicked: 8,
  kShortcutsCustomLinksClicked: 9,
  kShortcutsMostVisitedClicked: 10,
  kShortcutsVisibilityToggleClicked: 11,
};

// Enum: OptInStatus
new_tab_page.mojom.OptInStatus = {
  kExplicitOptIn: 0,
  kImplicitOptIn: 1,
  kOptOut: 2,
};

// Struct: BackgroundImage
new_tab_page.mojom.BackgroundImageSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.BackgroundImage',
      packedSize: 80,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'url_2x', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'attribution_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'repeat_x', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'repeat_y', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'position_x', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'position_y', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'image_source', packedOffset: 64, packedBitOffset: 0, type: new_tab_page.mojom.NtpBackgroundImageSourceSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Theme
new_tab_page.mojom.ThemeSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Theme',
      packedSize: 88,
      fields: [
        { name: 'text_color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false },
        { name: 'background_color', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false },
        { name: 'logo_color', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: true },
        { name: 'background_image_collection_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'background_image', packedOffset: 32, packedBitOffset: 0, type: new_tab_page.mojom.BackgroundImageSpec, nullable: true },
        { name: 'background_image_attribution_1', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'background_image_attribution_2', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'background_image_attribution_url', packedOffset: 56, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'most_visited', packedOffset: 64, packedBitOffset: 0, type: most_visited.mojom.MostVisitedThemeSpec, nullable: false },
        { name: 'is_baseline', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_gm3', packedOffset: 72, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_custom_background', packedOffset: 72, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'daily_refresh_enabled', packedOffset: 72, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'is_dark', packedOffset: 72, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ImageDoodle
new_tab_page.mojom.ImageDoodleSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.ImageDoodle',
      packedSize: 56,
      fields: [
        { name: 'image_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'animation_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'background_color', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false },
        { name: 'image_impression_log_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'animation_impression_log_url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'width', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'height', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AllModeImageDoodle
new_tab_page.mojom.AllModeImageDoodleSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.AllModeImageDoodle',
      packedSize: 40,
      fields: [
        { name: 'light', packedOffset: 0, packedBitOffset: 0, type: new_tab_page.mojom.ImageDoodleSpec, nullable: false },
        { name: 'dark', packedOffset: 8, packedBitOffset: 0, type: new_tab_page.mojom.ImageDoodleSpec, nullable: true },
        { name: 'on_click_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'share_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InteractiveDoodle
new_tab_page.mojom.InteractiveDoodleSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.InteractiveDoodle',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'height', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Doodle
new_tab_page.mojom.DoodleSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Doodle',
      packedSize: 32,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: new_tab_page.mojom.AllModeImageDoodleSpec, nullable: true },
        { name: 'interactive', packedOffset: 8, packedBitOffset: 0, type: new_tab_page.mojom.InteractiveDoodleSpec, nullable: true },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PromoImagePart
new_tab_page.mojom.PromoImagePartSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PromoImagePart',
      packedSize: 24,
      fields: [
        { name: 'image_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'target', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PromoLinkPart
new_tab_page.mojom.PromoLinkPartSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PromoLinkPart',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PromoTextPart
new_tab_page.mojom.PromoTextPartSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PromoTextPart',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Promo
new_tab_page.mojom.PromoSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Promo',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'log_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'middle_slot_parts', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ModuleIdName
new_tab_page.mojom.ModuleIdNameSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.ModuleIdName',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandlerFactory
new_tab_page.mojom.PageHandlerFactory = {};

new_tab_page.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'new_tab_page.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new new_tab_page.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

new_tab_page.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new new_tab_page.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
new_tab_page.mojom.PageHandlerFactoryPtr = new_tab_page.mojom.PageHandlerFactoryRemote;
new_tab_page.mojom.PageHandlerFactoryRequest = new_tab_page.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
new_tab_page.mojom.PageHandler = {};

new_tab_page.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'new_tab_page.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new new_tab_page.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setMostVisitedSettings(shortcuts_type, shortcuts_visible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec,
      null,
      [shortcuts_type, shortcuts_visible]);
  }

  getMostVisitedSettings() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec,
      []);
  }

  getDoodle() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec,
      []);
  }

  updatePromoData() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec,
      null,
      []);
  }

  blocklistPromo(promo_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec,
      null,
      [promo_id]);
  }

  undoBlocklistPromo(promo_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec,
      null,
      [promo_id]);
  }

  onDismissModule(module_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec,
      null,
      [module_id]);
  }

  onRestoreModule(module_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec,
      null,
      [module_id]);
  }

  setModulesVisible(visible) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec,
      null,
      [visible]);
  }

  updateDisabledModules() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec,
      null,
      []);
  }

  onModulesLoadedWithData(module_ids) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec,
      null,
      [module_ids]);
  }

  onModuleUsed(module_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec,
      null,
      [module_id]);
  }

  getModulesIdNames() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec,
      []);
  }

  getModulesEligibleForRemoval() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec,
      []);
  }

  setModulesOrder(module_ids) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec,
      null,
      [module_ids]);
  }

  getModulesOrder() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec,
      []);
  }

  updateModulesLoadable() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec,
      null,
      []);
  }

  setModulesDisabled(module_ids, disabled, is_user_action) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec,
      null,
      [module_ids, disabled, is_user_action]);
  }

  updateActionChipsVisibility() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec,
      null,
      []);
  }

  updateFooterVisibility() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec,
      null,
      []);
  }

  incrementComposeButtonShownCount() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec,
      null,
      []);
  }

  maybeTriggerAutomaticCustomizeChromePromo() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec,
      null,
      []);
  }

  recordContextMenuClick() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      new_tab_page.mojom.PageHandler_RecordContextMenuClick_ParamsSpec,
      null,
      []);
  }

  onOneGoogleBarRendered(time) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec,
      null,
      [time]);
  }

  onPromoRendered(time, log_url) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec,
      null,
      [time, log_url]);
  }

  onCustomizeDialogAction(action) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec,
      null,
      [action]);
  }

  onDoodleImageClicked(type, log_url) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec,
      null,
      [type, log_url]);
  }

  onDoodleImageRendered(type, time, log_url) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec,
      new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec,
      [type, time, log_url]);
  }

  onDoodleShared(channel, doodle_id, share_id) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec,
      null,
      [channel, doodle_id, share_id]);
  }

  onPromoLinkClicked() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec,
      null,
      []);
  }

  onAppRendered(time) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec,
      null,
      [time]);
  }

};

new_tab_page.mojom.PageHandler.getRemote = function() {
  let remote = new new_tab_page.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for SetMostVisitedSettings
new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.SetMostVisitedSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'shortcuts_type', packedOffset: 0, packedBitOffset: 0, type: ntp_tiles.mojom.TileTypeSpec, nullable: false },
        { name: 'shortcuts_visible', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetMostVisitedSettings
new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetMostVisitedSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetMostVisitedSettings_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'shortcuts_type', packedOffset: 0, packedBitOffset: 0, type: ntp_tiles.mojom.TileTypeSpec, nullable: false },
        { name: 'shortcuts_visible', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDoodle
new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetDoodle_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetDoodle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'doodle', packedOffset: 0, packedBitOffset: 0, type: new_tab_page.mojom.DoodleSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdatePromoData
new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.UpdatePromoData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BlocklistPromo
new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.BlocklistPromo_Params',
      packedSize: 16,
      fields: [
        { name: 'promo_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UndoBlocklistPromo
new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.UndoBlocklistPromo_Params',
      packedSize: 16,
      fields: [
        { name: 'promo_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDismissModule
new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnDismissModule_Params',
      packedSize: 16,
      fields: [
        { name: 'module_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnRestoreModule
new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnRestoreModule_Params',
      packedSize: 16,
      fields: [
        { name: 'module_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetModulesVisible
new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.SetModulesVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateDisabledModules
new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.UpdateDisabledModules_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnModulesLoadedWithData
new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnModulesLoadedWithData_Params',
      packedSize: 16,
      fields: [
        { name: 'module_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnModuleUsed
new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnModuleUsed_Params',
      packedSize: 16,
      fields: [
        { name: 'module_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetModulesIdNames
new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetModulesIdNames_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetModulesIdNames_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetModulesEligibleForRemoval
new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetModulesEligibleForRemoval_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetModulesEligibleForRemoval_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'module_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetModulesOrder
new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.SetModulesOrder_Params',
      packedSize: 16,
      fields: [
        { name: 'module_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetModulesOrder
new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetModulesOrder_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetModulesOrder_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'module_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateModulesLoadable
new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.UpdateModulesLoadable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetModulesDisabled
new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.SetModulesDisabled_Params',
      packedSize: 24,
      fields: [
        { name: 'module_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'disabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_user_action', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateActionChipsVisibility
new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.UpdateActionChipsVisibility_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateFooterVisibility
new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.UpdateFooterVisibility_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IncrementComposeButtonShownCount
new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.IncrementComposeButtonShownCount_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MaybeTriggerAutomaticCustomizeChromePromo
new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.MaybeTriggerAutomaticCustomizeChromePromo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordContextMenuClick
new_tab_page.mojom.PageHandler_RecordContextMenuClick_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.RecordContextMenuClick_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnOneGoogleBarRendered
new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnOneGoogleBarRendered_Params',
      packedSize: 16,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPromoRendered
new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnPromoRendered_Params',
      packedSize: 24,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'log_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnCustomizeDialogAction
new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnCustomizeDialogAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: new_tab_page.mojom.CustomizeDialogActionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDoodleImageClicked
new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnDoodleImageClicked_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: new_tab_page.mojom.DoodleImageTypeSpec, nullable: false },
        { name: 'log_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDoodleImageRendered
new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnDoodleImageRendered_Params',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: new_tab_page.mojom.DoodleImageTypeSpec, nullable: false },
        { name: 'time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'log_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnDoodleImageRendered_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'image_click_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'interaction_log_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'share_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDoodleShared
new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnDoodleShared_Params',
      packedSize: 32,
      fields: [
        { name: 'channel', packedOffset: 0, packedBitOffset: 0, type: new_tab_page.mojom.DoodleShareChannelSpec, nullable: false },
        { name: 'doodle_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'share_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPromoLinkClicked
new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnPromoLinkClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAppRendered
new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnAppRendered_Params',
      packedSize: 16,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
new_tab_page.mojom.PageHandlerPtr = new_tab_page.mojom.PageHandlerRemote;
new_tab_page.mojom.PageHandlerRequest = new_tab_page.mojom.PageHandlerPendingReceiver;


// Interface: Page
new_tab_page.mojom.Page = {};

new_tab_page.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'new_tab_page.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page.mojom.PagePendingReceiver,
      handle);
    this.$ = new new_tab_page.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setTheme(theme) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page.mojom.Page_SetTheme_ParamsSpec,
      null,
      [theme]);
  }

  setDisabledModules(all, ids) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec,
      null,
      [all, ids]);
  }

  setModulesLoadable() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec,
      null,
      []);
  }

  setActionChipsVisibility(visible) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec,
      null,
      [visible]);
  }

  setPromo(promo) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      new_tab_page.mojom.Page_SetPromo_ParamsSpec,
      null,
      [promo]);
  }

  showWebstoreToast() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec,
      null,
      []);
  }

  setWallpaperSearchButtonVisibility(visible) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec,
      null,
      [visible]);
  }

  footerVisibilityUpdated(visible) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec,
      null,
      [visible]);
  }

  connectToParentDocument(child_untrusted_document_remote) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec,
      null,
      [child_untrusted_document_remote]);
  }

};

new_tab_page.mojom.Page.getRemote = function() {
  let remote = new new_tab_page.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for SetTheme
new_tab_page.mojom.Page_SetTheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.SetTheme_Params',
      packedSize: 16,
      fields: [
        { name: 'theme', packedOffset: 0, packedBitOffset: 0, type: new_tab_page.mojom.ThemeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetDisabledModules
new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.SetDisabledModules_Params',
      packedSize: 24,
      fields: [
        { name: 'ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'all', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetModulesLoadable
new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.SetModulesLoadable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetActionChipsVisibility
new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.SetActionChipsVisibility_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPromo
new_tab_page.mojom.Page_SetPromo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.SetPromo_Params',
      packedSize: 16,
      fields: [
        { name: 'promo', packedOffset: 0, packedBitOffset: 0, type: new_tab_page.mojom.PromoSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowWebstoreToast
new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.ShowWebstoreToast_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetWallpaperSearchButtonVisibility
new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.SetWallpaperSearchButtonVisibility_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FooterVisibilityUpdated
new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.FooterVisibilityUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ConnectToParentDocument
new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.ConnectToParentDocument_Params',
      packedSize: 16,
      fields: [
        { name: 'child_untrusted_document_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
new_tab_page.mojom.PagePtr = new_tab_page.mojom.PageRemote;
new_tab_page.mojom.PageRequest = new_tab_page.mojom.PagePendingReceiver;

