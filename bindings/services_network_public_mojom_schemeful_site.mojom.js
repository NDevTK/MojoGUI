// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/schemeful_site.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};

network.mojom.SchemefulSiteSpec = { $: {} };

// Struct: SchemefulSite
mojo.internal.Struct(
    network.mojom.SchemefulSiteSpec, 'network.mojom.SchemefulSite', [
      mojo.internal.StructField('site_as_origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);
