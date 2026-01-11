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

         const p = window.mojoVersion.split('.');
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.new_tab_page = mojo.internal.bindings.new_tab_page || {};
mojo.internal.bindings.new_tab_page.mojom = mojo.internal.bindings.new_tab_page.mojom || {};
mojo.internal.bindings.ntp_tiles = mojo.internal.bindings.ntp_tiles || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.most_visited = mojo.internal.bindings.most_visited || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.new_tab_page.mojom.NtpBackgroundImageSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.new_tab_page.mojom.DoodleImageTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.new_tab_page.mojom.DoodleShareChannelSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.new_tab_page.mojom.CustomizeDialogActionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.new_tab_page.mojom.OptInStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.new_tab_page.mojom.PromoPartSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.BackgroundImageSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.ThemeSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.ImageDoodleSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.AllModeImageDoodleSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.InteractiveDoodleSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.DoodleSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PromoImagePartSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PromoLinkPartSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PromoTextPartSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PromoSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.ModuleIdNameSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory.$interfaceName = 'new_tab_page.mojom.PageHandlerFactory';
mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler.$interfaceName = 'new_tab_page.mojom.PageHandler';
mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_RecordContextMenuClick_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.Page = {};
mojo.internal.bindings.new_tab_page.mojom.Page.$interfaceName = 'new_tab_page.mojom.Page';
mojo.internal.bindings.new_tab_page.mojom.Page_SetTheme_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.Page_SetPromo_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec = { $: {} };

// Enum: NtpBackgroundImageSource
mojo.internal.bindings.new_tab_page.mojom.NtpBackgroundImageSource = {
  kNoImage: 0,
  kFirstPartyThemeWithoutDailyRefresh: 1,
  kFirstPartyThemeWithDailyRefresh: 2,
  kThirdPartyTheme: 3,
  kUploadedImage: 4,
  kWallpaperSearch: 5,
  kWallpaperSearchInspiration: 6,
};

// Enum: DoodleImageType
mojo.internal.bindings.new_tab_page.mojom.DoodleImageType = {
  kAnimation: 0,
  kCta: 1,
  kStatic: 2,
};

// Enum: DoodleShareChannel
mojo.internal.bindings.new_tab_page.mojom.DoodleShareChannel = {
  kFacebook: 0,
  kTwitter: 1,
  kEmail: 2,
  kLinkCopy: 3,
};

// Enum: CustomizeDialogAction
mojo.internal.bindings.new_tab_page.mojom.CustomizeDialogAction = {
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
mojo.internal.bindings.new_tab_page.mojom.OptInStatus = {
  kExplicitOptIn: 0,
  kImplicitOptIn: 1,
  kOptOut: 2,
};

// Union: PromoPart
mojo.internal.Union(
    mojo.internal.bindings.new_tab_page.mojom.PromoPartSpec, 'new_tab_page.mojom.PromoPart', {
      'arg_image': {
        'ordinal': 0,
        'type': mojo.internal.bindings.new_tab_page.mojom.PromoImagePartSpec.$,
        'nullable': false,
      },
      'arg_link': {
        'ordinal': 1,
        'type': mojo.internal.bindings.new_tab_page.mojom.PromoLinkPartSpec.$,
        'nullable': false,
      },
      'arg_text': {
        'ordinal': 2,
        'type': mojo.internal.bindings.new_tab_page.mojom.PromoTextPartSpec.$,
        'nullable': false,
      },
    });

// Struct: BackgroundImage
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.BackgroundImageSpec, 'new_tab_page.mojom.BackgroundImage', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url_2x', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_attribution_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_size', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_repeat_x', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_repeat_y', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_position_x', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_position_y', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_image_source', 64, 0, mojo.internal.bindings.new_tab_page.mojom.NtpBackgroundImageSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: Theme
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.ThemeSpec, 'new_tab_page.mojom.Theme', [
      mojo.internal.StructField('arg_text_color', 0, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_background_color', 8, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_logo_color', 16, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_background_image_collection_id', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_background_image', 32, 0, mojo.internal.bindings.new_tab_page.mojom.BackgroundImageSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_background_image_attribution_1', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_background_image_attribution_2', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_background_image_attribution_url', 56, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_most_visited', 64, 0, mojo.internal.bindings.most_visited.mojom.MostVisitedThemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_baseline', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_gm3', 72, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_custom_background', 72, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_daily_refresh_enabled', 72, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_dark', 72, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: ImageDoodle
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.ImageDoodleSpec, 'new_tab_page.mojom.ImageDoodle', [
      mojo.internal.StructField('arg_image_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_animation_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_background_color', 16, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_impression_log_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_animation_impression_log_url', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_width', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: AllModeImageDoodle
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.AllModeImageDoodleSpec, 'new_tab_page.mojom.AllModeImageDoodle', [
      mojo.internal.StructField('arg_light', 0, 0, mojo.internal.bindings.new_tab_page.mojom.ImageDoodleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dark', 8, 0, mojo.internal.bindings.new_tab_page.mojom.ImageDoodleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_on_click_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_share_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: InteractiveDoodle
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.InteractiveDoodleSpec, 'new_tab_page.mojom.InteractiveDoodle', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_width', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Doodle
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.DoodleSpec, 'new_tab_page.mojom.Doodle', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.bindings.new_tab_page.mojom.AllModeImageDoodleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_interactive', 8, 0, mojo.internal.bindings.new_tab_page.mojom.InteractiveDoodleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_description', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PromoImagePart
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PromoImagePartSpec, 'new_tab_page.mojom.PromoImagePart', [
      mojo.internal.StructField('arg_image_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_target', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PromoLinkPart
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PromoLinkPartSpec, 'new_tab_page.mojom.PromoLinkPart', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PromoTextPart
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PromoTextPartSpec, 'new_tab_page.mojom.PromoTextPart', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Promo
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PromoSpec, 'new_tab_page.mojom.Promo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_log_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_middle_slot_parts', 16, 0, mojo.internal.Array(mojo.internal.bindings.new_tab_page.mojom.PromoPartSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ModuleIdName
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.ModuleIdNameSpec, 'new_tab_page.mojom.ModuleIdName', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.new_tab_page.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.new_tab_page.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'new_tab_page.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(arg_page, arg_handler) {
    return this.$.createPageHandler(arg_page, arg_handler);
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.arg_page, params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryReceiver = mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryReceiver;

mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryPtr = mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryRemote;
mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryRequest = mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec, 'new_tab_page.mojom.PageHandler_SetMostVisitedSettings_Params', [
      mojo.internal.StructField('arg_shortcuts_type', 0, 0, mojo.internal.bindings.ntp_tiles.mojom.TileTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_shortcuts_visible', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec, 'new_tab_page.mojom.PageHandler_GetMostVisitedSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParams', [
      mojo.internal.StructField('arg_shortcuts_type', 0, 0, mojo.internal.bindings.ntp_tiles.mojom.TileTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_shortcuts_visible', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec, 'new_tab_page.mojom.PageHandler_GetDoodle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_GetDoodle_ResponseParams', [
      mojo.internal.StructField('arg_doodle', 0, 0, mojo.internal.bindings.new_tab_page.mojom.DoodleSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec, 'new_tab_page.mojom.PageHandler_UpdatePromoData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec, 'new_tab_page.mojom.PageHandler_BlocklistPromo_Params', [
      mojo.internal.StructField('arg_promo_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec, 'new_tab_page.mojom.PageHandler_UndoBlocklistPromo_Params', [
      mojo.internal.StructField('arg_promo_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnDismissModule_Params', [
      mojo.internal.StructField('arg_module_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnRestoreModule_Params', [
      mojo.internal.StructField('arg_module_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec, 'new_tab_page.mojom.PageHandler_SetModulesVisible_Params', [
      mojo.internal.StructField('arg_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec, 'new_tab_page.mojom.PageHandler_UpdateDisabledModules_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_Params', [
      mojo.internal.StructField('arg_module_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnModuleUsed_Params', [
      mojo.internal.StructField('arg_module_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesIdNames_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParams', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.bindings.new_tab_page.mojom.ModuleIdNameSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParams', [
      mojo.internal.StructField('arg_module_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec, 'new_tab_page.mojom.PageHandler_SetModulesOrder_Params', [
      mojo.internal.StructField('arg_module_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesOrder_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParams', [
      mojo.internal.StructField('arg_module_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec, 'new_tab_page.mojom.PageHandler_UpdateModulesLoadable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec, 'new_tab_page.mojom.PageHandler_SetModulesDisabled_Params', [
      mojo.internal.StructField('arg_module_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_disabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_user_action', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec, 'new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec, 'new_tab_page.mojom.PageHandler_UpdateFooterVisibility_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec, 'new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec, 'new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_RecordContextMenuClick_ParamsSpec, 'new_tab_page.mojom.PageHandler_RecordContextMenuClick_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_Params', [
      mojo.internal.StructField('arg_time', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnPromoRendered_Params', [
      mojo.internal.StructField('arg_time', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_log_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_Params', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.bindings.new_tab_page.mojom.CustomizeDialogActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnDoodleImageClicked_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.new_tab_page.mojom.DoodleImageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_log_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnDoodleImageRendered_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.new_tab_page.mojom.DoodleImageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_time', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_log_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParams', [
      mojo.internal.StructField('arg_image_click_params', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_interaction_log_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_share_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnDoodleShared_Params', [
      mojo.internal.StructField('arg_channel', 0, 0, mojo.internal.bindings.new_tab_page.mojom.DoodleShareChannelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_doodle_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_share_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnPromoLinkClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnAppRendered_Params', [
      mojo.internal.StructField('arg_time', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.new_tab_page.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'new_tab_page.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.new_tab_page.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.new_tab_page.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setMostVisitedSettings(arg_shortcuts_type, arg_shortcuts_visible) {
    return this.$.setMostVisitedSettings(arg_shortcuts_type, arg_shortcuts_visible);
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
  blocklistPromo(arg_promo_id) {
    return this.$.blocklistPromo(arg_promo_id);
  }
  undoBlocklistPromo(arg_promo_id) {
    return this.$.undoBlocklistPromo(arg_promo_id);
  }
  onDismissModule(arg_module_id) {
    return this.$.onDismissModule(arg_module_id);
  }
  onRestoreModule(arg_module_id) {
    return this.$.onRestoreModule(arg_module_id);
  }
  setModulesVisible(arg_visible) {
    return this.$.setModulesVisible(arg_visible);
  }
  updateDisabledModules() {
    return this.$.updateDisabledModules();
  }
  onModulesLoadedWithData(arg_module_ids) {
    return this.$.onModulesLoadedWithData(arg_module_ids);
  }
  onModuleUsed(arg_module_id) {
    return this.$.onModuleUsed(arg_module_id);
  }
  getModulesIdNames() {
    return this.$.getModulesIdNames();
  }
  getModulesEligibleForRemoval() {
    return this.$.getModulesEligibleForRemoval();
  }
  setModulesOrder(arg_module_ids) {
    return this.$.setModulesOrder(arg_module_ids);
  }
  getModulesOrder() {
    return this.$.getModulesOrder();
  }
  updateModulesLoadable() {
    return this.$.updateModulesLoadable();
  }
  setModulesDisabled(arg_module_ids, arg_disabled, arg_is_user_action) {
    return this.$.setModulesDisabled(arg_module_ids, arg_disabled, arg_is_user_action);
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
  onOneGoogleBarRendered(arg_time) {
    return this.$.onOneGoogleBarRendered(arg_time);
  }
  onPromoRendered(arg_time, arg_log_url) {
    return this.$.onPromoRendered(arg_time, arg_log_url);
  }
  onCustomizeDialogAction(arg_action) {
    return this.$.onCustomizeDialogAction(arg_action);
  }
  onDoodleImageClicked(arg_type, arg_log_url) {
    return this.$.onDoodleImageClicked(arg_type, arg_log_url);
  }
  onDoodleImageRendered(arg_type, arg_time, arg_log_url) {
    return this.$.onDoodleImageRendered(arg_type, arg_time, arg_log_url);
  }
  onDoodleShared(arg_channel, arg_doodle_id, arg_share_id) {
    return this.$.onDoodleShared(arg_channel, arg_doodle_id, arg_share_id);
  }
  onPromoLinkClicked() {
    return this.$.onPromoLinkClicked();
  }
  onAppRendered(arg_time) {
    return this.$.onAppRendered(arg_time);
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerRemoteCallHandler = class {
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

  setMostVisitedSettings(arg_shortcuts_type, arg_shortcuts_visible) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec,
      null,
      [arg_shortcuts_type, arg_shortcuts_visible],
      false);
  }

  getMostVisitedSettings() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec,
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec,
      [],
      false);
  }

  getDoodle() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec,
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec,
      [],
      false);
  }

  updatePromoData() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec,
      null,
      [],
      false);
  }

  blocklistPromo(arg_promo_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec,
      null,
      [arg_promo_id],
      false);
  }

  undoBlocklistPromo(arg_promo_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec,
      null,
      [arg_promo_id],
      false);
  }

  onDismissModule(arg_module_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec,
      null,
      [arg_module_id],
      false);
  }

  onRestoreModule(arg_module_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec,
      null,
      [arg_module_id],
      false);
  }

  setModulesVisible(arg_visible) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec,
      null,
      [arg_visible],
      false);
  }

  updateDisabledModules() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec,
      null,
      [],
      false);
  }

  onModulesLoadedWithData(arg_module_ids) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec,
      null,
      [arg_module_ids],
      false);
  }

  onModuleUsed(arg_module_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec,
      null,
      [arg_module_id],
      false);
  }

  getModulesIdNames() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec,
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec,
      [],
      false);
  }

  getModulesEligibleForRemoval() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec,
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec,
      [],
      false);
  }

  setModulesOrder(arg_module_ids) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec,
      null,
      [arg_module_ids],
      false);
  }

  getModulesOrder() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec,
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec,
      [],
      false);
  }

  updateModulesLoadable() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec,
      null,
      [],
      false);
  }

  setModulesDisabled(arg_module_ids, arg_disabled, arg_is_user_action) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec,
      null,
      [arg_module_ids, arg_disabled, arg_is_user_action],
      false);
  }

  updateActionChipsVisibility() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec,
      null,
      [],
      false);
  }

  updateFooterVisibility() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec,
      null,
      [],
      false);
  }

  incrementComposeButtonShownCount() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec,
      null,
      [],
      false);
  }

  maybeTriggerAutomaticCustomizeChromePromo() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec,
      null,
      [],
      false);
  }

  recordContextMenuClick() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_RecordContextMenuClick_ParamsSpec,
      null,
      [],
      false);
  }

  onOneGoogleBarRendered(arg_time) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec,
      null,
      [arg_time],
      false);
  }

  onPromoRendered(arg_time, arg_log_url) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec,
      null,
      [arg_time, arg_log_url],
      false);
  }

  onCustomizeDialogAction(arg_action) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec,
      null,
      [arg_action],
      false);
  }

  onDoodleImageClicked(arg_type, arg_log_url) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec,
      null,
      [arg_type, arg_log_url],
      false);
  }

  onDoodleImageRendered(arg_type, arg_time, arg_log_url) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec,
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec,
      [arg_type, arg_time, arg_log_url],
      false);
  }

  onDoodleShared(arg_channel, arg_doodle_id, arg_share_id) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec,
      null,
      [arg_channel, arg_doodle_id, arg_share_id],
      false);
  }

  onPromoLinkClicked() {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onAppRendered(arg_time) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec,
      null,
      [arg_time],
      false);
  }

};

mojo.internal.bindings.new_tab_page.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.new_tab_page.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_RecordContextMenuClick_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMostVisitedSettings');
          const result = this.impl.setMostVisitedSettings(params.arg_shortcuts_type, params.arg_shortcuts_visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMostVisitedSettings');
          const result = this.impl.getMostVisitedSettings();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMostVisitedSettings FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDoodle');
          const result = this.impl.getDoodle();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDoodle FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updatePromoData');
          const result = this.impl.updatePromoData();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.blocklistPromo');
          const result = this.impl.blocklistPromo(params.arg_promo_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.undoBlocklistPromo');
          const result = this.impl.undoBlocklistPromo(params.arg_promo_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDismissModule');
          const result = this.impl.onDismissModule(params.arg_module_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRestoreModule');
          const result = this.impl.onRestoreModule(params.arg_module_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setModulesVisible');
          const result = this.impl.setModulesVisible(params.arg_visible);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateDisabledModules');
          const result = this.impl.updateDisabledModules();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onModulesLoadedWithData');
          const result = this.impl.onModulesLoadedWithData(params.arg_module_ids);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onModuleUsed');
          const result = this.impl.onModuleUsed(params.arg_module_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getModulesIdNames');
          const result = this.impl.getModulesIdNames();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetModulesIdNames FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getModulesEligibleForRemoval');
          const result = this.impl.getModulesEligibleForRemoval();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetModulesEligibleForRemoval FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setModulesOrder');
          const result = this.impl.setModulesOrder(params.arg_module_ids);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getModulesOrder');
          const result = this.impl.getModulesOrder();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetModulesOrder FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateModulesLoadable');
          const result = this.impl.updateModulesLoadable();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setModulesDisabled');
          const result = this.impl.setModulesDisabled(params.arg_module_ids, params.arg_disabled, params.arg_is_user_action);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateActionChipsVisibility');
          const result = this.impl.updateActionChipsVisibility();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateFooterVisibility');
          const result = this.impl.updateFooterVisibility();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.incrementComposeButtonShownCount');
          const result = this.impl.incrementComposeButtonShownCount();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maybeTriggerAutomaticCustomizeChromePromo');
          const result = this.impl.maybeTriggerAutomaticCustomizeChromePromo();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_RecordContextMenuClick_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordContextMenuClick');
          const result = this.impl.recordContextMenuClick();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOneGoogleBarRendered');
          const result = this.impl.onOneGoogleBarRendered(params.arg_time);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPromoRendered');
          const result = this.impl.onPromoRendered(params.arg_time, params.arg_log_url);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCustomizeDialogAction');
          const result = this.impl.onCustomizeDialogAction(params.arg_action);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDoodleImageClicked');
          const result = this.impl.onDoodleImageClicked(params.arg_type, params.arg_log_url);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDoodleImageRendered');
          const result = this.impl.onDoodleImageRendered(params.arg_type, params.arg_time, params.arg_log_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnDoodleImageRendered FAILED:', e));
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDoodleShared');
          const result = this.impl.onDoodleShared(params.arg_channel, params.arg_doodle_id, params.arg_share_id);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPromoLinkClicked');
          const result = this.impl.onPromoLinkClicked();
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAppRendered');
          const result = this.impl.onAppRendered(params.arg_time);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerReceiver = mojo.internal.bindings.new_tab_page.mojom.PageHandlerReceiver;

mojo.internal.bindings.new_tab_page.mojom.PageHandlerPtr = mojo.internal.bindings.new_tab_page.mojom.PageHandlerRemote;
mojo.internal.bindings.new_tab_page.mojom.PageHandlerRequest = mojo.internal.bindings.new_tab_page.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_SetTheme_ParamsSpec, 'new_tab_page.mojom.Page_SetTheme_Params', [
      mojo.internal.StructField('arg_theme', 0, 0, mojo.internal.bindings.new_tab_page.mojom.ThemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec, 'new_tab_page.mojom.Page_SetDisabledModules_Params', [
      mojo.internal.StructField('arg_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_all', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec, 'new_tab_page.mojom.Page_SetModulesLoadable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec, 'new_tab_page.mojom.Page_SetActionChipsVisibility_Params', [
      mojo.internal.StructField('arg_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_SetPromo_ParamsSpec, 'new_tab_page.mojom.Page_SetPromo_Params', [
      mojo.internal.StructField('arg_promo', 0, 0, mojo.internal.bindings.new_tab_page.mojom.PromoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec, 'new_tab_page.mojom.Page_ShowWebstoreToast_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec, 'new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_Params', [
      mojo.internal.StructField('arg_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec, 'new_tab_page.mojom.Page_FooterVisibilityUpdated_Params', [
      mojo.internal.StructField('arg_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec, 'new_tab_page.mojom.Page_ConnectToParentDocument_Params', [
      mojo.internal.StructField('arg_child_untrusted_document_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.new_tab_page.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'new_tab_page.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.new_tab_page.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.new_tab_page.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setTheme(arg_theme) {
    return this.$.setTheme(arg_theme);
  }
  setDisabledModules(arg_all, arg_ids) {
    return this.$.setDisabledModules(arg_all, arg_ids);
  }
  setModulesLoadable() {
    return this.$.setModulesLoadable();
  }
  setActionChipsVisibility(arg_visible) {
    return this.$.setActionChipsVisibility(arg_visible);
  }
  setPromo(arg_promo) {
    return this.$.setPromo(arg_promo);
  }
  showWebstoreToast() {
    return this.$.showWebstoreToast();
  }
  setWallpaperSearchButtonVisibility(arg_visible) {
    return this.$.setWallpaperSearchButtonVisibility(arg_visible);
  }
  footerVisibilityUpdated(arg_visible) {
    return this.$.footerVisibilityUpdated(arg_visible);
  }
  connectToParentDocument(arg_child_untrusted_document_remote) {
    return this.$.connectToParentDocument(arg_child_untrusted_document_remote);
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageRemoteCallHandler = class {
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

  setTheme(arg_theme) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_SetTheme_ParamsSpec,
      null,
      [arg_theme],
      false);
  }

  setDisabledModules(arg_all, arg_ids) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec,
      null,
      [arg_all, arg_ids],
      false);
  }

  setModulesLoadable() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec,
      null,
      [],
      false);
  }

  setActionChipsVisibility(arg_visible) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec,
      null,
      [arg_visible],
      false);
  }

  setPromo(arg_promo) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_SetPromo_ParamsSpec,
      null,
      [arg_promo],
      false);
  }

  showWebstoreToast() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec,
      null,
      [],
      false);
  }

  setWallpaperSearchButtonVisibility(arg_visible) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec,
      null,
      [arg_visible],
      false);
  }

  footerVisibilityUpdated(arg_visible) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec,
      null,
      [arg_visible],
      false);
  }

  connectToParentDocument(arg_child_untrusted_document_remote) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec,
      null,
      [arg_child_untrusted_document_remote],
      false);
  }

};

mojo.internal.bindings.new_tab_page.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.new_tab_page.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.new_tab_page.mojom.PageReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetTheme_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetPromo_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetTheme_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTheme');
          const result = this.impl.setTheme(params.arg_theme);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDisabledModules');
          const result = this.impl.setDisabledModules(params.arg_all, params.arg_ids);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setModulesLoadable');
          const result = this.impl.setModulesLoadable();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setActionChipsVisibility');
          const result = this.impl.setActionChipsVisibility(params.arg_visible);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetPromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPromo');
          const result = this.impl.setPromo(params.arg_promo);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showWebstoreToast');
          const result = this.impl.showWebstoreToast();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWallpaperSearchButtonVisibility');
          const result = this.impl.setWallpaperSearchButtonVisibility(params.arg_visible);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.footerVisibilityUpdated');
          const result = this.impl.footerVisibilityUpdated(params.arg_visible);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectToParentDocument');
          const result = this.impl.connectToParentDocument(params.arg_child_untrusted_document_remote);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageReceiver = mojo.internal.bindings.new_tab_page.mojom.PageReceiver;

mojo.internal.bindings.new_tab_page.mojom.PagePtr = mojo.internal.bindings.new_tab_page.mojom.PageRemote;
mojo.internal.bindings.new_tab_page.mojom.PageRequest = mojo.internal.bindings.new_tab_page.mojom.PagePendingReceiver;

