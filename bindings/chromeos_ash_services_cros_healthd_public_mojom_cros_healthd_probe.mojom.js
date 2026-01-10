// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_probe.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var services = services || {};
var chromeos = chromeos || {};
var services = services || {};

ash.cros_healthd.mojom.CpuArchitectureEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.ProbeCategoryEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.ErrorTypeSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.ProcessStateSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.StorageDevicePurposeSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.SMTControlSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.StatusSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.TypeSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.EncryptionStateSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.CryptoAlgorithmSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.BluetoothDeviceTypeSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.EfiPlatformSizeSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.BootModeSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.EventTypeSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.LogStateSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.BusDeviceClassSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.FwupdVersionFormatSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.UsbVersionSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.UsbSpecSpeedSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.TpmGSCVersionSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.DisplayInputTypeSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.ThunderboltSecurityLevelSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.ConnectionTypeSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.TypeSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.LocationSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.ThermalSensorSourceSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.ProcessResultSpec = { $: {} };
ash.cros_healthd.mojom.BatteryResultSpec = { $: {} };
ash.cros_healthd.mojom.NonRemovableBlockDeviceResultSpec = { $: {} };
ash.cros_healthd.mojom.BlockDeviceVendorSpec = { $: {} };
ash.cros_healthd.mojom.BlockDeviceProductSpec = { $: {} };
ash.cros_healthd.mojom.BlockDeviceRevisionSpec = { $: {} };
ash.cros_healthd.mojom.BlockDeviceFirmwareSpec = { $: {} };
ash.cros_healthd.mojom.BlockDeviceInfoSpec = { $: {} };
ash.cros_healthd.mojom.CpuResultSpec = { $: {} };
ash.cros_healthd.mojom.TimezoneResultSpec = { $: {} };
ash.cros_healthd.mojom.MemoryResultSpec = { $: {} };
ash.cros_healthd.mojom.BacklightResultSpec = { $: {} };
ash.cros_healthd.mojom.FanResultSpec = { $: {} };
ash.cros_healthd.mojom.StatefulPartitionResultSpec = { $: {} };
ash.cros_healthd.mojom.BluetoothResultSpec = { $: {} };
ash.cros_healthd.mojom.DEPRECATED_SystemResultSpec = { $: {} };
ash.cros_healthd.mojom.SystemResultSpec = { $: {} };
ash.cros_healthd.mojom.NetworkResultSpec = { $: {} };
ash.cros_healthd.mojom.NetworkInterfaceResultSpec = { $: {} };
ash.cros_healthd.mojom.NetworkInterfaceInfoSpec = { $: {} };
ash.cros_healthd.mojom.AudioResultSpec = { $: {} };
ash.cros_healthd.mojom.AudioHardwareResultSpec = { $: {} };
ash.cros_healthd.mojom.BootPerformanceResultSpec = { $: {} };
ash.cros_healthd.mojom.BusResultSpec = { $: {} };
ash.cros_healthd.mojom.BusInfoSpec = { $: {} };
ash.cros_healthd.mojom.TpmResultSpec = { $: {} };
ash.cros_healthd.mojom.GraphicsResultSpec = { $: {} };
ash.cros_healthd.mojom.DisplayResultSpec = { $: {} };
ash.cros_healthd.mojom.InputResultSpec = { $: {} };
ash.cros_healthd.mojom.SensorResultSpec = { $: {} };
ash.cros_healthd.mojom.ThermalResultSpec = { $: {} };
ash.cros_healthd.mojom.ProbeErrorSpec = { $: {} };
ash.cros_healthd.mojom.MultipleProcessResultSpec = { $: {} };
ash.cros_healthd.mojom.ProcessInfoSpec = { $: {} };
ash.cros_healthd.mojom.BatteryInfoSpec = { $: {} };
ash.cros_healthd.mojom.NvmeDeviceInfoSpec = { $: {} };
ash.cros_healthd.mojom.EmmcDeviceInfoSpec = { $: {} };
ash.cros_healthd.mojom.UfsDeviceInfoSpec = { $: {} };
ash.cros_healthd.mojom.NonRemovableBlockDeviceInfoSpec = { $: {} };
ash.cros_healthd.mojom.CpuInfoSpec = { $: {} };
ash.cros_healthd.mojom.VirtualizationInfoSpec = { $: {} };
ash.cros_healthd.mojom.VulnerabilityInfoSpec = { $: {} };
ash.cros_healthd.mojom.KeylockerInfoSpec = { $: {} };
ash.cros_healthd.mojom.PhysicalCpuInfoSpec = { $: {} };
ash.cros_healthd.mojom.CpuVirtualizationInfoSpec = { $: {} };
ash.cros_healthd.mojom.LogicalCpuInfoSpec = { $: {} };
ash.cros_healthd.mojom.CpuCStateInfoSpec = { $: {} };
ash.cros_healthd.mojom.CpuTemperatureChannelSpec = { $: {} };
ash.cros_healthd.mojom.TimezoneInfoSpec = { $: {} };
ash.cros_healthd.mojom.MemoryInfoSpec = { $: {} };
ash.cros_healthd.mojom.MemoryEncryptionInfoSpec = { $: {} };
ash.cros_healthd.mojom.BacklightInfoSpec = { $: {} };
ash.cros_healthd.mojom.FanInfoSpec = { $: {} };
ash.cros_healthd.mojom.StatefulPartitionInfoSpec = { $: {} };
ash.cros_healthd.mojom.BluetoothAdapterInfoSpec = { $: {} };
ash.cros_healthd.mojom.BluetoothDeviceInfoSpec = { $: {} };
ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilitiesSpec = { $: {} };
ash.cros_healthd.mojom.SystemInfoSpec = { $: {} };
ash.cros_healthd.mojom.OsInfoSpec = { $: {} };
ash.cros_healthd.mojom.OsVersionSpec = { $: {} };
ash.cros_healthd.mojom.VpdInfoSpec = { $: {} };
ash.cros_healthd.mojom.DmiInfoSpec = { $: {} };
ash.cros_healthd.mojom.PsrEventSpec = { $: {} };
ash.cros_healthd.mojom.PsrInfoSpec = { $: {} };
ash.cros_healthd.mojom.WirelessInterfaceInfoSpec = { $: {} };
ash.cros_healthd.mojom.WirelessLinkInfoSpec = { $: {} };
ash.cros_healthd.mojom.AudioInfoSpec = { $: {} };
ash.cros_healthd.mojom.AudioNodeInfoSpec = { $: {} };
ash.cros_healthd.mojom.AudioHardwareInfoSpec = { $: {} };
ash.cros_healthd.mojom.AudioCardSpec = { $: {} };
ash.cros_healthd.mojom.HDAudioCodecSpec = { $: {} };
ash.cros_healthd.mojom.BootPerformanceInfoSpec = { $: {} };
ash.cros_healthd.mojom.BusDeviceSpec = { $: {} };
ash.cros_healthd.mojom.PciBusInfoSpec = { $: {} };
ash.cros_healthd.mojom.UsbBusInfoSpec = { $: {} };
ash.cros_healthd.mojom.FwupdFirmwareVersionInfoSpec = { $: {} };
ash.cros_healthd.mojom.UsbBusInterfaceInfoSpec = { $: {} };
ash.cros_healthd.mojom.TpmInfoSpec = { $: {} };
ash.cros_healthd.mojom.TpmVersionSpec = { $: {} };
ash.cros_healthd.mojom.TpmStatusSpec = { $: {} };
ash.cros_healthd.mojom.TpmDictionaryAttackSpec = { $: {} };
ash.cros_healthd.mojom.TpmAttestationSpec = { $: {} };
ash.cros_healthd.mojom.TpmSupportedFeaturesSpec = { $: {} };
ash.cros_healthd.mojom.GraphicsInfoSpec = { $: {} };
ash.cros_healthd.mojom.GLESInfoSpec = { $: {} };
ash.cros_healthd.mojom.EGLInfoSpec = { $: {} };
ash.cros_healthd.mojom.DisplayInfoSpec = { $: {} };
ash.cros_healthd.mojom.EmbeddedDisplayInfoSpec = { $: {} };
ash.cros_healthd.mojom.ExternalDisplayInfoSpec = { $: {} };
ash.cros_healthd.mojom.ThunderboltBusInterfaceInfoSpec = { $: {} };
ash.cros_healthd.mojom.ThunderboltBusInfoSpec = { $: {} };
ash.cros_healthd.mojom.InputInfoSpec = { $: {} };
ash.cros_healthd.mojom.TouchscreenDeviceSpec = { $: {} };
ash.cros_healthd.mojom.TouchpadDeviceSpec = { $: {} };
ash.cros_healthd.mojom.InputDeviceSpec = { $: {} };
ash.cros_healthd.mojom.SensorInfoSpec = { $: {} };
ash.cros_healthd.mojom.SensorSpec = { $: {} };
ash.cros_healthd.mojom.ThermalInfoSpec = { $: {} };
ash.cros_healthd.mojom.ThermalSensorInfoSpec = { $: {} };
ash.cros_healthd.mojom.TelemetryInfoSpec = { $: {} };

// Enum: CpuArchitectureEnum
ash.cros_healthd.mojom.CpuArchitectureEnum = {
  kUnknown: 0,
  kX86_64: 1,
  kAArch64: 2,
  kArmv7l: 3,
};

// Enum: ProbeCategoryEnum
ash.cros_healthd.mojom.ProbeCategoryEnum = {
  kUnknown: 16,
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
  kDisplay: 17,
  kNetworkInterface: 18,
  kInput: 19,
  MinVersion: 19,
  MinVersion: 19,
  MinVersion: 19,
};

// Enum: ErrorType
ash.cros_healthd.mojom.ErrorType = {
  kUnknown: 4,
  kFileReadError: 0,
  kParseError: 1,
  kSystemUtilityError: 2,
  kServiceUnavailable: 3,
};

// Enum: ProcessState
ash.cros_healthd.mojom.ProcessState = {
  kUnknown: 7,
  kRunning: 0,
  kSleeping: 1,
  kWaiting: 2,
  kZombie: 3,
  kStopped: 4,
  kTracingStop: 5,
  kDead: 6,
  MinVersion: 6,
};

// Enum: StorageDevicePurpose
ash.cros_healthd.mojom.StorageDevicePurpose = {
  kUnknown: 0,
  kBootDevice: 1,
  DEPRECATED_kSwapDevice: 2,
  MinVersion: 2,
};

// Enum: SMTControl
ash.cros_healthd.mojom.SMTControl = {
  kUnmappedEnumField: 0,
  kOn: 1,
  kOff: 2,
  kForceOff: 3,
  kNotSupported: 4,
  kNotImplemented: 5,
};

// Enum: Status
ash.cros_healthd.mojom.Status = {
  kUnmappedEnumField: 0,
  kNotAffected: 1,
  kVulnerable: 2,
  kMitigation: 3,
  kUnknown: 4,
  kUnrecognized: 5,
};

// Enum: Type
ash.cros_healthd.mojom.Type = {
  kUnmappedEnumField: 0,
  kVMX: 1,
  kSVM: 2,
};

// Enum: EncryptionState
ash.cros_healthd.mojom.EncryptionState = {
  kUnknown: 0,
  kEncryptionDisabled: 1,
  kTmeEnabled: 2,
  kMktmeEnabled: 3,
};

// Enum: CryptoAlgorithm
ash.cros_healthd.mojom.CryptoAlgorithm = {
  kUnknown: 0,
  kAesXts128: 1,
  kAesXts256: 2,
};

// Enum: BluetoothDeviceType
ash.cros_healthd.mojom.BluetoothDeviceType = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kBrEdr: 2,
  kLe: 3,
  kDual: 4,
};

// Enum: EfiPlatformSize
ash.cros_healthd.mojom.EfiPlatformSize = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  k64: 2,
  k32: 3,
};

// Enum: BootMode
ash.cros_healthd.mojom.BootMode = {
  kUnknown: 0,
  kCrosSecure: 1,
  kCrosEfi: 2,
  kCrosLegacy: 3,
  kCrosEfiSecure: 4,
};

// Enum: EventType
ash.cros_healthd.mojom.EventType = {
  kUnmappedEnumField: 0,
  kLogStart: 1,
  kLogEnd: 2,
  kCsmeRecovery: 3,
  kPrtcFailure: 4,
  kSvnIncrease: 5,
  MinVersion: 5,
  MinVersion: 5,
  MinVersion: 5,
  MinVersion: 5,
  MinVersion: 5,
};

// Enum: LogState
ash.cros_healthd.mojom.LogState = {
  kUnmappedEnumField: 0,
  kNotStarted: 1,
  kStarted: 2,
  kStopped: 3,
};

// Enum: BusDeviceClass
ash.cros_healthd.mojom.BusDeviceClass = {
  kOthers: 0,
  kDisplayController: 1,
  kEthernetController: 2,
  kWirelessController: 3,
  kBluetoothAdapter: 4,
  kThunderboltController: 5,
  kAudioCard: 6,
};

// Enum: FwupdVersionFormat
ash.cros_healthd.mojom.FwupdVersionFormat = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kPlain: 2,
  kNumber: 3,
  kPair: 4,
  kTriplet: 5,
  kQuad: 6,
  kBcd: 7,
  kIntelMe: 8,
  kIntelMe2: 9,
  kSurfaceLegacy: 10,
  kSurface: 11,
  kDellBios: 12,
  kHex: 13,
};

// Enum: UsbVersion
ash.cros_healthd.mojom.UsbVersion = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kUsb1: 2,
  kUsb2: 3,
  kUsb3: 4,
};

// Enum: UsbSpecSpeed
ash.cros_healthd.mojom.UsbSpecSpeed = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  k1_5Mbps: 2,
  k12Mbps: 3,
  kDeprecatedSpeed: 4,
  k480Mbps: 5,
  k5Gbps: 6,
  k10Gbps: 7,
  k20Gbps: 8,
};

// Enum: TpmGSCVersion
ash.cros_healthd.mojom.TpmGSCVersion = {
  kNotGSC: 0,
  kCr50: 1,
  kTi50: 2,
};

// Enum: DisplayInputType
ash.cros_healthd.mojom.DisplayInputType = {
  kUnmappedEnumField: 0,
  kDigital: 1,
  kAnalog: 2,
};

// Enum: ThunderboltSecurityLevel
ash.cros_healthd.mojom.ThunderboltSecurityLevel = {
  kNone: 0,
  kUserLevel: 1,
  kSecureLevel: 2,
  kDpOnlyLevel: 3,
  kUsbOnlyLevel: 4,
  kNoPcieLevel: 5,
};

// Enum: ConnectionType
ash.cros_healthd.mojom.ConnectionType = {
  kUnmappedEnumField: 0,
  kInternal: 1,
  kUSB: 2,
  kBluetooth: 3,
  kUnknown: 4,
};

// Enum: Type
ash.cros_healthd.mojom.Type = {
  kUnmappedEnumField: 0,
  kAccel: 1,
  kLight: 2,
  kGyro: 3,
  kAngle: 4,
  kGravity: 5,
  MinVersion: 5,
};

// Enum: Location
ash.cros_healthd.mojom.Location = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kBase: 2,
  kLid: 3,
  kCamera: 4,
};

// Enum: ThermalSensorSource
ash.cros_healthd.mojom.ThermalSensorSource = {
  kUnmappedEnumField: 0,
  kEc: 1,
  kSysFs: 2,
};

// Union: ProcessResult
mojo.internal.Union(
    ash.cros_healthd.mojom.ProcessResultSpec, 'ash.cros_healthd.mojom.ProcessResult', {
      'process_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.ProcessInfoSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: BatteryResult
mojo.internal.Union(
    ash.cros_healthd.mojom.BatteryResultSpec, 'ash.cros_healthd.mojom.BatteryResult', {
      'battery_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.BatteryInfoSpec,
        'nullable': true,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: NonRemovableBlockDeviceResult
mojo.internal.Union(
    ash.cros_healthd.mojom.NonRemovableBlockDeviceResultSpec, 'ash.cros_healthd.mojom.NonRemovableBlockDeviceResult', {
      'block_device_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(ash.cros_healthd.mojom.NonRemovableBlockDeviceInfoSpec, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: BlockDeviceVendor
mojo.internal.Union(
    ash.cros_healthd.mojom.BlockDeviceVendorSpec, 'ash.cros_healthd.mojom.BlockDeviceVendor', {
      'nvme_subsystem_vendor': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'emmc_oemid': {
        'ordinal': 1,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'other': {
        'ordinal': 2,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'unknown': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'jedec_manfid': {
        'ordinal': 4,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
    });

// Union: BlockDeviceProduct
mojo.internal.Union(
    ash.cros_healthd.mojom.BlockDeviceProductSpec, 'ash.cros_healthd.mojom.BlockDeviceProduct', {
      'nvme_subsystem_device': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'emmc_pnm': {
        'ordinal': 1,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'other': {
        'ordinal': 2,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'unknown': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
    });

// Union: BlockDeviceRevision
mojo.internal.Union(
    ash.cros_healthd.mojom.BlockDeviceRevisionSpec, 'ash.cros_healthd.mojom.BlockDeviceRevision', {
      'nvme_pcie_rev': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'emmc_prv': {
        'ordinal': 1,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'other': {
        'ordinal': 2,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'unknown': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
    });

// Union: BlockDeviceFirmware
mojo.internal.Union(
    ash.cros_healthd.mojom.BlockDeviceFirmwareSpec, 'ash.cros_healthd.mojom.BlockDeviceFirmware', {
      'nvme_firmware_rev': {
        'ordinal': 0,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'emmc_fwrev': {
        'ordinal': 1,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'other': {
        'ordinal': 2,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'unknown': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'ufs_fwrev': {
        'ordinal': 4,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
    });

// Union: BlockDeviceInfo
mojo.internal.Union(
    ash.cros_healthd.mojom.BlockDeviceInfoSpec, 'ash.cros_healthd.mojom.BlockDeviceInfo', {
      'unrecognized': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'nvme_device_info': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.NvmeDeviceInfoSpec,
        'nullable': false,
      },
      'emmc_device_info': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.EmmcDeviceInfoSpec,
        'nullable': false,
      },
      'ufs_device_info': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.UfsDeviceInfoSpec,
        'nullable': false,
      },
    });

// Union: CpuResult
mojo.internal.Union(
    ash.cros_healthd.mojom.CpuResultSpec, 'ash.cros_healthd.mojom.CpuResult', {
      'cpu_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.CpuInfoSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: TimezoneResult
mojo.internal.Union(
    ash.cros_healthd.mojom.TimezoneResultSpec, 'ash.cros_healthd.mojom.TimezoneResult', {
      'timezone_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.TimezoneInfoSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: MemoryResult
mojo.internal.Union(
    ash.cros_healthd.mojom.MemoryResultSpec, 'ash.cros_healthd.mojom.MemoryResult', {
      'memory_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.MemoryInfoSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: BacklightResult
mojo.internal.Union(
    ash.cros_healthd.mojom.BacklightResultSpec, 'ash.cros_healthd.mojom.BacklightResult', {
      'backlight_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(ash.cros_healthd.mojom.BacklightInfoSpec, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: FanResult
mojo.internal.Union(
    ash.cros_healthd.mojom.FanResultSpec, 'ash.cros_healthd.mojom.FanResult', {
      'fan_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(ash.cros_healthd.mojom.FanInfoSpec, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: StatefulPartitionResult
mojo.internal.Union(
    ash.cros_healthd.mojom.StatefulPartitionResultSpec, 'ash.cros_healthd.mojom.StatefulPartitionResult', {
      'partition_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.StatefulPartitionInfoSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: BluetoothResult
mojo.internal.Union(
    ash.cros_healthd.mojom.BluetoothResultSpec, 'ash.cros_healthd.mojom.BluetoothResult', {
      'bluetooth_adapter_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(ash.cros_healthd.mojom.BluetoothAdapterInfoSpec, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: DEPRECATED_SystemResult
mojo.internal.Union(
    ash.cros_healthd.mojom.DEPRECATED_SystemResultSpec, 'ash.cros_healthd.mojom.DEPRECATED_SystemResult', {
      'error': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: SystemResult
mojo.internal.Union(
    ash.cros_healthd.mojom.SystemResultSpec, 'ash.cros_healthd.mojom.SystemResult', {
      'system_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.SystemInfoSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: NetworkResult
mojo.internal.Union(
    ash.cros_healthd.mojom.NetworkResultSpec, 'ash.cros_healthd.mojom.NetworkResult', {
      'network_health': {
        'ordinal': 0,
        'type': chromeos.network_health.mojom.NetworkHealthStateSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: NetworkInterfaceResult
mojo.internal.Union(
    ash.cros_healthd.mojom.NetworkInterfaceResultSpec, 'ash.cros_healthd.mojom.NetworkInterfaceResult', {
      'network_interface_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(ash.cros_healthd.mojom.NetworkInterfaceInfoSpec, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: NetworkInterfaceInfo
mojo.internal.Union(
    ash.cros_healthd.mojom.NetworkInterfaceInfoSpec, 'ash.cros_healthd.mojom.NetworkInterfaceInfo', {
      'wireless_interface_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.WirelessInterfaceInfoSpec,
        'nullable': false,
      },
    });

// Union: AudioResult
mojo.internal.Union(
    ash.cros_healthd.mojom.AudioResultSpec, 'ash.cros_healthd.mojom.AudioResult', {
      'audio_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.AudioInfoSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: AudioHardwareResult
mojo.internal.Union(
    ash.cros_healthd.mojom.AudioHardwareResultSpec, 'ash.cros_healthd.mojom.AudioHardwareResult', {
      'audio_hardware_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.AudioHardwareInfoSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: BootPerformanceResult
mojo.internal.Union(
    ash.cros_healthd.mojom.BootPerformanceResultSpec, 'ash.cros_healthd.mojom.BootPerformanceResult', {
      'boot_performance_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.BootPerformanceInfoSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: BusResult
mojo.internal.Union(
    ash.cros_healthd.mojom.BusResultSpec, 'ash.cros_healthd.mojom.BusResult', {
      'bus_devices': {
        'ordinal': 0,
        'type': mojo.internal.Array(ash.cros_healthd.mojom.BusDeviceSpec, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: BusInfo
mojo.internal.Union(
    ash.cros_healthd.mojom.BusInfoSpec, 'ash.cros_healthd.mojom.BusInfo', {
      'pci_bus_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.PciBusInfoSpec,
        'nullable': false,
      },
      'usb_bus_info': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.UsbBusInfoSpec,
        'nullable': false,
      },
      'thunderbolt_bus_info': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.ThunderboltBusInfoSpec,
        'nullable': false,
      },
      'unmapped_field': {
        'ordinal': 3,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
    });

// Union: TpmResult
mojo.internal.Union(
    ash.cros_healthd.mojom.TpmResultSpec, 'ash.cros_healthd.mojom.TpmResult', {
      'tpm_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.TpmInfoSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: GraphicsResult
mojo.internal.Union(
    ash.cros_healthd.mojom.GraphicsResultSpec, 'ash.cros_healthd.mojom.GraphicsResult', {
      'graphics_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.GraphicsInfoSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: DisplayResult
mojo.internal.Union(
    ash.cros_healthd.mojom.DisplayResultSpec, 'ash.cros_healthd.mojom.DisplayResult', {
      'display_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.DisplayInfoSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: InputResult
mojo.internal.Union(
    ash.cros_healthd.mojom.InputResultSpec, 'ash.cros_healthd.mojom.InputResult', {
      'input_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.InputInfoSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: SensorResult
mojo.internal.Union(
    ash.cros_healthd.mojom.SensorResultSpec, 'ash.cros_healthd.mojom.SensorResult', {
      'sensor_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.SensorInfoSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: ThermalResult
mojo.internal.Union(
    ash.cros_healthd.mojom.ThermalResultSpec, 'ash.cros_healthd.mojom.ThermalResult', {
      'thermal_info': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.ThermalInfoSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Struct: ProbeError
mojo.internal.Struct(
    ash.cros_healthd.mojom.ProbeErrorSpec, 'ash.cros_healthd.mojom.ProbeError', [
      mojo.internal.StructField('type', 0, 0, ash.cros_healthd.mojom.ErrorTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('msg', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MultipleProcessResult
mojo.internal.Struct(
    ash.cros_healthd.mojom.MultipleProcessResultSpec, 'ash.cros_healthd.mojom.MultipleProcessResult', [
      mojo.internal.StructField('process_infos', 0, 0, mojo.internal.Map(mojo.internal.Uint32, ash.cros_healthd.mojom.ProcessInfoSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('errors', 8, 0, mojo.internal.Map(mojo.internal.Uint32, ash.cros_healthd.mojom.ProbeErrorSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProcessInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.ProcessInfoSpec, 'ash.cros_healthd.mojom.ProcessInfo', [
      mojo.internal.StructField('command', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('user_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('priority', 12, 0, mojo.internal.Int8, 0, false, 0, undefined),
      mojo.internal.StructField('nice', 13, 0, mojo.internal.Int8, 0, false, 0, undefined),
      mojo.internal.StructField('uptime_ticks', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('state', 24, 0, ash.cros_healthd.mojom.ProcessStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('total_memory_kib', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('resident_memory_kib', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('free_memory_kib', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('bytes_read', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('bytes_written', 48, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('read_system_calls', 56, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('write_system_calls', 64, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('physical_bytes_read', 72, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('physical_bytes_written', 80, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('cancelled_bytes_written', 88, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('name', 96, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('parent_process_id', 104, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('process_group_id', 108, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('threads', 112, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('process_id', 116, 0, mojo.internal.Uint32, 0, false, 2, undefined),
    ],
    [[0, 104], [1, 128], [2, 128]]);

// Struct: BatteryInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.BatteryInfoSpec, 'ash.cros_healthd.mojom.BatteryInfo', [
      mojo.internal.StructField('cycle_count', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('voltage_now', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('vendor', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('serial_number', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('charge_full_design', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('charge_full', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('voltage_min_design', 48, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('model_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('charge_now', 64, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('current_now', 72, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('technology', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('manufacture_date', 96, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('temperature', 104, 0, ash.cros_healthd.mojom.NullableUint64Spec, null, true, 0, undefined),
    ],
    [[0, 120]]);

// Struct: NvmeDeviceInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.NvmeDeviceInfoSpec, 'ash.cros_healthd.mojom.NvmeDeviceInfo', [
      mojo.internal.StructField('subsystem_vendor', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('subsystem_device', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pcie_rev', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('firmware_rev', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: EmmcDeviceInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.EmmcDeviceInfoSpec, 'ash.cros_healthd.mojom.EmmcDeviceInfo', [
      mojo.internal.StructField('manfid', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('pnm', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('prv', 16, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('fwrev', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: UfsDeviceInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.UfsDeviceInfoSpec, 'ash.cros_healthd.mojom.UfsDeviceInfo', [
      mojo.internal.StructField('jedec_manfid', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('fwrev', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NonRemovableBlockDeviceInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.NonRemovableBlockDeviceInfoSpec, 'ash.cros_healthd.mojom.NonRemovableBlockDeviceInfo', [
      mojo.internal.StructField('bytes_read_since_last_boot', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('bytes_written_since_last_boot', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('read_time_seconds_since_last_boot', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('write_time_seconds_since_last_boot', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('io_time_seconds_since_last_boot', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('discard_time_seconds_since_last_boot', 40, 0, ash.cros_healthd.mojom.NullableUint64Spec, null, true, 0, undefined),
      mojo.internal.StructField('vendor_id', 48, 0, ash.cros_healthd.mojom.BlockDeviceVendorSpec, null, false, 0, undefined),
      mojo.internal.StructField('product_id', 64, 0, ash.cros_healthd.mojom.BlockDeviceProductSpec, null, false, 0, undefined),
      mojo.internal.StructField('revision', 80, 0, ash.cros_healthd.mojom.BlockDeviceRevisionSpec, null, false, 0, undefined),
      mojo.internal.StructField('name', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('size', 104, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('firmware_version', 112, 0, ash.cros_healthd.mojom.BlockDeviceFirmwareSpec, null, false, 0, undefined),
      mojo.internal.StructField('type', 128, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('purpose', 136, 0, ash.cros_healthd.mojom.StorageDevicePurposeSpec, null, false, 0, undefined),
      mojo.internal.StructField('path', 144, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('manufacturer_id', 152, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('serial', 156, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('device_info', 160, 0, ash.cros_healthd.mojom.BlockDeviceInfoSpec, null, true, 1, undefined),
      mojo.internal.StructField('firmware_string', 176, 0, mojo.internal.String, null, true, 2, undefined),
      mojo.internal.StructField('is_rotational_$flag', 184, 0, mojo.internal.Bool, false, false, 3, { isPrimary: true, linkedValueFieldName: 'is_rotational_$value', originalFieldName: 'is_rotational' }),
      mojo.internal.StructField('is_rotational_$value', 184, 1, mojo.internal.Bool, false, false, 3, { isPrimary: false, linkedValueFieldName: 'is_rotational_$flag', originalFieldName: 'is_rotational' }),
    ],
    [[0, 168], [1, 184], [2, 192], [3, 200]]);

// Struct: CpuInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.CpuInfoSpec, 'ash.cros_healthd.mojom.CpuInfo', [
      mojo.internal.StructField('num_total_threads', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('architecture', 4, 0, ash.cros_healthd.mojom.CpuArchitectureEnumSpec, null, false, 0, undefined),
      mojo.internal.StructField('physical_cpus', 8, 0, mojo.internal.Array(ash.cros_healthd.mojom.PhysicalCpuInfoSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('temperature_channels', 16, 0, mojo.internal.Array(ash.cros_healthd.mojom.CpuTemperatureChannelSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('keylocker_info', 24, 0, ash.cros_healthd.mojom.KeylockerInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('virtualization', 32, 0, ash.cros_healthd.mojom.VirtualizationInfoSpec, null, true, 1, undefined),
      mojo.internal.StructField('vulnerabilities', 40, 0, mojo.internal.Map(mojo.internal.String, ash.cros_healthd.mojom.VulnerabilityInfoSpec, false), null, true, 1, undefined),
    ],
    [[0, 40], [1, 56]]);

// Struct: VirtualizationInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.VirtualizationInfoSpec, 'ash.cros_healthd.mojom.VirtualizationInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VulnerabilityInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.VulnerabilityInfoSpec, 'ash.cros_healthd.mojom.VulnerabilityInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: KeylockerInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.KeylockerInfoSpec, 'ash.cros_healthd.mojom.KeylockerInfo', [
      mojo.internal.StructField('keylocker_configured', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PhysicalCpuInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.PhysicalCpuInfoSpec, 'ash.cros_healthd.mojom.PhysicalCpuInfo', [
      mojo.internal.StructField('model_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('logical_cpus', 8, 0, mojo.internal.Array(ash.cros_healthd.mojom.LogicalCpuInfoSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('flags', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 1, undefined),
      mojo.internal.StructField('virtualization', 24, 0, ash.cros_healthd.mojom.CpuVirtualizationInfoSpec, null, true, 1, undefined),
    ],
    [[0, 24], [1, 40]]);

// Struct: CpuVirtualizationInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.CpuVirtualizationInfoSpec, 'ash.cros_healthd.mojom.CpuVirtualizationInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LogicalCpuInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.LogicalCpuInfoSpec, 'ash.cros_healthd.mojom.LogicalCpuInfo', [
      mojo.internal.StructField('max_clock_speed_khz', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('scaling_max_frequency_khz', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('scaling_current_frequency_khz', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('user_time_user_hz', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('system_time_user_hz', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('idle_time_user_hz', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('c_states', 40, 0, mojo.internal.Array(ash.cros_healthd.mojom.CpuCStateInfoSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('core_id', 48, 0, mojo.internal.Uint32, 0, false, 1, undefined),
    ],
    [[0, 56], [1, 64]]);

// Struct: CpuCStateInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.CpuCStateInfoSpec, 'ash.cros_healthd.mojom.CpuCStateInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('time_in_state_since_last_boot_us', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CpuTemperatureChannel
mojo.internal.Struct(
    ash.cros_healthd.mojom.CpuTemperatureChannelSpec, 'ash.cros_healthd.mojom.CpuTemperatureChannel', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('temperature_celsius', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TimezoneInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.TimezoneInfoSpec, 'ash.cros_healthd.mojom.TimezoneInfo', [
      mojo.internal.StructField('posix', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('region', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MemoryInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.MemoryInfoSpec, 'ash.cros_healthd.mojom.MemoryInfo', [
      mojo.internal.StructField('total_memory_kib', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('free_memory_kib', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('available_memory_kib', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('page_faults_since_last_boot', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('memory_encryption_info', 24, 0, ash.cros_healthd.mojom.MemoryEncryptionInfoSpec, null, true, 1, undefined),
      mojo.internal.StructField('buffers_kib_$flag', 32, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'buffers_kib_$value', originalFieldName: 'buffers_kib' }),
      mojo.internal.StructField('buffers_kib_$value', 40, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'buffers_kib_$flag', originalFieldName: 'buffers_kib' }),
      mojo.internal.StructField('page_cache_kib_$flag', 48, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'page_cache_kib_$value', originalFieldName: 'page_cache_kib' }),
      mojo.internal.StructField('page_cache_kib_$value', 56, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'page_cache_kib_$flag', originalFieldName: 'page_cache_kib' }),
      mojo.internal.StructField('shared_memory_kib_$flag', 64, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'shared_memory_kib_$value', originalFieldName: 'shared_memory_kib' }),
      mojo.internal.StructField('shared_memory_kib_$value', 72, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'shared_memory_kib_$flag', originalFieldName: 'shared_memory_kib' }),
      mojo.internal.StructField('active_memory_kib_$flag', 80, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'active_memory_kib_$value', originalFieldName: 'active_memory_kib' }),
      mojo.internal.StructField('active_memory_kib_$value', 88, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'active_memory_kib_$flag', originalFieldName: 'active_memory_kib' }),
      mojo.internal.StructField('inactive_memory_kib_$flag', 96, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'inactive_memory_kib_$value', originalFieldName: 'inactive_memory_kib' }),
      mojo.internal.StructField('inactive_memory_kib_$value', 104, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'inactive_memory_kib_$flag', originalFieldName: 'inactive_memory_kib' }),
      mojo.internal.StructField('total_swap_memory_kib_$flag', 112, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'total_swap_memory_kib_$value', originalFieldName: 'total_swap_memory_kib' }),
      mojo.internal.StructField('total_swap_memory_kib_$value', 120, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'total_swap_memory_kib_$flag', originalFieldName: 'total_swap_memory_kib' }),
      mojo.internal.StructField('free_swap_memory_kib_$flag', 128, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'free_swap_memory_kib_$value', originalFieldName: 'free_swap_memory_kib' }),
      mojo.internal.StructField('free_swap_memory_kib_$value', 136, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'free_swap_memory_kib_$flag', originalFieldName: 'free_swap_memory_kib' }),
      mojo.internal.StructField('cached_swap_memory_kib_$flag', 144, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'cached_swap_memory_kib_$value', originalFieldName: 'cached_swap_memory_kib' }),
      mojo.internal.StructField('cached_swap_memory_kib_$value', 152, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'cached_swap_memory_kib_$flag', originalFieldName: 'cached_swap_memory_kib' }),
      mojo.internal.StructField('total_slab_memory_kib_$flag', 160, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'total_slab_memory_kib_$value', originalFieldName: 'total_slab_memory_kib' }),
      mojo.internal.StructField('total_slab_memory_kib_$value', 168, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'total_slab_memory_kib_$flag', originalFieldName: 'total_slab_memory_kib' }),
      mojo.internal.StructField('reclaimable_slab_memory_kib_$flag', 176, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'reclaimable_slab_memory_kib_$value', originalFieldName: 'reclaimable_slab_memory_kib' }),
      mojo.internal.StructField('reclaimable_slab_memory_kib_$value', 184, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'reclaimable_slab_memory_kib_$flag', originalFieldName: 'reclaimable_slab_memory_kib' }),
      mojo.internal.StructField('unreclaimable_slab_memory_kib_$flag', 192, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'unreclaimable_slab_memory_kib_$value', originalFieldName: 'unreclaimable_slab_memory_kib' }),
      mojo.internal.StructField('unreclaimable_slab_memory_kib_$value', 200, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'unreclaimable_slab_memory_kib_$flag', originalFieldName: 'unreclaimable_slab_memory_kib' }),
    ],
    [[0, 32], [1, 40], [2, 216]]);

// Struct: MemoryEncryptionInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.MemoryEncryptionInfoSpec, 'ash.cros_healthd.mojom.MemoryEncryptionInfo', [
      mojo.internal.StructField('encryption_state', 0, 0, ash.cros_healthd.mojom.EncryptionStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('max_key_number', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_length', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('active_algorithm', 12, 0, ash.cros_healthd.mojom.CryptoAlgorithmSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BacklightInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.BacklightInfoSpec, 'ash.cros_healthd.mojom.BacklightInfo', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('max_brightness', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('brightness', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FanInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.FanInfoSpec, 'ash.cros_healthd.mojom.FanInfo', [
      mojo.internal.StructField('speed_rpm', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: StatefulPartitionInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.StatefulPartitionInfoSpec, 'ash.cros_healthd.mojom.StatefulPartitionInfo', [
      mojo.internal.StructField('available_space', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('total_space', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('filesystem', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mount_source', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: BluetoothAdapterInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.BluetoothAdapterInfoSpec, 'ash.cros_healthd.mojom.BluetoothAdapterInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('address', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('powered', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('num_connected_devices', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('connected_devices', 24, 0, mojo.internal.Array(ash.cros_healthd.mojom.BluetoothDeviceInfoSpec, false), null, true, 1, undefined),
      mojo.internal.StructField('discoverable', 32, 0, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('discovering', 32, 1, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('uuids', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 1, undefined),
      mojo.internal.StructField('modalias', 48, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('service_allow_list', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 2, undefined),
      mojo.internal.StructField('deprecated_capabilities', 64, 0, ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilitiesSpec, null, true, 2, undefined),
    ],
    [[0, 32], [1, 64], [2, 80]]);

// Struct: BluetoothDeviceInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.BluetoothDeviceInfoSpec, 'ash.cros_healthd.mojom.BluetoothDeviceInfo', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('type', 16, 0, ash.cros_healthd.mojom.BluetoothDeviceTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('appearance', 24, 0, ash.cros_healthd.mojom.NullableUint16Spec, null, true, 0, undefined),
      mojo.internal.StructField('modalias', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('rssi', 40, 0, ash.cros_healthd.mojom.NullableInt16Spec, null, true, 0, undefined),
      mojo.internal.StructField('deprecated_mtu', 48, 0, ash.cros_healthd.mojom.NullableUint16Spec, null, true, 0, undefined),
      mojo.internal.StructField('uuids', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('battery_percentage', 64, 0, ash.cros_healthd.mojom.NullableUint8Spec, null, true, 1, undefined),
      mojo.internal.StructField('bluetooth_class', 72, 0, ash.cros_healthd.mojom.NullableUint32Spec, null, true, 2, undefined),
    ],
    [[0, 72], [1, 80], [2, 88]]);

// Struct: DEPRECATED_SupportedCapabilities
mojo.internal.Struct(
    ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilitiesSpec, 'ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilities', [
    ],
    [[0, 8]]);

// Struct: SystemInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.SystemInfoSpec, 'ash.cros_healthd.mojom.SystemInfo', [
      mojo.internal.StructField('os_info', 0, 0, ash.cros_healthd.mojom.OsInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('vpd_info', 8, 0, ash.cros_healthd.mojom.VpdInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('dmi_info', 16, 0, ash.cros_healthd.mojom.DmiInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('psr_info', 24, 0, ash.cros_healthd.mojom.PsrInfoSpec, null, true, 1, undefined),
    ],
    [[0, 32], [1, 40]]);

// Struct: OsInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.OsInfoSpec, 'ash.cros_healthd.mojom.OsInfo', [
      mojo.internal.StructField('code_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('marketing_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('os_version', 16, 0, ash.cros_healthd.mojom.OsVersionSpec, null, false, 0, undefined),
      mojo.internal.StructField('boot_mode', 24, 0, ash.cros_healthd.mojom.BootModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('kUnmappedEnumField', 32, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('oem_name', 40, 0, mojo.internal.String, null, true, 1, undefined),
    ],
    [[0, 48], [1, 56]]);

// Struct: OsVersion
mojo.internal.Struct(
    ash.cros_healthd.mojom.OsVersionSpec, 'ash.cros_healthd.mojom.OsVersion', [
      mojo.internal.StructField('release_milestone', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('build_number', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('patch_number', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('release_channel', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('branch_number', 32, 0, mojo.internal.String, null, true, 1, undefined),
    ],
    [[0, 40], [1, 48]]);

// Struct: VpdInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.VpdInfoSpec, 'ash.cros_healthd.mojom.VpdInfo', [
      mojo.internal.StructField('serial_number', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('region', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('mfg_date', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('activate_date', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('sku_number', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('model_name', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('oem_name', 48, 0, mojo.internal.String, null, true, 1, undefined),
    ],
    [[0, 56], [1, 64]]);

// Struct: DmiInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.DmiInfoSpec, 'ash.cros_healthd.mojom.DmiInfo', [
      mojo.internal.StructField('bios_vendor', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('bios_version', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('board_name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('board_vendor', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('board_version', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('chassis_vendor', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('chassis_type', 48, 0, ash.cros_healthd.mojom.NullableUint64Spec, null, true, 0, undefined),
      mojo.internal.StructField('product_family', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('product_name', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('product_version', 72, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('sys_vendor', 80, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 96]]);

// Struct: PsrEvent
mojo.internal.Struct(
    ash.cros_healthd.mojom.PsrEventSpec, 'ash.cros_healthd.mojom.PsrEvent', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PsrInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.PsrInfoSpec, 'ash.cros_healthd.mojom.PsrInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WirelessInterfaceInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.WirelessInterfaceInfoSpec, 'ash.cros_healthd.mojom.WirelessInterfaceInfo', [
      mojo.internal.StructField('interface_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('power_management_on', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('wireless_link_info', 16, 0, ash.cros_healthd.mojom.WirelessLinkInfoSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WirelessLinkInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.WirelessLinkInfoSpec, 'ash.cros_healthd.mojom.WirelessLinkInfo', [
      mojo.internal.StructField('access_point_address_str', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tx_bit_rate_mbps', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('rx_bit_rate_mbps', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('tx_power_dBm', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('encyption_on', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('link_quality', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('signal_level_dBm', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AudioInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.AudioInfoSpec, 'ash.cros_healthd.mojom.AudioInfo', [
      mojo.internal.StructField('output_mute', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('input_mute', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('output_volume', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('output_device_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('input_gain', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('input_device_name', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('underruns', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('severe_underruns', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('output_nodes', 48, 0, mojo.internal.Array(ash.cros_healthd.mojom.AudioNodeInfoSpec, false), null, true, 1, undefined),
      mojo.internal.StructField('input_nodes', 56, 0, mojo.internal.Array(ash.cros_healthd.mojom.AudioNodeInfoSpec, false), null, true, 1, undefined),
    ],
    [[0, 56], [1, 72]]);

// Struct: AudioNodeInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.AudioNodeInfoSpec, 'ash.cros_healthd.mojom.AudioNodeInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('active', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('node_volume', 25, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('input_node_gain', 26, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AudioHardwareInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.AudioHardwareInfoSpec, 'ash.cros_healthd.mojom.AudioHardwareInfo', [
      mojo.internal.StructField('audio_cards', 0, 0, mojo.internal.Array(ash.cros_healthd.mojom.AudioCardSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AudioCard
mojo.internal.Struct(
    ash.cros_healthd.mojom.AudioCardSpec, 'ash.cros_healthd.mojom.AudioCard', [
      mojo.internal.StructField('alsa_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bus_device', 8, 0, ash.cros_healthd.mojom.BusDeviceSpec, null, true, 0, undefined),
      mojo.internal.StructField('hd_audio_codecs', 16, 0, mojo.internal.Array(ash.cros_healthd.mojom.HDAudioCodecSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HDAudioCodec
mojo.internal.Struct(
    ash.cros_healthd.mojom.HDAudioCodecSpec, 'ash.cros_healthd.mojom.HDAudioCodec', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('address', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BootPerformanceInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.BootPerformanceInfoSpec, 'ash.cros_healthd.mojom.BootPerformanceInfo', [
      mojo.internal.StructField('boot_up_seconds', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('boot_up_timestamp', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('shutdown_seconds', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('shutdown_timestamp', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('shutdown_reason', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tpm_initialization_seconds', 40, 0, ash.cros_healthd.mojom.NullableDoubleSpec, null, true, 1, undefined),
      mojo.internal.StructField('power_on_to_kernel_seconds_$flag', 48, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'power_on_to_kernel_seconds_$value', originalFieldName: 'power_on_to_kernel_seconds' }),
      mojo.internal.StructField('power_on_to_kernel_seconds_$value', 56, 0, mojo.internal.Double, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'power_on_to_kernel_seconds_$flag', originalFieldName: 'power_on_to_kernel_seconds' }),
      mojo.internal.StructField('kernel_to_pre_startup_seconds_$flag', 64, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'kernel_to_pre_startup_seconds_$value', originalFieldName: 'kernel_to_pre_startup_seconds' }),
      mojo.internal.StructField('kernel_to_pre_startup_seconds_$value', 72, 0, mojo.internal.Double, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'kernel_to_pre_startup_seconds_$flag', originalFieldName: 'kernel_to_pre_startup_seconds' }),
      mojo.internal.StructField('kernel_to_post_startup_seconds_$flag', 80, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'kernel_to_post_startup_seconds_$value', originalFieldName: 'kernel_to_post_startup_seconds' }),
      mojo.internal.StructField('kernel_to_post_startup_seconds_$value', 88, 0, mojo.internal.Double, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'kernel_to_post_startup_seconds_$flag', originalFieldName: 'kernel_to_post_startup_seconds' }),
      mojo.internal.StructField('startup_to_chrome_exec_seconds_$flag', 96, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'startup_to_chrome_exec_seconds_$value', originalFieldName: 'startup_to_chrome_exec_seconds' }),
      mojo.internal.StructField('startup_to_chrome_exec_seconds_$value', 104, 0, mojo.internal.Double, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'startup_to_chrome_exec_seconds_$flag', originalFieldName: 'startup_to_chrome_exec_seconds' }),
      mojo.internal.StructField('chrome_exec_to_login_seconds_$flag', 112, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'chrome_exec_to_login_seconds_$value', originalFieldName: 'chrome_exec_to_login_seconds' }),
      mojo.internal.StructField('chrome_exec_to_login_seconds_$value', 120, 0, mojo.internal.Double, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'chrome_exec_to_login_seconds_$flag', originalFieldName: 'chrome_exec_to_login_seconds' }),
    ],
    [[0, 48], [1, 56], [2, 136]]);

// Struct: BusDevice
mojo.internal.Struct(
    ash.cros_healthd.mojom.BusDeviceSpec, 'ash.cros_healthd.mojom.BusDevice', [
      mojo.internal.StructField('vendor_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('product_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_class', 16, 0, ash.cros_healthd.mojom.BusDeviceClassSpec, null, false, 0, undefined),
      mojo.internal.StructField('bus_info', 24, 0, ash.cros_healthd.mojom.BusInfoSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PciBusInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.PciBusInfoSpec, 'ash.cros_healthd.mojom.PciBusInfo', [
      mojo.internal.StructField('class_id', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('subclass_id', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('prog_if_id', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('vendor_id', 4, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('device_id', 6, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('driver', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('sub_vendor_id', 16, 0, ash.cros_healthd.mojom.NullableUint16Spec, null, true, 1, undefined),
      mojo.internal.StructField('sub_device_id', 24, 0, ash.cros_healthd.mojom.NullableUint16Spec, null, true, 1, undefined),
    ],
    [[0, 24], [1, 40]]);

// Struct: UsbBusInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.UsbBusInfoSpec, 'ash.cros_healthd.mojom.UsbBusInfo', [
      mojo.internal.StructField('class_id', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('subclass_id', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('protocol_id', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('vendor_id', 4, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('product_id', 6, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('interfaces', 8, 0, mojo.internal.Array(ash.cros_healthd.mojom.UsbBusInterfaceInfoSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('fwupd_firmware_version_info', 16, 0, ash.cros_healthd.mojom.FwupdFirmwareVersionInfoSpec, null, true, 1, undefined),
      mojo.internal.StructField('version', 24, 0, ash.cros_healthd.mojom.UsbVersionSpec, null, false, 2, undefined),
      mojo.internal.StructField('spec_speed', 32, 0, ash.cros_healthd.mojom.UsbSpecSpeedSpec, null, false, 2, undefined),
    ],
    [[0, 24], [1, 32], [2, 48]]);

// Struct: FwupdFirmwareVersionInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.FwupdFirmwareVersionInfoSpec, 'ash.cros_healthd.mojom.FwupdFirmwareVersionInfo', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('version_format', 8, 0, ash.cros_healthd.mojom.FwupdVersionFormatSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UsbBusInterfaceInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.UsbBusInterfaceInfoSpec, 'ash.cros_healthd.mojom.UsbBusInterfaceInfo', [
      mojo.internal.StructField('interface_number', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('class_id', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('subclass_id', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('protocol_id', 3, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('driver', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TpmInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.TpmInfoSpec, 'ash.cros_healthd.mojom.TpmInfo', [
      mojo.internal.StructField('version', 0, 0, ash.cros_healthd.mojom.TpmVersionSpec, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, ash.cros_healthd.mojom.TpmStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('dictionary_attack', 16, 0, ash.cros_healthd.mojom.TpmDictionaryAttackSpec, null, false, 0, undefined),
      mojo.internal.StructField('attestation', 24, 0, ash.cros_healthd.mojom.TpmAttestationSpec, null, false, 0, undefined),
      mojo.internal.StructField('supported_features', 32, 0, ash.cros_healthd.mojom.TpmSupportedFeaturesSpec, null, false, 0, undefined),
      mojo.internal.StructField('did_vid', 40, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TpmVersion
mojo.internal.Struct(
    ash.cros_healthd.mojom.TpmVersionSpec, 'ash.cros_healthd.mojom.TpmVersion', [
      mojo.internal.StructField('gsc_version', 0, 0, ash.cros_healthd.mojom.TpmGSCVersionSpec, null, false, 0, undefined),
      mojo.internal.StructField('family', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('spec_level', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('manufacturer', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('tpm_model', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('firmware_version', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('vendor_specific', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: TpmStatus
mojo.internal.Struct(
    ash.cros_healthd.mojom.TpmStatusSpec, 'ash.cros_healthd.mojom.TpmStatus', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('owned', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('owner_password_is_present', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TpmDictionaryAttack
mojo.internal.Struct(
    ash.cros_healthd.mojom.TpmDictionaryAttackSpec, 'ash.cros_healthd.mojom.TpmDictionaryAttack', [
      mojo.internal.StructField('counter', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('threshold', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('lockout_in_effect', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('lockout_seconds_remaining', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TpmAttestation
mojo.internal.Struct(
    ash.cros_healthd.mojom.TpmAttestationSpec, 'ash.cros_healthd.mojom.TpmAttestation', [
      mojo.internal.StructField('prepared_for_enrollment', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enrolled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TpmSupportedFeatures
mojo.internal.Struct(
    ash.cros_healthd.mojom.TpmSupportedFeaturesSpec, 'ash.cros_healthd.mojom.TpmSupportedFeatures', [
      mojo.internal.StructField('support_u2f', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('support_pinweaver', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('support_runtime_selection', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_allowed', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GraphicsInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.GraphicsInfoSpec, 'ash.cros_healthd.mojom.GraphicsInfo', [
      mojo.internal.StructField('gles_info', 0, 0, ash.cros_healthd.mojom.GLESInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('egl_info', 8, 0, ash.cros_healthd.mojom.EGLInfoSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GLESInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.GLESInfoSpec, 'ash.cros_healthd.mojom.GLESInfo', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('shading_version', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('vendor', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('renderer', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('extensions', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: EGLInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.EGLInfoSpec, 'ash.cros_healthd.mojom.EGLInfo', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('vendor', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('client_api', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('extensions', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DisplayInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.DisplayInfoSpec, 'ash.cros_healthd.mojom.DisplayInfo', [
      mojo.internal.StructField('embedded_display', 0, 0, ash.cros_healthd.mojom.EmbeddedDisplayInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('external_displays', 8, 0, mojo.internal.Array(ash.cros_healthd.mojom.ExternalDisplayInfoSpec, false), null, true, 1, undefined),
    ],
    [[0, 16], [1, 24]]);

// Struct: EmbeddedDisplayInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.EmbeddedDisplayInfoSpec, 'ash.cros_healthd.mojom.EmbeddedDisplayInfo', [
      mojo.internal.StructField('privacy_screen_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('privacy_screen_enabled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('display_width', 8, 0, ash.cros_healthd.mojom.NullableUint32Spec, null, true, 1, undefined),
      mojo.internal.StructField('display_height', 16, 0, ash.cros_healthd.mojom.NullableUint32Spec, null, true, 1, undefined),
      mojo.internal.StructField('resolution_horizontal', 24, 0, ash.cros_healthd.mojom.NullableUint32Spec, null, true, 1, undefined),
      mojo.internal.StructField('resolution_vertical', 32, 0, ash.cros_healthd.mojom.NullableUint32Spec, null, true, 1, undefined),
      mojo.internal.StructField('refresh_rate', 40, 0, ash.cros_healthd.mojom.NullableDoubleSpec, null, true, 1, undefined),
      mojo.internal.StructField('manufacturer', 48, 0, mojo.internal.String, null, true, 2, undefined),
      mojo.internal.StructField('model_id', 56, 0, ash.cros_healthd.mojom.NullableUint16Spec, null, true, 2, undefined),
      mojo.internal.StructField('serial_number', 64, 0, ash.cros_healthd.mojom.NullableUint32Spec, null, true, 2, undefined),
      mojo.internal.StructField('manufacture_week', 72, 0, ash.cros_healthd.mojom.NullableUint8Spec, null, true, 2, undefined),
      mojo.internal.StructField('manufacture_year', 80, 0, ash.cros_healthd.mojom.NullableUint16Spec, null, true, 2, undefined),
      mojo.internal.StructField('edid_version', 88, 0, mojo.internal.String, null, true, 2, undefined),
      mojo.internal.StructField('input_type', 96, 0, ash.cros_healthd.mojom.DisplayInputTypeSpec, null, false, 2, undefined),
      mojo.internal.StructField('display_name', 104, 0, mojo.internal.String, null, true, 2, undefined),
    ],
    [[0, 16], [1, 56], [2, 120]]);

// Struct: ExternalDisplayInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.ExternalDisplayInfoSpec, 'ash.cros_healthd.mojom.ExternalDisplayInfo', [
      mojo.internal.StructField('display_width', 0, 0, ash.cros_healthd.mojom.NullableUint32Spec, null, true, 0, undefined),
      mojo.internal.StructField('display_height', 8, 0, ash.cros_healthd.mojom.NullableUint32Spec, null, true, 0, undefined),
      mojo.internal.StructField('resolution_horizontal', 16, 0, ash.cros_healthd.mojom.NullableUint32Spec, null, true, 0, undefined),
      mojo.internal.StructField('resolution_vertical', 24, 0, ash.cros_healthd.mojom.NullableUint32Spec, null, true, 0, undefined),
      mojo.internal.StructField('refresh_rate', 32, 0, ash.cros_healthd.mojom.NullableDoubleSpec, null, true, 0, undefined),
      mojo.internal.StructField('manufacturer', 40, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('model_id', 48, 0, ash.cros_healthd.mojom.NullableUint16Spec, null, true, 1, undefined),
      mojo.internal.StructField('serial_number', 56, 0, ash.cros_healthd.mojom.NullableUint32Spec, null, true, 1, undefined),
      mojo.internal.StructField('manufacture_week', 64, 0, ash.cros_healthd.mojom.NullableUint8Spec, null, true, 1, undefined),
      mojo.internal.StructField('manufacture_year', 72, 0, ash.cros_healthd.mojom.NullableUint16Spec, null, true, 1, undefined),
      mojo.internal.StructField('edid_version', 80, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('input_type', 88, 0, ash.cros_healthd.mojom.DisplayInputTypeSpec, null, false, 1, undefined),
      mojo.internal.StructField('display_name', 96, 0, mojo.internal.String, null, true, 1, undefined),
    ],
    [[0, 48], [1, 112]]);

// Struct: ThunderboltBusInterfaceInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.ThunderboltBusInterfaceInfoSpec, 'ash.cros_healthd.mojom.ThunderboltBusInterfaceInfo', [
      mojo.internal.StructField('vendor_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_uuid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tx_speed_gbs', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('rx_speed_gbs', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('authorized', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('device_fw_version', 48, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: ThunderboltBusInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.ThunderboltBusInfoSpec, 'ash.cros_healthd.mojom.ThunderboltBusInfo', [
      mojo.internal.StructField('security_level', 0, 0, ash.cros_healthd.mojom.ThunderboltSecurityLevelSpec, null, false, 0, undefined),
      mojo.internal.StructField('thunderbolt_interfaces', 8, 0, mojo.internal.Array(ash.cros_healthd.mojom.ThunderboltBusInterfaceInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InputInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.InputInfoSpec, 'ash.cros_healthd.mojom.InputInfo', [
      mojo.internal.StructField('touchpad_library_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('touchscreen_devices', 8, 0, mojo.internal.Array(ash.cros_healthd.mojom.TouchscreenDeviceSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('touchpad_devices', 16, 0, mojo.internal.Array(ash.cros_healthd.mojom.TouchpadDeviceSpec, false), null, true, 1, undefined),
    ],
    [[0, 24], [1, 32]]);

// Struct: TouchscreenDevice
mojo.internal.Struct(
    ash.cros_healthd.mojom.TouchscreenDeviceSpec, 'ash.cros_healthd.mojom.TouchscreenDevice', [
      mojo.internal.StructField('input_device', 0, 0, ash.cros_healthd.mojom.InputDeviceSpec, null, false, 0, undefined),
      mojo.internal.StructField('touch_points', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_stylus', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_stylus_garage_switch', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TouchpadDevice
mojo.internal.Struct(
    ash.cros_healthd.mojom.TouchpadDeviceSpec, 'ash.cros_healthd.mojom.TouchpadDevice', [
      mojo.internal.StructField('input_device', 0, 0, ash.cros_healthd.mojom.InputDeviceSpec, null, false, 0, undefined),
      mojo.internal.StructField('driver_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('vendor_id', 16, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('product_id', 24, 0, mojo.internal.String, null, true, 1, undefined),
    ],
    [[0, 24], [1, 40]]);

// Struct: InputDevice
mojo.internal.Struct(
    ash.cros_healthd.mojom.InputDeviceSpec, 'ash.cros_healthd.mojom.InputDevice', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('kUnmappedEnumField', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SensorInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.SensorInfoSpec, 'ash.cros_healthd.mojom.SensorInfo', [
      mojo.internal.StructField('lid_angle', 0, 0, ash.cros_healthd.mojom.NullableUint16Spec, null, true, 0, undefined),
      mojo.internal.StructField('sensors', 8, 0, mojo.internal.Array(ash.cros_healthd.mojom.SensorSpec, false), null, true, 1, undefined),
    ],
    [[0, 16], [1, 24]]);

// Struct: Sensor
mojo.internal.Struct(
    ash.cros_healthd.mojom.SensorSpec, 'ash.cros_healthd.mojom.Sensor', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('device_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('kUnmappedEnumField', 16, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ThermalInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.ThermalInfoSpec, 'ash.cros_healthd.mojom.ThermalInfo', [
      mojo.internal.StructField('thermal_sensors', 0, 0, mojo.internal.Array(ash.cros_healthd.mojom.ThermalSensorInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ThermalSensorInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.ThermalSensorInfoSpec, 'ash.cros_healthd.mojom.ThermalSensorInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.TelemetryInfoSpec, 'ash.cros_healthd.mojom.TelemetryInfo', [
      mojo.internal.StructField('battery_result', 0, 0, ash.cros_healthd.mojom.BatteryResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('block_device_result', 16, 0, ash.cros_healthd.mojom.NonRemovableBlockDeviceResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('cpu_result', 32, 0, ash.cros_healthd.mojom.CpuResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('timezone_result', 48, 0, ash.cros_healthd.mojom.TimezoneResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('memory_result', 64, 0, ash.cros_healthd.mojom.MemoryResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('backlight_result', 80, 0, ash.cros_healthd.mojom.BacklightResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('fan_result', 96, 0, ash.cros_healthd.mojom.FanResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('stateful_partition_result', 112, 0, ash.cros_healthd.mojom.StatefulPartitionResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('bluetooth_result', 128, 0, ash.cros_healthd.mojom.BluetoothResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('deprecated_system_result', 144, 0, ash.cros_healthd.mojom.DEPRECATED_SystemResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('network_result', 160, 0, ash.cros_healthd.mojom.NetworkResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('audio_result', 176, 0, ash.cros_healthd.mojom.AudioResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('boot_performance_result', 192, 0, ash.cros_healthd.mojom.BootPerformanceResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('bus_result', 208, 0, ash.cros_healthd.mojom.BusResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('system_result', 224, 0, ash.cros_healthd.mojom.SystemResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('tpm_result', 240, 0, ash.cros_healthd.mojom.TpmResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('graphics_result', 256, 0, ash.cros_healthd.mojom.GraphicsResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('display_result', 272, 0, ash.cros_healthd.mojom.DisplayResultSpec, null, true, 1, undefined),
      mojo.internal.StructField('network_interface_result', 288, 0, ash.cros_healthd.mojom.NetworkInterfaceResultSpec, null, true, 2, undefined),
      mojo.internal.StructField('input_result', 296, 0, ash.cros_healthd.mojom.InputResultSpec, null, true, 3, undefined),
      mojo.internal.StructField('audio_hardware_result', 312, 0, ash.cros_healthd.mojom.AudioHardwareResultSpec, null, true, 4, undefined),
      mojo.internal.StructField('sensor_result', 328, 0, ash.cros_healthd.mojom.SensorResultSpec, null, true, 5, undefined),
      mojo.internal.StructField('thermal_result', 344, 0, ash.cros_healthd.mojom.ThermalResultSpec, null, true, 6, undefined),
    ],
    [[0, 280], [1, 296], [2, 304], [3, 320], [4, 336], [5, 352], [6, 368]]);
