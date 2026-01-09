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

  update() {
    // Method: update
    // Call: update()
  }

  update(outside_fetch_client_settings_object) {
    // Method: Update
    return new Promise((resolve) => {
      // Call: Update(outside_fetch_client_settings_object)
      resolve({});
    });
  }

  unregister() {
    // Method: unregister
    // Call: unregister()
  }

  unregister() {
    // Method: Unregister
    return new Promise((resolve) => {
      // Call: Unregister()
      resolve({});
    });
  }

  enable() {
    // Method: enable
    // Call: enable()
  }

  disable() {
    // Method: disable
    // Call: disable()
  }

  enableNavigationPreload(enable) {
    // Method: EnableNavigationPreload
    return new Promise((resolve) => {
      // Call: EnableNavigationPreload(enable)
      resolve({});
    });
  }

  getState() {
    // Method: getState
    // Call: getState()
  }

  getNavigationPreloadState() {
    // Method: GetNavigationPreloadState
    return new Promise((resolve) => {
      // Call: GetNavigationPreloadState()
      resolve({});
    });
  }

  setHeaderValue() {
    // Method: setHeaderValue
    // Call: setHeaderValue()
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

};

blink.mojom.ServiceWorkerRegistrationObjectRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
