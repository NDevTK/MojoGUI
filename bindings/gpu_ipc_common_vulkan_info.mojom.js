// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/vulkan_info.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Struct: VulkanPhysicalDeviceInfo
gpu.mojom.VulkanPhysicalDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VulkanPhysicalDeviceInfo',
      packedSize: 16,
      fields: [
        { name: 'queue_families', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VulkanInfo
gpu.mojom.VulkanInfoSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VulkanInfo',
      packedSize: 16,
      fields: [
        { name: 'physical_devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
