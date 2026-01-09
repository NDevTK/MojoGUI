// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/public/mojom/call_stack_profile_collector_test.mojom
// Module: metrics.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.mojom = metrics.mojom || {};


// Interface: CallStackProfileCollectorTest
metrics.mojom.CallStackProfileCollectorTestPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'metrics.mojom.CallStackProfileCollectorTest';
  }

  bounceSampledProfile(in) {
    // Method: BounceSampledProfile
    return new Promise((resolve) => {
      // Call: BounceSampledProfile(in)
      resolve({});
    });
  }

};

metrics.mojom.CallStackProfileCollectorTestRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
