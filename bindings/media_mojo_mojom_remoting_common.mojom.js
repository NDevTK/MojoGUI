// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/remoting_common.mojom
// Module: media.mojom

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.RemotingStopReasonSpec = { $: mojo.internal.Enum() };
media.mojom.RemotingStartFailReasonSpec = { $: mojo.internal.Enum() };
media.mojom.RemotingSinkFeatureSpec = { $: mojo.internal.Enum() };
media.mojom.RemotingSinkAudioCapabilitySpec = { $: mojo.internal.Enum() };
media.mojom.RemotingSinkVideoCapabilitySpec = { $: mojo.internal.Enum() };
media.mojom.RemotingSinkMetadataSpec = { $: {} };

// Enum: RemotingStopReason
media.mojom.RemotingStopReason = {
  ROUTE_TERMINATED: 0,
  LOCAL_PLAYBACK: 1,
  SOURCE_GONE: 2,
  MESSAGE_SEND_FAILED: 3,
  DATA_SEND_FAILED: 4,
  UNEXPECTED_FAILURE: 5,
  SERVICE_GONE: 6,
  USER_DISABLED: 7,
};

// Enum: RemotingStartFailReason
media.mojom.RemotingStartFailReason = {
  CANNOT_START_MULTIPLE: 0,
  ROUTE_TERMINATED: 1,
  INVALID_ANSWER_MESSAGE: 2,
  REMOTING_NOT_PERMITTED: 3,
};

// Enum: RemotingSinkFeature
media.mojom.RemotingSinkFeature = {
  RENDERING: 0,
  CONTENT_DECRYPTION: 1,
};

// Enum: RemotingSinkAudioCapability
media.mojom.RemotingSinkAudioCapability = {
  CODEC_BASELINE_SET: 0,
  CODEC_AAC: 1,
  CODEC_OPUS: 2,
};

// Enum: RemotingSinkVideoCapability
media.mojom.RemotingSinkVideoCapability = {
  SUPPORT_4K: 0,
  CODEC_BASELINE_SET: 1,
  CODEC_H264: 2,
  CODEC_VP8: 3,
  CODEC_VP9: 4,
  CODEC_HEVC: 5,
  CODEC_AV1: 6,
};

// Struct: RemotingSinkMetadata
mojo.internal.Struct(
    media.mojom.RemotingSinkMetadataSpec, 'media.mojom.RemotingSinkMetadata', [
      mojo.internal.StructField('features', 0, 0, mojo.internal.Array(media.mojom.RemotingSinkFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('audio_capabilities', 8, 0, mojo.internal.Array(media.mojom.RemotingSinkAudioCapabilitySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('video_capabilities', 16, 0, mojo.internal.Array(media.mojom.RemotingSinkVideoCapabilitySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('friendly_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);
