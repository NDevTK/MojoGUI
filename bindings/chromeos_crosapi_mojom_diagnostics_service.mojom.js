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
crosapi.mojom.DiagnosticsRoutineEnumSpec = { $: mojo.internal.Enum() };

// Enum: DiagnosticsRoutineStatusEnum
crosapi.mojom.DiagnosticsRoutineStatusEnum = {
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
crosapi.mojom.DiagnosticsRoutineStatusEnumSpec = { $: mojo.internal.Enum() };

// Enum: DiagnosticsRoutineUserMessageEnum
crosapi.mojom.DiagnosticsRoutineUserMessageEnum = {
  kUnplugACPower: 0,
  kPlugInACPower: 1,
};
crosapi.mojom.DiagnosticsRoutineUserMessageEnumSpec = { $: mojo.internal.Enum() };

// Enum: DiagnosticsRoutineCommandEnum
crosapi.mojom.DiagnosticsRoutineCommandEnum = {
  kContinue: 0,
  kCancel: 1,
  kGetStatus: 2,
  kRemove: 3,
};
crosapi.mojom.DiagnosticsRoutineCommandEnumSpec = { $: mojo.internal.Enum() };

// Enum: DiagnosticsAcPowerStatusEnum
crosapi.mojom.DiagnosticsAcPowerStatusEnum = {
  kConnected: 0,
  kDisconnected: 1,
};
crosapi.mojom.DiagnosticsAcPowerStatusEnumSpec = { $: mojo.internal.Enum() };

// Enum: DiagnosticsNvmeSelfTestTypeEnum
crosapi.mojom.DiagnosticsNvmeSelfTestTypeEnum = {
  kShortSelfTest: 0,
  kLongSelfTest: 1,
};
crosapi.mojom.DiagnosticsNvmeSelfTestTypeEnumSpec = { $: mojo.internal.Enum() };

// Enum: DiagnosticsDiskReadRoutineTypeEnum
crosapi.mojom.DiagnosticsDiskReadRoutineTypeEnum = {
  kLinearRead: 0,
  kRandomRead: 1,
};
crosapi.mojom.DiagnosticsDiskReadRoutineTypeEnumSpec = { $: mojo.internal.Enum() };

// Union: DiagnosticsRoutineUpdateUnion
crosapi.mojom.DiagnosticsRoutineUpdateUnionSpec = { $: mojo.internal.Union(
    'crosapi.mojom.DiagnosticsRoutineUpdateUnion', {
      'interactive_update': {
        'ordinal': 0,
        'type': crosapi.mojom.DiagnosticsInteractiveRoutineUpdateSpec,
      }},
      'noninteractive_update': {
        'ordinal': 1,
        'type': crosapi.mojom.DiagnosticsNonInteractiveRoutineUpdateSpec,
      }},
    })
};

// Struct: DiagnosticsInteractiveRoutineUpdate
crosapi.mojom.DiagnosticsInteractiveRoutineUpdateSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsInteractiveRoutineUpdate',
      packedSize: 16,
      fields: [
        { name: 'user_message', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRoutineUserMessageEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DiagnosticsNonInteractiveRoutineUpdate
crosapi.mojom.DiagnosticsNonInteractiveRoutineUpdateSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsNonInteractiveRoutineUpdate',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRoutineStatusEnumSpec, nullable: false, minVersion: 0 },
        { name: 'status_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DiagnosticsRoutineUpdate
crosapi.mojom.DiagnosticsRoutineUpdateSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsRoutineUpdate',
      packedSize: 40,
      fields: [
        { name: 'progress_percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'output', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'routine_update_union', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRoutineUpdateUnionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DiagnosticsRunRoutineResponse
crosapi.mojom.DiagnosticsRunRoutineResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsRunRoutineResponse',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 4, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRoutineStatusEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: DiagnosticsService
crosapi.mojom.DiagnosticsService = {};

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
      []);
  }

  getRoutineUpdate(id, command, include_output) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ParamsSpec,
      crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ResponseParamsSpec,
      [id, command, include_output]);
  }

  runBatteryCapacityRoutine() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec,
      []);
  }

  runBatteryHealthRoutine() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec,
      []);
  }

  runSmartctlCheckRoutine(percentage_used_threshold) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec,
      [percentage_used_threshold]);
  }

  runAcPowerRoutine(expected_status, expected_power_type) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec,
      [expected_status, expected_power_type]);
  }

  runCpuCacheRoutine(length_seconds) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec,
      [length_seconds]);
  }

  runCpuStressRoutine(length_seconds) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec,
      [length_seconds]);
  }

  runFloatingPointAccuracyRoutine(length_seconds) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec,
      [length_seconds]);
  }

  dEPRECATED_RunNvmeWearLevelRoutine(wear_level_threshold) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec,
      [wear_level_threshold]);
  }

  runNvmeSelfTestRoutine(nvme_self_test_type) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec,
      [nvme_self_test_type]);
  }

  runDiskReadRoutine(type, length_seconds, file_size_mb) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec,
      [type, length_seconds, file_size_mb]);
  }

  runPrimeSearchRoutine(length_seconds) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec,
      [length_seconds]);
  }

  runBatteryDischargeRoutine(length_seconds, maximum_discharge_percent_allowed) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec,
      [length_seconds, maximum_discharge_percent_allowed]);
  }

  runBatteryChargeRoutine(length_seconds, minimum_charge_percent_required) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec,
      [length_seconds, minimum_charge_percent_required]);
  }

  runMemoryRoutine() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ResponseParamsSpec,
      []);
  }

  runLanConnectivityRoutine() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec,
      []);
  }

  runDnsResolutionRoutine() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec,
      []);
  }

  runSignalStrengthRoutine() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec,
      []);
  }

  runGatewayCanBePingedRoutine() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec,
      []);
  }

  runDnsResolverPresentRoutine() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec,
      []);
  }

  runSensitiveSensorRoutine() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec,
      []);
  }

  runFingerprintAliveRoutine() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec,
      []);
  }

  runEmmcLifetimeRoutine() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec,
      []);
  }

  runBluetoothPowerRoutine() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec,
      []);
  }

  runUfsLifetimeRoutine() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec,
      []);
  }

  runPowerButtonRoutine(timeout_seconds) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec,
      [timeout_seconds]);
  }

  runAudioDriverRoutine() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec,
      []);
  }

  runBluetoothDiscoveryRoutine() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec,
      []);
  }

  runBluetoothScanningRoutine(length_seconds) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec,
      [length_seconds]);
  }

  runBluetoothPairingRoutine(peripheral_id) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec,
      [peripheral_id]);
  }

  runFanRoutine() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      crosapi.mojom.DiagnosticsService_RunFanRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunFanRoutine_ResponseParamsSpec,
      []);
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

// ParamsSpec for GetAvailableRoutines
crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.GetAvailableRoutines_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.GetAvailableRoutines_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'available_routines', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.DiagnosticsRoutineEnumSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRoutineUpdate
crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.GetRoutineUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'command', packedOffset: 4, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRoutineCommandEnumSpec, nullable: false, minVersion: 0 },
        { name: 'include_output', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.GetRoutineUpdate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'routine_update', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRoutineUpdateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunBatteryCapacityRoutine
crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunBatteryCapacityRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunBatteryCapacityRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunBatteryHealthRoutine
crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunBatteryHealthRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunBatteryHealthRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunSmartctlCheckRoutine
crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunSmartctlCheckRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'percentage_used_threshold', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 1, packedSize: 16}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunSmartctlCheckRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunAcPowerRoutine
crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunAcPowerRoutine_Params',
      packedSize: 24,
      fields: [
        { name: 'expected_status', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsAcPowerStatusEnumSpec, nullable: false, minVersion: 0 },
        { name: 'expected_power_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunAcPowerRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunCpuCacheRoutine
crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunCpuCacheRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunCpuCacheRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunCpuStressRoutine
crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunCpuStressRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunCpuStressRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunFloatingPointAccuracyRoutine
crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunFloatingPointAccuracyRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunFloatingPointAccuracyRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_RunNvmeWearLevelRoutine
crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.DEPRECATED_RunNvmeWearLevelRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'wear_level_threshold', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.DEPRECATED_RunNvmeWearLevelRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunNvmeSelfTestRoutine
crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunNvmeSelfTestRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'nvme_self_test_type', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsNvmeSelfTestTypeEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunNvmeSelfTestRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunDiskReadRoutine
crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunDiskReadRoutine_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsDiskReadRoutineTypeEnumSpec, nullable: false, minVersion: 0 },
        { name: 'length_seconds', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'file_size_mb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunDiskReadRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunPrimeSearchRoutine
crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunPrimeSearchRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunPrimeSearchRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunBatteryDischargeRoutine
crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunBatteryDischargeRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maximum_discharge_percent_allowed', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunBatteryDischargeRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunBatteryChargeRoutine
crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunBatteryChargeRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'minimum_charge_percent_required', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunBatteryChargeRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunMemoryRoutine
crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunMemoryRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunMemoryRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunLanConnectivityRoutine
crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunLanConnectivityRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunLanConnectivityRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunDnsResolutionRoutine
crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunDnsResolutionRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunDnsResolutionRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunSignalStrengthRoutine
crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunSignalStrengthRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunSignalStrengthRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunGatewayCanBePingedRoutine
crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunGatewayCanBePingedRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunGatewayCanBePingedRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunDnsResolverPresentRoutine
crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunDnsResolverPresentRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunDnsResolverPresentRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunSensitiveSensorRoutine
crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunSensitiveSensorRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunSensitiveSensorRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunFingerprintAliveRoutine
crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunFingerprintAliveRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunFingerprintAliveRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunEmmcLifetimeRoutine
crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunEmmcLifetimeRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunEmmcLifetimeRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunBluetoothPowerRoutine
crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunBluetoothPowerRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunBluetoothPowerRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunUfsLifetimeRoutine
crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunUfsLifetimeRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunUfsLifetimeRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunPowerButtonRoutine
crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunPowerButtonRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'timeout_seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunPowerButtonRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunAudioDriverRoutine
crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunAudioDriverRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunAudioDriverRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunBluetoothDiscoveryRoutine
crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunBluetoothDiscoveryRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunBluetoothDiscoveryRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunBluetoothScanningRoutine
crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunBluetoothScanningRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunBluetoothScanningRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunBluetoothPairingRoutine
crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunBluetoothPairingRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'peripheral_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunBluetoothPairingRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunFanRoutine
crosapi.mojom.DiagnosticsService_RunFanRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunFanRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.DiagnosticsService_RunFanRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DiagnosticsService.RunFanRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DiagnosticsRunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.DiagnosticsServicePtr = crosapi.mojom.DiagnosticsServiceRemote;
crosapi.mojom.DiagnosticsServiceRequest = crosapi.mojom.DiagnosticsServicePendingReceiver;

