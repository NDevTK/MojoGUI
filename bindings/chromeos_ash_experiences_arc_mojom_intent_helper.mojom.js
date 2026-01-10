// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/intent_helper.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};
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
      mojo.internal.StructField('type', 8, 0, arc.mojom.PatternTypeSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('uri_components', 56, 0, arc.mojom.UriComponentsSpec, null, true, 30, undefined),
    ],
    [[0, 40], [13, 48], [20, 56], [22, 64], [30, 72]]);

// Struct: IntentFilter
mojo.internal.Struct(
    arc.mojom.IntentFilterSpec, 'arc.mojom.IntentFilter', [
      mojo.internal.StructField('actions', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('categories', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('data_schemes', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('data_authorities', 24, 0, mojo.internal.Array(arc.mojom.AuthorityEntrySpec, false), null, true, 10, undefined),
      mojo.internal.StructField('data_paths', 32, 0, mojo.internal.Array(arc.mojom.PatternMatcherSpec, false), null, true, 10, undefined),
      mojo.internal.StructField('deprecated_data_scheme_specific_parts', 40, 0, mojo.internal.Array(arc.mojom.PatternMatcherSpec, false), null, true, 10, undefined),
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
      mojo.internal.StructField('action_type', 24, 0, arc.mojom.ActionTypeSpec, null, false, 4, undefined),
      mojo.internal.StructField('is_preferred', 28, 0, mojo.internal.Bool, false, false, 6, undefined),
      mojo.internal.StructField('action', 32, 0, mojo.internal.String, null, true, 11, undefined),
      mojo.internal.StructField('fallback_url', 40, 0, mojo.internal.String, null, true, 14, undefined),
    ],
    [[0, 32], [4, 40], [6, 40], [11, 48], [14, 56]]);

// Struct: ActivityIcon
mojo.internal.Struct(
    arc.mojom.ActivityIconSpec, 'arc.mojom.ActivityIcon', [
      mojo.internal.StructField('activity', 0, 0, arc.mojom.ActivityNameSpec, null, false, 0, undefined),
      mojo.internal.StructField('width', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('icon', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('icon_png_data', 24, 0, arc.mojom.RawIconPngDataSpec, null, true, 40, undefined),
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
      mojo.internal.StructField('icon', 0, 0, arc.mojom.ActivityIconSpec, null, false, 0, undefined),
      mojo.internal.StructField('activity', 8, 0, arc.mojom.ActivityNameSpec, null, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('action_intent', 24, 0, arc.mojom.IntentInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('text_classifier_action', 32, 0, mojo.internal.Bool, false, false, 23, undefined),
      mojo.internal.StructField('bitmap_icon', 40, 0, arc.mojom.ArcBitmapSpec, null, true, 23, undefined),
    ],
    [[0, 40], [23, 56]]);

// Struct: LaunchFileInfo
mojo.internal.Struct(
    arc.mojom.LaunchFileInfoSpec, 'arc.mojom.LaunchFileInfo', [
      mojo.internal.StructField('content_uri', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('removed_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('size', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('name', 32, 0, mojo_base.mojom.SafeBaseNameSpec, null, true, 48, undefined),
    ],
    [[0, 40], [48, 48]]);

// Struct: LaunchIntent
mojo.internal.Struct(
    arc.mojom.LaunchIntentSpec, 'arc.mojom.LaunchIntent', [
      mojo.internal.StructField('action', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('extra_subject', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('extra_text', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('files', 40, 0, mojo.internal.Array(arc.mojom.LaunchFileInfoSpec, false), null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SupportedLinksPackage
mojo.internal.Struct(
    arc.mojom.SupportedLinksPackageSpec, 'arc.mojom.SupportedLinksPackage', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('deprecated_filters', 8, 0, mojo.internal.Array(arc.mojom.IntentFilterSpec, false), null, true, 0, undefined),
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
      mojo.internal.StructField('font_scale', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('text_color', 16, 0, arc.mojom.CaptionColorSpec, null, true, 0, undefined),
      mojo.internal.StructField('background_color', 24, 0, arc.mojom.CaptionColorSpec, null, true, 0, undefined),
      mojo.internal.StructField('text_shadow_type', 32, 0, arc.mojom.CaptionTextShadowTypeSpec, null, false, 0, undefined),
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
};

arc.mojom.CustomTabSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onOpenInChromeClicked() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
      mojo.internal.StructField('intent_filters', 0, 0, mojo.internal.Array(arc.mojom.IntentFilterSpec, false), null, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.CustomTabSessionRemote), null, true, 0, undefined),
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
      mojo.internal.StructField('page', 0, 0, arc.mojom.ChromePageSpec, null, false, 18, undefined),
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
      mojo.internal.StructField('intent_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('mode', 4, 0, arc.mojom.CameraIntentModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('should_handle_result', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_down_scale', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_secure', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('task_id', 12, 0, mojo.internal.Int32, 0, false, 36, undefined),
    ],
    [[0, 24], [36, 24]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_ParamsSpec, 'arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('intent_filters', 8, 0, mojo.internal.Array(arc.mojom.IntentFilterSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_CloseCameraApp_ParamsSpec, 'arc.mojom.IntentHelperHost_CloseCameraApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_IsChromeAppEnabled_ParamsSpec, 'arc.mojom.IntentHelperHost_IsChromeAppEnabled_Params', [
      mojo.internal.StructField('app', 0, 0, arc.mojom.ChromeAppSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_IsChromeAppEnabled_ResponseParamsSpec, 'arc.mojom.IntentHelperHost_IsChromeAppEnabled_ResponseParams', [
      mojo.internal.StructField('is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperHost_OnSupportedLinksChanged_ParamsSpec, 'arc.mojom.IntentHelperHost_OnSupportedLinksChanged_Params', [
      mojo.internal.StructField('added_packages', 0, 0, mojo.internal.Array(arc.mojom.SupportedLinksPackageSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('removed_packages', 8, 0, mojo.internal.Array(arc.mojom.SupportedLinksPackageSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('source', 16, 0, arc.mojom.SupportedLinkChangeSourceSpec, null, false, 48, undefined),
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
      mojo.internal.StructField('start_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('intent', 8, 0, arc.mojom.LaunchIntentSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('setting', 0, 0, arc.mojom.AndroidSettingSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_enabled', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
};

arc.mojom.IntentHelperHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onIconInvalidated(package_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.IntentHelperHost_OnIconInvalidated_ParamsSpec,
      null,
      [package_name],
      false);
  }

  onIntentFiltersUpdated(intent_filters) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.IntentHelperHost_OnIntentFiltersUpdated_ParamsSpec,
      null,
      [intent_filters],
      false);
  }

  onOpenDownloads() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.IntentHelperHost_OnOpenDownloads_ParamsSpec,
      null,
      [],
      false);
  }

  onOpenUrl(url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.IntentHelperHost_OnOpenUrl_ParamsSpec,
      null,
      [url],
      false);
  }

  onOpenCustomTab(url, task_id) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.IntentHelperHost_OnOpenCustomTab_ParamsSpec,
      arc.mojom.IntentHelperHost_OnOpenCustomTab_ResponseParamsSpec,
      [url, task_id],
      false);
  }

  openWallpaperPicker() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.IntentHelperHost_OpenWallpaperPicker_ParamsSpec,
      null,
      [],
      false);
  }

  openVolumeControl() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.IntentHelperHost_OpenVolumeControl_ParamsSpec,
      null,
      [],
      false);
  }

  onOpenChromePage(page) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.IntentHelperHost_OnOpenChromePage_ParamsSpec,
      null,
      [page],
      false);
  }

  onOpenWebApp(url) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.IntentHelperHost_OnOpenWebApp_ParamsSpec,
      null,
      [url],
      false);
  }

  factoryResetArc() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.IntentHelperHost_FactoryResetArc_ParamsSpec,
      null,
      [],
      false);
  }

  launchCameraApp(intent_id, mode, should_handle_result, should_down_scale, is_secure, task_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.IntentHelperHost_LaunchCameraApp_ParamsSpec,
      null,
      [intent_id, mode, should_handle_result, should_down_scale, is_secure, task_id],
      false);
  }

  onIntentFiltersUpdatedForPackage(package_name, intent_filters) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_ParamsSpec,
      null,
      [package_name, intent_filters],
      false);
  }

  closeCameraApp() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.IntentHelperHost_CloseCameraApp_ParamsSpec,
      null,
      [],
      false);
  }

  isChromeAppEnabled(app) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.IntentHelperHost_IsChromeAppEnabled_ParamsSpec,
      arc.mojom.IntentHelperHost_IsChromeAppEnabled_ResponseParamsSpec,
      [app],
      false);
  }

  onSupportedLinksChanged(added_packages, removed_packages, source) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.IntentHelperHost_OnSupportedLinksChanged_ParamsSpec,
      null,
      [added_packages, removed_packages, source],
      false);
  }

  onDownloadAddedDeprecated(relative_path, owner_package_name) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      arc.mojom.IntentHelperHost_OnDownloadAddedDeprecated_ParamsSpec,
      null,
      [relative_path, owner_package_name],
      false);
  }

  onOpenAppWithIntent(start_url, intent) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.IntentHelperHost_OnOpenAppWithIntent_ParamsSpec,
      null,
      [start_url, intent],
      false);
  }

  onOpenGlobalActions() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      arc.mojom.IntentHelperHost_OnOpenGlobalActions_ParamsSpec,
      null,
      [],
      false);
  }

  onCloseSystemDialogs() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      arc.mojom.IntentHelperHost_OnCloseSystemDialogs_ParamsSpec,
      null,
      [],
      false);
  }

  onAndroidSettingChange(setting, is_enabled) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
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
      mojo.internal.StructField('intent', 0, 0, arc.mojom.IntentInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('activity', 8, 0, arc.mojom.ActivityNameSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_ParamsSpec, 'arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_Params', [
      mojo.internal.StructField('intent', 0, 0, arc.mojom.IntentInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('activity', 8, 0, arc.mojom.ActivityNameSpec, null, false, 0, undefined),
      mojo.internal.StructField('window_info', 16, 0, arc.mojom.WindowInfoSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.IntentHelperHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_Init_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestActivityIcons_ParamsSpec, 'arc.mojom.IntentHelperInstance_RequestActivityIcons_Params', [
      mojo.internal.StructField('activities', 0, 0, mojo.internal.Array(arc.mojom.ActivityNameSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('scale_factor', 8, 0, arc.mojom.ScaleFactorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestActivityIcons_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_RequestActivityIcons_ResponseParams', [
      mojo.internal.StructField('icons', 0, 0, mojo.internal.Array(arc.mojom.ActivityIconSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ParamsSpec, 'arc.mojom.IntentHelperInstance_RequestIntentHandlerList_Params', [
      mojo.internal.StructField('intent', 0, 0, arc.mojom.IntentInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ResponseParams', [
      mojo.internal.StructField('handlers', 0, 0, mojo.internal.Array(arc.mojom.IntentHandlerInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ParamsSpec, 'arc.mojom.IntentHelperInstance_RequestUrlHandlerList_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ResponseParams', [
      mojo.internal.StructField('handlers', 0, 0, mojo.internal.Array(arc.mojom.IntentHandlerInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ParamsSpec, 'arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_Params', [
      mojo.internal.StructField('urls', 0, 0, mojo.internal.Array(arc.mojom.UrlWithMimeTypeSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ResponseParams', [
      mojo.internal.StructField('handlers', 0, 0, mojo.internal.Array(arc.mojom.IntentHandlerInfoSpec, false), null, false, 0, undefined),
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
      mojo.internal.StructField('scale_factor', 8, 0, arc.mojom.ScaleFactorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ResponseParamsSpec, 'arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ResponseParams', [
      mojo.internal.StructField('actions', 0, 0, mojo.internal.Array(arc.mojom.TextSelectionActionSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_HandleCameraResult_ParamsSpec, 'arc.mojom.IntentHelperInstance_HandleCameraResult_Params', [
      mojo.internal.StructField('intent_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('action', 4, 0, arc.mojom.CameraIntentActionSpec, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      mojo.internal.StructField('style', 0, 0, arc.mojom.CaptionStyleSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_ParamsSpec, 'arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_Params', [
      mojo.internal.StructField('features', 0, 0, arc.mojom.AccessibilityFeaturesSpec, null, false, 0, undefined),
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
};

arc.mojom.IntentHelperInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addPreferredPackage(package_name) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.IntentHelperInstance_AddPreferredPackage_ParamsSpec,
      null,
      [package_name],
      false);
  }

  setVerifiedLinks(package_names, always_open) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      arc.mojom.IntentHelperInstance_SetVerifiedLinks_ParamsSpec,
      null,
      [package_names, always_open],
      false);
  }

  handleIntent(intent, activity) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.IntentHelperInstance_HandleIntent_ParamsSpec,
      null,
      [intent, activity],
      false);
  }

  handleIntentWithWindowInfo(intent, activity, window_info) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_ParamsSpec,
      null,
      [intent, activity, window_info],
      false);
  }

  handleUrl(url, package_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.IntentHelperInstance_HandleUrl_ParamsSpec,
      null,
      [url, package_name],
      false);
  }

  init(host_remote) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.IntentHelperInstance_Init_ParamsSpec,
      arc.mojom.IntentHelperInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  requestActivityIcons(activities, scale_factor) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.IntentHelperInstance_RequestActivityIcons_ParamsSpec,
      arc.mojom.IntentHelperInstance_RequestActivityIcons_ResponseParamsSpec,
      [activities, scale_factor],
      false);
  }

  requestIntentHandlerList(intent) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ParamsSpec,
      arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ResponseParamsSpec,
      [intent],
      false);
  }

  requestUrlHandlerList(url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ParamsSpec,
      arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ResponseParamsSpec,
      [url],
      false);
  }

  requestUrlListHandlerList(urls) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ParamsSpec,
      arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ResponseParamsSpec,
      [urls],
      false);
  }

  sendBroadcast(action, package_name, cls, extras) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.IntentHelperInstance_SendBroadcast_ParamsSpec,
      null,
      [action, package_name, cls, extras],
      false);
  }

  requestTextSelectionActions(text, scale_factor) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ParamsSpec,
      arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ResponseParamsSpec,
      [text, scale_factor],
      false);
  }

  handleCameraResult(intent_id, action, data) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.IntentHelperInstance_HandleCameraResult_ParamsSpec,
      arc.mojom.IntentHelperInstance_HandleCameraResult_ResponseParamsSpec,
      [intent_id, action, data],
      false);
  }

  requestDomainVerificationStatusUpdate() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.IntentHelperInstance_RequestDomainVerificationStatusUpdate_ParamsSpec,
      null,
      [],
      false);
  }

  setCaptionStyle(style) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      arc.mojom.IntentHelperInstance_SetCaptionStyle_ParamsSpec,
      null,
      [style],
      false);
  }

  enableAccessibilityFeatures(features) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
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

arc.mojom.IntentHelperInstancePtr = arc.mojom.IntentHelperInstanceRemote;
arc.mojom.IntentHelperInstanceRequest = arc.mojom.IntentHelperInstancePendingReceiver;

