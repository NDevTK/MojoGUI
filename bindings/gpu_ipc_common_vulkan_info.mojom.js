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
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.VkPhysicalDevicePropertiesSpec, nullable: false, minVersion: 0 },
        { name: 'extensions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gpu.mojom.VkExtensionPropertiesSpec, false), nullable: false, minVersion: 0 },
        { name: 'features', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.VkPhysicalDeviceFeaturesSpec, nullable: false, minVersion: 0 },
        { name: 'feature_sampler_ycbcr_conversion', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'feature_protected_memory', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'queue_families', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(gpu.mojom.VkQueueFamilyPropertiesSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
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
        { name: 'api_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'used_api_version', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'instance_extensions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gpu.mojom.VkExtensionPropertiesSpec, false), nullable: false, minVersion: 0 },
        { name: 'enabled_instance_extensions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'instance_layers', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(gpu.mojom.VkLayerPropertiesSpec, false), nullable: false, minVersion: 0 },
        { name: 'physical_devices', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(gpu.mojom.VulkanPhysicalDeviceInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
