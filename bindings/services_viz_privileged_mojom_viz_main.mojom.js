// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/viz_main.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var discardable_memory = discardable_memory || {};
var mojo_base = mojo_base || {};
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
      mojo.internal.StructField('frame_sink_manager', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.FrameSinkManagerRemote), null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_manager_client', 8, 0, mojo.internal.InterfaceProxy(viz.mojom.FrameSinkManagerClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('debug_renderer_settings', 16, 0, viz.mojom.DebugRendererSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('restart_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('activation_deadline_in_frames', 28, 0, mojo.internal.Uint32, 4, false, 0, undefined),
      mojo.internal.StructField('use_activation_deadline', 32, 0, mojo.internal.Bool, true, false, 0, undefined),
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
      mojo.internal.StructField('params', 0, 0, viz.mojom.FrameSinkManagerParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.VizMain_CreateGpuService_ParamsSpec, 'viz.mojom.VizMain_CreateGpuService_Params', [
      mojo.internal.StructField('gpu_service', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.GpuServiceRemote), null, false, 0, undefined),
      mojo.internal.StructField('gpu_host', 8, 0, mojo.internal.InterfaceProxy(viz.mojom.GpuHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('gpu_logging', 16, 0, mojo.internal.InterfaceProxy(viz.mojom.GpuLoggingRemote), null, false, 0, undefined),
      mojo.internal.StructField('discardable_memory_manager', 24, 0, mojo.internal.InterfaceProxy(discardable_memory.mojom.DiscardableSharedMemoryManagerRemote), null, false, 0, undefined),
      mojo.internal.StructField('use_shader_cache_shm_count', 32, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('params', 40, 0, viz.mojom.GpuServiceCreationParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    viz.mojom.VizMain_SetRenderParams_ParamsSpec, 'viz.mojom.VizMain_SetRenderParams_Params', [
      mojo.internal.StructField('subpixel_rendering', 0, 0, gfx.mojom.SubpixelRenderingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_contrast', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('text_gamma', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
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
      mojo.internal.StructField('filterData', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
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
  createFrameSinkManager(params) {
    return this.$.createFrameSinkManager(params);
  }
  createGpuService(gpu_service, gpu_host, gpu_logging, discardable_memory_manager, use_shader_cache_shm_count, params) {
    return this.$.createGpuService(gpu_service, gpu_host, gpu_logging, discardable_memory_manager, use_shader_cache_shm_count, params);
  }
  setRenderParams(subpixel_rendering, text_contrast, text_gamma) {
    return this.$.setRenderParams(subpixel_rendering, text_contrast, text_gamma);
  }
  createInfoCollectionGpuService(info_collection_gpu_service) {
    return this.$.createInfoCollectionGpuService(info_collection_gpu_service);
  }
  setHostProcessId(pid) {
    return this.$.setHostProcessId(pid);
  }
  notifyWorkloadIncrease() {
    return this.$.notifyWorkloadIncrease();
  }
  startDebugStream(viz_debug) {
    return this.$.startDebugStream(viz_debug);
  }
  filterDebugStream(filterData) {
    return this.$.filterDebugStream(filterData);
  }
  stopDebugStream() {
    return this.$.stopDebugStream();
  }
};

viz.mojom.VizMainRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VizMain', [
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

  createFrameSinkManager(params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.VizMain_CreateFrameSinkManager_ParamsSpec,
      null,
      [params],
      false);
  }

  createGpuService(gpu_service, gpu_host, gpu_logging, discardable_memory_manager, use_shader_cache_shm_count, params) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.VizMain_CreateGpuService_ParamsSpec,
      null,
      [gpu_service, gpu_host, gpu_logging, discardable_memory_manager, use_shader_cache_shm_count, params],
      false);
  }

  setRenderParams(subpixel_rendering, text_contrast, text_gamma) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      viz.mojom.VizMain_SetRenderParams_ParamsSpec,
      null,
      [subpixel_rendering, text_contrast, text_gamma],
      false);
  }

  createInfoCollectionGpuService(info_collection_gpu_service) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      viz.mojom.VizMain_CreateInfoCollectionGpuService_ParamsSpec,
      null,
      [info_collection_gpu_service],
      false);
  }

  setHostProcessId(pid) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      viz.mojom.VizMain_SetHostProcessId_ParamsSpec,
      null,
      [pid],
      false);
  }

  notifyWorkloadIncrease() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      viz.mojom.VizMain_NotifyWorkloadIncrease_ParamsSpec,
      null,
      [],
      false);
  }

  startDebugStream(viz_debug) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      viz.mojom.VizMain_StartDebugStream_ParamsSpec,
      null,
      [viz_debug],
      false);
  }

  filterDebugStream(filterData) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      viz.mojom.VizMain_FilterDebugStream_ParamsSpec,
      null,
      [filterData],
      false);
  }

  stopDebugStream() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      viz.mojom.VizMain_StopDebugStream_ParamsSpec,
      null,
      [],
      false);
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

viz.mojom.VizMainReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VizMain', [
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
             decoder.decodeStructInline(viz.mojom.VizMain_CreateFrameSinkManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.VizMain_CreateGpuService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.VizMain_SetRenderParams_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.VizMain_CreateInfoCollectionGpuService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.VizMain_SetHostProcessId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.VizMain_NotifyWorkloadIncrease_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.VizMain_StartDebugStream_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.VizMain_FilterDebugStream_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.VizMain_StopDebugStream_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizMain_CreateFrameSinkManager_ParamsSpec.$.structSpec);
          const result = this.impl.createFrameSinkManager(params.params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizMain_CreateGpuService_ParamsSpec.$.structSpec);
          const result = this.impl.createGpuService(params.gpu_service, params.gpu_host, params.gpu_logging, params.discardable_memory_manager, params.use_shader_cache_shm_count, params.params);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizMain_SetRenderParams_ParamsSpec.$.structSpec);
          const result = this.impl.setRenderParams(params.subpixel_rendering, params.text_contrast, params.text_gamma);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizMain_CreateInfoCollectionGpuService_ParamsSpec.$.structSpec);
          const result = this.impl.createInfoCollectionGpuService(params.info_collection_gpu_service);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizMain_SetHostProcessId_ParamsSpec.$.structSpec);
          const result = this.impl.setHostProcessId(params.pid);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizMain_NotifyWorkloadIncrease_ParamsSpec.$.structSpec);
          const result = this.impl.notifyWorkloadIncrease();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizMain_StartDebugStream_ParamsSpec.$.structSpec);
          const result = this.impl.startDebugStream(params.viz_debug);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizMain_FilterDebugStream_ParamsSpec.$.structSpec);
          const result = this.impl.filterDebugStream(params.filterData);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizMain_StopDebugStream_ParamsSpec.$.structSpec);
          const result = this.impl.stopDebugStream();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

viz.mojom.VizMainReceiver = viz.mojom.VizMainReceiver;

viz.mojom.VizMainPtr = viz.mojom.VizMainRemote;
viz.mojom.VizMainRequest = viz.mojom.VizMainPendingReceiver;

