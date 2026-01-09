// Auto-generated MojoJS binding
// Source: chromium_src/components/services/heap_profiling/public/mojom/heap_profiling_client.mojom
// Module: heap_profiling.mojom

'use strict';

// Module namespace
var heap_profiling = heap_profiling || {};
heap_profiling.mojom = heap_profiling.mojom || {};


// Enum: StackMode
heap_profiling.mojom.StackMode = {
};

// Enum: AllocatorType
heap_profiling.mojom.AllocatorType = {
};

// Struct: ProfilingParams
heap_profiling.mojom.ProfilingParams = class {
  constructor(values = {}) {
    this.sampling_rate = values.sampling_rate !== undefined ? values.sampling_rate : 0;
  }
};

// Struct: HeapProfileSample
heap_profiling.mojom.HeapProfileSample = class {
  constructor(values = {}) {
    this.stack = values.stack !== undefined ? values.stack : 0;
  }
};

// Struct: HeapProfile
heap_profiling.mojom.HeapProfile = class {
  constructor(values = {}) {
    this.strings = values.strings !== undefined ? values.strings : 0;
  }
};

// Interface: ProfilingClient
heap_profiling.mojom.ProfilingClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'heap_profiling.mojom.ProfilingClient';
  }

  startProfiling(params) {
    // Method: StartProfiling
    // Call: StartProfiling(params)
  }

  retrieveHeapProfile() {
    // Method: RetrieveHeapProfile
    return new Promise((resolve) => {
      // Call: RetrieveHeapProfile()
      resolve({});
    });
  }

};

heap_profiling.mojom.ProfilingClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
