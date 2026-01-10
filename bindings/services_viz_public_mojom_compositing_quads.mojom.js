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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var skia = skia || {};
var gfx = gfx || {};

viz.mojom.ProtectedVideoStateSpec = { $: mojo.internal.Enum() };
viz.mojom.OverlayPrioritySpec = { $: mojo.internal.Enum() };
viz.mojom.DrawQuadStateSpec = { $: {} };
viz.mojom.RoundedDisplayMasksInfoSpec = { $: {} };
viz.mojom.DebugBorderQuadStateSpec = { $: {} };
viz.mojom.CompositorRenderPassQuadStateSpec = { $: {} };
viz.mojom.SolidColorQuadStateSpec = { $: {} };
viz.mojom.SurfaceQuadStateSpec = { $: {} };
viz.mojom.TextureQuadStateSpec = { $: {} };
viz.mojom.TileQuadStateSpec = { $: {} };
viz.mojom.VideoHoleQuadStateSpec = { $: {} };
viz.mojom.SharedElementQuadStateSpec = { $: {} };
viz.mojom.DrawQuadSpec = { $: {} };

// Enum: ProtectedVideoState
viz.mojom.ProtectedVideoState = {
  kClear: 0,
  kSoftwareProtected: 1,
  kHardwareProtected: 2,
};

// Enum: OverlayPriority
viz.mojom.OverlayPriority = {
  kLow: 0,
  kRegular: 1,
  kRequired: 2,
};

// Union: DrawQuadState
mojo.internal.Union(
    viz.mojom.DrawQuadStateSpec, 'viz.mojom.DrawQuadState', {
      'debug_border_quad_state': {
        'ordinal': 0,
        'type': viz.mojom.DebugBorderQuadStateSpec.$,
        'nullable': false,
      },
      'render_pass_quad_state': {
        'ordinal': 1,
        'type': viz.mojom.CompositorRenderPassQuadStateSpec.$,
        'nullable': false,
      },
      'solid_color_quad_state': {
        'ordinal': 2,
        'type': viz.mojom.SolidColorQuadStateSpec.$,
        'nullable': false,
      },
      'surface_quad_state': {
        'ordinal': 3,
        'type': viz.mojom.SurfaceQuadStateSpec.$,
        'nullable': false,
      },
      'texture_quad_state': {
        'ordinal': 4,
        'type': viz.mojom.TextureQuadStateSpec.$,
        'nullable': false,
      },
      'tile_quad_state': {
        'ordinal': 5,
        'type': viz.mojom.TileQuadStateSpec.$,
        'nullable': false,
      },
      'video_hole_quad_state': {
        'ordinal': 6,
        'type': viz.mojom.VideoHoleQuadStateSpec.$,
        'nullable': false,
      },
      'shared_element_quad_state': {
        'ordinal': 7,
        'type': viz.mojom.SharedElementQuadStateSpec.$,
        'nullable': false,
      },
    });

// Struct: RoundedDisplayMasksInfo
mojo.internal.Struct(
    viz.mojom.RoundedDisplayMasksInfoSpec, 'viz.mojom.RoundedDisplayMasksInfo', [
      mojo.internal.StructField('radii', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('is_horizontally_positioned', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DebugBorderQuadState
mojo.internal.Struct(
    viz.mojom.DebugBorderQuadStateSpec, 'viz.mojom.DebugBorderQuadState', [
      mojo.internal.StructField('color', 0, 0, skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('width', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CompositorRenderPassQuadState
mojo.internal.Struct(
    viz.mojom.CompositorRenderPassQuadStateSpec, 'viz.mojom.CompositorRenderPassQuadState', [
      mojo.internal.StructField('render_pass_id', 0, 0, viz.mojom.CompositorRenderPassIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mask_resource_id', 8, 0, viz.mojom.ResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mask_uv_rect', 16, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mask_texture_size', 24, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('filters_scale', 32, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('filters_origin', 40, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tex_coord_rect', 48, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('backdrop_filter_quality', 56, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('force_anti_aliasing_off', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('intersects_damage_under', 60, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: SolidColorQuadState
mojo.internal.Struct(
    viz.mojom.SolidColorQuadStateSpec, 'viz.mojom.SolidColorQuadState', [
      mojo.internal.StructField('color', 0, 0, skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('force_anti_aliasing_off', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SurfaceQuadState
mojo.internal.Struct(
    viz.mojom.SurfaceQuadStateSpec, 'viz.mojom.SurfaceQuadState', [
      mojo.internal.StructField('surface_range', 0, 0, viz.mojom.SurfaceRangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('default_background_color', 8, 0, skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('override_child_filter_quality', 16, 0, cc.mojom.FilterQualitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('override_child_dynamic_range_limit', 24, 0, cc.mojom.DynamicRangeLimitSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('stretch_content_to_fill_bounds', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_reflection', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_merge', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: TextureQuadState
mojo.internal.Struct(
    viz.mojom.TextureQuadStateSpec, 'viz.mojom.TextureQuadState', [
      mojo.internal.StructField('resource_id', 0, 0, viz.mojom.ResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tex_coord_rect', 8, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('background_color', 16, 0, skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dynamic_range_limit', 24, 0, cc.mojom.DynamicRangeLimitSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('protected_video_type', 32, 0, viz.mojom.ProtectedVideoStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('damage_rect', 40, 0, gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('overlay_priority_hint', 48, 0, viz.mojom.OverlayPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rounded_display_masks_info', 56, 0, viz.mojom.RoundedDisplayMasksInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('nearest_neighbor', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('secure_output_only', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_video_frame', 64, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_rgbx', 64, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_normalized_coords', 64, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: TileQuadState
mojo.internal.Struct(
    viz.mojom.TileQuadStateSpec, 'viz.mojom.TileQuadState', [
      mojo.internal.StructField('tex_coord_rect', 0, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resource_id', 8, 0, viz.mojom.ResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('nearest_neighbor', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_anti_aliasing_off', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VideoHoleQuadState
mojo.internal.Struct(
    viz.mojom.VideoHoleQuadStateSpec, 'viz.mojom.VideoHoleQuadState', [
      mojo.internal.StructField('overlay_plane_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SharedElementQuadState
mojo.internal.Struct(
    viz.mojom.SharedElementQuadStateSpec, 'viz.mojom.SharedElementQuadState', [
      mojo.internal.StructField('element_resource_id', 0, 0, viz.mojom.ViewTransitionElementResourceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DrawQuad
mojo.internal.Struct(
    viz.mojom.DrawQuadSpec, 'viz.mojom.DrawQuad', [
      mojo.internal.StructField('rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible_rect', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sqs', 16, 0, viz.mojom.SharedQuadStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('draw_quad_state', 24, 0, viz.mojom.DrawQuadStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('needs_blending', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);
