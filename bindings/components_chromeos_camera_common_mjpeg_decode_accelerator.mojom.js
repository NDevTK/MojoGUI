// Auto-generated MojoJS binding
// Source: chromium_src/components/chromeos_camera/common/mjpeg_decode_accelerator.mojom
// Module: chromeos_camera.mojom

'use strict';

// Module namespace
var chromeos_camera = chromeos_camera || {};
chromeos_camera.mojom = chromeos_camera.mojom || {};


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
chromeos_camera.mojom.BitstreamBuffer = class {
  constructor(values = {}) {
    this.subsamples = values.subsamples !== undefined ? values.subsamples : 0;
  }
};

// Interface: MjpegDecodeAccelerator
chromeos_camera.mojom.MjpegDecodeAcceleratorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos_camera.mojom.MjpegDecodeAccelerator';
  }

  decode() {
    // Method: Decode
    // Call: Decode()
  }

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  1(input_buffer, coded_size, output_handle, output_buffer_size) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(input_buffer, coded_size, output_handle, output_buffer_size)
      resolve({});
    });
  }

  3(task_id, src_dmabuf_fd, src_size, src_offset, dst_frame) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(task_id, src_dmabuf_fd, src_size, src_offset, dst_frame)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  4() {
    // Method: 4
    // Call: 4()
  }

};

chromeos_camera.mojom.MjpegDecodeAcceleratorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
