// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositor_frame.mojom
// Module: viz.mojom

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.CompositorFrameSpec = { $: {} };

// Struct: CompositorFrame
mojo.internal.Struct(
    viz.mojom.CompositorFrameSpec, 'viz.mojom.CompositorFrame', [
      mojo.internal.StructField('metadata', 0, 0, viz.mojom.CompositorFrameMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resources', 8, 0, mojo.internal.Array(viz.mojom.TransferableResourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('passes', 16, 0, mojo.internal.Array(viz.mojom.CompositorRenderPassSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);
