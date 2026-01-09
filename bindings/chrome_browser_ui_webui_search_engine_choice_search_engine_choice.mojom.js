// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/search_engine_choice/search_engine_choice.mojom
// Module: search_engine_choice.mojom

'use strict';

// Module namespace
var search_engine_choice = search_engine_choice || {};
search_engine_choice.mojom = search_engine_choice.mojom || {};


// Enum: ScrollState
search_engine_choice.mojom.ScrollState = {
  kAtTheBottom: 0,
  kAtTheBottomWithErrorMargin: 1,
  kNotAtTheBottom: 2,
};

// Interface: PageHandlerFactory
search_engine_choice.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'search_engine_choice.mojom.PageHandlerFactory';
  }

  createPageHandler(handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(handler)
  }

};

search_engine_choice.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
search_engine_choice.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'search_engine_choice.mojom.PageHandler';
  }

  displayDialog() {
    // Method: DisplayDialog
    // Call: DisplayDialog()
  }

  handleSearchEngineChoiceSelected(prepopulate_id, save_guest_mode_selection) {
    // Method: HandleSearchEngineChoiceSelected
    // Call: HandleSearchEngineChoiceSelected(prepopulate_id, save_guest_mode_selection)
  }

  handleLearnMoreLinkClicked() {
    // Method: HandleLearnMoreLinkClicked
    // Call: HandleLearnMoreLinkClicked()
  }

  handleMoreButtonClicked() {
    // Method: HandleMoreButtonClicked
    // Call: HandleMoreButtonClicked()
  }

  recordScrollState(scroll_state) {
    // Method: RecordScrollState
    // Call: RecordScrollState(scroll_state)
  }

};

search_engine_choice.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
