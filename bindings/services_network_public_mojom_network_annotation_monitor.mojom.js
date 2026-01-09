// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_annotation_monitor.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: NetworkAnnotationMonitor
network.mojom.NetworkAnnotationMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.NetworkAnnotationMonitor';
  }

  report(hash_code) {
    // Method: Report
    // Call: Report(hash_code)
  }

};

network.mojom.NetworkAnnotationMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
