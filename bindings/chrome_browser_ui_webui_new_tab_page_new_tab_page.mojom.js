// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/new_tab_page.mojom
// Module: new_tab_page.mojom

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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(new_tab_page.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(new_tab_page.mojom.PageHandlerSpec), null, false, 0, undefined),
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
             decoder.decodeStructInline(new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
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
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
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
        
        // Try Method 0: SetMostVisitedSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMostVisitedSettings (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetMostVisitedSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMostVisitedSettings (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetDoodle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDoodle (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: UpdatePromoData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdatePromoData (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: BlocklistPromo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BlocklistPromo (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: UndoBlocklistPromo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UndoBlocklistPromo (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnDismissModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDismissModule (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnRestoreModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRestoreModule (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetModulesVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetModulesVisible (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: UpdateDisabledModules
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateDisabledModules (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnModulesLoadedWithData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnModulesLoadedWithData (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnModuleUsed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnModuleUsed (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetModulesIdNames
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetModulesIdNames (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: GetModulesEligibleForRemoval
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetModulesEligibleForRemoval (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetModulesOrder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetModulesOrder (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: GetModulesOrder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetModulesOrder (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: UpdateModulesLoadable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateModulesLoadable (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: SetModulesDisabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetModulesDisabled (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: UpdateActionChipsVisibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateActionChipsVisibility (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: UpdateFooterVisibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateFooterVisibility (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: IncrementComposeButtonShownCount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IncrementComposeButtonShownCount (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: MaybeTriggerAutomaticCustomizeChromePromo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeTriggerAutomaticCustomizeChromePromo (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: RecordContextMenuClick
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_RecordContextMenuClick_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordContextMenuClick (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: OnOneGoogleBarRendered
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOneGoogleBarRendered (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: OnPromoRendered
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPromoRendered (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: OnCustomizeDialogAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCustomizeDialogAction (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: OnDoodleImageClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDoodleImageClicked (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: OnDoodleImageRendered
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDoodleImageRendered (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: OnDoodleShared
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDoodleShared (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: OnPromoLinkClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPromoLinkClicked (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: OnAppRendered
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppRendered (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
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
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMostVisitedSettings');
          const result = this.impl.setMostVisitedSettings(params.shortcuts_type, params.shortcuts_visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMostVisitedSettings');
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
          console.log('[GeneratedReceiver] Calling impl.getDoodle');
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
          console.log('[GeneratedReceiver] Calling impl.updatePromoData');
          const result = this.impl.updatePromoData();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.blocklistPromo');
          const result = this.impl.blocklistPromo(params.promo_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.undoBlocklistPromo');
          const result = this.impl.undoBlocklistPromo(params.promo_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDismissModule');
          const result = this.impl.onDismissModule(params.module_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRestoreModule');
          const result = this.impl.onRestoreModule(params.module_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setModulesVisible');
          const result = this.impl.setModulesVisible(params.visible);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateDisabledModules');
          const result = this.impl.updateDisabledModules();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onModulesLoadedWithData');
          const result = this.impl.onModulesLoadedWithData(params.module_ids);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onModuleUsed');
          const result = this.impl.onModuleUsed(params.module_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getModulesIdNames');
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
          console.log('[GeneratedReceiver] Calling impl.getModulesEligibleForRemoval');
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
          console.log('[GeneratedReceiver] Calling impl.setModulesOrder');
          const result = this.impl.setModulesOrder(params.module_ids);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getModulesOrder');
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
          console.log('[GeneratedReceiver] Calling impl.updateModulesLoadable');
          const result = this.impl.updateModulesLoadable();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setModulesDisabled');
          const result = this.impl.setModulesDisabled(params.module_ids, params.disabled, params.is_user_action);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateActionChipsVisibility');
          const result = this.impl.updateActionChipsVisibility();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateFooterVisibility');
          const result = this.impl.updateFooterVisibility();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.incrementComposeButtonShownCount');
          const result = this.impl.incrementComposeButtonShownCount();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maybeTriggerAutomaticCustomizeChromePromo');
          const result = this.impl.maybeTriggerAutomaticCustomizeChromePromo();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_RecordContextMenuClick_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordContextMenuClick');
          const result = this.impl.recordContextMenuClick();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOneGoogleBarRendered');
          const result = this.impl.onOneGoogleBarRendered(params.time);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPromoRendered');
          const result = this.impl.onPromoRendered(params.time, params.log_url);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCustomizeDialogAction');
          const result = this.impl.onCustomizeDialogAction(params.action);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDoodleImageClicked');
          const result = this.impl.onDoodleImageClicked(params.type, params.log_url);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDoodleImageRendered');
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
          console.log('[GeneratedReceiver] Calling impl.onDoodleShared');
          const result = this.impl.onDoodleShared(params.channel, params.doodle_id, params.share_id);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPromoLinkClicked');
          const result = this.impl.onPromoLinkClicked();
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAppRendered');
          const result = this.impl.onAppRendered(params.time);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
        
        // Try Method 0: SetTheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_SetTheme_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTheme (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetDisabledModules
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDisabledModules (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetModulesLoadable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetModulesLoadable (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetActionChipsVisibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetActionChipsVisibility (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetPromo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_SetPromo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPromo (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ShowWebstoreToast
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowWebstoreToast (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetWallpaperSearchButtonVisibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWallpaperSearchButtonVisibility (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: FooterVisibilityUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FooterVisibilityUpdated (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ConnectToParentDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToParentDocument (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_SetTheme_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTheme');
          const result = this.impl.setTheme(params.theme);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDisabledModules');
          const result = this.impl.setDisabledModules(params.all, params.ids);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setModulesLoadable');
          const result = this.impl.setModulesLoadable();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setActionChipsVisibility');
          const result = this.impl.setActionChipsVisibility(params.visible);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_SetPromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPromo');
          const result = this.impl.setPromo(params.promo);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showWebstoreToast');
          const result = this.impl.showWebstoreToast();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWallpaperSearchButtonVisibility');
          const result = this.impl.setWallpaperSearchButtonVisibility(params.visible);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.footerVisibilityUpdated');
          const result = this.impl.footerVisibilityUpdated(params.visible);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectToParentDocument');
          const result = this.impl.connectToParentDocument(params.child_untrusted_document_remote);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

new_tab_page.mojom.PageReceiver = new_tab_page.mojom.PageReceiver;

new_tab_page.mojom.PagePtr = new_tab_page.mojom.PageRemote;
new_tab_page.mojom.PageRequest = new_tab_page.mojom.PagePendingReceiver;

