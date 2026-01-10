// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/perfetto_service.mojom
// Module: tracing.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CommitData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerHost_CommitData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CommitData (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RegisterDataSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerHost_RegisterDataSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterDataSource (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateDataSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerHost_UpdateDataSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateDataSource (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RegisterTraceWriter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerHost_RegisterTraceWriter_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterTraceWriter (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: UnregisterTraceWriter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerHost_UnregisterTraceWriter_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnregisterTraceWriter (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ProducerHost_CommitData_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.commitData');
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
          const params = decoder.decodeStructInline(tracing.mojom.ProducerHost_RegisterDataSource_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.registerDataSource');
          const result = this.impl.registerDataSource(params.registration_info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ProducerHost_UpdateDataSource_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.updateDataSource');
          const result = this.impl.updateDataSource(params.registration_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ProducerHost_RegisterTraceWriter_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.registerTraceWriter');
          const result = this.impl.registerTraceWriter(params.writer_id, params.target_buffer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ProducerHost_UnregisterTraceWriter_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.unregisterTraceWriter');
          const result = this.impl.unregisterTraceWriter(params.writer_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnTracingStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerClient_OnTracingStart_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTracingStart (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StartDataSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerClient_StartDataSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDataSource (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StopDataSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerClient_StopDataSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopDataSource (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Flush
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerClient_Flush_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Flush (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ClearIncrementalState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ProducerClient_ClearIncrementalState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearIncrementalState (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ProducerClient_OnTracingStart_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onTracingStart');
          const result = this.impl.onTracingStart();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ProducerClient_StartDataSource_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.startDataSource');
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
          const params = decoder.decodeStructInline(tracing.mojom.ProducerClient_StopDataSource_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.stopDataSource');
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
          const params = decoder.decodeStructInline(tracing.mojom.ProducerClient_Flush_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush(params.flush_request_id, params.data_source_ids);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ProducerClient_ClearIncrementalState_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.clearIncrementalState');
          const result = this.impl.clearIncrementalState();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

tracing.mojom.ProducerClientReceiver = tracing.mojom.ProducerClientReceiver;

tracing.mojom.ProducerClientPtr = tracing.mojom.ProducerClientRemote;
tracing.mojom.ProducerClientRequest = tracing.mojom.ProducerClientPendingReceiver;


// Interface: PerfettoService
mojo.internal.Struct(
    tracing.mojom.PerfettoService_ConnectToProducerHost_ParamsSpec, 'tracing.mojom.PerfettoService_ConnectToProducerHost_Params', [
      mojo.internal.StructField('producer_client', 0, 0, mojo.internal.InterfaceProxy(tracing.mojom.ProducerClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('producer_host_receiver', 8, 0, mojo.internal.InterfaceRequest(tracing.mojom.ProducerHostSpec), null, false, 0, undefined),
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ConnectToProducerHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.PerfettoService_ConnectToProducerHost_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToProducerHost (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.PerfettoService_ConnectToProducerHost_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.connectToProducerHost');
          const result = this.impl.connectToProducerHost(params.producer_client, params.producer_host_receiver, params.shared_memory, params.shared_memory_buffer_page_size_bytes);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

tracing.mojom.PerfettoServiceReceiver = tracing.mojom.PerfettoServiceReceiver;

tracing.mojom.PerfettoServicePtr = tracing.mojom.PerfettoServiceRemote;
tracing.mojom.PerfettoServiceRequest = tracing.mojom.PerfettoServicePendingReceiver;


// Interface: ConsumerHost
mojo.internal.Struct(
    tracing.mojom.ConsumerHost_EnableTracing_ParamsSpec, 'tracing.mojom.ConsumerHost_EnableTracing_Params', [
      mojo.internal.StructField('tracing_session_host', 0, 0, mojo.internal.InterfaceRequest(tracing.mojom.TracingSessionHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('tracing_session_client', 8, 0, mojo.internal.InterfaceProxy(tracing.mojom.TracingSessionClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('config', 16, 0, tracing.mojom.TraceConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_file', 24, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    tracing.mojom.ConsumerHost_CloneSession_ParamsSpec, 'tracing.mojom.ConsumerHost_CloneSession_Params', [
      mojo.internal.StructField('tracing_session_host', 0, 0, mojo.internal.InterfaceRequest(tracing.mojom.TracingSessionHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('tracing_session_client', 8, 0, mojo.internal.InterfaceProxy(tracing.mojom.TracingSessionClientSpec), null, false, 0, undefined),
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: EnableTracing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ConsumerHost_EnableTracing_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableTracing (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CloneSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.ConsumerHost_CloneSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloneSession (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ConsumerHost_EnableTracing_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.enableTracing');
          const result = this.impl.enableTracing(params.tracing_session_host, params.tracing_session_client, params.config, params.output_file);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.ConsumerHost_CloneSession_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.cloneSession');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ChangeTraceConfig
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.TracingSessionHost_ChangeTraceConfig_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ChangeTraceConfig (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DisableTracing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.TracingSessionHost_DisableTracing_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableTracing (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReadBuffers
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.TracingSessionHost_ReadBuffers_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadBuffers (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RequestBufferUsage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.TracingSessionHost_RequestBufferUsage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestBufferUsage (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DisableTracingAndEmitJson
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableTracingAndEmitJson (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.TracingSessionHost_ChangeTraceConfig_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.changeTraceConfig');
          const result = this.impl.changeTraceConfig(params.config);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.TracingSessionHost_DisableTracing_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.disableTracing');
          const result = this.impl.disableTracing();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.TracingSessionHost_ReadBuffers_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.readBuffers');
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
          const params = decoder.decodeStructInline(tracing.mojom.TracingSessionHost_RequestBufferUsage_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.requestBufferUsage');
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
          const params = decoder.decodeStructInline(tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.disableTracingAndEmitJson');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnTracingEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.TracingSessionClient_OnTracingEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTracingEnabled (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnTracingDisabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.TracingSessionClient_OnTracingDisabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTracingDisabled (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.TracingSessionClient_OnTracingEnabled_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onTracingEnabled');
          const result = this.impl.onTracingEnabled();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.TracingSessionClient_OnTracingDisabled_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onTracingDisabled');
          const result = this.impl.onTracingDisabled(params.tracing_succeeded);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

tracing.mojom.TracingSessionClientReceiver = tracing.mojom.TracingSessionClientReceiver;

tracing.mojom.TracingSessionClientPtr = tracing.mojom.TracingSessionClientRemote;
tracing.mojom.TracingSessionClientRequest = tracing.mojom.TracingSessionClientPendingReceiver;

