// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/dwa/mojom/dwa_interface.mojom
// Module: metrics.dwa.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.dwa = metrics.dwa || {};
metrics.dwa.mojom = metrics.dwa.mojom || {};


// Struct: DwaEntry
metrics.dwa.mojom.DwaEntry = class {
  constructor(values = {}) {
    this.content_hash = values.content_hash !== undefined ? values.content_hash : 0;
    this.metrics = values.metrics !== undefined ? values.metrics : 0;
  }
};

// Interface: DwaRecorderClientInterface
metrics.dwa.mojom.DwaRecorderClientInterfacePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'metrics.dwa.mojom.DwaRecorderClientInterface';
  }

};

metrics.dwa.mojom.DwaRecorderClientInterfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DwaRecorderInterface
metrics.dwa.mojom.DwaRecorderInterfacePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'metrics.dwa.mojom.DwaRecorderInterface';
  }

  addEntry(entry) {
    // Method: AddEntry
    // Call: AddEntry(entry)
  }

};

metrics.dwa.mojom.DwaRecorderInterfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DwaRecorderFactory
metrics.dwa.mojom.DwaRecorderFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'metrics.dwa.mojom.DwaRecorderFactory';
  }

  createDwaRecorder(receiver, client_remote) {
    // Method: CreateDwaRecorder
    // Call: CreateDwaRecorder(receiver, client_remote)
  }

};

metrics.dwa.mojom.DwaRecorderFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
