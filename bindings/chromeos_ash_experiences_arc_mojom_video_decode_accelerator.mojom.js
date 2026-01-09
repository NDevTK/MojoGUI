// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_decode_accelerator.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: Result
arc.mojom.Result = {
  SUCCESS: 0,
  ILLEGAL_STATE: 1,
  INVALID_ARGUMENT: 2,
  UNREADABLE_INPUT: 3,
  PLATFORM_FAILURE: 4,
  INSUFFICIENT_RESOURCES: 5,
  CANCELLED: 6,
};

// Struct: BitstreamBuffer
arc.mojom.BitstreamBuffer = class {
  constructor(values = {}) {
    this.bytes_used = values.bytes_used !== undefined ? values.bytes_used : 0;
  }
};

// Struct: Picture
arc.mojom.Picture = class {
  constructor(values = {}) {
    this.crop_rect = values.crop_rect !== undefined ? values.crop_rect : 0;
  }
};

// Struct: PictureBufferFormat
arc.mojom.PictureBufferFormat = class {
  constructor(values = {}) {
    this.coded_size = values.coded_size !== undefined ? values.coded_size : 0;
  }
};

// Struct: VideoDecodeAcceleratorConfig
arc.mojom.VideoDecodeAcceleratorConfig = class {
  constructor(values = {}) {
    this.secure_mode = values.secure_mode !== undefined ? values.secure_mode : false;
  }
};

// Struct: BufferModifier
arc.mojom.BufferModifier = class {
  constructor(values = {}) {
    this.val = values.val !== undefined ? values.val : 0;
  }
};

// Interface: VideoDecodeAccelerator
arc.mojom.VideoDecodeAcceleratorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.VideoDecodeAccelerator';
  }

};

arc.mojom.VideoDecodeAcceleratorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoDecodeClient
arc.mojom.VideoDecodeClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.VideoDecodeClient';
  }

  pictureReady() {
    // Method: PictureReady
    // Call: PictureReady()
  }

  1(picture) {
    // Method: 1
    // Call: 1(picture)
  }

  2(bitstream_id) {
    // Method: 2
    // Call: 2(bitstream_id)
  }

  initialize() {
    // Method: Initialize
    // Call: Initialize()
  }

  reset() {
    // Method: Reset
    // Call: Reset()
  }

  flush() {
    // Method: Flush
    // Call: Flush()
  }

  3(error) {
    // Method: 3
    // Call: 3(error)
  }

  5(format, visible_rect) {
    // Method: 5
    // Call: 5(format, visible_rect)
  }

};

arc.mojom.VideoDecodeClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
