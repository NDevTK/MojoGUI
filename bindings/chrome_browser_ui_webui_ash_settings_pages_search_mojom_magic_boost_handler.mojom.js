// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/search/mojom/magic_boost_handler.mojom
// Module: ash.settings.magic_boost_handler.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.magic_boost_handler = ash.settings.magic_boost_handler || {};
ash.settings.magic_boost_handler.mojom = ash.settings.magic_boost_handler.mojom || {};


// Interface: PageHandlerFactory
ash.settings.magic_boost_handler.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.magic_boost_handler.mojom.PageHandlerFactory';
  }

  createPageHandler(handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(handler)
  }

};

ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
ash.settings.magic_boost_handler.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.magic_boost_handler.mojom.PageHandler';
  }

  showNotice() {
    // Method: ShowNotice
    // Call: ShowNotice()
  }

};

ash.settings.magic_boost_handler.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
