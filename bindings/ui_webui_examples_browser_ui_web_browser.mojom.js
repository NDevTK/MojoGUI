// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/examples/browser/ui/web/browser.mojom
// Module: webui_examples.mojom

'use strict';

// Module namespace
var webui_examples = webui_examples || {};
webui_examples.mojom = webui_examples.mojom || {};


// Interface: PageHandlerFactory
webui_examples.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'webui_examples.mojom.PageHandlerFactory';
  }

  createPageHandler(handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(handler)
  }

};

webui_examples.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
webui_examples.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'webui_examples.mojom.PageHandler';
  }

  navigate(guest_contents_id, src) {
    // Method: Navigate
    // Call: Navigate(guest_contents_id, src)
  }

  goBack(guest_contents_id) {
    // Method: GoBack
    // Call: GoBack(guest_contents_id)
  }

  goForward(guest_contents_id) {
    // Method: GoForward
    // Call: GoForward(guest_contents_id)
  }

};

webui_examples.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
