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


// Enum: EmulatedScreenType
blink.mojom.EmulatedScreenType = {
  kDesktop: 0,
  kMobile: 1,
};
blink.mojom.EmulatedScreenTypeSpec = { $: mojo.internal.Enum() };

// Struct: DeviceEmulationParams
blink.mojom.DeviceEmulationParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DeviceEmulationParams',
      packedSize: 80,
      fields: [
        { name: 'screen_type', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.EmulatedScreenTypeSpec, nullable: false, minVersion: 0 },
        { name: 'screen_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'view_position', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: true, minVersion: 0 },
        { name: 'view_size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'device_scale_factor', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'scale', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'viewport_offset', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'viewport_scale', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'screen_orientation_type', packedOffset: 56, packedBitOffset: 0, type: display.mojom.ScreenOrientationSpec, nullable: false, minVersion: 0 },
        { name: 'screen_orientation_angle', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'viewport_segments', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.RectSpec, false), nullable: false, minVersion: 0 },
        { name: 'device_posture', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.DevicePostureTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};
