// Auto-generated MojoJS binding
// Source: chromium_src/url/mojom/origin.mojom
// Module: url.mojom

'use strict';

// Module namespace
var url = url || {};
url.mojom = url.mojom || {};
var mojo_base = mojo_base || {};

url.mojom.OriginSpec = { $: {} };

// Struct: Origin
mojo.internal.Struct(
    url.mojom.OriginSpec, 'url.mojom.Origin', [
      mojo.internal.StructField('scheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('nonce_if_opaque', 16, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('port', 24, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 40]]);
