// Auto-generated MojoJS binding
// Source: chromium_src/components/services/font_data/public/mojom/font_data_service.mojom
// Module: font_data_service.mojom

'use strict';

// Module namespace
var font_data_service = font_data_service || {};
font_data_service.mojom = font_data_service.mojom || {};


// Enum: TypefaceSlant
font_data_service.mojom.TypefaceSlant = {
};

// Struct: TypefaceStyle
font_data_service.mojom.TypefaceStyle = class {
  constructor(values = {}) {
    this.slant = values.slant !== undefined ? values.slant : 0;
  }
};

// Struct: Coordinate
font_data_service.mojom.Coordinate = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Struct: VariationPosition
font_data_service.mojom.VariationPosition = class {
  constructor(values = {}) {
    this.coordinateCount = values.coordinateCount !== undefined ? values.coordinateCount : 0;
  }
};

// Struct: TypefaceFile
font_data_service.mojom.TypefaceFile = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : 0;
  }
};

// Struct: MatchFamilyNameResult
font_data_service.mojom.MatchFamilyNameResult = class {
  constructor(values = {}) {
    this.typeface_data = values.typeface_data !== undefined ? values.typeface_data : null;
    this.variation_position = values.variation_position !== undefined ? values.variation_position : 0;
  }
};

// Interface: FontDataService
font_data_service.mojom.FontDataServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'font_data_service.mojom.FontDataService';
  }

  matchFamilyName(family_name, style) {
    // Method: MatchFamilyName
    return new Promise((resolve) => {
      // Call: MatchFamilyName(family_name, style)
      resolve({});
    });
  }

  matchFamilyNameCharacter(family_name, style, bcp47s, character) {
    // Method: MatchFamilyNameCharacter
    return new Promise((resolve) => {
      // Call: MatchFamilyNameCharacter(family_name, style, bcp47s, character)
      resolve({});
    });
  }

  getAllFamilyNames() {
    // Method: GetAllFamilyNames
    return new Promise((resolve) => {
      // Call: GetAllFamilyNames()
      resolve({});
    });
  }

  legacyMakeTypeface(family_name, style) {
    // Method: LegacyMakeTypeface
    return new Promise((resolve) => {
      // Call: LegacyMakeTypeface(family_name, style)
      resolve({});
    });
  }

};

font_data_service.mojom.FontDataServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
