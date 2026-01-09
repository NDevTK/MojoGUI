// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/timer.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ArcTimerResult
arc.mojom.ArcTimerResult = {
  SUCCESS: 0,
  FAILURE: 1,
};

// Enum: ClockId
arc.mojom.ClockId = {
  REALTIME_ALARM: 0,
  BOOTTIME_ALARM: 1,
};

// Struct: CreateTimerRequest
arc.mojom.CreateTimerRequest = class {
  constructor(values = {}) {
    this.expiration_fd = values.expiration_fd !== undefined ? values.expiration_fd : null;
  }
};

// Interface: TimerHost
arc.mojom.TimerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.TimerHost';
  }

};

arc.mojom.TimerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TimerInstance
arc.mojom.TimerInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.TimerInstance';
  }

};

arc.mojom.TimerInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
