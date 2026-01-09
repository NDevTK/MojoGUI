// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_data_pipe.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: ReadWriteAudioDataPipe
media.mojom.ReadWriteAudioDataPipeSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ReadWriteAudioDataPipe',
      packedSize: 24,
      fields: [
        { name: 'shared_memory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'socket', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
