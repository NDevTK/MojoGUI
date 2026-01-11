// Auto-generated MojoJS binding
// Source: chromium_src/components/global_media_controls/public/mojom/device_service.mojom
// Module: global_media_controls.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var global_media_controls = global_media_controls || {};
global_media_controls.mojom = global_media_controls.mojom || {};
var mojo_base = mojo_base || {};
var media_session = media_session || {};
var gfx = gfx || {};

global_media_controls.mojom.IconTypeSpec = { $: mojo.internal.Enum() };
global_media_controls.mojom.DeviceSpec = { $: {} };
global_media_controls.mojom.DeviceListHost = {};
global_media_controls.mojom.DeviceListHost.$interfaceName = 'global_media_controls.mojom.DeviceListHost';
global_media_controls.mojom.DeviceListHost_SelectDevice_ParamsSpec = { $: {} };
global_media_controls.mojom.DeviceListClient = {};
global_media_controls.mojom.DeviceListClient.$interfaceName = 'global_media_controls.mojom.DeviceListClient';
global_media_controls.mojom.DeviceListClient_OnDevicesUpdated_ParamsSpec = { $: {} };
global_media_controls.mojom.DeviceListClient_OnPermissionRejected_ParamsSpec = { $: {} };
global_media_controls.mojom.DeviceService = {};
global_media_controls.mojom.DeviceService.$interfaceName = 'global_media_controls.mojom.DeviceService';
global_media_controls.mojom.DeviceService_GetDeviceListHostForSession_ParamsSpec = { $: {} };
global_media_controls.mojom.DeviceService_GetDeviceListHostForPresentation_ParamsSpec = { $: {} };
global_media_controls.mojom.DeviceService_SetDevicePickerProvider_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider = {};
global_media_controls.mojom.DevicePickerProvider.$interfaceName = 'global_media_controls.mojom.DevicePickerProvider';
global_media_controls.mojom.DevicePickerProvider_CreateItem_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_DeleteItem_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_ShowItem_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_HideItem_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_OnMetadataChanged_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_OnArtworkImageChanged_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_OnFaviconImageChanged_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_AddObserver_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_HideMediaUI_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerObserver = {};
global_media_controls.mojom.DevicePickerObserver.$interfaceName = 'global_media_controls.mojom.DevicePickerObserver';
global_media_controls.mojom.DevicePickerObserver_OnMediaUIOpened_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerObserver_OnMediaUIClosed_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerObserver_OnMediaUIUpdated_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerObserver_OnPickerDismissed_ParamsSpec = { $: {} };

// Enum: IconType
global_media_controls.mojom.IconType = {
  kUnknown: 0,
  kThrobber: 1,
  kInfo: 2,
  kTv: 3,
  kSpeaker: 4,
  kSpeakerGroup: 5,
  kInput: 6,
};

// Struct: Device
mojo.internal.Struct(
    global_media_controls.mojom.DeviceSpec, 'global_media_controls.mojom.Device', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon', 24, 0, global_media_controls.mojom.IconTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: DeviceListHost
mojo.internal.Struct(
    global_media_controls.mojom.DeviceListHost_SelectDevice_ParamsSpec, 'global_media_controls.mojom.DeviceListHost_SelectDevice_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

global_media_controls.mojom.DeviceListHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DeviceListHostRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DeviceListHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DeviceListHostPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DeviceListHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  selectDevice(device_id) {
    return this.$.selectDevice(device_id);
  }
};

global_media_controls.mojom.DeviceListHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceListHost', [
      { explicit: 0 },
    ]);
  }

  selectDevice(device_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      global_media_controls.mojom.DeviceListHost_SelectDevice_ParamsSpec,
      null,
      [device_id],
      false);
  }

};

global_media_controls.mojom.DeviceListHost.getRemote = function() {
  let remote = new global_media_controls.mojom.DeviceListHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DeviceListHost',
    'context');
  return remote.$;
};

global_media_controls.mojom.DeviceListHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceListHost', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DeviceListHost_SelectDevice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DeviceListHost_SelectDevice_ParamsSpec.$.structSpec);
          const result = this.impl.selectDevice(params.device_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

global_media_controls.mojom.DeviceListHostReceiver = global_media_controls.mojom.DeviceListHostReceiver;

global_media_controls.mojom.DeviceListHostPtr = global_media_controls.mojom.DeviceListHostRemote;
global_media_controls.mojom.DeviceListHostRequest = global_media_controls.mojom.DeviceListHostPendingReceiver;


// Interface: DeviceListClient
mojo.internal.Struct(
    global_media_controls.mojom.DeviceListClient_OnDevicesUpdated_ParamsSpec, 'global_media_controls.mojom.DeviceListClient_OnDevicesUpdated_Params', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(global_media_controls.mojom.DeviceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DeviceListClient_OnPermissionRejected_ParamsSpec, 'global_media_controls.mojom.DeviceListClient_OnPermissionRejected_Params', [
    ],
    [[0, 8]]);

global_media_controls.mojom.DeviceListClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DeviceListClientRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DeviceListClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DeviceListClientPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DeviceListClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDevicesUpdated(devices) {
    return this.$.onDevicesUpdated(devices);
  }
  onPermissionRejected() {
    return this.$.onPermissionRejected();
  }
};

global_media_controls.mojom.DeviceListClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceListClient', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onDevicesUpdated(devices) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      global_media_controls.mojom.DeviceListClient_OnDevicesUpdated_ParamsSpec,
      null,
      [devices],
      false);
  }

  onPermissionRejected() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      global_media_controls.mojom.DeviceListClient_OnPermissionRejected_ParamsSpec,
      null,
      [],
      false);
  }

};

global_media_controls.mojom.DeviceListClient.getRemote = function() {
  let remote = new global_media_controls.mojom.DeviceListClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DeviceListClient',
    'context');
  return remote.$;
};

global_media_controls.mojom.DeviceListClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceListClient', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DeviceListClient_OnDevicesUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DeviceListClient_OnPermissionRejected_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DeviceListClient_OnDevicesUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onDevicesUpdated(params.devices);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DeviceListClient_OnPermissionRejected_ParamsSpec.$.structSpec);
          const result = this.impl.onPermissionRejected();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

global_media_controls.mojom.DeviceListClientReceiver = global_media_controls.mojom.DeviceListClientReceiver;

global_media_controls.mojom.DeviceListClientPtr = global_media_controls.mojom.DeviceListClientRemote;
global_media_controls.mojom.DeviceListClientRequest = global_media_controls.mojom.DeviceListClientPendingReceiver;


// Interface: DeviceService
mojo.internal.Struct(
    global_media_controls.mojom.DeviceService_GetDeviceListHostForSession_ParamsSpec, 'global_media_controls.mojom.DeviceService_GetDeviceListHostForSession_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('host_receiver', 8, 0, mojo.internal.InterfaceRequest(global_media_controls.mojom.DeviceListHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('client_remote', 16, 0, mojo.internal.InterfaceProxy(global_media_controls.mojom.DeviceListClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    global_media_controls.mojom.DeviceService_GetDeviceListHostForPresentation_ParamsSpec, 'global_media_controls.mojom.DeviceService_GetDeviceListHostForPresentation_Params', [
      mojo.internal.StructField('host_receiver', 0, 0, mojo.internal.InterfaceRequest(global_media_controls.mojom.DeviceListHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('client_remote', 8, 0, mojo.internal.InterfaceProxy(global_media_controls.mojom.DeviceListClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    global_media_controls.mojom.DeviceService_SetDevicePickerProvider_ParamsSpec, 'global_media_controls.mojom.DeviceService_SetDevicePickerProvider_Params', [
      mojo.internal.StructField('provider_remote', 0, 0, mojo.internal.InterfaceProxy(global_media_controls.mojom.DevicePickerProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

global_media_controls.mojom.DeviceServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DeviceServiceRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DeviceService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DeviceServicePendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DeviceServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDeviceListHostForSession(session_id, host_receiver, client_remote) {
    return this.$.getDeviceListHostForSession(session_id, host_receiver, client_remote);
  }
  getDeviceListHostForPresentation(host_receiver, client_remote) {
    return this.$.getDeviceListHostForPresentation(host_receiver, client_remote);
  }
  setDevicePickerProvider(provider_remote) {
    return this.$.setDevicePickerProvider(provider_remote);
  }
};

global_media_controls.mojom.DeviceServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  getDeviceListHostForSession(session_id, host_receiver, client_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      global_media_controls.mojom.DeviceService_GetDeviceListHostForSession_ParamsSpec,
      null,
      [session_id, host_receiver, client_remote],
      false);
  }

  getDeviceListHostForPresentation(host_receiver, client_remote) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      global_media_controls.mojom.DeviceService_GetDeviceListHostForPresentation_ParamsSpec,
      null,
      [host_receiver, client_remote],
      false);
  }

  setDevicePickerProvider(provider_remote) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      global_media_controls.mojom.DeviceService_SetDevicePickerProvider_ParamsSpec,
      null,
      [provider_remote],
      false);
  }

};

global_media_controls.mojom.DeviceService.getRemote = function() {
  let remote = new global_media_controls.mojom.DeviceServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DeviceService',
    'context');
  return remote.$;
};

global_media_controls.mojom.DeviceServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DeviceService_GetDeviceListHostForSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DeviceService_GetDeviceListHostForPresentation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DeviceService_SetDevicePickerProvider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DeviceService_GetDeviceListHostForSession_ParamsSpec.$.structSpec);
          const result = this.impl.getDeviceListHostForSession(params.session_id, params.host_receiver, params.client_remote);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DeviceService_GetDeviceListHostForPresentation_ParamsSpec.$.structSpec);
          const result = this.impl.getDeviceListHostForPresentation(params.host_receiver, params.client_remote);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DeviceService_SetDevicePickerProvider_ParamsSpec.$.structSpec);
          const result = this.impl.setDevicePickerProvider(params.provider_remote);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

global_media_controls.mojom.DeviceServiceReceiver = global_media_controls.mojom.DeviceServiceReceiver;

global_media_controls.mojom.DeviceServicePtr = global_media_controls.mojom.DeviceServiceRemote;
global_media_controls.mojom.DeviceServiceRequest = global_media_controls.mojom.DeviceServicePendingReceiver;


// Interface: DevicePickerProvider
mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_CreateItem_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_CreateItem_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_DeleteItem_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_DeleteItem_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_ShowItem_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_ShowItem_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_HideItem_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_HideItem_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_OnMetadataChanged_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_OnMetadataChanged_Params', [
      mojo.internal.StructField('metadata', 0, 0, media_session.mojom.MediaMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_OnArtworkImageChanged_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_OnArtworkImageChanged_Params', [
      mojo.internal.StructField('artwork_image', 0, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_OnFaviconImageChanged_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_OnFaviconImageChanged_Params', [
      mojo.internal.StructField('favicon_image', 0, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_AddObserver_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(global_media_controls.mojom.DevicePickerObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_HideMediaUI_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_HideMediaUI_Params', [
    ],
    [[0, 8]]);

global_media_controls.mojom.DevicePickerProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DevicePickerProviderRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DevicePickerProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DevicePickerProviderPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DevicePickerProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createItem(source_id) {
    return this.$.createItem(source_id);
  }
  deleteItem() {
    return this.$.deleteItem();
  }
  showItem() {
    return this.$.showItem();
  }
  hideItem() {
    return this.$.hideItem();
  }
  onMetadataChanged(metadata) {
    return this.$.onMetadataChanged(metadata);
  }
  onArtworkImageChanged(artwork_image) {
    return this.$.onArtworkImageChanged(artwork_image);
  }
  onFaviconImageChanged(favicon_image) {
    return this.$.onFaviconImageChanged(favicon_image);
  }
  addObserver(observer) {
    return this.$.addObserver(observer);
  }
  hideMediaUI() {
    return this.$.hideMediaUI();
  }
};

global_media_controls.mojom.DevicePickerProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevicePickerProvider', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
    ]);
  }

  createItem(source_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_CreateItem_ParamsSpec,
      null,
      [source_id],
      false);
  }

  deleteItem() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_DeleteItem_ParamsSpec,
      null,
      [],
      false);
  }

  showItem() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_ShowItem_ParamsSpec,
      null,
      [],
      false);
  }

  hideItem() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_HideItem_ParamsSpec,
      null,
      [],
      false);
  }

  onMetadataChanged(metadata) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_OnMetadataChanged_ParamsSpec,
      null,
      [metadata],
      false);
  }

  onArtworkImageChanged(artwork_image) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_OnArtworkImageChanged_ParamsSpec,
      null,
      [artwork_image],
      false);
  }

  onFaviconImageChanged(favicon_image) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_OnFaviconImageChanged_ParamsSpec,
      null,
      [favicon_image],
      false);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  hideMediaUI() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      global_media_controls.mojom.DevicePickerProvider_HideMediaUI_ParamsSpec,
      null,
      [],
      false);
  }

};

global_media_controls.mojom.DevicePickerProvider.getRemote = function() {
  let remote = new global_media_controls.mojom.DevicePickerProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DevicePickerProvider',
    'context');
  return remote.$;
};

global_media_controls.mojom.DevicePickerProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DevicePickerProvider', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_CreateItem_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_DeleteItem_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_ShowItem_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_HideItem_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_OnMetadataChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_OnArtworkImageChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_OnFaviconImageChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_AddObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_HideMediaUI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_CreateItem_ParamsSpec.$.structSpec);
          const result = this.impl.createItem(params.source_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_DeleteItem_ParamsSpec.$.structSpec);
          const result = this.impl.deleteItem();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_ShowItem_ParamsSpec.$.structSpec);
          const result = this.impl.showItem();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_HideItem_ParamsSpec.$.structSpec);
          const result = this.impl.hideItem();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_OnMetadataChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onMetadataChanged(params.metadata);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_OnArtworkImageChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onArtworkImageChanged(params.artwork_image);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_OnFaviconImageChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onFaviconImageChanged(params.favicon_image);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_AddObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerProvider_HideMediaUI_ParamsSpec.$.structSpec);
          const result = this.impl.hideMediaUI();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

global_media_controls.mojom.DevicePickerProviderReceiver = global_media_controls.mojom.DevicePickerProviderReceiver;

global_media_controls.mojom.DevicePickerProviderPtr = global_media_controls.mojom.DevicePickerProviderRemote;
global_media_controls.mojom.DevicePickerProviderRequest = global_media_controls.mojom.DevicePickerProviderPendingReceiver;


// Interface: DevicePickerObserver
mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerObserver_OnMediaUIOpened_ParamsSpec, 'global_media_controls.mojom.DevicePickerObserver_OnMediaUIOpened_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerObserver_OnMediaUIClosed_ParamsSpec, 'global_media_controls.mojom.DevicePickerObserver_OnMediaUIClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerObserver_OnMediaUIUpdated_ParamsSpec, 'global_media_controls.mojom.DevicePickerObserver_OnMediaUIUpdated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerObserver_OnPickerDismissed_ParamsSpec, 'global_media_controls.mojom.DevicePickerObserver_OnPickerDismissed_Params', [
    ],
    [[0, 8]]);

global_media_controls.mojom.DevicePickerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DevicePickerObserverRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DevicePickerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DevicePickerObserverPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DevicePickerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onMediaUIOpened() {
    return this.$.onMediaUIOpened();
  }
  onMediaUIClosed() {
    return this.$.onMediaUIClosed();
  }
  onMediaUIUpdated() {
    return this.$.onMediaUIUpdated();
  }
  onPickerDismissed() {
    return this.$.onPickerDismissed();
  }
};

global_media_controls.mojom.DevicePickerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevicePickerObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  onMediaUIOpened() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      global_media_controls.mojom.DevicePickerObserver_OnMediaUIOpened_ParamsSpec,
      null,
      [],
      false);
  }

  onMediaUIClosed() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      global_media_controls.mojom.DevicePickerObserver_OnMediaUIClosed_ParamsSpec,
      null,
      [],
      false);
  }

  onMediaUIUpdated() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      global_media_controls.mojom.DevicePickerObserver_OnMediaUIUpdated_ParamsSpec,
      null,
      [],
      false);
  }

  onPickerDismissed() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      global_media_controls.mojom.DevicePickerObserver_OnPickerDismissed_ParamsSpec,
      null,
      [],
      false);
  }

};

global_media_controls.mojom.DevicePickerObserver.getRemote = function() {
  let remote = new global_media_controls.mojom.DevicePickerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DevicePickerObserver',
    'context');
  return remote.$;
};

global_media_controls.mojom.DevicePickerObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DevicePickerObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerObserver_OnMediaUIOpened_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerObserver_OnMediaUIClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerObserver_OnMediaUIUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(global_media_controls.mojom.DevicePickerObserver_OnPickerDismissed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerObserver_OnMediaUIOpened_ParamsSpec.$.structSpec);
          const result = this.impl.onMediaUIOpened();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerObserver_OnMediaUIClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onMediaUIClosed();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerObserver_OnMediaUIUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onMediaUIUpdated();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(global_media_controls.mojom.DevicePickerObserver_OnPickerDismissed_ParamsSpec.$.structSpec);
          const result = this.impl.onPickerDismissed();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

global_media_controls.mojom.DevicePickerObserverReceiver = global_media_controls.mojom.DevicePickerObserverReceiver;

global_media_controls.mojom.DevicePickerObserverPtr = global_media_controls.mojom.DevicePickerObserverRemote;
global_media_controls.mojom.DevicePickerObserverRequest = global_media_controls.mojom.DevicePickerObserverPendingReceiver;

