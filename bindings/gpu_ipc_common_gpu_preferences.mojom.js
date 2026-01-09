// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/gpu_preferences.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Enum: VulkanImplementationName
gpu.mojom.VulkanImplementationName = {
  kNone: 0,
  kNative: 1,
  kForcedNative: 2,
  kSwiftshader: 3,
  kLast: 4,
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
gpu.mojom.GpuPreferencesSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuPreferences',
      packedSize: 104,
      fields: [
        { name: 'gr_context_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'use_vulkan', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'use_webgpu_adapter', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'use_webgpu_power_preference', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'enable_dawn_backend_validation', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'enabled_dawn_features_list', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'disabled_dawn_features_list', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'message_pump_type', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'force_gpu_mem_discardable_limit_bytes', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'force_max_texture_size', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'gpu_program_cache_size', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'vulkan_heap_memory_limit', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'vulkan_sync_cpu_memory_limit', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'disable_accelerated_video_decode', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_accelerated_video_encode', packedOffset: 84, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'gpu_startup_dialog', packedOffset: 84, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_gpu_watchdog', packedOffset: 84, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'gpu_sandbox_start_early', packedOffset: 84, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_low_latency_dxva', packedOffset: 84, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_zero_copy_dxgi_video', packedOffset: 84, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_nv12_dxgi_video', packedOffset: 84, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_software_rasterizer', packedOffset: 84, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'log_gpu_control_list_decisions', packedOffset: 84, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
        { name: 'compile_shader_always_succeeds', packedOffset: 84, packedBitOffset: 10, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_gl_error_limit', packedOffset: 84, packedBitOffset: 11, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_glsl_translator', packedOffset: 84, packedBitOffset: 12, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_shader_name_hashing', packedOffset: 84, packedBitOffset: 13, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_gpu_command_logging', packedOffset: 84, packedBitOffset: 14, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_gpu_debugging', packedOffset: 84, packedBitOffset: 15, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_gpu_service_logging_gpu', packedOffset: 84, packedBitOffset: 16, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_gpu_driver_debug_logging', packedOffset: 84, packedBitOffset: 17, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_gpu_program_cache', packedOffset: 84, packedBitOffset: 18, type: mojo.internal.Bool, nullable: false },
        { name: 'enforce_gl_minimums', packedOffset: 84, packedBitOffset: 19, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_gpu_shader_disk_cache', packedOffset: 84, packedBitOffset: 20, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_threaded_texture_mailboxes', packedOffset: 84, packedBitOffset: 21, type: mojo.internal.Bool, nullable: false },
        { name: 'gl_shader_interm_output', packedOffset: 84, packedBitOffset: 22, type: mojo.internal.Bool, nullable: false },
        { name: 'perform_graphite_precompilation', packedOffset: 84, packedBitOffset: 23, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_gpu_service_logging', packedOffset: 84, packedBitOffset: 24, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_gpu_service_tracing', packedOffset: 84, packedBitOffset: 25, type: mojo.internal.Bool, nullable: false },
        { name: 'use_passthrough_cmd_decoder', packedOffset: 84, packedBitOffset: 26, type: mojo.internal.Bool, nullable: false },
        { name: 'ignore_gpu_blocklist', packedOffset: 84, packedBitOffset: 27, type: mojo.internal.Bool, nullable: false },
        { name: 'watchdog_starts_backgrounded', packedOffset: 84, packedBitOffset: 28, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_vulkan_protected_memory', packedOffset: 84, packedBitOffset: 29, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_vulkan_surface', packedOffset: 84, packedBitOffset: 30, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_vulkan_fallback_to_gl_for_testing', packedOffset: 84, packedBitOffset: 31, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_gpu_benchmarking_extension', packedOffset: 84, packedBitOffset: 32, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_webgpu', packedOffset: 84, packedBitOffset: 33, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_unsafe_webgpu', packedOffset: 84, packedBitOffset: 34, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_webgpu_developer_features', packedOffset: 84, packedBitOffset: 35, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_webgpu_experimental_features', packedOffset: 84, packedBitOffset: 36, type: mojo.internal.Bool, nullable: false },
        { name: 'force_webgpu_compat', packedOffset: 84, packedBitOffset: 37, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_perf_data_collection', packedOffset: 84, packedBitOffset: 38, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_native_gpu_memory_buffers', packedOffset: 84, packedBitOffset: 39, type: mojo.internal.Bool, nullable: false },
        { name: 'force_separate_egl_display_for_webgl_testing', packedOffset: 84, packedBitOffset: 40, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
