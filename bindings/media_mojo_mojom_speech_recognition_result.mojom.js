// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_result.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: SpeechRecognitionHypothesis
media.mojom.mojom.SpeechRecognitionHypothesisSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionHypothesis',
      packedSize: 24,
      fields: [
        { name: 'utterance', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'confidence', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: WebSpeechRecognitionResult
media.mojom.mojom.WebSpeechRecognitionResultSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.WebSpeechRecognitionResult',
      packedSize: 24,
      fields: [
        { name: 'hypotheses', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.SpeechRecognitionHypothesisSpec, false), nullable: false, minVersion: 0 },
        { name: 'is_provisional', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
