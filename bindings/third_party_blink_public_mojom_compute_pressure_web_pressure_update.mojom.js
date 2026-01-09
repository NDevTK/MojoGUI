// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/compute_pressure/web_pressure_update.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: WebPressureUpdate
blink.mojom.WebPressureUpdateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPressureUpdate',
      packedSize: 40,
      fields: [
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: device.mojom.PressureSourceSpec, nullable: false },
        { name: 'state', packedOffset: 16, packedBitOffset: 0, type: device.mojom.PressureStateSpec, nullable: false },
        { name: 'own_contribution_estimate', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'timestamp', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
