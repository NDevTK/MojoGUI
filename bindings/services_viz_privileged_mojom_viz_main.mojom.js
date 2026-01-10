// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/viz_main.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var components = components || {};
var components = components || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var ui = ui || {};
var gfx = gfx || {};

viz.mojom.FrameSinkManagerParamsSpec = { $: {} };
viz.mojom.GpuServiceCreationParamsSpec = { $: {} };
viz.mojom.VizMain = {};
viz.mojom.VizMain.$interfaceName = 'viz.mojom.VizMain';
viz.mojom.VizMain_CreateFrameSinkManager_ParamsSpec = { $: {} };
viz.mojom.VizMain_CreateGpuService_ParamsSpec = { $: {} };
viz.mojom.VizMain_SetRenderParams_ParamsSpec = { $: {} };
viz.mojom.VizMain_CreateInfoCollectionGpuService_ParamsSpec = { $: {} };
viz.mojom.VizMain_SetHostProcessId_ParamsSpec = { $: {} };
viz.mojom.VizMain_NotifyWorkloadIncrease_ParamsSpec = { $: {} };
viz.mojom.VizMain_StartDebugStream_ParamsSpec = { $: {} };
viz.mojom.VizMain_FilterDebugStream_ParamsSpec = { $: {} };
viz.mojom.VizMain_StopDebugStream_ParamsSpec = { $: {} };

// Struct: FrameSinkManagerParams
mojo.internal.Struct(
    viz.mojom.FrameSinkManagerParamsSpec, 'viz.mojom.FrameSinkManagerParams', [
      mojo.internal.StructField('restart_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('use_activation_deadline', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('activation_deadline_in_frames', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('frame_sink_manager', 16, 0, mojo.internal.InterfaceRequest(viz.mojom.FrameSinkManagerRemote), null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_manager_client', 24, 0, mojo.internal.InterfaceProxy(viz.mojom.FrameSinkManagerClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('debug_renderer_settings', 32, 0, viz.mojom.DebugRendererSettingsSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: GpuServiceCreationParams
mojo.internal.Struct(
    viz.mojom.GpuServiceCreationParamsSpec, 'viz.mojom.GpuServiceCreationParams', [
      mojo.internal.StructField('supports_overlays', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: VizMain
mojo.internal.Struct(
    viz.mojom.VizMain_CreateFrameSinkManager_ParamsSpec, 'viz.mojom.VizMain_CreateFrameSinkManager_Params', [
      mojo.internal.StructField('params', 0, 0, viz.mojom.FrameSinkManagerParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.VizMain_CreateGpuService_ParamsSpec, 'viz.mojom.VizMain_CreateGpuService_Params', [
      mojo.internal.StructField('gpu_service', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.GpuServiceRemote), null, false, 0, undefined),
      mojo.internal.StructField('gpu_host', 8, 0, mojo.internal.InterfaceProxy(viz.mojom.GpuHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('gpu_logging', 16, 0, mojo.internal.InterfaceProxy(viz.mojom.GpuLoggingRemote), null, false, 0, undefined),
      mojo.internal.StructField('discardable_memory_manager', 24, 0, mojo.internal.InterfaceProxy(discardable_memory.mojom.DiscardableSharedMemoryManagerRemote), null, false, 0, undefined),
      mojo.internal.StructField('use_shader_cache_shm_count', 32, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec, null, true, 0, undefined),
      mojo.internal.StructField('params', 40, 0, viz.mojom.GpuServiceCreationParamsSpec, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    viz.mojom.VizMain_SetRenderParams_ParamsSpec, 'viz.mojom.VizMain_SetRenderParams_Params', [
      mojo.internal.StructField('subpixel_rendering', 0, 0, gfx.mojom.SubpixelRenderingSpec, null, false, 0, undefined),
      mojo.internal.StructField('text_contrast', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('text_gamma', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.VizMain_CreateInfoCollectionGpuService_ParamsSpec, 'viz.mojom.VizMain_CreateInfoCollectionGpuService_Params', [
      mojo.internal.StructField('info_collection_gpu_service', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.InfoCollectionGpuServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.VizMain_SetHostProcessId_ParamsSpec, 'viz.mojom.VizMain_SetHostProcessId_Params', [
      mojo.internal.StructField('pid', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.VizMain_NotifyWorkloadIncrease_ParamsSpec, 'viz.mojom.VizMain_NotifyWorkloadIncrease_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.VizMain_StartDebugStream_ParamsSpec, 'viz.mojom.VizMain_StartDebugStream_Params', [
      mojo.internal.StructField('viz_debug', 0, 0, mojo.internal.InterfaceProxy(viz.mojom.VizDebugOutputRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.VizMain_FilterDebugStream_ParamsSpec, 'viz.mojom.VizMain_FilterDebugStream_Params', [
      mojo.internal.StructField('filterData', 0, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.VizMain_StopDebugStream_ParamsSpec, 'viz.mojom.VizMain_StopDebugStream_Params', [
    ],
    [[0, 8]]);

viz.mojom.VizMainPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.VizMainRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.VizMain';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.VizMainPendingReceiver,
      handle);
    this.$ = new viz.mojom.VizMainRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.VizMainRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createFrameSinkManager(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.VizMain_CreateFrameSinkManager_ParamsSpec,
      null,
      [params]);
  }

  createGpuService(gpu_service, gpu_host, gpu_logging, discardable_memory_manager, use_shader_cache_shm_count, params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.VizMain_CreateGpuService_ParamsSpec,
      null,
      [gpu_service, gpu_host, gpu_logging, discardable_memory_manager, use_shader_cache_shm_count, params]);
  }

  setRenderParams(subpixel_rendering, text_contrast, text_gamma) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.VizMain_SetRenderParams_ParamsSpec,
      null,
      [subpixel_rendering, text_contrast, text_gamma]);
  }

  createInfoCollectionGpuService(info_collection_gpu_service) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.VizMain_CreateInfoCollectionGpuService_ParamsSpec,
      null,
      [info_collection_gpu_service]);
  }

  setHostProcessId(pid) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.VizMain_SetHostProcessId_ParamsSpec,
      null,
      [pid]);
  }

  notifyWorkloadIncrease() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.VizMain_NotifyWorkloadIncrease_ParamsSpec,
      null,
      []);
  }

  startDebugStream(viz_debug) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.VizMain_StartDebugStream_ParamsSpec,
      null,
      [viz_debug]);
  }

  filterDebugStream(filterData) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.VizMain_FilterDebugStream_ParamsSpec,
      null,
      [filterData]);
  }

  stopDebugStream() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      viz.mojom.VizMain_StopDebugStream_ParamsSpec,
      null,
      []);
  }

};

viz.mojom.VizMain.getRemote = function() {
  let remote = new viz.mojom.VizMainRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.VizMain',
    'context');
  return remote.$;
};

viz.mojom.VizMainPtr = viz.mojom.VizMainRemote;
viz.mojom.VizMainRequest = viz.mojom.VizMainPendingReceiver;

