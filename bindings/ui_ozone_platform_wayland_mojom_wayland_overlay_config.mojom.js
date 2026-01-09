// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/wayland/mojom/wayland_overlay_config.mojom
// Module: wl.mojom

'use strict';

// Module namespace
var wl = wl || {};
wl.mojom = wl.mojom || {};


// Struct: WaylandOverlayConfig
wl.mojom.WaylandOverlayConfigSpec = {
  $: {
    structSpec: {
      name: 'wl.mojom.WaylandOverlayConfig',
      packedSize: 104,
      fields: [
        { name: 'z_order', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'color_space', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.ColorSpaceSpec, nullable: true },
        { name: 'hdr_metadata', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.HDRMetadataSpec, nullable: false },
        { name: 'transform', packedOffset: 24, packedBitOffset: 0, type: wl.mojom.TransformUnionSpec, nullable: false },
        { name: 'buffer_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'surface_scale_factor', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'bounds_rect', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'crop_rect', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'damage_region', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'enable_blend', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'opacity', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'access_fence_handle', packedOffset: 80, packedBitOffset: 0, type: gfx.mojom.GpuFenceHandleSpec, nullable: true },
        { name: 'priority_hint', packedOffset: 88, packedBitOffset: 0, type: gfx.mojom.OverlayPriorityHintSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
