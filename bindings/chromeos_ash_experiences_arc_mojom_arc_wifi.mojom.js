// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/arc_wifi.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: WifiScanResult
arc.mojom.WifiScanResult = class {
  constructor(values = {}) {
    this.bssid@1 = values.bssid@1 !== undefined ? values.bssid@1 : "";
    this.rssi@4 = values.rssi@4 !== undefined ? values.rssi@4 : 0;
  }
};

// Interface: ArcWifiHost
arc.mojom.ArcWifiHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ArcWifiHost';
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
  }

  2(enabled) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(enabled)
      resolve({});
    });
  }

  getScanResults() {
    // Method: GetScanResults
    // Call: GetScanResults()
  }

  3() {
    // Method: 3
    // Call: 3()
  }

  4() {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4()
      resolve({});
    });
  }

};

arc.mojom.ArcWifiHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ArcWifiInstance
arc.mojom.ArcWifiInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ArcWifiInstance';
  }

  1(host_remote) {
    // Method: 1
    // Call: 1(host_remote)
  }

  2(enabled) {
    // Method: 2
    // Call: 2(enabled)
  }

  startScan() {
    // Method: StartScan
    // Call: StartScan()
  }

  startScan() {
    // Method: StartScan
    // Call: StartScan()
  }

  3() {
    // Method: 3
    // Call: 3()
  }

};

arc.mojom.ArcWifiInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
