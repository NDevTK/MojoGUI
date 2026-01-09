// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/traced_process.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};


// Struct: ConnectToTracingRequest
tracing.mojom.ConnectToTracingRequest = class {
  constructor(values = {}) {
    this.perfetto_service = values.perfetto_service !== undefined ? values.perfetto_service : null;
  }
};

// Interface: TracedProcess
tracing.mojom.TracedProcessPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tracing.mojom.TracedProcess';
  }

  connectToTracingService(request) {
    // Method: ConnectToTracingService
    // Call: ConnectToTracingService(request)
  }

};

tracing.mojom.TracedProcessRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
