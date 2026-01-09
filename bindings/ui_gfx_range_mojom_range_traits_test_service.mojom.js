// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/range/mojom/range_traits_test_service.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Interface: RangeTraitsTestService
gfx.mojom.RangeTraitsTestServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'gfx.mojom.RangeTraitsTestService';
  }

  echoRange(p) {
    // Method: EchoRange
    return new Promise((resolve) => {
      // Call: EchoRange(p)
      resolve({});
    });
  }

  echoRangeF(p) {
    // Method: EchoRangeF
    return new Promise((resolve) => {
      // Call: EchoRangeF(p)
      resolve({});
    });
  }

};

gfx.mojom.RangeTraitsTestServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
