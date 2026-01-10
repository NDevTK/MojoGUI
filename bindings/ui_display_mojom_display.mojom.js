// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};
var gfx = gfx || {};

display.mojom.RotationSpec = { $: mojo.internal.Enum() };
display.mojom.TouchSupportSpec = { $: mojo.internal.Enum() };
display.mojom.AccelerometerSupportSpec = { $: mojo.internal.Enum() };
display.mojom.DisplaySpec = { $: {} };

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
mojo.internal.Struct(
    display.mojom.DisplaySpec, 'display.mojom.Display', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size_in_pixels', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('native_origin', 24, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('work_area', 32, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rotation', 40, 0, display.mojom.RotationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('touch_support', 48, 0, display.mojom.TouchSupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('accelerometer_support', 56, 0, display.mojom.AccelerometerSupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('maximum_cursor_size', 64, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color_spaces', 72, 0, gfx.mojom.DisplayColorSpacesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 88, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('color_depth', 92, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('depth_per_component', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('display_frequency', 100, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('is_monochrome', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);
