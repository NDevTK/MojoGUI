// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/http_request_headers.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.HttpRequestHeaderKeyValuePairSpec = { $: {} };
network.mojom.HttpRequestHeadersSpec = { $: {} };

// Struct: HttpRequestHeaderKeyValuePair
mojo.internal.Struct(
    network.mojom.HttpRequestHeaderKeyValuePairSpec, 'network.mojom.HttpRequestHeaderKeyValuePair', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HttpRequestHeaders
mojo.internal.Struct(
    network.mojom.HttpRequestHeadersSpec, 'network.mojom.HttpRequestHeaders', [
      mojo.internal.StructField('headers', 0, 0, mojo.internal.Array(network.mojom.HttpRequestHeaderKeyValuePairSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
