// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};


// Enum: Rotation
display.mojom.Rotation = {
  VALUE_0: 0,
  VALUE_90: 1,
  VALUE_180: 2,
  VALUE_270: 3,
};

// Enum: TouchSupport
display.mojom.TouchSupport = {
  UNKNOWN: 0,
  AVAILABLE: 1,
  UNAVAILABLE: 2,
};

// Enum: AccelerometerSupport
display.mojom.AccelerometerSupport = {
  UNKNOWN: 0,
  AVAILABLE: 1,
  UNAVAILABLE: 2,
};

// Struct: Display
display.mojom.DisplaySpec = {
  $: {
    structSpec: {
      name: 'display.mojom.Display',
      packedSize: 128,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'size_in_pixels', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'native_origin', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
        { name: 'work_area', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'device_scale_factor', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'rotation', packedOffset: 48, packedBitOffset: 0, type: display.mojom.RotationSpec, nullable: false },
        { name: 'touch_support', packedOffset: 56, packedBitOffset: 0, type: display.mojom.TouchSupportSpec, nullable: false },
        { name: 'accelerometer_support', packedOffset: 64, packedBitOffset: 0, type: display.mojom.AccelerometerSupportSpec, nullable: false },
        { name: 'maximum_cursor_size', packedOffset: 72, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'color_spaces', packedOffset: 80, packedBitOffset: 0, type: gfx.mojom.DisplayColorSpacesSpec, nullable: false },
        { name: 'color_depth', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'depth_per_component', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_monochrome', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'display_frequency', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'label', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
