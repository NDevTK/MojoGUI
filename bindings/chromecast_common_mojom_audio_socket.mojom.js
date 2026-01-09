// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/audio_socket.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: AudioSocketBroker
chromecast.mojom.AudioSocketBrokerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.AudioSocketBroker';
  }

  getSocketDescriptor() {
    // Method: GetSocketDescriptor
    return new Promise((resolve) => {
      // Call: GetSocketDescriptor()
      resolve({});
    });
  }

};

chromecast.mojom.AudioSocketBrokerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
