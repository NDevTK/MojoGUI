// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_probe.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.cros_healthd.mojom = ash.cros_healthd.cros_healthd.mojom || {};


// Enum: CpuArchitectureEnum
ash.cros_healthd.cros_healthd.mojom.mojom.CpuArchitectureEnum = {
  kX86_64: 0,
  kAArch64: 1,
  kArmv7l: 2,
};
ash.cros_healthd.cros_healthd.mojom.mojom.CpuArchitectureEnumSpec = { $: mojo.internal.Enum() };

// Enum: ProbeCategoryEnum
ash.cros_healthd.cros_healthd.mojom.mojom.ProbeCategoryEnum = {
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
ash.cros_healthd.cros_healthd.mojom.mojom.ProbeCategoryEnumSpec = { $: mojo.internal.Enum() };

// Enum: ErrorType
ash.cros_healthd.cros_healthd.mojom.mojom.ErrorType = {
  kFileReadError: 0,
  kParseError: 1,
  kSystemUtilityError: 2,
  kServiceUnavailable: 3,
};
ash.cros_healthd.cros_healthd.mojom.mojom.ErrorTypeSpec = { $: mojo.internal.Enum() };

// Enum: ProcessState
ash.cros_healthd.cros_healthd.mojom.mojom.ProcessState = {
  kRunning: 0,
  kSleeping: 1,
  kWaiting: 2,
  kZombie: 3,
  kStopped: 4,
  kTracingStop: 5,
  kDead: 6,
};
ash.cros_healthd.cros_healthd.mojom.mojom.ProcessStateSpec = { $: mojo.internal.Enum() };

// Enum: StorageDevicePurpose
ash.cros_healthd.cros_healthd.mojom.mojom.StorageDevicePurpose = {
  kBootDevice: 0,
  DEPRECATED_kSwapDevice: 1,
};
ash.cros_healthd.cros_healthd.mojom.mojom.StorageDevicePurposeSpec = { $: mojo.internal.Enum() };

// Enum: SMTControl
ash.cros_healthd.cros_healthd.mojom.mojom.SMTControl = {
  kOn: 0,
  kOff: 1,
  kForceOff: 2,
  kNotSupported: 3,
  kNotImplemented: 4,
};
ash.cros_healthd.cros_healthd.mojom.mojom.SMTControlSpec = { $: mojo.internal.Enum() };

// Enum: Status
ash.cros_healthd.cros_healthd.mojom.mojom.Status = {
  kNotAffected: 0,
  kVulnerable: 1,
  kMitigation: 2,
  kUnknown: 3,
  kUnrecognized: 4,
};
ash.cros_healthd.cros_healthd.mojom.mojom.StatusSpec = { $: mojo.internal.Enum() };

// Enum: Type
ash.cros_healthd.cros_healthd.mojom.mojom.Type = {
  kVMX: 0,
  kSVM: 1,
};
ash.cros_healthd.cros_healthd.mojom.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Enum: EncryptionState
ash.cros_healthd.cros_healthd.mojom.mojom.EncryptionState = {
  kEncryptionDisabled: 0,
  kTmeEnabled: 1,
  kMktmeEnabled: 2,
};
ash.cros_healthd.cros_healthd.mojom.mojom.EncryptionStateSpec = { $: mojo.internal.Enum() };

// Enum: CryptoAlgorithm
ash.cros_healthd.cros_healthd.mojom.mojom.CryptoAlgorithm = {
  kAesXts128: 0,
  kAesXts256: 1,
};
ash.cros_healthd.cros_healthd.mojom.mojom.CryptoAlgorithmSpec = { $: mojo.internal.Enum() };

// Enum: BluetoothDeviceType
ash.cros_healthd.cros_healthd.mojom.mojom.BluetoothDeviceType = {
  kUnknown: 0,
  kBrEdr: 1,
  kLe: 2,
  kDual: 3,
};
ash.cros_healthd.cros_healthd.mojom.mojom.BluetoothDeviceTypeSpec = { $: mojo.internal.Enum() };

// Enum: EfiPlatformSize
ash.cros_healthd.cros_healthd.mojom.mojom.EfiPlatformSize = {
  kUnknown: 0,
  k64: 1,
  k32: 2,
};
ash.cros_healthd.cros_healthd.mojom.mojom.EfiPlatformSizeSpec = { $: mojo.internal.Enum() };

// Enum: BootMode
ash.cros_healthd.cros_healthd.mojom.mojom.BootMode = {
  kCrosSecure: 0,
  kCrosEfi: 1,
  kCrosLegacy: 2,
  kCrosEfiSecure: 3,
};
ash.cros_healthd.cros_healthd.mojom.mojom.BootModeSpec = { $: mojo.internal.Enum() };

// Enum: EventType
ash.cros_healthd.cros_healthd.mojom.mojom.EventType = {
  kLogStart: 0,
  kLogEnd: 1,
  kCsmeRecovery: 2,
  kPrtcFailure: 3,
  kSvnIncrease: 4,
};
ash.cros_healthd.cros_healthd.mojom.mojom.EventTypeSpec = { $: mojo.internal.Enum() };

// Enum: LogState
ash.cros_healthd.cros_healthd.mojom.mojom.LogState = {
  kNotStarted: 0,
  kStarted: 1,
  kStopped: 2,
};
ash.cros_healthd.cros_healthd.mojom.mojom.LogStateSpec = { $: mojo.internal.Enum() };

// Enum: BusDeviceClass
ash.cros_healthd.cros_healthd.mojom.mojom.BusDeviceClass = {
  kDisplayController: 0,
  kEthernetController: 1,
  kWirelessController: 2,
  kBluetoothAdapter: 3,
  kThunderboltController: 4,
  kAudioCard: 5,
};
ash.cros_healthd.cros_healthd.mojom.mojom.BusDeviceClassSpec = { $: mojo.internal.Enum() };

// Enum: FwupdVersionFormat
ash.cros_healthd.cros_healthd.mojom.mojom.FwupdVersionFormat = {
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
ash.cros_healthd.cros_healthd.mojom.mojom.FwupdVersionFormatSpec = { $: mojo.internal.Enum() };

// Enum: UsbVersion
ash.cros_healthd.cros_healthd.mojom.mojom.UsbVersion = {
  kUnknown: 0,
  kUsb1: 1,
  kUsb2: 2,
  kUsb3: 3,
};
ash.cros_healthd.cros_healthd.mojom.mojom.UsbVersionSpec = { $: mojo.internal.Enum() };

// Enum: UsbSpecSpeed
ash.cros_healthd.cros_healthd.mojom.mojom.UsbSpecSpeed = {
  kUnknown: 0,
  k1_5Mbps: 1,
  k12Mbps: 2,
  kDeprecatedSpeed: 3,
  k480Mbps: 4,
  k5Gbps: 5,
  k10Gbps: 6,
  k20Gbps: 7,
};
ash.cros_healthd.cros_healthd.mojom.mojom.UsbSpecSpeedSpec = { $: mojo.internal.Enum() };

// Enum: TpmGSCVersion
ash.cros_healthd.cros_healthd.mojom.mojom.TpmGSCVersion = {
  kCr50: 0,
  kTi50: 1,
};
ash.cros_healthd.cros_healthd.mojom.mojom.TpmGSCVersionSpec = { $: mojo.internal.Enum() };

// Enum: DisplayInputType
ash.cros_healthd.cros_healthd.mojom.mojom.DisplayInputType = {
  kDigital: 0,
  kAnalog: 1,
};
ash.cros_healthd.cros_healthd.mojom.mojom.DisplayInputTypeSpec = { $: mojo.internal.Enum() };

// Enum: ThunderboltSecurityLevel
ash.cros_healthd.cros_healthd.mojom.mojom.ThunderboltSecurityLevel = {
  kUserLevel: 0,
  kSecureLevel: 1,
  kDpOnlyLevel: 2,
  kUsbOnlyLevel: 3,
  kNoPcieLevel: 4,
};
ash.cros_healthd.cros_healthd.mojom.mojom.ThunderboltSecurityLevelSpec = { $: mojo.internal.Enum() };

// Enum: ConnectionType
ash.cros_healthd.cros_healthd.mojom.mojom.ConnectionType = {
  kInternal: 0,
  kUSB: 1,
  kBluetooth: 2,
  kUnknown: 3,
};
ash.cros_healthd.cros_healthd.mojom.mojom.ConnectionTypeSpec = { $: mojo.internal.Enum() };

// Enum: Type
ash.cros_healthd.cros_healthd.mojom.mojom.Type = {
  kAccel: 0,
  kLight: 1,
  kGyro: 2,
  kAngle: 3,
  kGravity: 4,
};
ash.cros_healthd.cros_healthd.mojom.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Enum: Location
ash.cros_healthd.cros_healthd.mojom.mojom.Location = {
  kUnknown: 0,
  kBase: 1,
  kLid: 2,
  kCamera: 3,
};
ash.cros_healthd.cros_healthd.mojom.mojom.LocationSpec = { $: mojo.internal.Enum() };

// Enum: ThermalSensorSource
ash.cros_healthd.cros_healthd.mojom.mojom.ThermalSensorSource = {
  kEc: 0,
  kSysFs: 1,
};
ash.cros_healthd.cros_healthd.mojom.mojom.ThermalSensorSourceSpec = { $: mojo.internal.Enum() };

// Union: ProcessResult
ash.cros_healthd.cros_healthd.mojom.mojom.ProcessResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.ProcessResult', {
      'process_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.ProcessInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: BatteryResult
ash.cros_healthd.cros_healthd.mojom.mojom.BatteryResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.BatteryResult', {
      'battery_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.BatteryInfoSpec,
        'nullable': true,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: NonRemovableBlockDeviceResult
ash.cros_healthd.cros_healthd.mojom.mojom.NonRemovableBlockDeviceResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.NonRemovableBlockDeviceResult', {
      'block_device_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(ash.cros_healthd.mojom.NonRemovableBlockDeviceInfoSpec, false),
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: BlockDeviceVendor
ash.cros_healthd.cros_healthd.mojom.mojom.BlockDeviceVendorSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.BlockDeviceVendor', {
      'nvme_subsystem_vendor': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
      }},
      'emmc_oemid': {
        'ordinal': 1,
        'type': mojo.internal.Uint16,
      }},
      'other': {
        'ordinal': 2,
        'type': mojo.internal.Uint16,
      }},
      'unknown': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
      }},
      'jedec_manfid': {
        'ordinal': 4,
        'type': mojo.internal.Uint16,
      }},
    })
};

// Union: BlockDeviceProduct
ash.cros_healthd.cros_healthd.mojom.mojom.BlockDeviceProductSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.BlockDeviceProduct', {
      'nvme_subsystem_device': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
      }},
      'emmc_pnm': {
        'ordinal': 1,
        'type': mojo.internal.Uint64,
      }},
      'other': {
        'ordinal': 2,
        'type': mojo.internal.Uint16,
      }},
      'unknown': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
      }},
    })
};

// Union: BlockDeviceRevision
ash.cros_healthd.cros_healthd.mojom.mojom.BlockDeviceRevisionSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.BlockDeviceRevision', {
      'nvme_pcie_rev': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      }},
      'emmc_prv': {
        'ordinal': 1,
        'type': mojo.internal.Uint8,
      }},
      'other': {
        'ordinal': 2,
        'type': mojo.internal.Uint16,
      }},
      'unknown': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
      }},
    })
};

// Union: BlockDeviceFirmware
ash.cros_healthd.cros_healthd.mojom.mojom.BlockDeviceFirmwareSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.BlockDeviceFirmware', {
      'nvme_firmware_rev': {
        'ordinal': 0,
        'type': mojo.internal.Uint64,
      }},
      'emmc_fwrev': {
        'ordinal': 1,
        'type': mojo.internal.Uint64,
      }},
      'other': {
        'ordinal': 2,
        'type': mojo.internal.Uint16,
      }},
      'unknown': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
      }},
      'ufs_fwrev': {
        'ordinal': 4,
        'type': mojo.internal.Uint64,
      }},
    })
};

// Union: BlockDeviceInfo
ash.cros_healthd.cros_healthd.mojom.mojom.BlockDeviceInfoSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.BlockDeviceInfo', {
      'unrecognized': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'nvme_device_info': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.NvmeDeviceInfoSpec,
      }},
      'emmc_device_info': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.EmmcDeviceInfoSpec,
      }},
      'ufs_device_info': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.UfsDeviceInfoSpec,
      }},
    })
};

// Union: CpuResult
ash.cros_healthd.cros_healthd.mojom.mojom.CpuResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.CpuResult', {
      'cpu_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.CpuInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: TimezoneResult
ash.cros_healthd.cros_healthd.mojom.mojom.TimezoneResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.TimezoneResult', {
      'timezone_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.TimezoneInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: MemoryResult
ash.cros_healthd.cros_healthd.mojom.mojom.MemoryResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.MemoryResult', {
      'memory_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.MemoryInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: BacklightResult
ash.cros_healthd.cros_healthd.mojom.mojom.BacklightResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.BacklightResult', {
      'backlight_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(ash.cros_healthd.mojom.BacklightInfoSpec, false),
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: FanResult
ash.cros_healthd.cros_healthd.mojom.mojom.FanResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.FanResult', {
      'fan_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(ash.cros_healthd.mojom.FanInfoSpec, false),
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: StatefulPartitionResult
ash.cros_healthd.cros_healthd.mojom.mojom.StatefulPartitionResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.StatefulPartitionResult', {
      'partition_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.StatefulPartitionInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: BluetoothResult
ash.cros_healthd.cros_healthd.mojom.mojom.BluetoothResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.BluetoothResult', {
      'bluetooth_adapter_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(ash.cros_healthd.mojom.BluetoothAdapterInfoSpec, false),
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: DEPRECATED_SystemResult
ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_SystemResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.DEPRECATED_SystemResult', {
      'error': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: SystemResult
ash.cros_healthd.cros_healthd.mojom.mojom.SystemResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.SystemResult', {
      'system_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.SystemInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: NetworkResult
ash.cros_healthd.cros_healthd.mojom.mojom.NetworkResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.NetworkResult', {
      'network_health': {
        'ordinal': 0,
        'type': chromeos.network_health.mojom.NetworkHealthStateSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: NetworkInterfaceResult
ash.cros_healthd.cros_healthd.mojom.mojom.NetworkInterfaceResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.NetworkInterfaceResult', {
      'network_interface_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(ash.cros_healthd.mojom.NetworkInterfaceInfoSpec, false),
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: NetworkInterfaceInfo
ash.cros_healthd.cros_healthd.mojom.mojom.NetworkInterfaceInfoSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.NetworkInterfaceInfo', {
      'wireless_interface_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.WirelessInterfaceInfoSpec,
      }},
    })
};

// Union: AudioResult
ash.cros_healthd.cros_healthd.mojom.mojom.AudioResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.AudioResult', {
      'audio_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.AudioInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: AudioHardwareResult
ash.cros_healthd.cros_healthd.mojom.mojom.AudioHardwareResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.AudioHardwareResult', {
      'audio_hardware_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.AudioHardwareInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: BootPerformanceResult
ash.cros_healthd.cros_healthd.mojom.mojom.BootPerformanceResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.BootPerformanceResult', {
      'boot_performance_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.BootPerformanceInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: BusResult
ash.cros_healthd.cros_healthd.mojom.mojom.BusResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.BusResult', {
      'bus_devices': {
        'ordinal': 0,
        'type': mojo.internal.Array(ash.cros_healthd.mojom.BusDeviceSpec, false),
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: BusInfo
ash.cros_healthd.cros_healthd.mojom.mojom.BusInfoSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.BusInfo', {
      'pci_bus_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.PciBusInfoSpec,
      }},
      'usb_bus_info': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.UsbBusInfoSpec,
      }},
      'thunderbolt_bus_info': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.ThunderboltBusInfoSpec,
      }},
      'unmapped_field': {
        'ordinal': 3,
        'type': mojo.internal.Bool,
      }},
    })
};

// Union: TpmResult
ash.cros_healthd.cros_healthd.mojom.mojom.TpmResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.TpmResult', {
      'tpm_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.TpmInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: GraphicsResult
ash.cros_healthd.cros_healthd.mojom.mojom.GraphicsResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.GraphicsResult', {
      'graphics_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.GraphicsInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: DisplayResult
ash.cros_healthd.cros_healthd.mojom.mojom.DisplayResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.DisplayResult', {
      'display_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.DisplayInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: InputResult
ash.cros_healthd.cros_healthd.mojom.mojom.InputResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.InputResult', {
      'input_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.InputInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: SensorResult
ash.cros_healthd.cros_healthd.mojom.mojom.SensorResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.SensorResult', {
      'sensor_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.SensorInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: ThermalResult
ash.cros_healthd.cros_healthd.mojom.mojom.ThermalResultSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.ThermalResult', {
      'thermal_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.ThermalInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
      }},
    })
};

// Struct: ProbeError
ash.cros_healthd.cros_healthd.mojom.mojom.ProbeErrorSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.ProbeError',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.ErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'msg', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: MultipleProcessResult
ash.cros_healthd.cros_healthd.mojom.mojom.MultipleProcessResultSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.MultipleProcessResult',
      packedSize: 24,
      fields: [
        { name: 'process_infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint32, ash.cros_healthd.mojom.ProcessInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'errors', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint32, ash.cros_healthd.mojom.ProbeErrorSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ProcessInfo
ash.cros_healthd.cros_healthd.mojom.mojom.ProcessInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.ProcessInfo',
      packedSize: 128,
      fields: [
        { name: 'command', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'user_id', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 116, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0 },
        { name: 'nice', packedOffset: 117, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0 },
        { name: 'uptime_ticks', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 84, packedBitOffset: 0, type: ash.cros_healthd.mojom.ProcessStateSpec, nullable: false, minVersion: 0 },
        { name: 'total_memory_kib', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'resident_memory_kib', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'free_memory_kib', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'bytes_read', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'bytes_written', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'read_system_calls', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'write_system_calls', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'physical_bytes_read', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'physical_bytes_written', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'cancelled_bytes_written', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
        { name: 'parent_process_id', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 1 },
        { name: 'process_group_id', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 1 },
        { name: 'threads', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 1 },
        { name: 'process_id', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 128}, {version: 1, packedSize: 128}, {version: 2, packedSize: 128}]
    }
  }
};

// Struct: BatteryInfo
ash.cros_healthd.cros_healthd.mojom.mojom.BatteryInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BatteryInfo',
      packedSize: 120,
      fields: [
        { name: 'cycle_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'voltage_now', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'vendor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'serial_number', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'charge_full_design', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'charge_full', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'voltage_min_design', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'model_name', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'charge_now', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'current_now', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'technology', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'manufacture_date', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'temperature', packedOffset: 104, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint64Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 120}]
    }
  }
};

// Struct: NvmeDeviceInfo
ash.cros_healthd.cros_healthd.mojom.mojom.NvmeDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.NvmeDeviceInfo',
      packedSize: 32,
      fields: [
        { name: 'subsystem_vendor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'subsystem_device', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pcie_rev', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'firmware_rev', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: EmmcDeviceInfo
ash.cros_healthd.cros_healthd.mojom.mojom.EmmcDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.EmmcDeviceInfo',
      packedSize: 32,
      fields: [
        { name: 'manfid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'pnm', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'prv', packedOffset: 18, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'fwrev', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: UfsDeviceInfo
ash.cros_healthd.cros_healthd.mojom.mojom.UfsDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.UfsDeviceInfo',
      packedSize: 24,
      fields: [
        { name: 'jedec_manfid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'fwrev', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: NonRemovableBlockDeviceInfo
ash.cros_healthd.cros_healthd.mojom.mojom.NonRemovableBlockDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.NonRemovableBlockDeviceInfo',
      packedSize: 192,
      fields: [
        { name: 'bytes_read_since_last_boot', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'bytes_written_since_last_boot', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'read_time_seconds_since_last_boot', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'write_time_seconds_since_last_boot', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'io_time_seconds_since_last_boot', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'discard_time_seconds_since_last_boot', packedOffset: 120, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint64Spec, nullable: true, minVersion: 0 },
        { name: 'vendor_id', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.BlockDeviceVendorSpec, nullable: false, minVersion: 0 },
        { name: 'product_id', packedOffset: 16, packedBitOffset: 0, type: ash.cros_healthd.mojom.BlockDeviceProductSpec, nullable: false, minVersion: 0 },
        { name: 'revision', packedOffset: 32, packedBitOffset: 0, type: ash.cros_healthd.mojom.BlockDeviceRevisionSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'firmware_version', packedOffset: 48, packedBitOffset: 0, type: ash.cros_healthd.mojom.BlockDeviceFirmwareSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'purpose', packedOffset: 168, packedBitOffset: 0, type: ash.cros_healthd.mojom.StorageDevicePurposeSpec, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'manufacturer_id', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'serial', packedOffset: 172, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'device_info', packedOffset: 64, packedBitOffset: 0, type: ash.cros_healthd.mojom.BlockDeviceInfoSpec, nullable: true, minVersion: 1 },
        { name: 'firmware_string', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 2 },
        { name: 'is_rotational_$flag', packedOffset: 177, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 3, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_rotational_$value', originalFieldName: 'is_rotational' } },
        { name: 'is_rotational_$value', packedOffset: 177, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 3, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_rotational_$flag', originalFieldName: 'is_rotational' } },
      ],
      versions: [{version: 0, packedSize: 192}, {version: 1, packedSize: 192}, {version: 2, packedSize: 192}, {version: 3, packedSize: 192}]
    }
  }
};

// Struct: CpuInfo
ash.cros_healthd.cros_healthd.mojom.mojom.CpuInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CpuInfo',
      packedSize: 56,
      fields: [
        { name: 'num_total_threads', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'architecture', packedOffset: 44, packedBitOffset: 0, type: ash.cros_healthd.mojom.CpuArchitectureEnumSpec, nullable: false, minVersion: 0 },
        { name: 'physical_cpus', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.PhysicalCpuInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'temperature_channels', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.CpuTemperatureChannelSpec, false), nullable: false, minVersion: 0 },
        { name: 'keylocker_info', packedOffset: 16, packedBitOffset: 0, type: ash.cros_healthd.mojom.KeylockerInfoSpec, nullable: true, minVersion: 0 },
        { name: 'virtualization', packedOffset: 24, packedBitOffset: 0, type: ash.cros_healthd.mojom.VirtualizationInfoSpec, nullable: true, minVersion: 1 },
        { name: 'vulnerabilities', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, ash.cros_healthd.mojom.VulnerabilityInfoSpec, false), nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 56}, {version: 1, packedSize: 56}]
    }
  }
};

// Struct: VirtualizationInfo
ash.cros_healthd.cros_healthd.mojom.mojom.VirtualizationInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.VirtualizationInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: VulnerabilityInfo
ash.cros_healthd.cros_healthd.mojom.mojom.VulnerabilityInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.VulnerabilityInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: KeylockerInfo
ash.cros_healthd.cros_healthd.mojom.mojom.KeylockerInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.KeylockerInfo',
      packedSize: 16,
      fields: [
        { name: 'keylocker_configured', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PhysicalCpuInfo
ash.cros_healthd.cros_healthd.mojom.mojom.PhysicalCpuInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.PhysicalCpuInfo',
      packedSize: 40,
      fields: [
        { name: 'model_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'logical_cpus', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.LogicalCpuInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 1 },
        { name: 'virtualization', packedOffset: 24, packedBitOffset: 0, type: ash.cros_healthd.mojom.CpuVirtualizationInfoSpec, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 1, packedSize: 40}]
    }
  }
};

// Struct: CpuVirtualizationInfo
ash.cros_healthd.cros_healthd.mojom.mojom.CpuVirtualizationInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CpuVirtualizationInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: LogicalCpuInfo
ash.cros_healthd.cros_healthd.mojom.mojom.LogicalCpuInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.LogicalCpuInfo',
      packedSize: 56,
      fields: [
        { name: 'max_clock_speed_khz', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'scaling_max_frequency_khz', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'scaling_current_frequency_khz', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'user_time_user_hz', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'system_time_user_hz', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'idle_time_user_hz', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'c_states', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.CpuCStateInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'core_id', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 56}, {version: 1, packedSize: 56}]
    }
  }
};

// Struct: CpuCStateInfo
ash.cros_healthd.cros_healthd.mojom.mojom.CpuCStateInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CpuCStateInfo',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'time_in_state_since_last_boot_us', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CpuTemperatureChannel
ash.cros_healthd.cros_healthd.mojom.mojom.CpuTemperatureChannelSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CpuTemperatureChannel',
      packedSize: 24,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'temperature_celsius', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TimezoneInfo
ash.cros_healthd.cros_healthd.mojom.mojom.TimezoneInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TimezoneInfo',
      packedSize: 24,
      fields: [
        { name: 'posix', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'region', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: MemoryInfo
ash.cros_healthd.cros_healthd.mojom.mojom.MemoryInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.MemoryInfo',
      packedSize: 128,
      fields: [
        { name: 'total_memory_kib', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'free_memory_kib', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'available_memory_kib', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'page_faults_since_last_boot', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'memory_encryption_info', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.MemoryEncryptionInfoSpec, nullable: true, minVersion: 1 },
        { name: 'buffers_kib_$flag', packedOffset: 116, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'buffers_kib_$value', originalFieldName: 'buffers_kib' } },
        { name: 'buffers_kib_$value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'buffers_kib_$flag', originalFieldName: 'buffers_kib' } },
        { name: 'page_cache_kib_$flag', packedOffset: 116, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'page_cache_kib_$value', originalFieldName: 'page_cache_kib' } },
        { name: 'page_cache_kib_$value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'page_cache_kib_$flag', originalFieldName: 'page_cache_kib' } },
        { name: 'shared_memory_kib_$flag', packedOffset: 116, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'shared_memory_kib_$value', originalFieldName: 'shared_memory_kib' } },
        { name: 'shared_memory_kib_$value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'shared_memory_kib_$flag', originalFieldName: 'shared_memory_kib' } },
        { name: 'active_memory_kib_$flag', packedOffset: 116, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'active_memory_kib_$value', originalFieldName: 'active_memory_kib' } },
        { name: 'active_memory_kib_$value', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'active_memory_kib_$flag', originalFieldName: 'active_memory_kib' } },
        { name: 'inactive_memory_kib_$flag', packedOffset: 116, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'inactive_memory_kib_$value', originalFieldName: 'inactive_memory_kib' } },
        { name: 'inactive_memory_kib_$value', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'inactive_memory_kib_$flag', originalFieldName: 'inactive_memory_kib' } },
        { name: 'total_swap_memory_kib_$flag', packedOffset: 116, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'total_swap_memory_kib_$value', originalFieldName: 'total_swap_memory_kib' } },
        { name: 'total_swap_memory_kib_$value', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'total_swap_memory_kib_$flag', originalFieldName: 'total_swap_memory_kib' } },
        { name: 'free_swap_memory_kib_$flag', packedOffset: 116, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'free_swap_memory_kib_$value', originalFieldName: 'free_swap_memory_kib' } },
        { name: 'free_swap_memory_kib_$value', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'free_swap_memory_kib_$flag', originalFieldName: 'free_swap_memory_kib' } },
        { name: 'cached_swap_memory_kib_$flag', packedOffset: 116, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'cached_swap_memory_kib_$value', originalFieldName: 'cached_swap_memory_kib' } },
        { name: 'cached_swap_memory_kib_$value', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'cached_swap_memory_kib_$flag', originalFieldName: 'cached_swap_memory_kib' } },
        { name: 'total_slab_memory_kib_$flag', packedOffset: 117, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'total_slab_memory_kib_$value', originalFieldName: 'total_slab_memory_kib' } },
        { name: 'total_slab_memory_kib_$value', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'total_slab_memory_kib_$flag', originalFieldName: 'total_slab_memory_kib' } },
        { name: 'reclaimable_slab_memory_kib_$flag', packedOffset: 117, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'reclaimable_slab_memory_kib_$value', originalFieldName: 'reclaimable_slab_memory_kib' } },
        { name: 'reclaimable_slab_memory_kib_$value', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'reclaimable_slab_memory_kib_$flag', originalFieldName: 'reclaimable_slab_memory_kib' } },
        { name: 'unreclaimable_slab_memory_kib_$flag', packedOffset: 117, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'unreclaimable_slab_memory_kib_$value', originalFieldName: 'unreclaimable_slab_memory_kib' } },
        { name: 'unreclaimable_slab_memory_kib_$value', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'unreclaimable_slab_memory_kib_$flag', originalFieldName: 'unreclaimable_slab_memory_kib' } },
      ],
      versions: [{version: 0, packedSize: 128}, {version: 1, packedSize: 128}, {version: 2, packedSize: 128}]
    }
  }
};

// Struct: MemoryEncryptionInfo
ash.cros_healthd.cros_healthd.mojom.mojom.MemoryEncryptionInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.MemoryEncryptionInfo',
      packedSize: 24,
      fields: [
        { name: 'encryption_state', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.EncryptionStateSpec, nullable: false, minVersion: 0 },
        { name: 'max_key_number', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'active_algorithm', packedOffset: 12, packedBitOffset: 0, type: ash.cros_healthd.mojom.CryptoAlgorithmSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BacklightInfo
ash.cros_healthd.cros_healthd.mojom.mojom.BacklightInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BacklightInfo',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'max_brightness', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'brightness', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FanInfo
ash.cros_healthd.cros_healthd.mojom.mojom.FanInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.FanInfo',
      packedSize: 16,
      fields: [
        { name: 'speed_rpm', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: StatefulPartitionInfo
ash.cros_healthd.cros_healthd.mojom.mojom.StatefulPartitionInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.StatefulPartitionInfo',
      packedSize: 40,
      fields: [
        { name: 'available_space', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'total_space', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'filesystem', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'mount_source', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: BluetoothAdapterInfo
ash.cros_healthd.cros_healthd.mojom.mojom.BluetoothAdapterInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothAdapterInfo',
      packedSize: 72,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'powered', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'num_connected_devices', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'connected_devices', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.BluetoothDeviceInfoSpec, false), nullable: true, minVersion: 1 },
        { name: 'discoverable', packedOffset: 60, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 1 },
        { name: 'discovering', packedOffset: 60, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 1 },
        { name: 'uuids', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 1 },
        { name: 'modalias', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
        { name: 'service_allow_list', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 2 },
        { name: 'deprecated_capabilities', packedOffset: 48, packedBitOffset: 0, type: ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilitiesSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 72}, {version: 1, packedSize: 72}, {version: 2, packedSize: 72}]
    }
  }
};

// Struct: BluetoothDeviceInfo
ash.cros_healthd.cros_healthd.mojom.mojom.BluetoothDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothDeviceInfo',
      packedSize: 88,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'type', packedOffset: 72, packedBitOffset: 0, type: ash.cros_healthd.mojom.BluetoothDeviceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'appearance', packedOffset: 16, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint16Spec, nullable: true, minVersion: 0 },
        { name: 'modalias', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'rssi', packedOffset: 32, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableInt16Spec, nullable: true, minVersion: 0 },
        { name: 'deprecated_mtu', packedOffset: 40, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint16Spec, nullable: true, minVersion: 0 },
        { name: 'uuids', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'battery_percentage', packedOffset: 56, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint8Spec, nullable: true, minVersion: 1 },
        { name: 'bluetooth_class', packedOffset: 64, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 88}, {version: 1, packedSize: 88}, {version: 2, packedSize: 88}]
    }
  }
};

// Struct: DEPRECATED_SupportedCapabilities
ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_SupportedCapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilities',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: SystemInfo
ash.cros_healthd.cros_healthd.mojom.mojom.SystemInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.SystemInfo',
      packedSize: 40,
      fields: [
        { name: 'os_info', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.OsInfoSpec, nullable: false, minVersion: 0 },
        { name: 'vpd_info', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.VpdInfoSpec, nullable: true, minVersion: 0 },
        { name: 'dmi_info', packedOffset: 16, packedBitOffset: 0, type: ash.cros_healthd.mojom.DmiInfoSpec, nullable: true, minVersion: 0 },
        { name: 'psr_info', packedOffset: 24, packedBitOffset: 0, type: ash.cros_healthd.mojom.PsrInfoSpec, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 1, packedSize: 40}]
    }
  }
};

// Struct: OsInfo
ash.cros_healthd.cros_healthd.mojom.mojom.OsInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.OsInfo',
      packedSize: 56,
      fields: [
        { name: 'code_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'marketing_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'os_version', packedOffset: 16, packedBitOffset: 0, type: ash.cros_healthd.mojom.OsVersionSpec, nullable: false, minVersion: 0 },
        { name: 'boot_mode', packedOffset: 40, packedBitOffset: 0, type: ash.cros_healthd.mojom.BootModeSpec, nullable: false, minVersion: 0 },
        { name: 'oem_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
        { name: 'kUnmappedEnumField', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}, {version: 1, packedSize: 56}]
    }
  }
};

// Struct: OsVersion
ash.cros_healthd.cros_healthd.mojom.mojom.OsVersionSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.OsVersion',
      packedSize: 48,
      fields: [
        { name: 'release_milestone', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'build_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'patch_number', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'release_channel', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'branch_number', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 1, packedSize: 48}]
    }
  }
};

// Struct: VpdInfo
ash.cros_healthd.cros_healthd.mojom.mojom.VpdInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.VpdInfo',
      packedSize: 64,
      fields: [
        { name: 'serial_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'region', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'mfg_date', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'activate_date', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'sku_number', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'model_name', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'oem_name', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 56}, {version: 1, packedSize: 64}]
    }
  }
};

// Struct: DmiInfo
ash.cros_healthd.cros_healthd.mojom.mojom.DmiInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.DmiInfo',
      packedSize: 96,
      fields: [
        { name: 'bios_vendor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'bios_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'board_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'board_vendor', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'board_version', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'chassis_vendor', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'chassis_type', packedOffset: 48, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint64Spec, nullable: true, minVersion: 0 },
        { name: 'product_family', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'product_name', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'product_version', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'sys_vendor', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 96}]
    }
  }
};

// Struct: PsrEvent
ash.cros_healthd.cros_healthd.mojom.mojom.PsrEventSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.PsrEvent',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PsrInfo
ash.cros_healthd.cros_healthd.mojom.mojom.PsrInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.PsrInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WirelessInterfaceInfo
ash.cros_healthd.cros_healthd.mojom.mojom.WirelessInterfaceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.WirelessInterfaceInfo',
      packedSize: 32,
      fields: [
        { name: 'interface_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'power_management_on', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'wireless_link_info', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.WirelessLinkInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: WirelessLinkInfo
ash.cros_healthd.cros_healthd.mojom.mojom.WirelessLinkInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.WirelessLinkInfo',
      packedSize: 40,
      fields: [
        { name: 'access_point_address_str', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'tx_bit_rate_mbps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'rx_bit_rate_mbps', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'tx_power_dBm', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'encyption_on', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'link_quality', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'signal_level_dBm', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: AudioInfo
ash.cros_healthd.cros_healthd.mojom.mojom.AudioInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.AudioInfo',
      packedSize: 64,
      fields: [
        { name: 'output_mute', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'input_mute', packedOffset: 52, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'output_volume', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'output_device_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'input_gain', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'input_device_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'underruns', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'severe_underruns', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'output_nodes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.AudioNodeInfoSpec, false), nullable: true, minVersion: 1 },
        { name: 'input_nodes', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.AudioNodeInfoSpec, false), nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 64}, {version: 1, packedSize: 64}]
    }
  }
};

// Struct: AudioNodeInfo
ash.cros_healthd.cros_healthd.mojom.mojom.AudioNodeInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.AudioNodeInfo',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'active', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'node_volume', packedOffset: 25, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'input_node_gain', packedOffset: 26, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: AudioHardwareInfo
ash.cros_healthd.cros_healthd.mojom.mojom.AudioHardwareInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.AudioHardwareInfo',
      packedSize: 16,
      fields: [
        { name: 'audio_cards', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.AudioCardSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AudioCard
ash.cros_healthd.cros_healthd.mojom.mojom.AudioCardSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.AudioCard',
      packedSize: 32,
      fields: [
        { name: 'alsa_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'bus_device', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.BusDeviceSpec, nullable: true, minVersion: 0 },
        { name: 'hd_audio_codecs', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.HDAudioCodecSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: HDAudioCodec
ash.cros_healthd.cros_healthd.mojom.mojom.HDAudioCodecSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.HDAudioCodec',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BootPerformanceInfo
ash.cros_healthd.cros_healthd.mojom.mojom.BootPerformanceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BootPerformanceInfo',
      packedSize: 104,
      fields: [
        { name: 'boot_up_seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'boot_up_timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'shutdown_seconds', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'shutdown_timestamp', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'shutdown_reason', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'tpm_initialization_seconds', packedOffset: 40, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableDoubleSpec, nullable: true, minVersion: 1 },
        { name: 'power_on_to_kernel_seconds_$flag', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'power_on_to_kernel_seconds_$value', originalFieldName: 'power_on_to_kernel_seconds' } },
        { name: 'power_on_to_kernel_seconds_$value', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'power_on_to_kernel_seconds_$flag', originalFieldName: 'power_on_to_kernel_seconds' } },
        { name: 'kernel_to_pre_startup_seconds_$flag', packedOffset: 88, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'kernel_to_pre_startup_seconds_$value', originalFieldName: 'kernel_to_pre_startup_seconds' } },
        { name: 'kernel_to_pre_startup_seconds_$value', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'kernel_to_pre_startup_seconds_$flag', originalFieldName: 'kernel_to_pre_startup_seconds' } },
        { name: 'kernel_to_post_startup_seconds_$flag', packedOffset: 88, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'kernel_to_post_startup_seconds_$value', originalFieldName: 'kernel_to_post_startup_seconds' } },
        { name: 'kernel_to_post_startup_seconds_$value', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'kernel_to_post_startup_seconds_$flag', originalFieldName: 'kernel_to_post_startup_seconds' } },
        { name: 'startup_to_chrome_exec_seconds_$flag', packedOffset: 88, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'startup_to_chrome_exec_seconds_$value', originalFieldName: 'startup_to_chrome_exec_seconds' } },
        { name: 'startup_to_chrome_exec_seconds_$value', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'startup_to_chrome_exec_seconds_$flag', originalFieldName: 'startup_to_chrome_exec_seconds' } },
        { name: 'chrome_exec_to_login_seconds_$flag', packedOffset: 88, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'chrome_exec_to_login_seconds_$value', originalFieldName: 'chrome_exec_to_login_seconds' } },
        { name: 'chrome_exec_to_login_seconds_$value', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'chrome_exec_to_login_seconds_$flag', originalFieldName: 'chrome_exec_to_login_seconds' } },
      ],
      versions: [{version: 0, packedSize: 48}, {version: 1, packedSize: 56}, {version: 2, packedSize: 104}]
    }
  }
};

// Struct: BusDevice
ash.cros_healthd.cros_healthd.mojom.mojom.BusDeviceSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BusDevice',
      packedSize: 48,
      fields: [
        { name: 'vendor_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'product_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_class', packedOffset: 32, packedBitOffset: 0, type: ash.cros_healthd.mojom.BusDeviceClassSpec, nullable: false, minVersion: 0 },
        { name: 'bus_info', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.BusInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: PciBusInfo
ash.cros_healthd.cros_healthd.mojom.mojom.PciBusInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.PciBusInfo',
      packedSize: 40,
      fields: [
        { name: 'class_id', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'subclass_id', packedOffset: 29, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'prog_if_id', packedOffset: 30, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'vendor_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'device_id', packedOffset: 26, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'driver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'sub_vendor_id', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint16Spec, nullable: true, minVersion: 1 },
        { name: 'sub_device_id', packedOffset: 16, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint16Spec, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 1, packedSize: 40}]
    }
  }
};

// Struct: UsbBusInfo
ash.cros_healthd.cros_healthd.mojom.mojom.UsbBusInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.UsbBusInfo',
      packedSize: 48,
      fields: [
        { name: 'class_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'subclass_id', packedOffset: 33, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'protocol_id', packedOffset: 34, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'vendor_id', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'product_id', packedOffset: 30, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'interfaces', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.UsbBusInterfaceInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'fwupd_firmware_version_info', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.FwupdFirmwareVersionInfoSpec, nullable: true, minVersion: 1 },
        { name: 'version', packedOffset: 24, packedBitOffset: 0, type: ash.cros_healthd.mojom.UsbVersionSpec, nullable: false, minVersion: 2 },
        { name: 'spec_speed', packedOffset: 16, packedBitOffset: 0, type: ash.cros_healthd.mojom.UsbSpecSpeedSpec, nullable: false, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 48}, {version: 1, packedSize: 48}, {version: 2, packedSize: 48}]
    }
  }
};

// Struct: FwupdFirmwareVersionInfo
ash.cros_healthd.cros_healthd.mojom.mojom.FwupdFirmwareVersionInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.FwupdFirmwareVersionInfo',
      packedSize: 24,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'version_format', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.FwupdVersionFormatSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: UsbBusInterfaceInfo
ash.cros_healthd.cros_healthd.mojom.mojom.UsbBusInterfaceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.UsbBusInterfaceInfo',
      packedSize: 24,
      fields: [
        { name: 'interface_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'class_id', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'subclass_id', packedOffset: 10, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'protocol_id', packedOffset: 11, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'driver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TpmInfo
ash.cros_healthd.cros_healthd.mojom.mojom.TpmInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TpmInfo',
      packedSize: 56,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.TpmVersionSpec, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.TpmStatusSpec, nullable: false, minVersion: 0 },
        { name: 'dictionary_attack', packedOffset: 16, packedBitOffset: 0, type: ash.cros_healthd.mojom.TpmDictionaryAttackSpec, nullable: false, minVersion: 0 },
        { name: 'attestation', packedOffset: 24, packedBitOffset: 0, type: ash.cros_healthd.mojom.TpmAttestationSpec, nullable: false, minVersion: 0 },
        { name: 'supported_features', packedOffset: 32, packedBitOffset: 0, type: ash.cros_healthd.mojom.TpmSupportedFeaturesSpec, nullable: false, minVersion: 0 },
        { name: 'did_vid', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: TpmVersion
ash.cros_healthd.cros_healthd.mojom.mojom.TpmVersionSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TpmVersion',
      packedSize: 48,
      fields: [
        { name: 'gsc_version', packedOffset: 24, packedBitOffset: 0, type: ash.cros_healthd.mojom.TpmGSCVersionSpec, nullable: false, minVersion: 0 },
        { name: 'family', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'spec_level', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'manufacturer', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'tpm_model', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'firmware_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'vendor_specific', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: TpmStatus
ash.cros_healthd.cros_healthd.mojom.mojom.TpmStatusSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TpmStatus',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'owned', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'owner_password_is_present', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TpmDictionaryAttack
ash.cros_healthd.cros_healthd.mojom.mojom.TpmDictionaryAttackSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TpmDictionaryAttack',
      packedSize: 24,
      fields: [
        { name: 'counter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'threshold', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'lockout_in_effect', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'lockout_seconds_remaining', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TpmAttestation
ash.cros_healthd.cros_healthd.mojom.mojom.TpmAttestationSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TpmAttestation',
      packedSize: 16,
      fields: [
        { name: 'prepared_for_enrollment', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enrolled', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TpmSupportedFeatures
ash.cros_healthd.cros_healthd.mojom.mojom.TpmSupportedFeaturesSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TpmSupportedFeatures',
      packedSize: 16,
      fields: [
        { name: 'support_u2f', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'support_pinweaver', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'support_runtime_selection', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_allowed', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: GraphicsInfo
ash.cros_healthd.cros_healthd.mojom.mojom.GraphicsInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.GraphicsInfo',
      packedSize: 24,
      fields: [
        { name: 'gles_info', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.GLESInfoSpec, nullable: false, minVersion: 0 },
        { name: 'egl_info', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.EGLInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: GLESInfo
ash.cros_healthd.cros_healthd.mojom.mojom.GLESInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.GLESInfo',
      packedSize: 48,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'shading_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'vendor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'renderer', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'extensions', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: EGLInfo
ash.cros_healthd.cros_healthd.mojom.mojom.EGLInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.EGLInfo',
      packedSize: 40,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'vendor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'client_api', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'extensions', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DisplayInfo
ash.cros_healthd.cros_healthd.mojom.mojom.DisplayInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.DisplayInfo',
      packedSize: 24,
      fields: [
        { name: 'embedded_display', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.EmbeddedDisplayInfoSpec, nullable: false, minVersion: 0 },
        { name: 'external_displays', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.ExternalDisplayInfoSpec, false), nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 1, packedSize: 24}]
    }
  }
};

// Struct: EmbeddedDisplayInfo
ash.cros_healthd.cros_healthd.mojom.mojom.EmbeddedDisplayInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.EmbeddedDisplayInfo',
      packedSize: 112,
      fields: [
        { name: 'privacy_screen_supported', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'privacy_screen_enabled', packedOffset: 100, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'display_width', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 1 },
        { name: 'display_height', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 1 },
        { name: 'resolution_horizontal', packedOffset: 16, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 1 },
        { name: 'resolution_vertical', packedOffset: 24, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 1 },
        { name: 'refresh_rate', packedOffset: 32, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableDoubleSpec, nullable: true, minVersion: 1 },
        { name: 'manufacturer', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 2 },
        { name: 'model_id', packedOffset: 48, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint16Spec, nullable: true, minVersion: 2 },
        { name: 'serial_number', packedOffset: 56, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 2 },
        { name: 'manufacture_week', packedOffset: 64, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint8Spec, nullable: true, minVersion: 2 },
        { name: 'manufacture_year', packedOffset: 72, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint16Spec, nullable: true, minVersion: 2 },
        { name: 'edid_version', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 2 },
        { name: 'input_type', packedOffset: 96, packedBitOffset: 0, type: ash.cros_healthd.mojom.DisplayInputTypeSpec, nullable: false, minVersion: 2 },
        { name: 'display_name', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 112}, {version: 1, packedSize: 112}, {version: 2, packedSize: 112}]
    }
  }
};

// Struct: ExternalDisplayInfo
ash.cros_healthd.cros_healthd.mojom.mojom.ExternalDisplayInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.ExternalDisplayInfo',
      packedSize: 112,
      fields: [
        { name: 'display_width', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
        { name: 'display_height', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
        { name: 'resolution_horizontal', packedOffset: 16, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
        { name: 'resolution_vertical', packedOffset: 24, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
        { name: 'refresh_rate', packedOffset: 32, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableDoubleSpec, nullable: true, minVersion: 0 },
        { name: 'manufacturer', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
        { name: 'model_id', packedOffset: 48, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint16Spec, nullable: true, minVersion: 1 },
        { name: 'serial_number', packedOffset: 56, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 1 },
        { name: 'manufacture_week', packedOffset: 64, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint8Spec, nullable: true, minVersion: 1 },
        { name: 'manufacture_year', packedOffset: 72, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint16Spec, nullable: true, minVersion: 1 },
        { name: 'edid_version', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
        { name: 'input_type', packedOffset: 96, packedBitOffset: 0, type: ash.cros_healthd.mojom.DisplayInputTypeSpec, nullable: false, minVersion: 1 },
        { name: 'display_name', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 48}, {version: 1, packedSize: 112}]
    }
  }
};

// Struct: ThunderboltBusInterfaceInfo
ash.cros_healthd.cros_healthd.mojom.mojom.ThunderboltBusInterfaceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.ThunderboltBusInterfaceInfo',
      packedSize: 64,
      fields: [
        { name: 'vendor_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_uuid', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'tx_speed_gbs', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'rx_speed_gbs', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'authorized', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'device_fw_version', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: ThunderboltBusInfo
ash.cros_healthd.cros_healthd.mojom.mojom.ThunderboltBusInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.ThunderboltBusInfo',
      packedSize: 24,
      fields: [
        { name: 'security_level', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.ThunderboltSecurityLevelSpec, nullable: false, minVersion: 0 },
        { name: 'thunderbolt_interfaces', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.ThunderboltBusInterfaceInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: InputInfo
ash.cros_healthd.cros_healthd.mojom.mojom.InputInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.InputInfo',
      packedSize: 32,
      fields: [
        { name: 'touchpad_library_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'touchscreen_devices', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.TouchscreenDeviceSpec, false), nullable: false, minVersion: 0 },
        { name: 'touchpad_devices', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.TouchpadDeviceSpec, false), nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 1, packedSize: 32}]
    }
  }
};

// Struct: TouchscreenDevice
ash.cros_healthd.cros_healthd.mojom.mojom.TouchscreenDeviceSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TouchscreenDevice',
      packedSize: 24,
      fields: [
        { name: 'input_device', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.InputDeviceSpec, nullable: false, minVersion: 0 },
        { name: 'touch_points', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'has_stylus', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_stylus_garage_switch', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TouchpadDevice
ash.cros_healthd.cros_healthd.mojom.mojom.TouchpadDeviceSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TouchpadDevice',
      packedSize: 40,
      fields: [
        { name: 'input_device', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.InputDeviceSpec, nullable: false, minVersion: 0 },
        { name: 'driver_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'vendor_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
        { name: 'product_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 1, packedSize: 40}]
    }
  }
};

// Struct: InputDevice
ash.cros_healthd.cros_healthd.mojom.mojom.InputDeviceSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.InputDevice',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'kUnmappedEnumField', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SensorInfo
ash.cros_healthd.cros_healthd.mojom.mojom.SensorInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.SensorInfo',
      packedSize: 24,
      fields: [
        { name: 'lid_angle', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint16Spec, nullable: true, minVersion: 0 },
        { name: 'sensors', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.SensorSpec, false), nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 1, packedSize: 24}]
    }
  }
};

// Struct: Sensor
ash.cros_healthd.cros_healthd.mojom.mojom.SensorSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.Sensor',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'device_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'kUnmappedEnumField', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ThermalInfo
ash.cros_healthd.cros_healthd.mojom.mojom.ThermalInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.ThermalInfo',
      packedSize: 16,
      fields: [
        { name: 'thermal_sensors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.ThermalSensorInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ThermalSensorInfo
ash.cros_healthd.cros_healthd.mojom.mojom.ThermalSensorInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.ThermalSensorInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TelemetryInfo
ash.cros_healthd.cros_healthd.mojom.mojom.TelemetryInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TelemetryInfo',
      packedSize: 376,
      fields: [
        { name: 'battery_result', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.BatteryResultSpec, nullable: true, minVersion: 0 },
        { name: 'block_device_result', packedOffset: 16, packedBitOffset: 0, type: ash.cros_healthd.mojom.NonRemovableBlockDeviceResultSpec, nullable: true, minVersion: 0 },
        { name: 'cpu_result', packedOffset: 32, packedBitOffset: 0, type: ash.cros_healthd.mojom.CpuResultSpec, nullable: true, minVersion: 0 },
        { name: 'timezone_result', packedOffset: 48, packedBitOffset: 0, type: ash.cros_healthd.mojom.TimezoneResultSpec, nullable: true, minVersion: 0 },
        { name: 'memory_result', packedOffset: 64, packedBitOffset: 0, type: ash.cros_healthd.mojom.MemoryResultSpec, nullable: true, minVersion: 0 },
        { name: 'backlight_result', packedOffset: 80, packedBitOffset: 0, type: ash.cros_healthd.mojom.BacklightResultSpec, nullable: true, minVersion: 0 },
        { name: 'fan_result', packedOffset: 96, packedBitOffset: 0, type: ash.cros_healthd.mojom.FanResultSpec, nullable: true, minVersion: 0 },
        { name: 'stateful_partition_result', packedOffset: 112, packedBitOffset: 0, type: ash.cros_healthd.mojom.StatefulPartitionResultSpec, nullable: true, minVersion: 0 },
        { name: 'bluetooth_result', packedOffset: 128, packedBitOffset: 0, type: ash.cros_healthd.mojom.BluetoothResultSpec, nullable: true, minVersion: 0 },
        { name: 'deprecated_system_result', packedOffset: 144, packedBitOffset: 0, type: ash.cros_healthd.mojom.DEPRECATED_SystemResultSpec, nullable: true, minVersion: 0 },
        { name: 'network_result', packedOffset: 160, packedBitOffset: 0, type: ash.cros_healthd.mojom.NetworkResultSpec, nullable: true, minVersion: 0 },
        { name: 'audio_result', packedOffset: 176, packedBitOffset: 0, type: ash.cros_healthd.mojom.AudioResultSpec, nullable: true, minVersion: 0 },
        { name: 'boot_performance_result', packedOffset: 192, packedBitOffset: 0, type: ash.cros_healthd.mojom.BootPerformanceResultSpec, nullable: true, minVersion: 0 },
        { name: 'bus_result', packedOffset: 208, packedBitOffset: 0, type: ash.cros_healthd.mojom.BusResultSpec, nullable: true, minVersion: 0 },
        { name: 'system_result', packedOffset: 224, packedBitOffset: 0, type: ash.cros_healthd.mojom.SystemResultSpec, nullable: true, minVersion: 0 },
        { name: 'tpm_result', packedOffset: 240, packedBitOffset: 0, type: ash.cros_healthd.mojom.TpmResultSpec, nullable: true, minVersion: 0 },
        { name: 'graphics_result', packedOffset: 256, packedBitOffset: 0, type: ash.cros_healthd.mojom.GraphicsResultSpec, nullable: true, minVersion: 0 },
        { name: 'display_result', packedOffset: 272, packedBitOffset: 0, type: ash.cros_healthd.mojom.DisplayResultSpec, nullable: true, minVersion: 1 },
        { name: 'network_interface_result', packedOffset: 288, packedBitOffset: 0, type: ash.cros_healthd.mojom.NetworkInterfaceResultSpec, nullable: true, minVersion: 2 },
        { name: 'input_result', packedOffset: 304, packedBitOffset: 0, type: ash.cros_healthd.mojom.InputResultSpec, nullable: true, minVersion: 3 },
        { name: 'audio_hardware_result', packedOffset: 320, packedBitOffset: 0, type: ash.cros_healthd.mojom.AudioHardwareResultSpec, nullable: true, minVersion: 4 },
        { name: 'sensor_result', packedOffset: 336, packedBitOffset: 0, type: ash.cros_healthd.mojom.SensorResultSpec, nullable: true, minVersion: 5 },
        { name: 'thermal_result', packedOffset: 352, packedBitOffset: 0, type: ash.cros_healthd.mojom.ThermalResultSpec, nullable: true, minVersion: 6 },
      ],
      versions: [{version: 0, packedSize: 280}, {version: 1, packedSize: 296}, {version: 2, packedSize: 312}, {version: 3, packedSize: 328}, {version: 4, packedSize: 344}, {version: 5, packedSize: 360}, {version: 6, packedSize: 376}]
    }
  }
};
