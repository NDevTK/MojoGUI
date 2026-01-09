// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/mahi/public/mojom/content_extraction.mojom
// Module: mahi.mojom

'use strict';

// Module namespace
var mahi = mahi || {};
mahi.mojom = mahi.mojom || {};


// Enum: ResponseStatus
mahi.mojom.ResponseStatus = {
  kSuccess: 0,
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
    this.deprecated_ukm_source_id@0 = values.deprecated_ukm_source_id@0 !== undefined ? values.deprecated_ukm_source_id@0 : 0;
    this.updates@3 = values.updates@3 !== undefined ? values.updates@3 : [];
  }
};

// Struct: ExtractionResponse
mahi.mojom.ExtractionResponse = class {
  constructor(values = {}) {
    this.status@1 = values.status@1 !== undefined ? values.status@1 : "";
  }
};

// Struct: ContentSizeResponse
mahi.mojom.ContentSizeResponse = class {
  constructor(values = {}) {
    this.status@1 = values.status@1 !== undefined ? values.status@1 : 0;
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
