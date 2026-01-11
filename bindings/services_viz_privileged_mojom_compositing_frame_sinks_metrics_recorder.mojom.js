// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sinks_metrics_recorder.mojom
// Module: viz.mojom

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var mojo_base = mojo_base || {};

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
      mojo.internal.StructField('debug_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('presented_frames', 8, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('start_bucket', 16, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('is_root', 18, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: FrameCountingData
mojo.internal.Struct(
    viz.mojom.FrameCountingDataSpec, 'viz.mojom.FrameCountingData', [
      mojo.internal.StructField('per_sink_data', 0, 0, mojo.internal.Array(viz.mojom.FrameCountingPerSinkDataSpec.$, false), null, false, 0, undefined),
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
      mojo.internal.StructField('start_time', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bucket_size', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ParamsSpec, 'viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ResponseParamsSpec, 'viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, viz.mojom.FrameCountingDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinksMetricsRecorder_StartOverdrawTracking_ParamsSpec, 'viz.mojom.FrameSinksMetricsRecorder_StartOverdrawTracking_Params', [
      mojo.internal.StructField('root_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bucket_size', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ParamsSpec, 'viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_Params', [
      mojo.internal.StructField('root_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ResponseParamsSpec, 'viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, viz.mojom.OverdrawDataSpec.$, null, true, 0, undefined),
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
  startFrameCounting(start_time, bucket_size) {
    return this.$.startFrameCounting(start_time, bucket_size);
  }
  stopFrameCounting() {
    return this.$.stopFrameCounting();
  }
  startOverdrawTracking(root_frame_sink_id, bucket_size) {
    return this.$.startOverdrawTracking(root_frame_sink_id, bucket_size);
  }
  stopOverdrawTracking(root_frame_sink_id) {
    return this.$.stopOverdrawTracking(root_frame_sink_id);
  }
};

viz.mojom.FrameSinksMetricsRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameSinksMetricsRecorder', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  startFrameCounting(start_time, bucket_size) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.FrameSinksMetricsRecorder_StartFrameCounting_ParamsSpec,
      null,
      [start_time, bucket_size],
      false);
  }

  stopFrameCounting() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ParamsSpec,
      viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ResponseParamsSpec,
      [],
      false);
  }

  startOverdrawTracking(root_frame_sink_id, bucket_size) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      viz.mojom.FrameSinksMetricsRecorder_StartOverdrawTracking_ParamsSpec,
      null,
      [root_frame_sink_id, bucket_size],
      false);
  }

  stopOverdrawTracking(root_frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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

viz.mojom.FrameSinksMetricsRecorderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameSinksMetricsRecorder', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinksMetricsRecorder_StartFrameCounting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinksMetricsRecorder_StartOverdrawTracking_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinksMetricsRecorder_StartFrameCounting_ParamsSpec.$.structSpec);
          const result = this.impl.startFrameCounting(params.start_time, params.bucket_size);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ParamsSpec.$.structSpec);
          const result = this.impl.stopFrameCounting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinksMetricsRecorder_StartOverdrawTracking_ParamsSpec.$.structSpec);
          const result = this.impl.startOverdrawTracking(params.root_frame_sink_id, params.bucket_size);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ParamsSpec.$.structSpec);
          const result = this.impl.stopOverdrawTracking(params.root_frame_sink_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

viz.mojom.FrameSinksMetricsRecorderReceiver = viz.mojom.FrameSinksMetricsRecorderReceiver;

viz.mojom.FrameSinksMetricsRecorderPtr = viz.mojom.FrameSinksMetricsRecorderRemote;
viz.mojom.FrameSinksMetricsRecorderRequest = viz.mojom.FrameSinksMetricsRecorderPendingReceiver;

