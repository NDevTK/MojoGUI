// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/settings_ui.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var gfx = gfx || {};

chromecast.mojom.SideSwipeEventSpec = { $: mojo.internal.Enum() };
chromecast.mojom.SideSwipeOriginSpec = { $: mojo.internal.Enum() };
chromecast.mojom.SettingsClient = {};
chromecast.mojom.SettingsClient.$interfaceName = 'chromecast.mojom.SettingsClient';
chromecast.mojom.SettingsClient_HandleSideSwipe_ParamsSpec = { $: {} };
chromecast.mojom.SettingsClient_SendPlatformInfo_ParamsSpec = { $: {} };
chromecast.mojom.SettingsPlatform = {};
chromecast.mojom.SettingsPlatform.$interfaceName = 'chromecast.mojom.SettingsPlatform';
chromecast.mojom.SettingsPlatform_Connect_ParamsSpec = { $: {} };
chromecast.mojom.SettingsPlatform_RequestVisible_ParamsSpec = { $: {} };

// Enum: SideSwipeEvent
chromecast.mojom.SideSwipeEvent = {
  BEGIN: 0,
  CONTINUE: 1,
  END: 2,
};

// Enum: SideSwipeOrigin
chromecast.mojom.SideSwipeOrigin = {
  TOP: 0,
  BOTTOM: 1,
  LEFT: 2,
  RIGHT: 3,
};

// Interface: SettingsClient
mojo.internal.Struct(
    chromecast.mojom.SettingsClient_HandleSideSwipe_ParamsSpec, 'chromecast.mojom.SettingsClient_HandleSideSwipe_Params', [
      mojo.internal.StructField('event', 0, 0, chromecast.mojom.SideSwipeEventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin', 8, 0, chromecast.mojom.SideSwipeOriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('touch_location', 16, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromecast.mojom.SettingsClient_SendPlatformInfo_ParamsSpec, 'chromecast.mojom.SettingsClient_SendPlatformInfo_Params', [
      mojo.internal.StructField('platform_info_json', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [event, origin, touch_location],
      false);
  }

  sendPlatformInfo(platform_info_json) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.SettingsClient_SendPlatformInfo_ParamsSpec,
      null,
      [platform_info_json],
      false);
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

chromecast.mojom.SettingsClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.SettingsClient_HandleSideSwipe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.handleSideSwipe(params.event, params.origin, params.touch_location);
          break;
        }
        case 1: {
          const params = chromecast.mojom.SettingsClient_SendPlatformInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendPlatformInfo(params.platform_info_json);
          break;
        }
      }
    }});
  }
};

chromecast.mojom.SettingsClientReceiver = chromecast.mojom.SettingsClientReceiver;

chromecast.mojom.SettingsClientPtr = chromecast.mojom.SettingsClientRemote;
chromecast.mojom.SettingsClientRequest = chromecast.mojom.SettingsClientPendingReceiver;


// Interface: SettingsPlatform
mojo.internal.Struct(
    chromecast.mojom.SettingsPlatform_Connect_ParamsSpec, 'chromecast.mojom.SettingsPlatform_Connect_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.SettingsClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.SettingsPlatform_RequestVisible_ParamsSpec, 'chromecast.mojom.SettingsPlatform_RequestVisible_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [client],
      false);
  }

  requestVisible(visible) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.SettingsPlatform_RequestVisible_ParamsSpec,
      null,
      [visible],
      false);
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

chromecast.mojom.SettingsPlatformReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.SettingsPlatform_Connect_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connect(params.client);
          break;
        }
        case 1: {
          const params = chromecast.mojom.SettingsPlatform_RequestVisible_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestVisible(params.visible);
          break;
        }
      }
    }});
  }
};

chromecast.mojom.SettingsPlatformReceiver = chromecast.mojom.SettingsPlatformReceiver;

chromecast.mojom.SettingsPlatformPtr = chromecast.mojom.SettingsPlatformRemote;
chromecast.mojom.SettingsPlatformRequest = chromecast.mojom.SettingsPlatformPendingReceiver;

