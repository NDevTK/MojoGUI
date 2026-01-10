// Auto-generated MojoJS binding
// Source: chromium_src/services/on_device_model/public/mojom/on_device_model.mojom
// Module: on_device_model.mojom

'use strict';

// Module namespace
var on_device_model = on_device_model || {};
on_device_model.mojom = on_device_model.mojom || {};
var skia = skia || {};

on_device_model.mojom.TokenSpec = { $: mojo.internal.Enum() };
on_device_model.mojom.PrioritySpec = { $: mojo.internal.Enum() };
on_device_model.mojom.PerformanceClassSpec = { $: mojo.internal.Enum() };
on_device_model.mojom.LoadModelResultSpec = { $: mojo.internal.Enum() };
on_device_model.mojom.InputPieceSpec = { $: {} };
on_device_model.mojom.ResponseConstraintSpec = { $: {} };
on_device_model.mojom.AdaptationAssetsSpec = { $: {} };
on_device_model.mojom.LanguageDetectionResultSpec = { $: {} };
on_device_model.mojom.SafetyInfoSpec = { $: {} };
on_device_model.mojom.ResponseChunkSpec = { $: {} };
on_device_model.mojom.ResponseSummarySpec = { $: {} };
on_device_model.mojom.LoadAdaptationParamsSpec = { $: {} };
on_device_model.mojom.CapabilitiesSpec = { $: {} };
on_device_model.mojom.SessionParamsSpec = { $: {} };
on_device_model.mojom.InputSpec = { $: {} };
on_device_model.mojom.AppendOptionsSpec = { $: {} };
on_device_model.mojom.GenerateOptionsSpec = { $: {} };
on_device_model.mojom.AudioDataSpec = { $: {} };
on_device_model.mojom.SpeechRecognitionResultSpec = { $: {} };
on_device_model.mojom.AsrStreamOptionsSpec = { $: {} };
on_device_model.mojom.DevicePerformanceInfoSpec = { $: {} };
on_device_model.mojom.DeviceInfoSpec = { $: {} };
on_device_model.mojom.StreamingResponder = {};
on_device_model.mojom.StreamingResponder.$interfaceName = 'on_device_model.mojom.StreamingResponder';
on_device_model.mojom.StreamingResponder_OnResponse_ParamsSpec = { $: {} };
on_device_model.mojom.StreamingResponder_OnComplete_ParamsSpec = { $: {} };
on_device_model.mojom.ContextClient = {};
on_device_model.mojom.ContextClient.$interfaceName = 'on_device_model.mojom.ContextClient';
on_device_model.mojom.ContextClient_OnComplete_ParamsSpec = { $: {} };
on_device_model.mojom.Session = {};
on_device_model.mojom.Session.$interfaceName = 'on_device_model.mojom.Session';
on_device_model.mojom.Session_Append_ParamsSpec = { $: {} };
on_device_model.mojom.Session_Generate_ParamsSpec = { $: {} };
on_device_model.mojom.Session_GetSizeInTokens_ParamsSpec = { $: {} };
on_device_model.mojom.Session_GetSizeInTokens_ResponseParamsSpec = { $: {} };
on_device_model.mojom.Session_Score_ParamsSpec = { $: {} };
on_device_model.mojom.Session_Score_ResponseParamsSpec = { $: {} };
on_device_model.mojom.Session_Clone_ParamsSpec = { $: {} };
on_device_model.mojom.Session_GetProbabilitiesBlocking_ParamsSpec = { $: {} };
on_device_model.mojom.Session_GetProbabilitiesBlocking_ResponseParamsSpec = { $: {} };
on_device_model.mojom.Session_SetPriority_ParamsSpec = { $: {} };
on_device_model.mojom.Session_AsrStream_ParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModel = {};
on_device_model.mojom.OnDeviceModel.$interfaceName = 'on_device_model.mojom.OnDeviceModel';
on_device_model.mojom.OnDeviceModel_StartSession_ParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ResponseParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModel_DetectLanguage_ParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModel_DetectLanguage_ResponseParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModel_LoadAdaptation_ParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModel_LoadAdaptation_ResponseParamsSpec = { $: {} };
on_device_model.mojom.TextSafetySession = {};
on_device_model.mojom.TextSafetySession.$interfaceName = 'on_device_model.mojom.TextSafetySession';
on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ParamsSpec = { $: {} };
on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ResponseParamsSpec = { $: {} };
on_device_model.mojom.TextSafetySession_DetectLanguage_ParamsSpec = { $: {} };
on_device_model.mojom.TextSafetySession_DetectLanguage_ResponseParamsSpec = { $: {} };
on_device_model.mojom.TextSafetySession_Clone_ParamsSpec = { $: {} };
on_device_model.mojom.TextSafetyModel = {};
on_device_model.mojom.TextSafetyModel.$interfaceName = 'on_device_model.mojom.TextSafetyModel';
on_device_model.mojom.TextSafetyModel_StartSession_ParamsSpec = { $: {} };
on_device_model.mojom.AsrStreamResponder = {};
on_device_model.mojom.AsrStreamResponder.$interfaceName = 'on_device_model.mojom.AsrStreamResponder';
on_device_model.mojom.AsrStreamResponder_OnResponse_ParamsSpec = { $: {} };
on_device_model.mojom.AsrStreamInput = {};
on_device_model.mojom.AsrStreamInput.$interfaceName = 'on_device_model.mojom.AsrStreamInput';
on_device_model.mojom.AsrStreamInput_AddAudioChunk_ParamsSpec = { $: {} };

// Enum: Token
on_device_model.mojom.Token = {
  kSystem: 0,
  kModel: 1,
  kUser: 2,
  kEnd: 3,
  MinVersion: 3,
  MinVersion: 3,
};

// Enum: Priority
on_device_model.mojom.Priority = {
  kForeground: 0,
  kBackground: 1,
};

// Enum: PerformanceClass
on_device_model.mojom.PerformanceClass = {
  kError: 0,
  kGpuBlocked: 1,
  kFailedToLoadLibrary: 2,
  kVeryLow: 3,
  kLow: 4,
  kMedium: 5,
  kHigh: 6,
  kVeryHigh: 7,
};

// Enum: LoadModelResult
on_device_model.mojom.LoadModelResult = {
  kSuccess: 0,
  kGpuBlocked: 1,
  kFailedToLoadLibrary: 2,
  MinVersion: 1,
  EnableIf: 1,
};

// Union: InputPiece
mojo.internal.Union(
    on_device_model.mojom.InputPieceSpec, 'on_device_model.mojom.InputPiece', {
      'token': {
        'ordinal': 0,
        'type': on_device_model.mojom.TokenSpec,
        'nullable': false,
      },
      'text': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'bitmap': {
        'ordinal': 2,
        'type': skia.mojom.BitmapWithArbitraryBppSpec,
        'nullable': false,
      },
      'unknown_type': {
        'ordinal': 3,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'audio': {
        'ordinal': 4,
        'type': on_device_model.mojom.AudioDataSpec,
        'nullable': false,
      },
    });

// Union: ResponseConstraint
mojo.internal.Union(
    on_device_model.mojom.ResponseConstraintSpec, 'on_device_model.mojom.ResponseConstraint', {
      'json_schema': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'regex': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'unknown_type': {
        'ordinal': 2,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
    });

// Struct: AdaptationAssets
mojo.internal.Struct(
    on_device_model.mojom.AdaptationAssetsSpec, 'on_device_model.mojom.AdaptationAssets', [
      mojo.internal.StructField('weights', 0, 0, mojo_base.mojom.FileSpec, null, true, 0, undefined),
      mojo.internal.StructField('weights_path', 8, 0, mojo_base.mojom.FilePathSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LanguageDetectionResult
mojo.internal.Struct(
    on_device_model.mojom.LanguageDetectionResultSpec, 'on_device_model.mojom.LanguageDetectionResult', [
      mojo.internal.StructField('code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('reliability', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SafetyInfo
mojo.internal.Struct(
    on_device_model.mojom.SafetyInfoSpec, 'on_device_model.mojom.SafetyInfo', [
      mojo.internal.StructField('class_scores', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('language', 8, 0, on_device_model.mojom.LanguageDetectionResultSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ResponseChunk
mojo.internal.Struct(
    on_device_model.mojom.ResponseChunkSpec, 'on_device_model.mojom.ResponseChunk', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('safety_info', 8, 0, on_device_model.mojom.SafetyInfoSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ResponseSummary
mojo.internal.Struct(
    on_device_model.mojom.ResponseSummarySpec, 'on_device_model.mojom.ResponseSummary', [
      mojo.internal.StructField('safety_info', 0, 0, on_device_model.mojom.SafetyInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('output_token_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LoadAdaptationParams
mojo.internal.Struct(
    on_device_model.mojom.LoadAdaptationParamsSpec, 'on_device_model.mojom.LoadAdaptationParams', [
      mojo.internal.StructField('assets', 0, 0, on_device_model.mojom.AdaptationAssetsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Capabilities
mojo.internal.Struct(
    on_device_model.mojom.CapabilitiesSpec, 'on_device_model.mojom.Capabilities', [
      mojo.internal.StructField('image_input', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('audio_input', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SessionParams
mojo.internal.Struct(
    on_device_model.mojom.SessionParamsSpec, 'on_device_model.mojom.SessionParams', [
      mojo.internal.StructField('max_tokens', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('capabilities', 0, 0, on_device_model.mojom.CapabilitiesSpec, null, false, 0, undefined),
      mojo.internal.StructField('top_k', 12, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('temperature', 16, 0, mojo.internal.Float, 0, false, 1, undefined),
    ],
    [[0, 24], [1, 32]]);

// Struct: Input
mojo.internal.Struct(
    on_device_model.mojom.InputSpec, 'on_device_model.mojom.Input', [
      mojo.internal.StructField('pieces', 0, 0, mojo.internal.Array(on_device_model.mojom.InputPieceSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AppendOptions
mojo.internal.Struct(
    on_device_model.mojom.AppendOptionsSpec, 'on_device_model.mojom.AppendOptions', [
      mojo.internal.StructField('input', 0, 0, on_device_model.mojom.InputSpec, null, false, 0, undefined),
      mojo.internal.StructField('max_tokens', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GenerateOptions
mojo.internal.Struct(
    on_device_model.mojom.GenerateOptionsSpec, 'on_device_model.mojom.GenerateOptions', [
      mojo.internal.StructField('max_output_tokens', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('constraint', 8, 0, on_device_model.mojom.ResponseConstraintSpec, null, true, 2, undefined),
    ],
    [[0, 16], [2, 32]]);

// Struct: AudioData
mojo.internal.Struct(
    on_device_model.mojom.AudioDataSpec, 'on_device_model.mojom.AudioData', [
      mojo.internal.StructField('channel_count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sample_rate', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('frame_count', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SpeechRecognitionResult
mojo.internal.Struct(
    on_device_model.mojom.SpeechRecognitionResultSpec, 'on_device_model.mojom.SpeechRecognitionResult', [
      mojo.internal.StructField('transcript', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_final', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AsrStreamOptions
mojo.internal.Struct(
    on_device_model.mojom.AsrStreamOptionsSpec, 'on_device_model.mojom.AsrStreamOptions', [
      mojo.internal.StructField('sample_rate_hz', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DevicePerformanceInfo
mojo.internal.Struct(
    on_device_model.mojom.DevicePerformanceInfoSpec, 'on_device_model.mojom.DevicePerformanceInfo', [
      mojo.internal.StructField('performance_class', 8, 0, on_device_model.mojom.PerformanceClassSpec, null, false, 0, undefined),
      mojo.internal.StructField('vram_mb', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DeviceInfo
mojo.internal.Struct(
    on_device_model.mojom.DeviceInfoSpec, 'on_device_model.mojom.DeviceInfo', [
      mojo.internal.StructField('vendor_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('device_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('driver_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('supports_fp16', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: StreamingResponder
mojo.internal.Struct(
    on_device_model.mojom.StreamingResponder_OnResponse_ParamsSpec, 'on_device_model.mojom.StreamingResponder_OnResponse_Params', [
      mojo.internal.StructField('chunk', 0, 0, on_device_model.mojom.ResponseChunkSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.StreamingResponder_OnComplete_ParamsSpec, 'on_device_model.mojom.StreamingResponder_OnComplete_Params', [
      mojo.internal.StructField('summary', 0, 0, on_device_model.mojom.ResponseSummarySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

on_device_model.mojom.StreamingResponderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.StreamingResponderRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.StreamingResponder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.StreamingResponderPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.StreamingResponderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.StreamingResponderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResponse(chunk) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_model.mojom.StreamingResponder_OnResponse_ParamsSpec,
      null,
      [chunk]);
  }

  onComplete(summary) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_model.mojom.StreamingResponder_OnComplete_ParamsSpec,
      null,
      [summary]);
  }

};

on_device_model.mojom.StreamingResponder.getRemote = function() {
  let remote = new on_device_model.mojom.StreamingResponderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.StreamingResponder',
    'context');
  return remote.$;
};

on_device_model.mojom.StreamingResponderPtr = on_device_model.mojom.StreamingResponderRemote;
on_device_model.mojom.StreamingResponderRequest = on_device_model.mojom.StreamingResponderPendingReceiver;


// Interface: ContextClient
mojo.internal.Struct(
    on_device_model.mojom.ContextClient_OnComplete_ParamsSpec, 'on_device_model.mojom.ContextClient_OnComplete_Params', [
      mojo.internal.StructField('tokens_processed', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

on_device_model.mojom.ContextClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.ContextClientRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.ContextClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.ContextClientPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.ContextClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.ContextClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onComplete(tokens_processed) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_model.mojom.ContextClient_OnComplete_ParamsSpec,
      null,
      [tokens_processed]);
  }

};

on_device_model.mojom.ContextClient.getRemote = function() {
  let remote = new on_device_model.mojom.ContextClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.ContextClient',
    'context');
  return remote.$;
};

on_device_model.mojom.ContextClientPtr = on_device_model.mojom.ContextClientRemote;
on_device_model.mojom.ContextClientRequest = on_device_model.mojom.ContextClientPendingReceiver;


// Interface: Session
mojo.internal.Struct(
    on_device_model.mojom.Session_Append_ParamsSpec, 'on_device_model.mojom.Session_Append_Params', [
      mojo.internal.StructField('options', 0, 0, on_device_model.mojom.AppendOptionsSpec, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(on_device_model.mojom.ContextClientRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    on_device_model.mojom.Session_Generate_ParamsSpec, 'on_device_model.mojom.Session_Generate_Params', [
      mojo.internal.StructField('options', 0, 0, on_device_model.mojom.GenerateOptionsSpec, null, false, 0, undefined),
      mojo.internal.StructField('responder', 8, 0, mojo.internal.InterfaceProxy(on_device_model.mojom.StreamingResponderRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    on_device_model.mojom.Session_GetSizeInTokens_ParamsSpec, 'on_device_model.mojom.Session_GetSizeInTokens_Params', [
      mojo.internal.StructField('input', 0, 0, on_device_model.mojom.InputSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.Session_GetSizeInTokens_ResponseParamsSpec, 'on_device_model.mojom.Session_GetSizeInTokens_ResponseParams', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.Session_Score_ParamsSpec, 'on_device_model.mojom.Session_Score_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.Session_Score_ResponseParamsSpec, 'on_device_model.mojom.Session_Score_ResponseParams', [
      mojo.internal.StructField('probability', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.Session_Clone_ParamsSpec, 'on_device_model.mojom.Session_Clone_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceRequest(on_device_model.mojom.SessionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.Session_GetProbabilitiesBlocking_ParamsSpec, 'on_device_model.mojom.Session_GetProbabilitiesBlocking_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.Session_GetProbabilitiesBlocking_ResponseParamsSpec, 'on_device_model.mojom.Session_GetProbabilitiesBlocking_ResponseParams', [
      mojo.internal.StructField('probabilities', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.Session_SetPriority_ParamsSpec, 'on_device_model.mojom.Session_SetPriority_Params', [
      mojo.internal.StructField('priority', 0, 0, on_device_model.mojom.PrioritySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.Session_AsrStream_ParamsSpec, 'on_device_model.mojom.Session_AsrStream_Params', [
      mojo.internal.StructField('options', 0, 0, on_device_model.mojom.AsrStreamOptionsSpec, null, false, 0, undefined),
      mojo.internal.StructField('stream', 8, 0, mojo.internal.InterfaceRequest(on_device_model.mojom.AsrStreamInputRemote), null, false, 0, undefined),
      mojo.internal.StructField('responder', 16, 0, mojo.internal.InterfaceProxy(on_device_model.mojom.AsrStreamResponderRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

on_device_model.mojom.SessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.SessionRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.Session';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.SessionPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.SessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.SessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  append(options, client) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      on_device_model.mojom.Session_Append_ParamsSpec,
      null,
      [options, client]);
  }

  generate(options, responder) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      on_device_model.mojom.Session_Generate_ParamsSpec,
      null,
      [options, responder]);
  }

  getSizeInTokens(input) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      on_device_model.mojom.Session_GetSizeInTokens_ParamsSpec,
      on_device_model.mojom.Session_GetSizeInTokens_ResponseParamsSpec,
      [input]);
  }

  score(text) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      on_device_model.mojom.Session_Score_ParamsSpec,
      on_device_model.mojom.Session_Score_ResponseParamsSpec,
      [text]);
  }

  clone(session) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      on_device_model.mojom.Session_Clone_ParamsSpec,
      null,
      [session]);
  }

  getProbabilitiesBlocking(text) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      on_device_model.mojom.Session_GetProbabilitiesBlocking_ParamsSpec,
      on_device_model.mojom.Session_GetProbabilitiesBlocking_ResponseParamsSpec,
      [text]);
  }

  setPriority(priority) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      on_device_model.mojom.Session_SetPriority_ParamsSpec,
      null,
      [priority]);
  }

  asrStream(options, stream, responder) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      on_device_model.mojom.Session_AsrStream_ParamsSpec,
      null,
      [options, stream, responder]);
  }

};

on_device_model.mojom.Session.getRemote = function() {
  let remote = new on_device_model.mojom.SessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.Session',
    'context');
  return remote.$;
};

on_device_model.mojom.SessionPtr = on_device_model.mojom.SessionRemote;
on_device_model.mojom.SessionRequest = on_device_model.mojom.SessionPendingReceiver;


// Interface: OnDeviceModel
mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModel_StartSession_ParamsSpec, 'on_device_model.mojom.OnDeviceModel_StartSession_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceRequest(on_device_model.mojom.SessionRemote), null, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, on_device_model.mojom.SessionParamsSpec, null, true, 1, undefined),
    ],
    [[0, 16], [1, 24]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ParamsSpec, 'on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ResponseParamsSpec, 'on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ResponseParams', [
      mojo.internal.StructField('safety_info', 0, 0, on_device_model.mojom.SafetyInfoSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModel_DetectLanguage_ParamsSpec, 'on_device_model.mojom.OnDeviceModel_DetectLanguage_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModel_DetectLanguage_ResponseParamsSpec, 'on_device_model.mojom.OnDeviceModel_DetectLanguage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, on_device_model.mojom.LanguageDetectionResultSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModel_LoadAdaptation_ParamsSpec, 'on_device_model.mojom.OnDeviceModel_LoadAdaptation_Params', [
      mojo.internal.StructField('params', 0, 0, on_device_model.mojom.LoadAdaptationParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('model', 8, 0, mojo.internal.InterfaceRequest(on_device_model.mojom.OnDeviceModelRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModel_LoadAdaptation_ResponseParamsSpec, 'on_device_model.mojom.OnDeviceModel_LoadAdaptation_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, on_device_model.mojom.LoadModelResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

on_device_model.mojom.OnDeviceModelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.OnDeviceModelRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.OnDeviceModel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.OnDeviceModelPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.OnDeviceModelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.OnDeviceModelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startSession(session, params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_model.mojom.OnDeviceModel_StartSession_ParamsSpec,
      null,
      [session, params]);
  }

  classifyTextSafety(text) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ParamsSpec,
      on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ResponseParamsSpec,
      [text]);
  }

  detectLanguage(text) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      on_device_model.mojom.OnDeviceModel_DetectLanguage_ParamsSpec,
      on_device_model.mojom.OnDeviceModel_DetectLanguage_ResponseParamsSpec,
      [text]);
  }

  loadAdaptation(params, model) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      on_device_model.mojom.OnDeviceModel_LoadAdaptation_ParamsSpec,
      on_device_model.mojom.OnDeviceModel_LoadAdaptation_ResponseParamsSpec,
      [params, model]);
  }

};

on_device_model.mojom.OnDeviceModel.getRemote = function() {
  let remote = new on_device_model.mojom.OnDeviceModelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.OnDeviceModel',
    'context');
  return remote.$;
};

on_device_model.mojom.OnDeviceModelPtr = on_device_model.mojom.OnDeviceModelRemote;
on_device_model.mojom.OnDeviceModelRequest = on_device_model.mojom.OnDeviceModelPendingReceiver;


// Interface: TextSafetySession
mojo.internal.Struct(
    on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ParamsSpec, 'on_device_model.mojom.TextSafetySession_ClassifyTextSafety_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ResponseParamsSpec, 'on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ResponseParams', [
      mojo.internal.StructField('safety_info', 0, 0, on_device_model.mojom.SafetyInfoSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.TextSafetySession_DetectLanguage_ParamsSpec, 'on_device_model.mojom.TextSafetySession_DetectLanguage_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.TextSafetySession_DetectLanguage_ResponseParamsSpec, 'on_device_model.mojom.TextSafetySession_DetectLanguage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, on_device_model.mojom.LanguageDetectionResultSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.TextSafetySession_Clone_ParamsSpec, 'on_device_model.mojom.TextSafetySession_Clone_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceRequest(on_device_model.mojom.TextSafetySessionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

on_device_model.mojom.TextSafetySessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.TextSafetySessionRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.TextSafetySession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.TextSafetySessionPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.TextSafetySessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.TextSafetySessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  classifyTextSafety(text) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ParamsSpec,
      on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ResponseParamsSpec,
      [text]);
  }

  detectLanguage(text) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      on_device_model.mojom.TextSafetySession_DetectLanguage_ParamsSpec,
      on_device_model.mojom.TextSafetySession_DetectLanguage_ResponseParamsSpec,
      [text]);
  }

  clone(session) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      on_device_model.mojom.TextSafetySession_Clone_ParamsSpec,
      null,
      [session]);
  }

};

on_device_model.mojom.TextSafetySession.getRemote = function() {
  let remote = new on_device_model.mojom.TextSafetySessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.TextSafetySession',
    'context');
  return remote.$;
};

on_device_model.mojom.TextSafetySessionPtr = on_device_model.mojom.TextSafetySessionRemote;
on_device_model.mojom.TextSafetySessionRequest = on_device_model.mojom.TextSafetySessionPendingReceiver;


// Interface: TextSafetyModel
mojo.internal.Struct(
    on_device_model.mojom.TextSafetyModel_StartSession_ParamsSpec, 'on_device_model.mojom.TextSafetyModel_StartSession_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceRequest(on_device_model.mojom.TextSafetySessionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

on_device_model.mojom.TextSafetyModelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.TextSafetyModelRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.TextSafetyModel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.TextSafetyModelPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.TextSafetyModelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.TextSafetyModelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startSession(session) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_model.mojom.TextSafetyModel_StartSession_ParamsSpec,
      null,
      [session]);
  }

};

on_device_model.mojom.TextSafetyModel.getRemote = function() {
  let remote = new on_device_model.mojom.TextSafetyModelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.TextSafetyModel',
    'context');
  return remote.$;
};

on_device_model.mojom.TextSafetyModelPtr = on_device_model.mojom.TextSafetyModelRemote;
on_device_model.mojom.TextSafetyModelRequest = on_device_model.mojom.TextSafetyModelPendingReceiver;


// Interface: AsrStreamResponder
mojo.internal.Struct(
    on_device_model.mojom.AsrStreamResponder_OnResponse_ParamsSpec, 'on_device_model.mojom.AsrStreamResponder_OnResponse_Params', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Array(on_device_model.mojom.SpeechRecognitionResultSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

on_device_model.mojom.AsrStreamResponderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.AsrStreamResponderRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.AsrStreamResponder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.AsrStreamResponderPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.AsrStreamResponderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.AsrStreamResponderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResponse(result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_model.mojom.AsrStreamResponder_OnResponse_ParamsSpec,
      null,
      [result]);
  }

};

on_device_model.mojom.AsrStreamResponder.getRemote = function() {
  let remote = new on_device_model.mojom.AsrStreamResponderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.AsrStreamResponder',
    'context');
  return remote.$;
};

on_device_model.mojom.AsrStreamResponderPtr = on_device_model.mojom.AsrStreamResponderRemote;
on_device_model.mojom.AsrStreamResponderRequest = on_device_model.mojom.AsrStreamResponderPendingReceiver;


// Interface: AsrStreamInput
mojo.internal.Struct(
    on_device_model.mojom.AsrStreamInput_AddAudioChunk_ParamsSpec, 'on_device_model.mojom.AsrStreamInput_AddAudioChunk_Params', [
      mojo.internal.StructField('data', 0, 0, on_device_model.mojom.AudioDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

on_device_model.mojom.AsrStreamInputPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.AsrStreamInputRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.AsrStreamInput';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.AsrStreamInputPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.AsrStreamInputRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.AsrStreamInputRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addAudioChunk(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_model.mojom.AsrStreamInput_AddAudioChunk_ParamsSpec,
      null,
      [data]);
  }

};

on_device_model.mojom.AsrStreamInput.getRemote = function() {
  let remote = new on_device_model.mojom.AsrStreamInputRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.AsrStreamInput',
    'context');
  return remote.$;
};

on_device_model.mojom.AsrStreamInputPtr = on_device_model.mojom.AsrStreamInputRemote;
on_device_model.mojom.AsrStreamInputRequest = on_device_model.mojom.AsrStreamInputPendingReceiver;

