// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_registration.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ChangedServiceWorkerObjectsMask
blink.mojom.ChangedServiceWorkerObjectsMask = class {
  constructor(values = {}) {
    this.active = values.active !== undefined ? values.active : false;
  }
};

// Struct: ServiceWorkerRegistrationObjectInfo
blink.mojom.ServiceWorkerRegistrationObjectInfo = class {
  constructor(values = {}) {
    this.update_via_cache = values.update_via_cache !== undefined ? values.update_via_cache : 0;
    this.receiver = values.receiver !== undefined ? values.receiver : null;
  }
};

// Interface: ServiceWorkerRegistrationObjectHost
blink.mojom.ServiceWorkerRegistrationObjectHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ServiceWorkerRegistrationObjectHost';
  }

  update(outside_fetch_client_settings_object) {
    // Method: Update
    return new Promise((resolve) => {
      // Call: Update(outside_fetch_client_settings_object)
      resolve({});
    });
  }

  unregister() {
    // Method: Unregister
    return new Promise((resolve) => {
      // Call: Unregister()
      resolve({});
    });
  }

  enableNavigationPreload(enable) {
    // Method: EnableNavigationPreload
    return new Promise((resolve) => {
      // Call: EnableNavigationPreload(enable)
      resolve({});
    });
  }

  getNavigationPreloadState() {
    // Method: GetNavigationPreloadState
    return new Promise((resolve) => {
      // Call: GetNavigationPreloadState()
      resolve({});
    });
  }

  setNavigationPreloadHeader(value) {
    // Method: SetNavigationPreloadHeader
    return new Promise((resolve) => {
      // Call: SetNavigationPreloadHeader(value)
      resolve({});
    });
  }

};

blink.mojom.ServiceWorkerRegistrationObjectHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ServiceWorkerRegistrationObject
blink.mojom.ServiceWorkerRegistrationObjectPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ServiceWorkerRegistrationObject';
  }

  setServiceWorkerObjects(changed_mask, installing, waiting, active) {
    // Method: SetServiceWorkerObjects
    // Call: SetServiceWorkerObjects(changed_mask, installing, waiting, active)
  }

  setUpdateViaCache(update_via_cache) {
    // Method: SetUpdateViaCache
    // Call: SetUpdateViaCache(update_via_cache)
  }

  updateFound() {
    // Method: UpdateFound
    // Call: UpdateFound()
  }

};

blink.mojom.ServiceWorkerRegistrationObjectRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
