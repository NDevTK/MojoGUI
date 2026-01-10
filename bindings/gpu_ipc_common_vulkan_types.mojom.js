// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/vulkan_types.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};

gpu.mojom.VkPhysicalDeviceTypeSpec = { $: mojo.internal.Enum() };
gpu.mojom.VkExtensionPropertiesSpec = { $: {} };
gpu.mojom.VkLayerPropertiesSpec = { $: {} };
gpu.mojom.VkPhysicalDeviceLimitsSpec = { $: {} };
gpu.mojom.VkPhysicalDeviceSparsePropertiesSpec = { $: {} };
gpu.mojom.VkPhysicalDevicePropertiesSpec = { $: {} };
gpu.mojom.VkPhysicalDeviceFeaturesSpec = { $: {} };
gpu.mojom.VkExtent3DSpec = { $: {} };
gpu.mojom.VkQueueFamilyPropertiesSpec = { $: {} };

// Enum: VkPhysicalDeviceType
gpu.mojom.VkPhysicalDeviceType = {
  OTHER: 0,
  INTEGRATED_GPU: 1,
  DISCRETE_GPU: 2,
  VIRTUAL_GPU: 3,
  CPU: 4,
  INVALID_VALUE: -1,
};

// Struct: VkExtensionProperties
mojo.internal.Struct(
    gpu.mojom.VkExtensionPropertiesSpec, 'gpu.mojom.VkExtensionProperties', [
      mojo.internal.StructField('extensionName', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('specVersion', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VkLayerProperties
mojo.internal.Struct(
    gpu.mojom.VkLayerPropertiesSpec, 'gpu.mojom.VkLayerProperties', [
      mojo.internal.StructField('layerName', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('specVersion', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('implementationVersion', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VkPhysicalDeviceLimits
mojo.internal.Struct(
    gpu.mojom.VkPhysicalDeviceLimitsSpec, 'gpu.mojom.VkPhysicalDeviceLimits', [
      mojo.internal.StructField('maxImageDimension1D', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxImageDimension2D', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxImageDimension3D', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxImageDimensionCube', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxImageArrayLayers', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTexelBufferElements', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxUniformBufferRange', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxStorageBufferRange', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxPushConstantsSize', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxMemoryAllocationCount', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxSamplerAllocationCount', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('bufferImageGranularity', 48, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('sparseAddressSpaceSize', 56, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('maxBoundDescriptorSets', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxPerStageDescriptorSamplers', 68, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxPerStageDescriptorUniformBuffers', 72, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxPerStageDescriptorStorageBuffers', 76, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxPerStageDescriptorSampledImages', 80, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxPerStageDescriptorStorageImages', 84, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxPerStageDescriptorInputAttachments', 88, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxPerStageResources', 92, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDescriptorSetSamplers', 96, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDescriptorSetUniformBuffers', 100, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDescriptorSetUniformBuffersDynamic', 104, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDescriptorSetStorageBuffers', 108, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDescriptorSetStorageBuffersDynamic', 112, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDescriptorSetSampledImages', 116, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDescriptorSetStorageImages', 120, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDescriptorSetInputAttachments', 124, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxVertexInputAttributes', 128, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxVertexInputBindings', 132, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxVertexInputAttributeOffset', 136, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxVertexInputBindingStride', 140, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxVertexOutputComponents', 144, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTessellationGenerationLevel', 148, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTessellationPatchSize', 152, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTessellationControlPerVertexInputComponents', 156, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTessellationControlPerVertexOutputComponents', 160, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTessellationControlPerPatchOutputComponents', 164, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTessellationControlTotalOutputComponents', 168, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTessellationEvaluationInputComponents', 172, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTessellationEvaluationOutputComponents', 176, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxGeometryShaderInvocations', 180, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxGeometryInputComponents', 184, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxGeometryOutputComponents', 188, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxGeometryOutputVertices', 192, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxGeometryTotalOutputComponents', 196, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxFragmentInputComponents', 200, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxFragmentOutputAttachments', 204, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxFragmentDualSrcAttachments', 208, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxFragmentCombinedOutputResources', 212, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxComputeSharedMemorySize', 216, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxComputeWorkGroupCount', 224, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('maxComputeWorkGroupInvocations', 232, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxComputeWorkGroupSize', 240, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('subPixelPrecisionBits', 248, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('subTexelPrecisionBits', 252, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('mipmapPrecisionBits', 256, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDrawIndexedIndexValue', 260, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDrawIndirectCount', 264, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxSamplerLodBias', 268, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('maxSamplerAnisotropy', 272, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('maxViewports', 276, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxViewportDimensions', 280, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('viewportBoundsRange', 288, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('viewportSubPixelBits', 296, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('minMemoryMapAlignment', 304, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('minTexelBufferOffsetAlignment', 312, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('minUniformBufferOffsetAlignment', 320, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('minStorageBufferOffsetAlignment', 328, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('minTexelOffset', 336, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTexelOffset', 340, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('minTexelGatherOffset', 344, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTexelGatherOffset', 348, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('minInterpolationOffset', 352, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('maxInterpolationOffset', 356, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('subPixelInterpolationOffsetBits', 360, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxFramebufferWidth', 364, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxFramebufferHeight', 368, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxFramebufferLayers', 372, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('framebufferColorSampleCounts', 376, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('framebufferDepthSampleCounts', 380, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('framebufferStencilSampleCounts', 384, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('framebufferNoAttachmentsSampleCounts', 388, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxColorAttachments', 392, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sampledImageColorSampleCounts', 396, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sampledImageIntegerSampleCounts', 400, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sampledImageDepthSampleCounts', 404, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sampledImageStencilSampleCounts', 408, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('storageImageSampleCounts', 412, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxSampleMaskWords', 416, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('timestampComputeAndGraphics', 420, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('timestampPeriod', 424, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('maxClipDistances', 428, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxCullDistances', 432, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxCombinedClipAndCullDistances', 436, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('discreteQueuePriorities', 440, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pointSizeRange', 448, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('lineWidthRange', 456, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('pointSizeGranularity', 464, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('lineWidthGranularity', 468, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('strictLines', 472, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('standardSampleLocations', 472, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('optimalBufferCopyOffsetAlignment', 480, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('optimalBufferCopyRowPitchAlignment', 488, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('nonCoherentAtomSize', 496, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 512]]);

// Struct: VkPhysicalDeviceSparseProperties
mojo.internal.Struct(
    gpu.mojom.VkPhysicalDeviceSparsePropertiesSpec, 'gpu.mojom.VkPhysicalDeviceSparseProperties', [
      mojo.internal.StructField('residencyStandard2DBlockShape', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('residencyStandard2DMultisampleBlockShape', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('residencyStandard3DBlockShape', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('residencyAlignedMipSize', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('residencyNonResidentStrict', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VkPhysicalDeviceProperties
mojo.internal.Struct(
    gpu.mojom.VkPhysicalDevicePropertiesSpec, 'gpu.mojom.VkPhysicalDeviceProperties', [
      mojo.internal.StructField('apiVersion', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('driverVersion', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('vendorID', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('deviceID', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('deviceType', 16, 0, gpu.mojom.VkPhysicalDeviceTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('deviceName', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pipelineCacheUUID', 32, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('limits', 40, 0, gpu.mojom.VkPhysicalDeviceLimitsSpec, null, false, 0, undefined),
      mojo.internal.StructField('sparseProperties', 48, 0, gpu.mojom.VkPhysicalDeviceSparsePropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: VkPhysicalDeviceFeatures
mojo.internal.Struct(
    gpu.mojom.VkPhysicalDeviceFeaturesSpec, 'gpu.mojom.VkPhysicalDeviceFeatures', [
      mojo.internal.StructField('robustBufferAccess', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('fullDrawIndexUint32', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('imageCubeArray', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('independentBlend', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('geometryShader', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tessellationShader', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sampleRateShading', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('dualSrcBlend', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('logicOp', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('multiDrawIndirect', 1, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('drawIndirectFirstInstance', 1, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('depthClamp', 1, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('depthBiasClamp', 1, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('fillModeNonSolid', 1, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('depthBounds', 1, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('wideLines', 1, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('largePoints', 2, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('alphaToOne', 2, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('multiViewport', 2, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('samplerAnisotropy', 2, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('textureCompressionETC2', 2, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('textureCompressionASTC_LDR', 2, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('textureCompressionBC', 2, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('occlusionQueryPrecise', 2, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('pipelineStatisticsQuery', 3, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('vertexPipelineStoresAndAtomics', 3, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('fragmentStoresAndAtomics', 3, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shaderTessellationAndGeometryPointSize', 3, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shaderImageGatherExtended', 3, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shaderStorageImageExtendedFormats', 3, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shaderStorageImageMultisample', 3, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shaderStorageImageReadWithoutFormat', 3, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shaderStorageImageWriteWithoutFormat', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shaderUniformBufferArrayDynamicIndexing', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shaderSampledImageArrayDynamicIndexing', 4, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shaderStorageBufferArrayDynamicIndexing', 4, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shaderStorageImageArrayDynamicIndexing', 4, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shaderClipDistance', 4, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shaderCullDistance', 4, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shaderFloat64', 4, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shaderInt64', 5, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shaderInt16', 5, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shaderResourceResidency', 5, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shaderResourceMinLod', 5, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sparseBinding', 5, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sparseResidencyBuffer', 5, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sparseResidencyImage2D', 5, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sparseResidencyImage3D', 5, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sparseResidency2Samples', 6, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sparseResidency4Samples', 6, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sparseResidency8Samples', 6, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sparseResidency16Samples', 6, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sparseResidencyAliased', 6, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('variableMultisampleRate', 6, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('inheritedQueries', 6, 6, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VkExtent3D
mojo.internal.Struct(
    gpu.mojom.VkExtent3DSpec, 'gpu.mojom.VkExtent3D', [
      mojo.internal.StructField('width', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('depth', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VkQueueFamilyProperties
mojo.internal.Struct(
    gpu.mojom.VkQueueFamilyPropertiesSpec, 'gpu.mojom.VkQueueFamilyProperties', [
      mojo.internal.StructField('queueFlags', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('queueCount', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('timestampValidBits', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('minImageTransferGranularity', 16, 0, gpu.mojom.VkExtent3DSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);
