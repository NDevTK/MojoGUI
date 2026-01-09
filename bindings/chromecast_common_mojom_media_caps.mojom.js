// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/media_caps.mojom
// Module: chromecast.media.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.media = chromecast.media || {};
chromecast.media.mojom = chromecast.media.mojom || {};


// Struct: CodecProfileLevel
chromecast.media.mojom.CodecProfileLevel = class {
  constructor(values = {}) {
    this.level = values.level !== undefined ? values.level : 0;
  }
};

// Interface: MediaCaps
chromecast.media.mojom.MediaCapsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.media.mojom.MediaCaps';
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

};

chromecast.media.mojom.MediaCapsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaCapsObserver
chromecast.media.mojom.MediaCapsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.media.mojom.MediaCapsObserver';
  }

  addSupportedCodecProfileLevel(codec_profile_level) {
    // Method: AddSupportedCodecProfileLevel
    // Call: AddSupportedCodecProfileLevel(codec_profile_level)
  }

};

chromecast.media.mojom.MediaCapsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
