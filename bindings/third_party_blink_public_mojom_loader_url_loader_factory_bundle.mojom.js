// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/url_loader_factory_bundle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: URLLoaderFactoryBundle
blink.mojom.URLLoaderFactoryBundleSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.URLLoaderFactoryBundle',
      packedSize: 48,
      fields: [
        { name: 'scheme_specific_factories', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'isolated_world_factories', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'local_resource_loader_config', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.LocalResourceLoaderConfigSpec, nullable: true },
        { name: 'default_factory', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'bypass_redirect_checks', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
