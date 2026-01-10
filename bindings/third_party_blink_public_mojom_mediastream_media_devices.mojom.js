// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mediastream/media_devices.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var media = media || {};
var mojo_base = mojo_base || {};

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
      mojo.internal.StructField('control_support', 24, 0, media.mojom.VideoCaptureControlSupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('facing_mode', 32, 0, blink.mojom.FacingModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('availability', 40, 0, media.mojom.CameraAvailabilitySpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: VideoInputDeviceCapabilities
mojo.internal.Struct(
    blink.mojom.VideoInputDeviceCapabilitiesSpec, 'blink.mojom.VideoInputDeviceCapabilities', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('control_support', 16, 0, media.mojom.VideoCaptureControlSupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('formats', 24, 0, mojo.internal.Array(media.mojom.VideoCaptureFormatSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('facing_mode', 32, 0, blink.mojom.FacingModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('availability', 40, 0, media.mojom.CameraAvailabilitySpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SelectAudioOutputResult
mojo.internal.Struct(
    blink.mojom.SelectAudioOutputResultSpec, 'blink.mojom.SelectAudioOutputResult', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.AudioOutputStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_info', 8, 0, blink.mojom.MediaDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AudioInputDeviceCapabilities
mojo.internal.Struct(
    blink.mojom.AudioInputDeviceCapabilitiesSpec, 'blink.mojom.AudioInputDeviceCapabilities', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('parameters', 16, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('latency', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channels', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sample_rate', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_valid', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
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
      mojo.internal.StructField('enumeration', 0, 0, mojo.internal.Array(mojo.internal.Array(blink.mojom.MediaDeviceInfoSpec.$, false), false), null, false, 0, undefined),
      mojo.internal.StructField('video_input_device_capabilities', 8, 0, mojo.internal.Array(blink.mojom.VideoInputDeviceCapabilitiesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('audio_input_device_capabilities', 16, 0, mojo.internal.Array(blink.mojom.AudioInputDeviceCapabilitiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ResponseParams', [
      mojo.internal.StructField('video_input_device_capabilities', 0, 0, mojo.internal.Array(blink.mojom.VideoInputDeviceCapabilitiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ResponseParams', [
      mojo.internal.StructField('formats', 0, 0, mojo.internal.Array(media.mojom.VideoCaptureFormatSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ResponseParams', [
      mojo.internal.StructField('formats', 0, 0, mojo.internal.Array(media.mojom.VideoCaptureFormatSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ResponseParams', [
      mojo.internal.StructField('audio_input_device_capabilities', 0, 0, mojo.internal.Array(blink.mojom.AudioInputDeviceCapabilitiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_AddMediaDevicesListener_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_AddMediaDevicesListener_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.MediaDevicesListenerSpec), null, false, 0, undefined),
      mojo.internal.StructField('subscribe_audio_input', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('subscribe_video_input', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('subscribe_audio_output', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_SetCaptureHandleConfig_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_SetCaptureHandleConfig_Params', [
      mojo.internal.StructField('config', 0, 0, blink.mojom.CaptureHandleConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_CloseFocusWindowOfOpportunity_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_CloseFocusWindowOfOpportunity_Params', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_Params', [
      mojo.internal.StructField('type', 0, 0, media.mojom.SubCaptureTargetTypeSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('status', 0, 0, media.mojom.OutputDeviceStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.SelectAudioOutputResultSpec.$, null, false, 0, undefined),
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
      [request_audio_input, request_video_input, request_audio_output, request_video_input_capabilities, request_audio_input_capabilities],
      false);
  }

  getVideoInputCapabilities() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ParamsSpec,
      blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ResponseParamsSpec,
      [],
      false);
  }

  getAllVideoInputDeviceFormats(device_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ParamsSpec,
      blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ResponseParamsSpec,
      [device_id],
      false);
  }

  getAvailableVideoInputDeviceFormats(device_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ParamsSpec,
      blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ResponseParamsSpec,
      [device_id],
      false);
  }

  getAudioInputCapabilities() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ParamsSpec,
      blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ResponseParamsSpec,
      [],
      false);
  }

  addMediaDevicesListener(subscribe_audio_input, subscribe_video_input, subscribe_audio_output, listener) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_AddMediaDevicesListener_ParamsSpec,
      null,
      [subscribe_audio_input, subscribe_video_input, subscribe_audio_output, listener],
      false);
  }

  setCaptureHandleConfig(config) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_SetCaptureHandleConfig_ParamsSpec,
      null,
      [config],
      false);
  }

  closeFocusWindowOfOpportunity(label) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_CloseFocusWindowOfOpportunity_ParamsSpec,
      null,
      [label],
      false);
  }

  produceSubCaptureTargetId(type) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ParamsSpec,
      blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ResponseParamsSpec,
      [type],
      false);
  }

  setPreferredSinkId(sink_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ParamsSpec,
      blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ResponseParamsSpec,
      [sink_id],
      false);
  }

  selectAudioOutput(device_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ParamsSpec,
      blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ResponseParamsSpec,
      [device_id],
      false);
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

blink.mojom.MediaDevicesDispatcherHostReceiver = class {
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
        
        // Try Method 0: EnumerateDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnumerateDevices (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetVideoInputCapabilities
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVideoInputCapabilities (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetAllVideoInputDeviceFormats
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllVideoInputDeviceFormats (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetAvailableVideoInputDeviceFormats
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAvailableVideoInputDeviceFormats (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetAudioInputCapabilities
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAudioInputCapabilities (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: AddMediaDevicesListener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_AddMediaDevicesListener_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddMediaDevicesListener (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetCaptureHandleConfig
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_SetCaptureHandleConfig_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCaptureHandleConfig (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: CloseFocusWindowOfOpportunity
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_CloseFocusWindowOfOpportunity_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseFocusWindowOfOpportunity (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ProduceSubCaptureTargetId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProduceSubCaptureTargetId (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetPreferredSinkId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPreferredSinkId (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SelectAudioOutput
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectAudioOutput (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.enumerateDevices');
          const result = this.impl.enumerateDevices(params.request_audio_input, params.request_video_input, params.request_audio_output, params.request_video_input_capabilities, params.request_audio_input_capabilities);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getVideoInputCapabilities');
          const result = this.impl.getVideoInputCapabilities();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getAllVideoInputDeviceFormats');
          const result = this.impl.getAllVideoInputDeviceFormats(params.device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getAvailableVideoInputDeviceFormats');
          const result = this.impl.getAvailableVideoInputDeviceFormats(params.device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getAudioInputCapabilities');
          const result = this.impl.getAudioInputCapabilities();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_AddMediaDevicesListener_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.addMediaDevicesListener');
          const result = this.impl.addMediaDevicesListener(params.subscribe_audio_input, params.subscribe_video_input, params.subscribe_audio_output, params.listener);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_SetCaptureHandleConfig_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setCaptureHandleConfig');
          const result = this.impl.setCaptureHandleConfig(params.config);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_CloseFocusWindowOfOpportunity_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.closeFocusWindowOfOpportunity');
          const result = this.impl.closeFocusWindowOfOpportunity(params.label);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.produceSubCaptureTargetId');
          const result = this.impl.produceSubCaptureTargetId(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setPreferredSinkId');
          const result = this.impl.setPreferredSinkId(params.sink_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.selectAudioOutput');
          const result = this.impl.selectAudioOutput(params.device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ResponseParamsSpec);
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

blink.mojom.MediaDevicesDispatcherHostReceiver = blink.mojom.MediaDevicesDispatcherHostReceiver;

blink.mojom.MediaDevicesDispatcherHostPtr = blink.mojom.MediaDevicesDispatcherHostRemote;
blink.mojom.MediaDevicesDispatcherHostRequest = blink.mojom.MediaDevicesDispatcherHostPendingReceiver;


// Interface: MediaDevicesListener
mojo.internal.Struct(
    blink.mojom.MediaDevicesListener_OnDevicesChanged_ParamsSpec, 'blink.mojom.MediaDevicesListener_OnDevicesChanged_Params', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.MediaDeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_infos', 8, 0, mojo.internal.Array(blink.mojom.MediaDeviceInfoSpec.$, false), null, false, 0, undefined),
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
      [type, device_infos],
      false);
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

blink.mojom.MediaDevicesListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: OnDevicesChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MediaDevicesListener_OnDevicesChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDevicesChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.MediaDevicesListener_OnDevicesChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onDevicesChanged');
          const result = this.impl.onDevicesChanged(params.type, params.device_infos);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.MediaDevicesListenerReceiver = blink.mojom.MediaDevicesListenerReceiver;

blink.mojom.MediaDevicesListenerPtr = blink.mojom.MediaDevicesListenerRemote;
blink.mojom.MediaDevicesListenerRequest = blink.mojom.MediaDevicesListenerPendingReceiver;

