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

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.gpu = mojo.internal.bindings.gpu || {};
mojo.internal.bindings.gpu.mojom = mojo.internal.bindings.gpu.mojom || {};

mojo.internal.bindings.gpu.mojom.VkPhysicalDeviceTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.gpu.mojom.VkExtensionPropertiesSpec = { $: {} };
mojo.internal.bindings.gpu.mojom.VkLayerPropertiesSpec = { $: {} };
mojo.internal.bindings.gpu.mojom.VkPhysicalDeviceLimitsSpec = { $: {} };
mojo.internal.bindings.gpu.mojom.VkPhysicalDeviceSparsePropertiesSpec = { $: {} };
mojo.internal.bindings.gpu.mojom.VkPhysicalDevicePropertiesSpec = { $: {} };
mojo.internal.bindings.gpu.mojom.VkPhysicalDeviceFeaturesSpec = { $: {} };
mojo.internal.bindings.gpu.mojom.VkExtent3DSpec = { $: {} };
mojo.internal.bindings.gpu.mojom.VkQueueFamilyPropertiesSpec = { $: {} };

// Enum: VkPhysicalDeviceType
mojo.internal.bindings.gpu.mojom.VkPhysicalDeviceType = {
  OTHER: 0,
  INTEGRATED_GPU: 1,
  DISCRETE_GPU: 2,
  VIRTUAL_GPU: 3,
  CPU: 4,
  INVALID_VALUE: -1,
};

// Struct: VkExtensionProperties
mojo.internal.Struct(
    mojo.internal.bindings.gpu.mojom.VkExtensionPropertiesSpec, 'gpu.mojom.VkExtensionProperties', [
      mojo.internal.StructField('arg_extensionName', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_specVersion', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VkLayerProperties
mojo.internal.Struct(
    mojo.internal.bindings.gpu.mojom.VkLayerPropertiesSpec, 'gpu.mojom.VkLayerProperties', [
      mojo.internal.StructField('arg_layerName', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_description', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_specVersion', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_implementationVersion', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VkPhysicalDeviceLimits
mojo.internal.Struct(
    mojo.internal.bindings.gpu.mojom.VkPhysicalDeviceLimitsSpec, 'gpu.mojom.VkPhysicalDeviceLimits', [
      mojo.internal.StructField('arg_bufferImageGranularity', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sparseAddressSpaceSize', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxComputeWorkGroupCount', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_maxComputeWorkGroupSize', 24, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_maxViewportDimensions', 32, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_viewportBoundsRange', 40, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_minMemoryMapAlignment', 48, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_minTexelBufferOffsetAlignment', 56, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_minUniformBufferOffsetAlignment', 64, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_minStorageBufferOffsetAlignment', 72, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pointSizeRange', 80, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_lineWidthRange', 88, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_optimalBufferCopyOffsetAlignment', 96, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_optimalBufferCopyRowPitchAlignment', 104, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_nonCoherentAtomSize', 112, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxImageDimension1D', 120, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxImageDimension2D', 124, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxImageDimension3D', 128, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxImageDimensionCube', 132, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxImageArrayLayers', 136, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxTexelBufferElements', 140, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxUniformBufferRange', 144, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxStorageBufferRange', 148, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxPushConstantsSize', 152, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxMemoryAllocationCount', 156, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxSamplerAllocationCount', 160, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxBoundDescriptorSets', 164, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxPerStageDescriptorSamplers', 168, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxPerStageDescriptorUniformBuffers', 172, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxPerStageDescriptorStorageBuffers', 176, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxPerStageDescriptorSampledImages', 180, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxPerStageDescriptorStorageImages', 184, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxPerStageDescriptorInputAttachments', 188, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxPerStageResources', 192, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxDescriptorSetSamplers', 196, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxDescriptorSetUniformBuffers', 200, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxDescriptorSetUniformBuffersDynamic', 204, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxDescriptorSetStorageBuffers', 208, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxDescriptorSetStorageBuffersDynamic', 212, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxDescriptorSetSampledImages', 216, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxDescriptorSetStorageImages', 220, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxDescriptorSetInputAttachments', 224, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxVertexInputAttributes', 228, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxVertexInputBindings', 232, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxVertexInputAttributeOffset', 236, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxVertexInputBindingStride', 240, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxVertexOutputComponents', 244, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxTessellationGenerationLevel', 248, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxTessellationPatchSize', 252, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxTessellationControlPerVertexInputComponents', 256, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxTessellationControlPerVertexOutputComponents', 260, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxTessellationControlPerPatchOutputComponents', 264, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxTessellationControlTotalOutputComponents', 268, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxTessellationEvaluationInputComponents', 272, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxTessellationEvaluationOutputComponents', 276, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxGeometryShaderInvocations', 280, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxGeometryInputComponents', 284, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxGeometryOutputComponents', 288, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxGeometryOutputVertices', 292, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxGeometryTotalOutputComponents', 296, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxFragmentInputComponents', 300, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxFragmentOutputAttachments', 304, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxFragmentDualSrcAttachments', 308, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxFragmentCombinedOutputResources', 312, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxComputeSharedMemorySize', 316, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxComputeWorkGroupInvocations', 320, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_subPixelPrecisionBits', 324, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_subTexelPrecisionBits', 328, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_mipmapPrecisionBits', 332, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxDrawIndexedIndexValue', 336, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxDrawIndirectCount', 340, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxSamplerLodBias', 344, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxSamplerAnisotropy', 348, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxViewports', 352, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_viewportSubPixelBits', 356, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_minTexelOffset', 360, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxTexelOffset', 364, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_minTexelGatherOffset', 368, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxTexelGatherOffset', 372, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_minInterpolationOffset', 376, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxInterpolationOffset', 380, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_subPixelInterpolationOffsetBits', 384, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxFramebufferWidth', 388, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxFramebufferHeight', 392, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxFramebufferLayers', 396, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_framebufferColorSampleCounts', 400, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_framebufferDepthSampleCounts', 404, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_framebufferStencilSampleCounts', 408, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_framebufferNoAttachmentsSampleCounts', 412, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxColorAttachments', 416, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sampledImageColorSampleCounts', 420, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sampledImageIntegerSampleCounts', 424, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sampledImageDepthSampleCounts', 428, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sampledImageStencilSampleCounts', 432, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_storageImageSampleCounts', 436, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxSampleMaskWords', 440, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_timestampPeriod', 444, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxClipDistances', 448, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxCullDistances', 452, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maxCombinedClipAndCullDistances', 456, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_discreteQueuePriorities', 460, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pointSizeGranularity', 464, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_lineWidthGranularity', 468, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_timestampComputeAndGraphics', 472, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_strictLines', 472, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_standardSampleLocations', 472, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 488]]);

// Struct: VkPhysicalDeviceSparseProperties
mojo.internal.Struct(
    mojo.internal.bindings.gpu.mojom.VkPhysicalDeviceSparsePropertiesSpec, 'gpu.mojom.VkPhysicalDeviceSparseProperties', [
      mojo.internal.StructField('arg_residencyStandard2DBlockShape', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_residencyStandard2DMultisampleBlockShape', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_residencyStandard3DBlockShape', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_residencyAlignedMipSize', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_residencyNonResidentStrict', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VkPhysicalDeviceProperties
mojo.internal.Struct(
    mojo.internal.bindings.gpu.mojom.VkPhysicalDevicePropertiesSpec, 'gpu.mojom.VkPhysicalDeviceProperties', [
      mojo.internal.StructField('arg_deviceType', 0, 0, mojo.internal.bindings.gpu.mojom.VkPhysicalDeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_deviceName', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_pipelineCacheUUID', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_limits', 24, 0, mojo.internal.bindings.gpu.mojom.VkPhysicalDeviceLimitsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sparseProperties', 32, 0, mojo.internal.bindings.gpu.mojom.VkPhysicalDeviceSparsePropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_apiVersion', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_driverVersion', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_vendorID', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_deviceID', 52, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: VkPhysicalDeviceFeatures
mojo.internal.Struct(
    mojo.internal.bindings.gpu.mojom.VkPhysicalDeviceFeaturesSpec, 'gpu.mojom.VkPhysicalDeviceFeatures', [
      mojo.internal.StructField('arg_robustBufferAccess', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_fullDrawIndexUint32', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_imageCubeArray', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_independentBlend', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_geometryShader', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_tessellationShader', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sampleRateShading', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_dualSrcBlend', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_logicOp', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_multiDrawIndirect', 1, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_drawIndirectFirstInstance', 1, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_depthClamp', 1, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_depthBiasClamp', 1, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_fillModeNonSolid', 1, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_depthBounds', 1, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_wideLines', 1, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_largePoints', 2, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_alphaToOne', 2, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_multiViewport', 2, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_samplerAnisotropy', 2, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_textureCompressionETC2', 2, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_textureCompressionASTC_LDR', 2, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_textureCompressionBC', 2, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_occlusionQueryPrecise', 2, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_pipelineStatisticsQuery', 3, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_vertexPipelineStoresAndAtomics', 3, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_fragmentStoresAndAtomics', 3, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shaderTessellationAndGeometryPointSize', 3, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shaderImageGatherExtended', 3, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shaderStorageImageExtendedFormats', 3, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shaderStorageImageMultisample', 3, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shaderStorageImageReadWithoutFormat', 3, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shaderStorageImageWriteWithoutFormat', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shaderUniformBufferArrayDynamicIndexing', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shaderSampledImageArrayDynamicIndexing', 4, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shaderStorageBufferArrayDynamicIndexing', 4, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shaderStorageImageArrayDynamicIndexing', 4, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shaderClipDistance', 4, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shaderCullDistance', 4, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shaderFloat64', 4, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shaderInt64', 5, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shaderInt16', 5, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shaderResourceResidency', 5, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shaderResourceMinLod', 5, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sparseBinding', 5, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sparseResidencyBuffer', 5, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sparseResidencyImage2D', 5, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sparseResidencyImage3D', 5, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sparseResidency2Samples', 6, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sparseResidency4Samples', 6, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sparseResidency8Samples', 6, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sparseResidency16Samples', 6, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sparseResidencyAliased', 6, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_variableMultisampleRate', 6, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_inheritedQueries', 6, 6, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VkExtent3D
mojo.internal.Struct(
    mojo.internal.bindings.gpu.mojom.VkExtent3DSpec, 'gpu.mojom.VkExtent3D', [
      mojo.internal.StructField('arg_width', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_depth', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VkQueueFamilyProperties
mojo.internal.Struct(
    mojo.internal.bindings.gpu.mojom.VkQueueFamilyPropertiesSpec, 'gpu.mojom.VkQueueFamilyProperties', [
      mojo.internal.StructField('arg_minImageTransferGranularity', 0, 0, mojo.internal.bindings.gpu.mojom.VkExtent3DSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_queueFlags', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_queueCount', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_timestampValidBits', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);
