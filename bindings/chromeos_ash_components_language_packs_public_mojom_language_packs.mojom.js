// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/language_packs/public/mojom/language_packs.mojom
// Module: ash.language.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.language = ash.language || {};
ash.language.mojom = ash.language.mojom || {};


// Enum: FeatureId
ash.language.mojom.FeatureId = {
  not: 0,
};

// Enum: PackState
ash.language.mojom.PackState = {
  NOT_INSTALLED: 0,
  INSTALLING: 1,
  INSTALLED: 2,
  Default: 3,
};

// Enum: ErrorCode
ash.language.mojom.ErrorCode = {
  kNone: 0,
  kOther: 1,
  kWrongId: 2,
  kNeedReboot: 3,
  kAllocation: 4,
};

// Struct: LanguagePackInfo
ash.language.mojom.LanguagePackInfo = class {
  constructor(values = {}) {
    this.locale = values.locale !== undefined ? values.locale : "";
  }
};

// Struct: BasePackInfo
ash.language.mojom.BasePackInfo = class {
  constructor(values = {}) {
    this.error = values.error !== undefined ? values.error : "";
  }
};

// Interface: LanguagePacksObserver
ash.language.mojom.LanguagePacksObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.language.mojom.LanguagePacksObserver';
  }

  0(info) {
    // Method: 0
    // Call: 0(info)
  }

};

ash.language.mojom.LanguagePacksObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LanguagePacks
ash.language.mojom.LanguagePacksPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.language.mojom.LanguagePacks';
  }

  feature(handwriting) {
    // Method: feature
    // Call: feature(handwriting)
  }

  0(feature_id, language) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(feature_id, language)
      resolve({});
    });
  }

  feature(handwriting) {
    // Method: feature
    // Call: feature(handwriting)
  }

  1(feature_id, language) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(feature_id, language)
      resolve({});
    });
  }

  feature(handwriting) {
    // Method: feature
    // Call: feature(handwriting)
  }

  2(feature_id) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(feature_id)
      resolve({});
    });
  }

  feature(handwriting) {
    // Method: feature
    // Call: feature(handwriting)
  }

  3(feature_id, language) {
    // Method: 3
    // Call: 3(feature_id, language)
  }

  4(observer) {
    // Method: 4
    // Call: 4(observer)
  }

};

ash.language.mojom.LanguagePacksRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
