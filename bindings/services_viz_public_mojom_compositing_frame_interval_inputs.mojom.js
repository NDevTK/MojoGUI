// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/frame_interval_inputs.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: ContentFrameIntervalType
viz.mojom.ContentFrameIntervalType = {
  kVideo: 0,
  kAnimatingImage: 1,
  kScrollBarFadeOutAnimation: 2,
  kCompositorScroll: 3,
};

// Struct: ContentFrameIntervalInfo
viz.mojom.ContentFrameIntervalInfoSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ContentFrameIntervalInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FrameIntervalInputs
viz.mojom.FrameIntervalInputsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameIntervalInputs',
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
