// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_result.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: SpeechRecognitionHypothesis
media.mojom.SpeechRecognitionHypothesisSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionHypothesis',
      packedSize: 16,
      fields: [
        { name: 'confidence', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebSpeechRecognitionResult
media.mojom.WebSpeechRecognitionResultSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WebSpeechRecognitionResult',
      packedSize: 16,
      fields: [
        { name: 'is_provisional', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
