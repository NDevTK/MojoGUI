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
      packedSize: 24,
      fields: [
        { name: 'phrase', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'boost', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'phrases', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.SpeechRecognitionPhraseSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
