// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/first_party_sets_access_delegate.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: FirstPartySetsAccessDelegateParams
network.mojom.FirstPartySetsAccessDelegateParams = class {
  constructor(values = {}) {
    this.enabled = values.enabled !== undefined ? values.enabled : false;
  }
};

// Struct: FirstPartySetsReadyEvent
network.mojom.FirstPartySetsReadyEvent = class {
  constructor(values = {}) {
    this.cache_filter = values.cache_filter !== undefined ? values.cache_filter : null;
  }
};

// Interface: FirstPartySetsAccessDelegate
network.mojom.FirstPartySetsAccessDelegatePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.FirstPartySetsAccessDelegate';
  }

  notifyReady(ready_event) {
    // Method: NotifyReady
    // Call: NotifyReady(ready_event)
  }

  setEnabled(enabled) {
    // Method: SetEnabled
    // Call: SetEnabled(enabled)
  }

};

network.mojom.FirstPartySetsAccessDelegateRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
