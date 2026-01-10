// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/settings_ui.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: SideSwipeEvent
chromecast.mojom.mojom.SideSwipeEvent = {
  BEGIN: 0,
  CONTINUE: 1,
  END: 2,
};
chromecast.mojom.mojom.SideSwipeEventSpec = { $: mojo.internal.Enum() };

// Enum: SideSwipeOrigin
chromecast.mojom.mojom.SideSwipeOrigin = {
  TOP: 0,
  BOTTOM: 1,
  LEFT: 2,
  RIGHT: 3,
};
chromecast.mojom.mojom.SideSwipeOriginSpec = { $: mojo.internal.Enum() };

// Interface: SettingsClient
chromecast.mojom.mojom.SettingsClient = {};

chromecast.mojom.mojom.SettingsClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.SettingsClientRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.SettingsClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.SettingsClientPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.SettingsClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.SettingsClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleSideSwipe(event, origin, touch_location) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.SettingsClient_HandleSideSwipe_ParamsSpec,
      null,
      [event, origin, touch_location]);
  }

  sendPlatformInfo(platform_info_json) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.mojom.SettingsClient_SendPlatformInfo_ParamsSpec,
      null,
      [platform_info_json]);
  }

};

chromecast.mojom.mojom.SettingsClient.getRemote = function() {
  let remote = new chromecast.mojom.mojom.SettingsClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.SettingsClient',
    'context');
  return remote.$;
};

// ParamsSpec for HandleSideSwipe
chromecast.mojom.mojom.SettingsClient_HandleSideSwipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.SettingsClient.HandleSideSwipe_Params',
      packedSize: 24,
      fields: [
        { name: 'event', packedOffset: 8, packedBitOffset: 0, type: chromecast.mojom.SideSwipeEventSpec, nullable: false, minVersion: 0 },
        { name: 'origin', packedOffset: 12, packedBitOffset: 0, type: chromecast.mojom.SideSwipeOriginSpec, nullable: false, minVersion: 0 },
        { name: 'touch_location', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SendPlatformInfo
chromecast.mojom.mojom.SettingsClient_SendPlatformInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.SettingsClient.SendPlatformInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'platform_info_json', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.SettingsClientPtr = chromecast.mojom.mojom.SettingsClientRemote;
chromecast.mojom.mojom.SettingsClientRequest = chromecast.mojom.mojom.SettingsClientPendingReceiver;


// Interface: SettingsPlatform
chromecast.mojom.mojom.SettingsPlatform = {};

chromecast.mojom.mojom.SettingsPlatformPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.SettingsPlatformRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.SettingsPlatform';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.SettingsPlatformPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.SettingsPlatformRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.SettingsPlatformRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.SettingsPlatform_Connect_ParamsSpec,
      null,
      [client]);
  }

  requestVisible(visible) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.mojom.SettingsPlatform_RequestVisible_ParamsSpec,
      null,
      [visible]);
  }

};

chromecast.mojom.mojom.SettingsPlatform.getRemote = function() {
  let remote = new chromecast.mojom.mojom.SettingsPlatformRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.SettingsPlatform',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
chromecast.mojom.mojom.SettingsPlatform_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.SettingsPlatform.Connect_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestVisible
chromecast.mojom.mojom.SettingsPlatform_RequestVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.SettingsPlatform.RequestVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.SettingsPlatformPtr = chromecast.mojom.mojom.SettingsPlatformRemote;
chromecast.mojom.mojom.SettingsPlatformRequest = chromecast.mojom.mojom.SettingsPlatformPendingReceiver;

