// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_connector.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: SharedWorkerConnector
blink.mojom.SharedWorkerConnectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SharedWorkerConnector';
  }

  connect(info, client, creation_context_type, message_port, blob_url_token) {
    // Method: Connect
    // Call: Connect(info, client, creation_context_type, message_port, blob_url_token)
  }

};

blink.mojom.SharedWorkerConnectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
