// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/infobar_internals/infobar_internals.mojom
// Module: infobar_internals.mojom

'use strict';

// Module namespace
var infobar_internals = infobar_internals || {};
infobar_internals.mojom = infobar_internals.mojom || {};


// Enum: InfoBarType
infobar_internals.mojom.InfoBarType = {
  Mac: 0,
};

// Struct: InfoBarEntry
infobar_internals.mojom.InfoBarEntry = class {
  constructor(values = {}) {
    this.description = values.description !== undefined ? values.description : "";
  }
};

// Interface: Page
infobar_internals.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'infobar_internals.mojom.Page';
  }

};

infobar_internals.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
infobar_internals.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'infobar_internals.mojom.PageHandler';
  }

  getInfoBars() {
    // Method: GetInfoBars
    return new Promise((resolve) => {
      // Call: GetInfoBars()
      resolve({});
    });
  }

  triggerInfoBar(type) {
    // Method: TriggerInfoBar
    return new Promise((resolve) => {
      // Call: TriggerInfoBar(type)
      resolve({});
    });
  }

};

infobar_internals.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandlerFactory
infobar_internals.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'infobar_internals.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

infobar_internals.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
