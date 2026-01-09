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
  }
};

// Struct: App
coral.mojom.App = class {
  constructor(values = {}) {
    this.ids = values.ids !== undefined ? values.ids : null;
  }
};

// Struct: EmbeddingOptions
coral.mojom.EmbeddingOptions = class {
  constructor(values = {}) {
    this.is = values.is !== undefined ? values.is : null;
  }
};

// Struct: ClusteringOptions
coral.mojom.ClusteringOptions = class {
  constructor(values = {}) {
  }
};

// Struct: TitleGenerationOptions
coral.mojom.TitleGenerationOptions = class {
  constructor(values = {}) {
  }
};

// Struct: Group
coral.mojom.Group = class {
  constructor(values = {}) {
    this.yet = values.yet !== undefined ? values.yet : null;
  }
};

// Struct: GroupRequest
coral.mojom.GroupRequest = class {
  constructor(values = {}) {
    this.and = values.and !== undefined ? values.and : null;
    this.high = values.high !== undefined ? values.high : null;
    this.generated = values.generated !== undefined ? values.generated : null;
    this.removed = values.removed !== undefined ? values.removed : null;
    this.a = values.a !== undefined ? values.a : null;
    this.desk = values.desk !== undefined ? values.desk : null;
    this.it = values.it !== undefined ? values.it : null;
    this.may = values.may !== undefined ? values.may : null;
  }
};

// Struct: GroupResponse
coral.mojom.GroupResponse = class {
  constructor(values = {}) {
  }
};

// Struct: CacheEmbeddingsRequest
coral.mojom.CacheEmbeddingsRequest = class {
  constructor(values = {}) {
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

};

coral.mojom.CoralServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
