// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};


// Interface: CrosHealthdDiagnosticsService
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService = {};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'command', packedOffset: 4, packedBitOffset: 0, type: ash.cros_healthd.mojom.DiagnosticRoutineCommandEnumSpec, nullable: false, minVersion: 0 },
        { name: 'include_output', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'percentage_used_threshold', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 6 },
      ],
      versions: [{version: 6, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_Params',
      packedSize: 24,
      fields: [
        { name: 'expected_status', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.AcPowerStatusEnumSpec, nullable: false, minVersion: 0 },
        { name: 'expected_power_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_Params',
      packedSize: 16,
      fields: [
        { name: 'wear_level_threshold', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'wear_level_threshold', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'nvme_self_test_type', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NvmeSelfTestTypeEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.DiskReadRoutineTypeEnumSpec, nullable: false, minVersion: 0 },
        { name: 'length_seconds', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'file_size_mb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maximum_discharge_percent_allowed', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'minimum_charge_percent_required', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'max_testing_mem_kib_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 10, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'max_testing_mem_kib_$value', originalFieldName: 'max_testing_mem_kib' } },
        { name: 'max_testing_mem_kib_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 10, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'max_testing_mem_kib_$flag', originalFieldName: 'max_testing_mem_kib' } },
      ],
      versions: [{version: 10, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'stun_server_hostname', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'target_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.DEPRECATED_LedNameSpec, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 12, packedBitOffset: 0, type: ash.cros_healthd.mojom.DEPRECATED_LedColorSpec, nullable: false, minVersion: 0 },
        { name: 'replier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_Params',
      packedSize: 24,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'volume', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'mute_on', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_Params',
      packedSize: 24,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'gain', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'deprecated_mute_on', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'peripheral_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'timeout_seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      []);
  }

  getRoutineUpdate(id, command, include_output) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ResponseParamsSpec,
      [id, command, include_output]);
  }

  runUrandomRoutine(length_seconds) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ResponseParamsSpec,
      [length_seconds]);
  }

  runBatteryCapacityRoutine() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec,
      []);
  }

  runBatteryHealthRoutine() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec,
      []);
  }

  runSmartctlCheckRoutine(percentage_used_threshold) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec,
      [percentage_used_threshold]);
  }

  runAcPowerRoutine(expected_status, expected_power_type) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec,
      [expected_status, expected_power_type]);
  }

  runCpuCacheRoutine(length_seconds) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec,
      [length_seconds]);
  }

  runCpuStressRoutine(length_seconds) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec,
      [length_seconds]);
  }

  runFloatingPointAccuracyRoutine(length_seconds) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec,
      [length_seconds]);
  }

  dEPRECATED_RunNvmeWearLevelRoutineWithThreshold(wear_level_threshold) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ResponseParamsSpec,
      [wear_level_threshold]);
  }

  dEPRECATED_RunNvmeWearLevelRoutine(wear_level_threshold) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec,
      [wear_level_threshold]);
  }

  runNvmeSelfTestRoutine(nvme_self_test_type) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec,
      [nvme_self_test_type]);
  }

  runDiskReadRoutine(type, length_seconds, file_size_mb) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec,
      [type, length_seconds, file_size_mb]);
  }

  runPrimeSearchRoutine(length_seconds) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec,
      [length_seconds]);
  }

  runBatteryDischargeRoutine(length_seconds, maximum_discharge_percent_allowed) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec,
      [length_seconds, maximum_discharge_percent_allowed]);
  }

  runBatteryChargeRoutine(length_seconds, minimum_charge_percent_required) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec,
      [length_seconds, minimum_charge_percent_required]);
  }

  runMemoryRoutine(max_testing_mem_kib) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ResponseParamsSpec,
      [max_testing_mem_kib]);
  }

  runLanConnectivityRoutine() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec,
      []);
  }

  runSignalStrengthRoutine() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec,
      []);
  }

  runGatewayCanBePingedRoutine() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec,
      []);
  }

  runHasSecureWiFiConnectionRoutine() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ResponseParamsSpec,
      []);
  }

  runDnsResolverPresentRoutine() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec,
      []);
  }

  runDnsLatencyRoutine() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ResponseParamsSpec,
      []);
  }

  runDnsResolutionRoutine() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec,
      []);
  }

  runCaptivePortalRoutine() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ResponseParamsSpec,
      []);
  }

  runHttpFirewallRoutine() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ResponseParamsSpec,
      []);
  }

  runHttpsFirewallRoutine() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ResponseParamsSpec,
      []);
  }

  runHttpsLatencyRoutine() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ResponseParamsSpec,
      []);
  }

  runVideoConferencingRoutine(stun_server_hostname) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ResponseParamsSpec,
      [stun_server_hostname]);
  }

  runArcHttpRoutine() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ResponseParamsSpec,
      []);
  }

  runArcPingRoutine() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ResponseParamsSpec,
      []);
  }

  runArcDnsResolutionRoutine() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ResponseParamsSpec,
      []);
  }

  runSensitiveSensorRoutine() {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec,
      []);
  }

  runFingerprintRoutine() {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ResponseParamsSpec,
      []);
  }

  runFingerprintAliveRoutine() {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec,
      []);
  }

  runPrivacyScreenRoutine(target_state) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ResponseParamsSpec,
      [target_state]);
  }

  dEPRECATED_RunLedLitUpRoutine(name, color, replier) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ResponseParamsSpec,
      [name, color, replier]);
  }

  runEmmcLifetimeRoutine() {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec,
      []);
  }

  dEPRECATED_RunAudioSetVolumeRoutine(node_id, volume, mute_on) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ResponseParamsSpec,
      [node_id, volume, mute_on]);
  }

  dEPRECATED_RunAudioSetGainRoutine(node_id, gain, deprecated_mute_on) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ResponseParamsSpec,
      [node_id, gain, deprecated_mute_on]);
  }

  runBluetoothPowerRoutine() {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec,
      []);
  }

  runBluetoothDiscoveryRoutine() {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec,
      []);
  }

  runBluetoothScanningRoutine(length_seconds) {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec,
      [length_seconds]);
  }

  runBluetoothPairingRoutine(peripheral_id) {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec,
      [peripheral_id]);
  }

  runPowerButtonRoutine(timeout_seconds) {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec,
      [timeout_seconds]);
  }

  runAudioDriverRoutine() {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec,
      []);
  }

  runUfsLifetimeRoutine() {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec,
      []);
  }

  runFanRoutine() {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ResponseParamsSpec,
      []);
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

// ParamsSpec for GetAvailableRoutines
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.GetAvailableRoutines_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.GetAvailableRoutines_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'available_routines', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.DiagnosticRoutineEnumSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRoutineUpdate
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.GetRoutineUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'command', packedOffset: 4, packedBitOffset: 0, type: ash.cros_healthd.mojom.DiagnosticRoutineCommandEnumSpec, nullable: false, minVersion: 0 },
        { name: 'include_output', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.GetRoutineUpdate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'routine_update', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RoutineUpdateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunUrandomRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunUrandomRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunUrandomRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunBatteryCapacityRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunBatteryCapacityRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunBatteryCapacityRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunBatteryHealthRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunBatteryHealthRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunBatteryHealthRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunSmartctlCheckRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunSmartctlCheckRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'percentage_used_threshold', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 6 },
      ],
      versions: [{version: 6, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunSmartctlCheckRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunAcPowerRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunAcPowerRoutine_Params',
      packedSize: 24,
      fields: [
        { name: 'expected_status', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.AcPowerStatusEnumSpec, nullable: false, minVersion: 0 },
        { name: 'expected_power_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunAcPowerRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunCpuCacheRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunCpuCacheRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunCpuCacheRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunCpuStressRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunCpuStressRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunCpuStressRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunFloatingPointAccuracyRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunFloatingPointAccuracyRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunFloatingPointAccuracyRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_RunNvmeWearLevelRoutineWithThreshold
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_Params',
      packedSize: 16,
      fields: [
        { name: 'wear_level_threshold', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_RunNvmeWearLevelRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.DEPRECATED_RunNvmeWearLevelRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'wear_level_threshold', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.DEPRECATED_RunNvmeWearLevelRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunNvmeSelfTestRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunNvmeSelfTestRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'nvme_self_test_type', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NvmeSelfTestTypeEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunNvmeSelfTestRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunDiskReadRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunDiskReadRoutine_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.DiskReadRoutineTypeEnumSpec, nullable: false, minVersion: 0 },
        { name: 'length_seconds', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'file_size_mb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunDiskReadRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunPrimeSearchRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunPrimeSearchRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunPrimeSearchRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunBatteryDischargeRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunBatteryDischargeRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maximum_discharge_percent_allowed', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunBatteryDischargeRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunBatteryChargeRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunBatteryChargeRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'minimum_charge_percent_required', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunBatteryChargeRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunMemoryRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunMemoryRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'max_testing_mem_kib_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 10, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'max_testing_mem_kib_$value', originalFieldName: 'max_testing_mem_kib' } },
        { name: 'max_testing_mem_kib_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 10, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'max_testing_mem_kib_$flag', originalFieldName: 'max_testing_mem_kib' } },
      ],
      versions: [{version: 10, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunMemoryRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunLanConnectivityRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunLanConnectivityRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunLanConnectivityRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunSignalStrengthRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunSignalStrengthRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunSignalStrengthRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunGatewayCanBePingedRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunGatewayCanBePingedRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunGatewayCanBePingedRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunHasSecureWiFiConnectionRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunHasSecureWiFiConnectionRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunHasSecureWiFiConnectionRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunDnsResolverPresentRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunDnsResolverPresentRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunDnsResolverPresentRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunDnsLatencyRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunDnsLatencyRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunDnsLatencyRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunDnsResolutionRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunDnsResolutionRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunDnsResolutionRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunCaptivePortalRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunCaptivePortalRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunCaptivePortalRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunHttpFirewallRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunHttpFirewallRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunHttpFirewallRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunHttpsFirewallRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunHttpsFirewallRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunHttpsFirewallRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunHttpsLatencyRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunHttpsLatencyRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunHttpsLatencyRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunVideoConferencingRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunVideoConferencingRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'stun_server_hostname', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunVideoConferencingRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunArcHttpRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunArcHttpRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunArcHttpRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunArcPingRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunArcPingRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunArcPingRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunArcDnsResolutionRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunArcDnsResolutionRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunArcDnsResolutionRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunSensitiveSensorRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunSensitiveSensorRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunSensitiveSensorRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunFingerprintRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunFingerprintRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunFingerprintRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunFingerprintAliveRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunFingerprintAliveRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunFingerprintAliveRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunPrivacyScreenRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunPrivacyScreenRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'target_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunPrivacyScreenRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_RunLedLitUpRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.DEPRECATED_RunLedLitUpRoutine_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.DEPRECATED_LedNameSpec, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 12, packedBitOffset: 0, type: ash.cros_healthd.mojom.DEPRECATED_LedColorSpec, nullable: false, minVersion: 0 },
        { name: 'replier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.DEPRECATED_RunLedLitUpRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunEmmcLifetimeRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunEmmcLifetimeRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunEmmcLifetimeRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_RunAudioSetVolumeRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.DEPRECATED_RunAudioSetVolumeRoutine_Params',
      packedSize: 24,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'volume', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'mute_on', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.DEPRECATED_RunAudioSetVolumeRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_RunAudioSetGainRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.DEPRECATED_RunAudioSetGainRoutine_Params',
      packedSize: 24,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'gain', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'deprecated_mute_on', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.DEPRECATED_RunAudioSetGainRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunBluetoothPowerRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunBluetoothPowerRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunBluetoothPowerRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunBluetoothDiscoveryRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunBluetoothDiscoveryRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunBluetoothDiscoveryRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunBluetoothScanningRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunBluetoothScanningRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'length_seconds', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunBluetoothScanningRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunBluetoothPairingRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunBluetoothPairingRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'peripheral_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunBluetoothPairingRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunPowerButtonRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunPowerButtonRoutine_Params',
      packedSize: 16,
      fields: [
        { name: 'timeout_seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunPowerButtonRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunAudioDriverRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunAudioDriverRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunAudioDriverRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunUfsLifetimeRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunUfsLifetimeRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunUfsLifetimeRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunFanRoutine
ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunFanRoutine_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.RunFanRoutine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RunRoutineResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdDiagnosticsServicePtr = ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRemote;
ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRequest = ash.cros_healthd.mojom.CrosHealthdDiagnosticsServicePendingReceiver;


// Interface: CrosHealthdEventService
ash.cros_healthd.mojom.CrosHealthdEventService = {};

ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddBluetoothObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddBluetoothObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdBluetoothObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdLidObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdPowerObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.network_health.mojom.NetworkEventsObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdAudioObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdThunderboltObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdUsbObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_Params',
      packedSize: 24,
      fields: [
        { name: 'category', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.EventCategoryEnumSpec, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.EventObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_Params',
      packedSize: 16,
      fields: [
        { name: 'category', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.EventCategoryEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [observer]);
  }

  dEPRECATED_AddLidObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_ParamsSpec,
      null,
      [observer]);
  }

  dEPRECATED_AddPowerObserver(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_ParamsSpec,
      null,
      [observer]);
  }

  addNetworkObserver(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_ParamsSpec,
      null,
      [observer]);
  }

  dEPRECATED_AddAudioObserver(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_ParamsSpec,
      null,
      [observer]);
  }

  dEPRECATED_AddThunderboltObserver(observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_ParamsSpec,
      null,
      [observer]);
  }

  dEPRECATED_AddUsbObserver(observer) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_ParamsSpec,
      null,
      [observer]);
  }

  addEventObserver(category, observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_ParamsSpec,
      null,
      [category, observer]);
  }

  isEventSupported(category) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ResponseParamsSpec,
      [category]);
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

// ParamsSpec for DEPRECATED_AddBluetoothObserver
ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddBluetoothObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService.DEPRECATED_AddBluetoothObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdBluetoothObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_AddLidObserver
ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService.DEPRECATED_AddLidObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdLidObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_AddPowerObserver
ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService.DEPRECATED_AddPowerObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdPowerObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddNetworkObserver
ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService.AddNetworkObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.network_health.mojom.NetworkEventsObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_AddAudioObserver
ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService.DEPRECATED_AddAudioObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdAudioObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_AddThunderboltObserver
ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService.DEPRECATED_AddThunderboltObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdThunderboltObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_AddUsbObserver
ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService.DEPRECATED_AddUsbObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.CrosHealthdUsbObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddEventObserver
ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService.AddEventObserver_Params',
      packedSize: 24,
      fields: [
        { name: 'category', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.EventCategoryEnumSpec, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.EventObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for IsEventSupported
ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService.IsEventSupported_Params',
      packedSize: 16,
      fields: [
        { name: 'category', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.EventCategoryEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdEventService.IsEventSupported_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.SupportStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdEventServicePtr = ash.cros_healthd.mojom.CrosHealthdEventServiceRemote;
ash.cros_healthd.mojom.CrosHealthdEventServiceRequest = ash.cros_healthd.mojom.CrosHealthdEventServicePendingReceiver;


// Interface: CrosHealthdProbeService
ash.cros_healthd.mojom.CrosHealthdProbeService = {};

ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'process_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'categories', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.ProbeCategoryEnumSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_Params',
      packedSize: 24,
      fields: [
        { name: 'process_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: true, minVersion: 0 },
        { name: 'ignore_single_process_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [process_id]);
  }

  probeTelemetryInfo(categories) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ResponseParamsSpec,
      [categories]);
  }

  probeMultipleProcessInfo(process_ids, ignore_single_process_error) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ResponseParamsSpec,
      [process_ids, ignore_single_process_error]);
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

// ParamsSpec for ProbeProcessInfo
ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdProbeService.ProbeProcessInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'process_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdProbeService.ProbeProcessInfo_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'process_info', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.ProcessResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ProbeTelemetryInfo
ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdProbeService.ProbeTelemetryInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'categories', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.ProbeCategoryEnumSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdProbeService.ProbeTelemetryInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'telemetry_info', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.TelemetryInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ProbeMultipleProcessInfo
ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdProbeService.ProbeMultipleProcessInfo_Params',
      packedSize: 24,
      fields: [
        { name: 'process_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: true, minVersion: 0 },
        { name: 'ignore_single_process_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdProbeService.ProbeMultipleProcessInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'multiple_process_info', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.MultipleProcessResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdProbeServicePtr = ash.cros_healthd.mojom.CrosHealthdProbeServiceRemote;
ash.cros_healthd.mojom.CrosHealthdProbeServiceRequest = ash.cros_healthd.mojom.CrosHealthdProbeServicePendingReceiver;

