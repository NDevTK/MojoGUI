// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/boot_phase_monitor.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: BootPhaseMonitorHost
arc.mojom.BootPhaseMonitorHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.BootPhaseMonitorHost';
  }

  0() {
    // Method: 0
    // Call: 0()
  }

};

arc.mojom.BootPhaseMonitorHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BootPhaseMonitorInstance
arc.mojom.BootPhaseMonitorInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.BootPhaseMonitorInstance';
  }

  1(host_remote) {
    // Method: 1
    // Call: 1(host_remote)
  }

};

arc.mojom.BootPhaseMonitorInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
