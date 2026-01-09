// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/background_fetch/background_fetch.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: BackgroundFetchError
blink.mojom.BackgroundFetchError = {
  NONE: 0,
  DUPLICATED_DEVELOPER_ID: 1,
  INVALID_ARGUMENT: 2,
  INVALID_ID: 3,
  STORAGE_ERROR: 4,
  SERVICE_WORKER_UNAVAILABLE: 5,
  QUOTA_EXCEEDED: 6,
  PERMISSION_DENIED: 7,
  REGISTRATION_LIMIT_EXCEEDED: 8,
};

// Enum: BackgroundFetchResult
blink.mojom.BackgroundFetchResult = {
  UNSET: 0,
  FAILURE: 1,
  SUCCESS: 2,
};

// Enum: BackgroundFetchFailureReason
blink.mojom.BackgroundFetchFailureReason = {
  CANCELLED_BY_DEVELOPER: 0,
  SERVICE_WORKER_UNAVAILABLE: 1,
};

// Struct: BackgroundFetchSettledFetch
blink.mojom.BackgroundFetchSettledFetch = class {
  constructor(values = {}) {
    this.response = values.response !== undefined ? values.response : null;
  }
};

// Struct: BackgroundFetchOptions
blink.mojom.BackgroundFetchOptions = class {
  constructor(values = {}) {
    this.title = values.title !== undefined ? values.title : 0;
  }
};

// Struct: BackgroundFetchRegistrationData
blink.mojom.BackgroundFetchRegistrationData = class {
  constructor(values = {}) {
    this.BackgroundFetchFailureReason.NONE = values.BackgroundFetchFailureReason.NONE !== undefined ? values.BackgroundFetchFailureReason.NONE : 0;
  }
};

// Struct: BackgroundFetchRegistration
blink.mojom.BackgroundFetchRegistration = class {
  constructor(values = {}) {
    this.registration_interface = values.registration_interface !== undefined ? values.registration_interface : null;
  }
};

// Struct: BackgroundFetchUkmData
blink.mojom.BackgroundFetchUkmData = class {
  constructor(values = {}) {
    this.display = values.display !== undefined ? values.display : null;
    this.-1 = values.-1 !== undefined ? values.-1 : 0;
  }
};

// Interface: BackgroundFetchRegistrationObserver
blink.mojom.BackgroundFetchRegistrationObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.BackgroundFetchRegistrationObserver';
  }

  onProgress(upload_total, uploaded, download_total, downloaded, result, failure_reason) {
    // Method: OnProgress
    // Call: OnProgress(upload_total, uploaded, download_total, downloaded, result, failure_reason)
  }

  onRecordsUnavailable() {
    // Method: OnRecordsUnavailable
    // Call: OnRecordsUnavailable()
  }

  onRequestCompleted(request, response) {
    // Method: OnRequestCompleted
    // Call: OnRequestCompleted(request, response)
  }

};

blink.mojom.BackgroundFetchRegistrationObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BackgroundFetchService
blink.mojom.BackgroundFetchServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.BackgroundFetchService';
  }

  fetch(service_worker_registration_id, developer_id, requests, options, icon, ukm_data) {
    // Method: Fetch
    return new Promise((resolve) => {
      // Call: Fetch(service_worker_registration_id, developer_id, requests, options, icon, ukm_data)
      resolve({});
    });
  }

  getRegistration(service_worker_registration_id, developer_id) {
    // Method: GetRegistration
    return new Promise((resolve) => {
      // Call: GetRegistration(service_worker_registration_id, developer_id)
      resolve({});
    });
  }

  getDeveloperIds(service_worker_registration_id) {
    // Method: GetDeveloperIds
    return new Promise((resolve) => {
      // Call: GetDeveloperIds(service_worker_registration_id)
      resolve({});
    });
  }

  getIconDisplaySize() {
    // Method: GetIconDisplaySize
    return new Promise((resolve) => {
      // Call: GetIconDisplaySize()
      resolve({});
    });
  }

};

blink.mojom.BackgroundFetchServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BackgroundFetchRegistrationService
blink.mojom.BackgroundFetchRegistrationServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.BackgroundFetchRegistrationService';
  }

  updateUI(title, icon) {
    // Method: UpdateUI
    return new Promise((resolve) => {
      // Call: UpdateUI(title, icon)
      resolve({});
    });
  }

  abort() {
    // Method: Abort
    return new Promise((resolve) => {
      // Call: Abort()
      resolve({});
    });
  }

};

blink.mojom.BackgroundFetchRegistrationServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
