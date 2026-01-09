// Auto-generated MojoJS binding
// Source: chromium_src/content/common/field_trial_recorder.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: FieldTrialRecorder
content.mojom.FieldTrialRecorderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.FieldTrialRecorder';
  }

  fieldTrialActivated(trial_name) {
    // Method: FieldTrialActivated
    // Call: FieldTrialActivated(trial_name)
  }

};

content.mojom.FieldTrialRecorderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
