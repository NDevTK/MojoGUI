// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/site_for_cookies.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};

network.mojom.SiteForCookiesSpec = { $: {} };

// Struct: SiteForCookies
mojo.internal.Struct(
    network.mojom.SiteForCookiesSpec, 'network.mojom.SiteForCookies', [
      mojo.internal.StructField('site', 0, 0, network.mojom.SchemefulSiteSpec, null, false, 0, undefined),
      mojo.internal.StructField('schemefully_same', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);
