// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/customize_chrome/wallpaper_search/wallpaper_search.mojom
// Module: side_panel.customize_chrome.mojom

'use strict';

// Module namespace
var side_panel = side_panel || {};
side_panel.customize_chrome = side_panel.customize_chrome || {};
side_panel.customize_chrome.mojom = side_panel.customize_chrome.mojom || {};


// Enum: DescriptorDName
side_panel.customize_chrome.mojom.DescriptorDName = {
  kYellow: 0,
};

// Enum: WallpaperSearchStatus
side_panel.customize_chrome.mojom.WallpaperSearchStatus = {
  kOk: 0,
  not: 1,
};

// Enum: UserFeedback
side_panel.customize_chrome.mojom.UserFeedback = {
  kUnspecified: 0,
  kThumbsUp: 1,
  kThumbsDown: 2,
};

// Struct: KeyLabel
side_panel.customize_chrome.mojom.KeyLabel = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: Group
side_panel.customize_chrome.mojom.Group = class {
  constructor(values = {}) {
    this.descriptor_as = values.descriptor_as !== undefined ? values.descriptor_as : "";
  }
};

// Struct: DescriptorB
side_panel.customize_chrome.mojom.DescriptorB = class {
  constructor(values = {}) {
    this.image_path = values.image_path !== undefined ? values.image_path : "";
  }
};

// Struct: Descriptors
side_panel.customize_chrome.mojom.Descriptors = class {
  constructor(values = {}) {
    this.descriptor_c = values.descriptor_c !== undefined ? values.descriptor_c : [];
  }
};

// Struct: Inspiration
side_panel.customize_chrome.mojom.Inspiration = class {
  constructor(values = {}) {
    this.thumbnail_url = values.thumbnail_url !== undefined ? values.thumbnail_url : "";
  }
};

// Struct: InspirationDescriptors
side_panel.customize_chrome.mojom.InspirationDescriptors = class {
  constructor(values = {}) {
    this.color = values.color !== undefined ? values.color : null;
  }
};

// Struct: InspirationGroup
side_panel.customize_chrome.mojom.InspirationGroup = class {
  constructor(values = {}) {
    this.inspirations = values.inspirations !== undefined ? values.inspirations : [];
  }
};

// Struct: WallpaperSearchResult
side_panel.customize_chrome.mojom.WallpaperSearchResult = class {
  constructor(values = {}) {
    this.descriptors = values.descriptors !== undefined ? values.descriptors : "";
  }
};

// Struct: ResultDescriptors
side_panel.customize_chrome.mojom.ResultDescriptors = class {
  constructor(values = {}) {
    this.color = values.color !== undefined ? values.color : "";
  }
};

// Interface: WallpaperSearchHandlerFactory
side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory';
  }

  createWallpaperSearchHandler(client, handler) {
    // Method: CreateWallpaperSearchHandler
    // Call: CreateWallpaperSearchHandler(client, handler)
  }

};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WallpaperSearchHandler
side_panel.customize_chrome.mojom.WallpaperSearchHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'side_panel.customize_chrome.mojom.WallpaperSearchHandler';
  }

  getDescriptors() {
    // Method: GetDescriptors
    return new Promise((resolve) => {
      // Call: GetDescriptors()
      resolve({});
    });
  }

  getInspirations() {
    // Method: GetInspirations
    return new Promise((resolve) => {
      // Call: GetInspirations()
      resolve({});
    });
  }

  getWallpaperSearchResults(result_descriptors) {
    // Method: GetWallpaperSearchResults
    return new Promise((resolve) => {
      // Call: GetWallpaperSearchResults(result_descriptors)
      resolve({});
    });
  }

  setResultRenderTime(result_ids, time) {
    // Method: SetResultRenderTime
    // Call: SetResultRenderTime(result_ids, time)
  }

  setBackgroundToHistoryImage(result_id, descriptors) {
    // Method: SetBackgroundToHistoryImage
    // Call: SetBackgroundToHistoryImage(result_id, descriptors)
  }

  setBackgroundToInspirationImage(id, background_url) {
    // Method: SetBackgroundToInspirationImage
    // Call: SetBackgroundToInspirationImage(id, background_url)
  }

  setBackgroundToWallpaperSearchResult(result_id, time, descriptors) {
    // Method: SetBackgroundToWallpaperSearchResult
    // Call: SetBackgroundToWallpaperSearchResult(result_id, time, descriptors)
  }

  updateHistory() {
    // Method: UpdateHistory
    // Call: UpdateHistory()
  }

  setUserFeedback(selected_option) {
    // Method: SetUserFeedback
    // Call: SetUserFeedback(selected_option)
  }

  openHelpArticle() {
    // Method: OpenHelpArticle
    // Call: OpenHelpArticle()
  }

  launchHatsSurvey() {
    // Method: LaunchHatsSurvey
    // Call: LaunchHatsSurvey()
  }

};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WallpaperSearchClient
side_panel.customize_chrome.mojom.WallpaperSearchClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'side_panel.customize_chrome.mojom.WallpaperSearchClient';
  }

  setHistory(history) {
    // Method: SetHistory
    // Call: SetHistory(history)
  }

};

side_panel.customize_chrome.mojom.WallpaperSearchClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
