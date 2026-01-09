// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/public/mojom/call_stack_profile_collector.mojom
// Module: metrics.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.mojom = metrics.mojom || {};


// Enum: ProfileType
metrics.mojom.ProfileType = {
  kCPU: 0,
  kHeap: 1,
};

// Struct: SampledProfile
metrics.mojom.SampledProfile = class {
  constructor(values = {}) {
    this.contents = values.contents !== undefined ? values.contents : null;
  }
};

// Interface: CallStackProfileCollector
metrics.mojom.CallStackProfileCollectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'metrics.mojom.CallStackProfileCollector';
  }

  collect(start_timestamp, profile_type, profile) {
    // Method: Collect
    // Call: Collect(start_timestamp, profile_type, profile)
  }

};

metrics.mojom.CallStackProfileCollectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
