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
      packedSize: 16,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
