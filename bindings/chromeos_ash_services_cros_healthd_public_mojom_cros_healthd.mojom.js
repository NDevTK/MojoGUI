// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd.mojom
// Module: ash.cros_healthd.mojom

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
  getAvailableRoutines() {
    return this.$.getAvailableRoutines();
  }
  getRoutineUpdate(id, command, include_output) {
    return this.$.getRoutineUpdate(id, command, include_output);
  }
  runUrandomRoutine(length_seconds) {
    return this.$.runUrandomRoutine(length_seconds);
  }
  runBatteryCapacityRoutine() {
    return this.$.runBatteryCapacityRoutine();
  }
  runBatteryHealthRoutine() {
    return this.$.runBatteryHealthRoutine();
  }
  runSmartctlCheckRoutine(percentage_used_threshold) {
    return this.$.runSmartctlCheckRoutine(percentage_used_threshold);
  }
  runAcPowerRoutine(expected_status, expected_power_type) {
    return this.$.runAcPowerRoutine(expected_status, expected_power_type);
  }
  runCpuCacheRoutine(length_seconds) {
    return this.$.runCpuCacheRoutine(length_seconds);
  }
  runCpuStressRoutine(length_seconds) {
    return this.$.runCpuStressRoutine(length_seconds);
  }
  runFloatingPointAccuracyRoutine(length_seconds) {
    return this.$.runFloatingPointAccuracyRoutine(length_seconds);
  }
  dEPRECATED_RunNvmeWearLevelRoutineWithThreshold(wear_level_threshold) {
    return this.$.dEPRECATED_RunNvmeWearLevelRoutineWithThreshold(wear_level_threshold);
  }
  dEPRECATED_RunNvmeWearLevelRoutine(wear_level_threshold) {
    return this.$.dEPRECATED_RunNvmeWearLevelRoutine(wear_level_threshold);
  }
  runNvmeSelfTestRoutine(nvme_self_test_type) {
    return this.$.runNvmeSelfTestRoutine(nvme_self_test_type);
  }
  runDiskReadRoutine(type, length_seconds, file_size_mb) {
    return this.$.runDiskReadRoutine(type, length_seconds, file_size_mb);
  }
  runPrimeSearchRoutine(length_seconds) {
    return this.$.runPrimeSearchRoutine(length_seconds);
  }
  runBatteryDischargeRoutine(length_seconds, maximum_discharge_percent_allowed) {
    return this.$.runBatteryDischargeRoutine(length_seconds, maximum_discharge_percent_allowed);
  }
  runBatteryChargeRoutine(length_seconds, minimum_charge_percent_required) {
    return this.$.runBatteryChargeRoutine(length_seconds, minimum_charge_percent_required);
  }
  runMemoryRoutine(max_testing_mem_kib) {
    return this.$.runMemoryRoutine(max_testing_mem_kib);
  }
  runLanConnectivityRoutine() {
    return this.$.runLanConnectivityRoutine();
  }
  runSignalStrengthRoutine() {
    return this.$.runSignalStrengthRoutine();
  }
  runGatewayCanBePingedRoutine() {
    return this.$.runGatewayCanBePingedRoutine();
  }
  runHasSecureWiFiConnectionRoutine() {
    return this.$.runHasSecureWiFiConnectionRoutine();
  }
  runDnsResolverPresentRoutine() {
    return this.$.runDnsResolverPresentRoutine();
  }
  runDnsLatencyRoutine() {
    return this.$.runDnsLatencyRoutine();
  }
  runDnsResolutionRoutine() {
    return this.$.runDnsResolutionRoutine();
  }
  runCaptivePortalRoutine() {
    return this.$.runCaptivePortalRoutine();
  }
  runHttpFirewallRoutine() {
    return this.$.runHttpFirewallRoutine();
  }
  runHttpsFirewallRoutine() {
    return this.$.runHttpsFirewallRoutine();
  }
  runHttpsLatencyRoutine() {
    return this.$.runHttpsLatencyRoutine();
  }
  runVideoConferencingRoutine(stun_server_hostname) {
    return this.$.runVideoConferencingRoutine(stun_server_hostname);
  }
  runArcHttpRoutine() {
    return this.$.runArcHttpRoutine();
  }
  runArcPingRoutine() {
    return this.$.runArcPingRoutine();
  }
  runArcDnsResolutionRoutine() {
    return this.$.runArcDnsResolutionRoutine();
  }
  runSensitiveSensorRoutine() {
    return this.$.runSensitiveSensorRoutine();
  }
  runFingerprintRoutine() {
    return this.$.runFingerprintRoutine();
  }
  runFingerprintAliveRoutine() {
    return this.$.runFingerprintAliveRoutine();
  }
  runPrivacyScreenRoutine(target_state) {
    return this.$.runPrivacyScreenRoutine(target_state);
  }
  dEPRECATED_RunLedLitUpRoutine(name, color, replier) {
    return this.$.dEPRECATED_RunLedLitUpRoutine(name, color, replier);
  }
  runEmmcLifetimeRoutine() {
    return this.$.runEmmcLifetimeRoutine();
  }
  dEPRECATED_RunAudioSetVolumeRoutine(node_id, volume, mute_on) {
    return this.$.dEPRECATED_RunAudioSetVolumeRoutine(node_id, volume, mute_on);
  }
  dEPRECATED_RunAudioSetGainRoutine(node_id, gain, deprecated_mute_on) {
    return this.$.dEPRECATED_RunAudioSetGainRoutine(node_id, gain, deprecated_mute_on);
  }
  runBluetoothPowerRoutine() {
    return this.$.runBluetoothPowerRoutine();
  }
  runBluetoothDiscoveryRoutine() {
    return this.$.runBluetoothDiscoveryRoutine();
  }
  runBluetoothScanningRoutine(length_seconds) {
    return this.$.runBluetoothScanningRoutine(length_seconds);
  }
  runBluetoothPairingRoutine(peripheral_id) {
    return this.$.runBluetoothPairingRoutine(peripheral_id);
  }
  runPowerButtonRoutine(timeout_seconds) {
    return this.$.runPowerButtonRoutine(timeout_seconds);
  }
  runAudioDriverRoutine() {
    return this.$.runAudioDriverRoutine();
  }
  runUfsLifetimeRoutine() {
    return this.$.runUfsLifetimeRoutine();
  }
  runFanRoutine() {
    return this.$.runFanRoutine();
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosHealthdDiagnosticsService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 32 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 21 },
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
      { explicit: 25 },
      { explicit: 26 },
      { explicit: 27 },
      { explicit: 28 },
      { explicit: 29 },
      { explicit: 30 },
      { explicit: 31 },
      { explicit: 33 },
      { explicit: 34 },
      { explicit: 35 },
      { explicit: 36 },
      { explicit: 37 },
      { explicit: 38 },
      { explicit: 39 },
      { explicit: 40 },
      { explicit: 41 },
      { explicit: 42 },
      { explicit: 43 },
      { explicit: 44 },
      { explicit: 45 },
      { explicit: 46 },
      { explicit: 47 },
      { explicit: 48 },
    ]);
  }

  getAvailableRoutines() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ResponseParamsSpec,
      [],
      false);
  }

  getRoutineUpdate(id, command, include_output) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ResponseParamsSpec,
      [id, command, include_output],
      false);
  }

  runUrandomRoutine(length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runBatteryCapacityRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBatteryHealthRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSmartctlCheckRoutine(percentage_used_threshold) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec,
      [percentage_used_threshold],
      false);
  }

  runAcPowerRoutine(expected_status, expected_power_type) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec,
      [expected_status, expected_power_type],
      false);
  }

  runCpuCacheRoutine(length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runCpuStressRoutine(length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runFloatingPointAccuracyRoutine(length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  dEPRECATED_RunNvmeWearLevelRoutineWithThreshold(wear_level_threshold) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ResponseParamsSpec,
      [wear_level_threshold],
      false);
  }

  dEPRECATED_RunNvmeWearLevelRoutine(wear_level_threshold) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec,
      [wear_level_threshold],
      false);
  }

  runNvmeSelfTestRoutine(nvme_self_test_type) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec,
      [nvme_self_test_type],
      false);
  }

  runDiskReadRoutine(type, length_seconds, file_size_mb) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec,
      [type, length_seconds, file_size_mb],
      false);
  }

  runPrimeSearchRoutine(length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runBatteryDischargeRoutine(length_seconds, maximum_discharge_percent_allowed) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec,
      [length_seconds, maximum_discharge_percent_allowed],
      false);
  }

  runBatteryChargeRoutine(length_seconds, minimum_charge_percent_required) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec,
      [length_seconds, minimum_charge_percent_required],
      false);
  }

  runMemoryRoutine(max_testing_mem_kib) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ResponseParamsSpec,
      [max_testing_mem_kib],
      false);
  }

  runLanConnectivityRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSignalStrengthRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runGatewayCanBePingedRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runHasSecureWiFiConnectionRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runDnsResolverPresentRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runDnsLatencyRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runDnsResolutionRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runCaptivePortalRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runHttpFirewallRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runHttpsFirewallRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runHttpsLatencyRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runVideoConferencingRoutine(stun_server_hostname) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ResponseParamsSpec,
      [stun_server_hostname],
      false);
  }

  runArcHttpRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runArcPingRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runArcDnsResolutionRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSensitiveSensorRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runFingerprintRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runFingerprintAliveRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runPrivacyScreenRoutine(target_state) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ResponseParamsSpec,
      [target_state],
      false);
  }

  dEPRECATED_RunLedLitUpRoutine(name, color, replier) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ResponseParamsSpec,
      [name, color, replier],
      false);
  }

  runEmmcLifetimeRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec,
      [],
      false);
  }

  dEPRECATED_RunAudioSetVolumeRoutine(node_id, volume, mute_on) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ResponseParamsSpec,
      [node_id, volume, mute_on],
      false);
  }

  dEPRECATED_RunAudioSetGainRoutine(node_id, gain, deprecated_mute_on) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ResponseParamsSpec,
      [node_id, gain, deprecated_mute_on],
      false);
  }

  runBluetoothPowerRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBluetoothDiscoveryRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBluetoothScanningRoutine(length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runBluetoothPairingRoutine(peripheral_id) {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec,
      [peripheral_id],
      false);
  }

  runPowerButtonRoutine(timeout_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec,
      [timeout_seconds],
      false);
  }

  runAudioDriverRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runUfsLifetimeRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runFanRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosHealthdDiagnosticsService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 32 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 21 },
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
      { explicit: 25 },
      { explicit: 26 },
      { explicit: 27 },
      { explicit: 28 },
      { explicit: 29 },
      { explicit: 30 },
      { explicit: 31 },
      { explicit: 33 },
      { explicit: 34 },
      { explicit: 35 },
      { explicit: 36 },
      { explicit: 37 },
      { explicit: 38 },
      { explicit: 39 },
      { explicit: 40 },
      { explicit: 41 },
      { explicit: 42 },
      { explicit: 43 },
      { explicit: 44 },
      { explicit: 45 },
      { explicit: 46 },
      { explicit: 47 },
      { explicit: 48 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ParamsSpec);
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ParamsSpec.$.structSpec);
          const result = this.impl.getAvailableRoutines();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.getRoutineUpdate(params.id, params.command, params.include_output);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runUrandomRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runBatteryCapacityRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runBatteryHealthRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runSmartctlCheckRoutine(params.percentage_used_threshold);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runAcPowerRoutine(params.expected_status, params.expected_power_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runCpuCacheRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runCpuStressRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runFloatingPointAccuracyRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ParamsSpec.$.structSpec);
          const result = this.impl.dEPRECATED_RunNvmeWearLevelRoutineWithThreshold(params.wear_level_threshold);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.dEPRECATED_RunNvmeWearLevelRoutine(params.wear_level_threshold);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runNvmeSelfTestRoutine(params.nvme_self_test_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runDiskReadRoutine(params.type, params.length_seconds, params.file_size_mb);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runPrimeSearchRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runBatteryDischargeRoutine(params.length_seconds, params.maximum_discharge_percent_allowed);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runBatteryChargeRoutine(params.length_seconds, params.minimum_charge_percent_required);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runMemoryRoutine(params.max_testing_mem_kib);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runLanConnectivityRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runSignalStrengthRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runGatewayCanBePingedRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runHasSecureWiFiConnectionRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runDnsResolverPresentRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runDnsLatencyRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runDnsResolutionRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runCaptivePortalRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runHttpFirewallRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runHttpsFirewallRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runHttpsLatencyRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runVideoConferencingRoutine(params.stun_server_hostname);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runArcHttpRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runArcPingRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runArcDnsResolutionRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runSensitiveSensorRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runFingerprintRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runFingerprintAliveRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runPrivacyScreenRoutine(params.target_state);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.dEPRECATED_RunLedLitUpRoutine(params.name, params.color, params.replier);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runEmmcLifetimeRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.dEPRECATED_RunAudioSetVolumeRoutine(params.node_id, params.volume, params.mute_on);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.dEPRECATED_RunAudioSetGainRoutine(params.node_id, params.gain, params.deprecated_mute_on);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runBluetoothPowerRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runBluetoothDiscoveryRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runBluetoothScanningRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runBluetoothPairingRoutine(params.peripheral_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runPowerButtonRoutine(params.timeout_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runAudioDriverRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runUfsLifetimeRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ParamsSpec.$.structSpec);
          const result = this.impl.runFanRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
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
  dEPRECATED_AddBluetoothObserver(observer) {
    return this.$.dEPRECATED_AddBluetoothObserver(observer);
  }
  dEPRECATED_AddLidObserver(observer) {
    return this.$.dEPRECATED_AddLidObserver(observer);
  }
  dEPRECATED_AddPowerObserver(observer) {
    return this.$.dEPRECATED_AddPowerObserver(observer);
  }
  addNetworkObserver(observer) {
    return this.$.addNetworkObserver(observer);
  }
  dEPRECATED_AddAudioObserver(observer) {
    return this.$.dEPRECATED_AddAudioObserver(observer);
  }
  dEPRECATED_AddThunderboltObserver(observer) {
    return this.$.dEPRECATED_AddThunderboltObserver(observer);
  }
  dEPRECATED_AddUsbObserver(observer) {
    return this.$.dEPRECATED_AddUsbObserver(observer);
  }
  addEventObserver(category, observer) {
    return this.$.addEventObserver(category, observer);
  }
  isEventSupported(category) {
    return this.$.isEventSupported(category);
  }
};

ash.cros_healthd.mojom.CrosHealthdEventServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosHealthdEventService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
    ]);
  }

  dEPRECATED_AddBluetoothObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddBluetoothObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  dEPRECATED_AddLidObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  dEPRECATED_AddPowerObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  addNetworkObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  dEPRECATED_AddAudioObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  dEPRECATED_AddThunderboltObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  dEPRECATED_AddUsbObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  addEventObserver(category, observer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_ParamsSpec,
      null,
      [category, observer],
      false);
  }

  isEventSupported(category) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosHealthdEventService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddBluetoothObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddBluetoothObserver_ParamsSpec.$.structSpec);
          const result = this.impl.dEPRECATED_AddBluetoothObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_ParamsSpec.$.structSpec);
          const result = this.impl.dEPRECATED_AddLidObserver(params.observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_ParamsSpec.$.structSpec);
          const result = this.impl.dEPRECATED_AddPowerObserver(params.observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addNetworkObserver(params.observer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_ParamsSpec.$.structSpec);
          const result = this.impl.dEPRECATED_AddAudioObserver(params.observer);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_ParamsSpec.$.structSpec);
          const result = this.impl.dEPRECATED_AddThunderboltObserver(params.observer);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_ParamsSpec.$.structSpec);
          const result = this.impl.dEPRECATED_AddUsbObserver(params.observer);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addEventObserver(params.category, params.observer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ParamsSpec.$.structSpec);
          const result = this.impl.isEventSupported(params.category);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
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
  probeProcessInfo(process_id) {
    return this.$.probeProcessInfo(process_id);
  }
  probeTelemetryInfo(categories) {
    return this.$.probeTelemetryInfo(categories);
  }
  probeMultipleProcessInfo(process_ids, ignore_single_process_error) {
    return this.$.probeMultipleProcessInfo(process_ids, ignore_single_process_error);
  }
};

ash.cros_healthd.mojom.CrosHealthdProbeServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosHealthdProbeService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  probeProcessInfo(process_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ResponseParamsSpec,
      [process_id],
      false);
  }

  probeTelemetryInfo(categories) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ResponseParamsSpec,
      [categories],
      false);
  }

  probeMultipleProcessInfo(process_ids, ignore_single_process_error) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosHealthdProbeService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ParamsSpec.$.structSpec);
          const result = this.impl.probeProcessInfo(params.process_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ParamsSpec.$.structSpec);
          const result = this.impl.probeTelemetryInfo(params.categories);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ParamsSpec.$.structSpec);
          const result = this.impl.probeMultipleProcessInfo(params.process_ids, params.ignore_single_process_error);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.cros_healthd.mojom.CrosHealthdProbeServiceReceiver = ash.cros_healthd.mojom.CrosHealthdProbeServiceReceiver;

ash.cros_healthd.mojom.CrosHealthdProbeServicePtr = ash.cros_healthd.mojom.CrosHealthdProbeServiceRemote;
ash.cros_healthd.mojom.CrosHealthdProbeServiceRequest = ash.cros_healthd.mojom.CrosHealthdProbeServicePendingReceiver;

