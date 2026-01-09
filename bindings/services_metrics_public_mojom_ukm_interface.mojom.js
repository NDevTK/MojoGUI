// Auto-generated MojoJS binding
// Source: chromium_src/services/metrics/public/mojom/ukm_interface.mojom
// Module: ukm.mojom

'use strict';

// Module namespace
var ukm = ukm || {};
ukm.mojom = ukm.mojom || {};


// Struct: UkmEntry
ukm.mojom.UkmEntry = class {
  constructor(values = {}) {
    this.metrics = values.metrics !== undefined ? values.metrics : 0;
  }
};

// Struct: UkmRecorderParameters
ukm.mojom.UkmRecorderParameters = class {
  constructor(values = {}) {
    this.event_hash_bypass_list = values.event_hash_bypass_list !== undefined ? values.event_hash_bypass_list : 0;
  }
};

// Interface: SingularUkmInterface
ukm.mojom.SingularUkmInterfacePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ukm.mojom.SingularUkmInterface';
  }

  submit(entry) {
    // Method: Submit
    // Call: Submit(entry)
  }

};

ukm.mojom.SingularUkmInterfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UkmRecorderClientInterface
ukm.mojom.UkmRecorderClientInterfacePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ukm.mojom.UkmRecorderClientInterface';
  }

  clients(testing) {
    // Method: clients
    // Call: clients(testing)
  }

  setParameters(params) {
    // Method: SetParameters
    // Call: SetParameters(params)
  }

};

ukm.mojom.UkmRecorderClientInterfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UkmRecorderInterface
ukm.mojom.UkmRecorderInterfacePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ukm.mojom.UkmRecorderInterface';
  }

  addEntry(entry) {
    // Method: AddEntry
    // Call: AddEntry(entry)
  }

  updateSourceURL(source_id, url) {
    // Method: UpdateSourceURL
    // Call: UpdateSourceURL(source_id, url)
  }

};

ukm.mojom.UkmRecorderInterfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UkmRecorderFactory
ukm.mojom.UkmRecorderFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ukm.mojom.UkmRecorderFactory';
  }

  createUkmRecorder(receiver, client_remote) {
    // Method: CreateUkmRecorder
    // Call: CreateUkmRecorder(receiver, client_remote)
  }

};

ukm.mojom.UkmRecorderFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
