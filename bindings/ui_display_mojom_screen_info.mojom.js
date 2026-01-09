// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/screen_info.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};


// Struct: ScreenInfo
display.mojom.ScreenInfoSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.ScreenInfo',
      packedSize: 88,
      fields: [
        { name: 'display_color_spaces', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.DisplayColorSpacesSpec, nullable: false },
        { name: 'rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'available_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'orientation_type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'display_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'device_scale_factor', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'depth', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'handwriting_radius', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'depth_per_component', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'orientation_angle', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'is_monochrome', packedOffset: 66, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_extended', packedOffset: 66, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_primary', packedOffset: 66, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'is_internal', packedOffset: 66, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
