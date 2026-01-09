// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/testing_api.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};


// Interface: TestingApi
audio.mojom.TestingApiPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'audio.mojom.TestingApi';
  }

  crash() {
    // Method: Crash
    // Call: Crash()
  }

};

audio.mojom.TestingApiRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
