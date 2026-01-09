// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/wallpaper.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: WallpaperHost
arc.mojom.WallpaperHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.WallpaperHost';
  }

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  1(data, wallpaper_id) {
    // Method: 1
    // Call: 1(data, wallpaper_id)
  }

  2() {
    // Method: 2
    // Call: 2()
  }

};

arc.mojom.WallpaperHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WallpaperInstance
arc.mojom.WallpaperInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.WallpaperInstance';
  }

  3(host_remote) {
    // Method: 3
    // Call: 3(host_remote)
  }

  1(wallpaper_id) {
    // Method: 1
    // Call: 1(wallpaper_id)
  }

};

arc.mojom.WallpaperInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
