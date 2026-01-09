// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sink_manager.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: RootCompositorFrameSinkParams
viz.mojom.RootCompositorFrameSinkParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.RootCompositorFrameSinkParams',
      packedSize: 80,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'widget', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SurfaceHandleSpec, nullable: false },
        { name: 'renderer_settings', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'create_input_receiver', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'refresh_rate', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'compositor_frame_sink', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
        { name: 'compositor_frame_sink_client', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'display_private', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
        { name: 'display_client', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'external_begin_frame_controller', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: true },
        { name: 'external_begin_frame_controller_client', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: true },
        { name: 'gpu_compositing', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'send_swap_size_notifications', packedOffset: 64, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_frame_rate_limit', packedOffset: 64, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CompositorDisplayLinkParams
viz.mojom.CompositorDisplayLinkParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorDisplayLinkParams',
      packedSize: 16,
      fields: [
        { name: 'external_begin_frame_controller', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
        { name: 'external_begin_frame_controller_client', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: FrameSinkManager
viz.mojom.FrameSinkManager = {};

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
      null,
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
      null,
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
      null,
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

// ParamsSpec for RegisterFrameSinkId
viz.mojom.FrameSinkManager_RegisterFrameSinkId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.RegisterFrameSinkId_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'report_activation', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InvalidateFrameSinkId
viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.InvalidateFrameSinkId_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetFrameSinkDebugLabel
viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.SetFrameSinkDebugLabel_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'debug_label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateRootCompositorFrameSink
viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.CreateRootCompositorFrameSink_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.RootCompositorFrameSinkParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateCompositorDisplayLink
viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.CreateCompositorDisplayLink_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.CompositorDisplayLinkParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateFrameSinkBundle
viz.mojom.FrameSinkManager_CreateFrameSinkBundle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.CreateFrameSinkBundle_Params',
      packedSize: 24,
      fields: [
        { name: 'bundle_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'client', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateCompositorFrameSink
viz.mojom.FrameSinkManager_CreateCompositorFrameSink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.CreateCompositorFrameSink_Params',
      packedSize: 40,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'bundle_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'config', packedOffset: 16, packedBitOffset: 0, type: input.mojom.RenderInputRouterConfigSpec, nullable: true },
        { name: 'compositor_frame_sink', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'compositor_frame_sink_client', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DestroyCompositorFrameSink
viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.DestroyCompositorFrameSink_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterFrameSinkHierarchy
viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.RegisterFrameSinkHierarchy_Params',
      packedSize: 24,
      fields: [
        { name: 'parent_frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'child_frame_sink_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UnregisterFrameSinkHierarchy
viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.UnregisterFrameSinkHierarchy_Params',
      packedSize: 24,
      fields: [
        { name: 'parent_frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'child_frame_sink_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddVideoDetectorObserver
viz.mojom.FrameSinkManager_AddVideoDetectorObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.AddVideoDetectorObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateVideoCapturer
viz.mojom.FrameSinkManager_CreateVideoCapturer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.CreateVideoCapturer_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'capture_version_source', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EvictSurfaces
viz.mojom.FrameSinkManager_EvictSurfaces_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.EvictSurfaces_Params',
      packedSize: 16,
      fields: [
        { name: 'surface_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Throttle
viz.mojom.FrameSinkManager_Throttle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.Throttle_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_sink_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'interval', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartThrottlingAllFrameSinks
viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.StartThrottlingAllFrameSinks_Params',
      packedSize: 16,
      fields: [
        { name: 'interval', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopThrottlingAllFrameSinks
viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.StopThrottlingAllFrameSinks_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestCopyOfOutput
viz.mojom.FrameSinkManager_RequestCopyOfOutput_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.RequestCopyOfOutput_Params',
      packedSize: 32,
      fields: [
        { name: 'surface_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'request', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'capture_exact_surface_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CacheBackBuffer
viz.mojom.FrameSinkManager_CacheBackBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.CacheBackBuffer_Params',
      packedSize: 24,
      fields: [
        { name: 'root_frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'cache_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EvictBackBuffer
viz.mojom.FrameSinkManager_EvictBackBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.EvictBackBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'cache_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateDebugRendererSettings
viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.UpdateDebugRendererSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'debug_settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearUnclaimedViewTransitionResources
viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.ClearUnclaimedViewTransitionResources_Params',
      packedSize: 16,
      fields: [
        { name: 'transition_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ViewTransitionTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateMetricsRecorderForTest
viz.mojom.FrameSinkManager_CreateMetricsRecorderForTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.CreateMetricsRecorderForTest_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnableFrameSinkManagerTestApi
viz.mojom.FrameSinkManager_EnableFrameSinkManagerTestApi_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.EnableFrameSinkManagerTestApi_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetupRendererInputRouterDelegateRegistry
viz.mojom.FrameSinkManager_SetupRendererInputRouterDelegateRegistry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.SetupRendererInputRouterDelegateRegistry_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyRendererBlockStateChanged
viz.mojom.FrameSinkManager_NotifyRendererBlockStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.NotifyRendererBlockStateChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'render_input_routers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'blocked', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestInputBack
viz.mojom.FrameSinkManager_RequestInputBack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManager.RequestInputBack_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
viz.mojom.FrameSinkManagerPtr = viz.mojom.FrameSinkManagerRemote;
viz.mojom.FrameSinkManagerRequest = viz.mojom.FrameSinkManagerPendingReceiver;


// Interface: FrameSinkManagerClient
viz.mojom.FrameSinkManagerClient = {};

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

// ParamsSpec for OnFirstSurfaceActivation
viz.mojom.FrameSinkManagerClient_OnFirstSurfaceActivation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManagerClient.OnFirstSurfaceActivation_Params',
      packedSize: 16,
      fields: [
        { name: 'surface_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAggregatedHitTestRegionListUpdated
viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManagerClient.OnAggregatedHitTestRegionListUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'hit_test_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFrameTokenChanged
viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManagerClient.OnFrameTokenChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'activation_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'frame_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for VerifyThreadIdsDoNotBelongToHost
viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManagerClient.VerifyThreadIdsDoNotBelongToHost_Params',
      packedSize: 16,
      fields: [
        { name: 'thread_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManagerClient.VerifyThreadIdsDoNotBelongToHost_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'passed_verification', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnScreenshotCaptured
viz.mojom.FrameSinkManagerClient_OnScreenshotCaptured_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManagerClient.OnScreenshotCaptured_Params',
      packedSize: 24,
      fields: [
        { name: 'destination_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SameDocNavigationScreenshotDestinationTokenSpec, nullable: false },
        { name: 'copy_output_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnVizTouchStateAvailable
viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManagerClient.OnVizTouchStateAvailable_Params',
      packedSize: 16,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnViewTransitionResourcesCaptured
viz.mojom.FrameSinkManagerClient_OnViewTransitionResourcesCaptured_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManagerClient.OnViewTransitionResourcesCaptured_Params',
      packedSize: 16,
      fields: [
        { name: 'transition_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ViewTransitionTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
viz.mojom.FrameSinkManagerClientPtr = viz.mojom.FrameSinkManagerClientRemote;
viz.mojom.FrameSinkManagerClientRequest = viz.mojom.FrameSinkManagerClientPendingReceiver;


// Interface: RendererInputRouterDelegateRegistry
viz.mojom.RendererInputRouterDelegateRegistry = {};

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

// ParamsSpec for SetupRenderInputRouterDelegateConnection
viz.mojom.RendererInputRouterDelegateRegistry_SetupRenderInputRouterDelegateConnection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.RendererInputRouterDelegateRegistry.SetupRenderInputRouterDelegateConnection_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'rir_delegate_client_remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
        { name: 'rir_delegate_receiver', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
viz.mojom.RendererInputRouterDelegateRegistryPtr = viz.mojom.RendererInputRouterDelegateRegistryRemote;
viz.mojom.RendererInputRouterDelegateRegistryRequest = viz.mojom.RendererInputRouterDelegateRegistryPendingReceiver;

