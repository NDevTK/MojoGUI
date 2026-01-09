// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/input_messages.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: TextSuggestionBackend
blink.mojom.TextSuggestionBackendPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.TextSuggestionBackend';
  }

  applySpellCheckSuggestion(suggestion) {
    // Method: ApplySpellCheckSuggestion
    // Call: ApplySpellCheckSuggestion(suggestion)
  }

  applyTextSuggestion(marker_tag, suggestion_index) {
    // Method: ApplyTextSuggestion
    // Call: ApplyTextSuggestion(marker_tag, suggestion_index)
  }

  deleteActiveSuggestionRange() {
    // Method: DeleteActiveSuggestionRange
    // Call: DeleteActiveSuggestionRange()
  }

  onNewWordAddedToDictionary(suggestion) {
    // Method: OnNewWordAddedToDictionary
    // Call: OnNewWordAddedToDictionary(suggestion)
  }

  onSuggestionMenuClosed() {
    // Method: OnSuggestionMenuClosed
    // Call: OnSuggestionMenuClosed()
  }

  suggestionMenuTimeoutCallback(max_number_of_suggestions) {
    // Method: SuggestionMenuTimeoutCallback
    // Call: SuggestionMenuTimeoutCallback(max_number_of_suggestions)
  }

};

blink.mojom.TextSuggestionBackendRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
