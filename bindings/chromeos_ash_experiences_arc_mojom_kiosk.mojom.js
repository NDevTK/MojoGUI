// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/kiosk.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: KioskHost
arc.mojom.KioskHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.KioskHost';
  }

  0(session_id) {
    // Method: 0
    // Call: 0(session_id)
  }

  1(session_id, succeeded) {
    // Method: 1
    // Call: 1(session_id, succeeded)
  }

};

arc.mojom.KioskHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: KioskInstance
arc.mojom.KioskInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.KioskInstance';
  }

  0(host_remote) {
    // Method: 0
    // Call: 0(host_remote)
  }

};

arc.mojom.KioskInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
