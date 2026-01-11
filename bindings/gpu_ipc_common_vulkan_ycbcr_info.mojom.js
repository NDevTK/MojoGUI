// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/vulkan_ycbcr_info.mojom
// Module: gpu.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};

gpu.mojom.VulkanYCbCrInfoSpec = { $: {} };

// Struct: VulkanYCbCrInfo
mojo.internal.Struct(
    gpu.mojom.VulkanYCbCrInfoSpec, 'gpu.mojom.VulkanYCbCrInfo', [
      mojo.internal.StructField('external_format', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('image_format', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('suggested_ycbcr_model', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('suggested_ycbcr_range', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('suggested_xchroma_offset', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('suggested_ychroma_offset', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('format_features', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);
