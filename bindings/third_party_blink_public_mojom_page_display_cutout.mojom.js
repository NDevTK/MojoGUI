// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/display_cutout.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ViewportFit
blink.mojom.ViewportFit = {
};

// Interface: DisplayCutoutHost
blink.mojom.DisplayCutoutHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DisplayCutoutHost';
  }

  notifyViewportFitChanged(value) {
    // Method: NotifyViewportFitChanged
    // Call: NotifyViewportFitChanged(value)
  }

  notifyComplexSafeAreaConstraintChanged(value) {
    // Method: NotifyComplexSafeAreaConstraintChanged
    // Call: NotifyComplexSafeAreaConstraintChanged(value)
  }

};

blink.mojom.DisplayCutoutHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DisplayCutoutClient
blink.mojom.DisplayCutoutClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DisplayCutoutClient';
  }

  setSafeArea(safe_area) {
    // Method: SetSafeArea
    // Call: SetSafeArea(safe_area)
  }

};

blink.mojom.DisplayCutoutClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
