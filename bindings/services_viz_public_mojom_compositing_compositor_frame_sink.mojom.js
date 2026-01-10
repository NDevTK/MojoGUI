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
var viz = viz || {};
viz.mojom = viz.mojom || {};
var cc = cc || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

viz.mojom.LayerContextSettingsSpec = { $: {} };
viz.mojom.CompositorFrameSinkParamsSpec = { $: {} };
viz.mojom.CompositorFrameSink = {};
viz.mojom.CompositorFrameSink.$interfaceName = 'viz.mojom.CompositorFrameSink';
viz.mojom.CompositorFrameSink_SetParams_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSinkClient = {};
viz.mojom.CompositorFrameSinkClient.$interfaceName = 'viz.mojom.CompositorFrameSinkClient';
viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec = { $: {} };

// Struct: LayerContextSettings
mojo.internal.Struct(
    viz.mojom.LayerContextSettingsSpec, 'viz.mojom.LayerContextSettings', [
      mojo.internal.StructField('scrollbar_animator', 0, 0, cc.mojom.ScrollbarAnimatorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scrollbar_fade_delay', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scrollbar_fade_duration', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scrollbar_thinning_duration', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('minimum_occlusion_tracking_size', 32, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('damaged_frame_limit', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('idle_thickness_scale', 44, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('top_controls_show_threshold', 48, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('top_controls_hide_threshold', 52, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('draw_mode_is_gpu', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_early_damage_check', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_edge_anti_aliasing', 56, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_backface_visibility_interop', 56, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_fluent_scrollbar', 56, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_fluent_overlay_scrollbar', 56, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: CompositorFrameSinkParams
mojo.internal.Struct(
    viz.mojom.CompositorFrameSinkParamsSpec, 'viz.mojom.CompositorFrameSinkParams', [
      mojo.internal.StructField('wants_animate_only_begin_frames', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('auto_needs_begin_frame', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('no_compositor_frame_acks', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CompositorFrameSink
mojo.internal.Struct(
    viz.mojom.CompositorFrameSink_SetParams_ParamsSpec, 'viz.mojom.CompositorFrameSink_SetParams_Params', [
      mojo.internal.StructField('params', 0, 0, viz.mojom.CompositorFrameSinkParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec, 'viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_Params', [
      mojo.internal.StructField('needs_begin_frame', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec, 'viz.mojom.CompositorFrameSink_SubmitCompositorFrame_Params', [
      mojo.internal.StructField('local_surface_id', 0, 0, viz.mojom.LocalSurfaceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame', 8, 0, viz.mojom.CompositorFrameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hit_test_region_list', 16, 0, viz.mojom.HitTestRegionListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('submit_time', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec, 'viz.mojom.CompositorFrameSink_DidNotProduceFrame_Params', [
      mojo.internal.StructField('ack', 0, 0, viz.mojom.BeginFrameAckSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec, 'viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec, 'viz.mojom.CompositorFrameSink_BindLayerContext_Params', [
      mojo.internal.StructField('context', 0, 0, viz.mojom.PendingLayerContextSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('settings', 8, 0, viz.mojom.LayerContextSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec, 'viz.mojom.CompositorFrameSink_SetThreads_Params', [
      mojo.internal.StructField('threads', 0, 0, mojo.internal.Array(viz.mojom.ThreadSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.CompositorFrameSinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.CompositorFrameSinkRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CompositorFrameSink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.CompositorFrameSinkPendingReceiver,
      handle);
    this.$ = new viz.mojom.CompositorFrameSinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.CompositorFrameSinkRemoteCallHandler = class {
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

  setParams(params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.CompositorFrameSink_SetParams_ParamsSpec,
      null,
      [params],
      false);
  }

  setNeedsBeginFrame(needs_begin_frame) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec,
      null,
      [needs_begin_frame],
      false);
  }

  submitCompositorFrame(local_surface_id, frame, hit_test_region_list, submit_time) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec,
      null,
      [local_surface_id, frame, hit_test_region_list, submit_time],
      false);
  }

  didNotProduceFrame(ack) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec,
      null,
      [ack],
      false);
  }

  notifyNewLocalSurfaceIdExpectedWhilePaused() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec,
      null,
      [],
      false);
  }

  bindLayerContext(context, settings) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec,
      null,
      [context, settings],
      false);
  }

  setThreads(threads) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec,
      null,
      [threads],
      false);
  }

};

viz.mojom.CompositorFrameSink.getRemote = function() {
  let remote = new viz.mojom.CompositorFrameSinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CompositorFrameSink',
    'context');
  return remote.$;
};

viz.mojom.CompositorFrameSinkReceiver = class {
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
             decoder.decodeStructInline(viz.mojom.CompositorFrameSink_SetParams_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec);
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
          const params = decoder.decodeStructInline(viz.mojom.CompositorFrameSink_SetParams_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setParams');
          const result = this.impl.setParams(params.params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNeedsBeginFrame');
          const result = this.impl.setNeedsBeginFrame(params.needs_begin_frame);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitCompositorFrame');
          const result = this.impl.submitCompositorFrame(params.local_surface_id, params.frame, params.hit_test_region_list, params.submit_time);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didNotProduceFrame');
          const result = this.impl.didNotProduceFrame(params.ack);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyNewLocalSurfaceIdExpectedWhilePaused');
          const result = this.impl.notifyNewLocalSurfaceIdExpectedWhilePaused();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindLayerContext');
          const result = this.impl.bindLayerContext(params.context, params.settings);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setThreads');
          const result = this.impl.setThreads(params.threads);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.CompositorFrameSinkReceiver = viz.mojom.CompositorFrameSinkReceiver;

viz.mojom.CompositorFrameSinkPtr = viz.mojom.CompositorFrameSinkRemote;
viz.mojom.CompositorFrameSinkRequest = viz.mojom.CompositorFrameSinkPendingReceiver;


// Interface: CompositorFrameSinkClient
mojo.internal.Struct(
    viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params', [
      mojo.internal.StructField('resources', 0, 0, mojo.internal.Array(viz.mojom.ReturnedResourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_OnBeginFrame_Params', [
      mojo.internal.StructField('args', 0, 0, viz.mojom.BeginFrameArgsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('details', 8, 0, mojo.internal.Map(mojo.internal.Uint32, viz.mojom.FrameTimingDetailsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('resources', 16, 0, mojo.internal.Array(viz.mojom.ReturnedResourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_Params', [
      mojo.internal.StructField('paused', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_ReclaimResources_Params', [
      mojo.internal.StructField('resources', 0, 0, mojo.internal.Array(viz.mojom.ReturnedResourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_Params', [
      mojo.internal.StructField('sequence_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_Params', [
      mojo.internal.StructField('local_surface_id', 0, 0, viz.mojom.LocalSurfaceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.CompositorFrameSinkClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.CompositorFrameSinkClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CompositorFrameSinkClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.CompositorFrameSinkClientPendingReceiver,
      handle);
    this.$ = new viz.mojom.CompositorFrameSinkClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.CompositorFrameSinkClientRemoteCallHandler = class {
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

  didReceiveCompositorFrameAck(resources) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec,
      null,
      [resources],
      false);
  }

  onBeginFrame(args, details, resources) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec,
      null,
      [args, details, resources],
      false);
  }

  onBeginFramePausedChanged(paused) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec,
      null,
      [paused],
      false);
  }

  reclaimResources(resources) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec,
      null,
      [resources],
      false);
  }

  onCompositorFrameTransitionDirectiveProcessed(sequence_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec,
      null,
      [sequence_id],
      false);
  }

  onSurfaceEvicted(local_surface_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec,
      null,
      [local_surface_id],
      false);
  }

};

viz.mojom.CompositorFrameSinkClient.getRemote = function() {
  let remote = new viz.mojom.CompositorFrameSinkClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CompositorFrameSinkClient',
    'context');
  return remote.$;
};

viz.mojom.CompositorFrameSinkClientReceiver = class {
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
             decoder.decodeStructInline(viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec);
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
             decoder.decodeStructInline(viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec);
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
          const params = decoder.decodeStructInline(viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didReceiveCompositorFrameAck');
          const result = this.impl.didReceiveCompositorFrameAck(params.resources);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBeginFrame');
          const result = this.impl.onBeginFrame(params.args, params.details, params.resources);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBeginFramePausedChanged');
          const result = this.impl.onBeginFramePausedChanged(params.paused);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reclaimResources');
          const result = this.impl.reclaimResources(params.resources);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCompositorFrameTransitionDirectiveProcessed');
          const result = this.impl.onCompositorFrameTransitionDirectiveProcessed(params.sequence_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSurfaceEvicted');
          const result = this.impl.onSurfaceEvicted(params.local_surface_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.CompositorFrameSinkClientReceiver = viz.mojom.CompositorFrameSinkClientReceiver;

viz.mojom.CompositorFrameSinkClientPtr = viz.mojom.CompositorFrameSinkClientRemote;
viz.mojom.CompositorFrameSinkClientRequest = viz.mojom.CompositorFrameSinkClientPendingReceiver;

