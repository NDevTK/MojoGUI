// Auto-generated MojoJS binding
// Source: chromium_src/services/on_device_model/public/mojom/on_device_model.mojom
// Module: on_device_model.mojom

'use strict';

// Module namespace
var on_device_model = on_device_model || {};
on_device_model.mojom = on_device_model.mojom || {};


// Enum: Token
on_device_model.mojom.Token = {
  kSystem: 0,
  kModel: 1,
  kUser: 2,
};
on_device_model.mojom.TokenSpec = { $: mojo.internal.Enum() };

// Enum: Priority
on_device_model.mojom.Priority = {
  kBackground: 0,
};
on_device_model.mojom.PrioritySpec = { $: mojo.internal.Enum() };

// Enum: PerformanceClass
on_device_model.mojom.PerformanceClass = {
  kGpuBlocked: 0,
  kFailedToLoadLibrary: 1,
  kVeryLow: 2,
  kLow: 3,
  kMedium: 4,
  kHigh: 5,
  kVeryHigh: 6,
};
on_device_model.mojom.PerformanceClassSpec = { $: mojo.internal.Enum() };

// Enum: LoadModelResult
on_device_model.mojom.LoadModelResult = {
  kSuccess: 0,
  kGpuBlocked: 1,
  EnableIf: 2,
};
on_device_model.mojom.LoadModelResultSpec = { $: mojo.internal.Enum() };

// Union: InputPiece
on_device_model.mojom.InputPieceSpec = { $: mojo.internal.Union(
    'on_device_model.mojom.InputPiece', {
      'token': {
        'ordinal': 0,
        'type': on_device_model.mojom.TokenSpec,
      }},
      'text': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
      'bitmap': {
        'ordinal': 2,
        'type': skia.mojom.BitmapWithArbitraryBppSpec,
      }},
      'unknown_type': {
        'ordinal': 3,
        'type': mojo.internal.Bool,
      }},
      'audio': {
        'ordinal': 4,
        'type': on_device_model.mojom.AudioDataSpec,
      }},
    })
};

// Union: ResponseConstraint
on_device_model.mojom.ResponseConstraintSpec = { $: mojo.internal.Union(
    'on_device_model.mojom.ResponseConstraint', {
      'json_schema': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'regex': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
      'unknown_type': {
        'ordinal': 2,
        'type': mojo.internal.Bool,
      }},
    })
};

// Struct: AdaptationAssets
on_device_model.mojom.AdaptationAssetsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.AdaptationAssets',
      packedSize: 24,
      fields: [
        { name: 'weights', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: true, minVersion: 0 },
        { name: 'weights_path', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: LanguageDetectionResult
on_device_model.mojom.LanguageDetectionResultSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.LanguageDetectionResult',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'reliability', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SafetyInfo
on_device_model.mojom.SafetyInfoSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.SafetyInfo',
      packedSize: 24,
      fields: [
        { name: 'class_scores', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Float, false), nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 8, packedBitOffset: 0, type: on_device_model.mojom.LanguageDetectionResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ResponseChunk
on_device_model.mojom.ResponseChunkSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.ResponseChunk',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'safety_info', packedOffset: 8, packedBitOffset: 0, type: on_device_model.mojom.SafetyInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ResponseSummary
on_device_model.mojom.ResponseSummarySpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.ResponseSummary',
      packedSize: 24,
      fields: [
        { name: 'safety_info', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.SafetyInfoSpec, nullable: true, minVersion: 0 },
        { name: 'output_token_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: LoadAdaptationParams
on_device_model.mojom.LoadAdaptationParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.LoadAdaptationParams',
      packedSize: 16,
      fields: [
        { name: 'assets', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.AdaptationAssetsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Capabilities
on_device_model.mojom.CapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.Capabilities',
      packedSize: 16,
      fields: [
        { name: 'image_input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'audio_input', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SessionParams
on_device_model.mojom.SessionParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.SessionParams',
      packedSize: 32,
      fields: [
        { name: 'max_tokens', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'capabilities', packedOffset: 8, packedBitOffset: 0, type: on_device_model.mojom.CapabilitiesSpec, nullable: false, minVersion: 0 },
        { name: 'top_k', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 1 },
        { name: 'temperature', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 1, packedSize: 32}]
    }
  }
};

// Struct: Input
on_device_model.mojom.InputSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.Input',
      packedSize: 16,
      fields: [
        { name: 'pieces', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(on_device_model.mojom.InputPieceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AppendOptions
on_device_model.mojom.AppendOptionsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.AppendOptions',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.InputSpec, nullable: false, minVersion: 0 },
        { name: 'max_tokens', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: GenerateOptions
on_device_model.mojom.GenerateOptionsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.GenerateOptions',
      packedSize: 32,
      fields: [
        { name: 'max_output_tokens', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'constraint', packedOffset: 8, packedBitOffset: 0, type: on_device_model.mojom.ResponseConstraintSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 2, packedSize: 32}]
    }
  }
};

// Struct: AudioData
on_device_model.mojom.AudioDataSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.AudioData',
      packedSize: 32,
      fields: [
        { name: 'channel_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'sample_rate', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'frame_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Float, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SpeechRecognitionResult
on_device_model.mojom.SpeechRecognitionResultSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.SpeechRecognitionResult',
      packedSize: 24,
      fields: [
        { name: 'transcript', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_final', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AsrStreamOptions
on_device_model.mojom.AsrStreamOptionsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.AsrStreamOptions',
      packedSize: 16,
      fields: [
        { name: 'sample_rate_hz', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DevicePerformanceInfo
on_device_model.mojom.DevicePerformanceInfoSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.DevicePerformanceInfo',
      packedSize: 24,
      fields: [
        { name: 'performance_class', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.PerformanceClassSpec, nullable: false, minVersion: 0 },
        { name: 'vram_mb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DeviceInfo
on_device_model.mojom.DeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.DeviceInfo',
      packedSize: 32,
      fields: [
        { name: 'vendor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'device_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'driver_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'supports_fp16', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: StreamingResponder
on_device_model.mojom.StreamingResponder = {};

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

// ParamsSpec for OnResponse
on_device_model.mojom.StreamingResponder_OnResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.StreamingResponder.OnResponse_Params',
      packedSize: 16,
      fields: [
        { name: 'chunk', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.ResponseChunkSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnComplete
on_device_model.mojom.StreamingResponder_OnComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.StreamingResponder.OnComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'summary', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.ResponseSummarySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
on_device_model.mojom.StreamingResponderPtr = on_device_model.mojom.StreamingResponderRemote;
on_device_model.mojom.StreamingResponderRequest = on_device_model.mojom.StreamingResponderPendingReceiver;


// Interface: ContextClient
on_device_model.mojom.ContextClient = {};

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

// ParamsSpec for OnComplete
on_device_model.mojom.ContextClient_OnComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.ContextClient.OnComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'tokens_processed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
on_device_model.mojom.ContextClientPtr = on_device_model.mojom.ContextClientRemote;
on_device_model.mojom.ContextClientRequest = on_device_model.mojom.ContextClientPendingReceiver;


// Interface: Session
on_device_model.mojom.Session = {};

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

// ParamsSpec for Append
on_device_model.mojom.Session_Append_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.Session.Append_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.AppendOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Generate
on_device_model.mojom.Session_Generate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.Session.Generate_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.GenerateOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'responder', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetSizeInTokens
on_device_model.mojom.Session_GetSizeInTokens_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.Session.GetSizeInTokens_Params',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.InputSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

on_device_model.mojom.Session_GetSizeInTokens_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Score
on_device_model.mojom.Session_Score_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.Session.Score_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

on_device_model.mojom.Session_Score_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'probability', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Clone
on_device_model.mojom.Session_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.Session.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetProbabilitiesBlocking
on_device_model.mojom.Session_GetProbabilitiesBlocking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.Session.GetProbabilitiesBlocking_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

on_device_model.mojom.Session_GetProbabilitiesBlocking_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'probabilities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Float, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPriority
on_device_model.mojom.Session_SetPriority_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.Session.SetPriority_Params',
      packedSize: 16,
      fields: [
        { name: 'priority', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.PrioritySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AsrStream
on_device_model.mojom.Session_AsrStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.Session.AsrStream_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.AsrStreamOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'stream', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'responder', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
on_device_model.mojom.SessionPtr = on_device_model.mojom.SessionRemote;
on_device_model.mojom.SessionRequest = on_device_model.mojom.SessionPendingReceiver;


// Interface: OnDeviceModel
on_device_model.mojom.OnDeviceModel = {};

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

// ParamsSpec for StartSession
on_device_model.mojom.OnDeviceModel_StartSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModel.StartSession_Params',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: on_device_model.mojom.SessionParamsSpec, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 1, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClassifyTextSafety
on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModel.ClassifyTextSafety_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'safety_info', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.SafetyInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DetectLanguage
on_device_model.mojom.OnDeviceModel_DetectLanguage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModel.DetectLanguage_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

on_device_model.mojom.OnDeviceModel_DetectLanguage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.LanguageDetectionResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadAdaptation
on_device_model.mojom.OnDeviceModel_LoadAdaptation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModel.LoadAdaptation_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.LoadAdaptationParamsSpec, nullable: false, minVersion: 0 },
        { name: 'model', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

on_device_model.mojom.OnDeviceModel_LoadAdaptation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.LoadModelResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
on_device_model.mojom.OnDeviceModelPtr = on_device_model.mojom.OnDeviceModelRemote;
on_device_model.mojom.OnDeviceModelRequest = on_device_model.mojom.OnDeviceModelPendingReceiver;


// Interface: TextSafetySession
on_device_model.mojom.TextSafetySession = {};

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

// ParamsSpec for ClassifyTextSafety
on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.TextSafetySession.ClassifyTextSafety_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'safety_info', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.SafetyInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DetectLanguage
on_device_model.mojom.TextSafetySession_DetectLanguage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.TextSafetySession.DetectLanguage_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

on_device_model.mojom.TextSafetySession_DetectLanguage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.LanguageDetectionResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Clone
on_device_model.mojom.TextSafetySession_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.TextSafetySession.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
on_device_model.mojom.TextSafetySessionPtr = on_device_model.mojom.TextSafetySessionRemote;
on_device_model.mojom.TextSafetySessionRequest = on_device_model.mojom.TextSafetySessionPendingReceiver;


// Interface: TextSafetyModel
on_device_model.mojom.TextSafetyModel = {};

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

// ParamsSpec for StartSession
on_device_model.mojom.TextSafetyModel_StartSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.TextSafetyModel.StartSession_Params',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
on_device_model.mojom.TextSafetyModelPtr = on_device_model.mojom.TextSafetyModelRemote;
on_device_model.mojom.TextSafetyModelRequest = on_device_model.mojom.TextSafetyModelPendingReceiver;


// Interface: AsrStreamResponder
on_device_model.mojom.AsrStreamResponder = {};

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

// ParamsSpec for OnResponse
on_device_model.mojom.AsrStreamResponder_OnResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.AsrStreamResponder.OnResponse_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(on_device_model.mojom.SpeechRecognitionResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
on_device_model.mojom.AsrStreamResponderPtr = on_device_model.mojom.AsrStreamResponderRemote;
on_device_model.mojom.AsrStreamResponderRequest = on_device_model.mojom.AsrStreamResponderPendingReceiver;


// Interface: AsrStreamInput
on_device_model.mojom.AsrStreamInput = {};

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

// ParamsSpec for AddAudioChunk
on_device_model.mojom.AsrStreamInput_AddAudioChunk_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.AsrStreamInput.AddAudioChunk_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.AudioDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
on_device_model.mojom.AsrStreamInputPtr = on_device_model.mojom.AsrStreamInputRemote;
on_device_model.mojom.AsrStreamInputRequest = on_device_model.mojom.AsrStreamInputPendingReceiver;

