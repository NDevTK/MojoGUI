// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/viz_main.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: FrameSinkManagerParams
viz.mojom.FrameSinkManagerParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManagerParams',
      packedSize: 16,
      fields: [
        { name: 'debug_renderer_settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GpuServiceCreationParams
viz.mojom.GpuServiceCreationParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuServiceCreationParams',
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: VizMain
viz.mojom.VizMain = {};

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

// ParamsSpec for CreateFrameSinkManager
viz.mojom.VizMain_CreateFrameSinkManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.CreateFrameSinkManager_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateGpuService
viz.mojom.VizMain_CreateGpuService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.CreateGpuService_Params',
      packedSize: 40,
      fields: [
        { name: 'use_shader_cache_shm_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'gpu_service', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'gpu_host', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'gpu_logging', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'discardable_memory_manager', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetRenderParams
viz.mojom.VizMain_SetRenderParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.SetRenderParams_Params',
      packedSize: 24,
      fields: [
        { name: 'subpixel_rendering', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'text_contrast', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'text_gamma', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateInfoCollectionGpuService
viz.mojom.VizMain_CreateInfoCollectionGpuService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.CreateInfoCollectionGpuService_Params',
      packedSize: 16,
      fields: [
        { name: 'info_collection_gpu_service', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetHostProcessId
viz.mojom.VizMain_SetHostProcessId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.SetHostProcessId_Params',
      packedSize: 16,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyWorkloadIncrease
viz.mojom.VizMain_NotifyWorkloadIncrease_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.NotifyWorkloadIncrease_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartDebugStream
viz.mojom.VizMain_StartDebugStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.StartDebugStream_Params',
      packedSize: 16,
      fields: [
        { name: 'viz_debug', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FilterDebugStream
viz.mojom.VizMain_FilterDebugStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.FilterDebugStream_Params',
      packedSize: 16,
      fields: [
        { name: 'filterData', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopDebugStream
viz.mojom.VizMain_StopDebugStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizMain.StopDebugStream_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
viz.mojom.VizMainPtr = viz.mojom.VizMainRemote;
viz.mojom.VizMainRequest = viz.mojom.VizMainPendingReceiver;

