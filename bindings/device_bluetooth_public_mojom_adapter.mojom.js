// Auto-generated MojoJS binding
// Source: chromium_src/device/bluetooth/public/mojom/adapter.mojom
// Module: bluetooth.mojom

'use strict';

// Module namespace
var bluetooth = bluetooth || {};
bluetooth.mojom = bluetooth.mojom || {};


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

// Struct: ConnectToServiceResult
bluetooth.mojom.ConnectToServiceResultSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.ConnectToServiceResult',
      packedSize: 16,
      fields: [
        { name: 'send_stream', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AcceptConnectionResult
bluetooth.mojom.AcceptConnectionResultSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.AcceptConnectionResult',
      packedSize: 16,
      fields: [
        { name: 'send_stream', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AdapterInfo
bluetooth.mojom.AdapterInfoSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.AdapterInfo',
      packedSize: 16,
      fields: [
        { name: 'discovering', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: Advertisement
bluetooth.mojom.Advertisement = {};

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
      null,
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

// ParamsSpec for Unregister
bluetooth.mojom.Advertisement_Unregister_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Advertisement.Unregister_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
bluetooth.mojom.AdvertisementPtr = bluetooth.mojom.AdvertisementRemote;
bluetooth.mojom.AdvertisementRequest = bluetooth.mojom.AdvertisementPendingReceiver;


// Interface: DiscoverySession
bluetooth.mojom.DiscoverySession = {};

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

// ParamsSpec for IsActive
bluetooth.mojom.DiscoverySession_IsActive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.DiscoverySession.IsActive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.DiscoverySession_IsActive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.DiscoverySession.IsActive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'active', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Stop
bluetooth.mojom.DiscoverySession_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.DiscoverySession.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.DiscoverySession_Stop_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.DiscoverySession.Stop_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
bluetooth.mojom.DiscoverySessionPtr = bluetooth.mojom.DiscoverySessionRemote;
bluetooth.mojom.DiscoverySessionRequest = bluetooth.mojom.DiscoverySessionPendingReceiver;


// Interface: Socket
bluetooth.mojom.Socket = {};

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
      null,
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

// ParamsSpec for Disconnect
bluetooth.mojom.Socket_Disconnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Socket.Disconnect_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
bluetooth.mojom.SocketPtr = bluetooth.mojom.SocketRemote;
bluetooth.mojom.SocketRequest = bluetooth.mojom.SocketPendingReceiver;


// Interface: ServerSocket
bluetooth.mojom.ServerSocket = {};

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
      null,
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

// ParamsSpec for Accept
bluetooth.mojom.ServerSocket_Accept_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.ServerSocket.Accept_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.ServerSocket_Accept_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.ServerSocket.Accept_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Disconnect
bluetooth.mojom.ServerSocket_Disconnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.ServerSocket.Disconnect_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
bluetooth.mojom.ServerSocketPtr = bluetooth.mojom.ServerSocketRemote;
bluetooth.mojom.ServerSocketRequest = bluetooth.mojom.ServerSocketPendingReceiver;


// Interface: GattService
bluetooth.mojom.GattService = {};

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

// ParamsSpec for CreateCharacteristic
bluetooth.mojom.GattService_CreateCharacteristic_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.GattService.CreateCharacteristic_Params',
      packedSize: 32,
      fields: [
        { name: 'characteristic_uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'permissions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'properties', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.GattService_CreateCharacteristic_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.GattService.CreateCharacteristic_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Register
bluetooth.mojom.GattService_Register_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.GattService.Register_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.GattService_Register_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.GattService.Register_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
bluetooth.mojom.GattServicePtr = bluetooth.mojom.GattServiceRemote;
bluetooth.mojom.GattServiceRequest = bluetooth.mojom.GattServicePendingReceiver;


// Interface: GattServiceObserver
bluetooth.mojom.GattServiceObserver = {};

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

// ParamsSpec for OnLocalCharacteristicRead
bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.GattServiceObserver.OnLocalCharacteristicRead_Params',
      packedSize: 40,
      fields: [
        { name: 'remote_device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'characteristic_uuid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'service_uuid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'offset', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.GattServiceObserver_OnLocalCharacteristicRead_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.GattServiceObserver.OnLocalCharacteristicRead_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'read_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
bluetooth.mojom.GattServiceObserverPtr = bluetooth.mojom.GattServiceObserverRemote;
bluetooth.mojom.GattServiceObserverRequest = bluetooth.mojom.GattServiceObserverPendingReceiver;


// Interface: Adapter
bluetooth.mojom.Adapter = {};

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
      null,
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

// ParamsSpec for ConnectToDevice
bluetooth.mojom.Adapter_ConnectToDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.ConnectToDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.Adapter_ConnectToDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.ConnectToDevice_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDevices
bluetooth.mojom.Adapter_GetDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.GetDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.Adapter_GetDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.GetDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetInfo
bluetooth.mojom.Adapter_GetInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.GetInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.Adapter_GetInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.GetInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddObserver
bluetooth.mojom.Adapter_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterAdvertisement
bluetooth.mojom.Adapter_RegisterAdvertisement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.RegisterAdvertisement_Params',
      packedSize: 32,
      fields: [
        { name: 'service_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'service_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'use_scan_response', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'connectable', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.Adapter_RegisterAdvertisement_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.RegisterAdvertisement_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'advertisement', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetDiscoverable
bluetooth.mojom.Adapter_SetDiscoverable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.SetDiscoverable_Params',
      packedSize: 16,
      fields: [
        { name: 'discoverable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.Adapter_SetDiscoverable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.SetDiscoverable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetName
bluetooth.mojom.Adapter_SetName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.SetName_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.Adapter_SetName_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.SetName_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartDiscoverySession
bluetooth.mojom.Adapter_StartDiscoverySession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.StartDiscoverySession_Params',
      packedSize: 16,
      fields: [
        { name: 'client_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.Adapter_StartDiscoverySession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.StartDiscoverySession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ConnectToServiceInsecurely
bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.ConnectToServiceInsecurely_Params',
      packedSize: 32,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'service_uuid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'should_unbond_on_error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.Adapter_ConnectToServiceInsecurely_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.ConnectToServiceInsecurely_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateRfcommServiceInsecurely
bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.CreateRfcommServiceInsecurely_Params',
      packedSize: 24,
      fields: [
        { name: 'service_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'service_uuid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.Adapter_CreateRfcommServiceInsecurely_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.CreateRfcommServiceInsecurely_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'server_socket', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateLocalGattService
bluetooth.mojom.Adapter_CreateLocalGattService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.CreateLocalGattService_Params',
      packedSize: 24,
      fields: [
        { name: 'service_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.Adapter_CreateLocalGattService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.CreateLocalGattService_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'gatt_service', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsLeScatternetDualRoleSupported
bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.IsLeScatternetDualRoleSupported_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.Adapter_IsLeScatternetDualRoleSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Adapter.IsLeScatternetDualRoleSupported_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
bluetooth.mojom.AdapterPtr = bluetooth.mojom.AdapterRemote;
bluetooth.mojom.AdapterRequest = bluetooth.mojom.AdapterPendingReceiver;


// Interface: AdapterObserver
bluetooth.mojom.AdapterObserver = {};

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

// ParamsSpec for PresentChanged
bluetooth.mojom.AdapterObserver_PresentChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.AdapterObserver.PresentChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'present', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PoweredChanged
bluetooth.mojom.AdapterObserver_PoweredChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.AdapterObserver.PoweredChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'powered', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DiscoverableChanged
bluetooth.mojom.AdapterObserver_DiscoverableChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.AdapterObserver.DiscoverableChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'discoverable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DiscoveringChanged
bluetooth.mojom.AdapterObserver_DiscoveringChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.AdapterObserver.DiscoveringChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'discovering', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeviceAdded
bluetooth.mojom.AdapterObserver_DeviceAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.AdapterObserver.DeviceAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeviceChanged
bluetooth.mojom.AdapterObserver_DeviceChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.AdapterObserver.DeviceChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeviceRemoved
bluetooth.mojom.AdapterObserver_DeviceRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.AdapterObserver.DeviceRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
bluetooth.mojom.AdapterObserverPtr = bluetooth.mojom.AdapterObserverRemote;
bluetooth.mojom.AdapterObserverRequest = bluetooth.mojom.AdapterObserverPendingReceiver;

