// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositor_render_pass.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var gfx = gfx || {};
var skia = skia || {};

viz.mojom.CompositorRenderPassSpec = { $: {} };

// Struct: CompositorRenderPass
mojo.internal.Struct(
    viz.mojom.CompositorRenderPassSpec, 'viz.mojom.CompositorRenderPass', [
      mojo.internal.StructField('id', 0, 0, viz.mojom.CompositorRenderPassIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_rect', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('damage_rect', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transform_to_root_target', 24, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('filters', 32, 0, viz.mojom.FilterOperationsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('backdrop_filters', 40, 0, viz.mojom.FilterOperationsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('backdrop_filter_bounds', 48, 0, skia.mojom.SkPathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subtree_capture_id', 56, 0, viz.mojom.SubtreeCaptureIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subtree_size', 64, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('view_transition_element_resource_id', 72, 0, viz.mojom.ViewTransitionElementResourceIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('copy_requests', 80, 0, mojo.internal.Array(viz.mojom.CopyOutputRequestSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('quad_list', 88, 0, mojo.internal.Array(viz.mojom.DrawQuadSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('has_transparent_background', 96, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('cache_render_pass', 96, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_damage_from_contributing_content', 96, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('generate_mipmap', 96, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_per_quad_damage', 96, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 112]]);
