// Auto-generated MojoJS binding
// Source: chromium_src/components/chromeos_camera/common/mjpeg_decode_accelerator.mojom
// Module: chromeos_camera.mojom

'use strict';

// Module namespace
var chromeos_camera = chromeos_camera || {};
chromeos_camera.mojom = chromeos_camera.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: DecodeError
chromeos_camera.mojom.DecodeError = {
  NO_ERRORS: 0,
  INVALID_ARGUMENT: 1,
  UNREADABLE_INPUT: 2,
  PARSE_JPEG_FAILED: 3,
  UNSUPPORTED_JPEG: 4,
  PLATFORM_FAILURE: 5,
};
chromeos_camera.mojom.DecodeErrorSpec = { $: mojo.internal.Enum() };

// Struct: BitstreamBuffer
chromeos_camera.mojom.BitstreamBufferSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.BitstreamBuffer',
      packedSize: 64,
      fields: [
        { name: 'id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'memory_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'key_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'iv', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'subsamples', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.SubsampleEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Interface: MjpegDecodeAccelerator
chromeos_camera.mojom.MjpegDecodeAccelerator = {};

chromeos_camera.mojom.MjpegDecodeAccelerator_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.MjpegDecodeAccelerator_Initialize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos_camera.mojom.MjpegDecodeAccelerator_Decode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.MjpegDecodeAccelerator_Decode_Params',
      packedSize: 40,
      fields: [
        { name: 'input_buffer', packedOffset: 0, packedBitOffset: 0, type: chromeos_camera.mojom.BitstreamBufferSpec, nullable: false, minVersion: 0 },
        { name: 'coded_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'output_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'output_buffer_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

chromeos_camera.mojom.MjpegDecodeAccelerator_DecodeWithDmaBuf_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.MjpegDecodeAccelerator_DecodeWithDmaBuf_Params',
      packedSize: 32,
      fields: [
        { name: 'task_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'src_dmabuf_fd', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'src_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'src_offset', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'dst_frame', packedOffset: 0, packedBitOffset: 0, type: chromeos_camera.mojom.DmaBufVideoFrameSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

chromeos_camera.mojom.MjpegDecodeAccelerator_Uninitialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.MjpegDecodeAccelerator_Uninitialize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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

// ParamsSpec for Initialize
chromeos_camera.mojom.MjpegDecodeAccelerator_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.MjpegDecodeAccelerator.Initialize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos_camera.mojom.MjpegDecodeAccelerator_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.MjpegDecodeAccelerator.Initialize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Decode
chromeos_camera.mojom.MjpegDecodeAccelerator_Decode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.MjpegDecodeAccelerator.Decode_Params',
      packedSize: 40,
      fields: [
        { name: 'input_buffer', packedOffset: 0, packedBitOffset: 0, type: chromeos_camera.mojom.BitstreamBufferSpec, nullable: false, minVersion: 0 },
        { name: 'coded_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'output_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'output_buffer_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

chromeos_camera.mojom.MjpegDecodeAccelerator_Decode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.MjpegDecodeAccelerator.Decode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'bitstream_buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 4, packedBitOffset: 0, type: chromeos_camera.mojom.DecodeErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DecodeWithDmaBuf
chromeos_camera.mojom.MjpegDecodeAccelerator_DecodeWithDmaBuf_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.MjpegDecodeAccelerator.DecodeWithDmaBuf_Params',
      packedSize: 32,
      fields: [
        { name: 'task_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'src_dmabuf_fd', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'src_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'src_offset', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'dst_frame', packedOffset: 0, packedBitOffset: 0, type: chromeos_camera.mojom.DmaBufVideoFrameSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

chromeos_camera.mojom.MjpegDecodeAccelerator_DecodeWithDmaBuf_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.MjpegDecodeAccelerator.DecodeWithDmaBuf_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: chromeos_camera.mojom.DecodeErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Uninitialize
chromeos_camera.mojom.MjpegDecodeAccelerator_Uninitialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.MjpegDecodeAccelerator.Uninitialize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
chromeos_camera.mojom.MjpegDecodeAcceleratorPtr = chromeos_camera.mojom.MjpegDecodeAcceleratorRemote;
chromeos_camera.mojom.MjpegDecodeAcceleratorRequest = chromeos_camera.mojom.MjpegDecodeAcceleratorPendingReceiver;

