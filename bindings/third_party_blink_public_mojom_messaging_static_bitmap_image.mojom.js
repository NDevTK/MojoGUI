// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/messaging/static_bitmap_image.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: AcceleratedStaticBitmapImage
blink.mojom.AcceleratedStaticBitmapImage = class {
  constructor(values = {}) {
    this.release_callback = values.release_callback !== undefined ? values.release_callback : null;
  }
};

// Interface: ImageReleaseCallback
blink.mojom.ImageReleaseCallbackPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ImageReleaseCallback';
  }

  release(token) {
    // Method: Release
    // Call: Release(token)
  }

};

blink.mojom.ImageReleaseCallbackRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
