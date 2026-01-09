// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/battery_monitor.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: BatteryMonitor
device.mojom.BatteryMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.BatteryMonitor';
  }

  queryNextStatus() {
    // Method: QueryNextStatus
    return new Promise((resolve) => {
      // Call: QueryNextStatus()
      resolve({});
    });
  }

};

device.mojom.BatteryMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
