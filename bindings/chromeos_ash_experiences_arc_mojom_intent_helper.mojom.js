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
  HELP: 8,
  ACCOUNTS: 9,
  APPEARANCE: 10,
  AUTOFILL: 11,
  BLUETOOTHDEVICES: 12,
  CHANGEPICTURE: 13,
  CLEARBROWSERDATA: 14,
  CUPSPRINTERS: 15,
  DOWNLOADS: 16,
  KEYBOARDOVERLAY: 17,
  LOCKSCREEN: 18,
  MANAGEACCESSIBILITY: 19,
  NETWORKSTYPEVPN: 20,
  ONSTARTUP: 21,
  PASSWORDS: 22,
  POINTEROVERLAY: 23,
  RESET: 24,
  SEARCH: 25,
  STORAGE: 26,
  SYNCSETUP: 27,
  ABOUTBLANK: 28,
  ABOUTDOWNLOADS: 29,
  ABOUTHISTORY: 30,
  OSLANGUAGESLANGUAGES: 31,
  PRIVACYHUB: 32,
  TEXTTOSPEECH: 33,
  AUDIO: 34,
  DISPLAYANDMAGNFICATION: 35,
  KEYBOARDANDTEXTINPUT: 36,
  CURSORANDTOUCHPAD: 37,
  AUDIOANDCAPTIONS: 38,
  PERDEVICEKEYBOARD: 39,
  PERDEVICEMOUSE: 40,
  PERDEVICETOUCHPAD: 41,
  PERDEVICEPOINTINGSTICK: 42,
  GRAPHICSTABLET: 43,
  NETWORKS: 44,
};

// Enum: ChromeApp
arc.mojom.ChromeApp = {
  CAMERA: 0,
  LAST: 1,
};

// Enum: SupportedLinkChangeSource
arc.mojom.SupportedLinkChangeSource = {
  kUnknown: 0,
};

// Enum: AndroidSetting
arc.mojom.AndroidSetting = {
  kGeoLocation: 0,
  replaced: 1,
  kGeoLocationUserTriggered: 2,
};

// Enum: CaptionTextShadowType
arc.mojom.CaptionTextShadowType = {
};

// Struct: PatternMatcher
arc.mojom.PatternMatcher = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : "";
  }
};

// Struct: AuthorityEntry
arc.mojom.AuthorityEntry = class {
  constructor(values = {}) {
    this.port = values.port !== undefined ? values.port : 0;
  }
};

// Struct: UriComponents
arc.mojom.UriComponents = class {
  constructor(values = {}) {
    this.path = values.path !== undefined ? values.path : "";
  }
};

// Struct: IntentInfo
arc.mojom.IntentInfo = class {
  constructor(values = {}) {
    this.extras = values.extras !== undefined ? values.extras : false;
    this.uri_components = values.uri_components !== undefined ? values.uri_components : null;
  }
};

// Struct: IntentFilter
arc.mojom.IntentFilter = class {
  constructor(values = {}) {
    this.activity_label = values.activity_label !== undefined ? values.activity_label : "";
  }
};

// Struct: IntentHandlerInfo
arc.mojom.IntentHandlerInfo = class {
  constructor(values = {}) {
    this.fallback_url = values.fallback_url !== undefined ? values.fallback_url : false;
  }
};

// Struct: ActivityIcon
arc.mojom.ActivityIcon = class {
  constructor(values = {}) {
    this.icon_png_data = values.icon_png_data !== undefined ? values.icon_png_data : 0;
  }
};

// Struct: UrlWithMimeType
arc.mojom.UrlWithMimeType = class {
  constructor(values = {}) {
    this.mime_type = values.mime_type !== undefined ? values.mime_type : "";
  }
};

// Struct: TextSelectionAction
arc.mojom.TextSelectionAction = class {
  constructor(values = {}) {
    this.activity = values.activity !== undefined ? values.activity : null;
    this.bitmap_icon = values.bitmap_icon !== undefined ? values.bitmap_icon : 0;
  }
};

// Struct: LaunchFileInfo
arc.mojom.LaunchFileInfo = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : "";
    this.name = values.name !== undefined ? values.name : 0;
  }
};

// Struct: LaunchIntent
arc.mojom.LaunchIntent = class {
  constructor(values = {}) {
    this.files = values.files !== undefined ? values.files : "";
  }
};

// Struct: SupportedLinksPackage
arc.mojom.SupportedLinksPackage = class {
  constructor(values = {}) {
    this.deprecated_filters = values.deprecated_filters !== undefined ? values.deprecated_filters : 0;
  }
};

// Struct: CaptionColor
arc.mojom.CaptionColor = class {
  constructor(values = {}) {
    this.blue = values.blue !== undefined ? values.blue : 0;
  }
};

// Struct: CaptionStyle
arc.mojom.CaptionStyle = class {
  constructor(values = {}) {
    this.text_shadow_type = values.text_shadow_type !== undefined ? values.text_shadow_type : 0;
  }
};

// Struct: AccessibilityFeatures
arc.mojom.AccessibilityFeatures = class {
  constructor(values = {}) {
    this.switch_access_enabled = values.switch_access_enabled !== undefined ? values.switch_access_enabled : false;
  }
};

// Interface: CustomTabSession
arc.mojom.CustomTabSessionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.CustomTabSession';
  }

};

arc.mojom.CustomTabSessionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: IntentHelperHost
arc.mojom.IntentHelperHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.IntentHelperHost';
  }

};

arc.mojom.IntentHelperHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: IntentHelperInstance
arc.mojom.IntentHelperInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.IntentHelperInstance';
  }

};

arc.mojom.IntentHelperInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
