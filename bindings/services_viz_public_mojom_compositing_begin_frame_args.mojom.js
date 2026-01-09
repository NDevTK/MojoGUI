// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/begin_frame_args.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: BeginFrameArgsType
viz.mojom.BeginFrameArgsType = {
  INVALID: 0,
  NORMAL: 1,
  MISSED: 2,
};

// Struct: BeginFrameId
viz.mojom.BeginFrameIdSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.BeginFrameId',
      packedSize: 24,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'sequence_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BeginFrameArgs
viz.mojom.BeginFrameArgsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.BeginFrameArgs',
      packedSize: 88,
      fields: [
        { name: 'frame_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'deadline', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'interval', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'frame_id', packedOffset: 24, packedBitOffset: 0, type: viz.mojom.BeginFrameIdSpec, nullable: false },
        { name: 'frames_throttled_since_last', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'trace_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'dispatch_time', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'client_arrival_time', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'type', packedOffset: 64, packedBitOffset: 0, type: viz.mojom.BeginFrameArgsTypeSpec, nullable: false },
        { name: 'on_critical_path', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'animate_only', packedOffset: 72, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BeginFrameAck
viz.mojom.BeginFrameAckSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.BeginFrameAck',
      packedSize: 40,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'sequence_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'trace_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'has_damage', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CADisplayLinkParams
viz.mojom.CADisplayLinkParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CADisplayLinkParams',
      packedSize: 40,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'target_timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'interval', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
