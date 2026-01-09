// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/quick_answers/public/mojom/spell_check.mojom
// Module: quick_answers.mojom

'use strict';

// Module namespace
var quick_answers = quick_answers || {};
quick_answers.mojom = quick_answers.mojom || {};


// Interface: SpellCheckService
quick_answers.mojom.SpellCheckServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'quick_answers.mojom.SpellCheckService';
  }

  createDictionary(dictionary_file) {
    // Method: CreateDictionary
    return new Promise((resolve) => {
      // Call: CreateDictionary(dictionary_file)
      resolve({});
    });
  }

};

quick_answers.mojom.SpellCheckServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SpellCheckDictionary
quick_answers.mojom.SpellCheckDictionaryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'quick_answers.mojom.SpellCheckDictionary';
  }

  checkSpelling(word) {
    // Method: CheckSpelling
    return new Promise((resolve) => {
      // Call: CheckSpelling(word)
      resolve({});
    });
  }

};

quick_answers.mojom.SpellCheckDictionaryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
