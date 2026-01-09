// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/tts.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: TtsEventType
arc.mojom.TtsEventType = {
  START: 0,
  END: 1,
  INTERRUPTED: 2,
  ERROR: 3,
  WORD: 4,
};

// Struct: TtsUtterance
arc.mojom.TtsUtterance = class {
  constructor(values = {}) {
    this.voice_id = values.voice_id !== undefined ? values.voice_id : 0;
  }
};

// Struct: TtsVoice
arc.mojom.TtsVoice = class {
  constructor(values = {}) {
    this.is_network_connection_required = values.is_network_connection_required !== undefined ? values.is_network_connection_required : 0;
  }
};

// Interface: TtsHost
arc.mojom.TtsHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.TtsHost';
  }

  1(voices) {
    // Method: 1
    // Call: 1(voices)
  }

  2(utteranceId, event_type, char_index, length, error_msg) {
    // Method: 2
    // Call: 2(utteranceId, event_type, char_index, length, error_msg)
  }

};

arc.mojom.TtsHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TtsInstance
arc.mojom.TtsInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.TtsInstance';
  }

  3(host_remote) {
    // Method: 3
    // Call: 3(host_remote)
  }

  1(utterance) {
    // Method: 1
    // Call: 1(utterance)
  }

  2() {
    // Method: 2
    // Call: 2()
  }

  4() {
    // Method: 4
    // Call: 4()
  }

};

arc.mojom.TtsInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
