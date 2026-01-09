// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/mdns.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Struct: NsdServiceInfo
sharing.mojom.NsdServiceInfo = class {
  constructor(values = {}) {
    this.port = values.port !== undefined ? values.port : 0;
  }
};

// Interface: MdnsObserver
sharing.mojom.MdnsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'sharing.mojom.MdnsObserver';
  }

  serviceFound(service_info) {
    // Method: ServiceFound
    // Call: ServiceFound(service_info)
  }

  serviceLost(service_info) {
    // Method: ServiceLost
    // Call: ServiceLost(service_info)
  }

};

sharing.mojom.MdnsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MdnsManager
sharing.mojom.MdnsManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'sharing.mojom.MdnsManager';
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

  startDiscoverySession(service_type) {
    // Method: StartDiscoverySession
    return new Promise((resolve) => {
      // Call: StartDiscoverySession(service_type)
      resolve({});
    });
  }

  stopDiscoverySession(service_type) {
    // Method: StopDiscoverySession
    return new Promise((resolve) => {
      // Call: StopDiscoverySession(service_type)
      resolve({});
    });
  }

};

sharing.mojom.MdnsManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
