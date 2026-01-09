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

  0(timer_requests) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(timer_requests)
      resolve({});
    });
  }

  1(clock_id, absolute_expiration_time) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(clock_id, absolute_expiration_time)
      resolve({});
    });
  }

  2(time) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(time)
      resolve({});
    });
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

  0(host_remote) {
    // Method: 0
    // Call: 0(host_remote)
  }

};

arc.mojom.TimerInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
