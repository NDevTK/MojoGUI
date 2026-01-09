// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_probe.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};


// Enum: CpuArchitectureEnum
ash.cros_healthd.mojom.CpuArchitectureEnum = {
  kX86_64: 0,
  kAArch64: 1,
  kArmv7l: 2,
};

// Enum: ProbeCategoryEnum
ash.cros_healthd.mojom.ProbeCategoryEnum = {
  kBattery: 0,
  kNonRemovableBlockDevices: 1,
  kCpu: 2,
  kTimezone: 3,
  kMemory: 4,
  kBacklight: 5,
  kFan: 6,
  kStatefulPartition: 7,
  kBluetooth: 8,
  kSystem: 9,
  kNetwork: 10,
  kAudio: 11,
  kBootPerformance: 12,
  kBus: 13,
  kTpm: 14,
  kGraphics: 15,
  kDisplay: 16,
  kNetworkInterface: 17,
  kInput: 18,
};

// Enum: ErrorType
ash.cros_healthd.mojom.ErrorType = {
  kFileReadError: 0,
  kParseError: 1,
  kSystemUtilityError: 2,
  kServiceUnavailable: 3,
};

// Enum: ProcessState
ash.cros_healthd.mojom.ProcessState = {
  kRunning: 0,
  kSleeping: 1,
  kWaiting: 2,
  kZombie: 3,
  kStopped: 4,
  kTracingStop: 5,
  kDead: 6,
};

// Enum: StorageDevicePurpose
ash.cros_healthd.mojom.StorageDevicePurpose = {
  kBootDevice: 0,
  DEPRECATED_kSwapDevice: 1,
};

// Enum: SMTControl
ash.cros_healthd.mojom.SMTControl = {
  kOn: 0,
  kOff: 1,
  kForceOff: 2,
  kNotSupported: 3,
  kNotImplemented: 4,
};

// Enum: Status
ash.cros_healthd.mojom.Status = {
  kNotAffected: 0,
  kVulnerable: 1,
  kMitigation: 2,
  kUnknown: 3,
  kUnrecognized: 4,
};

// Enum: Type
ash.cros_healthd.mojom.Type = {
  kVMX: 0,
  kSVM: 1,
};

// Enum: EncryptionState
ash.cros_healthd.mojom.EncryptionState = {
  kEncryptionDisabled: 0,
  kTmeEnabled: 1,
  kMktmeEnabled: 2,
};

// Enum: CryptoAlgorithm
ash.cros_healthd.mojom.CryptoAlgorithm = {
  kAesXts128: 0,
  kAesXts256: 1,
};

// Enum: BluetoothDeviceType
ash.cros_healthd.mojom.BluetoothDeviceType = {
  kUnknown: 0,
  kBrEdr: 1,
  kLe: 2,
  kDual: 3,
};

// Enum: EfiPlatformSize
ash.cros_healthd.mojom.EfiPlatformSize = {
  kUnknown: 0,
  k64: 1,
  k32: 2,
};

// Enum: BootMode
ash.cros_healthd.mojom.BootMode = {
  kCrosSecure: 0,
  kCrosEfi: 1,
  kCrosLegacy: 2,
  kCrosEfiSecure: 3,
};

// Enum: EventType
ash.cros_healthd.mojom.EventType = {
  kLogStart: 0,
  kLogEnd: 1,
  kCsmeRecovery: 2,
  kPrtcFailure: 3,
  kSvnIncrease: 4,
};

// Enum: LogState
ash.cros_healthd.mojom.LogState = {
  kNotStarted: 0,
  kStarted: 1,
  kStopped: 2,
};

// Enum: BusDeviceClass
ash.cros_healthd.mojom.BusDeviceClass = {
  kDisplayController: 0,
  kEthernetController: 1,
  kWirelessController: 2,
  kBluetoothAdapter: 3,
  kThunderboltController: 4,
  kAudioCard: 5,
};

// Enum: FwupdVersionFormat
ash.cros_healthd.mojom.FwupdVersionFormat = {
  kUnknown: 0,
  kPlain: 1,
  kNumber: 2,
  kPair: 3,
  kTriplet: 4,
  kQuad: 5,
  kBcd: 6,
  kIntelMe: 7,
  kIntelMe2: 8,
  kSurfaceLegacy: 9,
  kSurface: 10,
  kDellBios: 11,
  kHex: 12,
};

// Enum: UsbVersion
ash.cros_healthd.mojom.UsbVersion = {
  kUnknown: 0,
  kUsb1: 1,
  kUsb2: 2,
  kUsb3: 3,
};

// Enum: UsbSpecSpeed
ash.cros_healthd.mojom.UsbSpecSpeed = {
  kUnknown: 0,
  k1_5Mbps: 1,
  k12Mbps: 2,
  kDeprecatedSpeed: 3,
  k480Mbps: 4,
  k5Gbps: 5,
  k10Gbps: 6,
  k20Gbps: 7,
};

// Enum: TpmGSCVersion
ash.cros_healthd.mojom.TpmGSCVersion = {
  kCr50: 0,
  kTi50: 1,
};

// Enum: DisplayInputType
ash.cros_healthd.mojom.DisplayInputType = {
  kDigital: 0,
  kAnalog: 1,
};

// Enum: ThunderboltSecurityLevel
ash.cros_healthd.mojom.ThunderboltSecurityLevel = {
  kUserLevel: 0,
  kSecureLevel: 1,
  kDpOnlyLevel: 2,
  kUsbOnlyLevel: 3,
  kNoPcieLevel: 4,
};

// Enum: ConnectionType
ash.cros_healthd.mojom.ConnectionType = {
  kInternal: 0,
  kUSB: 1,
  kBluetooth: 2,
  kUnknown: 3,
};

// Enum: Type
ash.cros_healthd.mojom.Type = {
  kAccel: 0,
  kLight: 1,
  kGyro: 2,
  kAngle: 3,
  kGravity: 4,
};

// Enum: Location
ash.cros_healthd.mojom.Location = {
  kUnknown: 0,
  kBase: 1,
  kLid: 2,
  kCamera: 3,
};

// Enum: ThermalSensorSource
ash.cros_healthd.mojom.ThermalSensorSource = {
  kEc: 0,
  kSysFs: 1,
};

// Struct: ProbeError
ash.cros_healthd.mojom.ProbeErrorSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.ProbeError',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MultipleProcessResult
ash.cros_healthd.mojom.MultipleProcessResultSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.MultipleProcessResult',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProcessInfo
ash.cros_healthd.mojom.ProcessInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.ProcessInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BatteryInfo
ash.cros_healthd.mojom.BatteryInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BatteryInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NvmeDeviceInfo
ash.cros_healthd.mojom.NvmeDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.NvmeDeviceInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EmmcDeviceInfo
ash.cros_healthd.mojom.EmmcDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.EmmcDeviceInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UfsDeviceInfo
ash.cros_healthd.mojom.UfsDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.UfsDeviceInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NonRemovableBlockDeviceInfo
ash.cros_healthd.mojom.NonRemovableBlockDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.NonRemovableBlockDeviceInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CpuInfo
ash.cros_healthd.mojom.CpuInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CpuInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VirtualizationInfo
ash.cros_healthd.mojom.VirtualizationInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.VirtualizationInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VulnerabilityInfo
ash.cros_healthd.mojom.VulnerabilityInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.VulnerabilityInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: KeylockerInfo
ash.cros_healthd.mojom.KeylockerInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.KeylockerInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PhysicalCpuInfo
ash.cros_healthd.mojom.PhysicalCpuInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.PhysicalCpuInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CpuVirtualizationInfo
ash.cros_healthd.mojom.CpuVirtualizationInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CpuVirtualizationInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LogicalCpuInfo
ash.cros_healthd.mojom.LogicalCpuInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.LogicalCpuInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CpuCStateInfo
ash.cros_healthd.mojom.CpuCStateInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CpuCStateInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CpuTemperatureChannel
ash.cros_healthd.mojom.CpuTemperatureChannelSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CpuTemperatureChannel',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TimezoneInfo
ash.cros_healthd.mojom.TimezoneInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TimezoneInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MemoryInfo
ash.cros_healthd.mojom.MemoryInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.MemoryInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MemoryEncryptionInfo
ash.cros_healthd.mojom.MemoryEncryptionInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.MemoryEncryptionInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BacklightInfo
ash.cros_healthd.mojom.BacklightInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BacklightInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FanInfo
ash.cros_healthd.mojom.FanInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.FanInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StatefulPartitionInfo
ash.cros_healthd.mojom.StatefulPartitionInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.StatefulPartitionInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothAdapterInfo
ash.cros_healthd.mojom.BluetoothAdapterInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothAdapterInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothDeviceInfo
ash.cros_healthd.mojom.BluetoothDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothDeviceInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DEPRECATED_SupportedCapabilities
ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilities',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SystemInfo
ash.cros_healthd.mojom.SystemInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.SystemInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OsInfo
ash.cros_healthd.mojom.OsInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.OsInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OsVersion
ash.cros_healthd.mojom.OsVersionSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.OsVersion',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VpdInfo
ash.cros_healthd.mojom.VpdInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.VpdInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DmiInfo
ash.cros_healthd.mojom.DmiInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.DmiInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PsrEvent
ash.cros_healthd.mojom.PsrEventSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.PsrEvent',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PsrInfo
ash.cros_healthd.mojom.PsrInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.PsrInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WirelessInterfaceInfo
ash.cros_healthd.mojom.WirelessInterfaceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.WirelessInterfaceInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WirelessLinkInfo
ash.cros_healthd.mojom.WirelessLinkInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.WirelessLinkInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AudioInfo
ash.cros_healthd.mojom.AudioInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.AudioInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AudioNodeInfo
ash.cros_healthd.mojom.AudioNodeInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.AudioNodeInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AudioHardwareInfo
ash.cros_healthd.mojom.AudioHardwareInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.AudioHardwareInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AudioCard
ash.cros_healthd.mojom.AudioCardSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.AudioCard',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HDAudioCodec
ash.cros_healthd.mojom.HDAudioCodecSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.HDAudioCodec',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BootPerformanceInfo
ash.cros_healthd.mojom.BootPerformanceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BootPerformanceInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BusDevice
ash.cros_healthd.mojom.BusDeviceSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BusDevice',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PciBusInfo
ash.cros_healthd.mojom.PciBusInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.PciBusInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UsbBusInfo
ash.cros_healthd.mojom.UsbBusInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.UsbBusInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FwupdFirmwareVersionInfo
ash.cros_healthd.mojom.FwupdFirmwareVersionInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.FwupdFirmwareVersionInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UsbBusInterfaceInfo
ash.cros_healthd.mojom.UsbBusInterfaceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.UsbBusInterfaceInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TpmInfo
ash.cros_healthd.mojom.TpmInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TpmInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TpmVersion
ash.cros_healthd.mojom.TpmVersionSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TpmVersion',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TpmStatus
ash.cros_healthd.mojom.TpmStatusSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TpmStatus',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TpmDictionaryAttack
ash.cros_healthd.mojom.TpmDictionaryAttackSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TpmDictionaryAttack',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TpmAttestation
ash.cros_healthd.mojom.TpmAttestationSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TpmAttestation',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TpmSupportedFeatures
ash.cros_healthd.mojom.TpmSupportedFeaturesSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TpmSupportedFeatures',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GraphicsInfo
ash.cros_healthd.mojom.GraphicsInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.GraphicsInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GLESInfo
ash.cros_healthd.mojom.GLESInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.GLESInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EGLInfo
ash.cros_healthd.mojom.EGLInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.EGLInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DisplayInfo
ash.cros_healthd.mojom.DisplayInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.DisplayInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EmbeddedDisplayInfo
ash.cros_healthd.mojom.EmbeddedDisplayInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.EmbeddedDisplayInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ExternalDisplayInfo
ash.cros_healthd.mojom.ExternalDisplayInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.ExternalDisplayInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ThunderboltBusInterfaceInfo
ash.cros_healthd.mojom.ThunderboltBusInterfaceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.ThunderboltBusInterfaceInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ThunderboltBusInfo
ash.cros_healthd.mojom.ThunderboltBusInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.ThunderboltBusInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InputInfo
ash.cros_healthd.mojom.InputInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.InputInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TouchscreenDevice
ash.cros_healthd.mojom.TouchscreenDeviceSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TouchscreenDevice',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TouchpadDevice
ash.cros_healthd.mojom.TouchpadDeviceSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TouchpadDevice',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InputDevice
ash.cros_healthd.mojom.InputDeviceSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.InputDevice',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SensorInfo
ash.cros_healthd.mojom.SensorInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.SensorInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Sensor
ash.cros_healthd.mojom.SensorSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.Sensor',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ThermalInfo
ash.cros_healthd.mojom.ThermalInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.ThermalInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ThermalSensorInfo
ash.cros_healthd.mojom.ThermalSensorInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.ThermalSensorInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryInfo
ash.cros_healthd.mojom.TelemetryInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TelemetryInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};
