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

// Interface: ClientProcess
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
      memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ParamsSpec.$,
      memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ResponseParamsSpec.$,
      [args]);
  }

  requestOSMemoryDump(option, flags, pids) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ParamsSpec.$,
      memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ResponseParamsSpec.$,
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
}};

// ParamsSpec for RequestChromeMemoryDump
memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.ClientProcess.RequestChromeMemoryDump_Params',
      packedSize: 16,
      fields: [
        { name: 'args', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.ClientProcess.RequestChromeMemoryDump_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'outcome', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'dump_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'raw_process_memory_dump', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestOSMemoryDump
memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.ClientProcess.RequestOSMemoryDump_Params',
      packedSize: 32,
      fields: [
        { name: 'option', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pids', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.ClientProcess.RequestOSMemoryDump_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'outcome', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'dumps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
memory_instrumentation.mojom.ClientProcessPtr = memory_instrumentation.mojom.ClientProcessRemote;
memory_instrumentation.mojom.ClientProcessRequest = memory_instrumentation.mojom.ClientProcessPendingReceiver;


// Interface: HeapProfiler
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
      memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ParamsSpec.$,
      memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ResponseParamsSpec.$,
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
}};

// ParamsSpec for DumpProcessesForTracing
memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.HeapProfiler.DumpProcessesForTracing_Params',
      packedSize: 24,
      fields: [
        { name: 'strip_path_from_mapped_files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'write_proto', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.HeapProfiler.DumpProcessesForTracing_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
memory_instrumentation.mojom.HeapProfilerPtr = memory_instrumentation.mojom.HeapProfilerRemote;
memory_instrumentation.mojom.HeapProfilerRequest = memory_instrumentation.mojom.HeapProfilerPendingReceiver;


// Interface: HeapProfilerHelper
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
      memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ParamsSpec.$,
      memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ResponseParamsSpec.$,
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
}};

// ParamsSpec for GetVmRegionsForHeapProfiler
memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.HeapProfilerHelper.GetVmRegionsForHeapProfiler_Params',
      packedSize: 16,
      fields: [
        { name: 'pids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.HeapProfilerHelper.GetVmRegionsForHeapProfiler_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'vm_regions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
memory_instrumentation.mojom.HeapProfilerHelperPtr = memory_instrumentation.mojom.HeapProfilerHelperRemote;
memory_instrumentation.mojom.HeapProfilerHelperRequest = memory_instrumentation.mojom.HeapProfilerHelperPendingReceiver;


// Interface: Coordinator
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
      memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ParamsSpec.$,
      memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ResponseParamsSpec.$,
      [dump_type, level_of_detail, determinism, allocator_dump_names]);
  }

  requestGlobalMemoryDumpForPid(pid, allocator_dump_names) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ParamsSpec.$,
      memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ResponseParamsSpec.$,
      [pid, allocator_dump_names]);
  }

  requestPrivateMemoryFootprint(pid) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ParamsSpec.$,
      memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ResponseParamsSpec.$,
      [pid]);
  }

  requestGlobalMemoryDumpAndAppendToTrace(dump_type, level_of_detail, determinism) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ParamsSpec.$,
      memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ResponseParamsSpec.$,
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
}};

// ParamsSpec for RequestGlobalMemoryDump
memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestGlobalMemoryDump_Params',
      packedSize: 40,
      fields: [
        { name: 'dump_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'level_of_detail', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'determinism', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'allocator_dump_names', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestGlobalMemoryDump_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'outcome', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'global_memory_dump', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestGlobalMemoryDumpForPid
memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestGlobalMemoryDumpForPid_Params',
      packedSize: 24,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'allocator_dump_names', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestGlobalMemoryDumpForPid_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'outcome', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'global_memory_dump', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestPrivateMemoryFootprint
memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestPrivateMemoryFootprint_Params',
      packedSize: 16,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestPrivateMemoryFootprint_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'outcome', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'global_memory_dump', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestGlobalMemoryDumpAndAppendToTrace
memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestGlobalMemoryDumpAndAppendToTrace_Params',
      packedSize: 32,
      fields: [
        { name: 'dump_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'level_of_detail', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'determinism', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.Coordinator.RequestGlobalMemoryDumpAndAppendToTrace_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'outcome', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'dump_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
memory_instrumentation.mojom.CoordinatorPtr = memory_instrumentation.mojom.CoordinatorRemote;
memory_instrumentation.mojom.CoordinatorRequest = memory_instrumentation.mojom.CoordinatorPendingReceiver;


// Interface: CoordinatorConnector
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
      memory_instrumentation.mojom.CoordinatorConnector_RegisterCoordinatorClient_ParamsSpec.$,
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
}};

// ParamsSpec for RegisterCoordinatorClient
memory_instrumentation.mojom.CoordinatorConnector_RegisterCoordinatorClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'memory_instrumentation.mojom.CoordinatorConnector.RegisterCoordinatorClient_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client_process', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
memory_instrumentation.mojom.CoordinatorConnectorPtr = memory_instrumentation.mojom.CoordinatorConnectorRemote;
memory_instrumentation.mojom.CoordinatorConnectorRequest = memory_instrumentation.mojom.CoordinatorConnectorPendingReceiver;

