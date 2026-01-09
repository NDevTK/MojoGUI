// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sinks_metrics_recorder.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: FrameSinksMetricsRecorder
viz.mojom.FrameSinksMetricsRecorder = {};

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
      null,
      [start_time, bucket_size],
      undefined,
      undefined
    );
  }

  stopFrameCounting() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ParamsSpec,
      viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ResponseParamsSpec,
      viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  startOverdrawTracking(root_frame_sink_id, bucket_size) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinksMetricsRecorder_StartOverdrawTracking_ParamsSpec,
      null,
      null,
      [root_frame_sink_id, bucket_size],
      undefined,
      undefined
    );
  }

  stopOverdrawTracking(root_frame_sink_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ParamsSpec,
      viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ResponseParamsSpec,
      viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ResponseParamsSpec,
      [root_frame_sink_id],
      undefined,
      undefined
    );
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

// ParamsSpec for StartFrameCounting
viz.mojom.FrameSinksMetricsRecorder_StartFrameCounting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinksMetricsRecorder.StartFrameCounting_Params',
      packedSize: 24,
      fields: [
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'bucket_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StopFrameCounting
viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ParamsSpec = {
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

viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinksMetricsRecorder.StopFrameCounting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartOverdrawTracking
viz.mojom.FrameSinksMetricsRecorder_StartOverdrawTracking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinksMetricsRecorder.StartOverdrawTracking_Params',
      packedSize: 24,
      fields: [
        { name: 'root_frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'bucket_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StopOverdrawTracking
viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinksMetricsRecorder.StopOverdrawTracking_Params',
      packedSize: 16,
      fields: [
        { name: 'root_frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinksMetricsRecorder.StopOverdrawTracking_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.FrameSinksMetricsRecorderPtr = viz.mojom.FrameSinksMetricsRecorderRemote;
viz.mojom.FrameSinksMetricsRecorderRequest = viz.mojom.FrameSinksMetricsRecorderPendingReceiver;

