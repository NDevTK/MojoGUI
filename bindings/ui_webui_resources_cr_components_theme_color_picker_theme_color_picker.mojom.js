// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/theme_color_picker/theme_color_picker.mojom
// Module: theme_color_picker.mojom

'use strict';

// Module namespace
var theme_color_picker = theme_color_picker || {};
theme_color_picker.mojom = theme_color_picker.mojom || {};


// Struct: Theme
theme_color_picker.mojom.Theme = class {
  constructor(values = {}) {
    this.background_color = values.background_color !== undefined ? values.background_color : 0;
    this.follow_device_theme = values.follow_device_theme !== undefined ? values.follow_device_theme : false;
  }
};

// Struct: ChromeColor
theme_color_picker.mojom.ChromeColor = class {
  constructor(values = {}) {
    this.variant = values.variant !== undefined ? values.variant : "";
  }
};

// Interface: ThemeColorPickerHandlerFactory
theme_color_picker.mojom.ThemeColorPickerHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'theme_color_picker.mojom.ThemeColorPickerHandlerFactory';
  }

  createThemeColorPickerHandler(handler, client) {
    // Method: CreateThemeColorPickerHandler
    // Call: CreateThemeColorPickerHandler(handler, client)
  }

};

theme_color_picker.mojom.ThemeColorPickerHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ThemeColorPickerHandler
theme_color_picker.mojom.ThemeColorPickerHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'theme_color_picker.mojom.ThemeColorPickerHandler';
  }

  getChromeColors(is_dark_mode) {
    // Method: GetChromeColors
    return new Promise((resolve) => {
      // Call: GetChromeColors(is_dark_mode)
      resolve({});
    });
  }

  setTheme() {
    // Method: SetTheme
    // Call: SetTheme()
  }

  updateTheme() {
    // Method: UpdateTheme
    // Call: UpdateTheme()
  }

  setDefaultColor() {
    // Method: SetDefaultColor
    // Call: SetDefaultColor()
  }

  setGreyDefaultColor() {
    // Method: SetGreyDefaultColor
    // Call: SetGreyDefaultColor()
  }

  setSeedColor(seed_color, variant) {
    // Method: SetSeedColor
    // Call: SetSeedColor(seed_color, variant)
  }

  setSeedColorFromHue(hue) {
    // Method: SetSeedColorFromHue
    // Call: SetSeedColorFromHue(hue)
  }

  removeBackgroundImage() {
    // Method: RemoveBackgroundImage
    // Call: RemoveBackgroundImage()
  }

};

theme_color_picker.mojom.ThemeColorPickerHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ThemeColorPickerClient
theme_color_picker.mojom.ThemeColorPickerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'theme_color_picker.mojom.ThemeColorPickerClient';
  }

  setTheme(theme) {
    // Method: SetTheme
    // Call: SetTheme(theme)
  }

};

theme_color_picker.mojom.ThemeColorPickerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
