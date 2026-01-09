// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/structured_headers_parser.mojom
// Module: data_decoder.mojom

'use strict';

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};


// Interface: StructuredHeadersParser
data_decoder.mojom.StructuredHeadersParserPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'data_decoder.mojom.StructuredHeadersParser';
  }

  parseItem(header) {
    // Method: ParseItem
    return new Promise((resolve) => {
      // Call: ParseItem(header)
      resolve({});
    });
  }

  parseList(header) {
    // Method: ParseList
    return new Promise((resolve) => {
      // Call: ParseList(header)
      resolve({});
    });
  }

  parseDictionary(header) {
    // Method: ParseDictionary
    return new Promise((resolve) => {
      // Call: ParseDictionary(header)
      resolve({});
    });
  }

};

data_decoder.mojom.StructuredHeadersParserRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
