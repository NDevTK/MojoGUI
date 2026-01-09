// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/system_tracing_service.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};


// Interface: SystemTracingService
tracing.mojom.SystemTracingServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tracing.mojom.SystemTracingService';
  }

  openProducerSocket() {
    // Method: OpenProducerSocket
    return new Promise((resolve) => {
      // Call: OpenProducerSocket()
      resolve({});
    });
  }

};

tracing.mojom.SystemTracingServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
