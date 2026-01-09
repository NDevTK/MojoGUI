// Auto-generated MojoJS binding
// Source: chromium_src/components/data_sharing/data_sharing_internals/webui/data_sharing_internals.mojom
// Module: data_sharing_internals.mojom

'use strict';

// Module namespace
var data_sharing_internals = data_sharing_internals || {};
data_sharing_internals.mojom = data_sharing_internals.mojom || {};


// Interface: PageHandlerFactory
data_sharing_internals.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'data_sharing_internals.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

data_sharing_internals.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
data_sharing_internals.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'data_sharing_internals.mojom.PageHandler';
  }

  isEmptyService() {
    // Method: IsEmptyService
    return new Promise((resolve) => {
      // Call: IsEmptyService()
      resolve({});
    });
  }

  getAllGroups() {
    // Method: GetAllGroups
    return new Promise((resolve) => {
      // Call: GetAllGroups()
      resolve({});
    });
  }

};

data_sharing_internals.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
data_sharing_internals.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'data_sharing_internals.mojom.Page';
  }

  onLogMessageAdded(event_time, log_source, source_file, source_line, message) {
    // Method: OnLogMessageAdded
    // Call: OnLogMessageAdded(event_time, log_source, source_file, source_line, message)
  }

};

data_sharing_internals.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
