// Auto-generated MojoJS binding
// Source: chromium_src/services/preferences/public/mojom/tracked_preference_validation_delegate.mojom
// Module: prefs.mojom

'use strict';

// Module namespace
var prefs = prefs || {};
prefs.mojom = prefs.mojom || {};


// Enum: ValueState
prefs.mojom.ValueState = {
  but: 0,
  and: 1,
  but: 2,
  but: 3,
  so: 4,
  signaling: 5,
  and: 6,
};

// Interface: TrackedPreferenceValidationDelegate
prefs.mojom.TrackedPreferenceValidationDelegatePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'prefs.mojom.TrackedPreferenceValidationDelegate';
  }

};

prefs.mojom.TrackedPreferenceValidationDelegateRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
