// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositor_frame.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: CompositorFrame
viz.mojom.CompositorFrameSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrame',
      packedSize: 32,
      fields: [
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.CompositorFrameMetadataSpec, nullable: false },
        { name: 'resources', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'passes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
