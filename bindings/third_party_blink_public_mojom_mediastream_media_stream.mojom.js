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
  DEVICE_AUDIO_CAPTURE: 1,
  DEVICE_VIDEO_CAPTURE: 2,
  GUM_TAB_AUDIO_CAPTURE: 3,
  GUM_TAB_VIDEO_CAPTURE: 4,
  GUM_DESKTOP_VIDEO_CAPTURE: 5,
  GUM_DESKTOP_AUDIO_CAPTURE: 6,
  DISPLAY_VIDEO_CAPTURE: 7,
  DISPLAY_AUDIO_CAPTURE: 8,
  DISPLAY_VIDEO_CAPTURE_THIS_TAB: 9,
  DISPLAY_VIDEO_CAPTURE_SET: 10,
  NUM_MEDIA_TYPES: 11,
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
blink.mojom.SearchOnlyByDeviceIdSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SearchOnlyByDeviceId',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SearchBySessionId
blink.mojom.SearchBySessionIdSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SearchBySessionId',
      packedSize: 16,
      fields: [
        { name: 'session_id_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MediaStreamDevice
blink.mojom.MediaStreamDeviceSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDevice',
      packedSize: 88,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'display_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'video_facing', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'group_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'matched_output_device_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'name', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'input', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'session_id', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'display_media_info', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TrackControls
blink.mojom.TrackControlsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TrackControls',
      packedSize: 24,
      fields: [
        { name: 'stream_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'device_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StreamControls
blink.mojom.StreamControlsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StreamControls',
      packedSize: 48,
      fields: [
        { name: 'audio', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'video', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'window_audio_preference', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'preferred_display_surface', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'hotword_enabled', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_local_echo', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'suppress_local_audio_playback', packedOffset: 32, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'restrict_own_audio', packedOffset: 32, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'exclude_system_audio', packedOffset: 32, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'exclude_self_browser_surface', packedOffset: 32, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'request_pan_tilt_zoom_permission', packedOffset: 32, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'request_all_screens', packedOffset: 32, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'dynamic_surface_switching_requested', packedOffset: 32, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'exclude_monitor_type_surfaces', packedOffset: 32, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GetOpenDeviceResponse
blink.mojom.GetOpenDeviceResponseSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.GetOpenDeviceResponse',
      packedSize: 32,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pan_tilt_zoom_allowed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CapturedWheelAction
blink.mojom.CapturedWheelActionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CapturedWheelAction',
      packedSize: 32,
      fields: [
        { name: 'relative_x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'relative_y', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'wheel_delta_x', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'wheel_delta_y', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StreamDevices
blink.mojom.StreamDevicesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StreamDevices',
      packedSize: 24,
      fields: [
        { name: 'audio_device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'video_device', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StreamDevicesSet
blink.mojom.StreamDevicesSetSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StreamDevicesSet',
      packedSize: 16,
      fields: [
        { name: 'stream_devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: MediaStreamDeviceObserver
blink.mojom.MediaStreamDeviceObserver = {};

blink.mojom.MediaStreamDeviceObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.MediaStreamDeviceObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MediaStreamDeviceObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.MediaStreamDeviceObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.MediaStreamDeviceObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.MediaStreamDeviceObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeviceStopped(label, device) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.MediaStreamDeviceObserver_OnDeviceStopped_ParamsSpec,
      null,
      [label, device]);
  }

  onDeviceChanged(label, old_device, new_device) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.MediaStreamDeviceObserver_OnDeviceChanged_ParamsSpec,
      null,
      [label, old_device, new_device]);
  }

  onDeviceRequestStateChange(label, device, new_state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.MediaStreamDeviceObserver_OnDeviceRequestStateChange_ParamsSpec,
      null,
      [label, device, new_state]);
  }

  onDeviceCaptureConfigurationChange(label, device) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureConfigurationChange_ParamsSpec,
      null,
      [label, device]);
  }

  onDeviceCaptureHandleChange(label, device) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureHandleChange_ParamsSpec,
      null,
      [label, device]);
  }

  onZoomLevelChange(label, device, zoom_level) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.MediaStreamDeviceObserver_OnZoomLevelChange_ParamsSpec,
      null,
      [label, device, zoom_level]);
  }

};

blink.mojom.MediaStreamDeviceObserver.getRemote = function() {
  let remote = new blink.mojom.MediaStreamDeviceObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MediaStreamDeviceObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDeviceStopped
blink.mojom.MediaStreamDeviceObserver_OnDeviceStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDeviceObserver.OnDeviceStopped_Params',
      packedSize: 24,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDeviceChanged
blink.mojom.MediaStreamDeviceObserver_OnDeviceChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDeviceObserver.OnDeviceChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'old_device', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'new_device', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDeviceRequestStateChange
blink.mojom.MediaStreamDeviceObserver_OnDeviceRequestStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDeviceObserver.OnDeviceRequestStateChange_Params',
      packedSize: 32,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'new_state', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDeviceCaptureConfigurationChange
blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureConfigurationChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDeviceObserver.OnDeviceCaptureConfigurationChange_Params',
      packedSize: 24,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDeviceCaptureHandleChange
blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureHandleChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDeviceObserver.OnDeviceCaptureHandleChange_Params',
      packedSize: 24,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnZoomLevelChange
blink.mojom.MediaStreamDeviceObserver_OnZoomLevelChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDeviceObserver.OnZoomLevelChange_Params',
      packedSize: 32,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'zoom_level', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.MediaStreamDeviceObserverPtr = blink.mojom.MediaStreamDeviceObserverRemote;
blink.mojom.MediaStreamDeviceObserverRequest = blink.mojom.MediaStreamDeviceObserverPendingReceiver;


// Interface: MediaStreamDispatcherHost
blink.mojom.MediaStreamDispatcherHost = {};

blink.mojom.MediaStreamDispatcherHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.MediaStreamDispatcherHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MediaStreamDispatcherHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.MediaStreamDispatcherHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.MediaStreamDispatcherHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.MediaStreamDispatcherHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  generateStreams(request_id, controls, user_gesture, audio_stream_selection_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ParamsSpec,
      blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ResponseParamsSpec,
      [request_id, controls, user_gesture, audio_stream_selection_info]);
  }

  focusCapturedSurface(label, focus) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_FocusCapturedSurface_ParamsSpec,
      null,
      [label, focus]);
  }

  cancelRequest(request_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_CancelRequest_ParamsSpec,
      null,
      [request_id]);
  }

  stopStreamDevice(device_id, session_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_StopStreamDevice_ParamsSpec,
      null,
      [device_id, session_id]);
  }

  openDevice(request_id, device_id, type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_OpenDevice_ParamsSpec,
      blink.mojom.MediaStreamDispatcherHost_OpenDevice_ResponseParamsSpec,
      [request_id, device_id, type]);
  }

  closeDevice(label) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_CloseDevice_ParamsSpec,
      null,
      [label]);
  }

  setCapturingLinkSecured(session_id, type, is_secure) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_SetCapturingLinkSecured_ParamsSpec,
      null,
      [session_id, type, is_secure]);
  }

  applySubCaptureTarget(session_id, type, sub_capture_target, sub_capture_target_version) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ParamsSpec,
      blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ResponseParamsSpec,
      [session_id, type, sub_capture_target, sub_capture_target_version]);
  }

  sendWheel(session_id, action) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_SendWheel_ParamsSpec,
      null,
      [session_id, action]);
  }

  updateZoomLevel(session_id, action) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ParamsSpec,
      blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ResponseParamsSpec,
      [session_id, action]);
  }

  requestCapturedSurfaceControlPermission(session_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ParamsSpec,
      blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ResponseParamsSpec,
      [session_id]);
  }

  getOpenDevice(request_id, session_id, transfer_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ParamsSpec,
      blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ResponseParamsSpec,
      [request_id, session_id, transfer_id]);
  }

  keepDeviceAliveForTransfer(session_id, transfer_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ParamsSpec,
      blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ResponseParamsSpec,
      [session_id, transfer_id]);
  }

};

blink.mojom.MediaStreamDispatcherHost.getRemote = function() {
  let remote = new blink.mojom.MediaStreamDispatcherHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MediaStreamDispatcherHost',
    'context');
  return remote.$;
};

// ParamsSpec for GenerateStreams
blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.GenerateStreams_Params',
      packedSize: 40,
      fields: [
        { name: 'controls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'audio_stream_selection_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'request_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'user_gesture', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.GenerateStreams_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'stream_devices', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'pan_tilt_zoom_allowed', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FocusCapturedSurface
blink.mojom.MediaStreamDispatcherHost_FocusCapturedSurface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.FocusCapturedSurface_Params',
      packedSize: 24,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'focus', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CancelRequest
blink.mojom.MediaStreamDispatcherHost_CancelRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.CancelRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopStreamDevice
blink.mojom.MediaStreamDispatcherHost_StopStreamDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.StopStreamDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenDevice
blink.mojom.MediaStreamDispatcherHost_OpenDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.OpenDevice_Params',
      packedSize: 32,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'request_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_OpenDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.OpenDevice_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'success', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloseDevice
blink.mojom.MediaStreamDispatcherHost_CloseDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.CloseDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCapturingLinkSecured
blink.mojom.MediaStreamDispatcherHost_SetCapturingLinkSecured_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.SetCapturingLinkSecured_Params',
      packedSize: 32,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_secure', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ApplySubCaptureTarget
blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.ApplySubCaptureTarget_Params',
      packedSize: 40,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'sub_capture_target', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'sub_capture_target_version', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.ApplySubCaptureTarget_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendWheel
blink.mojom.MediaStreamDispatcherHost_SendWheel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.SendWheel_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'action', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateZoomLevel
blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.UpdateZoomLevel_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'action', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.UpdateZoomLevel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestCapturedSurfaceControlPermission
blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.RequestCapturedSurfaceControlPermission_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.RequestCapturedSurfaceControlPermission_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetOpenDevice
blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.GetOpenDevice_Params',
      packedSize: 32,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'transfer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'request_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.GetOpenDevice_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for KeepDeviceAliveForTransfer
blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.KeepDeviceAliveForTransfer_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'transfer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.KeepDeviceAliveForTransfer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'device_found', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.MediaStreamDispatcherHostPtr = blink.mojom.MediaStreamDispatcherHostRemote;
blink.mojom.MediaStreamDispatcherHostRequest = blink.mojom.MediaStreamDispatcherHostPendingReceiver;


// Interface: MediaStreamTrackMetricsHost
blink.mojom.MediaStreamTrackMetricsHost = {};

blink.mojom.MediaStreamTrackMetricsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.MediaStreamTrackMetricsHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MediaStreamTrackMetricsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.MediaStreamTrackMetricsHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.MediaStreamTrackMetricsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.MediaStreamTrackMetricsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addTrack(id, is_audio, is_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.MediaStreamTrackMetricsHost_AddTrack_ParamsSpec,
      null,
      [id, is_audio, is_remote]);
  }

  removeTrack(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.MediaStreamTrackMetricsHost_RemoveTrack_ParamsSpec,
      null,
      [id]);
  }

};

blink.mojom.MediaStreamTrackMetricsHost.getRemote = function() {
  let remote = new blink.mojom.MediaStreamTrackMetricsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MediaStreamTrackMetricsHost',
    'context');
  return remote.$;
};

// ParamsSpec for AddTrack
blink.mojom.MediaStreamTrackMetricsHost_AddTrack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamTrackMetricsHost.AddTrack_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'is_audio', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_remote', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveTrack
blink.mojom.MediaStreamTrackMetricsHost_RemoveTrack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamTrackMetricsHost.RemoveTrack_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.MediaStreamTrackMetricsHostPtr = blink.mojom.MediaStreamTrackMetricsHostRemote;
blink.mojom.MediaStreamTrackMetricsHostRequest = blink.mojom.MediaStreamTrackMetricsHostPendingReceiver;

