// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/translate.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};


// Struct: Language
lens.mojom.LanguageSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.Language',
      packedSize: 24,
      fields: [
        { name: 'language_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
