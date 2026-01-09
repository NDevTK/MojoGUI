// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_controller.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};


// Interface: MediaController
media_router.mojom.MediaControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_router.mojom.MediaController';
  }

  play() {
    // Method: Play
    // Call: Play()
  }

  pause() {
    // Method: Pause
    // Call: Pause()
  }

  setMute(mute) {
    // Method: SetMute
    // Call: SetMute(mute)
  }

  the() {
    // Method: the
    // Call: the()
  }

  setVolume(volume) {
    // Method: SetVolume
    // Call: SetVolume(volume)
  }

  seek(time) {
    // Method: Seek
    // Call: Seek(time)
  }

  nextTrack() {
    // Method: NextTrack
    // Call: NextTrack()
  }

  previousTrack() {
    // Method: PreviousTrack
    // Call: PreviousTrack()
  }

};

media_router.mojom.MediaControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
