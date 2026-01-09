// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_manager.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: UsbDeviceManager
device.mojom.UsbDeviceManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.UsbDeviceManager';
  }

  enumerateDevicesAndSetClient(client) {
    // Method: EnumerateDevicesAndSetClient
    return new Promise((resolve) => {
      // Call: EnumerateDevicesAndSetClient(client)
      resolve({});
    });
  }

  getDevices(options) {
    // Method: GetDevices
    return new Promise((resolve) => {
      // Call: GetDevices(options)
      resolve({});
    });
  }

  getDevice(guid, blocked_interface_classes, device_receiver, device_client) {
    // Method: GetDevice
    // Call: GetDevice(guid, blocked_interface_classes, device_receiver, device_client)
  }

  getSecurityKeyDevice(guid, device_receiver, device_client) {
    // Method: GetSecurityKeyDevice
    // Call: GetSecurityKeyDevice(guid, device_receiver, device_client)
  }

  refreshDeviceInfo(guid) {
    // Method: RefreshDeviceInfo
    return new Promise((resolve) => {
      // Call: RefreshDeviceInfo(guid)
      resolve({});
    });
  }

  checkAccess(guid) {
    // Method: CheckAccess
    return new Promise((resolve) => {
      // Call: CheckAccess(guid)
      resolve({});
    });
  }

  openFileDescriptor(guid, allowed_interfaces_mask, lifeline_fd) {
    // Method: OpenFileDescriptor
    return new Promise((resolve) => {
      // Call: OpenFileDescriptor(guid, allowed_interfaces_mask, lifeline_fd)
      resolve({});
    });
  }

  setClient(client) {
    // Method: SetClient
    // Call: SetClient(client)
  }

};

device.mojom.UsbDeviceManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
