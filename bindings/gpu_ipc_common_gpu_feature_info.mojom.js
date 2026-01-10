// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/gpu_feature_info.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

gpu.mojom.GpuFeatureStatusSpec = { $: mojo.internal.Enum() };
gpu.mojom.GpuFeatureInfoSpec = { $: {} };

// Enum: GpuFeatureStatus
gpu.mojom.GpuFeatureStatus = {
  Enabled: 0,
  Blocklisted: 1,
  Disabled: 2,
  Software: 3,
  Undefined: 4,
  Max: 5,
};

// Struct: GpuFeatureInfo
mojo.internal.Struct(
    gpu.mojom.GpuFeatureInfoSpec, 'gpu.mojom.GpuFeatureInfo', [
      mojo.internal.StructField('status_values', 0, 0, mojo.internal.Array(gpu.mojom.GpuFeatureStatus, 13Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('enabled_gpu_driver_bug_workarounds', 8, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('disabled_extensions', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('disabled_webgl_extensions', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('applied_gpu_blocklist_entries', 32, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('applied_gpu_driver_bug_list_entries', 40, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('supported_buffer_formats_for_allocation_and_texturing', 48, 0, mojo.internal.Array(gfx.mojom.BufferFormatSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 64]]);
