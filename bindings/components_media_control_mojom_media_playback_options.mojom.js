// Auto-generated MojoJS binding
// Source: chromium_src/components/media_control/mojom/media_playback_options.mojom
// Module: components.media_control.mojom

'use strict';

// Module namespace
var components = components || {};
components.media_control = components.media_control || {};
components.media_control.mojom = components.media_control.mojom || {};


// Interface: MediaPlaybackOptions
components.media_control.mojom.MediaPlaybackOptionsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'components.media_control.mojom.MediaPlaybackOptions';
  }

  setMediaLoadingBlocked(blocked) {
    // Method: SetMediaLoadingBlocked
    // Call: SetMediaLoadingBlocked(blocked)
  }

  setBackgroundVideoPlaybackEnabled(enabled) {
    // Method: SetBackgroundVideoPlaybackEnabled
    // Call: SetBackgroundVideoPlaybackEnabled(enabled)
  }

  setRendererType(type) {
    // Method: SetRendererType
    // Call: SetRendererType(type)
  }

};

components.media_control.mojom.MediaPlaybackOptionsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
