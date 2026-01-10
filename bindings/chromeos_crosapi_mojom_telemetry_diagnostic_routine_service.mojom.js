// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/telemetry_diagnostic_routine_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var mojo_base = mojo_base || {};

crosapi.mojom.ButtonTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TelemetryDiagnosticLedNameSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TelemetryDiagnosticLedColorSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ReasonSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TelemetryDiagnosticMemtesterTestItemEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TelemetryDiagnosticHardwarePresenceStatusSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TelemetryDiagnosticCameraSubtestResultSpec = { $: mojo.internal.Enum() };
crosapi.mojom.IssueSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TelemetryDiagnosticRoutineArgumentSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutineRunningInfoSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutineInquiryReplySpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutineInquirySpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutineInteractionSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutineDetailSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutineStateUnionSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticMemoryRoutineArgumentSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineArgumentSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticFanRoutineArgumentSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticLedLitUpRoutineArgumentSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineArgumentSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineArgumentSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticKeyboardBacklightRoutineArgumentSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutineStateInitializedSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineRunningInfoSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutineStateRunningSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateReplySpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateReplySpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateInquirySpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateInquirySpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutineStateWaitingSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticMemtesterResultSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticMemoryRoutineDetailSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineDetailSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticFanRoutineDetailSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineDetailSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineDetailSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutineStateFinishedSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutineStateSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutineControl = {};
crosapi.mojom.TelemetryDiagnosticRoutineControl.$interfaceName = 'crosapi.mojom.TelemetryDiagnosticRoutineControl';
crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ParamsSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ResponseParamsSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutineControl_Start_ParamsSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutineControl_ReplyToInquiry_ParamsSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutineObserver = {};
crosapi.mojom.TelemetryDiagnosticRoutineObserver.$interfaceName = 'crosapi.mojom.TelemetryDiagnosticRoutineObserver';
crosapi.mojom.TelemetryDiagnosticRoutineObserver_OnRoutineStateChange_ParamsSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutinesService = {};
crosapi.mojom.TelemetryDiagnosticRoutinesService.$interfaceName = 'crosapi.mojom.TelemetryDiagnosticRoutinesService';
crosapi.mojom.TelemetryDiagnosticRoutinesService_CreateRoutine_ParamsSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ParamsSpec = { $: {} };
crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec = { $: {} };

// Enum: ButtonType
crosapi.mojom.ButtonType = {
  kUnmappedEnumField: 0,
  kVolumeUp: 1,
  kVolumeDown: 2,
};

// Enum: TelemetryDiagnosticLedName
crosapi.mojom.TelemetryDiagnosticLedName = {
  kUnmappedEnumField: 0,
  kBattery: 1,
  kPower: 2,
  kAdapter: 3,
  kLeft: 4,
  kRight: 5,
};

// Enum: TelemetryDiagnosticLedColor
crosapi.mojom.TelemetryDiagnosticLedColor = {
  kUnmappedEnumField: 0,
  kRed: 1,
  kGreen: 2,
  kBlue: 3,
  kYellow: 4,
  kWhite: 5,
  kAmber: 6,
};

// Enum: Type
crosapi.mojom.Type = {
  kUnmappedEnumField: 0,
  kDownload: 1,
  kUpload: 2,
};

// Enum: State
crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kCorrectColor: 1,
  kNotLitUp: 2,
};

// Enum: State
crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kOk: 1,
  kAnyNotLitUp: 2,
};

// Enum: Reason
crosapi.mojom.Reason = {
  kUnmappedEnumField: 0,
  kWaitingToBeScheduled: 1,
  kWaitingForInteraction: 2,
};

// Enum: TelemetryDiagnosticMemtesterTestItemEnum
crosapi.mojom.TelemetryDiagnosticMemtesterTestItemEnum = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kStuckAddress: 2,
  kCompareAND: 3,
  kCompareDIV: 4,
  kCompareMUL: 5,
  kCompareOR: 6,
  kCompareSUB: 7,
  kCompareXOR: 8,
  kSequentialIncrement: 9,
  kBitFlip: 10,
  kBitSpread: 11,
  kBlockSequential: 12,
  kCheckerboard: 13,
  kRandomValue: 14,
  kSolidBits: 15,
  kWalkingOnes: 16,
  kWalkingZeroes: 17,
  kEightBitWrites: 18,
  kSixteenBitWrites: 19,
};

// Enum: TelemetryDiagnosticHardwarePresenceStatus
crosapi.mojom.TelemetryDiagnosticHardwarePresenceStatus = {
  kUnmappedEnumField: 0,
  kMatched: 1,
  kNotMatched: 2,
  kNotConfigured: 3,
};

// Enum: TelemetryDiagnosticCameraSubtestResult
crosapi.mojom.TelemetryDiagnosticCameraSubtestResult = {
  kUnmappedEnumField: 0,
  kNotRun: 1,
  kPassed: 2,
  kFailed: 3,
};

// Enum: Issue
crosapi.mojom.Issue = {
  kUnmappedEnumField: 0,
  kNone: 1,
  kCameraServiceNotAvailable: 2,
  kBlockedByPrivacyShutter: 3,
  kLensAreDirty: 4,
};

// Union: TelemetryDiagnosticRoutineArgument
mojo.internal.Union(
    crosapi.mojom.TelemetryDiagnosticRoutineArgumentSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineArgument', {
      'unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'memory': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryDiagnosticMemoryRoutineArgumentSpec.$,
        'nullable': false,
      },
      'volume_button': {
        'ordinal': 2,
        'type': crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineArgumentSpec.$,
        'nullable': false,
      },
      'fan': {
        'ordinal': 3,
        'type': crosapi.mojom.TelemetryDiagnosticFanRoutineArgumentSpec.$,
        'nullable': false,
      },
      'led_lit_up': {
        'ordinal': 4,
        'type': crosapi.mojom.TelemetryDiagnosticLedLitUpRoutineArgumentSpec.$,
        'nullable': false,
      },
      'network_bandwidth': {
        'ordinal': 5,
        'type': crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineArgumentSpec.$,
        'nullable': false,
      },
      'camera_frame_analysis': {
        'ordinal': 6,
        'type': crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineArgumentSpec.$,
        'nullable': false,
      },
      'keyboard_backlight': {
        'ordinal': 7,
        'type': crosapi.mojom.TelemetryDiagnosticKeyboardBacklightRoutineArgumentSpec.$,
        'nullable': false,
      },
    });

// Union: TelemetryDiagnosticRoutineRunningInfo
mojo.internal.Union(
    crosapi.mojom.TelemetryDiagnosticRoutineRunningInfoSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineRunningInfo', {
      'unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'network_bandwidth': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineRunningInfoSpec.$,
        'nullable': false,
      },
    });

// Union: TelemetryDiagnosticRoutineInquiryReply
mojo.internal.Union(
    crosapi.mojom.TelemetryDiagnosticRoutineInquiryReplySpec, 'crosapi.mojom.TelemetryDiagnosticRoutineInquiryReply', {
      'unrecognizedReply': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'check_led_lit_up_state': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateReplySpec.$,
        'nullable': false,
      },
      'check_keyboard_backlight_state': {
        'ordinal': 2,
        'type': crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateReplySpec.$,
        'nullable': false,
      },
    });

// Union: TelemetryDiagnosticRoutineInquiry
mojo.internal.Union(
    crosapi.mojom.TelemetryDiagnosticRoutineInquirySpec, 'crosapi.mojom.TelemetryDiagnosticRoutineInquiry', {
      'unrecognizedInquiry': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'check_led_lit_up_state': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateInquirySpec.$,
        'nullable': false,
      },
      'check_keyboard_backlight_state': {
        'ordinal': 2,
        'type': crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateInquirySpec.$,
        'nullable': false,
      },
    });

// Union: TelemetryDiagnosticRoutineInteraction
mojo.internal.Union(
    crosapi.mojom.TelemetryDiagnosticRoutineInteractionSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineInteraction', {
      'unrecognizedInteraction': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'inquiry': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryDiagnosticRoutineInquirySpec.$,
        'nullable': false,
      },
    });

// Union: TelemetryDiagnosticRoutineDetail
mojo.internal.Union(
    crosapi.mojom.TelemetryDiagnosticRoutineDetailSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineDetail', {
      'unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'memory': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryDiagnosticMemoryRoutineDetailSpec.$,
        'nullable': false,
      },
      'volume_button': {
        'ordinal': 2,
        'type': crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineDetailSpec.$,
        'nullable': false,
      },
      'fan': {
        'ordinal': 3,
        'type': crosapi.mojom.TelemetryDiagnosticFanRoutineDetailSpec.$,
        'nullable': false,
      },
      'network_bandwidth': {
        'ordinal': 4,
        'type': crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineDetailSpec.$,
        'nullable': false,
      },
      'camera_frame_analysis': {
        'ordinal': 5,
        'type': crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineDetailSpec.$,
        'nullable': false,
      },
    });

// Union: TelemetryDiagnosticRoutineStateUnion
mojo.internal.Union(
    crosapi.mojom.TelemetryDiagnosticRoutineStateUnionSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineStateUnion', {
      'unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'initialized': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryDiagnosticRoutineStateInitializedSpec.$,
        'nullable': false,
      },
      'running': {
        'ordinal': 2,
        'type': crosapi.mojom.TelemetryDiagnosticRoutineStateRunningSpec.$,
        'nullable': false,
      },
      'waiting': {
        'ordinal': 3,
        'type': crosapi.mojom.TelemetryDiagnosticRoutineStateWaitingSpec.$,
        'nullable': false,
      },
      'finished': {
        'ordinal': 4,
        'type': crosapi.mojom.TelemetryDiagnosticRoutineStateFinishedSpec.$,
        'nullable': false,
      },
    });

// Struct: TelemetryDiagnosticMemoryRoutineArgument
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticMemoryRoutineArgumentSpec, 'crosapi.mojom.TelemetryDiagnosticMemoryRoutineArgument', [
      mojo.internal.StructField('max_testing_mem_kib_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'max_testing_mem_kib_$flag', originalFieldName: 'max_testing_mem_kib' }),
      mojo.internal.StructField('max_testing_mem_kib_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'max_testing_mem_kib_$value', originalFieldName: 'max_testing_mem_kib' }),
    ],
    [[0, 16]]);

// Struct: TelemetryDiagnosticVolumeButtonRoutineArgument
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineArgumentSpec, 'crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineArgument', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryDiagnosticFanRoutineArgument
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticFanRoutineArgumentSpec, 'crosapi.mojom.TelemetryDiagnosticFanRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: TelemetryDiagnosticLedLitUpRoutineArgument
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticLedLitUpRoutineArgumentSpec, 'crosapi.mojom.TelemetryDiagnosticLedLitUpRoutineArgument', [
      mojo.internal.StructField('name', 0, 0, crosapi.mojom.TelemetryDiagnosticLedNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color', 8, 0, crosapi.mojom.TelemetryDiagnosticLedColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TelemetryDiagnosticNetworkBandwidthRoutineArgument
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineArgumentSpec, 'crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: TelemetryDiagnosticCameraFrameAnalysisRoutineArgument
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineArgumentSpec, 'crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: TelemetryDiagnosticKeyboardBacklightRoutineArgument
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticKeyboardBacklightRoutineArgumentSpec, 'crosapi.mojom.TelemetryDiagnosticKeyboardBacklightRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: TelemetryDiagnosticRoutineStateInitialized
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticRoutineStateInitializedSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineStateInitialized', [
    ],
    [[0, 8]]);

// Struct: TelemetryDiagnosticNetworkBandwidthRoutineRunningInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineRunningInfoSpec, 'crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineRunningInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryDiagnosticRoutineStateRunning
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticRoutineStateRunningSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineStateRunning', [
      mojo.internal.StructField('info', 0, 0, crosapi.mojom.TelemetryDiagnosticRoutineRunningInfoSpec.$, null, true, 1, undefined),
    ],
    [[0, 8], [1, 16]]);

// Struct: TelemetryDiagnosticCheckLedLitUpStateReply
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateReplySpec, 'crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateReply', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryDiagnosticCheckKeyboardBacklightStateReply
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateReplySpec, 'crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateReply', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryDiagnosticCheckLedLitUpStateInquiry
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateInquirySpec, 'crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateInquiry', [
    ],
    [[0, 8]]);

// Struct: TelemetryDiagnosticCheckKeyboardBacklightStateInquiry
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateInquirySpec, 'crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateInquiry', [
    ],
    [[0, 8]]);

// Struct: TelemetryDiagnosticRoutineStateWaiting
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticRoutineStateWaitingSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineStateWaiting', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryDiagnosticMemtesterResult
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticMemtesterResultSpec, 'crosapi.mojom.TelemetryDiagnosticMemtesterResult', [
      mojo.internal.StructField('passed_items', 0, 0, mojo.internal.Array(crosapi.mojom.TelemetryDiagnosticMemtesterTestItemEnumSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('failed_items', 8, 0, mojo.internal.Array(crosapi.mojom.TelemetryDiagnosticMemtesterTestItemEnumSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TelemetryDiagnosticMemoryRoutineDetail
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticMemoryRoutineDetailSpec, 'crosapi.mojom.TelemetryDiagnosticMemoryRoutineDetail', [
      mojo.internal.StructField('bytes_tested', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, crosapi.mojom.TelemetryDiagnosticMemtesterResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TelemetryDiagnosticVolumeButtonRoutineDetail
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineDetailSpec, 'crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineDetail', [
    ],
    [[0, 8]]);

// Struct: TelemetryDiagnosticFanRoutineDetail
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticFanRoutineDetailSpec, 'crosapi.mojom.TelemetryDiagnosticFanRoutineDetail', [
      mojo.internal.StructField('passed_fan_ids', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('failed_fan_ids', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('fan_count_status', 16, 0, crosapi.mojom.TelemetryDiagnosticHardwarePresenceStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TelemetryDiagnosticNetworkBandwidthRoutineDetail
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineDetailSpec, 'crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineDetail', [
      mojo.internal.StructField('download_speed_kbps', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('upload_speed_kbps', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TelemetryDiagnosticCameraFrameAnalysisRoutineDetail
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineDetailSpec, 'crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineDetail', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryDiagnosticRoutineStateFinished
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticRoutineStateFinishedSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineStateFinished', [
      mojo.internal.StructField('detail', 0, 0, crosapi.mojom.TelemetryDiagnosticRoutineDetailSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('has_passed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TelemetryDiagnosticRoutineState
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticRoutineStateSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineState', [
      mojo.internal.StructField('state_union', 0, 0, crosapi.mojom.TelemetryDiagnosticRoutineStateUnionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('percentage', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TelemetryDiagnosticRoutineControl
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ParamsSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ResponseParamsSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, crosapi.mojom.TelemetryDiagnosticRoutineStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticRoutineControl_Start_ParamsSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineControl_Start_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticRoutineControl_ReplyToInquiry_ParamsSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineControl_ReplyToInquiry_Params', [
      mojo.internal.StructField('reply', 0, 0, crosapi.mojom.TelemetryDiagnosticRoutineInquiryReplySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  start() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.TelemetryDiagnosticRoutineControl_Start_ParamsSpec,
      null,
      [],
      false);
  }

  replyToInquiry(reply) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.TelemetryDiagnosticRoutineControl_ReplyToInquiry_ParamsSpec,
      null,
      [reply],
      false);
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

crosapi.mojom.TelemetryDiagnosticRoutineControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = crosapi.mojom.TelemetryDiagnosticRoutineControl_Start_ParamsSpec.$.decode(message.payload);
          const result = this.impl.start();
          break;
        }
        case 2: {
          const params = crosapi.mojom.TelemetryDiagnosticRoutineControl_ReplyToInquiry_ParamsSpec.$.decode(message.payload);
          const result = this.impl.replyToInquiry(params.reply);
          break;
        }
      }
    });
  }
};

crosapi.mojom.TelemetryDiagnosticRoutineControlReceiver = crosapi.mojom.TelemetryDiagnosticRoutineControlReceiver;

crosapi.mojom.TelemetryDiagnosticRoutineControlPtr = crosapi.mojom.TelemetryDiagnosticRoutineControlRemote;
crosapi.mojom.TelemetryDiagnosticRoutineControlRequest = crosapi.mojom.TelemetryDiagnosticRoutineControlPendingReceiver;


// Interface: TelemetryDiagnosticRoutineObserver
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticRoutineObserver_OnRoutineStateChange_ParamsSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineObserver_OnRoutineStateChange_Params', [
      mojo.internal.StructField('state', 0, 0, crosapi.mojom.TelemetryDiagnosticRoutineStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [state],
      false);
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

crosapi.mojom.TelemetryDiagnosticRoutineObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.TelemetryDiagnosticRoutineObserver_OnRoutineStateChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onRoutineStateChange(params.state);
          break;
        }
      }
    });
  }
};

crosapi.mojom.TelemetryDiagnosticRoutineObserverReceiver = crosapi.mojom.TelemetryDiagnosticRoutineObserverReceiver;

crosapi.mojom.TelemetryDiagnosticRoutineObserverPtr = crosapi.mojom.TelemetryDiagnosticRoutineObserverRemote;
crosapi.mojom.TelemetryDiagnosticRoutineObserverRequest = crosapi.mojom.TelemetryDiagnosticRoutineObserverPendingReceiver;


// Interface: TelemetryDiagnosticRoutinesService
mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticRoutinesService_CreateRoutine_ParamsSpec, 'crosapi.mojom.TelemetryDiagnosticRoutinesService_CreateRoutine_Params', [
      mojo.internal.StructField('routine_argument', 0, 0, crosapi.mojom.TelemetryDiagnosticRoutineArgumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('routine_receiver', 8, 0, mojo.internal.InterfaceRequest(crosapi.mojom.TelemetryDiagnosticRoutineControlSpec), null, false, 0, undefined),
      mojo.internal.StructField('routine_observer', 16, 0, mojo.internal.InterfaceProxy(crosapi.mojom.TelemetryDiagnosticRoutineObserverSpec), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ParamsSpec, 'crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_Params', [
      mojo.internal.StructField('routine_argument', 0, 0, crosapi.mojom.TelemetryDiagnosticRoutineArgumentSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec, 'crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, crosapi.mojom.TelemetryExtensionSupportStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [routine_argument, routine_receiver, routine_observer],
      false);
  }

  isRoutineArgumentSupported(routine_argument) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ParamsSpec,
      crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec,
      [routine_argument],
      false);
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

crosapi.mojom.TelemetryDiagnosticRoutinesServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.TelemetryDiagnosticRoutinesService_CreateRoutine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createRoutine(params.routine_argument, params.routine_receiver, params.routine_observer);
          break;
        }
        case 1: {
          const params = crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isRoutineArgumentSupported(params.routine_argument);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

crosapi.mojom.TelemetryDiagnosticRoutinesServiceReceiver = crosapi.mojom.TelemetryDiagnosticRoutinesServiceReceiver;

crosapi.mojom.TelemetryDiagnosticRoutinesServicePtr = crosapi.mojom.TelemetryDiagnosticRoutinesServiceRemote;
crosapi.mojom.TelemetryDiagnosticRoutinesServiceRequest = crosapi.mojom.TelemetryDiagnosticRoutinesServicePendingReceiver;

