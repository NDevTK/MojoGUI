// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sinks_metrics_recorder.mojom
// Module: viz.mojom

'use strict';

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

viz.mojom.FrameSinksMetricsRecorderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: StartFrameCounting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinksMetricsRecorder_StartFrameCounting_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartFrameCounting (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StopFrameCounting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopFrameCounting (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StartOverdrawTracking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinksMetricsRecorder_StartOverdrawTracking_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartOverdrawTracking (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: StopOverdrawTracking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopOverdrawTracking (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinksMetricsRecorder_StartFrameCounting_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.startFrameCounting');
          const result = this.impl.startFrameCounting(params.start_time, params.bucket_size);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinksMetricsRecorder_StopFrameCounting_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.stopFrameCounting');
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
          const params = decoder.decodeStructInline(viz.mojom.FrameSinksMetricsRecorder_StartOverdrawTracking_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.startOverdrawTracking');
          const result = this.impl.startOverdrawTracking(params.root_frame_sink_id, params.bucket_size);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinksMetricsRecorder_StopOverdrawTracking_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.stopOverdrawTracking');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.FrameSinksMetricsRecorderReceiver = viz.mojom.FrameSinksMetricsRecorderReceiver;

viz.mojom.FrameSinksMetricsRecorderPtr = viz.mojom.FrameSinksMetricsRecorderRemote;
viz.mojom.FrameSinksMetricsRecorderRequest = viz.mojom.FrameSinksMetricsRecorderPendingReceiver;

