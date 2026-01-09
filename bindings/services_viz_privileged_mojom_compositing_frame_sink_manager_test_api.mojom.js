// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sink_manager_test_api.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: FrameSinkManagerTestApi
viz.mojom.FrameSinkManagerTestApiPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.FrameSinkManagerTestApi';
  }

  hasUnclaimedViewTransitionResources() {
    // Method: HasUnclaimedViewTransitionResources
    return new Promise((resolve) => {
      // Call: HasUnclaimedViewTransitionResources()
      resolve({});
    });
  }

  setSameDocNavigationScreenshotSize(result_size) {
    // Method: SetSameDocNavigationScreenshotSize
    // Call: SetSameDocNavigationScreenshotSize(result_size)
  }

  getForceEnableZoomState(frame_sink_id) {
    // Method: GetForceEnableZoomState
    return new Promise((resolve) => {
      // Call: GetForceEnableZoomState(frame_sink_id)
      resolve({});
    });
  }

  waitForSurfaceAnimationManager(frame_sink_id) {
    // Method: WaitForSurfaceAnimationManager
    // Call: WaitForSurfaceAnimationManager(frame_sink_id)
  }

};

viz.mojom.FrameSinkManagerTestApiRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
