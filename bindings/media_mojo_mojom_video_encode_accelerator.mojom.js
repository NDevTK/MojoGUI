// Auto-generated MojoJS binding
 // Source: chromium_src/media/mojo/mojom/video_encode_accelerator.mojom
 // Module: media.mojom

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
 

 mojo.internal.bindings.media = mojo.internal.bindings.media || {};
mojo.internal.bindings.media.mojom = mojo.internal.bindings.media.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorSupportedRateControlModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.ContentTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.StorageTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.EncoderTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.BitrateSpec = { $: {} };
mojo.internal.bindings.media.mojom.OptionalMetadataSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorSupportedProfileSpec = { $: {} };
mojo.internal.bindings.media.mojom.EncodeCommandBufferIdSpec = { $: {} };
mojo.internal.bindings.media.mojom.VariableBitratePeakSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoBitrateAllocationSpec = { $: {} };
mojo.internal.bindings.media.mojom.SpatialLayerSpec = { $: {} };
mojo.internal.bindings.media.mojom.ConstantBitrateSpec = { $: {} };
mojo.internal.bindings.media.mojom.VariableBitrateSpec = { $: {} };
mojo.internal.bindings.media.mojom.ExternalBitrateSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorConfigSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeOptionsSpec = { $: {} };
mojo.internal.bindings.media.mojom.DropFrameMetadataSpec = { $: {} };
mojo.internal.bindings.media.mojom.H264MetadataSpec = { $: {} };
mojo.internal.bindings.media.mojom.Vp8MetadataSpec = { $: {} };
mojo.internal.bindings.media.mojom.Vp9MetadataSpec = { $: {} };
mojo.internal.bindings.media.mojom.SVCGenericMetadataSpec = { $: {} };
mojo.internal.bindings.media.mojom.BitstreamBufferMetadataSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProvider = {};
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProvider.$interfaceName = 'media.mojom.VideoEncodeAcceleratorProvider';
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactory = {};
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactory.$interfaceName = 'media.mojom.VideoEncodeAcceleratorProviderFactory';
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAccelerator = {};
mojo.internal.bindings.media.mojom.VideoEncodeAccelerator.$interfaceName = 'media.mojom.VideoEncodeAccelerator';
mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Encode_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Flush_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient = {};
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient.$interfaceName = 'media.mojom.VideoEncodeAcceleratorClient';
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec = { $: {} };

// Enum: VideoEncodeAcceleratorSupportedRateControlMode
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorSupportedRateControlMode = {
  kNoMode: 0,
  kConstantMode: 1,
  kVariableMode: 2,
  kExternalMode: 3,
};

// Enum: ContentType
mojo.internal.bindings.media.mojom.ContentType = {
  kCamera: 0,
  kDisplay: 1,
};

// Enum: StorageType
mojo.internal.bindings.media.mojom.StorageType = {
  kShmem: 0,
  kGpuMemoryBuffer: 1,
};

// Enum: EncoderType
mojo.internal.bindings.media.mojom.EncoderType = {
  kHardware: 0,
  kSoftware: 1,
  kNoPreference: 2,
};

// Union: Bitrate
mojo.internal.Union(
    mojo.internal.bindings.media.mojom.BitrateSpec, 'media.mojom.Bitrate', {
      'arg_constant': {
        'ordinal': 0,
        'type': mojo.internal.bindings.media.mojom.ConstantBitrateSpec.$,
        'nullable': false,
      },
      'arg_variable': {
        'ordinal': 1,
        'type': mojo.internal.bindings.media.mojom.VariableBitrateSpec.$,
        'nullable': false,
      },
      'arg_external': {
        'ordinal': 2,
        'type': mojo.internal.bindings.media.mojom.ExternalBitrateSpec.$,
        'nullable': false,
      },
    });

// Union: OptionalMetadata
mojo.internal.Union(
    mojo.internal.bindings.media.mojom.OptionalMetadataSpec, 'media.mojom.OptionalMetadata', {
      'arg_drop': {
        'ordinal': 0,
        'type': mojo.internal.bindings.media.mojom.DropFrameMetadataSpec.$,
        'nullable': false,
      },
      'arg_h264': {
        'ordinal': 1,
        'type': mojo.internal.bindings.media.mojom.H264MetadataSpec.$,
        'nullable': false,
      },
      'arg_vp8': {
        'ordinal': 2,
        'type': mojo.internal.bindings.media.mojom.Vp8MetadataSpec.$,
        'nullable': false,
      },
      'arg_vp9': {
        'ordinal': 3,
        'type': mojo.internal.bindings.media.mojom.Vp9MetadataSpec.$,
        'nullable': false,
      },
    });

// Struct: VideoEncodeAcceleratorSupportedProfile
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorSupportedProfileSpec, 'media.mojom.VideoEncodeAcceleratorSupportedProfile', [
      mojo.internal.StructField('arg_profile', 0, 0, mojo.internal.bindings.media.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_min_resolution', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_resolution', 16, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_rate_control_modes', 24, 0, mojo.internal.Array(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorSupportedRateControlModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_scalability_modes', 32, 0, mojo.internal.Array(mojo.internal.bindings.media.mojom.SVCScalabilityModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_gpu_supported_pixel_formats', 40, 0, mojo.internal.Array(mojo.internal.bindings.media.mojom.VideoPixelFormatSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_max_framerate_numerator', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_framerate_denominator', 52, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_software_codec', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_supports_gpu_shared_images', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: EncodeCommandBufferId
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.EncodeCommandBufferIdSpec, 'media.mojom.EncodeCommandBufferId', [
      mojo.internal.StructField('arg_channel_token', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_route_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VariableBitratePeak
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VariableBitratePeakSpec, 'media.mojom.VariableBitratePeak', [
      mojo.internal.StructField('arg_bps', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VideoBitrateAllocation
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoBitrateAllocationSpec, 'media.mojom.VideoBitrateAllocation', [
      mojo.internal.StructField('arg_bitrates', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_variable_bitrate_peak', 8, 0, mojo.internal.bindings.media.mojom.VariableBitratePeakSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SpatialLayer
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.SpatialLayerSpec, 'media.mojom.SpatialLayer', [
      mojo.internal.StructField('arg_width', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bitrate_bps', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_framerate', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_qp', 16, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_num_of_temporal_layers', 17, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ConstantBitrate
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ConstantBitrateSpec, 'media.mojom.ConstantBitrate', [
      mojo.internal.StructField('arg_target_bps', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VariableBitrate
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VariableBitrateSpec, 'media.mojom.VariableBitrate', [
      mojo.internal.StructField('arg_target_bps', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_peak_bps', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ExternalBitrate
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ExternalBitrateSpec, 'media.mojom.ExternalBitrate', [
    ],
    [[0, 8]]);

// Struct: VideoEncodeAcceleratorConfig
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorConfigSpec, 'media.mojom.VideoEncodeAcceleratorConfig', [
      mojo.internal.StructField('arg_kCamera', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoEncodeOptions
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeOptionsSpec, 'media.mojom.VideoEncodeOptions', [
      mojo.internal.StructField('arg_reference_buffers', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_quantizer', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_force_keyframe', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_update_buffer_$flag', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_update_buffer_$value', originalFieldName: 'arg_update_buffer' }),
      mojo.internal.StructField('arg_update_buffer_$value', 13, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_update_buffer_$flag', originalFieldName: 'arg_update_buffer' }),
    ],
    [[0, 24]]);

// Struct: DropFrameMetadata
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.DropFrameMetadataSpec, 'media.mojom.DropFrameMetadata', [
      mojo.internal.StructField('arg_spatial_idx', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end_of_picture', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: H264Metadata
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.H264MetadataSpec, 'media.mojom.H264Metadata', [
      mojo.internal.StructField('arg_temporal_idx', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_layer_sync', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Vp8Metadata
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Vp8MetadataSpec, 'media.mojom.Vp8Metadata', [
      mojo.internal.StructField('arg_non_reference', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_temporal_idx', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_layer_sync', 2, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Vp9Metadata
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Vp9MetadataSpec, 'media.mojom.Vp9Metadata', [
      mojo.internal.StructField('arg_spatial_layer_resolutions', 0, 0, mojo.internal.Array(mojo.internal.bindings.gfx.mojom.SizeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_p_diffs', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_inter_pic_predicted', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_temporal_up_switch', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_referenced_by_upper_spatial_layers', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_reference_lower_spatial_layers', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_end_of_picture', 16, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_temporal_idx', 17, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_spatial_idx', 18, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_begin_active_spatial_layer_index', 19, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end_active_spatial_layer_index', 20, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SVCGenericMetadata
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.SVCGenericMetadataSpec, 'media.mojom.SVCGenericMetadata', [
      mojo.internal.StructField('arg_reference_flags_$value', 0, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_reference_flags_$flag', originalFieldName: 'arg_reference_flags' }),
      mojo.internal.StructField('arg_refresh_flags_$value', 2, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_refresh_flags_$flag', originalFieldName: 'arg_refresh_flags' }),
      mojo.internal.StructField('arg_follow_svc_spec', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_temporal_idx', 5, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_spatial_idx', 6, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_reference_flags_$flag', 7, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_reference_flags_$value', originalFieldName: 'arg_reference_flags' }),
      mojo.internal.StructField('arg_refresh_flags_$flag', 7, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_refresh_flags_$value', originalFieldName: 'arg_refresh_flags' }),
    ],
    [[0, 16]]);

// Struct: BitstreamBufferMetadata
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.BitstreamBufferMetadataSpec, 'media.mojom.BitstreamBufferMetadata', [
      mojo.internal.StructField('arg_timestamp', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_optional_metadata', 8, 0, mojo.internal.bindings.media.mojom.OptionalMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_svc_generic', 16, 0, mojo.internal.bindings.media.mojom.SVCGenericMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_encoded_size', 24, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_encoded_color_space', 32, 0, mojo.internal.bindings.gfx.mojom.ColorSpaceSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_payload_size_bytes', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_qp', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key_frame', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: VideoEncodeAcceleratorProvider
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params', [
      mojo.internal.StructField('arg_command_buffer_id', 0, 0, mojo.internal.bindings.media.mojom.EncodeCommandBufferIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_receiver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParamsSpec, 'media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParams', [
      mojo.internal.StructField('arg_profiles', 0, 0, mojo.internal.Array(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorSupportedProfileSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoEncodeAcceleratorProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createVideoEncodeAccelerator(arg_command_buffer_id, arg_receiver) {
    return this.$.createVideoEncodeAccelerator(arg_command_buffer_id, arg_receiver);
  }
  getVideoEncodeAcceleratorSupportedProfiles() {
    return this.$.getVideoEncodeAcceleratorSupportedProfiles();
  }
};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoEncodeAcceleratorProvider', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createVideoEncodeAccelerator(arg_command_buffer_id, arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_ParamsSpec,
      null,
      [arg_command_buffer_id, arg_receiver],
      false);
  }

  getVideoEncodeAcceleratorSupportedProfiles() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec,
      mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoEncodeAcceleratorProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoEncodeAcceleratorProvider', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateVideoEncodeAccelerator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateVideoEncodeAccelerator (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetVideoEncodeAcceleratorSupportedProfiles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVideoEncodeAcceleratorSupportedProfiles (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createVideoEncodeAccelerator');
          const result = this.impl.createVideoEncodeAccelerator(params.arg_command_buffer_id, params.arg_receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getVideoEncodeAcceleratorSupportedProfiles');
          const result = this.impl.getVideoEncodeAcceleratorSupportedProfiles();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetVideoEncodeAcceleratorSupportedProfiles FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderReceiver = mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderReceiver;

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderPtr = mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderRemote;
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderRequest = mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderPendingReceiver;


// Interface: VideoEncodeAcceleratorProviderFactory
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoEncodeAcceleratorProviderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createVideoEncodeAcceleratorProvider(arg_receiver) {
    return this.$.createVideoEncodeAcceleratorProvider(arg_receiver);
  }
};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoEncodeAcceleratorProviderFactory', [
      { explicit: null },
    ]);
  }

  createVideoEncodeAcceleratorProvider(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoEncodeAcceleratorProviderFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoEncodeAcceleratorProviderFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateVideoEncodeAcceleratorProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateVideoEncodeAcceleratorProvider (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createVideoEncodeAcceleratorProvider');
          const result = this.impl.createVideoEncodeAcceleratorProvider(params.arg_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactoryReceiver = mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactoryReceiver;

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactoryPtr = mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactoryRemote;
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactoryRequest = mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorProviderFactoryPendingReceiver;


// Interface: VideoEncodeAccelerator
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_Initialize_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_media_log', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.MediaLogRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec, 'media.mojom.VideoEncodeAccelerator_Initialize_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.media.mojom.EncoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Encode_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_Encode_Params', [
      mojo.internal.StructField('arg_frame', 0, 0, mojo.internal.bindings.media.mojom.VideoFrameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.media.mojom.VideoEncodeOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec, 'media.mojom.VideoEncodeAccelerator_Encode_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params', [
      mojo.internal.StructField('arg_region', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bitstream_buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_Params', [
      mojo.internal.StructField('arg_bitrate_allocation', 0, 0, mojo.internal.bindings.media.mojom.VideoBitrateAllocationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_framerate', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_Params', [
      mojo.internal.StructField('arg_bitrate', 0, 0, mojo.internal.bindings.media.mojom.BitrateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_framerate', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_IsFlushSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParamsSpec, 'media.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Flush_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec, 'media.mojom.VideoEncodeAccelerator_Flush_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoEncodeAccelerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initialize(arg_config, arg_client, arg_media_log) {
    return this.$.initialize(arg_config, arg_client, arg_media_log);
  }
  encode(arg_frame, arg_options) {
    return this.$.encode(arg_frame, arg_options);
  }
  useOutputBitstreamBuffer(arg_bitstream_buffer_id, arg_region) {
    return this.$.useOutputBitstreamBuffer(arg_bitstream_buffer_id, arg_region);
  }
  requestEncodingParametersChangeWithLayers(arg_bitrate_allocation, arg_framerate, arg_size) {
    return this.$.requestEncodingParametersChangeWithLayers(arg_bitrate_allocation, arg_framerate, arg_size);
  }
  requestEncodingParametersChangeWithBitrate(arg_bitrate, arg_framerate, arg_size) {
    return this.$.requestEncodingParametersChangeWithBitrate(arg_bitrate, arg_framerate, arg_size);
  }
  isFlushSupported() {
    return this.$.isFlushSupported();
  }
  flush() {
    return this.$.flush();
  }
};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoEncodeAccelerator', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initialize(arg_config, arg_client, arg_media_log) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec,
      mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec,
      [arg_config, arg_client, arg_media_log],
      false);
  }

  encode(arg_frame, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Encode_ParamsSpec,
      mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec,
      [arg_frame, arg_options],
      false);
  }

  useOutputBitstreamBuffer(arg_bitstream_buffer_id, arg_region) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec,
      null,
      [arg_bitstream_buffer_id, arg_region],
      false);
  }

  requestEncodingParametersChangeWithLayers(arg_bitrate_allocation, arg_framerate, arg_size) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec,
      null,
      [arg_bitrate_allocation, arg_framerate, arg_size],
      false);
  }

  requestEncodingParametersChangeWithBitrate(arg_bitrate, arg_framerate, arg_size) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec,
      null,
      [arg_bitrate, arg_framerate, arg_size],
      false);
  }

  isFlushSupported() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec,
      mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParamsSpec,
      [],
      false);
  }

  flush() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Flush_ParamsSpec,
      mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.media.mojom.VideoEncodeAccelerator.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoEncodeAccelerator',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoEncodeAccelerator', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Encode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Encode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Encode (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UseOutputBitstreamBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UseOutputBitstreamBuffer (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RequestEncodingParametersChangeWithLayers
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestEncodingParametersChangeWithLayers (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RequestEncodingParametersChangeWithBitrate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestEncodingParametersChangeWithBitrate (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: IsFlushSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsFlushSupported (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Flush
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Flush_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Flush (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.arg_config, params.arg_client, params.arg_media_log);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Initialize FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Encode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.encode');
          const result = this.impl.encode(params.arg_frame, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Encode FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.useOutputBitstreamBuffer');
          const result = this.impl.useOutputBitstreamBuffer(params.arg_bitstream_buffer_id, params.arg_region);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestEncodingParametersChangeWithLayers');
          const result = this.impl.requestEncodingParametersChangeWithLayers(params.arg_bitrate_allocation, params.arg_framerate, params.arg_size);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestEncodingParametersChangeWithBitrate');
          const result = this.impl.requestEncodingParametersChangeWithBitrate(params.arg_bitrate, params.arg_framerate, params.arg_size);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isFlushSupported');
          const result = this.impl.isFlushSupported();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsFlushSupported FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Flush_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Flush FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorReceiver = mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorReceiver;

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorPtr = mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorRemote;
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorRequest = mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorPendingReceiver;


// Interface: VideoEncodeAcceleratorClient
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params', [
      mojo.internal.StructField('arg_input_coded_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_output_buffer_size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_Params', [
      mojo.internal.StructField('arg_metadata', 0, 0, mojo.internal.bindings.media.mojom.BitstreamBufferMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bitstream_buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.media.mojom.EncoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.media.mojom.VideoEncoderInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoEncodeAcceleratorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requireBitstreamBuffers(arg_input_count, arg_input_coded_size, arg_output_buffer_size) {
    return this.$.requireBitstreamBuffers(arg_input_count, arg_input_coded_size, arg_output_buffer_size);
  }
  bitstreamBufferReady(arg_bitstream_buffer_id, arg_metadata) {
    return this.$.bitstreamBufferReady(arg_bitstream_buffer_id, arg_metadata);
  }
  notifyErrorStatus(arg_status) {
    return this.$.notifyErrorStatus(arg_status);
  }
  notifyEncoderInfoChange(arg_info) {
    return this.$.notifyEncoderInfoChange(arg_info);
  }
};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoEncodeAcceleratorClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requireBitstreamBuffers(arg_input_count, arg_input_coded_size, arg_output_buffer_size) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_ParamsSpec,
      null,
      [arg_input_count, arg_input_coded_size, arg_output_buffer_size],
      false);
  }

  bitstreamBufferReady(arg_bitstream_buffer_id, arg_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec,
      null,
      [arg_bitstream_buffer_id, arg_metadata],
      false);
  }

  notifyErrorStatus(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec,
      null,
      [arg_status],
      false);
  }

  notifyEncoderInfoChange(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec,
      null,
      [arg_info],
      false);
  }

};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoEncodeAcceleratorClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoEncodeAcceleratorClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RequireBitstreamBuffers
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequireBitstreamBuffers (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BitstreamBufferReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BitstreamBufferReady (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: NotifyErrorStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyErrorStatus (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: NotifyEncoderInfoChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyEncoderInfoChange (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requireBitstreamBuffers');
          const result = this.impl.requireBitstreamBuffers(params.arg_input_count, params.arg_input_coded_size, params.arg_output_buffer_size);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bitstreamBufferReady');
          const result = this.impl.bitstreamBufferReady(params.arg_bitstream_buffer_id, params.arg_metadata);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyErrorStatus');
          const result = this.impl.notifyErrorStatus(params.arg_status);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyEncoderInfoChange');
          const result = this.impl.notifyEncoderInfoChange(params.arg_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClientReceiver = mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClientReceiver;

mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClientPtr = mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClientRemote;
mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClientRequest = mojo.internal.bindings.media.mojom.VideoEncodeAcceleratorClientPendingReceiver;

