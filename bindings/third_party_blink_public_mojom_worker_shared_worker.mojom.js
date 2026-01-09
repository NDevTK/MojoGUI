// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: SharedWorker
blink.mojom.SharedWorkerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SharedWorker';
  }

  connect(connection_id, message_port) {
    // Method: Connect
    // Call: Connect(connection_id, message_port)
  }

  terminate() {
    // Method: Terminate
    // Call: Terminate()
  }

};

blink.mojom.SharedWorkerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
