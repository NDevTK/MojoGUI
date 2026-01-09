// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/telemetry_diagnostic_routine_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: ButtonType
crosapi.mojom.ButtonType = {
  should: 0,
  kVolumeUp: 1,
};

// Enum: TelemetryDiagnosticLedName
crosapi.mojom.TelemetryDiagnosticLedName = {
  should: 0,
  kBattery: 1,
  kPower: 2,
  kAdapter: 3,
  kLeft: 4,
  kRight: 5,
};

// Enum: TelemetryDiagnosticLedColor
crosapi.mojom.TelemetryDiagnosticLedColor = {
  should: 0,
  kRed: 1,
  kGreen: 2,
  kBlue: 3,
  kYellow: 4,
  kWhite: 5,
  kAmber: 6,
};

// Enum: Type
crosapi.mojom.Type = {
};

// Enum: State
crosapi.mojom.State = {
  should: 0,
};

// Enum: State
crosapi.mojom.State = {
  should: 0,
};

// Enum: Reason
crosapi.mojom.Reason = {
};

// Enum: TelemetryDiagnosticMemtesterTestItemEnum
crosapi.mojom.TelemetryDiagnosticMemtesterTestItemEnum = {
  repeating: 0,
  repeating: 1,
  repeated: 2,
};

// Enum: TelemetryDiagnosticHardwarePresenceStatus
crosapi.mojom.TelemetryDiagnosticHardwarePresenceStatus = {
  should: 0,
  skipping: 1,
};

// Enum: TelemetryDiagnosticCameraSubtestResult
crosapi.mojom.TelemetryDiagnosticCameraSubtestResult = {
  should: 0,
  possibly: 1,
};

// Enum: Issue
crosapi.mojom.Issue = {
  should: 0,
};

// Struct: TelemetryDiagnosticMemoryRoutineArgument
crosapi.mojom.TelemetryDiagnosticMemoryRoutineArgument = class {
  constructor(values = {}) {
    this.max_testing_mem_kib@0 = values.max_testing_mem_kib@0 !== undefined ? values.max_testing_mem_kib@0 : 0;
  }
};

// Struct: TelemetryDiagnosticVolumeButtonRoutineArgument
crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineArgument = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
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
    this.color@1 = values.color@1 !== undefined ? values.color@1 : null;
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
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: TelemetryDiagnosticRoutineStateRunning
crosapi.mojom.TelemetryDiagnosticRoutineStateRunning = class {
  constructor(values = {}) {
    this.info@0 = values.info@0 !== undefined ? values.info@0 : null;
  }
};

// Struct: TelemetryDiagnosticCheckLedLitUpStateReply
crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateReply = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: TelemetryDiagnosticCheckKeyboardBacklightStateReply
crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateReply = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
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
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : 0;
  }
};

// Struct: TelemetryDiagnosticMemtesterResult
crosapi.mojom.TelemetryDiagnosticMemtesterResult = class {
  constructor(values = {}) {
    this.failed_items@1 = values.failed_items@1 !== undefined ? values.failed_items@1 : [];
  }
};

// Struct: TelemetryDiagnosticMemoryRoutineDetail
crosapi.mojom.TelemetryDiagnosticMemoryRoutineDetail = class {
  constructor(values = {}) {
    this.result@1 = values.result@1 !== undefined ? values.result@1 : 0;
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
    this.fan_count_status@2 = values.fan_count_status@2 !== undefined ? values.fan_count_status@2 : 0;
  }
};

// Struct: TelemetryDiagnosticNetworkBandwidthRoutineDetail
crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineDetail = class {
  constructor(values = {}) {
    this.upload_speed_kbps@1 = values.upload_speed_kbps@1 !== undefined ? values.upload_speed_kbps@1 : 0;
  }
};

// Struct: TelemetryDiagnosticCameraFrameAnalysisRoutineDetail
crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineDetail = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
    this.3 = values.3 !== undefined ? values.3 : null;
    this.4 = values.4 !== undefined ? values.4 : null;
  }
};

// Struct: TelemetryDiagnosticRoutineStateFinished
crosapi.mojom.TelemetryDiagnosticRoutineStateFinished = class {
  constructor(values = {}) {
    this.detail@1 = values.detail@1 !== undefined ? values.detail@1 : false;
  }
};

// Struct: TelemetryDiagnosticRoutineState
crosapi.mojom.TelemetryDiagnosticRoutineState = class {
  constructor(values = {}) {
    this.state_union@1 = values.state_union@1 !== undefined ? values.state_union@1 : 0;
  }
};

// Interface: TelemetryDiagnosticRoutineControl
crosapi.mojom.TelemetryDiagnosticRoutineControlPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.TelemetryDiagnosticRoutineControl';
  }

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  exception(this) {
    // Method: exception
    // Call: exception(this)
  }

  state() {
    // Method: state
    // Call: state()
  }

  2(reply) {
    // Method: 2
    // Call: 2(reply)
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

  initialized(`CreateRoutine`) {
    // Method: initialized
    // Call: initialized(`CreateRoutine`)
  }

  0(state) {
    // Method: 0
    // Call: 0(state)
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

  occur(executing) {
    // Method: occur
    // Call: occur(executing)
  }

  reason() {
    // Method: reason
    // Call: reason()
  }

  initialized(or) {
    // Method: initialized
    // Call: initialized(or)
  }

  0(routine_argument, routine_receiver, routine_observer) {
    // Method: 0
    // Call: 0(routine_argument, routine_receiver, routine_observer)
  }

  1(routine_argument) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(routine_argument)
      resolve({});
    });
  }

};

crosapi.mojom.TelemetryDiagnosticRoutinesServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
