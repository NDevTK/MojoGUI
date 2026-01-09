// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/system_state.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: SystemAppRunningState
arc.mojom.SystemAppRunningState = class {
  constructor(values = {}) {
    this.background_service = values.background_service !== undefined ? values.background_service : false;
  }
};

// Interface: SystemStateHost
arc.mojom.SystemStateHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.SystemStateHost';
  }

  0(state) {
    // Method: 0
    // Call: 0(state)
  }

};

arc.mojom.SystemStateHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SystemStateInstance
arc.mojom.SystemStateInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.SystemStateInstance';
  }

  0(host_remote) {
    // Method: 0
    // Call: 0(host_remote)
  }

};

arc.mojom.SystemStateInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
