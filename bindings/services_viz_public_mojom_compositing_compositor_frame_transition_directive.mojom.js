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
      packedSize: 16,
      fields: [
        { name: 'view_transition_element_resource_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'delay_layer_tree_view_deletion', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
