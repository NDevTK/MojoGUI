// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/telemetry_diagnostic_routine_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: ButtonType
crosapi.mojom.ButtonType = {
  kVolumeUp: 0,
  kVolumeDown: 1,
};

// Enum: TelemetryDiagnosticLedName
crosapi.mojom.TelemetryDiagnosticLedName = {
  kBattery: 0,
  kPower: 1,
  kAdapter: 2,
  kLeft: 3,
  kRight: 4,
};

// Enum: TelemetryDiagnosticLedColor
crosapi.mojom.TelemetryDiagnosticLedColor = {
  kRed: 0,
  kGreen: 1,
  kBlue: 2,
  kYellow: 3,
  kWhite: 4,
  kAmber: 5,
};

// Enum: Type
crosapi.mojom.Type = {
  kDownload: 0,
  kUpload: 1,
};

// Enum: State
crosapi.mojom.State = {
  kCorrectColor: 0,
  kNotLitUp: 1,
};

// Enum: State
crosapi.mojom.State = {
  kOk: 0,
  kAnyNotLitUp: 1,
};

// Enum: Reason
crosapi.mojom.Reason = {
  kWaitingToBeScheduled: 0,
  kWaitingForInteraction: 1,
};

// Enum: TelemetryDiagnosticMemtesterTestItemEnum
crosapi.mojom.TelemetryDiagnosticMemtesterTestItemEnum = {
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
  kEightBitWrites: 17,
  kSixteenBitWrites: 18,
};

// Enum: TelemetryDiagnosticHardwarePresenceStatus
crosapi.mojom.TelemetryDiagnosticHardwarePresenceStatus = {
  kMatched: 0,
  kNotMatched: 1,
  kNotConfigured: 2,
};

// Enum: TelemetryDiagnosticCameraSubtestResult
crosapi.mojom.TelemetryDiagnosticCameraSubtestResult = {
  kNotRun: 0,
  kPassed: 1,
  kFailed: 2,
};

// Enum: Issue
crosapi.mojom.Issue = {
  kNone: 0,
  kCameraServiceNotAvailable: 1,
  kBlockedByPrivacyShutter: 2,
  kLensAreDirty: 3,
};

// Struct: TelemetryDiagnosticMemoryRoutineArgument
crosapi.mojom.TelemetryDiagnosticMemoryRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticMemoryRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticVolumeButtonRoutineArgument
crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticFanRoutineArgument
crosapi.mojom.TelemetryDiagnosticFanRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticFanRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticLedLitUpRoutineArgument
crosapi.mojom.TelemetryDiagnosticLedLitUpRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticLedLitUpRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticNetworkBandwidthRoutineArgument
crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticCameraFrameAnalysisRoutineArgument
crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticKeyboardBacklightRoutineArgument
crosapi.mojom.TelemetryDiagnosticKeyboardBacklightRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticKeyboardBacklightRoutineArgument',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticRoutineStateInitialized
crosapi.mojom.TelemetryDiagnosticRoutineStateInitializedSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticRoutineStateInitialized',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticNetworkBandwidthRoutineRunningInfo
crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineRunningInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineRunningInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticRoutineStateRunning
crosapi.mojom.TelemetryDiagnosticRoutineStateRunningSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticRoutineStateRunning',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticCheckLedLitUpStateReply
crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateReplySpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateReply',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticCheckKeyboardBacklightStateReply
crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateReplySpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateReply',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticCheckLedLitUpStateInquiry
crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateInquirySpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateInquiry',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticCheckKeyboardBacklightStateInquiry
crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateInquirySpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateInquiry',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticRoutineStateWaiting
crosapi.mojom.TelemetryDiagnosticRoutineStateWaitingSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticRoutineStateWaiting',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticMemtesterResult
crosapi.mojom.TelemetryDiagnosticMemtesterResultSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticMemtesterResult',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticMemoryRoutineDetail
crosapi.mojom.TelemetryDiagnosticMemoryRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticMemoryRoutineDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticVolumeButtonRoutineDetail
crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticFanRoutineDetail
crosapi.mojom.TelemetryDiagnosticFanRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticFanRoutineDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticNetworkBandwidthRoutineDetail
crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticCameraFrameAnalysisRoutineDetail
crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineDetail',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticRoutineStateFinished
crosapi.mojom.TelemetryDiagnosticRoutineStateFinishedSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticRoutineStateFinished',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryDiagnosticRoutineState
crosapi.mojom.TelemetryDiagnosticRoutineStateSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticRoutineState',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: TelemetryDiagnosticRoutineControl
crosapi.mojom.TelemetryDiagnosticRoutineControl = {};

crosapi.mojom.TelemetryDiagnosticRoutineControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.TelemetryDiagnosticRoutineControlRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.TelemetryDiagnosticRoutineControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.TelemetryDiagnosticRoutineControlPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.TelemetryDiagnosticRoutineControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.TelemetryDiagnosticRoutineControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.TelemetryDiagnosticRoutineControl.getRemote = function() {
  let remote = new crosapi.mojom.TelemetryDiagnosticRoutineControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.TelemetryDiagnosticRoutineControl',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.TelemetryDiagnosticRoutineControlPtr = crosapi.mojom.TelemetryDiagnosticRoutineControlRemote;
crosapi.mojom.TelemetryDiagnosticRoutineControlRequest = crosapi.mojom.TelemetryDiagnosticRoutineControlPendingReceiver;


// Interface: TelemetryDiagnosticRoutineObserver
crosapi.mojom.TelemetryDiagnosticRoutineObserver = {};

crosapi.mojom.TelemetryDiagnosticRoutineObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.TelemetryDiagnosticRoutineObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.TelemetryDiagnosticRoutineObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.TelemetryDiagnosticRoutineObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.TelemetryDiagnosticRoutineObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.TelemetryDiagnosticRoutineObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.TelemetryDiagnosticRoutineObserver.getRemote = function() {
  let remote = new crosapi.mojom.TelemetryDiagnosticRoutineObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.TelemetryDiagnosticRoutineObserver',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.TelemetryDiagnosticRoutineObserverPtr = crosapi.mojom.TelemetryDiagnosticRoutineObserverRemote;
crosapi.mojom.TelemetryDiagnosticRoutineObserverRequest = crosapi.mojom.TelemetryDiagnosticRoutineObserverPendingReceiver;


// Interface: TelemetryDiagnosticRoutinesService
crosapi.mojom.TelemetryDiagnosticRoutinesService = {};

crosapi.mojom.TelemetryDiagnosticRoutinesServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.TelemetryDiagnosticRoutinesServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.TelemetryDiagnosticRoutinesService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.TelemetryDiagnosticRoutinesServicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.TelemetryDiagnosticRoutinesServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.TelemetryDiagnosticRoutinesServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.TelemetryDiagnosticRoutinesService.getRemote = function() {
  let remote = new crosapi.mojom.TelemetryDiagnosticRoutinesServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.TelemetryDiagnosticRoutinesService',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.TelemetryDiagnosticRoutinesServicePtr = crosapi.mojom.TelemetryDiagnosticRoutinesServiceRemote;
crosapi.mojom.TelemetryDiagnosticRoutinesServiceRequest = crosapi.mojom.TelemetryDiagnosticRoutinesServicePendingReceiver;

