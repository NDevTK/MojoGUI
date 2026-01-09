// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mediasession/media_session.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: MediaSessionPlaybackState
blink.mojom.MediaSessionPlaybackState = {
  NONE: 0,
  PAUSED: 1,
  PLAYING: 2,
};

// Enum: MediaSessionEnterPictureInPictureReason
blink.mojom.MediaSessionEnterPictureInPictureReason = {
};

// Struct: MediaSessionSeekToDetails
blink.mojom.MediaSessionSeekToDetails = class {
  constructor(values = {}) {
    this.fast_seek = values.fast_seek !== undefined ? values.fast_seek : false;
  }
};

// Struct: MediaSessionEnterPictureInPictureDetails
blink.mojom.MediaSessionEnterPictureInPictureDetails = class {
  constructor(values = {}) {
    this.reason = values.reason !== undefined ? values.reason : null;
  }
};

// Struct: SpecMediaMetadata
blink.mojom.SpecMediaMetadata = class {
  constructor(values = {}) {
    this.chapterInfo = values.chapterInfo !== undefined ? values.chapterInfo : "";
  }
};

// Interface: MediaSessionClient
blink.mojom.MediaSessionClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.MediaSessionClient';
  }

  didReceiveAction(action, details) {
    // Method: DidReceiveAction
    // Call: DidReceiveAction(action, details)
  }

};

blink.mojom.MediaSessionClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaSessionService
blink.mojom.MediaSessionServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.MediaSessionService';
  }

  setClient(client) {
    // Method: SetClient
    // Call: SetClient(client)
  }

  setPlaybackState(state) {
    // Method: SetPlaybackState
    // Call: SetPlaybackState(state)
  }

  setPositionState(position) {
    // Method: SetPositionState
    // Call: SetPositionState(position)
  }

  setMetadata(metadata) {
    // Method: SetMetadata
    // Call: SetMetadata(metadata)
  }

  setMicrophoneState(microphone_state) {
    // Method: SetMicrophoneState
    // Call: SetMicrophoneState(microphone_state)
  }

  setCameraState(camera_state) {
    // Method: SetCameraState
    // Call: SetCameraState(camera_state)
  }

  enableAction(action) {
    // Method: EnableAction
    // Call: EnableAction(action)
  }

  disableAction(action) {
    // Method: DisableAction
    // Call: DisableAction(action)
  }

};

blink.mojom.MediaSessionServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
