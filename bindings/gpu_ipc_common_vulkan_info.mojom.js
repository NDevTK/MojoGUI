// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/vulkan_info.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};

gpu.mojom.VulkanPhysicalDeviceInfoSpec = { $: {} };
gpu.mojom.VulkanInfoSpec = { $: {} };

// Struct: VulkanPhysicalDeviceInfo
mojo.internal.Struct(
    gpu.mojom.VulkanPhysicalDeviceInfoSpec, 'gpu.mojom.VulkanPhysicalDeviceInfo', [
      mojo.internal.StructField('properties', 0, 0, gpu.mojom.VkPhysicalDevicePropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extensions', 8, 0, mojo.internal.Array(gpu.mojom.VkExtensionPropertiesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('features', 16, 0, gpu.mojom.VkPhysicalDeviceFeaturesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('feature_sampler_ycbcr_conversion', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('feature_protected_memory', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('queue_families', 32, 0, mojo.internal.Array(gpu.mojom.VkQueueFamilyPropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: VulkanInfo
mojo.internal.Struct(
    gpu.mojom.VulkanInfoSpec, 'gpu.mojom.VulkanInfo', [
      mojo.internal.StructField('api_version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('used_api_version', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('instance_extensions', 8, 0, mojo.internal.Array(gpu.mojom.VkExtensionPropertiesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('enabled_instance_extensions', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('instance_layers', 24, 0, mojo.internal.Array(gpu.mojom.VkLayerPropertiesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('physical_devices', 32, 0, mojo.internal.Array(gpu.mojom.VulkanPhysicalDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 48]]);
