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
      packedSize: 96,
      fields: [
        { name: 'color_space', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'hdr_metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'transform', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'bounds_rect', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'crop_rect', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'damage_region', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'access_fence_handle', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'priority_hint', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'z_order', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'buffer_id', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'surface_scale_factor', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'opacity', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'enable_blend', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
