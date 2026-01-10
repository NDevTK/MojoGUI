// Auto-generated MojoJS binding
// Source: chromium_src/components/chromeos_camera/common/mjpeg_decode_accelerator.mojom
// Module: chromeos_camera.mojom

'use strict';

// Module namespace
var chromeos_camera = chromeos_camera || {};
chromeos_camera.mojom = chromeos_camera.mojom || {};
var components = components || {};
var ui = ui || {};
var gfx = gfx || {};

chromeos_camera.mojom.DecodeErrorSpec = { $: mojo.internal.Enum() };
chromeos_camera.mojom.BitstreamBufferSpec = { $: {} };
chromeos_camera.mojom.MjpegDecodeAccelerator = {};
chromeos_camera.mojom.MjpegDecodeAccelerator.$interfaceName = 'chromeos_camera.mojom.MjpegDecodeAccelerator';
chromeos_camera.mojom.MjpegDecodeAccelerator_Initialize_ParamsSpec = { $: {} };
chromeos_camera.mojom.MjpegDecodeAccelerator_Initialize_ResponseParamsSpec = { $: {} };
chromeos_camera.mojom.MjpegDecodeAccelerator_Decode_ParamsSpec = { $: {} };
chromeos_camera.mojom.MjpegDecodeAccelerator_Decode_ResponseParamsSpec = { $: {} };
chromeos_camera.mojom.MjpegDecodeAccelerator_DecodeWithDmaBuf_ParamsSpec = { $: {} };
chromeos_camera.mojom.MjpegDecodeAccelerator_DecodeWithDmaBuf_ResponseParamsSpec = { $: {} };
chromeos_camera.mojom.MjpegDecodeAccelerator_Uninitialize_ParamsSpec = { $: {} };

// Enum: DecodeError
chromeos_camera.mojom.DecodeError = {
  NO_ERRORS: 0,
  INVALID_ARGUMENT: 1,
  UNREADABLE_INPUT: 2,
  PARSE_JPEG_FAILED: 3,
  UNSUPPORTED_JPEG: 4,
  PLATFORM_FAILURE: 5,
};

// Struct: BitstreamBuffer
mojo.internal.Struct(
    chromeos_camera.mojom.BitstreamBufferSpec, 'chromeos_camera.mojom.BitstreamBuffer', [
      mojo.internal.StructField('id', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('memory_handle', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('size', 52, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('timestamp', 16, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('key_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('iv', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('subsamples', 40, 0, mojo.internal.Array(media.mojom.SubsampleEntrySpec, false), null, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: MjpegDecodeAccelerator
mojo.internal.Struct(
    chromeos_camera.mojom.MjpegDecodeAccelerator_Initialize_ParamsSpec, 'chromeos_camera.mojom.MjpegDecodeAccelerator_Initialize_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chromeos_camera.mojom.MjpegDecodeAccelerator_Initialize_ResponseParamsSpec, 'chromeos_camera.mojom.MjpegDecodeAccelerator_Initialize_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos_camera.mojom.MjpegDecodeAccelerator_Decode_ParamsSpec, 'chromeos_camera.mojom.MjpegDecodeAccelerator_Decode_Params', [
      mojo.internal.StructField('input_buffer', 0, 0, chromeos_camera.mojom.BitstreamBufferSpec, null, false, 0, undefined),
      mojo.internal.StructField('coded_size', 8, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('output_handle', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('output_buffer_size', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    chromeos_camera.mojom.MjpegDecodeAccelerator_Decode_ResponseParamsSpec, 'chromeos_camera.mojom.MjpegDecodeAccelerator_Decode_ResponseParams', [
      mojo.internal.StructField('bitstream_buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('error', 4, 0, chromeos_camera.mojom.DecodeErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos_camera.mojom.MjpegDecodeAccelerator_DecodeWithDmaBuf_ParamsSpec, 'chromeos_camera.mojom.MjpegDecodeAccelerator_DecodeWithDmaBuf_Params', [
      mojo.internal.StructField('task_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('src_dmabuf_fd', 12, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('src_size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('src_offset', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('dst_frame', 0, 0, chromeos_camera.mojom.DmaBufVideoFrameSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromeos_camera.mojom.MjpegDecodeAccelerator_DecodeWithDmaBuf_ResponseParamsSpec, 'chromeos_camera.mojom.MjpegDecodeAccelerator_DecodeWithDmaBuf_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, chromeos_camera.mojom.DecodeErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos_camera.mojom.MjpegDecodeAccelerator_Uninitialize_ParamsSpec, 'chromeos_camera.mojom.MjpegDecodeAccelerator_Uninitialize_Params', [
    ],
    [{version: 0, packedSize: 8}]);

chromeos_camera.mojom.MjpegDecodeAcceleratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos_camera.mojom.MjpegDecodeAcceleratorRemote = class {
  static get $interfaceName() {
    return 'chromeos_camera.mojom.MjpegDecodeAccelerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos_camera.mojom.MjpegDecodeAcceleratorPendingReceiver,
      handle);
    this.$ = new chromeos_camera.mojom.MjpegDecodeAcceleratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos_camera.mojom.MjpegDecodeAcceleratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos_camera.mojom.MjpegDecodeAccelerator_Initialize_ParamsSpec,
      chromeos_camera.mojom.MjpegDecodeAccelerator_Initialize_ResponseParamsSpec,
      []);
  }

  decode(input_buffer, coded_size, output_handle, output_buffer_size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos_camera.mojom.MjpegDecodeAccelerator_Decode_ParamsSpec,
      chromeos_camera.mojom.MjpegDecodeAccelerator_Decode_ResponseParamsSpec,
      [input_buffer, coded_size, output_handle, output_buffer_size]);
  }

  decodeWithDmaBuf(task_id, src_dmabuf_fd, src_size, src_offset, dst_frame) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos_camera.mojom.MjpegDecodeAccelerator_DecodeWithDmaBuf_ParamsSpec,
      chromeos_camera.mojom.MjpegDecodeAccelerator_DecodeWithDmaBuf_ResponseParamsSpec,
      [task_id, src_dmabuf_fd, src_size, src_offset, dst_frame]);
  }

  uninitialize() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos_camera.mojom.MjpegDecodeAccelerator_Uninitialize_ParamsSpec,
      null,
      []);
  }

};

chromeos_camera.mojom.MjpegDecodeAccelerator.getRemote = function() {
  let remote = new chromeos_camera.mojom.MjpegDecodeAcceleratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos_camera.mojom.MjpegDecodeAccelerator',
    'context');
  return remote.$;
};

chromeos_camera.mojom.MjpegDecodeAcceleratorPtr = chromeos_camera.mojom.MjpegDecodeAcceleratorRemote;
chromeos_camera.mojom.MjpegDecodeAcceleratorRequest = chromeos_camera.mojom.MjpegDecodeAcceleratorPendingReceiver;

