// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_error.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: SpeechAudioErrorDetails
media.mojom.SpeechAudioErrorDetails = {
  kNone: 0,
  kNoMic: 1,
};
media.mojom.SpeechAudioErrorDetailsSpec = { $: mojo.internal.Enum() };

// Struct: SpeechRecognitionError
media.mojom.SpeechRecognitionErrorSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionError',
      packedSize: 16,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: media.mojom.SpeechRecognitionErrorCodeSpec, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 4, packedBitOffset: 0, type: media.mojom.SpeechAudioErrorDetailsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
