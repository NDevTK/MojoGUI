// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/begin_frame_args.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: BeginFrameArgsType
viz.mojom.mojom.BeginFrameArgsType = {
  INVALID: 0,
  NORMAL: 1,
  MISSED: 2,
};
viz.mojom.mojom.BeginFrameArgsTypeSpec = { $: mojo.internal.Enum() };

// Struct: BeginFrameId
viz.mojom.mojom.BeginFrameIdSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.BeginFrameId',
      packedSize: 24,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'sequence_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BeginFrameArgs
viz.mojom.mojom.BeginFrameArgsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.BeginFrameArgs',
      packedSize: 80,
      fields: [
        { name: 'frame_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'deadline', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'interval', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'frame_id', packedOffset: 24, packedBitOffset: 0, type: viz.mojom.BeginFrameIdSpec, nullable: false, minVersion: 0 },
        { name: 'frames_throttled_since_last', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'dispatch_time', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'client_arrival_time', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 64, packedBitOffset: 0, type: viz.mojom.BeginFrameArgsTypeSpec, nullable: false, minVersion: 0 },
        { name: 'on_critical_path', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'animate_only', packedOffset: 68, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Struct: BeginFrameAck
viz.mojom.mojom.BeginFrameAckSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.BeginFrameAck',
      packedSize: 40,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'sequence_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'has_damage', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: CADisplayLinkParams
viz.mojom.mojom.CADisplayLinkParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CADisplayLinkParams',
      packedSize: 40,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'target_timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'interval', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
