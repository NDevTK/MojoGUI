// Auto-generated MojoJS binding
// Source: chromium_src/services/preferences/public/mojom/preferences.mojom
// Module: prefs.mojom

'use strict';

// Module namespace
var prefs = prefs || {};
prefs.mojom = prefs.mojom || {};


// Enum: EnforcementLevel
prefs.mojom.EnforcementLevel = {
  NO_ENFORCEMENT: 0,
  ENFORCE_ON_LOAD: 1,
};

// Enum: PrefTrackingStrategy
prefs.mojom.PrefTrackingStrategy = {
};

// Enum: ValueType
prefs.mojom.ValueType = {
  IMPERSONAL: 0,
};

// Struct: TrackedPersistentPrefStoreConfiguration
prefs.mojom.TrackedPersistentPrefStoreConfiguration = class {
  constructor(values = {}) {
    this.reset_on_load_observer = values.reset_on_load_observer !== undefined ? values.reset_on_load_observer : 0;
  }
};

// Struct: TrackedPreferenceMetadata
prefs.mojom.TrackedPreferenceMetadata = class {
  constructor(values = {}) {
    this.NO_ENFORCEMENT = values.NO_ENFORCEMENT !== undefined ? values.NO_ENFORCEMENT : null;
  }
};

// Interface: ResetOnLoadObserver
prefs.mojom.ResetOnLoadObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'prefs.mojom.ResetOnLoadObserver';
  }

  onResetOnLoad() {
    // Method: OnResetOnLoad
    // Call: OnResetOnLoad()
  }

};

prefs.mojom.ResetOnLoadObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
