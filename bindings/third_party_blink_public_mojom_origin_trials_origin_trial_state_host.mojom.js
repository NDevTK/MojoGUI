// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/origin_trials/origin_trial_state_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: OriginTrialFeatureState
blink.mojom.OriginTrialFeatureState = class {
  constructor(values = {}) {
    this.tokens = values.tokens !== undefined ? values.tokens : false;
  }
};

// Interface: OriginTrialStateHost
blink.mojom.OriginTrialStateHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.OriginTrialStateHost';
  }

  applyFeatureDiffForOriginTrial(origin_trial_features) {
    // Method: ApplyFeatureDiffForOriginTrial
    // Call: ApplyFeatureDiffForOriginTrial(origin_trial_features)
  }

  enablePersistentTrial(token, script_origins) {
    // Method: EnablePersistentTrial
    // Call: EnablePersistentTrial(token, script_origins)
  }

};

blink.mojom.OriginTrialStateHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
