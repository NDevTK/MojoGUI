// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/widget/device_emulation_params.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: EmulatedScreenType
blink.mojom.EmulatedScreenType = {
  kDesktop: 0,
  kMobile: 1,
};

// Struct: DeviceEmulationParams
blink.mojom.DeviceEmulationParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DeviceEmulationParams',
      packedSize: 96,
      fields: [
        { name: 'screen_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.EmulatedScreenTypeSpec, nullable: false },
        { name: 'screen_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'view_position', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: true },
        { name: 'view_size', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'device_scale_factor', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'scale', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'viewport_offset', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'viewport_scale', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'screen_orientation_type', packedOffset: 56, packedBitOffset: 0, type: display.mojom.ScreenOrientationSpec, nullable: false },
        { name: 'screen_orientation_angle', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'viewport_segments', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'device_posture', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.DevicePostureTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
