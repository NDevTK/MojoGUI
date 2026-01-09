// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui_browser/bookmark_bar.mojom
// Module: bookmark_bar.mojom

'use strict';

// Module namespace
var bookmark_bar = bookmark_bar || {};
bookmark_bar.mojom = bookmark_bar.mojom || {};


// Enum: BookmarkType
bookmark_bar.mojom.BookmarkType = {
  URL: 0,
  FOLDER: 1,
  BOOKMARK_BAR: 2,
  OTHER_NODE: 3,
  MOBILE: 4,
};

// Struct: BookmarkData
bookmark_bar.mojom.BookmarkData = class {
  constructor(values = {}) {
    this.page_url_for_favicon = values.page_url_for_favicon !== undefined ? values.page_url_for_favicon : 0;
  }
};

// Interface: PageHandlerFactory
bookmark_bar.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'bookmark_bar.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

bookmark_bar.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
bookmark_bar.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'bookmark_bar.mojom.PageHandler';
  }

  getBookmarkBar() {
    // Method: GetBookmarkBar
    return new Promise((resolve) => {
      // Call: GetBookmarkBar()
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  openInNewTab(node_id) {
    // Method: OpenInNewTab
    // Call: OpenInNewTab(node_id)
  }

};

bookmark_bar.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
bookmark_bar.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'bookmark_bar.mojom.Page';
  }

  bookmarkLoaded() {
    // Method: BookmarkLoaded
    // Call: BookmarkLoaded()
  }

  favIconChanged(bookmark_data) {
    // Method: FavIconChanged
    // Call: FavIconChanged(bookmark_data)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  show() {
    // Method: Show
    // Call: Show()
  }

  hide() {
    // Method: Hide
    // Call: Hide()
  }

};

bookmark_bar.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
