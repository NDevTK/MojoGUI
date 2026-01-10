// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/returned_resource.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};
var ui = ui || {};
var gfx = gfx || {};

viz.mojom.ReturnedResourceSpec = { $: {} };

// Struct: ReturnedResource
mojo.internal.Struct(
    viz.mojom.ReturnedResourceSpec, 'viz.mojom.ReturnedResource', [
      mojo.internal.StructField('id', 0, 0, viz.mojom.ResourceIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('shared_image_export_result', 8, 0, gpu.mojom.SharedImageExportResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('release_fence', 16, 0, gfx.mojom.GpuFenceHandleSpec, null, true, 0, undefined),
      mojo.internal.StructField('count', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('lost', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);
