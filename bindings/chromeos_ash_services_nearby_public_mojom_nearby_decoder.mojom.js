// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_decoder.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Interface: NearbySharingDecoder
sharing.mojom.NearbySharingDecoderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'sharing.mojom.NearbySharingDecoder';
  }

  decodeAdvertisement(data) {
    // Method: DecodeAdvertisement
    return new Promise((resolve) => {
      // Call: DecodeAdvertisement(data)
      resolve({});
    });
  }

  decodeFrame(data) {
    // Method: DecodeFrame
    return new Promise((resolve) => {
      // Call: DecodeFrame(data)
      resolve({});
    });
  }

};

sharing.mojom.NearbySharingDecoderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
