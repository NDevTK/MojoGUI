// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/system_ui.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ThemeStyleType
arc.mojom.ThemeStyleType = {
  VIBRANT: 0,
  EXPRESSIVE: 1,
  SPRITZ: 2,
  RAINBOW: 3,
  FRUIT_SALAD: 4,
};

// Interface: SystemUiInstance
arc.mojom.SystemUiInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.SystemUiInstance';
  }

};

arc.mojom.SystemUiInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
