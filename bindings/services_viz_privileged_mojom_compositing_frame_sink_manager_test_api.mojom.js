// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sink_manager_test_api.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};
var ui = ui || {};
var gfx = gfx || {};

viz.mojom.FrameSinkManagerTestApi = {};
viz.mojom.FrameSinkManagerTestApi.$interfaceName = 'viz.mojom.FrameSinkManagerTestApi';
viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ResponseParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ResponseParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ResponseParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ResponseParamsSpec = { $: {} };

// Interface: FrameSinkManagerTestApi
mojo.internal.Struct(
    viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ParamsSpec, 'viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ResponseParamsSpec, 'viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ResponseParams', [
      mojo.internal.StructField('has_resources', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ParamsSpec, 'viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_Params', [
      mojo.internal.StructField('result_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ResponseParamsSpec, 'viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ParamsSpec, 'viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ResponseParamsSpec, 'viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ParamsSpec, 'viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ResponseParamsSpec, 'viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ResponseParams', [
    ],
    [[0, 8]]);

viz.mojom.FrameSinkManagerTestApiPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.FrameSinkManagerTestApiRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkManagerTestApi';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.FrameSinkManagerTestApiPendingReceiver,
      handle);
    this.$ = new viz.mojom.FrameSinkManagerTestApiRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.FrameSinkManagerTestApiRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  hasUnclaimedViewTransitionResources() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ParamsSpec,
      viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ResponseParamsSpec,
      [],
      false);
  }

  setSameDocNavigationScreenshotSize(result_size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ParamsSpec,
      viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ResponseParamsSpec,
      [result_size],
      false);
  }

  getForceEnableZoomState(frame_sink_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ParamsSpec,
      viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ResponseParamsSpec,
      [frame_sink_id],
      false);
  }

  waitForSurfaceAnimationManager(frame_sink_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ParamsSpec,
      viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ResponseParamsSpec,
      [frame_sink_id],
      false);
  }

};

viz.mojom.FrameSinkManagerTestApi.getRemote = function() {
  let remote = new viz.mojom.FrameSinkManagerTestApiRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkManagerTestApi',
    'context');
  return remote.$;
};

viz.mojom.FrameSinkManagerTestApiPtr = viz.mojom.FrameSinkManagerTestApiRemote;
viz.mojom.FrameSinkManagerTestApiRequest = viz.mojom.FrameSinkManagerTestApiPendingReceiver;

