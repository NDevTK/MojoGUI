// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositor_frame_sink.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var cc = cc || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

viz.mojom.LayerContextSettingsSpec = { $: {} };
viz.mojom.CompositorFrameSinkParamsSpec = { $: {} };
viz.mojom.CompositorFrameSink = {};
viz.mojom.CompositorFrameSink.$interfaceName = 'viz.mojom.CompositorFrameSink';
viz.mojom.CompositorFrameSink_SetParams_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSinkClient = {};
viz.mojom.CompositorFrameSinkClient.$interfaceName = 'viz.mojom.CompositorFrameSinkClient';
viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec = { $: {} };
viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec = { $: {} };

// Struct: LayerContextSettings
mojo.internal.Struct(
    viz.mojom.LayerContextSettingsSpec, 'viz.mojom.LayerContextSettings', [
      mojo.internal.StructField('scrollbar_animator', 0, 0, cc.mojom.ScrollbarAnimatorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scrollbar_fade_delay', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scrollbar_fade_duration', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scrollbar_thinning_duration', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('minimum_occlusion_tracking_size', 32, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('damaged_frame_limit', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('idle_thickness_scale', 44, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('top_controls_show_threshold', 48, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('top_controls_hide_threshold', 52, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('draw_mode_is_gpu', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_early_damage_check', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_edge_anti_aliasing', 56, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_backface_visibility_interop', 56, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_fluent_scrollbar', 56, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_fluent_overlay_scrollbar', 56, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: CompositorFrameSinkParams
mojo.internal.Struct(
    viz.mojom.CompositorFrameSinkParamsSpec, 'viz.mojom.CompositorFrameSinkParams', [
      mojo.internal.StructField('wants_animate_only_begin_frames', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('auto_needs_begin_frame', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('no_compositor_frame_acks', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CompositorFrameSink
mojo.internal.Struct(
    viz.mojom.CompositorFrameSink_SetParams_ParamsSpec, 'viz.mojom.CompositorFrameSink_SetParams_Params', [
      mojo.internal.StructField('params', 0, 0, viz.mojom.CompositorFrameSinkParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec, 'viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_Params', [
      mojo.internal.StructField('needs_begin_frame', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec, 'viz.mojom.CompositorFrameSink_SubmitCompositorFrame_Params', [
      mojo.internal.StructField('local_surface_id', 0, 0, viz.mojom.LocalSurfaceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame', 8, 0, viz.mojom.CompositorFrameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hit_test_region_list', 16, 0, viz.mojom.HitTestRegionListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('submit_time', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec, 'viz.mojom.CompositorFrameSink_DidNotProduceFrame_Params', [
      mojo.internal.StructField('ack', 0, 0, viz.mojom.BeginFrameAckSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec, 'viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec, 'viz.mojom.CompositorFrameSink_BindLayerContext_Params', [
      mojo.internal.StructField('context', 0, 0, viz.mojom.PendingLayerContextSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('settings', 8, 0, viz.mojom.LayerContextSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec, 'viz.mojom.CompositorFrameSink_SetThreads_Params', [
      mojo.internal.StructField('threads', 0, 0, mojo.internal.Array(viz.mojom.ThreadSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.CompositorFrameSinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.CompositorFrameSinkRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CompositorFrameSink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.CompositorFrameSinkPendingReceiver,
      handle);
    this.$ = new viz.mojom.CompositorFrameSinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.CompositorFrameSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setParams(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.CompositorFrameSink_SetParams_ParamsSpec,
      null,
      [params],
      false);
  }

  setNeedsBeginFrame(needs_begin_frame) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec,
      null,
      [needs_begin_frame],
      false);
  }

  submitCompositorFrame(local_surface_id, frame, hit_test_region_list, submit_time) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec,
      null,
      [local_surface_id, frame, hit_test_region_list, submit_time],
      false);
  }

  didNotProduceFrame(ack) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec,
      null,
      [ack],
      false);
  }

  notifyNewLocalSurfaceIdExpectedWhilePaused() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec,
      null,
      [],
      false);
  }

  bindLayerContext(context, settings) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec,
      null,
      [context, settings],
      false);
  }

  setThreads(threads) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec,
      null,
      [threads],
      false);
  }

};

viz.mojom.CompositorFrameSink.getRemote = function() {
  let remote = new viz.mojom.CompositorFrameSinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CompositorFrameSink',
    'context');
  return remote.$;
};

viz.mojom.CompositorFrameSinkReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.CompositorFrameSink_SetParams_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setParams');
          const result = this.impl.setParams(params.params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setNeedsBeginFrame');
          const result = this.impl.setNeedsBeginFrame(params.needs_begin_frame);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.submitCompositorFrame');
          const result = this.impl.submitCompositorFrame(params.local_surface_id, params.frame, params.hit_test_region_list, params.submit_time);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.didNotProduceFrame');
          const result = this.impl.didNotProduceFrame(params.ack);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.notifyNewLocalSurfaceIdExpectedWhilePaused');
          const result = this.impl.notifyNewLocalSurfaceIdExpectedWhilePaused();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindLayerContext');
          const result = this.impl.bindLayerContext(params.context, params.settings);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setThreads');
          const result = this.impl.setThreads(params.threads);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.CompositorFrameSinkReceiver = viz.mojom.CompositorFrameSinkReceiver;

viz.mojom.CompositorFrameSinkPtr = viz.mojom.CompositorFrameSinkRemote;
viz.mojom.CompositorFrameSinkRequest = viz.mojom.CompositorFrameSinkPendingReceiver;


// Interface: CompositorFrameSinkClient
mojo.internal.Struct(
    viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params', [
      mojo.internal.StructField('resources', 0, 0, mojo.internal.Array(viz.mojom.ReturnedResourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_OnBeginFrame_Params', [
      mojo.internal.StructField('args', 0, 0, viz.mojom.BeginFrameArgsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('details', 8, 0, mojo.internal.Map(mojo.internal.Uint32, viz.mojom.FrameTimingDetailsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('resources', 16, 0, mojo.internal.Array(viz.mojom.ReturnedResourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_Params', [
      mojo.internal.StructField('paused', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_ReclaimResources_Params', [
      mojo.internal.StructField('resources', 0, 0, mojo.internal.Array(viz.mojom.ReturnedResourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_Params', [
      mojo.internal.StructField('sequence_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec, 'viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_Params', [
      mojo.internal.StructField('local_surface_id', 0, 0, viz.mojom.LocalSurfaceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.CompositorFrameSinkClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.CompositorFrameSinkClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CompositorFrameSinkClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.CompositorFrameSinkClientPendingReceiver,
      handle);
    this.$ = new viz.mojom.CompositorFrameSinkClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.CompositorFrameSinkClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didReceiveCompositorFrameAck(resources) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec,
      null,
      [resources],
      false);
  }

  onBeginFrame(args, details, resources) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec,
      null,
      [args, details, resources],
      false);
  }

  onBeginFramePausedChanged(paused) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec,
      null,
      [paused],
      false);
  }

  reclaimResources(resources) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec,
      null,
      [resources],
      false);
  }

  onCompositorFrameTransitionDirectiveProcessed(sequence_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec,
      null,
      [sequence_id],
      false);
  }

  onSurfaceEvicted(local_surface_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec,
      null,
      [local_surface_id],
      false);
  }

};

viz.mojom.CompositorFrameSinkClient.getRemote = function() {
  let remote = new viz.mojom.CompositorFrameSinkClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CompositorFrameSinkClient',
    'context');
  return remote.$;
};

viz.mojom.CompositorFrameSinkClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.didReceiveCompositorFrameAck');
          const result = this.impl.didReceiveCompositorFrameAck(params.resources);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onBeginFrame');
          const result = this.impl.onBeginFrame(params.args, params.details, params.resources);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onBeginFramePausedChanged');
          const result = this.impl.onBeginFramePausedChanged(params.paused);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.reclaimResources');
          const result = this.impl.reclaimResources(params.resources);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onCompositorFrameTransitionDirectiveProcessed');
          const result = this.impl.onCompositorFrameTransitionDirectiveProcessed(params.sequence_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onSurfaceEvicted');
          const result = this.impl.onSurfaceEvicted(params.local_surface_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.CompositorFrameSinkClientReceiver = viz.mojom.CompositorFrameSinkClientReceiver;

viz.mojom.CompositorFrameSinkClientPtr = viz.mojom.CompositorFrameSinkClientRemote;
viz.mojom.CompositorFrameSinkClientRequest = viz.mojom.CompositorFrameSinkClientPendingReceiver;

