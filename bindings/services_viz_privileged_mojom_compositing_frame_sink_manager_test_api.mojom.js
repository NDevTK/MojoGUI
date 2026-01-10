// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sink_manager_test_api.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Interface: FrameSinkManagerTestApi
viz.mojom.mojom.FrameSinkManagerTestApi = {};

viz.mojom.mojom.FrameSinkManagerTestApiPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.FrameSinkManagerTestApiRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkManagerTestApi';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.FrameSinkManagerTestApiPendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.FrameSinkManagerTestApiRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.FrameSinkManagerTestApiRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  hasUnclaimedViewTransitionResources() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ParamsSpec,
      viz.mojom.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ResponseParamsSpec,
      []);
  }

  setSameDocNavigationScreenshotSize(result_size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ParamsSpec,
      null,
      [result_size]);
  }

  getForceEnableZoomState(frame_sink_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ParamsSpec,
      viz.mojom.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ResponseParamsSpec,
      [frame_sink_id]);
  }

  waitForSurfaceAnimationManager(frame_sink_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ParamsSpec,
      null,
      [frame_sink_id]);
  }

};

viz.mojom.mojom.FrameSinkManagerTestApi.getRemote = function() {
  let remote = new viz.mojom.mojom.FrameSinkManagerTestApiRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkManagerTestApi',
    'context');
  return remote.$;
};

// ParamsSpec for HasUnclaimedViewTransitionResources
viz.mojom.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManagerTestApi.HasUnclaimedViewTransitionResources_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

viz.mojom.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManagerTestApi.HasUnclaimedViewTransitionResources_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_resources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSameDocNavigationScreenshotSize
viz.mojom.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManagerTestApi.SetSameDocNavigationScreenshotSize_Params',
      packedSize: 16,
      fields: [
        { name: 'result_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetForceEnableZoomState
viz.mojom.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManagerTestApi.GetForceEnableZoomState_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

viz.mojom.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManagerTestApi.GetForceEnableZoomState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WaitForSurfaceAnimationManager
viz.mojom.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkManagerTestApi.WaitForSurfaceAnimationManager_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.mojom.FrameSinkManagerTestApiPtr = viz.mojom.mojom.FrameSinkManagerTestApiRemote;
viz.mojom.mojom.FrameSinkManagerTestApiRequest = viz.mojom.mojom.FrameSinkManagerTestApiPendingReceiver;

