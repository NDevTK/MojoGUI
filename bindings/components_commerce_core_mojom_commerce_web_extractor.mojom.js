// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/commerce_web_extractor.mojom
// Module: commerce_web_extractor.mojom

'use strict';

// Module namespace
var commerce_web_extractor = commerce_web_extractor || {};
commerce_web_extractor.mojom = commerce_web_extractor.mojom || {};


// Interface: CommerceWebExtractor
commerce_web_extractor.mojom.CommerceWebExtractorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'commerce_web_extractor.mojom.CommerceWebExtractor';
  }

  extractMetaInfo() {
    // Method: ExtractMetaInfo
    return new Promise((resolve) => {
      // Call: ExtractMetaInfo()
      resolve({});
    });
  }

};

commerce_web_extractor.mojom.CommerceWebExtractorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
