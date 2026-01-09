// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/enhanced_network_tts/mojom/enhanced_network_tts.mojom
// Module: ash.enhanced_network_tts.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.enhanced_network_tts = ash.enhanced_network_tts || {};
ash.enhanced_network_tts.mojom = ash.enhanced_network_tts.mojom || {};


// Enum: TtsRequestError
ash.enhanced_network_tts.mojom.TtsRequestError = {
};

// Struct: TtsRequest
ash.enhanced_network_tts.mojom.TtsRequest = class {
  constructor(values = {}) {
    this.utterance = values.utterance !== undefined ? values.utterance : "";
    this.lang = values.lang !== undefined ? values.lang : 0;
  }
};

// Struct: TimingInfo
ash.enhanced_network_tts.mojom.TimingInfo = class {
  constructor(values = {}) {
    this.duration = values.duration !== undefined ? values.duration : 0;
  }
};

// Struct: TtsData
ash.enhanced_network_tts.mojom.TtsData = class {
  constructor(values = {}) {
    this.last_data = values.last_data !== undefined ? values.last_data : 0;
  }
};

// Interface: EnhancedNetworkTts
ash.enhanced_network_tts.mojom.EnhancedNetworkTtsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.enhanced_network_tts.mojom.EnhancedNetworkTts';
  }

  getAudioData(request) {
    // Method: GetAudioData
    return new Promise((resolve) => {
      // Call: GetAudioData(request)
      resolve({});
    });
  }

};

ash.enhanced_network_tts.mojom.EnhancedNetworkTtsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AudioDataObserver
ash.enhanced_network_tts.mojom.AudioDataObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.enhanced_network_tts.mojom.AudioDataObserver';
  }

  onAudioDataReceived(response) {
    // Method: OnAudioDataReceived
    // Call: OnAudioDataReceived(response)
  }

};

ash.enhanced_network_tts.mojom.AudioDataObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
