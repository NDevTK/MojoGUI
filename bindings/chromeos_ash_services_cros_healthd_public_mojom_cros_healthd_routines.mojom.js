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

// Enum: Type
ash.cros_healthd.mojom.Type = {
  kDownload: 0,
  kUpload: 1,
};

// Enum: Reason
ash.cros_healthd.mojom.Reason = {
  kWaitingToBeScheduled: 0,
  kWaitingInteraction: 1,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kCorrectColor: 0,
  kNotLitUp: 1,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kOk: 0,
  kAnyNotLitUp: 1,
};

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

// Enum: PairError
ash.cros_healthd.mojom.PairError = {
  kNone: 0,
  kBondFailed: 1,
  kBadStatus: 2,
  kSspFailed: 3,
  kTimeout: 4,
};

// Enum: ConnectError
ash.cros_healthd.mojom.ConnectError = {
  kNone: 0,
  kNoConnectedEvent: 1,
  kNotConnected: 2,
};

// Enum: AddressType
ash.cros_healthd.mojom.AddressType = {
  kUnknown: 0,
  kPublic: 1,
  kRandom: 2,
};

// Enum: CameraSubtestResult
ash.cros_healthd.mojom.CameraSubtestResult = {
  kNotRun: 0,
  kPassed: 1,
  kFailed: 2,
};

// Enum: DiskReadTypeEnum
ash.cros_healthd.mojom.DiskReadTypeEnum = {
  kLinearRead: 0,
  kRandomRead: 1,
};

// Enum: LedName
ash.cros_healthd.mojom.LedName = {
  kBattery: 0,
  kPower: 1,
  kAdapter: 2,
  kLeft: 3,
  kRight: 4,
};

// Enum: LedColor
ash.cros_healthd.mojom.LedColor = {
  kRed: 0,
  kGreen: 1,
  kBlue: 2,
  kYellow: 3,
  kWhite: 4,
  kAmber: 5,
};

// Enum: HardwarePresenceStatus
ash.cros_healthd.mojom.HardwarePresenceStatus = {
  kMatched: 0,
  kNotMatched: 1,
  kNotConfigured: 2,
};

// Enum: Type
ash.cros_healthd.mojom.Type = {
  kAccel: 0,
  kGyro: 1,
  kMagn: 2,
  kGravity: 3,
};

// Enum: Issue
ash.cros_healthd.mojom.Issue = {
  kNone: 0,
  kCameraServiceNotAvailable: 1,
  kBlockedByPrivacyShutter: 2,
  kLensAreDirty: 3,
};

// Struct: MemoryRoutineArgument
ash.cros_healthd.mojom.MemoryRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.MemoryRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

// Struct: CpuStressRoutineArgument
ash.cros_healthd.mojom.CpuStressRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CpuStressRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

// Struct: DiskReadRoutineArgument
ash.cros_healthd.mojom.DiskReadRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.DiskReadRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CpuCacheRoutineArgument
ash.cros_healthd.mojom.CpuCacheRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CpuCacheRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PrimeSearchRoutineArgument
ash.cros_healthd.mojom.PrimeSearchRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.PrimeSearchRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
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
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LedLitUpRoutineArgument
ash.cros_healthd.mojom.LedLitUpRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.LedLitUpRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

// Struct: FloatingPointRoutineArgument
ash.cros_healthd.mojom.FloatingPointRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.FloatingPointRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothScanningRoutineArgument
ash.cros_healthd.mojom.BluetoothScanningRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothScanningRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothPairingRoutineArgument
ash.cros_healthd.mojom.BluetoothPairingRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothPairingRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CameraAvailabilityRoutineArgument
ash.cros_healthd.mojom.CameraAvailabilityRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CameraAvailabilityRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UrandomRoutineArgument
ash.cros_healthd.mojom.UrandomRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.UrandomRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

// Struct: BatteryDischargeRoutineArgument
ash.cros_healthd.mojom.BatteryDischargeRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BatteryDischargeRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RoutineState
ash.cros_healthd.mojom.RoutineStateSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineState',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

// Struct: RoutineStateRunning
ash.cros_healthd.mojom.RoutineStateRunningSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineStateRunning',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
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
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RoutineStateFinished
ash.cros_healthd.mojom.RoutineStateFinishedSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineStateFinished',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MemoryRoutineDetail
ash.cros_healthd.mojom.MemoryRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.MemoryRoutineDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AudioDriverRoutineDetail
ash.cros_healthd.mojom.AudioDriverRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.AudioDriverRoutineDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UfsLifetimeRoutineDetail
ash.cros_healthd.mojom.UfsLifetimeRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.UfsLifetimeRoutineDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MemtesterResult
ash.cros_healthd.mojom.MemtesterResultSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.MemtesterResult',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothPoweredDetail
ash.cros_healthd.mojom.BluetoothPoweredDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothPoweredDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothPowerRoutineDetail
ash.cros_healthd.mojom.BluetoothPowerRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothPowerRoutineDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothDiscoveringDetail
ash.cros_healthd.mojom.BluetoothDiscoveringDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothDiscoveringDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothDiscoveryRoutineDetail
ash.cros_healthd.mojom.BluetoothDiscoveryRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothDiscoveryRoutineDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothScannedPeripheralInfo
ash.cros_healthd.mojom.BluetoothScannedPeripheralInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothScannedPeripheralInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothScanningRoutineDetail
ash.cros_healthd.mojom.BluetoothScanningRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothScanningRoutineDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
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
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothPairingRoutineDetail
ash.cros_healthd.mojom.BluetoothPairingRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothPairingRoutineDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CameraAvailabilityRoutineDetail
ash.cros_healthd.mojom.CameraAvailabilityRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CameraAvailabilityRoutineDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BatteryDischargeRoutineDetail
ash.cros_healthd.mojom.BatteryDischargeRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BatteryDischargeRoutineDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FanRoutineDetail
ash.cros_healthd.mojom.FanRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.FanRoutineDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NetworkBandwidthRoutineDetail
ash.cros_healthd.mojom.NetworkBandwidthRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.NetworkBandwidthRoutineDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SensitiveSensorInfo
ash.cros_healthd.mojom.SensitiveSensorInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.SensitiveSensorInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SensitiveSensorReport
ash.cros_healthd.mojom.SensitiveSensorReportSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.SensitiveSensorReport',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SensitiveSensorRoutineDetail
ash.cros_healthd.mojom.SensitiveSensorRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.SensitiveSensorRoutineDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
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
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: CrosHealthdRoutinesService
ash.cros_healthd.mojom.CrosHealthdRoutinesService = {};

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

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdRoutinesServicePtr = ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRemote;
ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRequest = ash.cros_healthd.mojom.CrosHealthdRoutinesServicePendingReceiver;


// Interface: RoutineControl
ash.cros_healthd.mojom.RoutineControl = {};

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

// Legacy compatibility
ash.cros_healthd.mojom.RoutineControlPtr = ash.cros_healthd.mojom.RoutineControlRemote;
ash.cros_healthd.mojom.RoutineControlRequest = ash.cros_healthd.mojom.RoutineControlPendingReceiver;


// Interface: RoutineObserver
ash.cros_healthd.mojom.RoutineObserver = {};

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

// Legacy compatibility
ash.cros_healthd.mojom.RoutineObserverPtr = ash.cros_healthd.mojom.RoutineObserverRemote;
ash.cros_healthd.mojom.RoutineObserverRequest = ash.cros_healthd.mojom.RoutineObserverPendingReceiver;

