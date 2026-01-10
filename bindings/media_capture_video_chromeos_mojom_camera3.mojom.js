// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/camera3.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


cros.mojom.GRALLOC_USAGE_SW_READ_NEVER = 0x00000000;

cros.mojom.GRALLOC_USAGE_SW_READ_OFTEN = 0x00000003;

cros.mojom.GRALLOC_USAGE_SW_WRITE_NEVER = 0x00000000;

cros.mojom.GRALLOC_USAGE_SW_WRITE_OFTEN = 0x00000030;

cros.mojom.GRALLOC_USAGE_HW_COMPOSER = 0x00000800;

cros.mojom.GRALLOC_USAGE_HW_VIDEO_ENCODER = 0x00010000;

cros.mojom.GRALLOC_USAGE_HW_CAMERA_WRITE = 0x00020000;

cros.mojom.GRALLOC_USAGE_HW_CAMERA_READ = 0x00040000;

cros.mojom.GRALLOC_USAGE_FORCE_I420 = 0x10000000;

cros.mojom.GRALLOC_USAGE_STILL_CAPTURE = 0x20000000;

cros.mojom.NO_BUFFER_BUFFER_ID = 0xFFFFFFFFFFFFFFFF;

// Enum: HalPixelFormat
cros.mojom.HalPixelFormat = {
  HAL_PIXEL_FORMAT_RGBA_8888: 0,
  HAL_PIXEL_FORMAT_RGBX_8888: 1,
  HAL_PIXEL_FORMAT_BGRA_8888: 2,
  HAL_PIXEL_FORMAT_YCrCb_420_SP: 3,
  HAL_PIXEL_FORMAT_YCbCr_422_I: 4,
  HAL_PIXEL_FORMAT_BLOB: 5,
  HAL_PIXEL_FORMAT_IMPLEMENTATION_DEFINED: 6,
  HAL_PIXEL_FORMAT_YCbCr_420_888: 7,
  HAL_PIXEL_FORMAT_YV12: 8,
};
cros.mojom.HalPixelFormatSpec = { $: mojo.internal.Enum() };

// Enum: Camera3StreamType
cros.mojom.Camera3StreamType = {
  CAMERA3_STREAM_OUTPUT: 0,
  CAMERA3_STREAM_INPUT: 1,
  CAMERA3_STREAM_BIDIRECTIONAL: 2,
};
cros.mojom.Camera3StreamTypeSpec = { $: mojo.internal.Enum() };

// Enum: Camera3StreamRotation
cros.mojom.Camera3StreamRotation = {
  CAMERA3_STREAM_ROTATION_0: 0,
  CAMERA3_STREAM_ROTATION_90: 1,
  CAMERA3_STREAM_ROTATION_180: 2,
  CAMERA3_STREAM_ROTATION_270: 3,
};
cros.mojom.Camera3StreamRotationSpec = { $: mojo.internal.Enum() };

// Enum: Camera3StreamConfigurationMode
cros.mojom.Camera3StreamConfigurationMode = {
  CAMERA3_STREAM_CONFIGURATION_NORMAL_MODE: 0,
  CAMERA3_STREAM_CONFIGURATION_CONSTRAINED_HIGH_SPEED_MODE: 1,
};
cros.mojom.Camera3StreamConfigurationModeSpec = { $: mojo.internal.Enum() };

// Enum: Camera3BufferStatus
cros.mojom.Camera3BufferStatus = {
  CAMERA3_BUFFER_STATUS_OK: 0,
  CAMERA3_BUFFER_STATUS_ERROR: 1,
};
cros.mojom.Camera3BufferStatusSpec = { $: mojo.internal.Enum() };

// Enum: Camera3MsgType
cros.mojom.Camera3MsgType = {
  CAMERA3_MSG_ERROR: 0,
  CAMERA3_MSG_SHUTTER: 1,
};
cros.mojom.Camera3MsgTypeSpec = { $: mojo.internal.Enum() };

// Enum: Camera3ErrorMsgCode
cros.mojom.Camera3ErrorMsgCode = {
  CAMERA3_MSG_ERROR_DEVICE: 0,
  CAMERA3_MSG_ERROR_REQUEST: 1,
  CAMERA3_MSG_ERROR_RESULT: 2,
  CAMERA3_MSG_ERROR_BUFFER: 3,
};
cros.mojom.Camera3ErrorMsgCodeSpec = { $: mojo.internal.Enum() };

// Enum: Camera3BufferRequestStatus
cros.mojom.Camera3BufferRequestStatus = {
  CAMERA3_BUF_REQ_OK: 0,
  CAMERA3_BUF_REQ_FAILED_PARTIAL: 1,
  CAMERA3_BUF_REQ_FAILED_CONFIGURING: 2,
  CAMERA3_BUF_REQ_FAILED_ILLEGAL_ARGUMENTS: 3,
  CAMERA3_BUF_REQ_FAILED_UNKNOWN: 4,
};
cros.mojom.Camera3BufferRequestStatusSpec = { $: mojo.internal.Enum() };

// Enum: Camera3StreamBufferReqStatus
cros.mojom.Camera3StreamBufferReqStatus = {
  CAMERA3_PS_BUF_REQ_OK: 0,
  CAMERA3_PS_BUF_REQ_NO_BUFFER_AVAILABLE: 1,
  CAMERA3_PS_BUF_REQ_MAX_BUFFER_EXCEEDED: 2,
  CAMERA3_PS_BUF_REQ_STREAM_DISCONNECTED: 3,
  CAMERA3_PS_BUF_REQ_UNKNOWN_ERROR: 4,
};
cros.mojom.Camera3StreamBufferReqStatusSpec = { $: mojo.internal.Enum() };

// Enum: Camera3RequestTemplate
cros.mojom.Camera3RequestTemplate = {
  CAMERA3_TEMPLATE_PREVIEW: 0,
  CAMERA3_TEMPLATE_STILL_CAPTURE: 1,
  CAMERA3_TEMPLATE_VIDEO_RECORD: 2,
  CAMERA3_TEMPLATE_VIDEO_SNAPSHOT: 3,
  CAMERA3_TEMPLATE_ZERO_SHUTTER_LAG: 4,
  CAMERA3_TEMPLATE_MANUAL: 5,
  CAMERA3_TEMPLATE_COUNT: 6,
};
cros.mojom.Camera3RequestTemplateSpec = { $: mojo.internal.Enum() };

// Enum: BufferType
cros.mojom.BufferType = {
  DMABUF: 0,
  SHM: 1,
};
cros.mojom.BufferTypeSpec = { $: mojo.internal.Enum() };

// Union: Camera3NotifyMsgMessage
cros.mojom.Camera3NotifyMsgMessageSpec = { $: mojo.internal.Union(
    'cros.mojom.Camera3NotifyMsgMessage', {
      'error': {
        'ordinal': 0,
        'type': cros.mojom.Camera3ErrorMsgSpec,
      }},
      'shutter': {
        'ordinal': 1,
        'type': cros.mojom.Camera3ShutterMsgSpec,
      }},
      'generic': {
        'ordinal': 2,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
    })
};

// Struct: CropRotateScaleInfo
cros.mojom.CropRotateScaleInfoSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CropRotateScaleInfo',
      packedSize: 16,
      fields: [
        { name: 'crop_rotate_scale_degrees', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.Camera3StreamRotationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Camera3Stream
cros.mojom.Camera3StreamSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3Stream',
      packedSize: 72,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'stream_type', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.Camera3StreamTypeSpec, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'format', packedOffset: 20, packedBitOffset: 0, type: cros.mojom.HalPixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'usage', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_buffers', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data_space', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'rotation', packedOffset: 36, packedBitOffset: 0, type: cros.mojom.Camera3StreamRotationSpec, nullable: false, minVersion: 0 },
        { name: 'crop_rotate_scale_info', packedOffset: 40, packedBitOffset: 0, type: cros.mojom.CropRotateScaleInfoSpec, nullable: true, minVersion: 1 },
        { name: 'physical_camera_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 4 },
        { name: 'effects', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(cros.mojom.Camera3StreamEffectSpec, false), nullable: true, minVersion: 6 },
      ],
      versions: [{version: 0, packedSize: 48}, {version: 1, packedSize: 56}, {version: 4, packedSize: 64}, {version: 6, packedSize: 72}]
    }
  }
};

// Struct: Camera3StreamConfiguration
cros.mojom.Camera3StreamConfigurationSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3StreamConfiguration',
      packedSize: 32,
      fields: [
        { name: 'streams', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(cros.mojom.Camera3StreamSpec, false), nullable: false, minVersion: 0 },
        { name: 'operation_mode', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.Camera3StreamConfigurationModeSpec, nullable: false, minVersion: 0 },
        { name: 'session_parameters', packedOffset: 16, packedBitOffset: 0, type: cros.mojom.CameraMetadataSpec, nullable: true, minVersion: 4 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 4, packedSize: 32}]
    }
  }
};

// Struct: CameraBufferHandle
cros.mojom.CameraBufferHandleSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraBufferHandle',
      packedSize: 80,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'fds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Handle, false), nullable: false, minVersion: 0 },
        { name: 'drm_format', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'hal_pixel_format', packedOffset: 20, packedBitOffset: 0, type: cros.mojom.HalPixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'strides', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'offsets', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'sizes', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: true, minVersion: 3 },
        { name: 'has_modifier', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 7 },
        { name: 'modifier', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 7 },
      ],
      versions: [{version: 0, packedSize: 56}, {version: 3, packedSize: 64}, {version: 7, packedSize: 80}]
    }
  }
};

// Struct: Camera3StreamBuffer
cros.mojom.Camera3StreamBufferSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3StreamBuffer',
      packedSize: 48,
      fields: [
        { name: 'stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: cros.mojom.Camera3BufferStatusSpec, nullable: false, minVersion: 0 },
        { name: 'acquire_fence', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Handle, nullable: true, minVersion: 0 },
        { name: 'release_fence', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Handle, nullable: true, minVersion: 0 },
        { name: 'buffer_handle', packedOffset: 32, packedBitOffset: 0, type: cros.mojom.CameraBufferHandleSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 2, packedSize: 48}]
    }
  }
};

// Struct: Camera3ErrorMsg
cros.mojom.Camera3ErrorMsgSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3ErrorMsg',
      packedSize: 24,
      fields: [
        { name: 'frame_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'error_stream_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'error_code', packedOffset: 4, packedBitOffset: 0, type: cros.mojom.Camera3ErrorMsgCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Camera3ShutterMsg
cros.mojom.Camera3ShutterMsgSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3ShutterMsg',
      packedSize: 24,
      fields: [
        { name: 'frame_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Camera3NotifyMsg
cros.mojom.Camera3NotifyMsgSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3NotifyMsg',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.Camera3MsgTypeSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.Camera3NotifyMsgMessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Camera3BufferRequest
cros.mojom.Camera3BufferRequestSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3BufferRequest',
      packedSize: 24,
      fields: [
        { name: 'stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'num_buffers_requested', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Camera3StreamBufferRet
cros.mojom.Camera3StreamBufferRetSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3StreamBufferRet',
      packedSize: 32,
      fields: [
        { name: 'stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.Camera3StreamBufferReqStatusSpec, nullable: false, minVersion: 0 },
        { name: 'output_buffers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(cros.mojom.Camera3StreamBufferSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Camera3PhyscamMetadata
cros.mojom.Camera3PhyscamMetadataSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3PhyscamMetadata',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.CameraMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Camera3CaptureRequest
cros.mojom.Camera3CaptureRequestSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3CaptureRequest',
      packedSize: 48,
      fields: [
        { name: 'frame_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.CameraMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'input_buffer', packedOffset: 16, packedBitOffset: 0, type: cros.mojom.Camera3StreamBufferSpec, nullable: true, minVersion: 0 },
        { name: 'output_buffers', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(cros.mojom.Camera3StreamBufferSpec, false), nullable: false, minVersion: 0 },
        { name: 'physcam_settings', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(cros.mojom.Camera3PhyscamMetadataSpec, false), nullable: true, minVersion: 4 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 4, packedSize: 48}]
    }
  }
};

// Struct: Camera3CaptureResult
cros.mojom.Camera3CaptureResultSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3CaptureResult',
      packedSize: 48,
      fields: [
        { name: 'frame_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.CameraMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'output_buffers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(cros.mojom.Camera3StreamBufferSpec, false), nullable: true, minVersion: 0 },
        { name: 'input_buffer', packedOffset: 24, packedBitOffset: 0, type: cros.mojom.Camera3StreamBufferSpec, nullable: true, minVersion: 0 },
        { name: 'partial_result', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'physcam_metadata', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(cros.mojom.Camera3PhyscamMetadataSpec, false), nullable: true, minVersion: 4 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 4, packedSize: 48}]
    }
  }
};

// Interface: Camera3CallbackOps
cros.mojom.Camera3CallbackOps = {};

cros.mojom.Camera3CallbackOpsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.Camera3CallbackOpsRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.Camera3CallbackOps';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.Camera3CallbackOpsPendingReceiver,
      handle);
    this.$ = new cros.mojom.Camera3CallbackOpsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.Camera3CallbackOpsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  processCaptureResult(result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.Camera3CallbackOps_ProcessCaptureResult_ParamsSpec,
      null,
      [result]);
  }

  notify(msg) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.Camera3CallbackOps_Notify_ParamsSpec,
      null,
      [msg]);
  }

  requestStreamBuffers(buffer_reqs) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ParamsSpec,
      cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ResponseParamsSpec,
      [buffer_reqs]);
  }

  returnStreamBuffers(buffers) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.Camera3CallbackOps_ReturnStreamBuffers_ParamsSpec,
      null,
      [buffers]);
  }

};

cros.mojom.Camera3CallbackOps.getRemote = function() {
  let remote = new cros.mojom.Camera3CallbackOpsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.Camera3CallbackOps',
    'context');
  return remote.$;
};

// ParamsSpec for ProcessCaptureResult
cros.mojom.Camera3CallbackOps_ProcessCaptureResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3CallbackOps.ProcessCaptureResult_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.Camera3CaptureResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Notify
cros.mojom.Camera3CallbackOps_Notify_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3CallbackOps.Notify_Params',
      packedSize: 16,
      fields: [
        { name: 'msg', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.Camera3NotifyMsgSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestStreamBuffers
cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3CallbackOps.RequestStreamBuffers_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer_reqs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(cros.mojom.Camera3BufferRequestSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.Camera3BufferRequestStatusSpec, nullable: false, minVersion: 0 },
        { name: 'returned_buf_reqs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(cros.mojom.Camera3StreamBufferRetSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ReturnStreamBuffers
cros.mojom.Camera3CallbackOps_ReturnStreamBuffers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3CallbackOps.ReturnStreamBuffers_Params',
      packedSize: 16,
      fields: [
        { name: 'buffers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(cros.mojom.Camera3StreamBufferSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.Camera3CallbackOpsPtr = cros.mojom.Camera3CallbackOpsRemote;
cros.mojom.Camera3CallbackOpsRequest = cros.mojom.Camera3CallbackOpsPendingReceiver;


// Interface: Camera3DeviceOps
cros.mojom.Camera3DeviceOps = {};

cros.mojom.Camera3DeviceOpsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.Camera3DeviceOpsRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.Camera3DeviceOps';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.Camera3DeviceOpsPendingReceiver,
      handle);
    this.$ = new cros.mojom.Camera3DeviceOpsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.Camera3DeviceOpsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(callback_ops) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.Camera3DeviceOps_Initialize_ParamsSpec,
      cros.mojom.Camera3DeviceOps_Initialize_ResponseParamsSpec,
      [callback_ops]);
  }

  configureStreams(config) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.Camera3DeviceOps_ConfigureStreams_ParamsSpec,
      cros.mojom.Camera3DeviceOps_ConfigureStreams_ResponseParamsSpec,
      [config]);
  }

  constructDefaultRequestSettings(type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ParamsSpec,
      cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ResponseParamsSpec,
      [type]);
  }

  processCaptureRequest(request) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ParamsSpec,
      cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ResponseParamsSpec,
      [request]);
  }

  dump(fd) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      cros.mojom.Camera3DeviceOps_Dump_ParamsSpec,
      null,
      [fd]);
  }

  flush() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      cros.mojom.Camera3DeviceOps_Flush_ParamsSpec,
      cros.mojom.Camera3DeviceOps_Flush_ResponseParamsSpec,
      []);
  }

  registerBuffer(buffer_id, type, fds, drm_format, hal_pixel_format, width, height, strides, offsets) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      cros.mojom.Camera3DeviceOps_RegisterBuffer_ParamsSpec,
      cros.mojom.Camera3DeviceOps_RegisterBuffer_ResponseParamsSpec,
      [buffer_id, type, fds, drm_format, hal_pixel_format, width, height, strides, offsets]);
  }

  close() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      cros.mojom.Camera3DeviceOps_Close_ParamsSpec,
      cros.mojom.Camera3DeviceOps_Close_ResponseParamsSpec,
      []);
  }

  configureStreamsAndGetAllocatedBuffers(config) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ParamsSpec,
      cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ResponseParamsSpec,
      [config]);
  }

  signalStreamFlush(stream_ids) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      cros.mojom.Camera3DeviceOps_SignalStreamFlush_ParamsSpec,
      null,
      [stream_ids]);
  }

  onNewBuffer(buffer) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      cros.mojom.Camera3DeviceOps_OnNewBuffer_ParamsSpec,
      cros.mojom.Camera3DeviceOps_OnNewBuffer_ResponseParamsSpec,
      [buffer]);
  }

  onBufferRetired(buffer_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      cros.mojom.Camera3DeviceOps_OnBufferRetired_ParamsSpec,
      null,
      [buffer_id]);
  }

};

cros.mojom.Camera3DeviceOps.getRemote = function() {
  let remote = new cros.mojom.Camera3DeviceOpsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.Camera3DeviceOps',
    'context');
  return remote.$;
};

// ParamsSpec for Initialize
cros.mojom.Camera3DeviceOps_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3DeviceOps.Initialize_Params',
      packedSize: 16,
      fields: [
        { name: 'callback_ops', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.Camera3DeviceOps_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ConfigureStreams
cros.mojom.Camera3DeviceOps_ConfigureStreams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3DeviceOps.ConfigureStreams_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.Camera3StreamConfigurationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.Camera3DeviceOps_ConfigureStreams_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'updated_config', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.Camera3StreamConfigurationSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ConstructDefaultRequestSettings
cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3DeviceOps.ConstructDefaultRequestSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.Camera3RequestTemplateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CameraMetadataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ProcessCaptureRequest
cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3DeviceOps.ProcessCaptureRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.Camera3CaptureRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Dump
cros.mojom.Camera3DeviceOps_Dump_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3DeviceOps.Dump_Params',
      packedSize: 16,
      fields: [
        { name: 'fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Flush
cros.mojom.Camera3DeviceOps_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3DeviceOps.Flush_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cros.mojom.Camera3DeviceOps_Flush_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterBuffer
cros.mojom.Camera3DeviceOps_RegisterBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3DeviceOps.RegisterBuffer_Params',
      packedSize: 64,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.BufferTypeSpec, nullable: false, minVersion: 0 },
        { name: 'fds', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Handle, false), nullable: false, minVersion: 0 },
        { name: 'drm_format', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'hal_pixel_format', packedOffset: 24, packedBitOffset: 0, type: cros.mojom.HalPixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'strides', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'offsets', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

cros.mojom.Camera3DeviceOps_RegisterBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Close
cros.mojom.Camera3DeviceOps_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3DeviceOps.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cros.mojom.Camera3DeviceOps_Close_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ConfigureStreamsAndGetAllocatedBuffers
cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3DeviceOps.ConfigureStreamsAndGetAllocatedBuffers_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.Camera3StreamConfigurationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'updated_config', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.Camera3StreamConfigurationSpec, nullable: true, minVersion: 0 },
        { name: 'allocated_buffers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint64, mojo.internal.Array(cros.mojom.Camera3StreamBufferSpec, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SignalStreamFlush
cros.mojom.Camera3DeviceOps_SignalStreamFlush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3DeviceOps.SignalStreamFlush_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNewBuffer
cros.mojom.Camera3DeviceOps_OnNewBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3DeviceOps.OnNewBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CameraBufferHandleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.Camera3DeviceOps_OnNewBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBufferRetired
cros.mojom.Camera3DeviceOps_OnBufferRetired_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3DeviceOps.OnBufferRetired_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.Camera3DeviceOpsPtr = cros.mojom.Camera3DeviceOpsRemote;
cros.mojom.Camera3DeviceOpsRequest = cros.mojom.Camera3DeviceOpsPendingReceiver;

