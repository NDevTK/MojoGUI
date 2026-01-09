// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mediastream/media_devices.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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
blink.mojom.MediaDeviceInfo = class {
  constructor(values = {}) {
    this.availability = values.availability !== undefined ? values.availability : "";
  }
};

// Struct: VideoInputDeviceCapabilities
blink.mojom.VideoInputDeviceCapabilities = class {
  constructor(values = {}) {
    this.availability = values.availability !== undefined ? values.availability : "";
  }
};

// Struct: SelectAudioOutputResult
blink.mojom.SelectAudioOutputResult = class {
  constructor(values = {}) {
    this.device_info = values.device_info !== undefined ? values.device_info : null;
  }
};

// Struct: AudioInputDeviceCapabilities
blink.mojom.AudioInputDeviceCapabilities = class {
  constructor(values = {}) {
    this.latency = values.latency !== undefined ? values.latency : 0;
  }
};

// Interface: MediaDevicesDispatcherHost
blink.mojom.MediaDevicesDispatcherHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.MediaDevicesDispatcherHost';
  }

  enumerateDevices(request_audio_input, request_video_input, request_audio_output, request_video_input_capabilities, request_audio_input_capabilities) {
    // Method: EnumerateDevices
    return new Promise((resolve) => {
      // Call: EnumerateDevices(request_audio_input, request_video_input, request_audio_output, request_video_input_capabilities, request_audio_input_capabilities)
      resolve({});
    });
  }

  getVideoInputCapabilities() {
    // Method: GetVideoInputCapabilities
    return new Promise((resolve) => {
      // Call: GetVideoInputCapabilities()
      resolve({});
    });
  }

  getAllVideoInputDeviceFormats(device_id) {
    // Method: GetAllVideoInputDeviceFormats
    return new Promise((resolve) => {
      // Call: GetAllVideoInputDeviceFormats(device_id)
      resolve({});
    });
  }

  getAvailableVideoInputDeviceFormats(device_id) {
    // Method: GetAvailableVideoInputDeviceFormats
    return new Promise((resolve) => {
      // Call: GetAvailableVideoInputDeviceFormats(device_id)
      resolve({});
    });
  }

  getAudioInputCapabilities() {
    // Method: GetAudioInputCapabilities
    return new Promise((resolve) => {
      // Call: GetAudioInputCapabilities()
      resolve({});
    });
  }

  addMediaDevicesListener(subscribe_audio_input, subscribe_video_input, subscribe_audio_output, listener) {
    // Method: AddMediaDevicesListener
    // Call: AddMediaDevicesListener(subscribe_audio_input, subscribe_video_input, subscribe_audio_output, listener)
  }

  setCaptureHandleConfig(config) {
    // Method: SetCaptureHandleConfig
    // Call: SetCaptureHandleConfig(config)
  }

  surface() {
    // Method: surface
    // Call: surface()
  }

  closeFocusWindowOfOpportunity(label) {
    // Method: CloseFocusWindowOfOpportunity
    // Call: CloseFocusWindowOfOpportunity(label)
  }

  cropTo() {
    // Method: cropTo
    // Call: cropTo()
  }

  restrictTo() {
    // Method: restrictTo
    // Call: restrictTo()
  }

  produceSubCaptureTargetId(type) {
    // Method: ProduceSubCaptureTargetId
    return new Promise((resolve) => {
      // Call: ProduceSubCaptureTargetId(type)
      resolve({});
    });
  }

  setPreferredSinkId(sink_id) {
    // Method: SetPreferredSinkId
    return new Promise((resolve) => {
      // Call: SetPreferredSinkId(sink_id)
      resolve({});
    });
  }

  selectAudioOutput(device_id) {
    // Method: SelectAudioOutput
    return new Promise((resolve) => {
      // Call: SelectAudioOutput(device_id)
      resolve({});
    });
  }

};

blink.mojom.MediaDevicesDispatcherHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaDevicesListener
blink.mojom.MediaDevicesListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.MediaDevicesListener';
  }

  onDevicesChanged(type, device_infos) {
    // Method: OnDevicesChanged
    // Call: OnDevicesChanged(type, device_infos)
  }

};

blink.mojom.MediaDevicesListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
