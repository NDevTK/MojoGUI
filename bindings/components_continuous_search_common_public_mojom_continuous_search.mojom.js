// Auto-generated MojoJS binding
// Source: chromium_src/components/continuous_search/common/public/mojom/continuous_search.mojom
// Module: continuous_search.mojom

'use strict';

// Module namespace
var continuous_search = continuous_search || {};
continuous_search.mojom = continuous_search.mojom || {};


// Enum: ResultType
continuous_search.mojom.ResultType = {
};

// Enum: Category
continuous_search.mojom.Category = {
};

// Enum: Status
continuous_search.mojom.Status = {
};

// Struct: SearchResult
continuous_search.mojom.SearchResult = class {
  constructor(values = {}) {
    this.title = values.title !== undefined ? values.title : "";
  }
};

// Struct: ResultGroup
continuous_search.mojom.ResultGroup = class {
  constructor(values = {}) {
    this.results = values.results !== undefined ? values.results : [];
  }
};

// Struct: CategoryResults
continuous_search.mojom.CategoryResults = class {
  constructor(values = {}) {
    this.groups = values.groups !== undefined ? values.groups : [];
  }
};

// Interface: SearchResultExtractor
continuous_search.mojom.SearchResultExtractorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'continuous_search.mojom.SearchResultExtractor';
  }

};

continuous_search.mojom.SearchResultExtractorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
