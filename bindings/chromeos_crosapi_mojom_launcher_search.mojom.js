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
    this.kUnset = values.kUnset !== undefined ? values.kUnset : false;
  }
};

// Interface: SearchResultsPublisher
crosapi.mojom.SearchResultsPublisherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.SearchResultsPublisher';
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

};

crosapi.mojom.SearchResultConsumerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
