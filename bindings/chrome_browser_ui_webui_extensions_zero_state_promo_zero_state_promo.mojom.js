// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/extensions_zero_state_promo/zero_state_promo.mojom
// Module: zero_state_promo.mojom

'use strict';

// Module namespace
var zero_state_promo = zero_state_promo || {};
zero_state_promo.mojom = zero_state_promo.mojom || {};


// Enum: WebStoreLinkClicked
zero_state_promo.mojom.WebStoreLinkClicked = {
};

// Interface: PageHandlerFactory
zero_state_promo.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'zero_state_promo.mojom.PageHandlerFactory';
  }

  createPageHandler(handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(handler)
  }

};

zero_state_promo.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
zero_state_promo.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'zero_state_promo.mojom.PageHandler';
  }

  launchWebStoreLink(link) {
    // Method: LaunchWebStoreLink
    // Call: LaunchWebStoreLink(link)
  }

};

zero_state_promo.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
