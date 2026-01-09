// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/settings_ui.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Enum: SideSwipeEvent
chromecast.mojom.SideSwipeEvent = {
  BEGIN: 0,
};

// Enum: SideSwipeOrigin
chromecast.mojom.SideSwipeOrigin = {
  TOP: 0,
  BOTTOM: 1,
  LEFT: 2,
  RIGHT: 3,
};

// Interface: SettingsClient
chromecast.mojom.SettingsClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.SettingsClient';
  }

  handleSideSwipe(event, origin, touch_location) {
    // Method: HandleSideSwipe
    // Call: HandleSideSwipe(event, origin, touch_location)
  }

  sendPlatformInfo(platform_info_json) {
    // Method: SendPlatformInfo
    // Call: SendPlatformInfo(platform_info_json)
  }

};

chromecast.mojom.SettingsClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SettingsPlatform
chromecast.mojom.SettingsPlatformPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.SettingsPlatform';
  }

  connect(client) {
    // Method: Connect
    // Call: Connect(client)
  }

  requestVisible(visible) {
    // Method: RequestVisible
    // Call: RequestVisible(visible)
  }

};

chromecast.mojom.SettingsPlatformRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
