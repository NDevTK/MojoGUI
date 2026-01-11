// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/wayland/mojom/wayland_overlay_config.mojom
// Module: wl.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var wl = wl || {};
wl.mojom = wl.mojom || {};
var gfx = gfx || {};
var skia = skia || {};

wl.mojom.TransformUnionSpec = { $: {} };
wl.mojom.WaylandOverlayConfigSpec = { $: {} };

// Union: TransformUnion
mojo.internal.Union(
    wl.mojom.TransformUnionSpec, 'wl.mojom.TransformUnion', {
      'overlay_transform': {
        'ordinal': 0,
        'type': gfx.mojom.OverlayTransformSpec.$,
        'nullable': false,
      },
      'matrix_transform': {
        'ordinal': 1,
        'type': gfx.mojom.TransformSpec.$,
        'nullable': false,
      },
    });

// Struct: WaylandOverlayConfig
mojo.internal.Struct(
    wl.mojom.WaylandOverlayConfigSpec, 'wl.mojom.WaylandOverlayConfig', [
      mojo.internal.StructField('color_space', 0, 0, gfx.mojom.ColorSpaceSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('hdr_metadata', 8, 0, gfx.mojom.HDRMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transform', 16, 0, wl.mojom.TransformUnionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounds_rect', 24, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('crop_rect', 32, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('damage_region', 40, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('access_fence_handle', 48, 0, gfx.mojom.GpuFenceHandleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('priority_hint', 56, 0, gfx.mojom.OverlayPriorityHintSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('z_order', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 68, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('surface_scale_factor', 72, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('opacity', 76, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('enable_blend', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);
