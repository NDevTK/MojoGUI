// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/new_tab_page.mojom
// Module: new_tab_page.mojom

// Module namespace
var new_tab_page = new_tab_page || {};
new_tab_page.mojom = new_tab_page.mojom || {};
var ntp_tiles = ntp_tiles || {};
var skia = skia || {};
var most_visited = most_visited || {};
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
  createPageHandler(page, handler) {
    return this.$.createPageHandler(page, handler);
  }
};

new_tab_page.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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

new_tab_page.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

new_tab_page.mojom.PageHandlerFactoryReceiver = new_tab_page.mojom.PageHandlerFactoryReceiver;

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
  setMostVisitedSettings(shortcuts_type, shortcuts_visible) {
    return this.$.setMostVisitedSettings(shortcuts_type, shortcuts_visible);
  }
  getMostVisitedSettings() {
    return this.$.getMostVisitedSettings();
  }
  getDoodle() {
    return this.$.getDoodle();
  }
  updatePromoData() {
    return this.$.updatePromoData();
  }
  blocklistPromo(promo_id) {
    return this.$.blocklistPromo(promo_id);
  }
  undoBlocklistPromo(promo_id) {
    return this.$.undoBlocklistPromo(promo_id);
  }
  onDismissModule(module_id) {
    return this.$.onDismissModule(module_id);
  }
  onRestoreModule(module_id) {
    return this.$.onRestoreModule(module_id);
  }
  setModulesVisible(visible) {
    return this.$.setModulesVisible(visible);
  }
  updateDisabledModules() {
    return this.$.updateDisabledModules();
  }
  onModulesLoadedWithData(module_ids) {
    return this.$.onModulesLoadedWithData(module_ids);
  }
  onModuleUsed(module_id) {
    return this.$.onModuleUsed(module_id);
  }
  getModulesIdNames() {
    return this.$.getModulesIdNames();
  }
  getModulesEligibleForRemoval() {
    return this.$.getModulesEligibleForRemoval();
  }
  setModulesOrder(module_ids) {
    return this.$.setModulesOrder(module_ids);
  }
  getModulesOrder() {
    return this.$.getModulesOrder();
  }
  updateModulesLoadable() {
    return this.$.updateModulesLoadable();
  }
  setModulesDisabled(module_ids, disabled, is_user_action) {
    return this.$.setModulesDisabled(module_ids, disabled, is_user_action);
  }
  updateActionChipsVisibility() {
    return this.$.updateActionChipsVisibility();
  }
  updateFooterVisibility() {
    return this.$.updateFooterVisibility();
  }
  incrementComposeButtonShownCount() {
    return this.$.incrementComposeButtonShownCount();
  }
  maybeTriggerAutomaticCustomizeChromePromo() {
    return this.$.maybeTriggerAutomaticCustomizeChromePromo();
  }
  recordContextMenuClick() {
    return this.$.recordContextMenuClick();
  }
  onOneGoogleBarRendered(time) {
    return this.$.onOneGoogleBarRendered(time);
  }
  onPromoRendered(time, log_url) {
    return this.$.onPromoRendered(time, log_url);
  }
  onCustomizeDialogAction(action) {
    return this.$.onCustomizeDialogAction(action);
  }
  onDoodleImageClicked(type, log_url) {
    return this.$.onDoodleImageClicked(type, log_url);
  }
  onDoodleImageRendered(type, time, log_url) {
    return this.$.onDoodleImageRendered(type, time, log_url);
  }
  onDoodleShared(channel, doodle_id, share_id) {
    return this.$.onDoodleShared(channel, doodle_id, share_id);
  }
  onPromoLinkClicked() {
    return this.$.onPromoLinkClicked();
  }
  onAppRendered(time) {
    return this.$.onAppRendered(time);
  }
};

new_tab_page.mojom.PageHandlerRemoteCallHandler = class {
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
      { explicit: null },
    ]);
  }

  setMostVisitedSettings(shortcuts_type, shortcuts_visible) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec,
      null,
      [shortcuts_type, shortcuts_visible],
      false);
  }

  getMostVisitedSettings() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec,
      [],
      false);
  }

  getDoodle() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec,
      [],
      false);
  }

  updatePromoData() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec,
      null,
      [],
      false);
  }

  blocklistPromo(promo_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec,
      null,
      [promo_id],
      false);
  }

  undoBlocklistPromo(promo_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec,
      null,
      [promo_id],
      false);
  }

  onDismissModule(module_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec,
      null,
      [module_id],
      false);
  }

  onRestoreModule(module_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec,
      null,
      [module_id],
      false);
  }

  setModulesVisible(visible) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  updateDisabledModules() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec,
      null,
      [],
      false);
  }

  onModulesLoadedWithData(module_ids) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec,
      null,
      [module_ids],
      false);
  }

  onModuleUsed(module_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec,
      null,
      [module_id],
      false);
  }

  getModulesIdNames() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec,
      [],
      false);
  }

  getModulesEligibleForRemoval() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec,
      [],
      false);
  }

  setModulesOrder(module_ids) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec,
      null,
      [module_ids],
      false);
  }

  getModulesOrder() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec,
      [],
      false);
  }

  updateModulesLoadable() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec,
      null,
      [],
      false);
  }

  setModulesDisabled(module_ids, disabled, is_user_action) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec,
      null,
      [module_ids, disabled, is_user_action],
      false);
  }

  updateActionChipsVisibility() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec,
      null,
      [],
      false);
  }

  updateFooterVisibility() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec,
      null,
      [],
      false);
  }

  incrementComposeButtonShownCount() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec,
      null,
      [],
      false);
  }

  maybeTriggerAutomaticCustomizeChromePromo() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec,
      null,
      [],
      false);
  }

  recordContextMenuClick() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      new_tab_page.mojom.PageHandler_RecordContextMenuClick_ParamsSpec,
      null,
      [],
      false);
  }

  onOneGoogleBarRendered(time) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec,
      null,
      [time],
      false);
  }

  onPromoRendered(time, log_url) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec,
      null,
      [time, log_url],
      false);
  }

  onCustomizeDialogAction(action) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec,
      null,
      [action],
      false);
  }

  onDoodleImageClicked(type, log_url) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec,
      null,
      [type, log_url],
      false);
  }

  onDoodleImageRendered(type, time, log_url) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec,
      new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec,
      [type, time, log_url],
      false);
  }

  onDoodleShared(channel, doodle_id, share_id) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec,
      null,
      [channel, doodle_id, share_id],
      false);
  }

  onPromoLinkClicked() {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onAppRendered(time) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
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

new_tab_page.mojom.PageHandlerReceiver = class {
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
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_RecordContextMenuClick_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec);
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec.$.structSpec);
          const result = this.impl.setMostVisitedSettings(params.shortcuts_type, params.shortcuts_visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec.$.structSpec);
          const result = this.impl.getMostVisitedSettings();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec.$.structSpec);
          const result = this.impl.getDoodle();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec.$.structSpec);
          const result = this.impl.updatePromoData();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec.$.structSpec);
          const result = this.impl.blocklistPromo(params.promo_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec.$.structSpec);
          const result = this.impl.undoBlocklistPromo(params.promo_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec.$.structSpec);
          const result = this.impl.onDismissModule(params.module_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec.$.structSpec);
          const result = this.impl.onRestoreModule(params.module_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec.$.structSpec);
          const result = this.impl.setModulesVisible(params.visible);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec.$.structSpec);
          const result = this.impl.updateDisabledModules();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec.$.structSpec);
          const result = this.impl.onModulesLoadedWithData(params.module_ids);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec.$.structSpec);
          const result = this.impl.onModuleUsed(params.module_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec.$.structSpec);
          const result = this.impl.getModulesIdNames();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec.$.structSpec);
          const result = this.impl.getModulesEligibleForRemoval();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec.$.structSpec);
          const result = this.impl.setModulesOrder(params.module_ids);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec.$.structSpec);
          const result = this.impl.getModulesOrder();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec.$.structSpec);
          const result = this.impl.updateModulesLoadable();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec.$.structSpec);
          const result = this.impl.setModulesDisabled(params.module_ids, params.disabled, params.is_user_action);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec.$.structSpec);
          const result = this.impl.updateActionChipsVisibility();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec.$.structSpec);
          const result = this.impl.updateFooterVisibility();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec.$.structSpec);
          const result = this.impl.incrementComposeButtonShownCount();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec.$.structSpec);
          const result = this.impl.maybeTriggerAutomaticCustomizeChromePromo();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_RecordContextMenuClick_ParamsSpec.$.structSpec);
          const result = this.impl.recordContextMenuClick();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec.$.structSpec);
          const result = this.impl.onOneGoogleBarRendered(params.time);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec.$.structSpec);
          const result = this.impl.onPromoRendered(params.time, params.log_url);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec.$.structSpec);
          const result = this.impl.onCustomizeDialogAction(params.action);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec.$.structSpec);
          const result = this.impl.onDoodleImageClicked(params.type, params.log_url);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec.$.structSpec);
          const result = this.impl.onDoodleImageRendered(params.type, params.time, params.log_url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec.$.structSpec);
          const result = this.impl.onDoodleShared(params.channel, params.doodle_id, params.share_id);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec.$.structSpec);
          const result = this.impl.onPromoLinkClicked();
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec.$.structSpec);
          const result = this.impl.onAppRendered(params.time);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

new_tab_page.mojom.PageHandlerReceiver = new_tab_page.mojom.PageHandlerReceiver;

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
  setTheme(theme) {
    return this.$.setTheme(theme);
  }
  setDisabledModules(all, ids) {
    return this.$.setDisabledModules(all, ids);
  }
  setModulesLoadable() {
    return this.$.setModulesLoadable();
  }
  setActionChipsVisibility(visible) {
    return this.$.setActionChipsVisibility(visible);
  }
  setPromo(promo) {
    return this.$.setPromo(promo);
  }
  showWebstoreToast() {
    return this.$.showWebstoreToast();
  }
  setWallpaperSearchButtonVisibility(visible) {
    return this.$.setWallpaperSearchButtonVisibility(visible);
  }
  footerVisibilityUpdated(visible) {
    return this.$.footerVisibilityUpdated(visible);
  }
  connectToParentDocument(child_untrusted_document_remote) {
    return this.$.connectToParentDocument(child_untrusted_document_remote);
  }
};

new_tab_page.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
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

  setTheme(theme) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      new_tab_page.mojom.Page_SetTheme_ParamsSpec,
      null,
      [theme],
      false);
  }

  setDisabledModules(all, ids) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec,
      null,
      [all, ids],
      false);
  }

  setModulesLoadable() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec,
      null,
      [],
      false);
  }

  setActionChipsVisibility(visible) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec,
      null,
      [visible],
      false);
  }

  setPromo(promo) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      new_tab_page.mojom.Page_SetPromo_ParamsSpec,
      null,
      [promo],
      false);
  }

  showWebstoreToast() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec,
      null,
      [],
      false);
  }

  setWallpaperSearchButtonVisibility(visible) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec,
      null,
      [visible],
      false);
  }

  footerVisibilityUpdated(visible) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec,
      null,
      [visible],
      false);
  }

  connectToParentDocument(child_untrusted_document_remote) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
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

new_tab_page.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_SetTheme_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_SetPromo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_SetTheme_ParamsSpec.$.structSpec);
          const result = this.impl.setTheme(params.theme);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec.$.structSpec);
          const result = this.impl.setDisabledModules(params.all, params.ids);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec.$.structSpec);
          const result = this.impl.setModulesLoadable();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec.$.structSpec);
          const result = this.impl.setActionChipsVisibility(params.visible);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_SetPromo_ParamsSpec.$.structSpec);
          const result = this.impl.setPromo(params.promo);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec.$.structSpec);
          const result = this.impl.showWebstoreToast();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec.$.structSpec);
          const result = this.impl.setWallpaperSearchButtonVisibility(params.visible);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.footerVisibilityUpdated(params.visible);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec.$.structSpec);
          const result = this.impl.connectToParentDocument(params.child_untrusted_document_remote);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

new_tab_page.mojom.PageReceiver = new_tab_page.mojom.PageReceiver;

new_tab_page.mojom.PagePtr = new_tab_page.mojom.PageRemote;
new_tab_page.mojom.PageRequest = new_tab_page.mojom.PagePendingReceiver;

