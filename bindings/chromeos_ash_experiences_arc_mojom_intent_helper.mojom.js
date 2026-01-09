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

// Interface: CustomTabSession
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

