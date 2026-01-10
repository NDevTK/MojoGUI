// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositor_render_pass.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var skia = skia || {};


// Struct: CompositorRenderPass
viz.mojom.mojom.CompositorRenderPassSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorRenderPass',
      packedSize: 112,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.CompositorRenderPassIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'damage_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'transform_to_root_target', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false, minVersion: 0 },
        { name: 'filters', packedOffset: 32, packedBitOffset: 0, type: viz.mojom.FilterOperationsSpec, nullable: false, minVersion: 0 },
        { name: 'backdrop_filters', packedOffset: 40, packedBitOffset: 0, type: viz.mojom.FilterOperationsSpec, nullable: false, minVersion: 0 },
        { name: 'backdrop_filter_bounds', packedOffset: 48, packedBitOffset: 0, type: skia.mojom.SkPathSpec, nullable: true, minVersion: 0 },
        { name: 'subtree_capture_id', packedOffset: 56, packedBitOffset: 0, type: viz.mojom.SubtreeCaptureIdSpec, nullable: false, minVersion: 0 },
        { name: 'subtree_size', packedOffset: 64, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'view_transition_element_resource_id', packedOffset: 72, packedBitOffset: 0, type: viz.mojom.ViewTransitionElementResourceIdSpec, nullable: true, minVersion: 0 },
        { name: 'has_transparent_background', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'cache_render_pass', packedOffset: 96, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_damage_from_contributing_content', packedOffset: 96, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'generate_mipmap', packedOffset: 96, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'copy_requests', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.CopyOutputRequestSpec, false), nullable: false, minVersion: 0 },
        { name: 'quad_list', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.DrawQuadSpec, false), nullable: false, minVersion: 0 },
        { name: 'has_per_quad_damage', packedOffset: 96, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 112}]
    }
  }
};
