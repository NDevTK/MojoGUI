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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var gfx = gfx || {};

media.mojom.VideoEncodeAcceleratorSupportedRateControlModeSpec = { $: mojo.internal.Enum() };
media.mojom.ContentTypeSpec = { $: mojo.internal.Enum() };
media.mojom.StorageTypeSpec = { $: mojo.internal.Enum() };
media.mojom.EncoderTypeSpec = { $: mojo.internal.Enum() };
media.mojom.BitrateSpec = { $: {} };
media.mojom.OptionalMetadataSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorSupportedProfileSpec = { $: {} };
media.mojom.EncodeCommandBufferIdSpec = { $: {} };
media.mojom.VariableBitratePeakSpec = { $: {} };
media.mojom.VideoBitrateAllocationSpec = { $: {} };
media.mojom.SpatialLayerSpec = { $: {} };
media.mojom.ConstantBitrateSpec = { $: {} };
media.mojom.VariableBitrateSpec = { $: {} };
media.mojom.ExternalBitrateSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorConfigSpec = { $: {} };
media.mojom.VideoEncodeOptionsSpec = { $: {} };
media.mojom.DropFrameMetadataSpec = { $: {} };
media.mojom.H264MetadataSpec = { $: {} };
media.mojom.Vp8MetadataSpec = { $: {} };
media.mojom.Vp9MetadataSpec = { $: {} };
media.mojom.SVCGenericMetadataSpec = { $: {} };
media.mojom.BitstreamBufferMetadataSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorProvider = {};
media.mojom.VideoEncodeAcceleratorProvider.$interfaceName = 'media.mojom.VideoEncodeAcceleratorProvider';
media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParamsSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorProviderFactory = {};
media.mojom.VideoEncodeAcceleratorProviderFactory.$interfaceName = 'media.mojom.VideoEncodeAcceleratorProviderFactory';
media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator = {};
media.mojom.VideoEncodeAccelerator.$interfaceName = 'media.mojom.VideoEncodeAccelerator';
media.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_Encode_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_Flush_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorClient = {};
media.mojom.VideoEncodeAcceleratorClient.$interfaceName = 'media.mojom.VideoEncodeAcceleratorClient';
media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec = { $: {} };

// Enum: VideoEncodeAcceleratorSupportedRateControlMode
media.mojom.VideoEncodeAcceleratorSupportedRateControlMode = {
  kNoMode: 0,
  kConstantMode: 1,
  kVariableMode: 2,
  kExternalMode: 3,
};

// Enum: ContentType
media.mojom.ContentType = {
  kCamera: 0,
  kDisplay: 1,
};

// Enum: StorageType
media.mojom.StorageType = {
  kShmem: 0,
  kGpuMemoryBuffer: 1,
};

// Enum: EncoderType
media.mojom.EncoderType = {
  kHardware: 0,
  kSoftware: 1,
  kNoPreference: 2,
};

// Union: Bitrate
mojo.internal.Union(
    media.mojom.BitrateSpec, 'media.mojom.Bitrate', {
      'constant': {
        'ordinal': 0,
        'type': media.mojom.ConstantBitrateSpec.$,
        'nullable': false,
      },
      'variable': {
        'ordinal': 1,
        'type': media.mojom.VariableBitrateSpec.$,
        'nullable': false,
      },
      'external': {
        'ordinal': 2,
        'type': media.mojom.ExternalBitrateSpec.$,
        'nullable': false,
      },
    });

// Union: OptionalMetadata
mojo.internal.Union(
    media.mojom.OptionalMetadataSpec, 'media.mojom.OptionalMetadata', {
      'drop': {
        'ordinal': 0,
        'type': media.mojom.DropFrameMetadataSpec.$,
        'nullable': false,
      },
      'h264': {
        'ordinal': 1,
        'type': media.mojom.H264MetadataSpec.$,
        'nullable': false,
      },
      'vp8': {
        'ordinal': 2,
        'type': media.mojom.Vp8MetadataSpec.$,
        'nullable': false,
      },
      'vp9': {
        'ordinal': 3,
        'type': media.mojom.Vp9MetadataSpec.$,
        'nullable': false,
      },
    });

// Struct: VideoEncodeAcceleratorSupportedProfile
mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorSupportedProfileSpec, 'media.mojom.VideoEncodeAcceleratorSupportedProfile', [
      mojo.internal.StructField('profile', 0, 0, media.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_resolution', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_resolution', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rate_control_modes', 24, 0, mojo.internal.Array(media.mojom.VideoEncodeAcceleratorSupportedRateControlModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('scalability_modes', 32, 0, mojo.internal.Array(media.mojom.SVCScalabilityModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('gpu_supported_pixel_formats', 40, 0, mojo.internal.Array(media.mojom.VideoPixelFormatSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('max_framerate_numerator', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_framerate_denominator', 52, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_software_codec', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_gpu_shared_images', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: EncodeCommandBufferId
mojo.internal.Struct(
    media.mojom.EncodeCommandBufferIdSpec, 'media.mojom.EncodeCommandBufferId', [
      mojo.internal.StructField('channel_token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('route_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VariableBitratePeak
mojo.internal.Struct(
    media.mojom.VariableBitratePeakSpec, 'media.mojom.VariableBitratePeak', [
      mojo.internal.StructField('bps', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VideoBitrateAllocation
mojo.internal.Struct(
    media.mojom.VideoBitrateAllocationSpec, 'media.mojom.VideoBitrateAllocation', [
      mojo.internal.StructField('bitrates', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('variable_bitrate_peak', 8, 0, media.mojom.VariableBitratePeakSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SpatialLayer
mojo.internal.Struct(
    media.mojom.SpatialLayerSpec, 'media.mojom.SpatialLayer', [
      mojo.internal.StructField('width', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('bitrate_bps', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('framerate', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_qp', 16, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('num_of_temporal_layers', 17, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ConstantBitrate
mojo.internal.Struct(
    media.mojom.ConstantBitrateSpec, 'media.mojom.ConstantBitrate', [
      mojo.internal.StructField('target_bps', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VariableBitrate
mojo.internal.Struct(
    media.mojom.VariableBitrateSpec, 'media.mojom.VariableBitrate', [
      mojo.internal.StructField('target_bps', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('peak_bps', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ExternalBitrate
mojo.internal.Struct(
    media.mojom.ExternalBitrateSpec, 'media.mojom.ExternalBitrate', [
    ],
    [[0, 8]]);

// Struct: VideoEncodeAcceleratorConfig
mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorConfigSpec, 'media.mojom.VideoEncodeAcceleratorConfig', [
      mojo.internal.StructField('kCamera', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VideoEncodeOptions
mojo.internal.Struct(
    media.mojom.VideoEncodeOptionsSpec, 'media.mojom.VideoEncodeOptions', [
      mojo.internal.StructField('reference_buffers', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('quantizer', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('force_keyframe', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('update_buffer_$flag', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'update_buffer_$value', originalFieldName: 'update_buffer' }),
      mojo.internal.StructField('update_buffer_$value', 13, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'update_buffer_$flag', originalFieldName: 'update_buffer' }),
    ],
    [[0, 24]]);

// Struct: DropFrameMetadata
mojo.internal.Struct(
    media.mojom.DropFrameMetadataSpec, 'media.mojom.DropFrameMetadata', [
      mojo.internal.StructField('spatial_idx', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('end_of_picture', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: H264Metadata
mojo.internal.Struct(
    media.mojom.H264MetadataSpec, 'media.mojom.H264Metadata', [
      mojo.internal.StructField('temporal_idx', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('layer_sync', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Vp8Metadata
mojo.internal.Struct(
    media.mojom.Vp8MetadataSpec, 'media.mojom.Vp8Metadata', [
      mojo.internal.StructField('non_reference', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('temporal_idx', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('layer_sync', 2, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Vp9Metadata
mojo.internal.Struct(
    media.mojom.Vp9MetadataSpec, 'media.mojom.Vp9Metadata', [
      mojo.internal.StructField('spatial_layer_resolutions', 0, 0, mojo.internal.Array(gfx.mojom.SizeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('p_diffs', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('inter_pic_predicted', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('temporal_up_switch', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('referenced_by_upper_spatial_layers', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('reference_lower_spatial_layers', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('end_of_picture', 16, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('temporal_idx', 17, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('spatial_idx', 18, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('begin_active_spatial_layer_index', 19, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('end_active_spatial_layer_index', 20, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SVCGenericMetadata
mojo.internal.Struct(
    media.mojom.SVCGenericMetadataSpec, 'media.mojom.SVCGenericMetadata', [
      mojo.internal.StructField('reference_flags_$value', 0, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'reference_flags_$flag', originalFieldName: 'reference_flags' }),
      mojo.internal.StructField('refresh_flags_$value', 2, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'refresh_flags_$flag', originalFieldName: 'refresh_flags' }),
      mojo.internal.StructField('follow_svc_spec', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('temporal_idx', 5, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('spatial_idx', 6, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('reference_flags_$flag', 7, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'reference_flags_$value', originalFieldName: 'reference_flags' }),
      mojo.internal.StructField('refresh_flags_$flag', 7, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'refresh_flags_$value', originalFieldName: 'refresh_flags' }),
    ],
    [[0, 16]]);

// Struct: BitstreamBufferMetadata
mojo.internal.Struct(
    media.mojom.BitstreamBufferMetadataSpec, 'media.mojom.BitstreamBufferMetadata', [
      mojo.internal.StructField('timestamp', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('optional_metadata', 8, 0, media.mojom.OptionalMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('svc_generic', 16, 0, media.mojom.SVCGenericMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('encoded_size', 24, 0, gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('encoded_color_space', 32, 0, gfx.mojom.ColorSpaceSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('payload_size_bytes', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('qp', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('key_frame', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: VideoEncodeAcceleratorProvider
mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params', [
      mojo.internal.StructField('command_buffer_id', 0, 0, media.mojom.EncodeCommandBufferIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(media.mojom.VideoEncodeAcceleratorSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParamsSpec, 'media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParams', [
      mojo.internal.StructField('profiles', 0, 0, mojo.internal.Array(media.mojom.VideoEncodeAcceleratorSupportedProfileSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.VideoEncodeAcceleratorProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoEncodeAcceleratorProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoEncodeAcceleratorProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoEncodeAcceleratorProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoEncodeAcceleratorProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoEncodeAcceleratorProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoEncodeAcceleratorProvider', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createVideoEncodeAccelerator(command_buffer_id, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_ParamsSpec,
      null,
      [command_buffer_id, receiver],
      false);
  }

  getVideoEncodeAcceleratorSupportedProfiles() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec,
      media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParamsSpec,
      [],
      false);
  }

};

media.mojom.VideoEncodeAcceleratorProvider.getRemote = function() {
  let remote = new media.mojom.VideoEncodeAcceleratorProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoEncodeAcceleratorProvider',
    'context');
  return remote.$;
};

media.mojom.VideoEncodeAcceleratorProviderReceiver = class {
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
             decoder.decodeStructInline(media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec);
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
          const params = decoder.decodeStructInline(media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createVideoEncodeAccelerator');
          const result = this.impl.createVideoEncodeAccelerator(params.command_buffer_id, params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getVideoEncodeAcceleratorSupportedProfiles');
          const result = this.impl.getVideoEncodeAcceleratorSupportedProfiles();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParamsSpec);
               responder(response);
            });
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

media.mojom.VideoEncodeAcceleratorProviderReceiver = media.mojom.VideoEncodeAcceleratorProviderReceiver;

media.mojom.VideoEncodeAcceleratorProviderPtr = media.mojom.VideoEncodeAcceleratorProviderRemote;
media.mojom.VideoEncodeAcceleratorProviderRequest = media.mojom.VideoEncodeAcceleratorProviderPendingReceiver;


// Interface: VideoEncodeAcceleratorProviderFactory
mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.VideoEncodeAcceleratorProviderSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.VideoEncodeAcceleratorProviderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoEncodeAcceleratorProviderFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoEncodeAcceleratorProviderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoEncodeAcceleratorProviderFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoEncodeAcceleratorProviderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoEncodeAcceleratorProviderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoEncodeAcceleratorProviderFactory', [
      { explicit: null },
    ]);
  }

  createVideoEncodeAcceleratorProvider(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

media.mojom.VideoEncodeAcceleratorProviderFactory.getRemote = function() {
  let remote = new media.mojom.VideoEncodeAcceleratorProviderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoEncodeAcceleratorProviderFactory',
    'context');
  return remote.$;
};

media.mojom.VideoEncodeAcceleratorProviderFactoryReceiver = class {
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
             decoder.decodeStructInline(media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_ParamsSpec);
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
          const params = decoder.decodeStructInline(media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createVideoEncodeAcceleratorProvider');
          const result = this.impl.createVideoEncodeAcceleratorProvider(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.VideoEncodeAcceleratorProviderFactoryReceiver = media.mojom.VideoEncodeAcceleratorProviderFactoryReceiver;

media.mojom.VideoEncodeAcceleratorProviderFactoryPtr = media.mojom.VideoEncodeAcceleratorProviderFactoryRemote;
media.mojom.VideoEncodeAcceleratorProviderFactoryRequest = media.mojom.VideoEncodeAcceleratorProviderFactoryPendingReceiver;


// Interface: VideoEncodeAccelerator
mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_Initialize_Params', [
      mojo.internal.StructField('config', 0, 0, media.mojom.VideoEncodeAcceleratorConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('media_log', 16, 0, mojo.internal.InterfaceProxy(media.mojom.MediaLogRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec, 'media.mojom.VideoEncodeAccelerator_Initialize_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, media.mojom.EncoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_Encode_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_Encode_Params', [
      mojo.internal.StructField('frame', 0, 0, media.mojom.VideoFrameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, media.mojom.VideoEncodeOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec, 'media.mojom.VideoEncodeAccelerator_Encode_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params', [
      mojo.internal.StructField('region', 0, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bitstream_buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_Params', [
      mojo.internal.StructField('bitrate_allocation', 0, 0, media.mojom.VideoBitrateAllocationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('framerate', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_Params', [
      mojo.internal.StructField('bitrate', 0, 0, media.mojom.BitrateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('framerate', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_IsFlushSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParamsSpec, 'media.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_Flush_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec, 'media.mojom.VideoEncodeAccelerator_Flush_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.VideoEncodeAcceleratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoEncodeAcceleratorRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoEncodeAccelerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoEncodeAcceleratorPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoEncodeAcceleratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoEncodeAcceleratorRemoteCallHandler = class {
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

  initialize(config, client, media_log) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec,
      media.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec,
      [config, client, media_log],
      false);
  }

  encode(frame, options) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.VideoEncodeAccelerator_Encode_ParamsSpec,
      media.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec,
      [frame, options],
      false);
  }

  useOutputBitstreamBuffer(bitstream_buffer_id, region) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec,
      null,
      [bitstream_buffer_id, region],
      false);
  }

  requestEncodingParametersChangeWithLayers(bitrate_allocation, framerate, size) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec,
      null,
      [bitrate_allocation, framerate, size],
      false);
  }

  requestEncodingParametersChangeWithBitrate(bitrate, framerate, size) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec,
      null,
      [bitrate, framerate, size],
      false);
  }

  isFlushSupported() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec,
      media.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParamsSpec,
      [],
      false);
  }

  flush() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      media.mojom.VideoEncodeAccelerator_Flush_ParamsSpec,
      media.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec,
      [],
      false);
  }

};

media.mojom.VideoEncodeAccelerator.getRemote = function() {
  let remote = new media.mojom.VideoEncodeAcceleratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoEncodeAccelerator',
    'context');
  return remote.$;
};

media.mojom.VideoEncodeAcceleratorReceiver = class {
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
             decoder.decodeStructInline(media.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.VideoEncodeAccelerator_Encode_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.VideoEncodeAccelerator_Flush_ParamsSpec);
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
          const params = decoder.decodeStructInline(media.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.config, params.client, params.media_log);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoEncodeAccelerator_Encode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.encode');
          const result = this.impl.encode(params.frame, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.useOutputBitstreamBuffer');
          const result = this.impl.useOutputBitstreamBuffer(params.bitstream_buffer_id, params.region);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestEncodingParametersChangeWithLayers');
          const result = this.impl.requestEncodingParametersChangeWithLayers(params.bitrate_allocation, params.framerate, params.size);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestEncodingParametersChangeWithBitrate');
          const result = this.impl.requestEncodingParametersChangeWithBitrate(params.bitrate, params.framerate, params.size);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isFlushSupported');
          const result = this.impl.isFlushSupported();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoEncodeAccelerator_Flush_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec);
               responder(response);
            });
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

media.mojom.VideoEncodeAcceleratorReceiver = media.mojom.VideoEncodeAcceleratorReceiver;

media.mojom.VideoEncodeAcceleratorPtr = media.mojom.VideoEncodeAcceleratorRemote;
media.mojom.VideoEncodeAcceleratorRequest = media.mojom.VideoEncodeAcceleratorPendingReceiver;


// Interface: VideoEncodeAcceleratorClient
mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params', [
      mojo.internal.StructField('input_coded_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('output_buffer_size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_Params', [
      mojo.internal.StructField('metadata', 0, 0, media.mojom.BitstreamBufferMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bitstream_buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_Params', [
      mojo.internal.StructField('status', 0, 0, media.mojom.EncoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_Params', [
      mojo.internal.StructField('info', 0, 0, media.mojom.VideoEncoderInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.VideoEncodeAcceleratorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoEncodeAcceleratorClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoEncodeAcceleratorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoEncodeAcceleratorClientPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoEncodeAcceleratorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoEncodeAcceleratorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoEncodeAcceleratorClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requireBitstreamBuffers(input_count, input_coded_size, output_buffer_size) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_ParamsSpec,
      null,
      [input_count, input_coded_size, output_buffer_size],
      false);
  }

  bitstreamBufferReady(bitstream_buffer_id, metadata) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec,
      null,
      [bitstream_buffer_id, metadata],
      false);
  }

  notifyErrorStatus(status) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec,
      null,
      [status],
      false);
  }

  notifyEncoderInfoChange(info) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec,
      null,
      [info],
      false);
  }

};

media.mojom.VideoEncodeAcceleratorClient.getRemote = function() {
  let remote = new media.mojom.VideoEncodeAcceleratorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoEncodeAcceleratorClient',
    'context');
  return remote.$;
};

media.mojom.VideoEncodeAcceleratorClientReceiver = class {
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
             decoder.decodeStructInline(media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec);
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
          const params = decoder.decodeStructInline(media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requireBitstreamBuffers');
          const result = this.impl.requireBitstreamBuffers(params.input_count, params.input_coded_size, params.output_buffer_size);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bitstreamBufferReady');
          const result = this.impl.bitstreamBufferReady(params.bitstream_buffer_id, params.metadata);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyErrorStatus');
          const result = this.impl.notifyErrorStatus(params.status);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyEncoderInfoChange');
          const result = this.impl.notifyEncoderInfoChange(params.info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.VideoEncodeAcceleratorClientReceiver = media.mojom.VideoEncodeAcceleratorClientReceiver;

media.mojom.VideoEncodeAcceleratorClientPtr = media.mojom.VideoEncodeAcceleratorClientRemote;
media.mojom.VideoEncodeAcceleratorClientRequest = media.mojom.VideoEncodeAcceleratorClientPendingReceiver;

