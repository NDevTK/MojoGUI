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
  should: 0,
};

// Enum: Type
ash.cros_healthd.mojom.Type = {
};

// Enum: Reason
ash.cros_healthd.mojom.Reason = {
};

// Enum: State
ash.cros_healthd.mojom.State = {
  should: 0,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  should: 0,
};

// Enum: MemtesterTestItemEnum
ash.cros_healthd.mojom.MemtesterTestItemEnum = {
  repeating: 0,
  repeating: 1,
  repeated: 2,
};

// Enum: PairError
ash.cros_healthd.mojom.PairError = {
  should: 0,
};

// Enum: ConnectError
ash.cros_healthd.mojom.ConnectError = {
  should: 0,
};

// Enum: AddressType
ash.cros_healthd.mojom.AddressType = {
  should: 0,
};

// Enum: CameraSubtestResult
ash.cros_healthd.mojom.CameraSubtestResult = {
  should: 0,
  possibly: 1,
};

// Enum: DiskReadTypeEnum
ash.cros_healthd.mojom.DiskReadTypeEnum = {
  should: 0,
  kLinearRead: 1,
  kRandomRead: 2,
};

// Enum: LedName
ash.cros_healthd.mojom.LedName = {
  should: 0,
  kBattery: 1,
  kPower: 2,
  kAdapter: 3,
  kLeft: 4,
  kRight: 5,
};

// Enum: LedColor
ash.cros_healthd.mojom.LedColor = {
  should: 0,
  kRed: 1,
  kGreen: 2,
  kBlue: 3,
  kYellow: 4,
  kWhite: 5,
  kAmber: 6,
};

// Enum: HardwarePresenceStatus
ash.cros_healthd.mojom.HardwarePresenceStatus = {
  should: 0,
  skipping: 1,
};

// Enum: Type
ash.cros_healthd.mojom.Type = {
  should: 0,
  also: 1,
};

// Enum: Issue
ash.cros_healthd.mojom.Issue = {
  should: 0,
};

// Struct: MemoryRoutineArgument
ash.cros_healthd.mojom.MemoryRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: AudioDriverRoutineArgument
ash.cros_healthd.mojom.AudioDriverRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: CpuStressRoutineArgument
ash.cros_healthd.mojom.CpuStressRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: UfsLifetimeRoutineArgument
ash.cros_healthd.mojom.UfsLifetimeRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: DiskReadRoutineArgument
ash.cros_healthd.mojom.DiskReadRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: CpuCacheRoutineArgument
ash.cros_healthd.mojom.CpuCacheRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: PrimeSearchRoutineArgument
ash.cros_healthd.mojom.PrimeSearchRoutineArgument = class {
  constructor(values = {}) {
    this.is = values.is !== undefined ? values.is : null;
  }
};

// Struct: VolumeButtonRoutineArgument
ash.cros_healthd.mojom.VolumeButtonRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: LedLitUpRoutineArgument
ash.cros_healthd.mojom.LedLitUpRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: KeyboardBacklightRoutineArgument
ash.cros_healthd.mojom.KeyboardBacklightRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: FloatingPointRoutineArgument
ash.cros_healthd.mojom.FloatingPointRoutineArgument = class {
  constructor(values = {}) {
    this.is = values.is !== undefined ? values.is : null;
  }
};

// Struct: BluetoothPowerRoutineArgument
ash.cros_healthd.mojom.BluetoothPowerRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: BluetoothDiscoveryRoutineArgument
ash.cros_healthd.mojom.BluetoothDiscoveryRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: FanRoutineArgument
ash.cros_healthd.mojom.FanRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: BluetoothScanningRoutineArgument
ash.cros_healthd.mojom.BluetoothScanningRoutineArgument = class {
  constructor(values = {}) {
    this.routine = values.routine !== undefined ? values.routine : null;
  }
};

// Struct: BluetoothPairingRoutineArgument
ash.cros_healthd.mojom.BluetoothPairingRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: CameraAvailabilityRoutineArgument
ash.cros_healthd.mojom.CameraAvailabilityRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: UrandomRoutineArgument
ash.cros_healthd.mojom.UrandomRoutineArgument = class {
  constructor(values = {}) {
    this.is = values.is !== undefined ? values.is : null;
  }
};

// Struct: NetworkBandwidthRoutineArgument
ash.cros_healthd.mojom.NetworkBandwidthRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: SensitiveSensorRoutineArgument
ash.cros_healthd.mojom.SensitiveSensorRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: CameraFrameAnalysisRoutineArgument
ash.cros_healthd.mojom.CameraFrameAnalysisRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: BatteryDischargeRoutineArgument
ash.cros_healthd.mojom.BatteryDischargeRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: RoutineState
ash.cros_healthd.mojom.RoutineState = class {
  constructor(values = {}) {
  }
};

// Struct: RoutineStateInitialized
ash.cros_healthd.mojom.RoutineStateInitialized = class {
  constructor(values = {}) {
  }
};

// Struct: RoutineStateRunning
ash.cros_healthd.mojom.RoutineStateRunning = class {
  constructor(values = {}) {
  }
};

// Struct: NetworkBandwidthRoutineRunningInfo
ash.cros_healthd.mojom.NetworkBandwidthRoutineRunningInfo = class {
  constructor(values = {}) {
  }
};

// Struct: RoutineStateWaiting
ash.cros_healthd.mojom.RoutineStateWaiting = class {
  constructor(values = {}) {
  }
};

// Struct: CheckLedLitUpStateInquiry
ash.cros_healthd.mojom.CheckLedLitUpStateInquiry = class {
  constructor(values = {}) {
  }
};

// Struct: CheckLedLitUpStateReply
ash.cros_healthd.mojom.CheckLedLitUpStateReply = class {
  constructor(values = {}) {
  }
};

// Struct: UnplugAcAdapterInquiry
ash.cros_healthd.mojom.UnplugAcAdapterInquiry = class {
  constructor(values = {}) {
  }
};

// Struct: UnplugAcAdapterReply
ash.cros_healthd.mojom.UnplugAcAdapterReply = class {
  constructor(values = {}) {
  }
};

// Struct: CheckKeyboardBacklightStateInquiry
ash.cros_healthd.mojom.CheckKeyboardBacklightStateInquiry = class {
  constructor(values = {}) {
  }
};

// Struct: CheckKeyboardBacklightStateReply
ash.cros_healthd.mojom.CheckKeyboardBacklightStateReply = class {
  constructor(values = {}) {
  }
};

// Struct: RoutineStateFinished
ash.cros_healthd.mojom.RoutineStateFinished = class {
  constructor(values = {}) {
  }
};

// Struct: MemoryRoutineDetail
ash.cros_healthd.mojom.MemoryRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Struct: AudioDriverRoutineDetail
ash.cros_healthd.mojom.AudioDriverRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Struct: UfsLifetimeRoutineDetail
ash.cros_healthd.mojom.UfsLifetimeRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Struct: MemtesterResult
ash.cros_healthd.mojom.MemtesterResult = class {
  constructor(values = {}) {
  }
};

// Struct: BluetoothPoweredDetail
ash.cros_healthd.mojom.BluetoothPoweredDetail = class {
  constructor(values = {}) {
  }
};

// Struct: BluetoothPowerRoutineDetail
ash.cros_healthd.mojom.BluetoothPowerRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Struct: BluetoothDiscoveringDetail
ash.cros_healthd.mojom.BluetoothDiscoveringDetail = class {
  constructor(values = {}) {
  }
};

// Struct: BluetoothDiscoveryRoutineDetail
ash.cros_healthd.mojom.BluetoothDiscoveryRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Struct: BluetoothScannedPeripheralInfo
ash.cros_healthd.mojom.BluetoothScannedPeripheralInfo = class {
  constructor(values = {}) {
  }
};

// Struct: BluetoothScanningRoutineDetail
ash.cros_healthd.mojom.BluetoothScanningRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Struct: BluetoothPairingPeripheralInfo
ash.cros_healthd.mojom.BluetoothPairingPeripheralInfo = class {
  constructor(values = {}) {
  }
};

// Struct: BluetoothPairingRoutineDetail
ash.cros_healthd.mojom.BluetoothPairingRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Struct: CameraAvailabilityRoutineDetail
ash.cros_healthd.mojom.CameraAvailabilityRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Struct: BatteryDischargeRoutineDetail
ash.cros_healthd.mojom.BatteryDischargeRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Struct: FanRoutineDetail
ash.cros_healthd.mojom.FanRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Struct: NetworkBandwidthRoutineDetail
ash.cros_healthd.mojom.NetworkBandwidthRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Struct: SensitiveSensorInfo
ash.cros_healthd.mojom.SensitiveSensorInfo = class {
  constructor(values = {}) {
  }
};

// Struct: SensitiveSensorReport
ash.cros_healthd.mojom.SensitiveSensorReport = class {
  constructor(values = {}) {
  }
};

// Struct: SensitiveSensorRoutineDetail
ash.cros_healthd.mojom.SensitiveSensorRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Struct: CameraFrameAnalysisRoutineDetail
ash.cros_healthd.mojom.CameraFrameAnalysisRoutineDetail = class {
  constructor(values = {}) {
  }
};

// Interface: CrosHealthdRoutinesService
ash.cros_healthd.mojom.CrosHealthdRoutinesServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.mojom.CrosHealthdRoutinesService';
  }

};

ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RoutineControl
ash.cros_healthd.mojom.RoutineControlPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.mojom.RoutineControl';
  }

};

ash.cros_healthd.mojom.RoutineControlRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RoutineObserver
ash.cros_healthd.mojom.RoutineObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.mojom.RoutineObserver';
  }

};

ash.cros_healthd.mojom.RoutineObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
