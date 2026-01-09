// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/hid/hid.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: VendorAndProduct
blink.mojom.VendorAndProduct = class {
  constructor(values = {}) {
    this.product = values.product !== undefined ? values.product : 0;
  }
};

// Struct: HidDeviceFilter
blink.mojom.HidDeviceFilter = class {
  constructor(values = {}) {
    this.provided = values.provided !== undefined ? values.provided : null;
    this.same = values.same !== undefined ? values.same : null;
    this.device_ids = values.device_ids !== undefined ? values.device_ids : null;
    this.provided = values.provided !== undefined ? values.provided : null;
    this.a = values.a !== undefined ? values.a : null;
    this.usage = values.usage !== undefined ? values.usage : null;
  }
};

// Interface: HidService
blink.mojom.HidServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.HidService';
  }

  registerClient(client) {
    // Method: RegisterClient
    // Call: RegisterClient(client)
  }

  getDevices() {
    // Method: GetDevices
    return new Promise((resolve) => {
      // Call: GetDevices()
      resolve({});
    });
  }

  requestDevice(filters, exclusion_filters) {
    // Method: RequestDevice
    return new Promise((resolve) => {
      // Call: RequestDevice(filters, exclusion_filters)
      resolve({});
    });
  }

  connect(device_guid, client) {
    // Method: Connect
    return new Promise((resolve) => {
      // Call: Connect(device_guid, client)
      resolve({});
    });
  }

  forget(device_info) {
    // Method: Forget
    // Call: Forget(device_info)
  }

};

blink.mojom.HidServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
