// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/cbor_parser.mojom
// Module: data_decoder.mojom

'use strict';

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};


// Interface: CborParser
data_decoder.mojom.CborParserPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'data_decoder.mojom.CborParser';
  }

  parse(cbor) {
    // Method: Parse
    return new Promise((resolve) => {
      // Call: Parse(cbor)
      resolve({});
    });
  }

};

data_decoder.mojom.CborParserRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
