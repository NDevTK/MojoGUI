// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/media/mojom/media_types.mojom
// Module: chromecast.media.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.media = chromecast.media || {};
chromecast.media.mojom = chromecast.media.mojom || {};

chromecast.media.mojom.AudioCodecSpec = { $: mojo.internal.Enum() };
chromecast.media.mojom.ChannelLayoutSpec = { $: mojo.internal.Enum() };
chromecast.media.mojom.SampleFormatSpec = { $: mojo.internal.Enum() };
chromecast.media.mojom.StreamIdSpec = { $: mojo.internal.Enum() };
chromecast.media.mojom.EncryptionSchemeSpec = { $: mojo.internal.Enum() };
chromecast.media.mojom.AudioConfigSpec = { $: {} };

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
mojo.internal.Struct(
    chromecast.media.mojom.AudioConfigSpec, 'chromecast.media.mojom.AudioConfig', [
      mojo.internal.StructField('id', 0, 0, chromecast.media.mojom.StreamIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('codec', 8, 0, chromecast.media.mojom.AudioCodecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channel_layout', 16, 0, chromecast.media.mojom.ChannelLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sample_format', 24, 0, chromecast.media.mojom.SampleFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bytes_per_channel', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('channel_number', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('samples_per_second', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('extra_data', 48, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('encryption_scheme', 56, 0, chromecast.media.mojom.EncryptionSchemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 72]]);
