// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/wayland/mojom/wayland_overlay_config.mojom
// Module: wl.mojom

'use strict';

// Module namespace
var wl = wl || {};
wl.mojom = wl.mojom || {};


// Union: TransformUnion
wl.mojom.TransformUnionSpec = { $: mojo.internal.Union(
    'wl.mojom.TransformUnion', {
      'overlay_transform': {
        'ordinal': 0,
        'type': gfx.mojom.OverlayTransformSpec,
      }},
      'matrix_transform': {
        'ordinal': 1,
        'type': gfx.mojom.TransformSpec,
      }},
    })
};

// Struct: WaylandOverlayConfig
wl.mojom.WaylandOverlayConfigSpec = {
  $: {
    structSpec: {
      name: 'wl.mojom.WaylandOverlayConfig',
      packedSize: 96,
      fields: [
        { name: 'z_order', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'color_space', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.ColorSpaceSpec, nullable: true, minVersion: 0 },
        { name: 'hdr_metadata', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.HDRMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'transform', packedOffset: 24, packedBitOffset: 0, type: wl.mojom.TransformUnionSpec, nullable: false, minVersion: 0 },
        { name: 'buffer_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'surface_scale_factor', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'bounds_rect', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'crop_rect', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'damage_region', packedOffset: 64, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'enable_blend', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'opacity', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'access_fence_handle', packedOffset: 80, packedBitOffset: 0, type: gfx.mojom.GpuFenceHandleSpec, nullable: true, minVersion: 0 },
        { name: 'priority_hint', packedOffset: 76, packedBitOffset: 0, type: gfx.mojom.OverlayPriorityHintSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 96}]
    }
  }
};
