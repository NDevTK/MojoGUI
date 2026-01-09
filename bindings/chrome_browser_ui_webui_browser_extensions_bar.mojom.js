// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui_browser/extensions_bar.mojom
// Module: extensions_bar.mojom

'use strict';

// Module namespace
var extensions_bar = extensions_bar || {};
extensions_bar.mojom = extensions_bar.mojom || {};


// Struct: ExtensionActionInfo
extensions_bar.mojom.ExtensionActionInfo = class {
  constructor(values = {}) {
    this.tooltip = values.tooltip !== undefined ? values.tooltip : "";
    this.data_url_for_icon = values.data_url_for_icon !== undefined ? values.data_url_for_icon : false;
  }
};

// Interface: PageHandlerFactory
extensions_bar.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions_bar.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

extensions_bar.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
extensions_bar.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions_bar.mojom.PageHandler';
  }

  executeUserAction(id) {
    // Method: ExecuteUserAction
    // Call: ExecuteUserAction(id)
  }

  showContextMenu(source, id) {
    // Method: ShowContextMenu
    // Call: ShowContextMenu(source, id)
  }

  toggleExtensionsMenuFromWebUI() {
    // Method: ToggleExtensionsMenuFromWebUI
    // Call: ToggleExtensionsMenuFromWebUI()
  }

};

extensions_bar.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
extensions_bar.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions_bar.mojom.Page';
  }

  actionsAddedOrUpdated(actions) {
    // Method: ActionsAddedOrUpdated
    // Call: ActionsAddedOrUpdated(actions)
  }

  actionRemoved(id) {
    // Method: ActionRemoved
    // Call: ActionRemoved(id)
  }

  actionPoppedOut() {
    // Method: ActionPoppedOut
    // Call: ActionPoppedOut()
  }

};

extensions_bar.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
