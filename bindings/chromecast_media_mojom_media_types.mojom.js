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
chromecast.media.mojom.AudioCodecSpec = { $: mojo.internal.Enum() };

// Enum: ChannelLayout
chromecast.media.mojom.ChannelLayout = {
  kUnsupported: 0,
  kMono: 1,
  kStereo: 2,
  kSurround_5_1: 3,
  kBitstream: 4,
  kDiscrete: 5,
};
chromecast.media.mojom.ChannelLayoutSpec = { $: mojo.internal.Enum() };

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
chromecast.media.mojom.SampleFormatSpec = { $: mojo.internal.Enum() };

// Enum: StreamId
chromecast.media.mojom.StreamId = {
  kPrimary: 0,
  kSecondary: 1,
};
chromecast.media.mojom.StreamIdSpec = { $: mojo.internal.Enum() };

// Enum: EncryptionScheme
chromecast.media.mojom.EncryptionScheme = {
  kUnencrypted: 0,
  kAesCtr: 1,
  kAesCbc: 2,
};
chromecast.media.mojom.EncryptionSchemeSpec = { $: mojo.internal.Enum() };

// Struct: AudioConfig
chromecast.media.mojom.AudioConfigSpec = {
  $: {
    structSpec: {
      name: 'chromecast.media.mojom.AudioConfig',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: chromecast.media.mojom.StreamIdSpec, nullable: false, minVersion: 0 },
        { name: 'codec', packedOffset: 12, packedBitOffset: 0, type: chromecast.media.mojom.AudioCodecSpec, nullable: false, minVersion: 0 },
        { name: 'channel_layout', packedOffset: 16, packedBitOffset: 0, type: chromecast.media.mojom.ChannelLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'sample_format', packedOffset: 20, packedBitOffset: 0, type: chromecast.media.mojom.SampleFormatSpec, nullable: false, minVersion: 0 },
        { name: 'bytes_per_channel', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'channel_number', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'samples_per_second', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'extra_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'encryption_scheme', packedOffset: 36, packedBitOffset: 0, type: chromecast.media.mojom.EncryptionSchemeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
