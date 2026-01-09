// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositor_frame_transition_directive.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: CompositorFrameTransitionDirectiveType
viz.mojom.CompositorFrameTransitionDirectiveType = {
  kSave: 0,
  kAnimateRenderer: 1,
  kRelease: 2,
};

// Struct: CompositorFrameTransitionDirectiveSharedElement
viz.mojom.CompositorFrameTransitionDirectiveSharedElementSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameTransitionDirectiveSharedElement',
      packedSize: 24,
      fields: [
        { name: 'render_pass_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'view_transition_element_resource_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CompositorFrameTransitionDirective
viz.mojom.CompositorFrameTransitionDirectiveSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameTransitionDirective',
      packedSize: 56,
      fields: [
        { name: 'transition_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'shared_elements', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'display_color_spaces', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'sequence_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maybe_cross_frame_sink', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'delay_layer_tree_view_deletion', packedOffset: 36, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
