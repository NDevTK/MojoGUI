// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/intent_helper.mojom
// Module: arc.mojom

'use strict';

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

arc.mojom.CustomTabSessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnOpenInChromeClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.CustomTabSession_OnOpenInChromeClicked_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.CustomTabSession_OnOpenInChromeClicked_ParamsSpec.$, message.header.headerSize);
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

arc.mojom.IntentHelperHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(1, 0); // Default ordinal 1 -> Index 0
    this.ordinalMap.set(5, 1); // Default ordinal 5 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(0, 3); // Default ordinal 0 -> Index 3
    this.ordinalMap.set(17, 4); // Default ordinal 17 -> Index 4
    this.ordinalMap.set(3, 5); // Default ordinal 3 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(11, 9); // Default ordinal 11 -> Index 9
    this.ordinalMap.set(12, 10); // Default ordinal 12 -> Index 10
    this.ordinalMap.set(13, 11); // Default ordinal 13 -> Index 11
    this.ordinalMap.set(14, 12); // Default ordinal 14 -> Index 12
    this.ordinalMap.set(15, 13); // Default ordinal 15 -> Index 13
    this.ordinalMap.set(20, 14); // Default ordinal 20 -> Index 14
    this.ordinalMap.set(18, 15); // Default ordinal 18 -> Index 15
    this.ordinalMap.set(19, 16); // Default ordinal 19 -> Index 16
    this.ordinalMap.set(21, 17); // Default ordinal 21 -> Index 17
    this.ordinalMap.set(22, 18); // Default ordinal 22 -> Index 18
    this.ordinalMap.set(23, 19); // Default ordinal 23 -> Index 19
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnIconInvalidated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.IntentHelperHost_OnIconInvalidated_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_OnIntentFiltersUpdated_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_OnOpenDownloads_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_OnOpenUrl_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_OnOpenCustomTab_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_OpenWallpaperPicker_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_OpenVolumeControl_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_OnOpenChromePage_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_OnOpenWebApp_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_FactoryResetArc_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_LaunchCameraApp_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_CloseCameraApp_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_IsChromeAppEnabled_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_OnSupportedLinksChanged_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_OnDownloadAddedDeprecated_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_OnOpenAppWithIntent_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_OnOpenGlobalActions_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_OnCloseSystemDialogs_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperHost_OnAndroidSettingChange_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_OnIconInvalidated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onIconInvalidated');
          const result = this.impl.onIconInvalidated(params.package_name);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_OnIntentFiltersUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onIntentFiltersUpdated');
          const result = this.impl.onIntentFiltersUpdated(params.intent_filters);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_OnOpenDownloads_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onOpenDownloads');
          const result = this.impl.onOpenDownloads();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_OnOpenUrl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onOpenUrl');
          const result = this.impl.onOpenUrl(params.url);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_OnOpenCustomTab_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_OpenWallpaperPicker_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openWallpaperPicker');
          const result = this.impl.openWallpaperPicker();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_OpenVolumeControl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openVolumeControl');
          const result = this.impl.openVolumeControl();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_OnOpenChromePage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onOpenChromePage');
          const result = this.impl.onOpenChromePage(params.page);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_OnOpenWebApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onOpenWebApp');
          const result = this.impl.onOpenWebApp(params.url);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_FactoryResetArc_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.factoryResetArc');
          const result = this.impl.factoryResetArc();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_LaunchCameraApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.launchCameraApp');
          const result = this.impl.launchCameraApp(params.intent_id, params.mode, params.should_handle_result, params.should_down_scale, params.is_secure, params.task_id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_OnIntentFiltersUpdatedForPackage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onIntentFiltersUpdatedForPackage');
          const result = this.impl.onIntentFiltersUpdatedForPackage(params.package_name, params.intent_filters);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_CloseCameraApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeCameraApp');
          const result = this.impl.closeCameraApp();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_IsChromeAppEnabled_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_OnSupportedLinksChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSupportedLinksChanged');
          const result = this.impl.onSupportedLinksChanged(params.added_packages, params.removed_packages, params.source);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_OnDownloadAddedDeprecated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDownloadAddedDeprecated');
          const result = this.impl.onDownloadAddedDeprecated(params.relative_path, params.owner_package_name);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_OnOpenAppWithIntent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onOpenAppWithIntent');
          const result = this.impl.onOpenAppWithIntent(params.start_url, params.intent);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_OnOpenGlobalActions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onOpenGlobalActions');
          const result = this.impl.onOpenGlobalActions();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_OnCloseSystemDialogs_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onCloseSystemDialogs');
          const result = this.impl.onCloseSystemDialogs();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperHost_OnAndroidSettingChange_ParamsSpec.$, message.header.headerSize);
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

arc.mojom.IntentHelperInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(8, 0); // Default ordinal 8 -> Index 0
    this.ordinalMap.set(21, 1); // Default ordinal 21 -> Index 1
    this.ordinalMap.set(10, 2); // Default ordinal 10 -> Index 2
    this.ordinalMap.set(20, 3); // Default ordinal 20 -> Index 3
    this.ordinalMap.set(2, 4); // Default ordinal 2 -> Index 4
    this.ordinalMap.set(13, 5); // Default ordinal 13 -> Index 5
    this.ordinalMap.set(4, 6); // Default ordinal 4 -> Index 6
    this.ordinalMap.set(9, 7); // Default ordinal 9 -> Index 7
    this.ordinalMap.set(3, 8); // Default ordinal 3 -> Index 8
    this.ordinalMap.set(6, 9); // Default ordinal 6 -> Index 9
    this.ordinalMap.set(1, 10); // Default ordinal 1 -> Index 10
    this.ordinalMap.set(15, 11); // Default ordinal 15 -> Index 11
    this.ordinalMap.set(16, 12); // Default ordinal 16 -> Index 12
    this.ordinalMap.set(19, 13); // Default ordinal 19 -> Index 13
    this.ordinalMap.set(22, 14); // Default ordinal 22 -> Index 14
    this.ordinalMap.set(23, 15); // Default ordinal 23 -> Index 15
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AddPreferredPackage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.IntentHelperInstance_AddPreferredPackage_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperInstance_SetVerifiedLinks_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperInstance_HandleIntent_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperInstance_HandleUrl_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperInstance_Init_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperInstance_RequestActivityIcons_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperInstance_SendBroadcast_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperInstance_HandleCameraResult_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperInstance_RequestDomainVerificationStatusUpdate_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperInstance_SetCaptionStyle_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.IntentHelperInstance_AddPreferredPackage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addPreferredPackage');
          const result = this.impl.addPreferredPackage(params.package_name);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperInstance_SetVerifiedLinks_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setVerifiedLinks');
          const result = this.impl.setVerifiedLinks(params.package_names, params.always_open);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperInstance_HandleIntent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.handleIntent');
          const result = this.impl.handleIntent(params.intent, params.activity);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperInstance_HandleIntentWithWindowInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.handleIntentWithWindowInfo');
          const result = this.impl.handleIntentWithWindowInfo(params.intent, params.activity, params.window_info);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperInstance_HandleUrl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.handleUrl');
          const result = this.impl.handleUrl(params.url, params.package_name);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperInstance_Init_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.IntentHelperInstance_RequestActivityIcons_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.IntentHelperInstance_RequestIntentHandlerList_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.IntentHelperInstance_RequestUrlHandlerList_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.IntentHelperInstance_RequestUrlListHandlerList_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.IntentHelperInstance_SendBroadcast_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendBroadcast');
          const result = this.impl.sendBroadcast(params.action, params.package_name, params.cls, params.extras);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperInstance_RequestTextSelectionActions_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.IntentHelperInstance_HandleCameraResult_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.IntentHelperInstance_RequestDomainVerificationStatusUpdate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestDomainVerificationStatusUpdate');
          const result = this.impl.requestDomainVerificationStatusUpdate();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperInstance_SetCaptionStyle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCaptionStyle');
          const result = this.impl.setCaptionStyle(params.style);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.IntentHelperInstance_EnableAccessibilityFeatures_ParamsSpec.$, message.header.headerSize);
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

