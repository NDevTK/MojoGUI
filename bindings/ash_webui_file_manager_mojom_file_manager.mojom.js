// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/file_manager/mojom/file_manager.mojom
// Module: ash.file_manager.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.file_manager = ash.file_manager || {};
ash.file_manager.mojom = ash.file_manager.mojom || {};


// Interface: PageHandlerFactory
ash.file_manager.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.file_manager.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

ash.file_manager.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
ash.file_manager.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.file_manager.mojom.PageHandler';
  }

};

ash.file_manager.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
ash.file_manager.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.file_manager.mojom.Page';
  }

};

ash.file_manager.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
