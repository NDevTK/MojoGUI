// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/camera3.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};

cros.mojom.HalPixelFormatSpec = { $: mojo.internal.Enum() };
cros.mojom.Camera3StreamTypeSpec = { $: mojo.internal.Enum() };
cros.mojom.Camera3StreamRotationSpec = { $: mojo.internal.Enum() };
cros.mojom.Camera3StreamConfigurationModeSpec = { $: mojo.internal.Enum() };
cros.mojom.Camera3BufferStatusSpec = { $: mojo.internal.Enum() };
cros.mojom.Camera3MsgTypeSpec = { $: mojo.internal.Enum() };
cros.mojom.Camera3ErrorMsgCodeSpec = { $: mojo.internal.Enum() };
cros.mojom.Camera3BufferRequestStatusSpec = { $: mojo.internal.Enum() };
cros.mojom.Camera3StreamBufferReqStatusSpec = { $: mojo.internal.Enum() };
cros.mojom.Camera3RequestTemplateSpec = { $: mojo.internal.Enum() };
cros.mojom.BufferTypeSpec = { $: mojo.internal.Enum() };
cros.mojom.Camera3NotifyMsgMessageSpec = { $: {} };
cros.mojom.CropRotateScaleInfoSpec = { $: {} };
cros.mojom.Camera3StreamSpec = { $: {} };
cros.mojom.Camera3StreamConfigurationSpec = { $: {} };
cros.mojom.CameraBufferHandleSpec = { $: {} };
cros.mojom.Camera3StreamBufferSpec = { $: {} };
cros.mojom.Camera3ErrorMsgSpec = { $: {} };
cros.mojom.Camera3ShutterMsgSpec = { $: {} };
cros.mojom.Camera3NotifyMsgSpec = { $: {} };
cros.mojom.Camera3BufferRequestSpec = { $: {} };
cros.mojom.Camera3StreamBufferRetSpec = { $: {} };
cros.mojom.Camera3PhyscamMetadataSpec = { $: {} };
cros.mojom.Camera3CaptureRequestSpec = { $: {} };
cros.mojom.Camera3CaptureResultSpec = { $: {} };
cros.mojom.Camera3CallbackOps = {};
cros.mojom.Camera3CallbackOps.$interfaceName = 'cros.mojom.Camera3CallbackOps';
cros.mojom.Camera3CallbackOps_ProcessCaptureResult_ParamsSpec = { $: {} };
cros.mojom.Camera3CallbackOps_Notify_ParamsSpec = { $: {} };
cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ParamsSpec = { $: {} };
cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ResponseParamsSpec = { $: {} };
cros.mojom.Camera3CallbackOps_ReturnStreamBuffers_ParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps = {};
cros.mojom.Camera3DeviceOps.$interfaceName = 'cros.mojom.Camera3DeviceOps';
cros.mojom.Camera3DeviceOps_Initialize_ParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_Initialize_ResponseParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_ConfigureStreams_ParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_ConfigureStreams_ResponseParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ResponseParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ResponseParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_Dump_ParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_Flush_ParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_Flush_ResponseParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_RegisterBuffer_ParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_RegisterBuffer_ResponseParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_Close_ParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_Close_ResponseParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ResponseParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_SignalStreamFlush_ParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_OnNewBuffer_ParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_OnNewBuffer_ResponseParamsSpec = { $: {} };
cros.mojom.Camera3DeviceOps_OnBufferRetired_ParamsSpec = { $: {} };

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
  CAMERA3_MSG_ERROR: 1,
  CAMERA3_MSG_SHUTTER: 2,
};

// Enum: Camera3ErrorMsgCode
cros.mojom.Camera3ErrorMsgCode = {
  CAMERA3_MSG_ERROR_DEVICE: 1,
  CAMERA3_MSG_ERROR_REQUEST: 2,
  CAMERA3_MSG_ERROR_RESULT: 3,
  CAMERA3_MSG_ERROR_BUFFER: 4,
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
  CAMERA3_TEMPLATE_PREVIEW: 1,
  CAMERA3_TEMPLATE_STILL_CAPTURE: 2,
  CAMERA3_TEMPLATE_VIDEO_RECORD: 3,
  CAMERA3_TEMPLATE_VIDEO_SNAPSHOT: 4,
  CAMERA3_TEMPLATE_ZERO_SHUTTER_LAG: 5,
  CAMERA3_TEMPLATE_MANUAL: 6,
  CAMERA3_TEMPLATE_COUNT: 7,
};

// Enum: BufferType
cros.mojom.BufferType = {
  DMABUF: 0,
  SHM: 1,
};

// Union: Camera3NotifyMsgMessage
mojo.internal.Union(
    cros.mojom.Camera3NotifyMsgMessageSpec, 'cros.mojom.Camera3NotifyMsgMessage', {
      'error': {
        'ordinal': 0,
        'type': cros.mojom.Camera3ErrorMsgSpec.$,
        'nullable': false,
      },
      'shutter': {
        'ordinal': 1,
        'type': cros.mojom.Camera3ShutterMsgSpec.$,
        'nullable': false,
      },
      'generic': {
        'ordinal': 2,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Struct: CropRotateScaleInfo
mojo.internal.Struct(
    cros.mojom.CropRotateScaleInfoSpec, 'cros.mojom.CropRotateScaleInfo', [
      mojo.internal.StructField('crop_rotate_scale_degrees', 0, 0, cros.mojom.Camera3StreamRotationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Camera3Stream
mojo.internal.Struct(
    cros.mojom.Camera3StreamSpec, 'cros.mojom.Camera3Stream', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('stream_type', 8, 0, cros.mojom.Camera3StreamTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('format', 16, 0, cros.mojom.HalPixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rotation', 24, 0, cros.mojom.Camera3StreamRotationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('width', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('usage', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_buffers', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('data_space', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('crop_rotate_scale_info', 56, 0, cros.mojom.CropRotateScaleInfoSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('physical_camera_id', 64, 0, mojo.internal.String, null, true, 4, undefined),
      mojo.internal.StructField('effects', 72, 0, mojo.internal.Array(cros.mojom.Camera3StreamEffectSpec.$, false), null, true, 6, undefined),
    ],
    [[0, 64], [1, 72], [4, 80], [6, 88]]);

// Struct: Camera3StreamConfiguration
mojo.internal.Struct(
    cros.mojom.Camera3StreamConfigurationSpec, 'cros.mojom.Camera3StreamConfiguration', [
      mojo.internal.StructField('streams', 0, 0, mojo.internal.Array(cros.mojom.Camera3StreamSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('operation_mode', 8, 0, cros.mojom.Camera3StreamConfigurationModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_parameters', 16, 0, cros.mojom.CameraMetadataSpec.$, null, true, 4, undefined),
    ],
    [[0, 24], [4, 32]]);

// Struct: CameraBufferHandle
mojo.internal.Struct(
    cros.mojom.CameraBufferHandleSpec, 'cros.mojom.CameraBufferHandle', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('fds', 8, 0, mojo.internal.Array(mojo.internal.Handle, false), null, false, 0, undefined),
      mojo.internal.StructField('hal_pixel_format', 16, 0, cros.mojom.HalPixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('strides', 24, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('offsets', 32, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('drm_format', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('width', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sizes', 56, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, true, 3, undefined),
      mojo.internal.StructField('modifier', 64, 0, mojo.internal.Uint64, 0, false, 7, undefined),
      mojo.internal.StructField('has_modifier', 72, 0, mojo.internal.Bool, false, false, 7, undefined),
    ],
    [[0, 64], [3, 72], [7, 88]]);

// Struct: Camera3StreamBuffer
mojo.internal.Struct(
    cros.mojom.Camera3StreamBufferSpec, 'cros.mojom.Camera3StreamBuffer', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('status', 16, 0, cros.mojom.Camera3BufferStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('acquire_fence', 24, 0, mojo.internal.Handle, null, true, 0, undefined),
      mojo.internal.StructField('release_fence', 28, 0, mojo.internal.Handle, null, true, 0, undefined),
      mojo.internal.StructField('buffer_handle', 32, 0, cros.mojom.CameraBufferHandleSpec.$, null, true, 2, undefined),
    ],
    [[0, 40], [2, 48]]);

// Struct: Camera3ErrorMsg
mojo.internal.Struct(
    cros.mojom.Camera3ErrorMsgSpec, 'cros.mojom.Camera3ErrorMsg', [
      mojo.internal.StructField('error_stream_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('error_code', 8, 0, cros.mojom.Camera3ErrorMsgCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_number', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Camera3ShutterMsg
mojo.internal.Struct(
    cros.mojom.Camera3ShutterMsgSpec, 'cros.mojom.Camera3ShutterMsg', [
      mojo.internal.StructField('timestamp', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('frame_number', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Camera3NotifyMsg
mojo.internal.Struct(
    cros.mojom.Camera3NotifyMsgSpec, 'cros.mojom.Camera3NotifyMsg', [
      mojo.internal.StructField('type', 0, 0, cros.mojom.Camera3MsgTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, cros.mojom.Camera3NotifyMsgMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Camera3BufferRequest
mojo.internal.Struct(
    cros.mojom.Camera3BufferRequestSpec, 'cros.mojom.Camera3BufferRequest', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('num_buffers_requested', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Camera3StreamBufferRet
mojo.internal.Struct(
    cros.mojom.Camera3StreamBufferRetSpec, 'cros.mojom.Camera3StreamBufferRet', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, cros.mojom.Camera3StreamBufferReqStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_buffers', 16, 0, mojo.internal.Array(cros.mojom.Camera3StreamBufferSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Camera3PhyscamMetadata
mojo.internal.Struct(
    cros.mojom.Camera3PhyscamMetadataSpec, 'cros.mojom.Camera3PhyscamMetadata', [
      mojo.internal.StructField('metadata', 0, 0, cros.mojom.CameraMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Camera3CaptureRequest
mojo.internal.Struct(
    cros.mojom.Camera3CaptureRequestSpec, 'cros.mojom.Camera3CaptureRequest', [
      mojo.internal.StructField('settings', 0, 0, cros.mojom.CameraMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_buffer', 8, 0, cros.mojom.Camera3StreamBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('output_buffers', 16, 0, mojo.internal.Array(cros.mojom.Camera3StreamBufferSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('frame_number', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('physcam_settings', 32, 0, mojo.internal.Array(cros.mojom.Camera3PhyscamMetadataSpec.$, false), null, true, 4, undefined),
    ],
    [[0, 40], [4, 48]]);

// Struct: Camera3CaptureResult
mojo.internal.Struct(
    cros.mojom.Camera3CaptureResultSpec, 'cros.mojom.Camera3CaptureResult', [
      mojo.internal.StructField('result', 0, 0, cros.mojom.CameraMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_buffers', 8, 0, mojo.internal.Array(cros.mojom.Camera3StreamBufferSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('input_buffer', 16, 0, cros.mojom.Camera3StreamBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('frame_number', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('partial_result', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('physcam_metadata', 32, 0, mojo.internal.Array(cros.mojom.Camera3PhyscamMetadataSpec.$, false), null, true, 4, undefined),
    ],
    [[0, 40], [4, 48]]);

// Interface: Camera3CallbackOps
mojo.internal.Struct(
    cros.mojom.Camera3CallbackOps_ProcessCaptureResult_ParamsSpec, 'cros.mojom.Camera3CallbackOps_ProcessCaptureResult_Params', [
      mojo.internal.StructField('result', 0, 0, cros.mojom.Camera3CaptureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3CallbackOps_Notify_ParamsSpec, 'cros.mojom.Camera3CallbackOps_Notify_Params', [
      mojo.internal.StructField('msg', 0, 0, cros.mojom.Camera3NotifyMsgSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ParamsSpec, 'cros.mojom.Camera3CallbackOps_RequestStreamBuffers_Params', [
      mojo.internal.StructField('buffer_reqs', 0, 0, mojo.internal.Array(cros.mojom.Camera3BufferRequestSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ResponseParamsSpec, 'cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, cros.mojom.Camera3BufferRequestStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('returned_buf_reqs', 8, 0, mojo.internal.Array(cros.mojom.Camera3StreamBufferRetSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.Camera3CallbackOps_ReturnStreamBuffers_ParamsSpec, 'cros.mojom.Camera3CallbackOps_ReturnStreamBuffers_Params', [
      mojo.internal.StructField('buffers', 0, 0, mojo.internal.Array(cros.mojom.Camera3StreamBufferSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [result],
      false);
  }

  notify(msg) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.Camera3CallbackOps_Notify_ParamsSpec,
      null,
      [msg],
      false);
  }

  requestStreamBuffers(buffer_reqs) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ParamsSpec,
      cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ResponseParamsSpec,
      [buffer_reqs],
      false);
  }

  returnStreamBuffers(buffers) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.Camera3CallbackOps_ReturnStreamBuffers_ParamsSpec,
      null,
      [buffers],
      false);
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

cros.mojom.Camera3CallbackOpsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ProcessCaptureResult
        try {
             decoder.decodeStruct(cros.mojom.Camera3CallbackOps_ProcessCaptureResult_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessCaptureResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: Notify
        try {
             decoder.decodeStruct(cros.mojom.Camera3CallbackOps_Notify_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Notify (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: RequestStreamBuffers
        try {
             decoder.decodeStruct(cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestStreamBuffers (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: ReturnStreamBuffers
        try {
             decoder.decodeStruct(cros.mojom.Camera3CallbackOps_ReturnStreamBuffers_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReturnStreamBuffers (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.Camera3CallbackOps_ProcessCaptureResult_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.processCaptureResult');
          const result = this.impl.processCaptureResult(params.result);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.Camera3CallbackOps_Notify_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notify');
          const result = this.impl.notify(params.msg);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestStreamBuffers');
          const result = this.impl.requestStreamBuffers(params.buffer_reqs);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.Camera3CallbackOps_RequestStreamBuffers_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.Camera3CallbackOps_ReturnStreamBuffers_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.returnStreamBuffers');
          const result = this.impl.returnStreamBuffers(params.buffers);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.Camera3CallbackOpsReceiver = cros.mojom.Camera3CallbackOpsReceiver;

cros.mojom.Camera3CallbackOpsPtr = cros.mojom.Camera3CallbackOpsRemote;
cros.mojom.Camera3CallbackOpsRequest = cros.mojom.Camera3CallbackOpsPendingReceiver;


// Interface: Camera3DeviceOps
mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_Initialize_ParamsSpec, 'cros.mojom.Camera3DeviceOps_Initialize_Params', [
      mojo.internal.StructField('callback_ops', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.Camera3CallbackOpsSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_Initialize_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_Initialize_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_ConfigureStreams_ParamsSpec, 'cros.mojom.Camera3DeviceOps_ConfigureStreams_Params', [
      mojo.internal.StructField('config', 0, 0, cros.mojom.Camera3StreamConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_ConfigureStreams_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_ConfigureStreams_ResponseParams', [
      mojo.internal.StructField('updated_config', 0, 0, cros.mojom.Camera3StreamConfigurationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ParamsSpec, 'cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_Params', [
      mojo.internal.StructField('type', 0, 0, cros.mojom.Camera3RequestTemplateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ResponseParams', [
      mojo.internal.StructField('settings', 0, 0, cros.mojom.CameraMetadataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ParamsSpec, 'cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_Params', [
      mojo.internal.StructField('request', 0, 0, cros.mojom.Camera3CaptureRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_Dump_ParamsSpec, 'cros.mojom.Camera3DeviceOps_Dump_Params', [
      mojo.internal.StructField('fd', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_Flush_ParamsSpec, 'cros.mojom.Camera3DeviceOps_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_Flush_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_Flush_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_RegisterBuffer_ParamsSpec, 'cros.mojom.Camera3DeviceOps_RegisterBuffer_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, cros.mojom.BufferTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fds', 16, 0, mojo.internal.Array(mojo.internal.Handle, false), null, false, 0, undefined),
      mojo.internal.StructField('hal_pixel_format', 24, 0, cros.mojom.HalPixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('strides', 32, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('offsets', 40, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('drm_format', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('width', 52, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 72]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_RegisterBuffer_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_RegisterBuffer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_Close_ParamsSpec, 'cros.mojom.Camera3DeviceOps_Close_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_Close_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_Close_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ParamsSpec, 'cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_Params', [
      mojo.internal.StructField('config', 0, 0, cros.mojom.Camera3StreamConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ResponseParams', [
      mojo.internal.StructField('updated_config', 0, 0, cros.mojom.Camera3StreamConfigurationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('allocated_buffers', 8, 0, mojo.internal.Map(mojo.internal.Uint64, mojo.internal.Array(cros.mojom.Camera3StreamBufferSpec.$, false), false), null, false, 0, undefined),
      mojo.internal.StructField('result', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_SignalStreamFlush_ParamsSpec, 'cros.mojom.Camera3DeviceOps_SignalStreamFlush_Params', [
      mojo.internal.StructField('stream_ids', 0, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_OnNewBuffer_ParamsSpec, 'cros.mojom.Camera3DeviceOps_OnNewBuffer_Params', [
      mojo.internal.StructField('buffer', 0, 0, cros.mojom.CameraBufferHandleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_OnNewBuffer_ResponseParamsSpec, 'cros.mojom.Camera3DeviceOps_OnNewBuffer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.Camera3DeviceOps_OnBufferRetired_ParamsSpec, 'cros.mojom.Camera3DeviceOps_OnBufferRetired_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [callback_ops],
      false);
  }

  configureStreams(config) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.Camera3DeviceOps_ConfigureStreams_ParamsSpec,
      cros.mojom.Camera3DeviceOps_ConfigureStreams_ResponseParamsSpec,
      [config],
      false);
  }

  constructDefaultRequestSettings(type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ParamsSpec,
      cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ResponseParamsSpec,
      [type],
      false);
  }

  processCaptureRequest(request) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ParamsSpec,
      cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ResponseParamsSpec,
      [request],
      false);
  }

  dump(fd) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      cros.mojom.Camera3DeviceOps_Dump_ParamsSpec,
      null,
      [fd],
      false);
  }

  flush() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      cros.mojom.Camera3DeviceOps_Flush_ParamsSpec,
      cros.mojom.Camera3DeviceOps_Flush_ResponseParamsSpec,
      [],
      false);
  }

  registerBuffer(buffer_id, type, fds, drm_format, hal_pixel_format, width, height, strides, offsets) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      cros.mojom.Camera3DeviceOps_RegisterBuffer_ParamsSpec,
      cros.mojom.Camera3DeviceOps_RegisterBuffer_ResponseParamsSpec,
      [buffer_id, type, fds, drm_format, hal_pixel_format, width, height, strides, offsets],
      false);
  }

  close() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      cros.mojom.Camera3DeviceOps_Close_ParamsSpec,
      cros.mojom.Camera3DeviceOps_Close_ResponseParamsSpec,
      [],
      false);
  }

  configureStreamsAndGetAllocatedBuffers(config) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ParamsSpec,
      cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ResponseParamsSpec,
      [config],
      false);
  }

  signalStreamFlush(stream_ids) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      cros.mojom.Camera3DeviceOps_SignalStreamFlush_ParamsSpec,
      null,
      [stream_ids],
      false);
  }

  onNewBuffer(buffer) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      cros.mojom.Camera3DeviceOps_OnNewBuffer_ParamsSpec,
      cros.mojom.Camera3DeviceOps_OnNewBuffer_ResponseParamsSpec,
      [buffer],
      false);
  }

  onBufferRetired(buffer_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      cros.mojom.Camera3DeviceOps_OnBufferRetired_ParamsSpec,
      null,
      [buffer_id],
      false);
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

cros.mojom.Camera3DeviceOpsReceiver = class {
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
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Initialize
        try {
             decoder.decodeStruct(cros.mojom.Camera3DeviceOps_Initialize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: ConfigureStreams
        try {
             decoder.decodeStruct(cros.mojom.Camera3DeviceOps_ConfigureStreams_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfigureStreams (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: ConstructDefaultRequestSettings
        try {
             decoder.decodeStruct(cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConstructDefaultRequestSettings (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: ProcessCaptureRequest
        try {
             decoder.decodeStruct(cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessCaptureRequest (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: Dump
        try {
             decoder.decodeStruct(cros.mojom.Camera3DeviceOps_Dump_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Dump (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: Flush
        try {
             decoder.decodeStruct(cros.mojom.Camera3DeviceOps_Flush_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Flush (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: RegisterBuffer
        try {
             decoder.decodeStruct(cros.mojom.Camera3DeviceOps_RegisterBuffer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterBuffer (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: Close
        try {
             decoder.decodeStruct(cros.mojom.Camera3DeviceOps_Close_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: ConfigureStreamsAndGetAllocatedBuffers
        try {
             decoder.decodeStruct(cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfigureStreamsAndGetAllocatedBuffers (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: SignalStreamFlush
        try {
             decoder.decodeStruct(cros.mojom.Camera3DeviceOps_SignalStreamFlush_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SignalStreamFlush (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: OnNewBuffer
        try {
             decoder.decodeStruct(cros.mojom.Camera3DeviceOps_OnNewBuffer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewBuffer (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 11: OnBufferRetired
        try {
             decoder.decodeStruct(cros.mojom.Camera3DeviceOps_OnBufferRetired_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBufferRetired (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.Camera3DeviceOps_Initialize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.callback_ops);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.Camera3DeviceOps_Initialize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.Camera3DeviceOps_ConfigureStreams_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.configureStreams');
          const result = this.impl.configureStreams(params.config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.Camera3DeviceOps_ConfigureStreams_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.constructDefaultRequestSettings');
          const result = this.impl.constructDefaultRequestSettings(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.Camera3DeviceOps_ConstructDefaultRequestSettings_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.processCaptureRequest');
          const result = this.impl.processCaptureRequest(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.Camera3DeviceOps_ProcessCaptureRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.Camera3DeviceOps_Dump_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dump');
          const result = this.impl.dump(params.fd);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.Camera3DeviceOps_Flush_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.Camera3DeviceOps_Flush_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.Camera3DeviceOps_RegisterBuffer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.registerBuffer');
          const result = this.impl.registerBuffer(params.buffer_id, params.type, params.fds, params.drm_format, params.hal_pixel_format, params.width, params.height, params.strides, params.offsets);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.Camera3DeviceOps_RegisterBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.Camera3DeviceOps_Close_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.Camera3DeviceOps_Close_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.configureStreamsAndGetAllocatedBuffers');
          const result = this.impl.configureStreamsAndGetAllocatedBuffers(params.config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.Camera3DeviceOps_ConfigureStreamsAndGetAllocatedBuffers_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.Camera3DeviceOps_SignalStreamFlush_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.signalStreamFlush');
          const result = this.impl.signalStreamFlush(params.stream_ids);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.Camera3DeviceOps_OnNewBuffer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNewBuffer');
          const result = this.impl.onNewBuffer(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.Camera3DeviceOps_OnNewBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.Camera3DeviceOps_OnBufferRetired_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBufferRetired');
          const result = this.impl.onBufferRetired(params.buffer_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.Camera3DeviceOpsReceiver = cros.mojom.Camera3DeviceOpsReceiver;

cros.mojom.Camera3DeviceOpsPtr = cros.mojom.Camera3DeviceOpsRemote;
cros.mojom.Camera3DeviceOpsRequest = cros.mojom.Camera3DeviceOpsPendingReceiver;

