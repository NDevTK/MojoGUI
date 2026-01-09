// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/launcher_internals/launcher_internals.mojom
// Module: launcher_internals.mojom

'use strict';

// Module namespace
var launcher_internals = launcher_internals || {};
launcher_internals.mojom = launcher_internals.mojom || {};


// Struct: Result
launcher_internals.mojom.Result = class {
  constructor(values = {}) {
    this.display_type = values.display_type !== undefined ? values.display_type : "";
    this.ranker_scores = values.ranker_scores !== undefined ? values.ranker_scores : 0;
  }
};

// Interface: PageHandlerFactory
launcher_internals.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'launcher_internals.mojom.PageHandlerFactory';
  }

  createPageHandler(page) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page)
  }

};

launcher_internals.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
launcher_internals.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'launcher_internals.mojom.Page';
  }

  updateResults(query, keywords, results) {
    // Method: UpdateResults
    // Call: UpdateResults(query, keywords, results)
  }

};

launcher_internals.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
