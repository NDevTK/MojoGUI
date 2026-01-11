// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/url_loader_factory_bundle.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var network = network || {};
var url = url || {};

blink.mojom.URLLoaderFactoryBundleSpec = { $: {} };

// Struct: URLLoaderFactoryBundle
mojo.internal.Struct(
    blink.mojom.URLLoaderFactoryBundleSpec, 'blink.mojom.URLLoaderFactoryBundle', [
      mojo.internal.StructField('default_factory', 0, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('scheme_specific_factories', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), false), null, false, 0, undefined),
      mojo.internal.StructField('isolated_world_factories', 16, 0, mojo.internal.Map(url.mojom.OriginSpec.$, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), false), null, false, 0, undefined),
      mojo.internal.StructField('local_resource_loader_config', 24, 0, blink.mojom.LocalResourceLoaderConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('bypass_redirect_checks', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);
