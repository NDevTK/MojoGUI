// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sink_manager.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: RootCompositorFrameSinkParams
viz.mojom.RootCompositorFrameSinkParams = class {
  constructor(values = {}) {
    this.external_begin_frame_controller = values.external_begin_frame_controller !== undefined ? values.external_begin_frame_controller : 0;
    this.external_begin_frame_controller_client = values.external_begin_frame_controller_client !== undefined ? values.external_begin_frame_controller_client : null;
  }
};

// Struct: CompositorDisplayLinkParams
viz.mojom.CompositorDisplayLinkParams = class {
  constructor(values = {}) {
    this.external_begin_frame_controller_client = values.external_begin_frame_controller_client !== undefined ? values.external_begin_frame_controller_client : null;
  }
};

// Interface: FrameSinkManager
viz.mojom.FrameSinkManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.FrameSinkManager';
  }

  registerFrameSinkId(frame_sink_id, report_activation) {
    // Method: RegisterFrameSinkId
    // Call: RegisterFrameSinkId(frame_sink_id, report_activation)
  }

  invalidateFrameSinkId(frame_sink_id) {
    // Method: InvalidateFrameSinkId
    // Call: InvalidateFrameSinkId(frame_sink_id)
  }

  setFrameSinkDebugLabel(frame_sink_id, debug_label) {
    // Method: SetFrameSinkDebugLabel
    // Call: SetFrameSinkDebugLabel(frame_sink_id, debug_label)
  }

  createRootCompositorFrameSink(params) {
    // Method: CreateRootCompositorFrameSink
    // Call: CreateRootCompositorFrameSink(params)
  }

  createCompositorDisplayLink(params) {
    // Method: CreateCompositorDisplayLink
    // Call: CreateCompositorDisplayLink(params)
  }

  createFrameSinkBundle(bundle_id, receiver, client) {
    // Method: CreateFrameSinkBundle
    // Call: CreateFrameSinkBundle(bundle_id, receiver, client)
  }

  createCompositorFrameSink(frame_sink_id, bundle_id, compositor_frame_sink, compositor_frame_sink_client, config) {
    // Method: CreateCompositorFrameSink
    // Call: CreateCompositorFrameSink(frame_sink_id, bundle_id, compositor_frame_sink, compositor_frame_sink_client, config)
  }

  destroyCompositorFrameSink(frame_sink_id) {
    // Method: DestroyCompositorFrameSink
    // Call: DestroyCompositorFrameSink(frame_sink_id)
  }

  registerFrameSinkHierarchy(parent_frame_sink_id, child_frame_sink_id) {
    // Method: RegisterFrameSinkHierarchy
    // Call: RegisterFrameSinkHierarchy(parent_frame_sink_id, child_frame_sink_id)
  }

  unregisterFrameSinkHierarchy(parent_frame_sink_id, child_frame_sink_id) {
    // Method: UnregisterFrameSinkHierarchy
    // Call: UnregisterFrameSinkHierarchy(parent_frame_sink_id, child_frame_sink_id)
  }

  addVideoDetectorObserver(observer) {
    // Method: AddVideoDetectorObserver
    // Call: AddVideoDetectorObserver(observer)
  }

  createVideoCapturer(receiver, capture_version_source) {
    // Method: CreateVideoCapturer
    // Call: CreateVideoCapturer(receiver, capture_version_source)
  }

  evictSurfaces(surface_ids) {
    // Method: EvictSurfaces
    // Call: EvictSurfaces(surface_ids)
  }

  throttle(frame_sink_ids, interval) {
    // Method: Throttle
    // Call: Throttle(frame_sink_ids, interval)
  }

  startThrottlingAllFrameSinks(interval) {
    // Method: StartThrottlingAllFrameSinks
    // Call: StartThrottlingAllFrameSinks(interval)
  }

  stopThrottlingAllFrameSinks() {
    // Method: StopThrottlingAllFrameSinks
    // Call: StopThrottlingAllFrameSinks()
  }

  requestCopyOfOutput(surface_id, request, capture_exact_surface_id) {
    // Method: RequestCopyOfOutput
    // Call: RequestCopyOfOutput(surface_id, request, capture_exact_surface_id)
  }

  cacheBackBuffer(cache_id, root_frame_sink_id) {
    // Method: CacheBackBuffer
    // Call: CacheBackBuffer(cache_id, root_frame_sink_id)
  }

  evictBackBuffer(cache_id) {
    // Method: EvictBackBuffer
    // Call: EvictBackBuffer(cache_id)
  }

  updateDebugRendererSettings(debug_settings) {
    // Method: UpdateDebugRendererSettings
    // Call: UpdateDebugRendererSettings(debug_settings)
  }

  clearUnclaimedViewTransitionResources(transition_token) {
    // Method: ClearUnclaimedViewTransitionResources
    // Call: ClearUnclaimedViewTransitionResources(transition_token)
  }

  createMetricsRecorderForTest(receiver) {
    // Method: CreateMetricsRecorderForTest
    // Call: CreateMetricsRecorderForTest(receiver)
  }

  enableFrameSinkManagerTestApi(receiver) {
    // Method: EnableFrameSinkManagerTestApi
    // Call: EnableFrameSinkManagerTestApi(receiver)
  }

  setupRendererInputRouterDelegateRegistry(receiver) {
    // Method: SetupRendererInputRouterDelegateRegistry
    // Call: SetupRendererInputRouterDelegateRegistry(receiver)
  }

  notifyRendererBlockStateChanged(blocked, render_input_routers) {
    // Method: NotifyRendererBlockStateChanged
    // Call: NotifyRendererBlockStateChanged(blocked, render_input_routers)
  }

  requestInputBack() {
    // Method: RequestInputBack
    // Call: RequestInputBack()
  }

};

viz.mojom.FrameSinkManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FrameSinkManagerClient
viz.mojom.FrameSinkManagerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.FrameSinkManagerClient';
  }

  onFirstSurfaceActivation(surface_info) {
    // Method: OnFirstSurfaceActivation
    // Call: OnFirstSurfaceActivation(surface_info)
  }

  onAggregatedHitTestRegionListUpdated(frame_sink_id, hit_test_data) {
    // Method: OnAggregatedHitTestRegionListUpdated
    // Call: OnAggregatedHitTestRegionListUpdated(frame_sink_id, hit_test_data)
  }

  onFrameTokenChanged(frame_sink_id, frame_token, activation_time) {
    // Method: OnFrameTokenChanged
    // Call: OnFrameTokenChanged(frame_sink_id, frame_token, activation_time)
  }

  verifyThreadIdsDoNotBelongToHost(thread_ids) {
    // Method: VerifyThreadIdsDoNotBelongToHost
    return new Promise((resolve) => {
      // Call: VerifyThreadIdsDoNotBelongToHost(thread_ids)
      resolve({});
    });
  }

  onScreenshotCaptured(destination_token, copy_output_result) {
    // Method: OnScreenshotCaptured
    // Call: OnScreenshotCaptured(destination_token, copy_output_result)
  }

  onVizTouchStateAvailable(region) {
    // Method: OnVizTouchStateAvailable
    // Call: OnVizTouchStateAvailable(region)
  }

  onViewTransitionResourcesCaptured(transition_token) {
    // Method: OnViewTransitionResourcesCaptured
    // Call: OnViewTransitionResourcesCaptured(transition_token)
  }

};

viz.mojom.FrameSinkManagerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RendererInputRouterDelegateRegistry
viz.mojom.RendererInputRouterDelegateRegistryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.RendererInputRouterDelegateRegistry';
  }

  setupRenderInputRouterDelegateConnection(id, rir_delegate_client_remote, rir_delegate_receiver) {
    // Method: SetupRenderInputRouterDelegateConnection
    // Call: SetupRenderInputRouterDelegateConnection(id, rir_delegate_client_remote, rir_delegate_receiver)
  }

};

viz.mojom.RendererInputRouterDelegateRegistryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
