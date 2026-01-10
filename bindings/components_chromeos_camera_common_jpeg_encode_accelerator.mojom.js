// Auto-generated MojoJS binding
// Source: chromium_src/components/chromeos_camera/common/jpeg_encode_accelerator.mojom
// Module: chromeos_camera.mojom

'use strict';

// Module namespace
var chromeos_camera = chromeos_camera || {};
chromeos_camera.mojom = chromeos_camera.mojom || {};
var components = components || {};

chromeos_camera.mojom.EncodeStatusSpec = { $: mojo.internal.Enum() };
chromeos_camera.mojom.JpegEncodeAccelerator = {};
chromeos_camera.mojom.JpegEncodeAccelerator.$interfaceName = 'chromeos_camera.mojom.JpegEncodeAccelerator';
chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ParamsSpec = { $: {} };
chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ResponseParamsSpec = { $: {} };
chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ParamsSpec = { $: {} };
chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ResponseParamsSpec = { $: {} };
chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ParamsSpec = { $: {} };
chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ResponseParamsSpec = { $: {} };

// Enum: EncodeStatus
chromeos_camera.mojom.EncodeStatus = {
  ENCODE_OK: 0,
  HW_JPEG_ENCODE_NOT_SUPPORTED: 1,
  THREAD_CREATION_FAILED: 2,
  INVALID_ARGUMENT: 3,
  INACCESSIBLE_OUTPUT_BUFFER: 4,
  PARSE_IMAGE_FAILED: 5,
  PLATFORM_FAILURE: 6,
};

// Interface: JpegEncodeAccelerator
mojo.internal.Struct(
    chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ParamsSpec, 'chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ResponseParamsSpec, 'chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ParamsSpec, 'chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_Params', [
      mojo.internal.StructField('task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('input_fd', 4, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('input_buffer_size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('coded_size_width', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('coded_size_height', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('exif_fd', 20, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('exif_buffer_size', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('output_fd', 28, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('output_buffer_size', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ResponseParamsSpec, 'chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ResponseParams', [
      mojo.internal.StructField('task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('encoded_buffer_size', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, chromeos_camera.mojom.EncodeStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ParamsSpec, 'chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_Params', [
      mojo.internal.StructField('task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('input_format', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('input_planes', 8, 0, mojo.internal.Array(chromeos_camera.mojom.DmaBufPlaneSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('output_planes', 16, 0, mojo.internal.Array(chromeos_camera.mojom.DmaBufPlaneSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('exif_handle', 24, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('exif_buffer_size', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('coded_size_width', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('coded_size_height', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('quality', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_input_modifier', 44, 0, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('input_modifier', 48, 0, mojo.internal.Uint64, 0, false, 1, undefined),
    ],
    [[0, 56], [1, 64]]);

mojo.internal.Struct(
    chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ResponseParamsSpec, 'chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ResponseParams', [
      mojo.internal.StructField('encoded_buffer_size', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, chromeos_camera.mojom.EncodeStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

chromeos_camera.mojom.JpegEncodeAcceleratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos_camera.mojom.JpegEncodeAcceleratorRemote = class {
  static get $interfaceName() {
    return 'chromeos_camera.mojom.JpegEncodeAccelerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos_camera.mojom.JpegEncodeAcceleratorPendingReceiver,
      handle);
    this.$ = new chromeos_camera.mojom.JpegEncodeAcceleratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos_camera.mojom.JpegEncodeAcceleratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ParamsSpec,
      chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ResponseParamsSpec,
      [],
      false);
  }

  encodeWithFD(task_id, input_fd, input_buffer_size, coded_size_width, coded_size_height, exif_fd, exif_buffer_size, output_fd, output_buffer_size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ParamsSpec,
      chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ResponseParamsSpec,
      [task_id, input_fd, input_buffer_size, coded_size_width, coded_size_height, exif_fd, exif_buffer_size, output_fd, output_buffer_size],
      false);
  }

  encodeWithDmaBuf(task_id, input_format, input_planes, output_planes, exif_handle, exif_buffer_size, coded_size_width, coded_size_height, quality, has_input_modifier, input_modifier) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ParamsSpec,
      chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ResponseParamsSpec,
      [task_id, input_format, input_planes, output_planes, exif_handle, exif_buffer_size, coded_size_width, coded_size_height, quality, has_input_modifier, input_modifier],
      false);
  }

};

chromeos_camera.mojom.JpegEncodeAccelerator.getRemote = function() {
  let remote = new chromeos_camera.mojom.JpegEncodeAcceleratorRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'chromeos_camera.mojom.JpegEncodeAccelerator',
    'context');
  return remote.$;
};

chromeos_camera.mojom.JpegEncodeAcceleratorPtr = chromeos_camera.mojom.JpegEncodeAcceleratorRemote;
chromeos_camera.mojom.JpegEncodeAcceleratorRequest = chromeos_camera.mojom.JpegEncodeAcceleratorPendingReceiver;

