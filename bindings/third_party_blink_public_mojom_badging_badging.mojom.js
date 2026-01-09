// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/badging/badging.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: BadgeService
blink.mojom.BadgeServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.BadgeService';
  }

  setBadge(value) {
    // Method: SetBadge
    // Call: SetBadge(value)
  }

  clearBadge() {
    // Method: ClearBadge
    // Call: ClearBadge()
  }

};

blink.mojom.BadgeServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
