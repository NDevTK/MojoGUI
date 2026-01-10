// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/remoting_common.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


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
media.mojom.RemotingStopReasonSpec = { $: mojo.internal.Enum() };

// Enum: RemotingStartFailReason
media.mojom.RemotingStartFailReason = {
  CANNOT_START_MULTIPLE: 0,
  ROUTE_TERMINATED: 1,
  INVALID_ANSWER_MESSAGE: 2,
  REMOTING_NOT_PERMITTED: 3,
};
media.mojom.RemotingStartFailReasonSpec = { $: mojo.internal.Enum() };

// Enum: RemotingSinkFeature
media.mojom.RemotingSinkFeature = {
  RENDERING: 0,
  CONTENT_DECRYPTION: 1,
};
media.mojom.RemotingSinkFeatureSpec = { $: mojo.internal.Enum() };

// Enum: RemotingSinkAudioCapability
media.mojom.RemotingSinkAudioCapability = {
  CODEC_BASELINE_SET: 0,
  CODEC_AAC: 1,
  CODEC_OPUS: 2,
};
media.mojom.RemotingSinkAudioCapabilitySpec = { $: mojo.internal.Enum() };

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
media.mojom.RemotingSinkVideoCapabilitySpec = { $: mojo.internal.Enum() };

// Struct: RemotingSinkMetadata
media.mojom.RemotingSinkMetadataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RemotingSinkMetadata',
      packedSize: 40,
      fields: [
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.RemotingSinkFeatureSpec, false), nullable: false, minVersion: 0 },
        { name: 'audio_capabilities', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.RemotingSinkAudioCapabilitySpec, false), nullable: false, minVersion: 0 },
        { name: 'video_capabilities', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.RemotingSinkVideoCapabilitySpec, false), nullable: false, minVersion: 0 },
        { name: 'friendly_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
