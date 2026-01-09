// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_running_status_callback.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ServiceWorkerRunningStatusCallback
blink.mojom.ServiceWorkerRunningStatusCallbackPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ServiceWorkerRunningStatusCallback';
  }

  onStatusChanged(status) {
    // Method: OnStatusChanged
    // Call: OnStatusChanged(status)
  }

};

blink.mojom.ServiceWorkerRunningStatusCallbackRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
