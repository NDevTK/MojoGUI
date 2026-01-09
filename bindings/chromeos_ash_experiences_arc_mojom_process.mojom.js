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
  R_IMPORTANT_FOREGROUND: 6,
  R_IMPORTANT_BACKGROUND: 7,
  R_TRANSIENT_BACKGROUND: 8,
  R_BACKUP: 9,
  R_SERVICE: 10,
  R_RECEIVER: 11,
  R_TOP_SLEEPING: 12,
  R_HEAVY_WEIGHT: 13,
  R_HOME: 14,
  R_LAST_ACTIVITY: 15,
  R_CACHED_ACTIVITY: 16,
  R_CACHED_ACTIVITY_CLIENT: 17,
  R_CACHED_RECENT: 18,
  R_CACHED_EMPTY: 19,
  R_NONEXISTENT: 20,
};

// Enum: PressureLevel
arc.mojom.PressureLevel = {
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

};

arc.mojom.ProcessInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
