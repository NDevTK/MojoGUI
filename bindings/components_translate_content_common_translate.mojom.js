// Auto-generated MojoJS binding
// Source: chromium_src/components/translate/content/common/translate.mojom
// Module: translate.mojom

'use strict';

// Module namespace
var translate = translate || {};
translate.mojom = translate.mojom || {};


// Enum: TranslateError
translate.mojom.TranslateError = {
  NONE: 0,
  NETWORK: 1,
  INITIALIZATION_ERROR: 2,
  UNKNOWN_LANGUAGE: 3,
  UNSUPPORTED_LANGUAGE: 4,
  IDENTICAL_LANGUAGES: 5,
  TRANSLATION_ERROR: 6,
  TRANSLATION_TIMEOUT: 7,
  UNEXPECTED_SCRIPT_ERROR: 8,
  BAD_ORIGIN: 9,
  SCRIPT_LOAD_ERROR: 10,
  TRANSLATE_ERROR_MAX: 11,
};

// Struct: LanguageDetectionDetails
translate.mojom.LanguageDetectionDetails = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : null;
    this.language = values.language !== undefined ? values.language : null;
    this.adopted_language = values.adopted_language !== undefined ? values.adopted_language : "";
    this.has_notranslate = values.has_notranslate !== undefined ? values.has_notranslate : false;
    this.model_detected_language = values.model_detected_language !== undefined ? values.model_detected_language : 0;
    this.contents = values.contents !== undefined ? values.contents : false;
    this.detection_model_version = values.detection_model_version !== undefined ? values.detection_model_version : 0;
  }
};

// Interface: TranslateAgent
translate.mojom.TranslateAgentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'translate.mojom.TranslateAgent';
  }

  translateFrame(translate_script, source_lang, target_lang) {
    // Method: TranslateFrame
    return new Promise((resolve) => {
      // Call: TranslateFrame(translate_script, source_lang, target_lang)
      resolve({});
    });
  }

  revertTranslation() {
    // Method: RevertTranslation
    // Call: RevertTranslation()
  }

};

translate.mojom.TranslateAgentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ContentTranslateDriver
translate.mojom.ContentTranslateDriverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'translate.mojom.ContentTranslateDriver';
  }

  registerPage(translate_agent, details, translation_critiera_met) {
    // Method: RegisterPage
    // Call: RegisterPage(translate_agent, details, translation_critiera_met)
  }

};

translate.mojom.ContentTranslateDriverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
