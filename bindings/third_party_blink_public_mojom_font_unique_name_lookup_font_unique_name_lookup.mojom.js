// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/font_unique_name_lookup/font_unique_name_lookup.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FontUniqueNameLookup
blink.mojom.FontUniqueNameLookupPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FontUniqueNameLookup';
  }

  getUniqueNameLookupTableIfAvailable() {
    // Method: GetUniqueNameLookupTableIfAvailable
    return new Promise((resolve) => {
      // Call: GetUniqueNameLookupTableIfAvailable()
      resolve({});
    });
  }

  getUniqueNameLookupTable() {
    // Method: GetUniqueNameLookupTable
    return new Promise((resolve) => {
      // Call: GetUniqueNameLookupTable()
      resolve({});
    });
  }

};

blink.mojom.FontUniqueNameLookupRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
