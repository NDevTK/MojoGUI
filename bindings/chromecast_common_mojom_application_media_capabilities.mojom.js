// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/application_media_capabilities.mojom
// Module: chromecast.shell.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.shell = chromecast.shell || {};
chromecast.shell.mojom = chromecast.shell.mojom || {};


// Struct: BitstreamAudioCodecsInfo
chromecast.shell.mojom.BitstreamAudioCodecsInfo = class {
  constructor(values = {}) {
  }
};

// Interface: ApplicationMediaCapabilitiesObserver
chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver';
  }

  onSupportedBitstreamAudioCodecsChanged(info) {
    // Method: OnSupportedBitstreamAudioCodecsChanged
    // Call: OnSupportedBitstreamAudioCodecsChanged(info)
  }

};

chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ApplicationMediaCapabilities
chromecast.shell.mojom.ApplicationMediaCapabilitiesPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.shell.mojom.ApplicationMediaCapabilities';
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

};

chromecast.shell.mojom.ApplicationMediaCapabilitiesRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
