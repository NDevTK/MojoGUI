// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/android_font_lookup/android_font_lookup.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: AndroidFontLookup
blink.mojom.AndroidFontLookupPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AndroidFontLookup';
  }

  getUniqueNameLookupTable() {
    // Method: GetUniqueNameLookupTable
    return new Promise((resolve) => {
      // Call: GetUniqueNameLookupTable()
      resolve({});
    });
  }

  matchLocalFontByUniqueName(font_unique_name) {
    // Method: MatchLocalFontByUniqueName
    return new Promise((resolve) => {
      // Call: MatchLocalFontByUniqueName(font_unique_name)
      resolve({});
    });
  }

  fetchAllFontFiles() {
    // Method: FetchAllFontFiles
    return new Promise((resolve) => {
      // Call: FetchAllFontFiles()
      resolve({});
    });
  }

};

blink.mojom.AndroidFontLookupRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
