// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/viz_main.mojom
// Module: viz.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateFrameSinkManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.VizMain_CreateFrameSinkManager_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.VizMain_CreateGpuService_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.VizMain_SetRenderParams_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.VizMain_CreateInfoCollectionGpuService_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.VizMain_SetHostProcessId_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.VizMain_NotifyWorkloadIncrease_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.VizMain_StartDebugStream_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.VizMain_FilterDebugStream_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.VizMain_StopDebugStream_ParamsSpec);
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
          const params = decoder.decodeStructInline(viz.mojom.VizMain_CreateFrameSinkManager_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createFrameSinkManager');
          const result = this.impl.createFrameSinkManager(params.params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizMain_CreateGpuService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createGpuService');
          const result = this.impl.createGpuService(params.gpu_service, params.gpu_host, params.gpu_logging, params.discardable_memory_manager, params.use_shader_cache_shm_count, params.params);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizMain_SetRenderParams_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setRenderParams');
          const result = this.impl.setRenderParams(params.subpixel_rendering, params.text_contrast, params.text_gamma);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizMain_CreateInfoCollectionGpuService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createInfoCollectionGpuService');
          const result = this.impl.createInfoCollectionGpuService(params.info_collection_gpu_service);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizMain_SetHostProcessId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHostProcessId');
          const result = this.impl.setHostProcessId(params.pid);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizMain_NotifyWorkloadIncrease_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyWorkloadIncrease');
          const result = this.impl.notifyWorkloadIncrease();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizMain_StartDebugStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDebugStream');
          const result = this.impl.startDebugStream(params.viz_debug);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizMain_FilterDebugStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.filterDebugStream');
          const result = this.impl.filterDebugStream(params.filterData);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizMain_StopDebugStream_ParamsSpec.$.structSpec);
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

