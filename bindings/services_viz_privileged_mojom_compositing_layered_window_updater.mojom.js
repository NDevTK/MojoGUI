// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/layered_window_updater.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: LayeredWindowUpdater
viz.mojom.LayeredWindowUpdaterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.LayeredWindowUpdater';
  }

  onAllocatedSharedMemory(pixel_size, region) {
    // Method: OnAllocatedSharedMemory
    // Call: OnAllocatedSharedMemory(pixel_size, region)
  }

  draw() {
    // Method: Draw
    // Call: Draw()
  }

};

viz.mojom.LayeredWindowUpdaterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
