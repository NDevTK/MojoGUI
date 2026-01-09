// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/emoji/emoji_picker.mojom
// Module: emoji_picker.mojom

'use strict';

// Module namespace
var emoji_picker = emoji_picker || {};
emoji_picker.mojom = emoji_picker.mojom || {};


// Enum: Feature
emoji_picker.mojom.Feature = {
};

// Enum: Category
emoji_picker.mojom.Category = {
};

// Struct: EmojiVariant
emoji_picker.mojom.EmojiVariant = class {
  constructor(values = {}) {
    this.variant = values.variant !== undefined ? values.variant : "";
  }
};

// Struct: HistoryItem
emoji_picker.mojom.HistoryItem = class {
  constructor(values = {}) {
    this.timestamp = values.timestamp !== undefined ? values.timestamp : "";
  }
};

// Interface: PageHandlerFactory
emoji_picker.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'emoji_picker.mojom.PageHandlerFactory';
  }

  createPageHandler(handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(handler)
  }

};

emoji_picker.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
emoji_picker.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'emoji_picker.mojom.PageHandler';
  }

  showUI() {
    // Method: ShowUI
    // Call: ShowUI()
  }

  insertEmoji(emoji, is_variant, search_length) {
    // Method: InsertEmoji
    // Call: InsertEmoji(emoji, is_variant, search_length)
  }

  insertGif(gif) {
    // Method: InsertGif
    // Call: InsertGif(gif)
  }

  isIncognitoTextField() {
    // Method: IsIncognitoTextField
    return new Promise((resolve) => {
      // Call: IsIncognitoTextField()
      resolve({});
    });
  }

  getFeatureList() {
    // Method: GetFeatureList
    return new Promise((resolve) => {
      // Call: GetFeatureList()
      resolve({});
    });
  }

  getCategories() {
    // Method: GetCategories
    return new Promise((resolve) => {
      // Call: GetCategories()
      resolve({});
    });
  }

  getFeaturedGifs(pos) {
    // Method: GetFeaturedGifs
    return new Promise((resolve) => {
      // Call: GetFeaturedGifs(pos)
      resolve({});
    });
  }

  searchGifs(query, pos) {
    // Method: SearchGifs
    return new Promise((resolve) => {
      // Call: SearchGifs(query, pos)
      resolve({});
    });
  }

  getGifsByIds(ids) {
    // Method: GetGifsByIds
    return new Promise((resolve) => {
      // Call: GetGifsByIds(ids)
      resolve({});
    });
  }

  onUiFullyLoaded() {
    // Method: OnUiFullyLoaded
    // Call: OnUiFullyLoaded()
  }

  getInitialCategory() {
    // Method: GetInitialCategory
    return new Promise((resolve) => {
      // Call: GetInitialCategory()
      resolve({});
    });
  }

  getInitialQuery() {
    // Method: GetInitialQuery
    return new Promise((resolve) => {
      // Call: GetInitialQuery()
      resolve({});
    });
  }

  updateHistoryInPrefs(category, history) {
    // Method: UpdateHistoryInPrefs
    // Call: UpdateHistoryInPrefs(category, history)
  }

  updatePreferredVariantsInPrefs(preferred_variants) {
    // Method: UpdatePreferredVariantsInPrefs
    // Call: UpdatePreferredVariantsInPrefs(preferred_variants)
  }

  getHistoryFromPrefs(category) {
    // Method: GetHistoryFromPrefs
    return new Promise((resolve) => {
      // Call: GetHistoryFromPrefs(category)
      resolve({});
    });
  }

};

emoji_picker.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
