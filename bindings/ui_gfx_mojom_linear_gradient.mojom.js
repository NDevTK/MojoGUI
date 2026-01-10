// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/linear_gradient.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.StepSpec = { $: {} };
gfx.mojom.LinearGradientSpec = { $: {} };

// Struct: Step
mojo.internal.Struct(
    gfx.mojom.StepSpec, 'gfx.mojom.Step', [
      mojo.internal.StructField('fraction', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('alpha', 4, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LinearGradient
mojo.internal.Struct(
    gfx.mojom.LinearGradientSpec, 'gfx.mojom.LinearGradient', [
      mojo.internal.StructField('angle', 0, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('step_count', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('steps', 8, 0, mojo.internal.Array(gfx.mojom.Step, 8Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
