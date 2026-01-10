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
gpu.mojom.VulkanImplementationNameSpec = { $: mojo.internal.Enum() };

// Enum: WebGPUAdapterName
gpu.mojom.WebGPUAdapterName = {
  kDefault: 0,
  kD3D11: 1,
  kOpenGLES: 2,
  kSwiftShader: 3,
};
gpu.mojom.WebGPUAdapterNameSpec = { $: mojo.internal.Enum() };

// Enum: WebGPUPowerPreference
gpu.mojom.WebGPUPowerPreference = {
  kNone: 0,
  kDefaultLowPower: 1,
  kDefaultHighPerformance: 2,
  kForceLowPower: 3,
  kForceHighPerformance: 4,
};
gpu.mojom.WebGPUPowerPreferenceSpec = { $: mojo.internal.Enum() };

// Enum: GrContextType
gpu.mojom.GrContextType = {
  kNone: 0,
  kGL: 1,
  kVulkan: 2,
  kGraphiteDawn: 3,
  kGraphiteMetal: 4,
};
gpu.mojom.GrContextTypeSpec = { $: mojo.internal.Enum() };

// Enum: DawnBackendValidationLevel
gpu.mojom.DawnBackendValidationLevel = {
  kDisabled: 0,
  kPartial: 1,
  kFull: 2,
};
gpu.mojom.DawnBackendValidationLevelSpec = { $: mojo.internal.Enum() };

// Struct: GpuPreferences
gpu.mojom.GpuPreferencesSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuPreferences',
      packedSize: 80,
      fields: [
        { name: 'disable_accelerated_video_decode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_accelerated_video_encode', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'gpu_startup_dialog', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_gpu_watchdog', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'gpu_sandbox_start_early', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_low_latency_dxva', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_zero_copy_dxgi_video', packedOffset: 0, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_nv12_dxgi_video', packedOffset: 0, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_software_rasterizer', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'log_gpu_control_list_decisions', packedOffset: 1, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'compile_shader_always_succeeds', packedOffset: 1, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_gl_error_limit', packedOffset: 1, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_glsl_translator', packedOffset: 1, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_shader_name_hashing', packedOffset: 1, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_gpu_command_logging', packedOffset: 1, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_gpu_debugging', packedOffset: 1, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_gpu_service_logging_gpu', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_gpu_driver_debug_logging', packedOffset: 2, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_gpu_program_cache', packedOffset: 2, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enforce_gl_minimums', packedOffset: 2, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force_gpu_mem_discardable_limit_bytes', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'force_max_texture_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'gpu_program_cache_size', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'disable_gpu_shader_disk_cache', packedOffset: 2, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_threaded_texture_mailboxes', packedOffset: 2, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'gl_shader_interm_output', packedOffset: 2, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'perform_graphite_precompilation', packedOffset: 2, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_gpu_service_logging', packedOffset: 3, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_gpu_service_tracing', packedOffset: 3, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'use_passthrough_cmd_decoder', packedOffset: 3, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ignore_gpu_blocklist', packedOffset: 3, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'watchdog_starts_backgrounded', packedOffset: 3, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'gr_context_type', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.GrContextTypeSpec, nullable: false, minVersion: 0 },
        { name: 'use_vulkan', packedOffset: 20, packedBitOffset: 0, type: gpu.mojom.VulkanImplementationNameSpec, nullable: false, minVersion: 0 },
        { name: 'enable_vulkan_protected_memory', packedOffset: 3, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_vulkan_surface', packedOffset: 3, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_vulkan_fallback_to_gl_for_testing', packedOffset: 3, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'vulkan_heap_memory_limit', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'vulkan_sync_cpu_memory_limit', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'enable_gpu_benchmarking_extension', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_webgpu', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_unsafe_webgpu', packedOffset: 32, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_webgpu_developer_features', packedOffset: 32, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_webgpu_experimental_features', packedOffset: 32, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'use_webgpu_adapter', packedOffset: 36, packedBitOffset: 0, type: gpu.mojom.WebGPUAdapterNameSpec, nullable: false, minVersion: 0 },
        { name: 'use_webgpu_power_preference', packedOffset: 40, packedBitOffset: 0, type: gpu.mojom.WebGPUPowerPreferenceSpec, nullable: false, minVersion: 0 },
        { name: 'force_webgpu_compat', packedOffset: 32, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_dawn_backend_validation', packedOffset: 44, packedBitOffset: 0, type: gpu.mojom.DawnBackendValidationLevelSpec, nullable: false, minVersion: 0 },
        { name: 'enabled_dawn_features_list', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'disabled_dawn_features_list', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'enable_perf_data_collection', packedOffset: 32, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'message_pump_type', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.MessagePumpTypeSpec, nullable: false, minVersion: 0 },
        { name: 'enable_native_gpu_memory_buffers', packedOffset: 32, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force_separate_egl_display_for_webgl_testing', packedOffset: 33, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};
