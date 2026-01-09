// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/reload_button/reload_button.mojom
// Module: reload_button.mojom

'use strict';

// Module namespace
var reload_button = reload_button || {};
reload_button.mojom = reload_button.mojom || {};


// Enum: ClickDispositionFlag
reload_button.mojom.ClickDispositionFlag = {
  kMiddleMouseButton: 0,
  kAltKeyDown: 1,
  kMetaKeyDown: 2,
};

// Interface: PageHandlerFactory
reload_button.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'reload_button.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

reload_button.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
reload_button.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'reload_button.mojom.PageHandler';
  }

  reload(ignore_cache, flags) {
    // Method: Reload
    // Call: Reload(ignore_cache, flags)
  }

  stopReload() {
    // Method: StopReload
    // Call: StopReload()
  }

  showContextMenu(offset_x, offset_y) {
    // Method: ShowContextMenu
    // Call: ShowContextMenu(offset_x, offset_y)
  }

};

reload_button.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
reload_button.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'reload_button.mojom.Page';
  }

  setReloadButtonState(is_loading, is_menu_enabled) {
    // Method: SetReloadButtonState
    // Call: SetReloadButtonState(is_loading, is_menu_enabled)
  }

};

reload_button.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
