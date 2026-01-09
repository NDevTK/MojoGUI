// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_data.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: AudioDataS16
media.mojom.AudioDataS16Spec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDataS16',
      packedSize: 32,
      fields: [
        { name: 'channel_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'sample_rate', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'frame_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
