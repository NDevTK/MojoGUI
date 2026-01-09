// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/delegated_ink_point_renderer.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Interface: DelegatedInkPointRenderer
gfx.mojom.DelegatedInkPointRendererPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'gfx.mojom.DelegatedInkPointRenderer';
  }

  storeDelegatedInkPoint(point) {
    // Method: StoreDelegatedInkPoint
    // Call: StoreDelegatedInkPoint(point)
  }

  resetPrediction() {
    // Method: ResetPrediction
    // Call: ResetPrediction()
  }

};

gfx.mojom.DelegatedInkPointRendererRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
