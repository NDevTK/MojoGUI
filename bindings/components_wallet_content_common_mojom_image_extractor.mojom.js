// Auto-generated MojoJS binding
// Source: chromium_src/components/wallet/content/common/mojom/image_extractor.mojom
// Module: wallet.mojom

'use strict';

// Module namespace
var wallet = wallet || {};
wallet.mojom = wallet.mojom || {};


// Interface: ImageExtractor
wallet.mojom.ImageExtractorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'wallet.mojom.ImageExtractor';
  }

  extractImages() {
    // Method: ExtractImages
    return new Promise((resolve) => {
      // Call: ExtractImages()
      resolve({});
    });
  }

};

wallet.mojom.ImageExtractorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
