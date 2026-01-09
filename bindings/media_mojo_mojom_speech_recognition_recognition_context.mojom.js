// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_recognition_context.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: SpeechRecognitionPhrase
media.mojom.SpeechRecognitionPhraseSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionPhrase',
      packedSize: 16,
      fields: [
        { name: 'boost', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SpeechRecognitionRecognitionContext
media.mojom.SpeechRecognitionRecognitionContextSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognitionContext',
      packedSize: 16,
      fields: [
        { name: 'phrases', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
