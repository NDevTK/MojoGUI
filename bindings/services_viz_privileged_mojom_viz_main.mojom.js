// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/viz_main.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: FrameSinkManagerParams
viz.mojom.mojom.FrameSinkManagerParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManagerParams',
      packedSize: 40,
      fields: [
        { name: 'restart_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'use_activation_deadline', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'activation_deadline_in_frames', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'frame_sink_manager', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'frame_sink_manager_client', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'debug_renderer_settings', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.DebugRendererSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: GpuServiceCreationParams
viz.mojom.mojom.GpuServiceCreationParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuServiceCreationParams',
      packedSize: 16,
      fields: [
        { name: 'supports_overlays', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: VizMain
viz.mojom.mojom.VizMain = {};

viz.mojom.mojom.VizMainPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.VizMainRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.VizMain';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.VizMainPendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.VizMainRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.VizMainRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createFrameSinkManager(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.VizMain_CreateFrameSinkManager_ParamsSpec,
      null,
      [params]);
  }

  createGpuService(gpu_service, gpu_host, gpu_logging, discardable_memory_manager, use_shader_cache_shm_count, params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.mojom.VizMain_CreateGpuService_ParamsSpec,
      null,
      [gpu_service, gpu_host, gpu_logging, discardable_memory_manager, use_shader_cache_shm_count, params]);
  }

  setRenderParams(subpixel_rendering, text_contrast, text_gamma) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.mojom.VizMain_SetRenderParams_ParamsSpec,
      null,
      [subpixel_rendering, text_contrast, text_gamma]);
  }

  createInfoCollectionGpuService(info_collection_gpu_service) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.mojom.VizMain_CreateInfoCollectionGpuService_ParamsSpec,
      null,
      [info_collection_gpu_service]);
  }

  setHostProcessId(pid) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.mojom.VizMain_SetHostProcessId_ParamsSpec,
      null,
      [pid]);
  }

  notifyWorkloadIncrease() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.mojom.VizMain_NotifyWorkloadIncrease_ParamsSpec,
      null,
      []);
  }

  startDebugStream(viz_debug) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.mojom.VizMain_StartDebugStream_ParamsSpec,
      null,
      [viz_debug]);
  }

  filterDebugStream(filterData) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.mojom.VizMain_FilterDebugStream_ParamsSpec,
      null,
      [filterData]);
  }

  stopDebugStream() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      viz.mojom.mojom.VizMain_StopDebugStream_ParamsSpec,
      null,
      []);
  }

};

viz.mojom.mojom.VizMain.getRemote = function() {
  let remote = new viz.mojom.mojom.VizMainRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.VizMain',
    'context');
  return remote.$;
};

// ParamsSpec for CreateFrameSinkManager
viz.mojom.mojom.VizMain_CreateFrameSinkManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.CreateFrameSinkManager_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameSinkManagerParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateGpuService
viz.mojom.mojom.VizMain_CreateGpuService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.CreateGpuService_Params',
      packedSize: 40,
      fields: [
        { name: 'gpu_service', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'gpu_host', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'gpu_logging', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'discardable_memory_manager', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'use_shader_cache_shm_count', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: true, minVersion: 0 },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.GpuServiceCreationParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for SetRenderParams
viz.mojom.mojom.VizMain_SetRenderParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.SetRenderParams_Params',
      packedSize: 24,
      fields: [
        { name: 'subpixel_rendering', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SubpixelRenderingSpec, nullable: false, minVersion: 0 },
        { name: 'text_contrast', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'text_gamma', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateInfoCollectionGpuService
viz.mojom.mojom.VizMain_CreateInfoCollectionGpuService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.CreateInfoCollectionGpuService_Params',
      packedSize: 16,
      fields: [
        { name: 'info_collection_gpu_service', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetHostProcessId
viz.mojom.mojom.VizMain_SetHostProcessId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.SetHostProcessId_Params',
      packedSize: 16,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyWorkloadIncrease
viz.mojom.mojom.VizMain_NotifyWorkloadIncrease_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.NotifyWorkloadIncrease_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StartDebugStream
viz.mojom.mojom.VizMain_StartDebugStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.StartDebugStream_Params',
      packedSize: 16,
      fields: [
        { name: 'viz_debug', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FilterDebugStream
viz.mojom.mojom.VizMain_FilterDebugStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.FilterDebugStream_Params',
      packedSize: 16,
      fields: [
        { name: 'filterData', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopDebugStream
viz.mojom.mojom.VizMain_StopDebugStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.StopDebugStream_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
viz.mojom.mojom.VizMainPtr = viz.mojom.mojom.VizMainRemote;
viz.mojom.mojom.VizMainRequest = viz.mojom.mojom.VizMainPendingReceiver;

