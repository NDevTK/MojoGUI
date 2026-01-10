// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositor_frame_transition_directive.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};
var services = services || {};
var blink = blink || {};
var ui = ui || {};
var gfx = gfx || {};

viz.mojom.CompositorFrameTransitionDirectiveTypeSpec = { $: mojo.internal.Enum() };
viz.mojom.CompositorFrameTransitionDirectiveSharedElementSpec = { $: {} };
viz.mojom.CompositorFrameTransitionDirectiveSpec = { $: {} };

// Enum: CompositorFrameTransitionDirectiveType
viz.mojom.CompositorFrameTransitionDirectiveType = {
  kSave: 0,
  kAnimateRenderer: 1,
  kRelease: 2,
};

// Struct: CompositorFrameTransitionDirectiveSharedElement
mojo.internal.Struct(
    viz.mojom.CompositorFrameTransitionDirectiveSharedElementSpec, 'viz.mojom.CompositorFrameTransitionDirectiveSharedElement', [
      mojo.internal.StructField('render_pass_id', 0, 0, viz.mojom.CompositorRenderPassIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('view_transition_element_resource_id', 8, 0, viz.mojom.ViewTransitionElementResourceIdSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CompositorFrameTransitionDirective
mojo.internal.Struct(
    viz.mojom.CompositorFrameTransitionDirectiveSpec, 'viz.mojom.CompositorFrameTransitionDirective', [
      mojo.internal.StructField('transition_token', 0, 0, blink.mojom.ViewTransitionTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('maybe_cross_frame_sink', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sequence_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('type', 28, 0, viz.mojom.CompositorFrameTransitionDirectiveTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('shared_elements', 8, 0, mojo.internal.Array(viz.mojom.CompositorFrameTransitionDirectiveSharedElementSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('display_color_spaces', 16, 0, gfx.mojom.DisplayColorSpacesSpec, null, false, 0, undefined),
      mojo.internal.StructField('delay_layer_tree_view_deletion', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);
