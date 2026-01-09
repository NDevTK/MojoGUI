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
chromeos_camera.mojom.JpegEncodeAcceleratorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos_camera.mojom.JpegEncodeAccelerator';
  }

  encodeWithFD() {
    // Method: EncodeWithFD
    // Call: EncodeWithFD()
  }

  initialize() {
    // Method: Initialize
    return new Promise((resolve) => {
      // Call: Initialize()
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  encodeWithFD(task_id, input_fd, input_buffer_size, coded_size_width, coded_size_height, exif_fd, exif_buffer_size, output_fd, output_buffer_size) {
    // Method: EncodeWithFD
    return new Promise((resolve) => {
      // Call: EncodeWithFD(task_id, input_fd, input_buffer_size, coded_size_width, coded_size_height, exif_fd, exif_buffer_size, output_fd, output_buffer_size)
      resolve({});
    });
  }

  encodeWithDmaBuf(task_id, input_format, input_planes, output_planes, exif_handle, exif_buffer_size, coded_size_width, coded_size_height, quality, has_input_modifier, input_modifier) {
    // Method: EncodeWithDmaBuf
    return new Promise((resolve) => {
      // Call: EncodeWithDmaBuf(task_id, input_format, input_planes, output_planes, exif_handle, exif_buffer_size, coded_size_width, coded_size_height, quality, has_input_modifier, input_modifier)
      resolve({});
    });
  }

};

chromeos_camera.mojom.JpegEncodeAcceleratorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
