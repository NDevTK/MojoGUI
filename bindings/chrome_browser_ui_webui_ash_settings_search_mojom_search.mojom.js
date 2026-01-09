// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/search/mojom/search.mojom
// Module: ash.settings.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.mojom = ash.settings.mojom || {};


// Enum: SearchResultType
ash.settings.mojom.SearchResultType = {
};

// Enum: SearchResultDefaultRank
ash.settings.mojom.SearchResultDefaultRank = {
};

// Enum: ParentResultBehavior
ash.settings.mojom.ParentResultBehavior = {
};

// Struct: SearchResult
ash.settings.mojom.SearchResult = class {
  constructor(values = {}) {
    this.canonical_text = values.canonical_text !== undefined ? values.canonical_text : "";
    this.contain = values.contain !== undefined ? values.contain : null;
    this.is = values.is !== undefined ? values.is : null;
    this.icon = values.icon !== undefined ? values.icon : "";
    this.relevance_score = values.relevance_score !== undefined ? values.relevance_score : 0;
    this.applicable = values.applicable !== undefined ? values.applicable : null;
    this.settings_page_hierarchy = values.settings_page_hierarchy !== undefined ? values.settings_page_hierarchy : "";
    this.id = values.id !== undefined ? values.id : false;
  }
};

// Interface: SearchResultsObserver
ash.settings.mojom.SearchResultsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.SearchResultsObserver';
  }

  onSearchResultsChanged() {
    // Method: OnSearchResultsChanged
    // Call: OnSearchResultsChanged()
  }

};

ash.settings.mojom.SearchResultsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SearchHandler
ash.settings.mojom.SearchHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.SearchHandler';
  }

  search(query, max_num_results, parent_result_behavior) {
    // Method: Search
    return new Promise((resolve) => {
      // Call: Search(query, max_num_results, parent_result_behavior)
      resolve({});
    });
  }

  observe(observer) {
    // Method: Observe
    // Call: Observe(observer)
  }

};

ash.settings.mojom.SearchHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
