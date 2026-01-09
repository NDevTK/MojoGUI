// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/sample_system_web_app_ui/mojom/sample_system_web_app_ui.mojom
// Module: ash.mojom.sample_swa

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.sample_swa = ash.mojom.sample_swa || {};


// Struct: Preferences
ash.mojom.sample_swa.Preferences = class {
  constructor(values = {}) {
    this.foreground = values.foreground !== undefined ? values.foreground : "";
  }
};

// Interface: PageHandlerFactory
ash.mojom.sample_swa.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.mojom.sample_swa.PageHandlerFactory';
  }

  createPageHandler(handler, page) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(handler, page)
  }

};

ash.mojom.sample_swa.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
ash.mojom.sample_swa.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.mojom.sample_swa.PageHandler';
  }

  getPreferences() {
    // Method: GetPreferences
    return new Promise((resolve) => {
      // Call: GetPreferences()
      resolve({});
    });
  }

  send(message) {
    // Method: Send
    // Call: Send(message)
  }

  doSomething() {
    // Method: DoSomething
    // Call: DoSomething()
  }

};

ash.mojom.sample_swa.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
ash.mojom.sample_swa.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.mojom.sample_swa.Page';
  }

  onEventOccurred(name) {
    // Method: OnEventOccurred
    // Call: OnEventOccurred(name)
  }

  createParentPage(child_untrusted_page, parent_trusted_page) {
    // Method: CreateParentPage
    // Call: CreateParentPage(child_untrusted_page, parent_trusted_page)
  }

};

ash.mojom.sample_swa.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
