// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/gpu_preferences.mojom
// Module: gpu.mojom

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
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

gpu.mojom.VulkanImplementationNameSpec = { $: mojo.internal.Enum() };
gpu.mojom.WebGPUAdapterNameSpec = { $: mojo.internal.Enum() };
gpu.mojom.WebGPUPowerPreferenceSpec = { $: mojo.internal.Enum() };
gpu.mojom.GrContextTypeSpec = { $: mojo.internal.Enum() };
gpu.mojom.DawnBackendValidationLevelSpec = { $: mojo.internal.Enum() };
gpu.mojom.GpuPreferencesSpec = { $: {} };

// Enum: VulkanImplementationName
gpu.mojom.VulkanImplementationName = {
  kNone: 0,
  kNative: 1,
  kForcedNative: 2,
  kSwiftshader: 3,
  kLast: 3,
};

// Enum: WebGPUAdapterName
gpu.mojom.WebGPUAdapterName = {
  kDefault: 0,
  kD3D11: 1,
  kOpenGLES: 2,
  kSwiftShader: 3,
};

// Enum: WebGPUPowerPreference
gpu.mojom.WebGPUPowerPreference = {
  kNone: 0,
  kDefaultLowPower: 1,
  kDefaultHighPerformance: 2,
  kForceLowPower: 3,
  kForceHighPerformance: 4,
};

// Enum: GrContextType
gpu.mojom.GrContextType = {
  kNone: 0,
  kGL: 1,
  kVulkan: 2,
  kGraphiteDawn: 3,
  kGraphiteMetal: 4,
};

// Enum: DawnBackendValidationLevel
gpu.mojom.DawnBackendValidationLevel = {
  kDisabled: 0,
  kPartial: 1,
  kFull: 2,
};

// Struct: GpuPreferences
mojo.internal.Struct(
    gpu.mojom.GpuPreferencesSpec, 'gpu.mojom.GpuPreferences', [
      mojo.internal.StructField('gr_context_type', 0, 0, gpu.mojom.GrContextTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('use_vulkan', 8, 0, gpu.mojom.VulkanImplementationNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('use_webgpu_adapter', 16, 0, gpu.mojom.WebGPUAdapterNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('use_webgpu_power_preference', 24, 0, gpu.mojom.WebGPUPowerPreferenceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enable_dawn_backend_validation', 32, 0, gpu.mojom.DawnBackendValidationLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enabled_dawn_features_list', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('disabled_dawn_features_list', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('message_pump_type', 56, 0, mojo_base.mojom.MessagePumpTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('force_gpu_mem_discardable_limit_bytes', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('force_max_texture_size', 68, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('gpu_program_cache_size', 72, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('vulkan_heap_memory_limit', 76, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('vulkan_sync_cpu_memory_limit', 80, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('disable_accelerated_video_decode', 84, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_accelerated_video_encode', 84, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('gpu_startup_dialog', 84, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_gpu_watchdog', 84, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('gpu_sandbox_start_early', 84, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_low_latency_dxva', 84, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_zero_copy_dxgi_video', 84, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_nv12_dxgi_video', 84, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_software_rasterizer', 85, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('log_gpu_control_list_decisions', 85, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('compile_shader_always_succeeds', 85, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_gl_error_limit', 85, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_glsl_translator', 85, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_shader_name_hashing', 85, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_gpu_command_logging', 85, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_gpu_debugging', 85, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_gpu_service_logging_gpu', 86, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_gpu_driver_debug_logging', 86, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_gpu_program_cache', 86, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enforce_gl_minimums', 86, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_gpu_shader_disk_cache', 86, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_threaded_texture_mailboxes', 86, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('gl_shader_interm_output', 86, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('perform_graphite_precompilation', 86, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_gpu_service_logging', 87, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_gpu_service_tracing', 87, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_passthrough_cmd_decoder', 87, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ignore_gpu_blocklist', 87, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('watchdog_starts_backgrounded', 87, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_vulkan_protected_memory', 87, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_vulkan_surface', 87, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_vulkan_fallback_to_gl_for_testing', 87, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_gpu_benchmarking_extension', 88, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_webgpu', 88, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_unsafe_webgpu', 88, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_webgpu_developer_features', 88, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_webgpu_experimental_features', 88, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_webgpu_compat', 88, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_perf_data_collection', 88, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_native_gpu_memory_buffers', 88, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_separate_egl_display_for_webgl_testing', 89, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 104]]);
