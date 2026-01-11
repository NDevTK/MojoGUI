// Auto-generated MojoJS binding
 // Source: chromium_src/media/mojo/mojom/media_types.mojom
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
mojo.internal.bindings.gpu = mojo.internal.bindings.gpu || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.media.mojom.AudioCodecSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.AudioCodecProfileSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.BufferingStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.BufferingStateChangeReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.ChannelLayoutSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.MediaContentTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.OutputDeviceStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.SampleFormatSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.VideoCodecSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.VideoCodecProfileSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.VideoPixelFormatSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.VideoDecoderTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.AudioDecoderTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.VideoRotationSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.FullscreenVideoStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.WaitingReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.WatchTimeKeySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.MediaContainerNameSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.MediaStatusStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.EncryptionSchemeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.EncryptionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.SVCScalabilityModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.SVCInterLayerPredModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.TypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.PrimaryIDSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.TransferIDSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.MatrixIDSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.RangeIDSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.CdmEventSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.CdmSessionClosedReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.EffectStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.MediaStreamTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.InputStreamErrorCodeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.RendererTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.DemuxerTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.CreateCdmStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.AutoPipReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.DecoderBufferSideDataNextConfigSpec = { $: {} };
mojo.internal.bindings.media.mojom.DecoderBufferSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoFrameDataSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoTransformationSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoAspectRatioSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoColorSpaceSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioDecoderConfigSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoDecoderConfigSpec = { $: {} };
mojo.internal.bindings.media.mojom.DecryptConfigSpec = { $: {} };
mojo.internal.bindings.media.mojom.DecoderBufferSideDataSpec = { $: {} };
mojo.internal.bindings.media.mojom.DataDecoderBufferSpec = { $: {} };
mojo.internal.bindings.media.mojom.EosDecoderBufferSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioBufferSpec = { $: {} };
mojo.internal.bindings.media.mojom.CaptureVersionSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoFrameMetadataSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoFrameSpec = { $: {} };
mojo.internal.bindings.media.mojom.EosVideoFrameDataSpec = { $: {} };
mojo.internal.bindings.media.mojom.SharedMemoryVideoFrameDataSpec = { $: {} };
mojo.internal.bindings.media.mojom.SharedImageVideoFrameDataSpec = { $: {} };
mojo.internal.bindings.media.mojom.OpaqueVideoFrameDataSpec = { $: {} };
mojo.internal.bindings.media.mojom.ColorPlaneLayoutSpec = { $: {} };
mojo.internal.bindings.media.mojom.DmabufVideoFrameDataSpec = { $: {} };
mojo.internal.bindings.media.mojom.PipelineStatisticsSpec = { $: {} };
mojo.internal.bindings.media.mojom.PredictionFeaturesSpec = { $: {} };
mojo.internal.bindings.media.mojom.PredictionTargetsSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioPipelineInfoSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoPipelineInfoSpec = { $: {} };
mojo.internal.bindings.media.mojom.StatusDataSpec = { $: {} };
mojo.internal.bindings.media.mojom.EncoderStatusSpec = { $: {} };
mojo.internal.bindings.media.mojom.DecoderStatusSpec = { $: {} };
mojo.internal.bindings.media.mojom.PipelineStatusSpec = { $: {} };
mojo.internal.bindings.media.mojom.AutoPipInfoSpec = { $: {} };

// Enum: AudioCodec
mojo.internal.bindings.media.mojom.AudioCodec = {
};

// Enum: AudioCodecProfile
mojo.internal.bindings.media.mojom.AudioCodecProfile = {
};

// Enum: BufferingState
mojo.internal.bindings.media.mojom.BufferingState = {
};

// Enum: BufferingStateChangeReason
mojo.internal.bindings.media.mojom.BufferingStateChangeReason = {
};

// Enum: ChannelLayout
mojo.internal.bindings.media.mojom.ChannelLayout = {
};

// Enum: MediaContentType
mojo.internal.bindings.media.mojom.MediaContentType = {
};

// Enum: OutputDeviceStatus
mojo.internal.bindings.media.mojom.OutputDeviceStatus = {
};

// Enum: SampleFormat
mojo.internal.bindings.media.mojom.SampleFormat = {
};

// Enum: VideoCodec
mojo.internal.bindings.media.mojom.VideoCodec = {
};

// Enum: VideoCodecProfile
mojo.internal.bindings.media.mojom.VideoCodecProfile = {
};

// Enum: VideoPixelFormat
mojo.internal.bindings.media.mojom.VideoPixelFormat = {
};

// Enum: VideoDecoderType
mojo.internal.bindings.media.mojom.VideoDecoderType = {
};

// Enum: AudioDecoderType
mojo.internal.bindings.media.mojom.AudioDecoderType = {
};

// Enum: VideoRotation
mojo.internal.bindings.media.mojom.VideoRotation = {
  kVideoRotation0: 0,
  kVideoRotation90: 1,
  kVideoRotation180: 2,
  kVideoRotation270: 3,
};

// Enum: FullscreenVideoStatus
mojo.internal.bindings.media.mojom.FullscreenVideoStatus = {
};

// Enum: WaitingReason
mojo.internal.bindings.media.mojom.WaitingReason = {
};

// Enum: WatchTimeKey
mojo.internal.bindings.media.mojom.WatchTimeKey = {
};

// Enum: MediaContainerName
mojo.internal.bindings.media.mojom.MediaContainerName = {
};

// Enum: MediaStatusState
mojo.internal.bindings.media.mojom.MediaStatusState = {
};

// Enum: EncryptionScheme
mojo.internal.bindings.media.mojom.EncryptionScheme = {
};

// Enum: EncryptionType
mojo.internal.bindings.media.mojom.EncryptionType = {
  kNone: 0,
  kClear: 1,
  kEncrypted: 2,
  kEncryptedWithClearLead: 3,
};

// Enum: SVCScalabilityMode
mojo.internal.bindings.media.mojom.SVCScalabilityMode = {
  kL1T1: 0,
  kL1T2: 1,
  kL1T3: 2,
  kL2T1: 3,
  kL2T2: 4,
  kL2T3: 5,
  kL3T1: 6,
  kL3T2: 7,
  kL3T3: 8,
  kL2T1h: 9,
  kL2T2h: 10,
  kL2T3h: 11,
  kS2T1: 12,
  kS2T2: 13,
  kS2T3: 14,
  kS2T1h: 15,
  kS2T2h: 16,
  kS2T3h: 17,
  kS3T1: 18,
  kS3T2: 19,
  kS3T3: 20,
  kS3T1h: 21,
  kS3T2h: 22,
  kS3T3h: 23,
  kL2T1Key: 24,
  kL2T2Key: 25,
  kL2T2KeyShift: 26,
  kL2T3Key: 27,
  kL2T3KeyShift: 28,
  kL3T1Key: 29,
  kL3T2Key: 30,
  kL3T2KeyShift: 31,
  kL3T3Key: 32,
  kL3T3KeyShift: 33,
  kL3T1h: 34,
  kL3T2h: 35,
  kL3T3h: 36,
};

// Enum: SVCInterLayerPredMode
mojo.internal.bindings.media.mojom.SVCInterLayerPredMode = {
  kOff: 0,
  kOn: 1,
  kOnKeyPic: 2,
};

// Enum: Type
mojo.internal.bindings.media.mojom.Type = {
  kDisplay: 0,
  kPixel: 1,
};

// Enum: PrimaryID
mojo.internal.bindings.media.mojom.PrimaryID = {
};

// Enum: TransferID
mojo.internal.bindings.media.mojom.TransferID = {
};

// Enum: MatrixID
mojo.internal.bindings.media.mojom.MatrixID = {
};

// Enum: RangeID
mojo.internal.bindings.media.mojom.RangeID = {
};

// Enum: CdmEvent
mojo.internal.bindings.media.mojom.CdmEvent = {
  kSignificantPlayback: 0,
  kPlaybackError: 1,
  kCdmError: 2,
  kHardwareContextReset: 3,
};

// Enum: CdmSessionClosedReason
mojo.internal.bindings.media.mojom.CdmSessionClosedReason = {
  kInternalError: 0,
  kClose: 1,
  kReleaseAcknowledged: 2,
  kHardwareContextReset: 3,
  kResourceEvicted: 4,
};

// Enum: EffectState
mojo.internal.bindings.media.mojom.EffectState = {
  kUnknown: 0,
  kDisabled: 1,
  kEnabled: 2,
};

// Enum: MediaStreamType
mojo.internal.bindings.media.mojom.MediaStreamType = {
  kLocalElementCapture: 0,
  kLocalDeviceCapture: 1,
  kLocalTabCapture: 2,
  kLocalDesktopCapture: 3,
  kLocalDisplayCapture: 4,
  kRemote: 5,
  kNone: 6,
};

// Enum: InputStreamErrorCode
mojo.internal.bindings.media.mojom.InputStreamErrorCode = {
  kUnknown: 0,
  kSystemPermissions: 1,
  kDeviceInUse: 2,
  kSocketError: 3,
};

// Enum: RendererType
mojo.internal.bindings.media.mojom.RendererType = {
  kRendererImpl: 0,
  kMojo: 1,
  kCourier: 3,
  kFlinging: 4,
  kCast: 5,
  kMediaFoundation: 6,
  kRemoting: 8,
  kCastStreaming: 9,
  kContentEmbedderDefined: 10,
  kTest: 11,
};

// Enum: DemuxerType
mojo.internal.bindings.media.mojom.DemuxerType = {
  kUnknownDemuxer: 0,
  kMockDemuxer: 1,
  kFFmpegDemuxer: 2,
  kChunkDemuxer: 3,
  kFrameInjectingDemuxer: 5,
  kStreamProviderDemuxer: 6,
  kManifestDemuxer: 7,
};

// Enum: CreateCdmStatus
mojo.internal.bindings.media.mojom.CreateCdmStatus = {
  kSuccess: 0,
  kUnknownError: 1,
  kCdmCreationAborted: 2,
  kCreateCdmFuncNotAvailable: 4,
  kCdmHelperCreationFailed: 5,
  kGetCdmPrefDataFailed: 6,
  kGetCdmOriginIdFailed: 7,
  kInitCdmFailed: 8,
  kCdmFactoryCreationFailed: 9,
  kCdmNotSupported: 10,
  kInvalidCdmConfig: 11,
  kUnsupportedKeySystem: 12,
  kDisconnectionError: 13,
  kNotAllowedOnUniqueOrigin: 14,
  kMediaCryptoNotAvailable: 16,
  kNoMoreInstances: 17,
  kInsufficientGpuResources: 18,
  kCrOsVerifiedAccessDisabled: 19,
  kCrOsRemoteFactoryCreationFailed: 20,
  kAndroidMediaDrmIllegalArgument: 21,
  kAndroidMediaDrmIllegalState: 22,
  kAndroidFailedL1SecurityLevel: 23,
  kAndroidFailedL3SecurityLevel: 24,
  kAndroidFailedSecurityOrigin: 25,
  kAndroidFailedMediaCryptoSession: 26,
  kAndroidFailedToStartProvisioning: 27,
  kAndroidFailedMediaCryptoCreate: 28,
  kAndroidUnsupportedMediaCryptoScheme: 29,
};

// Enum: AutoPipReason
mojo.internal.bindings.media.mojom.AutoPipReason = {
  kUnknown: 0,
  kVideoConferencing: 1,
  kMediaPlayback: 2,
  kBrowserInitiated: 3,
};

// Union: DecoderBufferSideDataNextConfig
mojo.internal.Union(
    mojo.internal.bindings.media.mojom.DecoderBufferSideDataNextConfigSpec, 'media.mojom.DecoderBufferSideDataNextConfig', {
      'arg_next_audio_config': {
        'ordinal': 0,
        'type': mojo.internal.bindings.media.mojom.AudioDecoderConfigSpec.$,
        'nullable': false,
      },
      'arg_next_video_config': {
        'ordinal': 1,
        'type': mojo.internal.bindings.media.mojom.VideoDecoderConfigSpec.$,
        'nullable': false,
      },
    });

// Union: DecoderBuffer
mojo.internal.Union(
    mojo.internal.bindings.media.mojom.DecoderBufferSpec, 'media.mojom.DecoderBuffer', {
      'arg_eos': {
        'ordinal': 0,
        'type': mojo.internal.bindings.media.mojom.EosDecoderBufferSpec.$,
        'nullable': false,
      },
      'arg_data': {
        'ordinal': 1,
        'type': mojo.internal.bindings.media.mojom.DataDecoderBufferSpec.$,
        'nullable': false,
      },
    });

// Union: VideoFrameData
mojo.internal.Union(
    mojo.internal.bindings.media.mojom.VideoFrameDataSpec, 'media.mojom.VideoFrameData', {
      'arg_eos_data': {
        'ordinal': 0,
        'type': mojo.internal.bindings.media.mojom.EosVideoFrameDataSpec.$,
        'nullable': false,
      },
      'arg_shared_memory_data': {
        'ordinal': 1,
        'type': mojo.internal.bindings.media.mojom.SharedMemoryVideoFrameDataSpec.$,
        'nullable': false,
      },
      'arg_shared_image_data': {
        'ordinal': 2,
        'type': mojo.internal.bindings.media.mojom.SharedImageVideoFrameDataSpec.$,
        'nullable': false,
      },
      'arg_opaque_data': {
        'ordinal': 3,
        'type': mojo.internal.bindings.media.mojom.OpaqueVideoFrameDataSpec.$,
        'nullable': false,
      },
      'arg_dmabuf_data': {
        'ordinal': 4,
        'type': mojo.internal.bindings.media.mojom.DmabufVideoFrameDataSpec.$,
        'nullable': false,
      },
    });

// Struct: VideoTransformation
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoTransformationSpec, 'media.mojom.VideoTransformation', [
      mojo.internal.StructField('arg_rotation', 0, 0, mojo.internal.bindings.media.mojom.VideoRotationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mirrored', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoAspectRatio
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoAspectRatioSpec, 'media.mojom.VideoAspectRatio', [
      mojo.internal.StructField('arg_kDisplay', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoColorSpace
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoColorSpaceSpec, 'media.mojom.VideoColorSpace', [
      mojo.internal.StructField('arg_PrimaryID', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_TransferID', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_MatrixID', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_RangeID', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_primaries', 32, 0, mojo.internal.bindings.media.mojom.PrimaryIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_transfer', 40, 0, mojo.internal.bindings.media.mojom.TransferIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_matrix', 48, 0, mojo.internal.bindings.media.mojom.MatrixIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_range', 56, 0, mojo.internal.bindings.media.mojom.RangeIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: AudioDecoderConfig
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioDecoderConfigSpec, 'media.mojom.AudioDecoderConfig', [
      mojo.internal.StructField('arg_codec', 0, 0, mojo.internal.bindings.media.mojom.AudioCodecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sample_format', 8, 0, mojo.internal.bindings.media.mojom.SampleFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_channel_layout', 16, 0, mojo.internal.bindings.media.mojom.ChannelLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_extra_data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_encryption_scheme', 32, 0, mojo.internal.bindings.media.mojom.EncryptionSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_seek_preroll', 40, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_profile', 48, 0, mojo.internal.bindings.media.mojom.AudioCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_target_output_channel_layout', 56, 0, mojo.internal.bindings.media.mojom.ChannelLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_target_output_sample_format', 64, 0, mojo.internal.bindings.media.mojom.SampleFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_samples_per_second', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_codec_delay', 76, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_should_discard_decoder_delay', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: VideoDecoderConfig
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoDecoderConfigSpec, 'media.mojom.VideoDecoderConfig', [
      mojo.internal.StructField('arg_codec', 0, 0, mojo.internal.bindings.media.mojom.VideoCodecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_profile', 8, 0, mojo.internal.bindings.media.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_transformation', 16, 0, mojo.internal.bindings.media.mojom.VideoTransformationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_coded_size', 24, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_visible_rect', 32, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_natural_size', 40, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_aspect_ratio', 48, 0, mojo.internal.bindings.media.mojom.VideoAspectRatioSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_extra_data', 56, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_encryption_scheme', 64, 0, mojo.internal.bindings.media.mojom.EncryptionSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_color_space_info', 72, 0, mojo.internal.bindings.media.mojom.VideoColorSpaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hdr_metadata', 80, 0, mojo.internal.bindings.gfx.mojom.HDRMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_level', 88, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_alpha', 92, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 104]]);

// Struct: DecryptConfig
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.DecryptConfigSpec, 'media.mojom.DecryptConfig', [
      mojo.internal.StructField('arg_encryption_scheme', 0, 0, mojo.internal.bindings.media.mojom.EncryptionSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_id', 8, 0, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_iv', 16, 0, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_subsamples', 24, 0, mojo.internal.Array(mojo.internal.bindings.media.mojom.SubsampleEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_encryption_pattern', 32, 0, mojo.internal.bindings.media.mojom.EncryptionPatternSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DecoderBufferSideData
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.DecoderBufferSideDataSpec, 'media.mojom.DecoderBufferSideData', [
      mojo.internal.StructField('arg_spatial_layers', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_alpha_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_secure_handle', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_front_discard', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_back_discard', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DataDecoderBuffer
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.DataDecoderBufferSpec, 'media.mojom.DataDecoderBuffer', [
      mojo.internal.StructField('arg_timestamp', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_duration', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_decrypt_config', 16, 0, mojo.internal.bindings.media.mojom.DecryptConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_side_data', 24, 0, mojo.internal.bindings.media.mojom.DecoderBufferSideDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_data_size', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_key_frame', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: EosDecoderBuffer
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.EosDecoderBufferSpec, 'media.mojom.EosDecoderBuffer', [
      mojo.internal.StructField('arg_next_config', 0, 0, mojo.internal.bindings.media.mojom.DecoderBufferSideDataNextConfigSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AudioBuffer
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioBufferSpec, 'media.mojom.AudioBuffer', [
      mojo.internal.StructField('arg_sample_format', 0, 0, mojo.internal.bindings.media.mojom.SampleFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_channel_layout', 8, 0, mojo.internal.bindings.media.mojom.ChannelLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_channel_count', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sample_rate', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_frame_count', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end_of_stream', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: CaptureVersion
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CaptureVersionSpec, 'media.mojom.CaptureVersion', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sub_capture', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VideoFrameMetadata
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoFrameMetadataSpec, 'media.mojom.VideoFrameMetadata', [
      mojo.internal.StructField('arg_capture_begin_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_capture_end_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_capture_update_rect', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_source_size', 24, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_region_capture_rect', 32, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_capture_version', 40, 0, mojo.internal.bindings.media.mojom.CaptureVersionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_duration', 48, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_frame_rate', 56, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_reference_time', 64, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_transformation', 72, 0, mojo.internal.bindings.media.mojom.VideoTransformationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_tracking_token', 80, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_device_scale_factor', 88, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_page_scale_factor', 96, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_root_scroll_offset_x', 104, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_root_scroll_offset_y', 112, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_top_controls_visible_height', 120, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_decode_begin_time', 128, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_decode_end_time', 136, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_processing_time', 144, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_rtp_timestamp', 152, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_receive_time', 160, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_wallclock_frame_duration', 168, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_frame_sequence_$value', 176, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_frame_sequence_$flag', originalFieldName: 'arg_frame_sequence' }),
      mojo.internal.StructField('arg_source_id_$value', 184, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_source_id_$flag', originalFieldName: 'arg_source_id' }),
      mojo.internal.StructField('arg_background_blur', 192, 0, mojo.internal.bindings.media.mojom.EffectStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_capture_counter', 200, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_allow_overlay', 204, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_capture_counter', 204, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_copy_required', 204, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_end_of_stream', 204, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_frame_rate', 204, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_interactive_content', 204, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_read_lock_fences_enabled', 204, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_in_surface_view', 204, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_wants_promotion_hint', 205, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_protected_video', 205, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_hw_protected', 205, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_needs_detiling', 205, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_webgpu_compatible', 205, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_power_efficient', 205, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_device_scale_factor', 205, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_page_scale_factor', 205, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_root_scroll_offset_x', 206, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_root_scroll_offset_y', 206, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_top_controls_visible_height', 206, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_rtp_timestamp', 206, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_frame_sequence_$flag', 206, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_frame_sequence_$value', originalFieldName: 'arg_frame_sequence' }),
      mojo.internal.StructField('arg_source_id_$flag', 206, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_source_id_$value', originalFieldName: 'arg_source_id' }),
    ],
    [[0, 216]]);

// Struct: VideoFrame
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoFrameSpec, 'media.mojom.VideoFrame', [
      mojo.internal.StructField('arg_format', 0, 0, mojo.internal.bindings.media.mojom.VideoPixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_coded_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_visible_rect', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_natural_size', 24, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 40, 0, mojo.internal.bindings.media.mojom.VideoFrameDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_metadata', 48, 0, mojo.internal.bindings.media.mojom.VideoFrameMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_color_space', 56, 0, mojo.internal.bindings.gfx.mojom.ColorSpaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hdr_metadata', 64, 0, mojo.internal.bindings.gfx.mojom.HDRMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: EosVideoFrameData
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.EosVideoFrameDataSpec, 'media.mojom.EosVideoFrameData', [
    ],
    [[0, 8]]);

// Struct: SharedMemoryVideoFrameData
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.SharedMemoryVideoFrameDataSpec, 'media.mojom.SharedMemoryVideoFrameData', [
      mojo.internal.StructField('arg_frame_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_strides', 8, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_offsets', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SharedImageVideoFrameData
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.SharedImageVideoFrameDataSpec, 'media.mojom.SharedImageVideoFrameData', [
      mojo.internal.StructField('arg_shared_image', 0, 0, mojo.internal.bindings.gpu.mojom.ExportedSharedImageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sync_token', 8, 0, mojo.internal.bindings.gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ycbcr_data', 16, 0, mojo.internal.bindings.gpu.mojom.VulkanYCbCrInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_mappable', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: OpaqueVideoFrameData
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.OpaqueVideoFrameDataSpec, 'media.mojom.OpaqueVideoFrameData', [
    ],
    [[0, 8]]);

// Struct: ColorPlaneLayout
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ColorPlaneLayoutSpec, 'media.mojom.ColorPlaneLayout', [
      mojo.internal.StructField('arg_stride', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_size', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DmabufVideoFrameData
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.DmabufVideoFrameDataSpec, 'media.mojom.DmabufVideoFrameData', [
      mojo.internal.StructField('arg_planes', 0, 0, mojo.internal.Array(mojo.internal.bindings.media.mojom.ColorPlaneLayoutSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_addr_align', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_modifier', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fds', 24, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_is_multi_planar', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PipelineStatistics
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.PipelineStatisticsSpec, 'media.mojom.PipelineStatistics', [
      mojo.internal.StructField('arg_audio_bytes_decoded', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_video_bytes_decoded', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_audio_memory_usage', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_video_memory_usage', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_video_frames_decoded', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_video_frames_dropped', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PredictionFeatures
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.PredictionFeaturesSpec, 'media.mojom.PredictionFeatures', [
      mojo.internal.StructField('arg_profile', 0, 0, mojo.internal.bindings.media.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_video_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frames_per_sec', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key_system', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_use_hw_secure_codecs', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PredictionTargets
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.PredictionTargetsSpec, 'media.mojom.PredictionTargets', [
      mojo.internal.StructField('arg_frames_decoded', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_frames_dropped', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_frames_power_efficient', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AudioPipelineInfo
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioPipelineInfoSpec, 'media.mojom.AudioPipelineInfo', [
      mojo.internal.StructField('arg_decoder_type', 0, 0, mojo.internal.bindings.media.mojom.AudioDecoderTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_encryption_type', 8, 0, mojo.internal.bindings.media.mojom.EncryptionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_platform_decoder', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_decrypting_demuxer_stream', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VideoPipelineInfo
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoPipelineInfoSpec, 'media.mojom.VideoPipelineInfo', [
      mojo.internal.StructField('arg_decoder_type', 0, 0, mojo.internal.bindings.media.mojom.VideoDecoderTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_encryption_type', 8, 0, mojo.internal.bindings.media.mojom.EncryptionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_platform_decoder', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_decrypting_demuxer_stream', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: StatusData
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.StatusDataSpec, 'media.mojom.StatusData', [
      mojo.internal.StructField('arg_group', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_frames', 16, 0, mojo.internal.bindings.mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cause', 24, 0, mojo.internal.bindings.media.mojom.StatusDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_data', 32, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_code', 40, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: EncoderStatus
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.EncoderStatusSpec, 'media.mojom.EncoderStatus', [
      mojo.internal.StructField('arg_internal', 0, 0, mojo.internal.bindings.media.mojom.StatusDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DecoderStatus
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.DecoderStatusSpec, 'media.mojom.DecoderStatus', [
      mojo.internal.StructField('arg_internal', 0, 0, mojo.internal.bindings.media.mojom.StatusDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PipelineStatus
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.PipelineStatusSpec, 'media.mojom.PipelineStatus', [
      mojo.internal.StructField('arg_internal', 0, 0, mojo.internal.bindings.media.mojom.StatusDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AutoPipInfo
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AutoPipInfoSpec, 'media.mojom.AutoPipInfo', [
      mojo.internal.StructField('arg_auto_pip_reason', 0, 0, mojo.internal.bindings.media.mojom.AutoPipReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_has_audio_focus', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_playing', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_was_recently_audible', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_safe_url', 8, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_meets_media_engagement_conditions', 8, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_blocked_due_to_content_setting', 8, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);
