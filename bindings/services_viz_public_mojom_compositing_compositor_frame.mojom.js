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
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.CompositorFrameMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'resources', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.TransferableResourceSpec, false), nullable: false, minVersion: 0 },
        { name: 'passes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.CompositorRenderPassSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
