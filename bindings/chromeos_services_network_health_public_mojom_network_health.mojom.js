// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/network_health/public/mojom/network_health.mojom
// Module: chromeos.network_health.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.network_health = chromeos.network_health || {};
chromeos.network_health.mojom = chromeos.network_health.mojom || {};


// Interface: NetworkEventsObserver
chromeos.network_health.mojom.NetworkEventsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.network_health.mojom.NetworkEventsObserver';
  }

  0(guid, state) {
    // Method: 0
    // Call: 0(guid, state)
  }

  1(guid, signal_strength) {
    // Method: 1
    // Call: 1(guid, signal_strength)
  }

  2(networks) {
    // Method: 2
    // Call: 2(networks)
  }

};

chromeos.network_health.mojom.NetworkEventsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NetworkHealthService
chromeos.network_health.mojom.NetworkHealthServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.network_health.mojom.NetworkHealthService';
  }

  0(observer) {
    // Method: 0
    // Call: 0(observer)
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
  }

  2() {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2()
      resolve({});
    });
  }

  3() {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3()
      resolve({});
    });
  }

};

chromeos.network_health.mojom.NetworkHealthServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
