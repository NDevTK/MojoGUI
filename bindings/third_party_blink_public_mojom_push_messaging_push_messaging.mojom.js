// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/push_messaging/push_messaging.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: PushErrorType
blink.mojom.PushErrorType = {
  ABORT: 0,
  NETWORK: 1,
  NONE: 2,
  NOT_ALLOWED: 3,
  NOT_FOUND: 4,
  NOT_SUPPORTED: 5,
  INVALID_STATE: 6,
};

// Struct: PushSubscriptionOptions
blink.mojom.PushSubscriptionOptions = class {
  constructor(values = {}) {
    this.application_server_key = values.application_server_key !== undefined ? values.application_server_key : 0;
  }
};

// Struct: PushSubscription
blink.mojom.PushSubscription = class {
  constructor(values = {}) {
    this.auth = values.auth !== undefined ? values.auth : 0;
  }
};

// Interface: PushMessaging
blink.mojom.PushMessagingPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PushMessaging';
  }

  subscribe(service_worker_registration_id, options, user_gesture) {
    // Method: Subscribe
    return new Promise((resolve) => {
      // Call: Subscribe(service_worker_registration_id, options, user_gesture)
      resolve({});
    });
  }

  unsubscribe(service_worker_registration_id) {
    // Method: Unsubscribe
    return new Promise((resolve) => {
      // Call: Unsubscribe(service_worker_registration_id)
      resolve({});
    });
  }

  getSubscription(service_worker_registration_id) {
    // Method: GetSubscription
    return new Promise((resolve) => {
      // Call: GetSubscription(service_worker_registration_id)
      resolve({});
    });
  }

};

blink.mojom.PushMessagingRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
