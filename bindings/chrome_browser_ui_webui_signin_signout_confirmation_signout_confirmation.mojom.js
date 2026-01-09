// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/signin/signout_confirmation/signout_confirmation.mojom
// Module: signout_confirmation.mojom

'use strict';

// Module namespace
var signout_confirmation = signout_confirmation || {};
signout_confirmation.mojom = signout_confirmation.mojom || {};


// Struct: ExtensionInfo
signout_confirmation.mojom.ExtensionInfo = class {
  constructor(values = {}) {
    this.icon_url = values.icon_url !== undefined ? values.icon_url : "";
  }
};

// Struct: SignoutConfirmationData
signout_confirmation.mojom.SignoutConfirmationData = class {
  constructor(values = {}) {
    this.has_unsynced_data = values.has_unsynced_data !== undefined ? values.has_unsynced_data : false;
  }
};

// Interface: PageHandlerFactory
signout_confirmation.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'signout_confirmation.mojom.PageHandlerFactory';
  }

  createSignoutConfirmationHandler(page, handler) {
    // Method: CreateSignoutConfirmationHandler
    // Call: CreateSignoutConfirmationHandler(page, handler)
  }

};

signout_confirmation.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
signout_confirmation.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'signout_confirmation.mojom.PageHandler';
  }

  updateViewHeight(height) {
    // Method: UpdateViewHeight
    // Call: UpdateViewHeight(height)
  }

  accept(uninstall_account_extensions) {
    // Method: Accept
    // Call: Accept(uninstall_account_extensions)
  }

  cancel(uninstall_account_extensions) {
    // Method: Cancel
    // Call: Cancel(uninstall_account_extensions)
  }

  performReauth() {
    // Method: PerformReauth
    // Call: PerformReauth()
  }

  close() {
    // Method: Close
    // Call: Close()
  }

};

signout_confirmation.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
signout_confirmation.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'signout_confirmation.mojom.Page';
  }

  sendSignoutConfirmationData(data) {
    // Method: SendSignoutConfirmationData
    // Call: SendSignoutConfirmationData(data)
  }

};

signout_confirmation.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
