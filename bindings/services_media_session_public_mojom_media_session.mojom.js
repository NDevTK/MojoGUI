// Auto-generated MojoJS binding
// Source: chromium_src/services/media_session/public/mojom/media_session.mojom
// Module: media_session.mojom

'use strict';

// Module namespace
var media_session = media_session || {};
media_session.mojom = media_session.mojom || {};


// Enum: MediaPlaybackState
media_session.mojom.MediaPlaybackState = {
};

// Enum: MediaSessionAction
media_session.mojom.MediaSessionAction = {
};

// Enum: MediaSessionImageType
media_session.mojom.MediaSessionImageType = {
};

// Enum: MediaPictureInPictureState
media_session.mojom.MediaPictureInPictureState = {
};

// Enum: MediaAudioVideoState
media_session.mojom.MediaAudioVideoState = {
};

// Enum: MediaImageBitmapColorType
media_session.mojom.MediaImageBitmapColorType = {
};

// Enum: MicrophoneState
media_session.mojom.MicrophoneState = {
};

// Enum: CameraState
media_session.mojom.CameraState = {
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
