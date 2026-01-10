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
      packedSize: 32,
      fields: [
        { name: 'frame_start_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'deadline_in_frames', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'frame_interval', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'use_default_lower_bound_deadline', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
