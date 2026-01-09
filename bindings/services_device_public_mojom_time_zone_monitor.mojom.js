// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/time_zone_monitor.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: TimeZoneMonitor
device.mojom.TimeZoneMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.TimeZoneMonitor';
  }

  addClient(client) {
    // Method: AddClient
    // Call: AddClient(client)
  }

};

device.mojom.TimeZoneMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TimeZoneMonitorClient
device.mojom.TimeZoneMonitorClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.TimeZoneMonitorClient';
  }

  onTimeZoneChange(tz_info) {
    // Method: OnTimeZoneChange
    // Call: OnTimeZoneChange(tz_info)
  }

};

device.mojom.TimeZoneMonitorClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
