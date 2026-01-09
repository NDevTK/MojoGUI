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

// Interface: CrosHealthdRoutinesService
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

