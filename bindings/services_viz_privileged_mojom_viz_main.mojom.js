// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/viz_main.mojom
// Module: viz.mojom

'use strict';

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
      [params],
      false);
  }

  createGpuService(gpu_service, gpu_host, gpu_logging, discardable_memory_manager, use_shader_cache_shm_count, params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.VizMain_CreateGpuService_ParamsSpec,
      null,
      [gpu_service, gpu_host, gpu_logging, discardable_memory_manager, use_shader_cache_shm_count, params],
      false);
  }

  setRenderParams(subpixel_rendering, text_contrast, text_gamma) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.VizMain_SetRenderParams_ParamsSpec,
      null,
      [subpixel_rendering, text_contrast, text_gamma],
      false);
  }

  createInfoCollectionGpuService(info_collection_gpu_service) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.VizMain_CreateInfoCollectionGpuService_ParamsSpec,
      null,
      [info_collection_gpu_service],
      false);
  }

  setHostProcessId(pid) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.VizMain_SetHostProcessId_ParamsSpec,
      null,
      [pid],
      false);
  }

  notifyWorkloadIncrease() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.VizMain_NotifyWorkloadIncrease_ParamsSpec,
      null,
      [],
      false);
  }

  startDebugStream(viz_debug) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.VizMain_StartDebugStream_ParamsSpec,
      null,
      [viz_debug],
      false);
  }

  filterDebugStream(filterData) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.VizMain_FilterDebugStream_ParamsSpec,
      null,
      [filterData],
      false);
  }

  stopDebugStream() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateFrameSinkManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.VizMain_CreateFrameSinkManager_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateFrameSinkManager (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateGpuService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.VizMain_CreateGpuService_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateGpuService (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetRenderParams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.VizMain_SetRenderParams_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRenderParams (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CreateInfoCollectionGpuService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.VizMain_CreateInfoCollectionGpuService_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateInfoCollectionGpuService (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetHostProcessId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.VizMain_SetHostProcessId_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHostProcessId (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: NotifyWorkloadIncrease
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.VizMain_NotifyWorkloadIncrease_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyWorkloadIncrease (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: StartDebugStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.VizMain_StartDebugStream_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDebugStream (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: FilterDebugStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.VizMain_FilterDebugStream_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FilterDebugStream (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: StopDebugStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.VizMain_StopDebugStream_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopDebugStream (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.VizMain_CreateFrameSinkManager_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createFrameSinkManager');
          const result = this.impl.createFrameSinkManager(params.params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.VizMain_CreateGpuService_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createGpuService');
          const result = this.impl.createGpuService(params.gpu_service, params.gpu_host, params.gpu_logging, params.discardable_memory_manager, params.use_shader_cache_shm_count, params.params);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.VizMain_SetRenderParams_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setRenderParams');
          const result = this.impl.setRenderParams(params.subpixel_rendering, params.text_contrast, params.text_gamma);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.VizMain_CreateInfoCollectionGpuService_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createInfoCollectionGpuService');
          const result = this.impl.createInfoCollectionGpuService(params.info_collection_gpu_service);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.VizMain_SetHostProcessId_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setHostProcessId');
          const result = this.impl.setHostProcessId(params.pid);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.VizMain_NotifyWorkloadIncrease_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyWorkloadIncrease');
          const result = this.impl.notifyWorkloadIncrease();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.VizMain_StartDebugStream_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startDebugStream');
          const result = this.impl.startDebugStream(params.viz_debug);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.VizMain_FilterDebugStream_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.filterDebugStream');
          const result = this.impl.filterDebugStream(params.filterData);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.VizMain_StopDebugStream_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopDebugStream');
          const result = this.impl.stopDebugStream();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.VizMainReceiver = viz.mojom.VizMainReceiver;

viz.mojom.VizMainPtr = viz.mojom.VizMainRemote;
viz.mojom.VizMainRequest = viz.mojom.VizMainPendingReceiver;

