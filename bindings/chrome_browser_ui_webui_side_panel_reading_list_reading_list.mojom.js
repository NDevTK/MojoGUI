// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/reading_list/reading_list.mojom
// Module: reading_list.mojom

'use strict';

// Module namespace
var reading_list = reading_list || {};
reading_list.mojom = reading_list.mojom || {};


// Enum: CurrentPageActionButtonState
reading_list.mojom.CurrentPageActionButtonState = {
};

// Struct: ReadLaterEntriesByStatus
reading_list.mojom.ReadLaterEntriesByStatus = class {
  constructor(values = {}) {
    this.read_entries = values.read_entries !== undefined ? values.read_entries : [];
  }
};

// Struct: ReadLaterEntry
reading_list.mojom.ReadLaterEntry = class {
  constructor(values = {}) {
    this.display_time_since_update = values.display_time_since_update !== undefined ? values.display_time_since_update : 0;
  }
};

// Struct: Window
reading_list.mojom.Window = class {
  constructor(values = {}) {
    this.active = values.active !== undefined ? values.active : false;
    this.height = values.height !== undefined ? values.height : 0;
  }
};

// Interface: PageHandlerFactory
reading_list.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'reading_list.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

reading_list.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
reading_list.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'reading_list.mojom.PageHandler';
  }

  getReadLaterEntries() {
    // Method: GetReadLaterEntries
    return new Promise((resolve) => {
      // Call: GetReadLaterEntries()
      resolve({});
    });
  }

  openURL(url, mark_as_read, click_modifiers) {
    // Method: OpenURL
    // Call: OpenURL(url, mark_as_read, click_modifiers)
  }

  updateReadStatus(url, read) {
    // Method: UpdateReadStatus
    // Call: UpdateReadStatus(url, read)
  }

  markCurrentTabAsRead() {
    // Method: MarkCurrentTabAsRead
    // Call: MarkCurrentTabAsRead()
  }

  addCurrentTab() {
    // Method: AddCurrentTab
    // Call: AddCurrentTab()
  }

  removeEntry(url) {
    // Method: RemoveEntry
    // Call: RemoveEntry(url)
  }

  showContextMenuForURL(url, x, y) {
    // Method: ShowContextMenuForURL
    // Call: ShowContextMenuForURL(url, x, y)
  }

  updateCurrentPageActionButtonState() {
    // Method: UpdateCurrentPageActionButtonState
    // Call: UpdateCurrentPageActionButtonState()
  }

  showUI() {
    // Method: ShowUI
    // Call: ShowUI()
  }

  closeUI() {
    // Method: CloseUI
    // Call: CloseUI()
  }

  getWindowData() {
    // Method: GetWindowData
    return new Promise((resolve) => {
      // Call: GetWindowData()
      resolve({});
    });
  }

};

reading_list.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
reading_list.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'reading_list.mojom.Page';
  }

  itemsChanged(entries) {
    // Method: ItemsChanged
    // Call: ItemsChanged(entries)
  }

  currentPageActionButtonStateChanged(state) {
    // Method: CurrentPageActionButtonStateChanged
    // Call: CurrentPageActionButtonStateChanged(state)
  }

};

reading_list.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
