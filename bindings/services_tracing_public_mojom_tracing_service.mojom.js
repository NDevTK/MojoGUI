// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/tracing_service.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};


// Struct: ClientInfo
tracing.mojom.ClientInfo = class {
  constructor(values = {}) {
    this.process = values.process !== undefined ? values.process : 0;
  }
};

// Interface: TracingService
tracing.mojom.TracingServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tracing.mojom.TracingService';
  }

  initialize(clients) {
    // Method: Initialize
    // Call: Initialize(clients)
  }

  addClient(client) {
    // Method: AddClient
    // Call: AddClient(client)
  }

  bindConsumerHost(receiver) {
    // Method: BindConsumerHost
    // Call: BindConsumerHost(receiver)
  }

};

tracing.mojom.TracingServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
