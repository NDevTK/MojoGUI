// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/gpu_logging.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: GpuLogging
viz.mojom.GpuLoggingPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.GpuLogging';
  }

  recordLogMessage(severity, header, message) {
    // Method: RecordLogMessage
    // Call: RecordLogMessage(severity, header, message)
  }

};

viz.mojom.GpuLoggingRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
