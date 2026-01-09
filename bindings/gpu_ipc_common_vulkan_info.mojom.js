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
      packedSize: 48,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.VkPhysicalDevicePropertiesSpec, nullable: false },
        { name: 'extensions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'features', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.VkPhysicalDeviceFeaturesSpec, nullable: false },
        { name: 'feature_sampler_ycbcr_conversion', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'feature_protected_memory', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'queue_families', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 48,
      fields: [
        { name: 'api_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'used_api_version', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'instance_extensions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'enabled_instance_extensions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'instance_layers', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'physical_devices', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
