// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_engine.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};


// Interface: InputChannel
ash.ime.mojom.InputChannelPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.ime.mojom.InputChannel';
  }

  processMessage(message) {
    // Method: ProcessMessage
    return new Promise((resolve) => {
      // Call: ProcessMessage(message)
      resolve({});
    });
  }

};

ash.ime.mojom.InputChannelRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
