// Auto-generated MojoJS binding
// Source: chromium_src/components/optimization_guide/public/mojom/model_broker.mojom
// Module: optimization_guide.mojom

'use strict';

// Module namespace
var optimization_guide = optimization_guide || {};
optimization_guide.mojom = optimization_guide.mojom || {};
var services = services || {};

optimization_guide.mojom.OnDeviceFeatureSpec = { $: mojo.internal.Enum() };
optimization_guide.mojom.ModelUnavailableReasonSpec = { $: mojo.internal.Enum() };
optimization_guide.mojom.ModelSolutionConfigSpec = { $: {} };
optimization_guide.mojom.ModelSubscriptionOptionsSpec = { $: {} };
optimization_guide.mojom.ModelSolution = {};
optimization_guide.mojom.ModelSolution.$interfaceName = 'optimization_guide.mojom.ModelSolution';
optimization_guide.mojom.ModelSolution_CreateSession_ParamsSpec = { $: {} };
optimization_guide.mojom.ModelSolution_CreateTextSafetySession_ParamsSpec = { $: {} };
optimization_guide.mojom.ModelSolution_ReportHealthyCompletion_ParamsSpec = { $: {} };
optimization_guide.mojom.ModelSubscriber = {};
optimization_guide.mojom.ModelSubscriber.$interfaceName = 'optimization_guide.mojom.ModelSubscriber';
optimization_guide.mojom.ModelSubscriber_Unavailable_ParamsSpec = { $: {} };
optimization_guide.mojom.ModelSubscriber_Available_ParamsSpec = { $: {} };
optimization_guide.mojom.ModelBroker = {};
optimization_guide.mojom.ModelBroker.$interfaceName = 'optimization_guide.mojom.ModelBroker';
optimization_guide.mojom.ModelBroker_Subscribe_ParamsSpec = { $: {} };

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
  kNotSupported: 2,
  kPendingAssets: 3,
  kPendingUsage: 4,
};

// Struct: ModelSolutionConfig
mojo.internal.Struct(
    optimization_guide.mojom.ModelSolutionConfigSpec, 'optimization_guide.mojom.ModelSolutionConfig', [
      mojo.internal.StructField('feature_config', 0, 0, mojo_base.mojom.ProtoWrapperSpec, null, false, 0, undefined),
      mojo.internal.StructField('text_safety_config', 8, 0, mojo_base.mojom.ProtoWrapperSpec, null, false, 0, undefined),
      mojo.internal.StructField('model_versions', 16, 0, mojo_base.mojom.ProtoWrapperSpec, null, false, 0, undefined),
      mojo.internal.StructField('max_tokens', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ModelSubscriptionOptions
mojo.internal.Struct(
    optimization_guide.mojom.ModelSubscriptionOptionsSpec, 'optimization_guide.mojom.ModelSubscriptionOptions', [
      mojo.internal.StructField('feature', 0, 0, optimization_guide.mojom.OnDeviceFeatureSpec, null, false, 0, undefined),
      mojo.internal.StructField('mark_used', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ModelSolution
mojo.internal.Struct(
    optimization_guide.mojom.ModelSolution_CreateSession_ParamsSpec, 'optimization_guide.mojom.ModelSolution_CreateSession_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceRequest(on_device_model.mojom.SessionRemote), null, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, on_device_model.mojom.SessionParamsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    optimization_guide.mojom.ModelSolution_CreateTextSafetySession_ParamsSpec, 'optimization_guide.mojom.ModelSolution_CreateTextSafetySession_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceRequest(on_device_model.mojom.TextSafetySessionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    optimization_guide.mojom.ModelSolution_ReportHealthyCompletion_ParamsSpec, 'optimization_guide.mojom.ModelSolution_ReportHealthyCompletion_Params', [
    ],
    [[0, 8]]);

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

optimization_guide.mojom.ModelSolutionPtr = optimization_guide.mojom.ModelSolutionRemote;
optimization_guide.mojom.ModelSolutionRequest = optimization_guide.mojom.ModelSolutionPendingReceiver;


// Interface: ModelSubscriber
mojo.internal.Struct(
    optimization_guide.mojom.ModelSubscriber_Unavailable_ParamsSpec, 'optimization_guide.mojom.ModelSubscriber_Unavailable_Params', [
      mojo.internal.StructField('reason', 0, 0, optimization_guide.mojom.ModelUnavailableReasonSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    optimization_guide.mojom.ModelSubscriber_Available_ParamsSpec, 'optimization_guide.mojom.ModelSubscriber_Available_Params', [
      mojo.internal.StructField('config', 0, 0, optimization_guide.mojom.ModelSolutionConfigSpec, null, false, 0, undefined),
      mojo.internal.StructField('solution', 8, 0, mojo.internal.InterfaceProxy(optimization_guide.mojom.ModelSolutionRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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

optimization_guide.mojom.ModelSubscriberPtr = optimization_guide.mojom.ModelSubscriberRemote;
optimization_guide.mojom.ModelSubscriberRequest = optimization_guide.mojom.ModelSubscriberPendingReceiver;


// Interface: ModelBroker
mojo.internal.Struct(
    optimization_guide.mojom.ModelBroker_Subscribe_ParamsSpec, 'optimization_guide.mojom.ModelBroker_Subscribe_Params', [
      mojo.internal.StructField('options', 0, 0, optimization_guide.mojom.ModelSubscriptionOptionsSpec, null, false, 0, undefined),
      mojo.internal.StructField('subcriber', 8, 0, mojo.internal.InterfaceProxy(optimization_guide.mojom.ModelSubscriberRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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

optimization_guide.mojom.ModelBrokerPtr = optimization_guide.mojom.ModelBrokerRemote;
optimization_guide.mojom.ModelBrokerRequest = optimization_guide.mojom.ModelBrokerPendingReceiver;

