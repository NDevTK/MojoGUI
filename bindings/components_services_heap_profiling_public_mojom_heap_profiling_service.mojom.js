// Auto-generated MojoJS binding
// Source: chromium_src/components/services/heap_profiling/public/mojom/heap_profiling_service.mojom
// Module: heap_profiling.mojom

'use strict';

// Module namespace
var heap_profiling = heap_profiling || {};
heap_profiling.mojom = heap_profiling.mojom || {};


// Enum: ProcessType
heap_profiling.mojom.ProcessType = {
  OTHER: 0,
  BROWSER: 1,
  RENDERER: 2,
  GPU: 3,
  LAST: 4,
};

// Interface: ProfilingService
heap_profiling.mojom.ProfilingServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'heap_profiling.mojom.ProfilingService';
  }

  addProfilingClient(pid, client, process_type, params) {
    // Method: AddProfilingClient
    return new Promise((resolve) => {
      // Call: AddProfilingClient(pid, client, process_type, params)
      resolve({});
    });
  }

  getProfiledPids() {
    // Method: GetProfiledPids
    return new Promise((resolve) => {
      // Call: GetProfiledPids()
      resolve({});
    });
  }

};

heap_profiling.mojom.ProfilingServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
