// Auto-generated MojoJS binding
 // Source: chromium_src/services/viz/public/mojom/compositing/layer.mojom
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
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.viz.mojom.LayerExtraSpec = { $: {} };
mojo.internal.bindings.viz.mojom.RarePropertiesSpec = { $: {} };
mojo.internal.bindings.viz.mojom.MirrorLayerExtraSpec = { $: {} };
mojo.internal.bindings.viz.mojom.SurfaceLayerExtraSpec = { $: {} };
mojo.internal.bindings.viz.mojom.TextureLayerExtraSpec = { $: {} };
mojo.internal.bindings.viz.mojom.UIResourceLayerExtraSpec = { $: {} };
mojo.internal.bindings.viz.mojom.TileDisplayLayerExtraSpec = { $: {} };
mojo.internal.bindings.viz.mojom.ScrollbarLayerBaseExtraSpec = { $: {} };
mojo.internal.bindings.viz.mojom.NinePatchThumbScrollbarLayerExtraSpec = { $: {} };
mojo.internal.bindings.viz.mojom.PaintedScrollbarLayerExtraSpec = { $: {} };
mojo.internal.bindings.viz.mojom.SolidColorScrollbarLayerExtraSpec = { $: {} };
mojo.internal.bindings.viz.mojom.ViewTransitionContentLayerExtraSpec = { $: {} };
mojo.internal.bindings.viz.mojom.NinePatchLayerExtraSpec = { $: {} };
mojo.internal.bindings.viz.mojom.LayerSpec = { $: {} };
mojo.internal.bindings.viz.mojom.AnchorPositionScrollDataSpec = { $: {} };
mojo.internal.bindings.viz.mojom.StickyPositionNodeDataSpec = { $: {} };
mojo.internal.bindings.viz.mojom.TransformTreeUpdateSpec = { $: {} };
mojo.internal.bindings.viz.mojom.TransformNodeSpec = { $: {} };
mojo.internal.bindings.viz.mojom.ClipNodeSpec = { $: {} };
mojo.internal.bindings.viz.mojom.EffectNodeSpec = { $: {} };
mojo.internal.bindings.viz.mojom.ScrollTreeUpdateSpec = { $: {} };
mojo.internal.bindings.viz.mojom.ScrollNodeSpec = { $: {} };

// Union: LayerExtra
mojo.internal.Union(
    mojo.internal.bindings.viz.mojom.LayerExtraSpec, 'viz.mojom.LayerExtra', {
      'arg_mirror_layer_extra': {
        'ordinal': 0,
        'type': mojo.internal.bindings.viz.mojom.MirrorLayerExtraSpec.$,
        'nullable': false,
      },
      'arg_nine_patch_thumb_scrollbar_layer_extra': {
        'ordinal': 1,
        'type': mojo.internal.bindings.viz.mojom.NinePatchThumbScrollbarLayerExtraSpec.$,
        'nullable': false,
      },
      'arg_painted_scrollbar_layer_extra': {
        'ordinal': 2,
        'type': mojo.internal.bindings.viz.mojom.PaintedScrollbarLayerExtraSpec.$,
        'nullable': false,
      },
      'arg_solid_color_scrollbar_layer_extra': {
        'ordinal': 3,
        'type': mojo.internal.bindings.viz.mojom.SolidColorScrollbarLayerExtraSpec.$,
        'nullable': false,
      },
      'arg_surface_layer_extra': {
        'ordinal': 4,
        'type': mojo.internal.bindings.viz.mojom.SurfaceLayerExtraSpec.$,
        'nullable': false,
      },
      'arg_texture_layer_extra': {
        'ordinal': 5,
        'type': mojo.internal.bindings.viz.mojom.TextureLayerExtraSpec.$,
        'nullable': false,
      },
      'arg_ui_resource_layer_extra': {
        'ordinal': 6,
        'type': mojo.internal.bindings.viz.mojom.UIResourceLayerExtraSpec.$,
        'nullable': false,
      },
      'arg_tile_display_layer_extra': {
        'ordinal': 7,
        'type': mojo.internal.bindings.viz.mojom.TileDisplayLayerExtraSpec.$,
        'nullable': false,
      },
      'arg_view_transition_content_layer_extra': {
        'ordinal': 8,
        'type': mojo.internal.bindings.viz.mojom.ViewTransitionContentLayerExtraSpec.$,
        'nullable': false,
      },
      'arg_nine_patch_layer_extra': {
        'ordinal': 9,
        'type': mojo.internal.bindings.viz.mojom.NinePatchLayerExtraSpec.$,
        'nullable': false,
      },
    });

// Struct: RareProperties
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.RarePropertiesSpec, 'viz.mojom.RareProperties', [
      mojo.internal.StructField('arg_filter_quality', 0, 0, mojo.internal.bindings.cc.mojom.FilterQualitySpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_dynamic_range_limit', 8, 0, mojo.internal.bindings.cc.mojom.DynamicRangeLimitSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_capture_bounds', 16, 0, mojo.internal.bindings.viz.mojom.RegionCaptureBoundsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: MirrorLayerExtra
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.MirrorLayerExtraSpec, 'viz.mojom.MirrorLayerExtra', [
      mojo.internal.StructField('arg_mirrored_layer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SurfaceLayerExtra
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.SurfaceLayerExtraSpec, 'viz.mojom.SurfaceLayerExtra', [
      mojo.internal.StructField('arg_surface_range', 0, 0, mojo.internal.bindings.viz.mojom.SurfaceRangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_deadline_in_frames_$value', 8, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_deadline_in_frames_$flag', originalFieldName: 'arg_deadline_in_frames' }),
      mojo.internal.StructField('arg_deadline_in_frames_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_deadline_in_frames_$value', originalFieldName: 'arg_deadline_in_frames' }),
      mojo.internal.StructField('arg_stretch_content_to_fill_bounds', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_surface_hit_testable', 12, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_pointer_events_none', 12, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_reflection', 12, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_will_draw_needs_reset', 12, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_override_child_paint_flags', 12, 6, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextureLayerExtra
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.TextureLayerExtraSpec, 'viz.mojom.TextureLayerExtra', [
      mojo.internal.StructField('arg_uv_top_left', 0, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_uv_bottom_right', 8, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_transferable_resource', 16, 0, mojo.internal.bindings.viz.mojom.TransferableResourceSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_blend_background_color', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_force_texture_to_opaque', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_update_transferable_resource', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: UIResourceLayerExtra
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.UIResourceLayerExtraSpec, 'viz.mojom.UIResourceLayerExtra', [
      mojo.internal.StructField('arg_ui_resource_id', 0, 0, mojo.internal.bindings.cc.mojom.UIResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_bounds', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_uv_top_left', 16, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_uv_bottom_right', 24, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TileDisplayLayerExtra
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.TileDisplayLayerExtraSpec, 'viz.mojom.TileDisplayLayerExtra', [
      mojo.internal.StructField('arg_solid_color', 0, 0, mojo.internal.bindings.skia.mojom.SkColor4fSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_content_color_usage', 8, 0, mojo.internal.bindings.gfx.mojom.ContentColorUsageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_recorded_bounds', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_proposed_tiling_scales_for_deletion', 24, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_is_backdrop_filter_mask', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_directly_composited_image', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_nearest_neighbor', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ScrollbarLayerBaseExtra
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.ScrollbarLayerBaseExtraSpec, 'viz.mojom.ScrollbarLayerBaseExtra', [
      mojo.internal.StructField('arg_scroll_element_id', 0, 0, mojo.internal.bindings.cc.mojom.ElementIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_thumb_thickness_scale_factor', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_current_pos', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_clip_layer_length', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_scroll_layer_length', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_vertical_adjust', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_overlay_scrollbar', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_web_test', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_horizontal_orientation', 28, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_left_side_vertical_scrollbar', 28, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_find_in_page_tickmarks', 28, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: NinePatchThumbScrollbarLayerExtra
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.NinePatchThumbScrollbarLayerExtraSpec, 'viz.mojom.NinePatchThumbScrollbarLayerExtra', [
      mojo.internal.StructField('arg_scrollbar_base_extra', 0, 0, mojo.internal.bindings.viz.mojom.ScrollbarLayerBaseExtraSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_bounds', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_aperture', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_thumb_ui_resource_id', 24, 0, mojo.internal.bindings.cc.mojom.UIResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_track_and_buttons_ui_resource_id', 32, 0, mojo.internal.bindings.cc.mojom.UIResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_thumb_thickness', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_minimum_thumb_length', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_track_start', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_track_length', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: PaintedScrollbarLayerExtra
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.PaintedScrollbarLayerExtraSpec, 'viz.mojom.PaintedScrollbarLayerExtra', [
      mojo.internal.StructField('arg_scrollbar_base_extra', 0, 0, mojo.internal.bindings.viz.mojom.ScrollbarLayerBaseExtraSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_internal_content_bounds', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_back_button_rect', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_forward_button_rect', 24, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_track_rect', 32, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_thumb_color', 40, 0, mojo.internal.bindings.skia.mojom.SkColor4fSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_track_and_buttons_image_bounds', 48, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_track_and_buttons_aperture', 56, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_track_and_buttons_ui_resource_id', 64, 0, mojo.internal.bindings.cc.mojom.UIResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_thumb_ui_resource_id', 72, 0, mojo.internal.bindings.cc.mojom.UIResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_internal_contents_scale', 80, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_thumb_thickness', 84, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_minimum_thumb_length', 88, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_painted_opacity', 92, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_jump_on_track_click', 96, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_supports_drag_snap_back', 96, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_uses_nine_patch_track_and_buttons', 96, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: SolidColorScrollbarLayerExtra
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.SolidColorScrollbarLayerExtraSpec, 'viz.mojom.SolidColorScrollbarLayerExtra', [
      mojo.internal.StructField('arg_scrollbar_base_extra', 0, 0, mojo.internal.bindings.viz.mojom.ScrollbarLayerBaseExtraSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_color', 8, 0, mojo.internal.bindings.skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_thumb_thickness', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_track_start', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ViewTransitionContentLayerExtra
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.ViewTransitionContentLayerExtraSpec, 'viz.mojom.ViewTransitionContentLayerExtra', [
      mojo.internal.StructField('arg_resource_id', 0, 0, mojo.internal.bindings.viz.mojom.ViewTransitionElementResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_extents_rect', 8, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_live_content_layer', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: NinePatchLayerExtra
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.NinePatchLayerExtraSpec, 'viz.mojom.NinePatchLayerExtra', [
      mojo.internal.StructField('arg_image_aperture', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_border', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_layer_occlusion', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ui_resource_id', 24, 0, mojo.internal.bindings.cc.mojom.UIResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_bounds', 32, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_uv_top_left', 40, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_uv_bottom_right', 48, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fill_center', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: Layer
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.LayerSpec, 'viz.mojom.Layer', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.cc.mojom.LayerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bounds', 16, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hit_test_opaqueness', 24, 0, mojo.internal.bindings.cc.mojom.HitTestOpaquenessSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_background_color', 32, 0, mojo.internal.bindings.skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_safe_opaque_background_color', 40, 0, mojo.internal.bindings.skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_element_id', 48, 0, mojo.internal.bindings.cc.mojom.ElementIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_update_rect', 56, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_offset_to_transform_parent', 64, 0, mojo.internal.bindings.gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_rare_properties', 72, 0, mojo.internal.bindings.viz.mojom.RarePropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_layer_extra', 80, 0, mojo.internal.bindings.viz.mojom.LayerExtraSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_transform_tree_index', 88, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_clip_tree_index', 92, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_effect_tree_index', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_scroll_tree_index', 100, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_contents_opaque', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_contents_opaque_for_text', 104, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_drawable', 104, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_layer_property_changed_not_from_property_trees', 104, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_layer_property_changed_from_property_trees', 104, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_should_check_backface_visibility', 104, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);

// Struct: AnchorPositionScrollData
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.AnchorPositionScrollDataSpec, 'viz.mojom.AnchorPositionScrollData', [
      mojo.internal.StructField('arg_adjustment_container_ids', 0, 0, mojo.internal.Array(mojo.internal.bindings.cc.mojom.ElementIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_accumulated_scroll_origin', 8, 0, mojo.internal.bindings.gfx.mojom.Vector2dSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_needs_scroll_adjustment_in_x', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_needs_scroll_adjustment_in_y', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: StickyPositionNodeData
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.StickyPositionNodeDataSpec, 'viz.mojom.StickyPositionNodeData', [
      mojo.internal.StructField('arg_constraint_box_rect', 0, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scroll_container_relative_sticky_box_rect', 8, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scroll_container_relative_containing_block_rect', 16, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_pixel_snap_offset', 24, 0, mojo.internal.bindings.gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_total_sticky_box_sticky_offset', 32, 0, mojo.internal.bindings.gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_total_containing_block_sticky_offset', 40, 0, mojo.internal.bindings.gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scroll_ancestor', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_left_offset', 52, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_right_offset', 56, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_top_offset', 60, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bottom_offset', 64, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_nearest_node_shifting_sticky_box', 68, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_nearest_node_shifting_containing_block', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_anchored_left', 76, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_anchored_right', 76, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_anchored_top', 76, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_anchored_bottom', 76, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: TransformTreeUpdate
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.TransformTreeUpdateSpec, 'viz.mojom.TransformTreeUpdate', [
      mojo.internal.StructField('arg_nodes_affected_by_outer_viewport_bounds_delta', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_nodes_affected_by_safe_area_bottom', 8, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_sticky_position_data', 16, 0, mojo.internal.Array(mojo.internal.bindings.viz.mojom.StickyPositionNodeDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_anchor_position_scroll_data', 24, 0, mojo.internal.Array(mojo.internal.bindings.viz.mojom.AnchorPositionScrollDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_drawn_elastic_overscroll', 32, 0, mojo.internal.Map(mojo.internal.bindings.cc.mojom.ElementIdSpec.$, mojo.internal.bindings.gfx.mojom.Vector2dFSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_page_scale_factor', 40, 0, mojo.internal.Float, 1.0, false, 0, undefined),
      mojo.internal.StructField('arg_device_scale_factor', 44, 0, mojo.internal.Float, 1.0, false, 0, undefined),
      mojo.internal.StructField('arg_device_transform_scale_factor', 48, 0, mojo.internal.Float, 1.0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: TransformNode
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.TransformNodeSpec, 'viz.mojom.TransformNode', [
      mojo.internal.StructField('arg_element_id', 0, 0, mojo.internal.bindings.cc.mojom.ElementIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_local', 8, 0, mojo.internal.bindings.gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_origin', 16, 0, mojo.internal.bindings.gfx.mojom.Point3FSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_post_translation', 24, 0, mojo.internal.bindings.gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_to_parent', 32, 0, mojo.internal.bindings.gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scroll_offset', 40, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_snap_amount', 48, 0, mojo.internal.bindings.gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_visible_frame_element_id', 56, 0, mojo.internal.bindings.cc.mojom.ElementIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_damage_reasons_bit_mask', 64, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_id', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_parent_id', 76, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_parent_frame_id', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sticky_position_constraint_id_$value', 84, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_sticky_position_constraint_id_$flag', originalFieldName: 'arg_sticky_position_constraint_id' }),
      mojo.internal.StructField('arg_anchor_position_scroll_data_id_$value', 88, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_anchor_position_scroll_data_id_$flag', originalFieldName: 'arg_anchor_position_scroll_data_id' }),
      mojo.internal.StructField('arg_sorting_context_id', 92, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maximum_animation_scale', 96, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sticky_position_constraint_id_$flag', 100, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_sticky_position_constraint_id_$value', originalFieldName: 'arg_sticky_position_constraint_id' }),
      mojo.internal.StructField('arg_anchor_position_scroll_data_id_$flag', 100, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_anchor_position_scroll_data_id_$value', originalFieldName: 'arg_anchor_position_scroll_data_id' }),
      mojo.internal.StructField('arg_has_potential_animation', 100, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_currently_animating', 100, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_flattens_inherited_transform', 100, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_scrolls', 100, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_should_undo_overscroll', 100, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_should_be_snapped', 100, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_moved_by_outer_viewport_bounds_delta_y', 101, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_in_subtree_of_page_scale_layer', 101, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_transform_changed', 101, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_delegates_to_parent_for_backface', 101, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_will_change_transform', 101, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_node_and_ancestors_are_animated_or_invertible', 101, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_invertible', 101, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ancestors_are_invertible', 101, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_node_and_ancestors_are_flat', 102, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_node_or_ancestors_will_change_transform', 102, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_moved_by_safe_area_bottom', 102, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: ClipNode
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.ClipNodeSpec, 'viz.mojom.ClipNode', [
      mojo.internal.StructField('arg_clip', 0, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_parent_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_transform_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pixel_moving_filter_id', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: EffectNode
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.EffectNodeSpec, 'viz.mojom.EffectNode', [
      mojo.internal.StructField('arg_element_id', 0, 0, mojo.internal.bindings.cc.mojom.ElementIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_render_surface_reason', 8, 0, mojo.internal.bindings.cc.mojom.RenderSurfaceReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_surface_contents_scale', 16, 0, mojo.internal.bindings.gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_subtree_capture_id', 24, 0, mojo.internal.bindings.viz.mojom.SubtreeCaptureIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_subtree_size', 32, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_view_transition_element_resource_id', 40, 0, mojo.internal.bindings.viz.mojom.ViewTransitionElementResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_filters', 48, 0, mojo.internal.bindings.viz.mojom.FilterOperationsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_backdrop_filters', 56, 0, mojo.internal.bindings.viz.mojom.FilterOperationsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_backdrop_filter_bounds', 64, 0, mojo.internal.bindings.skia.mojom.SkPathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_backdrop_mask_element_id', 72, 0, mojo.internal.bindings.cc.mojom.ElementIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mask_filter_info', 80, 0, mojo.internal.bindings.gfx.mojom.MaskFilterInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_copy_output_requests', 88, 0, mojo.internal.Array(mojo.internal.bindings.viz.mojom.CopyOutputRequestSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_parent_id', 100, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_transform_id', 104, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_clip_id', 108, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_opacity', 112, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_blend_mode', 116, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_target_id', 120, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_view_transition_target_id', 124, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_closest_ancestor_with_cached_render_surface_id', 128, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_closest_ancestor_with_copy_request_id', 132, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_closest_ancestor_being_captured_id', 136, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_closest_ancestor_with_shared_element_id', 140, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_backdrop_filter_quality', 144, 0, mojo.internal.Float, 1.0, false, 0, undefined),
      mojo.internal.StructField('arg_cache_render_surface', 148, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_double_sided', 148, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_trilinear_filtering', 148, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_subtree_hidden', 148, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_potential_filter_animation', 148, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_potential_backdrop_filter_animation', 148, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_potential_opacity_animation', 148, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_effect_changed', 148, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_subtree_has_copy_request', 149, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_fast_rounded_corner', 149, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_may_have_backdrop_effect', 149, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_needs_effect_for_2d_scale_transform', 149, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 160]]);

// Struct: ScrollTreeUpdate
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.ScrollTreeUpdateSpec, 'viz.mojom.ScrollTreeUpdate', [
      mojo.internal.StructField('arg_synced_scroll_offsets', 0, 0, mojo.internal.Map(mojo.internal.bindings.cc.mojom.ElementIdSpec.$, mojo.internal.bindings.cc.mojom.SyncedScrollOffsetSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_scrolling_contents_cull_rects', 8, 0, mojo.internal.Map(mojo.internal.bindings.cc.mojom.ElementIdSpec.$, mojo.internal.bindings.gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_elastic_overscroll', 16, 0, mojo.internal.Map(mojo.internal.bindings.cc.mojom.ElementIdSpec.$, mojo.internal.bindings.gfx.mojom.Vector2dFSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ScrollNode
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.ScrollNodeSpec, 'viz.mojom.ScrollNode', [
      mojo.internal.StructField('arg_container_bounds', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bounds', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_element_id', 16, 0, mojo.internal.bindings.cc.mojom.ElementIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_parent_id', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_transform_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_scroll_offset_affected_by_page_scale', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_scrolls_inner_viewport', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_scrolls_outer_viewport', 36, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_prevent_viewport_scrolling_from_inner', 36, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_user_scrollable_horizontal', 36, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_user_scrollable_vertical', 36, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_composited', 36, 6, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);
