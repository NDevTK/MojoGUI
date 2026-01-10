// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/ca_layer_params.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Union: CALayerContent
gfx.mojom.CALayerContentSpec = { $: mojo.internal.Union(
    'gfx.mojom.CALayerContent', {
      'ca_context_id': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
      }},
      'io_surface_mach_port': {
        'ordinal': 1,
        'type': mojo.internal.Pointer,
      }},
    })
};

// Struct: CALayerParams
gfx.mojom.CALayerParamsSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.CALayerParams',
      packedSize: 40,
      fields: [
        { name: 'is_empty', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'content', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.CALayerContentSpec, nullable: false, minVersion: 0 },
        { name: 'pixel_size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'scale_factor', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
