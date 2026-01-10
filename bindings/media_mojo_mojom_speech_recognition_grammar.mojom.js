// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_grammar.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var url = url || {};


// Struct: SpeechRecognitionGrammar
media.mojom.mojom.SpeechRecognitionGrammarSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionGrammar',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'weight', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
