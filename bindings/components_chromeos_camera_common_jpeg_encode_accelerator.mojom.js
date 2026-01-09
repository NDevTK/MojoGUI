// Auto-generated MojoJS binding
// Source: chromium_src/components/chromeos_camera/common/jpeg_encode_accelerator.mojom
// Module: chromeos_camera.mojom

'use strict';

// Module namespace
var chromeos_camera = chromeos_camera || {};
chromeos_camera.mojom = chromeos_camera.mojom || {};


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
      chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ParamsSpec.$,
      chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ResponseParamsSpec.$,
      []);
  }

  encodeWithFD(task_id, input_fd, input_buffer_size, coded_size_width, coded_size_height, exif_fd, exif_buffer_size, output_fd, output_buffer_size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ParamsSpec.$,
      chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ResponseParamsSpec.$,
      [task_id, input_fd, input_buffer_size, coded_size_width, coded_size_height, exif_fd, exif_buffer_size, output_fd, output_buffer_size]);
  }

  encodeWithDmaBuf(task_id, input_format, input_planes, output_planes, exif_handle, exif_buffer_size, coded_size_width, coded_size_height, quality, has_input_modifier, input_modifier) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ParamsSpec.$,
      chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ResponseParamsSpec.$,
      [task_id, input_format, input_planes, output_planes, exif_handle, exif_buffer_size, coded_size_width, coded_size_height, quality, has_input_modifier, input_modifier]);
  }

};

chromeos_camera.mojom.JpegEncodeAccelerator.getRemote = function() {
  let remote = new chromeos_camera.mojom.JpegEncodeAcceleratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos_camera.mojom.JpegEncodeAccelerator',
    'context');
  return remote.$;
};

// ParamsSpec for Initialize
chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.JpegEncodeAccelerator.Initialize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.JpegEncodeAccelerator.Initialize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EncodeWithFD
chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.JpegEncodeAccelerator.EncodeWithFD_Params',
      packedSize: 80,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'input_fd', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'input_buffer_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'coded_size_width', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'coded_size_height', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'exif_fd', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'exif_buffer_size', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'output_fd', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'output_buffer_size', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.JpegEncodeAccelerator.EncodeWithFD_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'encoded_buffer_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EncodeWithDmaBuf
chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.JpegEncodeAccelerator.EncodeWithDmaBuf_Params',
      packedSize: 96,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'input_format', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'input_planes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'output_planes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'exif_handle', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'exif_buffer_size', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'coded_size_width', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'coded_size_height', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'quality', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'has_input_modifier', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'input_modifier', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.JpegEncodeAccelerator.EncodeWithDmaBuf_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'encoded_buffer_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromeos_camera.mojom.JpegEncodeAcceleratorPtr = chromeos_camera.mojom.JpegEncodeAcceleratorRemote;
chromeos_camera.mojom.JpegEncodeAcceleratorRequest = chromeos_camera.mojom.JpegEncodeAcceleratorPendingReceiver;

