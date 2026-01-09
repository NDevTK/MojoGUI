// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/launcher_search.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: SearchStatus
crosapi.mojom.SearchStatus = {
  and: 0,
};

// Enum: SearchResultType
crosapi.mojom.SearchResultType = {
};

// Enum: OptionalBool
crosapi.mojom.OptionalBool = {
  kUnset: 0,
  kFalse: 1,
  kTrue: 2,
};

// Enum: OmniboxType
crosapi.mojom.OmniboxType = {
  kRichImageDeprecated: 0,
  kFaviconDeprecated: 1,
  kCalculatorDeprecated: 2,
  kBookmark: 3,
  kSearch: 4,
  kHistory: 5,
};

// Enum: MetricsType
crosapi.mojom.MetricsType = {
  kWhatYouTyped: 0,
  kRecentlyVisitedWebsite: 1,
  kHistoryTitle: 2,
  kSearchWhatYouTyped: 3,
  kSearchHistory: 4,
  kSearchSuggest: 5,
  kSearchSuggestPersonalized: 6,
  kBookmark: 7,
  kSearchSuggestEntity: 8,
  kNavSuggest: 9,
  kCalculator: 10,
};

// Enum: AnswerType
crosapi.mojom.AnswerType = {
  kDefaultAnswer: 0,
  kWeather: 1,
  kCurrency: 2,
  kDictionary: 3,
  kFinance: 4,
  kSunrise: 5,
  kTranslation: 6,
  kWhenIs: 7,
};

// Enum: TextType
crosapi.mojom.TextType = {
  kPositive: 0,
  kNegative: 1,
};

// Enum: PageTransition
crosapi.mojom.PageTransition = {
  kTyped: 0,
  kGenerated: 1,
};

// Struct: SearchResult
crosapi.mojom.SearchResult = class {
  constructor(values = {}) {
    this.destination_url@2 = values.destination_url@2 !== undefined ? values.destination_url@2 : 0;
    this.metrics_type@20 = values.metrics_type@20 !== undefined ? values.metrics_type@20 : false;
    this.omnibox_type@5 = values.omnibox_type@5 !== undefined ? values.omnibox_type@5 : null;
    this.page_transition@15 = values.page_transition@15 !== undefined ? values.page_transition@15 : null;
    this.image_url@7 = values.image_url@7 !== undefined ? values.image_url@7 : null;
    this.receiver@21 = values.receiver@21 !== undefined ? values.receiver@21 : null;
    this.contents@9 = values.contents@9 !== undefined ? values.contents@9 : "";
    this.additional_contents@10 = values.additional_contents@10 !== undefined ? values.additional_contents@10 : "";
    this.description@11 = values.description@11 !== undefined ? values.description@11 : "";
    this.additional_description@12 = values.additional_description@12 !== undefined ? values.additional_description@12 : "";
    this.kUnset = values.kUnset !== undefined ? values.kUnset : false;
  }
};

// Interface: SearchResultsPublisher
crosapi.mojom.SearchResultsPublisherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.SearchResultsPublisher';
  }

  0(status, result) {
    // Method: 0
    // Call: 0(status, result)
  }

};

crosapi.mojom.SearchResultsPublisherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SearchController
crosapi.mojom.SearchControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.SearchController';
  }

  0(query) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(query)
      resolve({});
    });
  }

};

crosapi.mojom.SearchControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SearchResultConsumer
crosapi.mojom.SearchResultConsumerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.SearchResultConsumer';
  }

  0(favicon) {
    // Method: 0
    // Call: 0(favicon)
  }

};

crosapi.mojom.SearchResultConsumerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
