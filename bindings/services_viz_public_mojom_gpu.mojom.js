// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/gpu.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: Gpu
viz.mojom.GpuPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.Gpu';
  }

  establishGpuChannel() {
    // Method: EstablishGpuChannel
    return new Promise((resolve) => {
      // Call: EstablishGpuChannel()
      resolve({});
    });
  }

  createJpegDecodeAccelerator(jda) {
    // Method: CreateJpegDecodeAccelerator
    // Call: CreateJpegDecodeAccelerator(jda)
  }

  createVideoEncodeAcceleratorProvider(vea_provider) {
    // Method: CreateVideoEncodeAcceleratorProvider
    // Call: CreateVideoEncodeAcceleratorProvider(vea_provider)
  }

};

viz.mojom.GpuRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
