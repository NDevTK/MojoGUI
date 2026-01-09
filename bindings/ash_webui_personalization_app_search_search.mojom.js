// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/personalization_app/search/search.mojom
// Module: ash.personalization_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.personalization_app = ash.personalization_app || {};
ash.personalization_app.mojom = ash.personalization_app.mojom || {};


// Enum: SearchConceptId
ash.personalization_app.mojom.SearchConceptId = {
};

// Struct: SearchResult
ash.personalization_app.mojom.SearchResult = class {
  constructor(values = {}) {
    this.text = values.text !== undefined ? values.text : "";
    this.parameters = values.parameters !== undefined ? values.parameters : null;
    this.relevance_score = values.relevance_score !== undefined ? values.relevance_score : 0;
  }
};

// Interface: SearchResultsObserver
ash.personalization_app.mojom.SearchResultsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.personalization_app.mojom.SearchResultsObserver';
  }

  onSearchResultsChanged() {
    // Method: OnSearchResultsChanged
    // Call: OnSearchResultsChanged()
  }

};

ash.personalization_app.mojom.SearchResultsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SearchHandler
ash.personalization_app.mojom.SearchHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.personalization_app.mojom.SearchHandler';
  }

  search(query, max_num_results) {
    // Method: Search
    return new Promise((resolve) => {
      // Call: Search(query, max_num_results)
      resolve({});
    });
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

};

ash.personalization_app.mojom.SearchHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
