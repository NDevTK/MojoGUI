// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/zero_state_suggestions_service.mojom
// Module: ai.mojom

'use strict';

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};


// Interface: ZeroStateSuggestionsService
ai.mojom.ZeroStateSuggestionsServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ai.mojom.ZeroStateSuggestionsService';
  }

  fetchZeroStateSuggestions() {
    // Method: FetchZeroStateSuggestions
    return new Promise((resolve) => {
      // Call: FetchZeroStateSuggestions()
      resolve({});
    });
  }

};

ai.mojom.ZeroStateSuggestionsServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
