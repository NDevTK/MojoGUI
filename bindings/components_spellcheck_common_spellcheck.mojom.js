// Auto-generated MojoJS binding
// Source: chromium_src/components/spellcheck/common/spellcheck.mojom
// Module: spellcheck.mojom

'use strict';

// Module namespace
var spellcheck = spellcheck || {};
spellcheck.mojom = spellcheck.mojom || {};


// Enum: Decoration
spellcheck.mojom.Decoration = {
};

// Struct: SpellCheckBDictLanguage
spellcheck.mojom.SpellCheckBDictLanguage = class {
  constructor(values = {}) {
    this.language = values.language !== undefined ? values.language : "";
  }
};

// Struct: SpellCheckResult
spellcheck.mojom.SpellCheckResult = class {
  constructor(values = {}) {
    this.should_hide_suggestion_menu = values.should_hide_suggestion_menu !== undefined ? values.should_hide_suggestion_menu : 0;
  }
};

// Interface: SpellChecker
spellcheck.mojom.SpellCheckerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'spellcheck.mojom.SpellChecker';
  }

  initialize(dictionaries, custom_words, enable) {
    // Method: Initialize
    // Call: Initialize(dictionaries, custom_words, enable)
  }

  customDictionaryChanged(words_added, words_removed) {
    // Method: CustomDictionaryChanged
    // Call: CustomDictionaryChanged(words_added, words_removed)
  }

};

spellcheck.mojom.SpellCheckerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SpellCheckInitializationHost
spellcheck.mojom.SpellCheckInitializationHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'spellcheck.mojom.SpellCheckInitializationHost';
  }

  requestDictionary() {
    // Method: RequestDictionary
    // Call: RequestDictionary()
  }

};

spellcheck.mojom.SpellCheckInitializationHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SpellCheckHost
spellcheck.mojom.SpellCheckHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'spellcheck.mojom.SpellCheckHost';
  }

  notifyChecked(word, misspelled) {
    // Method: NotifyChecked
    // Call: NotifyChecked(word, misspelled)
  }

  callSpellingService(text) {
    // Method: CallSpellingService
    return new Promise((resolve) => {
      // Call: CallSpellingService(text)
      resolve({});
    });
  }

  requestTextCheck(text, spelling_markers) {
    // Method: RequestTextCheck
    return new Promise((resolve) => {
      // Call: RequestTextCheck(text, spelling_markers)
      resolve({});
    });
  }

  disconnectSessionBridge() {
    // Method: DisconnectSessionBridge
    // Call: DisconnectSessionBridge()
  }

  checkSpelling(word) {
    // Method: CheckSpelling
    return new Promise((resolve) => {
      // Call: CheckSpelling(word)
      resolve({});
    });
  }

  fillSuggestionList(word) {
    // Method: FillSuggestionList
    return new Promise((resolve) => {
      // Call: FillSuggestionList(word)
      resolve({});
    });
  }

  initializeDictionaries() {
    // Method: InitializeDictionaries
    return new Promise((resolve) => {
      // Call: InitializeDictionaries()
      resolve({});
    });
  }

};

spellcheck.mojom.SpellCheckHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
