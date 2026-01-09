// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_types.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: VideoRotation
media.mojom.VideoRotation = {
  kVideoRotation0: 0,
  kVideoRotation90: 1,
  kVideoRotation180: 2,
  kVideoRotation270: 3,
};

// Enum: EncryptionType
media.mojom.EncryptionType = {
  kNone: 0,
  kClear: 1,
  kEncrypted: 2,
  kEncryptedWithClearLead: 3,
};

// Enum: SVCScalabilityMode
media.mojom.SVCScalabilityMode = {
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
media.mojom.SVCInterLayerPredMode = {
  kOff: 0,
  kOn: 1,
  kOnKeyPic: 2,
};

// Enum: Type
media.mojom.Type = {
  kDisplay: 0,
  kPixel: 1,
};

// Enum: CdmEvent
media.mojom.CdmEvent = {
  kSignificantPlayback: 0,
  kPlaybackError: 1,
  kCdmError: 2,
  kHardwareContextReset: 3,
};

// Enum: CdmSessionClosedReason
media.mojom.CdmSessionClosedReason = {
  kInternalError: 0,
  kClose: 1,
  kReleaseAcknowledged: 2,
  kHardwareContextReset: 3,
  kResourceEvicted: 4,
};

// Enum: EffectState
media.mojom.EffectState = {
  kUnknown: 0,
  kDisabled: 1,
  kEnabled: 2,
};

// Enum: MediaStreamType
media.mojom.MediaStreamType = {
  kLocalElementCapture: 0,
  kLocalDeviceCapture: 1,
  kLocalTabCapture: 2,
  kLocalDesktopCapture: 3,
  kLocalDisplayCapture: 4,
  kRemote: 5,
  kNone: 6,
};

// Enum: InputStreamErrorCode
media.mojom.InputStreamErrorCode = {
  kUnknown: 0,
  kSystemPermissions: 1,
  kDeviceInUse: 2,
  kSocketError: 3,
};

// Enum: RendererType
media.mojom.RendererType = {
  kRendererImpl: 0,
  kMojo: 1,
  kCourier: 2,
  kFlinging: 3,
  kCast: 4,
  kMediaFoundation: 5,
  kRemoting: 6,
  kCastStreaming: 7,
  kContentEmbedderDefined: 8,
  kTest: 9,
};

// Enum: DemuxerType
media.mojom.DemuxerType = {
  kUnknownDemuxer: 0,
  kMockDemuxer: 1,
  kFFmpegDemuxer: 2,
  kChunkDemuxer: 3,
  kFrameInjectingDemuxer: 4,
  kStreamProviderDemuxer: 5,
  kManifestDemuxer: 6,
};

// Enum: CreateCdmStatus
media.mojom.CreateCdmStatus = {
  kSuccess: 0,
  kUnknownError: 1,
  kCdmCreationAborted: 2,
  kCreateCdmFuncNotAvailable: 3,
  kCdmHelperCreationFailed: 4,
  kGetCdmPrefDataFailed: 5,
  kGetCdmOriginIdFailed: 6,
  kInitCdmFailed: 7,
  kCdmFactoryCreationFailed: 8,
  kCdmNotSupported: 9,
  kInvalidCdmConfig: 10,
  kUnsupportedKeySystem: 11,
  kDisconnectionError: 12,
  kNotAllowedOnUniqueOrigin: 13,
  kMediaCryptoNotAvailable: 14,
  kNoMoreInstances: 15,
  kInsufficientGpuResources: 16,
  kCrOsVerifiedAccessDisabled: 17,
  kCrOsRemoteFactoryCreationFailed: 18,
  kAndroidMediaDrmIllegalArgument: 19,
  kAndroidMediaDrmIllegalState: 20,
  kAndroidFailedL1SecurityLevel: 21,
  kAndroidFailedL3SecurityLevel: 22,
  kAndroidFailedSecurityOrigin: 23,
  kAndroidFailedMediaCryptoSession: 24,
  kAndroidFailedToStartProvisioning: 25,
  kAndroidFailedMediaCryptoCreate: 26,
  kAndroidUnsupportedMediaCryptoScheme: 27,
};

// Enum: AutoPipReason
media.mojom.AutoPipReason = {
  kUnknown: 0,
  kVideoConferencing: 1,
  kMediaPlayback: 2,
  kBrowserInitiated: 3,
};

// Struct: VideoTransformation
media.mojom.VideoTransformationSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoTransformation',
      packedSize: 16,
      fields: [
        { name: 'mirrored', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoAspectRatio
media.mojom.VideoAspectRatioSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoAspectRatio',
      packedSize: 16,
      fields: [
        { name: 'kDisplay', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoColorSpace
media.mojom.VideoColorSpaceSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoColorSpace',
      packedSize: 16,
      fields: [
        { name: 'range', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AudioDecoderConfig
media.mojom.AudioDecoderConfigSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoderConfig',
      packedSize: 16,
      fields: [
        { name: 'should_discard_decoder_delay', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoDecoderConfig
media.mojom.VideoDecoderConfigSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoderConfig',
      packedSize: 16,
      fields: [
        { name: 'hdr_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DecryptConfig
media.mojom.DecryptConfigSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DecryptConfig',
      packedSize: 16,
      fields: [
        { name: 'encryption_pattern', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DecoderBufferSideData
media.mojom.DecoderBufferSideDataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DecoderBufferSideData',
      packedSize: 16,
      fields: [
        { name: 'back_discard', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DataDecoderBuffer
media.mojom.DataDecoderBufferSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DataDecoderBuffer',
      packedSize: 16,
      fields: [
        { name: 'side_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EosDecoderBuffer
media.mojom.EosDecoderBufferSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.EosDecoderBuffer',
      packedSize: 16,
      fields: [
        { name: 'next_config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AudioBuffer
media.mojom.AudioBufferSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioBuffer',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CaptureVersion
media.mojom.CaptureVersionSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CaptureVersion',
      packedSize: 16,
      fields: [
        { name: 'sub_capture', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoFrameMetadata
media.mojom.VideoFrameMetadataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoFrameMetadata',
      packedSize: 16,
      fields: [
        { name: 'background_blur', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoFrame
media.mojom.VideoFrameSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoFrame',
      packedSize: 16,
      fields: [
        { name: 'hdr_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EosVideoFrameData
media.mojom.EosVideoFrameDataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.EosVideoFrameData',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SharedMemoryVideoFrameData
media.mojom.SharedMemoryVideoFrameDataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SharedMemoryVideoFrameData',
      packedSize: 16,
      fields: [
        { name: 'offsets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SharedImageVideoFrameData
media.mojom.SharedImageVideoFrameDataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SharedImageVideoFrameData',
      packedSize: 16,
      fields: [
        { name: 'ycbcr_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OpaqueVideoFrameData
media.mojom.OpaqueVideoFrameDataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.OpaqueVideoFrameData',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ColorPlaneLayout
media.mojom.ColorPlaneLayoutSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ColorPlaneLayout',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DmabufVideoFrameData
media.mojom.DmabufVideoFrameDataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DmabufVideoFrameData',
      packedSize: 16,
      fields: [
        { name: 'fds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PipelineStatistics
media.mojom.PipelineStatisticsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PipelineStatistics',
      packedSize: 16,
      fields: [
        { name: 'video_memory_usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PredictionFeatures
media.mojom.PredictionFeaturesSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PredictionFeatures',
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PredictionTargets
media.mojom.PredictionTargetsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PredictionTargets',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AudioPipelineInfo
media.mojom.AudioPipelineInfoSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioPipelineInfo',
      packedSize: 16,
      fields: [
        { name: 'encryption_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoPipelineInfo
media.mojom.VideoPipelineInfoSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoPipelineInfo',
      packedSize: 16,
      fields: [
        { name: 'encryption_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StatusData
media.mojom.StatusDataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.StatusData',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EncoderStatus
media.mojom.EncoderStatusSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.EncoderStatus',
      packedSize: 16,
      fields: [
        { name: 'internal', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DecoderStatus
media.mojom.DecoderStatusSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DecoderStatus',
      packedSize: 16,
      fields: [
        { name: 'internal', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PipelineStatus
media.mojom.PipelineStatusSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PipelineStatus',
      packedSize: 16,
      fields: [
        { name: 'internal', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AutoPipInfo
media.mojom.AutoPipInfoSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AutoPipInfo',
      packedSize: 16,
      fields: [
        { name: 'blocked_due_to_content_setting', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
