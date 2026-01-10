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
media.mojom.VideoRotationSpec = { $: mojo.internal.Enum() };

// Enum: EncryptionType
media.mojom.EncryptionType = {
  kNone: 0,
  kClear: 1,
  kEncrypted: 2,
  kEncryptedWithClearLead: 3,
};
media.mojom.EncryptionTypeSpec = { $: mojo.internal.Enum() };

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
media.mojom.SVCScalabilityModeSpec = { $: mojo.internal.Enum() };

// Enum: SVCInterLayerPredMode
media.mojom.SVCInterLayerPredMode = {
  kOff: 0,
  kOn: 1,
  kOnKeyPic: 2,
};
media.mojom.SVCInterLayerPredModeSpec = { $: mojo.internal.Enum() };

// Enum: Type
media.mojom.Type = {
  kDisplay: 0,
  kPixel: 1,
};
media.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Enum: CdmEvent
media.mojom.CdmEvent = {
  kSignificantPlayback: 0,
  kPlaybackError: 1,
  kCdmError: 2,
  kHardwareContextReset: 3,
};
media.mojom.CdmEventSpec = { $: mojo.internal.Enum() };

// Enum: CdmSessionClosedReason
media.mojom.CdmSessionClosedReason = {
  kInternalError: 0,
  kClose: 1,
  kReleaseAcknowledged: 2,
  kHardwareContextReset: 3,
  kResourceEvicted: 4,
};
media.mojom.CdmSessionClosedReasonSpec = { $: mojo.internal.Enum() };

// Enum: EffectState
media.mojom.EffectState = {
  kUnknown: 0,
  kDisabled: 1,
  kEnabled: 2,
};
media.mojom.EffectStateSpec = { $: mojo.internal.Enum() };

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
media.mojom.MediaStreamTypeSpec = { $: mojo.internal.Enum() };

// Enum: InputStreamErrorCode
media.mojom.InputStreamErrorCode = {
  kUnknown: 0,
  kSystemPermissions: 1,
  kDeviceInUse: 2,
  kSocketError: 3,
};
media.mojom.InputStreamErrorCodeSpec = { $: mojo.internal.Enum() };

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
media.mojom.RendererTypeSpec = { $: mojo.internal.Enum() };

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
media.mojom.DemuxerTypeSpec = { $: mojo.internal.Enum() };

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
media.mojom.CreateCdmStatusSpec = { $: mojo.internal.Enum() };

// Enum: AutoPipReason
media.mojom.AutoPipReason = {
  kUnknown: 0,
  kVideoConferencing: 1,
  kMediaPlayback: 2,
  kBrowserInitiated: 3,
};
media.mojom.AutoPipReasonSpec = { $: mojo.internal.Enum() };

// Union: DecoderBufferSideDataNextConfig
media.mojom.DecoderBufferSideDataNextConfigSpec = { $: mojo.internal.Union(
    'media.mojom.DecoderBufferSideDataNextConfig', {
      'next_audio_config': {
        'ordinal': 0,
        'type': media.mojom.AudioDecoderConfigSpec,
      }},
      'next_video_config': {
        'ordinal': 1,
        'type': media.mojom.VideoDecoderConfigSpec,
      }},
    })
};

// Union: DecoderBuffer
media.mojom.DecoderBufferSpec = { $: mojo.internal.Union(
    'media.mojom.DecoderBuffer', {
      'eos': {
        'ordinal': 0,
        'type': media.mojom.EosDecoderBufferSpec,
      }},
      'data': {
        'ordinal': 1,
        'type': media.mojom.DataDecoderBufferSpec,
      }},
    })
};

// Union: VideoFrameData
media.mojom.VideoFrameDataSpec = { $: mojo.internal.Union(
    'media.mojom.VideoFrameData', {
      'eos_data': {
        'ordinal': 0,
        'type': media.mojom.EosVideoFrameDataSpec,
      }},
      'shared_memory_data': {
        'ordinal': 1,
        'type': media.mojom.SharedMemoryVideoFrameDataSpec,
      }},
      'shared_image_data': {
        'ordinal': 2,
        'type': media.mojom.SharedImageVideoFrameDataSpec,
      }},
      'opaque_data': {
        'ordinal': 3,
        'type': media.mojom.OpaqueVideoFrameDataSpec,
      }},
      'dmabuf_data': {
        'ordinal': 4,
        'type': media.mojom.DmabufVideoFrameDataSpec,
      }},
    })
};

// Struct: VideoTransformation
media.mojom.VideoTransformationSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoTransformation',
      packedSize: 16,
      fields: [
        { name: 'rotation', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoRotationSpec, nullable: false, minVersion: 0 },
        { name: 'mirrored', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'kDisplay', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: VideoColorSpace
media.mojom.VideoColorSpaceSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoColorSpace',
      packedSize: 72,
      fields: [
        { name: 'PrimaryID', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'TransferID', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'MatrixID', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'RangeID', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'primaries', packedOffset: 32, packedBitOffset: 0, type: media.mojom.PrimaryIDSpec, nullable: false, minVersion: 0 },
        { name: 'transfer', packedOffset: 40, packedBitOffset: 0, type: media.mojom.TransferIDSpec, nullable: false, minVersion: 0 },
        { name: 'matrix', packedOffset: 48, packedBitOffset: 0, type: media.mojom.MatrixIDSpec, nullable: false, minVersion: 0 },
        { name: 'range', packedOffset: 56, packedBitOffset: 0, type: media.mojom.RangeIDSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: AudioDecoderConfig
media.mojom.AudioDecoderConfigSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoderConfig',
      packedSize: 96,
      fields: [
        { name: 'codec', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioCodecSpec, nullable: false, minVersion: 0 },
        { name: 'sample_format', packedOffset: 8, packedBitOffset: 0, type: media.mojom.SampleFormatSpec, nullable: false, minVersion: 0 },
        { name: 'channel_layout', packedOffset: 16, packedBitOffset: 0, type: media.mojom.ChannelLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'samples_per_second', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'extra_data', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'encryption_scheme', packedOffset: 40, packedBitOffset: 0, type: media.mojom.EncryptionSchemeSpec, nullable: false, minVersion: 0 },
        { name: 'seek_preroll', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'codec_delay', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'profile', packedOffset: 56, packedBitOffset: 0, type: media.mojom.AudioCodecProfileSpec, nullable: false, minVersion: 0 },
        { name: 'target_output_channel_layout', packedOffset: 64, packedBitOffset: 0, type: media.mojom.ChannelLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'target_output_sample_format', packedOffset: 72, packedBitOffset: 0, type: media.mojom.SampleFormatSpec, nullable: false, minVersion: 0 },
        { name: 'should_discard_decoder_delay', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 96}]
    }
  }
};

// Struct: VideoDecoderConfig
media.mojom.VideoDecoderConfigSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoderConfig',
      packedSize: 104,
      fields: [
        { name: 'codec', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCodecSpec, nullable: false, minVersion: 0 },
        { name: 'profile', packedOffset: 8, packedBitOffset: 0, type: media.mojom.VideoCodecProfileSpec, nullable: false, minVersion: 0 },
        { name: 'level', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'has_alpha', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'transformation', packedOffset: 24, packedBitOffset: 0, type: media.mojom.VideoTransformationSpec, nullable: false, minVersion: 0 },
        { name: 'coded_size', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'visible_rect', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'natural_size', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'aspect_ratio', packedOffset: 56, packedBitOffset: 0, type: media.mojom.VideoAspectRatioSpec, nullable: false, minVersion: 0 },
        { name: 'extra_data', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'encryption_scheme', packedOffset: 72, packedBitOffset: 0, type: media.mojom.EncryptionSchemeSpec, nullable: false, minVersion: 0 },
        { name: 'color_space_info', packedOffset: 80, packedBitOffset: 0, type: media.mojom.VideoColorSpaceSpec, nullable: false, minVersion: 0 },
        { name: 'hdr_metadata', packedOffset: 88, packedBitOffset: 0, type: gfx.mojom.HDRMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
    }
  }
};

// Struct: DecryptConfig
media.mojom.DecryptConfigSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DecryptConfig',
      packedSize: 48,
      fields: [
        { name: 'encryption_scheme', packedOffset: 0, packedBitOffset: 0, type: media.mojom.EncryptionSchemeSpec, nullable: false, minVersion: 0 },
        { name: 'key_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
        { name: 'iv', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
        { name: 'subsamples', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.SubsampleEntrySpec, false), nullable: false, minVersion: 0 },
        { name: 'encryption_pattern', packedOffset: 32, packedBitOffset: 0, type: media.mojom.EncryptionPatternSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: DecoderBufferSideData
media.mojom.DecoderBufferSideDataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DecoderBufferSideData',
      packedSize: 48,
      fields: [
        { name: 'spatial_layers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'alpha_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'secure_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'front_discard', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'back_discard', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: DataDecoderBuffer
media.mojom.DataDecoderBufferSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DataDecoderBuffer',
      packedSize: 48,
      fields: [
        { name: 'timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'duration', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'data_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'is_key_frame', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'decrypt_config', packedOffset: 24, packedBitOffset: 0, type: media.mojom.DecryptConfigSpec, nullable: true, minVersion: 0 },
        { name: 'side_data', packedOffset: 32, packedBitOffset: 0, type: media.mojom.DecoderBufferSideDataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: EosDecoderBuffer
media.mojom.EosDecoderBufferSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.EosDecoderBuffer',
      packedSize: 24,
      fields: [
        { name: 'next_config', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DecoderBufferSideDataNextConfigSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AudioBuffer
media.mojom.AudioBufferSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioBuffer',
      packedSize: 56,
      fields: [
        { name: 'sample_format', packedOffset: 0, packedBitOffset: 0, type: media.mojom.SampleFormatSpec, nullable: false, minVersion: 0 },
        { name: 'channel_layout', packedOffset: 8, packedBitOffset: 0, type: media.mojom.ChannelLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'channel_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'sample_rate', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'frame_count', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'end_of_stream', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
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
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'sub_capture', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: VideoFrameMetadata
media.mojom.VideoFrameMetadataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoFrameMetadata',
      packedSize: 216,
      fields: [
        { name: 'allow_overlay', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'capture_begin_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true, minVersion: 0 },
        { name: 'capture_end_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true, minVersion: 0 },
        { name: 'has_capture_counter', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'capture_counter', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'capture_update_rect', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 0 },
        { name: 'source_size', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: true, minVersion: 0 },
        { name: 'region_capture_rect', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 0 },
        { name: 'capture_version', packedOffset: 48, packedBitOffset: 0, type: media.mojom.CaptureVersionSpec, nullable: false, minVersion: 0 },
        { name: 'copy_required', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'end_of_stream', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'frame_duration', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'has_frame_rate', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'frame_rate', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'interactive_content', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'reference_time', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true, minVersion: 0 },
        { name: 'read_lock_fences_enabled', packedOffset: 0, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'transformation', packedOffset: 80, packedBitOffset: 0, type: media.mojom.VideoTransformationSpec, nullable: true, minVersion: 0 },
        { name: 'in_surface_view', packedOffset: 0, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'wants_promotion_hint', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'protected_video', packedOffset: 1, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'hw_protected', packedOffset: 1, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'needs_detiling', packedOffset: 1, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_webgpu_compatible', packedOffset: 1, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'tracking_token', packedOffset: 88, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'power_efficient', packedOffset: 1, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_device_scale_factor', packedOffset: 1, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'device_scale_factor', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_page_scale_factor', packedOffset: 1, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'page_scale_factor', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_root_scroll_offset_x', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'root_scroll_offset_x', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_root_scroll_offset_y', packedOffset: 2, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'root_scroll_offset_y', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_top_controls_visible_height', packedOffset: 2, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'top_controls_visible_height', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'decode_begin_time', packedOffset: 136, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true, minVersion: 0 },
        { name: 'decode_end_time', packedOffset: 144, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true, minVersion: 0 },
        { name: 'processing_time', packedOffset: 152, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'has_rtp_timestamp', packedOffset: 2, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'rtp_timestamp', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'receive_time', packedOffset: 168, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true, minVersion: 0 },
        { name: 'wallclock_frame_duration', packedOffset: 176, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'frame_sequence_$flag', packedOffset: 2, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'frame_sequence_$value', originalFieldName: 'frame_sequence' } },
        { name: 'frame_sequence_$value', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'frame_sequence_$flag', originalFieldName: 'frame_sequence' } },
        { name: 'source_id_$flag', packedOffset: 2, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'source_id_$value', originalFieldName: 'source_id' } },
        { name: 'source_id_$value', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'source_id_$flag', originalFieldName: 'source_id' } },
        { name: 'background_blur', packedOffset: 200, packedBitOffset: 0, type: media.mojom.EffectStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 216}]
    }
  }
};

// Struct: VideoFrame
media.mojom.VideoFrameSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoFrame',
      packedSize: 88,
      fields: [
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoPixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'coded_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'visible_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'natural_size', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 40, packedBitOffset: 0, type: media.mojom.VideoFrameDataSpec, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 56, packedBitOffset: 0, type: media.mojom.VideoFrameMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'color_space', packedOffset: 64, packedBitOffset: 0, type: gfx.mojom.ColorSpaceSpec, nullable: false, minVersion: 0 },
        { name: 'hdr_metadata', packedOffset: 72, packedBitOffset: 0, type: gfx.mojom.HDRMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: SharedMemoryVideoFrameData
media.mojom.SharedMemoryVideoFrameDataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SharedMemoryVideoFrameData',
      packedSize: 32,
      fields: [
        { name: 'frame_data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'strides', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
        { name: 'offsets', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SharedImageVideoFrameData
media.mojom.SharedImageVideoFrameDataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SharedImageVideoFrameData',
      packedSize: 40,
      fields: [
        { name: 'shared_image', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.ExportedSharedImageSpec, nullable: false, minVersion: 0 },
        { name: 'sync_token', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
        { name: 'is_mappable', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ycbcr_data', packedOffset: 24, packedBitOffset: 0, type: gpu.mojom.VulkanYCbCrInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: ColorPlaneLayout
media.mojom.ColorPlaneLayoutSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ColorPlaneLayout',
      packedSize: 32,
      fields: [
        { name: 'stride', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DmabufVideoFrameData
media.mojom.DmabufVideoFrameDataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DmabufVideoFrameData',
      packedSize: 48,
      fields: [
        { name: 'planes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.ColorPlaneLayoutSpec, false), nullable: false, minVersion: 0 },
        { name: 'is_multi_planar', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'buffer_addr_align', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'modifier', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'fds', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: PipelineStatistics
media.mojom.PipelineStatisticsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PipelineStatistics',
      packedSize: 48,
      fields: [
        { name: 'audio_bytes_decoded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'video_bytes_decoded', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'video_frames_decoded', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'video_frames_dropped', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'audio_memory_usage', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'video_memory_usage', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: PredictionFeatures
media.mojom.PredictionFeaturesSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PredictionFeatures',
      packedSize: 48,
      fields: [
        { name: 'profile', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCodecProfileSpec, nullable: false, minVersion: 0 },
        { name: 'video_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'frames_per_sec', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'key_system', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'use_hw_secure_codecs', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: PredictionTargets
media.mojom.PredictionTargetsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PredictionTargets',
      packedSize: 24,
      fields: [
        { name: 'frames_decoded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'frames_dropped', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'frames_power_efficient', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AudioPipelineInfo
media.mojom.AudioPipelineInfoSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioPipelineInfo',
      packedSize: 24,
      fields: [
        { name: 'decoder_type', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioDecoderTypeSpec, nullable: false, minVersion: 0 },
        { name: 'is_platform_decoder', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_decrypting_demuxer_stream', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'encryption_type', packedOffset: 12, packedBitOffset: 0, type: media.mojom.EncryptionTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: VideoPipelineInfo
media.mojom.VideoPipelineInfoSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoPipelineInfo',
      packedSize: 24,
      fields: [
        { name: 'decoder_type', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoDecoderTypeSpec, nullable: false, minVersion: 0 },
        { name: 'is_platform_decoder', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_decrypting_demuxer_stream', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'encryption_type', packedOffset: 12, packedBitOffset: 0, type: media.mojom.EncryptionTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: StatusData
media.mojom.StatusDataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.StatusData',
      packedSize: 64,
      fields: [
        { name: 'group', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'frames', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.ListValueSpec, nullable: false, minVersion: 0 },
        { name: 'cause', packedOffset: 32, packedBitOffset: 0, type: media.mojom.StatusDataSpec, nullable: true, minVersion: 0 },
        { name: 'data', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
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
        { name: 'internal', packedOffset: 0, packedBitOffset: 0, type: media.mojom.StatusDataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'internal', packedOffset: 0, packedBitOffset: 0, type: media.mojom.StatusDataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'internal', packedOffset: 0, packedBitOffset: 0, type: media.mojom.StatusDataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'auto_pip_reason', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AutoPipReasonSpec, nullable: false, minVersion: 0 },
        { name: 'has_audio_focus', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_playing', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'was_recently_audible', packedOffset: 4, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_safe_url', packedOffset: 4, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'meets_media_engagement_conditions', packedOffset: 4, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'blocked_due_to_content_setting', packedOffset: 4, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
