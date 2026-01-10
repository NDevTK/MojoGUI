// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/layer_context.mojom
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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
var skia = skia || {};
var gfx = gfx || {};

viz.mojom.TypeSpec = { $: mojo.internal.Enum() };
viz.mojom.TransferableUIResourceRequestSpec = { $: {} };
viz.mojom.LayerTreeUpdateSpec = { $: {} };
viz.mojom.PendingLayerContextSpec = { $: {} };
viz.mojom.LayerContext = {};
viz.mojom.LayerContext.$interfaceName = 'viz.mojom.LayerContext';
viz.mojom.LayerContext_SetVisible_ParamsSpec = { $: {} };
viz.mojom.LayerContext_UpdateDisplayTree_ParamsSpec = { $: {} };
viz.mojom.LayerContext_UpdateDisplayTiling_ParamsSpec = { $: {} };
viz.mojom.LayerContextClient = {};
viz.mojom.LayerContextClient.$interfaceName = 'viz.mojom.LayerContextClient';
viz.mojom.LayerContextClient_OnRequestCommitForFrame_ParamsSpec = { $: {} };
viz.mojom.LayerContextClient_OnTilingsReadyForCleanup_ParamsSpec = { $: {} };

// Enum: Type
viz.mojom.Type = {
  kCreate: 0,
  kDelete: 1,
};

// Struct: TransferableUIResourceRequest
mojo.internal.Struct(
    viz.mojom.TransferableUIResourceRequestSpec, 'viz.mojom.TransferableUIResourceRequest', [
      mojo.internal.StructField('kCreate', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LayerTreeUpdate
mojo.internal.Struct(
    viz.mojom.LayerTreeUpdateSpec, 'viz.mojom.LayerTreeUpdate', [
      mojo.internal.StructField('begin_frame_args', 0, 0, viz.mojom.BeginFrameArgsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trace_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('primary_main_frame_item_sequence_number', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('selection', 24, 0, cc.mojom.LayerSelectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_viewport', 32, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_color_spaces', 40, 0, gfx.mojom.DisplayColorSpacesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_surface_id_from_parent', 48, 0, viz.mojom.LocalSurfaceIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('current_local_surface_id', 56, 0, viz.mojom.LocalSurfaceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_local_surface_id', 64, 0, viz.mojom.LocalSurfaceIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('background_color', 72, 0, skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('viewport_damage_rect', 80, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('debug_state', 88, 0, cc.mojom.LayerTreeDebugStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_transform_hint', 96, 0, gfx.mojom.OverlayTransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('browser_controls_params', 104, 0, cc.mojom.BrowserControlsParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('browser_controls_offset_tag_modifications', 112, 0, cc.mojom.BrowserControlsOffsetTagModificationsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ui_resource_requests', 120, 0, mojo.internal.Array(viz.mojom.TransferableUIResourceRequestSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('layers', 128, 0, mojo.internal.Array(viz.mojom.LayerSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('layer_order', 136, 0, mojo.internal.Array(mojo.internal.Int32, false), null, true, 0, undefined),
      mojo.internal.StructField('transform_tree_update', 144, 0, viz.mojom.TransformTreeUpdateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('scroll_tree_update', 152, 0, viz.mojom.ScrollTreeUpdateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('transform_nodes', 160, 0, mojo.internal.Array(viz.mojom.TransformNodeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('clip_nodes', 168, 0, mojo.internal.Array(viz.mojom.ClipNodeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('effect_nodes', 176, 0, mojo.internal.Array(viz.mojom.EffectNodeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('scroll_nodes', 184, 0, mojo.internal.Array(viz.mojom.ScrollNodeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('tilings', 192, 0, mojo.internal.Array(viz.mojom.TilingSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('surface_ranges', 200, 0, mojo.internal.Array(viz.mojom.SurfaceRangeSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('view_transition_requests', 208, 0, mojo.internal.Array(viz.mojom.ViewTransitionRequestSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('animation_timelines', 216, 0, mojo.internal.Array(viz.mojom.AnimationTimelineSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('removed_animation_timelines', 224, 0, mojo.internal.Array(mojo.internal.Int32, false), null, true, 0, undefined),
      mojo.internal.StructField('delegated_ink_metadata', 232, 0, gfx.mojom.DelegatedInkMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('source_frame_number', 240, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('page_scale_factor', 244, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('min_page_scale_factor', 248, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('max_page_scale_factor', 252, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('external_page_scale_factor', 256, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 260, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('painted_device_scale_factor', 264, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('next_frame_token', 268, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('overscroll_elasticity_transform', 272, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('page_scale_transform', 276, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('inner_scroll', 280, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('outer_clip', 284, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('outer_scroll', 288, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('max_safe_area_inset_bottom', 292, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('top_controls_shown_ratio', 296, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('bottom_controls_shown_ratio', 300, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('num_transform_nodes', 304, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('num_clip_nodes', 308, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('num_effect_nodes', 312, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('num_scroll_nodes', 316, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('damage_reasons_bit_mask', 320, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('send_frame_token_to_embedder', 324, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('full_tree_damaged', 324, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('frame_has_damage', 324, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_handling_interaction', 324, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('may_throttle_if_undrawn_frames', 324, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_viewport_mobile_optimized', 324, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 336]]);

// Struct: PendingLayerContext
mojo.internal.Struct(
    viz.mojom.PendingLayerContextSpec, 'viz.mojom.PendingLayerContext', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: LayerContext
mojo.internal.Struct(
    viz.mojom.LayerContext_SetVisible_ParamsSpec, 'viz.mojom.LayerContext_SetVisible_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.LayerContext_UpdateDisplayTree_ParamsSpec, 'viz.mojom.LayerContext_UpdateDisplayTree_Params', [
      mojo.internal.StructField('update', 0, 0, viz.mojom.LayerTreeUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.LayerContext_UpdateDisplayTiling_ParamsSpec, 'viz.mojom.LayerContext_UpdateDisplayTiling_Params', [
      mojo.internal.StructField('tiling', 0, 0, viz.mojom.TilingSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.LayerContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.LayerContextRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.LayerContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.LayerContextPendingReceiver,
      handle);
    this.$ = new viz.mojom.LayerContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.LayerContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LayerContext', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setVisible(visible) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.LayerContext_SetVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  updateDisplayTree(update) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.LayerContext_UpdateDisplayTree_ParamsSpec,
      null,
      [update],
      false);
  }

  updateDisplayTiling(tiling) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      viz.mojom.LayerContext_UpdateDisplayTiling_ParamsSpec,
      null,
      [tiling],
      false);
  }

};

viz.mojom.LayerContext.getRemote = function() {
  let remote = new viz.mojom.LayerContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.LayerContext',
    'context');
  return remote.$;
};

viz.mojom.LayerContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LayerContext', [
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
        
        // Try Method 0: SetVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.LayerContext_SetVisible_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVisible (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateDisplayTree
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.LayerContext_UpdateDisplayTree_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateDisplayTree (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateDisplayTiling
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.LayerContext_UpdateDisplayTiling_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateDisplayTiling (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(viz.mojom.LayerContext_SetVisible_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setVisible');
          const result = this.impl.setVisible(params.visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.LayerContext_UpdateDisplayTree_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.updateDisplayTree');
          const result = this.impl.updateDisplayTree(params.update);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.LayerContext_UpdateDisplayTiling_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.updateDisplayTiling');
          const result = this.impl.updateDisplayTiling(params.tiling);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.LayerContextReceiver = viz.mojom.LayerContextReceiver;

viz.mojom.LayerContextPtr = viz.mojom.LayerContextRemote;
viz.mojom.LayerContextRequest = viz.mojom.LayerContextPendingReceiver;


// Interface: LayerContextClient
mojo.internal.Struct(
    viz.mojom.LayerContextClient_OnRequestCommitForFrame_ParamsSpec, 'viz.mojom.LayerContextClient_OnRequestCommitForFrame_Params', [
      mojo.internal.StructField('args', 0, 0, viz.mojom.BeginFrameArgsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.LayerContextClient_OnTilingsReadyForCleanup_ParamsSpec, 'viz.mojom.LayerContextClient_OnTilingsReadyForCleanup_Params', [
      mojo.internal.StructField('tiling_scales_to_clean_up', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('layer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

viz.mojom.LayerContextClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.LayerContextClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.LayerContextClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.LayerContextClientPendingReceiver,
      handle);
    this.$ = new viz.mojom.LayerContextClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.LayerContextClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LayerContextClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onRequestCommitForFrame(args) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.LayerContextClient_OnRequestCommitForFrame_ParamsSpec,
      null,
      [args],
      false);
  }

  onTilingsReadyForCleanup(layer_id, tiling_scales_to_clean_up) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.LayerContextClient_OnTilingsReadyForCleanup_ParamsSpec,
      null,
      [layer_id, tiling_scales_to_clean_up],
      false);
  }

};

viz.mojom.LayerContextClient.getRemote = function() {
  let remote = new viz.mojom.LayerContextClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.LayerContextClient',
    'context');
  return remote.$;
};

viz.mojom.LayerContextClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LayerContextClient', [
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
        
        // Try Method 0: OnRequestCommitForFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.LayerContextClient_OnRequestCommitForFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRequestCommitForFrame (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnTilingsReadyForCleanup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.LayerContextClient_OnTilingsReadyForCleanup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTilingsReadyForCleanup (1)');
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
          const params = decoder.decodeStructInline(viz.mojom.LayerContextClient_OnRequestCommitForFrame_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onRequestCommitForFrame');
          const result = this.impl.onRequestCommitForFrame(params.args);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.LayerContextClient_OnTilingsReadyForCleanup_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onTilingsReadyForCleanup');
          const result = this.impl.onTilingsReadyForCleanup(params.layer_id, params.tiling_scales_to_clean_up);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.LayerContextClientReceiver = viz.mojom.LayerContextClientReceiver;

viz.mojom.LayerContextClientPtr = viz.mojom.LayerContextClientRemote;
viz.mojom.LayerContextClientRequest = viz.mojom.LayerContextClientPendingReceiver;

