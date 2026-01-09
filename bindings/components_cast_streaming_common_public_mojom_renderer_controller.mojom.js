// Auto-generated MojoJS binding
// Source: chromium_src/components/cast_streaming/common/public/mojom/renderer_controller.mojom
// Module: cast_streaming.mojom

'use strict';

// Module namespace
var cast_streaming = cast_streaming || {};
cast_streaming.mojom = cast_streaming.mojom || {};


// Interface: RendererController
cast_streaming.mojom.RendererControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cast_streaming.mojom.RendererController';
  }

  setPlaybackController(renderer) {
    // Method: SetPlaybackController
    // Call: SetPlaybackController(renderer)
  }

};

cast_streaming.mojom.RendererControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
