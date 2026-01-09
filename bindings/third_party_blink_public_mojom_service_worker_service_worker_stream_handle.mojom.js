// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_stream_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ServiceWorkerStreamHandle
blink.mojom.ServiceWorkerStreamHandle = class {
  constructor(values = {}) {
    this.callback_receiver = values.callback_receiver !== undefined ? values.callback_receiver : null;
  }
};

// Interface: ServiceWorkerStreamCallback
blink.mojom.ServiceWorkerStreamCallbackPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ServiceWorkerStreamCallback';
  }

  onCompleted() {
    // Method: OnCompleted
    // Call: OnCompleted()
  }

  onAborted() {
    // Method: OnAborted
    // Call: OnAborted()
  }

};

blink.mojom.ServiceWorkerStreamCallbackRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
