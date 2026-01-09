// Auto-generated MojoJS binding
// Source: chromium_src/components/heap_profiling/in_process/mojom/test_connector.mojom
// Module: heap_profiling.mojom

'use strict';

// Module namespace
var heap_profiling = heap_profiling || {};
heap_profiling.mojom = heap_profiling.mojom || {};


// Interface: TestConnector
heap_profiling.mojom.TestConnectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'heap_profiling.mojom.TestConnector';
  }

  connectSnapshotController(controller) {
    // Method: ConnectSnapshotController
    // Call: ConnectSnapshotController(controller)
  }

  connectProfileCollector(collector) {
    // Method: ConnectProfileCollector
    // Call: ConnectProfileCollector(collector)
  }

  disconnect() {
    // Method: Disconnect
    // Call: Disconnect()
  }

};

heap_profiling.mojom.TestConnectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
