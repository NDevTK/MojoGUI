// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/media/mojom/media_types.mojom
// Module: chromecast.media.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.media = chromecast.media || {};
chromecast.media.mojom = chromecast.media.mojom || {};


// Enum: AudioCodec
chromecast.media.mojom.AudioCodec = {
  kAudioCodecUnknown: 0,
  kCodecAAC: 1,
  kCodecMP3: 2,
  kCodecPCM: 3,
  kCodecPCM_S16BE: 4,
  kCodecVorbis: 5,
  kCodecOpus: 6,
  kCodecEAC3: 7,
  kCodecAC3: 8,
  kCodecDTS: 9,
  kCodecDTSXP2: 10,
  kCodecDTSE: 11,
  kCodecFLAC: 12,
  kCodecMpegHAudio: 13,
};

// Enum: ChannelLayout
chromecast.media.mojom.ChannelLayout = {
  kUnsupported: 0,
  kMono: 1,
  kStereo: 2,
  kSurround_5_1: 3,
  kBitstream: 4,
  kDiscrete: 5,
};

// Enum: SampleFormat
chromecast.media.mojom.SampleFormat = {
  kUnknownSampleFormat: 0,
  kSampleFormatU8: 1,
  kSampleFormatS16: 2,
  kSampleFormatS32: 3,
  kSampleFormatF32: 4,
  kSampleFormatPlanarS16: 5,
  kSampleFormatPlanarF32: 6,
  kSampleFormatPlanarS32: 7,
  kSampleFormatS24: 8,
  kSampleFormatPlanarU8: 9,
};

// Enum: StreamId
chromecast.media.mojom.StreamId = {
  kPrimary: 0,
  kSecondary: 1,
};

// Enum: EncryptionScheme
chromecast.media.mojom.EncryptionScheme = {
  kUnencrypted: 0,
  kAesCtr: 1,
  kAesCbc: 2,
};

// Struct: AudioConfig
chromecast.media.mojom.AudioConfigSpec = {
  $: {
    structSpec: {
      name: 'chromecast.media.mojom.AudioConfig',
      packedSize: 72,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: chromecast.media.mojom.StreamIdSpec, nullable: false },
        { name: 'codec', packedOffset: 16, packedBitOffset: 0, type: chromecast.media.mojom.AudioCodecSpec, nullable: false },
        { name: 'channel_layout', packedOffset: 24, packedBitOffset: 0, type: chromecast.media.mojom.ChannelLayoutSpec, nullable: false },
        { name: 'sample_format', packedOffset: 32, packedBitOffset: 0, type: chromecast.media.mojom.SampleFormatSpec, nullable: false },
        { name: 'bytes_per_channel', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'channel_number', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'samples_per_second', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'extra_data', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'encryption_scheme', packedOffset: 64, packedBitOffset: 0, type: chromecast.media.mojom.EncryptionSchemeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
