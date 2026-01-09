// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/viz_main.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: FrameSinkManagerParams
viz.mojom.FrameSinkManagerParams = class {
  constructor(values = {}) {
    this.debug_renderer_settings = values.debug_renderer_settings !== undefined ? values.debug_renderer_settings : 0;
  }
};

// Struct: GpuServiceCreationParams
viz.mojom.GpuServiceCreationParams = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Interface: VizMain
viz.mojom.VizMainPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.VizMain';
  }

  createFrameSinkManager(params) {
    // Method: CreateFrameSinkManager
    // Call: CreateFrameSinkManager(params)
  }

  createGpuService(gpu_service, gpu_host, gpu_logging, discardable_memory_manager, use_shader_cache_shm_count, params) {
    // Method: CreateGpuService
    // Call: CreateGpuService(gpu_service, gpu_host, gpu_logging, discardable_memory_manager, use_shader_cache_shm_count, params)
  }

  setRenderParams(subpixel_rendering, text_contrast, text_gamma) {
    // Method: SetRenderParams
    // Call: SetRenderParams(subpixel_rendering, text_contrast, text_gamma)
  }

  createInfoCollectionGpuService(info_collection_gpu_service) {
    // Method: CreateInfoCollectionGpuService
    // Call: CreateInfoCollectionGpuService(info_collection_gpu_service)
  }

  setHostProcessId(pid) {
    // Method: SetHostProcessId
    // Call: SetHostProcessId(pid)
  }

  notifyWorkloadIncrease() {
    // Method: NotifyWorkloadIncrease
    // Call: NotifyWorkloadIncrease()
  }

  startDebugStream(viz_debug) {
    // Method: StartDebugStream
    // Call: StartDebugStream(viz_debug)
  }

  filterDebugStream(filterData) {
    // Method: FilterDebugStream
    // Call: FilterDebugStream(filterData)
  }

  stopDebugStream() {
    // Method: StopDebugStream
    // Call: StopDebugStream()
  }

};

viz.mojom.VizMainRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
