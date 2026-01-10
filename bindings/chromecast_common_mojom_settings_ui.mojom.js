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
  CONTINUE: 1,
  END: 2,
};
chromecast.mojom.SideSwipeEventSpec = { $: mojo.internal.Enum() };

// Enum: SideSwipeOrigin
chromecast.mojom.SideSwipeOrigin = {
  TOP: 0,
  BOTTOM: 1,
  LEFT: 2,
  RIGHT: 3,
};
chromecast.mojom.SideSwipeOriginSpec = { $: mojo.internal.Enum() };

// Interface: SettingsClient
chromecast.mojom.SettingsClient = {};

chromecast.mojom.SettingsClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.SettingsClientRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.SettingsClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.SettingsClientPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.SettingsClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.SettingsClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleSideSwipe(event, origin, touch_location) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.SettingsClient_HandleSideSwipe_ParamsSpec,
      null,
      [event, origin, touch_location]);
  }

  sendPlatformInfo(platform_info_json) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.SettingsClient_SendPlatformInfo_ParamsSpec,
      null,
      [platform_info_json]);
  }

};

chromecast.mojom.SettingsClient.getRemote = function() {
  let remote = new chromecast.mojom.SettingsClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.SettingsClient',
    'context');
  return remote.$;
};

// ParamsSpec for HandleSideSwipe
chromecast.mojom.SettingsClient_HandleSideSwipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.SettingsClient.HandleSideSwipe_Params',
      packedSize: 24,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: chromecast.mojom.SideSwipeEventSpec, nullable: false, minVersion: 0 },
        { name: 'origin', packedOffset: 4, packedBitOffset: 0, type: chromecast.mojom.SideSwipeOriginSpec, nullable: false, minVersion: 0 },
        { name: 'touch_location', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SendPlatformInfo
chromecast.mojom.SettingsClient_SendPlatformInfo_ParamsSpec = {
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
chromecast.mojom.SettingsClientPtr = chromecast.mojom.SettingsClientRemote;
chromecast.mojom.SettingsClientRequest = chromecast.mojom.SettingsClientPendingReceiver;


// Interface: SettingsPlatform
chromecast.mojom.SettingsPlatform = {};

chromecast.mojom.SettingsPlatformPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.SettingsPlatformRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.SettingsPlatform';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.SettingsPlatformPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.SettingsPlatformRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.SettingsPlatformRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.SettingsPlatform_Connect_ParamsSpec,
      null,
      [client]);
  }

  requestVisible(visible) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.SettingsPlatform_RequestVisible_ParamsSpec,
      null,
      [visible]);
  }

};

chromecast.mojom.SettingsPlatform.getRemote = function() {
  let remote = new chromecast.mojom.SettingsPlatformRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.SettingsPlatform',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
chromecast.mojom.SettingsPlatform_Connect_ParamsSpec = {
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
chromecast.mojom.SettingsPlatform_RequestVisible_ParamsSpec = {
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
chromecast.mojom.SettingsPlatformPtr = chromecast.mojom.SettingsPlatformRemote;
chromecast.mojom.SettingsPlatformRequest = chromecast.mojom.SettingsPlatformPendingReceiver;

