// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/frame_deadline.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: FrameDeadline
viz.mojom.FrameDeadlineSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameDeadline',
      packedSize: 40,
      fields: [
        { name: 'frame_start_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'deadline_in_frames', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'frame_interval', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'use_default_lower_bound_deadline', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
