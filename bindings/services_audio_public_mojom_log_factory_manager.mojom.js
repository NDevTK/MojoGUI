// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/log_factory_manager.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};


// Interface: LogFactoryManager
audio.mojom.LogFactoryManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'audio.mojom.LogFactoryManager';
  }

  setLogFactory(factory) {
    // Method: SetLogFactory
    // Call: SetLogFactory(factory)
  }

};

audio.mojom.LogFactoryManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
