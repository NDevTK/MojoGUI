// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};
var chromeos = chromeos || {};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService = {};
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.$interfaceName = 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService';
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdEventService = {};
ash.cros_healthd.mojom.CrosHealthdEventService.$interfaceName = 'ash.cros_healthd.mojom.CrosHealthdEventService';
ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddBluetoothObserver_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdProbeService = {};
ash.cros_healthd.mojom.CrosHealthdProbeService.$interfaceName = 'ash.cros_healthd.mojom.CrosHealthdProbeService';
ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ResponseParamsSpec = { $: {} };

// Interface: CrosHealthdDiagnosticsService
mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ResponseParams', [
      mojo.internal.StructField('available_routines', 0, 0, mojo.internal.Array(ash.cros_healthd.mojom.DiagnosticRoutineEnumSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_Params', [
      mojo.internal.StructField('command', 0, 0, ash.cros_healthd.mojom.DiagnosticRoutineCommandEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('include_output', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ResponseParams', [
      mojo.internal.StructField('routine_update', 0, 0, ash.cros_healthd.mojom.RoutineUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_Params', [
      mojo.internal.StructField('percentage_used_threshold', 0, 0, ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 6, undefined),
    ],
    [[0, 8], [6, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_Params', [
      mojo.internal.StructField('expected_status', 0, 0, ash.cros_healthd.mojom.AcPowerStatusEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expected_power_type', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_Params', [
      mojo.internal.StructField('wear_level_threshold', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_Params', [
      mojo.internal.StructField('wear_level_threshold', 0, 0, ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_Params', [
      mojo.internal.StructField('nvme_self_test_type', 0, 0, ash.cros_healthd.mojom.NvmeSelfTestTypeEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_Params', [
      mojo.internal.StructField('type', 0, 0, ash.cros_healthd.mojom.DiskReadRoutineTypeEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('length_seconds', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('file_size_mb', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maximum_discharge_percent_allowed', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('minimum_charge_percent_required', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_Params', [
      mojo.internal.StructField('max_testing_mem_kib_$value', 0, 0, mojo.internal.Uint32, 0, false, 10, { isPrimary: false, linkedValueFieldName: 'max_testing_mem_kib_$flag', originalFieldName: 'max_testing_mem_kib' }),
      mojo.internal.StructField('max_testing_mem_kib_$flag', 4, 0, mojo.internal.Bool, false, false, 10, { isPrimary: true, linkedValueFieldName: 'max_testing_mem_kib_$value', originalFieldName: 'max_testing_mem_kib' }),
    ],
    [[0, 8], [10, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_Params', [
      mojo.internal.StructField('stun_server_hostname', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_Params', [
      mojo.internal.StructField('target_state', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_Params', [
      mojo.internal.StructField('name', 0, 0, ash.cros_healthd.mojom.DEPRECATED_LedNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color', 8, 0, ash.cros_healthd.mojom.DEPRECATED_LedColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('replier', 16, 0, mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_Params', [
      mojo.internal.StructField('node_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('volume', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('mute_on', 9, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_Params', [
      mojo.internal.StructField('node_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('gain', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('deprecated_mute_on', 9, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_Params', [
      mojo.internal.StructField('peripheral_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_Params', [
      mojo.internal.StructField('timeout_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cros_healthd.mojom.CrosHealthdDiagnosticsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsServicePendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAvailableRoutines() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ResponseParamsSpec,
      [],
      false);
  }

  getRoutineUpdate(id, command, include_output) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ResponseParamsSpec,
      [id, command, include_output],
      false);
  }

  runUrandomRoutine(length_seconds) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runBatteryCapacityRoutine() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBatteryHealthRoutine() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSmartctlCheckRoutine(percentage_used_threshold) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec,
      [percentage_used_threshold],
      false);
  }

  runAcPowerRoutine(expected_status, expected_power_type) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec,
      [expected_status, expected_power_type],
      false);
  }

  runCpuCacheRoutine(length_seconds) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runCpuStressRoutine(length_seconds) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runFloatingPointAccuracyRoutine(length_seconds) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  dEPRECATED_RunNvmeWearLevelRoutineWithThreshold(wear_level_threshold) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ResponseParamsSpec,
      [wear_level_threshold],
      false);
  }

  dEPRECATED_RunNvmeWearLevelRoutine(wear_level_threshold) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec,
      [wear_level_threshold],
      false);
  }

  runNvmeSelfTestRoutine(nvme_self_test_type) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec,
      [nvme_self_test_type],
      false);
  }

  runDiskReadRoutine(type, length_seconds, file_size_mb) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec,
      [type, length_seconds, file_size_mb],
      false);
  }

  runPrimeSearchRoutine(length_seconds) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runBatteryDischargeRoutine(length_seconds, maximum_discharge_percent_allowed) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec,
      [length_seconds, maximum_discharge_percent_allowed],
      false);
  }

  runBatteryChargeRoutine(length_seconds, minimum_charge_percent_required) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec,
      [length_seconds, minimum_charge_percent_required],
      false);
  }

  runMemoryRoutine(max_testing_mem_kib) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ResponseParamsSpec,
      [max_testing_mem_kib],
      false);
  }

  runLanConnectivityRoutine() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSignalStrengthRoutine() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runGatewayCanBePingedRoutine() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runHasSecureWiFiConnectionRoutine() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runDnsResolverPresentRoutine() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runDnsLatencyRoutine() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runDnsResolutionRoutine() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runCaptivePortalRoutine() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runHttpFirewallRoutine() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runHttpsFirewallRoutine() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runHttpsLatencyRoutine() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runVideoConferencingRoutine(stun_server_hostname) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ResponseParamsSpec,
      [stun_server_hostname],
      false);
  }

  runArcHttpRoutine() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runArcPingRoutine() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runArcDnsResolutionRoutine() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSensitiveSensorRoutine() {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runFingerprintRoutine() {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runFingerprintAliveRoutine() {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runPrivacyScreenRoutine(target_state) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ResponseParamsSpec,
      [target_state],
      false);
  }

  dEPRECATED_RunLedLitUpRoutine(name, color, replier) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ResponseParamsSpec,
      [name, color, replier],
      false);
  }

  runEmmcLifetimeRoutine() {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec,
      [],
      false);
  }

  dEPRECATED_RunAudioSetVolumeRoutine(node_id, volume, mute_on) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ResponseParamsSpec,
      [node_id, volume, mute_on],
      false);
  }

  dEPRECATED_RunAudioSetGainRoutine(node_id, gain, deprecated_mute_on) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ResponseParamsSpec,
      [node_id, gain, deprecated_mute_on],
      false);
  }

  runBluetoothPowerRoutine() {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBluetoothDiscoveryRoutine() {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBluetoothScanningRoutine(length_seconds) {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runBluetoothPairingRoutine(peripheral_id) {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec,
      [peripheral_id],
      false);
  }

  runPowerButtonRoutine(timeout_seconds) {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec,
      [timeout_seconds],
      false);
  }

  runAudioDriverRoutine() {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runUfsLifetimeRoutine() {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runFanRoutine() {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ResponseParamsSpec,
      [],
      false);
  }

};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAvailableRoutines();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getRoutineUpdate(params.id, params.command, params.include_output);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runUrandomRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 3: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runBatteryCapacityRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 4: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runBatteryHealthRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 5: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runSmartctlCheckRoutine(params.percentage_used_threshold);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 6: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runAcPowerRoutine(params.expected_status, params.expected_power_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 7: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runCpuCacheRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 8: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runCpuStressRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 9: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runFloatingPointAccuracyRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 10: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dEPRECATED_RunNvmeWearLevelRoutineWithThreshold(params.wear_level_threshold);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 32: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dEPRECATED_RunNvmeWearLevelRoutine(params.wear_level_threshold);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 11: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runNvmeSelfTestRoutine(params.nvme_self_test_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 12: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runDiskReadRoutine(params.type, params.length_seconds, params.file_size_mb);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 13: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runPrimeSearchRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 14: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runBatteryDischargeRoutine(params.length_seconds, params.maximum_discharge_percent_allowed);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 15: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runBatteryChargeRoutine(params.length_seconds, params.minimum_charge_percent_required);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 16: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runMemoryRoutine(params.max_testing_mem_kib);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 17: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runLanConnectivityRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 18: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runSignalStrengthRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 19: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runGatewayCanBePingedRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 20: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runHasSecureWiFiConnectionRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 21: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runDnsResolverPresentRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 22: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runDnsLatencyRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 23: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runDnsResolutionRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 24: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runCaptivePortalRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 25: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runHttpFirewallRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 26: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runHttpsFirewallRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 27: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runHttpsLatencyRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 28: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runVideoConferencingRoutine(params.stun_server_hostname);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 29: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runArcHttpRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 30: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runArcPingRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 31: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runArcDnsResolutionRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 33: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runSensitiveSensorRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 34: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runFingerprintRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 35: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runFingerprintAliveRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 36: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runPrivacyScreenRoutine(params.target_state);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 37: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dEPRECATED_RunLedLitUpRoutine(params.name, params.color, params.replier);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 38: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runEmmcLifetimeRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 39: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dEPRECATED_RunAudioSetVolumeRoutine(params.node_id, params.volume, params.mute_on);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 40: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dEPRECATED_RunAudioSetGainRoutine(params.node_id, params.gain, params.deprecated_mute_on);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 41: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runBluetoothPowerRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 42: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runBluetoothDiscoveryRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 43: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runBluetoothScanningRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 44: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runBluetoothPairingRoutine(params.peripheral_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 45: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runPowerButtonRoutine(params.timeout_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 46: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runAudioDriverRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 47: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runUfsLifetimeRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 48: {
          const params = ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.runFanRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceReceiver = ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceReceiver;

ash.cros_healthd.mojom.CrosHealthdDiagnosticsServicePtr = ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRemote;
ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRequest = ash.cros_healthd.mojom.CrosHealthdDiagnosticsServicePendingReceiver;


// Interface: CrosHealthdEventService
mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddBluetoothObserver_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddBluetoothObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdBluetoothObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdLidObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdPowerObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromeos.network_health.mojom.NetworkEventsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdAudioObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdThunderboltObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdUsbObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_Params', [
      mojo.internal.StructField('category', 0, 0, ash.cros_healthd.mojom.EventCategoryEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.EventObserverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_Params', [
      mojo.internal.StructField('category', 0, 0, ash.cros_healthd.mojom.EventCategoryEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.cros_healthd.mojom.SupportStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cros_healthd.mojom.CrosHealthdEventServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.CrosHealthdEventServiceRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdEventService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.CrosHealthdEventServicePendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.CrosHealthdEventServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.mojom.CrosHealthdEventServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dEPRECATED_AddBluetoothObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddBluetoothObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  dEPRECATED_AddLidObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  dEPRECATED_AddPowerObserver(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  addNetworkObserver(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  dEPRECATED_AddAudioObserver(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  dEPRECATED_AddThunderboltObserver(observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  dEPRECATED_AddUsbObserver(observer) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  addEventObserver(category, observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_ParamsSpec,
      null,
      [category, observer],
      false);
  }

  isEventSupported(category) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ResponseParamsSpec,
      [category],
      false);
  }

};

ash.cros_healthd.mojom.CrosHealthdEventService.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.CrosHealthdEventServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdEventService',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.CrosHealthdEventServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddBluetoothObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dEPRECATED_AddBluetoothObserver(params.observer);
          break;
        }
        case 1: {
          const params = ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dEPRECATED_AddLidObserver(params.observer);
          break;
        }
        case 2: {
          const params = ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dEPRECATED_AddPowerObserver(params.observer);
          break;
        }
        case 3: {
          const params = ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addNetworkObserver(params.observer);
          break;
        }
        case 4: {
          const params = ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dEPRECATED_AddAudioObserver(params.observer);
          break;
        }
        case 5: {
          const params = ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dEPRECATED_AddThunderboltObserver(params.observer);
          break;
        }
        case 6: {
          const params = ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dEPRECATED_AddUsbObserver(params.observer);
          break;
        }
        case 7: {
          const params = ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addEventObserver(params.category, params.observer);
          break;
        }
        case 8: {
          const params = ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isEventSupported(params.category);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

ash.cros_healthd.mojom.CrosHealthdEventServiceReceiver = ash.cros_healthd.mojom.CrosHealthdEventServiceReceiver;

ash.cros_healthd.mojom.CrosHealthdEventServicePtr = ash.cros_healthd.mojom.CrosHealthdEventServiceRemote;
ash.cros_healthd.mojom.CrosHealthdEventServiceRequest = ash.cros_healthd.mojom.CrosHealthdEventServicePendingReceiver;


// Interface: CrosHealthdProbeService
mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_Params', [
      mojo.internal.StructField('process_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ResponseParams', [
      mojo.internal.StructField('process_info', 0, 0, ash.cros_healthd.mojom.ProcessResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_Params', [
      mojo.internal.StructField('categories', 0, 0, mojo.internal.Array(ash.cros_healthd.mojom.ProbeCategoryEnumSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ResponseParams', [
      mojo.internal.StructField('telemetry_info', 0, 0, ash.cros_healthd.mojom.TelemetryInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_Params', [
      mojo.internal.StructField('process_ids', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, true, 0, undefined),
      mojo.internal.StructField('ignore_single_process_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ResponseParams', [
      mojo.internal.StructField('multiple_process_info', 0, 0, ash.cros_healthd.mojom.MultipleProcessResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cros_healthd.mojom.CrosHealthdProbeServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.CrosHealthdProbeServiceRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdProbeService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.CrosHealthdProbeServicePendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.CrosHealthdProbeServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.mojom.CrosHealthdProbeServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  probeProcessInfo(process_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ResponseParamsSpec,
      [process_id],
      false);
  }

  probeTelemetryInfo(categories) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ResponseParamsSpec,
      [categories],
      false);
  }

  probeMultipleProcessInfo(process_ids, ignore_single_process_error) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ResponseParamsSpec,
      [process_ids, ignore_single_process_error],
      false);
  }

};

ash.cros_healthd.mojom.CrosHealthdProbeService.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.CrosHealthdProbeServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdProbeService',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.CrosHealthdProbeServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.probeProcessInfo(params.process_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.probeTelemetryInfo(params.categories);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.probeMultipleProcessInfo(params.process_ids, params.ignore_single_process_error);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

ash.cros_healthd.mojom.CrosHealthdProbeServiceReceiver = ash.cros_healthd.mojom.CrosHealthdProbeServiceReceiver;

ash.cros_healthd.mojom.CrosHealthdProbeServicePtr = ash.cros_healthd.mojom.CrosHealthdProbeServiceRemote;
ash.cros_healthd.mojom.CrosHealthdProbeServiceRequest = ash.cros_healthd.mojom.CrosHealthdProbeServicePendingReceiver;

