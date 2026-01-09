// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/leak_detector/leak_detector.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: LeakDetectionResult
blink.mojom.LeakDetectionResult = class {
  constructor(values = {}) {
    this.number_of_live_resource_fetchers = values.number_of_live_resource_fetchers !== undefined ? values.number_of_live_resource_fetchers : 0;
  }
};

// Interface: LeakDetector
blink.mojom.LeakDetectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.LeakDetector';
  }

  performLeakDetection() {
    // Method: PerformLeakDetection
    return new Promise((resolve) => {
      // Call: PerformLeakDetection()
      resolve({});
    });
  }

};

blink.mojom.LeakDetectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
