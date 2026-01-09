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
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'frame_interval', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'duplicate_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
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
      packedSize: 40,
      fields: [
        { name: 'frame_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'content_interval_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'major_scroll_speed_in_pixels_per_second', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'has_user_input', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'has_input', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'has_only_content_frame_interval_updates', packedOffset: 20, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
