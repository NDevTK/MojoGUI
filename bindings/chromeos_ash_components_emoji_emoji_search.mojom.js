// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/emoji/emoji_search.mojom
// Module: emoji_search.mojom

'use strict';

// Module namespace
var emoji_search = emoji_search || {};
emoji_search.mojom = emoji_search.mojom || {};


// Struct: SearchResults
emoji_search.mojom.SearchResults = class {
  constructor(values = {}) {
    this.results = values.results !== undefined ? values.results : "";
  }
};

// Interface: EmojiSearch
emoji_search.mojom.EmojiSearchPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'emoji_search.mojom.EmojiSearch';
  }

  searchEmoji(query, language_codes) {
    // Method: SearchEmoji
    return new Promise((resolve) => {
      // Call: SearchEmoji(query, language_codes)
      resolve({});
    });
  }

  loadEmojiLanguages(language_codes) {
    // Method: LoadEmojiLanguages
    // Call: LoadEmojiLanguages(language_codes)
  }

};

emoji_search.mojom.EmojiSearchRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
