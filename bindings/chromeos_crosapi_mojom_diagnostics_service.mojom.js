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
    this.user_message@0 = values.user_message@0 !== undefined ? values.user_message@0 : null;
  }
};

// Struct: DiagnosticsNonInteractiveRoutineUpdate
crosapi.mojom.DiagnosticsNonInteractiveRoutineUpdate = class {
  constructor(values = {}) {
    this.status@0 = values.status@0 !== undefined ? values.status@0 : null;
    this.kError = values.kError !== undefined ? values.kError : null;
    this.status_message@1 = values.status_message@1 !== undefined ? values.status_message@1 : "";
  }
};

// Struct: DiagnosticsRoutineUpdate
crosapi.mojom.DiagnosticsRoutineUpdate = class {
  constructor(values = {}) {
    this.100 = values.100 !== undefined ? values.100 : null;
    this.progress_percent@0 = values.progress_percent@0 !== undefined ? values.progress_percent@0 : 0;
    this.logs = values.logs !== undefined ? values.logs : null;
    this.routine_update_union@2 = values.routine_update_union@2 !== undefined ? values.routine_update_union@2 : "";
  }
};

// Struct: DiagnosticsRunRoutineResponse
crosapi.mojom.DiagnosticsRunRoutineResponse = class {
  constructor(values = {}) {
    this.status@1 = values.status@1 !== undefined ? values.status@1 : 0;
  }
};

// Interface: DiagnosticsService
crosapi.mojom.DiagnosticsServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.DiagnosticsService';
  }

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  1(id, command, include_output) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(id, command, include_output)
      resolve({});
    });
  }

  2() {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2()
      resolve({});
    });
  }

  3() {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3()
      resolve({});
    });
  }

  0x00(warning) {
    // Method: 0x00
    // Call: 0x00(warning)
  }

  threshold(request) {
    // Method: Threshold
    // Call: Threshold(request)
  }

  kSmartctlCheck(|percentage_used_threshold|) {
    // Method: kSmartctlCheck
    // Call: kSmartctlCheck(|percentage_used_threshold|)
  }

  kSmartctlCheckWithPercentageUsed(|percentage_used_threshold|) {
    // Method: kSmartctlCheckWithPercentageUsed
    // Call: kSmartctlCheckWithPercentageUsed(|percentage_used_threshold|)
  }

  value() {
    // Method: value
    // Call: value()
  }

  4(percentage_used_threshold) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(percentage_used_threshold)
      resolve({});
    });
  }

  5(expected_status, expected_power_type) {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5(expected_status, expected_power_type)
      resolve({});
    });
  }

  6(length_seconds) {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6(length_seconds)
      resolve({});
    });
  }

  7(length_seconds) {
    // Method: 7
    return new Promise((resolve) => {
      // Call: 7(length_seconds)
      resolve({});
    });
  }

  8(length_seconds) {
    // Method: 8
    return new Promise((resolve) => {
      // Call: 8(length_seconds)
      resolve({});
    });
  }

  9(wear_level_threshold) {
    // Method: 9
    return new Promise((resolve) => {
      // Call: 9(wear_level_threshold)
      resolve({});
    });
  }

  10(nvme_self_test_type) {
    // Method: 10
    return new Promise((resolve) => {
      // Call: 10(nvme_self_test_type)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  11(type, length_seconds, file_size_mb) {
    // Method: 11
    return new Promise((resolve) => {
      // Call: 11(type, length_seconds, file_size_mb)
      resolve({});
    });
  }

  12(length_seconds) {
    // Method: 12
    return new Promise((resolve) => {
      // Call: 12(length_seconds)
      resolve({});
    });
  }

  13(length_seconds, maximum_discharge_percent_allowed) {
    // Method: 13
    return new Promise((resolve) => {
      // Call: 13(length_seconds, maximum_discharge_percent_allowed)
      resolve({});
    });
  }

  14(length_seconds, minimum_charge_percent_required) {
    // Method: 14
    return new Promise((resolve) => {
      // Call: 14(length_seconds, minimum_charge_percent_required)
      resolve({});
    });
  }

  15() {
    // Method: 15
    return new Promise((resolve) => {
      // Call: 15()
      resolve({});
    });
  }

  16() {
    // Method: 16
    return new Promise((resolve) => {
      // Call: 16()
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  17() {
    // Method: 17
    return new Promise((resolve) => {
      // Call: 17()
      resolve({});
    });
  }

  18() {
    // Method: 18
    return new Promise((resolve) => {
      // Call: 18()
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  19() {
    // Method: 19
    return new Promise((resolve) => {
      // Call: 19()
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  20() {
    // Method: 20
    return new Promise((resolve) => {
      // Call: 20()
      resolve({});
    });
  }

  21() {
    // Method: 21
    return new Promise((resolve) => {
      // Call: 21()
      resolve({});
    });
  }

  22() {
    // Method: 22
    return new Promise((resolve) => {
      // Call: 22()
      resolve({});
    });
  }

  0x01() {
    // Method: 0x01
    // Call: 0x01()
  }

  23() {
    // Method: 23
    return new Promise((resolve) => {
      // Call: 23()
      resolve({});
    });
  }

  24() {
    // Method: 24
    return new Promise((resolve) => {
      // Call: 24()
      resolve({});
    });
  }

  25() {
    // Method: 25
    return new Promise((resolve) => {
      // Call: 25()
      resolve({});
    });
  }

  26(timeout_seconds) {
    // Method: 26
    return new Promise((resolve) => {
      // Call: 26(timeout_seconds)
      resolve({});
    });
  }

  27() {
    // Method: 27
    return new Promise((resolve) => {
      // Call: 27()
      resolve({});
    });
  }

  28() {
    // Method: 28
    return new Promise((resolve) => {
      // Call: 28()
      resolve({});
    });
  }

  29(length_seconds) {
    // Method: 29
    return new Promise((resolve) => {
      // Call: 29(length_seconds)
      resolve({});
    });
  }

  30(peripheral_id) {
    // Method: 30
    return new Promise((resolve) => {
      // Call: 30(peripheral_id)
      resolve({});
    });
  }

  31() {
    // Method: 31
    return new Promise((resolve) => {
      // Call: 31()
      resolve({});
    });
  }

};

crosapi.mojom.DiagnosticsServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
