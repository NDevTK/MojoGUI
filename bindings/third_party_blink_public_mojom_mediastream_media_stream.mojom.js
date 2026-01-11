// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/mediastream/media_stream.mojom
 // Module: blink.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.media = mojo.internal.bindings.media || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.blink.mojom.MediaStreamTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.MediaStreamRequestResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.MediaStreamStateChangeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.PreferredDisplaySurfaceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.CapturedSurfaceControlResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.ZoomLevelActionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.WindowAudioPreferenceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.StreamSelectionInfoSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SearchOnlyByDeviceIdSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SearchBySessionIdSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDeviceSpec = { $: {} };
mojo.internal.bindings.blink.mojom.TrackControlsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StreamControlsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.GetOpenDeviceResponseSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CapturedWheelActionSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StreamDevicesSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StreamDevicesSetSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver = {};
mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserverSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver.$interfaceName = 'blink.mojom.MediaStreamDeviceObserver';
mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceStopped_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceRequestStateChange_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureConfigurationChange_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureHandleChange_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnZoomLevelChange_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost = {};
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHostSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost.$interfaceName = 'blink.mojom.MediaStreamDispatcherHost';
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_FocusCapturedSurface_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_CancelRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_StopStreamDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_OpenDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_OpenDevice_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_CloseDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_SetCapturingLinkSecured_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_SendWheel_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHost = {};
mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHostSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHost.$interfaceName = 'blink.mojom.MediaStreamTrackMetricsHost';
mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHost_AddTrack_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHost_RemoveTrack_ParamsSpec = { $: {} };

// Enum: MediaStreamType
mojo.internal.bindings.blink.mojom.MediaStreamType = {
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
mojo.internal.bindings.blink.mojom.MediaStreamRequestResult = {
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
mojo.internal.bindings.blink.mojom.MediaStreamStateChange = {
  PLAY: 0,
  PAUSE: 1,
};

// Enum: PreferredDisplaySurface
mojo.internal.bindings.blink.mojom.PreferredDisplaySurface = {
  NO_PREFERENCE: 0,
  MONITOR: 1,
  WINDOW: 2,
  BROWSER: 3,
};

// Enum: CapturedSurfaceControlResult
mojo.internal.bindings.blink.mojom.CapturedSurfaceControlResult = {
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
mojo.internal.bindings.blink.mojom.ZoomLevelAction = {
  kIncrease: 0,
  kDecrease: 1,
  kReset: 2,
};

// Enum: WindowAudioPreference
mojo.internal.bindings.blink.mojom.WindowAudioPreference = {
  kSystem: 0,
  kWindow: 1,
  kExclude: 2,
};

// Union: StreamSelectionInfo
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.StreamSelectionInfoSpec, 'blink.mojom.StreamSelectionInfo', {
      'arg_search_only_by_device_id': {
        'ordinal': 0,
        'type': mojo.internal.bindings.blink.mojom.SearchOnlyByDeviceIdSpec.$,
        'nullable': false,
      },
      'arg_search_by_session_id': {
        'ordinal': 1,
        'type': mojo.internal.bindings.blink.mojom.SearchBySessionIdSpec.$,
        'nullable': false,
      },
    });

// Struct: SearchOnlyByDeviceId
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SearchOnlyByDeviceIdSpec, 'blink.mojom.SearchOnlyByDeviceId', [
    ],
    [[0, 8]]);

// Struct: SearchBySessionId
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SearchBySessionIdSpec, 'blink.mojom.SearchBySessionId', [
      mojo.internal.StructField('arg_session_id_map', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MediaStreamDevice
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDeviceSpec, 'blink.mojom.MediaStreamDevice', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.blink.mojom.MediaStreamTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_video_facing', 24, 0, mojo.internal.bindings.media.mojom.VideoFacingModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_group_id', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_matched_output_device_id', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_input', 56, 0, mojo.internal.bindings.media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 64, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_display_media_info', 72, 0, mojo.internal.bindings.media.mojom.DisplayMediaInformationSpec.$, null, true, 0, undefined),
    ],
    [[0, 88]]);

// Struct: TrackControls
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.TrackControlsSpec, 'blink.mojom.TrackControls', [
      mojo.internal.StructField('arg_stream_type', 0, 0, mojo.internal.bindings.blink.mojom.MediaStreamTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_ids', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StreamControls
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StreamControlsSpec, 'blink.mojom.StreamControls', [
      mojo.internal.StructField('arg_audio', 0, 0, mojo.internal.bindings.blink.mojom.TrackControlsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_video', 8, 0, mojo.internal.bindings.blink.mojom.TrackControlsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_window_audio_preference', 16, 0, mojo.internal.bindings.blink.mojom.WindowAudioPreferenceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_preferred_display_surface', 24, 0, mojo.internal.bindings.blink.mojom.PreferredDisplaySurfaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hotword_enabled', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disable_local_echo', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_suppress_local_audio_playback', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_restrict_own_audio', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_exclude_system_audio', 32, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_exclude_self_browser_surface', 32, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_request_pan_tilt_zoom_permission', 32, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_request_all_screens', 32, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_dynamic_surface_switching_requested', 33, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_exclude_monitor_type_surfaces', 33, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: GetOpenDeviceResponse
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.GetOpenDeviceResponseSpec, 'blink.mojom.GetOpenDeviceResponse', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device', 8, 0, mojo.internal.bindings.blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_pan_tilt_zoom_allowed', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CapturedWheelAction
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CapturedWheelActionSpec, 'blink.mojom.CapturedWheelAction', [
      mojo.internal.StructField('arg_relative_x', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_relative_y', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_wheel_delta_x', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_wheel_delta_y', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: StreamDevices
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StreamDevicesSpec, 'blink.mojom.StreamDevices', [
      mojo.internal.StructField('arg_audio_device', 0, 0, mojo.internal.bindings.blink.mojom.MediaStreamDeviceSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_video_device', 8, 0, mojo.internal.bindings.blink.mojom.MediaStreamDeviceSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StreamDevicesSet
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StreamDevicesSetSpec, 'blink.mojom.StreamDevicesSet', [
      mojo.internal.StructField('arg_stream_devices', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.StreamDevicesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: MediaStreamDeviceObserver
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceStopped_ParamsSpec, 'blink.mojom.MediaStreamDeviceObserver_OnDeviceStopped_Params', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device', 8, 0, mojo.internal.bindings.blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceChanged_ParamsSpec, 'blink.mojom.MediaStreamDeviceObserver_OnDeviceChanged_Params', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_old_device', 8, 0, mojo.internal.bindings.blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_device', 16, 0, mojo.internal.bindings.blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceRequestStateChange_ParamsSpec, 'blink.mojom.MediaStreamDeviceObserver_OnDeviceRequestStateChange_Params', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device', 8, 0, mojo.internal.bindings.blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_state', 16, 0, mojo.internal.bindings.blink.mojom.MediaStreamStateChangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureConfigurationChange_ParamsSpec, 'blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureConfigurationChange_Params', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device', 8, 0, mojo.internal.bindings.blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureHandleChange_ParamsSpec, 'blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureHandleChange_Params', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device', 8, 0, mojo.internal.bindings.blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnZoomLevelChange_ParamsSpec, 'blink.mojom.MediaStreamDeviceObserver_OnZoomLevelChange_Params', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device', 8, 0, mojo.internal.bindings.blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_zoom_level', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MediaStreamDeviceObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDeviceStopped(arg_label, arg_device) {
    return this.$.onDeviceStopped(arg_label, arg_device);
  }
  onDeviceChanged(arg_label, arg_old_device, arg_new_device) {
    return this.$.onDeviceChanged(arg_label, arg_old_device, arg_new_device);
  }
  onDeviceRequestStateChange(arg_label, arg_device, arg_new_state) {
    return this.$.onDeviceRequestStateChange(arg_label, arg_device, arg_new_state);
  }
  onDeviceCaptureConfigurationChange(arg_label, arg_device) {
    return this.$.onDeviceCaptureConfigurationChange(arg_label, arg_device);
  }
  onDeviceCaptureHandleChange(arg_label, arg_device) {
    return this.$.onDeviceCaptureHandleChange(arg_label, arg_device);
  }
  onZoomLevelChange(arg_label, arg_device, arg_zoom_level) {
    return this.$.onZoomLevelChange(arg_label, arg_device, arg_zoom_level);
  }
};

mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.MediaStreamDeviceObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onDeviceStopped(arg_label, arg_device) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceStopped_ParamsSpec,
      null,
      [arg_label, arg_device],
      false);
  }

  onDeviceChanged(arg_label, arg_old_device, arg_new_device) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceChanged_ParamsSpec,
      null,
      [arg_label, arg_old_device, arg_new_device],
      false);
  }

  onDeviceRequestStateChange(arg_label, arg_device, arg_new_state) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceRequestStateChange_ParamsSpec,
      null,
      [arg_label, arg_device, arg_new_state],
      false);
  }

  onDeviceCaptureConfigurationChange(arg_label, arg_device) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureConfigurationChange_ParamsSpec,
      null,
      [arg_label, arg_device],
      false);
  }

  onDeviceCaptureHandleChange(arg_label, arg_device) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureHandleChange_ParamsSpec,
      null,
      [arg_label, arg_device],
      false);
  }

  onZoomLevelChange(arg_label, arg_device, arg_zoom_level) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnZoomLevelChange_ParamsSpec,
      null,
      [arg_label, arg_device, arg_zoom_level],
      false);
  }

};

mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MediaStreamDeviceObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.MediaStreamDeviceObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnDeviceStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceStopped_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceStopped (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnDeviceChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnDeviceRequestStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceRequestStateChange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceRequestStateChange (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnDeviceCaptureConfigurationChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureConfigurationChange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceCaptureConfigurationChange (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnDeviceCaptureHandleChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureHandleChange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceCaptureHandleChange (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnZoomLevelChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnZoomLevelChange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnZoomLevelChange (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceStopped_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceStopped');
          const result = this.impl.onDeviceStopped(params.arg_label, params.arg_device);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceChanged');
          const result = this.impl.onDeviceChanged(params.arg_label, params.arg_old_device, params.arg_new_device);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceRequestStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceRequestStateChange');
          const result = this.impl.onDeviceRequestStateChange(params.arg_label, params.arg_device, params.arg_new_state);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureConfigurationChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceCaptureConfigurationChange');
          const result = this.impl.onDeviceCaptureConfigurationChange(params.arg_label, params.arg_device);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnDeviceCaptureHandleChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceCaptureHandleChange');
          const result = this.impl.onDeviceCaptureHandleChange(params.arg_label, params.arg_device);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserver_OnZoomLevelChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onZoomLevelChange');
          const result = this.impl.onZoomLevelChange(params.arg_label, params.arg_device, params.arg_zoom_level);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserverReceiver = mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserverReceiver;

mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserverPtr = mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserverRemote;
mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserverRequest = mojo.internal.bindings.blink.mojom.MediaStreamDeviceObserverPendingReceiver;


// Interface: MediaStreamDispatcherHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_GenerateStreams_Params', [
      mojo.internal.StructField('arg_controls', 0, 0, mojo.internal.bindings.blink.mojom.StreamControlsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_audio_stream_selection_info', 8, 0, mojo.internal.bindings.blink.mojom.StreamSelectionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_user_gesture', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ResponseParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.MediaStreamRequestResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_stream_devices', 16, 0, mojo.internal.bindings.blink.mojom.StreamDevicesSetSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_pan_tilt_zoom_allowed', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_FocusCapturedSurface_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_FocusCapturedSurface_Params', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_focus', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_CancelRequest_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_CancelRequest_Params', [
      mojo.internal.StructField('arg_request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_StopStreamDevice_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_StopStreamDevice_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_OpenDevice_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_OpenDevice_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.blink.mojom.MediaStreamTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_OpenDevice_ResponseParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_OpenDevice_ResponseParams', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device', 8, 0, mojo.internal.bindings.blink.mojom.MediaStreamDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_CloseDevice_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_CloseDevice_Params', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_SetCapturingLinkSecured_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_SetCapturingLinkSecured_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.blink.mojom.MediaStreamTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_secure', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.media.mojom.SubCaptureTargetTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sub_capture_target', 16, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sub_capture_target_version', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ResponseParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.media.mojom.ApplySubCaptureTargetResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_SendWheel_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_SendWheel_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_action', 8, 0, mojo.internal.bindings.blink.mojom.CapturedWheelActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_action', 8, 0, mojo.internal.bindings.blink.mojom.ZoomLevelActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ResponseParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.CapturedSurfaceControlResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ResponseParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.CapturedSurfaceControlResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_transfer_id', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ResponseParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.MediaStreamRequestResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_response', 8, 0, mojo.internal.bindings.blink.mojom.GetOpenDeviceResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_transfer_id', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ResponseParamsSpec, 'blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ResponseParams', [
      mojo.internal.StructField('arg_device_found', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MediaStreamDispatcherHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  generateStreams(arg_request_id, arg_controls, arg_user_gesture, arg_audio_stream_selection_info) {
    return this.$.generateStreams(arg_request_id, arg_controls, arg_user_gesture, arg_audio_stream_selection_info);
  }
  focusCapturedSurface(arg_label, arg_focus) {
    return this.$.focusCapturedSurface(arg_label, arg_focus);
  }
  cancelRequest(arg_request_id) {
    return this.$.cancelRequest(arg_request_id);
  }
  stopStreamDevice(arg_device_id, arg_session_id) {
    return this.$.stopStreamDevice(arg_device_id, arg_session_id);
  }
  openDevice(arg_request_id, arg_device_id, arg_type) {
    return this.$.openDevice(arg_request_id, arg_device_id, arg_type);
  }
  closeDevice(arg_label) {
    return this.$.closeDevice(arg_label);
  }
  setCapturingLinkSecured(arg_session_id, arg_type, arg_is_secure) {
    return this.$.setCapturingLinkSecured(arg_session_id, arg_type, arg_is_secure);
  }
  applySubCaptureTarget(arg_session_id, arg_type, arg_sub_capture_target, arg_sub_capture_target_version) {
    return this.$.applySubCaptureTarget(arg_session_id, arg_type, arg_sub_capture_target, arg_sub_capture_target_version);
  }
  sendWheel(arg_session_id, arg_action) {
    return this.$.sendWheel(arg_session_id, arg_action);
  }
  updateZoomLevel(arg_session_id, arg_action) {
    return this.$.updateZoomLevel(arg_session_id, arg_action);
  }
  requestCapturedSurfaceControlPermission(arg_session_id) {
    return this.$.requestCapturedSurfaceControlPermission(arg_session_id);
  }
  getOpenDevice(arg_request_id, arg_session_id, arg_transfer_id) {
    return this.$.getOpenDevice(arg_request_id, arg_session_id, arg_transfer_id);
  }
  keepDeviceAliveForTransfer(arg_session_id, arg_transfer_id) {
    return this.$.keepDeviceAliveForTransfer(arg_session_id, arg_transfer_id);
  }
};

mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.MediaStreamDispatcherHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  generateStreams(arg_request_id, arg_controls, arg_user_gesture, arg_audio_stream_selection_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ParamsSpec,
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ResponseParamsSpec,
      [arg_request_id, arg_controls, arg_user_gesture, arg_audio_stream_selection_info],
      false);
  }

  focusCapturedSurface(arg_label, arg_focus) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_FocusCapturedSurface_ParamsSpec,
      null,
      [arg_label, arg_focus],
      false);
  }

  cancelRequest(arg_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_CancelRequest_ParamsSpec,
      null,
      [arg_request_id],
      false);
  }

  stopStreamDevice(arg_device_id, arg_session_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_StopStreamDevice_ParamsSpec,
      null,
      [arg_device_id, arg_session_id],
      false);
  }

  openDevice(arg_request_id, arg_device_id, arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_OpenDevice_ParamsSpec,
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_OpenDevice_ResponseParamsSpec,
      [arg_request_id, arg_device_id, arg_type],
      false);
  }

  closeDevice(arg_label) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_CloseDevice_ParamsSpec,
      null,
      [arg_label],
      false);
  }

  setCapturingLinkSecured(arg_session_id, arg_type, arg_is_secure) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_SetCapturingLinkSecured_ParamsSpec,
      null,
      [arg_session_id, arg_type, arg_is_secure],
      false);
  }

  applySubCaptureTarget(arg_session_id, arg_type, arg_sub_capture_target, arg_sub_capture_target_version) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ParamsSpec,
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ResponseParamsSpec,
      [arg_session_id, arg_type, arg_sub_capture_target, arg_sub_capture_target_version],
      false);
  }

  sendWheel(arg_session_id, arg_action) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_SendWheel_ParamsSpec,
      null,
      [arg_session_id, arg_action],
      false);
  }

  updateZoomLevel(arg_session_id, arg_action) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ParamsSpec,
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ResponseParamsSpec,
      [arg_session_id, arg_action],
      false);
  }

  requestCapturedSurfaceControlPermission(arg_session_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ParamsSpec,
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ResponseParamsSpec,
      [arg_session_id],
      false);
  }

  getOpenDevice(arg_request_id, arg_session_id, arg_transfer_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ParamsSpec,
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ResponseParamsSpec,
      [arg_request_id, arg_session_id, arg_transfer_id],
      false);
  }

  keepDeviceAliveForTransfer(arg_session_id, arg_transfer_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ParamsSpec,
      mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ResponseParamsSpec,
      [arg_session_id, arg_transfer_id],
      false);
  }

};

mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MediaStreamDispatcherHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.MediaStreamDispatcherHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GenerateStreams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerateStreams (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: FocusCapturedSurface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_FocusCapturedSurface_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusCapturedSurface (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CancelRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_CancelRequest_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelRequest (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: StopStreamDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_StopStreamDevice_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopStreamDevice (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_OpenDevice_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDevice (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CloseDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_CloseDevice_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseDevice (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetCapturingLinkSecured
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_SetCapturingLinkSecured_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCapturingLinkSecured (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ApplySubCaptureTarget
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplySubCaptureTarget (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SendWheel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_SendWheel_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendWheel (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: UpdateZoomLevel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateZoomLevel (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RequestCapturedSurfaceControlPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestCapturedSurfaceControlPermission (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetOpenDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOpenDevice (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: KeepDeviceAliveForTransfer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> KeepDeviceAliveForTransfer (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generateStreams');
          const result = this.impl.generateStreams(params.arg_request_id, params.arg_controls, params.arg_user_gesture, params.arg_audio_stream_selection_info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GenerateStreams_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GenerateStreams FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_FocusCapturedSurface_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusCapturedSurface');
          const result = this.impl.focusCapturedSurface(params.arg_label, params.arg_focus);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_CancelRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelRequest');
          const result = this.impl.cancelRequest(params.arg_request_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_StopStreamDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopStreamDevice');
          const result = this.impl.stopStreamDevice(params.arg_device_id, params.arg_session_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_OpenDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openDevice');
          const result = this.impl.openDevice(params.arg_request_id, params.arg_device_id, params.arg_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_OpenDevice_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenDevice FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_CloseDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeDevice');
          const result = this.impl.closeDevice(params.arg_label);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_SetCapturingLinkSecured_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCapturingLinkSecured');
          const result = this.impl.setCapturingLinkSecured(params.arg_session_id, params.arg_type, params.arg_is_secure);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.applySubCaptureTarget');
          const result = this.impl.applySubCaptureTarget(params.arg_session_id, params.arg_type, params.arg_sub_capture_target, params.arg_sub_capture_target_version);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_ApplySubCaptureTarget_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ApplySubCaptureTarget FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_SendWheel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendWheel');
          const result = this.impl.sendWheel(params.arg_session_id, params.arg_action);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateZoomLevel');
          const result = this.impl.updateZoomLevel(params.arg_session_id, params.arg_action);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_UpdateZoomLevel_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateZoomLevel FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestCapturedSurfaceControlPermission');
          const result = this.impl.requestCapturedSurfaceControlPermission(params.arg_session_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_RequestCapturedSurfaceControlPermission_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestCapturedSurfaceControlPermission FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOpenDevice');
          const result = this.impl.getOpenDevice(params.arg_request_id, params.arg_session_id, params.arg_transfer_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_GetOpenDevice_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetOpenDevice FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.keepDeviceAliveForTransfer');
          const result = this.impl.keepDeviceAliveForTransfer(params.arg_session_id, params.arg_transfer_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHost_KeepDeviceAliveForTransfer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] KeepDeviceAliveForTransfer FAILED:', e));
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

mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHostReceiver = mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHostReceiver;

mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHostPtr = mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHostRemote;
mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHostRequest = mojo.internal.bindings.blink.mojom.MediaStreamDispatcherHostPendingReceiver;


// Interface: MediaStreamTrackMetricsHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHost_AddTrack_ParamsSpec, 'blink.mojom.MediaStreamTrackMetricsHost_AddTrack_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_audio', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_remote', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHost_RemoveTrack_ParamsSpec, 'blink.mojom.MediaStreamTrackMetricsHost_RemoveTrack_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MediaStreamTrackMetricsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addTrack(arg_id, arg_is_audio, arg_is_remote) {
    return this.$.addTrack(arg_id, arg_is_audio, arg_is_remote);
  }
  removeTrack(arg_id) {
    return this.$.removeTrack(arg_id);
  }
};

mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.MediaStreamTrackMetricsHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  addTrack(arg_id, arg_is_audio, arg_is_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHost_AddTrack_ParamsSpec,
      null,
      [arg_id, arg_is_audio, arg_is_remote],
      false);
  }

  removeTrack(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHost_RemoveTrack_ParamsSpec,
      null,
      [arg_id],
      false);
  }

};

mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MediaStreamTrackMetricsHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.MediaStreamTrackMetricsHost', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AddTrack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHost_AddTrack_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddTrack (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RemoveTrack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHost_RemoveTrack_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveTrack (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHost_AddTrack_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addTrack');
          const result = this.impl.addTrack(params.arg_id, params.arg_is_audio, params.arg_is_remote);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHost_RemoveTrack_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeTrack');
          const result = this.impl.removeTrack(params.arg_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHostReceiver = mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHostReceiver;

mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHostPtr = mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHostRemote;
mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHostRequest = mojo.internal.bindings.blink.mojom.MediaStreamTrackMetricsHostPendingReceiver;

