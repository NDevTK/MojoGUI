// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/compute_pressure/web_pressure_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: WebPressureManager
blink.mojom.WebPressureManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebPressureManager';
  }

  addClient() {
    // Method: AddClient
    // Call: AddClient()
  }

  addClient(source, client) {
    // Method: AddClient
    return new Promise((resolve) => {
      // Call: AddClient(source, client)
      resolve({});
    });
  }

};

blink.mojom.WebPressureManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebPressureClient
blink.mojom.WebPressureClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebPressureClient';
  }

  onPressureUpdated(update) {
    // Method: OnPressureUpdated
    // Call: OnPressureUpdated(update)
  }

};

blink.mojom.WebPressureClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
