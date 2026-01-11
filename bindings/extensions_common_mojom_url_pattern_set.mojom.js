// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/url_pattern_set.mojom
// Module: extensions.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};

extensions.mojom.URLPatternSpec = { $: {} };
extensions.mojom.URLPatternSetSpec = { $: {} };

// Struct: URLPattern
mojo.internal.Struct(
    extensions.mojom.URLPatternSpec, 'extensions.mojom.URLPattern', [
      mojo.internal.StructField('pattern', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('valid_schemes', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: URLPatternSet
mojo.internal.Struct(
    extensions.mojom.URLPatternSetSpec, 'extensions.mojom.URLPatternSet', [
      mojo.internal.StructField('patterns', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);
