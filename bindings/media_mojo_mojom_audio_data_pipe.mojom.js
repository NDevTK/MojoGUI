// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_data_pipe.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};

media.mojom.ReadWriteAudioDataPipeSpec = { $: {} };

// Struct: ReadWriteAudioDataPipe
mojo.internal.Struct(
    media.mojom.ReadWriteAudioDataPipeSpec, 'media.mojom.ReadWriteAudioDataPipe', [
      mojo.internal.StructField('shared_memory', 0, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('socket', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);
