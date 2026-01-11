// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/frame_sink_id.mojom
// Module: viz.mojom

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.FrameSinkIdSpec = { $: {} };

// Struct: FrameSinkId
mojo.internal.Struct(
    viz.mojom.FrameSinkIdSpec, 'viz.mojom.FrameSinkId', [
      mojo.internal.StructField('client_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sink_id', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);
