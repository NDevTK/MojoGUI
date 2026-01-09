// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/diagnostics_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: DiagnosticsRoutineEnum
crosapi.mojom.DiagnosticsRoutineEnum = {
  kBatteryCapacity: 0,
  kBatteryHealth: 1,
  kSmartctlCheck: 2,
  kAcPower: 3,
  kCpuCache: 4,
  kCpuStress: 5,
  kFloatingPointAccuracy: 6,
  DEPRECATED_kNvmeWearLevel: 7,
  kNvmeSelfTest: 8,
  kDiskRead: 9,
  kPrimeSearch: 10,
  kBatteryDischarge: 11,
  kBatteryCharge: 12,
  kMemory: 13,
  kLanConnectivity: 14,
  kDnsResolution: 15,
  kSignalStrength: 16,
  kGatewayCanBePinged: 17,
  kDnsResolverPresent: 18,
  kSensitiveSensor: 19,
  kFingerprintAlive: 20,
  kSmartctlCheckWithPercentageUsed: 21,
  kEmmcLifetime: 22,
};

// Enum: DiagnosticsRoutineStatusEnum
crosapi.mojom.DiagnosticsRoutineStatusEnum = {
  kReady: 0,
};

// Enum: DiagnosticsRoutineUserMessageEnum
crosapi.mojom.DiagnosticsRoutineUserMessageEnum = {
  kUnplugACPower: 0,
};

// Enum: DiagnosticsRoutineCommandEnum
crosapi.mojom.DiagnosticsRoutineCommandEnum = {
  kContinue: 0,
};

// Enum: DiagnosticsAcPowerStatusEnum
crosapi.mojom.DiagnosticsAcPowerStatusEnum = {
  kConnected: 0,
};

// Enum: DiagnosticsNvmeSelfTestTypeEnum
crosapi.mojom.DiagnosticsNvmeSelfTestTypeEnum = {
  kShortSelfTest: 0,
};

// Enum: DiagnosticsDiskReadRoutineTypeEnum
crosapi.mojom.DiagnosticsDiskReadRoutineTypeEnum = {
  kLinearRead: 0,
  kRandomRead: 1,
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
