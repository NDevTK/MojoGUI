// Auto-generated MojoJS binding
// Source: chromium_src/services/on_device_model/public/mojom/on_device_model_service.mojom
// Module: on_device_model.mojom

'use strict';

// Module namespace
var on_device_model = on_device_model || {};
on_device_model.mojom = on_device_model.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

on_device_model.mojom.ModelBackendTypeSpec = { $: mojo.internal.Enum() };
on_device_model.mojom.ModelPerformanceHintSpec = { $: mojo.internal.Enum() };
on_device_model.mojom.PlatformModelStateSpec = { $: mojo.internal.Enum() };
on_device_model.mojom.FormatFeatureSpec = { $: mojo.internal.Enum() };
on_device_model.mojom.SafetyFeatureSpec = { $: mojo.internal.Enum() };
on_device_model.mojom.ModelFileSpec = { $: {} };
on_device_model.mojom.SafetyModelAssetsSpec = { $: {} };
on_device_model.mojom.ModelAssetsSpec = { $: {} };
on_device_model.mojom.LoadModelParamsSpec = { $: {} };
on_device_model.mojom.TextSafetyModelAssetsSpec = { $: {} };
on_device_model.mojom.BertSafetyModelAssetsSpec = { $: {} };
on_device_model.mojom.LanguageModelAssetsSpec = { $: {} };
on_device_model.mojom.TextSafetyModelParamsSpec = { $: {} };
on_device_model.mojom.PlatformModelProgressObserver = {};
on_device_model.mojom.PlatformModelProgressObserver.$interfaceName = 'on_device_model.mojom.PlatformModelProgressObserver';
on_device_model.mojom.PlatformModelProgressObserver_Progress_ParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModelService = {};
on_device_model.mojom.OnDeviceModelService.$interfaceName = 'on_device_model.mojom.OnDeviceModelService';
on_device_model.mojom.OnDeviceModelService_LoadModel_ParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModelService_LoadModel_ResponseParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModelService_GetCapabilities_ParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModelService_GetCapabilities_ResponseParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModelService_LoadTextSafetyModel_ParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_ParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_ResponseParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModelPlatformService = {};
on_device_model.mojom.OnDeviceModelPlatformService.$interfaceName = 'on_device_model.mojom.OnDeviceModelPlatformService';
on_device_model.mojom.OnDeviceModelPlatformService_LoadPlatformModel_ParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModelPlatformService_LoadPlatformModel_ResponseParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModelPlatformService_GetPlatformModelState_ParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModelPlatformService_GetPlatformModelState_ResponseParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModelPlatformService_GetEstimatedPerformanceClass_ParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModelPlatformService_GetEstimatedPerformanceClass_ResponseParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModelPlatformService_FormatInput_ParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModelPlatformService_FormatInput_ResponseParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModelPlatformService_ValidateSafetyResult_ParamsSpec = { $: {} };
on_device_model.mojom.OnDeviceModelPlatformService_ValidateSafetyResult_ResponseParamsSpec = { $: {} };

// Enum: ModelBackendType
on_device_model.mojom.ModelBackendType = {
  kGpu: 0,
  kApu: 1,
  kCpu: 2,
};

// Enum: ModelPerformanceHint
on_device_model.mojom.ModelPerformanceHint = {
  kHighestQuality: 0,
  kFastestInference: 1,
};

// Enum: PlatformModelState
on_device_model.mojom.PlatformModelState = {
  kUnknownState: 0,
  kInstalledOnDisk: 1,
  kInvalidUuid: 2,
  kInvalidDlcClient: 3,
  kInvalidDlcPackage: 4,
  kInvalidDlcVerifiedState: 5,
  kInvalidDlcInstall: 6,
  kInvalidModelFormat: 7,
  kInvalidModelDescriptor: 8,
  kInvalidBaseModelDescriptor: 9,
};

// Enum: FormatFeature
on_device_model.mojom.FormatFeature = {
  kNone: 0,
  kPrompt: 1,
  kAudioSummary: 2,
  kAudioTitle: 3,
};

// Enum: SafetyFeature
on_device_model.mojom.SafetyFeature = {
  kGeneral: 0,
  kAudioSummaryRequest: 1,
  kAudioTitleRequest: 2,
  kAudioSummaryResponse: 3,
  kAudioTitleResponse: 4,
  MinVersion: 4,
  MinVersion: 4,
};

// Union: ModelFile
mojo.internal.Union(
    on_device_model.mojom.ModelFileSpec, 'on_device_model.mojom.ModelFile', {
      'file': {
        'ordinal': 0,
        'type': mojo_base.mojom.FileSpec.$,
        'nullable': false,
      },
      'path': {
        'ordinal': 1,
        'type': mojo_base.mojom.FilePathSpec.$,
        'nullable': false,
      },
    });

// Union: SafetyModelAssets
mojo.internal.Union(
    on_device_model.mojom.SafetyModelAssetsSpec, 'on_device_model.mojom.SafetyModelAssets', {
      'ts_assets': {
        'ordinal': 0,
        'type': on_device_model.mojom.TextSafetyModelAssetsSpec.$,
        'nullable': false,
      },
      'bs_assets': {
        'ordinal': 1,
        'type': on_device_model.mojom.BertSafetyModelAssetsSpec.$,
        'nullable': false,
      },
    });

// Struct: ModelAssets
mojo.internal.Struct(
    on_device_model.mojom.ModelAssetsSpec, 'on_device_model.mojom.ModelAssets', [
      mojo.internal.StructField('weights', 0, 0, on_device_model.mojom.ModelFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sp_model_path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cache', 16, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('encoder_cache', 24, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('adapter_cache', 32, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: LoadModelParams
mojo.internal.Struct(
    on_device_model.mojom.LoadModelParamsSpec, 'on_device_model.mojom.LoadModelParams', [
      mojo.internal.StructField('backend_type', 0, 0, on_device_model.mojom.ModelBackendTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('assets', 8, 0, on_device_model.mojom.ModelAssetsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('adaptation_ranks', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('performance_hint', 24, 0, on_device_model.mojom.ModelPerformanceHintSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('max_tokens', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: TextSafetyModelAssets
mojo.internal.Struct(
    on_device_model.mojom.TextSafetyModelAssetsSpec, 'on_device_model.mojom.TextSafetyModelAssets', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sp_model', 8, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BertSafetyModelAssets
mojo.internal.Struct(
    on_device_model.mojom.BertSafetyModelAssetsSpec, 'on_device_model.mojom.BertSafetyModelAssets', [
      mojo.internal.StructField('model', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LanguageModelAssets
mojo.internal.Struct(
    on_device_model.mojom.LanguageModelAssetsSpec, 'on_device_model.mojom.LanguageModelAssets', [
      mojo.internal.StructField('model', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TextSafetyModelParams
mojo.internal.Struct(
    on_device_model.mojom.TextSafetyModelParamsSpec, 'on_device_model.mojom.TextSafetyModelParams', [
      mojo.internal.StructField('safety_assets', 0, 0, on_device_model.mojom.SafetyModelAssetsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('language_assets', 8, 0, on_device_model.mojom.LanguageModelAssetsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PlatformModelProgressObserver
mojo.internal.Struct(
    on_device_model.mojom.PlatformModelProgressObserver_Progress_ParamsSpec, 'on_device_model.mojom.PlatformModelProgressObserver_Progress_Params', [
      mojo.internal.StructField('progress', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

on_device_model.mojom.PlatformModelProgressObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.PlatformModelProgressObserverRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.PlatformModelProgressObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.PlatformModelProgressObserverPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.PlatformModelProgressObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.PlatformModelProgressObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  progress(progress) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_model.mojom.PlatformModelProgressObserver_Progress_ParamsSpec,
      null,
      [progress],
      false);
  }

};

on_device_model.mojom.PlatformModelProgressObserver.getRemote = function() {
  let remote = new on_device_model.mojom.PlatformModelProgressObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.PlatformModelProgressObserver',
    'context');
  return remote.$;
};

on_device_model.mojom.PlatformModelProgressObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = on_device_model.mojom.PlatformModelProgressObserver_Progress_ParamsSpec.$.decode(message.payload);
          const result = this.impl.progress(params.progress);
          break;
        }
      }
    });
  }
};

on_device_model.mojom.PlatformModelProgressObserverReceiver = on_device_model.mojom.PlatformModelProgressObserverReceiver;

on_device_model.mojom.PlatformModelProgressObserverPtr = on_device_model.mojom.PlatformModelProgressObserverRemote;
on_device_model.mojom.PlatformModelProgressObserverRequest = on_device_model.mojom.PlatformModelProgressObserverPendingReceiver;


// Interface: OnDeviceModelService
mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModelService_LoadModel_ParamsSpec, 'on_device_model.mojom.OnDeviceModelService_LoadModel_Params', [
      mojo.internal.StructField('params', 0, 0, on_device_model.mojom.LoadModelParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('model', 8, 0, mojo.internal.InterfaceRequest(on_device_model.mojom.OnDeviceModelRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModelService_LoadModel_ResponseParamsSpec, 'on_device_model.mojom.OnDeviceModelService_LoadModel_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, on_device_model.mojom.LoadModelResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModelService_GetCapabilities_ParamsSpec, 'on_device_model.mojom.OnDeviceModelService_GetCapabilities_Params', [
      mojo.internal.StructField('weights', 0, 0, on_device_model.mojom.ModelFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModelService_GetCapabilities_ResponseParamsSpec, 'on_device_model.mojom.OnDeviceModelService_GetCapabilities_ResponseParams', [
      mojo.internal.StructField('capabilities', 0, 0, on_device_model.mojom.CapabilitiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModelService_LoadTextSafetyModel_ParamsSpec, 'on_device_model.mojom.OnDeviceModelService_LoadTextSafetyModel_Params', [
      mojo.internal.StructField('params', 0, 0, on_device_model.mojom.TextSafetyModelParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('model', 8, 0, mojo.internal.InterfaceRequest(on_device_model.mojom.TextSafetyModelRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_ParamsSpec, 'on_device_model.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_ResponseParamsSpec, 'on_device_model.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_ResponseParams', [
      mojo.internal.StructField('performanceInfo', 0, 0, on_device_model.mojom.DevicePerformanceInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_info', 8, 0, on_device_model.mojom.DeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

on_device_model.mojom.OnDeviceModelServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.OnDeviceModelServiceRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.OnDeviceModelService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.OnDeviceModelServicePendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.OnDeviceModelServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.OnDeviceModelServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  loadModel(params, model) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_model.mojom.OnDeviceModelService_LoadModel_ParamsSpec,
      on_device_model.mojom.OnDeviceModelService_LoadModel_ResponseParamsSpec,
      [params, model],
      false);
  }

  getCapabilities(weights) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_model.mojom.OnDeviceModelService_GetCapabilities_ParamsSpec,
      on_device_model.mojom.OnDeviceModelService_GetCapabilities_ResponseParamsSpec,
      [weights],
      false);
  }

  loadTextSafetyModel(params, model) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      on_device_model.mojom.OnDeviceModelService_LoadTextSafetyModel_ParamsSpec,
      null,
      [params, model],
      false);
  }

  getDeviceAndPerformanceInfo() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      on_device_model.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_ParamsSpec,
      on_device_model.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_ResponseParamsSpec,
      [],
      false);
  }

};

on_device_model.mojom.OnDeviceModelService.getRemote = function() {
  let remote = new on_device_model.mojom.OnDeviceModelServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.OnDeviceModelService',
    'context');
  return remote.$;
};

on_device_model.mojom.OnDeviceModelServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = on_device_model.mojom.OnDeviceModelService_LoadModel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadModel(params.params, params.model);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_model.mojom.OnDeviceModelService_LoadModel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = on_device_model.mojom.OnDeviceModelService_GetCapabilities_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getCapabilities(params.weights);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_model.mojom.OnDeviceModelService_GetCapabilities_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = on_device_model.mojom.OnDeviceModelService_LoadTextSafetyModel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadTextSafetyModel(params.params, params.model);
          break;
        }
        case 3: {
          const params = on_device_model.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDeviceAndPerformanceInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_model.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

on_device_model.mojom.OnDeviceModelServiceReceiver = on_device_model.mojom.OnDeviceModelServiceReceiver;

on_device_model.mojom.OnDeviceModelServicePtr = on_device_model.mojom.OnDeviceModelServiceRemote;
on_device_model.mojom.OnDeviceModelServiceRequest = on_device_model.mojom.OnDeviceModelServicePendingReceiver;


// Interface: OnDeviceModelPlatformService
mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModelPlatformService_LoadPlatformModel_ParamsSpec, 'on_device_model.mojom.OnDeviceModelPlatformService_LoadPlatformModel_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('model', 8, 0, mojo.internal.InterfaceRequest(on_device_model.mojom.OnDeviceModelRemote), null, false, 0, undefined),
      mojo.internal.StructField('progress_observer', 16, 0, mojo.internal.InterfaceProxy(on_device_model.mojom.PlatformModelProgressObserverSpec), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModelPlatformService_LoadPlatformModel_ResponseParamsSpec, 'on_device_model.mojom.OnDeviceModelPlatformService_LoadPlatformModel_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, on_device_model.mojom.LoadModelResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModelPlatformService_GetPlatformModelState_ParamsSpec, 'on_device_model.mojom.OnDeviceModelPlatformService_GetPlatformModelState_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModelPlatformService_GetPlatformModelState_ResponseParamsSpec, 'on_device_model.mojom.OnDeviceModelPlatformService_GetPlatformModelState_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, on_device_model.mojom.PlatformModelStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModelPlatformService_GetEstimatedPerformanceClass_ParamsSpec, 'on_device_model.mojom.OnDeviceModelPlatformService_GetEstimatedPerformanceClass_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModelPlatformService_GetEstimatedPerformanceClass_ResponseParamsSpec, 'on_device_model.mojom.OnDeviceModelPlatformService_GetEstimatedPerformanceClass_ResponseParams', [
      mojo.internal.StructField('performance_class', 0, 0, on_device_model.mojom.PerformanceClassSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModelPlatformService_FormatInput_ParamsSpec, 'on_device_model.mojom.OnDeviceModelPlatformService_FormatInput_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('feature', 8, 0, on_device_model.mojom.FormatFeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fields', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModelPlatformService_FormatInput_ResponseParamsSpec, 'on_device_model.mojom.OnDeviceModelPlatformService_FormatInput_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModelPlatformService_ValidateSafetyResult_ParamsSpec, 'on_device_model.mojom.OnDeviceModelPlatformService_ValidateSafetyResult_Params', [
      mojo.internal.StructField('safety_feature', 0, 0, on_device_model.mojom.SafetyFeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('safety_info', 16, 0, on_device_model.mojom.SafetyInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    on_device_model.mojom.OnDeviceModelPlatformService_ValidateSafetyResult_ResponseParamsSpec, 'on_device_model.mojom.OnDeviceModelPlatformService_ValidateSafetyResult_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

on_device_model.mojom.OnDeviceModelPlatformServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.OnDeviceModelPlatformServiceRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.OnDeviceModelPlatformService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.OnDeviceModelPlatformServicePendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.OnDeviceModelPlatformServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.OnDeviceModelPlatformServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  loadPlatformModel(uuid, model, progress_observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_model.mojom.OnDeviceModelPlatformService_LoadPlatformModel_ParamsSpec,
      on_device_model.mojom.OnDeviceModelPlatformService_LoadPlatformModel_ResponseParamsSpec,
      [uuid, model, progress_observer],
      false);
  }

  getPlatformModelState(uuid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_model.mojom.OnDeviceModelPlatformService_GetPlatformModelState_ParamsSpec,
      on_device_model.mojom.OnDeviceModelPlatformService_GetPlatformModelState_ResponseParamsSpec,
      [uuid],
      false);
  }

  getEstimatedPerformanceClass() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      on_device_model.mojom.OnDeviceModelPlatformService_GetEstimatedPerformanceClass_ParamsSpec,
      on_device_model.mojom.OnDeviceModelPlatformService_GetEstimatedPerformanceClass_ResponseParamsSpec,
      [],
      false);
  }

  formatInput(uuid, feature, fields) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      on_device_model.mojom.OnDeviceModelPlatformService_FormatInput_ParamsSpec,
      on_device_model.mojom.OnDeviceModelPlatformService_FormatInput_ResponseParamsSpec,
      [uuid, feature, fields],
      false);
  }

  validateSafetyResult(safety_feature, text, safety_info) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      on_device_model.mojom.OnDeviceModelPlatformService_ValidateSafetyResult_ParamsSpec,
      on_device_model.mojom.OnDeviceModelPlatformService_ValidateSafetyResult_ResponseParamsSpec,
      [safety_feature, text, safety_info],
      false);
  }

};

on_device_model.mojom.OnDeviceModelPlatformService.getRemote = function() {
  let remote = new on_device_model.mojom.OnDeviceModelPlatformServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.OnDeviceModelPlatformService',
    'context');
  return remote.$;
};

on_device_model.mojom.OnDeviceModelPlatformServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = on_device_model.mojom.OnDeviceModelPlatformService_LoadPlatformModel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadPlatformModel(params.uuid, params.model, params.progress_observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_model.mojom.OnDeviceModelPlatformService_LoadPlatformModel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = on_device_model.mojom.OnDeviceModelPlatformService_GetPlatformModelState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPlatformModelState(params.uuid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_model.mojom.OnDeviceModelPlatformService_GetPlatformModelState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = on_device_model.mojom.OnDeviceModelPlatformService_GetEstimatedPerformanceClass_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getEstimatedPerformanceClass();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_model.mojom.OnDeviceModelPlatformService_GetEstimatedPerformanceClass_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = on_device_model.mojom.OnDeviceModelPlatformService_FormatInput_ParamsSpec.$.decode(message.payload);
          const result = this.impl.formatInput(params.uuid, params.feature, params.fields);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_model.mojom.OnDeviceModelPlatformService_FormatInput_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = on_device_model.mojom.OnDeviceModelPlatformService_ValidateSafetyResult_ParamsSpec.$.decode(message.payload);
          const result = this.impl.validateSafetyResult(params.safety_feature, params.text, params.safety_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_model.mojom.OnDeviceModelPlatformService_ValidateSafetyResult_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

on_device_model.mojom.OnDeviceModelPlatformServiceReceiver = on_device_model.mojom.OnDeviceModelPlatformServiceReceiver;

on_device_model.mojom.OnDeviceModelPlatformServicePtr = on_device_model.mojom.OnDeviceModelPlatformServiceRemote;
on_device_model.mojom.OnDeviceModelPlatformServiceRequest = on_device_model.mojom.OnDeviceModelPlatformServicePendingReceiver;

