// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/choosers/color_chooser.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ColorSuggestion
blink.mojom.ColorSuggestion = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Interface: ColorChooserFactory
blink.mojom.ColorChooserFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ColorChooserFactory';
  }

  openColorChooser(chooser, client, color, suggestions) {
    // Method: OpenColorChooser
    // Call: OpenColorChooser(chooser, client, color, suggestions)
  }

};

blink.mojom.ColorChooserFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ColorChooser
blink.mojom.ColorChooserPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ColorChooser';
  }

  setSelectedColor(color) {
    // Method: SetSelectedColor
    // Call: SetSelectedColor(color)
  }

};

blink.mojom.ColorChooserRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ColorChooserClient
blink.mojom.ColorChooserClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ColorChooserClient';
  }

  didChooseColor(color) {
    // Method: DidChooseColor
    // Call: DidChooseColor(color)
  }

};

blink.mojom.ColorChooserClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: EyeDropperChooser
blink.mojom.EyeDropperChooserPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.EyeDropperChooser';
  }

  choose() {
    // Method: Choose
    return new Promise((resolve) => {
      // Call: Choose()
      resolve({});
    });
  }

};

blink.mojom.EyeDropperChooserRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
