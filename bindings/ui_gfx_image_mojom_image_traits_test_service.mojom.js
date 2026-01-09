// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/image/mojom/image_traits_test_service.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Interface: ImageTraitsTestService
gfx.mojom.ImageTraitsTestServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'gfx.mojom.ImageTraitsTestService';
  }

  echoImageSkiaRep(in) {
    // Method: EchoImageSkiaRep
    return new Promise((resolve) => {
      // Call: EchoImageSkiaRep(in)
      resolve({});
    });
  }

  echoImageSkia(in) {
    // Method: EchoImageSkia
    return new Promise((resolve) => {
      // Call: EchoImageSkia(in)
      resolve({});
    });
  }

};

gfx.mojom.ImageTraitsTestServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
