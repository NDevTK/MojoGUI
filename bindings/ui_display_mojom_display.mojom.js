// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: Rotation
display.mojom.mojom.Rotation = {
  VALUE_0: 0,
  VALUE_90: 1,
  VALUE_180: 2,
  VALUE_270: 3,
};
display.mojom.mojom.RotationSpec = { $: mojo.internal.Enum() };

// Enum: TouchSupport
display.mojom.mojom.TouchSupport = {
  UNKNOWN: 0,
  AVAILABLE: 1,
  UNAVAILABLE: 2,
};
display.mojom.mojom.TouchSupportSpec = { $: mojo.internal.Enum() };

// Enum: AccelerometerSupport
display.mojom.mojom.AccelerometerSupport = {
  UNKNOWN: 0,
  AVAILABLE: 1,
  UNAVAILABLE: 2,
};
display.mojom.mojom.AccelerometerSupportSpec = { $: mojo.internal.Enum() };

// Struct: Display
display.mojom.mojom.DisplaySpec = {
  $: {
    structSpec: {
      name: 'display.mojom.Display',
      packedSize: 104,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'size_in_pixels', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'native_origin', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'work_area', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'device_scale_factor', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'rotation', packedOffset: 68, packedBitOffset: 0, type: display.mojom.RotationSpec, nullable: false, minVersion: 0 },
        { name: 'touch_support', packedOffset: 72, packedBitOffset: 0, type: display.mojom.TouchSupportSpec, nullable: false, minVersion: 0 },
        { name: 'accelerometer_support', packedOffset: 76, packedBitOffset: 0, type: display.mojom.AccelerometerSupportSpec, nullable: false, minVersion: 0 },
        { name: 'maximum_cursor_size', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'color_spaces', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.DisplayColorSpacesSpec, nullable: false, minVersion: 0 },
        { name: 'color_depth', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'depth_per_component', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_monochrome', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'display_frequency', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
    }
  }
};
