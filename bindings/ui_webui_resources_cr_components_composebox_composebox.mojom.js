// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/composebox/composebox.mojom
// Module: composebox.mojom

'use strict';

// Module namespace
var composebox = composebox || {};
composebox.mojom = composebox.mojom || {};


// Interface: PageHandlerFactory
composebox.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'composebox.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler, searchbox_page, searchbox_handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler, searchbox_page, searchbox_handler)
  }

};

composebox.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
composebox.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'composebox.mojom.PageHandler';
  }

  focusChanged(focused) {
    // Method: FocusChanged
    // Call: FocusChanged(focused)
  }

  setDeepSearchMode(enabled) {
    // Method: SetDeepSearchMode
    // Call: SetDeepSearchMode(enabled)
  }

  setCreateImageMode(enabled, image_present) {
    // Method: SetCreateImageMode
    // Call: SetCreateImageMode(enabled, image_present)
  }

  handleLensButtonClick() {
    // Method: HandleLensButtonClick
    // Call: HandleLensButtonClick()
  }

  handleFileUpload(is_image) {
    // Method: HandleFileUpload
    // Call: HandleFileUpload(is_image)
  }

  navigateUrl(url) {
    // Method: NavigateUrl
    // Call: NavigateUrl(url)
  }

};

composebox.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
composebox.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'composebox.mojom.Page';
  }

};

composebox.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
