// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/diagnostics_ui/mojom/system_routine_controller.mojom
// Module: ash.diagnostics.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.mojom = ash.diagnostics.mojom || {};


// Enum: RoutineType
ash.diagnostics.mojom.RoutineType = {
  kBatteryCharge: 0,
  kBatteryDischarge: 1,
  kCpuCache: 2,
  kCpuStress: 3,
  kCpuFloatingPoint: 4,
  kCpuPrime: 5,
  kMemory: 6,
  kLanConnectivity: 7,
  kSignalStrength: 8,
  kGatewayCanBePinged: 9,
  kHasSecureWiFiConnection: 10,
  kDnsResolverPresent: 11,
  kDnsLatency: 12,
  kDnsResolution: 13,
  kCaptivePortal: 14,
  kHttpFirewall: 15,
  kHttpsFirewall: 16,
  kHttpsLatency: 17,
  kArcHttp: 18,
  kArcPing: 19,
  kArcDnsResolution: 20,
};

// Enum: StandardRoutineResult
ash.diagnostics.mojom.StandardRoutineResult = {
  kTestPassed: 0,
  kTestFailed: 1,
  kExecutionError: 2,
  kUnableToRun: 3,
};

// Struct: PowerRoutineResult
ash.diagnostics.mojom.PowerRoutineResult = class {
  constructor(values = {}) {
    this.time_elapsed_seconds = values.time_elapsed_seconds !== undefined ? values.time_elapsed_seconds : 0;
  }
};

// Struct: RoutineResultInfo
ash.diagnostics.mojom.RoutineResultInfo = class {
  constructor(values = {}) {
    this.result = values.result !== undefined ? values.result : null;
  }
};

// Interface: RoutineRunner
ash.diagnostics.mojom.RoutineRunnerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.diagnostics.mojom.RoutineRunner';
  }

  onRoutineResult(info) {
    // Method: OnRoutineResult
    // Call: OnRoutineResult(info)
  }

};

ash.diagnostics.mojom.RoutineRunnerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SystemRoutineController
ash.diagnostics.mojom.SystemRoutineControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.diagnostics.mojom.SystemRoutineController';
  }

  getSupportedRoutines() {
    // Method: GetSupportedRoutines
    return new Promise((resolve) => {
      // Call: GetSupportedRoutines()
      resolve({});
    });
  }

  runRoutine(type, runner) {
    // Method: RunRoutine
    // Call: RunRoutine(type, runner)
  }

};

ash.diagnostics.mojom.SystemRoutineControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
