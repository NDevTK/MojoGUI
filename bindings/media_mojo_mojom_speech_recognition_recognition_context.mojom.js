// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_recognition_context.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.SpeechRecognitionPhraseSpec = { $: {} };
media.mojom.SpeechRecognitionRecognitionContextSpec = { $: {} };

// Struct: SpeechRecognitionPhrase
mojo.internal.Struct(
    media.mojom.SpeechRecognitionPhraseSpec, 'media.mojom.SpeechRecognitionPhrase', [
      mojo.internal.StructField('phrase', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('boost', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SpeechRecognitionRecognitionContext
mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognitionContextSpec, 'media.mojom.SpeechRecognitionRecognitionContext', [
      mojo.internal.StructField('phrases', 0, 0, mojo.internal.Array(media.mojom.SpeechRecognitionPhraseSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
