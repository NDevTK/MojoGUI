// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sink_manager.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.RendererInputRouterDelegateRegistryRemote), null, false, 0, undefined),
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
  registerFrameSinkId(frame_sink_id, report_activation) {
    return this.$.registerFrameSinkId(frame_sink_id, report_activation);
  }
  invalidateFrameSinkId(frame_sink_id) {
    return this.$.invalidateFrameSinkId(frame_sink_id);
  }
  setFrameSinkDebugLabel(frame_sink_id, debug_label) {
    return this.$.setFrameSinkDebugLabel(frame_sink_id, debug_label);
  }
  createRootCompositorFrameSink(params) {
    return this.$.createRootCompositorFrameSink(params);
  }
  createCompositorDisplayLink(params) {
    return this.$.createCompositorDisplayLink(params);
  }
  createFrameSinkBundle(bundle_id, receiver, client) {
    return this.$.createFrameSinkBundle(bundle_id, receiver, client);
  }
  createCompositorFrameSink(frame_sink_id, bundle_id, compositor_frame_sink, compositor_frame_sink_client, config) {
    return this.$.createCompositorFrameSink(frame_sink_id, bundle_id, compositor_frame_sink, compositor_frame_sink_client, config);
  }
  destroyCompositorFrameSink(frame_sink_id) {
    return this.$.destroyCompositorFrameSink(frame_sink_id);
  }
  registerFrameSinkHierarchy(parent_frame_sink_id, child_frame_sink_id) {
    return this.$.registerFrameSinkHierarchy(parent_frame_sink_id, child_frame_sink_id);
  }
  unregisterFrameSinkHierarchy(parent_frame_sink_id, child_frame_sink_id) {
    return this.$.unregisterFrameSinkHierarchy(parent_frame_sink_id, child_frame_sink_id);
  }
  addVideoDetectorObserver(observer) {
    return this.$.addVideoDetectorObserver(observer);
  }
  createVideoCapturer(receiver, capture_version_source) {
    return this.$.createVideoCapturer(receiver, capture_version_source);
  }
  evictSurfaces(surface_ids) {
    return this.$.evictSurfaces(surface_ids);
  }
  throttle(frame_sink_ids, interval) {
    return this.$.throttle(frame_sink_ids, interval);
  }
  startThrottlingAllFrameSinks(interval) {
    return this.$.startThrottlingAllFrameSinks(interval);
  }
  stopThrottlingAllFrameSinks() {
    return this.$.stopThrottlingAllFrameSinks();
  }
  requestCopyOfOutput(surface_id, request, capture_exact_surface_id) {
    return this.$.requestCopyOfOutput(surface_id, request, capture_exact_surface_id);
  }
  cacheBackBuffer(cache_id, root_frame_sink_id) {
    return this.$.cacheBackBuffer(cache_id, root_frame_sink_id);
  }
  evictBackBuffer(cache_id) {
    return this.$.evictBackBuffer(cache_id);
  }
  updateDebugRendererSettings(debug_settings) {
    return this.$.updateDebugRendererSettings(debug_settings);
  }
  clearUnclaimedViewTransitionResources(transition_token) {
    return this.$.clearUnclaimedViewTransitionResources(transition_token);
  }
  createMetricsRecorderForTest(receiver) {
    return this.$.createMetricsRecorderForTest(receiver);
  }
  enableFrameSinkManagerTestApi(receiver) {
    return this.$.enableFrameSinkManagerTestApi(receiver);
  }
  setupRendererInputRouterDelegateRegistry(receiver) {
    return this.$.setupRendererInputRouterDelegateRegistry(receiver);
  }
  notifyRendererBlockStateChanged(blocked, render_input_routers) {
    return this.$.notifyRendererBlockStateChanged(blocked, render_input_routers);
  }
  requestInputBack() {
    return this.$.requestInputBack();
  }
};

viz.mojom.FrameSinkManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameSinkManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  registerFrameSinkId(frame_sink_id, report_activation) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.FrameSinkManager_RegisterFrameSinkId_ParamsSpec,
      null,
      [frame_sink_id, report_activation],
      false);
  }

  invalidateFrameSinkId(frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ParamsSpec,
      viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ResponseParamsSpec,
      [frame_sink_id],
      false);
  }

  setFrameSinkDebugLabel(frame_sink_id, debug_label) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_ParamsSpec,
      null,
      [frame_sink_id, debug_label],
      false);
  }

  createRootCompositorFrameSink(params) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_ParamsSpec,
      null,
      [params],
      false);
  }

  createCompositorDisplayLink(params) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_ParamsSpec,
      null,
      [params],
      false);
  }

  createFrameSinkBundle(bundle_id, receiver, client) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      viz.mojom.FrameSinkManager_CreateFrameSinkBundle_ParamsSpec,
      null,
      [bundle_id, receiver, client],
      false);
  }

  createCompositorFrameSink(frame_sink_id, bundle_id, compositor_frame_sink, compositor_frame_sink_client, config) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      viz.mojom.FrameSinkManager_CreateCompositorFrameSink_ParamsSpec,
      null,
      [frame_sink_id, bundle_id, compositor_frame_sink, compositor_frame_sink_client, config],
      false);
  }

  destroyCompositorFrameSink(frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ParamsSpec,
      viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ResponseParamsSpec,
      [frame_sink_id],
      false);
  }

  registerFrameSinkHierarchy(parent_frame_sink_id, child_frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_ParamsSpec,
      null,
      [parent_frame_sink_id, child_frame_sink_id],
      false);
  }

  unregisterFrameSinkHierarchy(parent_frame_sink_id, child_frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_ParamsSpec,
      null,
      [parent_frame_sink_id, child_frame_sink_id],
      false);
  }

  addVideoDetectorObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      viz.mojom.FrameSinkManager_AddVideoDetectorObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  createVideoCapturer(receiver, capture_version_source) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      viz.mojom.FrameSinkManager_CreateVideoCapturer_ParamsSpec,
      null,
      [receiver, capture_version_source],
      false);
  }

  evictSurfaces(surface_ids) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      viz.mojom.FrameSinkManager_EvictSurfaces_ParamsSpec,
      null,
      [surface_ids],
      false);
  }

  throttle(frame_sink_ids, interval) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      viz.mojom.FrameSinkManager_Throttle_ParamsSpec,
      null,
      [frame_sink_ids, interval],
      false);
  }

  startThrottlingAllFrameSinks(interval) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_ParamsSpec,
      null,
      [interval],
      false);
  }

  stopThrottlingAllFrameSinks() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_ParamsSpec,
      null,
      [],
      false);
  }

  requestCopyOfOutput(surface_id, request, capture_exact_surface_id) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      viz.mojom.FrameSinkManager_RequestCopyOfOutput_ParamsSpec,
      null,
      [surface_id, request, capture_exact_surface_id],
      false);
  }

  cacheBackBuffer(cache_id, root_frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      viz.mojom.FrameSinkManager_CacheBackBuffer_ParamsSpec,
      null,
      [cache_id, root_frame_sink_id],
      false);
  }

  evictBackBuffer(cache_id) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      viz.mojom.FrameSinkManager_EvictBackBuffer_ParamsSpec,
      viz.mojom.FrameSinkManager_EvictBackBuffer_ResponseParamsSpec,
      [cache_id],
      false);
  }

  updateDebugRendererSettings(debug_settings) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_ParamsSpec,
      null,
      [debug_settings],
      false);
  }

  clearUnclaimedViewTransitionResources(transition_token) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_ParamsSpec,
      null,
      [transition_token],
      false);
  }

  createMetricsRecorderForTest(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      viz.mojom.FrameSinkManager_CreateMetricsRecorderForTest_ParamsSpec,
      null,
      [receiver],
      false);
  }

  enableFrameSinkManagerTestApi(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      viz.mojom.FrameSinkManager_EnableFrameSinkManagerTestApi_ParamsSpec,
      null,
      [receiver],
      false);
  }

  setupRendererInputRouterDelegateRegistry(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      viz.mojom.FrameSinkManager_SetupRendererInputRouterDelegateRegistry_ParamsSpec,
      null,
      [receiver],
      false);
  }

  notifyRendererBlockStateChanged(blocked, render_input_routers) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      viz.mojom.FrameSinkManager_NotifyRendererBlockStateChanged_ParamsSpec,
      null,
      [blocked, render_input_routers],
      false);
  }

  requestInputBack() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('FrameSinkManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_RegisterFrameSinkId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_CreateFrameSinkBundle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_CreateCompositorFrameSink_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_AddVideoDetectorObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_CreateVideoCapturer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_EvictSurfaces_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_Throttle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_RequestCopyOfOutput_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_CacheBackBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_EvictBackBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_CreateMetricsRecorderForTest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_EnableFrameSinkManagerTestApi_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_SetupRendererInputRouterDelegateRegistry_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_NotifyRendererBlockStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManager_RequestInputBack_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_RegisterFrameSinkId_ParamsSpec.$.structSpec);
          const result = this.impl.registerFrameSinkId(params.frame_sink_id, params.report_activation);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_ParamsSpec.$.structSpec);
          const result = this.impl.setFrameSinkDebugLabel(params.frame_sink_id, params.debug_label);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_ParamsSpec.$.structSpec);
          const result = this.impl.createRootCompositorFrameSink(params.params);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_ParamsSpec.$.structSpec);
          const result = this.impl.createCompositorDisplayLink(params.params);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_CreateFrameSinkBundle_ParamsSpec.$.structSpec);
          const result = this.impl.createFrameSinkBundle(params.bundle_id, params.receiver, params.client);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_CreateCompositorFrameSink_ParamsSpec.$.structSpec);
          const result = this.impl.createCompositorFrameSink(params.frame_sink_id, params.bundle_id, params.compositor_frame_sink, params.compositor_frame_sink_client, params.config);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_ParamsSpec.$.structSpec);
          const result = this.impl.registerFrameSinkHierarchy(params.parent_frame_sink_id, params.child_frame_sink_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_ParamsSpec.$.structSpec);
          const result = this.impl.unregisterFrameSinkHierarchy(params.parent_frame_sink_id, params.child_frame_sink_id);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_AddVideoDetectorObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addVideoDetectorObserver(params.observer);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_CreateVideoCapturer_ParamsSpec.$.structSpec);
          const result = this.impl.createVideoCapturer(params.receiver, params.capture_version_source);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_EvictSurfaces_ParamsSpec.$.structSpec);
          const result = this.impl.evictSurfaces(params.surface_ids);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_Throttle_ParamsSpec.$.structSpec);
          const result = this.impl.throttle(params.frame_sink_ids, params.interval);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_ParamsSpec.$.structSpec);
          const result = this.impl.startThrottlingAllFrameSinks(params.interval);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_ParamsSpec.$.structSpec);
          const result = this.impl.stopThrottlingAllFrameSinks();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_RequestCopyOfOutput_ParamsSpec.$.structSpec);
          const result = this.impl.requestCopyOfOutput(params.surface_id, params.request, params.capture_exact_surface_id);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_CacheBackBuffer_ParamsSpec.$.structSpec);
          const result = this.impl.cacheBackBuffer(params.cache_id, params.root_frame_sink_id);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_EvictBackBuffer_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_ParamsSpec.$.structSpec);
          const result = this.impl.updateDebugRendererSettings(params.debug_settings);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_ParamsSpec.$.structSpec);
          const result = this.impl.clearUnclaimedViewTransitionResources(params.transition_token);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_CreateMetricsRecorderForTest_ParamsSpec.$.structSpec);
          const result = this.impl.createMetricsRecorderForTest(params.receiver);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_EnableFrameSinkManagerTestApi_ParamsSpec.$.structSpec);
          const result = this.impl.enableFrameSinkManagerTestApi(params.receiver);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_SetupRendererInputRouterDelegateRegistry_ParamsSpec.$.structSpec);
          const result = this.impl.setupRendererInputRouterDelegateRegistry(params.receiver);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_NotifyRendererBlockStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.notifyRendererBlockStateChanged(params.blocked, params.render_input_routers);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManager_RequestInputBack_ParamsSpec.$.structSpec);
          const result = this.impl.requestInputBack();
          break;
        }
      }
      } catch (err) {}
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
  onFirstSurfaceActivation(surface_info) {
    return this.$.onFirstSurfaceActivation(surface_info);
  }
  onAggregatedHitTestRegionListUpdated(frame_sink_id, hit_test_data) {
    return this.$.onAggregatedHitTestRegionListUpdated(frame_sink_id, hit_test_data);
  }
  onFrameTokenChanged(frame_sink_id, frame_token, activation_time) {
    return this.$.onFrameTokenChanged(frame_sink_id, frame_token, activation_time);
  }
  verifyThreadIdsDoNotBelongToHost(thread_ids) {
    return this.$.verifyThreadIdsDoNotBelongToHost(thread_ids);
  }
  onScreenshotCaptured(destination_token, copy_output_result) {
    return this.$.onScreenshotCaptured(destination_token, copy_output_result);
  }
  onVizTouchStateAvailable(region) {
    return this.$.onVizTouchStateAvailable(region);
  }
  onViewTransitionResourcesCaptured(transition_token) {
    return this.$.onViewTransitionResourcesCaptured(transition_token);
  }
};

viz.mojom.FrameSinkManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameSinkManagerClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onFirstSurfaceActivation(surface_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.FrameSinkManagerClient_OnFirstSurfaceActivation_ParamsSpec,
      null,
      [surface_info],
      false);
  }

  onAggregatedHitTestRegionListUpdated(frame_sink_id, hit_test_data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_ParamsSpec,
      null,
      [frame_sink_id, hit_test_data],
      false);
  }

  onFrameTokenChanged(frame_sink_id, frame_token, activation_time) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_ParamsSpec,
      null,
      [frame_sink_id, frame_token, activation_time],
      false);
  }

  verifyThreadIdsDoNotBelongToHost(thread_ids) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ParamsSpec,
      viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ResponseParamsSpec,
      [thread_ids],
      false);
  }

  onScreenshotCaptured(destination_token, copy_output_result) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      viz.mojom.FrameSinkManagerClient_OnScreenshotCaptured_ParamsSpec,
      null,
      [destination_token, copy_output_result],
      false);
  }

  onVizTouchStateAvailable(region) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_ParamsSpec,
      null,
      [region],
      false);
  }

  onViewTransitionResourcesCaptured(transition_token) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('FrameSinkManagerClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManagerClient_OnFirstSurfaceActivation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManagerClient_OnScreenshotCaptured_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkManagerClient_OnViewTransitionResourcesCaptured_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManagerClient_OnFirstSurfaceActivation_ParamsSpec.$.structSpec);
          const result = this.impl.onFirstSurfaceActivation(params.surface_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onAggregatedHitTestRegionListUpdated(params.frame_sink_id, params.hit_test_data);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onFrameTokenChanged(params.frame_sink_id, params.frame_token, params.activation_time);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManagerClient_OnScreenshotCaptured_ParamsSpec.$.structSpec);
          const result = this.impl.onScreenshotCaptured(params.destination_token, params.copy_output_result);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_ParamsSpec.$.structSpec);
          const result = this.impl.onVizTouchStateAvailable(params.region);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkManagerClient_OnViewTransitionResourcesCaptured_ParamsSpec.$.structSpec);
          const result = this.impl.onViewTransitionResourcesCaptured(params.transition_token);
          break;
        }
      }
      } catch (err) {}
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
  setupRenderInputRouterDelegateConnection(id, rir_delegate_client_remote, rir_delegate_receiver) {
    return this.$.setupRenderInputRouterDelegateConnection(id, rir_delegate_client_remote, rir_delegate_receiver);
  }
};

viz.mojom.RendererInputRouterDelegateRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RendererInputRouterDelegateRegistry', [
      { explicit: null },
    ]);
  }

  setupRenderInputRouterDelegateConnection(id, rir_delegate_client_remote, rir_delegate_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('RendererInputRouterDelegateRegistry', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.RendererInputRouterDelegateRegistry_SetupRenderInputRouterDelegateConnection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.RendererInputRouterDelegateRegistry_SetupRenderInputRouterDelegateConnection_ParamsSpec.$.structSpec);
          const result = this.impl.setupRenderInputRouterDelegateConnection(params.id, params.rir_delegate_client_remote, params.rir_delegate_receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

viz.mojom.RendererInputRouterDelegateRegistryReceiver = viz.mojom.RendererInputRouterDelegateRegistryReceiver;

viz.mojom.RendererInputRouterDelegateRegistryPtr = viz.mojom.RendererInputRouterDelegateRegistryRemote;
viz.mojom.RendererInputRouterDelegateRegistryRequest = viz.mojom.RendererInputRouterDelegateRegistryPendingReceiver;

