// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/parsed_request_cookie.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: ParsedRequestCookie
network.mojom.mojom.ParsedRequestCookieSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ParsedRequestCookie',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
