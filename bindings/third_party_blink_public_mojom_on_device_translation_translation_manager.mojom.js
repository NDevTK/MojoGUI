// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/on_device_translation/translation_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: CanCreateTranslatorResult
blink.mojom.CanCreateTranslatorResult = {
  but: 0,
  but: 1,
  because: 2,
  because: 3,
  because: 4,
  because: 5,
};

// Enum: CreateTranslatorError
blink.mojom.CreateTranslatorError = {
  because: 0,
  because: 1,
  because: 2,
  because: 3,
  because: 4,
  because: 5,
};

// Struct: TranslatorLanguageCode
blink.mojom.TranslatorLanguageCode = class {
  constructor(values = {}) {
    this.code = values.code !== undefined ? values.code : "";
  }
};

// Struct: TranslatorCreateOptions
blink.mojom.TranslatorCreateOptions = class {
  constructor(values = {}) {
    this.observer_remote = values.observer_remote !== undefined ? values.observer_remote : null;
  }
};

// Interface: TranslationManagerCreateTranslatorClient
blink.mojom.TranslationManagerCreateTranslatorClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.TranslationManagerCreateTranslatorClient';
  }

  createTranslator() {
    // Method: CreateTranslator
    // Call: CreateTranslator()
  }

  onResult(result, source_lang, target_lang) {
    // Method: OnResult
    // Call: OnResult(result, source_lang, target_lang)
  }

};

blink.mojom.TranslationManagerCreateTranslatorClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TranslationManager
blink.mojom.TranslationManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.TranslationManager';
  }

  createTranslator(client, options) {
    // Method: CreateTranslator
    // Call: CreateTranslator(client, options)
  }

  translationAvailable(source_lang, target_lang) {
    // Method: TranslationAvailable
    return new Promise((resolve) => {
      // Call: TranslationAvailable(source_lang, target_lang)
      resolve({});
    });
  }

};

blink.mojom.TranslationManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
