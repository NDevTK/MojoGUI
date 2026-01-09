// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/extended_updates/extended_updates.mojom
// Module: ash.extended_updates.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.extended_updates = ash.extended_updates || {};
ash.extended_updates.mojom = ash.extended_updates.mojom || {};


// Struct: App
ash.extended_updates.mojom.App = class {
  constructor(values = {}) {
    this.title = values.title !== undefined ? values.title : "";
  }
};

// Interface: PageHandlerFactory
ash.extended_updates.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.extended_updates.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

ash.extended_updates.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
ash.extended_updates.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.extended_updates.mojom.PageHandler';
  }

  optInToExtendedUpdates() {
    // Method: OptInToExtendedUpdates
    return new Promise((resolve) => {
      // Call: OptInToExtendedUpdates()
      resolve({});
    });
  }

  send() {
    // Method: send
    // Call: send()
  }

  closeDialog() {
    // Method: CloseDialog
    // Call: CloseDialog()
  }

  getInstalledAndroidApps() {
    // Method: GetInstalledAndroidApps
    return new Promise((resolve) => {
      // Call: GetInstalledAndroidApps()
      resolve({});
    });
  }

};

ash.extended_updates.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
ash.extended_updates.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.extended_updates.mojom.Page';
  }

};

ash.extended_updates.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
