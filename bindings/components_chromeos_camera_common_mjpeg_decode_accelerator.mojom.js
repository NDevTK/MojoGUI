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

};

chromeos_camera.mojom.MjpegDecodeAcceleratorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
