// Auto-generated MojoJS binding
// Source: chromium_src/components/services/font/public/mojom/font_service.mojom
// Module: font_service.mojom

'use strict';

// Module namespace
var font_service = font_service || {};
font_service.mojom = font_service.mojom || {};


// Enum: TypefaceSlant
font_service.mojom.TypefaceSlant = {
  ROMAN: 0,
  ITALIC: 1,
  OBLIQUE: 2,
};

// Enum: RenderStyleSwitch
font_service.mojom.RenderStyleSwitch = {
  OFF: 0,
  ON: 1,
  NO_PREFERENCE: 2,
};

// Struct: TypefaceStyle
font_service.mojom.TypefaceStyle = class {
  constructor(values = {}) {
    this.slant = values.slant !== undefined ? values.slant : 0;
  }
};

// Struct: FontIdentity
font_service.mojom.FontIdentity = class {
  constructor(values = {}) {
    this.ttc_index = values.ttc_index !== undefined ? values.ttc_index : 0;
    this.blink = values.blink !== undefined ? values.blink : null;
    this.filepath = values.filepath !== undefined ? values.filepath : null;
  }
};

// Struct: FontRenderStyle
font_service.mojom.FontRenderStyle = class {
  constructor(values = {}) {
    this.hint_style = values.hint_style !== undefined ? values.hint_style : 0;
    this.use_subpixel_positioning = values.use_subpixel_positioning !== undefined ? values.use_subpixel_positioning : null;
  }
};

// Interface: FontService
font_service.mojom.FontServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'font_service.mojom.FontService';
  }

  matchFamilyName(family_name, style) {
    // Method: MatchFamilyName
    return new Promise((resolve) => {
      // Call: MatchFamilyName(family_name, style)
      resolve({});
    });
  }

  openStream(id_number) {
    // Method: OpenStream
    return new Promise((resolve) => {
      // Call: OpenStream(id_number)
      resolve({});
    });
  }

  fallbackFontForCharacter(character, locale) {
    // Method: FallbackFontForCharacter
    return new Promise((resolve) => {
      // Call: FallbackFontForCharacter(character, locale)
      resolve({});
    });
  }

  fontRenderStyleForStrike(family, size, is_italic, is_bold, device_scale_factor) {
    // Method: FontRenderStyleForStrike
    return new Promise((resolve) => {
      // Call: FontRenderStyleForStrike(family, size, is_italic, is_bold, device_scale_factor)
      resolve({});
    });
  }

  matchFontByPostscriptNameOrFullFontName(postscript_name_or_full_font_name) {
    // Method: MatchFontByPostscriptNameOrFullFontName
    return new Promise((resolve) => {
      // Call: MatchFontByPostscriptNameOrFullFontName(postscript_name_or_full_font_name)
      resolve({});
    });
  }

  listFamilies() {
    // Method: ListFamilies
    return new Promise((resolve) => {
      // Call: ListFamilies()
      resolve({});
    });
  }

  matchFontWithFallback(family, is_bold, is_italic, charset, fallback_family_type) {
    // Method: MatchFontWithFallback
    return new Promise((resolve) => {
      // Call: MatchFontWithFallback(family, is_bold, is_italic, charset, fallback_family_type)
      resolve({});
    });
  }

};

font_service.mojom.FontServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
