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
  NONE: 0,
  MODULES: 1,
  FULL: 2,
};

// Enum: MemDumpFlags
memory_instrumentation.mojom.MemDumpFlags = {
  MEM_DUMP_COUNT_MAPPINGS: 0,
  MEM_DUMP_PSS: 1,
  MEM_DUMP_PAGES_BITMAP: 2,
};

// Enum: RequestOutcome
memory_instrumentation.mojom.RequestOutcome = {
  kSuccess: 0,
  kRedundant: 1,
  kFillOsMemoryDumpFailed: 2,
  kFillProcessMemoryMapsFailed: 3,
  kNullPid: 4,
  kProcessNotFound: 5,
  kInvalidTracingState: 6,
  kProcessUnregistered: 7,
  kTimeout: 8,
  kInProcessMemoryDumpFailed: 9,
};

// Struct: RequestArgs
memory_instrumentation.mojom.RequestArgsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.RequestArgs',
      packedSize: 40,
      fields: [
        { name: 'dump_guid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'dump_type', packedOffset: 16, packedBitOffset: 0, type: memory_instrumentation.mojom.DumpTypeSpec, nullable: false },
        { name: 'level_of_detail', packedOffset: 24, packedBitOffset: 0, type: memory_instrumentation.mojom.LevelOfDetailSpec, nullable: false },
        { name: 'determinism', packedOffset: 32, packedBitOffset: 0, type: memory_instrumentation.mojom.DeterminismSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RawAllocatorDumpEdge
memory_instrumentation.mojom.RawAllocatorDumpEdgeSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.RawAllocatorDumpEdge',
      packedSize: 40,
      fields: [
        { name: 'source_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'target_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'importance', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'overridable', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RawAllocatorDumpEntry
memory_instrumentation.mojom.RawAllocatorDumpEntrySpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.RawAllocatorDumpEntry',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'units', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'value', packedOffset: 24, packedBitOffset: 0, type: memory_instrumentation.mojom.RawAllocatorDumpEntryValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RawAllocatorDump
memory_instrumentation.mojom.RawAllocatorDumpSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.RawAllocatorDump',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'absolute_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'weak', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'level_of_detail', packedOffset: 32, packedBitOffset: 0, type: memory_instrumentation.mojom.LevelOfDetailSpec, nullable: false },
        { name: 'entries', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RawProcessMemoryDump
memory_instrumentation.mojom.RawProcessMemoryDumpSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.RawProcessMemoryDump',
      packedSize: 32,
      fields: [
        { name: 'level_of_detail', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.LevelOfDetailSpec, nullable: false },
        { name: 'allocator_dump_edges', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'allocator_dumps', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VmRegion
memory_instrumentation.mojom.VmRegionSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.VmRegion',
      packedSize: 152,
      fields: [
        { name: 'kProtectionFlagsRead', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'kProtectionFlagsWrite', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'kProtectionFlagsExec', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'kProtectionFlagsMayshare', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'start_address', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'size_in_bytes', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'module_timestamp', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'module_debugid', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'module_debug_path', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'protection_flags', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'mapped_file', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'byte_stats_private_dirty_resident', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'byte_stats_private_clean_resident', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'byte_stats_shared_dirty_resident', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'byte_stats_shared_clean_resident', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'byte_stats_swapped', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'byte_locked', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'byte_stats_proportional_resident', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PlatformPrivateFootprint
memory_instrumentation.mojom.PlatformPrivateFootprintSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.PlatformPrivateFootprint',
      packedSize: 56,
      fields: [
        { name: 'phys_footprint_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'internal_bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'compressed_bytes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'rss_anon_bytes', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'vm_swap_bytes', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'private_bytes', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RawOSMemDump
memory_instrumentation.mojom.RawOSMemDumpSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.RawOSMemDump',
      packedSize: 72,
      fields: [
        { name: 'resident_set_kb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'peak_resident_set_kb', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'is_peak_rss_resettable', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'platform_private_footprint', packedOffset: 24, packedBitOffset: 0, type: memory_instrumentation.mojom.PlatformPrivateFootprintSpec, nullable: false },
        { name: 'memory_maps', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'native_library_pages_bitmap', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'mappings_count', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pss_kb', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'swap_pss_kb', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OSMemDump
memory_instrumentation.mojom.OSMemDumpSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.OSMemDump',
      packedSize: 64,
      fields: [
        { name: 'resident_set_kb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'peak_resident_set_kb', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'is_peak_rss_resettable', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'private_footprint_kb', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'shared_footprint_kb', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'private_footprint_swap_kb', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'mappings_count', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pss_kb', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'swap_pss_kb', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AllocatorMemDump
memory_instrumentation.mojom.AllocatorMemDumpSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.AllocatorMemDump',
      packedSize: 24,
      fields: [
        { name: 'numeric_entries', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'children', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProcessMemoryDump
memory_instrumentation.mojom.ProcessMemoryDumpSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.ProcessMemoryDump',
      packedSize: 48,
      fields: [
        { name: 'process_type', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.ProcessTypeSpec, nullable: false },
        { name: 'os_dump', packedOffset: 16, packedBitOffset: 0, type: memory_instrumentation.mojom.OSMemDumpSpec, nullable: false },
        { name: 'chrome_allocator_dumps', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'pid', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false },
        { name: 'service_name', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AggregatedMetrics
memory_instrumentation.mojom.AggregatedMetricsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.AggregatedMetrics',
      packedSize: 24,
      fields: [
        { name: 'native_library_resident_kb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'native_library_resident_not_ordered_kb', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'native_library_not_resident_ordered_kb', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GlobalMemoryDump
memory_instrumentation.mojom.GlobalMemoryDumpSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.GlobalMemoryDump',
      packedSize: 32,
      fields: [
        { name: 'start_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'process_dumps', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'aggregated_metrics', packedOffset: 24, packedBitOffset: 0, type: memory_instrumentation.mojom.AggregatedMetricsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HeapProfileResult
memory_instrumentation.mojom.HeapProfileResultSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.HeapProfileResult',
      packedSize: 24,
      fields: [
        { name: 'pid', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false },
        { name: 'json', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.BigStringSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ClientProcess
memory_instrumentation.mojom.ClientProcess = {};

memory_instrumentation.mojom.ClientProcessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

memory_instrumentation.mojom.ClientProcessRemote = class {
  static get $interfaceName() {
    return 'memory_instrumentation.mojom.ClientProcess';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      memory_instrumentation.mojom.ClientProcessPendingReceiver,
      handle);
    this.$ = new memory_instrumentation.mojom.ClientProcessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

memory_instrumentation.mojom.ClientProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestChromeMemoryDump(args) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ParamsSpec,
      memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ResponseParamsSpec,
      [args]);
  }

  requestOSMemoryDump(option, flags, pids) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ParamsSpec,
      memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ResponseParamsSpec,
      [option, flags, pids]);
  }

};

memory_instrumentation.mojom.ClientProcess.getRemote = function() {
  let remote = new memory_instrumentation.mojom.ClientProcessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'memory_instrumentation.mojom.ClientProcess',
    'context');
  return remote.$;
};

// ParamsSpec for RequestChromeMemoryDump
memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.ClientProcess.RequestChromeMemoryDump_Params',
      packedSize: 16,
      fields: [
        { name: 'args', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.RequestArgsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.ClientProcess.RequestChromeMemoryDump_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'outcome', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.RequestOutcomeSpec, nullable: false },
        { name: 'dump_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'raw_process_memory_dump', packedOffset: 24, packedBitOffset: 0, type: memory_instrumentation.mojom.RawProcessMemoryDumpSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestOSMemoryDump
memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.ClientProcess.RequestOSMemoryDump_Params',
      packedSize: 32,
      fields: [
        { name: 'option', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.MemoryMapOptionSpec, nullable: false },
        { name: 'flags', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'pids', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.ClientProcess.RequestOSMemoryDump_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'outcome', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.RequestOutcomeSpec, nullable: false },
        { name: 'dumps', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
memory_instrumentation.mojom.ClientProcessPtr = memory_instrumentation.mojom.ClientProcessRemote;
memory_instrumentation.mojom.ClientProcessRequest = memory_instrumentation.mojom.ClientProcessPendingReceiver;


// Interface: HeapProfiler
memory_instrumentation.mojom.HeapProfiler = {};

memory_instrumentation.mojom.HeapProfilerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

memory_instrumentation.mojom.HeapProfilerRemote = class {
  static get $interfaceName() {
    return 'memory_instrumentation.mojom.HeapProfiler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      memory_instrumentation.mojom.HeapProfilerPendingReceiver,
      handle);
    this.$ = new memory_instrumentation.mojom.HeapProfilerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

memory_instrumentation.mojom.HeapProfilerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dumpProcessesForTracing(strip_path_from_mapped_files, write_proto) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ParamsSpec,
      memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ResponseParamsSpec,
      [strip_path_from_mapped_files, write_proto]);
  }

};

memory_instrumentation.mojom.HeapProfiler.getRemote = function() {
  let remote = new memory_instrumentation.mojom.HeapProfilerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'memory_instrumentation.mojom.HeapProfiler',
    'context');
  return remote.$;
};

// ParamsSpec for DumpProcessesForTracing
memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.HeapProfiler.DumpProcessesForTracing_Params',
      packedSize: 16,
      fields: [
        { name: 'strip_path_from_mapped_files', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'write_proto', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.HeapProfiler.DumpProcessesForTracing_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
memory_instrumentation.mojom.HeapProfilerPtr = memory_instrumentation.mojom.HeapProfilerRemote;
memory_instrumentation.mojom.HeapProfilerRequest = memory_instrumentation.mojom.HeapProfilerPendingReceiver;


// Interface: HeapProfilerHelper
memory_instrumentation.mojom.HeapProfilerHelper = {};

memory_instrumentation.mojom.HeapProfilerHelperPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

memory_instrumentation.mojom.HeapProfilerHelperRemote = class {
  static get $interfaceName() {
    return 'memory_instrumentation.mojom.HeapProfilerHelper';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      memory_instrumentation.mojom.HeapProfilerHelperPendingReceiver,
      handle);
    this.$ = new memory_instrumentation.mojom.HeapProfilerHelperRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

memory_instrumentation.mojom.HeapProfilerHelperRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getVmRegionsForHeapProfiler(pids) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ParamsSpec,
      memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ResponseParamsSpec,
      [pids]);
  }

};

memory_instrumentation.mojom.HeapProfilerHelper.getRemote = function() {
  let remote = new memory_instrumentation.mojom.HeapProfilerHelperRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'memory_instrumentation.mojom.HeapProfilerHelper',
    'context');
  return remote.$;
};

// ParamsSpec for GetVmRegionsForHeapProfiler
memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.HeapProfilerHelper.GetVmRegionsForHeapProfiler_Params',
      packedSize: 16,
      fields: [
        { name: 'pids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.HeapProfilerHelper.GetVmRegionsForHeapProfiler_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'vm_regions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
memory_instrumentation.mojom.HeapProfilerHelperPtr = memory_instrumentation.mojom.HeapProfilerHelperRemote;
memory_instrumentation.mojom.HeapProfilerHelperRequest = memory_instrumentation.mojom.HeapProfilerHelperPendingReceiver;


// Interface: Coordinator
memory_instrumentation.mojom.Coordinator = {};

memory_instrumentation.mojom.CoordinatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

memory_instrumentation.mojom.CoordinatorRemote = class {
  static get $interfaceName() {
    return 'memory_instrumentation.mojom.Coordinator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      memory_instrumentation.mojom.CoordinatorPendingReceiver,
      handle);
    this.$ = new memory_instrumentation.mojom.CoordinatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

memory_instrumentation.mojom.CoordinatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestGlobalMemoryDump(dump_type, level_of_detail, determinism, allocator_dump_names) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ParamsSpec,
      memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ResponseParamsSpec,
      [dump_type, level_of_detail, determinism, allocator_dump_names]);
  }

  requestGlobalMemoryDumpForPid(pid, allocator_dump_names) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ParamsSpec,
      memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ResponseParamsSpec,
      [pid, allocator_dump_names]);
  }

  requestPrivateMemoryFootprint(pid) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ParamsSpec,
      memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ResponseParamsSpec,
      [pid]);
  }

  requestGlobalMemoryDumpAndAppendToTrace(dump_type, level_of_detail, determinism) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ParamsSpec,
      memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ResponseParamsSpec,
      [dump_type, level_of_detail, determinism]);
  }

};

memory_instrumentation.mojom.Coordinator.getRemote = function() {
  let remote = new memory_instrumentation.mojom.CoordinatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'memory_instrumentation.mojom.Coordinator',
    'context');
  return remote.$;
};

// ParamsSpec for RequestGlobalMemoryDump
memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestGlobalMemoryDump_Params',
      packedSize: 40,
      fields: [
        { name: 'dump_type', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.DumpTypeSpec, nullable: false },
        { name: 'level_of_detail', packedOffset: 16, packedBitOffset: 0, type: memory_instrumentation.mojom.LevelOfDetailSpec, nullable: false },
        { name: 'determinism', packedOffset: 24, packedBitOffset: 0, type: memory_instrumentation.mojom.DeterminismSpec, nullable: false },
        { name: 'allocator_dump_names', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestGlobalMemoryDump_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'outcome', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.RequestOutcomeSpec, nullable: false },
        { name: 'global_memory_dump', packedOffset: 16, packedBitOffset: 0, type: memory_instrumentation.mojom.GlobalMemoryDumpSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestGlobalMemoryDumpForPid
memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestGlobalMemoryDumpForPid_Params',
      packedSize: 24,
      fields: [
        { name: 'pid', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false },
        { name: 'allocator_dump_names', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestGlobalMemoryDumpForPid_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'outcome', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.RequestOutcomeSpec, nullable: false },
        { name: 'global_memory_dump', packedOffset: 16, packedBitOffset: 0, type: memory_instrumentation.mojom.GlobalMemoryDumpSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestPrivateMemoryFootprint
memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestPrivateMemoryFootprint_Params',
      packedSize: 16,
      fields: [
        { name: 'pid', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestPrivateMemoryFootprint_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'outcome', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.RequestOutcomeSpec, nullable: false },
        { name: 'global_memory_dump', packedOffset: 16, packedBitOffset: 0, type: memory_instrumentation.mojom.GlobalMemoryDumpSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestGlobalMemoryDumpAndAppendToTrace
memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestGlobalMemoryDumpAndAppendToTrace_Params',
      packedSize: 32,
      fields: [
        { name: 'dump_type', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.DumpTypeSpec, nullable: false },
        { name: 'level_of_detail', packedOffset: 16, packedBitOffset: 0, type: memory_instrumentation.mojom.LevelOfDetailSpec, nullable: false },
        { name: 'determinism', packedOffset: 24, packedBitOffset: 0, type: memory_instrumentation.mojom.DeterminismSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestGlobalMemoryDumpAndAppendToTrace_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'outcome', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.RequestOutcomeSpec, nullable: false },
        { name: 'dump_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
memory_instrumentation.mojom.CoordinatorPtr = memory_instrumentation.mojom.CoordinatorRemote;
memory_instrumentation.mojom.CoordinatorRequest = memory_instrumentation.mojom.CoordinatorPendingReceiver;


// Interface: CoordinatorConnector
memory_instrumentation.mojom.CoordinatorConnector = {};

memory_instrumentation.mojom.CoordinatorConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

memory_instrumentation.mojom.CoordinatorConnectorRemote = class {
  static get $interfaceName() {
    return 'memory_instrumentation.mojom.CoordinatorConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      memory_instrumentation.mojom.CoordinatorConnectorPendingReceiver,
      handle);
    this.$ = new memory_instrumentation.mojom.CoordinatorConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

memory_instrumentation.mojom.CoordinatorConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerCoordinatorClient(receiver, client_process) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      memory_instrumentation.mojom.CoordinatorConnector_RegisterCoordinatorClient_ParamsSpec,
      null,
      [receiver, client_process]);
  }

};

memory_instrumentation.mojom.CoordinatorConnector.getRemote = function() {
  let remote = new memory_instrumentation.mojom.CoordinatorConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'memory_instrumentation.mojom.CoordinatorConnector',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterCoordinatorClient
memory_instrumentation.mojom.CoordinatorConnector_RegisterCoordinatorClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.CoordinatorConnector.RegisterCoordinatorClient_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'client_process', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
memory_instrumentation.mojom.CoordinatorConnectorPtr = memory_instrumentation.mojom.CoordinatorConnectorRemote;
memory_instrumentation.mojom.CoordinatorConnectorRequest = memory_instrumentation.mojom.CoordinatorConnectorPendingReceiver;

