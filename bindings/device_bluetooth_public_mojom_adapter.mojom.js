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
bluetooth.mojom.ConnectToServiceResult = class {
  constructor(values = {}) {
    this.send_stream = values.send_stream !== undefined ? values.send_stream : null;
  }
};

// Struct: AcceptConnectionResult
bluetooth.mojom.AcceptConnectionResult = class {
  constructor(values = {}) {
    this.send_stream = values.send_stream !== undefined ? values.send_stream : null;
  }
};

// Struct: AdapterInfo
bluetooth.mojom.AdapterInfo = class {
  constructor(values = {}) {
    this.string = values.string !== undefined ? values.string : null;
    this.floss = values.floss !== undefined ? values.floss : false;
    this.discovering = values.discovering !== undefined ? values.discovering : false;
  }
};

// Interface: Advertisement
bluetooth.mojom.AdvertisementPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'bluetooth.mojom.Advertisement';
  }

  unregister() {
    // Method: Unregister
    // Call: Unregister()
  }

};

bluetooth.mojom.AdvertisementRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DiscoverySession
bluetooth.mojom.DiscoverySessionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'bluetooth.mojom.DiscoverySession';
  }

  isActive() {
    // Method: IsActive
    return new Promise((resolve) => {
      // Call: IsActive()
      resolve({});
    });
  }

  stop() {
    // Method: Stop
    return new Promise((resolve) => {
      // Call: Stop()
      resolve({});
    });
  }

};

bluetooth.mojom.DiscoverySessionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Socket
bluetooth.mojom.SocketPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'bluetooth.mojom.Socket';
  }

  disconnect() {
    // Method: Disconnect
    // Call: Disconnect()
  }

};

bluetooth.mojom.SocketRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ServerSocket
bluetooth.mojom.ServerSocketPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'bluetooth.mojom.ServerSocket';
  }

  accept() {
    // Method: Accept
    return new Promise((resolve) => {
      // Call: Accept()
      resolve({});
    });
  }

  disconnect() {
    // Method: Disconnect
    // Call: Disconnect()
  }

};

bluetooth.mojom.ServerSocketRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GattService
bluetooth.mojom.GattServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'bluetooth.mojom.GattService';
  }

  createCharacteristic(characteristic_uuid, permissions, properties) {
    // Method: CreateCharacteristic
    return new Promise((resolve) => {
      // Call: CreateCharacteristic(characteristic_uuid, permissions, properties)
      resolve({});
    });
  }

  register() {
    // Method: Register
    // Call: Register()
  }

  register() {
    // Method: Register
    return new Promise((resolve) => {
      // Call: Register()
      resolve({});
    });
  }

};

bluetooth.mojom.GattServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GattServiceObserver
bluetooth.mojom.GattServiceObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'bluetooth.mojom.GattServiceObserver';
  }

  onLocalCharacteristicRead(remote_device, characteristic_uuid, service_uuid, offset) {
    // Method: OnLocalCharacteristicRead
    return new Promise((resolve) => {
      // Call: OnLocalCharacteristicRead(remote_device, characteristic_uuid, service_uuid, offset)
      resolve({});
    });
  }

};

bluetooth.mojom.GattServiceObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Adapter
bluetooth.mojom.AdapterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'bluetooth.mojom.Adapter';
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  connectToDevice(address) {
    // Method: ConnectToDevice
    return new Promise((resolve) => {
      // Call: ConnectToDevice(address)
      resolve({});
    });
  }

  getDevices() {
    // Method: GetDevices
    return new Promise((resolve) => {
      // Call: GetDevices()
      resolve({});
    });
  }

  getInfo() {
    // Method: GetInfo
    return new Promise((resolve) => {
      // Call: GetInfo()
      resolve({});
    });
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

  registerAdvertisement(service_id, service_data, use_scan_response, connectable) {
    // Method: RegisterAdvertisement
    return new Promise((resolve) => {
      // Call: RegisterAdvertisement(service_id, service_data, use_scan_response, connectable)
      resolve({});
    });
  }

  setDiscoverable(discoverable) {
    // Method: SetDiscoverable
    return new Promise((resolve) => {
      // Call: SetDiscoverable(discoverable)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  setName(name) {
    // Method: SetName
    return new Promise((resolve) => {
      // Call: SetName(name)
      resolve({});
    });
  }

  startDiscoverySession(client_name) {
    // Method: StartDiscoverySession
    return new Promise((resolve) => {
      // Call: StartDiscoverySession(client_name)
      resolve({});
    });
  }

  bonding() {
    // Method: bonding
    // Call: bonding()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  connectToServiceInsecurely(address, service_uuid, should_unbond_on_error) {
    // Method: ConnectToServiceInsecurely
    return new Promise((resolve) => {
      // Call: ConnectToServiceInsecurely(address, service_uuid, should_unbond_on_error)
      resolve({});
    });
  }

  bonding() {
    // Method: bonding
    // Call: bonding()
  }

  createRfcommServiceInsecurely(service_name, service_uuid) {
    // Method: CreateRfcommServiceInsecurely
    return new Promise((resolve) => {
      // Call: CreateRfcommServiceInsecurely(service_name, service_uuid)
      resolve({});
    });
  }

  isLeScatternetDualRoleSupported() {
    // Method: IsLeScatternetDualRoleSupported
    // Call: IsLeScatternetDualRoleSupported()
  }

  createLocalGattService(service_id, observer) {
    // Method: CreateLocalGattService
    return new Promise((resolve) => {
      // Call: CreateLocalGattService(service_id, observer)
      resolve({});
    });
  }

  createLocalGattService() {
    // Method: CreateLocalGattService
    // Call: CreateLocalGattService()
  }

  isLeScatternetDualRoleSupported() {
    // Method: IsLeScatternetDualRoleSupported
    return new Promise((resolve) => {
      // Call: IsLeScatternetDualRoleSupported()
      resolve({});
    });
  }

};

bluetooth.mojom.AdapterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AdapterObserver
bluetooth.mojom.AdapterObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'bluetooth.mojom.AdapterObserver';
  }

  presentChanged(present) {
    // Method: PresentChanged
    // Call: PresentChanged(present)
  }

  poweredChanged(powered) {
    // Method: PoweredChanged
    // Call: PoweredChanged(powered)
  }

  discoverableChanged(discoverable) {
    // Method: DiscoverableChanged
    // Call: DiscoverableChanged(discoverable)
  }

  discoveringChanged(discovering) {
    // Method: DiscoveringChanged
    // Call: DiscoveringChanged(discovering)
  }

  deviceAdded(device) {
    // Method: DeviceAdded
    // Call: DeviceAdded(device)
  }

  deviceChanged(device) {
    // Method: DeviceChanged
    // Call: DeviceChanged(device)
  }

  deviceRemoved(device) {
    // Method: DeviceRemoved
    // Call: DeviceRemoved(device)
  }

};

bluetooth.mojom.AdapterObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
