// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/linear_gradient.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Struct: Step
gfx.mojom.StepSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.Step',
      packedSize: 16,
      fields: [
        { name: 'fraction', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'alpha', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: LinearGradient
gfx.mojom.LinearGradientSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.LinearGradient',
      packedSize: 24,
      fields: [
        { name: 'angle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
        { name: 'step_count', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'steps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.Step, 8Spec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
