// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/transferrable_url_loader.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: TransferrableURLLoader
blink.mojom.TransferrableURLLoaderSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TransferrableURLLoader',
      packedSize: 40,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'head', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'body', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'url_loader', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'url_loader_client', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
