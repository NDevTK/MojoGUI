// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_result.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.SpeechRecognitionHypothesisSpec = { $: {} };
media.mojom.WebSpeechRecognitionResultSpec = { $: {} };

// Struct: SpeechRecognitionHypothesis
mojo.internal.Struct(
    media.mojom.SpeechRecognitionHypothesisSpec, 'media.mojom.SpeechRecognitionHypothesis', [
      mojo.internal.StructField('utterance', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('confidence', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebSpeechRecognitionResult
mojo.internal.Struct(
    media.mojom.WebSpeechRecognitionResultSpec, 'media.mojom.WebSpeechRecognitionResult', [
      mojo.internal.StructField('hypotheses', 0, 0, mojo.internal.Array(media.mojom.SpeechRecognitionHypothesisSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('is_provisional', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);
