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

};

chromeos.network_health.mojom.NetworkHealthServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
