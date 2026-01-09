// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/feature_observer/feature_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ObservedFeatureType
blink.mojom.ObservedFeatureType = {
};

// Interface: ObservedFeature
blink.mojom.ObservedFeaturePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ObservedFeature';
  }

};

blink.mojom.ObservedFeatureRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FeatureObserver
blink.mojom.FeatureObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FeatureObserver';
  }

  register(feature, type) {
    // Method: Register
    // Call: Register(feature, type)
  }

};

blink.mojom.FeatureObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
