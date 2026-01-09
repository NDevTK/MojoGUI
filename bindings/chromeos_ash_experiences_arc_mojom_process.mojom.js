// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/process.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ProcessState
arc.mojom.ProcessState = {
  R_UNKNOWN: 0,
  R_PERSISTENT: 1,
  R_PERSISTENT_UI: 2,
  R_TOP: 3,
  R_FOREGROUND_SERVICE: 4,
  R_BOUND_FOREGROUND_SERVICE: 5,
  and: 6,
  R_IMPORTANT_FOREGROUND: 7,
  but: 8,
  R_IMPORTANT_BACKGROUND: 9,
  R_TRANSIENT_BACKGROUND: 10,
  R_BACKUP: 11,
  this: 12,
  R_SERVICE: 13,
  receivers: 14,
  but: 15,
  R_RECEIVER: 16,
  R_TOP_SLEEPING: 17,
  but: 18,
  R_HEAVY_WEIGHT: 19,
  R_HOME: 20,
  R_LAST_ACTIVITY: 21,
  R_CACHED_ACTIVITY: 22,
  R_CACHED_ACTIVITY_CLIENT: 23,
  R_CACHED_RECENT: 24,
  R_CACHED_EMPTY: 25,
  R_NONEXISTENT: 26,
};

// Enum: PressureLevel
arc.mojom.PressureLevel = {
  kForeground: 0,
  kPerceptible: 1,
  kCached: 2,
};

// Struct: RunningAppProcessInfo
arc.mojom.RunningAppProcessInfo = class {
  constructor(values = {}) {
    this.last_activity_time = values.last_activity_time !== undefined ? values.last_activity_time : 0;
  }
};

// Struct: ArcMemoryDump
arc.mojom.ArcMemoryDump = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : 0;
  }
};

// Struct: LowMemoryKillCounts
arc.mojom.LowMemoryKillCounts = class {
  constructor(values = {}) {
    this.pressure_cached = values.pressure_cached !== undefined ? values.pressure_cached : 0;
  }
};

// Interface: ProcessInstance
arc.mojom.ProcessInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ProcessInstance';
  }

  1(pid, reason) {
    // Method: 1
    // Call: 1(pid, reason)
  }

  5() {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5()
      resolve({});
    });
  }

  8() {
    // Method: 8
    return new Promise((resolve) => {
      // Call: 8()
      resolve({});
    });
  }

  9(nspids) {
    // Method: 9
    return new Promise((resolve) => {
      // Call: 9(nspids)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  10(level, reclaim_target) {
    // Method: 10
    return new Promise((resolve) => {
      // Call: 10(level, reclaim_target)
      resolve({});
    });
  }

  11(level, reclaim_target) {
    // Method: 11
    return new Promise((resolve) => {
      // Call: 11(level, reclaim_target)
      resolve({});
    });
  }

  12() {
    // Method: 12
    return new Promise((resolve) => {
      // Call: 12()
      resolve({});
    });
  }

};

arc.mojom.ProcessInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
