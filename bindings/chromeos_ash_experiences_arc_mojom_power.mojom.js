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

};

arc.mojom.PowerInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
