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

// Enum: Priority
on_device_model.mojom.Priority = {
  kBackground: 0,
};

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

// Enum: LoadModelResult
on_device_model.mojom.LoadModelResult = {
  kSuccess: 0,
  kGpuBlocked: 1,
  EnableIf: 2,
};

// Struct: AdaptationAssets
on_device_model.mojom.AdaptationAssetsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.AdaptationAssets',
      packedSize: 24,
      fields: [
        { name: 'weights', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: true },
        { name: 'weights_path', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'reliability', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'class_scores', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'language', packedOffset: 8, packedBitOffset: 0, type: on_device_model.mojom.LanguageDetectionResultSpec, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'safety_info', packedOffset: 8, packedBitOffset: 0, type: on_device_model.mojom.SafetyInfoSpec, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'safety_info', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.SafetyInfoSpec, nullable: true },
        { name: 'output_token_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'assets', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.AdaptationAssetsSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'image_input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'audio_input', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SessionParams
on_device_model.mojom.SessionParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.SessionParams',
      packedSize: 40,
      fields: [
        { name: 'capabilities', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.CapabilitiesSpec, nullable: false },
        { name: 'top_k', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'temperature', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'max_tokens', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'pieces', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.InputSpec, nullable: false },
        { name: 'max_tokens', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GenerateOptions
on_device_model.mojom.GenerateOptionsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.GenerateOptions',
      packedSize: 24,
      fields: [
        { name: 'constraint', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'max_output_tokens', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'channel_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'sample_rate', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'frame_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'transcript', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_final', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'sample_rate_hz', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'performance_class', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.PerformanceClassSpec, nullable: false },
        { name: 'vram_mb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'driver_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'vendor_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'device_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'supports_fp16', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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

// Legacy compatibility
on_device_model.mojom.AsrStreamInputPtr = on_device_model.mojom.AsrStreamInputRemote;
on_device_model.mojom.AsrStreamInputRequest = on_device_model.mojom.AsrStreamInputPendingReceiver;

