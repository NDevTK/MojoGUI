// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/transform.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

gfx.mojom.TransformDataSpec = { $: {} };
gfx.mojom.TransformSpec = { $: {} };

// Union: TransformData
mojo.internal.Union(
    gfx.mojom.TransformDataSpec, 'gfx.mojom.TransformData', {
      'axis_2d': {
        'ordinal': 0,
        'type': gfx.mojom.AxisTransform2dSpec.$,
        'nullable': false,
      },
      'matrix': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Pointer, false),
        'nullable': false,
      },
    });

// Struct: Transform
mojo.internal.Struct(
    gfx.mojom.TransformSpec, 'gfx.mojom.Transform', [
      mojo.internal.StructField('data', 0, 0, gfx.mojom.TransformDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);
