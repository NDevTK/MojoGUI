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

// Enum: ChromeApp
arc.mojom.ChromeApp = {
  CAMERA: 0,
  LAST: 1,
};

// Enum: SupportedLinkChangeSource
arc.mojom.SupportedLinkChangeSource = {
  kUnknown: 0,
  kArcSystem: 1,
  kUserPreference: 2,
};

// Enum: AndroidSetting
arc.mojom.AndroidSetting = {
  kGeoLocation: 0,
  kGeoLocationAtBoot: 1,
  kGeoLocationUserTriggered: 2,
  kGeoLocationAccuracyUserTriggered: 3,
};

// Enum: CaptionTextShadowType
arc.mojom.CaptionTextShadowType = {
  kNone: 0,
  kUniform: 1,
  kDropShadow: 2,
  kRaised: 3,
  kDepressed: 4,
};

// Struct: PatternMatcher
arc.mojom.PatternMatcherSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PatternMatcher',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AuthorityEntry
arc.mojom.AuthorityEntrySpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthorityEntry',
      packedSize: 16,
      fields: [
        { name: 'port', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UriComponents
arc.mojom.UriComponentsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UriComponents',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IntentInfo
arc.mojom.IntentInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentInfo',
      packedSize: 16,
      fields: [
        { name: 'uri_components', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IntentFilter
arc.mojom.IntentFilterSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentFilter',
      packedSize: 16,
      fields: [
        { name: 'activity_label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IntentHandlerInfo
arc.mojom.IntentHandlerInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IntentHandlerInfo',
      packedSize: 16,
      fields: [
        { name: 'fallback_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ActivityIcon
arc.mojom.ActivityIconSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ActivityIcon',
      packedSize: 16,
      fields: [
        { name: 'icon_png_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UrlWithMimeType
arc.mojom.UrlWithMimeTypeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UrlWithMimeType',
      packedSize: 16,
      fields: [
        { name: 'mime_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TextSelectionAction
arc.mojom.TextSelectionActionSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TextSelectionAction',
      packedSize: 16,
      fields: [
        { name: 'bitmap_icon', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LaunchFileInfo
arc.mojom.LaunchFileInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.LaunchFileInfo',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LaunchIntent
arc.mojom.LaunchIntentSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.LaunchIntent',
      packedSize: 16,
      fields: [
        { name: 'files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SupportedLinksPackage
arc.mojom.SupportedLinksPackageSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SupportedLinksPackage',
      packedSize: 16,
      fields: [
        { name: 'deprecated_filters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'blue', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CaptionStyle
arc.mojom.CaptionStyleSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CaptionStyle',
      packedSize: 16,
      fields: [
        { name: 'text_shadow_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'switch_access_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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

// Legacy compatibility
arc.mojom.IntentHelperInstancePtr = arc.mojom.IntentHelperInstanceRemote;
arc.mojom.IntentHelperInstanceRequest = arc.mojom.IntentHelperInstancePendingReceiver;

