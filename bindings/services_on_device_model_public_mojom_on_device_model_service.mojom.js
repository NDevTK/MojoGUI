// Auto-generated MojoJS binding
// Source: chromium_src/services/on_device_model/public/mojom/on_device_model_service.mojom
// Module: on_device_model.mojom

'use strict';

// Module namespace
var on_device_model = on_device_model || {};
on_device_model.mojom = on_device_model.mojom || {};


// Enum: ModelBackendType
on_device_model.mojom.mojom.ModelBackendType = {
  kGpu: 0,
  kApu: 1,
  kCpu: 2,
};
on_device_model.mojom.mojom.ModelBackendTypeSpec = { $: mojo.internal.Enum() };

// Enum: ModelPerformanceHint
on_device_model.mojom.mojom.ModelPerformanceHint = {
  kHighestQuality: 0,
  kFastestInference: 1,
};
on_device_model.mojom.mojom.ModelPerformanceHintSpec = { $: mojo.internal.Enum() };

// Enum: PlatformModelState
on_device_model.mojom.mojom.PlatformModelState = {
  kInstalledOnDisk: 0,
  kInvalidUuid: 1,
  kInvalidDlcClient: 2,
  kInvalidDlcPackage: 3,
  kInvalidDlcVerifiedState: 4,
  kInvalidDlcInstall: 5,
  kInvalidModelFormat: 6,
  kInvalidModelDescriptor: 7,
  kInvalidBaseModelDescriptor: 8,
};
on_device_model.mojom.mojom.PlatformModelStateSpec = { $: mojo.internal.Enum() };

// Enum: FormatFeature
on_device_model.mojom.mojom.FormatFeature = {
  kPrompt: 0,
  kAudioSummary: 1,
  kAudioTitle: 2,
};
on_device_model.mojom.mojom.FormatFeatureSpec = { $: mojo.internal.Enum() };

// Enum: SafetyFeature
on_device_model.mojom.mojom.SafetyFeature = {
  kAudioSummaryRequest: 0,
  kAudioTitleRequest: 1,
  kAudioSummaryResponse: 2,
  kAudioTitleResponse: 3,
};
on_device_model.mojom.mojom.SafetyFeatureSpec = { $: mojo.internal.Enum() };

// Union: ModelFile
on_device_model.mojom.mojom.ModelFileSpec = { $: mojo.internal.Union(
    'on_device_model.mojom.ModelFile', {
      'file': {
        'ordinal': 0,
        'type': mojo_base.mojom.FileSpec,
      }},
      'path': {
        'ordinal': 1,
        'type': mojo_base.mojom.FilePathSpec,
      }},
    })
};

// Union: SafetyModelAssets
on_device_model.mojom.mojom.SafetyModelAssetsSpec = { $: mojo.internal.Union(
    'on_device_model.mojom.SafetyModelAssets', {
      'ts_assets': {
        'ordinal': 0,
        'type': on_device_model.mojom.TextSafetyModelAssetsSpec,
      }},
      'bs_assets': {
        'ordinal': 1,
        'type': on_device_model.mojom.BertSafetyModelAssetsSpec,
      }},
    })
};

// Struct: ModelAssets
on_device_model.mojom.mojom.ModelAssetsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.ModelAssets',
      packedSize: 56,
      fields: [
        { name: 'weights', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.ModelFileSpec, nullable: false, minVersion: 0 },
        { name: 'sp_model_path', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true, minVersion: 0 },
        { name: 'cache', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: true, minVersion: 0 },
        { name: 'encoder_cache', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: true, minVersion: 0 },
        { name: 'adapter_cache', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: LoadModelParams
on_device_model.mojom.mojom.LoadModelParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.LoadModelParams',
      packedSize: 40,
      fields: [
        { name: 'backend_type', packedOffset: 16, packedBitOffset: 0, type: on_device_model.mojom.ModelBackendTypeSpec, nullable: false, minVersion: 0 },
        { name: 'assets', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.ModelAssetsSpec, nullable: false, minVersion: 0 },
        { name: 'max_tokens', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'adaptation_ranks', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'performance_hint', packedOffset: 24, packedBitOffset: 0, type: on_device_model.mojom.ModelPerformanceHintSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: TextSafetyModelAssets
on_device_model.mojom.mojom.TextSafetyModelAssetsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.TextSafetyModelAssets',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
        { name: 'sp_model', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BertSafetyModelAssets
on_device_model.mojom.mojom.BertSafetyModelAssetsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.BertSafetyModelAssets',
      packedSize: 16,
      fields: [
        { name: 'model', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: LanguageModelAssets
on_device_model.mojom.mojom.LanguageModelAssetsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.LanguageModelAssets',
      packedSize: 16,
      fields: [
        { name: 'model', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TextSafetyModelParams
on_device_model.mojom.mojom.TextSafetyModelParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.TextSafetyModelParams',
      packedSize: 32,
      fields: [
        { name: 'safety_assets', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.SafetyModelAssetsSpec, nullable: true, minVersion: 0 },
        { name: 'language_assets', packedOffset: 16, packedBitOffset: 0, type: on_device_model.mojom.LanguageModelAssetsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: PlatformModelProgressObserver
on_device_model.mojom.mojom.PlatformModelProgressObserver = {};

on_device_model.mojom.mojom.PlatformModelProgressObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.mojom.PlatformModelProgressObserverRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.PlatformModelProgressObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.mojom.PlatformModelProgressObserverPendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.mojom.PlatformModelProgressObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.mojom.PlatformModelProgressObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  progress(progress) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_model.mojom.mojom.PlatformModelProgressObserver_Progress_ParamsSpec,
      null,
      [progress]);
  }

};

on_device_model.mojom.mojom.PlatformModelProgressObserver.getRemote = function() {
  let remote = new on_device_model.mojom.mojom.PlatformModelProgressObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.PlatformModelProgressObserver',
    'context');
  return remote.$;
};

// ParamsSpec for Progress
on_device_model.mojom.mojom.PlatformModelProgressObserver_Progress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.PlatformModelProgressObserver.Progress_Params',
      packedSize: 16,
      fields: [
        { name: 'progress', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
on_device_model.mojom.mojom.PlatformModelProgressObserverPtr = on_device_model.mojom.mojom.PlatformModelProgressObserverRemote;
on_device_model.mojom.mojom.PlatformModelProgressObserverRequest = on_device_model.mojom.mojom.PlatformModelProgressObserverPendingReceiver;


// Interface: OnDeviceModelService
on_device_model.mojom.mojom.OnDeviceModelService = {};

on_device_model.mojom.mojom.OnDeviceModelServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.mojom.OnDeviceModelServiceRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.OnDeviceModelService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.mojom.OnDeviceModelServicePendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.mojom.OnDeviceModelServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.mojom.OnDeviceModelServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  loadModel(params, model) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_model.mojom.mojom.OnDeviceModelService_LoadModel_ParamsSpec,
      on_device_model.mojom.mojom.OnDeviceModelService_LoadModel_ResponseParamsSpec,
      [params, model]);
  }

  getCapabilities(weights) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_model.mojom.mojom.OnDeviceModelService_GetCapabilities_ParamsSpec,
      on_device_model.mojom.mojom.OnDeviceModelService_GetCapabilities_ResponseParamsSpec,
      [weights]);
  }

  loadTextSafetyModel(params, model) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      on_device_model.mojom.mojom.OnDeviceModelService_LoadTextSafetyModel_ParamsSpec,
      null,
      [params, model]);
  }

  getDeviceAndPerformanceInfo() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      on_device_model.mojom.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_ParamsSpec,
      on_device_model.mojom.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_ResponseParamsSpec,
      []);
  }

};

on_device_model.mojom.mojom.OnDeviceModelService.getRemote = function() {
  let remote = new on_device_model.mojom.mojom.OnDeviceModelServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.OnDeviceModelService',
    'context');
  return remote.$;
};

// ParamsSpec for LoadModel
on_device_model.mojom.mojom.OnDeviceModelService_LoadModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelService.LoadModel_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.LoadModelParamsSpec, nullable: false, minVersion: 0 },
        { name: 'model', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

on_device_model.mojom.mojom.OnDeviceModelService_LoadModel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelService.LoadModel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.LoadModelResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCapabilities
on_device_model.mojom.mojom.OnDeviceModelService_GetCapabilities_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelService.GetCapabilities_Params',
      packedSize: 24,
      fields: [
        { name: 'weights', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.ModelFileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

on_device_model.mojom.mojom.OnDeviceModelService_GetCapabilities_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelService.GetCapabilities_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'capabilities', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.CapabilitiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadTextSafetyModel
on_device_model.mojom.mojom.OnDeviceModelService_LoadTextSafetyModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelService.LoadTextSafetyModel_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.TextSafetyModelParamsSpec, nullable: false, minVersion: 0 },
        { name: 'model', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetDeviceAndPerformanceInfo
on_device_model.mojom.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelService.GetDeviceAndPerformanceInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

on_device_model.mojom.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelService.GetDeviceAndPerformanceInfo_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'performanceInfo', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.DevicePerformanceInfoSpec, nullable: false, minVersion: 0 },
        { name: 'device_info', packedOffset: 8, packedBitOffset: 0, type: on_device_model.mojom.DeviceInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
on_device_model.mojom.mojom.OnDeviceModelServicePtr = on_device_model.mojom.mojom.OnDeviceModelServiceRemote;
on_device_model.mojom.mojom.OnDeviceModelServiceRequest = on_device_model.mojom.mojom.OnDeviceModelServicePendingReceiver;


// Interface: OnDeviceModelPlatformService
on_device_model.mojom.mojom.OnDeviceModelPlatformService = {};

on_device_model.mojom.mojom.OnDeviceModelPlatformServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_model.mojom.mojom.OnDeviceModelPlatformServiceRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.OnDeviceModelPlatformService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_model.mojom.mojom.OnDeviceModelPlatformServicePendingReceiver,
      handle);
    this.$ = new on_device_model.mojom.mojom.OnDeviceModelPlatformServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_model.mojom.mojom.OnDeviceModelPlatformServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  loadPlatformModel(uuid, model, progress_observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_model.mojom.mojom.OnDeviceModelPlatformService_LoadPlatformModel_ParamsSpec,
      on_device_model.mojom.mojom.OnDeviceModelPlatformService_LoadPlatformModel_ResponseParamsSpec,
      [uuid, model, progress_observer]);
  }

  getPlatformModelState(uuid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_model.mojom.mojom.OnDeviceModelPlatformService_GetPlatformModelState_ParamsSpec,
      on_device_model.mojom.mojom.OnDeviceModelPlatformService_GetPlatformModelState_ResponseParamsSpec,
      [uuid]);
  }

  getEstimatedPerformanceClass() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      on_device_model.mojom.mojom.OnDeviceModelPlatformService_GetEstimatedPerformanceClass_ParamsSpec,
      on_device_model.mojom.mojom.OnDeviceModelPlatformService_GetEstimatedPerformanceClass_ResponseParamsSpec,
      []);
  }

  formatInput(uuid, feature, fields) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      on_device_model.mojom.mojom.OnDeviceModelPlatformService_FormatInput_ParamsSpec,
      on_device_model.mojom.mojom.OnDeviceModelPlatformService_FormatInput_ResponseParamsSpec,
      [uuid, feature, fields]);
  }

  validateSafetyResult(safety_feature, text, safety_info) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      on_device_model.mojom.mojom.OnDeviceModelPlatformService_ValidateSafetyResult_ParamsSpec,
      on_device_model.mojom.mojom.OnDeviceModelPlatformService_ValidateSafetyResult_ResponseParamsSpec,
      [safety_feature, text, safety_info]);
  }

};

on_device_model.mojom.mojom.OnDeviceModelPlatformService.getRemote = function() {
  let remote = new on_device_model.mojom.mojom.OnDeviceModelPlatformServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.OnDeviceModelPlatformService',
    'context');
  return remote.$;
};

// ParamsSpec for LoadPlatformModel
on_device_model.mojom.mojom.OnDeviceModelPlatformService_LoadPlatformModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelPlatformService.LoadPlatformModel_Params',
      packedSize: 24,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false, minVersion: 0 },
        { name: 'model', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'progress_observer', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

on_device_model.mojom.mojom.OnDeviceModelPlatformService_LoadPlatformModel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelPlatformService.LoadPlatformModel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.LoadModelResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPlatformModelState
on_device_model.mojom.mojom.OnDeviceModelPlatformService_GetPlatformModelState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelPlatformService.GetPlatformModelState_Params',
      packedSize: 16,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

on_device_model.mojom.mojom.OnDeviceModelPlatformService_GetPlatformModelState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelPlatformService.GetPlatformModelState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.PlatformModelStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetEstimatedPerformanceClass
on_device_model.mojom.mojom.OnDeviceModelPlatformService_GetEstimatedPerformanceClass_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelPlatformService.GetEstimatedPerformanceClass_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

on_device_model.mojom.mojom.OnDeviceModelPlatformService_GetEstimatedPerformanceClass_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelPlatformService.GetEstimatedPerformanceClass_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'performance_class', packedOffset: 0, packedBitOffset: 0, type: on_device_model.mojom.PerformanceClassSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FormatInput
on_device_model.mojom.mojom.OnDeviceModelPlatformService_FormatInput_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelPlatformService.FormatInput_Params',
      packedSize: 32,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false, minVersion: 0 },
        { name: 'feature', packedOffset: 16, packedBitOffset: 0, type: on_device_model.mojom.FormatFeatureSpec, nullable: false, minVersion: 0 },
        { name: 'fields', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

on_device_model.mojom.mojom.OnDeviceModelPlatformService_FormatInput_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelPlatformService.FormatInput_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ValidateSafetyResult
on_device_model.mojom.mojom.OnDeviceModelPlatformService_ValidateSafetyResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelPlatformService.ValidateSafetyResult_Params',
      packedSize: 32,
      fields: [
        { name: 'safety_feature', packedOffset: 16, packedBitOffset: 0, type: on_device_model.mojom.SafetyFeatureSpec, nullable: false, minVersion: 0 },
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'safety_info', packedOffset: 8, packedBitOffset: 0, type: on_device_model.mojom.SafetyInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

on_device_model.mojom.mojom.OnDeviceModelPlatformService_ValidateSafetyResult_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelPlatformService.ValidateSafetyResult_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
on_device_model.mojom.mojom.OnDeviceModelPlatformServicePtr = on_device_model.mojom.mojom.OnDeviceModelPlatformServiceRemote;
on_device_model.mojom.mojom.OnDeviceModelPlatformServiceRequest = on_device_model.mojom.mojom.OnDeviceModelPlatformServicePendingReceiver;

