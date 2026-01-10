// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sinks_metrics_recorder.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: FrameCountingPerSinkData
viz.mojom.mojom.FrameCountingPerSinkDataSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameCountingPerSinkData',
      packedSize: 32,
      fields: [
        { name: 'is_root', packedOffset: 18, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'debug_label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'start_bucket', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'presented_frames', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint16, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: FrameCountingData
viz.mojom.mojom.FrameCountingDataSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameCountingData',
      packedSize: 16,
      fields: [
        { name: 'per_sink_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.FrameCountingPerSinkDataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: OverdrawData
viz.mojom.mojom.OverdrawDataSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.OverdrawData',
      packedSize: 16,
      fields: [
        { name: 'average_overdraws', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Float, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: FrameSinksMetricsRecorder
viz.mojom.mojom.FrameSinksMetricsRecorder = {};

viz.mojom.mojom.FrameSinksMetricsRecorderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.FrameSinksMetricsRecorderRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinksMetricsRecorder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.FrameSinksMetricsRecorderPendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.FrameSinksMetricsRecorderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.FrameSinksMetricsRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startFrameCounting(start_time, bucket_size) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.FrameSinksMetricsRecorder_StartFrameCounting_ParamsSpec,
      null,
      [start_time, bucket_size]);
  }

  stopFrameCounting() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ParamsSpec,
      viz.mojom.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ResponseParamsSpec,
      []);
  }

  startOverdrawTracking(root_frame_sink_id, bucket_size) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.mojom.FrameSinksMetricsRecorder_StartOverdrawTracking_ParamsSpec,
      null,
      [root_frame_sink_id, bucket_size]);
  }

  stopOverdrawTracking(root_frame_sink_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ParamsSpec,
      viz.mojom.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ResponseParamsSpec,
      [root_frame_sink_id]);
  }

};

viz.mojom.mojom.FrameSinksMetricsRecorder.getRemote = function() {
  let remote = new viz.mojom.mojom.FrameSinksMetricsRecorderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinksMetricsRecorder',
    'context');
  return remote.$;
};

// ParamsSpec for StartFrameCounting
viz.mojom.mojom.FrameSinksMetricsRecorder_StartFrameCounting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinksMetricsRecorder.StartFrameCounting_Params',
      packedSize: 24,
      fields: [
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'bucket_size', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StopFrameCounting
viz.mojom.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinksMetricsRecorder.StopFrameCounting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

viz.mojom.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinksMetricsRecorder.StopFrameCounting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameCountingDataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartOverdrawTracking
viz.mojom.mojom.FrameSinksMetricsRecorder_StartOverdrawTracking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinksMetricsRecorder.StartOverdrawTracking_Params',
      packedSize: 24,
      fields: [
        { name: 'root_frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false, minVersion: 0 },
        { name: 'bucket_size', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StopOverdrawTracking
viz.mojom.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinksMetricsRecorder.StopOverdrawTracking_Params',
      packedSize: 16,
      fields: [
        { name: 'root_frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

viz.mojom.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinksMetricsRecorder.StopOverdrawTracking_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.OverdrawDataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.mojom.FrameSinksMetricsRecorderPtr = viz.mojom.mojom.FrameSinksMetricsRecorderRemote;
viz.mojom.mojom.FrameSinksMetricsRecorderRequest = viz.mojom.mojom.FrameSinksMetricsRecorderPendingReceiver;

