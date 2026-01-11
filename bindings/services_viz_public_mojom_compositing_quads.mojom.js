// Auto-generated MojoJS binding
 // Source: chromium_src/services/viz/public/mojom/compositing/quads.mojom
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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.viz.mojom.ProtectedVideoStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.viz.mojom.OverlayPrioritySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.viz.mojom.DrawQuadStateSpec = { $: {} };
mojo.internal.bindings.viz.mojom.RoundedDisplayMasksInfoSpec = { $: {} };
mojo.internal.bindings.viz.mojom.DebugBorderQuadStateSpec = { $: {} };
mojo.internal.bindings.viz.mojom.CompositorRenderPassQuadStateSpec = { $: {} };
mojo.internal.bindings.viz.mojom.SolidColorQuadStateSpec = { $: {} };
mojo.internal.bindings.viz.mojom.SurfaceQuadStateSpec = { $: {} };
mojo.internal.bindings.viz.mojom.TextureQuadStateSpec = { $: {} };
mojo.internal.bindings.viz.mojom.TileQuadStateSpec = { $: {} };
mojo.internal.bindings.viz.mojom.VideoHoleQuadStateSpec = { $: {} };
mojo.internal.bindings.viz.mojom.SharedElementQuadStateSpec = { $: {} };
mojo.internal.bindings.viz.mojom.DrawQuadSpec = { $: {} };

// Enum: ProtectedVideoState
mojo.internal.bindings.viz.mojom.ProtectedVideoState = {
  kClear: 0,
  kSoftwareProtected: 1,
  kHardwareProtected: 2,
};

// Enum: OverlayPriority
mojo.internal.bindings.viz.mojom.OverlayPriority = {
  kLow: 0,
  kRegular: 1,
  kRequired: 2,
};

// Union: DrawQuadState
mojo.internal.Union(
    mojo.internal.bindings.viz.mojom.DrawQuadStateSpec, 'viz.mojom.DrawQuadState', {
      'arg_debug_border_quad_state': {
        'ordinal': 0,
        'type': mojo.internal.bindings.viz.mojom.DebugBorderQuadStateSpec.$,
        'nullable': false,
      },
      'arg_render_pass_quad_state': {
        'ordinal': 1,
        'type': mojo.internal.bindings.viz.mojom.CompositorRenderPassQuadStateSpec.$,
        'nullable': false,
      },
      'arg_solid_color_quad_state': {
        'ordinal': 2,
        'type': mojo.internal.bindings.viz.mojom.SolidColorQuadStateSpec.$,
        'nullable': false,
      },
      'arg_surface_quad_state': {
        'ordinal': 3,
        'type': mojo.internal.bindings.viz.mojom.SurfaceQuadStateSpec.$,
        'nullable': false,
      },
      'arg_texture_quad_state': {
        'ordinal': 4,
        'type': mojo.internal.bindings.viz.mojom.TextureQuadStateSpec.$,
        'nullable': false,
      },
      'arg_tile_quad_state': {
        'ordinal': 5,
        'type': mojo.internal.bindings.viz.mojom.TileQuadStateSpec.$,
        'nullable': false,
      },
      'arg_video_hole_quad_state': {
        'ordinal': 6,
        'type': mojo.internal.bindings.viz.mojom.VideoHoleQuadStateSpec.$,
        'nullable': false,
      },
      'arg_shared_element_quad_state': {
        'ordinal': 7,
        'type': mojo.internal.bindings.viz.mojom.SharedElementQuadStateSpec.$,
        'nullable': false,
      },
    });

// Struct: RoundedDisplayMasksInfo
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.RoundedDisplayMasksInfoSpec, 'viz.mojom.RoundedDisplayMasksInfo', [
      mojo.internal.StructField('arg_radii', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_is_horizontally_positioned', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DebugBorderQuadState
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.DebugBorderQuadStateSpec, 'viz.mojom.DebugBorderQuadState', [
      mojo.internal.StructField('arg_color', 0, 0, mojo.internal.bindings.skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_width', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CompositorRenderPassQuadState
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.CompositorRenderPassQuadStateSpec, 'viz.mojom.CompositorRenderPassQuadState', [
      mojo.internal.StructField('arg_render_pass_id', 0, 0, mojo.internal.bindings.viz.mojom.CompositorRenderPassIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mask_resource_id', 8, 0, mojo.internal.bindings.viz.mojom.ResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mask_uv_rect', 16, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mask_texture_size', 24, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_filters_scale', 32, 0, mojo.internal.bindings.gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_filters_origin', 40, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tex_coord_rect', 48, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_backdrop_filter_quality', 56, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_force_anti_aliasing_off', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_intersects_damage_under', 60, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: SolidColorQuadState
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.SolidColorQuadStateSpec, 'viz.mojom.SolidColorQuadState', [
      mojo.internal.StructField('arg_color', 0, 0, mojo.internal.bindings.skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_force_anti_aliasing_off', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SurfaceQuadState
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.SurfaceQuadStateSpec, 'viz.mojom.SurfaceQuadState', [
      mojo.internal.StructField('arg_surface_range', 0, 0, mojo.internal.bindings.viz.mojom.SurfaceRangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_default_background_color', 8, 0, mojo.internal.bindings.skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_override_child_filter_quality', 16, 0, mojo.internal.bindings.cc.mojom.FilterQualitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_override_child_dynamic_range_limit', 24, 0, mojo.internal.bindings.cc.mojom.DynamicRangeLimitSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_stretch_content_to_fill_bounds', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_reflection', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_merge', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: TextureQuadState
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.TextureQuadStateSpec, 'viz.mojom.TextureQuadState', [
      mojo.internal.StructField('arg_resource_id', 0, 0, mojo.internal.bindings.viz.mojom.ResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tex_coord_rect', 8, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_background_color', 16, 0, mojo.internal.bindings.skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dynamic_range_limit', 24, 0, mojo.internal.bindings.cc.mojom.DynamicRangeLimitSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_protected_video_type', 32, 0, mojo.internal.bindings.viz.mojom.ProtectedVideoStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_damage_rect', 40, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_overlay_priority_hint', 48, 0, mojo.internal.bindings.viz.mojom.OverlayPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_rounded_display_masks_info', 56, 0, mojo.internal.bindings.viz.mojom.RoundedDisplayMasksInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_nearest_neighbor', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_secure_output_only', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_video_frame', 64, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_force_rgbx', 64, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_normalized_coords', 64, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: TileQuadState
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.TileQuadStateSpec, 'viz.mojom.TileQuadState', [
      mojo.internal.StructField('arg_tex_coord_rect', 0, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_resource_id', 8, 0, mojo.internal.bindings.viz.mojom.ResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_nearest_neighbor', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_force_anti_aliasing_off', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VideoHoleQuadState
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.VideoHoleQuadStateSpec, 'viz.mojom.VideoHoleQuadState', [
      mojo.internal.StructField('arg_overlay_plane_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SharedElementQuadState
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.SharedElementQuadStateSpec, 'viz.mojom.SharedElementQuadState', [
      mojo.internal.StructField('arg_element_resource_id', 0, 0, mojo.internal.bindings.viz.mojom.ViewTransitionElementResourceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DrawQuad
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.DrawQuadSpec, 'viz.mojom.DrawQuad', [
      mojo.internal.StructField('arg_rect', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_visible_rect', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sqs', 16, 0, mojo.internal.bindings.viz.mojom.SharedQuadStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_draw_quad_state', 24, 0, mojo.internal.bindings.viz.mojom.DrawQuadStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_needs_blending', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);
