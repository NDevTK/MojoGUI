// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_worker_client_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ServiceWorkerWorkerClientRegistry
blink.mojom.ServiceWorkerWorkerClientRegistryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ServiceWorkerWorkerClientRegistry';
  }

  registerWorkerClient(client) {
    // Method: RegisterWorkerClient
    // Call: RegisterWorkerClient(client)
  }

  cloneWorkerClientRegistry(host) {
    // Method: CloneWorkerClientRegistry
    // Call: CloneWorkerClientRegistry(host)
  }

};

blink.mojom.ServiceWorkerWorkerClientRegistryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
