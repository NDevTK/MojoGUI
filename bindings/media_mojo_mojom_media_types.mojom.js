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
      packedSize: 24,
      fields: [
        { name: 'rotation', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoRotationSpec, nullable: false },
        { name: 'mirrored', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 72,
      fields: [
        { name: 'PrimaryID', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'TransferID', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'MatrixID', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'RangeID', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'primaries', packedOffset: 32, packedBitOffset: 0, type: media.mojom.PrimaryIDSpec, nullable: false },
        { name: 'transfer', packedOffset: 40, packedBitOffset: 0, type: media.mojom.TransferIDSpec, nullable: false },
        { name: 'matrix', packedOffset: 48, packedBitOffset: 0, type: media.mojom.MatrixIDSpec, nullable: false },
        { name: 'range', packedOffset: 56, packedBitOffset: 0, type: media.mojom.RangeIDSpec, nullable: false },
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
      packedSize: 104,
      fields: [
        { name: 'codec', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioCodecSpec, nullable: false },
        { name: 'sample_format', packedOffset: 8, packedBitOffset: 0, type: media.mojom.SampleFormatSpec, nullable: false },
        { name: 'channel_layout', packedOffset: 16, packedBitOffset: 0, type: media.mojom.ChannelLayoutSpec, nullable: false },
        { name: 'samples_per_second', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'extra_data', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'encryption_scheme', packedOffset: 40, packedBitOffset: 0, type: media.mojom.EncryptionSchemeSpec, nullable: false },
        { name: 'seek_preroll', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'codec_delay', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'profile', packedOffset: 64, packedBitOffset: 0, type: media.mojom.AudioCodecProfileSpec, nullable: false },
        { name: 'target_output_channel_layout', packedOffset: 72, packedBitOffset: 0, type: media.mojom.ChannelLayoutSpec, nullable: false },
        { name: 'target_output_sample_format', packedOffset: 80, packedBitOffset: 0, type: media.mojom.SampleFormatSpec, nullable: false },
        { name: 'should_discard_decoder_delay', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 112,
      fields: [
        { name: 'codec', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCodecSpec, nullable: false },
        { name: 'profile', packedOffset: 8, packedBitOffset: 0, type: media.mojom.VideoCodecProfileSpec, nullable: false },
        { name: 'level', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'has_alpha', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'transformation', packedOffset: 32, packedBitOffset: 0, type: media.mojom.VideoTransformationSpec, nullable: false },
        { name: 'coded_size', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'visible_rect', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'natural_size', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'aspect_ratio', packedOffset: 64, packedBitOffset: 0, type: media.mojom.VideoAspectRatioSpec, nullable: false },
        { name: 'extra_data', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'encryption_scheme', packedOffset: 80, packedBitOffset: 0, type: media.mojom.EncryptionSchemeSpec, nullable: false },
        { name: 'color_space_info', packedOffset: 88, packedBitOffset: 0, type: media.mojom.VideoColorSpaceSpec, nullable: false },
        { name: 'hdr_metadata', packedOffset: 96, packedBitOffset: 0, type: gfx.mojom.HDRMetadataSpec, nullable: false },
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
      packedSize: 48,
      fields: [
        { name: 'encryption_scheme', packedOffset: 0, packedBitOffset: 0, type: media.mojom.EncryptionSchemeSpec, nullable: false },
        { name: 'key_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false },
        { name: 'iv', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false },
        { name: 'subsamples', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'encryption_pattern', packedOffset: 32, packedBitOffset: 0, type: media.mojom.EncryptionPatternSpec, nullable: true },
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
      packedSize: 48,
      fields: [
        { name: 'spatial_layers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'alpha_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'secure_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'front_discard', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'back_discard', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
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
      packedSize: 56,
      fields: [
        { name: 'timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'duration', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'data_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'is_key_frame', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'decrypt_config', packedOffset: 32, packedBitOffset: 0, type: media.mojom.DecryptConfigSpec, nullable: true },
        { name: 'side_data', packedOffset: 40, packedBitOffset: 0, type: media.mojom.DecoderBufferSideDataSpec, nullable: true },
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
        { name: 'next_config', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DecoderBufferSideDataNextConfigSpec, nullable: true },
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
      packedSize: 64,
      fields: [
        { name: 'sample_format', packedOffset: 0, packedBitOffset: 0, type: media.mojom.SampleFormatSpec, nullable: false },
        { name: 'channel_layout', packedOffset: 8, packedBitOffset: 0, type: media.mojom.ChannelLayoutSpec, nullable: false },
        { name: 'channel_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'sample_rate', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'frame_count', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'end_of_stream', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'timestamp', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'data', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'sub_capture', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
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
      packedSize: 320,
      fields: [
        { name: 'allow_overlay', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'capture_begin_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true },
        { name: 'capture_end_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true },
        { name: 'has_capture_counter', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'capture_counter', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'capture_update_rect', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true },
        { name: 'source_size', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: true },
        { name: 'region_capture_rect', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true },
        { name: 'capture_version', packedOffset: 64, packedBitOffset: 0, type: media.mojom.CaptureVersionSpec, nullable: false },
        { name: 'copy_required', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'end_of_stream', packedOffset: 72, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'frame_duration', packedOffset: 80, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
        { name: 'has_frame_rate', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'frame_rate', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'interactive_content', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'reference_time', packedOffset: 112, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true },
        { name: 'read_lock_fences_enabled', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'transformation', packedOffset: 128, packedBitOffset: 0, type: media.mojom.VideoTransformationSpec, nullable: true },
        { name: 'in_surface_view', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'wants_promotion_hint', packedOffset: 136, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'protected_video', packedOffset: 136, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'hw_protected', packedOffset: 136, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'needs_detiling', packedOffset: 136, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'is_webgpu_compatible', packedOffset: 136, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'tracking_token', packedOffset: 144, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'power_efficient', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'has_device_scale_factor', packedOffset: 152, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'device_scale_factor', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_page_scale_factor', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'page_scale_factor', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_root_scroll_offset_x', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'root_scroll_offset_x', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_root_scroll_offset_y', packedOffset: 200, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'root_scroll_offset_y', packedOffset: 208, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_top_controls_visible_height', packedOffset: 216, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'top_controls_visible_height', packedOffset: 224, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'decode_begin_time', packedOffset: 232, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true },
        { name: 'decode_end_time', packedOffset: 240, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true },
        { name: 'processing_time', packedOffset: 248, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
        { name: 'has_rtp_timestamp', packedOffset: 256, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'rtp_timestamp', packedOffset: 264, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'receive_time', packedOffset: 272, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true },
        { name: 'wallclock_frame_duration', packedOffset: 280, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
        { name: 'frame_sequence', packedOffset: 288, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: true },
        { name: 'source_id', packedOffset: 296, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: true },
        { name: 'background_blur', packedOffset: 304, packedBitOffset: 0, type: media.mojom.EffectStateSpec, nullable: false },
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
      packedSize: 80,
      fields: [
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoPixelFormatSpec, nullable: false },
        { name: 'coded_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'visible_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'natural_size', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'timestamp', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'data', packedOffset: 40, packedBitOffset: 0, type: media.mojom.VideoFrameDataSpec, nullable: false },
        { name: 'metadata', packedOffset: 48, packedBitOffset: 0, type: media.mojom.VideoFrameMetadataSpec, nullable: false },
        { name: 'color_space', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.ColorSpaceSpec, nullable: false },
        { name: 'hdr_metadata', packedOffset: 64, packedBitOffset: 0, type: gfx.mojom.HDRMetadataSpec, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'frame_data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false },
        { name: 'strides', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'offsets', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 40,
      fields: [
        { name: 'shared_image', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.ExportedSharedImageSpec, nullable: false },
        { name: 'sync_token', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false },
        { name: 'is_mappable', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'ycbcr_data', packedOffset: 24, packedBitOffset: 0, type: [EnableIf=is_android] gpu.mojom.VulkanYCbCrInfoSpec, nullable: true },
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
      packedSize: 32,
      fields: [
        { name: 'stride', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
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
      packedSize: 48,
      fields: [
        { name: 'planes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'is_multi_planar', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'buffer_addr_align', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'modifier', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'fds', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 48,
      fields: [
        { name: 'audio_bytes_decoded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'video_bytes_decoded', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'video_frames_decoded', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'video_frames_dropped', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'audio_memory_usage', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'video_memory_usage', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
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
      packedSize: 48,
      fields: [
        { name: 'profile', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCodecProfileSpec, nullable: false },
        { name: 'video_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'frames_per_sec', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'key_system', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'use_hw_secure_codecs', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'frames_decoded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'frames_dropped', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'frames_power_efficient', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'decoder_type', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioDecoderTypeSpec, nullable: false },
        { name: 'is_platform_decoder', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'has_decrypting_demuxer_stream', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'encryption_type', packedOffset: 16, packedBitOffset: 0, type: media.mojom.EncryptionTypeSpec, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'decoder_type', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoDecoderTypeSpec, nullable: false },
        { name: 'is_platform_decoder', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'has_decrypting_demuxer_stream', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'encryption_type', packedOffset: 16, packedBitOffset: 0, type: media.mojom.EncryptionTypeSpec, nullable: false },
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
      packedSize: 56,
      fields: [
        { name: 'group', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'frames', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.ListValueSpec, nullable: false },
        { name: 'cause', packedOffset: 32, packedBitOffset: 0, type: media.mojom.StatusDataSpec, nullable: true },
        { name: 'data', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false },
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
        { name: 'internal', packedOffset: 0, packedBitOffset: 0, type: media.mojom.StatusDataSpec, nullable: true },
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
        { name: 'internal', packedOffset: 0, packedBitOffset: 0, type: media.mojom.StatusDataSpec, nullable: true },
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
        { name: 'internal', packedOffset: 0, packedBitOffset: 0, type: media.mojom.StatusDataSpec, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'auto_pip_reason', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AutoPipReasonSpec, nullable: false },
        { name: 'has_audio_focus', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_playing', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'was_recently_audible', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'has_safe_url', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'meets_media_engagement_conditions', packedOffset: 8, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'blocked_due_to_content_setting', packedOffset: 8, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
