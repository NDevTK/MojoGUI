// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/customize_color_scheme_mode/customize_color_scheme_mode.mojom
// Module: customize_color_scheme_mode.mojom

'use strict';

// Module namespace
var customize_color_scheme_mode = customize_color_scheme_mode || {};
customize_color_scheme_mode.mojom = customize_color_scheme_mode.mojom || {};


// Enum: ColorSchemeMode
customize_color_scheme_mode.mojom.ColorSchemeMode = {
  kSystem: 0,
  kLight: 1,
  kDark: 2,
};

// Interface: CustomizeColorSchemeModeHandlerFactory
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory';
  }

  createCustomizeColorSchemeModeHandler(pending_client, pending_handler) {
    // Method: CreateCustomizeColorSchemeModeHandler
    // Call: CreateCustomizeColorSchemeModeHandler(pending_client, pending_handler)
  }

};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CustomizeColorSchemeModeHandler
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler';
  }

  setColorSchemeMode(colorSchemeMode) {
    // Method: SetColorSchemeMode
    // Call: SetColorSchemeMode(colorSchemeMode)
  }

  initializeColorSchemeMode() {
    // Method: InitializeColorSchemeMode
    // Call: InitializeColorSchemeMode()
  }

};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CustomizeColorSchemeModeClient
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient';
  }

  setColorSchemeMode(colorSchemeMode) {
    // Method: SetColorSchemeMode
    // Call: SetColorSchemeMode(colorSchemeMode)
  }

};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
