// Auto-generated MojoJS binding
// Source: chromium_src/chrome/updater/mojom/updater_service.mojom
// Module: updater.mojom

'use strict';

// Module namespace
var updater = updater || {};
updater.mojom = updater.mojom || {};


// Enum: State
updater.mojom.State = {
  but: 0,
};

// Enum: PolicySource
updater.mojom.PolicySource = {
  if: 0,
  Group: 1,
  Managed: 2,
};

// Enum: PolicySameVersionUpdate
updater.mojom.PolicySameVersionUpdate = {
  the: 0,
  and: 1,
};

// Enum: Result
updater.mojom.Result = {
  such: 0,
  kUpdateCanceled: 1,
  or: 2,
  because: 3,
  or: 4,
  either: 5,
  or: 6,
};

// Enum: ErrorCategory
updater.mojom.ErrorCategory = {
  kNone: 0,
  kDownload: 1,
  kUnpack: 2,
  kInstall: 3,
  kService: 4,
  kUpdateCheck: 5,
};

// Enum: Priority
updater.mojom.Priority = {
};

// Struct: RegistrationRequest
updater.mojom.RegistrationRequest = class {
  constructor(values = {}) {
    this.app_id = values.app_id !== undefined ? values.app_id : "";
    this.brand_code = values.brand_code !== undefined ? values.brand_code : "";
    this.brand_path = values.brand_path !== undefined ? values.brand_path : "";
    this.version = values.version !== undefined ? values.version : "";
    this.existence_checker_path = values.existence_checker_path !== undefined ? values.existence_checker_path : null;
    this.ap_key = values.ap_key !== undefined ? values.ap_key : "";
    this.lang = values.lang !== undefined ? values.lang : "";
    this.dla = values.dla !== undefined ? values.dla : 0;
    this.dlrc = values.dlrc !== undefined ? values.dlrc : 0;
    this.cohort_hint = values.cohort_hint !== undefined ? values.cohort_hint : 0;
  }
};

// Struct: UpdateState
updater.mojom.UpdateState = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : null;
    this.kNotStarted = values.kNotStarted !== undefined ? values.kNotStarted : null;
    this.kDecompressing = values.kDecompressing !== undefined ? values.kDecompressing : null;
    this.kPatching = values.kPatching !== undefined ? values.kPatching : null;
  }
};

// Struct: AppState
updater.mojom.AppState = class {
  constructor(values = {}) {
    this.cohort = values.cohort !== undefined ? values.cohort : "";
  }
};

// Struct: PolicyValue
updater.mojom.PolicyValue = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : null;
    this.kSourceDefault = values.kSourceDefault !== undefined ? values.kSourceDefault : null;
  }
};

// Struct: UpdaterState
updater.mojom.UpdaterState = class {
  constructor(values = {}) {
    this.last_started = values.last_started !== undefined ? values.last_started : "";
  }
};

// Interface: UpdateService
updater.mojom.UpdateServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'updater.mojom.UpdateService';
  }

};

updater.mojom.UpdateServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: StateChangeObserver
updater.mojom.StateChangeObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'updater.mojom.StateChangeObserver';
  }

  0(state) {
    // Method: 0
    // Call: 0(state)
  }

  1(result) {
    // Method: 1
    // Call: 1(result)
  }

};

updater.mojom.StateChangeObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
