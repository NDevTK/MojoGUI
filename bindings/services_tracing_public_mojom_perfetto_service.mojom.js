// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/perfetto_service.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};


tracing.mojom.kPerfettoProducerNamePrefix = "org.chromium-";

tracing.mojom.kTraceEventDataSourceName = "org.chromium.trace_event";

tracing.mojom.kMemoryInstrumentationDataSourceName = "org.chromium.memory_instrumentation";

tracing.mojom.kMetaData2SourceName = "org.chromium.trace_metadata2";

tracing.mojom.kSystemTraceDataSourceName = "org.chromium.trace_system";

tracing.mojom.kArcTraceDataSourceName = "org.chromium.trace_arc";

tracing.mojom.kSamplerProfilerSourceName = "org.chromium.sampler_profiler";

tracing.mojom.kJavaHeapProfilerSourceName = "org.chromium.java_heap_profiler";

tracing.mojom.kNativeHeapProfilerSourceName = "org.chromium.native_heap_profiler";

tracing.mojom.kSystemMetricsSourceName = "org.chromium.system_metrics";

tracing.mojom.kHistogramSampleSourceName = "org.chromium.histogram_sample";

// Enum: ConsoleOutput
tracing.mojom.ConsoleOutput = {
  kOutputUnspecified: 0,
  kOutputStdOut: 1,
  kOutputStdErr: 2,
};
tracing.mojom.ConsoleOutputSpec = { $: mojo.internal.Enum() };

// Enum: BufferFillPolicy
tracing.mojom.BufferFillPolicy = {
  kUnspecified: 0,
  kRingBuffer: 1,
  kDiscard: 2,
};
tracing.mojom.BufferFillPolicySpec = { $: mojo.internal.Enum() };

// Enum: TracingClientPriority
tracing.mojom.TracingClientPriority = {
  kUnknown: 0,
  kBackground: 1,
  kUserInitiated: 2,
};
tracing.mojom.TracingClientPrioritySpec = { $: mojo.internal.Enum() };

// Struct: ChunksToMove
tracing.mojom.ChunksToMoveSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ChunksToMove',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'chunk', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'target_buffer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ChunkPatch
tracing.mojom.ChunkPatchSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ChunkPatch',
      packedSize: 24,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ChunksToPatch
tracing.mojom.ChunksToPatchSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ChunksToPatch',
      packedSize: 32,
      fields: [
        { name: 'target_buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'writer_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'chunk_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'patches', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(tracing.mojom.ChunkPatchSpec, false), nullable: false, minVersion: 0 },
        { name: 'has_more_patches', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CommitDataRequest
tracing.mojom.CommitDataRequestSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.CommitDataRequest',
      packedSize: 32,
      fields: [
        { name: 'chunks_to_move', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tracing.mojom.ChunksToMoveSpec, false), nullable: false, minVersion: 0 },
        { name: 'chunks_to_patch', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(tracing.mojom.ChunksToPatchSpec, false), nullable: false, minVersion: 0 },
        { name: 'flush_request_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ChromeConfig
tracing.mojom.ChromeConfigSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ChromeConfig',
      packedSize: 24,
      fields: [
        { name: 'trace_config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'privacy_filtering_enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'convert_to_legacy_json', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'event_package_name_filter_enabled', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ConsoleConfig
tracing.mojom.ConsoleConfigSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ConsoleConfig',
      packedSize: 16,
      fields: [
        { name: 'output', packedOffset: 0, packedBitOffset: 0, type: tracing.mojom.ConsoleOutputSpec, nullable: false, minVersion: 0 },
        { name: 'enable_colors', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: InterceptorConfig
tracing.mojom.InterceptorConfigSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.InterceptorConfig',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'console_config', packedOffset: 8, packedBitOffset: 0, type: tracing.mojom.ConsoleConfigSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DataSourceConfig
tracing.mojom.DataSourceConfigSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.DataSourceConfig',
      packedSize: 88,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'target_buffer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'trace_duration_ms', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'tracing_session_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'chrome_config', packedOffset: 24, packedBitOffset: 0, type: tracing.mojom.ChromeConfigSpec, nullable: false, minVersion: 0 },
        { name: 'interceptor_config', packedOffset: 32, packedBitOffset: 0, type: tracing.mojom.InterceptorConfigSpec, nullable: true, minVersion: 0 },
        { name: 'legacy_config', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'track_event_config_raw', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
        { name: 'etw_config_raw', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
        { name: 'system_metrics_config_raw', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
        { name: 'histogram_samples_config_raw', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};

// Struct: DataSourceRegistration
tracing.mojom.DataSourceRegistrationSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.DataSourceRegistration',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'will_notify_on_start', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'will_notify_on_stop', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'handles_incremental_state_clear', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: BufferConfig
tracing.mojom.BufferConfigSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.BufferConfig',
      packedSize: 16,
      fields: [
        { name: 'size_kb', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'fill_policy', packedOffset: 4, packedBitOffset: 0, type: tracing.mojom.BufferFillPolicySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DataSource
tracing.mojom.DataSourceSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.DataSource',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: tracing.mojom.DataSourceConfigSpec, nullable: false, minVersion: 0 },
        { name: 'producer_name_filter', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PerfettoBuiltinDataSource
tracing.mojom.PerfettoBuiltinDataSourceSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.PerfettoBuiltinDataSource',
      packedSize: 16,
      fields: [
        { name: 'disable_clock_snapshotting', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_trace_config', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_system_info', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_service_events', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'primary_trace_clock_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: IncrementalStateConfig
tracing.mojom.IncrementalStateConfigSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.IncrementalStateConfig',
      packedSize: 16,
      fields: [
        { name: 'clear_period_ms', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TraceConfig
tracing.mojom.TraceConfigSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TraceConfig',
      packedSize: 64,
      fields: [
        { name: 'data_sources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tracing.mojom.DataSourceSpec, false), nullable: false, minVersion: 0 },
        { name: 'perfetto_builtin_data_source', packedOffset: 8, packedBitOffset: 0, type: tracing.mojom.PerfettoBuiltinDataSourceSpec, nullable: false, minVersion: 0 },
        { name: 'buffers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(tracing.mojom.BufferConfigSpec, false), nullable: false, minVersion: 0 },
        { name: 'incremental_state_config', packedOffset: 24, packedBitOffset: 0, type: tracing.mojom.IncrementalStateConfigSpec, nullable: false, minVersion: 0 },
        { name: 'duration_ms', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'write_into_file', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'trace_uuid', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: true, minVersion: 0 },
        { name: 'unique_session_name', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Interface: ProducerHost
tracing.mojom.ProducerHost = {};

tracing.mojom.ProducerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.ProducerHostRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.ProducerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.ProducerHostPendingReceiver,
      handle);
    this.$ = new tracing.mojom.ProducerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.ProducerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  commitData(data_request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.ProducerHost_CommitData_ParamsSpec,
      null,
      [data_request]);
  }

  registerDataSource(registration_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.ProducerHost_RegisterDataSource_ParamsSpec,
      null,
      [registration_info]);
  }

  updateDataSource(registration_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tracing.mojom.ProducerHost_UpdateDataSource_ParamsSpec,
      null,
      [registration_info]);
  }

  registerTraceWriter(writer_id, target_buffer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tracing.mojom.ProducerHost_RegisterTraceWriter_ParamsSpec,
      null,
      [writer_id, target_buffer]);
  }

  unregisterTraceWriter(writer_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tracing.mojom.ProducerHost_UnregisterTraceWriter_ParamsSpec,
      null,
      [writer_id]);
  }

};

tracing.mojom.ProducerHost.getRemote = function() {
  let remote = new tracing.mojom.ProducerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.ProducerHost',
    'context');
  return remote.$;
};

// ParamsSpec for CommitData
tracing.mojom.ProducerHost_CommitData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerHost.CommitData_Params',
      packedSize: 16,
      fields: [
        { name: 'data_request', packedOffset: 0, packedBitOffset: 0, type: tracing.mojom.CommitDataRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterDataSource
tracing.mojom.ProducerHost_RegisterDataSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerHost.RegisterDataSource_Params',
      packedSize: 16,
      fields: [
        { name: 'registration_info', packedOffset: 0, packedBitOffset: 0, type: tracing.mojom.DataSourceRegistrationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateDataSource
tracing.mojom.ProducerHost_UpdateDataSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerHost.UpdateDataSource_Params',
      packedSize: 16,
      fields: [
        { name: 'registration_info', packedOffset: 0, packedBitOffset: 0, type: tracing.mojom.DataSourceRegistrationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterTraceWriter
tracing.mojom.ProducerHost_RegisterTraceWriter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerHost.RegisterTraceWriter_Params',
      packedSize: 16,
      fields: [
        { name: 'writer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'target_buffer', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UnregisterTraceWriter
tracing.mojom.ProducerHost_UnregisterTraceWriter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerHost.UnregisterTraceWriter_Params',
      packedSize: 16,
      fields: [
        { name: 'writer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
tracing.mojom.ProducerHostPtr = tracing.mojom.ProducerHostRemote;
tracing.mojom.ProducerHostRequest = tracing.mojom.ProducerHostPendingReceiver;


// Interface: ProducerClient
tracing.mojom.ProducerClient = {};

tracing.mojom.ProducerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.ProducerClientRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.ProducerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.ProducerClientPendingReceiver,
      handle);
    this.$ = new tracing.mojom.ProducerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.ProducerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTracingStart() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.ProducerClient_OnTracingStart_ParamsSpec,
      null,
      []);
  }

  startDataSource(id, data_source_config) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.ProducerClient_StartDataSource_ParamsSpec,
      null,
      [id, data_source_config]);
  }

  stopDataSource(id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tracing.mojom.ProducerClient_StopDataSource_ParamsSpec,
      null,
      [id]);
  }

  flush(flush_request_id, data_source_ids) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tracing.mojom.ProducerClient_Flush_ParamsSpec,
      null,
      [flush_request_id, data_source_ids]);
  }

  clearIncrementalState() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tracing.mojom.ProducerClient_ClearIncrementalState_ParamsSpec,
      null,
      []);
  }

};

tracing.mojom.ProducerClient.getRemote = function() {
  let remote = new tracing.mojom.ProducerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.ProducerClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnTracingStart
tracing.mojom.ProducerClient_OnTracingStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerClient.OnTracingStart_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StartDataSource
tracing.mojom.ProducerClient_StartDataSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerClient.StartDataSource_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'data_source_config', packedOffset: 8, packedBitOffset: 0, type: tracing.mojom.DataSourceConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StopDataSource
tracing.mojom.ProducerClient_StopDataSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerClient.StopDataSource_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Flush
tracing.mojom.ProducerClient_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerClient.Flush_Params',
      packedSize: 24,
      fields: [
        { name: 'flush_request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'data_source_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClearIncrementalState
tracing.mojom.ProducerClient_ClearIncrementalState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerClient.ClearIncrementalState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
tracing.mojom.ProducerClientPtr = tracing.mojom.ProducerClientRemote;
tracing.mojom.ProducerClientRequest = tracing.mojom.ProducerClientPendingReceiver;


// Interface: PerfettoService
tracing.mojom.PerfettoService = {};

tracing.mojom.PerfettoServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.PerfettoServiceRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.PerfettoService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.PerfettoServicePendingReceiver,
      handle);
    this.$ = new tracing.mojom.PerfettoServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.PerfettoServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectToProducerHost(producer_client, producer_host_receiver, shared_memory, shared_memory_buffer_page_size_bytes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.PerfettoService_ConnectToProducerHost_ParamsSpec,
      null,
      [producer_client, producer_host_receiver, shared_memory, shared_memory_buffer_page_size_bytes]);
  }

};

tracing.mojom.PerfettoService.getRemote = function() {
  let remote = new tracing.mojom.PerfettoServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.PerfettoService',
    'context');
  return remote.$;
};

// ParamsSpec for ConnectToProducerHost
tracing.mojom.PerfettoService_ConnectToProducerHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.PerfettoService.ConnectToProducerHost_Params',
      packedSize: 32,
      fields: [
        { name: 'producer_client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'producer_host_receiver', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'shared_memory', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'shared_memory_buffer_page_size_bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
tracing.mojom.PerfettoServicePtr = tracing.mojom.PerfettoServiceRemote;
tracing.mojom.PerfettoServiceRequest = tracing.mojom.PerfettoServicePendingReceiver;


// Interface: ConsumerHost
tracing.mojom.ConsumerHost = {};

tracing.mojom.ConsumerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.ConsumerHostRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.ConsumerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.ConsumerHostPendingReceiver,
      handle);
    this.$ = new tracing.mojom.ConsumerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.ConsumerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enableTracing(tracing_session_host, tracing_session_client, config, output_file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.ConsumerHost_EnableTracing_ParamsSpec,
      null,
      [tracing_session_host, tracing_session_client, config, output_file]);
  }

  cloneSession(tracing_session_host, tracing_session_client, unguessable_name, privacy_filtering_enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.ConsumerHost_CloneSession_ParamsSpec,
      tracing.mojom.ConsumerHost_CloneSession_ResponseParamsSpec,
      [tracing_session_host, tracing_session_client, unguessable_name, privacy_filtering_enabled]);
  }

};

tracing.mojom.ConsumerHost.getRemote = function() {
  let remote = new tracing.mojom.ConsumerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.ConsumerHost',
    'context');
  return remote.$;
};

// ParamsSpec for EnableTracing
tracing.mojom.ConsumerHost_EnableTracing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ConsumerHost.EnableTracing_Params',
      packedSize: 32,
      fields: [
        { name: 'tracing_session_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'tracing_session_client', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'config', packedOffset: 8, packedBitOffset: 0, type: tracing.mojom.TraceConfigSpec, nullable: false, minVersion: 0 },
        { name: 'output_file', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for CloneSession
tracing.mojom.ConsumerHost_CloneSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ConsumerHost.CloneSession_Params',
      packedSize: 32,
      fields: [
        { name: 'tracing_session_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'tracing_session_client', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'unguessable_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'privacy_filtering_enabled', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

tracing.mojom.ConsumerHost_CloneSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ConsumerHost.CloneSession_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'uuid', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
tracing.mojom.ConsumerHostPtr = tracing.mojom.ConsumerHostRemote;
tracing.mojom.ConsumerHostRequest = tracing.mojom.ConsumerHostPendingReceiver;


// Interface: TracingSessionHost
tracing.mojom.TracingSessionHost = {};

tracing.mojom.TracingSessionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.TracingSessionHostRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.TracingSessionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.TracingSessionHostPendingReceiver,
      handle);
    this.$ = new tracing.mojom.TracingSessionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.TracingSessionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  changeTraceConfig(config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.TracingSessionHost_ChangeTraceConfig_ParamsSpec,
      null,
      [config]);
  }

  disableTracing() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.TracingSessionHost_DisableTracing_ParamsSpec,
      null,
      []);
  }

  readBuffers(stream) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tracing.mojom.TracingSessionHost_ReadBuffers_ParamsSpec,
      null,
      [stream]);
  }

  requestBufferUsage() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tracing.mojom.TracingSessionHost_RequestBufferUsage_ParamsSpec,
      tracing.mojom.TracingSessionHost_RequestBufferUsage_ResponseParamsSpec,
      []);
  }

  disableTracingAndEmitJson(agent_label_filter, stream, privacy_filtering_enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ParamsSpec,
      null,
      [agent_label_filter, stream, privacy_filtering_enabled]);
  }

};

tracing.mojom.TracingSessionHost.getRemote = function() {
  let remote = new tracing.mojom.TracingSessionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.TracingSessionHost',
    'context');
  return remote.$;
};

// ParamsSpec for ChangeTraceConfig
tracing.mojom.TracingSessionHost_ChangeTraceConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingSessionHost.ChangeTraceConfig_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: tracing.mojom.TraceConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisableTracing
tracing.mojom.TracingSessionHost_DisableTracing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingSessionHost.DisableTracing_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ReadBuffers
tracing.mojom.TracingSessionHost_ReadBuffers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingSessionHost.ReadBuffers_Params',
      packedSize: 16,
      fields: [
        { name: 'stream', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestBufferUsage
tracing.mojom.TracingSessionHost_RequestBufferUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingSessionHost.RequestBufferUsage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

tracing.mojom.TracingSessionHost_RequestBufferUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingSessionHost.RequestBufferUsage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'percent_full', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'data_loss', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisableTracingAndEmitJson
tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingSessionHost.DisableTracingAndEmitJson_Params',
      packedSize: 32,
      fields: [
        { name: 'agent_label_filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'stream', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'privacy_filtering_enabled', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
tracing.mojom.TracingSessionHostPtr = tracing.mojom.TracingSessionHostRemote;
tracing.mojom.TracingSessionHostRequest = tracing.mojom.TracingSessionHostPendingReceiver;


// Interface: TracingSessionClient
tracing.mojom.TracingSessionClient = {};

tracing.mojom.TracingSessionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.TracingSessionClientRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.TracingSessionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.TracingSessionClientPendingReceiver,
      handle);
    this.$ = new tracing.mojom.TracingSessionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.TracingSessionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTracingEnabled() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.TracingSessionClient_OnTracingEnabled_ParamsSpec,
      null,
      []);
  }

  onTracingDisabled(tracing_succeeded) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.TracingSessionClient_OnTracingDisabled_ParamsSpec,
      null,
      [tracing_succeeded]);
  }

};

tracing.mojom.TracingSessionClient.getRemote = function() {
  let remote = new tracing.mojom.TracingSessionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.TracingSessionClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnTracingEnabled
tracing.mojom.TracingSessionClient_OnTracingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingSessionClient.OnTracingEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnTracingDisabled
tracing.mojom.TracingSessionClient_OnTracingDisabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingSessionClient.OnTracingDisabled_Params',
      packedSize: 16,
      fields: [
        { name: 'tracing_succeeded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
tracing.mojom.TracingSessionClientPtr = tracing.mojom.TracingSessionClientRemote;
tracing.mojom.TracingSessionClientRequest = tracing.mojom.TracingSessionClientPendingReceiver;

