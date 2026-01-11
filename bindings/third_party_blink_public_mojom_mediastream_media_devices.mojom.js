// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/mediastream/media_devices.mojom
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

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
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

mojo.internal.bindings.blink.mojom.MediaDeviceTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.FacingModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.AudioOutputStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.MediaDeviceInfoSpec = { $: {} };
mojo.internal.bindings.blink.mojom.VideoInputDeviceCapabilitiesSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SelectAudioOutputResultSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AudioInputDeviceCapabilitiesSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost = {};
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost.$interfaceName = 'blink.mojom.MediaDevicesDispatcherHost';
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_AddMediaDevicesListener_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SetCaptureHandleConfig_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_CloseFocusWindowOfOpportunity_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MediaDevicesListener = {};
mojo.internal.bindings.blink.mojom.MediaDevicesListener.$interfaceName = 'blink.mojom.MediaDevicesListener';
mojo.internal.bindings.blink.mojom.MediaDevicesListener_OnDevicesChanged_ParamsSpec = { $: {} };

// Enum: MediaDeviceType
mojo.internal.bindings.blink.mojom.MediaDeviceType = {
  kMediaAudioInput: 0,
  kMediaVideoInput: 1,
  kMediaAudioOutput: 2,
  kNumMediaDeviceTypes: 3,
};

// Enum: FacingMode
mojo.internal.bindings.blink.mojom.FacingMode = {
  kNone: 0,
  kUser: 1,
  kEnvironment: 2,
  kLeft: 3,
  kRight: 4,
};

// Enum: AudioOutputStatus
mojo.internal.bindings.blink.mojom.AudioOutputStatus = {
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
    mojo.internal.bindings.blink.mojom.MediaDeviceInfoSpec, 'blink.mojom.MediaDeviceInfo', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_group_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_control_support', 24, 0, mojo.internal.bindings.media.mojom.VideoCaptureControlSupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_facing_mode', 32, 0, mojo.internal.bindings.blink.mojom.FacingModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_availability', 40, 0, mojo.internal.bindings.media.mojom.CameraAvailabilitySpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: VideoInputDeviceCapabilities
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.VideoInputDeviceCapabilitiesSpec, 'blink.mojom.VideoInputDeviceCapabilities', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_group_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_control_support', 16, 0, mojo.internal.bindings.media.mojom.VideoCaptureControlSupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_formats', 24, 0, mojo.internal.Array(mojo.internal.bindings.media.mojom.VideoCaptureFormatSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_facing_mode', 32, 0, mojo.internal.bindings.blink.mojom.FacingModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_availability', 40, 0, mojo.internal.bindings.media.mojom.CameraAvailabilitySpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SelectAudioOutputResult
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SelectAudioOutputResultSpec, 'blink.mojom.SelectAudioOutputResult', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.AudioOutputStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_info', 8, 0, mojo.internal.bindings.blink.mojom.MediaDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AudioInputDeviceCapabilities
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AudioInputDeviceCapabilitiesSpec, 'blink.mojom.AudioInputDeviceCapabilities', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_group_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_parameters', 16, 0, mojo.internal.bindings.media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_latency', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_channels', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sample_rate', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_valid', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: MediaDevicesDispatcherHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_Params', [
      mojo.internal.StructField('arg_request_audio_input', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_request_video_input', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_request_audio_output', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_request_video_input_capabilities', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_request_audio_input_capabilities', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ResponseParams', [
      mojo.internal.StructField('arg_enumeration', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.bindings.blink.mojom.MediaDeviceInfoSpec.$, false), false), null, false, 0, undefined),
      mojo.internal.StructField('arg_video_input_device_capabilities', 8, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.VideoInputDeviceCapabilitiesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_audio_input_device_capabilities', 16, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.AudioInputDeviceCapabilitiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ResponseParams', [
      mojo.internal.StructField('arg_video_input_device_capabilities', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.VideoInputDeviceCapabilitiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ResponseParams', [
      mojo.internal.StructField('arg_formats', 0, 0, mojo.internal.Array(mojo.internal.bindings.media.mojom.VideoCaptureFormatSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ResponseParams', [
      mojo.internal.StructField('arg_formats', 0, 0, mojo.internal.Array(mojo.internal.bindings.media.mojom.VideoCaptureFormatSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ResponseParams', [
      mojo.internal.StructField('arg_audio_input_device_capabilities', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.AudioInputDeviceCapabilitiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_AddMediaDevicesListener_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_AddMediaDevicesListener_Params', [
      mojo.internal.StructField('arg_listener', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.MediaDevicesListenerSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_subscribe_audio_input', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_subscribe_video_input', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_subscribe_audio_output', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SetCaptureHandleConfig_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_SetCaptureHandleConfig_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.blink.mojom.CaptureHandleConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_CloseFocusWindowOfOpportunity_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_CloseFocusWindowOfOpportunity_Params', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.media.mojom.SubCaptureTargetTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ResponseParams', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_Params', [
      mojo.internal.StructField('arg_sink_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.media.mojom.OutputDeviceStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ResponseParamsSpec, 'blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.SelectAudioOutputResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MediaDevicesDispatcherHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  enumerateDevices(arg_request_audio_input, arg_request_video_input, arg_request_audio_output, arg_request_video_input_capabilities, arg_request_audio_input_capabilities) {
    return this.$.enumerateDevices(arg_request_audio_input, arg_request_video_input, arg_request_audio_output, arg_request_video_input_capabilities, arg_request_audio_input_capabilities);
  }
  getVideoInputCapabilities() {
    return this.$.getVideoInputCapabilities();
  }
  getAllVideoInputDeviceFormats(arg_device_id) {
    return this.$.getAllVideoInputDeviceFormats(arg_device_id);
  }
  getAvailableVideoInputDeviceFormats(arg_device_id) {
    return this.$.getAvailableVideoInputDeviceFormats(arg_device_id);
  }
  getAudioInputCapabilities() {
    return this.$.getAudioInputCapabilities();
  }
  addMediaDevicesListener(arg_subscribe_audio_input, arg_subscribe_video_input, arg_subscribe_audio_output, arg_listener) {
    return this.$.addMediaDevicesListener(arg_subscribe_audio_input, arg_subscribe_video_input, arg_subscribe_audio_output, arg_listener);
  }
  setCaptureHandleConfig(arg_config) {
    return this.$.setCaptureHandleConfig(arg_config);
  }
  closeFocusWindowOfOpportunity(arg_label) {
    return this.$.closeFocusWindowOfOpportunity(arg_label);
  }
  produceSubCaptureTargetId(arg_type) {
    return this.$.produceSubCaptureTargetId(arg_type);
  }
  setPreferredSinkId(arg_sink_id) {
    return this.$.setPreferredSinkId(arg_sink_id);
  }
  selectAudioOutput(arg_device_id) {
    return this.$.selectAudioOutput(arg_device_id);
  }
};

mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaDevicesDispatcherHost', [
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

  enumerateDevices(arg_request_audio_input, arg_request_video_input, arg_request_audio_output, arg_request_video_input_capabilities, arg_request_audio_input_capabilities) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ParamsSpec,
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ResponseParamsSpec,
      [arg_request_audio_input, arg_request_video_input, arg_request_audio_output, arg_request_video_input_capabilities, arg_request_audio_input_capabilities],
      false);
  }

  getVideoInputCapabilities() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ParamsSpec,
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ResponseParamsSpec,
      [],
      false);
  }

  getAllVideoInputDeviceFormats(arg_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ParamsSpec,
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ResponseParamsSpec,
      [arg_device_id],
      false);
  }

  getAvailableVideoInputDeviceFormats(arg_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ParamsSpec,
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ResponseParamsSpec,
      [arg_device_id],
      false);
  }

  getAudioInputCapabilities() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ParamsSpec,
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ResponseParamsSpec,
      [],
      false);
  }

  addMediaDevicesListener(arg_subscribe_audio_input, arg_subscribe_video_input, arg_subscribe_audio_output, arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_AddMediaDevicesListener_ParamsSpec,
      null,
      [arg_subscribe_audio_input, arg_subscribe_video_input, arg_subscribe_audio_output, arg_listener],
      false);
  }

  setCaptureHandleConfig(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SetCaptureHandleConfig_ParamsSpec,
      null,
      [arg_config],
      false);
  }

  closeFocusWindowOfOpportunity(arg_label) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_CloseFocusWindowOfOpportunity_ParamsSpec,
      null,
      [arg_label],
      false);
  }

  produceSubCaptureTargetId(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ParamsSpec,
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ResponseParamsSpec,
      [arg_type],
      false);
  }

  setPreferredSinkId(arg_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ParamsSpec,
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ResponseParamsSpec,
      [arg_sink_id],
      false);
  }

  selectAudioOutput(arg_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ParamsSpec,
      mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ResponseParamsSpec,
      [arg_device_id],
      false);
  }

};

mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MediaDevicesDispatcherHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaDevicesDispatcherHost', [
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
        
        // Try Method 0: EnumerateDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_AddMediaDevicesListener_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SetCaptureHandleConfig_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_CloseFocusWindowOfOpportunity_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enumerateDevices');
          const result = this.impl.enumerateDevices(params.arg_request_audio_input, params.arg_request_video_input, params.arg_request_audio_output, params.arg_request_video_input_capabilities, params.arg_request_audio_input_capabilities);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_EnumerateDevices_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EnumerateDevices FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getVideoInputCapabilities');
          const result = this.impl.getVideoInputCapabilities();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetVideoInputCapabilities_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetVideoInputCapabilities FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllVideoInputDeviceFormats');
          const result = this.impl.getAllVideoInputDeviceFormats(params.arg_device_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAllVideoInputDeviceFormats_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAllVideoInputDeviceFormats FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAvailableVideoInputDeviceFormats');
          const result = this.impl.getAvailableVideoInputDeviceFormats(params.arg_device_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAvailableVideoInputDeviceFormats_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAvailableVideoInputDeviceFormats FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAudioInputCapabilities');
          const result = this.impl.getAudioInputCapabilities();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_GetAudioInputCapabilities_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAudioInputCapabilities FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_AddMediaDevicesListener_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addMediaDevicesListener');
          const result = this.impl.addMediaDevicesListener(params.arg_subscribe_audio_input, params.arg_subscribe_video_input, params.arg_subscribe_audio_output, params.arg_listener);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SetCaptureHandleConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCaptureHandleConfig');
          const result = this.impl.setCaptureHandleConfig(params.arg_config);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_CloseFocusWindowOfOpportunity_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeFocusWindowOfOpportunity');
          const result = this.impl.closeFocusWindowOfOpportunity(params.arg_label);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.produceSubCaptureTargetId');
          const result = this.impl.produceSubCaptureTargetId(params.arg_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_ProduceSubCaptureTargetId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ProduceSubCaptureTargetId FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPreferredSinkId');
          const result = this.impl.setPreferredSinkId(params.arg_sink_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SetPreferredSinkId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetPreferredSinkId FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectAudioOutput');
          const result = this.impl.selectAudioOutput(params.arg_device_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHost_SelectAudioOutput_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SelectAudioOutput FAILED:', e));
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

mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHostReceiver = mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHostReceiver;

mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHostPtr = mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHostRemote;
mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHostRequest = mojo.internal.bindings.blink.mojom.MediaDevicesDispatcherHostPendingReceiver;


// Interface: MediaDevicesListener
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MediaDevicesListener_OnDevicesChanged_ParamsSpec, 'blink.mojom.MediaDevicesListener_OnDevicesChanged_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.blink.mojom.MediaDeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_infos', 8, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.MediaDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.blink.mojom.MediaDevicesListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.MediaDevicesListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MediaDevicesListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.MediaDevicesListenerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.MediaDevicesListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDevicesChanged(arg_type, arg_device_infos) {
    return this.$.onDevicesChanged(arg_type, arg_device_infos);
  }
};

mojo.internal.bindings.blink.mojom.MediaDevicesListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaDevicesListener', [
      { explicit: null },
    ]);
  }

  onDevicesChanged(arg_type, arg_device_infos) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.MediaDevicesListener_OnDevicesChanged_ParamsSpec,
      null,
      [arg_type, arg_device_infos],
      false);
  }

};

mojo.internal.bindings.blink.mojom.MediaDevicesListener.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.MediaDevicesListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MediaDevicesListener',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.MediaDevicesListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaDevicesListener', [
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
        
        // Try Method 0: OnDevicesChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesListener_OnDevicesChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.MediaDevicesListener_OnDevicesChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDevicesChanged');
          const result = this.impl.onDevicesChanged(params.arg_type, params.arg_device_infos);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.MediaDevicesListenerReceiver = mojo.internal.bindings.blink.mojom.MediaDevicesListenerReceiver;

mojo.internal.bindings.blink.mojom.MediaDevicesListenerPtr = mojo.internal.bindings.blink.mojom.MediaDevicesListenerRemote;
mojo.internal.bindings.blink.mojom.MediaDevicesListenerRequest = mojo.internal.bindings.blink.mojom.MediaDevicesListenerPendingReceiver;

