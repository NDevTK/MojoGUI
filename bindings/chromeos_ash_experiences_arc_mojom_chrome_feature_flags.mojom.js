// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/chrome_feature_flags.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: RoundedWindowCompatStrategy
arc.mojom.RoundedWindowCompatStrategy = {
};

// Struct: FeatureFlags
arc.mojom.FeatureFlags = class {
  constructor(values = {}) {
    this.extend_intent_anr_timeout = values.extend_intent_anr_timeout !== undefined ? values.extend_intent_anr_timeout : 0;
  }
};

// Interface: ChromeFeatureFlagsInstance
arc.mojom.ChromeFeatureFlagsInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ChromeFeatureFlagsInstance';
  }

};

arc.mojom.ChromeFeatureFlagsInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
