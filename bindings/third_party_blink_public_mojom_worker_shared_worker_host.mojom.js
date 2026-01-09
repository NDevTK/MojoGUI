// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: SharedWorkerHost
blink.mojom.SharedWorkerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SharedWorkerHost';
  }

  onConnected(connection_id) {
    // Method: OnConnected
    // Call: OnConnected(connection_id)
  }

  onContextClosed() {
    // Method: OnContextClosed
    // Call: OnContextClosed()
  }

  onReadyForInspection(agent, agent_host) {
    // Method: OnReadyForInspection
    // Call: OnReadyForInspection(agent, agent_host)
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

blink.mojom.SharedWorkerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
