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

// Struct: SpeechRecognitionError
media.mojom.SpeechRecognitionErrorSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionError',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: media.mojom.SpeechRecognitionErrorCodeSpec, nullable: false },
        { name: 'details', packedOffset: 8, packedBitOffset: 0, type: media.mojom.SpeechAudioErrorDetailsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
