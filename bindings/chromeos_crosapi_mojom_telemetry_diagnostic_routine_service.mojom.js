// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/telemetry_diagnostic_routine_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: ButtonType
crosapi.mojom.ButtonType = {
};

// Enum: TelemetryDiagnosticLedName
crosapi.mojom.TelemetryDiagnosticLedName = {
};

// Enum: TelemetryDiagnosticLedColor
crosapi.mojom.TelemetryDiagnosticLedColor = {
};

// Enum: Type
crosapi.mojom.Type = {
};

// Enum: State
crosapi.mojom.State = {
};

// Enum: State
crosapi.mojom.State = {
};

// Enum: Reason
crosapi.mojom.Reason = {
};

// Enum: TelemetryDiagnosticMemtesterTestItemEnum
crosapi.mojom.TelemetryDiagnosticMemtesterTestItemEnum = {
};

// Enum: TelemetryDiagnosticHardwarePresenceStatus
crosapi.mojom.TelemetryDiagnosticHardwarePresenceStatus = {
};

// Enum: TelemetryDiagnosticCameraSubtestResult
crosapi.mojom.TelemetryDiagnosticCameraSubtestResult = {
};

// Enum: Issue
crosapi.mojom.Issue = {
};

// Struct: TelemetryDiagnosticMemoryRoutineArgument
crosapi.mojom.TelemetryDiagnosticMemoryRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticVolumeButtonRoutineArgument
crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticFanRoutineArgument
crosapi.mojom.TelemetryDiagnosticFanRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticLedLitUpRoutineArgument
crosapi.mojom.TelemetryDiagnosticLedLitUpRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticNetworkBandwidthRoutineArgument
crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticCameraFrameAnalysisRoutineArgument
crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticKeyboardBacklightRoutineArgument
crosapi.mojom.TelemetryDiagnosticKeyboardBacklightRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticRoutineStateInitialized
crosapi.mojom.TelemetryDiagnosticRoutineStateInitialized = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticNetworkBandwidthRoutineRunningInfo
crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineRunningInfo = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticRoutineStateRunning
crosapi.mojom.TelemetryDiagnosticRoutineStateRunning = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticCheckLedLitUpStateReply
crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateReply = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticCheckKeyboardBacklightStateReply
crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateReply = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticCheckLedLitUpStateInquiry
crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateInquiry = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticCheckKeyboardBacklightStateInquiry
crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateInquiry = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticRoutineStateWaiting
crosapi.mojom.TelemetryDiagnosticRoutineStateWaiting = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticMemtesterResult
crosapi.mojom.TelemetryDiagnosticMemtesterResult = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticMemoryRoutineDetail
crosapi.mojom.TelemetryDiagnosticMemoryRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticVolumeButtonRoutineDetail
crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticFanRoutineDetail
crosapi.mojom.TelemetryDiagnosticFanRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticNetworkBandwidthRoutineDetail
crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticCameraFrameAnalysisRoutineDetail
crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticRoutineStateFinished
crosapi.mojom.TelemetryDiagnosticRoutineStateFinished = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryDiagnosticRoutineState
crosapi.mojom.TelemetryDiagnosticRoutineState = class {
  constructor(values = {}) {
  }
};

// Interface: TelemetryDiagnosticRoutineControl
crosapi.mojom.TelemetryDiagnosticRoutineControlPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.TelemetryDiagnosticRoutineControl';
  }

};

crosapi.mojom.TelemetryDiagnosticRoutineControlRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TelemetryDiagnosticRoutineObserver
crosapi.mojom.TelemetryDiagnosticRoutineObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.TelemetryDiagnosticRoutineObserver';
  }

};

crosapi.mojom.TelemetryDiagnosticRoutineObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TelemetryDiagnosticRoutinesService
crosapi.mojom.TelemetryDiagnosticRoutinesServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.TelemetryDiagnosticRoutinesService';
  }

};

crosapi.mojom.TelemetryDiagnosticRoutinesServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
