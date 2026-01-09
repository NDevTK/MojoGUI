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
  F: 0,
  H: 1,
  F: 2,
};

// Enum: LoggerErrorCode
chromeos.cfm.mojom.LoggerErrorCode = {
};

// Enum: LoggerState
chromeos.cfm.mojom.LoggerState = {
};

// Struct: LoggerStatus
chromeos.cfm.mojom.LoggerStatus = class {
  constructor(values = {}) {
  }
};

// Interface: LoggerStateObserver
chromeos.cfm.mojom.LoggerStateObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.cfm.mojom.LoggerStateObserver';
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

};

chromeos.cfm.mojom.MeetDevicesLoggerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
