// Auto-generated MojoJS binding
// Source: chromium_src/device/bluetooth/public/mojom/device.mojom
// Module: bluetooth.mojom

'use strict';

// Module namespace
var bluetooth = bluetooth || {};
bluetooth.mojom = bluetooth.mojom || {};


// Enum: Property
bluetooth.mojom.Property = {
  NONE: 0,
  BROADCAST: 1,
  READ: 2,
  WRITE_WITHOUT_RESPONSE: 3,
  WRITE: 4,
  NOTIFY: 5,
  INDICATE: 6,
  AUTHENTICATED_SIGNED_WRITES: 7,
  EXTENDED_PROPERTIES: 8,
  RELIABLE_WRITE: 9,
  WRITABLE_AUXILIARIES: 10,
  READ_ENCRYPTED: 11,
  WRITE_ENCRYPTED: 12,
  READ_ENCRYPTED_AUTHENTICATED: 13,
  WRITE_ENCRYPTED_AUTHENTICATED: 14,
};

// Enum: GattResult
bluetooth.mojom.GattResult = {
  SUCCESS: 0,
  UNKNOWN: 1,
  FAILED: 2,
  IN_PROGRESS: 3,
  INVALID_LENGTH: 4,
  NOT_PERMITTED: 5,
  NOT_AUTHORIZED: 6,
  NOT_PAIRED: 7,
  NOT_SUPPORTED: 8,
  SERVICE_NOT_FOUND: 9,
  CHARACTERISTIC_NOT_FOUND: 10,
  DESCRIPTOR_NOT_FOUND: 11,
};

// Struct: RSSIWrapper
bluetooth.mojom.RSSIWrapper = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Struct: DeviceInfo
bluetooth.mojom.DeviceInfo = class {
  constructor(values = {}) {
    this.service_data_map = values.service_data_map !== undefined ? values.service_data_map : 0;
  }
};

// Struct: ServiceInfo
bluetooth.mojom.ServiceInfo = class {
  constructor(values = {}) {
    this.is_primary = values.is_primary !== undefined ? values.is_primary : false;
  }
};

// Struct: CharacteristicInfo
bluetooth.mojom.CharacteristicInfo = class {
  constructor(values = {}) {
    this.last_known_value = values.last_known_value !== undefined ? values.last_known_value : 0;
  }
};

// Struct: DescriptorInfo
bluetooth.mojom.DescriptorInfo = class {
  constructor(values = {}) {
    this.last_known_value = values.last_known_value !== undefined ? values.last_known_value : 0;
  }
};

// Interface: Device
bluetooth.mojom.DevicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'bluetooth.mojom.Device';
  }

  disconnect() {
    // Method: Disconnect
    // Call: Disconnect()
  }

  getInfo() {
    // Method: GetInfo
    return new Promise((resolve) => {
      // Call: GetInfo()
      resolve({});
    });
  }

  getServices() {
    // Method: GetServices
    return new Promise((resolve) => {
      // Call: GetServices()
      resolve({});
    });
  }

  getCharacteristics(service_id) {
    // Method: GetCharacteristics
    return new Promise((resolve) => {
      // Call: GetCharacteristics(service_id)
      resolve({});
    });
  }

  readValueForCharacteristic(service_id, characteristic_id) {
    // Method: ReadValueForCharacteristic
    return new Promise((resolve) => {
      // Call: ReadValueForCharacteristic(service_id, characteristic_id)
      resolve({});
    });
  }

  writeValueForCharacteristic(service_id, characteristic_id, value) {
    // Method: WriteValueForCharacteristic
    return new Promise((resolve) => {
      // Call: WriteValueForCharacteristic(service_id, characteristic_id, value)
      resolve({});
    });
  }

  getDescriptors(service_id, characteristic_id) {
    // Method: GetDescriptors
    return new Promise((resolve) => {
      // Call: GetDescriptors(service_id, characteristic_id)
      resolve({});
    });
  }

  readValueForDescriptor(service_id, characteristic_id, descriptor_id) {
    // Method: ReadValueForDescriptor
    return new Promise((resolve) => {
      // Call: ReadValueForDescriptor(service_id, characteristic_id, descriptor_id)
      resolve({});
    });
  }

  writeValueForDescriptor(service_id, characteristic_id, descriptor_id, value) {
    // Method: WriteValueForDescriptor
    return new Promise((resolve) => {
      // Call: WriteValueForDescriptor(service_id, characteristic_id, descriptor_id, value)
      resolve({});
    });
  }

};

bluetooth.mojom.DeviceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
