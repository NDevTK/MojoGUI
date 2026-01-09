// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/power.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: CpuRestrictionState
arc.mojom.CpuRestrictionState = {
};

// Enum: DisplayWakeLockType
arc.mojom.DisplayWakeLockType = {
  turn: 0,
  or: 1,
  but: 2,
};

// Enum: WakefulnessMode
arc.mojom.WakefulnessMode = {
  the: 0,
};

// Enum: IdleState
arc.mojom.IdleState = {
};

// Struct: BatterySaverModeState
arc.mojom.BatterySaverModeState = class {
  constructor(values = {}) {
    this.active = values.active !== undefined ? values.active : false;
  }
};

// Interface: PowerHost
arc.mojom.PowerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.PowerHost';
  }

  0(type) {
    // Method: 0
    // Call: 0(type)
  }

  1(type) {
    // Method: 1
    // Call: 1(type)
  }

  5(mode) {
    // Method: 5
    // Call: 5(mode)
  }

  2() {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2()
      resolve({});
    });
  }

  3(percent) {
    // Method: 3
    // Call: 3(percent)
  }

  6(type) {
    // Method: 6
    // Call: 6(type)
  }

  7(type) {
    // Method: 7
    // Call: 7(type)
  }

  8() {
    // Method: 8
    return new Promise((resolve) => {
      // Call: 8()
      resolve({});
    });
  }

};

arc.mojom.PowerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PowerInstance
arc.mojom.PowerInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.PowerInstance';
  }

  5(host_remote) {
    // Method: 5
    // Call: 5(host_remote)
  }

  1(enabled) {
    // Method: 1
    // Call: 1(enabled)
  }

  2() {
    // Method: 2
    // Call: 2()
  }

  3() {
    // Method: 3
    // Call: 3()
  }

  4(percent) {
    // Method: 4
    // Call: 4(percent)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  6() {
    // Method: 6
    // Call: 6()
  }

  7() {
    // Method: 7
    return new Promise((resolve) => {
      // Call: 7()
      resolve({});
    });
  }

  8(state) {
    // Method: 8
    // Call: 8(state)
  }

  9(state) {
    // Method: 9
    // Call: 9(state)
  }

  10(state) {
    // Method: 10
    // Call: 10(state)
  }

};

arc.mojom.PowerInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
