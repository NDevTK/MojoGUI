// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/bluetooth/web_bluetooth.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: WebBluetoothResult
blink.mojom.WebBluetoothResult = {
  SUCCESS: 0,
  CONNECT_INVALID_ARGS: 1,
  CHARACTERISTIC_NO_LONGER_EXISTS: 2,
  PROMPT_CANCELED: 3,
  CONNECT_DOES_NOT_EXIST: 4,
  CONNECT_AUTH_CANCELED: 5,
  CONNECT_AUTH_FAILED: 6,
  CONNECT_AUTH_REJECTED: 7,
  CONNECT_AUTH_TIMEOUT: 8,
  CONNECT_UNKNOWN_ERROR: 9,
  CONNECT_UNKNOWN_FAILURE: 10,
  CONNECT_UNSUPPORTED_DEVICE: 11,
  DEVICE_NO_LONGER_IN_RANGE: 12,
  GATT_NOT_PAIRED: 13,
  GATT_OPERATION_IN_PROGRESS: 14,
  CONNECT_CONN_FAILED: 15,
  CONNECT_NOT_READY: 16,
  CONNECT_ALREADY_CONNECTED: 17,
  CONNECT_ALREADY_EXISTS: 18,
  CONNECT_NOT_CONNECTED: 19,
  CONNECT_NON_AUTH_TIMEOUT: 20,
  CONNECT_NO_MEMORY: 21,
  CONNECT_JNI_ENVIRONMENT: 22,
  CONNECT_JNI_THREAD_ATTACH: 23,
  CONNECT_WAKELOCK: 24,
  CONNECT_UNEXPECTED_STATE: 25,
  CONNECT_SOCKET_ERROR: 26,
  CHOSEN_DEVICE_VANISHED: 27,
  CHOOSER_CANCELLED: 28,
  CHOOSER_NOT_SHOWN_API_GLOBALLY_DISABLED: 29,
  CHOOSER_NOT_SHOWN_API_LOCALLY_DISABLED: 30,
  CHOOSER_NOT_SHOWN_USER_DENIED_PERMISSION_TO_SCAN: 31,
  SERVICE_NOT_FOUND: 32,
  NO_SERVICES_FOUND: 33,
  CHARACTERISTIC_NOT_FOUND: 34,
  NO_CHARACTERISTICS_FOUND: 35,
  DESCRIPTOR_NOT_FOUND: 36,
  NO_DESCRIPTORS_FOUND: 37,
  WEB_BLUETOOTH_NOT_SUPPORTED: 38,
  BLUETOOTH_LOW_ENERGY_NOT_AVAILABLE: 39,
  GATT_UNKNOWN_FAILURE: 40,
  GATT_NOT_PERMITTED: 41,
  GATT_NOT_SUPPORTED: 42,
  GATT_UNTRANSLATED_ERROR_CODE: 43,
  BLOCKLISTED_DESCRIPTOR_UUID: 44,
  BLOCKLISTED_CHARACTERISTIC_UUID: 45,
  BLOCKLISTED_READ: 46,
  BLOCKLISTED_WRITE: 47,
  NOT_ALLOWED_TO_ACCESS_ANY_SERVICE: 48,
  NOT_ALLOWED_TO_ACCESS_SERVICE: 49,
  REQUEST_DEVICE_WITH_BLOCKLISTED_UUID_OR_MANUFACTURER_DATA: 50,
  DESCRIPTOR_NO_LONGER_EXISTS: 51,
  PERMISSIONS_POLICY_VIOLATION: 52,
};

// Enum: WebBluetoothGATTQueryQuantity
blink.mojom.WebBluetoothGATTQueryQuantity = {
  SINGLE: 0,
  MULTIPLE: 1,
};

// Enum: WebBluetoothWriteType
blink.mojom.WebBluetoothWriteType = {
};

// Struct: WebBluetoothLeScanFilter
blink.mojom.WebBluetoothLeScanFilter = class {
  constructor(values = {}) {
    this.manufacturer_data = values.manufacturer_data !== undefined ? values.manufacturer_data : "";
  }
};

// Struct: WebBluetoothCompany
blink.mojom.WebBluetoothCompany = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : 0;
  }
};

// Struct: WebBluetoothDataFilter
blink.mojom.WebBluetoothDataFilter = class {
  constructor(values = {}) {
    this.mask = values.mask !== undefined ? values.mask : 0;
  }
};

// Struct: WebBluetoothRequestDeviceOptions
blink.mojom.WebBluetoothRequestDeviceOptions = class {
  constructor(values = {}) {
    this.accept_all_devices = values.accept_all_devices !== undefined ? values.accept_all_devices : 0;
  }
};

// Struct: WebBluetoothRequestLEScanOptions
blink.mojom.WebBluetoothRequestLEScanOptions = class {
  constructor(values = {}) {
    this.accept_all_advertisements = values.accept_all_advertisements !== undefined ? values.accept_all_advertisements : false;
  }
};

// Struct: WebBluetoothDeviceId
blink.mojom.WebBluetoothDeviceId = class {
  constructor(values = {}) {
    this.device_id = values.device_id !== undefined ? values.device_id : 0;
  }
};

// Struct: WebBluetoothDevice
blink.mojom.WebBluetoothDevice = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : "";
  }
};

// Struct: WebBluetoothRemoteGATTService
blink.mojom.WebBluetoothRemoteGATTService = class {
  constructor(values = {}) {
    this.uuid = values.uuid !== undefined ? values.uuid : "";
  }
};

// Struct: WebBluetoothRemoteGATTCharacteristic
blink.mojom.WebBluetoothRemoteGATTCharacteristic = class {
  constructor(values = {}) {
    this.properties = values.properties !== undefined ? values.properties : 0;
  }
};

// Struct: WebBluetoothAdvertisingEvent
blink.mojom.WebBluetoothAdvertisingEvent = class {
  constructor(values = {}) {
    this.service_data = values.service_data !== undefined ? values.service_data : 0;
  }
};

// Struct: WebBluetoothRemoteGATTDescriptor
blink.mojom.WebBluetoothRemoteGATTDescriptor = class {
  constructor(values = {}) {
    this.uuid = values.uuid !== undefined ? values.uuid : "";
  }
};

// Interface: WebBluetoothService
blink.mojom.WebBluetoothServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebBluetoothService';
  }

  getAvailability() {
    // Method: GetAvailability
    return new Promise((resolve) => {
      // Call: GetAvailability()
      resolve({});
    });
  }

  requestDevice(options) {
    // Method: RequestDevice
    return new Promise((resolve) => {
      // Call: RequestDevice(options)
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

  forgetDevice(device_id) {
    // Method: ForgetDevice
    // Call: ForgetDevice(device_id)
  }

  remoteServerConnect(device_id, client) {
    // Method: RemoteServerConnect
    return new Promise((resolve) => {
      // Call: RemoteServerConnect(device_id, client)
      resolve({});
    });
  }

  remoteServerDisconnect(device_id) {
    // Method: RemoteServerDisconnect
    // Call: RemoteServerDisconnect(device_id)
  }

  remoteServerGetPrimaryServices(device_id, quantity, services_uuid) {
    // Method: RemoteServerGetPrimaryServices
    return new Promise((resolve) => {
      // Call: RemoteServerGetPrimaryServices(device_id, quantity, services_uuid)
      resolve({});
    });
  }

  remoteServiceGetCharacteristics(service_instance_id, quantity, characteristics_uuid) {
    // Method: RemoteServiceGetCharacteristics
    return new Promise((resolve) => {
      // Call: RemoteServiceGetCharacteristics(service_instance_id, quantity, characteristics_uuid)
      resolve({});
    });
  }

  remoteCharacteristicReadValue(characteristic_instance_id) {
    // Method: RemoteCharacteristicReadValue
    return new Promise((resolve) => {
      // Call: RemoteCharacteristicReadValue(characteristic_instance_id)
      resolve({});
    });
  }

  remoteCharacteristicWriteValue(characteristic_instance_id, value, write_type) {
    // Method: RemoteCharacteristicWriteValue
    return new Promise((resolve) => {
      // Call: RemoteCharacteristicWriteValue(characteristic_instance_id, value, write_type)
      resolve({});
    });
  }

  remoteCharacteristicStartNotifications(characteristic_instance_id, client) {
    // Method: RemoteCharacteristicStartNotifications
    return new Promise((resolve) => {
      // Call: RemoteCharacteristicStartNotifications(characteristic_instance_id, client)
      resolve({});
    });
  }

  remoteCharacteristicStopNotifications(characteristic_instance_id) {
    // Method: RemoteCharacteristicStopNotifications
    // Call: RemoteCharacteristicStopNotifications(characteristic_instance_id)
  }

  remoteCharacteristicGetDescriptors(characteristics_instance_id, quantity, descriptor_uuid) {
    // Method: RemoteCharacteristicGetDescriptors
    return new Promise((resolve) => {
      // Call: RemoteCharacteristicGetDescriptors(characteristics_instance_id, quantity, descriptor_uuid)
      resolve({});
    });
  }

  remoteDescriptorReadValue(descriptor_instance_id) {
    // Method: RemoteDescriptorReadValue
    return new Promise((resolve) => {
      // Call: RemoteDescriptorReadValue(descriptor_instance_id)
      resolve({});
    });
  }

  remoteDescriptorWriteValue(descriptor_instance_id, value) {
    // Method: RemoteDescriptorWriteValue
    return new Promise((resolve) => {
      // Call: RemoteDescriptorWriteValue(descriptor_instance_id, value)
      resolve({});
    });
  }

  requestScanningStart(client, options) {
    // Method: RequestScanningStart
    return new Promise((resolve) => {
      // Call: RequestScanningStart(client, options)
      resolve({});
    });
  }

  watchAdvertisementsForDevice(device_id, client) {
    // Method: WatchAdvertisementsForDevice
    return new Promise((resolve) => {
      // Call: WatchAdvertisementsForDevice(device_id, client)
      resolve({});
    });
  }

};

blink.mojom.WebBluetoothServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebBluetoothServerClient
blink.mojom.WebBluetoothServerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebBluetoothServerClient';
  }

  gATTServerDisconnected() {
    // Method: GATTServerDisconnected
    // Call: GATTServerDisconnected()
  }

};

blink.mojom.WebBluetoothServerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebBluetoothCharacteristicClient
blink.mojom.WebBluetoothCharacteristicClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebBluetoothCharacteristicClient';
  }

  remoteCharacteristicValueChanged(value) {
    // Method: RemoteCharacteristicValueChanged
    // Call: RemoteCharacteristicValueChanged(value)
  }

};

blink.mojom.WebBluetoothCharacteristicClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebBluetoothAdvertisementClient
blink.mojom.WebBluetoothAdvertisementClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebBluetoothAdvertisementClient';
  }

  advertisingEvent(result) {
    // Method: AdvertisingEvent
    // Call: AdvertisingEvent(result)
  }

};

blink.mojom.WebBluetoothAdvertisementClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
