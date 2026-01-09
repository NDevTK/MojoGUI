// Auto-generated MojoJS binding
// Source: chromium_src/services/resource_coordinator/public/mojom/memory_instrumentation/memory_instrumentation.mojom
// Module: memory_instrumentation.mojom

'use strict';

// Module namespace
var memory_instrumentation = memory_instrumentation || {};
memory_instrumentation.mojom = memory_instrumentation.mojom || {};


// Enum: DumpType
memory_instrumentation.mojom.DumpType = {
  PERIODIC_INTERVAL: 0,
  EXPLICITLY_TRIGGERED: 1,
  SUMMARY_ONLY: 2,
};

// Enum: LevelOfDetail
memory_instrumentation.mojom.LevelOfDetail = {
  BACKGROUND: 0,
  LIGHT: 1,
  DETAILED: 2,
};

// Enum: Determinism
memory_instrumentation.mojom.Determinism = {
  NONE: 0,
  FORCE_GC: 1,
};

// Enum: ProcessType
memory_instrumentation.mojom.ProcessType = {
  OTHER: 0,
  BROWSER: 1,
  RENDERER: 2,
  GPU: 3,
  UTILITY: 4,
  PLUGIN: 5,
  ARC: 6,
};

// Enum: MemoryMapOption
memory_instrumentation.mojom.MemoryMapOption = {
  e: 0,
  system: 1,
};

// Enum: MemDumpFlags
memory_instrumentation.mojom.MemDumpFlags = {
  populate: 0,
  populate: 1,
  populate: 2,
};

// Enum: RequestOutcome
memory_instrumentation.mojom.RequestOutcome = {
};

// Struct: RequestArgs
memory_instrumentation.mojom.RequestArgs = class {
  constructor(values = {}) {
    this.determinism = values.determinism !== undefined ? values.determinism : 0;
  }
};

// Struct: RawAllocatorDumpEdge
memory_instrumentation.mojom.RawAllocatorDumpEdge = class {
  constructor(values = {}) {
    this.overridable = values.overridable !== undefined ? values.overridable : 0;
  }
};

// Struct: RawAllocatorDumpEntry
memory_instrumentation.mojom.RawAllocatorDumpEntry = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : "";
  }
};

// Struct: RawAllocatorDump
memory_instrumentation.mojom.RawAllocatorDump = class {
  constructor(values = {}) {
    this.entries = values.entries !== undefined ? values.entries : 0;
  }
};

// Struct: RawProcessMemoryDump
memory_instrumentation.mojom.RawProcessMemoryDump = class {
  constructor(values = {}) {
    this.allocator_dumps = values.allocator_dumps !== undefined ? values.allocator_dumps : [];
  }
};

// Struct: VmRegion
memory_instrumentation.mojom.VmRegion = class {
  constructor(values = {}) {
    this.byte_stats_proportional_resident = values.byte_stats_proportional_resident !== undefined ? values.byte_stats_proportional_resident : 0;
  }
};

// Struct: PlatformPrivateFootprint
memory_instrumentation.mojom.PlatformPrivateFootprint = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : 0;
    this.0 = values.0 !== undefined ? values.0 : 0;
    this.0 = values.0 !== undefined ? values.0 : 0;
  }
};

// Struct: RawOSMemDump
memory_instrumentation.mojom.RawOSMemDump = class {
  constructor(values = {}) {
    this.native_library_pages_bitmap = values.native_library_pages_bitmap !== undefined ? values.native_library_pages_bitmap : 0;
    this.0 = values.0 !== undefined ? values.0 : 0;
  }
};

// Struct: OSMemDump
memory_instrumentation.mojom.OSMemDump = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : 0;
    this.false = values.false !== undefined ? values.false : 0;
    this.swapped = values.swapped !== undefined ? values.swapped : null;
    this.0 = values.0 !== undefined ? values.0 : 0;
    this.memory = values.memory !== undefined ? values.memory : null;
    this.0 = values.0 !== undefined ? values.0 : 0;
    this.0 = values.0 !== undefined ? values.0 : 0;
    this.0 = values.0 !== undefined ? values.0 : 0;
  }
};

// Struct: AllocatorMemDump
memory_instrumentation.mojom.AllocatorMemDump = class {
  constructor(values = {}) {
    this.children = values.children !== undefined ? values.children : 0;
  }
};

// Struct: ProcessMemoryDump
memory_instrumentation.mojom.ProcessMemoryDump = class {
  constructor(values = {}) {
    this.chrome_allocator_dumps = values.chrome_allocator_dumps !== undefined ? values.chrome_allocator_dumps : "";
    this.a = values.a !== undefined ? values.a : null;
    this.service = values.service !== undefined ? values.service : 0;
    this.pid = values.pid !== undefined ? values.pid : null;
    this.service_name = values.service_name !== undefined ? values.service_name : "";
  }
};

// Struct: AggregatedMetrics
memory_instrumentation.mojom.AggregatedMetrics = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : 0;
  }
};

// Struct: GlobalMemoryDump
memory_instrumentation.mojom.GlobalMemoryDump = class {
  constructor(values = {}) {
    this.time = values.time !== undefined ? values.time : null;
    this.aggregated_metrics = values.aggregated_metrics !== undefined ? values.aggregated_metrics : [];
  }
};

// Struct: HeapProfileResult
memory_instrumentation.mojom.HeapProfileResult = class {
  constructor(values = {}) {
    this.json = values.json !== undefined ? values.json : "";
  }
};

// Interface: ClientProcess
memory_instrumentation.mojom.ClientProcessPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'memory_instrumentation.mojom.ClientProcess';
  }

  requestChromeMemoryDump(args) {
    // Method: RequestChromeMemoryDump
    return new Promise((resolve) => {
      // Call: RequestChromeMemoryDump(args)
      resolve({});
    });
  }

  requestOSMemoryDump(option, flags, pids) {
    // Method: RequestOSMemoryDump
    return new Promise((resolve) => {
      // Call: RequestOSMemoryDump(option, flags, pids)
      resolve({});
    });
  }

};

memory_instrumentation.mojom.ClientProcessRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HeapProfiler
memory_instrumentation.mojom.HeapProfilerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'memory_instrumentation.mojom.HeapProfiler';
  }

  dumpProcessesForTracing(strip_path_from_mapped_files, write_proto) {
    // Method: DumpProcessesForTracing
    return new Promise((resolve) => {
      // Call: DumpProcessesForTracing(strip_path_from_mapped_files, write_proto)
      resolve({});
    });
  }

};

memory_instrumentation.mojom.HeapProfilerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HeapProfilerHelper
memory_instrumentation.mojom.HeapProfilerHelperPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'memory_instrumentation.mojom.HeapProfilerHelper';
  }

  getVmRegionsForHeapProfiler(pids) {
    // Method: GetVmRegionsForHeapProfiler
    return new Promise((resolve) => {
      // Call: GetVmRegionsForHeapProfiler(pids)
      resolve({});
    });
  }

};

memory_instrumentation.mojom.HeapProfilerHelperRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Coordinator
memory_instrumentation.mojom.CoordinatorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'memory_instrumentation.mojom.Coordinator';
  }

};

memory_instrumentation.mojom.CoordinatorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CoordinatorConnector
memory_instrumentation.mojom.CoordinatorConnectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'memory_instrumentation.mojom.CoordinatorConnector';
  }

  registerCoordinatorClient(receiver, client_process) {
    // Method: RegisterCoordinatorClient
    // Call: RegisterCoordinatorClient(receiver, client_process)
  }

};

memory_instrumentation.mojom.CoordinatorConnectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
