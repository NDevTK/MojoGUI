// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_grammar.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: SpeechRecognitionGrammar
media.mojom.SpeechRecognitionGrammarSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionGrammar',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'weight', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
