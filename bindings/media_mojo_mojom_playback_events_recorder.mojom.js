// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/playback_events_recorder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: PlaybackEventsRecorder
media.mojom.PlaybackEventsRecorderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.PlaybackEventsRecorder';
  }

  onPlaying() {
    // Method: OnPlaying
    // Call: OnPlaying()
  }

  onPaused() {
    // Method: OnPaused
    // Call: OnPaused()
  }

  onSeeking() {
    // Method: OnSeeking
    // Call: OnSeeking()
  }

  onEnded() {
    // Method: OnEnded
    // Call: OnEnded()
  }

  onError(status) {
    // Method: OnError
    // Call: OnError(status)
  }

  onBuffering() {
    // Method: OnBuffering
    // Call: OnBuffering()
  }

  initialized(created) {
    // Method: initialized
    // Call: initialized(created)
  }

  onSeeking() {
    // Method: OnSeeking
    // Call: OnSeeking()
  }

  onBuffering() {
    // Method: OnBuffering
    // Call: OnBuffering()
  }

  onBufferingComplete() {
    // Method: OnBufferingComplete
    // Call: OnBufferingComplete()
  }

  onNaturalSizeChanged(size) {
    // Method: OnNaturalSizeChanged
    // Call: OnNaturalSizeChanged(size)
  }

  periodically(second) {
    // Method: periodically
    // Call: periodically(second)
  }

  onPipelineStatistics(stats) {
    // Method: OnPipelineStatistics
    // Call: OnPipelineStatistics(stats)
  }

};

media.mojom.PlaybackEventsRecorderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
