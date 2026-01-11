// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_error.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.SpeechAudioErrorDetailsSpec = { $: mojo.internal.Enum() };
media.mojom.SpeechRecognitionErrorSpec = { $: {} };

// Enum: SpeechAudioErrorDetails
media.mojom.SpeechAudioErrorDetails = {
  kNone: 0,
  kNoMic: 1,
};

// Struct: SpeechRecognitionError
mojo.internal.Struct(
    media.mojom.SpeechRecognitionErrorSpec, 'media.mojom.SpeechRecognitionError', [
      mojo.internal.StructField('code', 0, 0, media.mojom.SpeechRecognitionErrorCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('details', 8, 0, media.mojom.SpeechAudioErrorDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
