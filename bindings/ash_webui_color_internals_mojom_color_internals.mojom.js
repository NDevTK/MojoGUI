// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/color_internals/mojom/color_internals.mojom
// Module: ash.color_internals.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.color_internals = ash.color_internals || {};
ash.color_internals.mojom = ash.color_internals.mojom || {};


// Struct: WallpaperCalculatedColors
ash.color_internals.mojom.WallpaperCalculatedColors = class {
  constructor(values = {}) {
    this.celebi_color = values.celebi_color !== undefined ? values.celebi_color : null;
  }
};

// Interface: WallpaperColorsObserver
ash.color_internals.mojom.WallpaperColorsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.color_internals.mojom.WallpaperColorsObserver';
  }

  onWallpaperColorsChanged(colors) {
    // Method: OnWallpaperColorsChanged
    // Call: OnWallpaperColorsChanged(colors)
  }

};

ash.color_internals.mojom.WallpaperColorsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WallpaperColorsHandler
ash.color_internals.mojom.WallpaperColorsHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.color_internals.mojom.WallpaperColorsHandler';
  }

  setWallpaperColorsObserver(observer) {
    // Method: SetWallpaperColorsObserver
    // Call: SetWallpaperColorsObserver(observer)
  }

};

ash.color_internals.mojom.WallpaperColorsHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
