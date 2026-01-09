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
      packedSize: 16,
      fields: [
        { name: 'device_posture', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
