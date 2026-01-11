// Auto-generated MojoJS binding
// Source: chromium_src/device/bluetooth/public/mojom/adapter.mojom
// Module: bluetooth.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var bluetooth = bluetooth || {};
bluetooth.mojom = bluetooth.mojom || {};

bluetooth.mojom.ConnectResultSpec = { $: mojo.internal.Enum() };
bluetooth.mojom.LocalCharacteristicReadResultSpec = { $: {} };
bluetooth.mojom.ConnectToServiceResultSpec = { $: {} };
bluetooth.mojom.AcceptConnectionResultSpec = { $: {} };
bluetooth.mojom.AdapterInfoSpec = { $: {} };
bluetooth.mojom.Advertisement = {};
bluetooth.mojom.Advertisement.$interfaceName = 'bluetooth.mojom.Advertisement';
bluetooth.mojom.Advertisement_Unregister_ParamsSpec = { $: {} };
bluetooth.mojom.Advertisement_Unregister_ResponseParamsSpec = { $: {} };
bluetooth.mojom.DiscoverySession = {};
bluetooth.mojom.DiscoverySession.$interfaceName = 'bluetooth.mojom.DiscoverySession';
bluetooth.mojom.DiscoverySession_IsActive_ParamsSpec = { $: {} };
bluetooth.mojom.DiscoverySession_IsActive_ResponseParamsSpec = { $: {} };
bluetooth.mojom.DiscoverySession_Stop_ParamsSpec = { $: {} };
bluetooth.mojom.DiscoverySession_Stop_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Socket = {};
bluetooth.mojom.Socket.$interfaceName = 'bluetooth.mojom.Socket';
bluetooth.mojom.Socket_Disconnect_ParamsSpec = { $: {} };
bluetooth.mojom.Socket_Disconnect_ResponseParamsSpec = { $: {} };
bluetooth.mojom.ServerSocket = {};
bluetooth.mojom.ServerSocket.$interfaceName = 'bluetooth.mojom.ServerSocket';
bluetooth.mojom.ServerSocket_Accept_ParamsSpec = { $: {} };
bluetooth.mojom.ServerSocket_Accept_ResponseParamsSpec = { $: {} };
bluetooth.mojom.ServerSocket_Disconnect_ParamsSpec = { $: {} };
bluetooth.mojom.ServerSocket_Disconnect_ResponseParamsSpec = { $: {} };
bluetooth.mojom.GattService = {};
bluetooth.mojom.GattService.$interfaceName = 'bluetooth.mojom.GattService';
bluetooth.mojom.GattService_CreateCharacteristic_ParamsSpec = { $: {} };
bluetooth.mojom.GattService_CreateCharacteristic_ResponseParamsSpec = { $: {} };
bluetooth.mojom.GattService_Register_ParamsSpec = { $: {} };
bluetooth.mojom.GattService_Register_ResponseParamsSpec = { $: {} };
bluetooth.mojom.GattServiceObserver = {};
bluetooth.mojom.GattServiceObserver.$interfaceName = 'bluetooth.mojom.GattServiceObserver';
bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ParamsSpec = { $: {} };
bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Adapter = {};
bluetooth.mojom.Adapter.$interfaceName = 'bluetooth.mojom.Adapter';
bluetooth.mojom.Adapter_ConnectToDevice_ParamsSpec = { $: {} };
bluetooth.mojom.Adapter_ConnectToDevice_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Adapter_GetDevices_ParamsSpec = { $: {} };
bluetooth.mojom.Adapter_GetDevices_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Adapter_GetInfo_ParamsSpec = { $: {} };
bluetooth.mojom.Adapter_GetInfo_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Adapter_AddObserver_ParamsSpec = { $: {} };
bluetooth.mojom.Adapter_AddObserver_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Adapter_RegisterAdvertisement_ParamsSpec = { $: {} };
bluetooth.mojom.Adapter_RegisterAdvertisement_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Adapter_SetDiscoverable_ParamsSpec = { $: {} };
bluetooth.mojom.Adapter_SetDiscoverable_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Adapter_SetName_ParamsSpec = { $: {} };
bluetooth.mojom.Adapter_SetName_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Adapter_StartDiscoverySession_ParamsSpec = { $: {} };
bluetooth.mojom.Adapter_StartDiscoverySession_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ParamsSpec = { $: {} };
bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ParamsSpec = { $: {} };
bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Adapter_CreateLocalGattService_ParamsSpec = { $: {} };
bluetooth.mojom.Adapter_CreateLocalGattService_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ParamsSpec = { $: {} };
bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ResponseParamsSpec = { $: {} };
bluetooth.mojom.AdapterObserver = {};
bluetooth.mojom.AdapterObserver.$interfaceName = 'bluetooth.mojom.AdapterObserver';
bluetooth.mojom.AdapterObserver_PresentChanged_ParamsSpec = { $: {} };
bluetooth.mojom.AdapterObserver_PoweredChanged_ParamsSpec = { $: {} };
bluetooth.mojom.AdapterObserver_DiscoverableChanged_ParamsSpec = { $: {} };
bluetooth.mojom.AdapterObserver_DiscoveringChanged_ParamsSpec = { $: {} };
bluetooth.mojom.AdapterObserver_DeviceAdded_ParamsSpec = { $: {} };
bluetooth.mojom.AdapterObserver_DeviceChanged_ParamsSpec = { $: {} };
bluetooth.mojom.AdapterObserver_DeviceRemoved_ParamsSpec = { $: {} };

// Enum: ConnectResult
bluetooth.mojom.ConnectResult = {
  SUCCESS: 0,
  AUTH_CANCELED: 1,
  AUTH_FAILED: 2,
  AUTH_REJECTED: 3,
  AUTH_TIMEOUT: 4,
  FAILED: 5,
  INPROGRESS: 6,
  UNKNOWN: 7,
  UNSUPPORTED_DEVICE: 8,
  DEVICE_NO_LONGER_IN_RANGE: 9,
  NOT_READY: 10,
  ALREADY_CONNECTED: 11,
  ALREADY_EXISTS: 12,
  NOT_CONNECTED: 13,
  DOES_NOT_EXIST: 14,
  INVALID_ARGS: 15,
  NON_AUTH_TIMEOUT: 16,
  NO_MEMORY: 17,
  JNI_ENVIRONMENT: 18,
  JNI_THREAD_ATTACH: 19,
  WAKELOCK: 20,
  UNEXPECTED_STATE: 21,
  SOCKET: 22,
};

// Union: LocalCharacteristicReadResult
mojo.internal.Union(
    bluetooth.mojom.LocalCharacteristicReadResultSpec, 'bluetooth.mojom.LocalCharacteristicReadResult', {
      'error_code': {
        'ordinal': 0,
        'type': bluetooth.mojom.GattServiceErrorCodeSpec.$,
        'nullable': false,
      },
      'data': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Struct: ConnectToServiceResult
mojo.internal.Struct(
    bluetooth.mojom.ConnectToServiceResultSpec, 'bluetooth.mojom.ConnectToServiceResult', [
      mojo.internal.StructField('socket', 0, 0, mojo.internal.InterfaceProxy(bluetooth.mojom.SocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('receive_stream', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('send_stream', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AcceptConnectionResult
mojo.internal.Struct(
    bluetooth.mojom.AcceptConnectionResultSpec, 'bluetooth.mojom.AcceptConnectionResult', [
      mojo.internal.StructField('device', 0, 0, bluetooth.mojom.DeviceInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('socket', 8, 0, mojo.internal.InterfaceProxy(bluetooth.mojom.SocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('receive_stream', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('send_stream', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AdapterInfo
mojo.internal.Struct(
    bluetooth.mojom.AdapterInfoSpec, 'bluetooth.mojom.AdapterInfo', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('system_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('floss', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('extended_advertisement_support', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('initialized', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('present', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('powered', 24, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('discoverable', 24, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('discovering', 24, 6, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: Advertisement
mojo.internal.Struct(
    bluetooth.mojom.Advertisement_Unregister_ParamsSpec, 'bluetooth.mojom.Advertisement_Unregister_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.Advertisement_Unregister_ResponseParamsSpec, 'bluetooth.mojom.Advertisement_Unregister_ResponseParams', [
    ],
    [[0, 8]]);

bluetooth.mojom.AdvertisementPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bluetooth.mojom.AdvertisementRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.Advertisement';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bluetooth.mojom.AdvertisementPendingReceiver,
      handle);
    this.$ = new bluetooth.mojom.AdvertisementRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  unregister() {
    return this.$.unregister();
  }
};

bluetooth.mojom.AdvertisementRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Advertisement', [
      { explicit: null },
    ]);
  }

  unregister() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      bluetooth.mojom.Advertisement_Unregister_ParamsSpec,
      bluetooth.mojom.Advertisement_Unregister_ResponseParamsSpec,
      [],
      false);
  }

};

bluetooth.mojom.Advertisement.getRemote = function() {
  let remote = new bluetooth.mojom.AdvertisementRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.Advertisement',
    'context');
  return remote.$;
};

bluetooth.mojom.AdvertisementReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Advertisement', [
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
             decoder.decodeStructInline(bluetooth.mojom.Advertisement_Unregister_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.Advertisement_Unregister_ParamsSpec.$.structSpec);
          const result = this.impl.unregister();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Advertisement_Unregister_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

bluetooth.mojom.AdvertisementReceiver = bluetooth.mojom.AdvertisementReceiver;

bluetooth.mojom.AdvertisementPtr = bluetooth.mojom.AdvertisementRemote;
bluetooth.mojom.AdvertisementRequest = bluetooth.mojom.AdvertisementPendingReceiver;


// Interface: DiscoverySession
mojo.internal.Struct(
    bluetooth.mojom.DiscoverySession_IsActive_ParamsSpec, 'bluetooth.mojom.DiscoverySession_IsActive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.DiscoverySession_IsActive_ResponseParamsSpec, 'bluetooth.mojom.DiscoverySession_IsActive_ResponseParams', [
      mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.DiscoverySession_Stop_ParamsSpec, 'bluetooth.mojom.DiscoverySession_Stop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.DiscoverySession_Stop_ResponseParamsSpec, 'bluetooth.mojom.DiscoverySession_Stop_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

bluetooth.mojom.DiscoverySessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bluetooth.mojom.DiscoverySessionRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.DiscoverySession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bluetooth.mojom.DiscoverySessionPendingReceiver,
      handle);
    this.$ = new bluetooth.mojom.DiscoverySessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  isActive() {
    return this.$.isActive();
  }
  stop() {
    return this.$.stop();
  }
};

bluetooth.mojom.DiscoverySessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DiscoverySession', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  isActive() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      bluetooth.mojom.DiscoverySession_IsActive_ParamsSpec,
      bluetooth.mojom.DiscoverySession_IsActive_ResponseParamsSpec,
      [],
      false);
  }

  stop() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      bluetooth.mojom.DiscoverySession_Stop_ParamsSpec,
      bluetooth.mojom.DiscoverySession_Stop_ResponseParamsSpec,
      [],
      false);
  }

};

bluetooth.mojom.DiscoverySession.getRemote = function() {
  let remote = new bluetooth.mojom.DiscoverySessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.DiscoverySession',
    'context');
  return remote.$;
};

bluetooth.mojom.DiscoverySessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DiscoverySession', [
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
             decoder.decodeStructInline(bluetooth.mojom.DiscoverySession_IsActive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.DiscoverySession_Stop_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.DiscoverySession_IsActive_ParamsSpec.$.structSpec);
          const result = this.impl.isActive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.DiscoverySession_IsActive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.DiscoverySession_Stop_ParamsSpec.$.structSpec);
          const result = this.impl.stop();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.DiscoverySession_Stop_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

bluetooth.mojom.DiscoverySessionReceiver = bluetooth.mojom.DiscoverySessionReceiver;

bluetooth.mojom.DiscoverySessionPtr = bluetooth.mojom.DiscoverySessionRemote;
bluetooth.mojom.DiscoverySessionRequest = bluetooth.mojom.DiscoverySessionPendingReceiver;


// Interface: Socket
mojo.internal.Struct(
    bluetooth.mojom.Socket_Disconnect_ParamsSpec, 'bluetooth.mojom.Socket_Disconnect_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.Socket_Disconnect_ResponseParamsSpec, 'bluetooth.mojom.Socket_Disconnect_ResponseParams', [
    ],
    [[0, 8]]);

bluetooth.mojom.SocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bluetooth.mojom.SocketRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.Socket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bluetooth.mojom.SocketPendingReceiver,
      handle);
    this.$ = new bluetooth.mojom.SocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  disconnect() {
    return this.$.disconnect();
  }
};

bluetooth.mojom.SocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Socket', [
      { explicit: null },
    ]);
  }

  disconnect() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      bluetooth.mojom.Socket_Disconnect_ParamsSpec,
      bluetooth.mojom.Socket_Disconnect_ResponseParamsSpec,
      [],
      false);
  }

};

bluetooth.mojom.Socket.getRemote = function() {
  let remote = new bluetooth.mojom.SocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.Socket',
    'context');
  return remote.$;
};

bluetooth.mojom.SocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Socket', [
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
             decoder.decodeStructInline(bluetooth.mojom.Socket_Disconnect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.Socket_Disconnect_ParamsSpec.$.structSpec);
          const result = this.impl.disconnect();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Socket_Disconnect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

bluetooth.mojom.SocketReceiver = bluetooth.mojom.SocketReceiver;

bluetooth.mojom.SocketPtr = bluetooth.mojom.SocketRemote;
bluetooth.mojom.SocketRequest = bluetooth.mojom.SocketPendingReceiver;


// Interface: ServerSocket
mojo.internal.Struct(
    bluetooth.mojom.ServerSocket_Accept_ParamsSpec, 'bluetooth.mojom.ServerSocket_Accept_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.ServerSocket_Accept_ResponseParamsSpec, 'bluetooth.mojom.ServerSocket_Accept_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, bluetooth.mojom.AcceptConnectionResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.ServerSocket_Disconnect_ParamsSpec, 'bluetooth.mojom.ServerSocket_Disconnect_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.ServerSocket_Disconnect_ResponseParamsSpec, 'bluetooth.mojom.ServerSocket_Disconnect_ResponseParams', [
    ],
    [[0, 8]]);

bluetooth.mojom.ServerSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bluetooth.mojom.ServerSocketRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.ServerSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bluetooth.mojom.ServerSocketPendingReceiver,
      handle);
    this.$ = new bluetooth.mojom.ServerSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  accept() {
    return this.$.accept();
  }
  disconnect() {
    return this.$.disconnect();
  }
};

bluetooth.mojom.ServerSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServerSocket', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  accept() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      bluetooth.mojom.ServerSocket_Accept_ParamsSpec,
      bluetooth.mojom.ServerSocket_Accept_ResponseParamsSpec,
      [],
      false);
  }

  disconnect() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      bluetooth.mojom.ServerSocket_Disconnect_ParamsSpec,
      bluetooth.mojom.ServerSocket_Disconnect_ResponseParamsSpec,
      [],
      false);
  }

};

bluetooth.mojom.ServerSocket.getRemote = function() {
  let remote = new bluetooth.mojom.ServerSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.ServerSocket',
    'context');
  return remote.$;
};

bluetooth.mojom.ServerSocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServerSocket', [
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
             decoder.decodeStructInline(bluetooth.mojom.ServerSocket_Accept_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.ServerSocket_Disconnect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.ServerSocket_Accept_ParamsSpec.$.structSpec);
          const result = this.impl.accept();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.ServerSocket_Accept_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.ServerSocket_Disconnect_ParamsSpec.$.structSpec);
          const result = this.impl.disconnect();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.ServerSocket_Disconnect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

bluetooth.mojom.ServerSocketReceiver = bluetooth.mojom.ServerSocketReceiver;

bluetooth.mojom.ServerSocketPtr = bluetooth.mojom.ServerSocketRemote;
bluetooth.mojom.ServerSocketRequest = bluetooth.mojom.ServerSocketPendingReceiver;


// Interface: GattService
mojo.internal.Struct(
    bluetooth.mojom.GattService_CreateCharacteristic_ParamsSpec, 'bluetooth.mojom.GattService_CreateCharacteristic_Params', [
      mojo.internal.StructField('characteristic_uuid', 0, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('permissions', 8, 0, bluetooth.mojom.GattCharacteristicPermissionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('properties', 16, 0, bluetooth.mojom.GattCharacteristicPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.GattService_CreateCharacteristic_ResponseParamsSpec, 'bluetooth.mojom.GattService_CreateCharacteristic_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.GattService_Register_ParamsSpec, 'bluetooth.mojom.GattService_Register_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.GattService_Register_ResponseParamsSpec, 'bluetooth.mojom.GattService_Register_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, bluetooth.mojom.GattServiceErrorCodeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

bluetooth.mojom.GattServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bluetooth.mojom.GattServiceRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.GattService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bluetooth.mojom.GattServicePendingReceiver,
      handle);
    this.$ = new bluetooth.mojom.GattServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createCharacteristic(characteristic_uuid, permissions, properties) {
    return this.$.createCharacteristic(characteristic_uuid, permissions, properties);
  }
  register() {
    return this.$.register();
  }
};

bluetooth.mojom.GattServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GattService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createCharacteristic(characteristic_uuid, permissions, properties) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      bluetooth.mojom.GattService_CreateCharacteristic_ParamsSpec,
      bluetooth.mojom.GattService_CreateCharacteristic_ResponseParamsSpec,
      [characteristic_uuid, permissions, properties],
      false);
  }

  register() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      bluetooth.mojom.GattService_Register_ParamsSpec,
      bluetooth.mojom.GattService_Register_ResponseParamsSpec,
      [],
      false);
  }

};

bluetooth.mojom.GattService.getRemote = function() {
  let remote = new bluetooth.mojom.GattServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.GattService',
    'context');
  return remote.$;
};

bluetooth.mojom.GattServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GattService', [
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
             decoder.decodeStructInline(bluetooth.mojom.GattService_CreateCharacteristic_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.GattService_Register_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.GattService_CreateCharacteristic_ParamsSpec.$.structSpec);
          const result = this.impl.createCharacteristic(params.characteristic_uuid, params.permissions, params.properties);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.GattService_CreateCharacteristic_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.GattService_Register_ParamsSpec.$.structSpec);
          const result = this.impl.register();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.GattService_Register_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

bluetooth.mojom.GattServiceReceiver = bluetooth.mojom.GattServiceReceiver;

bluetooth.mojom.GattServicePtr = bluetooth.mojom.GattServiceRemote;
bluetooth.mojom.GattServiceRequest = bluetooth.mojom.GattServicePendingReceiver;


// Interface: GattServiceObserver
mojo.internal.Struct(
    bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ParamsSpec, 'bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_Params', [
      mojo.internal.StructField('remote_device', 0, 0, bluetooth.mojom.DeviceInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_uuid', 8, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_uuid', 16, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ResponseParamsSpec, 'bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ResponseParams', [
      mojo.internal.StructField('read_result', 0, 0, bluetooth.mojom.LocalCharacteristicReadResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

bluetooth.mojom.GattServiceObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bluetooth.mojom.GattServiceObserverRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.GattServiceObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bluetooth.mojom.GattServiceObserverPendingReceiver,
      handle);
    this.$ = new bluetooth.mojom.GattServiceObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onLocalCharacteristicRead(remote_device, characteristic_uuid, service_uuid, offset) {
    return this.$.onLocalCharacteristicRead(remote_device, characteristic_uuid, service_uuid, offset);
  }
};

bluetooth.mojom.GattServiceObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GattServiceObserver', [
      { explicit: null },
    ]);
  }

  onLocalCharacteristicRead(remote_device, characteristic_uuid, service_uuid, offset) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ParamsSpec,
      bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ResponseParamsSpec,
      [remote_device, characteristic_uuid, service_uuid, offset],
      false);
  }

};

bluetooth.mojom.GattServiceObserver.getRemote = function() {
  let remote = new bluetooth.mojom.GattServiceObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.GattServiceObserver',
    'context');
  return remote.$;
};

bluetooth.mojom.GattServiceObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GattServiceObserver', [
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
             decoder.decodeStructInline(bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ParamsSpec.$.structSpec);
          const result = this.impl.onLocalCharacteristicRead(params.remote_device, params.characteristic_uuid, params.service_uuid, params.offset);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

bluetooth.mojom.GattServiceObserverReceiver = bluetooth.mojom.GattServiceObserverReceiver;

bluetooth.mojom.GattServiceObserverPtr = bluetooth.mojom.GattServiceObserverRemote;
bluetooth.mojom.GattServiceObserverRequest = bluetooth.mojom.GattServiceObserverPendingReceiver;


// Interface: Adapter
mojo.internal.Struct(
    bluetooth.mojom.Adapter_ConnectToDevice_ParamsSpec, 'bluetooth.mojom.Adapter_ConnectToDevice_Params', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_ConnectToDevice_ResponseParamsSpec, 'bluetooth.mojom.Adapter_ConnectToDevice_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, bluetooth.mojom.ConnectResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device', 8, 0, mojo.internal.InterfaceProxy(bluetooth.mojom.DeviceRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_GetDevices_ParamsSpec, 'bluetooth.mojom.Adapter_GetDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_GetDevices_ResponseParamsSpec, 'bluetooth.mojom.Adapter_GetDevices_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(bluetooth.mojom.DeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_GetInfo_ParamsSpec, 'bluetooth.mojom.Adapter_GetInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_GetInfo_ResponseParamsSpec, 'bluetooth.mojom.Adapter_GetInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, bluetooth.mojom.AdapterInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_AddObserver_ParamsSpec, 'bluetooth.mojom.Adapter_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(bluetooth.mojom.AdapterObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_AddObserver_ResponseParamsSpec, 'bluetooth.mojom.Adapter_AddObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_RegisterAdvertisement_ParamsSpec, 'bluetooth.mojom.Adapter_RegisterAdvertisement_Params', [
      mojo.internal.StructField('service_id', 0, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('use_scan_response', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('connectable', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_RegisterAdvertisement_ResponseParamsSpec, 'bluetooth.mojom.Adapter_RegisterAdvertisement_ResponseParams', [
      mojo.internal.StructField('advertisement', 0, 0, mojo.internal.InterfaceProxy(bluetooth.mojom.AdvertisementRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_SetDiscoverable_ParamsSpec, 'bluetooth.mojom.Adapter_SetDiscoverable_Params', [
      mojo.internal.StructField('discoverable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_SetDiscoverable_ResponseParamsSpec, 'bluetooth.mojom.Adapter_SetDiscoverable_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_SetName_ParamsSpec, 'bluetooth.mojom.Adapter_SetName_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_SetName_ResponseParamsSpec, 'bluetooth.mojom.Adapter_SetName_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_StartDiscoverySession_ParamsSpec, 'bluetooth.mojom.Adapter_StartDiscoverySession_Params', [
      mojo.internal.StructField('client_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_StartDiscoverySession_ResponseParamsSpec, 'bluetooth.mojom.Adapter_StartDiscoverySession_ResponseParams', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceProxy(bluetooth.mojom.DiscoverySessionRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ParamsSpec, 'bluetooth.mojom.Adapter_ConnectToServiceInsecurely_Params', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_uuid', 8, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('should_unbond_on_error', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ResponseParamsSpec, 'bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, bluetooth.mojom.ConnectToServiceResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ParamsSpec, 'bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_Params', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_uuid', 8, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ResponseParamsSpec, 'bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ResponseParams', [
      mojo.internal.StructField('server_socket', 0, 0, mojo.internal.InterfaceProxy(bluetooth.mojom.ServerSocketRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_CreateLocalGattService_ParamsSpec, 'bluetooth.mojom.Adapter_CreateLocalGattService_Params', [
      mojo.internal.StructField('service_id', 0, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(bluetooth.mojom.GattServiceObserverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_CreateLocalGattService_ResponseParamsSpec, 'bluetooth.mojom.Adapter_CreateLocalGattService_ResponseParams', [
      mojo.internal.StructField('gatt_service', 0, 0, mojo.internal.InterfaceProxy(bluetooth.mojom.GattServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ParamsSpec, 'bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ResponseParamsSpec, 'bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ResponseParams', [
      mojo.internal.StructField('is_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

bluetooth.mojom.AdapterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bluetooth.mojom.AdapterRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.Adapter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bluetooth.mojom.AdapterPendingReceiver,
      handle);
    this.$ = new bluetooth.mojom.AdapterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  connectToDevice(address) {
    return this.$.connectToDevice(address);
  }
  getDevices() {
    return this.$.getDevices();
  }
  getInfo() {
    return this.$.getInfo();
  }
  addObserver(observer) {
    return this.$.addObserver(observer);
  }
  registerAdvertisement(service_id, service_data, use_scan_response, connectable) {
    return this.$.registerAdvertisement(service_id, service_data, use_scan_response, connectable);
  }
  setDiscoverable(discoverable) {
    return this.$.setDiscoverable(discoverable);
  }
  setName(name) {
    return this.$.setName(name);
  }
  startDiscoverySession(client_name) {
    return this.$.startDiscoverySession(client_name);
  }
  connectToServiceInsecurely(address, service_uuid, should_unbond_on_error) {
    return this.$.connectToServiceInsecurely(address, service_uuid, should_unbond_on_error);
  }
  createRfcommServiceInsecurely(service_name, service_uuid) {
    return this.$.createRfcommServiceInsecurely(service_name, service_uuid);
  }
  createLocalGattService(service_id, observer) {
    return this.$.createLocalGattService(service_id, observer);
  }
  isLeScatternetDualRoleSupported() {
    return this.$.isLeScatternetDualRoleSupported();
  }
};

bluetooth.mojom.AdapterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Adapter', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  connectToDevice(address) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      bluetooth.mojom.Adapter_ConnectToDevice_ParamsSpec,
      bluetooth.mojom.Adapter_ConnectToDevice_ResponseParamsSpec,
      [address],
      false);
  }

  getDevices() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      bluetooth.mojom.Adapter_GetDevices_ParamsSpec,
      bluetooth.mojom.Adapter_GetDevices_ResponseParamsSpec,
      [],
      false);
  }

  getInfo() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      bluetooth.mojom.Adapter_GetInfo_ParamsSpec,
      bluetooth.mojom.Adapter_GetInfo_ResponseParamsSpec,
      [],
      false);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      bluetooth.mojom.Adapter_AddObserver_ParamsSpec,
      bluetooth.mojom.Adapter_AddObserver_ResponseParamsSpec,
      [observer],
      false);
  }

  registerAdvertisement(service_id, service_data, use_scan_response, connectable) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      bluetooth.mojom.Adapter_RegisterAdvertisement_ParamsSpec,
      bluetooth.mojom.Adapter_RegisterAdvertisement_ResponseParamsSpec,
      [service_id, service_data, use_scan_response, connectable],
      false);
  }

  setDiscoverable(discoverable) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      bluetooth.mojom.Adapter_SetDiscoverable_ParamsSpec,
      bluetooth.mojom.Adapter_SetDiscoverable_ResponseParamsSpec,
      [discoverable],
      false);
  }

  setName(name) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      bluetooth.mojom.Adapter_SetName_ParamsSpec,
      bluetooth.mojom.Adapter_SetName_ResponseParamsSpec,
      [name],
      false);
  }

  startDiscoverySession(client_name) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      bluetooth.mojom.Adapter_StartDiscoverySession_ParamsSpec,
      bluetooth.mojom.Adapter_StartDiscoverySession_ResponseParamsSpec,
      [client_name],
      false);
  }

  connectToServiceInsecurely(address, service_uuid, should_unbond_on_error) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ParamsSpec,
      bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ResponseParamsSpec,
      [address, service_uuid, should_unbond_on_error],
      false);
  }

  createRfcommServiceInsecurely(service_name, service_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ParamsSpec,
      bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ResponseParamsSpec,
      [service_name, service_uuid],
      false);
  }

  createLocalGattService(service_id, observer) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      bluetooth.mojom.Adapter_CreateLocalGattService_ParamsSpec,
      bluetooth.mojom.Adapter_CreateLocalGattService_ResponseParamsSpec,
      [service_id, observer],
      false);
  }

  isLeScatternetDualRoleSupported() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ParamsSpec,
      bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ResponseParamsSpec,
      [],
      false);
  }

};

bluetooth.mojom.Adapter.getRemote = function() {
  let remote = new bluetooth.mojom.AdapterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.Adapter',
    'context');
  return remote.$;
};

bluetooth.mojom.AdapterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Adapter', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(bluetooth.mojom.Adapter_ConnectToDevice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.Adapter_GetDevices_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.Adapter_GetInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.Adapter_AddObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.Adapter_RegisterAdvertisement_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.Adapter_SetDiscoverable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.Adapter_SetName_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.Adapter_StartDiscoverySession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.Adapter_CreateLocalGattService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.Adapter_ConnectToDevice_ParamsSpec.$.structSpec);
          const result = this.impl.connectToDevice(params.address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Adapter_ConnectToDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.Adapter_GetDevices_ParamsSpec.$.structSpec);
          const result = this.impl.getDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Adapter_GetDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.Adapter_GetInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Adapter_GetInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.Adapter_AddObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addObserver(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Adapter_AddObserver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.Adapter_RegisterAdvertisement_ParamsSpec.$.structSpec);
          const result = this.impl.registerAdvertisement(params.service_id, params.service_data, params.use_scan_response, params.connectable);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Adapter_RegisterAdvertisement_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.Adapter_SetDiscoverable_ParamsSpec.$.structSpec);
          const result = this.impl.setDiscoverable(params.discoverable);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Adapter_SetDiscoverable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.Adapter_SetName_ParamsSpec.$.structSpec);
          const result = this.impl.setName(params.name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Adapter_SetName_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.Adapter_StartDiscoverySession_ParamsSpec.$.structSpec);
          const result = this.impl.startDiscoverySession(params.client_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Adapter_StartDiscoverySession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ParamsSpec.$.structSpec);
          const result = this.impl.connectToServiceInsecurely(params.address, params.service_uuid, params.should_unbond_on_error);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ParamsSpec.$.structSpec);
          const result = this.impl.createRfcommServiceInsecurely(params.service_name, params.service_uuid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.Adapter_CreateLocalGattService_ParamsSpec.$.structSpec);
          const result = this.impl.createLocalGattService(params.service_id, params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Adapter_CreateLocalGattService_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ParamsSpec.$.structSpec);
          const result = this.impl.isLeScatternetDualRoleSupported();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

bluetooth.mojom.AdapterReceiver = bluetooth.mojom.AdapterReceiver;

bluetooth.mojom.AdapterPtr = bluetooth.mojom.AdapterRemote;
bluetooth.mojom.AdapterRequest = bluetooth.mojom.AdapterPendingReceiver;


// Interface: AdapterObserver
mojo.internal.Struct(
    bluetooth.mojom.AdapterObserver_PresentChanged_ParamsSpec, 'bluetooth.mojom.AdapterObserver_PresentChanged_Params', [
      mojo.internal.StructField('present', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.AdapterObserver_PoweredChanged_ParamsSpec, 'bluetooth.mojom.AdapterObserver_PoweredChanged_Params', [
      mojo.internal.StructField('powered', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.AdapterObserver_DiscoverableChanged_ParamsSpec, 'bluetooth.mojom.AdapterObserver_DiscoverableChanged_Params', [
      mojo.internal.StructField('discoverable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.AdapterObserver_DiscoveringChanged_ParamsSpec, 'bluetooth.mojom.AdapterObserver_DiscoveringChanged_Params', [
      mojo.internal.StructField('discovering', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.AdapterObserver_DeviceAdded_ParamsSpec, 'bluetooth.mojom.AdapterObserver_DeviceAdded_Params', [
      mojo.internal.StructField('device', 0, 0, bluetooth.mojom.DeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.AdapterObserver_DeviceChanged_ParamsSpec, 'bluetooth.mojom.AdapterObserver_DeviceChanged_Params', [
      mojo.internal.StructField('device', 0, 0, bluetooth.mojom.DeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.AdapterObserver_DeviceRemoved_ParamsSpec, 'bluetooth.mojom.AdapterObserver_DeviceRemoved_Params', [
      mojo.internal.StructField('device', 0, 0, bluetooth.mojom.DeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

bluetooth.mojom.AdapterObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bluetooth.mojom.AdapterObserverRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.AdapterObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bluetooth.mojom.AdapterObserverPendingReceiver,
      handle);
    this.$ = new bluetooth.mojom.AdapterObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  presentChanged(present) {
    return this.$.presentChanged(present);
  }
  poweredChanged(powered) {
    return this.$.poweredChanged(powered);
  }
  discoverableChanged(discoverable) {
    return this.$.discoverableChanged(discoverable);
  }
  discoveringChanged(discovering) {
    return this.$.discoveringChanged(discovering);
  }
  deviceAdded(device) {
    return this.$.deviceAdded(device);
  }
  deviceChanged(device) {
    return this.$.deviceChanged(device);
  }
  deviceRemoved(device) {
    return this.$.deviceRemoved(device);
  }
};

bluetooth.mojom.AdapterObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AdapterObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  presentChanged(present) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      bluetooth.mojom.AdapterObserver_PresentChanged_ParamsSpec,
      null,
      [present],
      false);
  }

  poweredChanged(powered) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      bluetooth.mojom.AdapterObserver_PoweredChanged_ParamsSpec,
      null,
      [powered],
      false);
  }

  discoverableChanged(discoverable) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      bluetooth.mojom.AdapterObserver_DiscoverableChanged_ParamsSpec,
      null,
      [discoverable],
      false);
  }

  discoveringChanged(discovering) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      bluetooth.mojom.AdapterObserver_DiscoveringChanged_ParamsSpec,
      null,
      [discovering],
      false);
  }

  deviceAdded(device) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      bluetooth.mojom.AdapterObserver_DeviceAdded_ParamsSpec,
      null,
      [device],
      false);
  }

  deviceChanged(device) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      bluetooth.mojom.AdapterObserver_DeviceChanged_ParamsSpec,
      null,
      [device],
      false);
  }

  deviceRemoved(device) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      bluetooth.mojom.AdapterObserver_DeviceRemoved_ParamsSpec,
      null,
      [device],
      false);
  }

};

bluetooth.mojom.AdapterObserver.getRemote = function() {
  let remote = new bluetooth.mojom.AdapterObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.AdapterObserver',
    'context');
  return remote.$;
};

bluetooth.mojom.AdapterObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AdapterObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(bluetooth.mojom.AdapterObserver_PresentChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.AdapterObserver_PoweredChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.AdapterObserver_DiscoverableChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.AdapterObserver_DiscoveringChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.AdapterObserver_DeviceAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.AdapterObserver_DeviceChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.AdapterObserver_DeviceRemoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.AdapterObserver_PresentChanged_ParamsSpec.$.structSpec);
          const result = this.impl.presentChanged(params.present);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.AdapterObserver_PoweredChanged_ParamsSpec.$.structSpec);
          const result = this.impl.poweredChanged(params.powered);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.AdapterObserver_DiscoverableChanged_ParamsSpec.$.structSpec);
          const result = this.impl.discoverableChanged(params.discoverable);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.AdapterObserver_DiscoveringChanged_ParamsSpec.$.structSpec);
          const result = this.impl.discoveringChanged(params.discovering);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.AdapterObserver_DeviceAdded_ParamsSpec.$.structSpec);
          const result = this.impl.deviceAdded(params.device);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.AdapterObserver_DeviceChanged_ParamsSpec.$.structSpec);
          const result = this.impl.deviceChanged(params.device);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.AdapterObserver_DeviceRemoved_ParamsSpec.$.structSpec);
          const result = this.impl.deviceRemoved(params.device);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

bluetooth.mojom.AdapterObserverReceiver = bluetooth.mojom.AdapterObserverReceiver;

bluetooth.mojom.AdapterObserverPtr = bluetooth.mojom.AdapterObserverRemote;
bluetooth.mojom.AdapterObserverRequest = bluetooth.mojom.AdapterObserverPendingReceiver;

