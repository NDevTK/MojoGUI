// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sink_manager.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var blink = blink || {};
var blink = blink || {};
var ui = ui || {};
var gfx = gfx || {};
var components = components || {};

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
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('widget', 8, 0, gpu.mojom.SurfaceHandleSpec, null, false, 0, undefined),
      mojo.internal.StructField('gpu_compositing', 76, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('renderer_settings', 16, 0, viz.mojom.RendererSettingsSpec, null, false, 0, undefined),
      mojo.internal.StructField('send_swap_size_notifications', 76, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_frame_rate_limit', 76, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('create_input_receiver', 76, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('refresh_rate', 72, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('compositor_frame_sink', 24, 0, mojo.internal.AssociatedInterfaceRequest(viz.mojom.CompositorFrameSinkRemote), null, false, 0, undefined),
      mojo.internal.StructField('compositor_frame_sink_client', 32, 0, mojo.internal.InterfaceProxy(viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('display_private', 40, 0, mojo.internal.AssociatedInterfaceRequest(viz.mojom.DisplayPrivateRemote), null, false, 0, undefined),
      mojo.internal.StructField('display_client', 48, 0, mojo.internal.InterfaceProxy(viz.mojom.DisplayClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('external_begin_frame_controller', 56, 0, mojo.internal.AssociatedInterfaceRequest(viz.mojom.ExternalBeginFrameControllerRemote), null, true, 0, undefined),
      mojo.internal.StructField('external_begin_frame_controller_client', 64, 0, mojo.internal.AssociatedInterfaceProxy(viz.mojom.ExternalBeginFrameControllerClientRemote), null, true, 0, undefined),
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
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('report_activation', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ParamsSpec, 'viz.mojom.FrameSinkManager_InvalidateFrameSinkId_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ResponseParamsSpec, 'viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_ParamsSpec, 'viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('debug_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_ParamsSpec, 'viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_Params', [
      mojo.internal.StructField('params', 0, 0, viz.mojom.RootCompositorFrameSinkParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_ParamsSpec, 'viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_Params', [
      mojo.internal.StructField('params', 0, 0, viz.mojom.CompositorDisplayLinkParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_CreateFrameSinkBundle_ParamsSpec, 'viz.mojom.FrameSinkManager_CreateFrameSinkBundle_Params', [
      mojo.internal.StructField('bundle_id', 0, 0, viz.mojom.FrameSinkBundleIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(viz.mojom.FrameSinkBundleRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(viz.mojom.FrameSinkBundleClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_CreateCompositorFrameSink_ParamsSpec, 'viz.mojom.FrameSinkManager_CreateCompositorFrameSink_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('bundle_id', 8, 0, viz.mojom.FrameSinkBundleIdSpec, null, true, 0, undefined),
      mojo.internal.StructField('compositor_frame_sink', 16, 0, mojo.internal.InterfaceRequest(viz.mojom.CompositorFrameSinkRemote), null, false, 0, undefined),
      mojo.internal.StructField('compositor_frame_sink_client', 24, 0, mojo.internal.InterfaceProxy(viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('config', 32, 0, input.mojom.RenderInputRouterConfigSpec, null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ParamsSpec, 'viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ResponseParamsSpec, 'viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_ParamsSpec, 'viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_Params', [
      mojo.internal.StructField('parent_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('child_frame_sink_id', 8, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_ParamsSpec, 'viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_Params', [
      mojo.internal.StructField('parent_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('child_frame_sink_id', 8, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('surface_ids', 0, 0, mojo.internal.Array(viz.mojom.SurfaceIdSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_Throttle_ParamsSpec, 'viz.mojom.FrameSinkManager_Throttle_Params', [
      mojo.internal.StructField('frame_sink_ids', 0, 0, mojo.internal.Array(viz.mojom.FrameSinkIdSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('interval', 8, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_ParamsSpec, 'viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_Params', [
      mojo.internal.StructField('interval', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_ParamsSpec, 'viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_RequestCopyOfOutput_ParamsSpec, 'viz.mojom.FrameSinkManager_RequestCopyOfOutput_Params', [
      mojo.internal.StructField('surface_id', 0, 0, viz.mojom.SurfaceIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('request', 8, 0, viz.mojom.CopyOutputRequestSpec, null, false, 0, undefined),
      mojo.internal.StructField('capture_exact_surface_id', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_CacheBackBuffer_ParamsSpec, 'viz.mojom.FrameSinkManager_CacheBackBuffer_Params', [
      mojo.internal.StructField('cache_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('root_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
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
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_ParamsSpec, 'viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_Params', [
      mojo.internal.StructField('debug_settings', 0, 0, viz.mojom.DebugRendererSettingsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_ParamsSpec, 'viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_Params', [
      mojo.internal.StructField('transition_token', 0, 0, blink.mojom.ViewTransitionTokenSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('blocked', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('render_input_routers', 0, 0, mojo.internal.Array(viz.mojom.FrameSinkIdSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManager_RequestInputBack_ParamsSpec, 'viz.mojom.FrameSinkManager_RequestInputBack_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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
      [frame_sink_id, report_activation]);
  }

  invalidateFrameSinkId(frame_sink_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ParamsSpec,
      viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ResponseParamsSpec,
      [frame_sink_id]);
  }

  setFrameSinkDebugLabel(frame_sink_id, debug_label) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_ParamsSpec,
      null,
      [frame_sink_id, debug_label]);
  }

  createRootCompositorFrameSink(params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_ParamsSpec,
      null,
      [params]);
  }

  createCompositorDisplayLink(params) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_ParamsSpec,
      null,
      [params]);
  }

  createFrameSinkBundle(bundle_id, receiver, client) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.FrameSinkManager_CreateFrameSinkBundle_ParamsSpec,
      null,
      [bundle_id, receiver, client]);
  }

  createCompositorFrameSink(frame_sink_id, bundle_id, compositor_frame_sink, compositor_frame_sink_client, config) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.FrameSinkManager_CreateCompositorFrameSink_ParamsSpec,
      null,
      [frame_sink_id, bundle_id, compositor_frame_sink, compositor_frame_sink_client, config]);
  }

  destroyCompositorFrameSink(frame_sink_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ParamsSpec,
      viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ResponseParamsSpec,
      [frame_sink_id]);
  }

  registerFrameSinkHierarchy(parent_frame_sink_id, child_frame_sink_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_ParamsSpec,
      null,
      [parent_frame_sink_id, child_frame_sink_id]);
  }

  unregisterFrameSinkHierarchy(parent_frame_sink_id, child_frame_sink_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_ParamsSpec,
      null,
      [parent_frame_sink_id, child_frame_sink_id]);
  }

  addVideoDetectorObserver(observer) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      viz.mojom.FrameSinkManager_AddVideoDetectorObserver_ParamsSpec,
      null,
      [observer]);
  }

  createVideoCapturer(receiver, capture_version_source) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      viz.mojom.FrameSinkManager_CreateVideoCapturer_ParamsSpec,
      null,
      [receiver, capture_version_source]);
  }

  evictSurfaces(surface_ids) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      viz.mojom.FrameSinkManager_EvictSurfaces_ParamsSpec,
      null,
      [surface_ids]);
  }

  throttle(frame_sink_ids, interval) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      viz.mojom.FrameSinkManager_Throttle_ParamsSpec,
      null,
      [frame_sink_ids, interval]);
  }

  startThrottlingAllFrameSinks(interval) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_ParamsSpec,
      null,
      [interval]);
  }

  stopThrottlingAllFrameSinks() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_ParamsSpec,
      null,
      []);
  }

  requestCopyOfOutput(surface_id, request, capture_exact_surface_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      viz.mojom.FrameSinkManager_RequestCopyOfOutput_ParamsSpec,
      null,
      [surface_id, request, capture_exact_surface_id]);
  }

  cacheBackBuffer(cache_id, root_frame_sink_id) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      viz.mojom.FrameSinkManager_CacheBackBuffer_ParamsSpec,
      null,
      [cache_id, root_frame_sink_id]);
  }

  evictBackBuffer(cache_id) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      viz.mojom.FrameSinkManager_EvictBackBuffer_ParamsSpec,
      viz.mojom.FrameSinkManager_EvictBackBuffer_ResponseParamsSpec,
      [cache_id]);
  }

  updateDebugRendererSettings(debug_settings) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_ParamsSpec,
      null,
      [debug_settings]);
  }

  clearUnclaimedViewTransitionResources(transition_token) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_ParamsSpec,
      null,
      [transition_token]);
  }

  createMetricsRecorderForTest(receiver) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      viz.mojom.FrameSinkManager_CreateMetricsRecorderForTest_ParamsSpec,
      null,
      [receiver]);
  }

  enableFrameSinkManagerTestApi(receiver) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      viz.mojom.FrameSinkManager_EnableFrameSinkManagerTestApi_ParamsSpec,
      null,
      [receiver]);
  }

  setupRendererInputRouterDelegateRegistry(receiver) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      viz.mojom.FrameSinkManager_SetupRendererInputRouterDelegateRegistry_ParamsSpec,
      null,
      [receiver]);
  }

  notifyRendererBlockStateChanged(blocked, render_input_routers) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      viz.mojom.FrameSinkManager_NotifyRendererBlockStateChanged_ParamsSpec,
      null,
      [blocked, render_input_routers]);
  }

  requestInputBack() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      viz.mojom.FrameSinkManager_RequestInputBack_ParamsSpec,
      null,
      []);
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

viz.mojom.FrameSinkManagerPtr = viz.mojom.FrameSinkManagerRemote;
viz.mojom.FrameSinkManagerRequest = viz.mojom.FrameSinkManagerPendingReceiver;


// Interface: FrameSinkManagerClient
mojo.internal.Struct(
    viz.mojom.FrameSinkManagerClient_OnFirstSurfaceActivation_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_OnFirstSurfaceActivation_Params', [
      mojo.internal.StructField('surface_info', 0, 0, viz.mojom.SurfaceInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('hit_test_data', 8, 0, mojo.internal.Array(viz.mojom.AggregatedHitTestRegionSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_token', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('activation_time', 8, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('destination_token', 0, 0, blink.mojom.SameDocNavigationScreenshotDestinationTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('copy_output_result', 8, 0, viz.mojom.CopyOutputResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_Params', [
      mojo.internal.StructField('region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerClient_OnViewTransitionResourcesCaptured_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_OnViewTransitionResourcesCaptured_Params', [
      mojo.internal.StructField('transition_token', 0, 0, blink.mojom.ViewTransitionTokenSpec, null, false, 0, undefined),
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
      [surface_info]);
  }

  onAggregatedHitTestRegionListUpdated(frame_sink_id, hit_test_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_ParamsSpec,
      null,
      [frame_sink_id, hit_test_data]);
  }

  onFrameTokenChanged(frame_sink_id, frame_token, activation_time) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_ParamsSpec,
      null,
      [frame_sink_id, frame_token, activation_time]);
  }

  verifyThreadIdsDoNotBelongToHost(thread_ids) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ParamsSpec,
      viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ResponseParamsSpec,
      [thread_ids]);
  }

  onScreenshotCaptured(destination_token, copy_output_result) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.FrameSinkManagerClient_OnScreenshotCaptured_ParamsSpec,
      null,
      [destination_token, copy_output_result]);
  }

  onVizTouchStateAvailable(region) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_ParamsSpec,
      null,
      [region]);
  }

  onViewTransitionResourcesCaptured(transition_token) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.FrameSinkManagerClient_OnViewTransitionResourcesCaptured_ParamsSpec,
      null,
      [transition_token]);
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

viz.mojom.FrameSinkManagerClientPtr = viz.mojom.FrameSinkManagerClientRemote;
viz.mojom.FrameSinkManagerClientRequest = viz.mojom.FrameSinkManagerClientPendingReceiver;


// Interface: RendererInputRouterDelegateRegistry
mojo.internal.Struct(
    viz.mojom.RendererInputRouterDelegateRegistry_SetupRenderInputRouterDelegateConnection_ParamsSpec, 'viz.mojom.RendererInputRouterDelegateRegistry_SetupRenderInputRouterDelegateConnection_Params', [
      mojo.internal.StructField('id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('rir_delegate_client_remote', 8, 0, mojo.internal.AssociatedInterfaceProxy(input.mojom.RenderInputRouterDelegateClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('rir_delegate_receiver', 16, 0, mojo.internal.AssociatedInterfaceRequest(input.mojom.RenderInputRouterDelegateRemote), null, false, 0, undefined),
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
      [id, rir_delegate_client_remote, rir_delegate_receiver]);
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

viz.mojom.RendererInputRouterDelegateRegistryPtr = viz.mojom.RendererInputRouterDelegateRegistryRemote;
viz.mojom.RendererInputRouterDelegateRegistryRequest = viz.mojom.RendererInputRouterDelegateRegistryPendingReceiver;

