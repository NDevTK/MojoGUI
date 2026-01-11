// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/parsed_request_cookie.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.ParsedRequestCookieSpec = { $: {} };

// Struct: ParsedRequestCookie
mojo.internal.Struct(
    network.mojom.ParsedRequestCookieSpec, 'network.mojom.ParsedRequestCookie', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);
