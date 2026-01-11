// Auto-generated MojoJS binding
// Source: chromium_src/components/variations/variations.mojom
// Module: variations.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var variations = variations || {};
variations.mojom = variations.mojom || {};

variations.mojom.GoogleWebVisibilitySpec = { $: mojo.internal.Enum() };
variations.mojom.VariationsHeadersSpec = { $: {} };

// Enum: GoogleWebVisibility
variations.mojom.GoogleWebVisibility = {
  ANY: 0,
  FIRST_PARTY: 1,
};

// Struct: VariationsHeaders
mojo.internal.Struct(
    variations.mojom.VariationsHeadersSpec, 'variations.mojom.VariationsHeaders', [
      mojo.internal.StructField('headers_map', 0, 0, mojo.internal.Map(variations.mojom.GoogleWebVisibilitySpec.$, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
