// Auto-generated MojoJS binding
// Source: chromium_src/services/on_device_model/public/mojom/on_device_model_service.mojom
// Module: on_device_model.mojom

'use strict';

// Module namespace
var on_device_model = on_device_model || {};
on_device_model.mojom = on_device_model.mojom || {};


// Enum: ModelBackendType
on_device_model.mojom.ModelBackendType = {
  and: 0,
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

// Struct: ModelAssets
on_device_model.mojom.ModelAssets = class {
  constructor(values = {}) {
    this.adapter_cache = values.adapter_cache !== undefined ? values.adapter_cache : null;
  }
};

// Struct: LoadModelParams
on_device_model.mojom.LoadModelParams = class {
  constructor(values = {}) {
    this.adaptation_ranks = values.adaptation_ranks !== undefined ? values.adaptation_ranks : 0;
    this.kHighestQuality = values.kHighestQuality !== undefined ? values.kHighestQuality : 0;
  }
};

// Struct: TextSafetyModelAssets
on_device_model.mojom.TextSafetyModelAssets = class {
  constructor(values = {}) {
    this.sp_model = values.sp_model !== undefined ? values.sp_model : null;
  }
};

// Struct: BertSafetyModelAssets
on_device_model.mojom.BertSafetyModelAssets = class {
  constructor(values = {}) {
    this.model = values.model !== undefined ? values.model : null;
  }
};

// Struct: LanguageModelAssets
on_device_model.mojom.LanguageModelAssets = class {
  constructor(values = {}) {
    this.model = values.model !== undefined ? values.model : null;
  }
};

// Struct: TextSafetyModelParams
on_device_model.mojom.TextSafetyModelParams = class {
  constructor(values = {}) {
    this.language_assets = values.language_assets !== undefined ? values.language_assets : null;
  }
};

// Interface: PlatformModelProgressObserver
on_device_model.mojom.PlatformModelProgressObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_model.mojom.PlatformModelProgressObserver';
  }

};

on_device_model.mojom.PlatformModelProgressObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: OnDeviceModelService
on_device_model.mojom.OnDeviceModelServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_model.mojom.OnDeviceModelService';
  }

  loadModel(params, model) {
    // Method: LoadModel
    return new Promise((resolve) => {
      // Call: LoadModel(params, model)
      resolve({});
    });
  }

  getCapabilities(weights) {
    // Method: GetCapabilities
    return new Promise((resolve) => {
      // Call: GetCapabilities(weights)
      resolve({});
    });
  }

  loadTextSafetyModel(params, model) {
    // Method: LoadTextSafetyModel
    // Call: LoadTextSafetyModel(params, model)
  }

  getDeviceAndPerformanceInfo() {
    // Method: GetDeviceAndPerformanceInfo
    return new Promise((resolve) => {
      // Call: GetDeviceAndPerformanceInfo()
      resolve({});
    });
  }

};

on_device_model.mojom.OnDeviceModelServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: OnDeviceModelPlatformService
on_device_model.mojom.OnDeviceModelPlatformServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_model.mojom.OnDeviceModelPlatformService';
  }

};

on_device_model.mojom.OnDeviceModelPlatformServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
