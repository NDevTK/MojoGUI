// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/widget/device_emulation_params.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};

blink.mojom.EmulatedScreenTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.DeviceEmulationParamsSpec = { $: {} };

// Enum: EmulatedScreenType
blink.mojom.EmulatedScreenType = {
  kDesktop: 0,
  kMobile: 1,
};

// Struct: DeviceEmulationParams
mojo.internal.Struct(
    blink.mojom.DeviceEmulationParamsSpec, 'blink.mojom.DeviceEmulationParams', [
      mojo.internal.StructField('screen_type', 0, 0, blink.mojom.EmulatedScreenTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('screen_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('view_position', 16, 0, gfx.mojom.PointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('view_size', 24, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('viewport_offset', 32, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('screen_orientation_type', 40, 0, display.mojom.ScreenOrientationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('viewport_segments', 48, 0, mojo.internal.Array(gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('device_posture', 56, 0, blink.mojom.DevicePostureTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 64, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('scale', 68, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('viewport_scale', 72, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('screen_orientation_angle', 76, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 88]]);
