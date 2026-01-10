// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/compute_pressure/web_pressure_update.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: WebPressureUpdate
blink.mojom.mojom.WebPressureUpdateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPressureUpdate',
      packedSize: 32,
      fields: [
        { name: 'source', packedOffset: 16, packedBitOffset: 0, type: device.mojom.PressureSourceSpec, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 20, packedBitOffset: 0, type: device.mojom.PressureStateSpec, nullable: false, minVersion: 0 },
        { name: 'own_contribution_estimate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
