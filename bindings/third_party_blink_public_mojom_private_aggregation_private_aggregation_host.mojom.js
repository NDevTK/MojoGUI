// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/private_aggregation/private_aggregation_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: PrivateAggregationErrorEvent
blink.mojom.PrivateAggregationErrorEvent = {
  but: 0,
  but: 1,
  the: 2,
  the: 3,
  but: 4,
  see: 5,
};

// Struct: DebugKey
blink.mojom.DebugKey = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Struct: DebugModeDetails
blink.mojom.DebugModeDetails = class {
  constructor(values = {}) {
    this.debug_key = values.debug_key !== undefined ? values.debug_key : false;
  }
};

// Interface: PrivateAggregationHost
blink.mojom.PrivateAggregationHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PrivateAggregationHost';
  }

  contributeToHistogram(contributions) {
    // Method: ContributeToHistogram
    // Call: ContributeToHistogram(contributions)
  }

  contributeToHistogramOnEvent(error_event, contributions) {
    // Method: ContributeToHistogramOnEvent
    // Call: ContributeToHistogramOnEvent(error_event, contributions)
  }

  enableDebugMode(debug_key) {
    // Method: EnableDebugMode
    // Call: EnableDebugMode(debug_key)
  }

};

blink.mojom.PrivateAggregationHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
