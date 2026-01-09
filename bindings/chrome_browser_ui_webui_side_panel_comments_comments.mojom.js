// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/comments/comments.mojom
// Module: comments.mojom

'use strict';

// Module namespace
var comments = comments || {};
comments.mojom = comments.mojom || {};


// Interface: PageHandlerFactory
comments.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'comments.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

comments.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
comments.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'comments.mojom.PageHandler';
  }

  showUI() {
    // Method: ShowUI
    // Call: ShowUI()
  }

};

comments.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
comments.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'comments.mojom.Page';
  }

};

comments.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
