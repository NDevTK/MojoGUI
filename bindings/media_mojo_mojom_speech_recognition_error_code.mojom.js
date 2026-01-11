// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_error_code.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.SpeechRecognitionErrorCodeSpec = { $: mojo.internal.Enum() };

// Enum: SpeechRecognitionErrorCode
media.mojom.SpeechRecognitionErrorCode = {
  kNone: 0,
  kNoSpeech: 1,
  kAborted: 2,
  kAudioCapture: 3,
  kNetwork: 4,
  kNotAllowed: 5,
  kServiceNotAllowed: 6,
  kBadGrammar: 7,
  kLanguageNotSupported: 8,
  kNoMatch: 9,
  MinVersion: 9,
};
