// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/cookie_store/cookie_store.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: CookieChangeSubscription
blink.mojom.CookieChangeSubscription = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : "";
  }
};

// Interface: CookieStore
blink.mojom.CookieStorePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.CookieStore';
  }

  addSubscriptions(service_worker_registration_id, subscription) {
    // Method: AddSubscriptions
    return new Promise((resolve) => {
      // Call: AddSubscriptions(service_worker_registration_id, subscription)
      resolve({});
    });
  }

  removeSubscriptions(service_worker_registration_id, subscription) {
    // Method: RemoveSubscriptions
    return new Promise((resolve) => {
      // Call: RemoveSubscriptions(service_worker_registration_id, subscription)
      resolve({});
    });
  }

  getSubscriptions(service_worker_registration_id) {
    // Method: GetSubscriptions
    return new Promise((resolve) => {
      // Call: GetSubscriptions(service_worker_registration_id)
      resolve({});
    });
  }

};

blink.mojom.CookieStoreRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
