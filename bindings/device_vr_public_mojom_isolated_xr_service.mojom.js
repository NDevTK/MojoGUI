// Auto-generated MojoJS binding
// Source: chromium_src/device/vr/public/mojom/isolated_xr_service.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Struct: XRRuntimeSessionOptions
device.mojom.XRRuntimeSessionOptions = class {
  constructor(values = {}) {
    this.optional_features = values.optional_features !== undefined ? values.optional_features : [];
    this.checks = values.checks !== undefined ? values.checks : null;
    this.depth_options = values.depth_options !== undefined ? values.depth_options : 0;
    this.trace_id = values.trace_id !== undefined ? values.trace_id : 0;
  }
};

// Struct: XRRuntimeSessionResult
device.mojom.XRRuntimeSessionResult = class {
  constructor(values = {}) {
    this.session = values.session !== undefined ? values.session : null;
    this.to = values.to !== undefined ? values.to : null;
    this.XrSession = values.XrSession !== undefined ? values.XrSession : null;
    this.frame_sink_id = values.frame_sink_id !== undefined ? values.frame_sink_id : null;
    this.overlay = values.overlay !== undefined ? values.overlay : null;
  }
};

// Struct: XRDeviceData
device.mojom.XRDeviceData = class {
  constructor(values = {}) {
    this.is_ar_blend_mode_supported = values.is_ar_blend_mode_supported !== undefined ? values.is_ar_blend_mode_supported : false;
  }
};

// Interface: XRSessionController
device.mojom.XRSessionControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.XRSessionController';
  }

  setFrameDataRestricted(restricted) {
    // Method: SetFrameDataRestricted
    // Call: SetFrameDataRestricted(restricted)
  }

};

device.mojom.XRSessionControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: XRRuntimeEventListener
device.mojom.XRRuntimeEventListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.XRRuntimeEventListener';
  }

  onVisibilityStateChanged(visibility_state) {
    // Method: OnVisibilityStateChanged
    // Call: OnVisibilityStateChanged(visibility_state)
  }

  onExitPresent() {
    // Method: OnExitPresent
    // Call: OnExitPresent()
  }

};

device.mojom.XRRuntimeEventListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: XRRuntime
device.mojom.XRRuntimePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.XRRuntime';
  }

  requestSession(options) {
    // Method: RequestSession
    return new Promise((resolve) => {
      // Call: RequestSession(options)
      resolve({});
    });
  }

  shutdownSession() {
    // Method: ShutdownSession
    // Call: ShutdownSession()
  }

  listenToDeviceChanges(listener) {
    // Method: ListenToDeviceChanges
    // Call: ListenToDeviceChanges(listener)
  }

};

device.mojom.XRRuntimeRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ImmersiveOverlay
device.mojom.ImmersiveOverlayPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.ImmersiveOverlay';
  }

  requestNextOverlayPose() {
    // Method: RequestNextOverlayPose
    return new Promise((resolve) => {
      // Call: RequestNextOverlayPose()
      resolve({});
    });
  }

  submitOverlayTexture(frame_id, texture, sync_token, left_bounds, right_bounds) {
    // Method: SubmitOverlayTexture
    return new Promise((resolve) => {
      // Call: SubmitOverlayTexture(frame_id, texture, sync_token, left_bounds, right_bounds)
      resolve({});
    });
  }

  setOverlayAndWebXRVisibility(overlay_visible, webxr_visible) {
    // Method: SetOverlayAndWebXRVisibility
    // Call: SetOverlayAndWebXRVisibility(overlay_visible, webxr_visible)
  }

  requestNotificationOnWebXrSubmitted() {
    // Method: RequestNotificationOnWebXrSubmitted
    // Call: RequestNotificationOnWebXrSubmitted()
  }

};

device.mojom.ImmersiveOverlayRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: IsolatedXRRuntimeProviderClient
device.mojom.IsolatedXRRuntimeProviderClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.IsolatedXRRuntimeProviderClient';
  }

  onDeviceAdded(runtime, device_data, device_id) {
    // Method: OnDeviceAdded
    // Call: OnDeviceAdded(runtime, device_data, device_id)
  }

  onDeviceRemoved(device_index) {
    // Method: OnDeviceRemoved
    // Call: OnDeviceRemoved(device_index)
  }

  onDevicesEnumerated() {
    // Method: OnDevicesEnumerated
    // Call: OnDevicesEnumerated()
  }

};

device.mojom.IsolatedXRRuntimeProviderClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: IsolatedXRRuntimeProvider
device.mojom.IsolatedXRRuntimeProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.IsolatedXRRuntimeProvider';
  }

  requestDevices(client) {
    // Method: RequestDevices
    // Call: RequestDevices(client)
  }

};

device.mojom.IsolatedXRRuntimeProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: XRDeviceService
device.mojom.XRDeviceServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.XRDeviceService';
  }

  bindRuntimeProvider(receiver, host) {
    // Method: BindRuntimeProvider
    // Call: BindRuntimeProvider(receiver, host)
  }

  bindTestHook(receiver) {
    // Method: BindTestHook
    // Call: BindTestHook(receiver)
  }

};

device.mojom.XRDeviceServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: XRDeviceServiceHost
device.mojom.XRDeviceServiceHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.XRDeviceServiceHost';
  }

  bindGpu(receiver) {
    // Method: BindGpu
    // Call: BindGpu(receiver)
  }

};

device.mojom.XRDeviceServiceHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
