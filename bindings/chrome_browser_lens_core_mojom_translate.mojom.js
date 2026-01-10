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
        { name: 'language_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
