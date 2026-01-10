// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/transferrable_url_loader.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var services = services || {};
var url = url || {};

blink.mojom.TransferrableURLLoaderSpec = { $: {} };

// Struct: TransferrableURLLoader
mojo.internal.Struct(
    blink.mojom.TransferrableURLLoaderSpec, 'blink.mojom.TransferrableURLLoader', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('url_loader', 8, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderRemote), null, false, 0, undefined),
      mojo.internal.StructField('url_loader_client', 16, 0, mojo.internal.InterfaceRequest(network.mojom.URLLoaderClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('head', 24, 0, network.mojom.URLResponseHeadSpec, null, false, 0, undefined),
      mojo.internal.StructField('body', 32, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 48]]);
