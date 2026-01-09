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
