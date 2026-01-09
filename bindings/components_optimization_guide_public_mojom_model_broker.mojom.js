// Auto-generated MojoJS binding
// Source: chromium_src/components/optimization_guide/public/mojom/model_broker.mojom
// Module: optimization_guide.mojom

'use strict';

// Module namespace
var optimization_guide = optimization_guide || {};
optimization_guide.mojom = optimization_guide.mojom || {};


// Enum: OnDeviceFeature
optimization_guide.mojom.OnDeviceFeature = {
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

// Enum: ModelUnavailableReason
optimization_guide.mojom.ModelUnavailableReason = {
  kUnknown: 0,
  kNotSupported: 1,
  kPendingAssets: 2,
  kPendingUsage: 3,
};

// Struct: ModelSolutionConfig
optimization_guide.mojom.ModelSolutionConfigSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.ModelSolutionConfig',
      packedSize: 16,
      fields: [
        { name: 'max_tokens', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ModelSubscriptionOptions
optimization_guide.mojom.ModelSubscriptionOptionsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.ModelSubscriptionOptions',
      packedSize: 16,
      fields: [
        { name: 'mark_used', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ModelSolution
optimization_guide.mojom.ModelSolution = {};

optimization_guide.mojom.ModelSolutionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

optimization_guide.mojom.ModelSolutionRemote = class {
  static get $interfaceName() {
    return 'optimization_guide.mojom.ModelSolution';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      optimization_guide.mojom.ModelSolutionPendingReceiver,
      handle);
    this.$ = new optimization_guide.mojom.ModelSolutionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

optimization_guide.mojom.ModelSolutionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createSession(session, params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      optimization_guide.mojom.ModelSolution_CreateSession_ParamsSpec,
      null,
      [session, params]);
  }

  createTextSafetySession(session) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      optimization_guide.mojom.ModelSolution_CreateTextSafetySession_ParamsSpec,
      null,
      [session]);
  }

  reportHealthyCompletion() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      optimization_guide.mojom.ModelSolution_ReportHealthyCompletion_ParamsSpec,
      null,
      []);
  }

};

optimization_guide.mojom.ModelSolution.getRemote = function() {
  let remote = new optimization_guide.mojom.ModelSolutionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'optimization_guide.mojom.ModelSolution',
    'context');
  return remote.$;
};

// ParamsSpec for CreateSession
optimization_guide.mojom.ModelSolution_CreateSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.ModelSolution.CreateSession_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateTextSafetySession
optimization_guide.mojom.ModelSolution_CreateTextSafetySession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.ModelSolution.CreateTextSafetySession_Params',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReportHealthyCompletion
optimization_guide.mojom.ModelSolution_ReportHealthyCompletion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.ModelSolution.ReportHealthyCompletion_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
optimization_guide.mojom.ModelSolutionPtr = optimization_guide.mojom.ModelSolutionRemote;
optimization_guide.mojom.ModelSolutionRequest = optimization_guide.mojom.ModelSolutionPendingReceiver;


// Interface: ModelSubscriber
optimization_guide.mojom.ModelSubscriber = {};

optimization_guide.mojom.ModelSubscriberPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

optimization_guide.mojom.ModelSubscriberRemote = class {
  static get $interfaceName() {
    return 'optimization_guide.mojom.ModelSubscriber';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      optimization_guide.mojom.ModelSubscriberPendingReceiver,
      handle);
    this.$ = new optimization_guide.mojom.ModelSubscriberRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

optimization_guide.mojom.ModelSubscriberRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  unavailable(reason) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      optimization_guide.mojom.ModelSubscriber_Unavailable_ParamsSpec,
      null,
      [reason]);
  }

  available(config, solution) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      optimization_guide.mojom.ModelSubscriber_Available_ParamsSpec,
      null,
      [config, solution]);
  }

};

optimization_guide.mojom.ModelSubscriber.getRemote = function() {
  let remote = new optimization_guide.mojom.ModelSubscriberRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'optimization_guide.mojom.ModelSubscriber',
    'context');
  return remote.$;
};

// ParamsSpec for Unavailable
optimization_guide.mojom.ModelSubscriber_Unavailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.ModelSubscriber.Unavailable_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Available
optimization_guide.mojom.ModelSubscriber_Available_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.ModelSubscriber.Available_Params',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'solution', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
optimization_guide.mojom.ModelSubscriberPtr = optimization_guide.mojom.ModelSubscriberRemote;
optimization_guide.mojom.ModelSubscriberRequest = optimization_guide.mojom.ModelSubscriberPendingReceiver;


// Interface: ModelBroker
optimization_guide.mojom.ModelBroker = {};

optimization_guide.mojom.ModelBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

optimization_guide.mojom.ModelBrokerRemote = class {
  static get $interfaceName() {
    return 'optimization_guide.mojom.ModelBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      optimization_guide.mojom.ModelBrokerPendingReceiver,
      handle);
    this.$ = new optimization_guide.mojom.ModelBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

optimization_guide.mojom.ModelBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  subscribe(options, subcriber) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      optimization_guide.mojom.ModelBroker_Subscribe_ParamsSpec,
      null,
      [options, subcriber]);
  }

};

optimization_guide.mojom.ModelBroker.getRemote = function() {
  let remote = new optimization_guide.mojom.ModelBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'optimization_guide.mojom.ModelBroker',
    'context');
  return remote.$;
};

// ParamsSpec for Subscribe
optimization_guide.mojom.ModelBroker_Subscribe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.ModelBroker.Subscribe_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'subcriber', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
optimization_guide.mojom.ModelBrokerPtr = optimization_guide.mojom.ModelBrokerRemote;
optimization_guide.mojom.ModelBrokerRequest = optimization_guide.mojom.ModelBrokerPendingReceiver;

