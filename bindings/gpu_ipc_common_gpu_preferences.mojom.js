// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/gpu_preferences.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};
var ui = ui || {};
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
      mojo.internal.StructField('disable_accelerated_video_decode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_accelerated_video_encode', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('gpu_startup_dialog', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_gpu_watchdog', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('gpu_sandbox_start_early', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_low_latency_dxva', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_zero_copy_dxgi_video', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_nv12_dxgi_video', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_software_rasterizer', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('log_gpu_control_list_decisions', 1, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('compile_shader_always_succeeds', 1, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_gl_error_limit', 1, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_glsl_translator', 1, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_shader_name_hashing', 1, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_gpu_command_logging', 1, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_gpu_debugging', 1, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_gpu_service_logging_gpu', 2, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_gpu_driver_debug_logging', 2, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_gpu_program_cache', 2, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enforce_gl_minimums', 2, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_gpu_mem_discardable_limit_bytes', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('force_max_texture_size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('gpu_program_cache_size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('disable_gpu_shader_disk_cache', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_threaded_texture_mailboxes', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('gl_shader_interm_output', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('perform_graphite_precompilation', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_gpu_service_logging', 16, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_gpu_service_tracing', 16, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_passthrough_cmd_decoder', 16, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ignore_gpu_blocklist', 16, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('watchdog_starts_backgrounded', 17, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('gr_context_type', 24, 0, gpu.mojom.GrContextTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('use_vulkan', 32, 0, gpu.mojom.VulkanImplementationNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enable_vulkan_protected_memory', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_vulkan_surface', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_vulkan_fallback_to_gl_for_testing', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('vulkan_heap_memory_limit', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('vulkan_sync_cpu_memory_limit', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enable_gpu_benchmarking_extension', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_webgpu', 52, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_unsafe_webgpu', 52, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_webgpu_developer_features', 52, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_webgpu_experimental_features', 52, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_webgpu_adapter', 56, 0, gpu.mojom.WebGPUAdapterNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('use_webgpu_power_preference', 64, 0, gpu.mojom.WebGPUPowerPreferenceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('force_webgpu_compat', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_dawn_backend_validation', 80, 0, gpu.mojom.DawnBackendValidationLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enabled_dawn_features_list', 88, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('disabled_dawn_features_list', 96, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('enable_perf_data_collection', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('message_pump_type', 112, 0, mojo_base.mojom.MessagePumpTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enable_native_gpu_memory_buffers', 120, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_separate_egl_display_for_webgl_testing', 120, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 136]]);
