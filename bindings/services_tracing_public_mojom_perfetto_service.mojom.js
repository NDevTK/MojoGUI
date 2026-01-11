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

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.tracing = mojo.internal.bindings.tracing || {};
mojo.internal.bindings.tracing.mojom = mojo.internal.bindings.tracing.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.tracing.mojom.ConsoleOutputSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.tracing.mojom.BufferFillPolicySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.tracing.mojom.TracingClientPrioritySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.tracing.mojom.ChunksToMoveSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ChunkPatchSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ChunksToPatchSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.CommitDataRequestSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ChromeConfigSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ConsoleConfigSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.InterceptorConfigSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.DataSourceConfigSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.DataSourceRegistrationSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.BufferConfigSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.DataSourceSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.PerfettoBuiltinDataSourceSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.IncrementalStateConfigSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.TraceConfigSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ProducerHost = {};
mojo.internal.bindings.tracing.mojom.ProducerHost.$interfaceName = 'tracing.mojom.ProducerHost';
mojo.internal.bindings.tracing.mojom.ProducerHost_CommitData_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ProducerHost_CommitData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ProducerHost_RegisterDataSource_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ProducerHost_UpdateDataSource_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ProducerHost_RegisterTraceWriter_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ProducerHost_UnregisterTraceWriter_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ProducerClient = {};
mojo.internal.bindings.tracing.mojom.ProducerClient.$interfaceName = 'tracing.mojom.ProducerClient';
mojo.internal.bindings.tracing.mojom.ProducerClient_OnTracingStart_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ProducerClient_StartDataSource_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ProducerClient_StartDataSource_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ProducerClient_StopDataSource_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ProducerClient_StopDataSource_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ProducerClient_Flush_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ProducerClient_ClearIncrementalState_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.PerfettoService = {};
mojo.internal.bindings.tracing.mojom.PerfettoService.$interfaceName = 'tracing.mojom.PerfettoService';
mojo.internal.bindings.tracing.mojom.PerfettoService_ConnectToProducerHost_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ConsumerHost = {};
mojo.internal.bindings.tracing.mojom.ConsumerHost.$interfaceName = 'tracing.mojom.ConsumerHost';
mojo.internal.bindings.tracing.mojom.ConsumerHost_EnableTracing_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ConsumerHost_CloneSession_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.ConsumerHost_CloneSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.TracingSessionHost = {};
mojo.internal.bindings.tracing.mojom.TracingSessionHost.$interfaceName = 'tracing.mojom.TracingSessionHost';
mojo.internal.bindings.tracing.mojom.TracingSessionHost_ChangeTraceConfig_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.TracingSessionHost_DisableTracing_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.TracingSessionHost_ReadBuffers_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.TracingSessionHost_ReadBuffers_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.TracingSessionHost_RequestBufferUsage_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.TracingSessionHost_RequestBufferUsage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.TracingSessionClient = {};
mojo.internal.bindings.tracing.mojom.TracingSessionClient.$interfaceName = 'tracing.mojom.TracingSessionClient';
mojo.internal.bindings.tracing.mojom.TracingSessionClient_OnTracingEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.tracing.mojom.TracingSessionClient_OnTracingDisabled_ParamsSpec = { $: {} };

mojo.internal.bindings.tracing.mojom.kPerfettoProducerNamePrefix = "org.chromium-";

mojo.internal.bindings.tracing.mojom.kTraceEventDataSourceName = "org.chromium.trace_event";

mojo.internal.bindings.tracing.mojom.kMemoryInstrumentationDataSourceName = "org.chromium.memory_instrumentation";

mojo.internal.bindings.tracing.mojom.kMetaData2SourceName = "org.chromium.trace_metadata2";

mojo.internal.bindings.tracing.mojom.kSystemTraceDataSourceName = "org.chromium.trace_system";

mojo.internal.bindings.tracing.mojom.kArcTraceDataSourceName = "org.chromium.trace_arc";

mojo.internal.bindings.tracing.mojom.kSamplerProfilerSourceName = "org.chromium.sampler_profiler";

mojo.internal.bindings.tracing.mojom.kJavaHeapProfilerSourceName = "org.chromium.java_heap_profiler";

mojo.internal.bindings.tracing.mojom.kNativeHeapProfilerSourceName = "org.chromium.native_heap_profiler";

mojo.internal.bindings.tracing.mojom.kSystemMetricsSourceName = "org.chromium.system_metrics";

mojo.internal.bindings.tracing.mojom.kHistogramSampleSourceName = "org.chromium.histogram_sample";

// Enum: ConsoleOutput
mojo.internal.bindings.tracing.mojom.ConsoleOutput = {
  kOutputUnspecified: 0,
  kOutputStdOut: 1,
  kOutputStdErr: 2,
};

// Enum: BufferFillPolicy
mojo.internal.bindings.tracing.mojom.BufferFillPolicy = {
  kUnspecified: 0,
  kRingBuffer: 1,
  kDiscard: 2,
};

// Enum: TracingClientPriority
mojo.internal.bindings.tracing.mojom.TracingClientPriority = {
  kUnknown: 0,
  kBackground: 1,
  kUserInitiated: 2,
};

// Struct: ChunksToMove
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ChunksToMoveSpec, 'tracing.mojom.ChunksToMove', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_chunk', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_target_buffer', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ChunkPatch
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ChunkPatchSpec, 'tracing.mojom.ChunkPatch', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ChunksToPatch
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ChunksToPatchSpec, 'tracing.mojom.ChunksToPatch', [
      mojo.internal.StructField('arg_patches', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.ChunkPatchSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_target_buffer', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_writer_id', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_chunk_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_more_patches', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CommitDataRequest
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.CommitDataRequestSpec, 'tracing.mojom.CommitDataRequest', [
      mojo.internal.StructField('arg_chunks_to_move', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.ChunksToMoveSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_chunks_to_patch', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.ChunksToPatchSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_flush_request_id', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ChromeConfig
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ChromeConfigSpec, 'tracing.mojom.ChromeConfig', [
      mojo.internal.StructField('arg_trace_config', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_privacy_filtering_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_convert_to_legacy_json', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_event_package_name_filter_enabled', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ConsoleConfig
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ConsoleConfigSpec, 'tracing.mojom.ConsoleConfig', [
      mojo.internal.StructField('arg_output', 0, 0, mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.ConsoleOutputSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_enable_colors', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InterceptorConfig
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.InterceptorConfigSpec, 'tracing.mojom.InterceptorConfig', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_console_config', 8, 0, mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.ConsoleConfigSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DataSourceConfig
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.DataSourceConfigSpec, 'tracing.mojom.DataSourceConfig', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tracing_session_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_chrome_config', 16, 0, mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.ChromeConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_interceptor_config', 24, 0, mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.InterceptorConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_legacy_config', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_track_event_config_raw', 40, 0, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_etw_config_raw', 48, 0, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_system_metrics_config_raw', 56, 0, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_histogram_samples_config_raw', 64, 0, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_target_buffer', 72, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_trace_duration_ms', 76, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: DataSourceRegistration
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.DataSourceRegistrationSpec, 'tracing.mojom.DataSourceRegistration', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_will_notify_on_start', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_will_notify_on_stop', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_handles_incremental_state_clear', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BufferConfig
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.BufferConfigSpec, 'tracing.mojom.BufferConfig', [
      mojo.internal.StructField('arg_fill_policy', 0, 0, mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.BufferFillPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_size_kb', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DataSource
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.DataSourceSpec, 'tracing.mojom.DataSource', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.DataSourceConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_producer_name_filter', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PerfettoBuiltinDataSource
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.PerfettoBuiltinDataSourceSpec, 'tracing.mojom.PerfettoBuiltinDataSource', [
      mojo.internal.StructField('arg_primary_trace_clock_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_disable_clock_snapshotting', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disable_trace_config', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disable_system_info', 4, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disable_service_events', 4, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: IncrementalStateConfig
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.IncrementalStateConfigSpec, 'tracing.mojom.IncrementalStateConfig', [
      mojo.internal.StructField('arg_clear_period_ms', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TraceConfig
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.TraceConfigSpec, 'tracing.mojom.TraceConfig', [
      mojo.internal.StructField('arg_data_sources', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.DataSourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_perfetto_builtin_data_source', 8, 0, mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.PerfettoBuiltinDataSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffers', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.BufferConfigSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_incremental_state_config', 24, 0, mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.IncrementalStateConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trace_uuid', 32, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_unique_session_name', 40, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_duration_ms', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_write_into_file', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: ProducerHost
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ProducerHost_CommitData_ParamsSpec, 'tracing.mojom.ProducerHost_CommitData_Params', [
      mojo.internal.StructField('arg_data_request', 0, 0, mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.CommitDataRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ProducerHost_CommitData_ResponseParamsSpec, 'tracing.mojom.ProducerHost_CommitData_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ProducerHost_RegisterDataSource_ParamsSpec, 'tracing.mojom.ProducerHost_RegisterDataSource_Params', [
      mojo.internal.StructField('arg_registration_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.DataSourceRegistrationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ProducerHost_UpdateDataSource_ParamsSpec, 'tracing.mojom.ProducerHost_UpdateDataSource_Params', [
      mojo.internal.StructField('arg_registration_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.DataSourceRegistrationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ProducerHost_RegisterTraceWriter_ParamsSpec, 'tracing.mojom.ProducerHost_RegisterTraceWriter_Params', [
      mojo.internal.StructField('arg_writer_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_target_buffer', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ProducerHost_UnregisterTraceWriter_ParamsSpec, 'tracing.mojom.ProducerHost_UnregisterTraceWriter_Params', [
      mojo.internal.StructField('arg_writer_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.tracing.mojom.ProducerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.tracing.mojom.ProducerHostRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.ProducerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.tracing.mojom.ProducerHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.tracing.mojom.ProducerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  commitData(arg_data_request) {
    return this.$.commitData(arg_data_request);
  }
  registerDataSource(arg_registration_info) {
    return this.$.registerDataSource(arg_registration_info);
  }
  updateDataSource(arg_registration_info) {
    return this.$.updateDataSource(arg_registration_info);
  }
  registerTraceWriter(arg_writer_id, arg_target_buffer) {
    return this.$.registerTraceWriter(arg_writer_id, arg_target_buffer);
  }
  unregisterTraceWriter(arg_writer_id) {
    return this.$.unregisterTraceWriter(arg_writer_id);
  }
};

mojo.internal.bindings.tracing.mojom.ProducerHostRemoteCallHandler = class {
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

  commitData(arg_data_request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.tracing.mojom.ProducerHost_CommitData_ParamsSpec,
      mojo.internal.bindings.tracing.mojom.ProducerHost_CommitData_ResponseParamsSpec,
      [arg_data_request],
      false);
  }

  registerDataSource(arg_registration_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.tracing.mojom.ProducerHost_RegisterDataSource_ParamsSpec,
      null,
      [arg_registration_info],
      false);
  }

  updateDataSource(arg_registration_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.tracing.mojom.ProducerHost_UpdateDataSource_ParamsSpec,
      null,
      [arg_registration_info],
      false);
  }

  registerTraceWriter(arg_writer_id, arg_target_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.tracing.mojom.ProducerHost_RegisterTraceWriter_ParamsSpec,
      null,
      [arg_writer_id, arg_target_buffer],
      false);
  }

  unregisterTraceWriter(arg_writer_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.tracing.mojom.ProducerHost_UnregisterTraceWriter_ParamsSpec,
      null,
      [arg_writer_id],
      false);
  }

};

mojo.internal.bindings.tracing.mojom.ProducerHost.getRemote = function() {
  let remote = new mojo.internal.bindings.tracing.mojom.ProducerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.ProducerHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.tracing.mojom.ProducerHostReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerHost_CommitData_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerHost_RegisterDataSource_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerHost_UpdateDataSource_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerHost_RegisterTraceWriter_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerHost_UnregisterTraceWriter_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerHost_CommitData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.commitData');
          const result = this.impl.commitData(params.arg_data_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.tracing.mojom.ProducerHost_CommitData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CommitData FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerHost_RegisterDataSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerDataSource');
          const result = this.impl.registerDataSource(params.arg_registration_info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerHost_UpdateDataSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateDataSource');
          const result = this.impl.updateDataSource(params.arg_registration_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerHost_RegisterTraceWriter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerTraceWriter');
          const result = this.impl.registerTraceWriter(params.arg_writer_id, params.arg_target_buffer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerHost_UnregisterTraceWriter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unregisterTraceWriter');
          const result = this.impl.unregisterTraceWriter(params.arg_writer_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.tracing.mojom.ProducerHostReceiver = mojo.internal.bindings.tracing.mojom.ProducerHostReceiver;

mojo.internal.bindings.tracing.mojom.ProducerHostPtr = mojo.internal.bindings.tracing.mojom.ProducerHostRemote;
mojo.internal.bindings.tracing.mojom.ProducerHostRequest = mojo.internal.bindings.tracing.mojom.ProducerHostPendingReceiver;


// Interface: ProducerClient
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ProducerClient_OnTracingStart_ParamsSpec, 'tracing.mojom.ProducerClient_OnTracingStart_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ProducerClient_StartDataSource_ParamsSpec, 'tracing.mojom.ProducerClient_StartDataSource_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_data_source_config', 8, 0, mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.DataSourceConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ProducerClient_StartDataSource_ResponseParamsSpec, 'tracing.mojom.ProducerClient_StartDataSource_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ProducerClient_StopDataSource_ParamsSpec, 'tracing.mojom.ProducerClient_StopDataSource_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ProducerClient_StopDataSource_ResponseParamsSpec, 'tracing.mojom.ProducerClient_StopDataSource_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ProducerClient_Flush_ParamsSpec, 'tracing.mojom.ProducerClient_Flush_Params', [
      mojo.internal.StructField('arg_flush_request_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_data_source_ids', 8, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ProducerClient_ClearIncrementalState_ParamsSpec, 'tracing.mojom.ProducerClient_ClearIncrementalState_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.tracing.mojom.ProducerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.tracing.mojom.ProducerClientRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.ProducerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.tracing.mojom.ProducerClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.tracing.mojom.ProducerClientRemoteCallHandler(this.proxy);
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
  startDataSource(arg_id, arg_data_source_config) {
    return this.$.startDataSource(arg_id, arg_data_source_config);
  }
  stopDataSource(arg_id) {
    return this.$.stopDataSource(arg_id);
  }
  flush(arg_flush_request_id, arg_data_source_ids) {
    return this.$.flush(arg_flush_request_id, arg_data_source_ids);
  }
  clearIncrementalState() {
    return this.$.clearIncrementalState();
  }
};

mojo.internal.bindings.tracing.mojom.ProducerClientRemoteCallHandler = class {
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
      mojo.internal.bindings.tracing.mojom.ProducerClient_OnTracingStart_ParamsSpec,
      null,
      [],
      false);
  }

  startDataSource(arg_id, arg_data_source_config) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.tracing.mojom.ProducerClient_StartDataSource_ParamsSpec,
      mojo.internal.bindings.tracing.mojom.ProducerClient_StartDataSource_ResponseParamsSpec,
      [arg_id, arg_data_source_config],
      false);
  }

  stopDataSource(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.tracing.mojom.ProducerClient_StopDataSource_ParamsSpec,
      mojo.internal.bindings.tracing.mojom.ProducerClient_StopDataSource_ResponseParamsSpec,
      [arg_id],
      false);
  }

  flush(arg_flush_request_id, arg_data_source_ids) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.tracing.mojom.ProducerClient_Flush_ParamsSpec,
      null,
      [arg_flush_request_id, arg_data_source_ids],
      false);
  }

  clearIncrementalState() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.tracing.mojom.ProducerClient_ClearIncrementalState_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.tracing.mojom.ProducerClient.getRemote = function() {
  let remote = new mojo.internal.bindings.tracing.mojom.ProducerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.ProducerClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.tracing.mojom.ProducerClientReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerClient_OnTracingStart_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerClient_StartDataSource_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerClient_StopDataSource_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerClient_Flush_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerClient_ClearIncrementalState_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerClient_OnTracingStart_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTracingStart');
          const result = this.impl.onTracingStart();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerClient_StartDataSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDataSource');
          const result = this.impl.startDataSource(params.arg_id, params.arg_data_source_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.tracing.mojom.ProducerClient_StartDataSource_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartDataSource FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerClient_StopDataSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopDataSource');
          const result = this.impl.stopDataSource(params.arg_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.tracing.mojom.ProducerClient_StopDataSource_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StopDataSource FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerClient_Flush_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush(params.arg_flush_request_id, params.arg_data_source_ids);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ProducerClient_ClearIncrementalState_ParamsSpec.$.structSpec);
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

mojo.internal.bindings.tracing.mojom.ProducerClientReceiver = mojo.internal.bindings.tracing.mojom.ProducerClientReceiver;

mojo.internal.bindings.tracing.mojom.ProducerClientPtr = mojo.internal.bindings.tracing.mojom.ProducerClientRemote;
mojo.internal.bindings.tracing.mojom.ProducerClientRequest = mojo.internal.bindings.tracing.mojom.ProducerClientPendingReceiver;


// Interface: PerfettoService
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.PerfettoService_ConnectToProducerHost_ParamsSpec, 'tracing.mojom.PerfettoService_ConnectToProducerHost_Params', [
      mojo.internal.StructField('arg_producer_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.tracing.mojom.ProducerClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_producer_host_receiver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.tracing.mojom.ProducerHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_shared_memory', 16, 0, mojo.internal.bindings.mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_shared_memory_buffer_page_size_bytes', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.bindings.tracing.mojom.PerfettoServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.tracing.mojom.PerfettoServiceRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.PerfettoService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.tracing.mojom.PerfettoServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.tracing.mojom.PerfettoServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  connectToProducerHost(arg_producer_client, arg_producer_host_receiver, arg_shared_memory, arg_shared_memory_buffer_page_size_bytes) {
    return this.$.connectToProducerHost(arg_producer_client, arg_producer_host_receiver, arg_shared_memory, arg_shared_memory_buffer_page_size_bytes);
  }
};

mojo.internal.bindings.tracing.mojom.PerfettoServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PerfettoService', [
      { explicit: null },
    ]);
  }

  connectToProducerHost(arg_producer_client, arg_producer_host_receiver, arg_shared_memory, arg_shared_memory_buffer_page_size_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.tracing.mojom.PerfettoService_ConnectToProducerHost_ParamsSpec,
      null,
      [arg_producer_client, arg_producer_host_receiver, arg_shared_memory, arg_shared_memory_buffer_page_size_bytes],
      false);
  }

};

mojo.internal.bindings.tracing.mojom.PerfettoService.getRemote = function() {
  let remote = new mojo.internal.bindings.tracing.mojom.PerfettoServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.PerfettoService',
    'context');
  return remote.$;
};

mojo.internal.bindings.tracing.mojom.PerfettoServiceReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.PerfettoService_ConnectToProducerHost_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.PerfettoService_ConnectToProducerHost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectToProducerHost');
          const result = this.impl.connectToProducerHost(params.arg_producer_client, params.arg_producer_host_receiver, params.arg_shared_memory, params.arg_shared_memory_buffer_page_size_bytes);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.tracing.mojom.PerfettoServiceReceiver = mojo.internal.bindings.tracing.mojom.PerfettoServiceReceiver;

mojo.internal.bindings.tracing.mojom.PerfettoServicePtr = mojo.internal.bindings.tracing.mojom.PerfettoServiceRemote;
mojo.internal.bindings.tracing.mojom.PerfettoServiceRequest = mojo.internal.bindings.tracing.mojom.PerfettoServicePendingReceiver;


// Interface: ConsumerHost
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ConsumerHost_EnableTracing_ParamsSpec, 'tracing.mojom.ConsumerHost_EnableTracing_Params', [
      mojo.internal.StructField('arg_tracing_session_host', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.tracing.mojom.TracingSessionHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_tracing_session_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.tracing.mojom.TracingSessionClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_config', 16, 0, mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.TraceConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_file', 24, 0, mojo.internal.bindings.mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ConsumerHost_CloneSession_ParamsSpec, 'tracing.mojom.ConsumerHost_CloneSession_Params', [
      mojo.internal.StructField('arg_tracing_session_host', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.tracing.mojom.TracingSessionHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_tracing_session_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.tracing.mojom.TracingSessionClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_unguessable_name', 16, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_privacy_filtering_enabled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.ConsumerHost_CloneSession_ResponseParamsSpec, 'tracing.mojom.ConsumerHost_CloneSession_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_uuid', 8, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.tracing.mojom.ConsumerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.tracing.mojom.ConsumerHostRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.ConsumerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.tracing.mojom.ConsumerHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.tracing.mojom.ConsumerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  enableTracing(arg_tracing_session_host, arg_tracing_session_client, arg_config, arg_output_file) {
    return this.$.enableTracing(arg_tracing_session_host, arg_tracing_session_client, arg_config, arg_output_file);
  }
  cloneSession(arg_tracing_session_host, arg_tracing_session_client, arg_unguessable_name, arg_privacy_filtering_enabled) {
    return this.$.cloneSession(arg_tracing_session_host, arg_tracing_session_client, arg_unguessable_name, arg_privacy_filtering_enabled);
  }
};

mojo.internal.bindings.tracing.mojom.ConsumerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ConsumerHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  enableTracing(arg_tracing_session_host, arg_tracing_session_client, arg_config, arg_output_file) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.tracing.mojom.ConsumerHost_EnableTracing_ParamsSpec,
      null,
      [arg_tracing_session_host, arg_tracing_session_client, arg_config, arg_output_file],
      false);
  }

  cloneSession(arg_tracing_session_host, arg_tracing_session_client, arg_unguessable_name, arg_privacy_filtering_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.tracing.mojom.ConsumerHost_CloneSession_ParamsSpec,
      mojo.internal.bindings.tracing.mojom.ConsumerHost_CloneSession_ResponseParamsSpec,
      [arg_tracing_session_host, arg_tracing_session_client, arg_unguessable_name, arg_privacy_filtering_enabled],
      false);
  }

};

mojo.internal.bindings.tracing.mojom.ConsumerHost.getRemote = function() {
  let remote = new mojo.internal.bindings.tracing.mojom.ConsumerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.ConsumerHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.tracing.mojom.ConsumerHostReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ConsumerHost_EnableTracing_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ConsumerHost_CloneSession_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ConsumerHost_EnableTracing_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableTracing');
          const result = this.impl.enableTracing(params.arg_tracing_session_host, params.arg_tracing_session_client, params.arg_config, params.arg_output_file);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.ConsumerHost_CloneSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cloneSession');
          const result = this.impl.cloneSession(params.arg_tracing_session_host, params.arg_tracing_session_client, params.arg_unguessable_name, params.arg_privacy_filtering_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.tracing.mojom.ConsumerHost_CloneSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CloneSession FAILED:', e));
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

mojo.internal.bindings.tracing.mojom.ConsumerHostReceiver = mojo.internal.bindings.tracing.mojom.ConsumerHostReceiver;

mojo.internal.bindings.tracing.mojom.ConsumerHostPtr = mojo.internal.bindings.tracing.mojom.ConsumerHostRemote;
mojo.internal.bindings.tracing.mojom.ConsumerHostRequest = mojo.internal.bindings.tracing.mojom.ConsumerHostPendingReceiver;


// Interface: TracingSessionHost
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.TracingSessionHost_ChangeTraceConfig_ParamsSpec, 'tracing.mojom.TracingSessionHost_ChangeTraceConfig_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.mojo.internal.bindings.tracing.mojom.TraceConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.TracingSessionHost_DisableTracing_ParamsSpec, 'tracing.mojom.TracingSessionHost_DisableTracing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.TracingSessionHost_ReadBuffers_ParamsSpec, 'tracing.mojom.TracingSessionHost_ReadBuffers_Params', [
      mojo.internal.StructField('arg_stream', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.TracingSessionHost_ReadBuffers_ResponseParamsSpec, 'tracing.mojom.TracingSessionHost_ReadBuffers_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.TracingSessionHost_RequestBufferUsage_ParamsSpec, 'tracing.mojom.TracingSessionHost_RequestBufferUsage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.TracingSessionHost_RequestBufferUsage_ResponseParamsSpec, 'tracing.mojom.TracingSessionHost_RequestBufferUsage_ResponseParams', [
      mojo.internal.StructField('arg_percent_full', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_success', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_data_loss', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ParamsSpec, 'tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_Params', [
      mojo.internal.StructField('arg_agent_label_filter', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_stream', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_privacy_filtering_enabled', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ResponseParamsSpec, 'tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.tracing.mojom.TracingSessionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.tracing.mojom.TracingSessionHostRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.TracingSessionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.tracing.mojom.TracingSessionHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.tracing.mojom.TracingSessionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  changeTraceConfig(arg_config) {
    return this.$.changeTraceConfig(arg_config);
  }
  disableTracing() {
    return this.$.disableTracing();
  }
  readBuffers(arg_stream) {
    return this.$.readBuffers(arg_stream);
  }
  requestBufferUsage() {
    return this.$.requestBufferUsage();
  }
  disableTracingAndEmitJson(arg_agent_label_filter, arg_stream, arg_privacy_filtering_enabled) {
    return this.$.disableTracingAndEmitJson(arg_agent_label_filter, arg_stream, arg_privacy_filtering_enabled);
  }
};

mojo.internal.bindings.tracing.mojom.TracingSessionHostRemoteCallHandler = class {
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

  changeTraceConfig(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.tracing.mojom.TracingSessionHost_ChangeTraceConfig_ParamsSpec,
      null,
      [arg_config],
      false);
  }

  disableTracing() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.tracing.mojom.TracingSessionHost_DisableTracing_ParamsSpec,
      null,
      [],
      false);
  }

  readBuffers(arg_stream) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.tracing.mojom.TracingSessionHost_ReadBuffers_ParamsSpec,
      mojo.internal.bindings.tracing.mojom.TracingSessionHost_ReadBuffers_ResponseParamsSpec,
      [arg_stream],
      false);
  }

  requestBufferUsage() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.tracing.mojom.TracingSessionHost_RequestBufferUsage_ParamsSpec,
      mojo.internal.bindings.tracing.mojom.TracingSessionHost_RequestBufferUsage_ResponseParamsSpec,
      [],
      false);
  }

  disableTracingAndEmitJson(arg_agent_label_filter, arg_stream, arg_privacy_filtering_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ParamsSpec,
      mojo.internal.bindings.tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ResponseParamsSpec,
      [arg_agent_label_filter, arg_stream, arg_privacy_filtering_enabled],
      false);
  }

};

mojo.internal.bindings.tracing.mojom.TracingSessionHost.getRemote = function() {
  let remote = new mojo.internal.bindings.tracing.mojom.TracingSessionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.TracingSessionHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.tracing.mojom.TracingSessionHostReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.TracingSessionHost_ChangeTraceConfig_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.TracingSessionHost_DisableTracing_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.TracingSessionHost_ReadBuffers_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.TracingSessionHost_RequestBufferUsage_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.TracingSessionHost_ChangeTraceConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.changeTraceConfig');
          const result = this.impl.changeTraceConfig(params.arg_config);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.TracingSessionHost_DisableTracing_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disableTracing');
          const result = this.impl.disableTracing();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.TracingSessionHost_ReadBuffers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readBuffers');
          const result = this.impl.readBuffers(params.arg_stream);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.tracing.mojom.TracingSessionHost_ReadBuffers_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadBuffers FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.TracingSessionHost_RequestBufferUsage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestBufferUsage');
          const result = this.impl.requestBufferUsage();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.tracing.mojom.TracingSessionHost_RequestBufferUsage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestBufferUsage FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disableTracingAndEmitJson');
          const result = this.impl.disableTracingAndEmitJson(params.arg_agent_label_filter, params.arg_stream, params.arg_privacy_filtering_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DisableTracingAndEmitJson FAILED:', e));
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

mojo.internal.bindings.tracing.mojom.TracingSessionHostReceiver = mojo.internal.bindings.tracing.mojom.TracingSessionHostReceiver;

mojo.internal.bindings.tracing.mojom.TracingSessionHostPtr = mojo.internal.bindings.tracing.mojom.TracingSessionHostRemote;
mojo.internal.bindings.tracing.mojom.TracingSessionHostRequest = mojo.internal.bindings.tracing.mojom.TracingSessionHostPendingReceiver;


// Interface: TracingSessionClient
mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.TracingSessionClient_OnTracingEnabled_ParamsSpec, 'tracing.mojom.TracingSessionClient_OnTracingEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tracing.mojom.TracingSessionClient_OnTracingDisabled_ParamsSpec, 'tracing.mojom.TracingSessionClient_OnTracingDisabled_Params', [
      mojo.internal.StructField('arg_tracing_succeeded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.tracing.mojom.TracingSessionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.tracing.mojom.TracingSessionClientRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.TracingSessionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.tracing.mojom.TracingSessionClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.tracing.mojom.TracingSessionClientRemoteCallHandler(this.proxy);
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
  onTracingDisabled(arg_tracing_succeeded) {
    return this.$.onTracingDisabled(arg_tracing_succeeded);
  }
};

mojo.internal.bindings.tracing.mojom.TracingSessionClientRemoteCallHandler = class {
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
      mojo.internal.bindings.tracing.mojom.TracingSessionClient_OnTracingEnabled_ParamsSpec,
      null,
      [],
      false);
  }

  onTracingDisabled(arg_tracing_succeeded) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.tracing.mojom.TracingSessionClient_OnTracingDisabled_ParamsSpec,
      null,
      [arg_tracing_succeeded],
      false);
  }

};

mojo.internal.bindings.tracing.mojom.TracingSessionClient.getRemote = function() {
  let remote = new mojo.internal.bindings.tracing.mojom.TracingSessionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.TracingSessionClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.tracing.mojom.TracingSessionClientReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.TracingSessionClient_OnTracingEnabled_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.TracingSessionClient_OnTracingDisabled_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.TracingSessionClient_OnTracingEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTracingEnabled');
          const result = this.impl.onTracingEnabled();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tracing.mojom.TracingSessionClient_OnTracingDisabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTracingDisabled');
          const result = this.impl.onTracingDisabled(params.arg_tracing_succeeded);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.tracing.mojom.TracingSessionClientReceiver = mojo.internal.bindings.tracing.mojom.TracingSessionClientReceiver;

mojo.internal.bindings.tracing.mojom.TracingSessionClientPtr = mojo.internal.bindings.tracing.mojom.TracingSessionClientRemote;
mojo.internal.bindings.tracing.mojom.TracingSessionClientRequest = mojo.internal.bindings.tracing.mojom.TracingSessionClientPendingReceiver;

