// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/shortcut_customization_ui/backend/search/search.mojom
// Module: ash.shortcut_customization.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.shortcut_customization = ash.shortcut_customization || {};
ash.shortcut_customization.mojom = ash.shortcut_customization.mojom || {};


// Struct: SearchResult
ash.shortcut_customization.mojom.SearchResult = class {
  constructor(values = {}) {
    this.accelerator_infos = values.accelerator_infos !== undefined ? values.accelerator_infos : [];
    this.relevance_score = values.relevance_score !== undefined ? values.relevance_score : 0;
  }
};

// Interface: SearchResultsAvailabilityObserver
ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver';
  }

  onSearchResultsAvailabilityChanged() {
    // Method: OnSearchResultsAvailabilityChanged
    // Call: OnSearchResultsAvailabilityChanged()
  }

};

ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SearchHandler
ash.shortcut_customization.mojom.SearchHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.shortcut_customization.mojom.SearchHandler';
  }

  search(query, max_num_results) {
    // Method: Search
    return new Promise((resolve) => {
      // Call: Search(query, max_num_results)
      resolve({});
    });
  }

  addSearchResultsAvailabilityObserver(observer) {
    // Method: AddSearchResultsAvailabilityObserver
    // Call: AddSearchResultsAvailabilityObserver(observer)
  }

};

ash.shortcut_customization.mojom.SearchHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
