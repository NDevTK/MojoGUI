// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositor_frame_transition_directive.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var blink = blink || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: CompositorFrameTransitionDirectiveType
viz.mojom.CompositorFrameTransitionDirectiveType = {
  kSave: 0,
  kAnimateRenderer: 1,
  kRelease: 2,
};
viz.mojom.CompositorFrameTransitionDirectiveTypeSpec = { $: mojo.internal.Enum() };

// Struct: CompositorFrameTransitionDirectiveSharedElement
viz.mojom.CompositorFrameTransitionDirectiveSharedElementSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameTransitionDirectiveSharedElement',
      packedSize: 24,
      fields: [
        { name: 'render_pass_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.CompositorRenderPassIdSpec, nullable: false, minVersion: 0 },
        { name: 'view_transition_element_resource_id', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.ViewTransitionElementResourceIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CompositorFrameTransitionDirective
viz.mojom.CompositorFrameTransitionDirectiveSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameTransitionDirective',
      packedSize: 48,
      fields: [
        { name: 'transition_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ViewTransitionTokenSpec, nullable: false, minVersion: 0 },
        { name: 'maybe_cross_frame_sink', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sequence_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 28, packedBitOffset: 0, type: viz.mojom.CompositorFrameTransitionDirectiveTypeSpec, nullable: false, minVersion: 0 },
        { name: 'shared_elements', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.CompositorFrameTransitionDirectiveSharedElementSpec, false), nullable: false, minVersion: 0 },
        { name: 'display_color_spaces', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.DisplayColorSpacesSpec, nullable: false, minVersion: 0 },
        { name: 'delay_layer_tree_view_deletion', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
