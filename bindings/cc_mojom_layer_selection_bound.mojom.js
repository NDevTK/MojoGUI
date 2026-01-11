// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/layer_selection_bound.mojom
// Module: cc.mojom

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};
var gfx = gfx || {};

cc.mojom.LayerSelectionBoundSpec = { $: {} };
cc.mojom.LayerSelectionSpec = { $: {} };

// Struct: LayerSelectionBound
mojo.internal.Struct(
    cc.mojom.LayerSelectionBoundSpec, 'cc.mojom.LayerSelectionBound', [
      mojo.internal.StructField('type', 0, 0, gfx.mojom.SelectionBoundTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('edge_start', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('edge_end', 16, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('layer_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('hidden', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: LayerSelection
mojo.internal.Struct(
    cc.mojom.LayerSelectionSpec, 'cc.mojom.LayerSelection', [
      mojo.internal.StructField('start', 0, 0, cc.mojom.LayerSelectionBoundSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('end', 8, 0, cc.mojom.LayerSelectionBoundSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
