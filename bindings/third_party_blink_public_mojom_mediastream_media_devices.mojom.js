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
blink.mojom.MediaDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDeviceInfo',
      packedSize: 16,
      fields: [
        { name: 'availability', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoInputDeviceCapabilities
blink.mojom.VideoInputDeviceCapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.VideoInputDeviceCapabilities',
      packedSize: 16,
      fields: [
        { name: 'availability', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SelectAudioOutputResult
blink.mojom.SelectAudioOutputResultSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SelectAudioOutputResult',
      packedSize: 16,
      fields: [
        { name: 'device_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AudioInputDeviceCapabilities
blink.mojom.AudioInputDeviceCapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AudioInputDeviceCapabilities',
      packedSize: 16,
      fields: [
        { name: 'latency', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: MediaDevicesDispatcherHost
blink.mojom.MediaDevicesDispatcherHost = {};

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

// ParamsSpec for EnumerateDevices
blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.EnumerateDevices_Params',
      packedSize: 16,
      fields: [
        { name: 'request_audio_input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'request_video_input', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'request_audio_output', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'request_video_input_capabilities', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'request_audio_input_capabilities', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.EnumerateDevices_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'enumeration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'video_input_device_capabilities', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'audio_input_device_capabilities', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetVideoInputCapabilities
blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.GetVideoInputCapabilities_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.GetVideoInputCapabilities_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'video_input_device_capabilities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAllVideoInputDeviceFormats
blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.GetAllVideoInputDeviceFormats_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.GetAllVideoInputDeviceFormats_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'formats', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAvailableVideoInputDeviceFormats
blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.GetAvailableVideoInputDeviceFormats_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.GetAvailableVideoInputDeviceFormats_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'formats', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAudioInputCapabilities
blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.GetAudioInputCapabilities_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.GetAudioInputCapabilities_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'audio_input_device_capabilities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddMediaDevicesListener
blink.mojom.MediaDevicesDispatcherHost_AddMediaDevicesListener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.AddMediaDevicesListener_Params',
      packedSize: 24,
      fields: [
        { name: 'subscribe_audio_input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'subscribe_video_input', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'subscribe_audio_output', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'listener', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCaptureHandleConfig
blink.mojom.MediaDevicesDispatcherHost_SetCaptureHandleConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.SetCaptureHandleConfig_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloseFocusWindowOfOpportunity
blink.mojom.MediaDevicesDispatcherHost_CloseFocusWindowOfOpportunity_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.CloseFocusWindowOfOpportunity_Params',
      packedSize: 16,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ProduceSubCaptureTargetId
blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.ProduceSubCaptureTargetId_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.ProduceSubCaptureTargetId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPreferredSinkId
blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.SetPreferredSinkId_Params',
      packedSize: 16,
      fields: [
        { name: 'sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.SetPreferredSinkId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SelectAudioOutput
blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.SelectAudioOutput_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesDispatcherHost.SelectAudioOutput_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.MediaDevicesDispatcherHostPtr = blink.mojom.MediaDevicesDispatcherHostRemote;
blink.mojom.MediaDevicesDispatcherHostRequest = blink.mojom.MediaDevicesDispatcherHostPendingReceiver;


// Interface: MediaDevicesListener
blink.mojom.MediaDevicesListener = {};

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

// ParamsSpec for OnDevicesChanged
blink.mojom.MediaDevicesListener_OnDevicesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaDevicesListener.OnDevicesChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'device_infos', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.MediaDevicesListenerPtr = blink.mojom.MediaDevicesListenerRemote;
blink.mojom.MediaDevicesListenerRequest = blink.mojom.MediaDevicesListenerPendingReceiver;

