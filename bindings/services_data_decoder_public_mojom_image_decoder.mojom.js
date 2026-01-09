// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/image_decoder.mojom
// Module: data_decoder.mojom

'use strict';

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};


// Enum: ImageCodec
data_decoder.mojom.ImageCodec = {
  kDefault: 0,
};

// Struct: AnimationFrame
data_decoder.mojom.AnimationFrame = class {
  constructor(values = {}) {
    this.duration = values.duration !== undefined ? values.duration : {};
  }
};

// Interface: ImageDecoder
data_decoder.mojom.ImageDecoderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'data_decoder.mojom.ImageDecoder';
  }

  decodeImage(encoded_data, codec, shrink_to_fit, max_size_in_bytes, desired_image_frame_size) {
    // Method: DecodeImage
    return new Promise((resolve) => {
      // Call: DecodeImage(encoded_data, codec, shrink_to_fit, max_size_in_bytes, desired_image_frame_size)
      resolve({});
    });
  }

  decodeAnimation(encoded_data, shrink_to_fit, max_size_in_bytes) {
    // Method: DecodeAnimation
    return new Promise((resolve) => {
      // Call: DecodeAnimation(encoded_data, shrink_to_fit, max_size_in_bytes)
      resolve({});
    });
  }

};

data_decoder.mojom.ImageDecoderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
