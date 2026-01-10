// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mediastream/media_stream.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var media = media || {};
var mojo_base = mojo_base || {};

blink.mojom.MediaStreamTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.MediaStreamRequestResultSpec = { $: mojo.internal.Enum() };
blink.mojom.MediaStreamStateChangeSpec = { $: mojo.internal.Enum() };
blink.mojom.PreferredDisplaySurfaceSpec = { $: mojo.internal.Enum() };
blink.mojom.CapturedSurfaceControlResultSpec = { $: mojo.internal.Enum() };
blink.mojom.ZoomLevelActionSpec = { $: mojo.internal.Enum() };
blink.mojom.WindowAudioPreferenceSpec = { $: mojo.internal.Enum() };
blink.mojom.StreamSelectionInfoSpec = { $: {} };
blink.mojom.SearchOnlyByDeviceIdSpec = { $: {} };
blink.mojom.SearchBySessionIdSpec = { $: {} };
blink.mojom.MediaStreamDeviceSpec = { $: {} };
blink.mojom.TrackControlsSpec = { $: {} };
blink.mojom.StreamControlsSpec = { $: {} };
blink.mojom.GetOpenDeviceResponseSpec = { $: {} };
blink.mojom.CapturedWheelActionSpec = { $: {} };
blink.mojom.StreamDevicesSpec = { $: {} };
blink.mojom.StreamDevicesSetSpec = { $: {} };
blink.mojom.MediaStreamDeviceObserver = {};
blink.mojom.MediaStreamDeviceObserver.$interfaceName = 'blink.mojom.MediaStreamDeviceObserver';
blink.mojom.MediaStreamDeviceObserver_OnDeviceStopped_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDeviceObserver_OnDeviceChanged_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDeviceObserver_OnDeviceRequestStateChange_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureConfigurationChange_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureHandleChange_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDeviceObserver_OnZoomLevelChange_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost = {};
blink.mojom.MediaStreamDispatcherHost.$interfaceName = 'blink.mojom.MediaStreamDispatcherHost';
blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ResponseParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_FocusCapturedSurface_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_CancelRequest_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_StopStreamDevice_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_OpenDevice_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_OpenDevice_ResponseParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_CloseDevice_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_SetCapturingLinkSecured_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ResponseParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_SendWheel_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ResponseParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ResponseParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ResponseParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ParamsSpec = { $: {} };
blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ResponseParamsSpec = { $: {} };
blink.mojom.MediaStreamTrackMetricsHost = {};
blink.mojom.MediaStreamTrackMetricsHost.$interfaceName = 'blink.mojom.MediaStreamTrackMetricsHost';
blink.mojom.MediaStreamTrackMetricsHost_AddTrack_ParamsSpec = { $: {} };
blink.mojom.MediaStreamTrackMetricsHost_RemoveTrack_ParamsSpec = { $: {} };

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
  CONSTRAINT_NOT_SATISFIED: 9,
  TRACK_START_FAILURE_AUDIO: 10,
  TRACK_START_FAILURE_VIDEO: 11,
  NOT_SUPPORTED: 12,
  FAILED_DUE_TO_SHUTDOWN: 13,
  KILL_SWITCH_ON: 14,
  PERMISSION_DENIED_BY_SYSTEM: 15,
  DEVICE_IN_USE: 16,
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

// Union: StreamSelectionInfo
mojo.internal.Union(
    blink.mojom.StreamSelectionInfoSpec, 'blink.mojom.StreamSelectionInfo', {
      'search_only_by_device_id': {
        'ordinal': 0,
        'type': blink.mojom.SearchOnlyByDeviceIdSpec.$,
        'nullable': false,
      },
      'search_by_session_id': {
        'ordinal': 1,
        'type': blink.mojom.SearchBySessionIdSpec.$,
        'nullable': false,
      },
    });

// Struct: SearchOnlyByDeviceId
mojo.internal.Struct(
    blink.mojom.SearchOnlyByDeviceIdSpec, 'blink.mojom.SearchOnlyByDeviceId', [
    ],
    [[0, 8]]);

// Struct: SearchBySessionId
mojo.internal.Struct(
    blink.mojom.SearchBySessionIdSpec, 'blink.mojom.SearchBySessionId', [
      mojo.internal.StructField('session_id_map', 0, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.UnguessableTokenSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MediaStreamDevice
mojo.internal.Struct(
    blink.mojom.MediaStreamDeviceSpec, 'blink.mojom.MediaStreamDevice', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.MediaStreamTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('video_facing', 24, 0, media.mojom.VideoFacingModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('matched_output_device_id', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('name', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('input', 56, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 64, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('display_media_info', 72, 0, media.mojom.DisplayMediaInformationSpec.$, null, true, 0, undefined),
    ],
    [[0, 88]]);

// Struct: TrackControls
mojo.internal.Struct(
    blink.mojom.TrackControlsSpec, 'blink.mojom.TrackControls', [
      mojo.internal.StructField('stream_type', 0, 0, blink.mojom.MediaStreamTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_ids', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StreamControls
mojo.internal.Struct(
    blink.mojom.StreamControlsSpec, 'blink.mojom.StreamControls', [
      mojo.internal.StructField('audio', 0, 0, blink.mojom.TrackControlsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('video', 8, 0, blink.mojom.TrackControlsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('window_audio_preference', 16, 0, blink.mojom.WindowAudioPreferenceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('preferred_display_surface', 24, 0, blink.mojom.PreferredDisplaySurfaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hotword_enabled', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_local_echo', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('suppress_local_audio_playback', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('restrict_own_audio', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('exclude_system_audio', 32, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('exclude_self_browser_surface', 32, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('request_pan_tilt_zoom_permission', 32, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('request_all_screens', 32, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('dynamic_surface_switching_requested', 33, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('exclude_monitor_type_surfaces', 33, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: GetOpenDeviceResponse
mojo.internal.Struct(
    blink.mojom.GetOpenDeviceResponseSpec, 'blink.mojom.GetOpenDeviceResponse', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device', 8, 0, blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pan_tilt_zoom_allowed', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CapturedWheelAction
mojo.internal.Struct(
    blink.mojom.CapturedWheelActionSpec, 'blink.mojom.CapturedWheelAction', [
      mojo.internal.StructField('relative_x', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('relative_y', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('wheel_delta_x', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('wheel_delta_y', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: StreamDevices
mojo.internal.Struct(
    blink.mojom.StreamDevicesSpec, 'blink.mojom.StreamDevices', [
      mojo.internal.StructField('audio_device', 0, 0, blink.mojom.MediaStreamDeviceSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('video_device', 8, 0, blink.mojom.MediaStreamDeviceSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StreamDevicesSet
mojo.internal.Struct(
    blink.mojom.StreamDevicesSetSpec, 'blink.mojom.StreamDevicesSet', [
      mojo.internal.StructField('stream_devices', 0, 0, mojo.internal.Array(blink.mojom.StreamDevicesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: MediaStreamDeviceObserver
mojo.internal.Struct(
    blink.mojom.MediaStreamDeviceObserver_OnDeviceStopped_ParamsSpec, 'blink.mojom.MediaStreamDeviceObserver_OnDeviceStopped_Params', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device', 8, 0, blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDeviceObserver_OnDeviceChanged_ParamsSpec, 'blink.mojom.MediaStreamDeviceObserver_OnDeviceChanged_Params', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('old_device', 8, 0, blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_device', 16, 0, blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDeviceObserver_OnDeviceRequestStateChange_ParamsSpec, 'blink.mojom.MediaStreamDeviceObserver_OnDeviceRequestStateChange_Params', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device', 8, 0, blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_state', 16, 0, blink.mojom.MediaStreamStateChangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureConfigurationChange_ParamsSpec, 'blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureConfigurationChange_Params', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device', 8, 0, blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureHandleChange_ParamsSpec, 'blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureHandleChange_Params', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device', 8, 0, blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDeviceObserver_OnZoomLevelChange_ParamsSpec, 'blink.mojom.MediaStreamDeviceObserver_OnZoomLevelChange_Params', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device', 8, 0, blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('zoom_level', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [label, device],
      false);
  }

  onDeviceChanged(label, old_device, new_device) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.MediaStreamDeviceObserver_OnDeviceChanged_ParamsSpec,
      null,
      [label, old_device, new_device],
      false);
  }

  onDeviceRequestStateChange(label, device, new_state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.MediaStreamDeviceObserver_OnDeviceRequestStateChange_ParamsSpec,
      null,
      [label, device, new_state],
      false);
  }

  onDeviceCaptureConfigurationChange(label, device) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureConfigurationChange_ParamsSpec,
      null,
      [label, device],
      false);
  }

  onDeviceCaptureHandleChange(label, device) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureHandleChange_ParamsSpec,
      null,
      [label, device],
      false);
  }

  onZoomLevelChange(label, device, zoom_level) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.MediaStreamDeviceObserver_OnZoomLevelChange_ParamsSpec,
      null,
      [label, device, zoom_level],
      false);
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

blink.mojom.MediaStreamDeviceObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnDeviceStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDeviceObserver_OnDeviceStopped_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceStopped (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: OnDeviceChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDeviceObserver_OnDeviceChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: OnDeviceRequestStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDeviceObserver_OnDeviceRequestStateChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceRequestStateChange (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: OnDeviceCaptureConfigurationChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureConfigurationChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceCaptureConfigurationChange (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: OnDeviceCaptureHandleChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureHandleChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceCaptureHandleChange (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: OnZoomLevelChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDeviceObserver_OnZoomLevelChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnZoomLevelChange (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDeviceObserver_OnDeviceStopped_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDeviceStopped');
          const result = this.impl.onDeviceStopped(params.label, params.device);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDeviceObserver_OnDeviceChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDeviceChanged');
          const result = this.impl.onDeviceChanged(params.label, params.old_device, params.new_device);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDeviceObserver_OnDeviceRequestStateChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDeviceRequestStateChange');
          const result = this.impl.onDeviceRequestStateChange(params.label, params.device, params.new_state);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureConfigurationChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDeviceCaptureConfigurationChange');
          const result = this.impl.onDeviceCaptureConfigurationChange(params.label, params.device);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureHandleChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDeviceCaptureHandleChange');
          const result = this.impl.onDeviceCaptureHandleChange(params.label, params.device);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDeviceObserver_OnZoomLevelChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onZoomLevelChange');
          const result = this.impl.onZoomLevelChange(params.label, params.device, params.zoom_level);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.MediaStreamDeviceObserverReceiver = blink.mojom.MediaStreamDeviceObserverReceiver;

blink.mojom.MediaStreamDeviceObserverPtr = blink.mojom.MediaStreamDeviceObserverRemote;
blink.mojom.MediaStreamDeviceObserverRequest = blink.mojom.MediaStreamDeviceObserverPendingReceiver;


// Interface: MediaStreamDispatcherHost
mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_GenerateStreams_Params', [
      mojo.internal.StructField('controls', 0, 0, blink.mojom.StreamControlsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('audio_stream_selection_info', 8, 0, blink.mojom.StreamSelectionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('user_gesture', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ResponseParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.MediaStreamRequestResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('stream_devices', 16, 0, blink.mojom.StreamDevicesSetSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pan_tilt_zoom_allowed', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_FocusCapturedSurface_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_FocusCapturedSurface_Params', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('focus', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_CancelRequest_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_CancelRequest_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_StopStreamDevice_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_StopStreamDevice_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_OpenDevice_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_OpenDevice_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, blink.mojom.MediaStreamTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_OpenDevice_ResponseParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_OpenDevice_ResponseParams', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device', 8, 0, blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_CloseDevice_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_CloseDevice_Params', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_SetCapturingLinkSecured_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_SetCapturingLinkSecured_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('type', 8, 0, blink.mojom.MediaStreamTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_secure', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, media.mojom.SubCaptureTargetTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sub_capture_target', 16, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sub_capture_target_version', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ResponseParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, media.mojom.ApplySubCaptureTargetResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_SendWheel_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_SendWheel_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action', 8, 0, blink.mojom.CapturedWheelActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action', 8, 0, blink.mojom.ZoomLevelActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ResponseParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.CapturedSurfaceControlResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ResponseParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.CapturedSurfaceControlResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transfer_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ResponseParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.MediaStreamRequestResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response', 8, 0, blink.mojom.GetOpenDeviceResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transfer_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ResponseParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ResponseParams', [
      mojo.internal.StructField('device_found', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [request_id, controls, user_gesture, audio_stream_selection_info],
      false);
  }

  focusCapturedSurface(label, focus) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_FocusCapturedSurface_ParamsSpec,
      null,
      [label, focus],
      false);
  }

  cancelRequest(request_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_CancelRequest_ParamsSpec,
      null,
      [request_id],
      false);
  }

  stopStreamDevice(device_id, session_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_StopStreamDevice_ParamsSpec,
      null,
      [device_id, session_id],
      false);
  }

  openDevice(request_id, device_id, type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_OpenDevice_ParamsSpec,
      blink.mojom.MediaStreamDispatcherHost_OpenDevice_ResponseParamsSpec,
      [request_id, device_id, type],
      false);
  }

  closeDevice(label) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_CloseDevice_ParamsSpec,
      null,
      [label],
      false);
  }

  setCapturingLinkSecured(session_id, type, is_secure) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_SetCapturingLinkSecured_ParamsSpec,
      null,
      [session_id, type, is_secure],
      false);
  }

  applySubCaptureTarget(session_id, type, sub_capture_target, sub_capture_target_version) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ParamsSpec,
      blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ResponseParamsSpec,
      [session_id, type, sub_capture_target, sub_capture_target_version],
      false);
  }

  sendWheel(session_id, action) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_SendWheel_ParamsSpec,
      null,
      [session_id, action],
      false);
  }

  updateZoomLevel(session_id, action) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ParamsSpec,
      blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ResponseParamsSpec,
      [session_id, action],
      false);
  }

  requestCapturedSurfaceControlPermission(session_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ParamsSpec,
      blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ResponseParamsSpec,
      [session_id],
      false);
  }

  getOpenDevice(request_id, session_id, transfer_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ParamsSpec,
      blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ResponseParamsSpec,
      [request_id, session_id, transfer_id],
      false);
  }

  keepDeviceAliveForTransfer(session_id, transfer_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ParamsSpec,
      blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ResponseParamsSpec,
      [session_id, transfer_id],
      false);
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

blink.mojom.MediaStreamDispatcherHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GenerateStreams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerateStreams (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: FocusCapturedSurface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_FocusCapturedSurface_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusCapturedSurface (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: CancelRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_CancelRequest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelRequest (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: StopStreamDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_StopStreamDevice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopStreamDevice (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: OpenDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_OpenDevice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDevice (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: CloseDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_CloseDevice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseDevice (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: SetCapturingLinkSecured
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_SetCapturingLinkSecured_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCapturingLinkSecured (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: ApplySubCaptureTarget
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplySubCaptureTarget (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: SendWheel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_SendWheel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendWheel (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: UpdateZoomLevel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateZoomLevel (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 10: RequestCapturedSurfaceControlPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestCapturedSurfaceControlPermission (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 11: GetOpenDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOpenDevice (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 12: KeepDeviceAliveForTransfer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> KeepDeviceAliveForTransfer (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.generateStreams');
          const result = this.impl.generateStreams(params.request_id, params.controls, params.user_gesture, params.audio_stream_selection_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_FocusCapturedSurface_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.focusCapturedSurface');
          const result = this.impl.focusCapturedSurface(params.label, params.focus);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_CancelRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancelRequest');
          const result = this.impl.cancelRequest(params.request_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_StopStreamDevice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopStreamDevice');
          const result = this.impl.stopStreamDevice(params.device_id, params.session_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_OpenDevice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openDevice');
          const result = this.impl.openDevice(params.request_id, params.device_id, params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.MediaStreamDispatcherHost_OpenDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_CloseDevice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeDevice');
          const result = this.impl.closeDevice(params.label);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_SetCapturingLinkSecured_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCapturingLinkSecured');
          const result = this.impl.setCapturingLinkSecured(params.session_id, params.type, params.is_secure);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.applySubCaptureTarget');
          const result = this.impl.applySubCaptureTarget(params.session_id, params.type, params.sub_capture_target, params.sub_capture_target_version);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_SendWheel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendWheel');
          const result = this.impl.sendWheel(params.session_id, params.action);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateZoomLevel');
          const result = this.impl.updateZoomLevel(params.session_id, params.action);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestCapturedSurfaceControlPermission');
          const result = this.impl.requestCapturedSurfaceControlPermission(params.session_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getOpenDevice');
          const result = this.impl.getOpenDevice(params.request_id, params.session_id, params.transfer_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.keepDeviceAliveForTransfer');
          const result = this.impl.keepDeviceAliveForTransfer(params.session_id, params.transfer_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.MediaStreamDispatcherHostReceiver = blink.mojom.MediaStreamDispatcherHostReceiver;

blink.mojom.MediaStreamDispatcherHostPtr = blink.mojom.MediaStreamDispatcherHostRemote;
blink.mojom.MediaStreamDispatcherHostRequest = blink.mojom.MediaStreamDispatcherHostPendingReceiver;


// Interface: MediaStreamTrackMetricsHost
mojo.internal.Struct(
    blink.mojom.MediaStreamTrackMetricsHost_AddTrack_ParamsSpec, 'blink.mojom.MediaStreamTrackMetricsHost_AddTrack_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('is_audio', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_remote', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.MediaStreamTrackMetricsHost_RemoveTrack_ParamsSpec, 'blink.mojom.MediaStreamTrackMetricsHost_RemoveTrack_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [id, is_audio, is_remote],
      false);
  }

  removeTrack(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.MediaStreamTrackMetricsHost_RemoveTrack_ParamsSpec,
      null,
      [id],
      false);
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

blink.mojom.MediaStreamTrackMetricsHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AddTrack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamTrackMetricsHost_AddTrack_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddTrack (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: RemoveTrack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MediaStreamTrackMetricsHost_RemoveTrack_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveTrack (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamTrackMetricsHost_AddTrack_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addTrack');
          const result = this.impl.addTrack(params.id, params.is_audio, params.is_remote);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MediaStreamTrackMetricsHost_RemoveTrack_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeTrack');
          const result = this.impl.removeTrack(params.id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.MediaStreamTrackMetricsHostReceiver = blink.mojom.MediaStreamTrackMetricsHostReceiver;

blink.mojom.MediaStreamTrackMetricsHostPtr = blink.mojom.MediaStreamTrackMetricsHostRemote;
blink.mojom.MediaStreamTrackMetricsHostRequest = blink.mojom.MediaStreamTrackMetricsHostPendingReceiver;

