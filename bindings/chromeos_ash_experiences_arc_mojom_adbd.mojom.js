// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/adbd.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: AdbdMonitorHost
arc.mojom.AdbdMonitorHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.AdbdMonitorHost';
  }

  0() {
    // Method: 0
    // Call: 0()
  }

  1() {
    // Method: 1
    // Call: 1()
  }

};

arc.mojom.AdbdMonitorHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AdbdMonitorInstance
arc.mojom.AdbdMonitorInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.AdbdMonitorInstance';
  }

  0(host_remote) {
    // Method: 0
    // Call: 0(host_remote)
  }

};

arc.mojom.AdbdMonitorInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
