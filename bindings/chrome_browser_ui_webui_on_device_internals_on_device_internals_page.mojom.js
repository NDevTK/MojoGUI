// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/on_device_internals/on_device_internals_page.mojom
// Module: on_device_internals.mojom

'use strict';

// Module namespace
var on_device_internals = on_device_internals || {};
on_device_internals.mojom = on_device_internals.mojom || {};


// Struct: PageData
on_device_internals.mojom.PageDataSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.PageData',
      packedSize: 56,
      fields: [
        { name: 'base_model', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'supp_models', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'feature_adaptations', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'performance_info', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'min_vram_mb', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'model_crash_count', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'max_model_crash_count', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BaseModelState
on_device_internals.mojom.BaseModelStateSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.BaseModelState',
      packedSize: 32,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'registration_criteria', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BaseModelInfo
on_device_internals.mojom.BaseModelInfoSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.BaseModelInfo',
      packedSize: 56,
      fields: [
        { name: 'component_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'file_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'file_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'version', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'backend_type', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SupplementaryModelInfo
on_device_internals.mojom.SupplementaryModelInfoSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.SupplementaryModelInfo',
      packedSize: 24,
      fields: [
        { name: 'supp_model_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_ready', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FeatureAdaptationInfo
on_device_internals.mojom.FeatureAdaptationInfoSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.FeatureAdaptationInfo',
      packedSize: 40,
      fields: [
        { name: 'feature_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'feature_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_recently_used', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandlerFactory
on_device_internals.mojom.PageHandlerFactory = {};

on_device_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'on_device_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new on_device_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

on_device_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new on_device_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
on_device_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
on_device_internals.mojom.PageHandlerFactoryPtr = on_device_internals.mojom.PageHandlerFactoryRemote;
on_device_internals.mojom.PageHandlerFactoryRequest = on_device_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
on_device_internals.mojom.PageHandler = {};

on_device_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'on_device_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new on_device_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  loadModel(model_path, performance_hint, model) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_internals.mojom.PageHandler_LoadModel_ParamsSpec,
      on_device_internals.mojom.PageHandler_LoadModel_ResponseParamsSpec,
      [model_path, performance_hint, model]);
  }

  loadPlatformModel(model_path, model) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_internals.mojom.PageHandler_LoadPlatformModel_ParamsSpec,
      on_device_internals.mojom.PageHandler_LoadPlatformModel_ResponseParamsSpec,
      [model_path, model]);
  }

  getDeviceAndPerformanceInfo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      on_device_internals.mojom.PageHandler_GetDeviceAndPerformanceInfo_ParamsSpec,
      on_device_internals.mojom.PageHandler_GetDeviceAndPerformanceInfo_ResponseParamsSpec,
      []);
  }

  getDefaultModelPath() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      on_device_internals.mojom.PageHandler_GetDefaultModelPath_ParamsSpec,
      on_device_internals.mojom.PageHandler_GetDefaultModelPath_ResponseParamsSpec,
      []);
  }

  uninstallDefaultModel() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      on_device_internals.mojom.PageHandler_UninstallDefaultModel_ParamsSpec,
      null,
      []);
  }

  getPageData() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      on_device_internals.mojom.PageHandler_GetPageData_ParamsSpec,
      on_device_internals.mojom.PageHandler_GetPageData_ResponseParamsSpec,
      []);
  }

  setFeatureRecentlyUsedState(feature_key, is_recently_used) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      on_device_internals.mojom.PageHandler_SetFeatureRecentlyUsedState_ParamsSpec,
      null,
      [feature_key, is_recently_used]);
  }

  decodeBitmap(image_buffer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      on_device_internals.mojom.PageHandler_DecodeBitmap_ParamsSpec,
      on_device_internals.mojom.PageHandler_DecodeBitmap_ResponseParamsSpec,
      [image_buffer]);
  }

  resetModelCrashCount() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      on_device_internals.mojom.PageHandler_ResetModelCrashCount_ParamsSpec,
      null,
      []);
  }

};

on_device_internals.mojom.PageHandler.getRemote = function() {
  let remote = new on_device_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for LoadModel
on_device_internals.mojom.PageHandler_LoadModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.PageHandler.LoadModel_Params',
      packedSize: 32,
      fields: [
        { name: 'model_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'performance_hint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'model', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

on_device_internals.mojom.PageHandler_LoadModel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.PageHandler.LoadModel_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'capabilities', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LoadPlatformModel
on_device_internals.mojom.PageHandler_LoadPlatformModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.PageHandler.LoadPlatformModel_Params',
      packedSize: 24,
      fields: [
        { name: 'model_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'model', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

on_device_internals.mojom.PageHandler_LoadPlatformModel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.PageHandler.LoadPlatformModel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDeviceAndPerformanceInfo
on_device_internals.mojom.PageHandler_GetDeviceAndPerformanceInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.PageHandler.GetDeviceAndPerformanceInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

on_device_internals.mojom.PageHandler_GetDeviceAndPerformanceInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.PageHandler.GetDeviceAndPerformanceInfo_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'performance_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'device_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDefaultModelPath
on_device_internals.mojom.PageHandler_GetDefaultModelPath_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.PageHandler.GetDefaultModelPath_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

on_device_internals.mojom.PageHandler_GetDefaultModelPath_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.PageHandler.GetDefaultModelPath_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'model_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UninstallDefaultModel
on_device_internals.mojom.PageHandler_UninstallDefaultModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.PageHandler.UninstallDefaultModel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPageData
on_device_internals.mojom.PageHandler_GetPageData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.PageHandler.GetPageData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

on_device_internals.mojom.PageHandler_GetPageData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.PageHandler.GetPageData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'page_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetFeatureRecentlyUsedState
on_device_internals.mojom.PageHandler_SetFeatureRecentlyUsedState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.PageHandler.SetFeatureRecentlyUsedState_Params',
      packedSize: 24,
      fields: [
        { name: 'feature_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_recently_used', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DecodeBitmap
on_device_internals.mojom.PageHandler_DecodeBitmap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.PageHandler.DecodeBitmap_Params',
      packedSize: 16,
      fields: [
        { name: 'image_buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

on_device_internals.mojom.PageHandler_DecodeBitmap_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.PageHandler.DecodeBitmap_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'bitmap', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResetModelCrashCount
on_device_internals.mojom.PageHandler_ResetModelCrashCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.PageHandler.ResetModelCrashCount_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
on_device_internals.mojom.PageHandlerPtr = on_device_internals.mojom.PageHandlerRemote;
on_device_internals.mojom.PageHandlerRequest = on_device_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
on_device_internals.mojom.Page = {};

on_device_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'on_device_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new on_device_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLogMessageAdded(event_time, source_file, source_line, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_internals.mojom.Page_OnLogMessageAdded_ParamsSpec,
      null,
      [event_time, source_file, source_line, message]);
  }

  onDownloadProgressUpdate(downloaded_bytes, total_bytes) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_internals.mojom.Page_OnDownloadProgressUpdate_ParamsSpec,
      null,
      [downloaded_bytes, total_bytes]);
  }

};

on_device_internals.mojom.Page.getRemote = function() {
  let remote = new on_device_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_internals.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnLogMessageAdded
on_device_internals.mojom.Page_OnLogMessageAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.Page.OnLogMessageAdded_Params',
      packedSize: 40,
      fields: [
        { name: 'event_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'source_file', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'source_line', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'message', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDownloadProgressUpdate
on_device_internals.mojom.Page_OnDownloadProgressUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_internals.mojom.Page.OnDownloadProgressUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'downloaded_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'total_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
on_device_internals.mojom.PagePtr = on_device_internals.mojom.PageRemote;
on_device_internals.mojom.PageRequest = on_device_internals.mojom.PagePendingReceiver;

