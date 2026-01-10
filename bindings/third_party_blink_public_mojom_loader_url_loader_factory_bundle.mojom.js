// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/url_loader_factory_bundle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};
var blink = blink || {};


// Struct: URLLoaderFactoryBundle
blink.mojom.mojom.URLLoaderFactoryBundleSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.URLLoaderFactoryBundle',
      packedSize: 40,
      fields: [
        { name: 'default_factory', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'scheme_specific_factories', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.InterfaceProxy, false), nullable: false, minVersion: 0 },
        { name: 'isolated_world_factories', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(url.mojom.OriginSpec, mojo.internal.InterfaceProxy, false), nullable: false, minVersion: 0 },
        { name: 'bypass_redirect_checks', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'local_resource_loader_config', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.LocalResourceLoaderConfigSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
