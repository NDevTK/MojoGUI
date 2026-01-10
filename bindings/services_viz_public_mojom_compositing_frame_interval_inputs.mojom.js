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
viz.mojom.ContentFrameIntervalTypeSpec = { $: mojo.internal.Enum() };

// Struct: ContentFrameIntervalInfo
viz.mojom.ContentFrameIntervalInfoSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ContentFrameIntervalInfo',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.ContentFrameIntervalTypeSpec, nullable: false, minVersion: 0 },
        { name: 'frame_interval', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'duplicate_count', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FrameIntervalInputs
viz.mojom.FrameIntervalInputsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameIntervalInputs',
      packedSize: 32,
      fields: [
        { name: 'frame_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'has_user_input', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_input', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'major_scroll_speed_in_pixels_per_second', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'content_interval_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.ContentFrameIntervalInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'has_only_content_frame_interval_updates', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
