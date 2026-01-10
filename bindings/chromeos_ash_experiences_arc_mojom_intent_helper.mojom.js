// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/intent_helper.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: PatternType
arc.mojom.PatternType = {
  PATTERN_LITERAL: 0,
  PATTERN_PREFIX: 1,
  PATTERN_SIMPLE_GLOB: 2,
  Default: 3,
};
arc.mojom.PatternTypeSpec = { $: mojo.internal.Enum() };

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
  CUPSPRINTERS: 16,
  DOWNLOADS: 17,
  KEYBOARDOVERLAY: 18,
  LOCKSCREEN: 19,
  MANAGEACCESSIBILITY: 20,
  NETWORKSTYPEVPN: 21,
  ONSTARTUP: 22,
  PASSWORDS: 23,
  POINTEROVERLAY: 24,
  RESET: 25,
  SEARCH: 26,
  STORAGE: 27,
  SYNCSETUP: 28,
  ABOUTBLANK: 29,
  ABOUTDOWNLOADS: 30,
  ABOUTHISTORY: 31,
  MANAGEACCESSIBILITYTTS: 32,
  OSLANGUAGESINPUT: 33,
  OSLANGUAGESLANGUAGES: 34,
  SMARTPRIVACY: 35,
  PRIVACYHUB: 36,
  TEXTTOSPEECH: 37,
  AUDIO: 38,
  DISPLAYANDMAGNFICATION: 39,
  KEYBOARDANDTEXTINPUT: 40,
  CURSORANDTOUCHPAD: 41,
  AUDIOANDCAPTIONS: 42,
  PERDEVICEKEYBOARD: 43,
  PERDEVICEMOUSE: 44,
  PERDEVICETOUCHPAD: 45,
  PERDEVICEPOINTINGSTICK: 46,
  GRAPHICSTABLET: 47,
  NETWORKS: 48,
};
arc.mojom.ChromePageSpec = { $: mojo.internal.Enum() };

// Enum: ChromeApp
arc.mojom.ChromeApp = {
  CAMERA: 0,
  LAST: 1,
};
arc.mojom.ChromeAppSpec = { $: mojo.internal.Enum() };

// Enum: SupportedLinkChangeSource
arc.mojom.SupportedLinkChangeSource = {
  kUnknown: 0,
  kArcSystem: 1,
  kUserPreference: 2,
};
arc.mojom.SupportedLinkChangeSourceSpec = { $: mojo.internal.Enum() };

// Enum: AndroidSetting
arc.mojom.AndroidSetting = {
  kGeoLocation: 0,
  kGeoLocationAtBoot: 1,
  kGeoLocationUserTriggered: 2,
  kGeoLocationAccuracyUserTriggered: 3,
};
arc.mojom.AndroidSettingSpec = { $: mojo.internal.Enum() };

// Enum: CaptionTextShadowType
arc.mojom.CaptionTextShadowType = {
  kNone: 0,
  kUniform: 1,
  kDropShadow: 2,
  kRaised: 3,
  kDepressed: 4,
};
arc.mojom.CaptionTextShadowTypeSpec = { $: mojo.internal.Enum() };

// Struct: PatternMatcher
arc.mojom.PatternMatcherSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PatternMatcher',
      packedSize: 24,
      fields: [
        { name: 'pattern', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.PatternTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AuthorityEntry
arc.mojom.AuthorityEntrySpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthorityEntry',
      packedSize: 24,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: UriComponents
arc.mojom.UriComponentsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UriComponents',
      packedSize: 32,
      fields: [
        { name: 'scheme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'authority', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: IntentInfo
arc.mojom.IntentInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentInfo',
      packedSize: 72,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'categories', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'clip_data_uri', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 13 },
        { name: 'ui_bypassed', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 20 },
        { name: 'extras', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: true, minVersion: 22 },
        { name: 'uri_components', packedOffset: 56, packedBitOffset: 0, type: arc.mojom.UriComponentsSpec, nullable: true, minVersion: 30 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 13, packedSize: 48}, {version: 20, packedSize: 56}, {version: 22, packedSize: 64}, {version: 30, packedSize: 72}]
    }
  }
};

// Struct: IntentFilter
arc.mojom.IntentFilterSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentFilter',
      packedSize: 88,
      fields: [
        { name: 'actions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'categories', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'data_schemes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'data_authorities', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.AuthorityEntrySpec, false), nullable: true, minVersion: 10 },
        { name: 'data_paths', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.PatternMatcherSpec, false), nullable: true, minVersion: 10 },
        { name: 'deprecated_data_scheme_specific_parts', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.PatternMatcherSpec, false), nullable: true, minVersion: 10 },
        { name: 'package_name', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 21 },
        { name: 'mime_types', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 38 },
        { name: 'activity_name', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 39 },
        { name: 'activity_label', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 41 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 10, packedSize: 56}, {version: 21, packedSize: 64}, {version: 38, packedSize: 72}, {version: 39, packedSize: 80}, {version: 41, packedSize: 88}]
    }
  }
};

// Struct: IntentHandlerInfo
arc.mojom.IntentHandlerInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHandlerInfo',
      packedSize: 56,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'package_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'activity_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'action_type', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.ActionTypeSpec, nullable: false, minVersion: 4 },
        { name: 'is_preferred', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 6 },
        { name: 'action', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 11 },
        { name: 'fallback_url', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 14 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 4, packedSize: 40}, {version: 6, packedSize: 40}, {version: 11, packedSize: 48}, {version: 14, packedSize: 56}]
    }
  }
};

// Struct: ActivityIcon
arc.mojom.ActivityIconSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ActivityIcon',
      packedSize: 40,
      fields: [
        { name: 'activity', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ActivityNameSpec, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'icon', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'icon_png_data', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.RawIconPngDataSpec, nullable: true, minVersion: 40 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 40, packedSize: 40}]
    }
  }
};

// Struct: UrlWithMimeType
arc.mojom.UrlWithMimeTypeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UrlWithMimeType',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TextSelectionAction
arc.mojom.TextSelectionActionSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TextSelectionAction',
      packedSize: 56,
      fields: [
        { name: 'icon', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ActivityIconSpec, nullable: false, minVersion: 0 },
        { name: 'activity', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ActivityNameSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'action_intent', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.IntentInfoSpec, nullable: false, minVersion: 0 },
        { name: 'text_classifier_action', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 23 },
        { name: 'bitmap_icon', packedOffset: 40, packedBitOffset: 0, type: arc.mojom.ArcBitmapSpec, nullable: true, minVersion: 23 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 23, packedSize: 56}]
    }
  }
};

// Struct: LaunchFileInfo
arc.mojom.LaunchFileInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.LaunchFileInfo',
      packedSize: 48,
      fields: [
        { name: 'content_uri', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'removed_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.SafeBaseNameSpec, nullable: true, minVersion: 48 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 48, packedSize: 48}]
    }
  }
};

// Struct: LaunchIntent
arc.mojom.LaunchIntentSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.LaunchIntent',
      packedSize: 56,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'extra_subject', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'extra_text', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'files', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.LaunchFileInfoSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: SupportedLinksPackage
arc.mojom.SupportedLinksPackageSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SupportedLinksPackage',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'deprecated_filters', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.IntentFilterSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CaptionColor
arc.mojom.CaptionColorSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CaptionColor',
      packedSize: 16,
      fields: [
        { name: 'alpha', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'red', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'green', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'blue', packedOffset: 3, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CaptionStyle
arc.mojom.CaptionStyleSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CaptionStyle',
      packedSize: 40,
      fields: [
        { name: 'user_locale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'font_scale', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'text_color', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.CaptionColorSpec, nullable: true, minVersion: 0 },
        { name: 'background_color', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.CaptionColorSpec, nullable: true, minVersion: 0 },
        { name: 'text_shadow_type', packedOffset: 12, packedBitOffset: 0, type: arc.mojom.CaptionTextShadowTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: AccessibilityFeatures
arc.mojom.AccessibilityFeaturesSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AccessibilityFeatures',
      packedSize: 16,
      fields: [
        { name: 'docked_magnifier_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'focus_highlight_enabled', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'screen_magnifier_enabled', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'select_to_speak_enabled', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'spoken_feedback_enabled', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'switch_access_enabled', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: CustomTabSession
arc.mojom.CustomTabSession = {};

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
      []);
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

// ParamsSpec for OnOpenInChromeClicked
arc.mojom.CustomTabSession_OnOpenInChromeClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CustomTabSession.OnOpenInChromeClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
arc.mojom.CustomTabSessionPtr = arc.mojom.CustomTabSessionRemote;
arc.mojom.CustomTabSessionRequest = arc.mojom.CustomTabSessionPendingReceiver;


// Interface: IntentHelperHost
arc.mojom.IntentHelperHost = {};

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
      [package_name]);
  }

  onIntentFiltersUpdated(intent_filters) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.IntentHelperHost_OnIntentFiltersUpdated_ParamsSpec,
      null,
      [intent_filters]);
  }

  onOpenDownloads() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.IntentHelperHost_OnOpenDownloads_ParamsSpec,
      null,
      []);
  }

  onOpenUrl(url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.IntentHelperHost_OnOpenUrl_ParamsSpec,
      null,
      [url]);
  }

  onOpenCustomTab(url, task_id) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.IntentHelperHost_OnOpenCustomTab_ParamsSpec,
      arc.mojom.IntentHelperHost_OnOpenCustomTab_ResponseParamsSpec,
      [url, task_id]);
  }

  openWallpaperPicker() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.IntentHelperHost_OpenWallpaperPicker_ParamsSpec,
      null,
      []);
  }

  openVolumeControl() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.IntentHelperHost_OpenVolumeControl_ParamsSpec,
      null,
      []);
  }

  onOpenChromePage(page) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.IntentHelperHost_OnOpenChromePage_ParamsSpec,
      null,
      [page]);
  }

  onOpenWebApp(url) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.IntentHelperHost_OnOpenWebApp_ParamsSpec,
      null,
      [url]);
  }

  factoryResetArc() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.IntentHelperHost_FactoryResetArc_ParamsSpec,
      null,
      []);
  }

  launchCameraApp(intent_id, mode, should_handle_result, should_down_scale, is_secure, task_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.IntentHelperHost_LaunchCameraApp_ParamsSpec,
      null,
      [intent_id, mode, should_handle_result, should_down_scale, is_secure, task_id]);
  }

  onIntentFiltersUpdatedForPackage(package_name, intent_filters) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_ParamsSpec,
      null,
      [package_name, intent_filters]);
  }

  closeCameraApp() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.IntentHelperHost_CloseCameraApp_ParamsSpec,
      null,
      []);
  }

  isChromeAppEnabled(app) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.IntentHelperHost_IsChromeAppEnabled_ParamsSpec,
      arc.mojom.IntentHelperHost_IsChromeAppEnabled_ResponseParamsSpec,
      [app]);
  }

  onSupportedLinksChanged(added_packages, removed_packages, source) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.IntentHelperHost_OnSupportedLinksChanged_ParamsSpec,
      null,
      [added_packages, removed_packages, source]);
  }

  onDownloadAddedDeprecated(relative_path, owner_package_name) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      arc.mojom.IntentHelperHost_OnDownloadAddedDeprecated_ParamsSpec,
      null,
      [relative_path, owner_package_name]);
  }

  onOpenAppWithIntent(start_url, intent) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.IntentHelperHost_OnOpenAppWithIntent_ParamsSpec,
      null,
      [start_url, intent]);
  }

  onOpenGlobalActions() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      arc.mojom.IntentHelperHost_OnOpenGlobalActions_ParamsSpec,
      null,
      []);
  }

  onCloseSystemDialogs() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      arc.mojom.IntentHelperHost_OnCloseSystemDialogs_ParamsSpec,
      null,
      []);
  }

  onAndroidSettingChange(setting, is_enabled) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      arc.mojom.IntentHelperHost_OnAndroidSettingChange_ParamsSpec,
      null,
      [setting, is_enabled]);
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

// ParamsSpec for OnIconInvalidated
arc.mojom.IntentHelperHost_OnIconInvalidated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.OnIconInvalidated_Params',
      packedSize: 16,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnIntentFiltersUpdated
arc.mojom.IntentHelperHost_OnIntentFiltersUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.OnIntentFiltersUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'intent_filters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.IntentFilterSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnOpenDownloads
arc.mojom.IntentHelperHost_OnOpenDownloads_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.OnOpenDownloads_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnOpenUrl
arc.mojom.IntentHelperHost_OnOpenUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.OnOpenUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnOpenCustomTab
arc.mojom.IntentHelperHost_OnOpenCustomTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.OnOpenCustomTab_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'task_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.IntentHelperHost_OnOpenCustomTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenWallpaperPicker
arc.mojom.IntentHelperHost_OpenWallpaperPicker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.OpenWallpaperPicker_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenVolumeControl
arc.mojom.IntentHelperHost_OpenVolumeControl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.OpenVolumeControl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnOpenChromePage
arc.mojom.IntentHelperHost_OnOpenChromePage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.OnOpenChromePage_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ChromePageSpec, nullable: false, minVersion: 18 },
      ],
      versions: [{version: 18, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnOpenWebApp
arc.mojom.IntentHelperHost_OnOpenWebApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.OnOpenWebApp_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FactoryResetArc
arc.mojom.IntentHelperHost_FactoryResetArc_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.FactoryResetArc_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for LaunchCameraApp
arc.mojom.IntentHelperHost_LaunchCameraApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.LaunchCameraApp_Params',
      packedSize: 24,
      fields: [
        { name: 'intent_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'mode', packedOffset: 4, packedBitOffset: 0, type: arc.mojom.CameraIntentModeSpec, nullable: false, minVersion: 0 },
        { name: 'should_handle_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'should_down_scale', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_secure', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'task_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 36 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 36, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnIntentFiltersUpdatedForPackage
arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.OnIntentFiltersUpdatedForPackage_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'intent_filters', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.IntentFilterSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CloseCameraApp
arc.mojom.IntentHelperHost_CloseCameraApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.CloseCameraApp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for IsChromeAppEnabled
arc.mojom.IntentHelperHost_IsChromeAppEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.IsChromeAppEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'app', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ChromeAppSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.IntentHelperHost_IsChromeAppEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSupportedLinksChanged
arc.mojom.IntentHelperHost_OnSupportedLinksChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.OnSupportedLinksChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'added_packages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.SupportedLinksPackageSpec, false), nullable: false, minVersion: 0 },
        { name: 'removed_packages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.SupportedLinksPackageSpec, false), nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.SupportedLinkChangeSourceSpec, nullable: false, minVersion: 48 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 48, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnDownloadAddedDeprecated
arc.mojom.IntentHelperHost_OnDownloadAddedDeprecated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.OnDownloadAddedDeprecated_Params',
      packedSize: 24,
      fields: [
        { name: 'relative_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'owner_package_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnOpenAppWithIntent
arc.mojom.IntentHelperHost_OnOpenAppWithIntent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.OnOpenAppWithIntent_Params',
      packedSize: 24,
      fields: [
        { name: 'start_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'intent', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.LaunchIntentSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnOpenGlobalActions
arc.mojom.IntentHelperHost_OnOpenGlobalActions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.OnOpenGlobalActions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnCloseSystemDialogs
arc.mojom.IntentHelperHost_OnCloseSystemDialogs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.OnCloseSystemDialogs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnAndroidSettingChange
arc.mojom.IntentHelperHost_OnAndroidSettingChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperHost.OnAndroidSettingChange_Params',
      packedSize: 16,
      fields: [
        { name: 'setting', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AndroidSettingSpec, nullable: false, minVersion: 0 },
        { name: 'is_enabled', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.IntentHelperHostPtr = arc.mojom.IntentHelperHostRemote;
arc.mojom.IntentHelperHostRequest = arc.mojom.IntentHelperHostPendingReceiver;


// Interface: IntentHelperInstance
arc.mojom.IntentHelperInstance = {};

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
      [package_name]);
  }

  setVerifiedLinks(package_names, always_open) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      arc.mojom.IntentHelperInstance_SetVerifiedLinks_ParamsSpec,
      null,
      [package_names, always_open]);
  }

  handleIntent(intent, activity) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.IntentHelperInstance_HandleIntent_ParamsSpec,
      null,
      [intent, activity]);
  }

  handleIntentWithWindowInfo(intent, activity, window_info) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_ParamsSpec,
      null,
      [intent, activity, window_info]);
  }

  handleUrl(url, package_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.IntentHelperInstance_HandleUrl_ParamsSpec,
      null,
      [url, package_name]);
  }

  init(host_remote) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.IntentHelperInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  requestActivityIcons(activities, scale_factor) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.IntentHelperInstance_RequestActivityIcons_ParamsSpec,
      arc.mojom.IntentHelperInstance_RequestActivityIcons_ResponseParamsSpec,
      [activities, scale_factor]);
  }

  requestIntentHandlerList(intent) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ParamsSpec,
      arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ResponseParamsSpec,
      [intent]);
  }

  requestUrlHandlerList(url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ParamsSpec,
      arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ResponseParamsSpec,
      [url]);
  }

  requestUrlListHandlerList(urls) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ParamsSpec,
      arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ResponseParamsSpec,
      [urls]);
  }

  sendBroadcast(action, package_name, cls, extras) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.IntentHelperInstance_SendBroadcast_ParamsSpec,
      null,
      [action, package_name, cls, extras]);
  }

  requestTextSelectionActions(text, scale_factor) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ParamsSpec,
      arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ResponseParamsSpec,
      [text, scale_factor]);
  }

  handleCameraResult(intent_id, action, data) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.IntentHelperInstance_HandleCameraResult_ParamsSpec,
      arc.mojom.IntentHelperInstance_HandleCameraResult_ResponseParamsSpec,
      [intent_id, action, data]);
  }

  requestDomainVerificationStatusUpdate() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.IntentHelperInstance_RequestDomainVerificationStatusUpdate_ParamsSpec,
      null,
      []);
  }

  setCaptionStyle(style) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      arc.mojom.IntentHelperInstance_SetCaptionStyle_ParamsSpec,
      null,
      [style]);
  }

  enableAccessibilityFeatures(features) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_ParamsSpec,
      null,
      [features]);
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

// ParamsSpec for AddPreferredPackage
arc.mojom.IntentHelperInstance_AddPreferredPackage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperInstance.AddPreferredPackage_Params',
      packedSize: 16,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetVerifiedLinks
arc.mojom.IntentHelperInstance_SetVerifiedLinks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperInstance.SetVerifiedLinks_Params',
      packedSize: 24,
      fields: [
        { name: 'package_names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'always_open', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for HandleIntent
arc.mojom.IntentHelperInstance_HandleIntent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperInstance.HandleIntent_Params',
      packedSize: 24,
      fields: [
        { name: 'intent', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.IntentInfoSpec, nullable: false, minVersion: 0 },
        { name: 'activity', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ActivityNameSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for HandleIntentWithWindowInfo
arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperInstance.HandleIntentWithWindowInfo_Params',
      packedSize: 32,
      fields: [
        { name: 'intent', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.IntentInfoSpec, nullable: false, minVersion: 0 },
        { name: 'activity', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ActivityNameSpec, nullable: false, minVersion: 0 },
        { name: 'window_info', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.WindowInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for HandleUrl
arc.mojom.IntentHelperInstance_HandleUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperInstance.HandleUrl_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'package_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Init
arc.mojom.IntentHelperInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestActivityIcons
arc.mojom.IntentHelperInstance_RequestActivityIcons_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperInstance.RequestActivityIcons_Params',
      packedSize: 24,
      fields: [
        { name: 'activities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.ActivityNameSpec, false), nullable: false, minVersion: 0 },
        { name: 'scale_factor', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ScaleFactorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.IntentHelperInstance_RequestActivityIcons_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'icons', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.ActivityIconSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestIntentHandlerList
arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperInstance.RequestIntentHandlerList_Params',
      packedSize: 16,
      fields: [
        { name: 'intent', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.IntentInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'handlers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.IntentHandlerInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestUrlHandlerList
arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperInstance.RequestUrlHandlerList_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'handlers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.IntentHandlerInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestUrlListHandlerList
arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperInstance.RequestUrlListHandlerList_Params',
      packedSize: 16,
      fields: [
        { name: 'urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.UrlWithMimeTypeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'handlers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.IntentHandlerInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendBroadcast
arc.mojom.IntentHelperInstance_SendBroadcast_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperInstance.SendBroadcast_Params',
      packedSize: 40,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'package_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cls', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'extras', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for RequestTextSelectionActions
arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperInstance.RequestTextSelectionActions_Params',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'scale_factor', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ScaleFactorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'actions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.TextSelectionActionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HandleCameraResult
arc.mojom.IntentHelperInstance_HandleCameraResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperInstance.HandleCameraResult_Params',
      packedSize: 24,
      fields: [
        { name: 'intent_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'action', packedOffset: 4, packedBitOffset: 0, type: arc.mojom.CameraIntentActionSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.IntentHelperInstance_HandleCameraResult_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestDomainVerificationStatusUpdate
arc.mojom.IntentHelperInstance_RequestDomainVerificationStatusUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperInstance.RequestDomainVerificationStatusUpdate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetCaptionStyle
arc.mojom.IntentHelperInstance_SetCaptionStyle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperInstance.SetCaptionStyle_Params',
      packedSize: 16,
      fields: [
        { name: 'style', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.CaptionStyleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnableAccessibilityFeatures
arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHelperInstance.EnableAccessibilityFeatures_Params',
      packedSize: 16,
      fields: [
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AccessibilityFeaturesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.IntentHelperInstancePtr = arc.mojom.IntentHelperInstanceRemote;
arc.mojom.IntentHelperInstanceRequest = arc.mojom.IntentHelperInstancePendingReceiver;

