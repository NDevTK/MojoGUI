// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/watch_time_recorder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: PlaybackProperties
media.mojom.PlaybackProperties = class {
  constructor(values = {}) {
    this.is_embedded_media_experience = values.is_embedded_media_experience !== undefined ? values.is_embedded_media_experience : false;
    this.demuxer_type = values.demuxer_type !== undefined ? values.demuxer_type : null;
  }
};

// Struct: SecondaryPlaybackProperties
media.mojom.SecondaryPlaybackProperties = class {
  constructor(values = {}) {
    this.natural_size = values.natural_size !== undefined ? values.natural_size : null;
  }
};

// Interface: WatchTimeRecorder
media.mojom.WatchTimeRecorderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.WatchTimeRecorder';
  }

  recordWatchTime(key, watch_time) {
    // Method: RecordWatchTime
    // Call: RecordWatchTime(key, watch_time)
  }

  finalizeWatchTime(watch_time_keys) {
    // Method: FinalizeWatchTime
    // Call: FinalizeWatchTime(watch_time_keys)
  }

  onError(status) {
    // Method: OnError
    // Call: OnError(status)
  }

  updateSecondaryProperties(secondary_properties) {
    // Method: UpdateSecondaryProperties
    // Call: UpdateSecondaryProperties(secondary_properties)
  }

  setAutoplayInitiated(value) {
    // Method: SetAutoplayInitiated
    // Call: SetAutoplayInitiated(value)
  }

  onDurationChanged(duration) {
    // Method: OnDurationChanged
    // Call: OnDurationChanged(duration)
  }

  updateVideoDecodeStats(frames_decoded, frames_dropped) {
    // Method: UpdateVideoDecodeStats
    // Call: UpdateVideoDecodeStats(frames_decoded, frames_dropped)
  }

  updateUnderflowCount(total_count) {
    // Method: UpdateUnderflowCount
    // Call: UpdateUnderflowCount(total_count)
  }

  updateUnderflowDuration(total_completed_count, total_duration) {
    // Method: UpdateUnderflowDuration
    // Call: UpdateUnderflowDuration(total_completed_count, total_duration)
  }

};

media.mojom.WatchTimeRecorderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
