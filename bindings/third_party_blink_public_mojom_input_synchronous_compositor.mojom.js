// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/input/synchronous_compositor.mojom
 // Module: blink.mojom

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
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.viz = mojo.internal.bindings.viz || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.blink.mojom.SyncCompositorDemandDrawHwParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SyncCompositorDemandDrawSwParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SyncCompositorCommonRendererParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositor = {};
mojo.internal.bindings.blink.mojom.SynchronousCompositor.$interfaceName = 'blink.mojom.SynchronousCompositor';
mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawHwAsync_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawHw_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawHw_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetSharedMemory_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetSharedMemory_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawSw_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawSw_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositor_WillSkipDraw_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositor_ZeroSharedMemory_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositor_ZoomBy_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositor_ZoomBy_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetMemoryPolicy_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositor_ReclaimResources_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositor_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetScroll_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositor_BeginFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetBeginFrameSourcePaused_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositorHost = {};
mojo.internal.bindings.blink.mojom.SynchronousCompositorHost.$interfaceName = 'blink.mojom.SynchronousCompositorHost';
mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_LayerTreeFrameSinkCreated_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_UpdateState_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_SetNeedsBeginFrames_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_SetThreads_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHost = {};
mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHost.$interfaceName = 'blink.mojom.SynchronousCompositorControlHost';
mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHost_ReturnFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHost_BeginFrameResponse_ParamsSpec = { $: {} };

// Struct: SyncCompositorDemandDrawHwParams
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SyncCompositorDemandDrawHwParamsSpec, 'blink.mojom.SyncCompositorDemandDrawHwParams', [
      mojo.internal.StructField('arg_viewport_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_viewport_rect_for_tile_priority', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_transform_for_tile_priority', 16, 0, mojo.internal.bindings.gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_need_new_local_surface_id', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SyncCompositorDemandDrawSwParams
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SyncCompositorDemandDrawSwParamsSpec, 'blink.mojom.SyncCompositorDemandDrawSwParams', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_clip', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_transform', 16, 0, mojo.internal.bindings.gfx.mojom.TransformSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SyncCompositorCommonRendererParams
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SyncCompositorCommonRendererParamsSpec, 'blink.mojom.SyncCompositorCommonRendererParams', [
      mojo.internal.StructField('arg_total_scroll_offset', 0, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_scroll_offset', 8, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scrollable_size', 16, 0, mojo.internal.bindings.gfx.mojom.SizeFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_version', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_page_scale_factor', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_min_page_scale_factor', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_page_scale_factor', 36, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_need_invalidate_count', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_did_activate_pending_tree_count', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_invalidate_needs_draw', 48, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: SynchronousCompositor
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawHwAsync_ParamsSpec, 'blink.mojom.SynchronousCompositor_DemandDrawHwAsync_Params', [
      mojo.internal.StructField('arg_draw_params', 0, 0, mojo.internal.bindings.blink.mojom.SyncCompositorDemandDrawHwParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawHw_ParamsSpec, 'blink.mojom.SynchronousCompositor_DemandDrawHw_Params', [
      mojo.internal.StructField('arg_draw_params', 0, 0, mojo.internal.bindings.blink.mojom.SyncCompositorDemandDrawHwParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawHw_ResponseParamsSpec, 'blink.mojom.SynchronousCompositor_DemandDrawHw_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.SyncCompositorCommonRendererParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_local_surface_id', 8, 0, mojo.internal.bindings.viz.mojom.LocalSurfaceIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_frame', 16, 0, mojo.internal.bindings.viz.mojom.CompositorFrameSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_hit_test_region_list', 24, 0, mojo.internal.bindings.viz.mojom.HitTestRegionListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_layer_tree_frame_sink_id', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_metadata_version', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetSharedMemory_ParamsSpec, 'blink.mojom.SynchronousCompositor_SetSharedMemory_Params', [
      mojo.internal.StructField('arg_shm_region', 0, 0, mojo.internal.bindings.mojo_base.mojom.WritableSharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetSharedMemory_ResponseParamsSpec, 'blink.mojom.SynchronousCompositor_SetSharedMemory_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.SyncCompositorCommonRendererParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawSw_ParamsSpec, 'blink.mojom.SynchronousCompositor_DemandDrawSw_Params', [
      mojo.internal.StructField('arg_draw_params', 0, 0, mojo.internal.bindings.blink.mojom.SyncCompositorDemandDrawSwParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawSw_ResponseParamsSpec, 'blink.mojom.SynchronousCompositor_DemandDrawSw_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.SyncCompositorCommonRendererParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_meta_data', 8, 0, mojo.internal.bindings.viz.mojom.CompositorFrameMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_metadata_version', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositor_WillSkipDraw_ParamsSpec, 'blink.mojom.SynchronousCompositor_WillSkipDraw_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositor_ZeroSharedMemory_ParamsSpec, 'blink.mojom.SynchronousCompositor_ZeroSharedMemory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositor_ZoomBy_ParamsSpec, 'blink.mojom.SynchronousCompositor_ZoomBy_Params', [
      mojo.internal.StructField('arg_anchor', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_delta', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositor_ZoomBy_ResponseParamsSpec, 'blink.mojom.SynchronousCompositor_ZoomBy_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.SyncCompositorCommonRendererParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetMemoryPolicy_ParamsSpec, 'blink.mojom.SynchronousCompositor_SetMemoryPolicy_Params', [
      mojo.internal.StructField('arg_bytes_limit', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositor_ReclaimResources_ParamsSpec, 'blink.mojom.SynchronousCompositor_ReclaimResources_Params', [
      mojo.internal.StructField('arg_resources', 0, 0, mojo.internal.Array(mojo.internal.bindings.viz.mojom.ReturnedResourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_layer_tree_frame_sink_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositor_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec, 'blink.mojom.SynchronousCompositor_OnCompositorFrameTransitionDirectiveProcessed_Params', [
      mojo.internal.StructField('arg_layer_tree_frame_sink_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sequence_id', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetScroll_ParamsSpec, 'blink.mojom.SynchronousCompositor_SetScroll_Params', [
      mojo.internal.StructField('arg_offset', 0, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositor_BeginFrame_ParamsSpec, 'blink.mojom.SynchronousCompositor_BeginFrame_Params', [
      mojo.internal.StructField('arg_args', 0, 0, mojo.internal.bindings.viz.mojom.BeginFrameArgsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_timing_details', 8, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.bindings.viz.mojom.FrameTimingDetailsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetBeginFrameSourcePaused_ParamsSpec, 'blink.mojom.SynchronousCompositor_SetBeginFrameSourcePaused_Params', [
      mojo.internal.StructField('arg_paused', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.SynchronousCompositorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.SynchronousCompositorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SynchronousCompositor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.SynchronousCompositorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.SynchronousCompositorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  demandDrawHwAsync(arg_draw_params) {
    return this.$.demandDrawHwAsync(arg_draw_params);
  }
  demandDrawHw(arg_draw_params) {
    return this.$.demandDrawHw(arg_draw_params);
  }
  setSharedMemory(arg_shm_region) {
    return this.$.setSharedMemory(arg_shm_region);
  }
  demandDrawSw(arg_draw_params) {
    return this.$.demandDrawSw(arg_draw_params);
  }
  willSkipDraw() {
    return this.$.willSkipDraw();
  }
  zeroSharedMemory() {
    return this.$.zeroSharedMemory();
  }
  zoomBy(arg_delta, arg_anchor) {
    return this.$.zoomBy(arg_delta, arg_anchor);
  }
  setMemoryPolicy(arg_bytes_limit) {
    return this.$.setMemoryPolicy(arg_bytes_limit);
  }
  reclaimResources(arg_layer_tree_frame_sink_id, arg_resources) {
    return this.$.reclaimResources(arg_layer_tree_frame_sink_id, arg_resources);
  }
  onCompositorFrameTransitionDirectiveProcessed(arg_layer_tree_frame_sink_id, arg_sequence_id) {
    return this.$.onCompositorFrameTransitionDirectiveProcessed(arg_layer_tree_frame_sink_id, arg_sequence_id);
  }
  setScroll(arg_offset) {
    return this.$.setScroll(arg_offset);
  }
  beginFrame(arg_args, arg_timing_details) {
    return this.$.beginFrame(arg_args, arg_timing_details);
  }
  setBeginFrameSourcePaused(arg_paused) {
    return this.$.setBeginFrameSourcePaused(arg_paused);
  }
};

mojo.internal.bindings.blink.mojom.SynchronousCompositorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SynchronousCompositor', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  demandDrawHwAsync(arg_draw_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawHwAsync_ParamsSpec,
      null,
      [arg_draw_params],
      false);
  }

  demandDrawHw(arg_draw_params) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawHw_ParamsSpec,
      mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawHw_ResponseParamsSpec,
      [arg_draw_params],
      false);
  }

  setSharedMemory(arg_shm_region) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetSharedMemory_ParamsSpec,
      mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetSharedMemory_ResponseParamsSpec,
      [arg_shm_region],
      false);
  }

  demandDrawSw(arg_draw_params) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawSw_ParamsSpec,
      mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawSw_ResponseParamsSpec,
      [arg_draw_params],
      false);
  }

  willSkipDraw() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositor_WillSkipDraw_ParamsSpec,
      null,
      [],
      false);
  }

  zeroSharedMemory() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositor_ZeroSharedMemory_ParamsSpec,
      null,
      [],
      false);
  }

  zoomBy(arg_delta, arg_anchor) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositor_ZoomBy_ParamsSpec,
      mojo.internal.bindings.blink.mojom.SynchronousCompositor_ZoomBy_ResponseParamsSpec,
      [arg_delta, arg_anchor],
      false);
  }

  setMemoryPolicy(arg_bytes_limit) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetMemoryPolicy_ParamsSpec,
      null,
      [arg_bytes_limit],
      false);
  }

  reclaimResources(arg_layer_tree_frame_sink_id, arg_resources) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositor_ReclaimResources_ParamsSpec,
      null,
      [arg_layer_tree_frame_sink_id, arg_resources],
      false);
  }

  onCompositorFrameTransitionDirectiveProcessed(arg_layer_tree_frame_sink_id, arg_sequence_id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositor_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec,
      null,
      [arg_layer_tree_frame_sink_id, arg_sequence_id],
      false);
  }

  setScroll(arg_offset) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetScroll_ParamsSpec,
      null,
      [arg_offset],
      false);
  }

  beginFrame(arg_args, arg_timing_details) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositor_BeginFrame_ParamsSpec,
      null,
      [arg_args, arg_timing_details],
      false);
  }

  setBeginFrameSourcePaused(arg_paused) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetBeginFrameSourcePaused_ParamsSpec,
      null,
      [arg_paused],
      false);
  }

};

mojo.internal.bindings.blink.mojom.SynchronousCompositor.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.SynchronousCompositorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SynchronousCompositor',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.SynchronousCompositorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SynchronousCompositor', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: DemandDrawHwAsync
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawHwAsync_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DemandDrawHwAsync (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DemandDrawHw
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawHw_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DemandDrawHw (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetSharedMemory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetSharedMemory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSharedMemory (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DemandDrawSw
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawSw_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DemandDrawSw (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: WillSkipDraw
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_WillSkipDraw_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WillSkipDraw (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ZeroSharedMemory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_ZeroSharedMemory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ZeroSharedMemory (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ZoomBy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_ZoomBy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ZoomBy (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetMemoryPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetMemoryPolicy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMemoryPolicy (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ReclaimResources
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_ReclaimResources_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReclaimResources (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnCompositorFrameTransitionDirectiveProcessed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCompositorFrameTransitionDirectiveProcessed (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetScroll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetScroll_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetScroll (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: BeginFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_BeginFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BeginFrame (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetBeginFrameSourcePaused
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetBeginFrameSourcePaused_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBeginFrameSourcePaused (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawHwAsync_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.demandDrawHwAsync');
          const result = this.impl.demandDrawHwAsync(params.arg_draw_params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawHw_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.demandDrawHw');
          const result = this.impl.demandDrawHw(params.arg_draw_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawHw_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DemandDrawHw FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetSharedMemory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSharedMemory');
          const result = this.impl.setSharedMemory(params.arg_shm_region);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetSharedMemory_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetSharedMemory FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawSw_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.demandDrawSw');
          const result = this.impl.demandDrawSw(params.arg_draw_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.SynchronousCompositor_DemandDrawSw_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DemandDrawSw FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_WillSkipDraw_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.willSkipDraw');
          const result = this.impl.willSkipDraw();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_ZeroSharedMemory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.zeroSharedMemory');
          const result = this.impl.zeroSharedMemory();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_ZoomBy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.zoomBy');
          const result = this.impl.zoomBy(params.arg_delta, params.arg_anchor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.SynchronousCompositor_ZoomBy_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ZoomBy FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetMemoryPolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMemoryPolicy');
          const result = this.impl.setMemoryPolicy(params.arg_bytes_limit);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_ReclaimResources_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reclaimResources');
          const result = this.impl.reclaimResources(params.arg_layer_tree_frame_sink_id, params.arg_resources);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCompositorFrameTransitionDirectiveProcessed');
          const result = this.impl.onCompositorFrameTransitionDirectiveProcessed(params.arg_layer_tree_frame_sink_id, params.arg_sequence_id);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetScroll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setScroll');
          const result = this.impl.setScroll(params.arg_offset);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_BeginFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.beginFrame');
          const result = this.impl.beginFrame(params.arg_args, params.arg_timing_details);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositor_SetBeginFrameSourcePaused_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBeginFrameSourcePaused');
          const result = this.impl.setBeginFrameSourcePaused(params.arg_paused);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.SynchronousCompositorReceiver = mojo.internal.bindings.blink.mojom.SynchronousCompositorReceiver;

mojo.internal.bindings.blink.mojom.SynchronousCompositorPtr = mojo.internal.bindings.blink.mojom.SynchronousCompositorRemote;
mojo.internal.bindings.blink.mojom.SynchronousCompositorRequest = mojo.internal.bindings.blink.mojom.SynchronousCompositorPendingReceiver;


// Interface: SynchronousCompositorHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_LayerTreeFrameSinkCreated_ParamsSpec, 'blink.mojom.SynchronousCompositorHost_LayerTreeFrameSinkCreated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_UpdateState_ParamsSpec, 'blink.mojom.SynchronousCompositorHost_UpdateState_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.blink.mojom.SyncCompositorCommonRendererParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_SetNeedsBeginFrames_ParamsSpec, 'blink.mojom.SynchronousCompositorHost_SetNeedsBeginFrames_Params', [
      mojo.internal.StructField('arg_needs_begin_frames', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_SetThreads_ParamsSpec, 'blink.mojom.SynchronousCompositorHost_SetThreads_Params', [
      mojo.internal.StructField('arg_threads', 0, 0, mojo.internal.Array(mojo.internal.bindings.viz.mojom.ThreadSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.SynchronousCompositorHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.SynchronousCompositorHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SynchronousCompositorHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.SynchronousCompositorHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.SynchronousCompositorHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  layerTreeFrameSinkCreated() {
    return this.$.layerTreeFrameSinkCreated();
  }
  updateState(arg_params) {
    return this.$.updateState(arg_params);
  }
  setNeedsBeginFrames(arg_needs_begin_frames) {
    return this.$.setNeedsBeginFrames(arg_needs_begin_frames);
  }
  setThreads(arg_threads) {
    return this.$.setThreads(arg_threads);
  }
};

mojo.internal.bindings.blink.mojom.SynchronousCompositorHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SynchronousCompositorHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  layerTreeFrameSinkCreated() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_LayerTreeFrameSinkCreated_ParamsSpec,
      null,
      [],
      false);
  }

  updateState(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_UpdateState_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  setNeedsBeginFrames(arg_needs_begin_frames) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_SetNeedsBeginFrames_ParamsSpec,
      null,
      [arg_needs_begin_frames],
      false);
  }

  setThreads(arg_threads) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_SetThreads_ParamsSpec,
      null,
      [arg_threads],
      false);
  }

};

mojo.internal.bindings.blink.mojom.SynchronousCompositorHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.SynchronousCompositorHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SynchronousCompositorHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.SynchronousCompositorHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SynchronousCompositorHost', [
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
        
        // Try Method 0: LayerTreeFrameSinkCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_LayerTreeFrameSinkCreated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LayerTreeFrameSinkCreated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_UpdateState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetNeedsBeginFrames
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_SetNeedsBeginFrames_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNeedsBeginFrames (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetThreads
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_SetThreads_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetThreads (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_LayerTreeFrameSinkCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.layerTreeFrameSinkCreated');
          const result = this.impl.layerTreeFrameSinkCreated();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_UpdateState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateState');
          const result = this.impl.updateState(params.arg_params);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_SetNeedsBeginFrames_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNeedsBeginFrames');
          const result = this.impl.setNeedsBeginFrames(params.arg_needs_begin_frames);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositorHost_SetThreads_ParamsSpec.$.structSpec);
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

mojo.internal.bindings.blink.mojom.SynchronousCompositorHostReceiver = mojo.internal.bindings.blink.mojom.SynchronousCompositorHostReceiver;

mojo.internal.bindings.blink.mojom.SynchronousCompositorHostPtr = mojo.internal.bindings.blink.mojom.SynchronousCompositorHostRemote;
mojo.internal.bindings.blink.mojom.SynchronousCompositorHostRequest = mojo.internal.bindings.blink.mojom.SynchronousCompositorHostPendingReceiver;


// Interface: SynchronousCompositorControlHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHost_ReturnFrame_ParamsSpec, 'blink.mojom.SynchronousCompositorControlHost_ReturnFrame_Params', [
      mojo.internal.StructField('arg_local_surface_id', 0, 0, mojo.internal.bindings.viz.mojom.LocalSurfaceIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_frame', 8, 0, mojo.internal.bindings.viz.mojom.CompositorFrameSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_hit_test_region_list', 16, 0, mojo.internal.bindings.viz.mojom.HitTestRegionListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_layer_tree_frame_sink_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_metadata_version', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHost_BeginFrameResponse_ParamsSpec, 'blink.mojom.SynchronousCompositorControlHost_BeginFrameResponse_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.blink.mojom.SyncCompositorCommonRendererParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SynchronousCompositorControlHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  returnFrame(arg_layer_tree_frame_sink_id, arg_metadata_version, arg_local_surface_id, arg_frame, arg_hit_test_region_list) {
    return this.$.returnFrame(arg_layer_tree_frame_sink_id, arg_metadata_version, arg_local_surface_id, arg_frame, arg_hit_test_region_list);
  }
  beginFrameResponse(arg_params) {
    return this.$.beginFrameResponse(arg_params);
  }
};

mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SynchronousCompositorControlHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  returnFrame(arg_layer_tree_frame_sink_id, arg_metadata_version, arg_local_surface_id, arg_frame, arg_hit_test_region_list) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHost_ReturnFrame_ParamsSpec,
      null,
      [arg_layer_tree_frame_sink_id, arg_metadata_version, arg_local_surface_id, arg_frame, arg_hit_test_region_list],
      false);
  }

  beginFrameResponse(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHost_BeginFrameResponse_ParamsSpec,
      null,
      [arg_params],
      false);
  }

};

mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SynchronousCompositorControlHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SynchronousCompositorControlHost', [
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
        
        // Try Method 0: ReturnFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHost_ReturnFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReturnFrame (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BeginFrameResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHost_BeginFrameResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BeginFrameResponse (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHost_ReturnFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.returnFrame');
          const result = this.impl.returnFrame(params.arg_layer_tree_frame_sink_id, params.arg_metadata_version, params.arg_local_surface_id, params.arg_frame, params.arg_hit_test_region_list);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHost_BeginFrameResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.beginFrameResponse');
          const result = this.impl.beginFrameResponse(params.arg_params);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHostReceiver = mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHostReceiver;

mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHostPtr = mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHostRemote;
mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHostRequest = mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHostPendingReceiver;

