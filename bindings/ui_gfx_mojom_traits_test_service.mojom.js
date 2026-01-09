// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/traits_test_service.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Interface: TraitsTestService
gfx.mojom.TraitsTestServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'gfx.mojom.TraitsTestService';
  }

  echoSelectionBound(s) {
    // Method: EchoSelectionBound
    return new Promise((resolve) => {
      // Call: EchoSelectionBound(s)
      resolve({});
    });
  }

  echoTransform(t) {
    // Method: EchoTransform
    return new Promise((resolve) => {
      // Call: EchoTransform(t)
      resolve({});
    });
  }

  echoGpuMemoryBufferHandle(g) {
    // Method: EchoGpuMemoryBufferHandle
    return new Promise((resolve) => {
      // Call: EchoGpuMemoryBufferHandle(g)
      resolve({});
    });
  }

  echoRRectF(t) {
    // Method: EchoRRectF
    return new Promise((resolve) => {
      // Call: EchoRRectF(t)
      resolve({});
    });
  }

};

gfx.mojom.TraitsTestServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
