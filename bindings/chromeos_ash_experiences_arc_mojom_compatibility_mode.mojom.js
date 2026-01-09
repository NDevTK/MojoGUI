// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/compatibility_mode.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ArcResizeLockState
arc.mojom.ArcResizeLockState = {
  and: 0,
};

// Interface: CompatibilityModeInstance
arc.mojom.CompatibilityModeInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.CompatibilityModeInstance';
  }

  0(package_name, state) {
    // Method: 0
    // Call: 0(package_name, state)
  }

  1(package_name) {
    // Method: 1
    // Call: 1(package_name)
  }

  chromebook() {
    // Method: Chromebook
    // Call: Chromebook()
  }

  2(package_name) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(package_name)
      resolve({});
    });
  }

};

arc.mojom.CompatibilityModeInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
