// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/vulkan_types.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Enum: VkPhysicalDeviceType
gpu.mojom.VkPhysicalDeviceType = {
  OTHER: 0,
  INTEGRATED_GPU: 1,
  DISCRETE_GPU: 2,
  VIRTUAL_GPU: 3,
  CPU: 4,
  INVALID_VALUE: 5,
};

// Struct: VkExtensionProperties
gpu.mojom.VkExtensionPropertiesSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VkExtensionProperties',
      packedSize: 16,
      fields: [
        { name: 'specVersion', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VkLayerProperties
gpu.mojom.VkLayerPropertiesSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VkLayerProperties',
      packedSize: 16,
      fields: [
        { name: 'description', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VkPhysicalDeviceLimits
gpu.mojom.VkPhysicalDeviceLimitsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VkPhysicalDeviceLimits',
      packedSize: 16,
      fields: [
        { name: 'nonCoherentAtomSize', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VkPhysicalDeviceSparseProperties
gpu.mojom.VkPhysicalDeviceSparsePropertiesSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VkPhysicalDeviceSparseProperties',
      packedSize: 16,
      fields: [
        { name: 'residencyNonResidentStrict', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VkPhysicalDeviceProperties
gpu.mojom.VkPhysicalDevicePropertiesSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VkPhysicalDeviceProperties',
      packedSize: 16,
      fields: [
        { name: 'sparseProperties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VkPhysicalDeviceFeatures
gpu.mojom.VkPhysicalDeviceFeaturesSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VkPhysicalDeviceFeatures',
      packedSize: 16,
      fields: [
        { name: 'inheritedQueries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VkExtent3D
gpu.mojom.VkExtent3DSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VkExtent3D',
      packedSize: 16,
      fields: [
        { name: 'depth', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VkQueueFamilyProperties
gpu.mojom.VkQueueFamilyPropertiesSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VkQueueFamilyProperties',
      packedSize: 16,
      fields: [
        { name: 'minImageTransferGranularity', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
