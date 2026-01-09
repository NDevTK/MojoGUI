// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_object.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ServiceWorkerObjectInfo
blink.mojom.ServiceWorkerObjectInfo = class {
  constructor(values = {}) {
    this.receiver = values.receiver !== undefined ? values.receiver : 0;
  }
};

// Interface: ServiceWorkerObjectHost
blink.mojom.ServiceWorkerObjectHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ServiceWorkerObjectHost';
  }

  postMessage() {
    // Method: postMessage
    // Call: postMessage()
  }

  postMessageToServiceWorker(message) {
    // Method: PostMessageToServiceWorker
    // Call: PostMessageToServiceWorker(message)
  }

  terminateForTesting() {
    // Method: TerminateForTesting
    // Call: TerminateForTesting()
  }

};

blink.mojom.ServiceWorkerObjectHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ServiceWorkerObject
blink.mojom.ServiceWorkerObjectPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ServiceWorkerObject';
  }

  stateChanged(state) {
    // Method: StateChanged
    // Call: StateChanged(state)
  }

};

blink.mojom.ServiceWorkerObjectRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
