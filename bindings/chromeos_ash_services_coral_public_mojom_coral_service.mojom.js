// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/coral/public/mojom/coral_service.mojom
// Module: coral.mojom

'use strict';

// Module namespace
var coral = coral || {};
coral.mojom = coral.mojom || {};


// Enum: CoralError
coral.mojom.CoralError = {
  implementations: 0,
  instead: 1,
};

// Struct: Tab
coral.mojom.Tab = class {
  constructor(values = {}) {
    this.url@1 = values.url@1 !== undefined ? values.url@1 : "";
  }
};

// Struct: App
coral.mojom.App = class {
  constructor(values = {}) {
    this.title@0 = values.title@0 !== undefined ? values.title@0 : "";
    this.ids = values.ids !== undefined ? values.ids : null;
    this.id@1 = values.id@1 !== undefined ? values.id@1 : "";
  }
};

// Struct: EmbeddingOptions
coral.mojom.EmbeddingOptions = class {
  constructor(values = {}) {
    this.is = values.is !== undefined ? values.is : null;
    this.check_safety_filter@0 = values.check_safety_filter@0 !== undefined ? values.check_safety_filter@0 : false;
  }
};

// Struct: ClusteringOptions
coral.mojom.ClusteringOptions = class {
  constructor(values = {}) {
    this.max_clusters@2 = values.max_clusters@2 !== undefined ? values.max_clusters@2 : 0;
  }
};

// Struct: TitleGenerationOptions
coral.mojom.TitleGenerationOptions = class {
  constructor(values = {}) {
    this.max_characters@0 = values.max_characters@0 !== undefined ? values.max_characters@0 : 0;
    this.language_code@1 = values.language_code@1 !== undefined ? values.language_code@1 : "";
  }
};

// Struct: Group
coral.mojom.Group = class {
  constructor(values = {}) {
    this.id@0 = values.id@0 !== undefined ? values.id@0 : null;
    this.yet = values.yet !== undefined ? values.yet : null;
    this.failed. = values.failed. !== undefined ? values.failed. : null;
    this.entities@2 = values.entities@2 !== undefined ? values.entities@2 : "";
  }
};

// Struct: GroupRequest
coral.mojom.GroupRequest = class {
  constructor(values = {}) {
    this.title_generation_options@3 = values.title_generation_options@3 !== undefined ? values.title_generation_options@3 : [];
    this.and = values.and !== undefined ? values.and : null;
    this.high = values.high !== undefined ? values.high : null;
    this.generated = values.generated !== undefined ? values.generated : null;
    this.removed = values.removed !== undefined ? values.removed : null;
    this.a = values.a !== undefined ? values.a : null;
    this.desk = values.desk !== undefined ? values.desk : null;
    this.it = values.it !== undefined ? values.it : null;
    this.Travel" = values.Travel" !== undefined ? values.Travel" : null;
    this.may = values.may !== undefined ? values.may : null;
    this.suppression_context@4 = values.suppression_context@4 !== undefined ? values.suppression_context@4 : [];
  }
};

// Struct: GroupResponse
coral.mojom.GroupResponse = class {
  constructor(values = {}) {
    this.groups@0 = values.groups@0 !== undefined ? values.groups@0 : [];
  }
};

// Struct: CacheEmbeddingsRequest
coral.mojom.CacheEmbeddingsRequest = class {
  constructor(values = {}) {
    this.embedding_options@1 = values.embedding_options@1 !== undefined ? values.embedding_options@1 : [];
  }
};

// Struct: CacheEmbeddingsResponse
coral.mojom.CacheEmbeddingsResponse = class {
  constructor(values = {}) {
  }
};

// Interface: TitleObserver
coral.mojom.TitleObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'coral.mojom.TitleObserver';
  }

  0(group_id, title) {
    // Method: 0
    // Call: 0(group_id, title)
  }

};

coral.mojom.TitleObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CoralProcessor
coral.mojom.CoralProcessorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'coral.mojom.CoralProcessor';
  }

  0(request, observer) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(request, observer)
      resolve({});
    });
  }

  1(request) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(request)
      resolve({});
    });
  }

};

coral.mojom.CoralProcessorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CoralService
coral.mojom.CoralServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'coral.mojom.CoralService';
  }

  0(request, observer) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(request, observer)
      resolve({});
    });
  }

  1(request) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(request)
      resolve({});
    });
  }

  2() {
    // Method: 2
    // Call: 2()
  }

  3(ml_service, processor, language_code) {
    // Method: 3
    // Call: 3(ml_service, processor, language_code)
  }

};

coral.mojom.CoralServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
