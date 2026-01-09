// Auto-generated MojoJS binding
// Source: chromium_src/components/web_package/mojom/web_bundle_parser.mojom
// Module: web_package.mojom

'use strict';

// Module namespace
var web_package = web_package || {};
web_package.mojom = web_package.mojom || {};


// Enum: BundleParseErrorType
web_package.mojom.BundleParseErrorType = {
};

// Enum: BundleFormatVersion
web_package.mojom.BundleFormatVersion = {
};

// Struct: BundleIntegrityBlockParseError
web_package.mojom.BundleIntegrityBlockParseError = class {
  constructor(values = {}) {
    this.message = values.message !== undefined ? values.message : "";
  }
};

// Struct: BundleMetadataParseError
web_package.mojom.BundleMetadataParseError = class {
  constructor(values = {}) {
    this.message = values.message !== undefined ? values.message : "";
  }
};

// Struct: BundleResponseParseError
web_package.mojom.BundleResponseParseError = class {
  constructor(values = {}) {
    this.message = values.message !== undefined ? values.message : "";
  }
};

// Struct: BundleIntegrityBlockAttributes
web_package.mojom.BundleIntegrityBlockAttributes = class {
  constructor(values = {}) {
    this.cbor = values.cbor !== undefined ? values.cbor : 0;
  }
};

// Struct: BundleIntegrityBlock
web_package.mojom.BundleIntegrityBlock = class {
  constructor(values = {}) {
    this.attributes = values.attributes !== undefined ? values.attributes : 0;
  }
};

// Struct: Ed25519PublicKey
web_package.mojom.Ed25519PublicKey = class {
  constructor(values = {}) {
    this.bytes = values.bytes !== undefined ? values.bytes : 0;
  }
};

// Struct: Ed25519Signature
web_package.mojom.Ed25519Signature = class {
  constructor(values = {}) {
    this.bytes = values.bytes !== undefined ? values.bytes : 0;
  }
};

// Struct: SignatureInfoEd25519
web_package.mojom.SignatureInfoEd25519 = class {
  constructor(values = {}) {
    this.signature = values.signature !== undefined ? values.signature : null;
  }
};

// Struct: EcdsaP256PublicKey
web_package.mojom.EcdsaP256PublicKey = class {
  constructor(values = {}) {
    this.bytes = values.bytes !== undefined ? values.bytes : 0;
  }
};

// Struct: EcdsaP256SHA256Signature
web_package.mojom.EcdsaP256SHA256Signature = class {
  constructor(values = {}) {
    this.bytes = values.bytes !== undefined ? values.bytes : 0;
  }
};

// Struct: SignatureInfoEcdsaP256SHA256
web_package.mojom.SignatureInfoEcdsaP256SHA256 = class {
  constructor(values = {}) {
    this.signature = values.signature !== undefined ? values.signature : null;
  }
};

// Struct: SignatureInfoUnknown
web_package.mojom.SignatureInfoUnknown = class {
  constructor(values = {}) {
  }
};

// Struct: BundleIntegrityBlockSignatureStackEntry
web_package.mojom.BundleIntegrityBlockSignatureStackEntry = class {
  constructor(values = {}) {
    this.signature_info = values.signature_info !== undefined ? values.signature_info : 0;
  }
};

// Struct: BundleMetadata
web_package.mojom.BundleMetadata = class {
  constructor(values = {}) {
    this.requests = values.requests !== undefined ? values.requests : {};
  }
};

// Struct: BundleResponseLocation
web_package.mojom.BundleResponseLocation = class {
  constructor(values = {}) {
    this.length = values.length !== undefined ? values.length : 0;
  }
};

// Struct: BundleResponse
web_package.mojom.BundleResponse = class {
  constructor(values = {}) {
    this.payload_length = values.payload_length !== undefined ? values.payload_length : 0;
  }
};

// Interface: WebBundleParserFactory
web_package.mojom.WebBundleParserFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'web_package.mojom.WebBundleParserFactory';
  }

  getParserForDataSource(receiver, base_url, data_source) {
    // Method: GetParserForDataSource
    // Call: GetParserForDataSource(receiver, base_url, data_source)
  }

  bindFileDataSource(data_source, file) {
    // Method: BindFileDataSource
    // Call: BindFileDataSource(data_source, file)
  }

};

web_package.mojom.WebBundleParserFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebBundleParser
web_package.mojom.WebBundleParserPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'web_package.mojom.WebBundleParser';
  }

  parseIntegrityBlock() {
    // Method: ParseIntegrityBlock
    return new Promise((resolve) => {
      // Call: ParseIntegrityBlock()
      resolve({});
    });
  }

  parseMetadata(offset) {
    // Method: ParseMetadata
    return new Promise((resolve) => {
      // Call: ParseMetadata(offset)
      resolve({});
    });
  }

  parseResponse(response_offset, response_length) {
    // Method: ParseResponse
    return new Promise((resolve) => {
      // Call: ParseResponse(response_offset, response_length)
      resolve({});
    });
  }

  close() {
    // Method: Close
    // Call: Close()
  }

};

web_package.mojom.WebBundleParserRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BundleDataSource
web_package.mojom.BundleDataSourcePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'web_package.mojom.BundleDataSource';
  }

  read(offset, length) {
    // Method: Read
    return new Promise((resolve) => {
      // Call: Read(offset, length)
      resolve({});
    });
  }

  length() {
    // Method: Length
    return new Promise((resolve) => {
      // Call: Length()
      resolve({});
    });
  }

  isRandomAccessContext() {
    // Method: IsRandomAccessContext
    return new Promise((resolve) => {
      // Call: IsRandomAccessContext()
      resolve({});
    });
  }

  close() {
    // Method: Close
    // Call: Close()
  }

};

web_package.mojom.BundleDataSourceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
