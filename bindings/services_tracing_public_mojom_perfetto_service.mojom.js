// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/perfetto_service.mojom
// Module: tracing.mojom

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};
var mojo_base = mojo_base || {};

tracing.mojom.ConsoleOutputSpec = { $: mojo.internal.Enum() };
tracing.mojom.BufferFillPolicySpec = { $: mojo.internal.Enum() };
tracing.mojom.TracingClientPrioritySpec = { $: mojo.internal.Enum() };
tracing.mojom.ChunksToMoveSpec = { $: {} };
tracing.mojom.ChunkPatchSpec = { $: {} };
tracing.mojom.ChunksToPatchSpec = { $: {} };
tracing.mojom.CommitDataRequestSpec = { $: {} };
tracing.mojom.ChromeConfigSpec = { $: {} };
tracing.mojom.ConsoleConfigSpec = { $: {} };
tracing.mojom.InterceptorConfigSpec = { $: {} };
tracing.mojom.DataSourceConfigSpec = { $: {} };
tracing.mojom.DataSourceRegistrationSpec = { $: {} };
tracing.mojom.BufferConfigSpec = { $: {} };
tracing.mojom.DataSourceSpec = { $: {} };
tracing.mojom.PerfettoBuiltinDataSourceSpec = { $: {} };
tracing.mojom.IncrementalStateConfigSpec = { $: {} };
tracing.mojom.TraceConfigSpec = { $: {} };
tracing.mojom.ProducerHost = {};
tracing.mojom.ProducerHost.$interfaceName = 'tracing.mojom.ProducerHost';
tracing.mojom.ProducerHost_CommitData_ParamsSpec = { $: {} };
tracing.mojom.ProducerHost_CommitData_ResponseParamsSpec = { $: {} };
tracing.mojom.ProducerHost_RegisterDataSource_ParamsSpec = { $: {} };
tracing.mojom.ProducerHost_UpdateDataSource_ParamsSpec = { $: {} };
tracing.mojom.ProducerHost_RegisterTraceWriter_ParamsSpec = { $: {} };
tracing.mojom.ProducerHost_UnregisterTraceWriter_ParamsSpec = { $: {} };
tracing.mojom.ProducerClient = {};
tracing.mojom.ProducerClient.$interfaceName = 'tracing.mojom.ProducerClient';
tracing.mojom.ProducerClient_OnTracingStart_ParamsSpec = { $: {} };
tracing.mojom.ProducerClient_StartDataSource_ParamsSpec = { $: {} };
tracing.mojom.ProducerClient_StartDataSource_ResponseParamsSpec = { $: {} };
tracing.mojom.ProducerClient_StopDataSource_ParamsSpec = { $: {} };
tracing.mojom.ProducerClient_StopDataSource_ResponseParamsSpec = { $: {} };
tracing.mojom.ProducerClient_Flush_ParamsSpec = { $: {} };
tracing.mojom.ProducerClient_ClearIncrementalState_ParamsSpec = { $: {} };
tracing.mojom.PerfettoService = {};
tracing.mojom.PerfettoService.$interfaceName = 'tracing.mojom.PerfettoService';
tracing.mojom.PerfettoService_ConnectToProducerHost_ParamsSpec = { $: {} };
tracing.mojom.ConsumerHost = {};
tracing.mojom.ConsumerHost.$interfaceName = 'tracing.mojom.ConsumerHost';
tracing.mojom.ConsumerHost_EnableTracing_ParamsSpec = { $: {} };
tracing.mojom.ConsumerHost_CloneSession_ParamsSpec = { $: {} };
tracing.mojom.ConsumerHost_CloneSession_ResponseParamsSpec = { $: {} };
tracing.mojom.TracingSessionHost = {};
tracing.mojom.TracingSessionHost.$interfaceName = 'tracing.mojom.TracingSessionHost';
tracing.mojom.TracingSessionHost_ChangeTraceConfig_ParamsSpec = { $: {} };
tracing.mojom.TracingSessionHost_DisableTracing_ParamsSpec = { $: {} };
tracing.mojom.TracingSessionHost_ReadBuffers_ParamsSpec = { $: {} };
tracing.mojom.TracingSessionHost_ReadBuffers_ResponseParamsSpec = { $: {} };
tracing.mojom.TracingSessionHost_RequestBufferUsage_ParamsSpec = { $: {} };
tracing.mojom.TracingSessionHost_RequestBufferUsage_ResponseParamsSpec = { $: {} };
tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ParamsSpec = { $: {} };
tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ResponseParamsSpec = { $: {} };
tracing.mojom.TracingSessionClient = {};
tracing.mojom.TracingSessionClient.$interfaceName = 'tracing.mojom.TracingSessionClient';
tracing.mojom.TracingSessionClient_OnTracingEnabled_ParamsSpec = { $: {} };
tracing.mojom.TracingSessionClient_OnTracingDisabled_ParamsSpec = { $: {} };

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

// Enum: BufferFillPolicy
tracing.mojom.BufferFillPolicy = {
  kUnspecified: 0,
  kRingBuffer: 1,
  kDiscard: 2,
};

// Enum: TracingClientPriority
tracing.mojom.TracingClientPriority = {
  kUnknown: 0,
  kBackground: 1,
  kUserInitiated: 2,
};

// Struct: ChunksToMove
mojo.internal.Struct(
    tracing.mojom.ChunksToMoveSpec, 'tracing.mojom.ChunksToMove', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('chunk', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('target_buffer', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ChunkPatch
mojo.internal.Struct(
    tracing.mojom.ChunkPatchSpec, 'tracing.mojom.ChunkPatch', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ChunksToPatch
mojo.internal.Struct(
    tracing.mojom.ChunksToPatchSpec, 'tracing.mojom.ChunksToPatch', [
      mojo.internal.StructField('patches', 0, 0, mojo.internal.Array(tracing.mojom.ChunkPatchSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('target_buffer', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('writer_id', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('chunk_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('has_more_patches', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CommitDataRequest
mojo.internal.Struct(
    tracing.mojom.CommitDataRequestSpec, 'tracing.mojom.CommitDataRequest', [
      mojo.internal.StructField('chunks_to_move', 0, 0, mojo.internal.Array(tracing.mojom.ChunksToMoveSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('chunks_to_patch', 8, 0, mojo.internal.Array(tracing.mojom.ChunksToPatchSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('flush_request_id', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ChromeConfig
mojo.internal.Struct(
    tracing.mojom.ChromeConfigSpec, 'tracing.mojom.ChromeConfig', [
      mojo.internal.StructField('trace_config', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('privacy_filtering_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('convert_to_legacy_json', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('event_package_name_filter_enabled', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ConsoleConfig
mojo.internal.Struct(
    tracing.mojom.ConsoleConfigSpec, 'tracing.mojom.ConsoleConfig', [
      mojo.internal.StructField('output', 0, 0, tracing.mojom.ConsoleOutputSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enable_colors', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InterceptorConfig
mojo.internal.Struct(
    tracing.mojom.InterceptorConfigSpec, 'tracing.mojom.InterceptorConfig', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('console_config', 8, 0, tracing.mojom.ConsoleConfigSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DataSourceConfig
mojo.internal.Struct(
    tracing.mojom.DataSourceConfigSpec, 'tracing.mojom.DataSourceConfig', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tracing_session_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('chrome_config', 16, 0, tracing.mojom.ChromeConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interceptor_config', 24, 0, tracing.mojom.InterceptorConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('legacy_config', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('track_event_config_raw', 40, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('etw_config_raw', 48, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('system_metrics_config_raw', 56, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('histogram_samples_config_raw', 64, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_buffer', 72, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('trace_duration_ms', 76, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: DataSourceRegistration
mojo.internal.Struct(
    tracing.mojom.DataSourceRegistrationSpec, 'tracing.mojom.DataSourceRegistration', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('will_notify_on_start', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('will_notify_on_stop', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('handles_incremental_state_clear', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BufferConfig
mojo.internal.Struct(
    tracing.mojom.BufferConfigSpec, 'tracing.mojom.BufferConfig', [
      mojo.internal.StructField('fill_policy', 0, 0, tracing.mojom.BufferFillPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size_kb', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DataSource
mojo.internal.Struct(
    tracing.mojom.DataSourceSpec, 'tracing.mojom.DataSource', [
      mojo.internal.StructField('config', 0, 0, tracing.mojom.DataSourceConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('producer_name_filter', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PerfettoBuiltinDataSource
mojo.internal.Struct(
    tracing.mojom.PerfettoBuiltinDataSourceSpec, 'tracing.mojom.PerfettoBuiltinDataSource', [
      mojo.internal.StructField('primary_trace_clock_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('disable_clock_snapshotting', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_trace_config', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_system_info', 4, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_service_events', 4, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: IncrementalStateConfig
mojo.internal.Struct(
    tracing.mojom.IncrementalStateConfigSpec, 'tracing.mojom.IncrementalStateConfig', [
      mojo.internal.StructField('clear_period_ms', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TraceConfig
mojo.internal.Struct(
    tracing.mojom.TraceConfigSpec, 'tracing.mojom.TraceConfig', [
      mojo.internal.StructField('data_sources', 0, 0, mojo.internal.Array(tracing.mojom.DataSourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('perfetto_builtin_data_source', 8, 0, tracing.mojom.PerfettoBuiltinDataSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffers', 16, 0, mojo.internal.Array(tracing.mojom.BufferConfigSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('incremental_state_config', 24, 0, tracing.mojom.IncrementalStateConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trace_uuid', 32, 0, mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('unique_session_name', 40, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('duration_ms', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('write_into_file', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: ProducerHost
mojo.internal.Struct(
    tracing.mojom.ProducerHost_CommitData_ParamsSpec, 'tracing.mojom.ProducerHost_CommitData_Params', [
      mojo.internal.StructField('data_request', 0, 0, tracing.mojom.CommitDataRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracing.mojom.ProducerHost_CommitData_ResponseParamsSpec, 'tracing.mojom.ProducerHost_CommitData_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tracing.mojom.ProducerHost_RegisterDataSource_ParamsSpec, 'tracing.mojom.ProducerHost_RegisterDataSource_Params', [
      mojo.internal.StructField('registration_info', 0, 0, tracing.mojom.DataSourceRegistrationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracing.mojom.ProducerHost_UpdateDataSource_ParamsSpec, 'tracing.mojom.ProducerHost_UpdateDataSource_Params', [
      mojo.internal.StructField('registration_info', 0, 0, tracing.mojom.DataSourceRegistrationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracing.mojom.ProducerHost_RegisterTraceWriter_ParamsSpec, 'tracing.mojom.ProducerHost_RegisterTraceWriter_Params', [
      mojo.internal.StructField('writer_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('target_buffer', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracing.mojom.ProducerHost_UnregisterTraceWriter_ParamsSpec, 'tracing.mojom.ProducerHost_UnregisterTraceWriter_Params', [
      mojo.internal.StructField('writer_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
  commitData(data_request) {
    return this.$.commitData(data_request);
  }
  registerDataSource(registration_info) {
    return this.$.registerDataSource(registration_info);
  }
  updateDataSource(registration_info) {
    return this.$.updateDataSource(registration_info);
  }
  registerTraceWriter(writer_id, target_buffer) {
    return this.$.registerTraceWriter(writer_id, target_buffer);
  }
  unregisterTraceWriter(writer_id) {
    return this.$.unregisterTraceWriter(writer_id);
  }
};

tracing.mojom.ProducerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProducerHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  commitData(data_request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      tracing.mojom.ProducerHost_CommitData_ParamsSpec,
      tracing.mojom.ProducerHost_CommitData_ResponseParamsSpec,
      [data_request],
      false);
  }

  registerDataSource(registration_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      tracing.mojom.ProducerHost_RegisterDataSource_ParamsSpec,
      null,
      [registration_info],
      false);
  }

  updateDataSource(registration_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      tracing.mojom.ProducerHost_UpdateDataSource_ParamsSpec,
      null,
      [registration_info],
      false);
  }

  registerTraceWriter(writer_id, target_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      tracing.mojom.ProducerHost_RegisterTraceWriter_ParamsSpec,
      null,
      [writer_id, target_buffer],
      false);
  }

  unregisterTraceWriter(writer_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      tracing.mojom.ProducerHost_UnregisterTraceWriter_ParamsSpec,
      null,
      [writer_id],
      false);
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

tracing.mojom.ProducerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProducerHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerHost_CommitData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerHost_RegisterDataSource_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerHost_UpdateDataSource_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerHost_RegisterTraceWriter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerHost_UnregisterTraceWriter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ProducerHost_CommitData_ParamsSpec.$.structSpec);
          const result = this.impl.commitData(params.data_request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tracing.mojom.ProducerHost_CommitData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ProducerHost_RegisterDataSource_ParamsSpec.$.structSpec);
          const result = this.impl.registerDataSource(params.registration_info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ProducerHost_UpdateDataSource_ParamsSpec.$.structSpec);
          const result = this.impl.updateDataSource(params.registration_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ProducerHost_RegisterTraceWriter_ParamsSpec.$.structSpec);
          const result = this.impl.registerTraceWriter(params.writer_id, params.target_buffer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ProducerHost_UnregisterTraceWriter_ParamsSpec.$.structSpec);
          const result = this.impl.unregisterTraceWriter(params.writer_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

tracing.mojom.ProducerHostReceiver = tracing.mojom.ProducerHostReceiver;

tracing.mojom.ProducerHostPtr = tracing.mojom.ProducerHostRemote;
tracing.mojom.ProducerHostRequest = tracing.mojom.ProducerHostPendingReceiver;


// Interface: ProducerClient
mojo.internal.Struct(
    tracing.mojom.ProducerClient_OnTracingStart_ParamsSpec, 'tracing.mojom.ProducerClient_OnTracingStart_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tracing.mojom.ProducerClient_StartDataSource_ParamsSpec, 'tracing.mojom.ProducerClient_StartDataSource_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('data_source_config', 8, 0, tracing.mojom.DataSourceConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tracing.mojom.ProducerClient_StartDataSource_ResponseParamsSpec, 'tracing.mojom.ProducerClient_StartDataSource_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tracing.mojom.ProducerClient_StopDataSource_ParamsSpec, 'tracing.mojom.ProducerClient_StopDataSource_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracing.mojom.ProducerClient_StopDataSource_ResponseParamsSpec, 'tracing.mojom.ProducerClient_StopDataSource_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tracing.mojom.ProducerClient_Flush_ParamsSpec, 'tracing.mojom.ProducerClient_Flush_Params', [
      mojo.internal.StructField('flush_request_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('data_source_ids', 8, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tracing.mojom.ProducerClient_ClearIncrementalState_ParamsSpec, 'tracing.mojom.ProducerClient_ClearIncrementalState_Params', [
    ],
    [[0, 8]]);

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
  onTracingStart() {
    return this.$.onTracingStart();
  }
  startDataSource(id, data_source_config) {
    return this.$.startDataSource(id, data_source_config);
  }
  stopDataSource(id) {
    return this.$.stopDataSource(id);
  }
  flush(flush_request_id, data_source_ids) {
    return this.$.flush(flush_request_id, data_source_ids);
  }
  clearIncrementalState() {
    return this.$.clearIncrementalState();
  }
};

tracing.mojom.ProducerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProducerClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onTracingStart() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      tracing.mojom.ProducerClient_OnTracingStart_ParamsSpec,
      null,
      [],
      false);
  }

  startDataSource(id, data_source_config) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      tracing.mojom.ProducerClient_StartDataSource_ParamsSpec,
      tracing.mojom.ProducerClient_StartDataSource_ResponseParamsSpec,
      [id, data_source_config],
      false);
  }

  stopDataSource(id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      tracing.mojom.ProducerClient_StopDataSource_ParamsSpec,
      tracing.mojom.ProducerClient_StopDataSource_ResponseParamsSpec,
      [id],
      false);
  }

  flush(flush_request_id, data_source_ids) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      tracing.mojom.ProducerClient_Flush_ParamsSpec,
      null,
      [flush_request_id, data_source_ids],
      false);
  }

  clearIncrementalState() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      tracing.mojom.ProducerClient_ClearIncrementalState_ParamsSpec,
      null,
      [],
      false);
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

tracing.mojom.ProducerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProducerClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerClient_OnTracingStart_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerClient_StartDataSource_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerClient_StopDataSource_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerClient_Flush_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerClient_ClearIncrementalState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ProducerClient_OnTracingStart_ParamsSpec.$.structSpec);
          const result = this.impl.onTracingStart();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ProducerClient_StartDataSource_ParamsSpec.$.structSpec);
          const result = this.impl.startDataSource(params.id, params.data_source_config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tracing.mojom.ProducerClient_StartDataSource_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ProducerClient_StopDataSource_ParamsSpec.$.structSpec);
          const result = this.impl.stopDataSource(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tracing.mojom.ProducerClient_StopDataSource_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ProducerClient_Flush_ParamsSpec.$.structSpec);
          const result = this.impl.flush(params.flush_request_id, params.data_source_ids);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ProducerClient_ClearIncrementalState_ParamsSpec.$.structSpec);
          const result = this.impl.clearIncrementalState();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

tracing.mojom.ProducerClientReceiver = tracing.mojom.ProducerClientReceiver;

tracing.mojom.ProducerClientPtr = tracing.mojom.ProducerClientRemote;
tracing.mojom.ProducerClientRequest = tracing.mojom.ProducerClientPendingReceiver;


// Interface: PerfettoService
mojo.internal.Struct(
    tracing.mojom.PerfettoService_ConnectToProducerHost_ParamsSpec, 'tracing.mojom.PerfettoService_ConnectToProducerHost_Params', [
      mojo.internal.StructField('producer_client', 0, 0, mojo.internal.InterfaceProxy(tracing.mojom.ProducerClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('producer_host_receiver', 8, 0, mojo.internal.InterfaceRequest(tracing.mojom.ProducerHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('shared_memory', 16, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shared_memory_buffer_page_size_bytes', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

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
  connectToProducerHost(producer_client, producer_host_receiver, shared_memory, shared_memory_buffer_page_size_bytes) {
    return this.$.connectToProducerHost(producer_client, producer_host_receiver, shared_memory, shared_memory_buffer_page_size_bytes);
  }
};

tracing.mojom.PerfettoServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PerfettoService', [
      { explicit: null },
    ]);
  }

  connectToProducerHost(producer_client, producer_host_receiver, shared_memory, shared_memory_buffer_page_size_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      tracing.mojom.PerfettoService_ConnectToProducerHost_ParamsSpec,
      null,
      [producer_client, producer_host_receiver, shared_memory, shared_memory_buffer_page_size_bytes],
      false);
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

tracing.mojom.PerfettoServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PerfettoService', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.PerfettoService_ConnectToProducerHost_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.PerfettoService_ConnectToProducerHost_ParamsSpec.$.structSpec);
          const result = this.impl.connectToProducerHost(params.producer_client, params.producer_host_receiver, params.shared_memory, params.shared_memory_buffer_page_size_bytes);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

tracing.mojom.PerfettoServiceReceiver = tracing.mojom.PerfettoServiceReceiver;

tracing.mojom.PerfettoServicePtr = tracing.mojom.PerfettoServiceRemote;
tracing.mojom.PerfettoServiceRequest = tracing.mojom.PerfettoServicePendingReceiver;


// Interface: ConsumerHost
mojo.internal.Struct(
    tracing.mojom.ConsumerHost_EnableTracing_ParamsSpec, 'tracing.mojom.ConsumerHost_EnableTracing_Params', [
      mojo.internal.StructField('tracing_session_host', 0, 0, mojo.internal.InterfaceRequest(tracing.mojom.TracingSessionHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('tracing_session_client', 8, 0, mojo.internal.InterfaceProxy(tracing.mojom.TracingSessionClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('config', 16, 0, tracing.mojom.TraceConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_file', 24, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    tracing.mojom.ConsumerHost_CloneSession_ParamsSpec, 'tracing.mojom.ConsumerHost_CloneSession_Params', [
      mojo.internal.StructField('tracing_session_host', 0, 0, mojo.internal.InterfaceRequest(tracing.mojom.TracingSessionHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('tracing_session_client', 8, 0, mojo.internal.InterfaceProxy(tracing.mojom.TracingSessionClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('unguessable_name', 16, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('privacy_filtering_enabled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    tracing.mojom.ConsumerHost_CloneSession_ResponseParamsSpec, 'tracing.mojom.ConsumerHost_CloneSession_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

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
  enableTracing(tracing_session_host, tracing_session_client, config, output_file) {
    return this.$.enableTracing(tracing_session_host, tracing_session_client, config, output_file);
  }
  cloneSession(tracing_session_host, tracing_session_client, unguessable_name, privacy_filtering_enabled) {
    return this.$.cloneSession(tracing_session_host, tracing_session_client, unguessable_name, privacy_filtering_enabled);
  }
};

tracing.mojom.ConsumerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ConsumerHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  enableTracing(tracing_session_host, tracing_session_client, config, output_file) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      tracing.mojom.ConsumerHost_EnableTracing_ParamsSpec,
      null,
      [tracing_session_host, tracing_session_client, config, output_file],
      false);
  }

  cloneSession(tracing_session_host, tracing_session_client, unguessable_name, privacy_filtering_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      tracing.mojom.ConsumerHost_CloneSession_ParamsSpec,
      tracing.mojom.ConsumerHost_CloneSession_ResponseParamsSpec,
      [tracing_session_host, tracing_session_client, unguessable_name, privacy_filtering_enabled],
      false);
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

tracing.mojom.ConsumerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ConsumerHost', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ConsumerHost_EnableTracing_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ConsumerHost_CloneSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ConsumerHost_EnableTracing_ParamsSpec.$.structSpec);
          const result = this.impl.enableTracing(params.tracing_session_host, params.tracing_session_client, params.config, params.output_file);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ConsumerHost_CloneSession_ParamsSpec.$.structSpec);
          const result = this.impl.cloneSession(params.tracing_session_host, params.tracing_session_client, params.unguessable_name, params.privacy_filtering_enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tracing.mojom.ConsumerHost_CloneSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

tracing.mojom.ConsumerHostReceiver = tracing.mojom.ConsumerHostReceiver;

tracing.mojom.ConsumerHostPtr = tracing.mojom.ConsumerHostRemote;
tracing.mojom.ConsumerHostRequest = tracing.mojom.ConsumerHostPendingReceiver;


// Interface: TracingSessionHost
mojo.internal.Struct(
    tracing.mojom.TracingSessionHost_ChangeTraceConfig_ParamsSpec, 'tracing.mojom.TracingSessionHost_ChangeTraceConfig_Params', [
      mojo.internal.StructField('config', 0, 0, tracing.mojom.TraceConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracing.mojom.TracingSessionHost_DisableTracing_ParamsSpec, 'tracing.mojom.TracingSessionHost_DisableTracing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tracing.mojom.TracingSessionHost_ReadBuffers_ParamsSpec, 'tracing.mojom.TracingSessionHost_ReadBuffers_Params', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracing.mojom.TracingSessionHost_ReadBuffers_ResponseParamsSpec, 'tracing.mojom.TracingSessionHost_ReadBuffers_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tracing.mojom.TracingSessionHost_RequestBufferUsage_ParamsSpec, 'tracing.mojom.TracingSessionHost_RequestBufferUsage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tracing.mojom.TracingSessionHost_RequestBufferUsage_ResponseParamsSpec, 'tracing.mojom.TracingSessionHost_RequestBufferUsage_ResponseParams', [
      mojo.internal.StructField('percent_full', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('success', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('data_loss', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ParamsSpec, 'tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_Params', [
      mojo.internal.StructField('agent_label_filter', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('stream', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('privacy_filtering_enabled', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ResponseParamsSpec, 'tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ResponseParams', [
    ],
    [[0, 8]]);

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
  changeTraceConfig(config) {
    return this.$.changeTraceConfig(config);
  }
  disableTracing() {
    return this.$.disableTracing();
  }
  readBuffers(stream) {
    return this.$.readBuffers(stream);
  }
  requestBufferUsage() {
    return this.$.requestBufferUsage();
  }
  disableTracingAndEmitJson(agent_label_filter, stream, privacy_filtering_enabled) {
    return this.$.disableTracingAndEmitJson(agent_label_filter, stream, privacy_filtering_enabled);
  }
};

tracing.mojom.TracingSessionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TracingSessionHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  changeTraceConfig(config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      tracing.mojom.TracingSessionHost_ChangeTraceConfig_ParamsSpec,
      null,
      [config],
      false);
  }

  disableTracing() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      tracing.mojom.TracingSessionHost_DisableTracing_ParamsSpec,
      null,
      [],
      false);
  }

  readBuffers(stream) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      tracing.mojom.TracingSessionHost_ReadBuffers_ParamsSpec,
      tracing.mojom.TracingSessionHost_ReadBuffers_ResponseParamsSpec,
      [stream],
      false);
  }

  requestBufferUsage() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      tracing.mojom.TracingSessionHost_RequestBufferUsage_ParamsSpec,
      tracing.mojom.TracingSessionHost_RequestBufferUsage_ResponseParamsSpec,
      [],
      false);
  }

  disableTracingAndEmitJson(agent_label_filter, stream, privacy_filtering_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ParamsSpec,
      tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ResponseParamsSpec,
      [agent_label_filter, stream, privacy_filtering_enabled],
      false);
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

tracing.mojom.TracingSessionHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TracingSessionHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.TracingSessionHost_ChangeTraceConfig_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.TracingSessionHost_DisableTracing_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.TracingSessionHost_ReadBuffers_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.TracingSessionHost_RequestBufferUsage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.TracingSessionHost_ChangeTraceConfig_ParamsSpec.$.structSpec);
          const result = this.impl.changeTraceConfig(params.config);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.TracingSessionHost_DisableTracing_ParamsSpec.$.structSpec);
          const result = this.impl.disableTracing();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.TracingSessionHost_ReadBuffers_ParamsSpec.$.structSpec);
          const result = this.impl.readBuffers(params.stream);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tracing.mojom.TracingSessionHost_ReadBuffers_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.TracingSessionHost_RequestBufferUsage_ParamsSpec.$.structSpec);
          const result = this.impl.requestBufferUsage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tracing.mojom.TracingSessionHost_RequestBufferUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ParamsSpec.$.structSpec);
          const result = this.impl.disableTracingAndEmitJson(params.agent_label_filter, params.stream, params.privacy_filtering_enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

tracing.mojom.TracingSessionHostReceiver = tracing.mojom.TracingSessionHostReceiver;

tracing.mojom.TracingSessionHostPtr = tracing.mojom.TracingSessionHostRemote;
tracing.mojom.TracingSessionHostRequest = tracing.mojom.TracingSessionHostPendingReceiver;


// Interface: TracingSessionClient
mojo.internal.Struct(
    tracing.mojom.TracingSessionClient_OnTracingEnabled_ParamsSpec, 'tracing.mojom.TracingSessionClient_OnTracingEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tracing.mojom.TracingSessionClient_OnTracingDisabled_ParamsSpec, 'tracing.mojom.TracingSessionClient_OnTracingDisabled_Params', [
      mojo.internal.StructField('tracing_succeeded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
  onTracingEnabled() {
    return this.$.onTracingEnabled();
  }
  onTracingDisabled(tracing_succeeded) {
    return this.$.onTracingDisabled(tracing_succeeded);
  }
};

tracing.mojom.TracingSessionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TracingSessionClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onTracingEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      tracing.mojom.TracingSessionClient_OnTracingEnabled_ParamsSpec,
      null,
      [],
      false);
  }

  onTracingDisabled(tracing_succeeded) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      tracing.mojom.TracingSessionClient_OnTracingDisabled_ParamsSpec,
      null,
      [tracing_succeeded],
      false);
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

tracing.mojom.TracingSessionClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TracingSessionClient', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.TracingSessionClient_OnTracingEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.TracingSessionClient_OnTracingDisabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.TracingSessionClient_OnTracingEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.onTracingEnabled();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.TracingSessionClient_OnTracingDisabled_ParamsSpec.$.structSpec);
          const result = this.impl.onTracingDisabled(params.tracing_succeeded);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

tracing.mojom.TracingSessionClientReceiver = tracing.mojom.TracingSessionClientReceiver;

tracing.mojom.TracingSessionClientPtr = tracing.mojom.TracingSessionClientRemote;
tracing.mojom.TracingSessionClientRequest = tracing.mojom.TracingSessionClientPendingReceiver;

