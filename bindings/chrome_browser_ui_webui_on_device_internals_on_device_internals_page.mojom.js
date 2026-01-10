// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/on_device_internals/on_device_internals_page.mojom
// Module: on_device_internals.mojom

'use strict';

// Module namespace
var on_device_internals = on_device_internals || {};
on_device_internals.mojom = on_device_internals.mojom || {};
var services = services || {};
var services = services || {};
var skia = skia || {};

on_device_internals.mojom.PageDataSpec = { $: {} };
on_device_internals.mojom.BaseModelStateSpec = { $: {} };
on_device_internals.mojom.BaseModelInfoSpec = { $: {} };
on_device_internals.mojom.SupplementaryModelInfoSpec = { $: {} };
on_device_internals.mojom.FeatureAdaptationInfoSpec = { $: {} };
on_device_internals.mojom.PageHandlerFactory = {};
on_device_internals.mojom.PageHandlerFactory.$interfaceName = 'on_device_internals.mojom.PageHandlerFactory';
on_device_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
on_device_internals.mojom.PageHandler = {};
on_device_internals.mojom.PageHandler.$interfaceName = 'on_device_internals.mojom.PageHandler';
on_device_internals.mojom.PageHandler_LoadModel_ParamsSpec = { $: {} };
on_device_internals.mojom.PageHandler_LoadModel_ResponseParamsSpec = { $: {} };
on_device_internals.mojom.PageHandler_LoadPlatformModel_ParamsSpec = { $: {} };
on_device_internals.mojom.PageHandler_LoadPlatformModel_ResponseParamsSpec = { $: {} };
on_device_internals.mojom.PageHandler_GetDeviceAndPerformanceInfo_ParamsSpec = { $: {} };
on_device_internals.mojom.PageHandler_GetDeviceAndPerformanceInfo_ResponseParamsSpec = { $: {} };
on_device_internals.mojom.PageHandler_GetDefaultModelPath_ParamsSpec = { $: {} };
on_device_internals.mojom.PageHandler_GetDefaultModelPath_ResponseParamsSpec = { $: {} };
on_device_internals.mojom.PageHandler_UninstallDefaultModel_ParamsSpec = { $: {} };
on_device_internals.mojom.PageHandler_GetPageData_ParamsSpec = { $: {} };
on_device_internals.mojom.PageHandler_GetPageData_ResponseParamsSpec = { $: {} };
on_device_internals.mojom.PageHandler_SetFeatureRecentlyUsedState_ParamsSpec = { $: {} };
on_device_internals.mojom.PageHandler_DecodeBitmap_ParamsSpec = { $: {} };
on_device_internals.mojom.PageHandler_DecodeBitmap_ResponseParamsSpec = { $: {} };
on_device_internals.mojom.PageHandler_ResetModelCrashCount_ParamsSpec = { $: {} };
on_device_internals.mojom.Page = {};
on_device_internals.mojom.Page.$interfaceName = 'on_device_internals.mojom.Page';
on_device_internals.mojom.Page_OnLogMessageAdded_ParamsSpec = { $: {} };
on_device_internals.mojom.Page_OnDownloadProgressUpdate_ParamsSpec = { $: {} };

// Struct: PageData
mojo.internal.Struct(
    on_device_internals.mojom.PageDataSpec, 'on_device_internals.mojom.PageData', [
      mojo.internal.StructField('base_model', 0, 0, on_device_internals.mojom.BaseModelStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('supp_models', 8, 0, mojo.internal.Array(on_device_internals.mojom.SupplementaryModelInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('feature_adaptations', 16, 0, mojo.internal.Array(on_device_internals.mojom.FeatureAdaptationInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('performance_info', 24, 0, on_device_model.mojom.DevicePerformanceInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_vram_mb', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('model_crash_count', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('max_model_crash_count', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: BaseModelState
mojo.internal.Struct(
    on_device_internals.mojom.BaseModelStateSpec, 'on_device_internals.mojom.BaseModelState', [
      mojo.internal.StructField('state', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('registration_criteria', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('info', 16, 0, on_device_internals.mojom.BaseModelInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BaseModelInfo
mojo.internal.Struct(
    on_device_internals.mojom.BaseModelInfoSpec, 'on_device_internals.mojom.BaseModelInfo', [
      mojo.internal.StructField('component_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_path', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_size', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('version', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('backend_type', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SupplementaryModelInfo
mojo.internal.Struct(
    on_device_internals.mojom.SupplementaryModelInfoSpec, 'on_device_internals.mojom.SupplementaryModelInfo', [
      mojo.internal.StructField('supp_model_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_ready', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FeatureAdaptationInfo
mojo.internal.Struct(
    on_device_internals.mojom.FeatureAdaptationInfoSpec, 'on_device_internals.mojom.FeatureAdaptationInfo', [
      mojo.internal.StructField('feature_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('version', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('feature_key', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_recently_used', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    on_device_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'on_device_internals.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(on_device_internals.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(on_device_internals.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [page, handler],
      false);
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

on_device_internals.mojom.PageHandlerFactoryPtr = on_device_internals.mojom.PageHandlerFactoryRemote;
on_device_internals.mojom.PageHandlerFactoryRequest = on_device_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    on_device_internals.mojom.PageHandler_LoadModel_ParamsSpec, 'on_device_internals.mojom.PageHandler_LoadModel_Params', [
      mojo.internal.StructField('model_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('performance_hint', 8, 0, on_device_model.mojom.ModelPerformanceHintSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('model', 16, 0, mojo.internal.InterfaceRequest(on_device_model.mojom.OnDeviceModelRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    on_device_internals.mojom.PageHandler_LoadModel_ResponseParamsSpec, 'on_device_internals.mojom.PageHandler_LoadModel_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, on_device_model.mojom.LoadModelResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('capabilities', 8, 0, on_device_model.mojom.CapabilitiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    on_device_internals.mojom.PageHandler_LoadPlatformModel_ParamsSpec, 'on_device_internals.mojom.PageHandler_LoadPlatformModel_Params', [
      mojo.internal.StructField('model_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('model', 8, 0, mojo.internal.InterfaceRequest(on_device_model.mojom.OnDeviceModelRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    on_device_internals.mojom.PageHandler_LoadPlatformModel_ResponseParamsSpec, 'on_device_internals.mojom.PageHandler_LoadPlatformModel_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, on_device_model.mojom.LoadModelResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_internals.mojom.PageHandler_GetDeviceAndPerformanceInfo_ParamsSpec, 'on_device_internals.mojom.PageHandler_GetDeviceAndPerformanceInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    on_device_internals.mojom.PageHandler_GetDeviceAndPerformanceInfo_ResponseParamsSpec, 'on_device_internals.mojom.PageHandler_GetDeviceAndPerformanceInfo_ResponseParams', [
      mojo.internal.StructField('performance_info', 0, 0, on_device_model.mojom.DevicePerformanceInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_info', 8, 0, on_device_model.mojom.DeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    on_device_internals.mojom.PageHandler_GetDefaultModelPath_ParamsSpec, 'on_device_internals.mojom.PageHandler_GetDefaultModelPath_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    on_device_internals.mojom.PageHandler_GetDefaultModelPath_ResponseParamsSpec, 'on_device_internals.mojom.PageHandler_GetDefaultModelPath_ResponseParams', [
      mojo.internal.StructField('model_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_internals.mojom.PageHandler_UninstallDefaultModel_ParamsSpec, 'on_device_internals.mojom.PageHandler_UninstallDefaultModel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    on_device_internals.mojom.PageHandler_GetPageData_ParamsSpec, 'on_device_internals.mojom.PageHandler_GetPageData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    on_device_internals.mojom.PageHandler_GetPageData_ResponseParamsSpec, 'on_device_internals.mojom.PageHandler_GetPageData_ResponseParams', [
      mojo.internal.StructField('page_data', 0, 0, on_device_internals.mojom.PageDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_internals.mojom.PageHandler_SetFeatureRecentlyUsedState_ParamsSpec, 'on_device_internals.mojom.PageHandler_SetFeatureRecentlyUsedState_Params', [
      mojo.internal.StructField('feature_key', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_recently_used', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_internals.mojom.PageHandler_DecodeBitmap_ParamsSpec, 'on_device_internals.mojom.PageHandler_DecodeBitmap_Params', [
      mojo.internal.StructField('image_buffer', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_internals.mojom.PageHandler_DecodeBitmap_ResponseParamsSpec, 'on_device_internals.mojom.PageHandler_DecodeBitmap_ResponseParams', [
      mojo.internal.StructField('bitmap', 0, 0, skia.mojom.BitmapMappedFromTrustedProcessSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_internals.mojom.PageHandler_ResetModelCrashCount_ParamsSpec, 'on_device_internals.mojom.PageHandler_ResetModelCrashCount_Params', [
    ],
    [[0, 8]]);

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
      [model_path, performance_hint, model],
      false);
  }

  loadPlatformModel(model_path, model) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_internals.mojom.PageHandler_LoadPlatformModel_ParamsSpec,
      on_device_internals.mojom.PageHandler_LoadPlatformModel_ResponseParamsSpec,
      [model_path, model],
      false);
  }

  getDeviceAndPerformanceInfo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      on_device_internals.mojom.PageHandler_GetDeviceAndPerformanceInfo_ParamsSpec,
      on_device_internals.mojom.PageHandler_GetDeviceAndPerformanceInfo_ResponseParamsSpec,
      [],
      false);
  }

  getDefaultModelPath() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      on_device_internals.mojom.PageHandler_GetDefaultModelPath_ParamsSpec,
      on_device_internals.mojom.PageHandler_GetDefaultModelPath_ResponseParamsSpec,
      [],
      false);
  }

  uninstallDefaultModel() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      on_device_internals.mojom.PageHandler_UninstallDefaultModel_ParamsSpec,
      null,
      [],
      false);
  }

  getPageData() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      on_device_internals.mojom.PageHandler_GetPageData_ParamsSpec,
      on_device_internals.mojom.PageHandler_GetPageData_ResponseParamsSpec,
      [],
      false);
  }

  setFeatureRecentlyUsedState(feature_key, is_recently_used) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      on_device_internals.mojom.PageHandler_SetFeatureRecentlyUsedState_ParamsSpec,
      null,
      [feature_key, is_recently_used],
      false);
  }

  decodeBitmap(image_buffer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      on_device_internals.mojom.PageHandler_DecodeBitmap_ParamsSpec,
      on_device_internals.mojom.PageHandler_DecodeBitmap_ResponseParamsSpec,
      [image_buffer],
      false);
  }

  resetModelCrashCount() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      on_device_internals.mojom.PageHandler_ResetModelCrashCount_ParamsSpec,
      null,
      [],
      false);
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

on_device_internals.mojom.PageHandlerPtr = on_device_internals.mojom.PageHandlerRemote;
on_device_internals.mojom.PageHandlerRequest = on_device_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    on_device_internals.mojom.Page_OnLogMessageAdded_ParamsSpec, 'on_device_internals.mojom.Page_OnLogMessageAdded_Params', [
      mojo.internal.StructField('event_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_file', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_line', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('message', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    on_device_internals.mojom.Page_OnDownloadProgressUpdate_ParamsSpec, 'on_device_internals.mojom.Page_OnDownloadProgressUpdate_Params', [
      mojo.internal.StructField('downloaded_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('total_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [event_time, source_file, source_line, message],
      false);
  }

  onDownloadProgressUpdate(downloaded_bytes, total_bytes) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_internals.mojom.Page_OnDownloadProgressUpdate_ParamsSpec,
      null,
      [downloaded_bytes, total_bytes],
      false);
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

on_device_internals.mojom.PagePtr = on_device_internals.mojom.PageRemote;
on_device_internals.mojom.PageRequest = on_device_internals.mojom.PagePendingReceiver;

