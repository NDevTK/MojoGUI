// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/new_tab_page.mojom
// Module: new_tab_page.mojom

'use strict';

// Module namespace
var new_tab_page = new_tab_page || {};
new_tab_page.mojom = new_tab_page.mojom || {};
var components = components || {};
var ui = ui || {};
var skia = skia || {};
var ui = ui || {};
var url = url || {};

new_tab_page.mojom.NtpBackgroundImageSourceSpec = { $: mojo.internal.Enum() };
new_tab_page.mojom.DoodleImageTypeSpec = { $: mojo.internal.Enum() };
new_tab_page.mojom.DoodleShareChannelSpec = { $: mojo.internal.Enum() };
new_tab_page.mojom.CustomizeDialogActionSpec = { $: mojo.internal.Enum() };
new_tab_page.mojom.OptInStatusSpec = { $: mojo.internal.Enum() };
new_tab_page.mojom.PromoPartSpec = { $: {} };
new_tab_page.mojom.BackgroundImageSpec = { $: {} };
new_tab_page.mojom.ThemeSpec = { $: {} };
new_tab_page.mojom.ImageDoodleSpec = { $: {} };
new_tab_page.mojom.AllModeImageDoodleSpec = { $: {} };
new_tab_page.mojom.InteractiveDoodleSpec = { $: {} };
new_tab_page.mojom.DoodleSpec = { $: {} };
new_tab_page.mojom.PromoImagePartSpec = { $: {} };
new_tab_page.mojom.PromoLinkPartSpec = { $: {} };
new_tab_page.mojom.PromoTextPartSpec = { $: {} };
new_tab_page.mojom.PromoSpec = { $: {} };
new_tab_page.mojom.ModuleIdNameSpec = { $: {} };
new_tab_page.mojom.PageHandlerFactory = {};
new_tab_page.mojom.PageHandlerFactory.$interfaceName = 'new_tab_page.mojom.PageHandlerFactory';
new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler = {};
new_tab_page.mojom.PageHandler.$interfaceName = 'new_tab_page.mojom.PageHandler';
new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_RecordContextMenuClick_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec = { $: {} };
new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec = { $: {} };
new_tab_page.mojom.Page = {};
new_tab_page.mojom.Page.$interfaceName = 'new_tab_page.mojom.Page';
new_tab_page.mojom.Page_SetTheme_ParamsSpec = { $: {} };
new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec = { $: {} };
new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec = { $: {} };
new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec = { $: {} };
new_tab_page.mojom.Page_SetPromo_ParamsSpec = { $: {} };
new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec = { $: {} };
new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec = { $: {} };
new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec = { $: {} };
new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec = { $: {} };

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

// Union: PromoPart
mojo.internal.Union(
    new_tab_page.mojom.PromoPartSpec, 'new_tab_page.mojom.PromoPart', {
      'image': {
        'ordinal': 0,
        'type': new_tab_page.mojom.PromoImagePartSpec.$,
        'nullable': false,
      },
      'link': {
        'ordinal': 1,
        'type': new_tab_page.mojom.PromoLinkPartSpec.$,
        'nullable': false,
      },
      'text': {
        'ordinal': 2,
        'type': new_tab_page.mojom.PromoTextPartSpec.$,
        'nullable': false,
      },
    });

// Struct: BackgroundImage
mojo.internal.Struct(
    new_tab_page.mojom.BackgroundImageSpec, 'new_tab_page.mojom.BackgroundImage', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url_2x', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('attribution_url', 16, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('size', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('repeat_x', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('repeat_y', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('position_x', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('position_y', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('image_source', 64, 0, new_tab_page.mojom.NtpBackgroundImageSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: Theme
mojo.internal.Struct(
    new_tab_page.mojom.ThemeSpec, 'new_tab_page.mojom.Theme', [
      mojo.internal.StructField('text_color', 0, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('background_color', 8, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('logo_color', 16, 0, skia.mojom.SkColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('background_image_collection_id', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('background_image', 32, 0, new_tab_page.mojom.BackgroundImageSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('background_image_attribution_1', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('background_image_attribution_2', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('background_image_attribution_url', 56, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('most_visited', 64, 0, most_visited.mojom.MostVisitedThemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_baseline', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_gm3', 72, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_custom_background', 72, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('daily_refresh_enabled', 72, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_dark', 72, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: ImageDoodle
mojo.internal.Struct(
    new_tab_page.mojom.ImageDoodleSpec, 'new_tab_page.mojom.ImageDoodle', [
      mojo.internal.StructField('image_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('animation_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('background_color', 16, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_impression_log_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('animation_impression_log_url', 32, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('width', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: AllModeImageDoodle
mojo.internal.Struct(
    new_tab_page.mojom.AllModeImageDoodleSpec, 'new_tab_page.mojom.AllModeImageDoodle', [
      mojo.internal.StructField('light', 0, 0, new_tab_page.mojom.ImageDoodleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dark', 8, 0, new_tab_page.mojom.ImageDoodleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('on_click_url', 16, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('share_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: InteractiveDoodle
mojo.internal.Struct(
    new_tab_page.mojom.InteractiveDoodleSpec, 'new_tab_page.mojom.InteractiveDoodle', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('width', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Doodle
mojo.internal.Struct(
    new_tab_page.mojom.DoodleSpec, 'new_tab_page.mojom.Doodle', [
      mojo.internal.StructField('image', 0, 0, new_tab_page.mojom.AllModeImageDoodleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('interactive', 8, 0, new_tab_page.mojom.InteractiveDoodleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PromoImagePart
mojo.internal.Struct(
    new_tab_page.mojom.PromoImagePartSpec, 'new_tab_page.mojom.PromoImagePart', [
      mojo.internal.StructField('image_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PromoLinkPart
mojo.internal.Struct(
    new_tab_page.mojom.PromoLinkPartSpec, 'new_tab_page.mojom.PromoLinkPart', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PromoTextPart
mojo.internal.Struct(
    new_tab_page.mojom.PromoTextPartSpec, 'new_tab_page.mojom.PromoTextPart', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Promo
mojo.internal.Struct(
    new_tab_page.mojom.PromoSpec, 'new_tab_page.mojom.Promo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('log_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('middle_slot_parts', 16, 0, mojo.internal.Array(new_tab_page.mojom.PromoPartSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ModuleIdName
mojo.internal.Struct(
    new_tab_page.mojom.ModuleIdNameSpec, 'new_tab_page.mojom.ModuleIdName', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(new_tab_page.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(new_tab_page.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [page, handler],
      false);
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

new_tab_page.mojom.PageHandlerFactoryPtr = new_tab_page.mojom.PageHandlerFactoryRemote;
new_tab_page.mojom.PageHandlerFactoryRequest = new_tab_page.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec, 'new_tab_page.mojom.PageHandler_SetMostVisitedSettings_Params', [
      mojo.internal.StructField('shortcuts_type', 0, 0, ntp_tiles.mojom.TileTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shortcuts_visible', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec, 'new_tab_page.mojom.PageHandler_GetMostVisitedSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParams', [
      mojo.internal.StructField('shortcuts_type', 0, 0, ntp_tiles.mojom.TileTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shortcuts_visible', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec, 'new_tab_page.mojom.PageHandler_GetDoodle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_GetDoodle_ResponseParams', [
      mojo.internal.StructField('doodle', 0, 0, new_tab_page.mojom.DoodleSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec, 'new_tab_page.mojom.PageHandler_UpdatePromoData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec, 'new_tab_page.mojom.PageHandler_BlocklistPromo_Params', [
      mojo.internal.StructField('promo_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec, 'new_tab_page.mojom.PageHandler_UndoBlocklistPromo_Params', [
      mojo.internal.StructField('promo_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnDismissModule_Params', [
      mojo.internal.StructField('module_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnRestoreModule_Params', [
      mojo.internal.StructField('module_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec, 'new_tab_page.mojom.PageHandler_SetModulesVisible_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec, 'new_tab_page.mojom.PageHandler_UpdateDisabledModules_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_Params', [
      mojo.internal.StructField('module_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnModuleUsed_Params', [
      mojo.internal.StructField('module_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesIdNames_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(new_tab_page.mojom.ModuleIdNameSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParams', [
      mojo.internal.StructField('module_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec, 'new_tab_page.mojom.PageHandler_SetModulesOrder_Params', [
      mojo.internal.StructField('module_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesOrder_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParams', [
      mojo.internal.StructField('module_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec, 'new_tab_page.mojom.PageHandler_UpdateModulesLoadable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec, 'new_tab_page.mojom.PageHandler_SetModulesDisabled_Params', [
      mojo.internal.StructField('module_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('disabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_user_action', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec, 'new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec, 'new_tab_page.mojom.PageHandler_UpdateFooterVisibility_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec, 'new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec, 'new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_RecordContextMenuClick_ParamsSpec, 'new_tab_page.mojom.PageHandler_RecordContextMenuClick_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_Params', [
      mojo.internal.StructField('time', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnPromoRendered_Params', [
      mojo.internal.StructField('time', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('log_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_Params', [
      mojo.internal.StructField('action', 0, 0, new_tab_page.mojom.CustomizeDialogActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnDoodleImageClicked_Params', [
      mojo.internal.StructField('type', 0, 0, new_tab_page.mojom.DoodleImageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('log_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnDoodleImageRendered_Params', [
      mojo.internal.StructField('type', 0, 0, new_tab_page.mojom.DoodleImageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('time', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('log_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParams', [
      mojo.internal.StructField('image_click_params', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('interaction_log_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('share_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnDoodleShared_Params', [
      mojo.internal.StructField('channel', 0, 0, new_tab_page.mojom.DoodleShareChannelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('doodle_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('share_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnPromoLinkClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnAppRendered_Params', [
      mojo.internal.StructField('time', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [shortcuts_type, shortcuts_visible],
      false);
  }

  getMostVisitedSettings() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec,
      [],
      false);
  }

  getDoodle() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec,
      [],
      false);
  }

  updatePromoData() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec,
      null,
      [],
      false);
  }

  blocklistPromo(promo_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec,
      null,
      [promo_id],
      false);
  }

  undoBlocklistPromo(promo_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec,
      null,
      [promo_id],
      false);
  }

  onDismissModule(module_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec,
      null,
      [module_id],
      false);
  }

  onRestoreModule(module_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec,
      null,
      [module_id],
      false);
  }

  setModulesVisible(visible) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  updateDisabledModules() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec,
      null,
      [],
      false);
  }

  onModulesLoadedWithData(module_ids) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec,
      null,
      [module_ids],
      false);
  }

  onModuleUsed(module_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec,
      null,
      [module_id],
      false);
  }

  getModulesIdNames() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec,
      [],
      false);
  }

  getModulesEligibleForRemoval() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec,
      [],
      false);
  }

  setModulesOrder(module_ids) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec,
      null,
      [module_ids],
      false);
  }

  getModulesOrder() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec,
      [],
      false);
  }

  updateModulesLoadable() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec,
      null,
      [],
      false);
  }

  setModulesDisabled(module_ids, disabled, is_user_action) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec,
      null,
      [module_ids, disabled, is_user_action],
      false);
  }

  updateActionChipsVisibility() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec,
      null,
      [],
      false);
  }

  updateFooterVisibility() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec,
      null,
      [],
      false);
  }

  incrementComposeButtonShownCount() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec,
      null,
      [],
      false);
  }

  maybeTriggerAutomaticCustomizeChromePromo() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec,
      null,
      [],
      false);
  }

  recordContextMenuClick() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      new_tab_page.mojom.PageHandler_RecordContextMenuClick_ParamsSpec,
      null,
      [],
      false);
  }

  onOneGoogleBarRendered(time) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec,
      null,
      [time],
      false);
  }

  onPromoRendered(time, log_url) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec,
      null,
      [time, log_url],
      false);
  }

  onCustomizeDialogAction(action) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec,
      null,
      [action],
      false);
  }

  onDoodleImageClicked(type, log_url) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec,
      null,
      [type, log_url],
      false);
  }

  onDoodleImageRendered(type, time, log_url) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec,
      new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec,
      [type, time, log_url],
      false);
  }

  onDoodleShared(channel, doodle_id, share_id) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec,
      null,
      [channel, doodle_id, share_id],
      false);
  }

  onPromoLinkClicked() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onAppRendered(time) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec,
      null,
      [time],
      false);
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

new_tab_page.mojom.PageHandlerPtr = new_tab_page.mojom.PageHandlerRemote;
new_tab_page.mojom.PageHandlerRequest = new_tab_page.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    new_tab_page.mojom.Page_SetTheme_ParamsSpec, 'new_tab_page.mojom.Page_SetTheme_Params', [
      mojo.internal.StructField('theme', 0, 0, new_tab_page.mojom.ThemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec, 'new_tab_page.mojom.Page_SetDisabledModules_Params', [
      mojo.internal.StructField('ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('all', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec, 'new_tab_page.mojom.Page_SetModulesLoadable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec, 'new_tab_page.mojom.Page_SetActionChipsVisibility_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.Page_SetPromo_ParamsSpec, 'new_tab_page.mojom.Page_SetPromo_Params', [
      mojo.internal.StructField('promo', 0, 0, new_tab_page.mojom.PromoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec, 'new_tab_page.mojom.Page_ShowWebstoreToast_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec, 'new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec, 'new_tab_page.mojom.Page_FooterVisibilityUpdated_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec, 'new_tab_page.mojom.Page_ConnectToParentDocument_Params', [
      mojo.internal.StructField('child_untrusted_document_remote', 0, 0, mojo.internal.InterfaceProxy(new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [theme],
      false);
  }

  setDisabledModules(all, ids) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec,
      null,
      [all, ids],
      false);
  }

  setModulesLoadable() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec,
      null,
      [],
      false);
  }

  setActionChipsVisibility(visible) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec,
      null,
      [visible],
      false);
  }

  setPromo(promo) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      new_tab_page.mojom.Page_SetPromo_ParamsSpec,
      null,
      [promo],
      false);
  }

  showWebstoreToast() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec,
      null,
      [],
      false);
  }

  setWallpaperSearchButtonVisibility(visible) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec,
      null,
      [visible],
      false);
  }

  footerVisibilityUpdated(visible) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec,
      null,
      [visible],
      false);
  }

  connectToParentDocument(child_untrusted_document_remote) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec,
      null,
      [child_untrusted_document_remote],
      false);
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

new_tab_page.mojom.PagePtr = new_tab_page.mojom.PageRemote;
new_tab_page.mojom.PageRequest = new_tab_page.mojom.PagePendingReceiver;

