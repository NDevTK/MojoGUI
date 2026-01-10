// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/shared_dictionary_isolation_key.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};
var url = url || {};

network.mojom.SharedDictionaryIsolationKeySpec = { $: {} };

// Struct: SharedDictionaryIsolationKey
mojo.internal.Struct(
    network.mojom.SharedDictionaryIsolationKeySpec, 'network.mojom.SharedDictionaryIsolationKey', [
      mojo.internal.StructField('frame_origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('top_frame_site', 8, 0, network.mojom.SchemefulSiteSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
