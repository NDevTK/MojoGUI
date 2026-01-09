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

};

arc.mojom.WakeLockInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
