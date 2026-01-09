// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/oom_intervention/oom_intervention.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: DetectionArgs
blink.mojom.DetectionArgs = class {
  constructor(values = {}) {
    this.private_footprint_threshold = values.private_footprint_threshold !== undefined ? values.private_footprint_threshold : 0;
  }
};

// Interface: OomInterventionHost
blink.mojom.OomInterventionHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.OomInterventionHost';
  }

  onHighMemoryUsage() {
    // Method: OnHighMemoryUsage
    // Call: OnHighMemoryUsage()
  }

};

blink.mojom.OomInterventionHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: OomIntervention
blink.mojom.OomInterventionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.OomIntervention';
  }

  startDetection(host, detection_args, renderer_pause_enabled, navigate_ads_enabled, purge_v8_memory_enabled) {
    // Method: StartDetection
    // Call: StartDetection(host, detection_args, renderer_pause_enabled, navigate_ads_enabled, purge_v8_memory_enabled)
  }

};

blink.mojom.OomInterventionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
