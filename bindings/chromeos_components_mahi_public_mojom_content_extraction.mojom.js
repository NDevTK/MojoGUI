// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/mahi/public/mojom/content_extraction.mojom
// Module: mahi.mojom

'use strict';

// Module namespace
var mahi = mahi || {};
mahi.mojom = mahi.mojom || {};


// Enum: ResponseStatus
mahi.mojom.ResponseStatus = {
};

// Struct: ExtractionMethods
mahi.mojom.ExtractionMethods = class {
  constructor(values = {}) {
    this.use_screen2x = values.use_screen2x !== undefined ? values.use_screen2x : false;
  }
};

// Struct: ExtractionRequest
mahi.mojom.ExtractionRequest = class {
  constructor(values = {}) {
  }
};

// Struct: ExtractionResponse
mahi.mojom.ExtractionResponse = class {
  constructor(values = {}) {
  }
};

// Struct: ContentSizeResponse
mahi.mojom.ContentSizeResponse = class {
  constructor(values = {}) {
  }
};

// Interface: ContentExtractionService
mahi.mojom.ContentExtractionServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mahi.mojom.ContentExtractionService';
  }

};

mahi.mojom.ContentExtractionServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ContentExtractionServiceFactory
mahi.mojom.ContentExtractionServiceFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mahi.mojom.ContentExtractionServiceFactory';
  }

};

mahi.mojom.ContentExtractionServiceFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
