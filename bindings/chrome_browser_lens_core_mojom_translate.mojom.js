// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/translate.mojom
// Module: lens.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};

lens.mojom.LanguageSpec = { $: {} };

// Struct: Language
mojo.internal.Struct(
    lens.mojom.LanguageSpec, 'lens.mojom.Language', [
      mojo.internal.StructField('language_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);
