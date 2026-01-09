// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/input_service.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: InputDeviceSubsystem
device.mojom.InputDeviceSubsystem = {
  SUBSYSTEM_HID: 0,
  SUBSYSTEM_INPUT: 1,
  SUBSYSTEM_UNKNOWN: 2,
};

// Enum: InputDeviceType
device.mojom.InputDeviceType = {
  TYPE_BLUETOOTH: 0,
  TYPE_USB: 1,
  TYPE_SERIO: 2,
  TYPE_UNKNOWN: 3,
};

// Struct: InputDeviceInfo
device.mojom.InputDeviceInfo = class {
  constructor(values = {}) {
    this.is_touchscreen = values.is_touchscreen !== undefined ? values.is_touchscreen : false;
  }
};

// Interface: InputDeviceManagerClient
device.mojom.InputDeviceManagerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.InputDeviceManagerClient';
  }

  inputDeviceAdded(device_info) {
    // Method: InputDeviceAdded
    // Call: InputDeviceAdded(device_info)
  }

  inputDeviceRemoved(id) {
    // Method: InputDeviceRemoved
    // Call: InputDeviceRemoved(id)
  }

};

device.mojom.InputDeviceManagerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: InputDeviceManager
device.mojom.InputDeviceManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.InputDeviceManager';
  }

  inputDeviceAdded() {
    // Method: InputDeviceAdded
    // Call: InputDeviceAdded()
  }

  inputDeviceRemoved() {
    // Method: InputDeviceRemoved
    // Call: InputDeviceRemoved()
  }

  getDevicesAndSetClient(client) {
    // Method: GetDevicesAndSetClient
    return new Promise((resolve) => {
      // Call: GetDevicesAndSetClient(client)
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

};

device.mojom.InputDeviceManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
