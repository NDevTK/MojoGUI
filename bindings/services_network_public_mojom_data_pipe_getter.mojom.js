// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/data_pipe_getter.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: DataPipeGetter
network.mojom.DataPipeGetterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.DataPipeGetter';
  }

  read(pipe) {
    // Method: Read
    return new Promise((resolve) => {
      // Call: Read(pipe)
      resolve({});
    });
  }

  clone(receiver) {
    // Method: Clone
    // Call: Clone(receiver)
  }

};

network.mojom.DataPipeGetterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
