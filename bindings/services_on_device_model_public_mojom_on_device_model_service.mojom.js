// Auto-generated MojoJS binding
// Source: chromium_src/services/on_device_model/public/mojom/on_device_model_service.mojom
// Module: on_device_model.mojom

'use strict';

// Module namespace
var on_device_model = on_device_model || {};
on_device_model.mojom = on_device_model.mojom || {};


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

// Enum: FormatFeature
on_device_model.mojom.FormatFeature = {
  kPrompt: 0,
  kAudioSummary: 1,
  kAudioTitle: 2,
};

// Enum: SafetyFeature
on_device_model.mojom.SafetyFeature = {
  kAudioSummaryRequest: 0,
  kAudioTitleRequest: 1,
  kAudioSummaryResponse: 2,
  kAudioTitleResponse: 3,
};

// Interface: PlatformModelProgressObserver
on_device_model.mojom.PlatformModelProgressObserver = {};

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

// Legacy compatibility
on_device_model.mojom.PlatformModelProgressObserverPtr = on_device_model.mojom.PlatformModelProgressObserverRemote;
on_device_model.mojom.PlatformModelProgressObserverRequest = on_device_model.mojom.PlatformModelProgressObserverPendingReceiver;


// Interface: OnDeviceModelService
on_device_model.mojom.OnDeviceModelService = {};

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
      [params, model]);
  }

  getCapabilities(weights) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_model.mojom.OnDeviceModelService_GetCapabilities_ParamsSpec,
      on_device_model.mojom.OnDeviceModelService_GetCapabilities_ResponseParamsSpec,
      [weights]);
  }

  loadTextSafetyModel(params, model) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      on_device_model.mojom.OnDeviceModelService_LoadTextSafetyModel_ParamsSpec,
      null,
      [params, model]);
  }

  getDeviceAndPerformanceInfo() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      on_device_model.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_ParamsSpec,
      on_device_model.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_ResponseParamsSpec,
      []);
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

// ParamsSpec for LoadModel
on_device_model.mojom.OnDeviceModelService_LoadModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelService.LoadModel_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'model', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

on_device_model.mojom.OnDeviceModelService_LoadModel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelService.LoadModel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetCapabilities
on_device_model.mojom.OnDeviceModelService_GetCapabilities_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelService.GetCapabilities_Params',
      packedSize: 16,
      fields: [
        { name: 'weights', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

on_device_model.mojom.OnDeviceModelService_GetCapabilities_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelService.GetCapabilities_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'capabilities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LoadTextSafetyModel
on_device_model.mojom.OnDeviceModelService_LoadTextSafetyModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelService.LoadTextSafetyModel_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'model', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDeviceAndPerformanceInfo
on_device_model.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelService.GetDeviceAndPerformanceInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

on_device_model.mojom.OnDeviceModelService_GetDeviceAndPerformanceInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_model.mojom.OnDeviceModelService.GetDeviceAndPerformanceInfo_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'performanceInfo', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'device_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
on_device_model.mojom.OnDeviceModelServicePtr = on_device_model.mojom.OnDeviceModelServiceRemote;
on_device_model.mojom.OnDeviceModelServiceRequest = on_device_model.mojom.OnDeviceModelServicePendingReceiver;


// Interface: OnDeviceModelPlatformService
on_device_model.mojom.OnDeviceModelPlatformService = {};

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

// Legacy compatibility
on_device_model.mojom.OnDeviceModelPlatformServicePtr = on_device_model.mojom.OnDeviceModelPlatformServiceRemote;
on_device_model.mojom.OnDeviceModelPlatformServiceRequest = on_device_model.mojom.OnDeviceModelPlatformServicePendingReceiver;

