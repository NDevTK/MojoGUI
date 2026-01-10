// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mediastream/media_stream.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};


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
blink.mojom.MediaStreamTypeSpec = { $: mojo.internal.Enum() };

// Enum: MediaStreamRequestResult
blink.mojom.MediaStreamRequestResult = {
  OK: 0,
  PERMISSION_DENIED: 1,
  PERMISSION_DISMISSED: 2,
  INVALID_STATE: 3,
  NO_HARDWARE: 4,
  INVALID_SECURITY_ORIGIN: 5,
  CONSTRAINT_NOT_SATISFIED: 6,
  TRACK_START_FAILURE_AUDIO: 7,
  TRACK_START_FAILURE_VIDEO: 8,
  NOT_SUPPORTED: 9,
  FAILED_DUE_TO_SHUTDOWN: 10,
  KILL_SWITCH_ON: 11,
  PERMISSION_DENIED_BY_SYSTEM: 12,
  DEVICE_IN_USE: 13,
  START_TIMEOUT: 14,
  PERMISSION_DENIED_BY_USER: 15,
  AUDIO_DEVICE_SOCKET_ERROR: 16,
  NO_TRANSIENT_ACTIVATION: 17,
  CAPTURE_NOT_ALLOWED_BY_POLICY: 18,
  INVALID_DISPLAY_CAPTURE_CONSTRAINTS: 19,
  INVALID_GUM_TAB_CAPTURE_CONSTRAINTS: 20,
  INVALID_GUM_SCREEN_CAPTURE_CONSTRAINTS: 21,
  INVALID_VIDEO_DEVICE_ID: 22,
  STREAM_NOT_FOUND_IN_REGISTRY: 23,
  ANDROID_CANT_REQUEST_PERMISSION: 24,
  MULTI_CAPTURE_NOT_SUPPORTED: 25,
  PERMISSION_DENIED_BY_EMBEDDER_CONTEXT: 26,
  DLP_PERMISSION_DENIED: 27,
  REGISTRY_REQUEST_UNVERIFIED: 28,
  INVALID_DEVICE_TYPE_REQUEST: 29,
  INVALID_EXTENSION_TYPE_REQUEST: 30,
  CAPTURED_TAB_DESTROYED: 31,
  CAPTURE_NOT_ENABLED: 32,
  SAFE_BROWSING_OBSERVER: 33,
  CAPTURE_FROM_BACKGROUND_PAGE_ON_MAC: 34,
  CAPTURE_NOT_ALLOWED_FOR_LONG_DOMAINS: 35,
  PERMISSION_DENIED_BY_CONTROLLER: 36,
};
blink.mojom.MediaStreamRequestResultSpec = { $: mojo.internal.Enum() };

// Enum: MediaStreamStateChange
blink.mojom.MediaStreamStateChange = {
  PLAY: 0,
  PAUSE: 1,
};
blink.mojom.MediaStreamStateChangeSpec = { $: mojo.internal.Enum() };

// Enum: PreferredDisplaySurface
blink.mojom.PreferredDisplaySurface = {
  NO_PREFERENCE: 0,
  MONITOR: 1,
  WINDOW: 2,
  BROWSER: 3,
};
blink.mojom.PreferredDisplaySurfaceSpec = { $: mojo.internal.Enum() };

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
blink.mojom.CapturedSurfaceControlResultSpec = { $: mojo.internal.Enum() };

// Enum: ZoomLevelAction
blink.mojom.ZoomLevelAction = {
  kIncrease: 0,
  kDecrease: 1,
  kReset: 2,
};
blink.mojom.ZoomLevelActionSpec = { $: mojo.internal.Enum() };

// Enum: WindowAudioPreference
blink.mojom.WindowAudioPreference = {
  kSystem: 0,
  kWindow: 1,
  kExclude: 2,
};
blink.mojom.WindowAudioPreferenceSpec = { $: mojo.internal.Enum() };

// Union: StreamSelectionInfo
blink.mojom.StreamSelectionInfoSpec = { $: mojo.internal.Union(
    'blink.mojom.StreamSelectionInfo', {
      'search_only_by_device_id': {
        'ordinal': 0,
        'type': blink.mojom.SearchOnlyByDeviceIdSpec,
      }},
      'search_by_session_id': {
        'ordinal': 1,
        'type': blink.mojom.SearchBySessionIdSpec,
      }},
    })
};

// Struct: SearchOnlyByDeviceId
blink.mojom.SearchOnlyByDeviceIdSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SearchOnlyByDeviceId',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'session_id_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo_base.mojom.UnguessableTokenSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: MediaStreamDevice
blink.mojom.MediaStreamDeviceSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDevice',
      packedSize: 80,
      fields: [
        { name: 'type', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.MediaStreamTypeSpec, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'video_facing', packedOffset: 68, packedBitOffset: 0, type: media.mojom.VideoFacingModeSpec, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'matched_output_device_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'input', packedOffset: 40, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'display_media_info', packedOffset: 56, packedBitOffset: 0, type: media.mojom.DisplayMediaInformationSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
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
        { name: 'stream_type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamTypeSpec, nullable: false, minVersion: 0 },
        { name: 'device_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: StreamControls
blink.mojom.StreamControlsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StreamControls',
      packedSize: 40,
      fields: [
        { name: 'audio', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.TrackControlsSpec, nullable: false, minVersion: 0 },
        { name: 'video', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.TrackControlsSpec, nullable: false, minVersion: 0 },
        { name: 'hotword_enabled', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_local_echo', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'suppress_local_audio_playback', packedOffset: 24, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'restrict_own_audio', packedOffset: 24, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'exclude_system_audio', packedOffset: 24, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'window_audio_preference', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.WindowAudioPreferenceSpec, nullable: false, minVersion: 0 },
        { name: 'exclude_self_browser_surface', packedOffset: 24, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'request_pan_tilt_zoom_permission', packedOffset: 24, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'request_all_screens', packedOffset: 24, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'preferred_display_surface', packedOffset: 20, packedBitOffset: 0, type: blink.mojom.PreferredDisplaySurfaceSpec, nullable: false, minVersion: 0 },
        { name: 'dynamic_surface_switching_requested', packedOffset: 25, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'exclude_monitor_type_surfaces', packedOffset: 25, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: false, minVersion: 0 },
        { name: 'pan_tilt_zoom_allowed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'relative_x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'relative_y', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'wheel_delta_x', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'wheel_delta_y', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'audio_device', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: true, minVersion: 0 },
        { name: 'video_device', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'stream_devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.StreamDevicesSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: MediaStreamDeviceObserver
blink.mojom.MediaStreamDeviceObserver = {};

blink.mojom.MediaStreamDeviceObserver_OnDeviceStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDeviceObserver_OnDeviceStopped_Params',
      packedSize: 24,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.MediaStreamDeviceObserver_OnDeviceChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDeviceObserver_OnDeviceChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'old_device', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: false, minVersion: 0 },
        { name: 'new_device', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.MediaStreamDeviceObserver_OnDeviceRequestStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDeviceObserver_OnDeviceRequestStateChange_Params',
      packedSize: 32,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: false, minVersion: 0 },
        { name: 'new_state', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.MediaStreamStateChangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureConfigurationChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureConfigurationChange_Params',
      packedSize: 24,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureHandleChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureHandleChange_Params',
      packedSize: 24,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.MediaStreamDeviceObserver_OnZoomLevelChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDeviceObserver_OnZoomLevelChange_Params',
      packedSize: 32,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: false, minVersion: 0 },
        { name: 'zoom_level', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

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
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'old_device', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: false, minVersion: 0 },
        { name: 'new_device', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: false, minVersion: 0 },
        { name: 'new_state', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.MediaStreamStateChangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: false, minVersion: 0 },
        { name: 'zoom_level', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
blink.mojom.MediaStreamDeviceObserverPtr = blink.mojom.MediaStreamDeviceObserverRemote;
blink.mojom.MediaStreamDeviceObserverRequest = blink.mojom.MediaStreamDeviceObserverPendingReceiver;


// Interface: MediaStreamDispatcherHost
blink.mojom.MediaStreamDispatcherHost = {};

blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost_GenerateStreams_Params',
      packedSize: 40,
      fields: [
        { name: 'request_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'controls', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.StreamControlsSpec, nullable: false, minVersion: 0 },
        { name: 'user_gesture', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'audio_stream_selection_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.StreamSelectionInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_FocusCapturedSurface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost_FocusCapturedSurface_Params',
      packedSize: 24,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'focus', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_CancelRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost_CancelRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_StopStreamDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost_StopStreamDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_OpenDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost_OpenDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 12, packedBitOffset: 0, type: blink.mojom.MediaStreamTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_CloseDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost_CloseDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_SetCapturingLinkSecured_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost_SetCapturingLinkSecured_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamTypeSpec, nullable: false, minVersion: 0 },
        { name: 'is_secure', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_Params',
      packedSize: 32,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: media.mojom.SubCaptureTargetTypeSpec, nullable: false, minVersion: 0 },
        { name: 'sub_capture_target', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
        { name: 'sub_capture_target_version', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_SendWheel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost_SendWheel_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'action', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CapturedWheelActionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'action', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ZoomLevelActionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_Params',
      packedSize: 32,
      fields: [
        { name: 'request_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'transfer_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'transfer_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
        { name: 'request_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'controls', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.StreamControlsSpec, nullable: false, minVersion: 0 },
        { name: 'user_gesture', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'audio_stream_selection_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.StreamSelectionInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.GenerateStreams_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.MediaStreamRequestResultSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'stream_devices', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.StreamDevicesSetSpec, nullable: true, minVersion: 0 },
        { name: 'pan_tilt_zoom_allowed', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'focus', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OpenDevice
blink.mojom.MediaStreamDispatcherHost_OpenDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.OpenDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 12, packedBitOffset: 0, type: blink.mojom.MediaStreamTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_OpenDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.OpenDevice_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamDeviceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCapturingLinkSecured
blink.mojom.MediaStreamDispatcherHost_SetCapturingLinkSecured_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.SetCapturingLinkSecured_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamTypeSpec, nullable: false, minVersion: 0 },
        { name: 'is_secure', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ApplySubCaptureTarget
blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.ApplySubCaptureTarget_Params',
      packedSize: 32,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: media.mojom.SubCaptureTargetTypeSpec, nullable: false, minVersion: 0 },
        { name: 'sub_capture_target', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
        { name: 'sub_capture_target_version', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.ApplySubCaptureTarget_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: media.mojom.ApplySubCaptureTargetResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'action', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CapturedWheelActionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'action', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ZoomLevelActionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.UpdateZoomLevel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CapturedSurfaceControlResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.RequestCapturedSurfaceControlPermission_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CapturedSurfaceControlResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'request_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'transfer_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.GetOpenDevice_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediaStreamRequestResultSpec, nullable: false, minVersion: 0 },
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.GetOpenDeviceResponseSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'transfer_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamDispatcherHost.KeepDeviceAliveForTransfer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'device_found', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.MediaStreamDispatcherHostPtr = blink.mojom.MediaStreamDispatcherHostRemote;
blink.mojom.MediaStreamDispatcherHostRequest = blink.mojom.MediaStreamDispatcherHostPendingReceiver;


// Interface: MediaStreamTrackMetricsHost
blink.mojom.MediaStreamTrackMetricsHost = {};

blink.mojom.MediaStreamTrackMetricsHost_AddTrack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamTrackMetricsHost_AddTrack_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'is_audio', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_remote', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.MediaStreamTrackMetricsHost_RemoveTrack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaStreamTrackMetricsHost_RemoveTrack_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'is_audio', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_remote', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.MediaStreamTrackMetricsHostPtr = blink.mojom.MediaStreamTrackMetricsHostRemote;
blink.mojom.MediaStreamTrackMetricsHostRequest = blink.mojom.MediaStreamTrackMetricsHostPendingReceiver;

