// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/referrer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};
var services = services || {};

blink.mojom.ReferrerSpec = { $: {} };

// Struct: Referrer
mojo.internal.Struct(
    blink.mojom.ReferrerSpec, 'blink.mojom.Referrer', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('policy', 8, 0, network.mojom.ReferrerPolicySpec, 0, false, 0, undefined),
    ],
    [[0, 24]]);
