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
};

// Struct: CropRotateScaleInfo
cros.mojom.CropRotateScaleInfo = class {
  constructor(values = {}) {
    this.crop_rotate_scale_degrees = values.crop_rotate_scale_degrees !== undefined ? values.crop_rotate_scale_degrees : null;
  }
};

// Struct: Camera3Stream
cros.mojom.Camera3Stream = class {
  constructor(values = {}) {
    this.format = values.format !== undefined ? values.format : 0;
    this.effects = values.effects !== undefined ? values.effects : 0;
  }
};

// Struct: Camera3StreamConfiguration
cros.mojom.Camera3StreamConfiguration = class {
  constructor(values = {}) {
    this.session_parameters = values.session_parameters !== undefined ? values.session_parameters : [];
  }
};

// Struct: CameraBufferHandle
cros.mojom.CameraBufferHandle = class {
  constructor(values = {}) {
    this.modifier = values.modifier !== undefined ? values.modifier : 0;
  }
};

// Struct: Camera3StreamBuffer
cros.mojom.Camera3StreamBuffer = class {
  constructor(values = {}) {
    this.buffer_handle = values.buffer_handle !== undefined ? values.buffer_handle : 0;
  }
};

// Struct: Camera3ErrorMsg
cros.mojom.Camera3ErrorMsg = class {
  constructor(values = {}) {
    this.error_code = values.error_code !== undefined ? values.error_code : 0;
  }
};

// Struct: Camera3ShutterMsg
cros.mojom.Camera3ShutterMsg = class {
  constructor(values = {}) {
    this.timestamp = values.timestamp !== undefined ? values.timestamp : 0;
  }
};

// Struct: Camera3NotifyMsg
cros.mojom.Camera3NotifyMsg = class {
  constructor(values = {}) {
    this.message = values.message !== undefined ? values.message : null;
  }
};

// Struct: Camera3BufferRequest
cros.mojom.Camera3BufferRequest = class {
  constructor(values = {}) {
    this.num_buffers_requested = values.num_buffers_requested !== undefined ? values.num_buffers_requested : 0;
  }
};

// Struct: Camera3StreamBufferRet
cros.mojom.Camera3StreamBufferRet = class {
  constructor(values = {}) {
    this.output_buffers = values.output_buffers !== undefined ? values.output_buffers : 0;
  }
};

// Struct: Camera3PhyscamMetadata
cros.mojom.Camera3PhyscamMetadata = class {
  constructor(values = {}) {
    this.metadata = values.metadata !== undefined ? values.metadata : 0;
  }
};

// Struct: Camera3CaptureRequest
cros.mojom.Camera3CaptureRequest = class {
  constructor(values = {}) {
    this.physcam_settings = values.physcam_settings !== undefined ? values.physcam_settings : 0;
  }
};

// Struct: Camera3CaptureResult
cros.mojom.Camera3CaptureResult = class {
  constructor(values = {}) {
    this.physcam_metadata = values.physcam_metadata !== undefined ? values.physcam_metadata : 0;
  }
};

// Interface: Camera3CallbackOps
cros.mojom.Camera3CallbackOpsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.Camera3CallbackOps';
  }

  processCaptureResult() {
    // Method: ProcessCaptureResult
    // Call: ProcessCaptureResult()
  }

  0(result) {
    // Method: 0
    // Call: 0(result)
  }

  notify() {
    // Method: Notify
    // Call: Notify()
  }

  1(msg) {
    // Method: 1
    // Call: 1(msg)
  }

  requestStreamBuffers() {
    // Method: RequestStreamBuffers
    // Call: RequestStreamBuffers()
  }

  2(buffer_reqs) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(buffer_reqs)
      resolve({});
    });
  }

  returnStreamBuffers() {
    // Method: ReturnStreamBuffers
    // Call: ReturnStreamBuffers()
  }

  3(buffers) {
    // Method: 3
    // Call: 3(buffers)
  }

};

cros.mojom.Camera3CallbackOpsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Camera3DeviceOps
cros.mojom.Camera3DeviceOpsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.Camera3DeviceOps';
  }

  initialize() {
    // Method: Initialize
    // Call: Initialize()
  }

  0(callback_ops) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(callback_ops)
      resolve({});
    });
  }

  configureStreams() {
    // Method: ConfigureStreams
    // Call: ConfigureStreams()
  }

  1(config) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(config)
      resolve({});
    });
  }

  constructDefaultRequestSettings() {
    // Method: ConstructDefaultRequestSettings
    // Call: ConstructDefaultRequestSettings()
  }

  2(type) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(type)
      resolve({});
    });
  }

  processCaptureRequest() {
    // Method: ProcessCaptureRequest
    // Call: ProcessCaptureRequest()
  }

  3(request) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(request)
      resolve({});
    });
  }

  dump() {
    // Method: Dump
    // Call: Dump()
  }

  4(fd) {
    // Method: 4
    // Call: 4(fd)
  }

  flush() {
    // Method: Flush
    // Call: Flush()
  }

  5() {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5()
      resolve({});
    });
  }

};

cros.mojom.Camera3DeviceOpsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
