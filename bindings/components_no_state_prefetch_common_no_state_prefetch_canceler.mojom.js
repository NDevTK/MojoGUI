// Auto-generated MojoJS binding
// Source: chromium_src/components/no_state_prefetch/common/no_state_prefetch_canceler.mojom
// Module: prerender.mojom

'use strict';

// Module namespace
var prerender = prerender || {};
prerender.mojom = prerender.mojom || {};


// Interface: NoStatePrefetchCanceler
prerender.mojom.NoStatePrefetchCancelerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'prerender.mojom.NoStatePrefetchCanceler';
  }

  cancelNoStatePrefetchForUnsupportedScheme() {
    // Method: CancelNoStatePrefetchForUnsupportedScheme
    // Call: CancelNoStatePrefetchForUnsupportedScheme()
  }

  cancelNoStatePrefetchAfterSubresourcesDiscovered() {
    // Method: CancelNoStatePrefetchAfterSubresourcesDiscovered
    // Call: CancelNoStatePrefetchAfterSubresourcesDiscovered()
  }

};

prerender.mojom.NoStatePrefetchCancelerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
