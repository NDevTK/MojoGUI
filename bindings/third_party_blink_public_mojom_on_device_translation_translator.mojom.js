// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/on_device_translation/translator.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: Translator
blink.mojom.TranslatorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.Translator';
  }

  translate(input, pending_responder) {
    // Method: Translate
    // Call: Translate(input, pending_responder)
  }

  translateStreaming(input, pending_responder) {
    // Method: TranslateStreaming
    // Call: TranslateStreaming(input, pending_responder)
  }

};

blink.mojom.TranslatorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
