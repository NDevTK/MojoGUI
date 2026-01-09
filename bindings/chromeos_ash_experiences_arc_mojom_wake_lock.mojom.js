// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/wake_lock.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: WakeLockHost
arc.mojom.WakeLockHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.WakeLockHost';
  }

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
  }

};

arc.mojom.WakeLockHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WakeLockInstance
arc.mojom.WakeLockInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.WakeLockInstance';
  }

  0(host_remote) {
    // Method: 0
    // Call: 0(host_remote)
  }

};

arc.mojom.WakeLockInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
