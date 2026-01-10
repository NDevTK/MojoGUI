// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_routines.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};


// Enum: ButtonType
ash.cros_healthd.mojom.ButtonType = {
  kVolumeUp: 0,
  kVolumeDown: 1,
};
ash.cros_healthd.mojom.ButtonTypeSpec = { $: mojo.internal.Enum() };

// Enum: Type
ash.cros_healthd.mojom.Type = {
  kDownload: 0,
  kUpload: 1,
};
ash.cros_healthd.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Enum: Reason
ash.cros_healthd.mojom.Reason = {
  kWaitingToBeScheduled: 0,
  kWaitingInteraction: 1,
};
ash.cros_healthd.mojom.ReasonSpec = { $: mojo.internal.Enum() };

// Enum: State
ash.cros_healthd.mojom.State = {
  kCorrectColor: 0,
  kNotLitUp: 1,
};
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: State
ash.cros_healthd.mojom.State = {
  kOk: 0,
  kAnyNotLitUp: 1,
};
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: MemtesterTestItemEnum
ash.cros_healthd.mojom.MemtesterTestItemEnum = {
  kUnknown: 0,
  kStuckAddress: 1,
  kCompareAND: 2,
  kCompareDIV: 3,
  kCompareMUL: 4,
  kCompareOR: 5,
  kCompareSUB: 6,
  kCompareXOR: 7,
  kSequentialIncrement: 8,
  kBitFlip: 9,
  kBitSpread: 10,
  kBlockSequential: 11,
  kCheckerboard: 12,
  kRandomValue: 13,
  kSolidBits: 14,
  kWalkingOnes: 15,
  kWalkingZeroes: 16,
  k8BitWrites: 17,
  k16BitWrites: 18,
};
ash.cros_healthd.mojom.MemtesterTestItemEnumSpec = { $: mojo.internal.Enum() };

// Enum: PairError
ash.cros_healthd.mojom.PairError = {
  kNone: 0,
  kBondFailed: 1,
  kBadStatus: 2,
  kSspFailed: 3,
  kTimeout: 4,
};
ash.cros_healthd.mojom.PairErrorSpec = { $: mojo.internal.Enum() };

// Enum: ConnectError
ash.cros_healthd.mojom.ConnectError = {
  kNone: 0,
  kNoConnectedEvent: 1,
  kNotConnected: 2,
};
ash.cros_healthd.mojom.ConnectErrorSpec = { $: mojo.internal.Enum() };

// Enum: AddressType
ash.cros_healthd.mojom.AddressType = {
  kUnknown: 0,
  kPublic: 1,
  kRandom: 2,
};
ash.cros_healthd.mojom.AddressTypeSpec = { $: mojo.internal.Enum() };

// Enum: CameraSubtestResult
ash.cros_healthd.mojom.CameraSubtestResult = {
  kNotRun: 0,
  kPassed: 1,
  kFailed: 2,
};
ash.cros_healthd.mojom.CameraSubtestResultSpec = { $: mojo.internal.Enum() };

// Enum: DiskReadTypeEnum
ash.cros_healthd.mojom.DiskReadTypeEnum = {
  kLinearRead: 0,
  kRandomRead: 1,
};
ash.cros_healthd.mojom.DiskReadTypeEnumSpec = { $: mojo.internal.Enum() };

// Enum: LedName
ash.cros_healthd.mojom.LedName = {
  kBattery: 0,
  kPower: 1,
  kAdapter: 2,
  kLeft: 3,
  kRight: 4,
};
ash.cros_healthd.mojom.LedNameSpec = { $: mojo.internal.Enum() };

// Enum: LedColor
ash.cros_healthd.mojom.LedColor = {
  kRed: 0,
  kGreen: 1,
  kBlue: 2,
  kYellow: 3,
  kWhite: 4,
  kAmber: 5,
};
ash.cros_healthd.mojom.LedColorSpec = { $: mojo.internal.Enum() };

// Enum: HardwarePresenceStatus
ash.cros_healthd.mojom.HardwarePresenceStatus = {
  kMatched: 0,
  kNotMatched: 1,
  kNotConfigured: 2,
};
ash.cros_healthd.mojom.HardwarePresenceStatusSpec = { $: mojo.internal.Enum() };

// Enum: Type
ash.cros_healthd.mojom.Type = {
  kAccel: 0,
  kGyro: 1,
  kMagn: 2,
  kGravity: 3,
};
ash.cros_healthd.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Enum: Issue
ash.cros_healthd.mojom.Issue = {
  kNone: 0,
  kCameraServiceNotAvailable: 1,
  kBlockedByPrivacyShutter: 2,
  kLensAreDirty: 3,
};
ash.cros_healthd.mojom.IssueSpec = { $: mojo.internal.Enum() };

// Union: RoutineArgument
ash.cros_healthd.mojom.RoutineArgumentSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.RoutineArgument', {
      'unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'memory': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.MemoryRoutineArgumentSpec,
      }},
      'volume_button': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.VolumeButtonRoutineArgumentSpec,
      }},
      'fan': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.FanRoutineArgumentSpec,
      }},
      'audio_driver': {
        'ordinal': 4,
        'type': ash.cros_healthd.mojom.AudioDriverRoutineArgumentSpec,
      }},
      'cpu_stress': {
        'ordinal': 5,
        'type': ash.cros_healthd.mojom.CpuStressRoutineArgumentSpec,
      }},
      'ufs_lifetime': {
        'ordinal': 6,
        'type': ash.cros_healthd.mojom.UfsLifetimeRoutineArgumentSpec,
      }},
      'disk_read': {
        'ordinal': 7,
        'type': ash.cros_healthd.mojom.DiskReadRoutineArgumentSpec,
      }},
      'cpu_cache': {
        'ordinal': 8,
        'type': ash.cros_healthd.mojom.CpuCacheRoutineArgumentSpec,
      }},
      'prime_search': {
        'ordinal': 9,
        'type': ash.cros_healthd.mojom.PrimeSearchRoutineArgumentSpec,
      }},
      'led_lit_up': {
        'ordinal': 10,
        'type': ash.cros_healthd.mojom.LedLitUpRoutineArgumentSpec,
      }},
      'floating_point': {
        'ordinal': 11,
        'type': ash.cros_healthd.mojom.FloatingPointRoutineArgumentSpec,
      }},
      'bluetooth_power': {
        'ordinal': 12,
        'type': ash.cros_healthd.mojom.BluetoothPowerRoutineArgumentSpec,
      }},
      'bluetooth_discovery': {
        'ordinal': 13,
        'type': ash.cros_healthd.mojom.BluetoothDiscoveryRoutineArgumentSpec,
      }},
      'bluetooth_scanning': {
        'ordinal': 14,
        'type': ash.cros_healthd.mojom.BluetoothScanningRoutineArgumentSpec,
      }},
      'bluetooth_pairing': {
        'ordinal': 15,
        'type': ash.cros_healthd.mojom.BluetoothPairingRoutineArgumentSpec,
      }},
      'camera_availability': {
        'ordinal': 16,
        'type': ash.cros_healthd.mojom.CameraAvailabilityRoutineArgumentSpec,
      }},
      'urandom': {
        'ordinal': 17,
        'type': ash.cros_healthd.mojom.UrandomRoutineArgumentSpec,
      }},
      'network_bandwidth': {
        'ordinal': 18,
        'type': ash.cros_healthd.mojom.NetworkBandwidthRoutineArgumentSpec,
      }},
      'sensitive_sensor': {
        'ordinal': 19,
        'type': ash.cros_healthd.mojom.SensitiveSensorRoutineArgumentSpec,
      }},
      'camera_frame_analysis': {
        'ordinal': 20,
        'type': ash.cros_healthd.mojom.CameraFrameAnalysisRoutineArgumentSpec,
      }},
      'battery_discharge': {
        'ordinal': 21,
        'type': ash.cros_healthd.mojom.BatteryDischargeRoutineArgumentSpec,
      }},
      'keyboard_backlight': {
        'ordinal': 22,
        'type': ash.cros_healthd.mojom.KeyboardBacklightRoutineArgumentSpec,
      }},
    })
};

// Union: RoutineStateUnion
ash.cros_healthd.mojom.RoutineStateUnionSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.RoutineStateUnion', {
      'unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'initialized': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.RoutineStateInitializedSpec,
      }},
      'running': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.RoutineStateRunningSpec,
      }},
      'waiting': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.RoutineStateWaitingSpec,
      }},
      'finished': {
        'ordinal': 4,
        'type': ash.cros_healthd.mojom.RoutineStateFinishedSpec,
      }},
    })
};

// Union: RoutineRunningInfo
ash.cros_healthd.mojom.RoutineRunningInfoSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.RoutineRunningInfo', {
      'unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'network_bandwidth': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.NetworkBandwidthRoutineRunningInfoSpec,
      }},
    })
};

// Union: RoutineInteraction
ash.cros_healthd.mojom.RoutineInteractionSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.RoutineInteraction', {
      'unrecognizedInteraction': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'inquiry': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.RoutineInquirySpec,
      }},
    })
};

// Union: RoutineInquiry
ash.cros_healthd.mojom.RoutineInquirySpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.RoutineInquiry', {
      'unrecognizedInquiry': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'check_led_lit_up_state': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.CheckLedLitUpStateInquirySpec,
      }},
      'unplug_ac_adapter_inquiry': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.UnplugAcAdapterInquirySpec,
      }},
      'check_keyboard_backlight_state': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.CheckKeyboardBacklightStateInquirySpec,
      }},
    })
};

// Union: RoutineInquiryReply
ash.cros_healthd.mojom.RoutineInquiryReplySpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.RoutineInquiryReply', {
      'unrecognizedReply': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'check_led_lit_up_state': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.CheckLedLitUpStateReplySpec,
      }},
      'unplug_ac_adapter': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.UnplugAcAdapterReplySpec,
      }},
      'check_keyboard_backlight_state': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.CheckKeyboardBacklightStateReplySpec,
      }},
    })
};

// Union: RoutineDetail
ash.cros_healthd.mojom.RoutineDetailSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.RoutineDetail', {
      'unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'memory': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.MemoryRoutineDetailSpec,
      }},
      'fan': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.FanRoutineDetailSpec,
      }},
      'audio_driver': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.AudioDriverRoutineDetailSpec,
      }},
      'ufs_lifetime': {
        'ordinal': 4,
        'type': ash.cros_healthd.mojom.UfsLifetimeRoutineDetailSpec,
      }},
      'bluetooth_power': {
        'ordinal': 5,
        'type': ash.cros_healthd.mojom.BluetoothPowerRoutineDetailSpec,
      }},
      'bluetooth_discovery': {
        'ordinal': 6,
        'type': ash.cros_healthd.mojom.BluetoothDiscoveryRoutineDetailSpec,
      }},
      'bluetooth_scanning': {
        'ordinal': 7,
        'type': ash.cros_healthd.mojom.BluetoothScanningRoutineDetailSpec,
      }},
      'bluetooth_pairing': {
        'ordinal': 8,
        'type': ash.cros_healthd.mojom.BluetoothPairingRoutineDetailSpec,
      }},
      'camera_availability': {
        'ordinal': 9,
        'type': ash.cros_healthd.mojom.CameraAvailabilityRoutineDetailSpec,
      }},
      'network_bandwidth': {
        'ordinal': 10,
        'type': ash.cros_healthd.mojom.NetworkBandwidthRoutineDetailSpec,
      }},
      'sensitive_sensor': {
        'ordinal': 11,
        'type': ash.cros_healthd.mojom.SensitiveSensorRoutineDetailSpec,
      }},
      'camera_frame_analysis': {
        'ordinal': 12,
        'type': ash.cros_healthd.mojom.CameraFrameAnalysisRoutineDetailSpec,
      }},
      'battery_discharge': {
        'ordinal': 13,
        'type': ash.cros_healthd.mojom.BatteryDischargeRoutineDetailSpec,
      }},
    })
};

// Struct: MemoryRoutineArgument
ash.cros_healthd.mojom.MemoryRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.MemoryRoutineArgument',
      packedSize: 16,
      fields: [
        { name: 'max_testing_mem_kib_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'max_testing_mem_kib_$value', originalFieldName: 'max_testing_mem_kib' } },
        { name: 'max_testing_mem_kib_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'max_testing_mem_kib_$flag', originalFieldName: 'max_testing_mem_kib' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AudioDriverRoutineArgument
ash.cros_healthd.mojom.AudioDriverRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.AudioDriverRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: CpuStressRoutineArgument
ash.cros_healthd.mojom.CpuStressRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CpuStressRoutineArgument',
      packedSize: 16,
      fields: [
        { name: 'exec_duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UfsLifetimeRoutineArgument
ash.cros_healthd.mojom.UfsLifetimeRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.UfsLifetimeRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: DiskReadRoutineArgument
ash.cros_healthd.mojom.DiskReadRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.DiskReadRoutineArgument',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.DiskReadTypeEnumSpec, nullable: false, minVersion: 0 },
        { name: 'disk_read_duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'file_size_mib', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CpuCacheRoutineArgument
ash.cros_healthd.mojom.CpuCacheRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CpuCacheRoutineArgument',
      packedSize: 16,
      fields: [
        { name: 'exec_duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PrimeSearchRoutineArgument
ash.cros_healthd.mojom.PrimeSearchRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.PrimeSearchRoutineArgument',
      packedSize: 16,
      fields: [
        { name: 'exec_duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: VolumeButtonRoutineArgument
ash.cros_healthd.mojom.VolumeButtonRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.VolumeButtonRoutineArgument',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: LedLitUpRoutineArgument
ash.cros_healthd.mojom.LedLitUpRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.LedLitUpRoutineArgument',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.LedNameSpec, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 4, packedBitOffset: 0, type: ash.cros_healthd.mojom.LedColorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: KeyboardBacklightRoutineArgument
ash.cros_healthd.mojom.KeyboardBacklightRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.KeyboardBacklightRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: FloatingPointRoutineArgument
ash.cros_healthd.mojom.FloatingPointRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.FloatingPointRoutineArgument',
      packedSize: 16,
      fields: [
        { name: 'exec_duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: BluetoothPowerRoutineArgument
ash.cros_healthd.mojom.BluetoothPowerRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothPowerRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: BluetoothDiscoveryRoutineArgument
ash.cros_healthd.mojom.BluetoothDiscoveryRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothDiscoveryRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: FanRoutineArgument
ash.cros_healthd.mojom.FanRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.FanRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: BluetoothScanningRoutineArgument
ash.cros_healthd.mojom.BluetoothScanningRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothScanningRoutineArgument',
      packedSize: 16,
      fields: [
        { name: 'exec_duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: BluetoothPairingRoutineArgument
ash.cros_healthd.mojom.BluetoothPairingRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothPairingRoutineArgument',
      packedSize: 16,
      fields: [
        { name: 'peripheral_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CameraAvailabilityRoutineArgument
ash.cros_healthd.mojom.CameraAvailabilityRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CameraAvailabilityRoutineArgument',
      packedSize: 16,
      fields: [
        { name: 'run_camera_service_available_check', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'run_camera_diagnostic_service_available_check', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UrandomRoutineArgument
ash.cros_healthd.mojom.UrandomRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.UrandomRoutineArgument',
      packedSize: 16,
      fields: [
        { name: 'exec_duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: NetworkBandwidthRoutineArgument
ash.cros_healthd.mojom.NetworkBandwidthRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.NetworkBandwidthRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: SensitiveSensorRoutineArgument
ash.cros_healthd.mojom.SensitiveSensorRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.SensitiveSensorRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: CameraFrameAnalysisRoutineArgument
ash.cros_healthd.mojom.CameraFrameAnalysisRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CameraFrameAnalysisRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: BatteryDischargeRoutineArgument
ash.cros_healthd.mojom.BatteryDischargeRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BatteryDischargeRoutineArgument',
      packedSize: 24,
      fields: [
        { name: 'exec_duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'maximum_discharge_percent_allowed', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: RoutineState
ash.cros_healthd.mojom.RoutineStateSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineState',
      packedSize: 32,
      fields: [
        { name: 'percentage', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'state_union', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RoutineStateUnionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: RoutineStateInitialized
ash.cros_healthd.mojom.RoutineStateInitializedSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineStateInitialized',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: RoutineStateRunning
ash.cros_healthd.mojom.RoutineStateRunningSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineStateRunning',
      packedSize: 24,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RoutineRunningInfoSpec, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 1, packedSize: 24}]
    }
  }
};

// Struct: NetworkBandwidthRoutineRunningInfo
ash.cros_healthd.mojom.NetworkBandwidthRoutineRunningInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.NetworkBandwidthRoutineRunningInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: RoutineStateWaiting
ash.cros_healthd.mojom.RoutineStateWaitingSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineStateWaiting',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CheckLedLitUpStateInquiry
ash.cros_healthd.mojom.CheckLedLitUpStateInquirySpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CheckLedLitUpStateInquiry',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: CheckLedLitUpStateReply
ash.cros_healthd.mojom.CheckLedLitUpStateReplySpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CheckLedLitUpStateReply',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UnplugAcAdapterInquiry
ash.cros_healthd.mojom.UnplugAcAdapterInquirySpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.UnplugAcAdapterInquiry',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: UnplugAcAdapterReply
ash.cros_healthd.mojom.UnplugAcAdapterReplySpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.UnplugAcAdapterReply',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: CheckKeyboardBacklightStateInquiry
ash.cros_healthd.mojom.CheckKeyboardBacklightStateInquirySpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CheckKeyboardBacklightStateInquiry',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: CheckKeyboardBacklightStateReply
ash.cros_healthd.mojom.CheckKeyboardBacklightStateReplySpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CheckKeyboardBacklightStateReply',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: RoutineStateFinished
ash.cros_healthd.mojom.RoutineStateFinishedSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineStateFinished',
      packedSize: 32,
      fields: [
        { name: 'has_passed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'detail', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RoutineDetailSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: MemoryRoutineDetail
ash.cros_healthd.mojom.MemoryRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.MemoryRoutineDetail',
      packedSize: 24,
      fields: [
        { name: 'bytes_tested', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.MemtesterResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AudioDriverRoutineDetail
ash.cros_healthd.mojom.AudioDriverRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.AudioDriverRoutineDetail',
      packedSize: 16,
      fields: [
        { name: 'internal_card_detected', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'audio_devices_succeed_to_open', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UfsLifetimeRoutineDetail
ash.cros_healthd.mojom.UfsLifetimeRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.UfsLifetimeRoutineDetail',
      packedSize: 16,
      fields: [
        { name: 'pre_eol_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'device_life_time_est_a', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'device_life_time_est_b', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: MemtesterResult
ash.cros_healthd.mojom.MemtesterResultSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.MemtesterResult',
      packedSize: 24,
      fields: [
        { name: 'passed_items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.MemtesterTestItemEnumSpec, false), nullable: false, minVersion: 0 },
        { name: 'failed_items', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.MemtesterTestItemEnumSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BluetoothPoweredDetail
ash.cros_healthd.mojom.BluetoothPoweredDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothPoweredDetail',
      packedSize: 16,
      fields: [
        { name: 'hci_powered', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'dbus_powered', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: BluetoothPowerRoutineDetail
ash.cros_healthd.mojom.BluetoothPowerRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothPowerRoutineDetail',
      packedSize: 24,
      fields: [
        { name: 'power_off_result', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.BluetoothPoweredDetailSpec, nullable: true, minVersion: 0 },
        { name: 'power_on_result', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.BluetoothPoweredDetailSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BluetoothDiscoveringDetail
ash.cros_healthd.mojom.BluetoothDiscoveringDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothDiscoveringDetail',
      packedSize: 16,
      fields: [
        { name: 'hci_discovering', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'dbus_discovering', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: BluetoothDiscoveryRoutineDetail
ash.cros_healthd.mojom.BluetoothDiscoveryRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothDiscoveryRoutineDetail',
      packedSize: 24,
      fields: [
        { name: 'start_discovery_result', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.BluetoothDiscoveringDetailSpec, nullable: true, minVersion: 0 },
        { name: 'stop_discovery_result', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.BluetoothDiscoveringDetailSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BluetoothScannedPeripheralInfo
ash.cros_healthd.mojom.BluetoothScannedPeripheralInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothScannedPeripheralInfo',
      packedSize: 40,
      fields: [
        { name: 'rssi_history', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int16, false), nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'peripheral_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'uuids', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.UuidSpec, false), nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 1, packedSize: 40}]
    }
  }
};

// Struct: BluetoothScanningRoutineDetail
ash.cros_healthd.mojom.BluetoothScanningRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothScanningRoutineDetail',
      packedSize: 16,
      fields: [
        { name: 'peripherals', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.BluetoothScannedPeripheralInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: BluetoothPairingPeripheralInfo
ash.cros_healthd.mojom.BluetoothPairingPeripheralInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothPairingPeripheralInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: BluetoothPairingRoutineDetail
ash.cros_healthd.mojom.BluetoothPairingRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothPairingRoutineDetail',
      packedSize: 16,
      fields: [
        { name: 'pairing_peripheral', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.BluetoothPairingPeripheralInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CameraAvailabilityRoutineDetail
ash.cros_healthd.mojom.CameraAvailabilityRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CameraAvailabilityRoutineDetail',
      packedSize: 16,
      fields: [
        { name: 'camera_service_available_check', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.CameraSubtestResultSpec, nullable: false, minVersion: 0 },
        { name: 'camera_diagnostic_service_available_check', packedOffset: 4, packedBitOffset: 0, type: ash.cros_healthd.mojom.CameraSubtestResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: BatteryDischargeRoutineDetail
ash.cros_healthd.mojom.BatteryDischargeRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BatteryDischargeRoutineDetail',
      packedSize: 16,
      fields: [
        { name: 'discharge_percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FanRoutineDetail
ash.cros_healthd.mojom.FanRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.FanRoutineDetail',
      packedSize: 32,
      fields: [
        { name: 'passed_fan_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'failed_fan_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'fan_count_status', packedOffset: 16, packedBitOffset: 0, type: ash.cros_healthd.mojom.HardwarePresenceStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: NetworkBandwidthRoutineDetail
ash.cros_healthd.mojom.NetworkBandwidthRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.NetworkBandwidthRoutineDetail',
      packedSize: 24,
      fields: [
        { name: 'download_speed_kbps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'upload_speed_kbps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SensitiveSensorInfo
ash.cros_healthd.mojom.SensitiveSensorInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.SensitiveSensorInfo',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SensitiveSensorReport
ash.cros_healthd.mojom.SensitiveSensorReportSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.SensitiveSensorReport',
      packedSize: 32,
      fields: [
        { name: 'passed_sensors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.SensitiveSensorInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'failed_sensors', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.SensitiveSensorInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'sensor_presence_status', packedOffset: 16, packedBitOffset: 0, type: ash.cros_healthd.mojom.HardwarePresenceStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SensitiveSensorRoutineDetail
ash.cros_healthd.mojom.SensitiveSensorRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.SensitiveSensorRoutineDetail',
      packedSize: 72,
      fields: [
        { name: 'base_accelerometer', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.SensitiveSensorReportSpec, nullable: false, minVersion: 0 },
        { name: 'lid_accelerometer', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.SensitiveSensorReportSpec, nullable: false, minVersion: 0 },
        { name: 'base_gyroscope', packedOffset: 16, packedBitOffset: 0, type: ash.cros_healthd.mojom.SensitiveSensorReportSpec, nullable: false, minVersion: 0 },
        { name: 'lid_gyroscope', packedOffset: 24, packedBitOffset: 0, type: ash.cros_healthd.mojom.SensitiveSensorReportSpec, nullable: false, minVersion: 0 },
        { name: 'base_magnetometer', packedOffset: 32, packedBitOffset: 0, type: ash.cros_healthd.mojom.SensitiveSensorReportSpec, nullable: false, minVersion: 0 },
        { name: 'lid_magnetometer', packedOffset: 40, packedBitOffset: 0, type: ash.cros_healthd.mojom.SensitiveSensorReportSpec, nullable: false, minVersion: 0 },
        { name: 'base_gravity_sensor', packedOffset: 48, packedBitOffset: 0, type: ash.cros_healthd.mojom.SensitiveSensorReportSpec, nullable: false, minVersion: 0 },
        { name: 'lid_gravity_sensor', packedOffset: 56, packedBitOffset: 0, type: ash.cros_healthd.mojom.SensitiveSensorReportSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: CameraFrameAnalysisRoutineDetail
ash.cros_healthd.mojom.CameraFrameAnalysisRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CameraFrameAnalysisRoutineDetail',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: CrosHealthdRoutinesService
ash.cros_healthd.mojom.CrosHealthdRoutinesService = {};

ash.cros_healthd.mojom.CrosHealthdRoutinesService_CreateRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdRoutinesService_CreateRoutine_Params',
      packedSize: 40,
      fields: [
        { name: 'routine_argument', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RoutineArgumentSpec, nullable: false, minVersion: 0 },
        { name: 'routine_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.cros_healthd.mojom.RoutineControlRemote), nullable: false, minVersion: 0 },
        { name: 'routine_observer', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.RoutineObserverRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_Params',
      packedSize: 24,
      fields: [
        { name: 'routine_argument', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RoutineArgumentSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdRoutinesServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdRoutinesService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.CrosHealthdRoutinesServicePendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createRoutine(routine_argument, routine_receiver, routine_observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdRoutinesService_CreateRoutine_ParamsSpec,
      null,
      [routine_argument, routine_receiver, routine_observer]);
  }

  isRoutineArgumentSupported(routine_argument) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec,
      [routine_argument]);
  }

};

ash.cros_healthd.mojom.CrosHealthdRoutinesService.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdRoutinesService',
    'context');
  return remote.$;
};

// ParamsSpec for CreateRoutine
ash.cros_healthd.mojom.CrosHealthdRoutinesService_CreateRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdRoutinesService.CreateRoutine_Params',
      packedSize: 40,
      fields: [
        { name: 'routine_argument', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RoutineArgumentSpec, nullable: false, minVersion: 0 },
        { name: 'routine_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.cros_healthd.mojom.RoutineControlRemote), nullable: false, minVersion: 0 },
        { name: 'routine_observer', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.RoutineObserverRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for IsRoutineArgumentSupported
ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdRoutinesService.IsRoutineArgumentSupported_Params',
      packedSize: 24,
      fields: [
        { name: 'routine_argument', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RoutineArgumentSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdRoutinesService.IsRoutineArgumentSupported_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.SupportStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdRoutinesServicePtr = ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRemote;
ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRequest = ash.cros_healthd.mojom.CrosHealthdRoutinesServicePendingReceiver;


// Interface: RoutineControl
ash.cros_healthd.mojom.RoutineControl = {};

ash.cros_healthd.mojom.RoutineControl_GetState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineControl_GetState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.RoutineControl_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineControl_Start_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.RoutineControl_ReplyInquiry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineControl_ReplyInquiry_Params',
      packedSize: 24,
      fields: [
        { name: 'reply', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RoutineInquiryReplySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_healthd.mojom.RoutineControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.RoutineControlRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.RoutineControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.RoutineControlPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.RoutineControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.mojom.RoutineControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getState() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.mojom.RoutineControl_GetState_ParamsSpec,
      ash.cros_healthd.mojom.RoutineControl_GetState_ResponseParamsSpec,
      []);
  }

  start() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.mojom.RoutineControl_Start_ParamsSpec,
      null,
      []);
  }

  replyInquiry(reply) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cros_healthd.mojom.RoutineControl_ReplyInquiry_ParamsSpec,
      null,
      [reply]);
  }

};

ash.cros_healthd.mojom.RoutineControl.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.RoutineControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.RoutineControl',
    'context');
  return remote.$;
};

// ParamsSpec for GetState
ash.cros_healthd.mojom.RoutineControl_GetState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineControl.GetState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.mojom.RoutineControl_GetState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineControl.GetState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RoutineStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Start
ash.cros_healthd.mojom.RoutineControl_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineControl.Start_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ReplyInquiry
ash.cros_healthd.mojom.RoutineControl_ReplyInquiry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineControl.ReplyInquiry_Params',
      packedSize: 24,
      fields: [
        { name: 'reply', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RoutineInquiryReplySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.mojom.RoutineControlPtr = ash.cros_healthd.mojom.RoutineControlRemote;
ash.cros_healthd.mojom.RoutineControlRequest = ash.cros_healthd.mojom.RoutineControlPendingReceiver;


// Interface: RoutineObserver
ash.cros_healthd.mojom.RoutineObserver = {};

ash.cros_healthd.mojom.RoutineObserver_OnRoutineStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineObserver_OnRoutineStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RoutineStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.mojom.RoutineObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.RoutineObserverRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.RoutineObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.RoutineObserverPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.RoutineObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.mojom.RoutineObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRoutineStateChange(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.mojom.RoutineObserver_OnRoutineStateChange_ParamsSpec,
      null,
      [state]);
  }

};

ash.cros_healthd.mojom.RoutineObserver.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.RoutineObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.RoutineObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnRoutineStateChange
ash.cros_healthd.mojom.RoutineObserver_OnRoutineStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineObserver.OnRoutineStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RoutineStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.mojom.RoutineObserverPtr = ash.cros_healthd.mojom.RoutineObserverRemote;
ash.cros_healthd.mojom.RoutineObserverRequest = ash.cros_healthd.mojom.RoutineObserverPendingReceiver;

