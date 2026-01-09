// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/usb/web_usb_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: WebUsbRequestDeviceOptions
blink.mojom.WebUsbRequestDeviceOptions = class {
  constructor(values = {}) {
    this.exclusion_filters = values.exclusion_filters !== undefined ? values.exclusion_filters : [];
  }
};

// Interface: WebUsbService
blink.mojom.WebUsbServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebUsbService';
  }

  getDevices() {
    // Method: GetDevices
    return new Promise((resolve) => {
      // Call: GetDevices()
      resolve({});
    });
  }

  getDevice(guid, device_receiver) {
    // Method: GetDevice
    // Call: GetDevice(guid, device_receiver)
  }

  getPermission(options) {
    // Method: GetPermission
    return new Promise((resolve) => {
      // Call: GetPermission(options)
      resolve({});
    });
  }

  forgetDevice(guid) {
    // Method: ForgetDevice
    // Call: ForgetDevice(guid)
  }

  setClient(client) {
    // Method: SetClient
    // Call: SetClient(client)
  }

};

blink.mojom.WebUsbServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
