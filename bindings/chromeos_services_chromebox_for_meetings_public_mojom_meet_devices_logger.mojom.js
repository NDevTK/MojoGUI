// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_logger.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};


// Enum: EnqueuePriority
chromeos.cfm.mojom.EnqueuePriority = {
  Failed: 0,
  High: 1,
  power: 2,
  etc: 3,
  Feedback: 4,
};

// Enum: LoggerErrorCode
chromeos.cfm.mojom.LoggerErrorCode = {
  kOk: 0,
  kCancelled: 1,
  kUnknown: 2,
  kInvalidArgument: 3,
  kDeadlineExceeded: 4,
  kNotFound: 5,
  kAlreadyExists: 6,
  kPermissionDenied: 7,
  kUnauthenticated: 8,
  kResourceExhausted: 9,
  kFailedPrecondition: 10,
  kAborted: 11,
  kOutOfRange: 12,
  kUnimplemented: 13,
  kInternal: 14,
  kUnavailable: 15,
  kDataloss: 16,
};

// Enum: LoggerState
chromeos.cfm.mojom.LoggerState = {
};

// Struct: LoggerStatus
chromeos.cfm.mojom.LoggerStatus = class {
  constructor(values = {}) {
    this.message@1 = values.message@1 !== undefined ? values.message@1 : "";
  }
};

// Interface: LoggerStateObserver
chromeos.cfm.mojom.LoggerStateObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.cfm.mojom.LoggerStateObserver';
  }

  0(state) {
    // Method: 0
    // Call: 0(state)
  }

};

chromeos.cfm.mojom.LoggerStateObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MeetDevicesLogger
chromeos.cfm.mojom.MeetDevicesLoggerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.cfm.mojom.MeetDevicesLogger';
  }

  0(record, priority) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(record, priority)
      resolve({});
    });
  }

  1(pending_observer) {
    // Method: 1
    // Call: 1(pending_observer)
  }

};

chromeos.cfm.mojom.MeetDevicesLoggerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
