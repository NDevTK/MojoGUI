// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/background_sync/background_sync.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: BackgroundSyncError
blink.mojom.BackgroundSyncError = {
  NONE: 0,
  STORAGE: 1,
  NOT_FOUND: 2,
  NO_SERVICE_WORKER: 3,
  NOT_ALLOWED: 4,
  PERMISSION_DENIED: 5,
  MAX: 6,
};

// Enum: BackgroundSyncState
blink.mojom.BackgroundSyncState = {
  PENDING: 0,
  FIRING: 1,
  REREGISTERED_WHILE_FIRING: 2,
};

// Enum: BackgroundSyncEventLastChance
blink.mojom.BackgroundSyncEventLastChance = {
  IS_NOT_LAST_CHANCE: 0,
  IS_LAST_CHANCE: 1,
};

// Enum: BackgroundSyncType
blink.mojom.BackgroundSyncType = {
  ONE_SHOT: 0,
  PERIODIC: 1,
};

// Struct: SyncRegistrationOptions
blink.mojom.SyncRegistrationOptions = class {
  constructor(values = {}) {
  }
};

// Struct: BackgroundSyncRegistrationInfo
blink.mojom.BackgroundSyncRegistrationInfo = class {
  constructor(values = {}) {
    this.sync_type = values.sync_type !== undefined ? values.sync_type : 0;
  }
};

// Interface: OneShotBackgroundSyncService
blink.mojom.OneShotBackgroundSyncServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.OneShotBackgroundSyncService';
  }

  register(options, service_worker_registration_id) {
    // Method: Register
    return new Promise((resolve) => {
      // Call: Register(options, service_worker_registration_id)
      resolve({});
    });
  }

  didResolveRegistration(registration_info) {
    // Method: DidResolveRegistration
    // Call: DidResolveRegistration(registration_info)
  }

  getRegistrations(service_worker_registration_id) {
    // Method: GetRegistrations
    return new Promise((resolve) => {
      // Call: GetRegistrations(service_worker_registration_id)
      resolve({});
    });
  }

};

blink.mojom.OneShotBackgroundSyncServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PeriodicBackgroundSyncService
blink.mojom.PeriodicBackgroundSyncServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PeriodicBackgroundSyncService';
  }

  register(options, service_worker_registration_id) {
    // Method: Register
    return new Promise((resolve) => {
      // Call: Register(options, service_worker_registration_id)
      resolve({});
    });
  }

  unregister(service_worker_registration_id, tag) {
    // Method: Unregister
    return new Promise((resolve) => {
      // Call: Unregister(service_worker_registration_id, tag)
      resolve({});
    });
  }

  getRegistrations(service_worker_registration_id) {
    // Method: GetRegistrations
    return new Promise((resolve) => {
      // Call: GetRegistrations(service_worker_registration_id)
      resolve({});
    });
  }

};

blink.mojom.PeriodicBackgroundSyncServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
