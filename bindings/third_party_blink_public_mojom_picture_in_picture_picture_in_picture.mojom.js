// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/picture_in_picture/picture_in_picture.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: PictureInPictureSessionObserver
blink.mojom.PictureInPictureSessionObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PictureInPictureSessionObserver';
  }

  onWindowSizeChanged(size) {
    // Method: OnWindowSizeChanged
    // Call: OnWindowSizeChanged(size)
  }

  stop() {
    // Method: Stop
    // Call: Stop()
  }

  onStopped() {
    // Method: OnStopped
    // Call: OnStopped()
  }

};

blink.mojom.PictureInPictureSessionObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PictureInPictureSession
blink.mojom.PictureInPictureSessionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PictureInPictureSession';
  }

  stop() {
    // Method: Stop
    // Call: Stop()
  }

  update(player_id, player_remote, surface_id, natural_size, show_play_pause_button) {
    // Method: Update
    // Call: Update(player_id, player_remote, surface_id, natural_size, show_play_pause_button)
  }

  stop() {
    // Method: Stop
    // Call: Stop()
  }

  updateMediaPosition(media_position) {
    // Method: UpdateMediaPosition
    // Call: UpdateMediaPosition(media_position)
  }

};

blink.mojom.PictureInPictureSessionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PictureInPictureService
blink.mojom.PictureInPictureServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PictureInPictureService';
  }

  startSession(player_id, player_remote, surface_id, natural_size, show_play_pause_button, observer, source_bounds) {
    // Method: StartSession
    return new Promise((resolve) => {
      // Call: StartSession(player_id, player_remote, surface_id, natural_size, show_play_pause_button, observer, source_bounds)
      resolve({});
    });
  }

};

blink.mojom.PictureInPictureServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
