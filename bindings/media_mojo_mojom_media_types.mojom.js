// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_types.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};

media.mojom.VideoRotationSpec = { $: mojo.internal.Enum() };
media.mojom.EncryptionTypeSpec = { $: mojo.internal.Enum() };
media.mojom.SVCScalabilityModeSpec = { $: mojo.internal.Enum() };
media.mojom.SVCInterLayerPredModeSpec = { $: mojo.internal.Enum() };
media.mojom.TypeSpec = { $: mojo.internal.Enum() };
media.mojom.CdmEventSpec = { $: mojo.internal.Enum() };
media.mojom.CdmSessionClosedReasonSpec = { $: mojo.internal.Enum() };
media.mojom.EffectStateSpec = { $: mojo.internal.Enum() };
media.mojom.MediaStreamTypeSpec = { $: mojo.internal.Enum() };
media.mojom.InputStreamErrorCodeSpec = { $: mojo.internal.Enum() };
media.mojom.RendererTypeSpec = { $: mojo.internal.Enum() };
media.mojom.DemuxerTypeSpec = { $: mojo.internal.Enum() };
media.mojom.CreateCdmStatusSpec = { $: mojo.internal.Enum() };
media.mojom.AutoPipReasonSpec = { $: mojo.internal.Enum() };
media.mojom.DecoderBufferSideDataNextConfigSpec = { $: {} };
media.mojom.DecoderBufferSpec = { $: {} };
media.mojom.VideoFrameDataSpec = { $: {} };
media.mojom.VideoTransformationSpec = { $: {} };
media.mojom.VideoAspectRatioSpec = { $: {} };
media.mojom.VideoColorSpaceSpec = { $: {} };
media.mojom.AudioDecoderConfigSpec = { $: {} };
media.mojom.VideoDecoderConfigSpec = { $: {} };
media.mojom.DecryptConfigSpec = { $: {} };
media.mojom.DecoderBufferSideDataSpec = { $: {} };
media.mojom.DataDecoderBufferSpec = { $: {} };
media.mojom.EosDecoderBufferSpec = { $: {} };
media.mojom.AudioBufferSpec = { $: {} };
media.mojom.CaptureVersionSpec = { $: {} };
media.mojom.VideoFrameMetadataSpec = { $: {} };
media.mojom.VideoFrameSpec = { $: {} };
media.mojom.EosVideoFrameDataSpec = { $: {} };
media.mojom.SharedMemoryVideoFrameDataSpec = { $: {} };
media.mojom.SharedImageVideoFrameDataSpec = { $: {} };
media.mojom.OpaqueVideoFrameDataSpec = { $: {} };
media.mojom.ColorPlaneLayoutSpec = { $: {} };
media.mojom.DmabufVideoFrameDataSpec = { $: {} };
media.mojom.PipelineStatisticsSpec = { $: {} };
media.mojom.PredictionFeaturesSpec = { $: {} };
media.mojom.PredictionTargetsSpec = { $: {} };
media.mojom.AudioPipelineInfoSpec = { $: {} };
media.mojom.VideoPipelineInfoSpec = { $: {} };
media.mojom.StatusDataSpec = { $: {} };
media.mojom.EncoderStatusSpec = { $: {} };
media.mojom.DecoderStatusSpec = { $: {} };
media.mojom.PipelineStatusSpec = { $: {} };
media.mojom.AutoPipInfoSpec = { $: {} };

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
media.mojom.DemuxerType = {
  kUnknownDemuxer: 0,
  kMockDemuxer: 1,
  kFFmpegDemuxer: 2,
  kChunkDemuxer: 3,
  kFrameInjectingDemuxer: 5,
  kStreamProviderDemuxer: 6,
  kManifestDemuxer: 7,
};

// Enum: CreateCdmStatus
media.mojom.CreateCdmStatus = {
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
media.mojom.AutoPipReason = {
  kUnknown: 0,
  kVideoConferencing: 1,
  kMediaPlayback: 2,
  kBrowserInitiated: 3,
};

// Union: DecoderBufferSideDataNextConfig
mojo.internal.Union(
    media.mojom.DecoderBufferSideDataNextConfigSpec, 'media.mojom.DecoderBufferSideDataNextConfig', {
      'next_audio_config': {
        'ordinal': 0,
        'type': media.mojom.AudioDecoderConfigSpec,
        'nullable': false,
      },
      'next_video_config': {
        'ordinal': 1,
        'type': media.mojom.VideoDecoderConfigSpec,
        'nullable': false,
      },
    });

// Union: DecoderBuffer
mojo.internal.Union(
    media.mojom.DecoderBufferSpec, 'media.mojom.DecoderBuffer', {
      'eos': {
        'ordinal': 0,
        'type': media.mojom.EosDecoderBufferSpec,
        'nullable': false,
      },
      'data': {
        'ordinal': 1,
        'type': media.mojom.DataDecoderBufferSpec,
        'nullable': false,
      },
    });

// Union: VideoFrameData
mojo.internal.Union(
    media.mojom.VideoFrameDataSpec, 'media.mojom.VideoFrameData', {
      'eos_data': {
        'ordinal': 0,
        'type': media.mojom.EosVideoFrameDataSpec,
        'nullable': false,
      },
      'shared_memory_data': {
        'ordinal': 1,
        'type': media.mojom.SharedMemoryVideoFrameDataSpec,
        'nullable': false,
      },
      'shared_image_data': {
        'ordinal': 2,
        'type': media.mojom.SharedImageVideoFrameDataSpec,
        'nullable': false,
      },
      'opaque_data': {
        'ordinal': 3,
        'type': media.mojom.OpaqueVideoFrameDataSpec,
        'nullable': false,
      },
      'dmabuf_data': {
        'ordinal': 4,
        'type': media.mojom.DmabufVideoFrameDataSpec,
        'nullable': false,
      },
    });

// Struct: VideoTransformation
mojo.internal.Struct(
    media.mojom.VideoTransformationSpec, 'media.mojom.VideoTransformation', [
      mojo.internal.StructField('rotation', 0, 0, media.mojom.VideoRotationSpec, null, false, 0, undefined),
      mojo.internal.StructField('mirrored', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VideoAspectRatio
mojo.internal.Struct(
    media.mojom.VideoAspectRatioSpec, 'media.mojom.VideoAspectRatio', [
      mojo.internal.StructField('kDisplay', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VideoColorSpace
mojo.internal.Struct(
    media.mojom.VideoColorSpaceSpec, 'media.mojom.VideoColorSpace', [
      mojo.internal.StructField('PrimaryID', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('TransferID', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('MatrixID', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('RangeID', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('primaries', 32, 0, media.mojom.PrimaryIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('transfer', 40, 0, media.mojom.TransferIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('matrix', 48, 0, media.mojom.MatrixIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('range', 56, 0, media.mojom.RangeIDSpec, null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: AudioDecoderConfig
mojo.internal.Struct(
    media.mojom.AudioDecoderConfigSpec, 'media.mojom.AudioDecoderConfig', [
      mojo.internal.StructField('codec', 0, 0, media.mojom.AudioCodecSpec, null, false, 0, undefined),
      mojo.internal.StructField('sample_format', 8, 0, media.mojom.SampleFormatSpec, null, false, 0, undefined),
      mojo.internal.StructField('channel_layout', 16, 0, media.mojom.ChannelLayoutSpec, null, false, 0, undefined),
      mojo.internal.StructField('samples_per_second', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('extra_data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('encryption_scheme', 32, 0, media.mojom.EncryptionSchemeSpec, null, false, 0, undefined),
      mojo.internal.StructField('seek_preroll', 40, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('codec_delay', 76, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('profile', 48, 0, media.mojom.AudioCodecProfileSpec, null, false, 0, undefined),
      mojo.internal.StructField('target_output_channel_layout', 56, 0, media.mojom.ChannelLayoutSpec, null, false, 0, undefined),
      mojo.internal.StructField('target_output_sample_format', 64, 0, media.mojom.SampleFormatSpec, null, false, 0, undefined),
      mojo.internal.StructField('should_discard_decoder_delay', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: VideoDecoderConfig
mojo.internal.Struct(
    media.mojom.VideoDecoderConfigSpec, 'media.mojom.VideoDecoderConfig', [
      mojo.internal.StructField('codec', 0, 0, media.mojom.VideoCodecSpec, null, false, 0, undefined),
      mojo.internal.StructField('profile', 8, 0, media.mojom.VideoCodecProfileSpec, null, false, 0, undefined),
      mojo.internal.StructField('level', 88, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('has_alpha', 92, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('transformation', 16, 0, media.mojom.VideoTransformationSpec, null, false, 0, undefined),
      mojo.internal.StructField('coded_size', 24, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('visible_rect', 32, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('natural_size', 40, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('aspect_ratio', 48, 0, media.mojom.VideoAspectRatioSpec, null, false, 0, undefined),
      mojo.internal.StructField('extra_data', 56, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('encryption_scheme', 64, 0, media.mojom.EncryptionSchemeSpec, null, false, 0, undefined),
      mojo.internal.StructField('color_space_info', 72, 0, media.mojom.VideoColorSpaceSpec, null, false, 0, undefined),
      mojo.internal.StructField('hdr_metadata', 80, 0, gfx.mojom.HDRMetadataSpec, null, false, 0, undefined),
    ],
    [[0, 104]]);

// Struct: DecryptConfig
mojo.internal.Struct(
    media.mojom.DecryptConfigSpec, 'media.mojom.DecryptConfig', [
      mojo.internal.StructField('encryption_scheme', 0, 0, media.mojom.EncryptionSchemeSpec, null, false, 0, undefined),
      mojo.internal.StructField('key_id', 8, 0, mojo_base.mojom.ByteStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('iv', 16, 0, mojo_base.mojom.ByteStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('subsamples', 24, 0, mojo.internal.Array(media.mojom.SubsampleEntrySpec, false), null, false, 0, undefined),
      mojo.internal.StructField('encryption_pattern', 32, 0, media.mojom.EncryptionPatternSpec, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DecoderBufferSideData
mojo.internal.Struct(
    media.mojom.DecoderBufferSideDataSpec, 'media.mojom.DecoderBufferSideData', [
      mojo.internal.StructField('spatial_layers', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('alpha_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('secure_handle', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('front_discard', 24, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('back_discard', 32, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DataDecoderBuffer
mojo.internal.Struct(
    media.mojom.DataDecoderBufferSpec, 'media.mojom.DataDecoderBuffer', [
      mojo.internal.StructField('timestamp', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('duration', 8, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('data_size', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_key_frame', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('decrypt_config', 16, 0, media.mojom.DecryptConfigSpec, null, true, 0, undefined),
      mojo.internal.StructField('side_data', 24, 0, media.mojom.DecoderBufferSideDataSpec, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: EosDecoderBuffer
mojo.internal.Struct(
    media.mojom.EosDecoderBufferSpec, 'media.mojom.EosDecoderBuffer', [
      mojo.internal.StructField('next_config', 0, 0, media.mojom.DecoderBufferSideDataNextConfigSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AudioBuffer
mojo.internal.Struct(
    media.mojom.AudioBufferSpec, 'media.mojom.AudioBuffer', [
      mojo.internal.StructField('sample_format', 0, 0, media.mojom.SampleFormatSpec, null, false, 0, undefined),
      mojo.internal.StructField('channel_layout', 8, 0, media.mojom.ChannelLayoutSpec, null, false, 0, undefined),
      mojo.internal.StructField('channel_count', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sample_rate', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('frame_count', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('end_of_stream', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('timestamp', 16, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: CaptureVersion
mojo.internal.Struct(
    media.mojom.CaptureVersionSpec, 'media.mojom.CaptureVersion', [
      mojo.internal.StructField('source', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sub_capture', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VideoFrameMetadata
mojo.internal.Struct(
    media.mojom.VideoFrameMetadataSpec, 'media.mojom.VideoFrameMetadata', [
      mojo.internal.StructField('allow_overlay', 200, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('capture_begin_time', 0, 0, mojo_base.mojom.TimeTicksSpec, null, true, 0, undefined),
      mojo.internal.StructField('capture_end_time', 8, 0, mojo_base.mojom.TimeTicksSpec, null, true, 0, undefined),
      mojo.internal.StructField('has_capture_counter', 200, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('capture_counter', 192, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('capture_update_rect', 16, 0, gfx.mojom.RectSpec, null, true, 0, undefined),
      mojo.internal.StructField('source_size', 24, 0, gfx.mojom.SizeSpec, null, true, 0, undefined),
      mojo.internal.StructField('region_capture_rect', 32, 0, gfx.mojom.RectSpec, null, true, 0, undefined),
      mojo.internal.StructField('capture_version', 40, 0, media.mojom.CaptureVersionSpec, null, false, 0, undefined),
      mojo.internal.StructField('copy_required', 200, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('end_of_stream', 200, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('frame_duration', 48, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('has_frame_rate', 200, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('frame_rate', 56, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('interactive_content', 200, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('reference_time', 64, 0, mojo_base.mojom.TimeTicksSpec, null, true, 0, undefined),
      mojo.internal.StructField('read_lock_fences_enabled', 200, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('transformation', 72, 0, media.mojom.VideoTransformationSpec, null, true, 0, undefined),
      mojo.internal.StructField('in_surface_view', 200, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('wants_promotion_hint', 201, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('protected_video', 201, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hw_protected', 201, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('needs_detiling', 201, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_webgpu_compatible', 201, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tracking_token', 80, 0, mojo_base.mojom.UnguessableTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('power_efficient', 201, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_device_scale_factor', 201, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 88, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_page_scale_factor', 201, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('page_scale_factor', 96, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_root_scroll_offset_x', 202, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('root_scroll_offset_x', 104, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_root_scroll_offset_y', 202, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('root_scroll_offset_y', 112, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_top_controls_visible_height', 202, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('top_controls_visible_height', 120, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('decode_begin_time', 128, 0, mojo_base.mojom.TimeTicksSpec, null, true, 0, undefined),
      mojo.internal.StructField('decode_end_time', 136, 0, mojo_base.mojom.TimeTicksSpec, null, true, 0, undefined),
      mojo.internal.StructField('processing_time', 144, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('has_rtp_timestamp', 202, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('rtp_timestamp', 152, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('receive_time', 160, 0, mojo_base.mojom.TimeTicksSpec, null, true, 0, undefined),
      mojo.internal.StructField('wallclock_frame_duration', 168, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('frame_sequence_$flag', 202, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'frame_sequence_$value', originalFieldName: 'frame_sequence' }),
      mojo.internal.StructField('frame_sequence_$value', 176, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'frame_sequence_$flag', originalFieldName: 'frame_sequence' }),
      mojo.internal.StructField('source_id_$flag', 202, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'source_id_$value', originalFieldName: 'source_id' }),
      mojo.internal.StructField('source_id_$value', 184, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'source_id_$flag', originalFieldName: 'source_id' }),
      mojo.internal.StructField('background_blur', 196, 0, media.mojom.EffectStateSpec, null, false, 0, undefined),
    ],
    [[0, 216]]);

// Struct: VideoFrame
mojo.internal.Struct(
    media.mojom.VideoFrameSpec, 'media.mojom.VideoFrame', [
      mojo.internal.StructField('format', 16, 0, media.mojom.VideoPixelFormatSpec, null, false, 0, undefined),
      mojo.internal.StructField('coded_size', 24, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('visible_rect', 32, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('natural_size', 40, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 48, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('data', 0, 0, media.mojom.VideoFrameDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('metadata', 56, 0, media.mojom.VideoFrameMetadataSpec, null, false, 0, undefined),
      mojo.internal.StructField('color_space', 64, 0, gfx.mojom.ColorSpaceSpec, null, false, 0, undefined),
      mojo.internal.StructField('hdr_metadata', 72, 0, gfx.mojom.HDRMetadataSpec, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: EosVideoFrameData
mojo.internal.Struct(
    media.mojom.EosVideoFrameDataSpec, 'media.mojom.EosVideoFrameData', [
    ],
    [{version: 0, packedSize: 8}]);

// Struct: SharedMemoryVideoFrameData
mojo.internal.Struct(
    media.mojom.SharedMemoryVideoFrameDataSpec, 'media.mojom.SharedMemoryVideoFrameData', [
      mojo.internal.StructField('frame_data', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, null, false, 0, undefined),
      mojo.internal.StructField('strides', 8, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('offsets', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SharedImageVideoFrameData
mojo.internal.Struct(
    media.mojom.SharedImageVideoFrameDataSpec, 'media.mojom.SharedImageVideoFrameData', [
      mojo.internal.StructField('shared_image', 0, 0, gpu.mojom.ExportedSharedImageSpec, null, false, 0, undefined),
      mojo.internal.StructField('sync_token', 8, 0, gpu.mojom.SyncTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_mappable', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ycbcr_data', 16, 0, gpu.mojom.VulkanYCbCrInfoSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: OpaqueVideoFrameData
mojo.internal.Struct(
    media.mojom.OpaqueVideoFrameDataSpec, 'media.mojom.OpaqueVideoFrameData', [
    ],
    [{version: 0, packedSize: 8}]);

// Struct: ColorPlaneLayout
mojo.internal.Struct(
    media.mojom.ColorPlaneLayoutSpec, 'media.mojom.ColorPlaneLayout', [
      mojo.internal.StructField('stride', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('size', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DmabufVideoFrameData
mojo.internal.Struct(
    media.mojom.DmabufVideoFrameDataSpec, 'media.mojom.DmabufVideoFrameData', [
      mojo.internal.StructField('planes', 0, 0, mojo.internal.Array(media.mojom.ColorPlaneLayoutSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('is_multi_planar', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('buffer_addr_align', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('modifier', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('fds', 24, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PipelineStatistics
mojo.internal.Struct(
    media.mojom.PipelineStatisticsSpec, 'media.mojom.PipelineStatistics', [
      mojo.internal.StructField('audio_bytes_decoded', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('video_bytes_decoded', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('video_frames_decoded', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('video_frames_dropped', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('audio_memory_usage', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('video_memory_usage', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PredictionFeatures
mojo.internal.Struct(
    media.mojom.PredictionFeaturesSpec, 'media.mojom.PredictionFeatures', [
      mojo.internal.StructField('profile', 0, 0, media.mojom.VideoCodecProfileSpec, null, false, 0, undefined),
      mojo.internal.StructField('video_size', 8, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('frames_per_sec', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('key_system', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('use_hw_secure_codecs', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PredictionTargets
mojo.internal.Struct(
    media.mojom.PredictionTargetsSpec, 'media.mojom.PredictionTargets', [
      mojo.internal.StructField('frames_decoded', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('frames_dropped', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('frames_power_efficient', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AudioPipelineInfo
mojo.internal.Struct(
    media.mojom.AudioPipelineInfoSpec, 'media.mojom.AudioPipelineInfo', [
      mojo.internal.StructField('decoder_type', 0, 0, media.mojom.AudioDecoderTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_platform_decoder', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_decrypting_demuxer_stream', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('encryption_type', 8, 0, media.mojom.EncryptionTypeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoPipelineInfo
mojo.internal.Struct(
    media.mojom.VideoPipelineInfoSpec, 'media.mojom.VideoPipelineInfo', [
      mojo.internal.StructField('decoder_type', 0, 0, media.mojom.VideoDecoderTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_platform_decoder', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_decrypting_demuxer_stream', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('encryption_type', 8, 0, media.mojom.EncryptionTypeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StatusData
mojo.internal.Struct(
    media.mojom.StatusDataSpec, 'media.mojom.StatusData', [
      mojo.internal.StructField('group', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code', 48, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('message', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('frames', 32, 0, mojo_base.mojom.ListValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('cause', 40, 0, media.mojom.StatusDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ValueSpec, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: EncoderStatus
mojo.internal.Struct(
    media.mojom.EncoderStatusSpec, 'media.mojom.EncoderStatus', [
      mojo.internal.StructField('internal', 0, 0, media.mojom.StatusDataSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DecoderStatus
mojo.internal.Struct(
    media.mojom.DecoderStatusSpec, 'media.mojom.DecoderStatus', [
      mojo.internal.StructField('internal', 0, 0, media.mojom.StatusDataSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PipelineStatus
mojo.internal.Struct(
    media.mojom.PipelineStatusSpec, 'media.mojom.PipelineStatus', [
      mojo.internal.StructField('internal', 0, 0, media.mojom.StatusDataSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AutoPipInfo
mojo.internal.Struct(
    media.mojom.AutoPipInfoSpec, 'media.mojom.AutoPipInfo', [
      mojo.internal.StructField('auto_pip_reason', 0, 0, media.mojom.AutoPipReasonSpec, null, false, 0, undefined),
      mojo.internal.StructField('has_audio_focus', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_playing', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_recently_audible', 4, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_safe_url', 4, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('meets_media_engagement_conditions', 4, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('blocked_due_to_content_setting', 4, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);
