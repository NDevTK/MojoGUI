// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/wallet/boarding_pass_extractor.mojom
// Module: wallet.mojom

'use strict';

// Module namespace
var wallet = wallet || {};
wallet.mojom = wallet.mojom || {};


// Interface: BoardingPassExtractor
wallet.mojom.BoardingPassExtractorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'wallet.mojom.BoardingPassExtractor';
  }

  extractBoardingPass() {
    // Method: ExtractBoardingPass
    return new Promise((resolve) => {
      // Call: ExtractBoardingPass()
      resolve({});
    });
  }

};

wallet.mojom.BoardingPassExtractorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
