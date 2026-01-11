// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/local_surface_id.mojom
// Module: viz.mojom

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var mojo_base = mojo_base || {};

viz.mojom.LocalSurfaceIdSpec = { $: {} };

// Struct: LocalSurfaceId
mojo.internal.Struct(
    viz.mojom.LocalSurfaceIdSpec, 'viz.mojom.LocalSurfaceId', [
      mojo.internal.StructField('embed_token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('parent_sequence_number', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('child_sequence_number', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);
