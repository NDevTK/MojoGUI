// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/shared_quad_state.mojom
// Module: viz.mojom

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

viz.mojom.SharedQuadStateSpec = { $: {} };

// Struct: SharedQuadState
mojo.internal.Struct(
    viz.mojom.SharedQuadStateSpec, 'viz.mojom.SharedQuadState', [
      mojo.internal.StructField('quad_to_target_transform', 0, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quad_layer_rect', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible_quad_layer_rect', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mask_filter_info', 24, 0, gfx.mojom.MaskFilterInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('clip_rect', 32, 0, gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('offset_tag', 40, 0, viz.mojom.OffsetTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('opacity', 48, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('blend_mode', 52, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sorting_context_id', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('layer_id', 60, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('are_contents_opaque', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_fast_rounded_corner', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);
