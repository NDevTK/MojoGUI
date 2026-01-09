// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/focus_mode/mojom/focus_mode.mojom
// Module: ash.focus_mode.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.focus_mode = ash.focus_mode || {};
ash.focus_mode.mojom = ash.focus_mode.mojom || {};


// Enum: PlaybackState
ash.focus_mode.mojom.PlaybackState = {
};

// Struct: TrackDefinition
ash.focus_mode.mojom.TrackDefinition = class {
  constructor(values = {}) {
    this.enable_playback_reporting = values.enable_playback_reporting !== undefined ? values.enable_playback_reporting : false;
  }
};

// Struct: PlaybackData
ash.focus_mode.mojom.PlaybackData = class {
  constructor(values = {}) {
    this.client_start_time = values.client_start_time !== undefined ? values.client_start_time : 0;
    this.initial_playback = values.initial_playback !== undefined ? values.initial_playback : false;
  }
};

// Interface: MediaClient
ash.focus_mode.mojom.MediaClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.focus_mode.mojom.MediaClient';
  }

  startPlay(track) {
    // Method: StartPlay
    // Call: StartPlay(track)
  }

};

ash.focus_mode.mojom.MediaClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TrackProvider
ash.focus_mode.mojom.TrackProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.focus_mode.mojom.TrackProvider';
  }

  getTrack() {
    // Method: GetTrack
    return new Promise((resolve) => {
      // Call: GetTrack()
      resolve({});
    });
  }

  setMediaClient(client) {
    // Method: SetMediaClient
    // Call: SetMediaClient(client)
  }

  reportPlayback(data) {
    // Method: ReportPlayback
    // Call: ReportPlayback(data)
  }

  reportPlayerError() {
    // Method: ReportPlayerError
    // Call: ReportPlayerError()
  }

};

ash.focus_mode.mojom.TrackProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
