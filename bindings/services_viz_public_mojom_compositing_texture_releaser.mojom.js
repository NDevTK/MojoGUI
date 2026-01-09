// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/texture_releaser.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: TextureReleaser
viz.mojom.TextureReleaserPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.TextureReleaser';
  }

  release(sync_token, is_lost) {
    // Method: Release
    // Call: Release(sync_token, is_lost)
  }

};

viz.mojom.TextureReleaserRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
