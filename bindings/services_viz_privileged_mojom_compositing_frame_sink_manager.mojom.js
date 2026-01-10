// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sink_manager.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var gpu = gpu || {};
var mojo_base = mojo_base || {};
var blink = blink || {};
var gfx = gfx || {};
var input = input || {};

viz.mojom.RootCompositorFrameSinkParamsSpec = { $: {} };
viz.mojom.CompositorDisplayLinkParamsSpec = { $: {} };
viz.mojom.FrameSinkManager = {};
viz.mojom.FrameSinkManager.$interfaceName = 'viz.mojom.FrameSinkManager';
viz.mojom.FrameSinkManager_RegisterFrameSinkId_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ResponseParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_CreateFrameSinkBundle_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_CreateCompositorFrameSink_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ResponseParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_AddVideoDetectorObserver_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_CreateVideoCapturer_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_EvictSurfaces_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_Throttle_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_RequestCopyOfOutput_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_CacheBackBuffer_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_EvictBackBuffer_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_EvictBackBuffer_ResponseParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_CreateMetricsRecorderForTest_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_EnableFrameSinkManagerTestApi_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_SetupRendererInputRouterDelegateRegistry_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_NotifyRendererBlockStateChanged_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManager_RequestInputBack_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerClient = {};
viz.mojom.FrameSinkManagerClient.$interfaceName = 'viz.mojom.FrameSinkManagerClient';
viz.mojom.FrameSinkManagerClient_OnFirstSurfaceActivation_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ResponseParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerClient_OnScreenshotCaptured_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerClient_OnViewTransitionResourcesCaptured_ParamsSpec = { $: {} };
viz.mojom.RendererInputRouterDelegateRegistry = {};
viz.mojom.RendererInputRouterDelegateRegistry.$interfaceName = 'viz.mojom.RendererInputRouterDelegateRegistry';
viz.mojom.RendererInputRouterDelegateRegistry_SetupRenderInputRouterDelegateConnection_ParamsSpec = { $: {} };

// Struct: RootCompositorFrameSinkParams
mojo.internal.Struct(
    viz.mojom.RootCompositorFrameSinkParamsSpec, 'viz.mojom.RootCompositorFrameSinkParams', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('widget', 8, 0, gpu.mojom.SurfaceHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('renderer_settings', 16, 0, viz.mojom.RendererSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('compositor_frame_sink', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('compositor_frame_sink_client', 32, 0, mojo.internal.InterfaceProxy(viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('display_private', 40, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('display_client', 48, 0, mojo.internal.InterfaceProxy(viz.mojom.DisplayClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('external_begin_frame_controller', 56, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('external_begin_frame_controller_client', 64, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('refresh_rate', 72, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('gpu_compositing', 76, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('send_swap_size_notifications', 76, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_frame_rate_limit', 76, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('create_input_receiver', 76, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: CompositorDisplayLinkParams
mojo.internal.Struct(
    viz.mojom.CompositorDisplayLinkParamsSpec, 'viz.mojom.CompositorDisplayLinkParams', [
      mojo.internal.StructField('external_begin_frame_controller', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.ExternalBeginFrameControllerRemote), null, true, 0, undefined),
      mojo.internal.StructField('external_begin_frame_controller_client', 8, 0, mojo.internal.InterfaceProxy(viz.mojom.ExternalBeginFrameControllerClientRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FrameSinkManager
mojo.internal.Struct(
    viz.mojom.FrameSinkManager_RegisterFrameSinkId_ParamsSpec, 'viz.mojom.FrameSinkManager_RegisterFrameSinkId_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('report_activation', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ParamsSpec, 'viz.mojom.FrameSinkManager_InvalidateFrameSinkId_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ResponseParamsSpec, 'viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_ParamsSpec, 'viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('debug_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_ParamsSpec, 'viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_Params', [
      mojo.internal.StructField('params', 0, 0, viz.mojom.RootCompositorFrameSinkParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_ParamsSpec, 'viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_Params', [
      mojo.internal.StructField('params', 0, 0, viz.mojom.CompositorDisplayLinkParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_CreateFrameSinkBundle_ParamsSpec, 'viz.mojom.FrameSinkManager_CreateFrameSinkBundle_Params', [
      mojo.internal.StructField('bundle_id', 0, 0, viz.mojom.FrameSinkBundleIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(viz.mojom.FrameSinkBundleRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(viz.mojom.FrameSinkBundleClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_CreateCompositorFrameSink_ParamsSpec, 'viz.mojom.FrameSinkManager_CreateCompositorFrameSink_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bundle_id', 8, 0, viz.mojom.FrameSinkBundleIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('compositor_frame_sink', 16, 0, mojo.internal.InterfaceRequest(viz.mojom.CompositorFrameSinkRemote), null, false, 0, undefined),
      mojo.internal.StructField('compositor_frame_sink_client', 24, 0, mojo.internal.InterfaceProxy(viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('config', 32, 0, input.mojom.RenderInputRouterConfigSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ParamsSpec, 'viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ResponseParamsSpec, 'viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_ParamsSpec, 'viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_Params', [
      mojo.internal.StructField('parent_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('child_frame_sink_id', 8, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_ParamsSpec, 'viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_Params', [
      mojo.internal.StructField('parent_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('child_frame_sink_id', 8, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_AddVideoDetectorObserver_ParamsSpec, 'viz.mojom.FrameSinkManager_AddVideoDetectorObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(viz.mojom.VideoDetectorObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_CreateVideoCapturer_ParamsSpec, 'viz.mojom.FrameSinkManager_CreateVideoCapturer_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.FrameSinkVideoCapturerRemote), null, false, 0, undefined),
      mojo.internal.StructField('capture_version_source', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_EvictSurfaces_ParamsSpec, 'viz.mojom.FrameSinkManager_EvictSurfaces_Params', [
      mojo.internal.StructField('surface_ids', 0, 0, mojo.internal.Array(viz.mojom.SurfaceIdSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_Throttle_ParamsSpec, 'viz.mojom.FrameSinkManager_Throttle_Params', [
      mojo.internal.StructField('frame_sink_ids', 0, 0, mojo.internal.Array(viz.mojom.FrameSinkIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('interval', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_ParamsSpec, 'viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_Params', [
      mojo.internal.StructField('interval', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_ParamsSpec, 'viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_RequestCopyOfOutput_ParamsSpec, 'viz.mojom.FrameSinkManager_RequestCopyOfOutput_Params', [
      mojo.internal.StructField('surface_id', 0, 0, viz.mojom.SurfaceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request', 8, 0, viz.mojom.CopyOutputRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('capture_exact_surface_id', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_CacheBackBuffer_ParamsSpec, 'viz.mojom.FrameSinkManager_CacheBackBuffer_Params', [
      mojo.internal.StructField('root_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cache_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_EvictBackBuffer_ParamsSpec, 'viz.mojom.FrameSinkManager_EvictBackBuffer_Params', [
      mojo.internal.StructField('cache_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_EvictBackBuffer_ResponseParamsSpec, 'viz.mojom.FrameSinkManager_EvictBackBuffer_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_ParamsSpec, 'viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_Params', [
      mojo.internal.StructField('debug_settings', 0, 0, viz.mojom.DebugRendererSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_ParamsSpec, 'viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_Params', [
      mojo.internal.StructField('transition_token', 0, 0, blink.mojom.ViewTransitionTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_CreateMetricsRecorderForTest_ParamsSpec, 'viz.mojom.FrameSinkManager_CreateMetricsRecorderForTest_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.FrameSinksMetricsRecorderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_EnableFrameSinkManagerTestApi_ParamsSpec, 'viz.mojom.FrameSinkManager_EnableFrameSinkManagerTestApi_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.FrameSinkManagerTestApiRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_SetupRendererInputRouterDelegateRegistry_ParamsSpec, 'viz.mojom.FrameSinkManager_SetupRendererInputRouterDelegateRegistry_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.RendererInputRouterDelegateRegistrySpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_NotifyRendererBlockStateChanged_ParamsSpec, 'viz.mojom.FrameSinkManager_NotifyRendererBlockStateChanged_Params', [
      mojo.internal.StructField('render_input_routers', 0, 0, mojo.internal.Array(viz.mojom.FrameSinkIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('blocked', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_RequestInputBack_ParamsSpec, 'viz.mojom.FrameSinkManager_RequestInputBack_Params', [
    ],
    [[0, 8]]);

viz.mojom.FrameSinkManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.FrameSinkManagerRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.FrameSinkManagerPendingReceiver,
      handle);
    this.$ = new viz.mojom.FrameSinkManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.FrameSinkManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerFrameSinkId(frame_sink_id, report_activation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.FrameSinkManager_RegisterFrameSinkId_ParamsSpec,
      null,
      [frame_sink_id, report_activation],
      false);
  }

  invalidateFrameSinkId(frame_sink_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ParamsSpec,
      viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ResponseParamsSpec,
      [frame_sink_id],
      false);
  }

  setFrameSinkDebugLabel(frame_sink_id, debug_label) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_ParamsSpec,
      null,
      [frame_sink_id, debug_label],
      false);
  }

  createRootCompositorFrameSink(params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_ParamsSpec,
      null,
      [params],
      false);
  }

  createCompositorDisplayLink(params) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_ParamsSpec,
      null,
      [params],
      false);
  }

  createFrameSinkBundle(bundle_id, receiver, client) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.FrameSinkManager_CreateFrameSinkBundle_ParamsSpec,
      null,
      [bundle_id, receiver, client],
      false);
  }

  createCompositorFrameSink(frame_sink_id, bundle_id, compositor_frame_sink, compositor_frame_sink_client, config) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.FrameSinkManager_CreateCompositorFrameSink_ParamsSpec,
      null,
      [frame_sink_id, bundle_id, compositor_frame_sink, compositor_frame_sink_client, config],
      false);
  }

  destroyCompositorFrameSink(frame_sink_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ParamsSpec,
      viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ResponseParamsSpec,
      [frame_sink_id],
      false);
  }

  registerFrameSinkHierarchy(parent_frame_sink_id, child_frame_sink_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_ParamsSpec,
      null,
      [parent_frame_sink_id, child_frame_sink_id],
      false);
  }

  unregisterFrameSinkHierarchy(parent_frame_sink_id, child_frame_sink_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_ParamsSpec,
      null,
      [parent_frame_sink_id, child_frame_sink_id],
      false);
  }

  addVideoDetectorObserver(observer) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      viz.mojom.FrameSinkManager_AddVideoDetectorObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  createVideoCapturer(receiver, capture_version_source) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      viz.mojom.FrameSinkManager_CreateVideoCapturer_ParamsSpec,
      null,
      [receiver, capture_version_source],
      false);
  }

  evictSurfaces(surface_ids) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      viz.mojom.FrameSinkManager_EvictSurfaces_ParamsSpec,
      null,
      [surface_ids],
      false);
  }

  throttle(frame_sink_ids, interval) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      viz.mojom.FrameSinkManager_Throttle_ParamsSpec,
      null,
      [frame_sink_ids, interval],
      false);
  }

  startThrottlingAllFrameSinks(interval) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_ParamsSpec,
      null,
      [interval],
      false);
  }

  stopThrottlingAllFrameSinks() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_ParamsSpec,
      null,
      [],
      false);
  }

  requestCopyOfOutput(surface_id, request, capture_exact_surface_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      viz.mojom.FrameSinkManager_RequestCopyOfOutput_ParamsSpec,
      null,
      [surface_id, request, capture_exact_surface_id],
      false);
  }

  cacheBackBuffer(cache_id, root_frame_sink_id) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      viz.mojom.FrameSinkManager_CacheBackBuffer_ParamsSpec,
      null,
      [cache_id, root_frame_sink_id],
      false);
  }

  evictBackBuffer(cache_id) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      viz.mojom.FrameSinkManager_EvictBackBuffer_ParamsSpec,
      viz.mojom.FrameSinkManager_EvictBackBuffer_ResponseParamsSpec,
      [cache_id],
      false);
  }

  updateDebugRendererSettings(debug_settings) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_ParamsSpec,
      null,
      [debug_settings],
      false);
  }

  clearUnclaimedViewTransitionResources(transition_token) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_ParamsSpec,
      null,
      [transition_token],
      false);
  }

  createMetricsRecorderForTest(receiver) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      viz.mojom.FrameSinkManager_CreateMetricsRecorderForTest_ParamsSpec,
      null,
      [receiver],
      false);
  }

  enableFrameSinkManagerTestApi(receiver) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      viz.mojom.FrameSinkManager_EnableFrameSinkManagerTestApi_ParamsSpec,
      null,
      [receiver],
      false);
  }

  setupRendererInputRouterDelegateRegistry(receiver) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      viz.mojom.FrameSinkManager_SetupRendererInputRouterDelegateRegistry_ParamsSpec,
      null,
      [receiver],
      false);
  }

  notifyRendererBlockStateChanged(blocked, render_input_routers) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      viz.mojom.FrameSinkManager_NotifyRendererBlockStateChanged_ParamsSpec,
      null,
      [blocked, render_input_routers],
      false);
  }

  requestInputBack() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      viz.mojom.FrameSinkManager_RequestInputBack_ParamsSpec,
      null,
      [],
      false);
  }

};

viz.mojom.FrameSinkManager.getRemote = function() {
  let remote = new viz.mojom.FrameSinkManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkManager',
    'context');
  return remote.$;
};

viz.mojom.FrameSinkManagerReceiver = class {
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
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
    this.ordinalMap.set(23, 23); // Default ordinal 23 -> Index 23
    this.ordinalMap.set(24, 24); // Default ordinal 24 -> Index 24
    this.ordinalMap.set(25, 25); // Default ordinal 25 -> Index 25
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
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_RegisterFrameSinkId_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.registerFrameSinkId');
          const result = this.impl.registerFrameSinkId(params.frame_sink_id, params.report_activation);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.invalidateFrameSinkId');
          const result = this.impl.invalidateFrameSinkId(params.frame_sink_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setFrameSinkDebugLabel');
          const result = this.impl.setFrameSinkDebugLabel(params.frame_sink_id, params.debug_label);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createRootCompositorFrameSink');
          const result = this.impl.createRootCompositorFrameSink(params.params);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createCompositorDisplayLink');
          const result = this.impl.createCompositorDisplayLink(params.params);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_CreateFrameSinkBundle_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createFrameSinkBundle');
          const result = this.impl.createFrameSinkBundle(params.bundle_id, params.receiver, params.client);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_CreateCompositorFrameSink_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createCompositorFrameSink');
          const result = this.impl.createCompositorFrameSink(params.frame_sink_id, params.bundle_id, params.compositor_frame_sink, params.compositor_frame_sink_client, params.config);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.destroyCompositorFrameSink');
          const result = this.impl.destroyCompositorFrameSink(params.frame_sink_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.registerFrameSinkHierarchy');
          const result = this.impl.registerFrameSinkHierarchy(params.parent_frame_sink_id, params.child_frame_sink_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.unregisterFrameSinkHierarchy');
          const result = this.impl.unregisterFrameSinkHierarchy(params.parent_frame_sink_id, params.child_frame_sink_id);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_AddVideoDetectorObserver_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.addVideoDetectorObserver');
          const result = this.impl.addVideoDetectorObserver(params.observer);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_CreateVideoCapturer_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createVideoCapturer');
          const result = this.impl.createVideoCapturer(params.receiver, params.capture_version_source);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_EvictSurfaces_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.evictSurfaces');
          const result = this.impl.evictSurfaces(params.surface_ids);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_Throttle_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.throttle');
          const result = this.impl.throttle(params.frame_sink_ids, params.interval);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.startThrottlingAllFrameSinks');
          const result = this.impl.startThrottlingAllFrameSinks(params.interval);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.stopThrottlingAllFrameSinks');
          const result = this.impl.stopThrottlingAllFrameSinks();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_RequestCopyOfOutput_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.requestCopyOfOutput');
          const result = this.impl.requestCopyOfOutput(params.surface_id, params.request, params.capture_exact_surface_id);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_CacheBackBuffer_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.cacheBackBuffer');
          const result = this.impl.cacheBackBuffer(params.cache_id, params.root_frame_sink_id);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_EvictBackBuffer_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.evictBackBuffer');
          const result = this.impl.evictBackBuffer(params.cache_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.FrameSinkManager_EvictBackBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.updateDebugRendererSettings');
          const result = this.impl.updateDebugRendererSettings(params.debug_settings);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.clearUnclaimedViewTransitionResources');
          const result = this.impl.clearUnclaimedViewTransitionResources(params.transition_token);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_CreateMetricsRecorderForTest_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createMetricsRecorderForTest');
          const result = this.impl.createMetricsRecorderForTest(params.receiver);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_EnableFrameSinkManagerTestApi_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.enableFrameSinkManagerTestApi');
          const result = this.impl.enableFrameSinkManagerTestApi(params.receiver);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_SetupRendererInputRouterDelegateRegistry_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setupRendererInputRouterDelegateRegistry');
          const result = this.impl.setupRendererInputRouterDelegateRegistry(params.receiver);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_NotifyRendererBlockStateChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.notifyRendererBlockStateChanged');
          const result = this.impl.notifyRendererBlockStateChanged(params.blocked, params.render_input_routers);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManager_RequestInputBack_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.requestInputBack');
          const result = this.impl.requestInputBack();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.FrameSinkManagerReceiver = viz.mojom.FrameSinkManagerReceiver;

viz.mojom.FrameSinkManagerPtr = viz.mojom.FrameSinkManagerRemote;
viz.mojom.FrameSinkManagerRequest = viz.mojom.FrameSinkManagerPendingReceiver;


// Interface: FrameSinkManagerClient
mojo.internal.Struct(
    viz.mojom.FrameSinkManagerClient_OnFirstSurfaceActivation_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_OnFirstSurfaceActivation_Params', [
      mojo.internal.StructField('surface_info', 0, 0, viz.mojom.SurfaceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hit_test_data', 8, 0, mojo.internal.Array(viz.mojom.AggregatedHitTestRegionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activation_time', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_token', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_Params', [
      mojo.internal.StructField('thread_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ResponseParamsSpec, 'viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ResponseParams', [
      mojo.internal.StructField('passed_verification', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerClient_OnScreenshotCaptured_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_OnScreenshotCaptured_Params', [
      mojo.internal.StructField('destination_token', 0, 0, blink.mojom.SameDocNavigationScreenshotDestinationTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('copy_output_result', 8, 0, viz.mojom.CopyOutputResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_Params', [
      mojo.internal.StructField('region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerClient_OnViewTransitionResourcesCaptured_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_OnViewTransitionResourcesCaptured_Params', [
      mojo.internal.StructField('transition_token', 0, 0, blink.mojom.ViewTransitionTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.FrameSinkManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.FrameSinkManagerClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.FrameSinkManagerClientPendingReceiver,
      handle);
    this.$ = new viz.mojom.FrameSinkManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.FrameSinkManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFirstSurfaceActivation(surface_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.FrameSinkManagerClient_OnFirstSurfaceActivation_ParamsSpec,
      null,
      [surface_info],
      false);
  }

  onAggregatedHitTestRegionListUpdated(frame_sink_id, hit_test_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_ParamsSpec,
      null,
      [frame_sink_id, hit_test_data],
      false);
  }

  onFrameTokenChanged(frame_sink_id, frame_token, activation_time) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_ParamsSpec,
      null,
      [frame_sink_id, frame_token, activation_time],
      false);
  }

  verifyThreadIdsDoNotBelongToHost(thread_ids) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ParamsSpec,
      viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ResponseParamsSpec,
      [thread_ids],
      false);
  }

  onScreenshotCaptured(destination_token, copy_output_result) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.FrameSinkManagerClient_OnScreenshotCaptured_ParamsSpec,
      null,
      [destination_token, copy_output_result],
      false);
  }

  onVizTouchStateAvailable(region) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_ParamsSpec,
      null,
      [region],
      false);
  }

  onViewTransitionResourcesCaptured(transition_token) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.FrameSinkManagerClient_OnViewTransitionResourcesCaptured_ParamsSpec,
      null,
      [transition_token],
      false);
  }

};

viz.mojom.FrameSinkManagerClient.getRemote = function() {
  let remote = new viz.mojom.FrameSinkManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkManagerClient',
    'context');
  return remote.$;
};

viz.mojom.FrameSinkManagerClientReceiver = class {
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
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManagerClient_OnFirstSurfaceActivation_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onFirstSurfaceActivation');
          const result = this.impl.onFirstSurfaceActivation(params.surface_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onAggregatedHitTestRegionListUpdated');
          const result = this.impl.onAggregatedHitTestRegionListUpdated(params.frame_sink_id, params.hit_test_data);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onFrameTokenChanged');
          const result = this.impl.onFrameTokenChanged(params.frame_sink_id, params.frame_token, params.activation_time);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.verifyThreadIdsDoNotBelongToHost');
          const result = this.impl.verifyThreadIdsDoNotBelongToHost(params.thread_ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManagerClient_OnScreenshotCaptured_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onScreenshotCaptured');
          const result = this.impl.onScreenshotCaptured(params.destination_token, params.copy_output_result);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onVizTouchStateAvailable');
          const result = this.impl.onVizTouchStateAvailable(params.region);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManagerClient_OnViewTransitionResourcesCaptured_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onViewTransitionResourcesCaptured');
          const result = this.impl.onViewTransitionResourcesCaptured(params.transition_token);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.FrameSinkManagerClientReceiver = viz.mojom.FrameSinkManagerClientReceiver;

viz.mojom.FrameSinkManagerClientPtr = viz.mojom.FrameSinkManagerClientRemote;
viz.mojom.FrameSinkManagerClientRequest = viz.mojom.FrameSinkManagerClientPendingReceiver;


// Interface: RendererInputRouterDelegateRegistry
mojo.internal.Struct(
    viz.mojom.RendererInputRouterDelegateRegistry_SetupRenderInputRouterDelegateConnection_ParamsSpec, 'viz.mojom.RendererInputRouterDelegateRegistry_SetupRenderInputRouterDelegateConnection_Params', [
      mojo.internal.StructField('id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rir_delegate_client_remote', 8, 0, pending_associated_remote<input.mojom.RenderInputRouterDelegateClient>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('rir_delegate_receiver', 16, 0, pending_associated_receiver<input.mojom.RenderInputRouterDelegate>Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

viz.mojom.RendererInputRouterDelegateRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.RendererInputRouterDelegateRegistryRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.RendererInputRouterDelegateRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.RendererInputRouterDelegateRegistryPendingReceiver,
      handle);
    this.$ = new viz.mojom.RendererInputRouterDelegateRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.RendererInputRouterDelegateRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setupRenderInputRouterDelegateConnection(id, rir_delegate_client_remote, rir_delegate_receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.RendererInputRouterDelegateRegistry_SetupRenderInputRouterDelegateConnection_ParamsSpec,
      null,
      [id, rir_delegate_client_remote, rir_delegate_receiver],
      false);
  }

};

viz.mojom.RendererInputRouterDelegateRegistry.getRemote = function() {
  let remote = new viz.mojom.RendererInputRouterDelegateRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.RendererInputRouterDelegateRegistry',
    'context');
  return remote.$;
};

viz.mojom.RendererInputRouterDelegateRegistryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
          const params = decoder.decodeStruct(viz.mojom.RendererInputRouterDelegateRegistry_SetupRenderInputRouterDelegateConnection_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setupRenderInputRouterDelegateConnection');
          const result = this.impl.setupRenderInputRouterDelegateConnection(params.id, params.rir_delegate_client_remote, params.rir_delegate_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.RendererInputRouterDelegateRegistryReceiver = viz.mojom.RendererInputRouterDelegateRegistryReceiver;

viz.mojom.RendererInputRouterDelegateRegistryPtr = viz.mojom.RendererInputRouterDelegateRegistryRemote;
viz.mojom.RendererInputRouterDelegateRegistryRequest = viz.mojom.RendererInputRouterDelegateRegistryPendingReceiver;

