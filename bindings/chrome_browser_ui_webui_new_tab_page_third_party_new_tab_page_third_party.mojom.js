// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page_third_party/new_tab_page_third_party.mojom
// Module: new_tab_page_third_party.mojom

'use strict';

// Module namespace
var new_tab_page_third_party = new_tab_page_third_party || {};
new_tab_page_third_party.mojom = new_tab_page_third_party.mojom || {};


// Struct: Theme
new_tab_page_third_party.mojom.Theme = class {
  constructor(values = {}) {
    this.most_visited = values.most_visited !== undefined ? values.most_visited : false;
  }
};

// Interface: PageHandlerFactory
new_tab_page_third_party.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'new_tab_page_third_party.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

new_tab_page_third_party.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
new_tab_page_third_party.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'new_tab_page_third_party.mojom.PageHandler';
  }

  updateTheme() {
    // Method: UpdateTheme
    // Call: UpdateTheme()
  }

};

new_tab_page_third_party.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
new_tab_page_third_party.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'new_tab_page_third_party.mojom.Page';
  }

  setTheme(theme) {
    // Method: SetTheme
    // Call: SetTheme(theme)
  }

};

new_tab_page_third_party.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
