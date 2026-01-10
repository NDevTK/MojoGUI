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
var arc = arc || {};
arc.mojom = arc.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

arc.mojom.PatternTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.ChromePageSpec = { $: mojo.internal.Enum() };
arc.mojom.ChromeAppSpec = { $: mojo.internal.Enum() };
arc.mojom.SupportedLinkChangeSourceSpec = { $: mojo.internal.Enum() };
arc.mojom.AndroidSettingSpec = { $: mojo.internal.Enum() };
arc.mojom.CaptionTextShadowTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.PatternMatcherSpec = { $: {} };
arc.mojom.AuthorityEntrySpec = { $: {} };
arc.mojom.UriComponentsSpec = { $: {} };
arc.mojom.IntentInfoSpec = { $: {} };
arc.mojom.IntentFilterSpec = { $: {} };
arc.mojom.IntentHandlerInfoSpec = { $: {} };
arc.mojom.ActivityIconSpec = { $: {} };
arc.mojom.UrlWithMimeTypeSpec = { $: {} };
arc.mojom.TextSelectionActionSpec = { $: {} };
arc.mojom.LaunchFileInfoSpec = { $: {} };
arc.mojom.LaunchIntentSpec = { $: {} };
arc.mojom.SupportedLinksPackageSpec = { $: {} };
arc.mojom.CaptionColorSpec = { $: {} };
arc.mojom.CaptionStyleSpec = { $: {} };
arc.mojom.AccessibilityFeaturesSpec = { $: {} };
arc.mojom.CustomTabSession = {};
arc.mojom.CustomTabSession.$interfaceName = 'arc.mojom.CustomTabSession';
arc.mojom.CustomTabSession_OnOpenInChromeClicked_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost = {};
arc.mojom.IntentHelperHost.$interfaceName = 'arc.mojom.IntentHelperHost';
arc.mojom.IntentHelperHost_OnIconInvalidated_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_OnIntentFiltersUpdated_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_OnOpenDownloads_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_OnOpenUrl_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_OnOpenCustomTab_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_OnOpenCustomTab_ResponseParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_OpenWallpaperPicker_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_OpenVolumeControl_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_OnOpenChromePage_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_OnOpenWebApp_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_FactoryResetArc_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_LaunchCameraApp_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_CloseCameraApp_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_IsChromeAppEnabled_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_IsChromeAppEnabled_ResponseParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_OnSupportedLinksChanged_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_OnDownloadAddedDeprecated_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_OnOpenAppWithIntent_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_OnOpenGlobalActions_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_OnCloseSystemDialogs_ParamsSpec = { $: {} };
arc.mojom.IntentHelperHost_OnAndroidSettingChange_ParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance = {};
arc.mojom.IntentHelperInstance.$interfaceName = 'arc.mojom.IntentHelperInstance';
arc.mojom.IntentHelperInstance_AddPreferredPackage_ParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_SetVerifiedLinks_ParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_HandleIntent_ParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_ParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_HandleUrl_ParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_Init_ParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_RequestActivityIcons_ParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_RequestActivityIcons_ResponseParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ResponseParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ResponseParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ResponseParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_SendBroadcast_ParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ResponseParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_HandleCameraResult_ParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_HandleCameraResult_ResponseParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_RequestDomainVerificationStatusUpdate_ParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_SetCaptionStyle_ParamsSpec = { $: {} };
arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_ParamsSpec = { $: {} };

// Enum: PatternType
arc.mojom.PatternType = {
  PATTERN_LITERAL: 0,
  PATTERN_PREFIX: 1,
  PATTERN_SIMPLE_GLOB: 2,
  MinVersion: 2,
  MinVersion: 2,
  MinVersion: 51,
  kUnknown: -1,
};

// Enum: ChromePage
arc.mojom.ChromePage = {
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
arc.mojom.ChromeApp = {
  CAMERA: 0,
  LAST: 0,
};

// Enum: SupportedLinkChangeSource
arc.mojom.SupportedLinkChangeSource = {
  kUnknown: 0,
  kArcSystem: 1,
  kUserPreference: 2,
};

// Enum: AndroidSetting
arc.mojom.AndroidSetting = {
  kUnknown: 0,
  kGeoLocation: 1,
  kGeoLocationAtBoot: 2,
  kGeoLocationUserTriggered: 3,
  kGeoLocationAccuracyUserTriggered: 4,
};

// Enum: CaptionTextShadowType
arc.mojom.CaptionTextShadowType = {
  kNone: 0,
  kUniform: 1,
  kDropShadow: 2,
  kRaised: 3,
  kDepressed: 4,
  kInvalidEnumValue: -1,
};

// Struct: PatternMatcher
mojo.internal.Struct(
    arc.mojom.PatternMatcherSpec, 'arc.mojom.PatternMatcher', [
      mojo.internal.StructField('pattern', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, arc.mojom.PatternTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AuthorityEntry
mojo.internal.Struct(
    arc.mojom.AuthorityEntrySpec, 'arc.mojom.AuthorityEntry', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UriComponents
mojo.internal.Struct(
    arc.mojom.UriComponentsSpec, 'arc.mojom.UriComponents', [
      mojo.internal.StructField('scheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('authority', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('path', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: IntentInfo
mojo.internal.Struct(
    arc.mojom.IntentInfoSpec, 'arc.mojom.IntentInfo', [
      mojo.internal.StructField('action', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('categories', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('data', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('type', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('clip_data_uri', 32, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('ui_bypassed', 40, 0, mojo.internal.Bool, false, false, 20, undefined),
      mojo.internal.StructField('extras', 48, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, true, 22, undefined),
      mojo.internal.StructField('uri_components', 56, 0, arc.mojom.UriComponentsSpec.$, null, true, 30, undefined),
    ],
    [[0, 40], [13, 48], [20, 56], [22, 64], [30, 72]]);

// Struct: IntentFilter
mojo.internal.Struct(
    arc.mojom.IntentFilterSpec, 'arc.mojom.IntentFilter', [
      mojo.internal.StructField('actions', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('categories', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('data_schemes', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('data_authorities', 24, 0, mojo.internal.Array(arc.mojom.AuthorityEntrySpec.$, false), null, true, 10, undefined),
      mojo.internal.StructField('data_paths', 32, 0, mojo.internal.Array(arc.mojom.PatternMatcherSpec.$, false), null, true, 10, undefined),
      mojo.internal.StructField('deprecated_data_scheme_specific_parts', 40, 0, mojo.internal.Array(arc.mojom.PatternMatcherSpec.$, false), null, true, 10, undefined),
      mojo.internal.StructField('package_name', 48, 0, mojo.internal.String, null, true, 21, undefined),
      mojo.internal.StructField('mime_types', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 38, undefined),
      mojo.internal.StructField('activity_name', 64, 0, mojo.internal.String, null, true, 39, undefined),
      mojo.internal.StructField('activity_label', 72, 0, mojo.internal.String, null, true, 41, undefined),
    ],
    [[0, 32], [10, 56], [21, 64], [38, 72], [39, 80], [41, 88]]);

// Struct: IntentHandlerInfo
mojo.internal.Struct(
    arc.mojom.IntentHandlerInfoSpec, 'arc.mojom.IntentHandlerInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('activity_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('action_type', 24, 0, arc.mojom.ActionTypeSpec.$, null, false, 4, undefined),
      mojo.internal.StructField('is_preferred', 32, 0, mojo.internal.Bool, false, false, 6, undefined),
      mojo.internal.StructField('action', 40, 0, mojo.internal.String, null, true, 11, undefined),
      mojo.internal.StructField('fallback_url', 48, 0, mojo.internal.String, null, true, 14, undefined),
    ],
    [[0, 32], [4, 40], [6, 48], [11, 56], [14, 64]]);

// Struct: ActivityIcon
mojo.internal.Struct(
    arc.mojom.ActivityIconSpec, 'arc.mojom.ActivityIcon', [
      mojo.internal.StructField('activity', 0, 0, arc.mojom.ActivityNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('icon', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('width', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('icon_png_data', 24, 0, arc.mojom.RawIconPngDataSpec.$, null, true, 40, undefined),
    ],
    [[0, 32], [40, 40]]);

// Struct: UrlWithMimeType
mojo.internal.Struct(
    arc.mojom.UrlWithMimeTypeSpec, 'arc.mojom.UrlWithMimeType', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextSelectionAction
mojo.internal.Struct(
    arc.mojom.TextSelectionActionSpec, 'arc.mojom.TextSelectionAction', [
      mojo.internal.StructField('icon', 0, 0, arc.mojom.ActivityIconSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activity', 8, 0, arc.mojom.ActivityNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('action_intent', 24, 0, arc.mojom.IntentInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bitmap_icon', 32, 0, arc.mojom.ArcBitmapSpec.$, null, true, 23, undefined),
      mojo.internal.StructField('text_classifier_action', 40, 0, mojo.internal.Bool, false, false, 23, undefined),
    ],
    [[0, 40], [23, 56]]);

// Struct: LaunchFileInfo
mojo.internal.Struct(
    arc.mojom.LaunchFileInfoSpec, 'arc.mojom.LaunchFileInfo', [
      mojo.internal.StructField('content_uri', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('removed_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('size', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('name', 32, 0, mojo_base.mojom.SafeBaseNameSpec.$, null, true, 48, undefined),
    ],
    [[0, 40], [48, 48]]);

// Struct: LaunchIntent
mojo.internal.Struct(
    arc.mojom.LaunchIntentSpec, 'arc.mojom.LaunchIntent', [
      mojo.internal.StructField('action', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('extra_subject', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('extra_text', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('files', 40, 0, mojo.internal.Array(arc.mojom.LaunchFileInfoSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SupportedLinksPackage
mojo.internal.Struct(
    arc.mojom.SupportedLinksPackageSpec, 'arc.mojom.SupportedLinksPackage', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('deprecated_filters', 8, 0, mojo.internal.Array(arc.mojom.IntentFilterSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CaptionColor
mojo.internal.Struct(
    arc.mojom.CaptionColorSpec, 'arc.mojom.CaptionColor', [
      mojo.internal.StructField('alpha', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('red', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('green', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('blue', 3, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CaptionStyle
mojo.internal.Struct(
    arc.mojom.CaptionStyleSpec, 'arc.mojom.CaptionStyle', [
      mojo.internal.StructField('user_locale', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_color', 8, 0, arc.mojom.CaptionColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('background_color', 16, 0, arc.mojom.CaptionColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('text_shadow_type', 24, 0, arc.mojom.CaptionTextShadowTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('font_scale', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: AccessibilityFeatures
mojo.internal.Struct(
    arc.mojom.AccessibilityFeaturesSpec, 'arc.mojom.AccessibilityFeatures', [
      mojo.internal.StructField('docked_magnifier_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('focus_highlight_enabled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('screen_magnifier_enabled', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('select_to_speak_enabled', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('spoken_feedback_enabled', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('switch_access_enabled', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CustomTabSession
mojo.internal.Struct(
    arc.mojom.CustomTabSession_OnOpenInChromeClicked_ParamsSpec, 'arc.mojom.CustomTabSession_OnOpenInChromeClicked_Params', [
    ],
    [[0, 8]]);

arc.mojom.CustomTabSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.CustomTabSessionRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CustomTabSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.CustomTabSessionPendingReceiver,
      handle);
    this.$ = new arc.mojom.CustomTabSessionRemoteCallHandler(this.proxy);
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

arc.mojom.CustomTabSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CustomTabSession', [
      { explicit: 0 },
    ]);
  }

  onOpenInChromeClicked() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.CustomTabSession_OnOpenInChromeClicked_ParamsSpec,
      null,
      [],
      false);
  }

};

arc.mojom.CustomTabSession.getRemote = function() {
  let remote = new arc.mojom.CustomTabSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CustomTabSession',
    'context');
  return remote.$;
};

arc.mojom.CustomTabSessionReceiver = class {
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
             decoder.decodeStructInline(arc.mojom.CustomTabSession_OnOpenInChromeClicked_ParamsSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.CustomTabSession_OnOpenInChromeClicked_ParamsSpec.$.structSpec);
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

arc.mojom.CustomTabSessionReceiver = arc.mojom.CustomTabSessionReceiver;

arc.mojom.CustomTabSessionPtr = arc.mojom.CustomTabSessionRemote;
arc.mojom.CustomTabSessionRequest = arc.mojom.CustomTabSessionPendingReceiver;


// Interface: IntentHelperHost
mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OnIconInvalidated_ParamsSpec, 'arc.mojom.IntentHelperHost_OnIconInvalidated_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OnIntentFiltersUpdated_ParamsSpec, 'arc.mojom.IntentHelperHost_OnIntentFiltersUpdated_Params', [
      mojo.internal.StructField('intent_filters', 0, 0, mojo.internal.Array(arc.mojom.IntentFilterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OnOpenDownloads_ParamsSpec, 'arc.mojom.IntentHelperHost_OnOpenDownloads_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OnOpenUrl_ParamsSpec, 'arc.mojom.IntentHelperHost_OnOpenUrl_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OnOpenCustomTab_ParamsSpec, 'arc.mojom.IntentHelperHost_OnOpenCustomTab_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('task_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OnOpenCustomTab_ResponseParamsSpec, 'arc.mojom.IntentHelperHost_OnOpenCustomTab_ResponseParams', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.CustomTabSessionSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OpenWallpaperPicker_ParamsSpec, 'arc.mojom.IntentHelperHost_OpenWallpaperPicker_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OpenVolumeControl_ParamsSpec, 'arc.mojom.IntentHelperHost_OpenVolumeControl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OnOpenChromePage_ParamsSpec, 'arc.mojom.IntentHelperHost_OnOpenChromePage_Params', [
      mojo.internal.StructField('page', 0, 0, arc.mojom.ChromePageSpec.$, null, false, 18, undefined),
    ],
    [[0, 8], [18, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OnOpenWebApp_ParamsSpec, 'arc.mojom.IntentHelperHost_OnOpenWebApp_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_FactoryResetArc_ParamsSpec, 'arc.mojom.IntentHelperHost_FactoryResetArc_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_LaunchCameraApp_ParamsSpec, 'arc.mojom.IntentHelperHost_LaunchCameraApp_Params', [
      mojo.internal.StructField('mode', 0, 0, arc.mojom.CameraIntentModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('intent_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('should_handle_result', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_down_scale', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_secure', 12, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('task_id', 16, 0, mojo.internal.Int32, 0, false, 36, undefined),
    ],
    [[0, 24], [36, 32]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_ParamsSpec, 'arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('intent_filters', 8, 0, mojo.internal.Array(arc.mojom.IntentFilterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_CloseCameraApp_ParamsSpec, 'arc.mojom.IntentHelperHost_CloseCameraApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_IsChromeAppEnabled_ParamsSpec, 'arc.mojom.IntentHelperHost_IsChromeAppEnabled_Params', [
      mojo.internal.StructField('app', 0, 0, arc.mojom.ChromeAppSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_IsChromeAppEnabled_ResponseParamsSpec, 'arc.mojom.IntentHelperHost_IsChromeAppEnabled_ResponseParams', [
      mojo.internal.StructField('is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OnSupportedLinksChanged_ParamsSpec, 'arc.mojom.IntentHelperHost_OnSupportedLinksChanged_Params', [
      mojo.internal.StructField('added_packages', 0, 0, mojo.internal.Array(arc.mojom.SupportedLinksPackageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('removed_packages', 8, 0, mojo.internal.Array(arc.mojom.SupportedLinksPackageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('source', 16, 0, arc.mojom.SupportedLinkChangeSourceSpec.$, null, false, 48, undefined),
    ],
    [[0, 24], [48, 32]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OnDownloadAddedDeprecated_ParamsSpec, 'arc.mojom.IntentHelperHost_OnDownloadAddedDeprecated_Params', [
      mojo.internal.StructField('relative_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('owner_package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OnOpenAppWithIntent_ParamsSpec, 'arc.mojom.IntentHelperHost_OnOpenAppWithIntent_Params', [
      mojo.internal.StructField('start_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('intent', 8, 0, arc.mojom.LaunchIntentSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OnOpenGlobalActions_ParamsSpec, 'arc.mojom.IntentHelperHost_OnOpenGlobalActions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OnCloseSystemDialogs_ParamsSpec, 'arc.mojom.IntentHelperHost_OnCloseSystemDialogs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OnAndroidSettingChange_ParamsSpec, 'arc.mojom.IntentHelperHost_OnAndroidSettingChange_Params', [
      mojo.internal.StructField('setting', 0, 0, arc.mojom.AndroidSettingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

arc.mojom.IntentHelperHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.IntentHelperHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.IntentHelperHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.IntentHelperHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.IntentHelperHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onIconInvalidated(package_name) {
    return this.$.onIconInvalidated(package_name);
  }
  onIntentFiltersUpdated(intent_filters) {
    return this.$.onIntentFiltersUpdated(intent_filters);
  }
  onOpenDownloads() {
    return this.$.onOpenDownloads();
  }
  onOpenUrl(url) {
    return this.$.onOpenUrl(url);
  }
  onOpenCustomTab(url, task_id) {
    return this.$.onOpenCustomTab(url, task_id);
  }
  openWallpaperPicker() {
    return this.$.openWallpaperPicker();
  }
  openVolumeControl() {
    return this.$.openVolumeControl();
  }
  onOpenChromePage(page) {
    return this.$.onOpenChromePage(page);
  }
  onOpenWebApp(url) {
    return this.$.onOpenWebApp(url);
  }
  factoryResetArc() {
    return this.$.factoryResetArc();
  }
  launchCameraApp(intent_id, mode, should_handle_result, should_down_scale, is_secure, task_id) {
    return this.$.launchCameraApp(intent_id, mode, should_handle_result, should_down_scale, is_secure, task_id);
  }
  onIntentFiltersUpdatedForPackage(package_name, intent_filters) {
    return this.$.onIntentFiltersUpdatedForPackage(package_name, intent_filters);
  }
  closeCameraApp() {
    return this.$.closeCameraApp();
  }
  isChromeAppEnabled(app) {
    return this.$.isChromeAppEnabled(app);
  }
  onSupportedLinksChanged(added_packages, removed_packages, source) {
    return this.$.onSupportedLinksChanged(added_packages, removed_packages, source);
  }
  onDownloadAddedDeprecated(relative_path, owner_package_name) {
    return this.$.onDownloadAddedDeprecated(relative_path, owner_package_name);
  }
  onOpenAppWithIntent(start_url, intent) {
    return this.$.onOpenAppWithIntent(start_url, intent);
  }
  onOpenGlobalActions() {
    return this.$.onOpenGlobalActions();
  }
  onCloseSystemDialogs() {
    return this.$.onCloseSystemDialogs();
  }
  onAndroidSettingChange(setting, is_enabled) {
    return this.$.onAndroidSettingChange(setting, is_enabled);
  }
};

arc.mojom.IntentHelperHostRemoteCallHandler = class {
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

  onIconInvalidated(package_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.IntentHelperHost_OnIconInvalidated_ParamsSpec,
      null,
      [package_name],
      false);
  }

  onIntentFiltersUpdated(intent_filters) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.IntentHelperHost_OnIntentFiltersUpdated_ParamsSpec,
      null,
      [intent_filters],
      false);
  }

  onOpenDownloads() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.IntentHelperHost_OnOpenDownloads_ParamsSpec,
      null,
      [],
      false);
  }

  onOpenUrl(url) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.IntentHelperHost_OnOpenUrl_ParamsSpec,
      null,
      [url],
      false);
  }

  onOpenCustomTab(url, task_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.IntentHelperHost_OnOpenCustomTab_ParamsSpec,
      arc.mojom.IntentHelperHost_OnOpenCustomTab_ResponseParamsSpec,
      [url, task_id],
      false);
  }

  openWallpaperPicker() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.IntentHelperHost_OpenWallpaperPicker_ParamsSpec,
      null,
      [],
      false);
  }

  openVolumeControl() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      arc.mojom.IntentHelperHost_OpenVolumeControl_ParamsSpec,
      null,
      [],
      false);
  }

  onOpenChromePage(page) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      arc.mojom.IntentHelperHost_OnOpenChromePage_ParamsSpec,
      null,
      [page],
      false);
  }

  onOpenWebApp(url) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      arc.mojom.IntentHelperHost_OnOpenWebApp_ParamsSpec,
      null,
      [url],
      false);
  }

  factoryResetArc() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      arc.mojom.IntentHelperHost_FactoryResetArc_ParamsSpec,
      null,
      [],
      false);
  }

  launchCameraApp(intent_id, mode, should_handle_result, should_down_scale, is_secure, task_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      arc.mojom.IntentHelperHost_LaunchCameraApp_ParamsSpec,
      null,
      [intent_id, mode, should_handle_result, should_down_scale, is_secure, task_id],
      false);
  }

  onIntentFiltersUpdatedForPackage(package_name, intent_filters) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_ParamsSpec,
      null,
      [package_name, intent_filters],
      false);
  }

  closeCameraApp() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      arc.mojom.IntentHelperHost_CloseCameraApp_ParamsSpec,
      null,
      [],
      false);
  }

  isChromeAppEnabled(app) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      arc.mojom.IntentHelperHost_IsChromeAppEnabled_ParamsSpec,
      arc.mojom.IntentHelperHost_IsChromeAppEnabled_ResponseParamsSpec,
      [app],
      false);
  }

  onSupportedLinksChanged(added_packages, removed_packages, source) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      arc.mojom.IntentHelperHost_OnSupportedLinksChanged_ParamsSpec,
      null,
      [added_packages, removed_packages, source],
      false);
  }

  onDownloadAddedDeprecated(relative_path, owner_package_name) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      arc.mojom.IntentHelperHost_OnDownloadAddedDeprecated_ParamsSpec,
      null,
      [relative_path, owner_package_name],
      false);
  }

  onOpenAppWithIntent(start_url, intent) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      arc.mojom.IntentHelperHost_OnOpenAppWithIntent_ParamsSpec,
      null,
      [start_url, intent],
      false);
  }

  onOpenGlobalActions() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      arc.mojom.IntentHelperHost_OnOpenGlobalActions_ParamsSpec,
      null,
      [],
      false);
  }

  onCloseSystemDialogs() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      arc.mojom.IntentHelperHost_OnCloseSystemDialogs_ParamsSpec,
      null,
      [],
      false);
  }

  onAndroidSettingChange(setting, is_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      arc.mojom.IntentHelperHost_OnAndroidSettingChange_ParamsSpec,
      null,
      [setting, is_enabled],
      false);
  }

};

arc.mojom.IntentHelperHost.getRemote = function() {
  let remote = new arc.mojom.IntentHelperHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.IntentHelperHost',
    'context');
  return remote.$;
};

arc.mojom.IntentHelperHostReceiver = class {
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnIconInvalidated_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnIntentFiltersUpdated_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnOpenDownloads_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnOpenUrl_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnOpenCustomTab_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_OpenWallpaperPicker_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_OpenVolumeControl_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnOpenChromePage_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnOpenWebApp_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_FactoryResetArc_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_LaunchCameraApp_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_CloseCameraApp_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_IsChromeAppEnabled_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnSupportedLinksChanged_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnDownloadAddedDeprecated_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnOpenAppWithIntent_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnOpenGlobalActions_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnCloseSystemDialogs_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnAndroidSettingChange_ParamsSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnIconInvalidated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIconInvalidated');
          const result = this.impl.onIconInvalidated(params.package_name);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnIntentFiltersUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIntentFiltersUpdated');
          const result = this.impl.onIntentFiltersUpdated(params.intent_filters);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnOpenDownloads_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpenDownloads');
          const result = this.impl.onOpenDownloads();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnOpenUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpenUrl');
          const result = this.impl.onOpenUrl(params.url);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnOpenCustomTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpenCustomTab');
          const result = this.impl.onOpenCustomTab(params.url, params.task_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.IntentHelperHost_OnOpenCustomTab_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_OpenWallpaperPicker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openWallpaperPicker');
          const result = this.impl.openWallpaperPicker();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_OpenVolumeControl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openVolumeControl');
          const result = this.impl.openVolumeControl();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnOpenChromePage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpenChromePage');
          const result = this.impl.onOpenChromePage(params.page);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnOpenWebApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpenWebApp');
          const result = this.impl.onOpenWebApp(params.url);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_FactoryResetArc_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.factoryResetArc');
          const result = this.impl.factoryResetArc();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_LaunchCameraApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.launchCameraApp');
          const result = this.impl.launchCameraApp(params.intent_id, params.mode, params.should_handle_result, params.should_down_scale, params.is_secure, params.task_id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIntentFiltersUpdatedForPackage');
          const result = this.impl.onIntentFiltersUpdatedForPackage(params.package_name, params.intent_filters);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_CloseCameraApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeCameraApp');
          const result = this.impl.closeCameraApp();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_IsChromeAppEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isChromeAppEnabled');
          const result = this.impl.isChromeAppEnabled(params.app);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.IntentHelperHost_IsChromeAppEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnSupportedLinksChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSupportedLinksChanged');
          const result = this.impl.onSupportedLinksChanged(params.added_packages, params.removed_packages, params.source);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnDownloadAddedDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDownloadAddedDeprecated');
          const result = this.impl.onDownloadAddedDeprecated(params.relative_path, params.owner_package_name);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnOpenAppWithIntent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpenAppWithIntent');
          const result = this.impl.onOpenAppWithIntent(params.start_url, params.intent);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnOpenGlobalActions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpenGlobalActions');
          const result = this.impl.onOpenGlobalActions();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnCloseSystemDialogs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCloseSystemDialogs');
          const result = this.impl.onCloseSystemDialogs();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperHost_OnAndroidSettingChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAndroidSettingChange');
          const result = this.impl.onAndroidSettingChange(params.setting, params.is_enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.IntentHelperHostReceiver = arc.mojom.IntentHelperHostReceiver;

arc.mojom.IntentHelperHostPtr = arc.mojom.IntentHelperHostRemote;
arc.mojom.IntentHelperHostRequest = arc.mojom.IntentHelperHostPendingReceiver;


// Interface: IntentHelperInstance
mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_AddPreferredPackage_ParamsSpec, 'arc.mojom.IntentHelperInstance_AddPreferredPackage_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_SetVerifiedLinks_ParamsSpec, 'arc.mojom.IntentHelperInstance_SetVerifiedLinks_Params', [
      mojo.internal.StructField('package_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('always_open', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_HandleIntent_ParamsSpec, 'arc.mojom.IntentHelperInstance_HandleIntent_Params', [
      mojo.internal.StructField('intent', 0, 0, arc.mojom.IntentInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activity', 8, 0, arc.mojom.ActivityNameSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_ParamsSpec, 'arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_Params', [
      mojo.internal.StructField('intent', 0, 0, arc.mojom.IntentInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activity', 8, 0, arc.mojom.ActivityNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('window_info', 16, 0, arc.mojom.WindowInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_HandleUrl_ParamsSpec, 'arc.mojom.IntentHelperInstance_HandleUrl_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_Init_ParamsSpec, 'arc.mojom.IntentHelperInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.IntentHelperHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_Init_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestActivityIcons_ParamsSpec, 'arc.mojom.IntentHelperInstance_RequestActivityIcons_Params', [
      mojo.internal.StructField('activities', 0, 0, mojo.internal.Array(arc.mojom.ActivityNameSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('scale_factor', 8, 0, arc.mojom.ScaleFactorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestActivityIcons_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_RequestActivityIcons_ResponseParams', [
      mojo.internal.StructField('icons', 0, 0, mojo.internal.Array(arc.mojom.ActivityIconSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ParamsSpec, 'arc.mojom.IntentHelperInstance_RequestIntentHandlerList_Params', [
      mojo.internal.StructField('intent', 0, 0, arc.mojom.IntentInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ResponseParams', [
      mojo.internal.StructField('handlers', 0, 0, mojo.internal.Array(arc.mojom.IntentHandlerInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ParamsSpec, 'arc.mojom.IntentHelperInstance_RequestUrlHandlerList_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ResponseParams', [
      mojo.internal.StructField('handlers', 0, 0, mojo.internal.Array(arc.mojom.IntentHandlerInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ParamsSpec, 'arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_Params', [
      mojo.internal.StructField('urls', 0, 0, mojo.internal.Array(arc.mojom.UrlWithMimeTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ResponseParams', [
      mojo.internal.StructField('handlers', 0, 0, mojo.internal.Array(arc.mojom.IntentHandlerInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_SendBroadcast_ParamsSpec, 'arc.mojom.IntentHelperInstance_SendBroadcast_Params', [
      mojo.internal.StructField('action', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cls', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('extras', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ParamsSpec, 'arc.mojom.IntentHelperInstance_RequestTextSelectionActions_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('scale_factor', 8, 0, arc.mojom.ScaleFactorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ResponseParams', [
      mojo.internal.StructField('actions', 0, 0, mojo.internal.Array(arc.mojom.TextSelectionActionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_HandleCameraResult_ParamsSpec, 'arc.mojom.IntentHelperInstance_HandleCameraResult_Params', [
      mojo.internal.StructField('action', 0, 0, arc.mojom.CameraIntentActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('intent_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_HandleCameraResult_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_HandleCameraResult_ResponseParams', [
      mojo.internal.StructField('is_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestDomainVerificationStatusUpdate_ParamsSpec, 'arc.mojom.IntentHelperInstance_RequestDomainVerificationStatusUpdate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_SetCaptionStyle_ParamsSpec, 'arc.mojom.IntentHelperInstance_SetCaptionStyle_Params', [
      mojo.internal.StructField('style', 0, 0, arc.mojom.CaptionStyleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_ParamsSpec, 'arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_Params', [
      mojo.internal.StructField('features', 0, 0, arc.mojom.AccessibilityFeaturesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.IntentHelperInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.IntentHelperInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.IntentHelperInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.IntentHelperInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.IntentHelperInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addPreferredPackage(package_name) {
    return this.$.addPreferredPackage(package_name);
  }
  setVerifiedLinks(package_names, always_open) {
    return this.$.setVerifiedLinks(package_names, always_open);
  }
  handleIntent(intent, activity) {
    return this.$.handleIntent(intent, activity);
  }
  handleIntentWithWindowInfo(intent, activity, window_info) {
    return this.$.handleIntentWithWindowInfo(intent, activity, window_info);
  }
  handleUrl(url, package_name) {
    return this.$.handleUrl(url, package_name);
  }
  init(host_remote) {
    return this.$.init(host_remote);
  }
  requestActivityIcons(activities, scale_factor) {
    return this.$.requestActivityIcons(activities, scale_factor);
  }
  requestIntentHandlerList(intent) {
    return this.$.requestIntentHandlerList(intent);
  }
  requestUrlHandlerList(url) {
    return this.$.requestUrlHandlerList(url);
  }
  requestUrlListHandlerList(urls) {
    return this.$.requestUrlListHandlerList(urls);
  }
  sendBroadcast(action, package_name, cls, extras) {
    return this.$.sendBroadcast(action, package_name, cls, extras);
  }
  requestTextSelectionActions(text, scale_factor) {
    return this.$.requestTextSelectionActions(text, scale_factor);
  }
  handleCameraResult(intent_id, action, data) {
    return this.$.handleCameraResult(intent_id, action, data);
  }
  requestDomainVerificationStatusUpdate() {
    return this.$.requestDomainVerificationStatusUpdate();
  }
  setCaptionStyle(style) {
    return this.$.setCaptionStyle(style);
  }
  enableAccessibilityFeatures(features) {
    return this.$.enableAccessibilityFeatures(features);
  }
};

arc.mojom.IntentHelperInstanceRemoteCallHandler = class {
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

  addPreferredPackage(package_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.IntentHelperInstance_AddPreferredPackage_ParamsSpec,
      null,
      [package_name],
      false);
  }

  setVerifiedLinks(package_names, always_open) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.IntentHelperInstance_SetVerifiedLinks_ParamsSpec,
      null,
      [package_names, always_open],
      false);
  }

  handleIntent(intent, activity) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.IntentHelperInstance_HandleIntent_ParamsSpec,
      null,
      [intent, activity],
      false);
  }

  handleIntentWithWindowInfo(intent, activity, window_info) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_ParamsSpec,
      null,
      [intent, activity, window_info],
      false);
  }

  handleUrl(url, package_name) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.IntentHelperInstance_HandleUrl_ParamsSpec,
      null,
      [url, package_name],
      false);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.IntentHelperInstance_Init_ParamsSpec,
      arc.mojom.IntentHelperInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  requestActivityIcons(activities, scale_factor) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      arc.mojom.IntentHelperInstance_RequestActivityIcons_ParamsSpec,
      arc.mojom.IntentHelperInstance_RequestActivityIcons_ResponseParamsSpec,
      [activities, scale_factor],
      false);
  }

  requestIntentHandlerList(intent) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ParamsSpec,
      arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ResponseParamsSpec,
      [intent],
      false);
  }

  requestUrlHandlerList(url) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ParamsSpec,
      arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ResponseParamsSpec,
      [url],
      false);
  }

  requestUrlListHandlerList(urls) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ParamsSpec,
      arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ResponseParamsSpec,
      [urls],
      false);
  }

  sendBroadcast(action, package_name, cls, extras) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      arc.mojom.IntentHelperInstance_SendBroadcast_ParamsSpec,
      null,
      [action, package_name, cls, extras],
      false);
  }

  requestTextSelectionActions(text, scale_factor) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ParamsSpec,
      arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ResponseParamsSpec,
      [text, scale_factor],
      false);
  }

  handleCameraResult(intent_id, action, data) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      arc.mojom.IntentHelperInstance_HandleCameraResult_ParamsSpec,
      arc.mojom.IntentHelperInstance_HandleCameraResult_ResponseParamsSpec,
      [intent_id, action, data],
      false);
  }

  requestDomainVerificationStatusUpdate() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      arc.mojom.IntentHelperInstance_RequestDomainVerificationStatusUpdate_ParamsSpec,
      null,
      [],
      false);
  }

  setCaptionStyle(style) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      arc.mojom.IntentHelperInstance_SetCaptionStyle_ParamsSpec,
      null,
      [style],
      false);
  }

  enableAccessibilityFeatures(features) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_ParamsSpec,
      null,
      [features],
      false);
  }

};

arc.mojom.IntentHelperInstance.getRemote = function() {
  let remote = new arc.mojom.IntentHelperInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.IntentHelperInstance',
    'context');
  return remote.$;
};

arc.mojom.IntentHelperInstanceReceiver = class {
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
             decoder.decodeStructInline(arc.mojom.IntentHelperInstance_AddPreferredPackage_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperInstance_SetVerifiedLinks_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperInstance_HandleIntent_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperInstance_HandleUrl_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperInstance_Init_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperInstance_RequestActivityIcons_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperInstance_SendBroadcast_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperInstance_HandleCameraResult_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperInstance_RequestDomainVerificationStatusUpdate_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperInstance_SetCaptionStyle_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_ParamsSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperInstance_AddPreferredPackage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addPreferredPackage');
          const result = this.impl.addPreferredPackage(params.package_name);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperInstance_SetVerifiedLinks_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVerifiedLinks');
          const result = this.impl.setVerifiedLinks(params.package_names, params.always_open);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperInstance_HandleIntent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleIntent');
          const result = this.impl.handleIntent(params.intent, params.activity);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleIntentWithWindowInfo');
          const result = this.impl.handleIntentWithWindowInfo(params.intent, params.activity, params.window_info);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperInstance_HandleUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleUrl');
          const result = this.impl.handleUrl(params.url, params.package_name);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.IntentHelperInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperInstance_RequestActivityIcons_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestActivityIcons');
          const result = this.impl.requestActivityIcons(params.activities, params.scale_factor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.IntentHelperInstance_RequestActivityIcons_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestIntentHandlerList');
          const result = this.impl.requestIntentHandlerList(params.intent);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestUrlHandlerList');
          const result = this.impl.requestUrlHandlerList(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestUrlListHandlerList');
          const result = this.impl.requestUrlListHandlerList(params.urls);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperInstance_SendBroadcast_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendBroadcast');
          const result = this.impl.sendBroadcast(params.action, params.package_name, params.cls, params.extras);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestTextSelectionActions');
          const result = this.impl.requestTextSelectionActions(params.text, params.scale_factor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperInstance_HandleCameraResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleCameraResult');
          const result = this.impl.handleCameraResult(params.intent_id, params.action, params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.IntentHelperInstance_HandleCameraResult_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperInstance_RequestDomainVerificationStatusUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestDomainVerificationStatusUpdate');
          const result = this.impl.requestDomainVerificationStatusUpdate();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperInstance_SetCaptionStyle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCaptionStyle');
          const result = this.impl.setCaptionStyle(params.style);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableAccessibilityFeatures');
          const result = this.impl.enableAccessibilityFeatures(params.features);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.IntentHelperInstanceReceiver = arc.mojom.IntentHelperInstanceReceiver;

arc.mojom.IntentHelperInstancePtr = arc.mojom.IntentHelperInstanceRemote;
arc.mojom.IntentHelperInstanceRequest = arc.mojom.IntentHelperInstancePendingReceiver;

