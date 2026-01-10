// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mediastream/media_devices.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};

blink.mojom.MediaDeviceTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.FacingModeSpec = { $: mojo.internal.Enum() };
blink.mojom.AudioOutputStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.MediaDeviceInfoSpec = { $: {} };
blink.mojom.VideoInputDeviceCapabilitiesSpec = { $: {} };
blink.mojom.SelectAudioOutputResultSpec = { $: {} };
blink.mojom.AudioInputDeviceCapabilitiesSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost = {};
blink.mojom.MediaDevicesDispatcherHost.$interfaceName = 'blink.mojom.MediaDevicesDispatcherHost';
blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ResponseParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ResponseParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ResponseParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ResponseParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ResponseParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_AddMediaDevicesListener_ParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_SetCaptureHandleConfig_ParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_CloseFocusWindowOfOpportunity_ParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ResponseParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ResponseParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ParamsSpec = { $: {} };
blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ResponseParamsSpec = { $: {} };
blink.mojom.MediaDevicesListener = {};
blink.mojom.MediaDevicesListener.$interfaceName = 'blink.mojom.MediaDevicesListener';
blink.mojom.MediaDevicesListener_OnDevicesChanged_ParamsSpec = { $: {} };

// Enum: MediaDeviceType
blink.mojom.MediaDeviceType = {
  kMediaAudioInput: 0,
  kMediaVideoInput: 1,
  kMediaAudioOutput: 2,
  kNumMediaDeviceTypes: 3,
};

// Enum: FacingMode
blink.mojom.FacingMode = {
  kNone: 0,
  kUser: 1,
  kEnvironment: 2,
  kLeft: 3,
  kRight: 4,
};

// Enum: AudioOutputStatus
blink.mojom.AudioOutputStatus = {
  kSuccess: 0,
  kNoPermission: 1,
  kNoDevices: 2,
  kUnknown: 3,
  kDeviceNotFound: 4,
  kErrorOtherRequestInProgress: 5,
  kNotSupported: 6,
  kNoUserActivation: 7,
};

// Struct: MediaDeviceInfo
mojo.internal.Struct(
    blink.mojom.MediaDeviceInfoSpec, 'blink.mojom.MediaDeviceInfo', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('control_support', 24, 0, media.mojom.VideoCaptureControlSupportSpec, null, false, 0, undefined),
      mojo.internal.StructField('facing_mode', 32, 0, blink.mojom.FacingModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('availability', 36, 0, media.mojom.CameraAvailabilitySpec, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: VideoInputDeviceCapabilities
mojo.internal.Struct(
    blink.mojom.VideoInputDeviceCapabilitiesSpec, 'blink.mojom.VideoInputDeviceCapabilities', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('control_support', 16, 0, media.mojom.VideoCaptureControlSupportSpec, null, false, 0, undefined),
      mojo.internal.StructField('formats', 24, 0, mojo.internal.Array(media.mojom.VideoCaptureFormatSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('facing_mode', 32, 0, blink.mojom.FacingModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('availability', 36, 0, media.mojom.CameraAvailabilitySpec, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SelectAudioOutputResult
mojo.internal.Struct(
    blink.mojom.SelectAudioOutputResultSpec, 'blink.mojom.SelectAudioOutputResult', [
      mojo.internal.StructField('status', 8, 0, blink.mojom.AudioOutputStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('device_info', 0, 0, blink.mojom.MediaDeviceInfoSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AudioInputDeviceCapabilities
mojo.internal.Struct(
    blink.mojom.AudioInputDeviceCapabilitiesSpec, 'blink.mojom.AudioInputDeviceCapabilities', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('parameters', 16, 0, media.mojom.AudioParametersSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_valid', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('channels', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sample_rate', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('latency', 24, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: MediaDevicesDispatcherHost
mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_Params', [
      mojo.internal.StructField('request_audio_input', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('request_video_input', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('request_audio_output', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('request_video_input_capabilities', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('request_audio_input_capabilities', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ResponseParams', [
      mojo.internal.StructField('enumeration', 0, 0, mojo.internal.Array(mojo.internal.Array(blink.mojom.MediaDeviceInfoSpec, false), false), null, false, 0, undefined),
      mojo.internal.StructField('video_input_device_capabilities', 8, 0, mojo.internal.Array(blink.mojom.VideoInputDeviceCapabilitiesSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('audio_input_device_capabilities', 16, 0, mojo.internal.Array(blink.mojom.AudioInputDeviceCapabilitiesSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ResponseParams', [
      mojo.internal.StructField('video_input_device_capabilities', 0, 0, mojo.internal.Array(blink.mojom.VideoInputDeviceCapabilitiesSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ResponseParams', [
      mojo.internal.StructField('formats', 0, 0, mojo.internal.Array(media.mojom.VideoCaptureFormatSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ResponseParams', [
      mojo.internal.StructField('formats', 0, 0, mojo.internal.Array(media.mojom.VideoCaptureFormatSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ResponseParams', [
      mojo.internal.StructField('audio_input_device_capabilities', 0, 0, mojo.internal.Array(blink.mojom.AudioInputDeviceCapabilitiesSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_AddMediaDevicesListener_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_AddMediaDevicesListener_Params', [
      mojo.internal.StructField('subscribe_audio_input', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('subscribe_video_input', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('subscribe_audio_output', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.MediaDevicesListenerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_SetCaptureHandleConfig_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_SetCaptureHandleConfig_Params', [
      mojo.internal.StructField('config', 0, 0, blink.mojom.CaptureHandleConfigSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_CloseFocusWindowOfOpportunity_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_CloseFocusWindowOfOpportunity_Params', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_Params', [
      mojo.internal.StructField('type', 0, 0, media.mojom.SubCaptureTargetTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ResponseParams', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_Params', [
      mojo.internal.StructField('sink_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.OutputDeviceStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.SelectAudioOutputResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.MediaDevicesDispatcherHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.MediaDevicesDispatcherHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MediaDevicesDispatcherHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.MediaDevicesDispatcherHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.MediaDevicesDispatcherHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.MediaDevicesDispatcherHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enumerateDevices(request_audio_input, request_video_input, request_audio_output, request_video_input_capabilities, request_audio_input_capabilities) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ParamsSpec,
      blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ResponseParamsSpec,
      [request_audio_input, request_video_input, request_audio_output, request_video_input_capabilities, request_audio_input_capabilities]);
  }

  getVideoInputCapabilities() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ParamsSpec,
      blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ResponseParamsSpec,
      []);
  }

  getAllVideoInputDeviceFormats(device_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ParamsSpec,
      blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ResponseParamsSpec,
      [device_id]);
  }

  getAvailableVideoInputDeviceFormats(device_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ParamsSpec,
      blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ResponseParamsSpec,
      [device_id]);
  }

  getAudioInputCapabilities() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ParamsSpec,
      blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ResponseParamsSpec,
      []);
  }

  addMediaDevicesListener(subscribe_audio_input, subscribe_video_input, subscribe_audio_output, listener) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_AddMediaDevicesListener_ParamsSpec,
      null,
      [subscribe_audio_input, subscribe_video_input, subscribe_audio_output, listener]);
  }

  setCaptureHandleConfig(config) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_SetCaptureHandleConfig_ParamsSpec,
      null,
      [config]);
  }

  closeFocusWindowOfOpportunity(label) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_CloseFocusWindowOfOpportunity_ParamsSpec,
      null,
      [label]);
  }

  produceSubCaptureTargetId(type) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ParamsSpec,
      blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ResponseParamsSpec,
      [type]);
  }

  setPreferredSinkId(sink_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ParamsSpec,
      blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ResponseParamsSpec,
      [sink_id]);
  }

  selectAudioOutput(device_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ParamsSpec,
      blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ResponseParamsSpec,
      [device_id]);
  }

};

blink.mojom.MediaDevicesDispatcherHost.getRemote = function() {
  let remote = new blink.mojom.MediaDevicesDispatcherHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MediaDevicesDispatcherHost',
    'context');
  return remote.$;
};

blink.mojom.MediaDevicesDispatcherHostPtr = blink.mojom.MediaDevicesDispatcherHostRemote;
blink.mojom.MediaDevicesDispatcherHostRequest = blink.mojom.MediaDevicesDispatcherHostPendingReceiver;


// Interface: MediaDevicesListener
mojo.internal.Struct(
    blink.mojom.MediaDevicesListener_OnDevicesChanged_ParamsSpec, 'blink.mojom.MediaDevicesListener_OnDevicesChanged_Params', [
      mojo.internal.StructField('type', 8, 0, blink.mojom.MediaDeviceTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('device_infos', 0, 0, mojo.internal.Array(blink.mojom.MediaDeviceInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.MediaDevicesListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.MediaDevicesListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MediaDevicesListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.MediaDevicesListenerPendingReceiver,
      handle);
    this.$ = new blink.mojom.MediaDevicesListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.MediaDevicesListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDevicesChanged(type, device_infos) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.MediaDevicesListener_OnDevicesChanged_ParamsSpec,
      null,
      [type, device_infos]);
  }

};

blink.mojom.MediaDevicesListener.getRemote = function() {
  let remote = new blink.mojom.MediaDevicesListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MediaDevicesListener',
    'context');
  return remote.$;
};

blink.mojom.MediaDevicesListenerPtr = blink.mojom.MediaDevicesListenerRemote;
blink.mojom.MediaDevicesListenerRequest = blink.mojom.MediaDevicesListenerPendingReceiver;

