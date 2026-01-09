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
      packedSize: 104,
      fields: [
        { name: 'device_scale_factor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'display_color_spaces', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.DisplayColorSpacesSpec, nullable: false },
        { name: 'depth', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'handwriting_radius', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'depth_per_component', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'is_monochrome', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'rect', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'available_rect', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'orientation_type', packedOffset: 64, packedBitOffset: 0, type: display.mojom.ScreenOrientationSpec, nullable: false },
        { name: 'orientation_angle', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'is_extended', packedOffset: 74, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_primary', packedOffset: 74, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_internal', packedOffset: 74, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'label', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'display_id', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
