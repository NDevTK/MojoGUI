// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/external_display_brightness.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};


// Interface: ExternalDisplayBrightness
chromeos.cfm.mojom.ExternalDisplayBrightnessPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.cfm.mojom.ExternalDisplayBrightness';
  }

  0(enabled) {
    // Method: 0
    // Call: 0(enabled)
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
  }

  2(percent) {
    // Method: 2
    // Call: 2(percent)
  }

  3() {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3()
      resolve({});
    });
  }

};

chromeos.cfm.mojom.ExternalDisplayBrightnessRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
