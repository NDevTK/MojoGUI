// Auto-generated MojoJS binding
// Source: chromium_src/components/webui/chrome_urls/mojom/chrome_urls.mojom
// Module: chrome_urls.mojom

'use strict';

// Module namespace
var chrome_urls = chrome_urls || {};
chrome_urls.mojom = chrome_urls.mojom || {};


// Struct: WebuiUrlInfo
chrome_urls.mojom.WebuiUrlInfo = class {
  constructor(values = {}) {
    this.internal = values.internal !== undefined ? values.internal : false;
  }
};

// Struct: ChromeUrlsData
chrome_urls.mojom.ChromeUrlsData = class {
  constructor(values = {}) {
    this.webui_urls = values.webui_urls !== undefined ? values.webui_urls : [];
    this.internal_debugging_uis_enabled = values.internal_debugging_uis_enabled !== undefined ? values.internal_debugging_uis_enabled : false;
  }
};

// Interface: PageHandlerFactory
chrome_urls.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome_urls.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

chrome_urls.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
chrome_urls.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome_urls.mojom.PageHandler';
  }

  getUrls() {
    // Method: GetUrls
    return new Promise((resolve) => {
      // Call: GetUrls()
      resolve({});
    });
  }

  setDebugPagesEnabled(enabled) {
    // Method: SetDebugPagesEnabled
    // Call: SetDebugPagesEnabled(enabled)
  }

};

chrome_urls.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
chrome_urls.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome_urls.mojom.Page';
  }

};

chrome_urls.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
