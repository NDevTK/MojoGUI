// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/power_monitor.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: PowerMonitor
device.mojom.PowerMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.PowerMonitor';
  }

  addClient(client) {
    // Method: AddClient
    // Call: AddClient(client)
  }

};

device.mojom.PowerMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PowerMonitorClient
device.mojom.PowerMonitorClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.PowerMonitorClient';
  }

  powerStateChange(battery_power_status) {
    // Method: PowerStateChange
    // Call: PowerStateChange(battery_power_status)
  }

  suspend() {
    // Method: Suspend
    // Call: Suspend()
  }

  resume() {
    // Method: Resume
    // Call: Resume()
  }

};

device.mojom.PowerMonitorClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
