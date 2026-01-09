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
    this."Map" = values."Map" !== undefined ? values."Map" : null;
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

  0() {
    // Method: 0
    // Call: 0()
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

  1(package_name) {
    // Method: 1
    // Call: 1(package_name)
  }

  5(intent_filters) {
    // Method: 5
    // Call: 5(intent_filters)
  }

  2() {
    // Method: 2
    // Call: 2()
  }

  0(url) {
    // Method: 0
    // Call: 0(url)
  }

  17(url, task_id) {
    // Method: 17
    return new Promise((resolve) => {
      // Call: 17(url, task_id)
      resolve({});
    });
  }

  3() {
    // Method: 3
    // Call: 3()
  }

  6() {
    // Method: 6
    // Call: 6()
  }

  7(page) {
    // Method: 7
    // Call: 7(page)
  }

  8(url) {
    // Method: 8
    // Call: 8(url)
  }

  11() {
    // Method: 11
    // Call: 11()
  }

  12(intent_id, mode, should_handle_result, should_down_scale, is_secure, task_id) {
    // Method: 12
    // Call: 12(intent_id, mode, should_handle_result, should_down_scale, is_secure, task_id)
  }

  13(package_name, intent_filters) {
    // Method: 13
    // Call: 13(package_name, intent_filters)
  }

  14() {
    // Method: 14
    // Call: 14()
  }

  15(app) {
    // Method: 15
    return new Promise((resolve) => {
      // Call: 15(app)
      resolve({});
    });
  }

  20(added_packages, removed_packages, source) {
    // Method: 20
    // Call: 20(added_packages, removed_packages, source)
  }

  onMediaStoreUriAdded() {
    // Method: OnMediaStoreUriAdded
    // Call: OnMediaStoreUriAdded()
  }

  folder("Download/foo/bar.pdf") {
    // Method: folder
    // Call: folder("Download/foo/bar.pdf")
  }

  folder(subdirectory) {
    // Method: folder
    // Call: folder(subdirectory)
  }

  download() {
    // Method: download
    // Call: download()
  }

  18(relative_path, owner_package_name) {
    // Method: 18
    // Call: 18(relative_path, owner_package_name)
  }

  19(start_url, intent) {
    // Method: 19
    // Call: 19(start_url, intent)
  }

  21() {
    // Method: 21
    // Call: 21()
  }

  22() {
    // Method: 22
    // Call: 22()
  }

  23(setting, is_enabled) {
    // Method: 23
    // Call: 23(setting, is_enabled)
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

  8(package_name) {
    // Method: 8
    // Call: 8(package_name)
  }

  open(is) {
    // Method: open
    // Call: open(is)
  }

  ask(false) {
    // Method: ask
    // Call: ask(false)
  }

  21(package_names, always_open) {
    // Method: 21
    // Call: 21(package_names, always_open)
  }

  handleIntentWithWindowInfo() {
    // Method: HandleIntentWithWindowInfo
    // Call: HandleIntentWithWindowInfo()
  }

  10(intent, activity) {
    // Method: 10
    // Call: 10(intent, activity)
  }

  20(intent, activity, window_info) {
    // Method: 20
    // Call: 20(intent, activity, window_info)
  }

  2(url, package_name) {
    // Method: 2
    // Call: 2(url, package_name)
  }

  13(host_remote) {
    // Method: 13
    // Call: 13(host_remote)
  }

  4(activities, scale_factor) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(activities, scale_factor)
      resolve({});
    });
  }

  9(intent) {
    // Method: 9
    return new Promise((resolve) => {
      // Call: 9(intent)
      resolve({});
    });
  }

  3(url) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(url)
      resolve({});
    });
  }

  6(urls) {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6(urls)
      resolve({});
    });
  }

  1(action, package_name, cls, extras) {
    // Method: 1
    // Call: 1(action, package_name, cls, extras)
  }

  15(text, scale_factor) {
    // Method: 15
    return new Promise((resolve) => {
      // Call: 15(text, scale_factor)
      resolve({});
    });
  }

  16(intent_id, action, data) {
    // Method: 16
    return new Promise((resolve) => {
      // Call: 16(intent_id, action, data)
      resolve({});
    });
  }

  19() {
    // Method: 19
    // Call: 19()
  }

  22(style) {
    // Method: 22
    // Call: 22(style)
  }

  23(features) {
    // Method: 23
    // Call: 23(features)
  }

};

arc.mojom.IntentHelperInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
