// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/omnibox_popup/mojom/omnibox_popup_aim.mojom
// Module: omnibox_popup_aim.mojom

'use strict';

// Module namespace
var omnibox_popup_aim = omnibox_popup_aim || {};
omnibox_popup_aim.mojom = omnibox_popup_aim.mojom || {};


// Interface: PageHandlerFactory
omnibox_popup_aim.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'omnibox_popup_aim.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

omnibox_popup_aim.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
omnibox_popup_aim.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'omnibox_popup_aim.mojom.PageHandler';
  }

  requestClose() {
    // Method: RequestClose
    // Call: RequestClose()
  }

  navigateCurrentTab(url) {
    // Method: NavigateCurrentTab
    // Call: NavigateCurrentTab(url)
  }

};

omnibox_popup_aim.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
omnibox_popup_aim.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'omnibox_popup_aim.mojom.Page';
  }

  onPopupShown(context) {
    // Method: OnPopupShown
    // Call: OnPopupShown(context)
  }

  addContext(context) {
    // Method: AddContext
    // Call: AddContext(context)
  }

  onPopupHidden() {
    // Method: OnPopupHidden
    return new Promise((resolve) => {
      // Call: OnPopupHidden()
      resolve({});
    });
  }

  setPreserveContextOnClose(preserve_context_on_close) {
    // Method: SetPreserveContextOnClose
    // Call: SetPreserveContextOnClose(preserve_context_on_close)
  }

};

omnibox_popup_aim.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
