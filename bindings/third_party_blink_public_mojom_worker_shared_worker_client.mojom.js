// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_client.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: SharedWorkerClient
blink.mojom.SharedWorkerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SharedWorkerClient';
  }

  onCreated(creation_context_type) {
    // Method: OnCreated
    // Call: OnCreated(creation_context_type)
  }

  onConnected(features_used) {
    // Method: OnConnected
    // Call: OnConnected(features_used)
  }

  onScriptLoadFailed(error_message) {
    // Method: OnScriptLoadFailed
    // Call: OnScriptLoadFailed(error_message)
  }

  onReportException(details) {
    // Method: OnReportException
    // Call: OnReportException(details)
  }

  onFeatureUsed(feature) {
    // Method: OnFeatureUsed
    // Call: OnFeatureUsed(feature)
  }

};

blink.mojom.SharedWorkerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
