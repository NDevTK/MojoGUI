// Auto-generated MojoJS binding
// Source: chromium_src/components/viz/service/debugger/mojom/viz_debugger.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: VizDebugOutput
viz.mojom.VizDebugOutputPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.VizDebugOutput';
  }

  logFrame(frameData) {
    // Method: LogFrame
    // Call: LogFrame(frameData)
  }

};

viz.mojom.VizDebugOutputRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
