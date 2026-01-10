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
crosapi.mojom.ButtonTypeSpec = { $: mojo.internal.Enum() };

// Enum: TelemetryDiagnosticLedName
crosapi.mojom.TelemetryDiagnosticLedName = {
  kBattery: 0,
  kPower: 1,
  kAdapter: 2,
  kLeft: 3,
  kRight: 4,
};
crosapi.mojom.TelemetryDiagnosticLedNameSpec = { $: mojo.internal.Enum() };

// Enum: TelemetryDiagnosticLedColor
crosapi.mojom.TelemetryDiagnosticLedColor = {
  kRed: 0,
  kGreen: 1,
  kBlue: 2,
  kYellow: 3,
  kWhite: 4,
  kAmber: 5,
};
crosapi.mojom.TelemetryDiagnosticLedColorSpec = { $: mojo.internal.Enum() };

// Enum: Type
crosapi.mojom.Type = {
  kDownload: 0,
  kUpload: 1,
};
crosapi.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Enum: State
crosapi.mojom.State = {
  kCorrectColor: 0,
  kNotLitUp: 1,
};
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: State
crosapi.mojom.State = {
  kOk: 0,
  kAnyNotLitUp: 1,
};
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: Reason
crosapi.mojom.Reason = {
  kWaitingToBeScheduled: 0,
  kWaitingForInteraction: 1,
};
crosapi.mojom.ReasonSpec = { $: mojo.internal.Enum() };

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
crosapi.mojom.TelemetryDiagnosticMemtesterTestItemEnumSpec = { $: mojo.internal.Enum() };

// Enum: TelemetryDiagnosticHardwarePresenceStatus
crosapi.mojom.TelemetryDiagnosticHardwarePresenceStatus = {
  kMatched: 0,
  kNotMatched: 1,
  kNotConfigured: 2,
};
crosapi.mojom.TelemetryDiagnosticHardwarePresenceStatusSpec = { $: mojo.internal.Enum() };

// Enum: TelemetryDiagnosticCameraSubtestResult
crosapi.mojom.TelemetryDiagnosticCameraSubtestResult = {
  kNotRun: 0,
  kPassed: 1,
  kFailed: 2,
};
crosapi.mojom.TelemetryDiagnosticCameraSubtestResultSpec = { $: mojo.internal.Enum() };

// Enum: Issue
crosapi.mojom.Issue = {
  kNone: 0,
  kCameraServiceNotAvailable: 1,
  kBlockedByPrivacyShutter: 2,
  kLensAreDirty: 3,
};
crosapi.mojom.IssueSpec = { $: mojo.internal.Enum() };

// Union: TelemetryDiagnosticRoutineArgument
crosapi.mojom.TelemetryDiagnosticRoutineArgumentSpec = { $: mojo.internal.Union(
    'crosapi.mojom.TelemetryDiagnosticRoutineArgument', {
      'unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'memory': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryDiagnosticMemoryRoutineArgumentSpec,
      }},
      'volume_button': {
        'ordinal': 2,
        'type': crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineArgumentSpec,
      }},
      'fan': {
        'ordinal': 3,
        'type': crosapi.mojom.TelemetryDiagnosticFanRoutineArgumentSpec,
      }},
      'led_lit_up': {
        'ordinal': 4,
        'type': crosapi.mojom.TelemetryDiagnosticLedLitUpRoutineArgumentSpec,
      }},
      'network_bandwidth': {
        'ordinal': 5,
        'type': crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineArgumentSpec,
      }},
      'camera_frame_analysis': {
        'ordinal': 6,
        'type': crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineArgumentSpec,
      }},
      'keyboard_backlight': {
        'ordinal': 7,
        'type': crosapi.mojom.TelemetryDiagnosticKeyboardBacklightRoutineArgumentSpec,
      }},
    })
};

// Union: TelemetryDiagnosticRoutineRunningInfo
crosapi.mojom.TelemetryDiagnosticRoutineRunningInfoSpec = { $: mojo.internal.Union(
    'crosapi.mojom.TelemetryDiagnosticRoutineRunningInfo', {
      'unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'network_bandwidth': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineRunningInfoSpec,
      }},
    })
};

// Union: TelemetryDiagnosticRoutineInquiryReply
crosapi.mojom.TelemetryDiagnosticRoutineInquiryReplySpec = { $: mojo.internal.Union(
    'crosapi.mojom.TelemetryDiagnosticRoutineInquiryReply', {
      'unrecognizedReply': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'check_led_lit_up_state': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateReplySpec,
      }},
      'check_keyboard_backlight_state': {
        'ordinal': 2,
        'type': crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateReplySpec,
      }},
    })
};

// Union: TelemetryDiagnosticRoutineInquiry
crosapi.mojom.TelemetryDiagnosticRoutineInquirySpec = { $: mojo.internal.Union(
    'crosapi.mojom.TelemetryDiagnosticRoutineInquiry', {
      'unrecognizedInquiry': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'check_led_lit_up_state': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateInquirySpec,
      }},
      'check_keyboard_backlight_state': {
        'ordinal': 2,
        'type': crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateInquirySpec,
      }},
    })
};

// Union: TelemetryDiagnosticRoutineInteraction
crosapi.mojom.TelemetryDiagnosticRoutineInteractionSpec = { $: mojo.internal.Union(
    'crosapi.mojom.TelemetryDiagnosticRoutineInteraction', {
      'unrecognizedInteraction': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'inquiry': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryDiagnosticRoutineInquirySpec,
      }},
    })
};

// Union: TelemetryDiagnosticRoutineDetail
crosapi.mojom.TelemetryDiagnosticRoutineDetailSpec = { $: mojo.internal.Union(
    'crosapi.mojom.TelemetryDiagnosticRoutineDetail', {
      'unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'memory': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryDiagnosticMemoryRoutineDetailSpec,
      }},
      'volume_button': {
        'ordinal': 2,
        'type': crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineDetailSpec,
      }},
      'fan': {
        'ordinal': 3,
        'type': crosapi.mojom.TelemetryDiagnosticFanRoutineDetailSpec,
      }},
      'network_bandwidth': {
        'ordinal': 4,
        'type': crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineDetailSpec,
      }},
      'camera_frame_analysis': {
        'ordinal': 5,
        'type': crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineDetailSpec,
      }},
    })
};

// Union: TelemetryDiagnosticRoutineStateUnion
crosapi.mojom.TelemetryDiagnosticRoutineStateUnionSpec = { $: mojo.internal.Union(
    'crosapi.mojom.TelemetryDiagnosticRoutineStateUnion', {
      'unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'initialized': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryDiagnosticRoutineStateInitializedSpec,
      }},
      'running': {
        'ordinal': 2,
        'type': crosapi.mojom.TelemetryDiagnosticRoutineStateRunningSpec,
      }},
      'waiting': {
        'ordinal': 3,
        'type': crosapi.mojom.TelemetryDiagnosticRoutineStateWaitingSpec,
      }},
      'finished': {
        'ordinal': 4,
        'type': crosapi.mojom.TelemetryDiagnosticRoutineStateFinishedSpec,
      }},
    })
};

// Struct: TelemetryDiagnosticMemoryRoutineArgument
crosapi.mojom.TelemetryDiagnosticMemoryRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticMemoryRoutineArgument',
      packedSize: 16,
      fields: [
        { name: 'max_testing_mem_kib_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'max_testing_mem_kib_$value', originalFieldName: 'max_testing_mem_kib' } },
        { name: 'max_testing_mem_kib_$value', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'max_testing_mem_kib_$flag', originalFieldName: 'max_testing_mem_kib' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TelemetryDiagnosticVolumeButtonRoutineArgument
crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineArgument',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: TelemetryDiagnosticLedLitUpRoutineArgument
crosapi.mojom.TelemetryDiagnosticLedLitUpRoutineArgumentSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticLedLitUpRoutineArgument',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.TelemetryDiagnosticLedNameSpec, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 4, packedBitOffset: 0, type: crosapi.mojom.TelemetryDiagnosticLedColorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: TelemetryDiagnosticNetworkBandwidthRoutineRunningInfo
crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineRunningInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineRunningInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TelemetryDiagnosticRoutineStateRunning
crosapi.mojom.TelemetryDiagnosticRoutineStateRunningSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticRoutineStateRunning',
      packedSize: 24,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.TelemetryDiagnosticRoutineRunningInfoSpec, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 1, packedSize: 24}]
    }
  }
};

// Struct: TelemetryDiagnosticCheckLedLitUpStateReply
crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateReplySpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateReply',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TelemetryDiagnosticCheckKeyboardBacklightStateReply
crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateReplySpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateReply',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: TelemetryDiagnosticRoutineStateWaiting
crosapi.mojom.TelemetryDiagnosticRoutineStateWaitingSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticRoutineStateWaiting',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TelemetryDiagnosticMemtesterResult
crosapi.mojom.TelemetryDiagnosticMemtesterResultSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticMemtesterResult',
      packedSize: 24,
      fields: [
        { name: 'passed_items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.TelemetryDiagnosticMemtesterTestItemEnumSpec, false), nullable: false, minVersion: 0 },
        { name: 'failed_items', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.TelemetryDiagnosticMemtesterTestItemEnumSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TelemetryDiagnosticMemoryRoutineDetail
crosapi.mojom.TelemetryDiagnosticMemoryRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticMemoryRoutineDetail',
      packedSize: 24,
      fields: [
        { name: 'bytes_tested', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.TelemetryDiagnosticMemtesterResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: TelemetryDiagnosticFanRoutineDetail
crosapi.mojom.TelemetryDiagnosticFanRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticFanRoutineDetail',
      packedSize: 32,
      fields: [
        { name: 'passed_fan_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'failed_fan_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'fan_count_status', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.TelemetryDiagnosticHardwarePresenceStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: TelemetryDiagnosticNetworkBandwidthRoutineDetail
crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineDetail',
      packedSize: 24,
      fields: [
        { name: 'download_speed_kbps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'upload_speed_kbps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TelemetryDiagnosticCameraFrameAnalysisRoutineDetail
crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineDetailSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineDetail',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TelemetryDiagnosticRoutineStateFinished
crosapi.mojom.TelemetryDiagnosticRoutineStateFinishedSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticRoutineStateFinished',
      packedSize: 32,
      fields: [
        { name: 'has_passed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'detail', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.TelemetryDiagnosticRoutineDetailSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: TelemetryDiagnosticRoutineState
crosapi.mojom.TelemetryDiagnosticRoutineStateSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticRoutineState',
      packedSize: 32,
      fields: [
        { name: 'percentage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'state_union', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.TelemetryDiagnosticRoutineStateUnionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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

  getState() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ParamsSpec,
      crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ResponseParamsSpec,
      []);
  }

  start() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.TelemetryDiagnosticRoutineControl_Start_ParamsSpec,
      null,
      []);
  }

  replyToInquiry(reply) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.TelemetryDiagnosticRoutineControl_ReplyToInquiry_ParamsSpec,
      null,
      [reply]);
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

// ParamsSpec for GetState
crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticRoutineControl.GetState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.TelemetryDiagnosticRoutineStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Start
crosapi.mojom.TelemetryDiagnosticRoutineControl_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticRoutineControl.Start_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ReplyToInquiry
crosapi.mojom.TelemetryDiagnosticRoutineControl_ReplyToInquiry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticRoutineControl.ReplyToInquiry_Params',
      packedSize: 24,
      fields: [
        { name: 'reply', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.TelemetryDiagnosticRoutineInquiryReplySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
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

  onRoutineStateChange(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.TelemetryDiagnosticRoutineObserver_OnRoutineStateChange_ParamsSpec,
      null,
      [state]);
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

// ParamsSpec for OnRoutineStateChange
crosapi.mojom.TelemetryDiagnosticRoutineObserver_OnRoutineStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticRoutineObserver.OnRoutineStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.TelemetryDiagnosticRoutineStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
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

  createRoutine(routine_argument, routine_receiver, routine_observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.TelemetryDiagnosticRoutinesService_CreateRoutine_ParamsSpec,
      null,
      [routine_argument, routine_receiver, routine_observer]);
  }

  isRoutineArgumentSupported(routine_argument) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ParamsSpec,
      crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec,
      [routine_argument]);
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

// ParamsSpec for CreateRoutine
crosapi.mojom.TelemetryDiagnosticRoutinesService_CreateRoutine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticRoutinesService.CreateRoutine_Params',
      packedSize: 32,
      fields: [
        { name: 'routine_argument', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.TelemetryDiagnosticRoutineArgumentSpec, nullable: false, minVersion: 0 },
        { name: 'routine_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'routine_observer', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for IsRoutineArgumentSupported
crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryDiagnosticRoutinesService.IsRoutineArgumentSupported_Params',
      packedSize: 24,
      fields: [
        { name: 'routine_argument', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.TelemetryDiagnosticRoutineArgumentSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.TelemetryExtensionSupportStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.TelemetryDiagnosticRoutinesServicePtr = crosapi.mojom.TelemetryDiagnosticRoutinesServiceRemote;
crosapi.mojom.TelemetryDiagnosticRoutinesServiceRequest = crosapi.mojom.TelemetryDiagnosticRoutinesServicePendingReceiver;

