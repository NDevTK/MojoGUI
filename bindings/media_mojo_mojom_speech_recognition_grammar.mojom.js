// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_grammar.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var url = url || {};

media.mojom.SpeechRecognitionGrammarSpec = { $: {} };

// Struct: SpeechRecognitionGrammar
mojo.internal.Struct(
    media.mojom.SpeechRecognitionGrammarSpec, 'media.mojom.SpeechRecognitionGrammar', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('weight', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);
