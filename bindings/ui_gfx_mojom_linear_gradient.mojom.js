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
        { name: 'alpha', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'steps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
