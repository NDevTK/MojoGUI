// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/customize_buttons/customize_buttons.mojom
// Module: customize_buttons.mojom

'use strict';

// Module namespace
var customize_buttons = customize_buttons || {};
customize_buttons.mojom = customize_buttons.mojom || {};


// Enum: SidePanelOpenTrigger
customize_buttons.mojom.SidePanelOpenTrigger = {
};

// Interface: CustomizeButtonsHandlerFactory
customize_buttons.mojom.CustomizeButtonsHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'customize_buttons.mojom.CustomizeButtonsHandlerFactory';
  }

  createCustomizeButtonsHandler(page, handler) {
    // Method: CreateCustomizeButtonsHandler
    // Call: CreateCustomizeButtonsHandler(page, handler)
  }

};

customize_buttons.mojom.CustomizeButtonsHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CustomizeButtonsHandler
customize_buttons.mojom.CustomizeButtonsHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'customize_buttons.mojom.CustomizeButtonsHandler';
  }

  incrementCustomizeChromeButtonOpenCount() {
    // Method: IncrementCustomizeChromeButtonOpenCount
    // Call: IncrementCustomizeChromeButtonOpenCount()
  }

  incrementWallpaperSearchButtonShownCount() {
    // Method: IncrementWallpaperSearchButtonShownCount
    // Call: IncrementWallpaperSearchButtonShownCount()
  }

  setCustomizeChromeSidePanelVisible(visible, section, trigger) {
    // Method: SetCustomizeChromeSidePanelVisible
    // Call: SetCustomizeChromeSidePanelVisible(visible, section, trigger)
  }

};

customize_buttons.mojom.CustomizeButtonsHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CustomizeButtonsDocument
customize_buttons.mojom.CustomizeButtonsDocumentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'customize_buttons.mojom.CustomizeButtonsDocument';
  }

  setCustomizeChromeSidePanelVisibility(visible) {
    // Method: SetCustomizeChromeSidePanelVisibility
    // Call: SetCustomizeChromeSidePanelVisibility(visible)
  }

};

customize_buttons.mojom.CustomizeButtonsDocumentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
