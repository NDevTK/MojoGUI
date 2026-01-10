// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/begin_frame_args.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.BeginFrameArgsTypeSpec = { $: mojo.internal.Enum() };
viz.mojom.BeginFrameIdSpec = { $: {} };
viz.mojom.BeginFrameArgsSpec = { $: {} };
viz.mojom.BeginFrameAckSpec = { $: {} };
viz.mojom.CADisplayLinkParamsSpec = { $: {} };

// Enum: BeginFrameArgsType
viz.mojom.BeginFrameArgsType = {
  INVALID: 0,
  NORMAL: 1,
  MISSED: 2,
};

// Struct: BeginFrameId
mojo.internal.Struct(
    viz.mojom.BeginFrameIdSpec, 'viz.mojom.BeginFrameId', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('sequence_number', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BeginFrameArgs
mojo.internal.Struct(
    viz.mojom.BeginFrameArgsSpec, 'viz.mojom.BeginFrameArgs', [
      mojo.internal.StructField('frame_time', 0, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('deadline', 8, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('interval', 16, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_id', 24, 0, viz.mojom.BeginFrameIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('frames_throttled_since_last', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('trace_id', 40, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('dispatch_time', 48, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('client_arrival_time', 56, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('type', 64, 0, viz.mojom.BeginFrameArgsTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('on_critical_path', 68, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('animate_only', 68, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: BeginFrameAck
mojo.internal.Struct(
    viz.mojom.BeginFrameAckSpec, 'viz.mojom.BeginFrameAck', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('sequence_number', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('trace_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('has_damage', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CADisplayLinkParams
mojo.internal.Struct(
    viz.mojom.CADisplayLinkParamsSpec, 'viz.mojom.CADisplayLinkParams', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('target_timestamp', 16, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('interval', 24, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);
