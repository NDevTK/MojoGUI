// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/diagnostics_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: DiagnosticsRoutineEnum
crosapi.mojom.DiagnosticsRoutineEnum = {
  DEPRECATED_: 0,
};

// Enum: DiagnosticsRoutineStatusEnum
crosapi.mojom.DiagnosticsRoutineStatusEnum = {
};

// Enum: DiagnosticsRoutineUserMessageEnum
crosapi.mojom.DiagnosticsRoutineUserMessageEnum = {
};

// Enum: DiagnosticsRoutineCommandEnum
crosapi.mojom.DiagnosticsRoutineCommandEnum = {
};

// Enum: DiagnosticsAcPowerStatusEnum
crosapi.mojom.DiagnosticsAcPowerStatusEnum = {
};

// Enum: DiagnosticsNvmeSelfTestTypeEnum
crosapi.mojom.DiagnosticsNvmeSelfTestTypeEnum = {
};

// Enum: DiagnosticsDiskReadRoutineTypeEnum
crosapi.mojom.DiagnosticsDiskReadRoutineTypeEnum = {
};

// Struct: DiagnosticsInteractiveRoutineUpdate
crosapi.mojom.DiagnosticsInteractiveRoutineUpdate = class {
  constructor(values = {}) {
  }
};

// Struct: DiagnosticsNonInteractiveRoutineUpdate
crosapi.mojom.DiagnosticsNonInteractiveRoutineUpdate = class {
  constructor(values = {}) {
    this.kError = values.kError !== undefined ? values.kError : null;
  }
};

// Struct: DiagnosticsRoutineUpdate
crosapi.mojom.DiagnosticsRoutineUpdate = class {
  constructor(values = {}) {
    this.logs = values.logs !== undefined ? values.logs : null;
  }
};

// Struct: DiagnosticsRunRoutineResponse
crosapi.mojom.DiagnosticsRunRoutineResponse = class {
  constructor(values = {}) {
  }
};

// Interface: DiagnosticsService
crosapi.mojom.DiagnosticsServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.DiagnosticsService';
  }

};

crosapi.mojom.DiagnosticsServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
