// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositor_frame_sink.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: LayerContextSettings
viz.mojom.LayerContextSettingsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LayerContextSettings',
      packedSize: 64,
      fields: [
        { name: 'draw_mode_is_gpu', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_early_damage_check', packedOffset: 52, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'damaged_frame_limit', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'scrollbar_animator', packedOffset: 36, packedBitOffset: 0, type: cc.mojom.ScrollbarAnimatorSpec, nullable: false, minVersion: 0 },
        { name: 'scrollbar_fade_delay', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'scrollbar_fade_duration', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'scrollbar_thinning_duration', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'idle_thickness_scale', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'top_controls_show_threshold', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'top_controls_hide_threshold', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'minimum_occlusion_tracking_size', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'enable_edge_anti_aliasing', packedOffset: 52, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_backface_visibility_interop', packedOffset: 52, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_fluent_scrollbar', packedOffset: 52, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_fluent_overlay_scrollbar', packedOffset: 52, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: CompositorFrameSinkParams
viz.mojom.CompositorFrameSinkParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkParams',
      packedSize: 16,
      fields: [
        { name: 'wants_animate_only_begin_frames', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'auto_needs_begin_frame', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'no_compositor_frame_acks', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: CompositorFrameSink
viz.mojom.CompositorFrameSink = {};

viz.mojom.CompositorFrameSink_SetParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink_SetParams_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.CompositorFrameSinkParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'needs_begin_frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink_SubmitCompositorFrame_Params',
      packedSize: 40,
      fields: [
        { name: 'local_surface_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: false, minVersion: 0 },
        { name: 'frame', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.CompositorFrameSpec, nullable: false, minVersion: 0 },
        { name: 'hit_test_region_list', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.HitTestRegionListSpec, nullable: true, minVersion: 0 },
        { name: 'submit_time', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink_DidNotProduceFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'ack', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.BeginFrameAckSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink_BindLayerContext_Params',
      packedSize: 24,
      fields: [
        { name: 'context', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.PendingLayerContextSpec, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.LayerContextSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink_SetThreads_Params',
      packedSize: 16,
      fields: [
        { name: 'threads', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.ThreadSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [params]);
  }

  setNeedsBeginFrame(needs_begin_frame) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec,
      null,
      [needs_begin_frame]);
  }

  submitCompositorFrame(local_surface_id, frame, hit_test_region_list, submit_time) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec,
      null,
      [local_surface_id, frame, hit_test_region_list, submit_time]);
  }

  didNotProduceFrame(ack) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec,
      null,
      [ack]);
  }

  notifyNewLocalSurfaceIdExpectedWhilePaused() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec,
      null,
      []);
  }

  bindLayerContext(context, settings) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec,
      null,
      [context, settings]);
  }

  setThreads(threads) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec,
      null,
      [threads]);
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

// ParamsSpec for SetParams
viz.mojom.CompositorFrameSink_SetParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink.SetParams_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.CompositorFrameSinkParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetNeedsBeginFrame
viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink.SetNeedsBeginFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'needs_begin_frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SubmitCompositorFrame
viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink.SubmitCompositorFrame_Params',
      packedSize: 40,
      fields: [
        { name: 'local_surface_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: false, minVersion: 0 },
        { name: 'frame', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.CompositorFrameSpec, nullable: false, minVersion: 0 },
        { name: 'hit_test_region_list', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.HitTestRegionListSpec, nullable: true, minVersion: 0 },
        { name: 'submit_time', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for DidNotProduceFrame
viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink.DidNotProduceFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'ack', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.BeginFrameAckSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyNewLocalSurfaceIdExpectedWhilePaused
viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink.NotifyNewLocalSurfaceIdExpectedWhilePaused_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for BindLayerContext
viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink.BindLayerContext_Params',
      packedSize: 24,
      fields: [
        { name: 'context', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.PendingLayerContextSpec, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.LayerContextSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetThreads
viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink.SetThreads_Params',
      packedSize: 16,
      fields: [
        { name: 'threads', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.ThreadSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.CompositorFrameSinkPtr = viz.mojom.CompositorFrameSinkRemote;
viz.mojom.CompositorFrameSinkRequest = viz.mojom.CompositorFrameSinkPendingReceiver;


// Interface: CompositorFrameSinkClient
viz.mojom.CompositorFrameSinkClient = {};

viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_Params',
      packedSize: 16,
      fields: [
        { name: 'resources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.ReturnedResourceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient_OnBeginFrame_Params',
      packedSize: 32,
      fields: [
        { name: 'args', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.BeginFrameArgsSpec, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint32, viz.mojom.FrameTimingDetailsSpec, false), nullable: false, minVersion: 0 },
        { name: 'resources', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.ReturnedResourceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'paused', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient_ReclaimResources_Params',
      packedSize: 16,
      fields: [
        { name: 'resources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.ReturnedResourceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_Params',
      packedSize: 16,
      fields: [
        { name: 'sequence_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_Params',
      packedSize: 16,
      fields: [
        { name: 'local_surface_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [resources]);
  }

  onBeginFrame(args, details, resources) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec,
      null,
      [args, details, resources]);
  }

  onBeginFramePausedChanged(paused) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec,
      null,
      [paused]);
  }

  reclaimResources(resources) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec,
      null,
      [resources]);
  }

  onCompositorFrameTransitionDirectiveProcessed(sequence_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec,
      null,
      [sequence_id]);
  }

  onSurfaceEvicted(local_surface_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec,
      null,
      [local_surface_id]);
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

// ParamsSpec for DidReceiveCompositorFrameAck
viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient.DidReceiveCompositorFrameAck_Params',
      packedSize: 16,
      fields: [
        { name: 'resources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.ReturnedResourceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBeginFrame
viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient.OnBeginFrame_Params',
      packedSize: 32,
      fields: [
        { name: 'args', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.BeginFrameArgsSpec, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint32, viz.mojom.FrameTimingDetailsSpec, false), nullable: false, minVersion: 0 },
        { name: 'resources', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.ReturnedResourceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnBeginFramePausedChanged
viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient.OnBeginFramePausedChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'paused', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReclaimResources
viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient.ReclaimResources_Params',
      packedSize: 16,
      fields: [
        { name: 'resources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.ReturnedResourceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnCompositorFrameTransitionDirectiveProcessed
viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient.OnCompositorFrameTransitionDirectiveProcessed_Params',
      packedSize: 16,
      fields: [
        { name: 'sequence_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSurfaceEvicted
viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient.OnSurfaceEvicted_Params',
      packedSize: 16,
      fields: [
        { name: 'local_surface_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.CompositorFrameSinkClientPtr = viz.mojom.CompositorFrameSinkClientRemote;
viz.mojom.CompositorFrameSinkClientRequest = viz.mojom.CompositorFrameSinkClientPendingReceiver;

