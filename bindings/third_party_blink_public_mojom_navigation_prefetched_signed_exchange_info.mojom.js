// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/navigation/prefetched_signed_exchange_info.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var url = url || {};

blink.mojom.SHA256HashValueSpec = { $: {} };
blink.mojom.PrefetchedSignedExchangeInfoSpec = { $: {} };

// Struct: SHA256HashValue
mojo.internal.Struct(
    blink.mojom.SHA256HashValueSpec, 'blink.mojom.SHA256HashValue', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PrefetchedSignedExchangeInfo
mojo.internal.Struct(
    blink.mojom.PrefetchedSignedExchangeInfoSpec, 'blink.mojom.PrefetchedSignedExchangeInfo', [
      mojo.internal.StructField('outer_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('header_integrity', 8, 0, blink.mojom.SHA256HashValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('inner_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('inner_response', 24, 0, network.mojom.URLResponseHeadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('loader_factory_handle', 32, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 48]]);
