// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/diagnostics_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};

crosapi.mojom.DiagnosticsRoutineEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DiagnosticsRoutineStatusEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DiagnosticsRoutineUserMessageEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DiagnosticsRoutineCommandEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DiagnosticsAcPowerStatusEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DiagnosticsNvmeSelfTestTypeEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DiagnosticsDiskReadRoutineTypeEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DiagnosticsRoutineUpdateUnionSpec = { $: {} };
crosapi.mojom.DiagnosticsInteractiveRoutineUpdateSpec = { $: {} };
crosapi.mojom.DiagnosticsNonInteractiveRoutineUpdateSpec = { $: {} };
crosapi.mojom.DiagnosticsRoutineUpdateSpec = { $: {} };
crosapi.mojom.DiagnosticsRunRoutineResponseSpec = { $: {} };
crosapi.mojom.DiagnosticsService = {};
crosapi.mojom.DiagnosticsService.$interfaceName = 'crosapi.mojom.DiagnosticsService';
crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunFanRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunFanRoutine_ResponseParamsSpec = { $: {} };

// Enum: DiagnosticsRoutineEnum
crosapi.mojom.DiagnosticsRoutineEnum = {
  kUnknown: 15,
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
  kDnsResolution: 16,
  kSignalStrength: 17,
  kGatewayCanBePinged: 18,
  kDnsResolverPresent: 19,
  kSensitiveSensor: 20,
  kFingerprintAlive: 21,
  kSmartctlCheckWithPercentageUsed: 22,
  kEmmcLifetime: 23,
  MinVersion: 23,
  MinVersion: 23,
  MinVersion: 23,
  MinVersion: 23,
  MinVersion: 23,
  MinVersion: 23,
  MinVersion: 23,
  MinVersion: 23,
};

// Enum: DiagnosticsRoutineStatusEnum
crosapi.mojom.DiagnosticsRoutineStatusEnum = {
  kUnknown: 12,
  kReady: 0,
  kRunning: 1,
  kWaiting: 2,
  kPassed: 3,
  kFailed: 4,
  kError: 5,
  kCancelled: 6,
  kFailedToStart: 7,
  kRemoved: 8,
  kCancelling: 9,
  kUnsupported: 10,
  kNotRun: 11,
};

// Enum: DiagnosticsRoutineUserMessageEnum
crosapi.mojom.DiagnosticsRoutineUserMessageEnum = {
  kUnknown: 2,
  kUnplugACPower: 0,
  kPlugInACPower: 1,
  MinVersion: 1,
};

// Enum: DiagnosticsRoutineCommandEnum
crosapi.mojom.DiagnosticsRoutineCommandEnum = {
  kUnknown: 4,
  kContinue: 0,
  kCancel: 1,
  kGetStatus: 2,
  kRemove: 3,
};

// Enum: DiagnosticsAcPowerStatusEnum
crosapi.mojom.DiagnosticsAcPowerStatusEnum = {
  kUnknown: 2,
  kConnected: 0,
  kDisconnected: 1,
};

// Enum: DiagnosticsNvmeSelfTestTypeEnum
crosapi.mojom.DiagnosticsNvmeSelfTestTypeEnum = {
  kUnknown: 2,
  kShortSelfTest: 0,
  kLongSelfTest: 1,
};

// Enum: DiagnosticsDiskReadRoutineTypeEnum
crosapi.mojom.DiagnosticsDiskReadRoutineTypeEnum = {
  kLinearRead: 0,
  kRandomRead: 1,
  kUnknown: 2,
};

// Union: DiagnosticsRoutineUpdateUnion
mojo.internal.Union(
    crosapi.mojom.DiagnosticsRoutineUpdateUnionSpec, 'crosapi.mojom.DiagnosticsRoutineUpdateUnion', {
      'interactive_update': {
        'ordinal': 0,
        'type': crosapi.mojom.DiagnosticsInteractiveRoutineUpdateSpec.$,
        'nullable': false,
      },
      'noninteractive_update': {
        'ordinal': 1,
        'type': crosapi.mojom.DiagnosticsNonInteractiveRoutineUpdateSpec.$,
        'nullable': false,
      },
    });

// Struct: DiagnosticsInteractiveRoutineUpdate
mojo.internal.Struct(
    crosapi.mojom.DiagnosticsInteractiveRoutineUpdateSpec, 'crosapi.mojom.DiagnosticsInteractiveRoutineUpdate', [
      mojo.internal.StructField('user_message', 0, 0, crosapi.mojom.DiagnosticsRoutineUserMessageEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DiagnosticsNonInteractiveRoutineUpdate
mojo.internal.Struct(
    crosapi.mojom.DiagnosticsNonInteractiveRoutineUpdateSpec, 'crosapi.mojom.DiagnosticsNonInteractiveRoutineUpdate', [
      mojo.internal.StructField('status', 0, 0, crosapi.mojom.DiagnosticsRoutineStatusEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DiagnosticsRoutineUpdate
mojo.internal.Struct(
    crosapi.mojom.DiagnosticsRoutineUpdateSpec, 'crosapi.mojom.DiagnosticsRoutineUpdate', [
      mojo.internal.StructField('output', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('routine_update_union', 8, 0, crosapi.mojom.DiagnosticsRoutineUpdateUnionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('progress_percent', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DiagnosticsRunRoutineResponse
mojo.internal.Struct(
    crosapi.mojom.DiagnosticsRunRoutineResponseSpec, 'crosapi.mojom.DiagnosticsRunRoutineResponse', [
      mojo.internal.StructField('status', 0, 0, crosapi.mojom.DiagnosticsRoutineStatusEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: DiagnosticsService
mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ParamsSpec, 'crosapi.mojom.DiagnosticsService_GetAvailableRoutines_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ResponseParams', [
      mojo.internal.StructField('available_routines', 0, 0, mojo.internal.Array(crosapi.mojom.DiagnosticsRoutineEnumSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ParamsSpec, 'crosapi.mojom.DiagnosticsService_GetRoutineUpdate_Params', [
      mojo.internal.StructField('command', 0, 0, crosapi.mojom.DiagnosticsRoutineCommandEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('include_output', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ResponseParams', [
      mojo.internal.StructField('routine_update', 0, 0, crosapi.mojom.DiagnosticsRoutineUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_Params', [
      mojo.internal.StructField('percentage_used_threshold', 0, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 1, undefined),
    ],
    [[0, 8], [1, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_Params', [
      mojo.internal.StructField('expected_status', 0, 0, crosapi.mojom.DiagnosticsAcPowerStatusEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expected_power_type', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_Params', [
      mojo.internal.StructField('wear_level_threshold', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_Params', [
      mojo.internal.StructField('nvme_self_test_type', 0, 0, crosapi.mojom.DiagnosticsNvmeSelfTestTypeEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_Params', [
      mojo.internal.StructField('type', 0, 0, crosapi.mojom.DiagnosticsDiskReadRoutineTypeEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('length_seconds', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('file_size_mb', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maximum_discharge_percent_allowed', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('minimum_charge_percent_required', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunMemoryRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_Params', [
      mojo.internal.StructField('timeout_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_Params', [
      mojo.internal.StructField('peripheral_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunFanRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFanRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunFanRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFanRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.DiagnosticsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.DiagnosticsServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.DiagnosticsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.DiagnosticsServicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.DiagnosticsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.DiagnosticsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAvailableRoutines() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ParamsSpec,
      crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ResponseParamsSpec,
      [],
      false);
  }

  getRoutineUpdate(id, command, include_output) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ParamsSpec,
      crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ResponseParamsSpec,
      [id, command, include_output],
      false);
  }

  runBatteryCapacityRoutine() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBatteryHealthRoutine() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSmartctlCheckRoutine(percentage_used_threshold) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec,
      [percentage_used_threshold],
      false);
  }

  runAcPowerRoutine(expected_status, expected_power_type) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec,
      [expected_status, expected_power_type],
      false);
  }

  runCpuCacheRoutine(length_seconds) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runCpuStressRoutine(length_seconds) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runFloatingPointAccuracyRoutine(length_seconds) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  dEPRECATED_RunNvmeWearLevelRoutine(wear_level_threshold) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec,
      [wear_level_threshold],
      false);
  }

  runNvmeSelfTestRoutine(nvme_self_test_type) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec,
      [nvme_self_test_type],
      false);
  }

  runDiskReadRoutine(type, length_seconds, file_size_mb) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec,
      [type, length_seconds, file_size_mb],
      false);
  }

  runPrimeSearchRoutine(length_seconds) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runBatteryDischargeRoutine(length_seconds, maximum_discharge_percent_allowed) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec,
      [length_seconds, maximum_discharge_percent_allowed],
      false);
  }

  runBatteryChargeRoutine(length_seconds, minimum_charge_percent_required) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec,
      [length_seconds, minimum_charge_percent_required],
      false);
  }

  runMemoryRoutine() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runLanConnectivityRoutine() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runDnsResolutionRoutine() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSignalStrengthRoutine() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runGatewayCanBePingedRoutine() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runDnsResolverPresentRoutine() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSensitiveSensorRoutine() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runFingerprintAliveRoutine() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runEmmcLifetimeRoutine() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBluetoothPowerRoutine() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runUfsLifetimeRoutine() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runPowerButtonRoutine(timeout_seconds) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec,
      [timeout_seconds],
      false);
  }

  runAudioDriverRoutine() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBluetoothDiscoveryRoutine() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBluetoothScanningRoutine(length_seconds) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runBluetoothPairingRoutine(peripheral_id) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec,
      [peripheral_id],
      false);
  }

  runFanRoutine() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      crosapi.mojom.DiagnosticsService_RunFanRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunFanRoutine_ResponseParamsSpec,
      [],
      false);
  }

};

crosapi.mojom.DiagnosticsService.getRemote = function() {
  let remote = new crosapi.mojom.DiagnosticsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.DiagnosticsService',
    'context');
  return remote.$;
};

crosapi.mojom.DiagnosticsServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAvailableRoutines();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getRoutineUpdate(params.id, params.command, params.include_output);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runBatteryCapacityRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runBatteryHealthRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runSmartctlCheckRoutine(params.percentage_used_threshold);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runAcPowerRoutine(params.expected_status, params.expected_power_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runCpuCacheRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runCpuStressRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runFloatingPointAccuracyRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dEPRECATED_RunNvmeWearLevelRoutine(params.wear_level_threshold);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runNvmeSelfTestRoutine(params.nvme_self_test_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const params = crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runDiskReadRoutine(params.type, params.length_seconds, params.file_size_mb);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const params = crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runPrimeSearchRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const params = crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runBatteryDischargeRoutine(params.length_seconds, params.maximum_discharge_percent_allowed);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const params = crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runBatteryChargeRoutine(params.length_seconds, params.minimum_charge_percent_required);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const params = crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runMemoryRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const params = crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runLanConnectivityRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const params = crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runDnsResolutionRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const params = crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runSignalStrengthRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const params = crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runGatewayCanBePingedRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const params = crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runDnsResolverPresentRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const params = crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runSensitiveSensorRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const params = crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runFingerprintAliveRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const params = crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runEmmcLifetimeRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const params = crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runBluetoothPowerRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const params = crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runUfsLifetimeRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const params = crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runPowerButtonRoutine(params.timeout_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const params = crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runAudioDriverRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const params = crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runBluetoothDiscoveryRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 29: {
          const params = crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runBluetoothScanningRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 30: {
          const params = crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runBluetoothPairingRoutine(params.peripheral_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 31: {
          const params = crosapi.mojom.DiagnosticsService_RunFanRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runFanRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunFanRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

crosapi.mojom.DiagnosticsServiceReceiver = crosapi.mojom.DiagnosticsServiceReceiver;

crosapi.mojom.DiagnosticsServicePtr = crosapi.mojom.DiagnosticsServiceRemote;
crosapi.mojom.DiagnosticsServiceRequest = crosapi.mojom.DiagnosticsServicePendingReceiver;

