// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/link_to_text/link_to_text.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: LinkGenerationReadyStatus
blink.mojom.LinkGenerationReadyStatus = {
};

// Enum: LinkGenerationError
blink.mojom.LinkGenerationError = {
};

// Interface: TextFragmentReceiver
blink.mojom.TextFragmentReceiverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.TextFragmentReceiver';
  }

  cancel() {
    // Method: Cancel
    // Call: Cancel()
  }

  requestSelector() {
    // Method: RequestSelector
    return new Promise((resolve) => {
      // Call: RequestSelector()
      resolve({});
    });
  }

  removeFragments() {
    // Method: RemoveFragments
    // Call: RemoveFragments()
  }

  extractTextFragmentsMatches() {
    // Method: ExtractTextFragmentsMatches
    return new Promise((resolve) => {
      // Call: ExtractTextFragmentsMatches()
      resolve({});
    });
  }

  getExistingSelectors() {
    // Method: GetExistingSelectors
    return new Promise((resolve) => {
      // Call: GetExistingSelectors()
      resolve({});
    });
  }

  extractFirstFragmentRect() {
    // Method: ExtractFirstFragmentRect
    return new Promise((resolve) => {
      // Call: ExtractFirstFragmentRect()
      resolve({});
    });
  }

};

blink.mojom.TextFragmentReceiverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
