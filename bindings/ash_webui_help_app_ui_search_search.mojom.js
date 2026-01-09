// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/help_app_ui/search/search.mojom
// Module: ash.help_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.help_app = ash.help_app || {};
ash.help_app.mojom = ash.help_app.mojom || {};


// Struct: SearchResult
ash.help_app.mojom.SearchResult = class {
  constructor(values = {}) {
    this.main_category = values.main_category !== undefined ? values.main_category : "";
    this.contain = values.contain !== undefined ? values.contain : null;
    this.at = values.at !== undefined ? values.at : null;
    this.locale = values.locale !== undefined ? values.locale : "";
    this.relevance_score = values.relevance_score !== undefined ? values.relevance_score : 0;
  }
};

// Struct: SearchConcept
ash.help_app.mojom.SearchConcept = class {
  constructor(values = {}) {
    this.tag_locale = values.tag_locale !== undefined ? values.tag_locale : "";
    this.contain = values.contain !== undefined ? values.contain : null;
    this.at = values.at !== undefined ? values.at : null;
    this.locale = values.locale !== undefined ? values.locale : "";
  }
};

// Interface: SearchResultsObserver
ash.help_app.mojom.SearchResultsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.help_app.mojom.SearchResultsObserver';
  }

  onSearchResultAvailabilityChanged() {
    // Method: OnSearchResultAvailabilityChanged
    // Call: OnSearchResultAvailabilityChanged()
  }

};

ash.help_app.mojom.SearchResultsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SearchHandler
ash.help_app.mojom.SearchHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.help_app.mojom.SearchHandler';
  }

  search(query, max_num_results) {
    // Method: Search
    return new Promise((resolve) => {
      // Call: Search(query, max_num_results)
      resolve({});
    });
  }

  update(concepts) {
    // Method: Update
    // Call: Update(concepts)
  }

  observe(observer) {
    // Method: Observe
    // Call: Observe(observer)
  }

};

ash.help_app.mojom.SearchHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
