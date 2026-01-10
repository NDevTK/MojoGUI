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
