// Auto-generated MojoJS binding
// Source: chromium_src/content/common/renderer_host.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: RendererHost
content.mojom.RendererHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.RendererHost';
  }

  getBrowserHistogram(name) {
    // Method: GetBrowserHistogram
    return new Promise((resolve) => {
      // Call: GetBrowserHistogram(name)
      resolve({});
    });
  }

  suddenTerminationAllowedChanged(allowed) {
    // Method: SuddenTerminationAllowedChanged
    // Call: SuddenTerminationAllowedChanged(allowed)
  }

  recordUserMetricsAction(action) {
    // Method: RecordUserMetricsAction
    // Call: RecordUserMetricsAction(action)
  }

  setPrivateMemoryFootprint(private_memory_footprint_bytes) {
    // Method: SetPrivateMemoryFootprint
    // Call: SetPrivateMemoryFootprint(private_memory_footprint_bytes)
  }

};

content.mojom.RendererHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
