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
  }
};

// Interface: ArcWifiHost
arc.mojom.ArcWifiHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ArcWifiHost';
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

};

arc.mojom.ArcWifiInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
