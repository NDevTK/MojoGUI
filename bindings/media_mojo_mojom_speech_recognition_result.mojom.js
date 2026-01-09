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
      packedSize: 24,
      fields: [
        { name: 'utterance', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'confidence', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'hypotheses', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'is_provisional', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
