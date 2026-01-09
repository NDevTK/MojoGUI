// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/quick_start_decoder.mojom
// Module: ash.quick_start.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.quick_start = ash.quick_start || {};
ash.quick_start.mojom = ash.quick_start.mojom || {};


// Interface: QuickStartDecoder
ash.quick_start.mojom.QuickStartDecoderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.quick_start.mojom.QuickStartDecoder';
  }

  decodeQuickStartMessage(data) {
    // Method: DecodeQuickStartMessage
    return new Promise((resolve) => {
      // Call: DecodeQuickStartMessage(data)
      resolve({});
    });
  }

};

ash.quick_start.mojom.QuickStartDecoderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
