// Auto-generated MojoJS binding
// Source: chromium_src/components/history_clusters/history_clusters_internals/webui/history_clusters_internals.mojom
// Module: history_clusters_internals.mojom

'use strict';

// Module namespace
var history_clusters_internals = history_clusters_internals || {};
history_clusters_internals.mojom = history_clusters_internals.mojom || {};


// Interface: PageHandlerFactory
history_clusters_internals.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'history_clusters_internals.mojom.PageHandlerFactory';
  }

  createPageHandler(page, page_handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, page_handler)
  }

};

history_clusters_internals.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
history_clusters_internals.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'history_clusters_internals.mojom.PageHandler';
  }

  getContextClustersJson() {
    // Method: GetContextClustersJson
    return new Promise((resolve) => {
      // Call: GetContextClustersJson()
      resolve({});
    });
  }

  printKeywordBagStateToLogMessages() {
    // Method: PrintKeywordBagStateToLogMessages
    // Call: PrintKeywordBagStateToLogMessages()
  }

};

history_clusters_internals.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
history_clusters_internals.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'history_clusters_internals.mojom.Page';
  }

  onLogMessageAdded(message) {
    // Method: OnLogMessageAdded
    // Call: OnLogMessageAdded(message)
  }

};

history_clusters_internals.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
