// Auto-generated MojoJS binding
 // Source: chromium_src/media/capture/video/chromeos/mojom/camera3.mojom
 // Module: cros.mojom

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
 

 mojo.internal.bindings.cros = mojo.internal.bindings.cros || {};
mojo.internal.bindings.cros.mojom = mojo.internal.bindings.cros.mojom || {};

mojo.internal.bindings.cros.mojom.HalPixelFormatSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.Camera3StreamTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.Camera3StreamRotationSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.Camera3StreamConfigurationModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.Camera3BufferStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.Camera3MsgTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.Camera3ErrorMsgCodeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.Camera3BufferRequestStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.Camera3StreamBufferReqStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.Camera3RequestTemplateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.BufferTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.Camera3NotifyMsgMessageSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CropRotateScaleInfoSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3StreamSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3StreamConfigurationSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraBufferHandleSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3StreamBufferSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3ErrorMsgSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3ShutterMsgSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3NotifyMsgSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3BufferRequestSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3StreamBufferRetSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3PhyscamMetadataSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3CaptureRequestSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3CaptureResultSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3CallbackOps = {};
mojo.internal.bindings.cros.mojom.Camera3CallbackOps.$interfaceName = 'cros.mojom.Camera3CallbackOps';
mojo.internal.bindings.cros.mojom.Camera3CallbackOps_ProcessCaptureResult_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3CallbackOps_Notify_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3CallbackOps_ReturnStreamBuffers_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps = {};
mojo.internal.bindings.cros.mojom.Camera3DeviceOps.$interfaceName = 'cros.mojom.Camera3DeviceOps';
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Initialize_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Initialize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreams_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreams_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Dump_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Flush_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Flush_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_RegisterBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_RegisterBuffer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Close_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Close_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_SignalStreamFlush_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_OnNewBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_OnNewBuffer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.Camera3DeviceOps_OnBufferRetired_ParamsSpec = { $: {} };

mojo.internal.bindings.cros.mojom.GRALLOC_USAGE_SW_READ_NEVER = 0x00000000;

mojo.internal.bindings.cros.mojom.GRALLOC_USAGE_SW_READ_OFTEN = 0x00000003;

mojo.internal.bindings.cros.mojom.GRALLOC_USAGE_SW_WRITE_NEVER = 0x00000000;

mojo.internal.bindings.cros.mojom.GRALLOC_USAGE_SW_WRITE_OFTEN = 0x00000030;

mojo.internal.bindings.cros.mojom.GRALLOC_USAGE_HW_COMPOSER = 0x00000800;

mojo.internal.bindings.cros.mojom.GRALLOC_USAGE_HW_VIDEO_ENCODER = 0x00010000;

mojo.internal.bindings.cros.mojom.GRALLOC_USAGE_HW_CAMERA_WRITE = 0x00020000;

mojo.internal.bindings.cros.mojom.GRALLOC_USAGE_HW_CAMERA_READ = 0x00040000;

mojo.internal.bindings.cros.mojom.GRALLOC_USAGE_FORCE_I420 = 0x10000000;

mojo.internal.bindings.cros.mojom.GRALLOC_USAGE_STILL_CAPTURE = 0x20000000;

mojo.internal.bindings.cros.mojom.NO_BUFFER_BUFFER_ID = 0xFFFFFFFFFFFFFFFF;

// Enum: HalPixelFormat
mojo.internal.bindings.cros.mojom.HalPixelFormat = {
  HAL_PIXEL_FORMAT_RGBA_8888: 1,
  HAL_PIXEL_FORMAT_RGBX_8888: 2,
  HAL_PIXEL_FORMAT_BGRA_8888: 5,
  HAL_PIXEL_FORMAT_YCrCb_420_SP: 17,
  HAL_PIXEL_FORMAT_YCbCr_422_I: 20,
  HAL_PIXEL_FORMAT_BLOB: 33,
  HAL_PIXEL_FORMAT_IMPLEMENTATION_DEFINED: 34,
  HAL_PIXEL_FORMAT_YCbCr_420_888: 35,
  HAL_PIXEL_FORMAT_YV12: 842094169,
};

// Enum: Camera3StreamType
mojo.internal.bindings.cros.mojom.Camera3StreamType = {
  CAMERA3_STREAM_OUTPUT: 0,
  CAMERA3_STREAM_INPUT: 1,
  CAMERA3_STREAM_BIDIRECTIONAL: 2,
};

// Enum: Camera3StreamRotation
mojo.internal.bindings.cros.mojom.Camera3StreamRotation = {
  CAMERA3_STREAM_ROTATION_0: 0,
  CAMERA3_STREAM_ROTATION_90: 1,
  CAMERA3_STREAM_ROTATION_180: 2,
  CAMERA3_STREAM_ROTATION_270: 3,
};

// Enum: Camera3StreamConfigurationMode
mojo.internal.bindings.cros.mojom.Camera3StreamConfigurationMode = {
  CAMERA3_STREAM_CONFIGURATION_NORMAL_MODE: 0,
  CAMERA3_STREAM_CONFIGURATION_CONSTRAINED_HIGH_SPEED_MODE: 1,
};

// Enum: Camera3BufferStatus
mojo.internal.bindings.cros.mojom.Camera3BufferStatus = {
  CAMERA3_BUFFER_STATUS_OK: 0,
  CAMERA3_BUFFER_STATUS_ERROR: 1,
};

// Enum: Camera3MsgType
mojo.internal.bindings.cros.mojom.Camera3MsgType = {
  CAMERA3_MSG_ERROR: 1,
  CAMERA3_MSG_SHUTTER: 2,
};

// Enum: Camera3ErrorMsgCode
mojo.internal.bindings.cros.mojom.Camera3ErrorMsgCode = {
  CAMERA3_MSG_ERROR_DEVICE: 1,
  CAMERA3_MSG_ERROR_REQUEST: 2,
  CAMERA3_MSG_ERROR_RESULT: 3,
  CAMERA3_MSG_ERROR_BUFFER: 4,
};

// Enum: Camera3BufferRequestStatus
mojo.internal.bindings.cros.mojom.Camera3BufferRequestStatus = {
  CAMERA3_BUF_REQ_OK: 0,
  CAMERA3_BUF_REQ_FAILED_PARTIAL: 1,
  CAMERA3_BUF_REQ_FAILED_CONFIGURING: 2,
  CAMERA3_BUF_REQ_FAILED_ILLEGAL_ARGUMENTS: 3,
  CAMERA3_BUF_REQ_FAILED_UNKNOWN: 4,
};

// Enum: Camera3StreamBufferReqStatus
mojo.internal.bindings.cros.mojom.Camera3StreamBufferReqStatus = {
  CAMERA3_PS_BUF_REQ_OK: 0,
  CAMERA3_PS_BUF_REQ_NO_BUFFER_AVAILABLE: 1,
  CAMERA3_PS_BUF_REQ_MAX_BUFFER_EXCEEDED: 2,
  CAMERA3_PS_BUF_REQ_STREAM_DISCONNECTED: 3,
  CAMERA3_PS_BUF_REQ_UNKNOWN_ERROR: 4,
};

// Enum: Camera3RequestTemplate
mojo.internal.bindings.cros.mojom.Camera3RequestTemplate = {
  CAMERA3_TEMPLATE_PREVIEW: 1,
  CAMERA3_TEMPLATE_STILL_CAPTURE: 2,
  CAMERA3_TEMPLATE_VIDEO_RECORD: 3,
  CAMERA3_TEMPLATE_VIDEO_SNAPSHOT: 4,
  CAMERA3_TEMPLATE_ZERO_SHUTTER_LAG: 5,
  CAMERA3_TEMPLATE_MANUAL: 6,
  CAMERA3_TEMPLATE_COUNT: 7,
};

// Enum: BufferType
mojo.internal.bindings.cros.mojom.BufferType = {
  DMABUF: 0,
  SHM: 1,
};

// Union: Camera3NotifyMsgMessage
mojo.internal.Union(
    mojo.internal.bindings.cros.mojom.Camera3NotifyMsgMessageSpec, 'cros.mojom.Camera3NotifyMsgMessage', {
      'arg_error': {
        'ordinal': 0,
        'type': mojo.internal.bindings.cros.mojom.Camera3ErrorMsgSpec.$,
        'nullable': false,
      },
      'arg_shutter': {
        'ordinal': 1,
        'type': mojo.internal.bindings.cros.mojom.Camera3ShutterMsgSpec.$,
        'nullable': false,
      },
      'arg_generic': {
        'ordinal': 2,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Struct: CropRotateScaleInfo
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CropRotateScaleInfoSpec, 'cros.mojom.CropRotateScaleInfo', [
      mojo.internal.StructField('arg_crop_rotate_scale_degrees', 0, 0, mojo.internal.bindings.cros.mojom.Camera3StreamRotationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Camera3Stream
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3StreamSpec, 'cros.mojom.Camera3Stream', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_stream_type', 8, 0, mojo.internal.bindings.cros.mojom.Camera3StreamTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_format', 16, 0, mojo.internal.bindings.cros.mojom.HalPixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_rotation', 24, 0, mojo.internal.bindings.cros.mojom.Camera3StreamRotationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_width', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_usage', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_buffers', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_data_space', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_crop_rotate_scale_info', 56, 0, mojo.internal.bindings.cros.mojom.CropRotateScaleInfoSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_physical_camera_id', 64, 0, mojo.internal.String, null, true, 4, undefined),
      mojo.internal.StructField('arg_effects', 72, 0, mojo.internal.Array(mojo.internal.bindings.cros.mojom.Camera3StreamEffectSpec.$, false), null, true, 6, undefined),
    ],
    [[0, 64], [1, 72], [4, 80], [6, 88]]);

// Struct: Camera3StreamConfiguration
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3StreamConfigurationSpec, 'cros.mojom.Camera3StreamConfiguration', [
      mojo.internal.StructField('arg_streams', 0, 0, mojo.internal.Array(mojo.internal.bindings.cros.mojom.Camera3StreamSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_operation_mode', 8, 0, mojo.internal.bindings.cros.mojom.Camera3StreamConfigurationModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_parameters', 16, 0, mojo.internal.bindings.cros.mojom.CameraMetadataSpec.$, null, true, 4, undefined),
    ],
    [[0, 24], [4, 32]]);

// Struct: CameraBufferHandle
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraBufferHandleSpec, 'cros.mojom.CameraBufferHandle', [
      mojo.internal.StructField('arg_buffer_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fds', 8, 0, mojo.internal.Array(mojo.internal.Handle, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_hal_pixel_format', 16, 0, mojo.internal.bindings.cros.mojom.HalPixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_strides', 24, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_offsets', 32, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_drm_format', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_width', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sizes', 56, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, true, 3, undefined),
      mojo.internal.StructField('arg_modifier', 64, 0, mojo.internal.Uint64, 0, false, 7, undefined),
      mojo.internal.StructField('arg_has_modifier', 72, 0, mojo.internal.Bool, false, false, 7, undefined),
    ],
    [[0, 64], [3, 72], [7, 88]]);

// Struct: Camera3StreamBuffer
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3StreamBufferSpec, 'cros.mojom.Camera3StreamBuffer', [
      mojo.internal.StructField('arg_stream_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_status', 16, 0, mojo.internal.bindings.cros.mojom.Camera3BufferStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_acquire_fence', 24, 0, mojo.internal.Handle, null, true, 0, undefined),
      mojo.internal.StructField('arg_release_fence', 28, 0, mojo.internal.Handle, null, true, 0, undefined),
      mojo.internal.StructField('arg_buffer_handle', 32, 0, mojo.internal.bindings.cros.mojom.CameraBufferHandleSpec.$, null, true, 2, undefined),
    ],
    [[0, 40], [2, 48]]);

// Struct: Camera3ErrorMsg
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3ErrorMsgSpec, 'cros.mojom.Camera3ErrorMsg', [
      mojo.internal.StructField('arg_error_stream_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_error_code', 8, 0, mojo.internal.bindings.cros.mojom.Camera3ErrorMsgCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_number', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Camera3ShutterMsg
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3ShutterMsgSpec, 'cros.mojom.Camera3ShutterMsg', [
      mojo.internal.StructField('arg_timestamp', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_frame_number', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Camera3NotifyMsg
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3NotifyMsgSpec, 'cros.mojom.Camera3NotifyMsg', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.cros.mojom.Camera3MsgTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.bindings.cros.mojom.Camera3NotifyMsgMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Camera3BufferRequest
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3BufferRequestSpec, 'cros.mojom.Camera3BufferRequest', [
      mojo.internal.StructField('arg_stream_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_num_buffers_requested', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Camera3StreamBufferRet
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3StreamBufferRetSpec, 'cros.mojom.Camera3StreamBufferRet', [
      mojo.internal.StructField('arg_stream_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.cros.mojom.Camera3StreamBufferReqStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_buffers', 16, 0, mojo.internal.Array(mojo.internal.bindings.cros.mojom.Camera3StreamBufferSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Camera3PhyscamMetadata
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3PhyscamMetadataSpec, 'cros.mojom.Camera3PhyscamMetadata', [
      mojo.internal.StructField('arg_metadata', 0, 0, mojo.internal.bindings.cros.mojom.CameraMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Camera3CaptureRequest
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3CaptureRequestSpec, 'cros.mojom.Camera3CaptureRequest', [
      mojo.internal.StructField('arg_settings', 0, 0, mojo.internal.bindings.cros.mojom.CameraMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_buffer', 8, 0, mojo.internal.bindings.cros.mojom.Camera3StreamBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_output_buffers', 16, 0, mojo.internal.Array(mojo.internal.bindings.cros.mojom.Camera3StreamBufferSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_number', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_physcam_settings', 32, 0, mojo.internal.Array(mojo.internal.bindings.cros.mojom.Camera3PhyscamMetadataSpec.$, false), null, true, 4, undefined),
    ],
    [[0, 40], [4, 48]]);

// Struct: Camera3CaptureResult
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3CaptureResultSpec, 'cros.mojom.Camera3CaptureResult', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.cros.mojom.CameraMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_buffers', 8, 0, mojo.internal.Array(mojo.internal.bindings.cros.mojom.Camera3StreamBufferSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_input_buffer', 16, 0, mojo.internal.bindings.cros.mojom.Camera3StreamBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_frame_number', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_partial_result', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_physcam_metadata', 32, 0, mojo.internal.Array(mojo.internal.bindings.cros.mojom.Camera3PhyscamMetadataSpec.$, false), null, true, 4, undefined),
    ],
    [[0, 40], [4, 48]]);

// Interface: Camera3CallbackOps
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3CallbackOps_ProcessCaptureResult_ParamsSpec, 'cros.mojom.Camera3CallbackOps_ProcessCaptureResult_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.cros.mojom.Camera3CaptureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3CallbackOps_Notify_ParamsSpec, 'cros.mojom.Camera3CallbackOps_Notify_Params', [
      mojo.internal.StructField('arg_msg', 0, 0, mojo.internal.bindings.cros.mojom.Camera3NotifyMsgSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ParamsSpec, 'cros.mojom.Camera3CallbackOps_RequestStreamBuffers_Params', [
      mojo.internal.StructField('arg_buffer_reqs', 0, 0, mojo.internal.Array(mojo.internal.bindings.cros.mojom.Camera3BufferRequestSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ResponseParamsSpec, 'cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.cros.mojom.Camera3BufferRequestStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_returned_buf_reqs', 8, 0, mojo.internal.Array(mojo.internal.bindings.cros.mojom.Camera3StreamBufferRetSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3CallbackOps_ReturnStreamBuffers_ParamsSpec, 'cros.mojom.Camera3CallbackOps_ReturnStreamBuffers_Params', [
      mojo.internal.StructField('arg_buffers', 0, 0, mojo.internal.Array(mojo.internal.bindings.cros.mojom.Camera3StreamBufferSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.cros.mojom.Camera3CallbackOpsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cros.mojom.Camera3CallbackOpsRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.Camera3CallbackOps';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cros.mojom.Camera3CallbackOpsPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cros.mojom.Camera3CallbackOpsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  processCaptureResult(arg_result) {
    return this.$.processCaptureResult(arg_result);
  }
  notify(arg_msg) {
    return this.$.notify(arg_msg);
  }
  requestStreamBuffers(arg_buffer_reqs) {
    return this.$.requestStreamBuffers(arg_buffer_reqs);
  }
  returnStreamBuffers(arg_buffers) {
    return this.$.returnStreamBuffers(arg_buffers);
  }
};

mojo.internal.bindings.cros.mojom.Camera3CallbackOpsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Camera3CallbackOps', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  processCaptureResult(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cros.mojom.Camera3CallbackOps_ProcessCaptureResult_ParamsSpec,
      null,
      [arg_result],
      false);
  }

  notify(arg_msg) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.cros.mojom.Camera3CallbackOps_Notify_ParamsSpec,
      null,
      [arg_msg],
      false);
  }

  requestStreamBuffers(arg_buffer_reqs) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ParamsSpec,
      mojo.internal.bindings.cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ResponseParamsSpec,
      [arg_buffer_reqs],
      false);
  }

  returnStreamBuffers(arg_buffers) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.cros.mojom.Camera3CallbackOps_ReturnStreamBuffers_ParamsSpec,
      null,
      [arg_buffers],
      false);
  }

};

mojo.internal.bindings.cros.mojom.Camera3CallbackOps.getRemote = function() {
  let remote = new mojo.internal.bindings.cros.mojom.Camera3CallbackOpsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.Camera3CallbackOps',
    'context');
  return remote.$;
};

mojo.internal.bindings.cros.mojom.Camera3CallbackOpsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Camera3CallbackOps', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
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
        
        // Try Method 0: ProcessCaptureResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3CallbackOps_ProcessCaptureResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessCaptureResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Notify
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3CallbackOps_Notify_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Notify (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RequestStreamBuffers
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestStreamBuffers (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ReturnStreamBuffers
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3CallbackOps_ReturnStreamBuffers_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReturnStreamBuffers (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3CallbackOps_ProcessCaptureResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.processCaptureResult');
          const result = this.impl.processCaptureResult(params.arg_result);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3CallbackOps_Notify_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notify');
          const result = this.impl.notify(params.arg_msg);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestStreamBuffers');
          const result = this.impl.requestStreamBuffers(params.arg_buffer_reqs);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestStreamBuffers FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3CallbackOps_ReturnStreamBuffers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.returnStreamBuffers');
          const result = this.impl.returnStreamBuffers(params.arg_buffers);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.cros.mojom.Camera3CallbackOpsReceiver = mojo.internal.bindings.cros.mojom.Camera3CallbackOpsReceiver;

mojo.internal.bindings.cros.mojom.Camera3CallbackOpsPtr = mojo.internal.bindings.cros.mojom.Camera3CallbackOpsRemote;
mojo.internal.bindings.cros.mojom.Camera3CallbackOpsRequest = mojo.internal.bindings.cros.mojom.Camera3CallbackOpsPendingReceiver;


// Interface: Camera3DeviceOps
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Initialize_ParamsSpec, 'cros.mojom.Camera3DeviceOps_Initialize_Params', [
      mojo.internal.StructField('arg_callback_ops', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cros.mojom.Camera3CallbackOpsSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Initialize_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_Initialize_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreams_ParamsSpec, 'cros.mojom.Camera3DeviceOps_ConfigureStreams_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.cros.mojom.Camera3StreamConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreams_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_ConfigureStreams_ResponseParams', [
      mojo.internal.StructField('arg_updated_config', 0, 0, mojo.internal.bindings.cros.mojom.Camera3StreamConfigurationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ParamsSpec, 'cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.cros.mojom.Camera3RequestTemplateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ResponseParams', [
      mojo.internal.StructField('arg_settings', 0, 0, mojo.internal.bindings.cros.mojom.CameraMetadataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ParamsSpec, 'cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.cros.mojom.Camera3CaptureRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Dump_ParamsSpec, 'cros.mojom.Camera3DeviceOps_Dump_Params', [
      mojo.internal.StructField('arg_fd', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Flush_ParamsSpec, 'cros.mojom.Camera3DeviceOps_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Flush_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_Flush_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_RegisterBuffer_ParamsSpec, 'cros.mojom.Camera3DeviceOps_RegisterBuffer_Params', [
      mojo.internal.StructField('arg_buffer_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.cros.mojom.BufferTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fds', 16, 0, mojo.internal.Array(mojo.internal.Handle, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_hal_pixel_format', 24, 0, mojo.internal.bindings.cros.mojom.HalPixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_strides', 32, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_offsets', 40, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_drm_format', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_width', 52, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 72]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_RegisterBuffer_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_RegisterBuffer_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Close_ParamsSpec, 'cros.mojom.Camera3DeviceOps_Close_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Close_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_Close_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ParamsSpec, 'cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.cros.mojom.Camera3StreamConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ResponseParams', [
      mojo.internal.StructField('arg_updated_config', 0, 0, mojo.internal.bindings.cros.mojom.Camera3StreamConfigurationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_allocated_buffers', 8, 0, mojo.internal.Map(mojo.internal.Uint64, mojo.internal.Array(mojo.internal.bindings.cros.mojom.Camera3StreamBufferSpec.$, false), false), null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_SignalStreamFlush_ParamsSpec, 'cros.mojom.Camera3DeviceOps_SignalStreamFlush_Params', [
      mojo.internal.StructField('arg_stream_ids', 0, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_OnNewBuffer_ParamsSpec, 'cros.mojom.Camera3DeviceOps_OnNewBuffer_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.bindings.cros.mojom.CameraBufferHandleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_OnNewBuffer_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_OnNewBuffer_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.Camera3DeviceOps_OnBufferRetired_ParamsSpec, 'cros.mojom.Camera3DeviceOps_OnBufferRetired_Params', [
      mojo.internal.StructField('arg_buffer_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.cros.mojom.Camera3DeviceOpsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cros.mojom.Camera3DeviceOpsRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.Camera3DeviceOps';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cros.mojom.Camera3DeviceOpsPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cros.mojom.Camera3DeviceOpsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initialize(arg_callback_ops) {
    return this.$.initialize(arg_callback_ops);
  }
  configureStreams(arg_config) {
    return this.$.configureStreams(arg_config);
  }
  constructDefaultRequestSettings(arg_type) {
    return this.$.constructDefaultRequestSettings(arg_type);
  }
  processCaptureRequest(arg_request) {
    return this.$.processCaptureRequest(arg_request);
  }
  dump(arg_fd) {
    return this.$.dump(arg_fd);
  }
  flush() {
    return this.$.flush();
  }
  registerBuffer(arg_buffer_id, arg_type, arg_fds, arg_drm_format, arg_hal_pixel_format, arg_width, arg_height, arg_strides, arg_offsets) {
    return this.$.registerBuffer(arg_buffer_id, arg_type, arg_fds, arg_drm_format, arg_hal_pixel_format, arg_width, arg_height, arg_strides, arg_offsets);
  }
  close() {
    return this.$.close();
  }
  configureStreamsAndGetAllocatedBuffers(arg_config) {
    return this.$.configureStreamsAndGetAllocatedBuffers(arg_config);
  }
  signalStreamFlush(arg_stream_ids) {
    return this.$.signalStreamFlush(arg_stream_ids);
  }
  onNewBuffer(arg_buffer) {
    return this.$.onNewBuffer(arg_buffer);
  }
  onBufferRetired(arg_buffer_id) {
    return this.$.onBufferRetired(arg_buffer_id);
  }
};

mojo.internal.bindings.cros.mojom.Camera3DeviceOpsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Camera3DeviceOps', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
    ]);
  }

  initialize(arg_callback_ops) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Initialize_ParamsSpec,
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Initialize_ResponseParamsSpec,
      [arg_callback_ops],
      false);
  }

  configureStreams(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreams_ParamsSpec,
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreams_ResponseParamsSpec,
      [arg_config],
      false);
  }

  constructDefaultRequestSettings(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ParamsSpec,
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ResponseParamsSpec,
      [arg_type],
      false);
  }

  processCaptureRequest(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ParamsSpec,
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ResponseParamsSpec,
      [arg_request],
      false);
  }

  dump(arg_fd) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Dump_ParamsSpec,
      null,
      [arg_fd],
      false);
  }

  flush() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Flush_ParamsSpec,
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Flush_ResponseParamsSpec,
      [],
      false);
  }

  registerBuffer(arg_buffer_id, arg_type, arg_fds, arg_drm_format, arg_hal_pixel_format, arg_width, arg_height, arg_strides, arg_offsets) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_RegisterBuffer_ParamsSpec,
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_RegisterBuffer_ResponseParamsSpec,
      [arg_buffer_id, arg_type, arg_fds, arg_drm_format, arg_hal_pixel_format, arg_width, arg_height, arg_strides, arg_offsets],
      false);
  }

  close() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Close_ParamsSpec,
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Close_ResponseParamsSpec,
      [],
      false);
  }

  configureStreamsAndGetAllocatedBuffers(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ParamsSpec,
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ResponseParamsSpec,
      [arg_config],
      false);
  }

  signalStreamFlush(arg_stream_ids) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_SignalStreamFlush_ParamsSpec,
      null,
      [arg_stream_ids],
      false);
  }

  onNewBuffer(arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_OnNewBuffer_ParamsSpec,
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_OnNewBuffer_ResponseParamsSpec,
      [arg_buffer],
      false);
  }

  onBufferRetired(arg_buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.cros.mojom.Camera3DeviceOps_OnBufferRetired_ParamsSpec,
      null,
      [arg_buffer_id],
      false);
  }

};

mojo.internal.bindings.cros.mojom.Camera3DeviceOps.getRemote = function() {
  let remote = new mojo.internal.bindings.cros.mojom.Camera3DeviceOpsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.Camera3DeviceOps',
    'context');
  return remote.$;
};

mojo.internal.bindings.cros.mojom.Camera3DeviceOpsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Camera3DeviceOps', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
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
        
        // Try Method 0: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Initialize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ConfigureStreams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreams_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfigureStreams (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ConstructDefaultRequestSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConstructDefaultRequestSettings (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ProcessCaptureRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessCaptureRequest (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Dump
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Dump_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Dump (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Flush
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Flush_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Flush (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RegisterBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_RegisterBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterBuffer (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: Close
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Close_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ConfigureStreamsAndGetAllocatedBuffers
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfigureStreamsAndGetAllocatedBuffers (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SignalStreamFlush
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_SignalStreamFlush_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SignalStreamFlush (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnNewBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_OnNewBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewBuffer (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnBufferRetired
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_OnBufferRetired_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBufferRetired (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Initialize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.arg_callback_ops);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Initialize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Initialize FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreams_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.configureStreams');
          const result = this.impl.configureStreams(params.arg_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreams_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ConfigureStreams FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.constructDefaultRequestSettings');
          const result = this.impl.constructDefaultRequestSettings(params.arg_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ConstructDefaultRequestSettings FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.processCaptureRequest');
          const result = this.impl.processCaptureRequest(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ProcessCaptureRequest FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Dump_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dump');
          const result = this.impl.dump(params.arg_fd);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Flush_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Flush_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Flush FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_RegisterBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerBuffer');
          const result = this.impl.registerBuffer(params.arg_buffer_id, params.arg_type, params.arg_fds, params.arg_drm_format, params.arg_hal_pixel_format, params.arg_width, params.arg_height, params.arg_strides, params.arg_offsets);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.Camera3DeviceOps_RegisterBuffer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RegisterBuffer FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Close_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.Camera3DeviceOps_Close_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Close FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.configureStreamsAndGetAllocatedBuffers');
          const result = this.impl.configureStreamsAndGetAllocatedBuffers(params.arg_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ConfigureStreamsAndGetAllocatedBuffers FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_SignalStreamFlush_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.signalStreamFlush');
          const result = this.impl.signalStreamFlush(params.arg_stream_ids);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_OnNewBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNewBuffer');
          const result = this.impl.onNewBuffer(params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.Camera3DeviceOps_OnNewBuffer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnNewBuffer FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.Camera3DeviceOps_OnBufferRetired_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBufferRetired');
          const result = this.impl.onBufferRetired(params.arg_buffer_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.cros.mojom.Camera3DeviceOpsReceiver = mojo.internal.bindings.cros.mojom.Camera3DeviceOpsReceiver;

mojo.internal.bindings.cros.mojom.Camera3DeviceOpsPtr = mojo.internal.bindings.cros.mojom.Camera3DeviceOpsRemote;
mojo.internal.bindings.cros.mojom.Camera3DeviceOpsRequest = mojo.internal.bindings.cros.mojom.Camera3DeviceOpsPendingReceiver;

