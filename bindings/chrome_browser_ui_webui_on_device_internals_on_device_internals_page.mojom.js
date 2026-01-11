// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/on_device_internals/on_device_internals_page.mojom
// Module: on_device_internals.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var on_device_internals = on_device_internals || {};
on_device_internals.mojom = on_device_internals.mojom || {};
var mojo_base = mojo_base || {};
var on_device_model = on_device_model || {};
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
  createPageHandler(page, handler) {
    return this.$.createPageHandler(page, handler);
  }
};

on_device_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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

on_device_internals.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

on_device_internals.mojom.PageHandlerFactoryReceiver = on_device_internals.mojom.PageHandlerFactoryReceiver;

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
  loadModel(model_path, performance_hint, model) {
    return this.$.loadModel(model_path, performance_hint, model);
  }
  loadPlatformModel(model_path, model) {
    return this.$.loadPlatformModel(model_path, model);
  }
  getDeviceAndPerformanceInfo() {
    return this.$.getDeviceAndPerformanceInfo();
  }
  getDefaultModelPath() {
    return this.$.getDefaultModelPath();
  }
  uninstallDefaultModel() {
    return this.$.uninstallDefaultModel();
  }
  getPageData() {
    return this.$.getPageData();
  }
  setFeatureRecentlyUsedState(feature_key, is_recently_used) {
    return this.$.setFeatureRecentlyUsedState(feature_key, is_recently_used);
  }
  decodeBitmap(image_buffer) {
    return this.$.decodeBitmap(image_buffer);
  }
  resetModelCrashCount() {
    return this.$.resetModelCrashCount();
  }
};

on_device_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  loadModel(model_path, performance_hint, model) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      on_device_internals.mojom.PageHandler_LoadModel_ParamsSpec,
      on_device_internals.mojom.PageHandler_LoadModel_ResponseParamsSpec,
      [model_path, performance_hint, model],
      false);
  }

  loadPlatformModel(model_path, model) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      on_device_internals.mojom.PageHandler_LoadPlatformModel_ParamsSpec,
      on_device_internals.mojom.PageHandler_LoadPlatformModel_ResponseParamsSpec,
      [model_path, model],
      false);
  }

  getDeviceAndPerformanceInfo() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      on_device_internals.mojom.PageHandler_GetDeviceAndPerformanceInfo_ParamsSpec,
      on_device_internals.mojom.PageHandler_GetDeviceAndPerformanceInfo_ResponseParamsSpec,
      [],
      false);
  }

  getDefaultModelPath() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      on_device_internals.mojom.PageHandler_GetDefaultModelPath_ParamsSpec,
      on_device_internals.mojom.PageHandler_GetDefaultModelPath_ResponseParamsSpec,
      [],
      false);
  }

  uninstallDefaultModel() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      on_device_internals.mojom.PageHandler_UninstallDefaultModel_ParamsSpec,
      null,
      [],
      false);
  }

  getPageData() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      on_device_internals.mojom.PageHandler_GetPageData_ParamsSpec,
      on_device_internals.mojom.PageHandler_GetPageData_ResponseParamsSpec,
      [],
      false);
  }

  setFeatureRecentlyUsedState(feature_key, is_recently_used) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      on_device_internals.mojom.PageHandler_SetFeatureRecentlyUsedState_ParamsSpec,
      null,
      [feature_key, is_recently_used],
      false);
  }

  decodeBitmap(image_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      on_device_internals.mojom.PageHandler_DecodeBitmap_ParamsSpec,
      on_device_internals.mojom.PageHandler_DecodeBitmap_ResponseParamsSpec,
      [image_buffer],
      false);
  }

  resetModelCrashCount() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
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

on_device_internals.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_internals.mojom.PageHandler_LoadModel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_internals.mojom.PageHandler_LoadPlatformModel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_internals.mojom.PageHandler_GetDeviceAndPerformanceInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_internals.mojom.PageHandler_GetDefaultModelPath_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_internals.mojom.PageHandler_UninstallDefaultModel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_internals.mojom.PageHandler_GetPageData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_internals.mojom.PageHandler_SetFeatureRecentlyUsedState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_internals.mojom.PageHandler_DecodeBitmap_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_internals.mojom.PageHandler_ResetModelCrashCount_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_internals.mojom.PageHandler_LoadModel_ParamsSpec.$.structSpec);
          const result = this.impl.loadModel(params.model_path, params.performance_hint, params.model);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_internals.mojom.PageHandler_LoadModel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_internals.mojom.PageHandler_LoadPlatformModel_ParamsSpec.$.structSpec);
          const result = this.impl.loadPlatformModel(params.model_path, params.model);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_internals.mojom.PageHandler_LoadPlatformModel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_internals.mojom.PageHandler_GetDeviceAndPerformanceInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getDeviceAndPerformanceInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_internals.mojom.PageHandler_GetDeviceAndPerformanceInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_internals.mojom.PageHandler_GetDefaultModelPath_ParamsSpec.$.structSpec);
          const result = this.impl.getDefaultModelPath();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_internals.mojom.PageHandler_GetDefaultModelPath_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_internals.mojom.PageHandler_UninstallDefaultModel_ParamsSpec.$.structSpec);
          const result = this.impl.uninstallDefaultModel();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_internals.mojom.PageHandler_GetPageData_ParamsSpec.$.structSpec);
          const result = this.impl.getPageData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_internals.mojom.PageHandler_GetPageData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_internals.mojom.PageHandler_SetFeatureRecentlyUsedState_ParamsSpec.$.structSpec);
          const result = this.impl.setFeatureRecentlyUsedState(params.feature_key, params.is_recently_used);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_internals.mojom.PageHandler_DecodeBitmap_ParamsSpec.$.structSpec);
          const result = this.impl.decodeBitmap(params.image_buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_internals.mojom.PageHandler_DecodeBitmap_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_internals.mojom.PageHandler_ResetModelCrashCount_ParamsSpec.$.structSpec);
          const result = this.impl.resetModelCrashCount();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

on_device_internals.mojom.PageHandlerReceiver = on_device_internals.mojom.PageHandlerReceiver;

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
  onLogMessageAdded(event_time, source_file, source_line, message) {
    return this.$.onLogMessageAdded(event_time, source_file, source_line, message);
  }
  onDownloadProgressUpdate(downloaded_bytes, total_bytes) {
    return this.$.onDownloadProgressUpdate(downloaded_bytes, total_bytes);
  }
};

on_device_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onLogMessageAdded(event_time, source_file, source_line, message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      on_device_internals.mojom.Page_OnLogMessageAdded_ParamsSpec,
      null,
      [event_time, source_file, source_line, message],
      false);
  }

  onDownloadProgressUpdate(downloaded_bytes, total_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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

on_device_internals.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_internals.mojom.Page_OnLogMessageAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_internals.mojom.Page_OnDownloadProgressUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_internals.mojom.Page_OnLogMessageAdded_ParamsSpec.$.structSpec);
          const result = this.impl.onLogMessageAdded(params.event_time, params.source_file, params.source_line, params.message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_internals.mojom.Page_OnDownloadProgressUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.onDownloadProgressUpdate(params.downloaded_bytes, params.total_bytes);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

on_device_internals.mojom.PageReceiver = on_device_internals.mojom.PageReceiver;

on_device_internals.mojom.PagePtr = on_device_internals.mojom.PageRemote;
on_device_internals.mojom.PageRequest = on_device_internals.mojom.PagePendingReceiver;

