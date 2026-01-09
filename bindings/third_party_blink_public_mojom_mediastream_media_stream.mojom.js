// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mediastream/media_stream.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: MediaStreamType
blink.mojom.MediaStreamType = {
  NO_SERVICE: 0,
  webcam: 1,
  DEVICE_VIDEO_CAPTURE: 2,
  GUM_TAB_VIDEO_CAPTURE: 3,
  generated: 4,
  DISPLAY_AUDIO_CAPTURE: 5,
  this: 6,
  this: 7,
  as: 8,
};

// Enum: MediaStreamRequestResult
blink.mojom.MediaStreamRequestResult = {
  OK: 0,
  PERMISSION_DENIED: 1,
  PERMISSION_DISMISSED: 2,
  INVALID_STATE: 3,
  NO_HARDWARE: 4,
  INVALID_SECURITY_ORIGIN: 5,
  TAB_CAPTURE_FAILURE: 6,
  SCREEN_CAPTURE_FAILURE: 7,
  CAPTURE_FAILURE: 8,
  CONSTRAINT_NOT_SATISFIED: 9,
  TRACK_START_FAILURE_AUDIO: 10,
  TRACK_START_FAILURE_VIDEO: 11,
  NOT_SUPPORTED: 12,
  FAILED_DUE_TO_SHUTDOWN: 13,
  KILL_SWITCH_ON: 14,
  PERMISSION_DENIED_BY_SYSTEM: 15,
  DEVICE_IN_USE: 16,
  REQUEST_CANCELLED: 17,
  START_TIMEOUT: 18,
  PERMISSION_DENIED_BY_USER: 19,
  AUDIO_DEVICE_SOCKET_ERROR: 20,
  NO_TRANSIENT_ACTIVATION: 21,
  CAPTURE_NOT_ALLOWED_BY_POLICY: 22,
  INVALID_DISPLAY_CAPTURE_CONSTRAINTS: 23,
  INVALID_GUM_TAB_CAPTURE_CONSTRAINTS: 24,
  INVALID_GUM_SCREEN_CAPTURE_CONSTRAINTS: 25,
  INVALID_VIDEO_DEVICE_ID: 26,
  STREAM_NOT_FOUND_IN_REGISTRY: 27,
  ANDROID_CANT_REQUEST_PERMISSION: 28,
  MULTI_CAPTURE_NOT_SUPPORTED: 29,
  PERMISSION_DENIED_BY_EMBEDDER_CONTEXT: 30,
  DLP_PERMISSION_DENIED: 31,
  REGISTRY_REQUEST_UNVERIFIED: 32,
  INVALID_DEVICE_TYPE_REQUEST: 33,
  INVALID_EXTENSION_TYPE_REQUEST: 34,
  CAPTURED_TAB_DESTROYED: 35,
  CAPTURE_NOT_ENABLED: 36,
  SAFE_BROWSING_OBSERVER: 37,
  CAPTURE_FROM_BACKGROUND_PAGE_ON_MAC: 38,
  CAPTURE_NOT_ALLOWED_FOR_LONG_DOMAINS: 39,
  PERMISSION_DENIED_BY_CONTROLLER: 40,
};

// Enum: MediaStreamStateChange
blink.mojom.MediaStreamStateChange = {
  PLAY: 0,
  PAUSE: 1,
};

// Enum: PreferredDisplaySurface
blink.mojom.PreferredDisplaySurface = {
  NO_PREFERENCE: 0,
  MONITOR: 1,
  WINDOW: 2,
  BROWSER: 3,
};

// Enum: CapturedSurfaceControlResult
blink.mojom.CapturedSurfaceControlResult = {
  kSuccess: 0,
  kUnknownError: 1,
  kNoPermissionError: 2,
  kCapturerNotFoundError: 3,
  kCapturedSurfaceNotFoundError: 4,
  kDisallowedForSelfCaptureError: 5,
  kCapturerNotFocusedError: 6,
  kMinZoomLevel: 7,
  kMaxZoomLevel: 8,
};

// Enum: ZoomLevelAction
blink.mojom.ZoomLevelAction = {
  kIncrease: 0,
  kDecrease: 1,
  kReset: 2,
};

// Enum: WindowAudioPreference
blink.mojom.WindowAudioPreference = {
  kSystem: 0,
  kWindow: 1,
  kExclude: 2,
};

// Struct: SearchOnlyByDeviceId
blink.mojom.SearchOnlyByDeviceId = class {
  constructor(values = {}) {
  }
};

// Struct: SearchBySessionId
blink.mojom.SearchBySessionId = class {
  constructor(values = {}) {
    this.session_id_map = values.session_id_map !== undefined ? values.session_id_map : "";
  }
};

// Struct: MediaStreamDevice
blink.mojom.MediaStreamDevice = class {
  constructor(values = {}) {
    this.display_media_info = values.display_media_info !== undefined ? values.display_media_info : 0;
  }
};

// Struct: TrackControls
blink.mojom.TrackControls = class {
  constructor(values = {}) {
    this.device_ids = values.device_ids !== undefined ? values.device_ids : "";
  }
};

// Struct: StreamControls
blink.mojom.StreamControls = class {
  constructor(values = {}) {
    this.exclude_monitor_type_surfaces = values.exclude_monitor_type_surfaces !== undefined ? values.exclude_monitor_type_surfaces : false;
  }
};

// Struct: GetOpenDeviceResponse
blink.mojom.GetOpenDeviceResponse = class {
  constructor(values = {}) {
    this.pan_tilt_zoom_allowed = values.pan_tilt_zoom_allowed !== undefined ? values.pan_tilt_zoom_allowed : false;
  }
};

// Struct: CapturedWheelAction
blink.mojom.CapturedWheelAction = class {
  constructor(values = {}) {
    this.wheel_delta_y = values.wheel_delta_y !== undefined ? values.wheel_delta_y : 0;
  }
};

// Struct: StreamDevices
blink.mojom.StreamDevices = class {
  constructor(values = {}) {
    this.video_device = values.video_device !== undefined ? values.video_device : null;
  }
};

// Struct: StreamDevicesSet
blink.mojom.StreamDevicesSet = class {
  constructor(values = {}) {
    this.stream_devices = values.stream_devices !== undefined ? values.stream_devices : [];
  }
};

// Interface: MediaStreamDeviceObserver
blink.mojom.MediaStreamDeviceObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.MediaStreamDeviceObserver';
  }

  onDeviceStopped(label, device) {
    // Method: OnDeviceStopped
    // Call: OnDeviceStopped(label, device)
  }

  onDeviceChanged(label, old_device, new_device) {
    // Method: OnDeviceChanged
    // Call: OnDeviceChanged(label, old_device, new_device)
  }

  onDeviceRequestStateChange(label, device, new_state) {
    // Method: OnDeviceRequestStateChange
    // Call: OnDeviceRequestStateChange(label, device, new_state)
  }

  onDeviceCaptureConfigurationChange(label, device) {
    // Method: OnDeviceCaptureConfigurationChange
    // Call: OnDeviceCaptureConfigurationChange(label, device)
  }

  onDeviceCaptureHandleChange(label, device) {
    // Method: OnDeviceCaptureHandleChange
    // Call: OnDeviceCaptureHandleChange(label, device)
  }

  onZoomLevelChange(label, device, zoom_level) {
    // Method: OnZoomLevelChange
    // Call: OnZoomLevelChange(label, device, zoom_level)
  }

};

blink.mojom.MediaStreamDeviceObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaStreamDispatcherHost
blink.mojom.MediaStreamDispatcherHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.MediaStreamDispatcherHost';
  }

  generateStreams(request_id, controls, user_gesture, audio_stream_selection_info) {
    // Method: GenerateStreams
    return new Promise((resolve) => {
      // Call: GenerateStreams(request_id, controls, user_gesture, audio_stream_selection_info)
      resolve({});
    });
  }

  focusCapturedSurface(label, focus) {
    // Method: FocusCapturedSurface
    // Call: FocusCapturedSurface(label, focus)
  }

  cancelRequest(request_id) {
    // Method: CancelRequest
    // Call: CancelRequest(request_id)
  }

  stopStreamDevice(device_id, session_id) {
    // Method: StopStreamDevice
    // Call: StopStreamDevice(device_id, session_id)
  }

  openDevice(request_id, device_id, type) {
    // Method: OpenDevice
    return new Promise((resolve) => {
      // Call: OpenDevice(request_id, device_id, type)
      resolve({});
    });
  }

  closeDevice(label) {
    // Method: CloseDevice
    // Call: CloseDevice(label)
  }

  setCapturingLinkSecured(session_id, type, is_secure) {
    // Method: SetCapturingLinkSecured
    // Call: SetCapturingLinkSecured(session_id, type, is_secure)
  }

  applySubCaptureTarget(session_id, type, sub_capture_target, sub_capture_target_version) {
    // Method: ApplySubCaptureTarget
    return new Promise((resolve) => {
      // Call: ApplySubCaptureTarget(session_id, type, sub_capture_target, sub_capture_target_version)
      resolve({});
    });
  }

  sendWheel(session_id, action) {
    // Method: SendWheel
    // Call: SendWheel(session_id, action)
  }

  updateZoomLevel(session_id, action) {
    // Method: UpdateZoomLevel
    return new Promise((resolve) => {
      // Call: UpdateZoomLevel(session_id, action)
      resolve({});
    });
  }

  requestCapturedSurfaceControlPermission(session_id) {
    // Method: RequestCapturedSurfaceControlPermission
    return new Promise((resolve) => {
      // Call: RequestCapturedSurfaceControlPermission(session_id)
      resolve({});
    });
  }

  getOpenDevice(request_id, session_id, transfer_id) {
    // Method: GetOpenDevice
    return new Promise((resolve) => {
      // Call: GetOpenDevice(request_id, session_id, transfer_id)
      resolve({});
    });
  }

  keepDeviceAliveForTransfer(session_id, transfer_id) {
    // Method: KeepDeviceAliveForTransfer
    return new Promise((resolve) => {
      // Call: KeepDeviceAliveForTransfer(session_id, transfer_id)
      resolve({});
    });
  }

};

blink.mojom.MediaStreamDispatcherHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaStreamTrackMetricsHost
blink.mojom.MediaStreamTrackMetricsHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.MediaStreamTrackMetricsHost';
  }

  addTrack(id, is_audio, is_remote) {
    // Method: AddTrack
    // Call: AddTrack(id, is_audio, is_remote)
  }

  removeTrack(id) {
    // Method: RemoveTrack
    // Call: RemoveTrack(id)
  }

};

blink.mojom.MediaStreamTrackMetricsHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
