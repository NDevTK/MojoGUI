// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/transform.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Union: TransformData
gfx.mojom.mojom.TransformDataSpec = { $: mojo.internal.Union(
    'gfx.mojom.TransformData', {
      'axis_2d': {
        'ordinal': 0,
        'type': gfx.mojom.AxisTransform2dSpec,
      }},
      'matrix': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Pointer, false),
      }},
    })
};

// Struct: Transform
gfx.mojom.mojom.TransformSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.Transform',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.TransformDataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
