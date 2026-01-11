// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/settings_ui.mojom
// Module: chromecast.mojom

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
  handleSideSwipe(event, origin, touch_location) {
    return this.$.handleSideSwipe(event, origin, touch_location);
  }
  sendPlatformInfo(platform_info_json) {
    return this.$.sendPlatformInfo(platform_info_json);
  }
};

chromecast.mojom.SettingsClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SettingsClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  handleSideSwipe(event, origin, touch_location) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.SettingsClient_HandleSideSwipe_ParamsSpec,
      null,
      [event, origin, touch_location],
      false);
  }

  sendPlatformInfo(platform_info_json) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SettingsClient', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.SettingsClient_HandleSideSwipe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.SettingsClient_SendPlatformInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.SettingsClient_HandleSideSwipe_ParamsSpec.$.structSpec);
          const result = this.impl.handleSideSwipe(params.event, params.origin, params.touch_location);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.SettingsClient_SendPlatformInfo_ParamsSpec.$.structSpec);
          const result = this.impl.sendPlatformInfo(params.platform_info_json);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.SettingsClientReceiver = chromecast.mojom.SettingsClientReceiver;

chromecast.mojom.SettingsClientPtr = chromecast.mojom.SettingsClientRemote;
chromecast.mojom.SettingsClientRequest = chromecast.mojom.SettingsClientPendingReceiver;


// Interface: SettingsPlatform
mojo.internal.Struct(
    chromecast.mojom.SettingsPlatform_Connect_ParamsSpec, 'chromecast.mojom.SettingsPlatform_Connect_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.SettingsClientRemote), null, false, 0, undefined),
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
  connect(client) {
    return this.$.connect(client);
  }
  requestVisible(visible) {
    return this.$.requestVisible(visible);
  }
};

chromecast.mojom.SettingsPlatformRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SettingsPlatform', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  connect(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.SettingsPlatform_Connect_ParamsSpec,
      null,
      [client],
      false);
  }

  requestVisible(visible) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SettingsPlatform', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.SettingsPlatform_Connect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.SettingsPlatform_RequestVisible_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.SettingsPlatform_Connect_ParamsSpec.$.structSpec);
          const result = this.impl.connect(params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.SettingsPlatform_RequestVisible_ParamsSpec.$.structSpec);
          const result = this.impl.requestVisible(params.visible);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.SettingsPlatformReceiver = chromecast.mojom.SettingsPlatformReceiver;

chromecast.mojom.SettingsPlatformPtr = chromecast.mojom.SettingsPlatformRemote;
chromecast.mojom.SettingsPlatformRequest = chromecast.mojom.SettingsPlatformPendingReceiver;

