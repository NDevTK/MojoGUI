// Auto-generated MojoJS binding
 // Source: chromium_src/services/viz/public/mojom/compositing/compositor_frame_sink.mojom
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.viz = mojo.internal.bindings.viz || {};
mojo.internal.bindings.viz.mojom = mojo.internal.bindings.viz.mojom || {};
mojo.internal.bindings.cc = mojo.internal.bindings.cc || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.viz.mojom.LayerContextSettingsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.CompositorFrameSinkParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.CompositorFrameSink = {};
mojo.internal.bindings.viz.mojom.CompositorFrameSink.$interfaceName = 'viz.mojom.CompositorFrameSink';
mojo.internal.bindings.viz.mojom.CompositorFrameSink_SetParams_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient = {};
mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient.$interfaceName = 'viz.mojom.CompositorFrameSinkClient';
mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec = { $: {} };

// Struct: LayerContextSettings
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.LayerContextSettingsSpec, 'viz.mojom.LayerContextSettings', [
      mojo.internal.StructField('arg_scrollbar_animator', 0, 0, mojo.internal.bindings.cc.mojom.ScrollbarAnimatorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scrollbar_fade_delay', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scrollbar_fade_duration', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scrollbar_thinning_duration', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_minimum_occlusion_tracking_size', 32, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_damaged_frame_limit', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_idle_thickness_scale', 44, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_top_controls_show_threshold', 48, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_top_controls_hide_threshold', 52, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_draw_mode_is_gpu', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_early_damage_check', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_edge_anti_aliasing', 56, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_backface_visibility_interop', 56, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_fluent_scrollbar', 56, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_fluent_overlay_scrollbar', 56, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: CompositorFrameSinkParams
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.CompositorFrameSinkParamsSpec, 'viz.mojom.CompositorFrameSinkParams', [
      mojo.internal.StructField('arg_wants_animate_only_begin_frames', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_auto_needs_begin_frame', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_no_compositor_frame_acks', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CompositorFrameSink
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.CompositorFrameSink_SetParams_ParamsSpec, 'viz.mojom.CompositorFrameSink_SetParams_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.mojo.internal.bindings.viz.mojom.CompositorFrameSinkParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec, 'viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_Params', [
      mojo.internal.StructField('arg_needs_begin_frame', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec, 'viz.mojom.CompositorFrameSink_SubmitCompositorFrame_Params', [
      mojo.internal.StructField('arg_local_surface_id', 0, 0, mojo.internal.bindings.viz.mojom.LocalSurfaceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame', 8, 0, mojo.internal.bindings.viz.mojom.CompositorFrameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hit_test_region_list', 16, 0, mojo.internal.bindings.viz.mojom.HitTestRegionListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_submit_time', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec, 'viz.mojom.CompositorFrameSink_DidNotProduceFrame_Params', [
      mojo.internal.StructField('arg_ack', 0, 0, mojo.internal.bindings.viz.mojom.BeginFrameAckSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec, 'viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec, 'viz.mojom.CompositorFrameSink_BindLayerContext_Params', [
      mojo.internal.StructField('arg_context', 0, 0, mojo.internal.bindings.viz.mojom.PendingLayerContextSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_settings', 8, 0, mojo.internal.bindings.mojo.internal.bindings.viz.mojom.LayerContextSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec, 'viz.mojom.CompositorFrameSink_SetThreads_Params', [
      mojo.internal.StructField('arg_threads', 0, 0, mojo.internal.Array(mojo.internal.bindings.viz.mojom.ThreadSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.viz.mojom.CompositorFrameSinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.viz.mojom.CompositorFrameSinkRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CompositorFrameSink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.viz.mojom.CompositorFrameSinkPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.viz.mojom.CompositorFrameSinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setParams(arg_params) {
    return this.$.setParams(arg_params);
  }
  setNeedsBeginFrame(arg_needs_begin_frame) {
    return this.$.setNeedsBeginFrame(arg_needs_begin_frame);
  }
  submitCompositorFrame(arg_local_surface_id, arg_frame, arg_hit_test_region_list, arg_submit_time) {
    return this.$.submitCompositorFrame(arg_local_surface_id, arg_frame, arg_hit_test_region_list, arg_submit_time);
  }
  didNotProduceFrame(arg_ack) {
    return this.$.didNotProduceFrame(arg_ack);
  }
  notifyNewLocalSurfaceIdExpectedWhilePaused() {
    return this.$.notifyNewLocalSurfaceIdExpectedWhilePaused();
  }
  bindLayerContext(arg_context, arg_settings) {
    return this.$.bindLayerContext(arg_context, arg_settings);
  }
  setThreads(arg_threads) {
    return this.$.setThreads(arg_threads);
  }
};

mojo.internal.bindings.viz.mojom.CompositorFrameSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CompositorFrameSink', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setParams(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.viz.mojom.CompositorFrameSink_SetParams_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  setNeedsBeginFrame(arg_needs_begin_frame) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec,
      null,
      [arg_needs_begin_frame],
      false);
  }

  submitCompositorFrame(arg_local_surface_id, arg_frame, arg_hit_test_region_list, arg_submit_time) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec,
      null,
      [arg_local_surface_id, arg_frame, arg_hit_test_region_list, arg_submit_time],
      false);
  }

  didNotProduceFrame(arg_ack) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec,
      null,
      [arg_ack],
      false);
  }

  notifyNewLocalSurfaceIdExpectedWhilePaused() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec,
      null,
      [],
      false);
  }

  bindLayerContext(arg_context, arg_settings) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec,
      null,
      [arg_context, arg_settings],
      false);
  }

  setThreads(arg_threads) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec,
      null,
      [arg_threads],
      false);
  }

};

mojo.internal.bindings.viz.mojom.CompositorFrameSink.getRemote = function() {
  let remote = new mojo.internal.bindings.viz.mojom.CompositorFrameSinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CompositorFrameSink',
    'context');
  return remote.$;
};

mojo.internal.bindings.viz.mojom.CompositorFrameSinkReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CompositorFrameSink', [
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
        
        // Try Method 0: SetParams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSink_SetParams_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetParams (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetNeedsBeginFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNeedsBeginFrame (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SubmitCompositorFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubmitCompositorFrame (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DidNotProduceFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidNotProduceFrame (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: NotifyNewLocalSurfaceIdExpectedWhilePaused
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyNewLocalSurfaceIdExpectedWhilePaused (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: BindLayerContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindLayerContext (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetThreads
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetThreads (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSink_SetParams_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setParams');
          const result = this.impl.setParams(params.arg_params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNeedsBeginFrame');
          const result = this.impl.setNeedsBeginFrame(params.arg_needs_begin_frame);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitCompositorFrame');
          const result = this.impl.submitCompositorFrame(params.arg_local_surface_id, params.arg_frame, params.arg_hit_test_region_list, params.arg_submit_time);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didNotProduceFrame');
          const result = this.impl.didNotProduceFrame(params.arg_ack);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyNewLocalSurfaceIdExpectedWhilePaused');
          const result = this.impl.notifyNewLocalSurfaceIdExpectedWhilePaused();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindLayerContext');
          const result = this.impl.bindLayerContext(params.arg_context, params.arg_settings);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setThreads');
          const result = this.impl.setThreads(params.arg_threads);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.viz.mojom.CompositorFrameSinkReceiver = mojo.internal.bindings.viz.mojom.CompositorFrameSinkReceiver;

mojo.internal.bindings.viz.mojom.CompositorFrameSinkPtr = mojo.internal.bindings.viz.mojom.CompositorFrameSinkRemote;
mojo.internal.bindings.viz.mojom.CompositorFrameSinkRequest = mojo.internal.bindings.viz.mojom.CompositorFrameSinkPendingReceiver;


// Interface: CompositorFrameSinkClient
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params', [
      mojo.internal.StructField('arg_resources', 0, 0, mojo.internal.Array(mojo.internal.bindings.viz.mojom.ReturnedResourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_OnBeginFrame_Params', [
      mojo.internal.StructField('arg_args', 0, 0, mojo.internal.bindings.viz.mojom.BeginFrameArgsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_details', 8, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.bindings.viz.mojom.FrameTimingDetailsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_resources', 16, 0, mojo.internal.Array(mojo.internal.bindings.viz.mojom.ReturnedResourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_Params', [
      mojo.internal.StructField('arg_paused', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_ReclaimResources_Params', [
      mojo.internal.StructField('arg_resources', 0, 0, mojo.internal.Array(mojo.internal.bindings.viz.mojom.ReturnedResourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_Params', [
      mojo.internal.StructField('arg_sequence_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_Params', [
      mojo.internal.StructField('arg_local_surface_id', 0, 0, mojo.internal.bindings.viz.mojom.LocalSurfaceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CompositorFrameSinkClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  didReceiveCompositorFrameAck(arg_resources) {
    return this.$.didReceiveCompositorFrameAck(arg_resources);
  }
  onBeginFrame(arg_args, arg_details, arg_resources) {
    return this.$.onBeginFrame(arg_args, arg_details, arg_resources);
  }
  onBeginFramePausedChanged(arg_paused) {
    return this.$.onBeginFramePausedChanged(arg_paused);
  }
  reclaimResources(arg_resources) {
    return this.$.reclaimResources(arg_resources);
  }
  onCompositorFrameTransitionDirectiveProcessed(arg_sequence_id) {
    return this.$.onCompositorFrameTransitionDirectiveProcessed(arg_sequence_id);
  }
  onSurfaceEvicted(arg_local_surface_id) {
    return this.$.onSurfaceEvicted(arg_local_surface_id);
  }
};

mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CompositorFrameSinkClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  didReceiveCompositorFrameAck(arg_resources) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec,
      null,
      [arg_resources],
      false);
  }

  onBeginFrame(arg_args, arg_details, arg_resources) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec,
      null,
      [arg_args, arg_details, arg_resources],
      false);
  }

  onBeginFramePausedChanged(arg_paused) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec,
      null,
      [arg_paused],
      false);
  }

  reclaimResources(arg_resources) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec,
      null,
      [arg_resources],
      false);
  }

  onCompositorFrameTransitionDirectiveProcessed(arg_sequence_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec,
      null,
      [arg_sequence_id],
      false);
  }

  onSurfaceEvicted(arg_local_surface_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec,
      null,
      [arg_local_surface_id],
      false);
  }

};

mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient.getRemote = function() {
  let remote = new mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CompositorFrameSinkClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CompositorFrameSinkClient', [
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
        
        // Try Method 0: DidReceiveCompositorFrameAck
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidReceiveCompositorFrameAck (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnBeginFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBeginFrame (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnBeginFramePausedChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBeginFramePausedChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ReclaimResources
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReclaimResources (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnCompositorFrameTransitionDirectiveProcessed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCompositorFrameTransitionDirectiveProcessed (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnSurfaceEvicted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSurfaceEvicted (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didReceiveCompositorFrameAck');
          const result = this.impl.didReceiveCompositorFrameAck(params.arg_resources);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBeginFrame');
          const result = this.impl.onBeginFrame(params.arg_args, params.arg_details, params.arg_resources);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBeginFramePausedChanged');
          const result = this.impl.onBeginFramePausedChanged(params.arg_paused);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reclaimResources');
          const result = this.impl.reclaimResources(params.arg_resources);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCompositorFrameTransitionDirectiveProcessed');
          const result = this.impl.onCompositorFrameTransitionDirectiveProcessed(params.arg_sequence_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSurfaceEvicted');
          const result = this.impl.onSurfaceEvicted(params.arg_local_surface_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientReceiver = mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientReceiver;

mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientPtr = mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientRemote;
mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientRequest = mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientPendingReceiver;

