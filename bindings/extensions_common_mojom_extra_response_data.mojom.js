// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/extra_response_data.mojom
// Module: extensions.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var blink = blink || {};

extensions.mojom.ExtraResponseDataSpec = { $: {} };

// Struct: ExtraResponseData
mojo.internal.Struct(
    extensions.mojom.ExtraResponseDataSpec, 'extensions.mojom.ExtraResponseData', [
      mojo.internal.StructField('blobs', 0, 0, mojo.internal.Array(blink.mojom.SerializedBlobSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
