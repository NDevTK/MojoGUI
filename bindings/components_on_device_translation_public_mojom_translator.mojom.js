// Auto-generated MojoJS binding
// Source: chromium_src/components/on_device_translation/public/mojom/translator.mojom
// Module: on_device_translation.mojom

'use strict';

// Module namespace
var on_device_translation = on_device_translation || {};
on_device_translation.mojom = on_device_translation.mojom || {};


// Interface: Translator
on_device_translation.mojom.TranslatorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_translation.mojom.Translator';
  }

  translate(input) {
    // Method: Translate
    return new Promise((resolve) => {
      // Call: Translate(input)
      resolve({});
    });
  }

  splitSentences(input) {
    // Method: SplitSentences
    return new Promise((resolve) => {
      // Call: SplitSentences(input)
      resolve({});
    });
  }

};

on_device_translation.mojom.TranslatorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
