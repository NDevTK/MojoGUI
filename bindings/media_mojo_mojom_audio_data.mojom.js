// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_data.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.AudioDataS16Spec = { $: {} };

// Struct: AudioDataS16
mojo.internal.Struct(
    media.mojom.AudioDataS16Spec, 'media.mojom.AudioDataS16', [
      mojo.internal.StructField('channel_count', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sample_rate', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('frame_count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('data', 16, 0, mojo.internal.Array(mojo.internal.Int16, false), null, false, 0, undefined),
    ],
    [[0, 32]]);
