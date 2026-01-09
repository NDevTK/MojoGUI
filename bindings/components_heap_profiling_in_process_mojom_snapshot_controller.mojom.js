// Auto-generated MojoJS binding
// Source: chromium_src/components/heap_profiling/in_process/mojom/snapshot_controller.mojom
// Module: heap_profiling.mojom

'use strict';

// Module namespace
var heap_profiling = heap_profiling || {};
heap_profiling.mojom = heap_profiling.mojom || {};


// Interface: SnapshotController
heap_profiling.mojom.SnapshotControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'heap_profiling.mojom.SnapshotController';
  }

  takeSnapshot(process_probability_pct, process_index) {
    // Method: TakeSnapshot
    // Call: TakeSnapshot(process_probability_pct, process_index)
  }

  logMetricsWithoutSnapshot() {
    // Method: LogMetricsWithoutSnapshot
    // Call: LogMetricsWithoutSnapshot()
  }

};

heap_profiling.mojom.SnapshotControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
