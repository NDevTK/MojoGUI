// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/color_change_listener/color_change_listener.mojom
// Module: color_change_listener.mojom

'use strict';

// Module namespace
var color_change_listener = color_change_listener || {};
color_change_listener.mojom = color_change_listener.mojom || {};


// Interface: PageHandler
color_change_listener.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'color_change_listener.mojom.PageHandler';
  }

  setPage(page) {
    // Method: SetPage
    // Call: SetPage(page)
  }

};

color_change_listener.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
color_change_listener.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'color_change_listener.mojom.Page';
  }

  onColorProviderChanged() {
    // Method: OnColorProviderChanged
    // Call: OnColorProviderChanged()
  }

};

color_change_listener.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
