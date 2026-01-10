// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sinks_metrics_recorder.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};
var services = services || {};

viz.mojom.FrameCountingPerSinkDataSpec = { $: {} };
viz.mojom.FrameCountingDataSpec = { $: {} };
viz.mojom.OverdrawDataSpec = { $: {} };
viz.mojom.FrameSinksMetricsRecorder = {};
viz.mojom.FrameSinksMetricsRecorder.$interfaceName = 'viz.mojom.FrameSinksMetricsRecorder';
viz.mojom.FrameSinksMetricsRecorder_StartFrameCounting_ParamsSpec = { $: {} };
viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ParamsSpec = { $: {} };
viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ResponseParamsSpec = { $: {} };
viz.mojom.FrameSinksMetricsRecorder_StartOverdrawTracking_ParamsSpec = { $: {} };
viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ParamsSpec = { $: {} };
viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ResponseParamsSpec = { $: {} };

// Struct: FrameCountingPerSinkData
mojo.internal.Struct(
    viz.mojom.FrameCountingPerSinkDataSpec, 'viz.mojom.FrameCountingPerSinkData', [
      mojo.internal.StructField('is_root', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('debug_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('start_bucket', 16, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('presented_frames', 24, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FrameCountingData
mojo.internal.Struct(
    viz.mojom.FrameCountingDataSpec, 'viz.mojom.FrameCountingData', [
      mojo.internal.StructField('per_sink_data', 0, 0, mojo.internal.Array(viz.mojom.FrameCountingPerSinkDataSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: OverdrawData
mojo.internal.Struct(
    viz.mojom.OverdrawDataSpec, 'viz.mojom.OverdrawData', [
      mojo.internal.StructField('average_overdraws', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: FrameSinksMetricsRecorder
mojo.internal.Struct(
    viz.mojom.FrameSinksMetricsRecorder_StartFrameCounting_ParamsSpec, 'viz.mojom.FrameSinksMetricsRecorder_StartFrameCounting_Params', [
      mojo.internal.StructField('start_time', 0, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('bucket_size', 8, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ParamsSpec, 'viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ResponseParamsSpec, 'viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, viz.mojom.FrameCountingDataSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinksMetricsRecorder_StartOverdrawTracking_ParamsSpec, 'viz.mojom.FrameSinksMetricsRecorder_StartOverdrawTracking_Params', [
      mojo.internal.StructField('root_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('bucket_size', 8, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ParamsSpec, 'viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_Params', [
      mojo.internal.StructField('root_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ResponseParamsSpec, 'viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, viz.mojom.OverdrawDataSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.FrameSinksMetricsRecorderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.FrameSinksMetricsRecorderRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinksMetricsRecorder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.FrameSinksMetricsRecorderPendingReceiver,
      handle);
    this.$ = new viz.mojom.FrameSinksMetricsRecorderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.FrameSinksMetricsRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startFrameCounting(start_time, bucket_size) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.FrameSinksMetricsRecorder_StartFrameCounting_ParamsSpec,
      null,
      [start_time, bucket_size],
      false);
  }

  stopFrameCounting() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ParamsSpec,
      viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ResponseParamsSpec,
      [],
      false);
  }

  startOverdrawTracking(root_frame_sink_id, bucket_size) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinksMetricsRecorder_StartOverdrawTracking_ParamsSpec,
      null,
      [root_frame_sink_id, bucket_size],
      false);
  }

  stopOverdrawTracking(root_frame_sink_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ParamsSpec,
      viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ResponseParamsSpec,
      [root_frame_sink_id],
      false);
  }

};

viz.mojom.FrameSinksMetricsRecorder.getRemote = function() {
  let remote = new viz.mojom.FrameSinksMetricsRecorderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinksMetricsRecorder',
    'context');
  return remote.$;
};

viz.mojom.FrameSinksMetricsRecorderPtr = viz.mojom.FrameSinksMetricsRecorderRemote;
viz.mojom.FrameSinksMetricsRecorderRequest = viz.mojom.FrameSinksMetricsRecorderPendingReceiver;

