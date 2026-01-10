// Auto-generated MojoJS binding
// Source: chromium_src/url/mojom/scheme_host_port.mojom
// Module: url.mojom

'use strict';

// Module namespace
var url = url || {};
url.mojom = url.mojom || {};

url.mojom.SchemeHostPortSpec = { $: {} };

// Struct: SchemeHostPort
mojo.internal.Struct(
    url.mojom.SchemeHostPortSpec, 'url.mojom.SchemeHostPort', [
      mojo.internal.StructField('scheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port', 16, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 32]]);
