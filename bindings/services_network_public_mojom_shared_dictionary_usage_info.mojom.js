// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/shared_dictionary_usage_info.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.SharedDictionaryUsageInfoSpec = { $: {} };

// Struct: SharedDictionaryUsageInfo
mojo.internal.Struct(
    network.mojom.SharedDictionaryUsageInfoSpec, 'network.mojom.SharedDictionaryUsageInfo', [
      mojo.internal.StructField('isolation_key', 0, 0, network.mojom.SharedDictionaryIsolationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('total_size_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);
