// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/launcher_search.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: SearchStatus
crosapi.mojom.SearchStatus = {
};

// Enum: SearchResultType
crosapi.mojom.SearchResultType = {
};

// Enum: OptionalBool
crosapi.mojom.OptionalBool = {
};

// Enum: OmniboxType
crosapi.mojom.OmniboxType = {
};

// Enum: MetricsType
crosapi.mojom.MetricsType = {
};

// Enum: AnswerType
crosapi.mojom.AnswerType = {
};

// Enum: TextType
crosapi.mojom.TextType = {
};

// Enum: PageTransition
crosapi.mojom.PageTransition = {
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
