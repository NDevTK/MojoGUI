// Auto-generated MojoJS binding
// Source: chromium_src/components/optimization_guide/public/mojom/model_broker.mojom
// Module: optimization_guide.mojom

'use strict';

// Module namespace
var optimization_guide = optimization_guide || {};
optimization_guide.mojom = optimization_guide.mojom || {};


// Enum: OnDeviceFeature
optimization_guide.mojom.mojom.OnDeviceFeature = {
  kCompose: 0,
  kTest: 1,
  kPromptApi: 2,
  kHistorySearch: 3,
  kSummarize: 4,
  kHistoryQueryIntent: 5,
  kScamDetection: 6,
  kPermissionsAi: 7,
  kWritingAssistanceApi: 8,
  kOnDeviceSpeechRecognition: 9,
  kProofreaderApi: 10,
};
optimization_guide.mojom.mojom.OnDeviceFeatureSpec = { $: mojo.internal.Enum() };

// Enum: ModelUnavailableReason
optimization_guide.mojom.mojom.ModelUnavailableReason = {
  kUnknown: 0,
  kNotSupported: 1,
  kPendingAssets: 2,
  kPendingUsage: 3,
};
optimization_guide.mojom.mojom.ModelUnavailableReasonSpec = { $: mojo.internal.Enum() };

// Struct: ModelSolutionConfig
optimization_guide.mojom.mojom.ModelSolutionConfigSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.ModelSolutionConfig',
      packedSize: 40,
      fields: [
        { name: 'feature_config', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProtoWrapperSpec, nullable: false, minVersion: 0 },
        { name: 'text_safety_config', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ProtoWrapperSpec, nullable: false, minVersion: 0 },
        { name: 'model_versions', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ProtoWrapperSpec, nullable: false, minVersion: 0 },
        { name: 'max_tokens', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ModelSubscriptionOptions
optimization_guide.mojom.mojom.ModelSubscriptionOptionsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.ModelSubscriptionOptions',
      packedSize: 16,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: optimization_guide.mojom.OnDeviceFeatureSpec, nullable: false, minVersion: 0 },
        { name: 'mark_used', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: ModelSolution
optimization_guide.mojom.mojom.ModelSolution = {};

optimization_guide.mojom.mojom.ModelSolutionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

optimization_guide.mojom.mojom.ModelSolutionRemote = class {
  static get $interfaceName() {
    return 'optimization_guide.mojom.ModelSolution';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      optimization_guide.mojom.mojom.ModelSolutionPendingReceiver,
      handle);
    this.$ = new optimization_guide.mojom.mojom.ModelSolutionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

optimization_guide.mojom.mojom.ModelSolutionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createSession(session, params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      optimization_guide.mojom.mojom.ModelSolution_CreateSession_ParamsSpec,
      null,
      [session, params]);
  }

  createTextSafetySession(session) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      optimization_guide.mojom.mojom.ModelSolution_CreateTextSafetySession_ParamsSpec,
      null,
      [session]);
  }

  reportHealthyCompletion() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      optimization_guide.mojom.mojom.ModelSolution_ReportHealthyCompletion_ParamsSpec,
      null,
      []);
  }

};

optimization_guide.mojom.mojom.ModelSolution.getRemote = function() {
  let remote = new optimization_guide.mojom.mojom.ModelSolutionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'optimization_guide.mojom.ModelSolution',
    'context');
  return remote.$;
};

// ParamsSpec for CreateSession
optimization_guide.mojom.mojom.ModelSolution_CreateSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.ModelSolution.CreateSession_Params',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(on_device_model.mojom.SessionRemote), nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: on_device_model.mojom.SessionParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateTextSafetySession
optimization_guide.mojom.mojom.ModelSolution_CreateTextSafetySession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.ModelSolution.CreateTextSafetySession_Params',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(on_device_model.mojom.TextSafetySessionRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportHealthyCompletion
optimization_guide.mojom.mojom.ModelSolution_ReportHealthyCompletion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.ModelSolution.ReportHealthyCompletion_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
optimization_guide.mojom.mojom.ModelSolutionPtr = optimization_guide.mojom.mojom.ModelSolutionRemote;
optimization_guide.mojom.mojom.ModelSolutionRequest = optimization_guide.mojom.mojom.ModelSolutionPendingReceiver;


// Interface: ModelSubscriber
optimization_guide.mojom.mojom.ModelSubscriber = {};

optimization_guide.mojom.mojom.ModelSubscriberPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

optimization_guide.mojom.mojom.ModelSubscriberRemote = class {
  static get $interfaceName() {
    return 'optimization_guide.mojom.ModelSubscriber';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      optimization_guide.mojom.mojom.ModelSubscriberPendingReceiver,
      handle);
    this.$ = new optimization_guide.mojom.mojom.ModelSubscriberRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

optimization_guide.mojom.mojom.ModelSubscriberRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  unavailable(reason) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      optimization_guide.mojom.mojom.ModelSubscriber_Unavailable_ParamsSpec,
      null,
      [reason]);
  }

  available(config, solution) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      optimization_guide.mojom.mojom.ModelSubscriber_Available_ParamsSpec,
      null,
      [config, solution]);
  }

};

optimization_guide.mojom.mojom.ModelSubscriber.getRemote = function() {
  let remote = new optimization_guide.mojom.mojom.ModelSubscriberRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'optimization_guide.mojom.ModelSubscriber',
    'context');
  return remote.$;
};

// ParamsSpec for Unavailable
optimization_guide.mojom.mojom.ModelSubscriber_Unavailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.ModelSubscriber.Unavailable_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: optimization_guide.mojom.ModelUnavailableReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Available
optimization_guide.mojom.mojom.ModelSubscriber_Available_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.ModelSubscriber.Available_Params',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: optimization_guide.mojom.ModelSolutionConfigSpec, nullable: false, minVersion: 0 },
        { name: 'solution', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(optimization_guide.mojom.ModelSolutionRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
optimization_guide.mojom.mojom.ModelSubscriberPtr = optimization_guide.mojom.mojom.ModelSubscriberRemote;
optimization_guide.mojom.mojom.ModelSubscriberRequest = optimization_guide.mojom.mojom.ModelSubscriberPendingReceiver;


// Interface: ModelBroker
optimization_guide.mojom.mojom.ModelBroker = {};

optimization_guide.mojom.mojom.ModelBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

optimization_guide.mojom.mojom.ModelBrokerRemote = class {
  static get $interfaceName() {
    return 'optimization_guide.mojom.ModelBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      optimization_guide.mojom.mojom.ModelBrokerPendingReceiver,
      handle);
    this.$ = new optimization_guide.mojom.mojom.ModelBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

optimization_guide.mojom.mojom.ModelBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  subscribe(options, subcriber) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      optimization_guide.mojom.mojom.ModelBroker_Subscribe_ParamsSpec,
      null,
      [options, subcriber]);
  }

};

optimization_guide.mojom.mojom.ModelBroker.getRemote = function() {
  let remote = new optimization_guide.mojom.mojom.ModelBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'optimization_guide.mojom.ModelBroker',
    'context');
  return remote.$;
};

// ParamsSpec for Subscribe
optimization_guide.mojom.mojom.ModelBroker_Subscribe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.ModelBroker.Subscribe_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: optimization_guide.mojom.ModelSubscriptionOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'subcriber', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(optimization_guide.mojom.ModelSubscriberRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
optimization_guide.mojom.mojom.ModelBrokerPtr = optimization_guide.mojom.mojom.ModelBrokerRemote;
optimization_guide.mojom.mojom.ModelBrokerRequest = optimization_guide.mojom.mojom.ModelBrokerPendingReceiver;

