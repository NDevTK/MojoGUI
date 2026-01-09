// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/signin/history_sync_optin/history_sync_optin.mojom
// Module: history_sync_optin.mojom

'use strict';

// Module namespace
var history_sync_optin = history_sync_optin || {};
history_sync_optin.mojom = history_sync_optin.mojom || {};


// Enum: LaunchContext
history_sync_optin.mojom.LaunchContext = {
};

// Enum: ScreenMode
history_sync_optin.mojom.ScreenMode = {
};

// Struct: AccountInfo
history_sync_optin.mojom.AccountInfo = class {
  constructor(values = {}) {
    this.account_image_src = values.account_image_src !== undefined ? values.account_image_src : null;
  }
};

// Interface: PageHandlerFactory
history_sync_optin.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'history_sync_optin.mojom.PageHandlerFactory';
  }

  createHistorySyncOptinHandler(page, handler) {
    // Method: CreateHistorySyncOptinHandler
    // Call: CreateHistorySyncOptinHandler(page, handler)
  }

};

history_sync_optin.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
history_sync_optin.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'history_sync_optin.mojom.PageHandler';
  }

  accept() {
    // Method: Accept
    // Call: Accept()
  }

  reject() {
    // Method: Reject
    // Call: Reject()
  }

  requestAccountInfo() {
    // Method: RequestAccountInfo
    // Call: RequestAccountInfo()
  }

  updateDialogHeight(height) {
    // Method: UpdateDialogHeight
    // Call: UpdateDialogHeight(height)
  }

};

history_sync_optin.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
history_sync_optin.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'history_sync_optin.mojom.Page';
  }

  sendAccountInfo(account_info) {
    // Method: SendAccountInfo
    // Call: SendAccountInfo(account_info)
  }

  sendScreenMode(screen_mode) {
    // Method: SendScreenMode
    // Call: SendScreenMode(screen_mode)
  }

};

history_sync_optin.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
