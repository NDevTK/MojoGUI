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

  onAtomicPreferenceValidation(pref_path, value, value_state, external_validation_value_state, is_personal) {
    // Method: OnAtomicPreferenceValidation
    // Call: OnAtomicPreferenceValidation(pref_path, value, value_state, external_validation_value_state, is_personal)
  }

  onSplitPreferenceValidation(pref_path, invalid_keys, external_validation_invalid_keys, value_state, external_validation_value_state, is_personal) {
    // Method: OnSplitPreferenceValidation
    // Call: OnSplitPreferenceValidation(pref_path, invalid_keys, external_validation_invalid_keys, value_state, external_validation_value_state, is_personal)
  }

};

prefs.mojom.TrackedPreferenceValidationDelegateRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
