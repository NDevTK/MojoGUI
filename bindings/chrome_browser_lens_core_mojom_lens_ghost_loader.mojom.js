// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/lens_ghost_loader.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};


// Interface: LensGhostLoaderPageHandlerFactory
lens.mojom.LensGhostLoaderPageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'lens.mojom.LensGhostLoaderPageHandlerFactory';
  }

  createGhostLoaderPage(page) {
    // Method: CreateGhostLoaderPage
    // Call: CreateGhostLoaderPage(page)
  }

};

lens.mojom.LensGhostLoaderPageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LensGhostLoaderPage
lens.mojom.LensGhostLoaderPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'lens.mojom.LensGhostLoaderPage';
  }

  showErrorState() {
    // Method: ShowErrorState
    // Call: ShowErrorState()
  }

};

lens.mojom.LensGhostLoaderPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
