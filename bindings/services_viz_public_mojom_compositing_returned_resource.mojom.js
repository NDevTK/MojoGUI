// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/returned_resource.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: ReturnedResource
viz.mojom.mojom.ReturnedResourceSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ReturnedResource',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.ResourceIdSpec, nullable: false, minVersion: 0 },
        { name: 'shared_image_export_result', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SharedImageExportResultSpec, nullable: false, minVersion: 0 },
        { name: 'release_fence', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.GpuFenceHandleSpec, nullable: true, minVersion: 0 },
        { name: 'count', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'lost', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
