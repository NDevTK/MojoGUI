// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_processing.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: AudioProcessingStats
media.mojom.AudioProcessingStats = class {
  constructor(values = {}) {
    this.echo_return_loss_enhancement = values.echo_return_loss_enhancement !== undefined ? values.echo_return_loss_enhancement : 0;
  }
};

// Struct: AudioProcessingSettings
media.mojom.AudioProcessingSettings = class {
  constructor(values = {}) {
    this.use_loopback_aec_reference = values.use_loopback_aec_reference !== undefined ? values.use_loopback_aec_reference : false;
  }
};

// Struct: AudioProcessingConfig
media.mojom.AudioProcessingConfig = class {
  constructor(values = {}) {
    this.settings = values.settings !== undefined ? values.settings : null;
  }
};

// Interface: AudioProcessorControls
media.mojom.AudioProcessorControlsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AudioProcessorControls';
  }

  getStats() {
    // Method: GetStats
    return new Promise((resolve) => {
      // Call: GetStats()
      resolve({});
    });
  }

  setPreferredNumCaptureChannels(num_preferred_channels) {
    // Method: SetPreferredNumCaptureChannels
    // Call: SetPreferredNumCaptureChannels(num_preferred_channels)
  }

};

media.mojom.AudioProcessorControlsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
