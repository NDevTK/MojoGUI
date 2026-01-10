// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/vulkan_types.mojom
// Module: gpu.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

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
      mojo.internal.StructField('description', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('specVersion', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('implementationVersion', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VkPhysicalDeviceLimits
mojo.internal.Struct(
    gpu.mojom.VkPhysicalDeviceLimitsSpec, 'gpu.mojom.VkPhysicalDeviceLimits', [
      mojo.internal.StructField('bufferImageGranularity', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('sparseAddressSpaceSize', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('maxComputeWorkGroupCount', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('maxComputeWorkGroupSize', 24, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('maxViewportDimensions', 32, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('viewportBoundsRange', 40, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('minMemoryMapAlignment', 48, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('minTexelBufferOffsetAlignment', 56, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('minUniformBufferOffsetAlignment', 64, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('minStorageBufferOffsetAlignment', 72, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('pointSizeRange', 80, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('lineWidthRange', 88, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('optimalBufferCopyOffsetAlignment', 96, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('optimalBufferCopyRowPitchAlignment', 104, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('nonCoherentAtomSize', 112, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('maxImageDimension1D', 120, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxImageDimension2D', 124, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxImageDimension3D', 128, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxImageDimensionCube', 132, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxImageArrayLayers', 136, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTexelBufferElements', 140, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxUniformBufferRange', 144, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxStorageBufferRange', 148, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxPushConstantsSize', 152, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxMemoryAllocationCount', 156, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxSamplerAllocationCount', 160, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxBoundDescriptorSets', 164, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxPerStageDescriptorSamplers', 168, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxPerStageDescriptorUniformBuffers', 172, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxPerStageDescriptorStorageBuffers', 176, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxPerStageDescriptorSampledImages', 180, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxPerStageDescriptorStorageImages', 184, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxPerStageDescriptorInputAttachments', 188, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxPerStageResources', 192, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDescriptorSetSamplers', 196, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDescriptorSetUniformBuffers', 200, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDescriptorSetUniformBuffersDynamic', 204, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDescriptorSetStorageBuffers', 208, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDescriptorSetStorageBuffersDynamic', 212, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDescriptorSetSampledImages', 216, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDescriptorSetStorageImages', 220, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDescriptorSetInputAttachments', 224, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxVertexInputAttributes', 228, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxVertexInputBindings', 232, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxVertexInputAttributeOffset', 236, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxVertexInputBindingStride', 240, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxVertexOutputComponents', 244, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTessellationGenerationLevel', 248, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTessellationPatchSize', 252, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTessellationControlPerVertexInputComponents', 256, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTessellationControlPerVertexOutputComponents', 260, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTessellationControlPerPatchOutputComponents', 264, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTessellationControlTotalOutputComponents', 268, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTessellationEvaluationInputComponents', 272, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTessellationEvaluationOutputComponents', 276, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxGeometryShaderInvocations', 280, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxGeometryInputComponents', 284, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxGeometryOutputComponents', 288, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxGeometryOutputVertices', 292, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxGeometryTotalOutputComponents', 296, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxFragmentInputComponents', 300, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxFragmentOutputAttachments', 304, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxFragmentDualSrcAttachments', 308, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxFragmentCombinedOutputResources', 312, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxComputeSharedMemorySize', 316, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxComputeWorkGroupInvocations', 320, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('subPixelPrecisionBits', 324, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('subTexelPrecisionBits', 328, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('mipmapPrecisionBits', 332, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDrawIndexedIndexValue', 336, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxDrawIndirectCount', 340, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxSamplerLodBias', 344, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('maxSamplerAnisotropy', 348, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('maxViewports', 352, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('viewportSubPixelBits', 356, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('minTexelOffset', 360, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTexelOffset', 364, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('minTexelGatherOffset', 368, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('maxTexelGatherOffset', 372, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('minInterpolationOffset', 376, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('maxInterpolationOffset', 380, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('subPixelInterpolationOffsetBits', 384, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxFramebufferWidth', 388, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxFramebufferHeight', 392, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxFramebufferLayers', 396, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('framebufferColorSampleCounts', 400, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('framebufferDepthSampleCounts', 404, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('framebufferStencilSampleCounts', 408, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('framebufferNoAttachmentsSampleCounts', 412, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxColorAttachments', 416, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sampledImageColorSampleCounts', 420, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sampledImageIntegerSampleCounts', 424, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sampledImageDepthSampleCounts', 428, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sampledImageStencilSampleCounts', 432, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('storageImageSampleCounts', 436, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxSampleMaskWords', 440, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('timestampPeriod', 444, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('maxClipDistances', 448, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxCullDistances', 452, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maxCombinedClipAndCullDistances', 456, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('discreteQueuePriorities', 460, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pointSizeGranularity', 464, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('lineWidthGranularity', 468, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('timestampComputeAndGraphics', 472, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('strictLines', 472, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('standardSampleLocations', 472, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 488]]);

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
      mojo.internal.StructField('deviceType', 0, 0, gpu.mojom.VkPhysicalDeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('deviceName', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pipelineCacheUUID', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('limits', 24, 0, gpu.mojom.VkPhysicalDeviceLimitsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sparseProperties', 32, 0, gpu.mojom.VkPhysicalDeviceSparsePropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('apiVersion', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('driverVersion', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('vendorID', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('deviceID', 52, 0, mojo.internal.Uint32, 0, false, 0, undefined),
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
      mojo.internal.StructField('minImageTransferGranularity', 0, 0, gpu.mojom.VkExtent3DSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('queueFlags', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('queueCount', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('timestampValidBits', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);
