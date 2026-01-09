// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_manager_client.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: UsbDeviceManagerClient
device.mojom.UsbDeviceManagerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.UsbDeviceManagerClient';
  }

  onDeviceAdded(device_info) {
    // Method: OnDeviceAdded
    // Call: OnDeviceAdded(device_info)
  }

  onDeviceRemoved(device_info) {
    // Method: OnDeviceRemoved
    // Call: OnDeviceRemoved(device_info)
  }

};

device.mojom.UsbDeviceManagerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
