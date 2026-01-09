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
};

// Enum: PackState
ash.language.mojom.PackState = {
  NOT_INSTALLED: 0,
  INSTALLING: 1,
  INSTALLED: 2,
  D: 3,
};

// Enum: ErrorCode
ash.language.mojom.ErrorCode = {
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

};

ash.language.mojom.LanguagePacksRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
