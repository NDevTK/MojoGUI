// Auto-generated MojoJS binding
// Source: chromium_src/services/media_session/public/mojom/audio_focus.mojom
// Module: media_session.mojom

'use strict';

// Module namespace
var media_session = media_session || {};
media_session.mojom = media_session.mojom || {};


// Enum: EnforcementMode
media_session.mojom.EnforcementMode = {
  without: 0,
};

// Enum: AudioFocusType
media_session.mojom.AudioFocusType = {
  when: 0,
};

// Struct: AudioFocusRequestState
media_session.mojom.AudioFocusRequestState = class {
  constructor(values = {}) {
    this.source_id = values.source_id !== undefined ? values.source_id : "";
  }
};

// Interface: AudioFocusObserver
media_session.mojom.AudioFocusObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_session.mojom.AudioFocusObserver';
  }

};

media_session.mojom.AudioFocusObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AudioFocusRequestClient
media_session.mojom.AudioFocusRequestClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_session.mojom.AudioFocusRequestClient';
  }

};

media_session.mojom.AudioFocusRequestClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AudioFocusManager
media_session.mojom.AudioFocusManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_session.mojom.AudioFocusManager';
  }

};

media_session.mojom.AudioFocusManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AudioFocusManagerDebug
media_session.mojom.AudioFocusManagerDebugPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_session.mojom.AudioFocusManagerDebug';
  }

};

media_session.mojom.AudioFocusManagerDebugRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
