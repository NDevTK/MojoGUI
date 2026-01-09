// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_manager_test.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Struct: TestDeviceInfo
device.mojom.TestDeviceInfo = class {
  constructor(values = {}) {
    this.landing_page = values.landing_page !== undefined ? values.landing_page : "";
  }
};

// Interface: UsbDeviceManagerTest
device.mojom.UsbDeviceManagerTestPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.UsbDeviceManagerTest';
  }

  addDeviceForTesting(name, serial_number, landing_page) {
    // Method: AddDeviceForTesting
    return new Promise((resolve) => {
      // Call: AddDeviceForTesting(name, serial_number, landing_page)
      resolve({});
    });
  }

  removeDeviceForTesting(guid) {
    // Method: RemoveDeviceForTesting
    // Call: RemoveDeviceForTesting(guid)
  }

  getTestDevices() {
    // Method: GetTestDevices
    return new Promise((resolve) => {
      // Call: GetTestDevices()
      resolve({});
    });
  }

};

device.mojom.UsbDeviceManagerTestRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
