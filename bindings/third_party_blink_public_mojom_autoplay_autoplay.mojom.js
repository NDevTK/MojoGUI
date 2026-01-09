// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/autoplay/autoplay.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: AutoplayConfigurationClient
blink.mojom.AutoplayConfigurationClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AutoplayConfigurationClient';
  }

  addAutoplayFlags(origin, flags) {
    // Method: AddAutoplayFlags
    // Call: AddAutoplayFlags(origin, flags)
  }

};

blink.mojom.AutoplayConfigurationClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
