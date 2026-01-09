// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/updater/updater_ui.mojom
// Module: updater_ui.mojom

'use strict';

// Module namespace
var updater_ui = updater_ui || {};
updater_ui.mojom = updater_ui.mojom || {};


// Interface: PageHandlerFactory
updater_ui.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'updater_ui.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

updater_ui.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
updater_ui.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'updater_ui.mojom.PageHandler';
  }

  getAllUpdaterEvents() {
    // Method: GetAllUpdaterEvents
    return new Promise((resolve) => {
      // Call: GetAllUpdaterEvents()
      resolve({});
    });
  }

};

updater_ui.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
updater_ui.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'updater_ui.mojom.Page';
  }

};

updater_ui.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
