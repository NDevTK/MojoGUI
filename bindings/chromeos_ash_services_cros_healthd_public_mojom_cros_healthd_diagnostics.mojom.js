// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_diagnostics.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};


// Enum: DiagnosticRoutineEnum
ash.cros_healthd.mojom.DiagnosticRoutineEnum = {
  DEPRECATED_: 0,
};

// Enum: DiskReadRoutineTypeEnum
ash.cros_healthd.mojom.DiskReadRoutineTypeEnum = {
};

// Enum: DiagnosticRoutineStatusEnum
ash.cros_healthd.mojom.DiagnosticRoutineStatusEnum = {
};

// Enum: DiagnosticRoutineUserMessageEnum
ash.cros_healthd.mojom.DiagnosticRoutineUserMessageEnum = {
};

// Enum: DiagnosticRoutineCommandEnum
ash.cros_healthd.mojom.DiagnosticRoutineCommandEnum = {
};

// Enum: AcPowerStatusEnum
ash.cros_healthd.mojom.AcPowerStatusEnum = {
};

// Enum: NvmeSelfTestTypeEnum
ash.cros_healthd.mojom.NvmeSelfTestTypeEnum = {
};

// Enum: DEPRECATED_LedName
ash.cros_healthd.mojom.DEPRECATED_LedName = {
};

// Enum: DEPRECATED_LedColor
ash.cros_healthd.mojom.DEPRECATED_LedColor = {
};

// Struct: RunRoutineResponse
ash.cros_healthd.mojom.RunRoutineResponse = class {
  constructor(values = {}) {
  }
};

// Struct: InteractiveRoutineUpdate
ash.cros_healthd.mojom.InteractiveRoutineUpdate = class {
  constructor(values = {}) {
  }
};

// Struct: NonInteractiveRoutineUpdate
ash.cros_healthd.mojom.NonInteractiveRoutineUpdate = class {
  constructor(values = {}) {
    this.kError = values.kError !== undefined ? values.kError : null;
  }
};

// Struct: RoutineUpdate
ash.cros_healthd.mojom.RoutineUpdate = class {
  constructor(values = {}) {
    this.logs = values.logs !== undefined ? values.logs : null;
  }
};

// Interface: DEPRECATED_LedLitUpRoutineReplier
ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier';
  }

};

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
