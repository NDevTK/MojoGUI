// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_status.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};


// Enum: PlayState
media_router.mojom.PlayState = {
  PLAYING: 0,
  PAUSED: 1,
  BUFFERING: 2,
};

// Struct: MediaImage
media_router.mojom.MediaImage = class {
  constructor(values = {}) {
    this.size = values.size !== undefined ? values.size : null;
  }
};

// Struct: MediaStatus
media_router.mojom.MediaStatus = class {
  constructor(values = {}) {
    this.PLAYING = values.PLAYING !== undefined ? values.PLAYING : null;
    this.PAUSED = values.PAUSED !== undefined ? values.PAUSED : null;
  }
};

// Interface: MediaStatusObserver
media_router.mojom.MediaStatusObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_router.mojom.MediaStatusObserver';
  }

  onMediaStatusUpdated(status) {
    // Method: OnMediaStatusUpdated
    // Call: OnMediaStatusUpdated(status)
  }

};

media_router.mojom.MediaStatusObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
