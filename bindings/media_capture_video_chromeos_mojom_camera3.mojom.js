// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/camera3.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


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

// Enum: Camera3StreamType
cros.mojom.Camera3StreamType = {
  CAMERA3_STREAM_OUTPUT: 0,
  CAMERA3_STREAM_INPUT: 1,
  CAMERA3_STREAM_BIDIRECTIONAL: 2,
};

// Enum: Camera3StreamRotation
cros.mojom.Camera3StreamRotation = {
  CAMERA3_STREAM_ROTATION_0: 0,
  CAMERA3_STREAM_ROTATION_90: 1,
  CAMERA3_STREAM_ROTATION_180: 2,
  CAMERA3_STREAM_ROTATION_270: 3,
};

// Enum: Camera3StreamConfigurationMode
cros.mojom.Camera3StreamConfigurationMode = {
  CAMERA3_STREAM_CONFIGURATION_NORMAL_MODE: 0,
  CAMERA3_STREAM_CONFIGURATION_CONSTRAINED_HIGH_SPEED_MODE: 1,
};

// Enum: Camera3BufferStatus
cros.mojom.Camera3BufferStatus = {
  CAMERA3_BUFFER_STATUS_OK: 0,
  CAMERA3_BUFFER_STATUS_ERROR: 1,
};

// Enum: Camera3MsgType
cros.mojom.Camera3MsgType = {
  CAMERA3_MSG_ERROR: 0,
  CAMERA3_MSG_SHUTTER: 1,
};

// Enum: Camera3ErrorMsgCode
cros.mojom.Camera3ErrorMsgCode = {
  CAMERA3_MSG_ERROR_DEVICE: 0,
  CAMERA3_MSG_ERROR_REQUEST: 1,
  CAMERA3_MSG_ERROR_RESULT: 2,
  CAMERA3_MSG_ERROR_BUFFER: 3,
};

// Enum: Camera3BufferRequestStatus
cros.mojom.Camera3BufferRequestStatus = {
  CAMERA3_BUF_REQ_OK: 0,
  CAMERA3_BUF_REQ_FAILED_PARTIAL: 1,
  CAMERA3_BUF_REQ_FAILED_CONFIGURING: 2,
  CAMERA3_BUF_REQ_FAILED_ILLEGAL_ARGUMENTS: 3,
  CAMERA3_BUF_REQ_FAILED_UNKNOWN: 4,
};

// Enum: Camera3StreamBufferReqStatus
cros.mojom.Camera3StreamBufferReqStatus = {
  CAMERA3_PS_BUF_REQ_OK: 0,
  CAMERA3_PS_BUF_REQ_NO_BUFFER_AVAILABLE: 1,
  CAMERA3_PS_BUF_REQ_MAX_BUFFER_EXCEEDED: 2,
  CAMERA3_PS_BUF_REQ_STREAM_DISCONNECTED: 3,
  CAMERA3_PS_BUF_REQ_UNKNOWN_ERROR: 4,
};

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

// Enum: BufferType
cros.mojom.BufferType = {
  DMABUF: 0,
  SHM: 1,
};

// Struct: CropRotateScaleInfo
cros.mojom.CropRotateScaleInfoSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CropRotateScaleInfo',
      packedSize: 16,
      fields: [
        { name: 'crop_rotate_scale_degrees', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.Camera3StreamRotationSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Camera3Stream
cros.mojom.Camera3StreamSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3Stream',
      packedSize: 64,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'stream_type', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.Camera3StreamTypeSpec, nullable: false },
        { name: 'format', packedOffset: 16, packedBitOffset: 0, type: cros.mojom.HalPixelFormatSpec, nullable: false },
        { name: 'rotation', packedOffset: 24, packedBitOffset: 0, type: cros.mojom.Camera3StreamRotationSpec, nullable: false },
        { name: 'width', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'height', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'usage', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'max_buffers', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'data_space', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Camera3StreamConfiguration
cros.mojom.Camera3StreamConfigurationSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3StreamConfiguration',
      packedSize: 24,
      fields: [
        { name: 'streams', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'operation_mode', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.Camera3StreamConfigurationModeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CameraBufferHandle
cros.mojom.CameraBufferHandleSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraBufferHandle',
      packedSize: 64,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'fds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'hal_pixel_format', packedOffset: 16, packedBitOffset: 0, type: cros.mojom.HalPixelFormatSpec, nullable: false },
        { name: 'strides', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'offsets', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'drm_format', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'width', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'height', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Camera3StreamBuffer
cros.mojom.Camera3StreamBufferSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3StreamBuffer',
      packedSize: 40,
      fields: [
        { name: 'stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: cros.mojom.Camera3BufferStatusSpec, nullable: false },
        { name: 'acquire_fence', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Handle, nullable: true },
        { name: 'release_fence', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Handle, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Camera3ErrorMsg
cros.mojom.Camera3ErrorMsgSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3ErrorMsg',
      packedSize: 32,
      fields: [
        { name: 'error_stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'error_code', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.Camera3ErrorMsgCodeSpec, nullable: false },
        { name: 'frame_number', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'frame_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Camera3NotifyMsg
cros.mojom.Camera3NotifyMsgSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3NotifyMsg',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.Camera3MsgTypeSpec, nullable: false },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.Camera3NotifyMsgMessageSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'num_buffers_requested', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.Camera3StreamBufferReqStatusSpec, nullable: false },
        { name: 'output_buffers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CameraMetadataSpec, nullable: false },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Camera3CaptureRequest
cros.mojom.Camera3CaptureRequestSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3CaptureRequest',
      packedSize: 40,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CameraMetadataSpec, nullable: false },
        { name: 'input_buffer', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.Camera3StreamBufferSpec, nullable: true },
        { name: 'output_buffers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'frame_number', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Camera3CaptureResult
cros.mojom.Camera3CaptureResultSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.Camera3CaptureResult',
      packedSize: 40,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CameraMetadataSpec, nullable: false },
        { name: 'output_buffers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'input_buffer', packedOffset: 16, packedBitOffset: 0, type: cros.mojom.Camera3StreamBufferSpec, nullable: true },
        { name: 'frame_number', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'partial_result', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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

// Legacy compatibility
cros.mojom.Camera3DeviceOpsPtr = cros.mojom.Camera3DeviceOpsRemote;
cros.mojom.Camera3DeviceOpsRequest = cros.mojom.Camera3DeviceOpsPendingReceiver;

