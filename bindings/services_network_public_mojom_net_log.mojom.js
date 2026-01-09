// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/net_log.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: NetLogCaptureMode
network.mojom.NetLogCaptureMode = {
  but: 0,
  but: 1,
  and: 2,
  but: 3,
  even: 4,
};

// Enum: NetLogEventPhase
network.mojom.NetLogEventPhase = {
  BEGIN: 0,
  END: 1,
  NONE: 2,
};

// Interface: NetLogExporter
network.mojom.NetLogExporterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.NetLogExporter';
  }

  stop() {
    // Method: Stop
    // Call: Stop()
  }

  start(destination, extra_constants, capture_mode, max_file_size) {
    // Method: Start
    return new Promise((resolve) => {
      // Call: Start(destination, extra_constants, capture_mode, max_file_size)
      resolve({});
    });
  }

  stop(polled_values) {
    // Method: Stop
    return new Promise((resolve) => {
      // Call: Stop(polled_values)
      resolve({});
    });
  }

};

network.mojom.NetLogExporterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NetLogProxySource
network.mojom.NetLogProxySourcePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.NetLogProxySource';
  }

  updateCaptureModes(modes) {
    // Method: UpdateCaptureModes
    // Call: UpdateCaptureModes(modes)
  }

};

network.mojom.NetLogProxySourceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NetLogProxySink
network.mojom.NetLogProxySinkPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.NetLogProxySink';
  }

  initializeSourceIdPartition() {
    // Method: InitializeSourceIdPartition
    // Call: InitializeSourceIdPartition()
  }

  addEntry(type, net_log_source, phase, time, params) {
    // Method: AddEntry
    // Call: AddEntry(type, net_log_source, phase, time, params)
  }

};

network.mojom.NetLogProxySinkRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
