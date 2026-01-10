// Auto-generated MojoJS binding
// Source: chromium_src/device/bluetooth/public/mojom/adapter.mojom
// Module: bluetooth.mojom

'use strict';

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
        'type': bluetooth.mojom.GattServiceErrorCodeSpec,
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
      mojo.internal.StructField('device', 0, 0, bluetooth.mojom.DeviceInfoSpec, null, false, 0, undefined),
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
};

bluetooth.mojom.AdvertisementRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  unregister() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      bluetooth.mojom.Advertisement_Unregister_ParamsSpec,
      bluetooth.mojom.Advertisement_Unregister_ResponseParamsSpec,
      []);
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
};

bluetooth.mojom.DiscoverySessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isActive() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      bluetooth.mojom.DiscoverySession_IsActive_ParamsSpec,
      bluetooth.mojom.DiscoverySession_IsActive_ResponseParamsSpec,
      []);
  }

  stop() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bluetooth.mojom.DiscoverySession_Stop_ParamsSpec,
      bluetooth.mojom.DiscoverySession_Stop_ResponseParamsSpec,
      []);
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
};

bluetooth.mojom.SocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  disconnect() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      bluetooth.mojom.Socket_Disconnect_ParamsSpec,
      bluetooth.mojom.Socket_Disconnect_ResponseParamsSpec,
      []);
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

bluetooth.mojom.SocketPtr = bluetooth.mojom.SocketRemote;
bluetooth.mojom.SocketRequest = bluetooth.mojom.SocketPendingReceiver;


// Interface: ServerSocket
mojo.internal.Struct(
    bluetooth.mojom.ServerSocket_Accept_ParamsSpec, 'bluetooth.mojom.ServerSocket_Accept_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.ServerSocket_Accept_ResponseParamsSpec, 'bluetooth.mojom.ServerSocket_Accept_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, bluetooth.mojom.AcceptConnectionResultSpec, null, true, 0, undefined),
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
};

bluetooth.mojom.ServerSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  accept() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      bluetooth.mojom.ServerSocket_Accept_ParamsSpec,
      bluetooth.mojom.ServerSocket_Accept_ResponseParamsSpec,
      []);
  }

  disconnect() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bluetooth.mojom.ServerSocket_Disconnect_ParamsSpec,
      bluetooth.mojom.ServerSocket_Disconnect_ResponseParamsSpec,
      []);
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

bluetooth.mojom.ServerSocketPtr = bluetooth.mojom.ServerSocketRemote;
bluetooth.mojom.ServerSocketRequest = bluetooth.mojom.ServerSocketPendingReceiver;


// Interface: GattService
mojo.internal.Struct(
    bluetooth.mojom.GattService_CreateCharacteristic_ParamsSpec, 'bluetooth.mojom.GattService_CreateCharacteristic_Params', [
      mojo.internal.StructField('characteristic_uuid', 0, 0, bluetooth.mojom.UUIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('permissions', 8, 0, bluetooth.mojom.GattCharacteristicPermissionsSpec, null, false, 0, undefined),
      mojo.internal.StructField('properties', 16, 0, bluetooth.mojom.GattCharacteristicPropertiesSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('error_code', 0, 0, bluetooth.mojom.GattServiceErrorCodeSpec, null, true, 0, undefined),
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
};

bluetooth.mojom.GattServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCharacteristic(characteristic_uuid, permissions, properties) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      bluetooth.mojom.GattService_CreateCharacteristic_ParamsSpec,
      bluetooth.mojom.GattService_CreateCharacteristic_ResponseParamsSpec,
      [characteristic_uuid, permissions, properties]);
  }

  register() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bluetooth.mojom.GattService_Register_ParamsSpec,
      bluetooth.mojom.GattService_Register_ResponseParamsSpec,
      []);
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

bluetooth.mojom.GattServicePtr = bluetooth.mojom.GattServiceRemote;
bluetooth.mojom.GattServiceRequest = bluetooth.mojom.GattServicePendingReceiver;


// Interface: GattServiceObserver
mojo.internal.Struct(
    bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ParamsSpec, 'bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_Params', [
      mojo.internal.StructField('remote_device', 0, 0, bluetooth.mojom.DeviceInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_uuid', 8, 0, bluetooth.mojom.UUIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_uuid', 16, 0, bluetooth.mojom.UUIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('offset', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ResponseParamsSpec, 'bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ResponseParams', [
      mojo.internal.StructField('read_result', 0, 0, bluetooth.mojom.LocalCharacteristicReadResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
};

bluetooth.mojom.GattServiceObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLocalCharacteristicRead(remote_device, characteristic_uuid, service_uuid, offset) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ParamsSpec,
      bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ResponseParamsSpec,
      [remote_device, characteristic_uuid, service_uuid, offset]);
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
      mojo.internal.StructField('result', 8, 0, bluetooth.mojom.ConnectResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('device', 0, 0, mojo.internal.InterfaceProxy(bluetooth.mojom.DeviceRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_GetDevices_ParamsSpec, 'bluetooth.mojom.Adapter_GetDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_GetDevices_ResponseParamsSpec, 'bluetooth.mojom.Adapter_GetDevices_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(bluetooth.mojom.DeviceInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_GetInfo_ParamsSpec, 'bluetooth.mojom.Adapter_GetInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_GetInfo_ResponseParamsSpec, 'bluetooth.mojom.Adapter_GetInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, bluetooth.mojom.AdapterInfoSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('service_id', 0, 0, bluetooth.mojom.UUIDSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('service_uuid', 8, 0, bluetooth.mojom.UUIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('should_unbond_on_error', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ResponseParamsSpec, 'bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, bluetooth.mojom.ConnectToServiceResultSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ParamsSpec, 'bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_Params', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_uuid', 8, 0, bluetooth.mojom.UUIDSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ResponseParamsSpec, 'bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ResponseParams', [
      mojo.internal.StructField('server_socket', 0, 0, mojo.internal.InterfaceProxy(bluetooth.mojom.ServerSocketRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Adapter_CreateLocalGattService_ParamsSpec, 'bluetooth.mojom.Adapter_CreateLocalGattService_Params', [
      mojo.internal.StructField('service_id', 0, 0, bluetooth.mojom.UUIDSpec, null, false, 0, undefined),
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
};

bluetooth.mojom.AdapterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectToDevice(address) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      bluetooth.mojom.Adapter_ConnectToDevice_ParamsSpec,
      bluetooth.mojom.Adapter_ConnectToDevice_ResponseParamsSpec,
      [address]);
  }

  getDevices() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bluetooth.mojom.Adapter_GetDevices_ParamsSpec,
      bluetooth.mojom.Adapter_GetDevices_ResponseParamsSpec,
      []);
  }

  getInfo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      bluetooth.mojom.Adapter_GetInfo_ParamsSpec,
      bluetooth.mojom.Adapter_GetInfo_ResponseParamsSpec,
      []);
  }

  addObserver(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      bluetooth.mojom.Adapter_AddObserver_ParamsSpec,
      bluetooth.mojom.Adapter_AddObserver_ResponseParamsSpec,
      [observer]);
  }

  registerAdvertisement(service_id, service_data, use_scan_response, connectable) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      bluetooth.mojom.Adapter_RegisterAdvertisement_ParamsSpec,
      bluetooth.mojom.Adapter_RegisterAdvertisement_ResponseParamsSpec,
      [service_id, service_data, use_scan_response, connectable]);
  }

  setDiscoverable(discoverable) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      bluetooth.mojom.Adapter_SetDiscoverable_ParamsSpec,
      bluetooth.mojom.Adapter_SetDiscoverable_ResponseParamsSpec,
      [discoverable]);
  }

  setName(name) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      bluetooth.mojom.Adapter_SetName_ParamsSpec,
      bluetooth.mojom.Adapter_SetName_ResponseParamsSpec,
      [name]);
  }

  startDiscoverySession(client_name) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      bluetooth.mojom.Adapter_StartDiscoverySession_ParamsSpec,
      bluetooth.mojom.Adapter_StartDiscoverySession_ResponseParamsSpec,
      [client_name]);
  }

  connectToServiceInsecurely(address, service_uuid, should_unbond_on_error) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ParamsSpec,
      bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ResponseParamsSpec,
      [address, service_uuid, should_unbond_on_error]);
  }

  createRfcommServiceInsecurely(service_name, service_uuid) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ParamsSpec,
      bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ResponseParamsSpec,
      [service_name, service_uuid]);
  }

  createLocalGattService(service_id, observer) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      bluetooth.mojom.Adapter_CreateLocalGattService_ParamsSpec,
      bluetooth.mojom.Adapter_CreateLocalGattService_ResponseParamsSpec,
      [service_id, observer]);
  }

  isLeScatternetDualRoleSupported() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ParamsSpec,
      bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ResponseParamsSpec,
      []);
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
      mojo.internal.StructField('device', 0, 0, bluetooth.mojom.DeviceInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.AdapterObserver_DeviceChanged_ParamsSpec, 'bluetooth.mojom.AdapterObserver_DeviceChanged_Params', [
      mojo.internal.StructField('device', 0, 0, bluetooth.mojom.DeviceInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.AdapterObserver_DeviceRemoved_ParamsSpec, 'bluetooth.mojom.AdapterObserver_DeviceRemoved_Params', [
      mojo.internal.StructField('device', 0, 0, bluetooth.mojom.DeviceInfoSpec, null, false, 0, undefined),
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
};

bluetooth.mojom.AdapterObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  presentChanged(present) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      bluetooth.mojom.AdapterObserver_PresentChanged_ParamsSpec,
      null,
      [present]);
  }

  poweredChanged(powered) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bluetooth.mojom.AdapterObserver_PoweredChanged_ParamsSpec,
      null,
      [powered]);
  }

  discoverableChanged(discoverable) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      bluetooth.mojom.AdapterObserver_DiscoverableChanged_ParamsSpec,
      null,
      [discoverable]);
  }

  discoveringChanged(discovering) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      bluetooth.mojom.AdapterObserver_DiscoveringChanged_ParamsSpec,
      null,
      [discovering]);
  }

  deviceAdded(device) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      bluetooth.mojom.AdapterObserver_DeviceAdded_ParamsSpec,
      null,
      [device]);
  }

  deviceChanged(device) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      bluetooth.mojom.AdapterObserver_DeviceChanged_ParamsSpec,
      null,
      [device]);
  }

  deviceRemoved(device) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      bluetooth.mojom.AdapterObserver_DeviceRemoved_ParamsSpec,
      null,
      [device]);
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

bluetooth.mojom.AdapterObserverPtr = bluetooth.mojom.AdapterObserverRemote;
bluetooth.mojom.AdapterObserverRequest = bluetooth.mojom.AdapterObserverPendingReceiver;

