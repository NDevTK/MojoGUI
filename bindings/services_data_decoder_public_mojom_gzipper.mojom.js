// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/gzipper.mojom
// Module: data_decoder.mojom

'use strict';

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};


// Interface: Gzipper
data_decoder.mojom.GzipperPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'data_decoder.mojom.Gzipper';
  }

  deflate(data) {
    // Method: Deflate
    return new Promise((resolve) => {
      // Call: Deflate(data)
      resolve({});
    });
  }

  inflate(data, max_uncompressed_size) {
    // Method: Inflate
    return new Promise((resolve) => {
      // Call: Inflate(data, max_uncompressed_size)
      resolve({});
    });
  }

  compress(data) {
    // Method: Compress
    return new Promise((resolve) => {
      // Call: Compress(data)
      resolve({});
    });
  }

  uncompress(compressed_data) {
    // Method: Uncompress
    return new Promise((resolve) => {
      // Call: Uncompress(compressed_data)
      resolve({});
    });
  }

};

data_decoder.mojom.GzipperRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
