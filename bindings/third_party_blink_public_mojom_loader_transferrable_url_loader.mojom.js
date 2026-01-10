// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/transferrable_url_loader.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};


// Struct: TransferrableURLLoader
blink.mojom.TransferrableURLLoaderSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TransferrableURLLoader',
      packedSize: 48,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'url_loader', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.URLLoaderRemote), nullable: false, minVersion: 0 },
        { name: 'url_loader_client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.URLLoaderClientRemote), nullable: false, minVersion: 0 },
        { name: 'head', packedOffset: 24, packedBitOffset: 0, type: network.mojom.URLResponseHeadSpec, nullable: false, minVersion: 0 },
        { name: 'body', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
