// Auto-generated MojoJS binding
// Source: chromium_src/services/media_session/public/mojom/media_session.mojom
// Module: media_session.mojom

'use strict';

// Module namespace
var media_session = media_session || {};
media_session.mojom = media_session.mojom || {};


// Enum: MediaPlaybackState
media_session.mojom.MediaPlaybackState = {
  kPaused: 0,
  kPlaying: 1,
};

// Enum: MediaSessionAction
media_session.mojom.MediaSessionAction = {
  kPlay: 0,
  kPause: 1,
  kPreviousTrack: 2,
  kNextTrack: 3,
  kSeekBackward: 4,
  kSeekForward: 5,
  kSkipAd: 6,
  kStop: 7,
  kSeekTo: 8,
  kScrubTo: 9,
  kEnterPictureInPicture: 10,
  kExitPictureInPicture: 11,
  kSwitchAudioDevice: 12,
};

// Enum: MediaSessionImageType
media_session.mojom.MediaSessionImageType = {
};

// Enum: MediaPictureInPictureState
media_session.mojom.MediaPictureInPictureState = {
  kNotInPictureInPicture: 0,
  kInPictureInPicture: 1,
};

// Enum: MediaAudioVideoState
media_session.mojom.MediaAudioVideoState = {
  see: 0,
  kAudioOnly: 1,
  kAudioVideo: 2,
};

// Enum: MediaImageBitmapColorType
media_session.mojom.MediaImageBitmapColorType = {
  kRGBA_8888: 0,
  this: 1,
};

// Enum: MicrophoneState
media_session.mojom.MicrophoneState = {
  kMuted: 0,
  kUnmuted: 1,
};

// Enum: CameraState
media_session.mojom.CameraState = {
  kTurnedOn: 0,
  kTurnedOff: 1,
};

// Enum: SessionState
media_session.mojom.SessionState = {
};

// Enum: SuspendType
media_session.mojom.SuspendType = {
};

// Struct: MediaImage
media_session.mojom.MediaImage = class {
  constructor(values = {}) {
    this.sizes = values.sizes !== undefined ? values.sizes : "";
  }
};

// Struct: ChapterInformation
media_session.mojom.ChapterInformation = class {
  constructor(values = {}) {
    this.artwork = values.artwork !== undefined ? values.artwork : "";
  }
};

// Struct: MediaMetadata
media_session.mojom.MediaMetadata = class {
  constructor(values = {}) {
    this.chapters = values.chapters !== undefined ? values.chapters : "";
  }
};

// Struct: MediaImageBitmap
media_session.mojom.MediaImageBitmap = class {
  constructor(values = {}) {
    this.color_type = values.color_type !== undefined ? values.color_type : 0;
  }
};

// Struct: MediaPosition
media_session.mojom.MediaPosition = class {
  constructor(values = {}) {
    this.end_of_media = values.end_of_media !== undefined ? values.end_of_media : 0;
  }
};

// Struct: RemotePlaybackMetadata
media_session.mojom.RemotePlaybackMetadata = class {
  constructor(values = {}) {
    this.remote_playback_started@3 = values.remote_playback_started@3 !== undefined ? values.remote_playback_started@3 : false;
    this.is_encrypted_media@5 = values.is_encrypted_media@5 !== undefined ? values.is_encrypted_media@5 : false;
  }
};

// Struct: MediaSessionInfo
media_session.mojom.MediaSessionInfo = class {
  constructor(values = {}) {
    this.kActive = values.kActive !== undefined ? values.kActive : null;
  }
};

// Struct: MediaSessionDebugInfo
media_session.mojom.MediaSessionDebugInfo = class {
  constructor(values = {}) {
    this.state = values.state !== undefined ? values.state : "";
  }
};

// Interface: MediaSessionObserver
media_session.mojom.MediaSessionObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_session.mojom.MediaSessionObserver';
  }

};

media_session.mojom.MediaSessionObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaSession
media_session.mojom.MediaSessionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_session.mojom.MediaSession';
  }

};

media_session.mojom.MediaSessionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
