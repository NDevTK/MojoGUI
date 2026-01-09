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
};

// Enum: StandardRoutineResult
ash.diagnostics.mojom.StandardRoutineResult = {
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
