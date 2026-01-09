// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/connectivity/public/mojom/passpoint.mojom
// Module: chromeos.connectivity.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.connectivity = chromeos.connectivity || {};
chromeos.connectivity.mojom = chromeos.connectivity.mojom || {};


// Struct: PasspointSubscription
chromeos.connectivity.mojom.PasspointSubscription = class {
  constructor(values = {}) {
    this.friendly_name = values.friendly_name !== undefined ? values.friendly_name : "";
    this.provisioning_source = values.provisioning_source !== undefined ? values.provisioning_source : "";
    this.trusted_ca = values.trusted_ca !== undefined ? values.trusted_ca : "";
    this.since = values.since !== undefined ? values.since : null;
    this.expiration_epoch_ms = values.expiration_epoch_ms !== undefined ? values.expiration_epoch_ms : 0;
  }
};

// Interface: PasspointEventsListener
chromeos.connectivity.mojom.PasspointEventsListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.connectivity.mojom.PasspointEventsListener';
  }

  onPasspointSubscriptionAdded(subscription) {
    // Method: OnPasspointSubscriptionAdded
    // Call: OnPasspointSubscriptionAdded(subscription)
  }

  onPasspointSubscriptionRemoved(subscription) {
    // Method: OnPasspointSubscriptionRemoved
    // Call: OnPasspointSubscriptionRemoved(subscription)
  }

};

chromeos.connectivity.mojom.PasspointEventsListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PasspointService
chromeos.connectivity.mojom.PasspointServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.connectivity.mojom.PasspointService';
  }

  getPasspointSubscription(id) {
    // Method: GetPasspointSubscription
    return new Promise((resolve) => {
      // Call: GetPasspointSubscription(id)
      resolve({});
    });
  }

  listPasspointSubscriptions() {
    // Method: ListPasspointSubscriptions
    return new Promise((resolve) => {
      // Call: ListPasspointSubscriptions()
      resolve({});
    });
  }

  deletePasspointSubscription(id) {
    // Method: DeletePasspointSubscription
    return new Promise((resolve) => {
      // Call: DeletePasspointSubscription(id)
      resolve({});
    });
  }

  registerPasspointListener(listener) {
    // Method: RegisterPasspointListener
    // Call: RegisterPasspointListener(listener)
  }

};

chromeos.connectivity.mojom.PasspointServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
