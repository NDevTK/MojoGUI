// Auto-generated MojoJS binding
 // Source: chromium_src/services/resource_coordinator/public/mojom/memory_instrumentation/memory_instrumentation.mojom
 // Module: memory_instrumentation.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.memory_instrumentation = mojo.internal.bindings.memory_instrumentation || {};
mojo.internal.bindings.memory_instrumentation.mojom = mojo.internal.bindings.memory_instrumentation.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.memory_instrumentation.mojom.DumpTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.memory_instrumentation.mojom.LevelOfDetailSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.memory_instrumentation.mojom.DeterminismSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.memory_instrumentation.mojom.ProcessTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.memory_instrumentation.mojom.MemoryMapOptionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.memory_instrumentation.mojom.MemDumpFlagsSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.memory_instrumentation.mojom.RequestOutcomeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.memory_instrumentation.mojom.RawAllocatorDumpEntryValueSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.RequestArgsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.RawAllocatorDumpEdgeSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.RawAllocatorDumpEntrySpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.RawAllocatorDumpSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.RawProcessMemoryDumpSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.VmRegionSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.PlatformPrivateFootprintSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.RawOSMemDumpSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.OSMemDumpSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.AllocatorMemDumpSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.ProcessMemoryDumpSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.AggregatedMetricsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.GlobalMemoryDumpSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.HeapProfileResultSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess = {};
mojo.internal.bindings.memory_instrumentation.mojom.ClientProcessSpec = { $ : {} };
mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess.$interfaceName = 'memory_instrumentation.mojom.ClientProcess';
mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ParamsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ParamsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.HeapProfiler = {};
mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerSpec = { $ : {} };
mojo.internal.bindings.memory_instrumentation.mojom.HeapProfiler.$interfaceName = 'memory_instrumentation.mojom.HeapProfiler';
mojo.internal.bindings.memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ParamsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelper = {};
mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelperSpec = { $ : {} };
mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelper.$interfaceName = 'memory_instrumentation.mojom.HeapProfilerHelper';
mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ParamsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.Coordinator = {};
mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorSpec = { $ : {} };
mojo.internal.bindings.memory_instrumentation.mojom.Coordinator.$interfaceName = 'memory_instrumentation.mojom.Coordinator';
mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ParamsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ParamsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ParamsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ParamsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnector = {};
mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnectorSpec = { $ : {} };
mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnector.$interfaceName = 'memory_instrumentation.mojom.CoordinatorConnector';
mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnector_RegisterCoordinatorClient_ParamsSpec = { $: {} };

mojo.internal.bindings.memory_instrumentation.mojom.kProtectionFlagsRead = 4;

mojo.internal.bindings.memory_instrumentation.mojom.kProtectionFlagsWrite = 2;

mojo.internal.bindings.memory_instrumentation.mojom.kProtectionFlagsExec = 1;

mojo.internal.bindings.memory_instrumentation.mojom.kProtectionFlagsMayshare = 128;

// Enum: DumpType
mojo.internal.bindings.memory_instrumentation.mojom.DumpType = {
  PERIODIC_INTERVAL: 0,
  EXPLICITLY_TRIGGERED: 1,
  SUMMARY_ONLY: 2,
};

// Enum: LevelOfDetail
mojo.internal.bindings.memory_instrumentation.mojom.LevelOfDetail = {
  BACKGROUND: 0,
  LIGHT: 1,
  DETAILED: 2,
};

// Enum: Determinism
mojo.internal.bindings.memory_instrumentation.mojom.Determinism = {
  NONE: 0,
  FORCE_GC: 1,
};

// Enum: ProcessType
mojo.internal.bindings.memory_instrumentation.mojom.ProcessType = {
  OTHER: 0,
  BROWSER: 1,
  RENDERER: 2,
  GPU: 3,
  UTILITY: 4,
  PLUGIN: 5,
  ARC: 6,
};

// Enum: MemoryMapOption
mojo.internal.bindings.memory_instrumentation.mojom.MemoryMapOption = {
  NONE: 0,
  MODULES: 1,
  FULL: 2,
};

// Enum: MemDumpFlags
mojo.internal.bindings.memory_instrumentation.mojom.MemDumpFlags = {
  MEM_DUMP_COUNT_MAPPINGS: 0,
  MEM_DUMP_PSS: 1,
  MEM_DUMP_PAGES_BITMAP: 2,
};

// Enum: RequestOutcome
mojo.internal.bindings.memory_instrumentation.mojom.RequestOutcome = {
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

// Union: RawAllocatorDumpEntryValue
mojo.internal.Union(
    mojo.internal.bindings.memory_instrumentation.mojom.RawAllocatorDumpEntryValueSpec, 'memory_instrumentation.mojom.RawAllocatorDumpEntryValue', {
      'arg_value_uint64': {
        'ordinal': 0,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'arg_value_string': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: RequestArgs
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.RequestArgsSpec, 'memory_instrumentation.mojom.RequestArgs', [
      mojo.internal.StructField('arg_dump_guid', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_dump_type', 8, 0, mojo.internal.bindings.memory_instrumentation.mojom.DumpTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_level_of_detail', 16, 0, mojo.internal.bindings.memory_instrumentation.mojom.LevelOfDetailSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_determinism', 24, 0, mojo.internal.bindings.memory_instrumentation.mojom.DeterminismSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: RawAllocatorDumpEdge
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.RawAllocatorDumpEdgeSpec, 'memory_instrumentation.mojom.RawAllocatorDumpEdge', [
      mojo.internal.StructField('arg_source_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_target_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_importance', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_overridable', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RawAllocatorDumpEntry
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.RawAllocatorDumpEntrySpec, 'memory_instrumentation.mojom.RawAllocatorDumpEntry', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_units', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 16, 0, mojo.internal.bindings.memory_instrumentation.mojom.RawAllocatorDumpEntryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RawAllocatorDump
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.RawAllocatorDumpSpec, 'memory_instrumentation.mojom.RawAllocatorDump', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_absolute_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_level_of_detail', 16, 0, mojo.internal.bindings.memory_instrumentation.mojom.LevelOfDetailSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_entries', 24, 0, mojo.internal.Array(mojo.internal.bindings.memory_instrumentation.mojom.RawAllocatorDumpEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_weak', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: RawProcessMemoryDump
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.RawProcessMemoryDumpSpec, 'memory_instrumentation.mojom.RawProcessMemoryDump', [
      mojo.internal.StructField('arg_level_of_detail', 0, 0, mojo.internal.bindings.memory_instrumentation.mojom.LevelOfDetailSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_allocator_dump_edges', 8, 0, mojo.internal.Array(mojo.internal.bindings.memory_instrumentation.mojom.RawAllocatorDumpEdgeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_allocator_dumps', 16, 0, mojo.internal.Array(mojo.internal.bindings.memory_instrumentation.mojom.RawAllocatorDumpSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VmRegion
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.VmRegionSpec, 'memory_instrumentation.mojom.VmRegion', [
      mojo.internal.StructField('arg_kProtectionFlagsRead', 0, 0, mojo.internal.Pointer, 4, false, 0, undefined),
      mojo.internal.StructField('arg_kProtectionFlagsWrite', 8, 0, mojo.internal.Pointer, 2, false, 0, undefined),
      mojo.internal.StructField('arg_kProtectionFlagsExec', 16, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_kProtectionFlagsMayshare', 24, 0, mojo.internal.Pointer, 128, false, 0, undefined),
      mojo.internal.StructField('arg_start_address', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_size_in_bytes', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_module_timestamp', 48, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_module_debugid', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_module_debug_path', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mapped_file', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_byte_stats_private_dirty_resident', 80, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_byte_stats_private_clean_resident', 88, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_byte_stats_shared_dirty_resident', 96, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_byte_stats_shared_clean_resident', 104, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_byte_stats_swapped', 112, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_byte_locked', 120, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_byte_stats_proportional_resident', 128, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_protection_flags', 136, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 152]]);

// Struct: PlatformPrivateFootprint
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.PlatformPrivateFootprintSpec, 'memory_instrumentation.mojom.PlatformPrivateFootprint', [
      mojo.internal.StructField('arg_phys_footprint_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_internal_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_compressed_bytes', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_rss_anon_bytes', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_vm_swap_bytes', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_private_bytes', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: RawOSMemDump
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.RawOSMemDumpSpec, 'memory_instrumentation.mojom.RawOSMemDump', [
      mojo.internal.StructField('arg_platform_private_footprint', 0, 0, mojo.internal.bindings.memory_instrumentation.mojom.PlatformPrivateFootprintSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_memory_maps', 8, 0, mojo.internal.Array(mojo.internal.bindings.memory_instrumentation.mojom.VmRegionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_native_library_pages_bitmap', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_resident_set_kb', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_peak_resident_set_kb', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_mappings_count', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pss_kb', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_swap_pss_kb', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_peak_rss_resettable', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: OSMemDump
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.OSMemDumpSpec, 'memory_instrumentation.mojom.OSMemDump', [
      mojo.internal.StructField('arg_resident_set_kb', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_peak_resident_set_kb', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_private_footprint_kb', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_shared_footprint_kb', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_private_footprint_swap_kb', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_mappings_count', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pss_kb', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_swap_pss_kb', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_peak_rss_resettable', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: AllocatorMemDump
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.AllocatorMemDumpSpec, 'memory_instrumentation.mojom.AllocatorMemDump', [
      mojo.internal.StructField('arg_numeric_entries', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_children', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.memory_instrumentation.mojom.AllocatorMemDumpSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProcessMemoryDump
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.ProcessMemoryDumpSpec, 'memory_instrumentation.mojom.ProcessMemoryDump', [
      mojo.internal.StructField('arg_process_type', 0, 0, mojo.internal.bindings.memory_instrumentation.mojom.ProcessTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_os_dump', 8, 0, mojo.internal.bindings.memory_instrumentation.mojom.OSMemDumpSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_chrome_allocator_dumps', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.memory_instrumentation.mojom.AllocatorMemDumpSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_pid', 24, 0, mojo.internal.bindings.mojo_base.mojom.ProcessIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_service_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: AggregatedMetrics
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.AggregatedMetricsSpec, 'memory_instrumentation.mojom.AggregatedMetrics', [
      mojo.internal.StructField('arg_native_library_resident_kb', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_native_library_resident_not_ordered_kb', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_native_library_not_resident_ordered_kb', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GlobalMemoryDump
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.GlobalMemoryDumpSpec, 'memory_instrumentation.mojom.GlobalMemoryDump', [
      mojo.internal.StructField('arg_start_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_process_dumps', 8, 0, mojo.internal.Array(mojo.internal.bindings.memory_instrumentation.mojom.ProcessMemoryDumpSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_aggregated_metrics', 16, 0, mojo.internal.bindings.memory_instrumentation.mojom.AggregatedMetricsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HeapProfileResult
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.HeapProfileResultSpec, 'memory_instrumentation.mojom.HeapProfileResult', [
      mojo.internal.StructField('arg_pid', 0, 0, mojo.internal.bindings.mojo_base.mojom.ProcessIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_json', 8, 0, mojo.internal.bindings.mojo_base.mojom.BigStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ClientProcess
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ParamsSpec, 'memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_Params', [
      mojo.internal.StructField('arg_args', 0, 0, mojo.internal.bindings.memory_instrumentation.mojom.RequestArgsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ResponseParamsSpec, 'memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ResponseParams', [
      mojo.internal.StructField('arg_outcome', 0, 0, mojo.internal.bindings.memory_instrumentation.mojom.RequestOutcomeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dump_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_raw_process_memory_dump', 16, 0, mojo.internal.bindings.memory_instrumentation.mojom.RawProcessMemoryDumpSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ParamsSpec, 'memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_Params', [
      mojo.internal.StructField('arg_option', 0, 0, mojo.internal.bindings.memory_instrumentation.mojom.MemoryMapOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_flags', 8, 0, mojo.internal.Array(mojo.internal.bindings.memory_instrumentation.mojom.MemDumpFlagsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_pids', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.ProcessIdSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ResponseParamsSpec, 'memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ResponseParams', [
      mojo.internal.StructField('arg_outcome', 0, 0, mojo.internal.bindings.memory_instrumentation.mojom.RequestOutcomeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dumps', 8, 0, mojo.internal.Map(mojo.internal.bindings.mojo_base.mojom.ProcessIdSpec.$, mojo.internal.bindings.memory_instrumentation.mojom.RawOSMemDumpSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.memory_instrumentation.mojom.ClientProcessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.memory_instrumentation.mojom.ClientProcessRemote = class {
  static get $interfaceName() {
    return 'memory_instrumentation.mojom.ClientProcess';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.memory_instrumentation.mojom.ClientProcessPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.memory_instrumentation.mojom.ClientProcessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestChromeMemoryDump(arg_args) {
    return this.$.requestChromeMemoryDump(arg_args);
  }
  requestOSMemoryDump(arg_option, arg_flags, arg_pids) {
    return this.$.requestOSMemoryDump(arg_option, arg_flags, arg_pids);
  }
};

mojo.internal.bindings.memory_instrumentation.mojom.ClientProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('memory_instrumentation.mojom.ClientProcess', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestChromeMemoryDump(arg_args) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ParamsSpec,
      mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ResponseParamsSpec,
      [arg_args],
      false);
  }

  requestOSMemoryDump(arg_option, arg_flags, arg_pids) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ParamsSpec,
      mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ResponseParamsSpec,
      [arg_option, arg_flags, arg_pids],
      false);
  }

};

mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess.getRemote = function() {
  let remote = new mojo.internal.bindings.memory_instrumentation.mojom.ClientProcessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'memory_instrumentation.mojom.ClientProcess',
    'context');
  return remote.$;
};

mojo.internal.bindings.memory_instrumentation.mojom.ClientProcessReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('memory_instrumentation.mojom.ClientProcess', [
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
        
        // Try Method 0: RequestChromeMemoryDump
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestChromeMemoryDump (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestOSMemoryDump
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestOSMemoryDump (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestChromeMemoryDump');
          const result = this.impl.requestChromeMemoryDump(params.arg_args);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestChromeMemoryDump_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestChromeMemoryDump FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestOSMemoryDump');
          const result = this.impl.requestOSMemoryDump(params.arg_option, params.arg_flags, params.arg_pids);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.memory_instrumentation.mojom.ClientProcess_RequestOSMemoryDump_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestOSMemoryDump FAILED:', e));
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

mojo.internal.bindings.memory_instrumentation.mojom.ClientProcessReceiver = mojo.internal.bindings.memory_instrumentation.mojom.ClientProcessReceiver;

mojo.internal.bindings.memory_instrumentation.mojom.ClientProcessPtr = mojo.internal.bindings.memory_instrumentation.mojom.ClientProcessRemote;
mojo.internal.bindings.memory_instrumentation.mojom.ClientProcessRequest = mojo.internal.bindings.memory_instrumentation.mojom.ClientProcessPendingReceiver;


// Interface: HeapProfiler
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ParamsSpec, 'memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_Params', [
      mojo.internal.StructField('arg_strip_path_from_mapped_files', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_write_proto', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ResponseParamsSpec, 'memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ResponseParams', [
      mojo.internal.StructField('arg_results', 0, 0, mojo.internal.Array(mojo.internal.bindings.memory_instrumentation.mojom.HeapProfileResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerRemote = class {
  static get $interfaceName() {
    return 'memory_instrumentation.mojom.HeapProfiler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  dumpProcessesForTracing(arg_strip_path_from_mapped_files, arg_write_proto) {
    return this.$.dumpProcessesForTracing(arg_strip_path_from_mapped_files, arg_write_proto);
  }
};

mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('memory_instrumentation.mojom.HeapProfiler', [
      { explicit: null },
    ]);
  }

  dumpProcessesForTracing(arg_strip_path_from_mapped_files, arg_write_proto) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ParamsSpec,
      mojo.internal.bindings.memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ResponseParamsSpec,
      [arg_strip_path_from_mapped_files, arg_write_proto],
      false);
  }

};

mojo.internal.bindings.memory_instrumentation.mojom.HeapProfiler.getRemote = function() {
  let remote = new mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'memory_instrumentation.mojom.HeapProfiler',
    'context');
  return remote.$;
};

mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('memory_instrumentation.mojom.HeapProfiler', [
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
        
        // Try Method 0: DumpProcessesForTracing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DumpProcessesForTracing (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dumpProcessesForTracing');
          const result = this.impl.dumpProcessesForTracing(params.arg_strip_path_from_mapped_files, params.arg_write_proto);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.memory_instrumentation.mojom.HeapProfiler_DumpProcessesForTracing_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DumpProcessesForTracing FAILED:', e));
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

mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerReceiver = mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerReceiver;

mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerPtr = mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerRemote;
mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerRequest = mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerPendingReceiver;


// Interface: HeapProfilerHelper
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ParamsSpec, 'memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_Params', [
      mojo.internal.StructField('arg_pids', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.ProcessIdSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ResponseParamsSpec, 'memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ResponseParams', [
      mojo.internal.StructField('arg_vm_regions', 0, 0, mojo.internal.Map(mojo.internal.bindings.mojo_base.mojom.ProcessIdSpec.$, mojo.internal.Array(mojo.internal.bindings.memory_instrumentation.mojom.VmRegionSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelperPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelperRemote = class {
  static get $interfaceName() {
    return 'memory_instrumentation.mojom.HeapProfilerHelper';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelperPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelperRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getVmRegionsForHeapProfiler(arg_pids) {
    return this.$.getVmRegionsForHeapProfiler(arg_pids);
  }
};

mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelperRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('memory_instrumentation.mojom.HeapProfilerHelper', [
      { explicit: null },
    ]);
  }

  getVmRegionsForHeapProfiler(arg_pids) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ParamsSpec,
      mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ResponseParamsSpec,
      [arg_pids],
      false);
  }

};

mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelper.getRemote = function() {
  let remote = new mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelperRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'memory_instrumentation.mojom.HeapProfilerHelper',
    'context');
  return remote.$;
};

mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelperReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('memory_instrumentation.mojom.HeapProfilerHelper', [
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
        
        // Try Method 0: GetVmRegionsForHeapProfiler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVmRegionsForHeapProfiler (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getVmRegionsForHeapProfiler');
          const result = this.impl.getVmRegionsForHeapProfiler(params.arg_pids);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelper_GetVmRegionsForHeapProfiler_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetVmRegionsForHeapProfiler FAILED:', e));
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

mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelperReceiver = mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelperReceiver;

mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelperPtr = mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelperRemote;
mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelperRequest = mojo.internal.bindings.memory_instrumentation.mojom.HeapProfilerHelperPendingReceiver;


// Interface: Coordinator
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ParamsSpec, 'memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_Params', [
      mojo.internal.StructField('arg_dump_type', 0, 0, mojo.internal.bindings.memory_instrumentation.mojom.DumpTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_level_of_detail', 8, 0, mojo.internal.bindings.memory_instrumentation.mojom.LevelOfDetailSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_determinism', 16, 0, mojo.internal.bindings.memory_instrumentation.mojom.DeterminismSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_allocator_dump_names', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ResponseParamsSpec, 'memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ResponseParams', [
      mojo.internal.StructField('arg_outcome', 0, 0, mojo.internal.bindings.memory_instrumentation.mojom.RequestOutcomeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_global_memory_dump', 8, 0, mojo.internal.bindings.memory_instrumentation.mojom.GlobalMemoryDumpSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ParamsSpec, 'memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_Params', [
      mojo.internal.StructField('arg_pid', 0, 0, mojo.internal.bindings.mojo_base.mojom.ProcessIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_allocator_dump_names', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ResponseParamsSpec, 'memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ResponseParams', [
      mojo.internal.StructField('arg_outcome', 0, 0, mojo.internal.bindings.memory_instrumentation.mojom.RequestOutcomeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_global_memory_dump', 8, 0, mojo.internal.bindings.memory_instrumentation.mojom.GlobalMemoryDumpSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ParamsSpec, 'memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_Params', [
      mojo.internal.StructField('arg_pid', 0, 0, mojo.internal.bindings.mojo_base.mojom.ProcessIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ResponseParamsSpec, 'memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ResponseParams', [
      mojo.internal.StructField('arg_outcome', 0, 0, mojo.internal.bindings.memory_instrumentation.mojom.RequestOutcomeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_global_memory_dump', 8, 0, mojo.internal.bindings.memory_instrumentation.mojom.GlobalMemoryDumpSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ParamsSpec, 'memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_Params', [
      mojo.internal.StructField('arg_dump_type', 0, 0, mojo.internal.bindings.memory_instrumentation.mojom.DumpTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_level_of_detail', 8, 0, mojo.internal.bindings.memory_instrumentation.mojom.LevelOfDetailSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_determinism', 16, 0, mojo.internal.bindings.memory_instrumentation.mojom.DeterminismSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ResponseParamsSpec, 'memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ResponseParams', [
      mojo.internal.StructField('arg_outcome', 0, 0, mojo.internal.bindings.memory_instrumentation.mojom.RequestOutcomeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dump_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorRemote = class {
  static get $interfaceName() {
    return 'memory_instrumentation.mojom.Coordinator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestGlobalMemoryDump(arg_dump_type, arg_level_of_detail, arg_determinism, arg_allocator_dump_names) {
    return this.$.requestGlobalMemoryDump(arg_dump_type, arg_level_of_detail, arg_determinism, arg_allocator_dump_names);
  }
  requestGlobalMemoryDumpForPid(arg_pid, arg_allocator_dump_names) {
    return this.$.requestGlobalMemoryDumpForPid(arg_pid, arg_allocator_dump_names);
  }
  requestPrivateMemoryFootprint(arg_pid) {
    return this.$.requestPrivateMemoryFootprint(arg_pid);
  }
  requestGlobalMemoryDumpAndAppendToTrace(arg_dump_type, arg_level_of_detail, arg_determinism) {
    return this.$.requestGlobalMemoryDumpAndAppendToTrace(arg_dump_type, arg_level_of_detail, arg_determinism);
  }
};

mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('memory_instrumentation.mojom.Coordinator', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestGlobalMemoryDump(arg_dump_type, arg_level_of_detail, arg_determinism, arg_allocator_dump_names) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ParamsSpec,
      mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ResponseParamsSpec,
      [arg_dump_type, arg_level_of_detail, arg_determinism, arg_allocator_dump_names],
      false);
  }

  requestGlobalMemoryDumpForPid(arg_pid, arg_allocator_dump_names) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ParamsSpec,
      mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ResponseParamsSpec,
      [arg_pid, arg_allocator_dump_names],
      false);
  }

  requestPrivateMemoryFootprint(arg_pid) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ParamsSpec,
      mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ResponseParamsSpec,
      [arg_pid],
      false);
  }

  requestGlobalMemoryDumpAndAppendToTrace(arg_dump_type, arg_level_of_detail, arg_determinism) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ParamsSpec,
      mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ResponseParamsSpec,
      [arg_dump_type, arg_level_of_detail, arg_determinism],
      false);
  }

};

mojo.internal.bindings.memory_instrumentation.mojom.Coordinator.getRemote = function() {
  let remote = new mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'memory_instrumentation.mojom.Coordinator',
    'context');
  return remote.$;
};

mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('memory_instrumentation.mojom.Coordinator', [
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
        
        // Try Method 0: RequestGlobalMemoryDump
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestGlobalMemoryDump (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestGlobalMemoryDumpForPid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestGlobalMemoryDumpForPid (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RequestPrivateMemoryFootprint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPrivateMemoryFootprint (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RequestGlobalMemoryDumpAndAppendToTrace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestGlobalMemoryDumpAndAppendToTrace (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestGlobalMemoryDump');
          const result = this.impl.requestGlobalMemoryDump(params.arg_dump_type, params.arg_level_of_detail, params.arg_determinism, params.arg_allocator_dump_names);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDump_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestGlobalMemoryDump FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestGlobalMemoryDumpForPid');
          const result = this.impl.requestGlobalMemoryDumpForPid(params.arg_pid, params.arg_allocator_dump_names);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpForPid_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestGlobalMemoryDumpForPid FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPrivateMemoryFootprint');
          const result = this.impl.requestPrivateMemoryFootprint(params.arg_pid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestPrivateMemoryFootprint_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestPrivateMemoryFootprint FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestGlobalMemoryDumpAndAppendToTrace');
          const result = this.impl.requestGlobalMemoryDumpAndAppendToTrace(params.arg_dump_type, params.arg_level_of_detail, params.arg_determinism);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.memory_instrumentation.mojom.Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestGlobalMemoryDumpAndAppendToTrace FAILED:', e));
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

mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorReceiver = mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorReceiver;

mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorPtr = mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorRemote;
mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorRequest = mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorPendingReceiver;


// Interface: CoordinatorConnector
mojo.internal.Struct(
    mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnector_RegisterCoordinatorClient_ParamsSpec, 'memory_instrumentation.mojom.CoordinatorConnector_RegisterCoordinatorClient_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_client_process', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.memory_instrumentation.mojom.ClientProcessRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnectorRemote = class {
  static get $interfaceName() {
    return 'memory_instrumentation.mojom.CoordinatorConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnectorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  registerCoordinatorClient(arg_receiver, arg_client_process) {
    return this.$.registerCoordinatorClient(arg_receiver, arg_client_process);
  }
};

mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('memory_instrumentation.mojom.CoordinatorConnector', [
      { explicit: null },
    ]);
  }

  registerCoordinatorClient(arg_receiver, arg_client_process) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnector_RegisterCoordinatorClient_ParamsSpec,
      null,
      [arg_receiver, arg_client_process],
      false);
  }

};

mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnector.getRemote = function() {
  let remote = new mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'memory_instrumentation.mojom.CoordinatorConnector',
    'context');
  return remote.$;
};

mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('memory_instrumentation.mojom.CoordinatorConnector', [
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
        
        // Try Method 0: RegisterCoordinatorClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnector_RegisterCoordinatorClient_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterCoordinatorClient (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnector_RegisterCoordinatorClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerCoordinatorClient');
          const result = this.impl.registerCoordinatorClient(params.arg_receiver, params.arg_client_process);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnectorReceiver = mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnectorReceiver;

mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnectorPtr = mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnectorRemote;
mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnectorRequest = mojo.internal.bindings.memory_instrumentation.mojom.CoordinatorConnectorPendingReceiver;

