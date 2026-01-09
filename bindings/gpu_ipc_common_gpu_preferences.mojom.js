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
      packedSize: 152,
      fields: [
        { name: 'disable_accelerated_video_decode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_accelerated_video_encode', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'gpu_startup_dialog', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_gpu_watchdog', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'gpu_sandbox_start_early', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_low_latency_dxva', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_zero_copy_dxgi_video', packedOffset: 0, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_nv12_dxgi_video', packedOffset: 0, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_software_rasterizer', packedOffset: 0, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'log_gpu_control_list_decisions', packedOffset: 0, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
        { name: 'compile_shader_always_succeeds', packedOffset: 0, packedBitOffset: 10, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_gl_error_limit', packedOffset: 0, packedBitOffset: 11, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_glsl_translator', packedOffset: 0, packedBitOffset: 12, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_shader_name_hashing', packedOffset: 0, packedBitOffset: 13, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_gpu_command_logging', packedOffset: 0, packedBitOffset: 14, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_gpu_debugging', packedOffset: 0, packedBitOffset: 15, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_gpu_service_logging_gpu', packedOffset: 0, packedBitOffset: 16, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_gpu_driver_debug_logging', packedOffset: 0, packedBitOffset: 17, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_gpu_program_cache', packedOffset: 0, packedBitOffset: 18, type: mojo.internal.Bool, nullable: false },
        { name: 'enforce_gl_minimums', packedOffset: 0, packedBitOffset: 19, type: mojo.internal.Bool, nullable: false },
        { name: 'force_gpu_mem_discardable_limit_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'force_max_texture_size', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'gpu_program_cache_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'disable_gpu_shader_disk_cache', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_threaded_texture_mailboxes', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'gl_shader_interm_output', packedOffset: 20, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'perform_graphite_precompilation', packedOffset: 20, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_gpu_service_logging', packedOffset: 20, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_gpu_service_tracing', packedOffset: 20, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'use_passthrough_cmd_decoder', packedOffset: 20, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'ignore_gpu_blocklist', packedOffset: 20, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'watchdog_starts_backgrounded', packedOffset: 20, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'gr_context_type', packedOffset: 32, packedBitOffset: 0, type: gpu.mojom.GrContextTypeSpec, nullable: false },
        { name: 'use_vulkan', packedOffset: 40, packedBitOffset: 0, type: gpu.mojom.VulkanImplementationNameSpec, nullable: false },
        { name: 'enable_vulkan_protected_memory', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_vulkan_surface', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_vulkan_fallback_to_gl_for_testing', packedOffset: 48, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'vulkan_heap_memory_limit', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'vulkan_sync_cpu_memory_limit', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'enable_gpu_benchmarking_extension', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_webgpu', packedOffset: 64, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_unsafe_webgpu', packedOffset: 64, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_webgpu_developer_features', packedOffset: 64, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_webgpu_experimental_features', packedOffset: 64, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'use_webgpu_adapter', packedOffset: 72, packedBitOffset: 0, type: gpu.mojom.WebGPUAdapterNameSpec, nullable: false },
        { name: 'use_webgpu_power_preference', packedOffset: 80, packedBitOffset: 0, type: gpu.mojom.WebGPUPowerPreferenceSpec, nullable: false },
        { name: 'force_webgpu_compat', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_dawn_backend_validation', packedOffset: 96, packedBitOffset: 0, type: gpu.mojom.DawnBackendValidationLevelSpec, nullable: false },
        { name: 'enabled_dawn_features_list', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'disabled_dawn_features_list', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'enable_perf_data_collection', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'message_pump_type', packedOffset: 128, packedBitOffset: 0, type: [EnableIf=use_ozone] mojo_base.mojom.MessagePumpTypeSpec, nullable: false },
        { name: 'enable_native_gpu_memory_buffers', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'force_separate_egl_display_for_webgl_testing', packedOffset: 136, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
