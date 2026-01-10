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
gpu.mojom.VkPhysicalDeviceTypeSpec = { $: mojo.internal.Enum() };

// Struct: VkExtensionProperties
gpu.mojom.VkExtensionPropertiesSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VkExtensionProperties',
      packedSize: 24,
      fields: [
        { name: 'extensionName', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'specVersion', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: VkLayerProperties
gpu.mojom.VkLayerPropertiesSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VkLayerProperties',
      packedSize: 32,
      fields: [
        { name: 'layerName', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'specVersion', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'implementationVersion', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: VkPhysicalDeviceLimits
gpu.mojom.VkPhysicalDeviceLimitsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VkPhysicalDeviceLimits',
      packedSize: 488,
      fields: [
        { name: 'maxImageDimension1D', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxImageDimension2D', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxImageDimension3D', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxImageDimensionCube', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxImageArrayLayers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxTexelBufferElements', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxUniformBufferRange', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxStorageBufferRange', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxPushConstantsSize', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxMemoryAllocationCount', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxSamplerAllocationCount', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'bufferImageGranularity', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'sparseAddressSpaceSize', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'maxBoundDescriptorSets', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxPerStageDescriptorSamplers', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxPerStageDescriptorUniformBuffers', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxPerStageDescriptorStorageBuffers', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxPerStageDescriptorSampledImages', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxPerStageDescriptorStorageImages', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxPerStageDescriptorInputAttachments', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxPerStageResources', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxDescriptorSetSamplers', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxDescriptorSetUniformBuffers', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxDescriptorSetUniformBuffersDynamic', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxDescriptorSetStorageBuffers', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxDescriptorSetStorageBuffersDynamic', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxDescriptorSetSampledImages', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxDescriptorSetStorageImages', packedOffset: 116, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxDescriptorSetInputAttachments', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxVertexInputAttributes', packedOffset: 124, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxVertexInputBindings', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxVertexInputAttributeOffset', packedOffset: 132, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxVertexInputBindingStride', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxVertexOutputComponents', packedOffset: 140, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxTessellationGenerationLevel', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxTessellationPatchSize', packedOffset: 148, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxTessellationControlPerVertexInputComponents', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxTessellationControlPerVertexOutputComponents', packedOffset: 156, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxTessellationControlPerPatchOutputComponents', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxTessellationControlTotalOutputComponents', packedOffset: 164, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxTessellationEvaluationInputComponents', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxTessellationEvaluationOutputComponents', packedOffset: 172, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxGeometryShaderInvocations', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxGeometryInputComponents', packedOffset: 180, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxGeometryOutputComponents', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxGeometryOutputVertices', packedOffset: 188, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxGeometryTotalOutputComponents', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxFragmentInputComponents', packedOffset: 196, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxFragmentOutputAttachments', packedOffset: 200, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxFragmentDualSrcAttachments', packedOffset: 204, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxFragmentCombinedOutputResources', packedOffset: 208, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxComputeSharedMemorySize', packedOffset: 212, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxComputeWorkGroupCount', packedOffset: 216, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'maxComputeWorkGroupInvocations', packedOffset: 224, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxComputeWorkGroupSize', packedOffset: 232, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'subPixelPrecisionBits', packedOffset: 228, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'subTexelPrecisionBits', packedOffset: 240, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'mipmapPrecisionBits', packedOffset: 244, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxDrawIndexedIndexValue', packedOffset: 248, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxDrawIndirectCount', packedOffset: 252, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxSamplerLodBias', packedOffset: 256, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'maxSamplerAnisotropy', packedOffset: 260, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'maxViewports', packedOffset: 264, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxViewportDimensions', packedOffset: 272, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'viewportBoundsRange', packedOffset: 280, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'viewportSubPixelBits', packedOffset: 268, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'minMemoryMapAlignment', packedOffset: 288, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'minTexelBufferOffsetAlignment', packedOffset: 296, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'minUniformBufferOffsetAlignment', packedOffset: 304, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'minStorageBufferOffsetAlignment', packedOffset: 312, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'minTexelOffset', packedOffset: 320, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'maxTexelOffset', packedOffset: 324, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'minTexelGatherOffset', packedOffset: 328, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'maxTexelGatherOffset', packedOffset: 332, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'minInterpolationOffset', packedOffset: 336, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'maxInterpolationOffset', packedOffset: 340, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'subPixelInterpolationOffsetBits', packedOffset: 344, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxFramebufferWidth', packedOffset: 348, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxFramebufferHeight', packedOffset: 352, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxFramebufferLayers', packedOffset: 356, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'framebufferColorSampleCounts', packedOffset: 360, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'framebufferDepthSampleCounts', packedOffset: 364, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'framebufferStencilSampleCounts', packedOffset: 368, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'framebufferNoAttachmentsSampleCounts', packedOffset: 372, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxColorAttachments', packedOffset: 376, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'sampledImageColorSampleCounts', packedOffset: 380, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'sampledImageIntegerSampleCounts', packedOffset: 384, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'sampledImageDepthSampleCounts', packedOffset: 388, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'sampledImageStencilSampleCounts', packedOffset: 392, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'storageImageSampleCounts', packedOffset: 396, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxSampleMaskWords', packedOffset: 400, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'timestampComputeAndGraphics', packedOffset: 404, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'timestampPeriod', packedOffset: 408, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'maxClipDistances', packedOffset: 412, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxCullDistances', packedOffset: 416, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'maxCombinedClipAndCullDistances', packedOffset: 420, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'discreteQueuePriorities', packedOffset: 424, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pointSizeRange', packedOffset: 432, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'lineWidthRange', packedOffset: 440, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'pointSizeGranularity', packedOffset: 428, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'lineWidthGranularity', packedOffset: 448, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'strictLines', packedOffset: 404, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'standardSampleLocations', packedOffset: 404, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'optimalBufferCopyOffsetAlignment', packedOffset: 456, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'optimalBufferCopyRowPitchAlignment', packedOffset: 464, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'nonCoherentAtomSize', packedOffset: 472, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 488}]
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
        { name: 'residencyStandard2DBlockShape', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'residencyStandard2DMultisampleBlockShape', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'residencyStandard3DBlockShape', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'residencyAlignedMipSize', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'residencyNonResidentStrict', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: VkPhysicalDeviceProperties
gpu.mojom.VkPhysicalDevicePropertiesSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VkPhysicalDeviceProperties',
      packedSize: 64,
      fields: [
        { name: 'apiVersion', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'driverVersion', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'vendorID', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'deviceID', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'deviceType', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.VkPhysicalDeviceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'deviceName', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pipelineCacheUUID', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'limits', packedOffset: 40, packedBitOffset: 0, type: gpu.mojom.VkPhysicalDeviceLimitsSpec, nullable: false, minVersion: 0 },
        { name: 'sparseProperties', packedOffset: 48, packedBitOffset: 0, type: gpu.mojom.VkPhysicalDeviceSparsePropertiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
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
        { name: 'robustBufferAccess', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'fullDrawIndexUint32', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'imageCubeArray', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'independentBlend', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'geometryShader', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'tessellationShader', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sampleRateShading', packedOffset: 0, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'dualSrcBlend', packedOffset: 0, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'logicOp', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'multiDrawIndirect', packedOffset: 1, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'drawIndirectFirstInstance', packedOffset: 1, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'depthClamp', packedOffset: 1, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'depthBiasClamp', packedOffset: 1, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'fillModeNonSolid', packedOffset: 1, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'depthBounds', packedOffset: 1, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'wideLines', packedOffset: 1, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'largePoints', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'alphaToOne', packedOffset: 2, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'multiViewport', packedOffset: 2, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'samplerAnisotropy', packedOffset: 2, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'textureCompressionETC2', packedOffset: 2, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'textureCompressionASTC_LDR', packedOffset: 2, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'textureCompressionBC', packedOffset: 2, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'occlusionQueryPrecise', packedOffset: 2, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'pipelineStatisticsQuery', packedOffset: 3, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'vertexPipelineStoresAndAtomics', packedOffset: 3, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'fragmentStoresAndAtomics', packedOffset: 3, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shaderTessellationAndGeometryPointSize', packedOffset: 3, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shaderImageGatherExtended', packedOffset: 3, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shaderStorageImageExtendedFormats', packedOffset: 3, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shaderStorageImageMultisample', packedOffset: 3, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shaderStorageImageReadWithoutFormat', packedOffset: 3, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shaderStorageImageWriteWithoutFormat', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shaderUniformBufferArrayDynamicIndexing', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shaderSampledImageArrayDynamicIndexing', packedOffset: 4, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shaderStorageBufferArrayDynamicIndexing', packedOffset: 4, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shaderStorageImageArrayDynamicIndexing', packedOffset: 4, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shaderClipDistance', packedOffset: 4, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shaderCullDistance', packedOffset: 4, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shaderFloat64', packedOffset: 4, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shaderInt64', packedOffset: 5, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shaderInt16', packedOffset: 5, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shaderResourceResidency', packedOffset: 5, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shaderResourceMinLod', packedOffset: 5, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sparseBinding', packedOffset: 5, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sparseResidencyBuffer', packedOffset: 5, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sparseResidencyImage2D', packedOffset: 5, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sparseResidencyImage3D', packedOffset: 5, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sparseResidency2Samples', packedOffset: 6, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sparseResidency4Samples', packedOffset: 6, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sparseResidency8Samples', packedOffset: 6, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sparseResidency16Samples', packedOffset: 6, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sparseResidencyAliased', packedOffset: 6, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'variableMultisampleRate', packedOffset: 6, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'inheritedQueries', packedOffset: 6, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: VkExtent3D
gpu.mojom.VkExtent3DSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VkExtent3D',
      packedSize: 24,
      fields: [
        { name: 'width', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'depth', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: VkQueueFamilyProperties
gpu.mojom.VkQueueFamilyPropertiesSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VkQueueFamilyProperties',
      packedSize: 32,
      fields: [
        { name: 'queueFlags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'queueCount', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'timestampValidBits', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'minImageTransferGranularity', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.VkExtent3DSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
