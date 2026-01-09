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
      packedSize: 24,
      fields: [
        { name: 'extensionName', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'specVersion', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'layerName', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'specVersion', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'implementationVersion', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
      packedSize: 512,
      fields: [
        { name: 'maxImageDimension1D', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxImageDimension2D', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxImageDimension3D', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxImageDimensionCube', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxImageArrayLayers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxTexelBufferElements', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxUniformBufferRange', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxStorageBufferRange', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxPushConstantsSize', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxMemoryAllocationCount', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxSamplerAllocationCount', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'bufferImageGranularity', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'sparseAddressSpaceSize', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'maxBoundDescriptorSets', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxPerStageDescriptorSamplers', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxPerStageDescriptorUniformBuffers', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxPerStageDescriptorStorageBuffers', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxPerStageDescriptorSampledImages', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxPerStageDescriptorStorageImages', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxPerStageDescriptorInputAttachments', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxPerStageResources', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxDescriptorSetSamplers', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxDescriptorSetUniformBuffers', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxDescriptorSetUniformBuffersDynamic', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxDescriptorSetStorageBuffers', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxDescriptorSetStorageBuffersDynamic', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxDescriptorSetSampledImages', packedOffset: 116, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxDescriptorSetStorageImages', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxDescriptorSetInputAttachments', packedOffset: 124, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxVertexInputAttributes', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxVertexInputBindings', packedOffset: 132, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxVertexInputAttributeOffset', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxVertexInputBindingStride', packedOffset: 140, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxVertexOutputComponents', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxTessellationGenerationLevel', packedOffset: 148, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxTessellationPatchSize', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxTessellationControlPerVertexInputComponents', packedOffset: 156, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxTessellationControlPerVertexOutputComponents', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxTessellationControlPerPatchOutputComponents', packedOffset: 164, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxTessellationControlTotalOutputComponents', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxTessellationEvaluationInputComponents', packedOffset: 172, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxTessellationEvaluationOutputComponents', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxGeometryShaderInvocations', packedOffset: 180, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxGeometryInputComponents', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxGeometryOutputComponents', packedOffset: 188, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxGeometryOutputVertices', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxGeometryTotalOutputComponents', packedOffset: 196, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxFragmentInputComponents', packedOffset: 200, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxFragmentOutputAttachments', packedOffset: 204, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxFragmentDualSrcAttachments', packedOffset: 208, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxFragmentCombinedOutputResources', packedOffset: 212, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxComputeSharedMemorySize', packedOffset: 216, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxComputeWorkGroupCount', packedOffset: 224, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'maxComputeWorkGroupInvocations', packedOffset: 232, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxComputeWorkGroupSize', packedOffset: 240, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'subPixelPrecisionBits', packedOffset: 248, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'subTexelPrecisionBits', packedOffset: 252, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'mipmapPrecisionBits', packedOffset: 256, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxDrawIndexedIndexValue', packedOffset: 260, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxDrawIndirectCount', packedOffset: 264, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxSamplerLodBias', packedOffset: 268, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'maxSamplerAnisotropy', packedOffset: 272, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'maxViewports', packedOffset: 276, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxViewportDimensions', packedOffset: 280, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'viewportBoundsRange', packedOffset: 288, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'viewportSubPixelBits', packedOffset: 296, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'minMemoryMapAlignment', packedOffset: 304, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'minTexelBufferOffsetAlignment', packedOffset: 312, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'minUniformBufferOffsetAlignment', packedOffset: 320, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'minStorageBufferOffsetAlignment', packedOffset: 328, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'minTexelOffset', packedOffset: 336, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'maxTexelOffset', packedOffset: 340, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'minTexelGatherOffset', packedOffset: 344, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'maxTexelGatherOffset', packedOffset: 348, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'minInterpolationOffset', packedOffset: 352, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'maxInterpolationOffset', packedOffset: 356, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'subPixelInterpolationOffsetBits', packedOffset: 360, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxFramebufferWidth', packedOffset: 364, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxFramebufferHeight', packedOffset: 368, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxFramebufferLayers', packedOffset: 372, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'framebufferColorSampleCounts', packedOffset: 376, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'framebufferDepthSampleCounts', packedOffset: 380, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'framebufferStencilSampleCounts', packedOffset: 384, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'framebufferNoAttachmentsSampleCounts', packedOffset: 388, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxColorAttachments', packedOffset: 392, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'sampledImageColorSampleCounts', packedOffset: 396, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'sampledImageIntegerSampleCounts', packedOffset: 400, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'sampledImageDepthSampleCounts', packedOffset: 404, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'sampledImageStencilSampleCounts', packedOffset: 408, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'storageImageSampleCounts', packedOffset: 412, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxSampleMaskWords', packedOffset: 416, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'timestampComputeAndGraphics', packedOffset: 420, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'timestampPeriod', packedOffset: 428, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'maxClipDistances', packedOffset: 432, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxCullDistances', packedOffset: 436, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maxCombinedClipAndCullDistances', packedOffset: 440, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'discreteQueuePriorities', packedOffset: 444, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'pointSizeRange', packedOffset: 448, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'lineWidthRange', packedOffset: 456, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'pointSizeGranularity', packedOffset: 464, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'lineWidthGranularity', packedOffset: 468, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'strictLines', packedOffset: 472, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'standardSampleLocations', packedOffset: 472, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'optimalBufferCopyOffsetAlignment', packedOffset: 480, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'optimalBufferCopyRowPitchAlignment', packedOffset: 488, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'nonCoherentAtomSize', packedOffset: 496, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
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
        { name: 'residencyStandard2DBlockShape', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'residencyStandard2DMultisampleBlockShape', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'residencyStandard3DBlockShape', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'residencyAlignedMipSize', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'residencyNonResidentStrict', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 64,
      fields: [
        { name: 'apiVersion', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'driverVersion', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'vendorID', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'deviceID', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'deviceType', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.VkPhysicalDeviceTypeSpec, nullable: false },
        { name: 'deviceName', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'pipelineCacheUUID', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'limits', packedOffset: 40, packedBitOffset: 0, type: gpu.mojom.VkPhysicalDeviceLimitsSpec, nullable: false },
        { name: 'sparseProperties', packedOffset: 48, packedBitOffset: 0, type: gpu.mojom.VkPhysicalDeviceSparsePropertiesSpec, nullable: false },
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
        { name: 'robustBufferAccess', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'fullDrawIndexUint32', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'imageCubeArray', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'independentBlend', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'geometryShader', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'tessellationShader', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'sampleRateShading', packedOffset: 0, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'dualSrcBlend', packedOffset: 0, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'logicOp', packedOffset: 0, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'multiDrawIndirect', packedOffset: 0, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
        { name: 'drawIndirectFirstInstance', packedOffset: 0, packedBitOffset: 10, type: mojo.internal.Bool, nullable: false },
        { name: 'depthClamp', packedOffset: 0, packedBitOffset: 11, type: mojo.internal.Bool, nullable: false },
        { name: 'depthBiasClamp', packedOffset: 0, packedBitOffset: 12, type: mojo.internal.Bool, nullable: false },
        { name: 'fillModeNonSolid', packedOffset: 0, packedBitOffset: 13, type: mojo.internal.Bool, nullable: false },
        { name: 'depthBounds', packedOffset: 0, packedBitOffset: 14, type: mojo.internal.Bool, nullable: false },
        { name: 'wideLines', packedOffset: 0, packedBitOffset: 15, type: mojo.internal.Bool, nullable: false },
        { name: 'largePoints', packedOffset: 0, packedBitOffset: 16, type: mojo.internal.Bool, nullable: false },
        { name: 'alphaToOne', packedOffset: 0, packedBitOffset: 17, type: mojo.internal.Bool, nullable: false },
        { name: 'multiViewport', packedOffset: 0, packedBitOffset: 18, type: mojo.internal.Bool, nullable: false },
        { name: 'samplerAnisotropy', packedOffset: 0, packedBitOffset: 19, type: mojo.internal.Bool, nullable: false },
        { name: 'textureCompressionETC2', packedOffset: 0, packedBitOffset: 20, type: mojo.internal.Bool, nullable: false },
        { name: 'textureCompressionASTC_LDR', packedOffset: 0, packedBitOffset: 21, type: mojo.internal.Bool, nullable: false },
        { name: 'textureCompressionBC', packedOffset: 0, packedBitOffset: 22, type: mojo.internal.Bool, nullable: false },
        { name: 'occlusionQueryPrecise', packedOffset: 0, packedBitOffset: 23, type: mojo.internal.Bool, nullable: false },
        { name: 'pipelineStatisticsQuery', packedOffset: 0, packedBitOffset: 24, type: mojo.internal.Bool, nullable: false },
        { name: 'vertexPipelineStoresAndAtomics', packedOffset: 0, packedBitOffset: 25, type: mojo.internal.Bool, nullable: false },
        { name: 'fragmentStoresAndAtomics', packedOffset: 0, packedBitOffset: 26, type: mojo.internal.Bool, nullable: false },
        { name: 'shaderTessellationAndGeometryPointSize', packedOffset: 0, packedBitOffset: 27, type: mojo.internal.Bool, nullable: false },
        { name: 'shaderImageGatherExtended', packedOffset: 0, packedBitOffset: 28, type: mojo.internal.Bool, nullable: false },
        { name: 'shaderStorageImageExtendedFormats', packedOffset: 0, packedBitOffset: 29, type: mojo.internal.Bool, nullable: false },
        { name: 'shaderStorageImageMultisample', packedOffset: 0, packedBitOffset: 30, type: mojo.internal.Bool, nullable: false },
        { name: 'shaderStorageImageReadWithoutFormat', packedOffset: 0, packedBitOffset: 31, type: mojo.internal.Bool, nullable: false },
        { name: 'shaderStorageImageWriteWithoutFormat', packedOffset: 0, packedBitOffset: 32, type: mojo.internal.Bool, nullable: false },
        { name: 'shaderUniformBufferArrayDynamicIndexing', packedOffset: 0, packedBitOffset: 33, type: mojo.internal.Bool, nullable: false },
        { name: 'shaderSampledImageArrayDynamicIndexing', packedOffset: 0, packedBitOffset: 34, type: mojo.internal.Bool, nullable: false },
        { name: 'shaderStorageBufferArrayDynamicIndexing', packedOffset: 0, packedBitOffset: 35, type: mojo.internal.Bool, nullable: false },
        { name: 'shaderStorageImageArrayDynamicIndexing', packedOffset: 0, packedBitOffset: 36, type: mojo.internal.Bool, nullable: false },
        { name: 'shaderClipDistance', packedOffset: 0, packedBitOffset: 37, type: mojo.internal.Bool, nullable: false },
        { name: 'shaderCullDistance', packedOffset: 0, packedBitOffset: 38, type: mojo.internal.Bool, nullable: false },
        { name: 'shaderFloat64', packedOffset: 0, packedBitOffset: 39, type: mojo.internal.Bool, nullable: false },
        { name: 'shaderInt64', packedOffset: 0, packedBitOffset: 40, type: mojo.internal.Bool, nullable: false },
        { name: 'shaderInt16', packedOffset: 0, packedBitOffset: 41, type: mojo.internal.Bool, nullable: false },
        { name: 'shaderResourceResidency', packedOffset: 0, packedBitOffset: 42, type: mojo.internal.Bool, nullable: false },
        { name: 'shaderResourceMinLod', packedOffset: 0, packedBitOffset: 43, type: mojo.internal.Bool, nullable: false },
        { name: 'sparseBinding', packedOffset: 0, packedBitOffset: 44, type: mojo.internal.Bool, nullable: false },
        { name: 'sparseResidencyBuffer', packedOffset: 0, packedBitOffset: 45, type: mojo.internal.Bool, nullable: false },
        { name: 'sparseResidencyImage2D', packedOffset: 0, packedBitOffset: 46, type: mojo.internal.Bool, nullable: false },
        { name: 'sparseResidencyImage3D', packedOffset: 0, packedBitOffset: 47, type: mojo.internal.Bool, nullable: false },
        { name: 'sparseResidency2Samples', packedOffset: 0, packedBitOffset: 48, type: mojo.internal.Bool, nullable: false },
        { name: 'sparseResidency4Samples', packedOffset: 0, packedBitOffset: 49, type: mojo.internal.Bool, nullable: false },
        { name: 'sparseResidency8Samples', packedOffset: 0, packedBitOffset: 50, type: mojo.internal.Bool, nullable: false },
        { name: 'sparseResidency16Samples', packedOffset: 0, packedBitOffset: 51, type: mojo.internal.Bool, nullable: false },
        { name: 'sparseResidencyAliased', packedOffset: 0, packedBitOffset: 52, type: mojo.internal.Bool, nullable: false },
        { name: 'variableMultisampleRate', packedOffset: 0, packedBitOffset: 53, type: mojo.internal.Bool, nullable: false },
        { name: 'inheritedQueries', packedOffset: 0, packedBitOffset: 54, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'width', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'height', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'depth', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'queueFlags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'queueCount', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'timestampValidBits', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'minImageTransferGranularity', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.VkExtent3DSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
