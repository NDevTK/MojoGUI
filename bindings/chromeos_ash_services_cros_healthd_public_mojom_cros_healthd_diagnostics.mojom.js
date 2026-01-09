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
  kBatteryCapacity: 0,
  kBatteryHealth: 1,
  kUrandom: 2,
  kSmartctlCheck: 3,
  kAcPower: 4,
  kCpuCache: 5,
  kCpuStress: 6,
  kFloatingPointAccuracy: 7,
  DEPRECATED_kNvmeWearLevel: 8,
  kNvmeSelfTest: 9,
  kDiskRead: 10,
  kPrimeSearch: 11,
  kBatteryDischarge: 12,
  kBatteryCharge: 13,
  kMemory: 14,
  kLanConnectivity: 15,
  kSignalStrength: 16,
  kGatewayCanBePinged: 17,
  kHasSecureWiFiConnection: 18,
  kDnsResolverPresent: 19,
  kDnsLatency: 20,
  kDnsResolution: 21,
  kCaptivePortal: 22,
  kHttpFirewall: 23,
  kHttpsFirewall: 24,
  kHttpsLatency: 25,
  kVideoConferencing: 26,
  kArcHttp: 27,
  kArcPing: 28,
  kArcDnsResolution: 29,
};

// Enum: DiskReadRoutineTypeEnum
ash.cros_healthd.mojom.DiskReadRoutineTypeEnum = {
  should: 0,
  kLinearRead: 1,
  kRandomRead: 2,
};

// Enum: DiagnosticRoutineStatusEnum
ash.cros_healthd.mojom.DiagnosticRoutineStatusEnum = {
};

// Enum: DiagnosticRoutineUserMessageEnum
ash.cros_healthd.mojom.DiagnosticRoutineUserMessageEnum = {
};

// Enum: DiagnosticRoutineCommandEnum
ash.cros_healthd.mojom.DiagnosticRoutineCommandEnum = {
  otherwise: 0,
};

// Enum: AcPowerStatusEnum
ash.cros_healthd.mojom.AcPowerStatusEnum = {
};

// Enum: NvmeSelfTestTypeEnum
ash.cros_healthd.mojom.NvmeSelfTestTypeEnum = {
};

// Enum: DEPRECATED_LedName
ash.cros_healthd.mojom.DEPRECATED_LedName = {
  should: 0,
  kBattery: 1,
  kPower: 2,
  kAdapter: 3,
  kLeft: 4,
  kRight: 5,
};

// Enum: DEPRECATED_LedColor
ash.cros_healthd.mojom.DEPRECATED_LedColor = {
  should: 0,
  kRed: 1,
  kGreen: 2,
  kBlue: 3,
  kYellow: 4,
  kWhite: 5,
  kAmber: 6,
};

// Struct: RunRoutineResponse
ash.cros_healthd.mojom.RunRoutineResponse = class {
  constructor(values = {}) {
    this.status@1 = values.status@1 !== undefined ? values.status@1 : 0;
  }
};

// Struct: InteractiveRoutineUpdate
ash.cros_healthd.mojom.InteractiveRoutineUpdate = class {
  constructor(values = {}) {
    this.user_message@0 = values.user_message@0 !== undefined ? values.user_message@0 : null;
  }
};

// Struct: NonInteractiveRoutineUpdate
ash.cros_healthd.mojom.NonInteractiveRoutineUpdate = class {
  constructor(values = {}) {
    this.status@0 = values.status@0 !== undefined ? values.status@0 : null;
    this.kError = values.kError !== undefined ? values.kError : null;
    this.status_message@1 = values.status_message@1 !== undefined ? values.status_message@1 : "";
  }
};

// Struct: RoutineUpdate
ash.cros_healthd.mojom.RoutineUpdate = class {
  constructor(values = {}) {
    this.100 = values.100 !== undefined ? values.100 : null;
    this.progress_percent@0 = values.progress_percent@0 !== undefined ? values.progress_percent@0 : 0;
    this.logs = values.logs !== undefined ? values.logs : null;
    this.routine_update_union@2 = values.routine_update_union@2 !== undefined ? values.routine_update_union@2 : null;
  }
};

// Interface: DEPRECATED_LedLitUpRoutineReplier
ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier';
  }

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

};

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
