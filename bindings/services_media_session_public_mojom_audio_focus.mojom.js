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

  0(state) {
    // Method: 0
    // Call: 0(state)
  }

  1(state) {
    // Method: 1
    // Call: 1(state)
  }

  onFocusGained() {
    // Method: OnFocusGained
    // Call: OnFocusGained()
  }

  onFocusLost() {
    // Method: OnFocusLost
    // Call: OnFocusLost()
  }

  2(request_id) {
    // Method: 2
    // Call: 2(request_id)
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

  0(session_info, type) {
    // Method: 0
    // Call: 0(session_info, type)
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  2(session_info) {
    // Method: 2
    // Call: 2(session_info)
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

  0(client, session, session_info, type) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(client, session, session_info, type)
      resolve({});
    });
  }

  4(request_id, client, session, session_info, type, group_id) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(request_id, client, session, session_info, type, group_id)
      resolve({});
    });
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
  }

  2(observer) {
    // Method: 2
    // Call: 2(observer)
  }

  context(profile) {
    // Method: context
    // Call: context(profile)
  }

  6(identity, name) {
    // Method: 6
    // Call: 6(identity, name)
  }

  5(mode) {
    // Method: 5
    // Call: 5(mode)
  }

  7(source_id, observer) {
    // Method: 7
    // Call: 7(source_id, observer)
  }

  8(source_id) {
    // Method: 8
    return new Promise((resolve) => {
      // Call: 8(source_id)
      resolve({});
    });
  }

  requestGroupedAudioFocus() {
    // Method: RequestGroupedAudioFocus
    // Call: RequestGroupedAudioFocus()
  }

  9(request_id) {
    // Method: 9
    // Call: 9(request_id)
  }

  10(exempted_request_id) {
    // Method: 10
    // Call: 10(exempted_request_id)
  }

  startDuckingAllAudio() {
    // Method: StartDuckingAllAudio
    // Call: StartDuckingAllAudio()
  }

  11() {
    // Method: 11
    // Call: 11()
  }

  12() {
    // Method: 12
    // Call: 12()
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

  0(request_id) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(request_id)
      resolve({});
    });
  }

};

media_session.mojom.AudioFocusManagerDebugRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
