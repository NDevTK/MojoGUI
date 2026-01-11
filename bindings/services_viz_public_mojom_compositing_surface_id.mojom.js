// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/surface_id.mojom
// Module: viz.mojom

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.SurfaceIdSpec = { $: {} };

// Struct: SurfaceId
mojo.internal.Struct(
    viz.mojom.SurfaceIdSpec, 'viz.mojom.SurfaceId', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_surface_id', 8, 0, viz.mojom.LocalSurfaceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
