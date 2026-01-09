// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/drm/mojom/drm_device.mojom
// Module: ui.ozone.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.ozone = ui.ozone || {};
ui.ozone.mojom = ui.ozone.mojom || {};


// Interface: DrmDevice
ui.ozone.mojom.DrmDevicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ui.ozone.mojom.DrmDevice';
  }

  createWindow(widget, initial_bounds) {
    // Method: CreateWindow
    // Call: CreateWindow(widget, initial_bounds)
  }

  destroyWindow(widget) {
    // Method: DestroyWindow
    // Call: DestroyWindow(widget)
  }

  setWindowBounds(widget, bounds) {
    // Method: SetWindowBounds
    // Call: SetWindowBounds(widget, bounds)
  }

  takeDisplayControl() {
    // Method: TakeDisplayControl
    return new Promise((resolve) => {
      // Call: TakeDisplayControl()
      resolve({});
    });
  }

  relinquishDisplayControl() {
    // Method: RelinquishDisplayControl
    return new Promise((resolve) => {
      // Call: RelinquishDisplayControl()
      resolve({});
    });
  }

  refreshNativeDisplays() {
    // Method: RefreshNativeDisplays
    return new Promise((resolve) => {
      // Call: RefreshNativeDisplays()
      resolve({});
    });
  }

  addGraphicsDevice(path, fd_mojo_handle) {
    // Method: AddGraphicsDevice
    // Call: AddGraphicsDevice(path, fd_mojo_handle)
  }

  removeGraphicsDevice(path) {
    // Method: RemoveGraphicsDevice
    // Call: RemoveGraphicsDevice(path)
  }

  shouldDisplayEventTriggerConfiguration(event_props) {
    // Method: ShouldDisplayEventTriggerConfiguration
    return new Promise((resolve) => {
      // Call: ShouldDisplayEventTriggerConfiguration(event_props)
      resolve({});
    });
  }

  configureNativeDisplays(config_requests, modeset_flags) {
    // Method: ConfigureNativeDisplays
    return new Promise((resolve) => {
      // Call: ConfigureNativeDisplays(config_requests, modeset_flags)
      resolve({});
    });
  }

  setHdcpKeyProp(display_id, key) {
    // Method: SetHdcpKeyProp
    return new Promise((resolve) => {
      // Call: SetHdcpKeyProp(display_id, key)
      resolve({});
    });
  }

  getHDCPState(display_id) {
    // Method: GetHDCPState
    return new Promise((resolve) => {
      // Call: GetHDCPState(display_id)
      resolve({});
    });
  }

  setHDCPState(display_id, state, protection_method) {
    // Method: SetHDCPState
    return new Promise((resolve) => {
      // Call: SetHDCPState(display_id, state, protection_method)
      resolve({});
    });
  }

  setColorTemperatureAdjustment(display_id, cta) {
    // Method: SetColorTemperatureAdjustment
    // Call: SetColorTemperatureAdjustment(display_id, cta)
  }

  setColorCalibration(display_id, calibration) {
    // Method: SetColorCalibration
    // Call: SetColorCalibration(display_id, calibration)
  }

  setGammaAdjustment(display_id, adjustment) {
    // Method: SetGammaAdjustment
    // Call: SetGammaAdjustment(display_id, adjustment)
  }

  setPrivacyScreen(display_id, enabled) {
    // Method: SetPrivacyScreen
    return new Promise((resolve) => {
      // Call: SetPrivacyScreen(display_id, enabled)
      resolve({});
    });
  }

  getSeamlessRefreshRates(display_id) {
    // Method: GetSeamlessRefreshRates
    return new Promise((resolve) => {
      // Call: GetSeamlessRefreshRates(display_id)
      resolve({});
    });
  }

  getDeviceCursor(cursor) {
    // Method: GetDeviceCursor
    // Call: GetDeviceCursor(cursor)
  }

};

ui.ozone.mojom.DrmDeviceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
