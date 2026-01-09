// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/vulkan_ycbcr_info.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Struct: VulkanYCbCrInfo
gpu.mojom.VulkanYCbCrInfoSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VulkanYCbCrInfo',
      packedSize: 48,
      fields: [
        { name: 'image_format', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'external_format', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'suggested_ycbcr_model', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'suggested_ycbcr_range', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'suggested_xchroma_offset', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'suggested_ychroma_offset', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'format_features', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
