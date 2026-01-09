// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/hit_test/input_target_client.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: InputTargetClient
viz.mojom.InputTargetClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.InputTargetClient';
  }

  isMusHostingViz() {
    // Method: IsMusHostingViz
    // Call: IsMusHostingViz()
  }

  widget(an) {
    // Method: widget
    // Call: widget(an)
  }

  frameSinkIdAt(point, trace_id) {
    // Method: FrameSinkIdAt
    return new Promise((resolve) => {
      // Call: FrameSinkIdAt(point, trace_id)
      resolve({});
    });
  }

};

viz.mojom.InputTargetClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
