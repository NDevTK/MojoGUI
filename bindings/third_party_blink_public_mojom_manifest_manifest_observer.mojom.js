// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/manifest/manifest_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ManifestUrlChangeObserver
blink.mojom.ManifestUrlChangeObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ManifestUrlChangeObserver';
  }

  manifestUrlChanged(manifest_url) {
    // Method: ManifestUrlChanged
    // Call: ManifestUrlChanged(manifest_url)
  }

};

blink.mojom.ManifestUrlChangeObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
