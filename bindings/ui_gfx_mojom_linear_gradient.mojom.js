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
        { name: 'fraction', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'alpha', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'angle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false },
        { name: 'step_count', packedOffset: 10, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'steps', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
