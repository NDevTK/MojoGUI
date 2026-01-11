// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/source_location.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.SourceLocationSpec = { $: {} };

// Struct: SourceLocation
mojo.internal.Struct(
    network.mojom.SourceLocationSpec, 'network.mojom.SourceLocation', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('line', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('column', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);
