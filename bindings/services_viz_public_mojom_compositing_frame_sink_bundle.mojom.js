// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/frame_sink_bundle.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var mojo_base = mojo_base || {};

viz.mojom.BundledFrameSubmissionDataSpec = { $: {} };
viz.mojom.BundledFrameSubmissionSpec = { $: {} };
viz.mojom.BundledCompositorFrameSpec = { $: {} };
viz.mojom.BundledReturnedResourcesSpec = { $: {} };
viz.mojom.BeginFrameInfoSpec = { $: {} };
viz.mojom.FrameSinkBundle = {};
viz.mojom.FrameSinkBundle.$interfaceName = 'viz.mojom.FrameSinkBundle';
viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_ParamsSpec = { $: {} };
viz.mojom.FrameSinkBundle_Submit_ParamsSpec = { $: {} };
viz.mojom.FrameSinkBundle_SetThreads_ParamsSpec = { $: {} };
viz.mojom.FrameSinkBundleClient = {};
viz.mojom.FrameSinkBundleClient.$interfaceName = 'viz.mojom.FrameSinkBundleClient';
viz.mojom.FrameSinkBundleClient_FlushNotifications_ParamsSpec = { $: {} };
viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_ParamsSpec = { $: {} };
viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec = { $: {} };

// Union: BundledFrameSubmissionData
mojo.internal.Union(
    viz.mojom.BundledFrameSubmissionDataSpec, 'viz.mojom.BundledFrameSubmissionData', {
      'frame': {
        'ordinal': 0,
        'type': viz.mojom.BundledCompositorFrameSpec.$,
        'nullable': false,
      },
      'did_not_produce_frame': {
        'ordinal': 1,
        'type': viz.mojom.BeginFrameAckSpec.$,
        'nullable': false,
      },
    });

// Struct: BundledFrameSubmission
mojo.internal.Struct(
    viz.mojom.BundledFrameSubmissionSpec, 'viz.mojom.BundledFrameSubmission', [
      mojo.internal.StructField('data', 0, 0, viz.mojom.BundledFrameSubmissionDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sink_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BundledCompositorFrame
mojo.internal.Struct(
    viz.mojom.BundledCompositorFrameSpec, 'viz.mojom.BundledCompositorFrame', [
      mojo.internal.StructField('local_surface_id', 0, 0, viz.mojom.LocalSurfaceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame', 8, 0, viz.mojom.CompositorFrameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hit_test_region_list', 16, 0, viz.mojom.HitTestRegionListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('submit_time', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: BundledReturnedResources
mojo.internal.Struct(
    viz.mojom.BundledReturnedResourcesSpec, 'viz.mojom.BundledReturnedResources', [
      mojo.internal.StructField('resources', 0, 0, mojo.internal.Array(viz.mojom.ReturnedResourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('sink_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BeginFrameInfo
mojo.internal.Struct(
    viz.mojom.BeginFrameInfoSpec, 'viz.mojom.BeginFrameInfo', [
      mojo.internal.StructField('args', 0, 0, viz.mojom.BeginFrameArgsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('details', 8, 0, mojo.internal.Map(mojo.internal.Uint32, viz.mojom.FrameTimingDetailsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('resources', 16, 0, mojo.internal.Array(viz.mojom.ReturnedResourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('sink_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: FrameSinkBundle
mojo.internal.Struct(
    viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_ParamsSpec, 'viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_Params', [
      mojo.internal.StructField('sink_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('needs_begin_frame', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkBundle_Submit_ParamsSpec, 'viz.mojom.FrameSinkBundle_Submit_Params', [
      mojo.internal.StructField('submissions', 0, 0, mojo.internal.Array(viz.mojom.BundledFrameSubmissionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkBundle_SetThreads_ParamsSpec, 'viz.mojom.FrameSinkBundle_SetThreads_Params', [
      mojo.internal.StructField('threads', 0, 0, mojo.internal.Array(viz.mojom.ThreadSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('sink_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

viz.mojom.FrameSinkBundlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.FrameSinkBundleRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkBundle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.FrameSinkBundlePendingReceiver,
      handle);
    this.$ = new viz.mojom.FrameSinkBundleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.FrameSinkBundleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setNeedsBeginFrame(sink_id, needs_begin_frame) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_ParamsSpec,
      null,
      [sink_id, needs_begin_frame],
      false);
  }

  submit(submissions) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkBundle_Submit_ParamsSpec,
      null,
      [submissions],
      false);
  }

  setThreads(sink_id, threads) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinkBundle_SetThreads_ParamsSpec,
      null,
      [sink_id, threads],
      false);
  }

};

viz.mojom.FrameSinkBundle.getRemote = function() {
  let remote = new viz.mojom.FrameSinkBundleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkBundle',
    'context');
  return remote.$;
};

viz.mojom.FrameSinkBundleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: SetNeedsBeginFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNeedsBeginFrame (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Submit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkBundle_Submit_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Submit (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetThreads
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkBundle_SetThreads_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetThreads (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setNeedsBeginFrame');
          const result = this.impl.setNeedsBeginFrame(params.sink_id, params.needs_begin_frame);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkBundle_Submit_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.submit');
          const result = this.impl.submit(params.submissions);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkBundle_SetThreads_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setThreads');
          const result = this.impl.setThreads(params.sink_id, params.threads);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.FrameSinkBundleReceiver = viz.mojom.FrameSinkBundleReceiver;

viz.mojom.FrameSinkBundlePtr = viz.mojom.FrameSinkBundleRemote;
viz.mojom.FrameSinkBundleRequest = viz.mojom.FrameSinkBundlePendingReceiver;


// Interface: FrameSinkBundleClient
mojo.internal.Struct(
    viz.mojom.FrameSinkBundleClient_FlushNotifications_ParamsSpec, 'viz.mojom.FrameSinkBundleClient_FlushNotifications_Params', [
      mojo.internal.StructField('acks', 0, 0, mojo.internal.Array(viz.mojom.BundledReturnedResourcesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('begin_frames', 8, 0, mojo.internal.Array(viz.mojom.BeginFrameInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('reclaimed_resources', 16, 0, mojo.internal.Array(viz.mojom.BundledReturnedResourcesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_ParamsSpec, 'viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_Params', [
      mojo.internal.StructField('sink_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('paused', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec, 'viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_Params', [
      mojo.internal.StructField('sink_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sequence_id', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.FrameSinkBundleClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.FrameSinkBundleClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkBundleClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.FrameSinkBundleClientPendingReceiver,
      handle);
    this.$ = new viz.mojom.FrameSinkBundleClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.FrameSinkBundleClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  flushNotifications(acks, begin_frames, reclaimed_resources) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.FrameSinkBundleClient_FlushNotifications_ParamsSpec,
      null,
      [acks, begin_frames, reclaimed_resources],
      false);
  }

  onBeginFramePausedChanged(sink_id, paused) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_ParamsSpec,
      null,
      [sink_id, paused],
      false);
  }

  onCompositorFrameTransitionDirectiveProcessed(sink_id, sequence_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec,
      null,
      [sink_id, sequence_id],
      false);
  }

};

viz.mojom.FrameSinkBundleClient.getRemote = function() {
  let remote = new viz.mojom.FrameSinkBundleClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkBundleClient',
    'context');
  return remote.$;
};

viz.mojom.FrameSinkBundleClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: FlushNotifications
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkBundleClient_FlushNotifications_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FlushNotifications (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnBeginFramePausedChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBeginFramePausedChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnCompositorFrameTransitionDirectiveProcessed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCompositorFrameTransitionDirectiveProcessed (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkBundleClient_FlushNotifications_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.flushNotifications');
          const result = this.impl.flushNotifications(params.acks, params.begin_frames, params.reclaimed_resources);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onBeginFramePausedChanged');
          const result = this.impl.onBeginFramePausedChanged(params.sink_id, params.paused);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onCompositorFrameTransitionDirectiveProcessed');
          const result = this.impl.onCompositorFrameTransitionDirectiveProcessed(params.sink_id, params.sequence_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.FrameSinkBundleClientReceiver = viz.mojom.FrameSinkBundleClientReceiver;

viz.mojom.FrameSinkBundleClientPtr = viz.mojom.FrameSinkBundleClientRemote;
viz.mojom.FrameSinkBundleClientRequest = viz.mojom.FrameSinkBundleClientPendingReceiver;

