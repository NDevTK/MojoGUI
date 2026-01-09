// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/chunked_data_pipe_getter.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: ChunkedDataPipeGetter
network.mojom.ChunkedDataPipeGetterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.ChunkedDataPipeGetter';
  }

  getSize() {
    // Method: GetSize
    return new Promise((resolve) => {
      // Call: GetSize()
      resolve({});
    });
  }

  startReading(pipe) {
    // Method: StartReading
    // Call: StartReading(pipe)
  }

};

network.mojom.ChunkedDataPipeGetterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
