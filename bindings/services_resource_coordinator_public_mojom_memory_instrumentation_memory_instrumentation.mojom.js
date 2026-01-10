// Auto-generated MojoJS binding
// Source: chromium_src/services/resource_coordinator/public/mojom/memory_instrumentation/memory_instrumentation.mojom
// Module: memory_instrumentation.mojom

'use strict';

// Module namespace
var memory_instrumentation = memory_instrumentation || {};
memory_instrumentation.mojom = memory_instrumentation.mojom || {};


memory_instrumentation.mojom.kProtectionFlagsRead = 4;

memory_instrumentation.mojom.kProtectionFlagsWrite = 2;

memory_instrumentation.mojom.kProtectionFlagsExec = 1;

memory_instrumentation.mojom.kProtectionFlagsMayshare = 128;

// Enum: DumpType
memory_instrumentation.mojom.DumpType = {
  PERIODIC_INTERVAL: 0,
  EXPLICITLY_TRIGGERED: 1,
  SUMMARY_ONLY: 2,
};
memory_instrumentation.mojom.DumpTypeSpec = { $: mojo.internal.Enum() };

// Enum: LevelOfDetail
memory_instrumentation.mojom.LevelOfDetail = {
  BACKGROUND: 0,
  LIGHT: 1,
  DETAILED: 2,
};
memory_instrumentation.mojom.LevelOfDetailSpec = { $: mojo.internal.Enum() };

// Enum: Determinism
memory_instrumentation.mojom.Determinism = {
  NONE: 0,
  FORCE_GC: 1,
};
memory_instrumentation.mojom.DeterminismSpec = { $: mojo.internal.Enum() };

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
memory_instrumentation.mojom.ProcessTypeSpec = { $: mojo.internal.Enum() };

// Enum: MemoryMapOption
memory_instrumentation.mojom.MemoryMapOption = {
  NONE: 0,
  MODULES: 1,
  FULL: 2,
};
memory_instrumentation.mojom.MemoryMapOptionSpec = { $: mojo.internal.Enum() };

// Enum: MemDumpFlags
memory_instrumentation.mojom.MemDumpFlags = {
  MEM_DUMP_COUNT_MAPPINGS: 0,
  MEM_DUMP_PSS: 1,
  MEM_DUMP_PAGES_BITMAP: 2,
};
memory_instrumentation.mojom.MemDumpFlagsSpec = { $: mojo.internal.Enum() };

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
memory_instrumentation.mojom.RequestOutcomeSpec = { $: mojo.internal.Enum() };

// Union: RawAllocatorDumpEntryValue
memory_instrumentation.mojom.RawAllocatorDumpEntryValueSpec = { $: mojo.internal.Union(
    'memory_instrumentation.mojom.RawAllocatorDumpEntryValue', {
      'value_uint64': {
        'ordinal': 0,
        'type': mojo.internal.Uint64,
      }},
      'value_string': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Struct: RequestArgs
memory_instrumentation.mojom.RequestArgsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.RequestArgs',
      packedSize: 32,
      fields: [
        { name: 'dump_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'dump_type', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.DumpTypeSpec, nullable: false, minVersion: 0 },
        { name: 'level_of_detail', packedOffset: 12, packedBitOffset: 0, type: memory_instrumentation.mojom.LevelOfDetailSpec, nullable: false, minVersion: 0 },
        { name: 'determinism', packedOffset: 16, packedBitOffset: 0, type: memory_instrumentation.mojom.DeterminismSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: RawAllocatorDumpEdge
memory_instrumentation.mojom.RawAllocatorDumpEdgeSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.RawAllocatorDumpEdge',
      packedSize: 32,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'target_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'importance', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'overridable', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: RawAllocatorDumpEntry
memory_instrumentation.mojom.RawAllocatorDumpEntrySpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.RawAllocatorDumpEntry',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'units', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: memory_instrumentation.mojom.RawAllocatorDumpEntryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: RawAllocatorDump
memory_instrumentation.mojom.RawAllocatorDumpSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.RawAllocatorDump',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'absolute_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'weak', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'level_of_detail', packedOffset: 24, packedBitOffset: 0, type: memory_instrumentation.mojom.LevelOfDetailSpec, nullable: false, minVersion: 0 },
        { name: 'entries', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(memory_instrumentation.mojom.RawAllocatorDumpEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'level_of_detail', packedOffset: 16, packedBitOffset: 0, type: memory_instrumentation.mojom.LevelOfDetailSpec, nullable: false, minVersion: 0 },
        { name: 'allocator_dump_edges', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(memory_instrumentation.mojom.RawAllocatorDumpEdgeSpec, false), nullable: false, minVersion: 0 },
        { name: 'allocator_dumps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(memory_instrumentation.mojom.RawAllocatorDumpSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'kProtectionFlagsRead', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'kProtectionFlagsWrite', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'kProtectionFlagsExec', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'kProtectionFlagsMayshare', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'start_address', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'size_in_bytes', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'module_timestamp', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'module_debugid', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'module_debug_path', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'protection_flags', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'mapped_file', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'byte_stats_private_dirty_resident', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'byte_stats_private_clean_resident', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'byte_stats_shared_dirty_resident', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'byte_stats_shared_clean_resident', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'byte_stats_swapped', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'byte_locked', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'byte_stats_proportional_resident', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 152}]
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
        { name: 'phys_footprint_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'internal_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'compressed_bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'rss_anon_bytes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'vm_swap_bytes', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'private_bytes', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: RawOSMemDump
memory_instrumentation.mojom.RawOSMemDumpSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.RawOSMemDump',
      packedSize: 56,
      fields: [
        { name: 'resident_set_kb', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'peak_resident_set_kb', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'is_peak_rss_resettable', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'platform_private_footprint', packedOffset: 0, packedBitOffset: 0, type: memory_instrumentation.mojom.PlatformPrivateFootprintSpec, nullable: false, minVersion: 0 },
        { name: 'memory_maps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(memory_instrumentation.mojom.VmRegionSpec, false), nullable: false, minVersion: 0 },
        { name: 'native_library_pages_bitmap', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'mappings_count', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pss_kb', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'swap_pss_kb', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: OSMemDump
memory_instrumentation.mojom.OSMemDumpSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.OSMemDump',
      packedSize: 48,
      fields: [
        { name: 'resident_set_kb', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'peak_resident_set_kb', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'is_peak_rss_resettable', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'private_footprint_kb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'shared_footprint_kb', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'private_footprint_swap_kb', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'mappings_count', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pss_kb', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'swap_pss_kb', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
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
        { name: 'numeric_entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
        { name: 'children', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, memory_instrumentation.mojom.AllocatorMemDumpSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'process_type', packedOffset: 32, packedBitOffset: 0, type: memory_instrumentation.mojom.ProcessTypeSpec, nullable: false, minVersion: 0 },
        { name: 'os_dump', packedOffset: 0, packedBitOffset: 0, type: memory_instrumentation.mojom.OSMemDumpSpec, nullable: false, minVersion: 0 },
        { name: 'chrome_allocator_dumps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, memory_instrumentation.mojom.AllocatorMemDumpSpec, false), nullable: false, minVersion: 0 },
        { name: 'pid', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false, minVersion: 0 },
        { name: 'service_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
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
        { name: 'native_library_resident_kb', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'native_library_resident_not_ordered_kb', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'native_library_not_resident_ordered_kb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'process_dumps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(memory_instrumentation.mojom.ProcessMemoryDumpSpec, false), nullable: false, minVersion: 0 },
        { name: 'aggregated_metrics', packedOffset: 16, packedBitOffset: 0, type: memory_instrumentation.mojom.AggregatedMetricsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false, minVersion: 0 },
        { name: 'json', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.BigStringSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ClientProcess
memory_instrumentation.mojom.ClientProcess = {};

memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_Params',
      packedSize: 16,
      fields: [
        { name: 'args', packedOffset: 0, packedBitOffset: 0, type: memory_instrumentation.mojom.RequestArgsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_Params',
      packedSize: 32,
      fields: [
        { name: 'option', packedOffset: 16, packedBitOffset: 0, type: memory_instrumentation.mojom.MemoryMapOptionSpec, nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(memory_instrumentation.mojom.MemDumpFlagsSpec, false), nullable: false, minVersion: 0 },
        { name: 'pids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.ProcessIdSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

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
        { name: 'args', packedOffset: 0, packedBitOffset: 0, type: memory_instrumentation.mojom.RequestArgsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.ClientProcess.RequestChromeMemoryDump_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'outcome', packedOffset: 16, packedBitOffset: 0, type: memory_instrumentation.mojom.RequestOutcomeSpec, nullable: false, minVersion: 0 },
        { name: 'dump_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'raw_process_memory_dump', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.RawProcessMemoryDumpSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'option', packedOffset: 16, packedBitOffset: 0, type: memory_instrumentation.mojom.MemoryMapOptionSpec, nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(memory_instrumentation.mojom.MemDumpFlagsSpec, false), nullable: false, minVersion: 0 },
        { name: 'pids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.ProcessIdSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.ClientProcess.RequestOSMemoryDump_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'outcome', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.RequestOutcomeSpec, nullable: false, minVersion: 0 },
        { name: 'dumps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo_base.mojom.ProcessIdSpec, memory_instrumentation.mojom.RawOSMemDumpSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
memory_instrumentation.mojom.ClientProcessPtr = memory_instrumentation.mojom.ClientProcessRemote;
memory_instrumentation.mojom.ClientProcessRequest = memory_instrumentation.mojom.ClientProcessPendingReceiver;


// Interface: HeapProfiler
memory_instrumentation.mojom.HeapProfiler = {};

memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_Params',
      packedSize: 16,
      fields: [
        { name: 'strip_path_from_mapped_files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'write_proto', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
        { name: 'strip_path_from_mapped_files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'write_proto', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.HeapProfiler.DumpProcessesForTracing_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(memory_instrumentation.mojom.HeapProfileResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
memory_instrumentation.mojom.HeapProfilerPtr = memory_instrumentation.mojom.HeapProfilerRemote;
memory_instrumentation.mojom.HeapProfilerRequest = memory_instrumentation.mojom.HeapProfilerPendingReceiver;


// Interface: HeapProfilerHelper
memory_instrumentation.mojom.HeapProfilerHelper = {};

memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_Params',
      packedSize: 16,
      fields: [
        { name: 'pids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.ProcessIdSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
        { name: 'pids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.ProcessIdSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.HeapProfilerHelper.GetVmRegionsForHeapProfiler_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'vm_regions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo_base.mojom.ProcessIdSpec, mojo.internal.Array(memory_instrumentation.mojom.VmRegionSpec, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
memory_instrumentation.mojom.HeapProfilerHelperPtr = memory_instrumentation.mojom.HeapProfilerHelperRemote;
memory_instrumentation.mojom.HeapProfilerHelperRequest = memory_instrumentation.mojom.HeapProfilerHelperPendingReceiver;


// Interface: Coordinator
memory_instrumentation.mojom.Coordinator = {};

memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_Params',
      packedSize: 32,
      fields: [
        { name: 'dump_type', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.DumpTypeSpec, nullable: false, minVersion: 0 },
        { name: 'level_of_detail', packedOffset: 12, packedBitOffset: 0, type: memory_instrumentation.mojom.LevelOfDetailSpec, nullable: false, minVersion: 0 },
        { name: 'determinism', packedOffset: 16, packedBitOffset: 0, type: memory_instrumentation.mojom.DeterminismSpec, nullable: false, minVersion: 0 },
        { name: 'allocator_dump_names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_Params',
      packedSize: 24,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false, minVersion: 0 },
        { name: 'allocator_dump_names', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_Params',
      packedSize: 16,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_Params',
      packedSize: 24,
      fields: [
        { name: 'dump_type', packedOffset: 0, packedBitOffset: 0, type: memory_instrumentation.mojom.DumpTypeSpec, nullable: false, minVersion: 0 },
        { name: 'level_of_detail', packedOffset: 4, packedBitOffset: 0, type: memory_instrumentation.mojom.LevelOfDetailSpec, nullable: false, minVersion: 0 },
        { name: 'determinism', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.DeterminismSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      packedSize: 32,
      fields: [
        { name: 'dump_type', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.DumpTypeSpec, nullable: false, minVersion: 0 },
        { name: 'level_of_detail', packedOffset: 12, packedBitOffset: 0, type: memory_instrumentation.mojom.LevelOfDetailSpec, nullable: false, minVersion: 0 },
        { name: 'determinism', packedOffset: 16, packedBitOffset: 0, type: memory_instrumentation.mojom.DeterminismSpec, nullable: false, minVersion: 0 },
        { name: 'allocator_dump_names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestGlobalMemoryDump_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'outcome', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.RequestOutcomeSpec, nullable: false, minVersion: 0 },
        { name: 'global_memory_dump', packedOffset: 0, packedBitOffset: 0, type: memory_instrumentation.mojom.GlobalMemoryDumpSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false, minVersion: 0 },
        { name: 'allocator_dump_names', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestGlobalMemoryDumpForPid_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'outcome', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.RequestOutcomeSpec, nullable: false, minVersion: 0 },
        { name: 'global_memory_dump', packedOffset: 0, packedBitOffset: 0, type: memory_instrumentation.mojom.GlobalMemoryDumpSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestPrivateMemoryFootprint_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'outcome', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.RequestOutcomeSpec, nullable: false, minVersion: 0 },
        { name: 'global_memory_dump', packedOffset: 0, packedBitOffset: 0, type: memory_instrumentation.mojom.GlobalMemoryDumpSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RequestGlobalMemoryDumpAndAppendToTrace
memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestGlobalMemoryDumpAndAppendToTrace_Params',
      packedSize: 24,
      fields: [
        { name: 'dump_type', packedOffset: 0, packedBitOffset: 0, type: memory_instrumentation.mojom.DumpTypeSpec, nullable: false, minVersion: 0 },
        { name: 'level_of_detail', packedOffset: 4, packedBitOffset: 0, type: memory_instrumentation.mojom.LevelOfDetailSpec, nullable: false, minVersion: 0 },
        { name: 'determinism', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.DeterminismSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestGlobalMemoryDumpAndAppendToTrace_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'outcome', packedOffset: 8, packedBitOffset: 0, type: memory_instrumentation.mojom.RequestOutcomeSpec, nullable: false, minVersion: 0 },
        { name: 'dump_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
memory_instrumentation.mojom.CoordinatorPtr = memory_instrumentation.mojom.CoordinatorRemote;
memory_instrumentation.mojom.CoordinatorRequest = memory_instrumentation.mojom.CoordinatorPendingReceiver;


// Interface: CoordinatorConnector
memory_instrumentation.mojom.CoordinatorConnector = {};

memory_instrumentation.mojom.CoordinatorConnector_RegisterCoordinatorClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.CoordinatorConnector_RegisterCoordinatorClient_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(memory_instrumentation.mojom.CoordinatorRemote), nullable: false, minVersion: 0 },
        { name: 'client_process', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(memory_instrumentation.mojom.ClientProcessRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(memory_instrumentation.mojom.CoordinatorRemote), nullable: false, minVersion: 0 },
        { name: 'client_process', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(memory_instrumentation.mojom.ClientProcessRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
memory_instrumentation.mojom.CoordinatorConnectorPtr = memory_instrumentation.mojom.CoordinatorConnectorRemote;
memory_instrumentation.mojom.CoordinatorConnectorRequest = memory_instrumentation.mojom.CoordinatorConnectorPendingReceiver;

