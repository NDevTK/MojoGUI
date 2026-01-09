// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_worker_client.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ServiceWorkerWorkerClient
blink.mojom.ServiceWorkerWorkerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ServiceWorkerWorkerClient';
  }

  onControllerChanged(mode) {
    // Method: OnControllerChanged
    // Call: OnControllerChanged(mode)
  }

};

blink.mojom.ServiceWorkerWorkerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
