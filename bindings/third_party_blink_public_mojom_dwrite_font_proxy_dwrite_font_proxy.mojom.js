// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dwrite_font_proxy/dwrite_font_proxy.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: DWriteStringPair
blink.mojom.DWriteStringPair = class {
  constructor(values = {}) {
    this.second = values.second !== undefined ? values.second : "";
  }
};

// Struct: DWriteFontStyle
blink.mojom.DWriteFontStyle = class {
  constructor(values = {}) {
    this.font_stretch = values.font_stretch !== undefined ? values.font_stretch : 0;
  }
};

// Struct: MapCharactersResult
blink.mojom.MapCharactersResult = class {
  constructor(values = {}) {
    this.font_style = values.font_style !== undefined ? values.font_style : 0;
  }
};

// Interface: DWriteFontProxy
blink.mojom.DWriteFontProxyPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DWriteFontProxy';
  }

  findFamily(family_name) {
    // Method: FindFamily
    return new Promise((resolve) => {
      // Call: FindFamily(family_name)
      resolve({});
    });
  }

  getFamilyCount() {
    // Method: GetFamilyCount
    return new Promise((resolve) => {
      // Call: GetFamilyCount()
      resolve({});
    });
  }

  getFamilyNames(family_index) {
    // Method: GetFamilyNames
    return new Promise((resolve) => {
      // Call: GetFamilyNames(family_index)
      resolve({});
    });
  }

  getFontFileHandles(family_index) {
    // Method: GetFontFileHandles
    return new Promise((resolve) => {
      // Call: GetFontFileHandles(family_index)
      resolve({});
    });
  }

  matchUniqueFont(font_unique_name) {
    // Method: MatchUniqueFont
    return new Promise((resolve) => {
      // Call: MatchUniqueFont(font_unique_name)
      resolve({});
    });
  }

  mapCharacters(text, font_style, locale_name, reading_direction, base_family_name) {
    // Method: MapCharacters
    return new Promise((resolve) => {
      // Call: MapCharacters(text, font_style, locale_name, reading_direction, base_family_name)
      resolve({});
    });
  }

};

blink.mojom.DWriteFontProxyRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
