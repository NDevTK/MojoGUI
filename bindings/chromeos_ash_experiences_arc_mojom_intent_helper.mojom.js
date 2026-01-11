// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/intent_helper.mojom
 // Module: arc.mojom

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
 

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.arc.mojom.PatternTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.ChromePageSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.ChromeAppSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.SupportedLinkChangeSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.AndroidSettingSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.CaptionTextShadowTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.PatternMatcherSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthorityEntrySpec = { $: {} };
mojo.internal.bindings.arc.mojom.UriComponentsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentInfoSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentFilterSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHandlerInfoSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ActivityIconSpec = { $: {} };
mojo.internal.bindings.arc.mojom.UrlWithMimeTypeSpec = { $: {} };
mojo.internal.bindings.arc.mojom.TextSelectionActionSpec = { $: {} };
mojo.internal.bindings.arc.mojom.LaunchFileInfoSpec = { $: {} };
mojo.internal.bindings.arc.mojom.LaunchIntentSpec = { $: {} };
mojo.internal.bindings.arc.mojom.SupportedLinksPackageSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CaptionColorSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CaptionStyleSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AccessibilityFeaturesSpec = { $: {} };
mojo.internal.bindings.arc.mojom.CustomTabSession = {};
mojo.internal.bindings.arc.mojom.CustomTabSession.$interfaceName = 'arc.mojom.CustomTabSession';
mojo.internal.bindings.arc.mojom.CustomTabSession_OnOpenInChromeClicked_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost = {};
mojo.internal.bindings.arc.mojom.IntentHelperHost.$interfaceName = 'arc.mojom.IntentHelperHost';
mojo.internal.bindings.arc.mojom.IntentHelperHost_OnIconInvalidated_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_OnIntentFiltersUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenDownloads_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenCustomTab_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenCustomTab_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_OpenWallpaperPicker_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_OpenVolumeControl_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenChromePage_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenWebApp_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_FactoryResetArc_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_LaunchCameraApp_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_CloseCameraApp_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_IsChromeAppEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_IsChromeAppEnabled_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_OnSupportedLinksChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_OnDownloadAddedDeprecated_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenAppWithIntent_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenGlobalActions_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_OnCloseSystemDialogs_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperHost_OnAndroidSettingChange_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance = {};
mojo.internal.bindings.arc.mojom.IntentHelperInstance.$interfaceName = 'arc.mojom.IntentHelperInstance';
mojo.internal.bindings.arc.mojom.IntentHelperInstance_AddPreferredPackage_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_SetVerifiedLinks_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleIntent_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_Init_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_Init_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestActivityIcons_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestActivityIcons_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_SendBroadcast_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleCameraResult_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleCameraResult_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestDomainVerificationStatusUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_SetCaptionStyle_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_ParamsSpec = { $: {} };

// Enum: PatternType
mojo.internal.bindings.arc.mojom.PatternType = {
  PATTERN_LITERAL: 0,
  PATTERN_PREFIX: 1,
  PATTERN_SIMPLE_GLOB: 2,
  MinVersion: 2,
  MinVersion: 2,
  MinVersion: 51,
  kUnknown: -1,
};

// Enum: ChromePage
mojo.internal.bindings.arc.mojom.ChromePage = {
  MULTIDEVICE: 0,
  MAIN: 1,
  POWER: 2,
  BLUETOOTH: 3,
  DATETIME: 4,
  DISPLAY: 5,
  WIFI: 6,
  LANGUAGES: 7,
  PRIVACY: 8,
  HELP: 9,
  ACCOUNTS: 10,
  APPEARANCE: 11,
  AUTOFILL: 12,
  BLUETOOTHDEVICES: 13,
  CHANGEPICTURE: 14,
  CLEARBROWSERDATA: 15,
  CUPSPRINTERS: 17,
  DOWNLOADS: 18,
  KEYBOARDOVERLAY: 19,
  LOCKSCREEN: 20,
  MANAGEACCESSIBILITY: 21,
  NETWORKSTYPEVPN: 22,
  ONSTARTUP: 23,
  PASSWORDS: 24,
  POINTEROVERLAY: 25,
  RESET: 26,
  SEARCH: 27,
  STORAGE: 28,
  SYNCSETUP: 29,
  ABOUTBLANK: 30,
  ABOUTDOWNLOADS: 31,
  ABOUTHISTORY: 32,
  MANAGEACCESSIBILITYTTS: 49,
  OSLANGUAGESINPUT: 71,
  OSLANGUAGESLANGUAGES: 72,
  SMARTPRIVACY: 77,
  PRIVACYHUB: 78,
  TEXTTOSPEECH: 79,
  AUDIO: 80,
  DISPLAYANDMAGNFICATION: 81,
  KEYBOARDANDTEXTINPUT: 82,
  CURSORANDTOUCHPAD: 83,
  AUDIOANDCAPTIONS: 84,
  PERDEVICEKEYBOARD: 85,
  PERDEVICEMOUSE: 86,
  PERDEVICETOUCHPAD: 87,
  PERDEVICEPOINTINGSTICK: 88,
  GRAPHICSTABLET: 89,
  NETWORKS: 90,
};

// Enum: ChromeApp
mojo.internal.bindings.arc.mojom.ChromeApp = {
  CAMERA: 0,
  LAST: 0,
};

// Enum: SupportedLinkChangeSource
mojo.internal.bindings.arc.mojom.SupportedLinkChangeSource = {
  kUnknown: 0,
  kArcSystem: 1,
  kUserPreference: 2,
};

// Enum: AndroidSetting
mojo.internal.bindings.arc.mojom.AndroidSetting = {
  kUnknown: 0,
  kGeoLocation: 1,
  kGeoLocationAtBoot: 2,
  kGeoLocationUserTriggered: 3,
  kGeoLocationAccuracyUserTriggered: 4,
};

// Enum: CaptionTextShadowType
mojo.internal.bindings.arc.mojom.CaptionTextShadowType = {
  kNone: 0,
  kUniform: 1,
  kDropShadow: 2,
  kRaised: 3,
  kDepressed: 4,
  kInvalidEnumValue: -1,
};

// Struct: PatternMatcher
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PatternMatcherSpec, 'arc.mojom.PatternMatcher', [
      mojo.internal.StructField('arg_pattern', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.arc.mojom.PatternTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AuthorityEntry
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthorityEntrySpec, 'arc.mojom.AuthorityEntry', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_port', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UriComponents
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.UriComponentsSpec, 'arc.mojom.UriComponents', [
      mojo.internal.StructField('arg_scheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_authority', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_path', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: IntentInfo
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentInfoSpec, 'arc.mojom.IntentInfo', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_categories', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_data', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_clip_data_uri', 32, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('arg_ui_bypassed', 40, 0, mojo.internal.Bool, false, false, 20, undefined),
      mojo.internal.StructField('arg_extras', 48, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, true, 22, undefined),
      mojo.internal.StructField('arg_uri_components', 56, 0, mojo.internal.bindings.arc.mojom.UriComponentsSpec.$, null, true, 30, undefined),
    ],
    [[0, 40], [13, 48], [20, 56], [22, 64], [30, 72]]);

// Struct: IntentFilter
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentFilterSpec, 'arc.mojom.IntentFilter', [
      mojo.internal.StructField('arg_actions', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_categories', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_data_schemes', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_data_authorities', 24, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.AuthorityEntrySpec.$, false), null, true, 10, undefined),
      mojo.internal.StructField('arg_data_paths', 32, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.PatternMatcherSpec.$, false), null, true, 10, undefined),
      mojo.internal.StructField('arg_deprecated_data_scheme_specific_parts', 40, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.PatternMatcherSpec.$, false), null, true, 10, undefined),
      mojo.internal.StructField('arg_package_name', 48, 0, mojo.internal.String, null, true, 21, undefined),
      mojo.internal.StructField('arg_mime_types', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 38, undefined),
      mojo.internal.StructField('arg_activity_name', 64, 0, mojo.internal.String, null, true, 39, undefined),
      mojo.internal.StructField('arg_activity_label', 72, 0, mojo.internal.String, null, true, 41, undefined),
    ],
    [[0, 32], [10, 56], [21, 64], [38, 72], [39, 80], [41, 88]]);

// Struct: IntentHandlerInfo
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHandlerInfoSpec, 'arc.mojom.IntentHandlerInfo', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_activity_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_action_type', 24, 0, mojo.internal.bindings.arc.mojom.ActionTypeSpec.$, null, false, 4, undefined),
      mojo.internal.StructField('arg_is_preferred', 32, 0, mojo.internal.Bool, false, false, 6, undefined),
      mojo.internal.StructField('arg_action', 40, 0, mojo.internal.String, null, true, 11, undefined),
      mojo.internal.StructField('arg_fallback_url', 48, 0, mojo.internal.String, null, true, 14, undefined),
    ],
    [[0, 32], [4, 40], [6, 48], [11, 56], [14, 64]]);

// Struct: ActivityIcon
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ActivityIconSpec, 'arc.mojom.ActivityIcon', [
      mojo.internal.StructField('arg_activity', 0, 0, mojo.internal.bindings.arc.mojom.ActivityNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_width', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_icon_png_data', 24, 0, mojo.internal.bindings.arc.mojom.RawIconPngDataSpec.$, null, true, 40, undefined),
    ],
    [[0, 32], [40, 40]]);

// Struct: UrlWithMimeType
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.UrlWithMimeTypeSpec, 'arc.mojom.UrlWithMimeType', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextSelectionAction
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.TextSelectionActionSpec, 'arc.mojom.TextSelectionAction', [
      mojo.internal.StructField('arg_icon', 0, 0, mojo.internal.bindings.arc.mojom.ActivityIconSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_activity', 8, 0, mojo.internal.bindings.arc.mojom.ActivityNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_action_intent', 24, 0, mojo.internal.bindings.arc.mojom.IntentInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bitmap_icon', 32, 0, mojo.internal.bindings.arc.mojom.ArcBitmapSpec.$, null, true, 23, undefined),
      mojo.internal.StructField('arg_text_classifier_action', 40, 0, mojo.internal.Bool, false, false, 23, undefined),
    ],
    [[0, 40], [23, 56]]);

// Struct: LaunchFileInfo
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.LaunchFileInfoSpec, 'arc.mojom.LaunchFileInfo', [
      mojo.internal.StructField('arg_content_uri', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_removed_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_name', 32, 0, mojo.internal.bindings.mojo_base.mojom.SafeBaseNameSpec.$, null, true, 48, undefined),
    ],
    [[0, 40], [48, 48]]);

// Struct: LaunchIntent
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.LaunchIntentSpec, 'arc.mojom.LaunchIntent', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_extra_subject', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_extra_text', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_files', 40, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.LaunchFileInfoSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SupportedLinksPackage
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.SupportedLinksPackageSpec, 'arc.mojom.SupportedLinksPackage', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_deprecated_filters', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.IntentFilterSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CaptionColor
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CaptionColorSpec, 'arc.mojom.CaptionColor', [
      mojo.internal.StructField('arg_alpha', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_red', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_green', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_blue', 3, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CaptionStyle
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CaptionStyleSpec, 'arc.mojom.CaptionStyle', [
      mojo.internal.StructField('arg_user_locale', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_color', 8, 0, mojo.internal.bindings.arc.mojom.CaptionColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_background_color', 16, 0, mojo.internal.bindings.arc.mojom.CaptionColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_text_shadow_type', 24, 0, mojo.internal.bindings.arc.mojom.CaptionTextShadowTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_font_scale', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: AccessibilityFeatures
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AccessibilityFeaturesSpec, 'arc.mojom.AccessibilityFeatures', [
      mojo.internal.StructField('arg_docked_magnifier_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_focus_highlight_enabled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_screen_magnifier_enabled', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_select_to_speak_enabled', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_spoken_feedback_enabled', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_switch_access_enabled', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CustomTabSession
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CustomTabSession_OnOpenInChromeClicked_ParamsSpec, 'arc.mojom.CustomTabSession_OnOpenInChromeClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.arc.mojom.CustomTabSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.CustomTabSessionRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CustomTabSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.CustomTabSessionPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.CustomTabSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onOpenInChromeClicked() {
    return this.$.onOpenInChromeClicked();
  }
};

mojo.internal.bindings.arc.mojom.CustomTabSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CustomTabSession', [
      { explicit: 0 },
    ]);
  }

  onOpenInChromeClicked() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.CustomTabSession_OnOpenInChromeClicked_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.arc.mojom.CustomTabSession.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.CustomTabSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CustomTabSession',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.CustomTabSessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CustomTabSession', [
      { explicit: 0 },
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
        
        // Try Method 0: OnOpenInChromeClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CustomTabSession_OnOpenInChromeClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOpenInChromeClicked (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.CustomTabSession_OnOpenInChromeClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpenInChromeClicked');
          const result = this.impl.onOpenInChromeClicked();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.CustomTabSessionReceiver = mojo.internal.bindings.arc.mojom.CustomTabSessionReceiver;

mojo.internal.bindings.arc.mojom.CustomTabSessionPtr = mojo.internal.bindings.arc.mojom.CustomTabSessionRemote;
mojo.internal.bindings.arc.mojom.CustomTabSessionRequest = mojo.internal.bindings.arc.mojom.CustomTabSessionPendingReceiver;


// Interface: IntentHelperHost
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_OnIconInvalidated_ParamsSpec, 'arc.mojom.IntentHelperHost_OnIconInvalidated_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_OnIntentFiltersUpdated_ParamsSpec, 'arc.mojom.IntentHelperHost_OnIntentFiltersUpdated_Params', [
      mojo.internal.StructField('arg_intent_filters', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.IntentFilterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenDownloads_ParamsSpec, 'arc.mojom.IntentHelperHost_OnOpenDownloads_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenUrl_ParamsSpec, 'arc.mojom.IntentHelperHost_OnOpenUrl_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenCustomTab_ParamsSpec, 'arc.mojom.IntentHelperHost_OnOpenCustomTab_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_task_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenCustomTab_ResponseParamsSpec, 'arc.mojom.IntentHelperHost_OnOpenCustomTab_ResponseParams', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.CustomTabSessionSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_OpenWallpaperPicker_ParamsSpec, 'arc.mojom.IntentHelperHost_OpenWallpaperPicker_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_OpenVolumeControl_ParamsSpec, 'arc.mojom.IntentHelperHost_OpenVolumeControl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenChromePage_ParamsSpec, 'arc.mojom.IntentHelperHost_OnOpenChromePage_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.bindings.arc.mojom.ChromePageSpec.$, null, false, 18, undefined),
    ],
    [[0, 8], [18, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenWebApp_ParamsSpec, 'arc.mojom.IntentHelperHost_OnOpenWebApp_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_FactoryResetArc_ParamsSpec, 'arc.mojom.IntentHelperHost_FactoryResetArc_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_LaunchCameraApp_ParamsSpec, 'arc.mojom.IntentHelperHost_LaunchCameraApp_Params', [
      mojo.internal.StructField('arg_mode', 0, 0, mojo.internal.bindings.arc.mojom.CameraIntentModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_intent_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_should_handle_result', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_should_down_scale', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_secure', 12, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_task_id', 16, 0, mojo.internal.Int32, 0, false, 36, undefined),
    ],
    [[0, 24], [36, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_ParamsSpec, 'arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_intent_filters', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.IntentFilterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_CloseCameraApp_ParamsSpec, 'arc.mojom.IntentHelperHost_CloseCameraApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_IsChromeAppEnabled_ParamsSpec, 'arc.mojom.IntentHelperHost_IsChromeAppEnabled_Params', [
      mojo.internal.StructField('arg_app', 0, 0, mojo.internal.bindings.arc.mojom.ChromeAppSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_IsChromeAppEnabled_ResponseParamsSpec, 'arc.mojom.IntentHelperHost_IsChromeAppEnabled_ResponseParams', [
      mojo.internal.StructField('arg_is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_OnSupportedLinksChanged_ParamsSpec, 'arc.mojom.IntentHelperHost_OnSupportedLinksChanged_Params', [
      mojo.internal.StructField('arg_added_packages', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.SupportedLinksPackageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_removed_packages', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.SupportedLinksPackageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_source', 16, 0, mojo.internal.bindings.arc.mojom.SupportedLinkChangeSourceSpec.$, null, false, 48, undefined),
    ],
    [[0, 24], [48, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_OnDownloadAddedDeprecated_ParamsSpec, 'arc.mojom.IntentHelperHost_OnDownloadAddedDeprecated_Params', [
      mojo.internal.StructField('arg_relative_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_owner_package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenAppWithIntent_ParamsSpec, 'arc.mojom.IntentHelperHost_OnOpenAppWithIntent_Params', [
      mojo.internal.StructField('arg_start_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_intent', 8, 0, mojo.internal.bindings.arc.mojom.LaunchIntentSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenGlobalActions_ParamsSpec, 'arc.mojom.IntentHelperHost_OnOpenGlobalActions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_OnCloseSystemDialogs_ParamsSpec, 'arc.mojom.IntentHelperHost_OnCloseSystemDialogs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperHost_OnAndroidSettingChange_ParamsSpec, 'arc.mojom.IntentHelperHost_OnAndroidSettingChange_Params', [
      mojo.internal.StructField('arg_setting', 0, 0, mojo.internal.bindings.arc.mojom.AndroidSettingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.arc.mojom.IntentHelperHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.IntentHelperHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.IntentHelperHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.IntentHelperHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.IntentHelperHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onIconInvalidated(arg_package_name) {
    return this.$.onIconInvalidated(arg_package_name);
  }
  onIntentFiltersUpdated(arg_intent_filters) {
    return this.$.onIntentFiltersUpdated(arg_intent_filters);
  }
  onOpenDownloads() {
    return this.$.onOpenDownloads();
  }
  onOpenUrl(arg_url) {
    return this.$.onOpenUrl(arg_url);
  }
  onOpenCustomTab(arg_url, arg_task_id) {
    return this.$.onOpenCustomTab(arg_url, arg_task_id);
  }
  openWallpaperPicker() {
    return this.$.openWallpaperPicker();
  }
  openVolumeControl() {
    return this.$.openVolumeControl();
  }
  onOpenChromePage(arg_page) {
    return this.$.onOpenChromePage(arg_page);
  }
  onOpenWebApp(arg_url) {
    return this.$.onOpenWebApp(arg_url);
  }
  factoryResetArc() {
    return this.$.factoryResetArc();
  }
  launchCameraApp(arg_intent_id, arg_mode, arg_should_handle_result, arg_should_down_scale, arg_is_secure, arg_task_id) {
    return this.$.launchCameraApp(arg_intent_id, arg_mode, arg_should_handle_result, arg_should_down_scale, arg_is_secure, arg_task_id);
  }
  onIntentFiltersUpdatedForPackage(arg_package_name, arg_intent_filters) {
    return this.$.onIntentFiltersUpdatedForPackage(arg_package_name, arg_intent_filters);
  }
  closeCameraApp() {
    return this.$.closeCameraApp();
  }
  isChromeAppEnabled(arg_app) {
    return this.$.isChromeAppEnabled(arg_app);
  }
  onSupportedLinksChanged(arg_added_packages, arg_removed_packages, arg_source) {
    return this.$.onSupportedLinksChanged(arg_added_packages, arg_removed_packages, arg_source);
  }
  onDownloadAddedDeprecated(arg_relative_path, arg_owner_package_name) {
    return this.$.onDownloadAddedDeprecated(arg_relative_path, arg_owner_package_name);
  }
  onOpenAppWithIntent(arg_start_url, arg_intent) {
    return this.$.onOpenAppWithIntent(arg_start_url, arg_intent);
  }
  onOpenGlobalActions() {
    return this.$.onOpenGlobalActions();
  }
  onCloseSystemDialogs() {
    return this.$.onCloseSystemDialogs();
  }
  onAndroidSettingChange(arg_setting, arg_is_enabled) {
    return this.$.onAndroidSettingChange(arg_setting, arg_is_enabled);
  }
};

mojo.internal.bindings.arc.mojom.IntentHelperHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IntentHelperHost', [
      { explicit: 1 },
      { explicit: 5 },
      { explicit: 2 },
      { explicit: 0 },
      { explicit: 17 },
      { explicit: 3 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 20 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 21 },
      { explicit: 22 },
      { explicit: 23 },
    ]);
  }

  onIconInvalidated(arg_package_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_OnIconInvalidated_ParamsSpec,
      null,
      [arg_package_name],
      false);
  }

  onIntentFiltersUpdated(arg_intent_filters) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_OnIntentFiltersUpdated_ParamsSpec,
      null,
      [arg_intent_filters],
      false);
  }

  onOpenDownloads() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenDownloads_ParamsSpec,
      null,
      [],
      false);
  }

  onOpenUrl(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenUrl_ParamsSpec,
      null,
      [arg_url],
      false);
  }

  onOpenCustomTab(arg_url, arg_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenCustomTab_ParamsSpec,
      mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenCustomTab_ResponseParamsSpec,
      [arg_url, arg_task_id],
      false);
  }

  openWallpaperPicker() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_OpenWallpaperPicker_ParamsSpec,
      null,
      [],
      false);
  }

  openVolumeControl() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_OpenVolumeControl_ParamsSpec,
      null,
      [],
      false);
  }

  onOpenChromePage(arg_page) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenChromePage_ParamsSpec,
      null,
      [arg_page],
      false);
  }

  onOpenWebApp(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenWebApp_ParamsSpec,
      null,
      [arg_url],
      false);
  }

  factoryResetArc() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_FactoryResetArc_ParamsSpec,
      null,
      [],
      false);
  }

  launchCameraApp(arg_intent_id, arg_mode, arg_should_handle_result, arg_should_down_scale, arg_is_secure, arg_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_LaunchCameraApp_ParamsSpec,
      null,
      [arg_intent_id, arg_mode, arg_should_handle_result, arg_should_down_scale, arg_is_secure, arg_task_id],
      false);
  }

  onIntentFiltersUpdatedForPackage(arg_package_name, arg_intent_filters) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_ParamsSpec,
      null,
      [arg_package_name, arg_intent_filters],
      false);
  }

  closeCameraApp() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_CloseCameraApp_ParamsSpec,
      null,
      [],
      false);
  }

  isChromeAppEnabled(arg_app) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_IsChromeAppEnabled_ParamsSpec,
      mojo.internal.bindings.arc.mojom.IntentHelperHost_IsChromeAppEnabled_ResponseParamsSpec,
      [arg_app],
      false);
  }

  onSupportedLinksChanged(arg_added_packages, arg_removed_packages, arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_OnSupportedLinksChanged_ParamsSpec,
      null,
      [arg_added_packages, arg_removed_packages, arg_source],
      false);
  }

  onDownloadAddedDeprecated(arg_relative_path, arg_owner_package_name) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_OnDownloadAddedDeprecated_ParamsSpec,
      null,
      [arg_relative_path, arg_owner_package_name],
      false);
  }

  onOpenAppWithIntent(arg_start_url, arg_intent) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenAppWithIntent_ParamsSpec,
      null,
      [arg_start_url, arg_intent],
      false);
  }

  onOpenGlobalActions() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenGlobalActions_ParamsSpec,
      null,
      [],
      false);
  }

  onCloseSystemDialogs() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_OnCloseSystemDialogs_ParamsSpec,
      null,
      [],
      false);
  }

  onAndroidSettingChange(arg_setting, arg_is_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperHost_OnAndroidSettingChange_ParamsSpec,
      null,
      [arg_setting, arg_is_enabled],
      false);
  }

};

mojo.internal.bindings.arc.mojom.IntentHelperHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.IntentHelperHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.IntentHelperHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.IntentHelperHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IntentHelperHost', [
      { explicit: 1 },
      { explicit: 5 },
      { explicit: 2 },
      { explicit: 0 },
      { explicit: 17 },
      { explicit: 3 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 20 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 21 },
      { explicit: 22 },
      { explicit: 23 },
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
        
        // Try Method 0: OnIconInvalidated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnIconInvalidated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIconInvalidated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnIntentFiltersUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnIntentFiltersUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIntentFiltersUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnOpenDownloads
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenDownloads_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOpenDownloads (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnOpenUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOpenUrl (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnOpenCustomTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenCustomTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOpenCustomTab (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OpenWallpaperPicker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OpenWallpaperPicker_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenWallpaperPicker (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OpenVolumeControl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OpenVolumeControl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenVolumeControl (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnOpenChromePage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenChromePage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOpenChromePage (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnOpenWebApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenWebApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOpenWebApp (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: FactoryResetArc
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_FactoryResetArc_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FactoryResetArc (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: LaunchCameraApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_LaunchCameraApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchCameraApp (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnIntentFiltersUpdatedForPackage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIntentFiltersUpdatedForPackage (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: CloseCameraApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_CloseCameraApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseCameraApp (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: IsChromeAppEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_IsChromeAppEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsChromeAppEnabled (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: OnSupportedLinksChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnSupportedLinksChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSupportedLinksChanged (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: OnDownloadAddedDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnDownloadAddedDeprecated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDownloadAddedDeprecated (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: OnOpenAppWithIntent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenAppWithIntent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOpenAppWithIntent (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: OnOpenGlobalActions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenGlobalActions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOpenGlobalActions (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: OnCloseSystemDialogs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnCloseSystemDialogs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCloseSystemDialogs (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: OnAndroidSettingChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnAndroidSettingChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAndroidSettingChange (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnIconInvalidated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIconInvalidated');
          const result = this.impl.onIconInvalidated(params.arg_package_name);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnIntentFiltersUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIntentFiltersUpdated');
          const result = this.impl.onIntentFiltersUpdated(params.arg_intent_filters);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenDownloads_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpenDownloads');
          const result = this.impl.onOpenDownloads();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpenUrl');
          const result = this.impl.onOpenUrl(params.arg_url);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenCustomTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpenCustomTab');
          const result = this.impl.onOpenCustomTab(params.arg_url, params.arg_task_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenCustomTab_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnOpenCustomTab FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OpenWallpaperPicker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openWallpaperPicker');
          const result = this.impl.openWallpaperPicker();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OpenVolumeControl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openVolumeControl');
          const result = this.impl.openVolumeControl();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenChromePage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpenChromePage');
          const result = this.impl.onOpenChromePage(params.arg_page);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenWebApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpenWebApp');
          const result = this.impl.onOpenWebApp(params.arg_url);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_FactoryResetArc_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.factoryResetArc');
          const result = this.impl.factoryResetArc();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_LaunchCameraApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.launchCameraApp');
          const result = this.impl.launchCameraApp(params.arg_intent_id, params.arg_mode, params.arg_should_handle_result, params.arg_should_down_scale, params.arg_is_secure, params.arg_task_id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIntentFiltersUpdatedForPackage');
          const result = this.impl.onIntentFiltersUpdatedForPackage(params.arg_package_name, params.arg_intent_filters);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_CloseCameraApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeCameraApp');
          const result = this.impl.closeCameraApp();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_IsChromeAppEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isChromeAppEnabled');
          const result = this.impl.isChromeAppEnabled(params.arg_app);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.IntentHelperHost_IsChromeAppEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsChromeAppEnabled FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnSupportedLinksChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSupportedLinksChanged');
          const result = this.impl.onSupportedLinksChanged(params.arg_added_packages, params.arg_removed_packages, params.arg_source);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnDownloadAddedDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDownloadAddedDeprecated');
          const result = this.impl.onDownloadAddedDeprecated(params.arg_relative_path, params.arg_owner_package_name);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenAppWithIntent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpenAppWithIntent');
          const result = this.impl.onOpenAppWithIntent(params.arg_start_url, params.arg_intent);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnOpenGlobalActions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpenGlobalActions');
          const result = this.impl.onOpenGlobalActions();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnCloseSystemDialogs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCloseSystemDialogs');
          const result = this.impl.onCloseSystemDialogs();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperHost_OnAndroidSettingChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAndroidSettingChange');
          const result = this.impl.onAndroidSettingChange(params.arg_setting, params.arg_is_enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.IntentHelperHostReceiver = mojo.internal.bindings.arc.mojom.IntentHelperHostReceiver;

mojo.internal.bindings.arc.mojom.IntentHelperHostPtr = mojo.internal.bindings.arc.mojom.IntentHelperHostRemote;
mojo.internal.bindings.arc.mojom.IntentHelperHostRequest = mojo.internal.bindings.arc.mojom.IntentHelperHostPendingReceiver;


// Interface: IntentHelperInstance
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_AddPreferredPackage_ParamsSpec, 'arc.mojom.IntentHelperInstance_AddPreferredPackage_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_SetVerifiedLinks_ParamsSpec, 'arc.mojom.IntentHelperInstance_SetVerifiedLinks_Params', [
      mojo.internal.StructField('arg_package_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_always_open', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleIntent_ParamsSpec, 'arc.mojom.IntentHelperInstance_HandleIntent_Params', [
      mojo.internal.StructField('arg_intent', 0, 0, mojo.internal.bindings.arc.mojom.IntentInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_activity', 8, 0, mojo.internal.bindings.arc.mojom.ActivityNameSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_ParamsSpec, 'arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_Params', [
      mojo.internal.StructField('arg_intent', 0, 0, mojo.internal.bindings.arc.mojom.IntentInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_activity', 8, 0, mojo.internal.bindings.arc.mojom.ActivityNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_window_info', 16, 0, mojo.internal.bindings.arc.mojom.WindowInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleUrl_ParamsSpec, 'arc.mojom.IntentHelperInstance_HandleUrl_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_Init_ParamsSpec, 'arc.mojom.IntentHelperInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.IntentHelperHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_Init_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestActivityIcons_ParamsSpec, 'arc.mojom.IntentHelperInstance_RequestActivityIcons_Params', [
      mojo.internal.StructField('arg_activities', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.ActivityNameSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_scale_factor', 8, 0, mojo.internal.bindings.arc.mojom.ScaleFactorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestActivityIcons_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_RequestActivityIcons_ResponseParams', [
      mojo.internal.StructField('arg_icons', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.ActivityIconSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ParamsSpec, 'arc.mojom.IntentHelperInstance_RequestIntentHandlerList_Params', [
      mojo.internal.StructField('arg_intent', 0, 0, mojo.internal.bindings.arc.mojom.IntentInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ResponseParams', [
      mojo.internal.StructField('arg_handlers', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.IntentHandlerInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ParamsSpec, 'arc.mojom.IntentHelperInstance_RequestUrlHandlerList_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ResponseParams', [
      mojo.internal.StructField('arg_handlers', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.IntentHandlerInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ParamsSpec, 'arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_Params', [
      mojo.internal.StructField('arg_urls', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.UrlWithMimeTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ResponseParams', [
      mojo.internal.StructField('arg_handlers', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.IntentHandlerInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_SendBroadcast_ParamsSpec, 'arc.mojom.IntentHelperInstance_SendBroadcast_Params', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_cls', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_extras', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ParamsSpec, 'arc.mojom.IntentHelperInstance_RequestTextSelectionActions_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_scale_factor', 8, 0, mojo.internal.bindings.arc.mojom.ScaleFactorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ResponseParams', [
      mojo.internal.StructField('arg_actions', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.TextSelectionActionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleCameraResult_ParamsSpec, 'arc.mojom.IntentHelperInstance_HandleCameraResult_Params', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.bindings.arc.mojom.CameraIntentActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_intent_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleCameraResult_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_HandleCameraResult_ResponseParams', [
      mojo.internal.StructField('arg_is_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestDomainVerificationStatusUpdate_ParamsSpec, 'arc.mojom.IntentHelperInstance_RequestDomainVerificationStatusUpdate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_SetCaptionStyle_ParamsSpec, 'arc.mojom.IntentHelperInstance_SetCaptionStyle_Params', [
      mojo.internal.StructField('arg_style', 0, 0, mojo.internal.bindings.arc.mojom.CaptionStyleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_ParamsSpec, 'arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_Params', [
      mojo.internal.StructField('arg_features', 0, 0, mojo.internal.bindings.arc.mojom.AccessibilityFeaturesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.IntentHelperInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.IntentHelperInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.IntentHelperInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.IntentHelperInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.IntentHelperInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addPreferredPackage(arg_package_name) {
    return this.$.addPreferredPackage(arg_package_name);
  }
  setVerifiedLinks(arg_package_names, arg_always_open) {
    return this.$.setVerifiedLinks(arg_package_names, arg_always_open);
  }
  handleIntent(arg_intent, arg_activity) {
    return this.$.handleIntent(arg_intent, arg_activity);
  }
  handleIntentWithWindowInfo(arg_intent, arg_activity, arg_window_info) {
    return this.$.handleIntentWithWindowInfo(arg_intent, arg_activity, arg_window_info);
  }
  handleUrl(arg_url, arg_package_name) {
    return this.$.handleUrl(arg_url, arg_package_name);
  }
  init(arg_host_remote) {
    return this.$.init(arg_host_remote);
  }
  requestActivityIcons(arg_activities, arg_scale_factor) {
    return this.$.requestActivityIcons(arg_activities, arg_scale_factor);
  }
  requestIntentHandlerList(arg_intent) {
    return this.$.requestIntentHandlerList(arg_intent);
  }
  requestUrlHandlerList(arg_url) {
    return this.$.requestUrlHandlerList(arg_url);
  }
  requestUrlListHandlerList(arg_urls) {
    return this.$.requestUrlListHandlerList(arg_urls);
  }
  sendBroadcast(arg_action, arg_package_name, arg_cls, arg_extras) {
    return this.$.sendBroadcast(arg_action, arg_package_name, arg_cls, arg_extras);
  }
  requestTextSelectionActions(arg_text, arg_scale_factor) {
    return this.$.requestTextSelectionActions(arg_text, arg_scale_factor);
  }
  handleCameraResult(arg_intent_id, arg_action, arg_data) {
    return this.$.handleCameraResult(arg_intent_id, arg_action, arg_data);
  }
  requestDomainVerificationStatusUpdate() {
    return this.$.requestDomainVerificationStatusUpdate();
  }
  setCaptionStyle(arg_style) {
    return this.$.setCaptionStyle(arg_style);
  }
  enableAccessibilityFeatures(arg_features) {
    return this.$.enableAccessibilityFeatures(arg_features);
  }
};

mojo.internal.bindings.arc.mojom.IntentHelperInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IntentHelperInstance', [
      { explicit: 8 },
      { explicit: 21 },
      { explicit: 10 },
      { explicit: 20 },
      { explicit: 2 },
      { explicit: 13 },
      { explicit: 4 },
      { explicit: 9 },
      { explicit: 3 },
      { explicit: 6 },
      { explicit: 1 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 19 },
      { explicit: 22 },
      { explicit: 23 },
    ]);
  }

  addPreferredPackage(arg_package_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_AddPreferredPackage_ParamsSpec,
      null,
      [arg_package_name],
      false);
  }

  setVerifiedLinks(arg_package_names, arg_always_open) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_SetVerifiedLinks_ParamsSpec,
      null,
      [arg_package_names, arg_always_open],
      false);
  }

  handleIntent(arg_intent, arg_activity) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleIntent_ParamsSpec,
      null,
      [arg_intent, arg_activity],
      false);
  }

  handleIntentWithWindowInfo(arg_intent, arg_activity, arg_window_info) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_ParamsSpec,
      null,
      [arg_intent, arg_activity, arg_window_info],
      false);
  }

  handleUrl(arg_url, arg_package_name) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleUrl_ParamsSpec,
      null,
      [arg_url, arg_package_name],
      false);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_Init_ParamsSpec,
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

  requestActivityIcons(arg_activities, arg_scale_factor) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestActivityIcons_ParamsSpec,
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestActivityIcons_ResponseParamsSpec,
      [arg_activities, arg_scale_factor],
      false);
  }

  requestIntentHandlerList(arg_intent) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ParamsSpec,
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ResponseParamsSpec,
      [arg_intent],
      false);
  }

  requestUrlHandlerList(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ParamsSpec,
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ResponseParamsSpec,
      [arg_url],
      false);
  }

  requestUrlListHandlerList(arg_urls) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ParamsSpec,
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ResponseParamsSpec,
      [arg_urls],
      false);
  }

  sendBroadcast(arg_action, arg_package_name, arg_cls, arg_extras) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_SendBroadcast_ParamsSpec,
      null,
      [arg_action, arg_package_name, arg_cls, arg_extras],
      false);
  }

  requestTextSelectionActions(arg_text, arg_scale_factor) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ParamsSpec,
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ResponseParamsSpec,
      [arg_text, arg_scale_factor],
      false);
  }

  handleCameraResult(arg_intent_id, arg_action, arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleCameraResult_ParamsSpec,
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleCameraResult_ResponseParamsSpec,
      [arg_intent_id, arg_action, arg_data],
      false);
  }

  requestDomainVerificationStatusUpdate() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestDomainVerificationStatusUpdate_ParamsSpec,
      null,
      [],
      false);
  }

  setCaptionStyle(arg_style) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_SetCaptionStyle_ParamsSpec,
      null,
      [arg_style],
      false);
  }

  enableAccessibilityFeatures(arg_features) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_ParamsSpec,
      null,
      [arg_features],
      false);
  }

};

mojo.internal.bindings.arc.mojom.IntentHelperInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.IntentHelperInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.IntentHelperInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.IntentHelperInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IntentHelperInstance', [
      { explicit: 8 },
      { explicit: 21 },
      { explicit: 10 },
      { explicit: 20 },
      { explicit: 2 },
      { explicit: 13 },
      { explicit: 4 },
      { explicit: 9 },
      { explicit: 3 },
      { explicit: 6 },
      { explicit: 1 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 19 },
      { explicit: 22 },
      { explicit: 23 },
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
        
        // Try Method 0: AddPreferredPackage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_AddPreferredPackage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddPreferredPackage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetVerifiedLinks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_SetVerifiedLinks_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVerifiedLinks (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: HandleIntent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleIntent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleIntent (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: HandleIntentWithWindowInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleIntentWithWindowInfo (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: HandleUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleUrl (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_Init_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RequestActivityIcons
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestActivityIcons_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestActivityIcons (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RequestIntentHandlerList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestIntentHandlerList (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RequestUrlHandlerList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestUrlHandlerList (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RequestUrlListHandlerList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestUrlListHandlerList (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SendBroadcast
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_SendBroadcast_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendBroadcast (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: RequestTextSelectionActions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestTextSelectionActions (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: HandleCameraResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleCameraResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleCameraResult (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: RequestDomainVerificationStatusUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestDomainVerificationStatusUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestDomainVerificationStatusUpdate (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetCaptionStyle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_SetCaptionStyle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCaptionStyle (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: EnableAccessibilityFeatures
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableAccessibilityFeatures (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_AddPreferredPackage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addPreferredPackage');
          const result = this.impl.addPreferredPackage(params.arg_package_name);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_SetVerifiedLinks_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVerifiedLinks');
          const result = this.impl.setVerifiedLinks(params.arg_package_names, params.arg_always_open);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleIntent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleIntent');
          const result = this.impl.handleIntent(params.arg_intent, params.arg_activity);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleIntentWithWindowInfo');
          const result = this.impl.handleIntentWithWindowInfo(params.arg_intent, params.arg_activity, params.arg_window_info);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleUrl');
          const result = this.impl.handleUrl(params.arg_url, params.arg_package_name);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.IntentHelperInstance_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestActivityIcons_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestActivityIcons');
          const result = this.impl.requestActivityIcons(params.arg_activities, params.arg_scale_factor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestActivityIcons_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestActivityIcons FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestIntentHandlerList');
          const result = this.impl.requestIntentHandlerList(params.arg_intent);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestIntentHandlerList FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestUrlHandlerList');
          const result = this.impl.requestUrlHandlerList(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestUrlHandlerList FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestUrlListHandlerList');
          const result = this.impl.requestUrlListHandlerList(params.arg_urls);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestUrlListHandlerList FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_SendBroadcast_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendBroadcast');
          const result = this.impl.sendBroadcast(params.arg_action, params.arg_package_name, params.arg_cls, params.arg_extras);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestTextSelectionActions');
          const result = this.impl.requestTextSelectionActions(params.arg_text, params.arg_scale_factor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestTextSelectionActions FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleCameraResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleCameraResult');
          const result = this.impl.handleCameraResult(params.arg_intent_id, params.arg_action, params.arg_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.IntentHelperInstance_HandleCameraResult_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HandleCameraResult FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_RequestDomainVerificationStatusUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestDomainVerificationStatusUpdate');
          const result = this.impl.requestDomainVerificationStatusUpdate();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_SetCaptionStyle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCaptionStyle');
          const result = this.impl.setCaptionStyle(params.arg_style);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableAccessibilityFeatures');
          const result = this.impl.enableAccessibilityFeatures(params.arg_features);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.IntentHelperInstanceReceiver = mojo.internal.bindings.arc.mojom.IntentHelperInstanceReceiver;

mojo.internal.bindings.arc.mojom.IntentHelperInstancePtr = mojo.internal.bindings.arc.mojom.IntentHelperInstanceRemote;
mojo.internal.bindings.arc.mojom.IntentHelperInstanceRequest = mojo.internal.bindings.arc.mojom.IntentHelperInstancePendingReceiver;

