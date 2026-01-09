// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/display_private.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: DisplayPrivate
viz.mojom.DisplayPrivatePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.DisplayPrivate';
  }

  setDisplayVisible(visible) {
    // Method: SetDisplayVisible
    // Call: SetDisplayVisible(visible)
  }

  resize() {
    // Method: Resize
    // Call: Resize()
  }

  disableSwapUntilResize() {
    // Method: DisableSwapUntilResize
    // Call: DisableSwapUntilResize()
  }

  resize(size) {
    // Method: Resize
    // Call: Resize(size)
  }

  setDisplayColorMatrix(color_matrix) {
    // Method: SetDisplayColorMatrix
    // Call: SetDisplayColorMatrix(color_matrix)
  }

  setDisplayColorSpaces(display_color_spaces) {
    // Method: SetDisplayColorSpaces
    // Call: SetDisplayColorSpaces(display_color_spaces)
  }

  setOutputIsSecure(secure) {
    // Method: SetOutputIsSecure
    // Call: SetOutputIsSecure(secure)
  }

  setVSyncDisplayID(display_id) {
    // Method: SetVSyncDisplayID
    // Call: SetVSyncDisplayID(display_id)
  }

  setDisplayVSyncParameters(timebase, interval) {
    // Method: SetDisplayVSyncParameters
    // Call: SetDisplayVSyncParameters(timebase, interval)
  }

  forceImmediateDrawAndSwapIfPossible() {
    // Method: ForceImmediateDrawAndSwapIfPossible
    // Call: ForceImmediateDrawAndSwapIfPossible()
  }

  updateRefreshRate(refresh_rate) {
    // Method: UpdateRefreshRate
    // Call: UpdateRefreshRate(refresh_rate)
  }

  setAdaptiveRefreshRateInfo(has_support, suggested_high, device_scale_factor) {
    // Method: SetAdaptiveRefreshRateInfo
    // Call: SetAdaptiveRefreshRateInfo(has_support, suggested_high, device_scale_factor)
  }

  setSupportedRefreshRates(refresh_rates) {
    // Method: SetSupportedRefreshRates
    // Call: SetSupportedRefreshRates(refresh_rates)
  }

  preserveChildSurfaceControls() {
    // Method: PreserveChildSurfaceControls
    // Call: PreserveChildSurfaceControls()
  }

  setSwapCompletionCallbackEnabled(enable) {
    // Method: SetSwapCompletionCallbackEnabled
    // Call: SetSwapCompletionCallbackEnabled(enable)
  }

  addVSyncParameterObserver(observer) {
    // Method: AddVSyncParameterObserver
    // Call: AddVSyncParameterObserver(observer)
  }

  setDelegatedInkPointRenderer(receiver) {
    // Method: SetDelegatedInkPointRenderer
    // Call: SetDelegatedInkPointRenderer(receiver)
  }

  setStandaloneBeginFrameObserver(observer) {
    // Method: SetStandaloneBeginFrameObserver
    // Call: SetStandaloneBeginFrameObserver(observer)
  }

  setMaxVSyncAndVrr(max_vsync_interval, vrr_state) {
    // Method: SetMaxVSyncAndVrr
    // Call: SetMaxVSyncAndVrr(max_vsync_interval, vrr_state)
  }

};

viz.mojom.DisplayPrivateRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DisplayClient
viz.mojom.DisplayClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.DisplayClient';
  }

  onDisplayReceivedCALayerParams(ca_layer_params) {
    // Method: OnDisplayReceivedCALayerParams
    // Call: OnDisplayReceivedCALayerParams(ca_layer_params)
  }

  createLayeredWindowUpdater(receiver) {
    // Method: CreateLayeredWindowUpdater
    // Call: CreateLayeredWindowUpdater(receiver)
  }

  addChildWindowToBrowser(child_window) {
    // Method: AddChildWindowToBrowser
    // Call: AddChildWindowToBrowser(child_window)
  }

  didCompleteSwapWithSize(size) {
    // Method: DidCompleteSwapWithSize
    // Call: DidCompleteSwapWithSize(size)
  }

  didCompleteSwapWithNewSize(size) {
    // Method: DidCompleteSwapWithNewSize
    // Call: DidCompleteSwapWithNewSize(size)
  }

  onContextCreationResult(result) {
    // Method: OnContextCreationResult
    // Call: OnContextCreationResult(result)
  }

  setWideColorEnabled(enabled) {
    // Method: SetWideColorEnabled
    // Call: SetWideColorEnabled(enabled)
  }

  setPreferredRefreshRate(refresh_rate) {
    // Method: SetPreferredRefreshRate
    // Call: SetPreferredRefreshRate(refresh_rate)
  }

};

viz.mojom.DisplayClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
