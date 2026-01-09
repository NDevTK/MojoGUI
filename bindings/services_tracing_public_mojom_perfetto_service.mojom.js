// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/perfetto_service.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};


// Enum: ConsoleOutput
tracing.mojom.ConsoleOutput = {
  kOutputUnspecified: 0,
  kOutputStdOut: 1,
  kOutputStdErr: 2,
};

// Enum: BufferFillPolicy
tracing.mojom.BufferFillPolicy = {
  kUnspecified: 0,
};

// Enum: TracingClientPriority
tracing.mojom.TracingClientPriority = {
  kUnknown: 0,
  kBackground: 1,
  kUserInitiated: 2,
};

// Struct: ChunksToMove
tracing.mojom.ChunksToMove = class {
  constructor(values = {}) {
    this.target_buffer = values.target_buffer !== undefined ? values.target_buffer : 0;
  }
};

// Struct: ChunkPatch
tracing.mojom.ChunkPatch = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : 0;
  }
};

// Struct: ChunksToPatch
tracing.mojom.ChunksToPatch = class {
  constructor(values = {}) {
  }
};

// Struct: CommitDataRequest
tracing.mojom.CommitDataRequest = class {
  constructor(values = {}) {
    this.flush_request_id = values.flush_request_id !== undefined ? values.flush_request_id : 0;
  }
};

// Struct: ChromeConfig
tracing.mojom.ChromeConfig = class {
  constructor(values = {}) {
    this.convert_to_legacy_json = values.convert_to_legacy_json !== undefined ? values.convert_to_legacy_json : false;
    this.event_package_name_filter_enabled = values.event_package_name_filter_enabled !== undefined ? values.event_package_name_filter_enabled : false;
  }
};

// Struct: ConsoleConfig
tracing.mojom.ConsoleConfig = class {
  constructor(values = {}) {
    this.enable_colors = values.enable_colors !== undefined ? values.enable_colors : false;
  }
};

// Struct: InterceptorConfig
tracing.mojom.InterceptorConfig = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : "";
    this.console_config = values.console_config !== undefined ? values.console_config : null;
  }
};

// Struct: DataSourceConfig
tracing.mojom.DataSourceConfig = class {
  constructor(values = {}) {
    this.histogram_samples_config_raw = values.histogram_samples_config_raw !== undefined ? values.histogram_samples_config_raw : 0;
  }
};

// Struct: DataSourceRegistration
tracing.mojom.DataSourceRegistration = class {
  constructor(values = {}) {
    this.handles_incremental_state_clear = values.handles_incremental_state_clear !== undefined ? values.handles_incremental_state_clear : 0;
  }
};

// Struct: BufferConfig
tracing.mojom.BufferConfig = class {
  constructor(values = {}) {
    this.fill_policy = values.fill_policy !== undefined ? values.fill_policy : 0;
  }
};

// Struct: DataSource
tracing.mojom.DataSource = class {
  constructor(values = {}) {
    this.producer_name_filter = values.producer_name_filter !== undefined ? values.producer_name_filter : "";
  }
};

// Struct: PerfettoBuiltinDataSource
tracing.mojom.PerfettoBuiltinDataSource = class {
  constructor(values = {}) {
    this.primary_trace_clock_id = values.primary_trace_clock_id !== undefined ? values.primary_trace_clock_id : 0;
  }
};

// Struct: IncrementalStateConfig
tracing.mojom.IncrementalStateConfig = class {
  constructor(values = {}) {
    this.clear_period_ms = values.clear_period_ms !== undefined ? values.clear_period_ms : 0;
  }
};

// Struct: TraceConfig
tracing.mojom.TraceConfig = class {
  constructor(values = {}) {
    this.unique_session_name = values.unique_session_name !== undefined ? values.unique_session_name : 0;
  }
};

// Interface: ProducerHost
tracing.mojom.ProducerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tracing.mojom.ProducerHost';
  }

  commitData(data_request) {
    // Method: CommitData
    // Call: CommitData(data_request)
  }

  registerDataSource(registration_info) {
    // Method: RegisterDataSource
    // Call: RegisterDataSource(registration_info)
  }

  updateDataSource(registration_info) {
    // Method: UpdateDataSource
    // Call: UpdateDataSource(registration_info)
  }

  registerTraceWriter(writer_id, target_buffer) {
    // Method: RegisterTraceWriter
    // Call: RegisterTraceWriter(writer_id, target_buffer)
  }

  unregisterTraceWriter(writer_id) {
    // Method: UnregisterTraceWriter
    // Call: UnregisterTraceWriter(writer_id)
  }

};

tracing.mojom.ProducerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ProducerClient
tracing.mojom.ProducerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tracing.mojom.ProducerClient';
  }

  onTracingStart() {
    // Method: OnTracingStart
    // Call: OnTracingStart()
  }

  startDataSource(id, data_source_config) {
    // Method: StartDataSource
    // Call: StartDataSource(id, data_source_config)
  }

  stopDataSource(id) {
    // Method: StopDataSource
    // Call: StopDataSource(id)
  }

  flush(flush_request_id, data_source_ids) {
    // Method: Flush
    // Call: Flush(flush_request_id, data_source_ids)
  }

  clearIncrementalState() {
    // Method: ClearIncrementalState
    // Call: ClearIncrementalState()
  }

};

tracing.mojom.ProducerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PerfettoService
tracing.mojom.PerfettoServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tracing.mojom.PerfettoService';
  }

  connectToProducerHost(producer_client, producer_host_receiver, shared_memory, shared_memory_buffer_page_size_bytes) {
    // Method: ConnectToProducerHost
    // Call: ConnectToProducerHost(producer_client, producer_host_receiver, shared_memory, shared_memory_buffer_page_size_bytes)
  }

};

tracing.mojom.PerfettoServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ConsumerHost
tracing.mojom.ConsumerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tracing.mojom.ConsumerHost';
  }

  enableTracing(tracing_session_host, tracing_session_client, config, output_file) {
    // Method: EnableTracing
    // Call: EnableTracing(tracing_session_host, tracing_session_client, config, output_file)
  }

  cloneSession(tracing_session_host, tracing_session_client, unguessable_name, privacy_filtering_enabled) {
    // Method: CloneSession
    return new Promise((resolve) => {
      // Call: CloneSession(tracing_session_host, tracing_session_client, unguessable_name, privacy_filtering_enabled)
      resolve({});
    });
  }

};

tracing.mojom.ConsumerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TracingSessionHost
tracing.mojom.TracingSessionHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tracing.mojom.TracingSessionHost';
  }

  changeTraceConfig(config) {
    // Method: ChangeTraceConfig
    // Call: ChangeTraceConfig(config)
  }

  disableTracing() {
    // Method: DisableTracing
    // Call: DisableTracing()
  }

  readBuffers(stream) {
    // Method: ReadBuffers
    // Call: ReadBuffers(stream)
  }

  requestBufferUsage() {
    // Method: RequestBufferUsage
    return new Promise((resolve) => {
      // Call: RequestBufferUsage()
      resolve({});
    });
  }

  disableTracingAndEmitJson(agent_label_filter, stream, privacy_filtering_enabled) {
    // Method: DisableTracingAndEmitJson
    // Call: DisableTracingAndEmitJson(agent_label_filter, stream, privacy_filtering_enabled)
  }

};

tracing.mojom.TracingSessionHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TracingSessionClient
tracing.mojom.TracingSessionClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tracing.mojom.TracingSessionClient';
  }

  onTracingEnabled() {
    // Method: OnTracingEnabled
    // Call: OnTracingEnabled()
  }

  onTracingDisabled(tracing_succeeded) {
    // Method: OnTracingDisabled
    // Call: OnTracingDisabled(tracing_succeeded)
  }

};

tracing.mojom.TracingSessionClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
